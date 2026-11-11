import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getArticleBySlug, getRelatedArticles } from '../utils/search';
import { UrgencyBadge } from '../components/ui/UrgencyBadge';
import { ArticleCard } from '../components/ui/ArticleCard';
import { EmergencyStressMode } from '../components/tools/EmergencyStressMode';
import { useCountry } from '../context/CountryContext';
import { useLanguage } from '../context/LanguageContext';
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
  Zap,
  ChevronDown
} from 'lucide-react';

export function ArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const { selectedCountry } = useCountry();
  const { language, t } = useLanguage();
  const [stressModeOpen, setStressModeOpen] = useState(false);
  const [showFullGuide, setShowFullGuide] = useState(false);

  const article = getArticleBySlug(slug || '', language);

  // Scroll to top when article slug changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setShowFullGuide(false); // reset on article change
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

  const related = getRelatedArticles(article.relatedArticles, language);
  const isCritical = article.urgency === 'critical' || article.urgency === 'urgent';

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
      
      {/* PRINT-ONLY HEADER */}
      <div className="print-only border-b-2 border-slate-900 pb-3 mb-4">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xl font-black text-slate-950 uppercase tracking-tight block">
              HealthCare • Emergency Protocol Sheet
            </span>
            <p className="text-xs text-slate-700">
              International First Aid Manual • Attach to your Home / Workplace First Aid Kit
            </p>
          </div>
          <div className="border-2 border-red-600 p-1.5 px-3 text-center rounded-lg">
            <span className="text-[9px] font-black uppercase tracking-wider block text-red-600">
              EMERGENCY DISPATCH ({selectedCountry.countryCode})
            </span>
            <span className="text-xl font-black text-slate-900">
              {selectedCountry.generalEmergency}
            </span>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="no-print flex items-center gap-2 text-xs font-semibold text-slate-500">
        <Link to="/" className="hover:text-brand-600 transition">
          {language === 'es' ? 'Inicio' : 'Home'}
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <Link to={`/${article.category}`} className="hover:text-brand-600 transition capitalize">
          {article.category.replace('-', ' ')}
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <span className="text-slate-900 font-bold truncate max-w-[200px] sm:max-w-xs">{article.title}</span>
      </nav>

      {/* ═══════════════════════════════════════════════════════
          QUICK-ACTION PANEL — shown FIRST for critical/urgent
          Gives the user immediate steps without any scroll
          ═══════════════════════════════════════════════════════ */}
      {isCritical && (
        <section className="rounded-3xl overflow-hidden border-2 border-emergency-500 shadow-xl no-print">
          {/* Red header bar */}
          <div className="bg-emergency-600 px-5 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <AlertTriangle className="w-6 h-6 text-white animate-pulse flex-shrink-0" />
              <div>
                <p className="text-[11px] font-black uppercase tracking-widest text-red-100">
                  {article.urgency === 'critical' ? t('quickActionCritical') : t('quickActionUrgent')}
                </p>
                <h1 className="text-lg sm:text-xl font-extrabold text-white leading-tight">
                  {article.title}
                </h1>
              </div>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <button
                onClick={() => setStressModeOpen(true)}
                className="flex items-center gap-1.5 bg-black/30 hover:bg-black/50 border border-white/30 text-amber-300 font-bold px-3 py-2 rounded-xl text-xs transition"
                title="Fullscreen emergency view"
              >
                <Zap className="w-3.5 h-3.5 fill-current" />
                <span className="hidden sm:inline">{t('fullscreen')}</span>
              </button>
              <a
                href={`tel:${selectedCountry.ambulance || selectedCountry.generalEmergency}`}
                className="flex items-center gap-1.5 bg-white text-emergency-700 font-black px-4 py-2 rounded-xl text-sm shadow transition hover:bg-red-50"
              >
                <PhoneCall className="w-4 h-4" />
                <span>{t('callNow')} {selectedCountry.generalEmergency}</span>
              </a>
            </div>
          </div>

          {/* Step-by-step cards — large, scannable, no intro text */}
          <div className="bg-slate-950 px-4 sm:px-6 py-5 space-y-3">
            <p className="text-xs font-black uppercase tracking-widest text-slate-400 pb-1">
              {t('doTheseSteps')}
            </p>
            {article.whatToDo.map((step) => (
              <div
                key={step.step}
                className="flex gap-4 bg-slate-900 border border-slate-700 rounded-2xl p-4 sm:p-5"
              >
                <span className="w-10 h-10 rounded-xl bg-brand-500 text-slate-950 font-black text-xl flex items-center justify-center flex-shrink-0 shadow">
                  {step.step}
                </span>
                <div className="space-y-1.5 min-w-0">
                  <h3 className="text-base sm:text-lg font-black text-white leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                  {step.warning && (
                    <div className="mt-2 flex items-start gap-2 bg-amber-950/60 border border-amber-600/60 rounded-xl p-2.5 text-amber-200 text-xs font-semibold">
                      <AlertTriangle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                      <span>{step.warning}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Critical DON'Ts — most important ones inline */}
            <div className="mt-2 bg-red-950/50 border border-red-800/70 rounded-2xl p-4 space-y-2">
              <p className="text-xs font-black uppercase tracking-wider text-red-400 flex items-center gap-1.5">
                <XCircle className="w-4 h-4" /> {t('doNotRule')}
              </p>
              <ul className="space-y-1.5">
                {article.whatNotToDo.slice(0, 3).map((rule, idx) => (
                  <li key={idx} className="text-xs sm:text-sm text-red-100 font-semibold flex items-start gap-2">
                    <span className="text-red-400 font-black flex-shrink-0">✕</span>
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Toggle to expand full educational guide */}
            <button
              onClick={() => setShowFullGuide(!showFullGuide)}
              className="w-full flex items-center justify-center gap-2 py-3 text-xs font-bold text-slate-400 hover:text-slate-200 transition border-t border-slate-800 mt-2"
            >
              <ChevronDown className={`w-4 h-4 transition-transform ${showFullGuide ? 'rotate-180' : ''}`} />
              <span>{showFullGuide ? t('hideFullGuide') : t('expandFullGuide')}</span>
            </button>
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════════════════════
          FULL EDUCATIONAL GUIDE
          For non-critical articles: always visible
          For critical articles: shown after toggle
          ═══════════════════════════════════════════════════════ */}
      {(!isCritical || showFullGuide) && (
        <>
          {/* Article Header & Metadata */}
          <header className="space-y-4 border-b border-slate-200 pb-8">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <UrgencyBadge urgency={article.urgency} />
                <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full capitalize">
                  {article.category.replace('-', ' ')}
                </span>
              </div>

              <div className="no-print flex items-center gap-3">
                {/* Emergency Action Mode button — for non-critical articles */}
                {!isCritical && (
                  <button
                    onClick={() => setStressModeOpen(true)}
                    className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-black text-amber-300 font-extrabold px-4 py-2 rounded-xl text-xs transition duration-150 shadow border border-slate-700"
                    title="Switch to ultra-high-contrast emergency view"
                  >
                    <Zap className="w-3.5 h-3.5 fill-current" />
                    <span>Emergency Action Mode</span>
                  </button>
                )}
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
                  className="p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition flex items-center gap-1.5 text-xs font-semibold"
                  title="Print emergency sheet"
                  aria-label="Print guide"
                >
                  <Printer className="w-4 h-4" />
                  <span className="hidden sm:inline">Print Protocol Sheet</span>
                </button>
              </div>
            </div>

            {!isCritical && (
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {article.title}
              </h1>
            )}

            <p className="text-lg text-slate-600 leading-relaxed font-normal">
              {article.summary}
            </p>

            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-500 pt-2">
              <div className="flex items-center gap-1.5 font-medium">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                <span>{t('readingTime')}: <strong>{article.readingTimeMinutes} min</strong></span>
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                <span>{t('lastReviewed')}: <strong>{article.lastReviewed}</strong></span>
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
              <h2>{t('whatIsIt')}</h2>
            </div>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              {article.whatIsIt}
            </p>
          </section>

          {/* SECTION 2: HOW TO RECOGNIZE IT */}
          <section className="space-y-4 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-2xs">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-lg sm:text-xl">
              <AlertCircle className="w-5 h-5 text-amber-600" />
              <h2>{t('howToRecognize')}</h2>
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

          {/* SECTION 3: WHAT TO DO */}
          <section className="space-y-6">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <div className="flex items-center gap-2 text-slate-900 font-extrabold text-xl sm:text-2xl">
                <CheckCircle2 className="w-6 h-6 text-brand-600" />
                <h2>{t('whatToDoTitle')}</h2>
              </div>
              <span className="text-xs font-bold text-brand-700 bg-brand-50 px-2.5 py-1 rounded-full">
                {t('followInOrder')}
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
                        <strong>{language === 'es' ? 'Advertencia:' : 'Warning:'}</strong> {step.warning}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 4: WHAT NOT TO DO */}
          <section className="space-y-4 bg-red-50/70 p-6 sm:p-8 rounded-3xl border border-red-200 shadow-2xs">
            <div className="flex items-center gap-2 text-red-950 font-bold text-lg sm:text-xl">
              <XCircle className="w-5 h-5 text-red-600" />
              <h2>{t('whatNotToDoTitle')}</h2>
            </div>
            <p className="text-xs sm:text-sm text-red-900 leading-relaxed">
              {language === 'es'
                ? 'Remedios caseros obsoletos o reacciones impulsivas pueden agravar las lesiones o resultar fatales. Evita estrictamente:'
                : 'Outdated home remedies or instinctive reactions can worsen injuries or prove fatal. Strictly avoid:'}
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
              <h2>{t('whenToSeekHelp')}</h2>
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

          {/* SECTION 6: SOURCES */}
          <section className="space-y-3 p-6 rounded-2xl bg-slate-100/80 border border-slate-200 text-xs text-slate-600">
            <div className="flex items-center gap-2 text-slate-800 font-bold">
              <ShieldCheck className="w-4 h-4 text-brand-600" />
              <h3>{t('clinicalSources')}</h3>
            </div>
            <p>
              {language === 'es' 
                ? 'Esta guía educativa refleja la ciencia de resucitación y consensos de primeros auxilios de:' 
                : 'This educational guide reflects current resuscitation science and first aid practice guidelines from:'}
            </p>
            <ul className="space-y-1 list-disc pl-5 text-slate-700">
              {article.sources.map((src, idx) => (
                <li key={idx}>
                  <strong>{src.name}</strong> {src.year ? `(${src.year})` : ''}
                </li>
              ))}
            </ul>
            <p className="text-[11px] text-slate-500 pt-2 border-t border-slate-200/80">
              {language === 'es'
                ? 'Aviso: Esta guía es de carácter puramente educativo y no constituye diagnóstico médico ni prescripción individualizada.'
                : 'Disclaimer: This guide is purely educational and does not constitute individual medical diagnosis or individualized prescription.'}
            </p>
          </section>
        </>
      )}

      {/* RELATED ARTICLES */}
      {related.length > 0 && (
        <section className="no-print space-y-4 pt-4 border-t border-slate-200">
          <h3 className="text-xl font-bold text-slate-900">
            {t('relatedGuides')}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {related.map((rel) => (
              <ArticleCard key={rel.id} article={rel} />
            ))}
          </div>
        </section>
      )}

      {/* PRINT-ONLY FOOTER */}
      <div className="print-only border-t-2 border-slate-900 pt-3 text-[9pt] text-slate-700 space-y-1">
        <p className="font-bold text-slate-900">
          Mandatory Safety Notice: This protocol sheet provides standardized educational first aid guidelines only and does not substitute certified practical training or professional emergency dispatch.
        </p>
        <p className="text-slate-600">
          Printed from HealthCare International Platform • Guidelines curated from WHO, IFRC, and European Resuscitation Council.
        </p>
      </div>

      {/* Fullscreen Emergency Stress Mode */}
      {stressModeOpen && (
        <EmergencyStressMode
          article={article}
          onClose={() => setStressModeOpen(false)}
        />
      )}

    </article>
  );
}
