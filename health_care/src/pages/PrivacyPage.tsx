import { Link } from 'react-router-dom';
import { ShieldCheck, ChevronRight, CheckCircle2, Lock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function PrivacyPage() {
  const { language } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-slate-500">
        <Link to="/" className="hover:text-brand-600 transition">
          {language === 'es' ? 'Inicio' : 'Home'}
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <span className="text-slate-900 font-bold">
          {language === 'es' ? 'Política de Privacidad' : 'Privacy Policy'}
        </span>
      </nav>

      {/* Header */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-10 shadow-sm space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-brand-50 dark:bg-brand-950/80 text-brand-700 dark:text-brand-300 border border-brand-200 dark:border-brand-800">
          <Lock className="w-4 h-4 text-brand-600 dark:text-brand-400" />
          <span>{language === 'es' ? 'Cero Rastreo Personal' : 'Zero Personal Tracking'}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          {language === 'es' ? 'Política de Privacidad' : 'Privacy Policy'}
        </h1>
        <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
          {language === 'es'
            ? 'HealthCare es una herramienta de utilidad pública y educativa. Creemos firmemente que el acceso a la educación en primeros auxilios debe ser completamente privado, gratuito e irrestricto.'
            : 'HealthCare is an educational public utility. We believe that access to life-saving health education should be completely private, free, and unrestricted.'}
        </p>
      </div>

      {/* Privacy Principles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="p-6 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
          <div className="w-10 h-10 rounded-xl bg-brand-50 dark:bg-brand-950/70 text-brand-600 dark:text-brand-400 flex items-center justify-center font-bold">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-slate-900 dark:text-white text-base">
            {language === 'es' ? 'Sin Registro de Datos Médicos' : 'No Medical Record Tracking'}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {language === 'es'
              ? 'Nunca solicitamos, almacenamos ni transmitimos identificadores personales de salud, antecedentes clínicos ni condiciones de pacientes.'
              : 'We never ask for, record, or transmit personal health identifiers, medical history, or patient conditions.'}
          </p>
        </div>

        <div className="p-6 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
          <div className="w-10 h-10 rounded-xl bg-brand-50 dark:bg-brand-950/70 text-brand-600 dark:text-brand-400 flex items-center justify-center font-bold">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-slate-900 dark:text-white text-base">
            {language === 'es' ? 'Búsqueda Totalmente Local' : 'Local Search Execution'}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {language === 'es'
              ? 'Todas las consultas en "¿Qué debo hacer si...?" se ejecutan directamente en tu navegador contra nuestro índice estático. Tus búsquedas nunca salen de tu dispositivo.'
              : 'All searches in "What should I do if...?" run directly inside your browser against our static local index. Your search queries never leave your device.'}
          </p>
        </div>

        <div className="p-6 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
          <div className="w-10 h-10 rounded-xl bg-brand-50 dark:bg-brand-950/70 text-brand-600 dark:text-brand-400 flex items-center justify-center font-bold">
            <Lock className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-slate-900 dark:text-white text-base">
            {language === 'es' ? 'Preferencia de País Guardada Localmente' : 'Local Country Preference'}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {language === 'es'
              ? 'Tu país y números de emergencia se guardan exclusivamente en el almacenamiento local de tu navegador (localStorage) para que persistan entre visitas sin rastrear tu identidad.'
              : 'Your emergency telephone preference (e.g. 911 vs 112) is saved exclusively in your browser\'s local storage (`localStorage`) so emergency numbers persist across visits without tracking your identity.'}
          </p>
        </div>

        <div className="p-6 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
          <div className="w-10 h-10 rounded-xl bg-brand-50 dark:bg-brand-950/70 text-brand-600 dark:text-brand-400 flex items-center justify-center font-bold">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-slate-900 dark:text-white text-base">
            {language === 'es' ? 'Sin Publicidad de Terceros ni Rastreadores' : 'No Third-Party Advertising'}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {language === 'es'
              ? 'No vendemos espacios de publicidad, no insertamos píxeles de seguimiento ni monetizamos tus consultas de primeros auxilios de ninguna manera.'
              : 'We do not sell advertising space, embed tracking pixels, or monetize your safety inquiries in any way.'}
          </p>
        </div>
      </div>

    </div>
  );
}

