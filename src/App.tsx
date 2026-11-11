import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { CountryProvider } from './context/CountryContext';
import { Layout } from './components/layout/Layout';
import { HomePage } from './pages/HomePage';
import { CategoryPage } from './pages/CategoryPage';
import { ArticlePage } from './pages/ArticlePage';
import { SearchPage } from './pages/SearchPage';
import { SearchModal } from './components/search/SearchModal';
import { BookOpen } from 'lucide-react';

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
    <CountryProvider>
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

          {/* Placeholders for Quiz and Legal to be completed in upcoming parts */}
          <Route path="/quiz" element={<PlaceholderPage title="First Aid Knowledge Quiz" description="Interactive clinical scenario quizzes based on WHO and Red Cross guidelines." />} />
          <Route path="/disclaimer" element={<PlaceholderPage title="Medical Scope Disclaimer" description="Official educational scope, non-diagnostic statement, and international guidance standards." />} />
          <Route path="/privacy" element={<PlaceholderPage title="Privacy Policy" description="HealthCare does not collect personal medical data or use advertising cookies." />} />
          <Route path="/terms" element={<PlaceholderPage title="Terms of Educational Use" description="HealthCare is an open educational platform for public health and safety." />} />
          <Route path="/contact" element={<PlaceholderPage title="Contact & Feedback" description="For non-emergency feedback, suggestions, and medical curriculum reviews." />} />

          {/* Catch-all */}
          <Route path="*" element={<HomePage onOpenSearch={() => setSearchModalOpen(true)} />} />
        </Routes>
      </Layout>

      {/* Global Quick Search Modal */}
      <SearchModal 
        isOpen={searchModalOpen} 
        onClose={() => setSearchModalOpen(false)} 
      />
    </CountryProvider>
  );
}

function PlaceholderPage({ title, description }: { title: string; description: string }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
      <div className="max-w-xl mx-auto bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
        <div className="w-12 h-12 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center mx-auto">
          <BookOpen className="w-6 h-6 stroke-[2]" />
        </div>
        <h1 className="text-2xl font-bold text-slate-900">{title}</h1>
        <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-50 text-brand-700 border border-brand-200">
          Module ready for Part 7 integration
        </span>
      </div>
    </div>
  );
}
