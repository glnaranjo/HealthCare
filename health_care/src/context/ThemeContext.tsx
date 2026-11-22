import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const THEME_STORAGE_KEY = 'healthcare_theme_pref';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Helper to reliably apply theme to documentElement, body, and HTML attributes
function applyThemeToDom(theme: Theme) {
  const root = document.documentElement;
  const body = document.body;

  if (theme === 'dark') {
    root.classList.add('dark');
    if (body) {
      body.classList.add('dark');
    }
    root.setAttribute('data-theme', 'dark');
    root.style.colorScheme = 'dark';
  } else {
    root.classList.remove('dark');
    if (body) {
      body.classList.remove('dark');
    }
    root.setAttribute('data-theme', 'light');
    root.style.colorScheme = 'light';
  }
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(() => {
    try {
      const stored = localStorage.getItem(THEME_STORAGE_KEY);
      if (stored === 'light' || stored === 'dark') {
        applyThemeToDom(stored);
        return stored;
      }
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        applyThemeToDom('dark');
        return 'dark';
      }
    } catch {
      // Fallback in case of restricted environment
    }
    applyThemeToDom('light');
    return 'light';
  });

  useEffect(() => {
    applyThemeToDom(theme);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch {
      // Ignore storage errors
    }
  }, [theme]);

  const toggleTheme = () => {
    setThemeState((prev) => {
      const nextTheme = prev === 'light' ? 'dark' : 'light';
      applyThemeToDom(nextTheme);
      try {
        localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
      } catch {
        // Ignore
      }
      return nextTheme;
    });
  };

  const setTheme = (newTheme: Theme) => {
    applyThemeToDom(newTheme);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, newTheme);
    } catch {
      // Ignore
    }
    setThemeState(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
