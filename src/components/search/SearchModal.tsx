import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { searchGuides } from '../../utils/search';
import { UrgencyBadge } from '../ui/UrgencyBadge';
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

  const suggestedQueries = [
    'What should I do if someone is choking?',
    'What should I do if someone gets burned?',
    'How do I recognize a stroke?',
    'Someone is unconscious and not breathing',
    'Severe bleeding won’t stop',
    'Child swallowed household cleaning chemical',
    'Someone having an epileptic seizure',
  ];

  const results = searchGuides(query);

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

  const handleSelectArticle = (slug: string) => {
    navigate(`/guide/${slug}`);
    onClose();
    setQuery('');
  };

  const handleSuggestedClick = (text: string) => {
    setQuery(text);
    inputRef.current?.focus();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-6 md:p-10">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div 
        role="dialog"
        aria-modal="true"
        aria-labelledby="search-modal-title"
        className="relative bg-white w-full max-w-2xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden z-10 flex flex-col max-h-[85vh] animate-in fade-in zoom-in-95 duration-150"
      >
        {/* Header & Search Input */}
        <div className="p-4 sm:p-5 border-b border-slate-200 bg-slate-50/50">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-700 uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-brand-600" />
              <span id="search-modal-title">What should I do if...?</span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-200 rounded-lg transition"
              aria-label="Close search"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Describe situation (e.g. someone is choking, burned, fainting)..."
              className="w-full pl-11 pr-10 py-3 rounded-2xl bg-white border border-slate-300 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 text-slate-900 placeholder:text-slate-400 text-sm font-medium shadow-xs"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
                aria-label="Clear input"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Quick Suggestions Pills */}
          <div className="mt-3 flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            <span className="text-[11px] font-semibold text-slate-400 flex items-center gap-1 flex-shrink-0">
              <HelpCircle className="w-3 h-3" /> Try:
            </span>
            {suggestedQueries.slice(0, 4).map((suggestion, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleSuggestedClick(suggestion)}
                className="text-[11px] font-medium bg-white hover:bg-brand-50 hover:text-brand-700 text-slate-600 border border-slate-200 hover:border-brand-300 px-2.5 py-1 rounded-lg flex-shrink-0 transition truncate max-w-[200px]"
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>

        {/* Results List */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-3 flex-1">
          {results.length > 0 ? (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-500 px-1 mb-2">
                <span>Matching Health & Emergency Protocols</span>
                <span>{results.length} found</span>
              </div>

              {results.map((article) => (
                <button
                  key={article.id}
                  onClick={() => handleSelectArticle(article.slug)}
                  className="w-full text-left p-3.5 sm:p-4 rounded-2xl bg-white hover:bg-brand-50/50 border border-slate-200 hover:border-brand-300 transition duration-150 group flex items-start justify-between gap-3"
                >
                  <div className="space-y-1.5 flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <UrgencyBadge urgency={article.urgency} />
                      <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                        {article.category.replace('-', ' ')}
                      </span>
                    </div>

                    <h4 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-brand-600 transition leading-snug">
                      {article.title}
                    </h4>

                    <p className="text-xs text-slate-600 line-clamp-1">
                      {article.shortDescription}
                    </p>
                  </div>

                  <div className="flex flex-col items-end justify-between h-full flex-shrink-0 pt-1">
                    <div className="flex items-center gap-1 text-[11px] text-slate-400 font-medium">
                      <Clock className="w-3 h-3" />
                      <span>{article.readingTimeMinutes}m</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-brand-600 group-hover:translate-x-1 transition mt-4" />
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 px-4 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <p className="text-sm font-bold text-slate-900">
                No matching protocol found for "{query}"
              </p>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                Try using simple keywords like "choking", "burn", "cpr", "bleeding", "fever", or "seizure".
              </p>
            </div>
          )}
        </div>

        {/* Footer info notice */}
        <div className="p-3 px-6 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500">
          <span>Local database search • No AI diagnostic generation</span>
          <kbd className="hidden sm:inline-block bg-white border border-slate-200 px-1.5 py-0.5 rounded shadow-2xs font-mono">
            ESC to close
          </kbd>
        </div>
      </div>
    </div>
  );
}

