import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language } from '../types';
import { TRANSLATIONS, TranslationKey } from '../data/translations';

interface LanguageContextType {
  language: Language;
  hasSelectedLanguage: boolean;
  isLanguageModalOpen: boolean;
  setLanguage: (lang: Language) => void;
  openLanguageSelector: () => void;
  closeLanguageSelector: () => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = 'healthcare_selected_language';

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'es' || saved === 'en') {
      return saved;
    }
    // Default fallback based on navigator, but modal will prompt user if not explicitly saved
    const browserLang = navigator.language.toLowerCase();
    return browserLang.startsWith('es') ? 'es' : 'en';
  });

  const [hasSelectedLanguage, setHasSelectedLanguage] = useState<boolean>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved === 'es' || saved === 'en';
  });

  const [isLanguageModalOpen, setIsLanguageModalOpen] = useState<boolean>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    // If not saved previously, show the mandatory selection modal immediately
    return !(saved === 'es' || saved === 'en');
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    setHasSelectedLanguage(true);
    setIsLanguageModalOpen(false);
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
  };

  const openLanguageSelector = () => {
    setIsLanguageModalOpen(true);
  };

  const closeLanguageSelector = () => {
    if (hasSelectedLanguage) {
      setIsLanguageModalOpen(false);
    }
  };

  const t = (key: TranslationKey): string => {
    const dict = TRANSLATIONS[language] || TRANSLATIONS.en;
    return (dict as Record<string, string>)[key] || TRANSLATIONS.en[key] || String(key);
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider
      value={{
        language,
        hasSelectedLanguage,
        isLanguageModalOpen,
        setLanguage,
        openLanguageSelector,
        closeLanguageSelector,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

