import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { CountryProvider } from './context/CountryContext';
import { LanguageProvider } from './context/LanguageContext';
import { ScrollToTop } from './components/layout/ScrollToTop';
import { Layout } from './components/layout/Layout';
import { HomePage } from './pages/HomePage';
import { CategoryPage } from './pages/CategoryPage';
import { ArticlePage } from './pages/ArticlePage';
import { SearchPage } from './pages/SearchPage';
import { QuizPage } from './pages/QuizPage';
import { DisclaimerPage } from './pages/DisclaimerPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';
import { VitalSignsPage } from './pages/VitalSignsPage';
import { KitChecklistPage } from './pages/KitChecklistPage';
import { SearchModal } from './components/search/SearchModal';
import { LanguageSelectModal } from './components/layout/LanguageSelectModal';

export default function App() {
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  // Global keyboard shortcut to open search with '/' or 'Cmd/Ctrl + K'
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.key === '/' || ((e.metaKey || e.ctrlKey) && e.key === 'k')) && 
          document.activeElement?.tagName !== 'INPUT' && 
          document.activeElement?.tagName !== 'TEXTAREA') {
        e.preventDefault();
        setSearchModalOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <LanguageProvider>
      <CountryProvider>
        <ScrollToTop />
        <Layout onOpenSearch={() => setSearchModalOpen(true)}>
          <Routes>
            <Route path="/" element={<HomePage onOpenSearch={() => setSearchModalOpen(true)} />} />
            
            {/* Main 6 Categories Dedicated Routes */}
            <Route path="/emergencies" element={<CategoryPage forcedCategory="emergencies" />} />
            <Route path="/accidents" element={<CategoryPage forcedCategory="accidents" />} />
            <Route path="/home-health" element={<CategoryPage forcedCategory="home-health" />} />
            <Route path="/warning-signs" element={<CategoryPage forcedCategory="warning-signs" />} />
            <Route path="/preparedness" element={<CategoryPage forcedCategory="preparedness" />} />
            <Route path="/prevention" element={<CategoryPage forcedCategory="prevention" />} />
            <Route path="/category/:categorySlug" element={<CategoryPage />} />

            {/* Standardized Article / Tutorial Route */}
            <Route path="/guide/:slug" element={<ArticlePage />} />

            {/* Interactive "What should I do if...?" Search Page */}
            <Route path="/search" element={<SearchPage />} />

            {/* Interactive Vital Signs Reference Guide */}
            <Route path="/vital-signs" element={<VitalSignsPage />} />

            {/* Interactive First Aid Kit Checklist */}
            <Route path="/kit-checklist" element={<KitChecklistPage />} />

            {/* Interactive Educational Quiz */}
            <Route path="/quiz" element={<QuizPage />} />

            {/* Medical Scope Disclaimer & Sources */}
            <Route path="/disclaimer" element={<DisclaimerPage />} />

            {/* Institutional & Legal Pages */}
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/contact" element={<ContactPage />} />

            {/* Catch-all */}
            <Route path="*" element={<HomePage onOpenSearch={() => setSearchModalOpen(true)} />} />
          </Routes>
        </Layout>

        {/* Global Quick Search Modal */}
        <SearchModal 
          isOpen={searchModalOpen} 
          onClose={() => setSearchModalOpen(false)} 
        />

        {/* Mandatory First-Entry Language Selector & Manual Switcher */}
        <LanguageSelectModal />
      </CountryProvider>
    </LanguageProvider>
  );
}
