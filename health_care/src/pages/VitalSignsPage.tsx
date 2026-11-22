import { Link } from 'react-router-dom';
import { VitalSignsReference } from '../components/tools/VitalSignsReference';
import { Activity, ChevronRight, PhoneCall, AlertTriangle, BookOpen } from 'lucide-react';
import { useCountry } from '../context/CountryContext';
import { useLanguage } from '../context/LanguageContext';

export function VitalSignsPage() {
  const { selectedCountry } = useCountry();
  const { language } = useLanguage();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10">
      
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-slate-500">
        <Link to="/" className="hover:text-brand-600 transition">
          {language === 'es' ? 'Inicio' : 'Home'}
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <Link to="/warning-signs" className="hover:text-brand-600 transition">
          {language === 'es' ? 'Señales de Alerta' : 'Warning Signs'}
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <span className="text-slate-900 font-bold">
          {language === 'es' ? 'Guía de Signos Vitales' : 'Vital Signs Reference'}
        </span>
      </nav>

      {/* Hero Header */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-10 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-brand-50 dark:bg-brand-900/40 text-brand-700 dark:text-brand-400 border border-brand-200 dark:border-brand-800">
            <Activity className="w-4 h-4 text-brand-600 dark:text-brand-400" />
            <span>{language === 'es' ? 'Estándares Clínicos Fisiológicos' : 'Clinical Physiological Standards'}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {language === 'es' ? 'Guía de Referencia de Signos Vitales' : 'Vital Signs Reference Guide'}
          </h1>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {language === 'es'
              ? 'Conoce los valores basales en reposo para cada grupo de edad. Aprende a palpar el pulso, contar respiraciones, medir la temperatura y reconocer cuándo los números indican una alarma médica.'
              : 'Understand resting physiological baselines across different age groups. Learn how to palpate a pulse, count respirations, measure temperature, and recognize when numbers signal a clinical red flag.'}
          </p>
        </div>

        {/* Quick Emergency Indicator */}
        <div className="bg-emergency-50 dark:bg-red-950/40 border border-emergency-200 dark:border-red-800/60 p-5 rounded-2xl max-w-sm flex-shrink-0 space-y-3 shadow-2xs">
          <div className="flex items-center gap-2 text-emergency-800 dark:text-red-300 text-xs font-bold uppercase tracking-wide">
            <AlertTriangle className="w-4 h-4 text-emergency-600 dark:text-red-400 animate-pulse" />
            <span>{language === 'es' ? 'Alteración Vital Severa' : 'Severe Vital Derangement'}</span>
          </div>
          <p className="text-xs text-emergency-900 dark:text-red-200 leading-relaxed">
            {language === 'es'
              ? 'Dificultad respiratoria severa, falta de respuesta o presión sistólica > 180 mmHg requieren atención de urgencia inmediata.'
              : 'Severe difficulty breathing, unresponsiveness, or systolic blood pressure > 180 mmHg require immediate emergency attention.'}
          </p>
          <a
            href={`tel:${selectedCountry.ambulance || selectedCountry.generalEmergency}`}
            className="w-full inline-flex items-center justify-center gap-2 bg-emergency-600 hover:bg-emergency-700 text-white font-bold py-2 px-3 rounded-xl text-xs transition duration-150 shadow"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>{language === 'es' ? 'Llamar al' : 'Call'} {selectedCountry.generalEmergency} ({selectedCountry.countryName})</span>
          </a>
        </div>
      </div>

      {/* Main Interactive Tool */}
      <VitalSignsReference />

      {/* Bottom Educational Cross-links */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm space-y-4">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-brand-600" />
          {language === 'es' ? 'Protocolos Clínicos Relacionados' : 'Related Clinical Protocols'}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs font-semibold">
          <Link
            to="/guide/dehydration-warning-signs"
            className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-brand-50 dark:hover:bg-brand-950/60 border border-slate-200 dark:border-slate-700 hover:border-brand-300 text-slate-800 dark:text-slate-200 hover:text-brand-700 transition flex items-center justify-between"
          >
            <span>{language === 'es' ? 'Señales de Alerta de Deshidratación' : 'Dehydration Warning Signs'}</span>
            <ChevronRight className="w-4 h-4 text-slate-400" />
          </Link>
          <Link
            to="/guide/thermometer-fever-management"
            className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-brand-50 dark:hover:bg-brand-950/60 border border-slate-200 dark:border-slate-700 hover:border-brand-300 text-slate-800 dark:text-slate-200 hover:text-brand-700 transition flex items-center justify-between"
          >
            <span>{language === 'es' ? 'Uso del Termómetro y Fiebre' : 'Thermometer & Fever Care'}</span>
            <ChevronRight className="w-4 h-4 text-slate-400" />
          </Link>
          <Link
            to="/guide/cardiac-arrest-cpr"
            className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-brand-50 dark:hover:bg-brand-950/60 border border-slate-200 dark:border-slate-700 hover:border-brand-300 text-slate-800 dark:text-slate-200 hover:text-brand-700 transition flex items-center justify-between"
          >
            <span>{language === 'es' ? 'RCP y Control de Pulso' : 'CPR & Pulse Assessment'}</span>
            <ChevronRight className="w-4 h-4 text-slate-400" />
          </Link>
        </div>
      </div>

    </div>
  );
}
