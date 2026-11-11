import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { searchGuides } from '../../utils/search';
import { UrgencyBadge } from '../ui/UrgencyBadge';
import { useLanguage } from '../../context/LanguageContext';
import { 
  Search, 
  X, 
  Clock, 
  ArrowRight, 
  Sparkles, 
  HelpCircle,
  AlertTriangle
} from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const { language, t } = useLanguage();

  const suggestedQueries = language === 'es' 
    ? [
        '¿Qué hago si alguien se está atragantando?',
        '¿Qué hago ante una quemadura?',
        '¿Cómo reconocer un ACV / derrame cerebral?',
        'Alguien está inconsciente y no respira (RCP)',
        'Hemorragia severa que no se detiene',
        'Un niño ingirió lavandina o químico de limpieza',
        'Primeros auxilios ante una convulsión epiléptica',
      ]
    : [
        'What should I do if someone is choking?',
        'What should I do if someone gets burned?',
        'How do I recognize a stroke?',
        'Someone is unconscious and not breathing',
        'Severe bleeding won’t stop',
        'Child swallowed household cleaning chemical',
        'Someone having an epileptic seizure',
      ];

  const results = searchGuides(query, language);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSelectResult = (slug: string) => {
    navigate(`/guide/${slug}`);
    onClose();
    setQuery('');
  };

  const handleSelectSuggested = (suggested: string) => {
    setQuery(suggested);
  };

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 md:p-20 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-150 flex items-start justify-center"
      role="dialog"
      aria-modal="true"
    >
      <div 
        className="bg-white rounded-3xl max-w-2xl w-full border border-slate-200 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-150"
      >
        
        {/* Search Input Bar */}
        <div className="relative border-b border-slate-200 p-4 sm:p-6 bg-white">
          <div className="flex items-center gap-3">
            <Search className="w-6 h-6 text-brand-600 flex-shrink-0" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t('searchModalPlaceholder')}
              className="w-full text-base sm:text-lg text-slate-900 placeholder:text-slate-400 focus:outline-none bg-transparent"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="p-1 rounded-md text-slate-400 hover:text-slate-600 hover:bg-slate-100"
                aria-label="Clear query"
              >
                <X className="w-5 h-5" />
              </button>
            )}
            <button
              onClick={onClose}
              className="hidden sm:inline-flex text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-600 px-2 py-1 rounded-md"
            >
              ESC
            </button>
          </div>
        </div>

        {/* Results Area */}
        <div className="max-h-[60vh] overflow-y-auto p-4 sm:p-6">
          {query.trim().length > 0 ? (
            results.length > 0 ? (
              <div className="space-y-3">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  {language === 'es' ? 'Protocolos Clínicos Coincidentes' : 'Matching Clinical Protocols'} ({results.length})
                </p>
                {results.map((article) => (
                  <button
                    key={article.id}
                    onClick={() => handleSelectResult(article.slug)}
                    className="w-full text-left p-4 rounded-2xl border border-slate-200/80 hover:border-brand-500 hover:bg-brand-50/40 transition group flex items-start justify-between gap-4"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <UrgencyBadge urgency={article.urgency} />
                        <span className="text-xs font-semibold text-slate-500 capitalize">
                          {article.category.replace('-', ' ')}
                        </span>
                      </div>
                      <h4 className="text-base font-bold text-slate-900 group-hover:text-brand-700 transition">
                        {article.title}
                      </h4>
                      <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                        {article.shortDescription}
                      </p>
                    </div>

                    <div className="flex flex-col items-end justify-between self-stretch text-slate-400 group-hover:text-brand-600">
                      <div className="flex items-center gap-1 text-[11px] font-medium">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{article.readingTimeMinutes}m</span>
                      </div>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
                    </div>
                  </button>
                ))}
              </div>
            ) : (
              <div className="text-center py-10 space-y-3">
                <AlertTriangle className="w-8 h-8 text-amber-500 mx-auto" />
                <h4 className="text-base font-bold text-slate-800">
                  {t('searchModalNoResults')}
                </h4>
                <p className="text-xs text-slate-500 max-w-sm mx-auto">
                  {language === 'es'
                    ? 'Intenta con palabras clave directas como "rcp", "quemadura", "sangrado", "atragantamiento" o "veneno".'
                    : 'Try simple keywords like "cpr", "burn", "choking", "bleeding", or "poison".'}
                </p>
              </div>
            )
          ) : (
            /* Empty state with suggested questions */
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-brand-600" />
                <span>{t('searchModalSuggestions')}</span>
              </div>
              <div className="flex flex-col gap-2">
                {suggestedQueries.map((suggested, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectSuggested(suggested)}
                    className="text-left text-xs sm:text-sm text-slate-700 hover:text-brand-700 hover:bg-slate-100/80 px-3.5 py-2.5 rounded-xl transition flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-2.5">
                      <HelpCircle className="w-4 h-4 text-slate-400 group-hover:text-brand-600" />
                      <span>{suggested}</span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-brand-600 transition" />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <span className="flex items-center gap-1.5 font-medium">
            <span>HealthCare Local NLP Search • Instant Indexing</span>
          </span>
          <button
            onClick={onClose}
            className="text-slate-600 hover:text-slate-900 font-bold px-3 py-1 rounded-lg hover:bg-slate-200 transition"
          >
            {t('searchModalClose')}
          </button>
        </div>

      </div>
    </div>
  );
}
