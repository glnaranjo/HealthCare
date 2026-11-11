import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { searchGuides } from '../utils/search';
import { ArticleCard } from '../components/ui/ArticleCard';
import { 
  Search, 
  X, 
  HelpCircle, 
  ChevronRight, 
  CheckCircle2, 
  AlertTriangle 
} from 'lucide-react';

export function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const [query, setQuery] = useState(initialQuery);

  const suggestedSituations = [
    { label: 'Someone is choking on food', query: 'What should I do if someone is choking?' },
    { label: 'Someone suffered a severe burn', query: 'What should I do if someone gets burned?' },
    { label: 'Recognizing acute stroke (BE-FAST)', query: 'How do I recognize a stroke?' },
    { label: 'Someone collapsed and is unconscious', query: 'Someone is unconscious and not breathing' },
    { label: 'Continuous heavy bleeding from a wound', query: 'Severe bleeding won\'t stop' },
    { label: 'Person having an active seizure', query: 'Someone having an epileptic seizure' },
    { label: 'Suspected chemical or bleach ingestion', query: 'Child swallowed household cleaning chemical' },
    { label: 'Recognizing signs of severe dehydration', query: 'Signs of severe dehydration' },
  ];

  const results = searchGuides(query);

  useEffect(() => {
    if (query.trim()) {
      setSearchParams({ q: query });
    } else {
      setSearchParams({});
    }
  }, [query, setSearchParams]);

  const handleApplySuggestion = (suggestionQuery: string) => {
    setQuery(suggestionQuery);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10">
      
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-slate-500">
        <Link to="/" className="hover:text-brand-600 transition">Home</Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <span className="text-slate-900 font-bold">What should I do if...?</span>
      </nav>

      {/* Main Search Header */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-6">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-700 bg-brand-50 px-3 py-1 rounded-full border border-brand-200">
            Natural Language Quick Access
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
            What should I do if...?
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
            Describe the symptom or situation in plain words. Our verified local first aid directory will instantly retrieve the appropriate clinical response protocol.
          </p>
        </div>

        {/* Large Natural Language Search Field */}
        <div className="relative max-w-3xl">
          <Search className="w-6 h-6 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="e.g. What should I do if someone faints or gets burned?"
            className="w-full pl-13 pr-12 py-4 rounded-2xl bg-slate-50 border border-slate-300 focus:bg-white focus:outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 text-slate-900 placeholder:text-slate-400 text-base font-medium shadow-xs transition"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1.5"
              aria-label="Clear search"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Suggested Situations Chips */}
        <div className="space-y-2 pt-2">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
            <HelpCircle className="w-3.5 h-3.5 text-brand-600" />
            Frequently Searched Situations:
          </p>
          <div className="flex flex-wrap gap-2">
            {suggestedSituations.map((sit, idx) => (
              <button
                key={idx}
                onClick={() => handleApplySuggestion(sit.query)}
                className={`text-xs px-3.5 py-1.5 rounded-xl font-semibold border transition duration-150 ${
                  query === sit.query
                    ? 'bg-brand-600 text-white border-brand-600 shadow-xs'
                    : 'bg-white hover:bg-brand-50 hover:text-brand-700 text-slate-700 border-slate-200 hover:border-brand-300'
                }`}
              >
                {sit.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="space-y-6">
        <div className="flex items-center justify-between border-b border-slate-200 pb-3">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-brand-600" />
            <h2 className="text-lg font-bold text-slate-900">
              {query ? `Search Results for "${query}"` : 'All Available Emergency & Health Protocols'}
            </h2>
          </div>
          <span className="text-xs font-semibold text-slate-500">
            {results.length} {results.length === 1 ? 'protocol' : 'protocols'} found
          </span>
        </div>

        {results.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center max-w-lg mx-auto space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mx-auto">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              No exact guide found for "{query}"
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Try searching with general keywords such as <strong>cpr</strong>, <strong>choking</strong>, <strong>burn</strong>, <strong>bleeding</strong>, or <strong>stroke</strong>.
            </p>
            <button
              onClick={() => setQuery('')}
              className="text-xs font-bold text-brand-600 hover:underline pt-2"
            >
              Clear Search & Show All Protocols
            </button>
          </div>
        )}
      </div>

      {/* Accuracy & Safety Assurance Banner */}
      <div className="bg-slate-100 p-4 rounded-2xl border border-slate-200 text-xs text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
        <div>
          <strong>Medical Accuracy Safeguard:</strong> This search queries verified local international first aid manuals only. It does not use generative AI to improvise clinical advice.
        </div>
        <Link to="/disclaimer" className="text-brand-600 font-bold hover:underline flex-shrink-0">
          Review Guidelines &rarr;
        </Link>
      </div>

    </div>
  );
}
