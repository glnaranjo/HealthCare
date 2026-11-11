import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getArticleBySlug, getRelatedArticles } from '../utils/search';
import { UrgencyBadge } from '../components/ui/UrgencyBadge';
import { ArticleCard } from '../components/ui/ArticleCard';
import { EmergencyStressMode } from '../components/tools/EmergencyStressMode';
import { useCountry } from '../context/CountryContext';
import { 
  ChevronRight, 
  Clock, 
  AlertTriangle, 
  CheckCircle2, 
  XCircle, 
  PhoneCall, 
  BookOpen, 
  Share2, 
  Printer, 
  ShieldCheck, 
  Calendar,
  AlertCircle,
  Zap
} from 'lucide-react';

export function ArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const { selectedCountry } = useCountry();
  const [stressModeOpen, setStressModeOpen] = useState(false);

  const article = getArticleBySlug(slug || '');

  // Scroll to top when article slug changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  if (!article) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <div className="w-16 h-16 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mx-auto mb-4">
          <AlertCircle className="w-8 h-8" />
        </div>
        <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Guide Not Found</h1>
        <p className="text-slate-600 text-sm mb-6 max-w-md mx-auto">
          The educational guide you requested could not be found or may have been reorganized.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-bold px-6 py-2.5 rounded-xl transition text-sm"
        >
          Return to Platform Home
        </Link>
      </div>
    );
  }

  const related = getRelatedArticles(article.relatedArticles);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.shortDescription,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Guide link copied to clipboard!');
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-slate-500">
        <Link to="/" className="hover:text-brand-600 transition">Home</Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <Link to={`/${article.category}`} className="hover:text-brand-600 transition capitalize">
          {article.category.replace('-', ' ')}
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <span className="text-slate-900 font-bold truncate max-w-[200px] sm:max-w-xs">{article.title}</span>
      </nav>

      {/* TOP IMMEDIATE CRITICAL SAFETY NOTICE (Never hidden behind tabs/accordions) */}
      <div className={`p-4 sm:p-5 rounded-2xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xs ${
        article.urgency === 'critical' 
          ? 'bg-red-50 border-red-300 text-red-900' 
          : 'bg-amber-50 border-amber-300 text-amber-900'
      }`}>
        <div className="flex items-start gap-3">
          <AlertTriangle className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
            article.urgency === 'critical' ? 'text-red-600 animate-pulse' : 'text-amber-600'
          }`} />
          <div className="text-xs sm:text-sm">
            <strong className="font-bold block mb-0.5">
              Immediate Safety Priority:
            </strong>
            <p className="leading-snug">
              If the person is unresponsive, turning blue, or bleeding profusely, call emergency services immediately before reading details.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 flex-shrink-0 w-full sm:w-auto">
          <button
            onClick={() => setStressModeOpen(true)}
            className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-black text-amber-300 font-extrabold px-4 py-2 rounded-xl text-xs transition duration-150 shadow border border-slate-700 hover:border-amber-400"
            title="Switch to ultra-high-contrast step sequence for active emergencies"
          >
            <Zap className="w-3.5 h-3.5 fill-current" />
            <span>Emergency Action Mode</span>
          </button>

          <a
            href={`tel:${selectedCountry.ambulance || selectedCountry.generalEmergency}`}
            className="inline-flex items-center justify-center gap-2 bg-emergency-600 hover:bg-emergency-700 text-white font-bold px-4 py-2 rounded-xl text-xs transition duration-150 shadow"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Call {selectedCountry.generalEmergency} ({selectedCountry.countryName})</span>
          </a>
        </div>
      </div>

      {/* Article Header & Metadata */}
      <header className="space-y-4 border-b border-slate-200 pb-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <UrgencyBadge urgency={article.urgency} />
            <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full capitalize">
              {article.category.replace('-', ' ')}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleShare}
              className="p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition"
              title="Share this emergency protocol"
              aria-label="Share guide"
            >
              <Share2 className="w-4 h-4" />
            </button>
            <button
              onClick={handlePrint}
              className="p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition"
              title="Print emergency sheet"
              aria-label="Print guide"
            >
              <Printer className="w-4 h-4" />
            </button>
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          {article.title}
        </h1>

        <p className="text-lg text-slate-600 leading-relaxed font-normal">
          {article.summary}
        </p>

        <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-500 pt-2">
          <div className="flex items-center gap-1.5 font-medium">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            <span>Estimated reading time: <strong>{article.readingTimeMinutes} min</strong></span>
          </div>
          <div className="flex items-center gap-1.5 font-medium">
            <Calendar className="w-3.5 h-3.5 text-slate-400" />
            <span>Last medically reviewed: <strong>{article.lastReviewed}</strong></span>
          </div>
          <div className="flex items-center gap-1.5 font-medium text-brand-700">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{article.reviewedBy}</span>
          </div>
        </div>
      </header>

      {/* SECTION 1: WHAT IS IT? */}
      <section className="space-y-3 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-2xs">
        <div className="flex items-center gap-2 text-slate-900 font-bold text-lg sm:text-xl">
          <BookOpen className="w-5 h-5 text-brand-600" />
          <h2>What is it?</h2>
        </div>
        <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
          {article.whatIsIt}
        </p>
      </section>

      {/* SECTION 2: HOW TO RECOGNIZE IT */}
      <section className="space-y-4 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-2xs">
        <div className="flex items-center gap-2 text-slate-900 font-bold text-lg sm:text-xl">
          <AlertCircle className="w-5 h-5 text-amber-600" />
          <h2>How to recognize it (Signs & Symptoms)</h2>
        </div>
        <ul className="grid grid-cols-1 gap-2.5">
          {article.howToRecognize.map((sign, idx) => (
            <li key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-amber-50/50 border border-amber-200/40 text-xs sm:text-sm text-slate-800">
              <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-800 font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                !
              </span>
              <span className="leading-relaxed">{sign}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* SECTION 3: WHAT TO DO (Step-by-step action sequence) */}
      <section className="space-y-6">
        <div className="flex items-center justify-between border-b border-slate-200 pb-3">
          <div className="flex items-center gap-2 text-slate-900 font-extrabold text-xl sm:text-2xl">
            <CheckCircle2 className="w-6 h-6 text-brand-600" />
            <h2>What to do: Step-by-Step Actions</h2>
          </div>
          <span className="text-xs font-bold text-brand-700 bg-brand-50 px-2.5 py-1 rounded-full">
            Follow in Order
          </span>
        </div>

        <div className="space-y-4">
          {article.whatToDo.map((step) => (
            <div
              key={step.step}
              className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs hover:border-brand-300 transition duration-150 space-y-3"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-brand-600 text-white font-black text-sm flex items-center justify-center flex-shrink-0 shadow-xs">
                  {step.step}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  {step.title}
                </h3>
              </div>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed pl-11">
                {step.description}
              </p>

              {step.warning && (
                <div className="ml-11 p-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                  <p>
                    <strong>Warning:</strong> {step.warning}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4: WHAT NOT TO DO (Critical safety myths) */}
      <section className="space-y-4 bg-red-50/70 p-6 sm:p-8 rounded-3xl border border-red-200 shadow-2xs">
        <div className="flex items-center gap-2 text-red-950 font-bold text-lg sm:text-xl">
          <XCircle className="w-5 h-5 text-red-600" />
          <h2>What NOT to do (Critical Common Mistakes)</h2>
        </div>
        <p className="text-xs sm:text-sm text-red-900 leading-relaxed">
          Outdated home remedies or instinctive reactions can worsen injuries or prove fatal. Strictly avoid:
        </p>
        <ul className="space-y-2.5 pt-1">
          {article.whatNotToDo.map((rule, idx) => (
            <li key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-white/90 border border-red-200 text-xs sm:text-sm text-slate-900">
              <span className="w-5 h-5 rounded-full bg-red-100 text-red-700 font-black text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                ✕
              </span>
              <span className="leading-relaxed">{rule}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* SECTION 5: WHEN TO SEEK MEDICAL HELP */}
      <section className="space-y-3 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-2xs">
        <div className="flex items-center gap-2 text-slate-900 font-bold text-lg sm:text-xl">
          <PhoneCall className="w-5 h-5 text-brand-600" />
          <h2>When to Seek Professional Medical Assistance</h2>
        </div>
        <ul className="space-y-2">
          {article.whenToSeekMedicalHelp.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-2 flex-shrink-0"></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* SECTION 6: SOURCES & CLINICAL REFERENCES */}
      <section className="space-y-3 p-6 rounded-2xl bg-slate-100/80 border border-slate-200 text-xs text-slate-600">
        <div className="flex items-center gap-2 text-slate-800 font-bold">
          <ShieldCheck className="w-4 h-4 text-brand-600" />
          <h3>Recognized Clinical Sources & Consensus Guidelines</h3>
        </div>
        <p>
          This educational guide reflects current resuscitation science and first aid practice guidelines from:
        </p>
        <ul className="space-y-1 list-disc pl-5 text-slate-700">
          {article.sources.map((src, idx) => (
            <li key={idx}>
              <strong>{src.name}</strong> {src.year ? `(${src.year})` : ''}
            </li>
          ))}
        </ul>
        <p className="text-[11px] text-slate-500 pt-2 border-t border-slate-200/80">
          Disclaimer: This guide is purely educational and does not constitute individual medical diagnosis or individualized prescription.
        </p>
      </section>

      {/* SECTION 7: RELATED ARTICLES */}
      {related.length > 0 && (
        <section className="space-y-4 pt-4 border-t border-slate-200">
          <h3 className="text-xl font-bold text-slate-900">
            Related Health & Safety Guides
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {related.map((rel) => (
              <ArticleCard key={rel.id} article={rel} />
            ))}
          </div>
        </section>
      )}

      {/* Fullscreen Active Emergency Stress View */}
      {stressModeOpen && (
        <EmergencyStressMode
          article={article}
          onClose={() => setStressModeOpen(false)}
        />
      )}

    </article>
  );
}
