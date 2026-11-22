import { Link } from 'react-router-dom';
import { BookOpen, ChevronRight, AlertTriangle, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function TermsPage() {
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
          {language === 'es' ? 'Términos de Uso Educativo' : 'Terms of Educational Use'}
        </span>
      </nav>

      {/* Header */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-10 shadow-sm space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-brand-50 dark:bg-brand-900/40 text-brand-700 dark:text-brand-400 border border-brand-200 dark:border-brand-800">
          <BookOpen className="w-4 h-4 text-brand-600 dark:text-brand-400" />
          <span>{language === 'es' ? 'Licencia de Salud Pública' : 'Public Health License'}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          {language === 'es' ? 'Términos de Uso Educativo' : 'Terms of Educational Use'}
        </h1>
        <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
          {language === 'es'
            ? 'Al acceder a HealthCare, aceptas estos términos fundamentales de salud pública diseñados para priorizar la seguridad del paciente y la derivación clínica adecuada.'
            : 'By accessing HealthCare, you agree to these fundamental public health terms designed to prioritize casualty safety and proper clinical escalation.'}
        </p>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm space-y-6 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            {language === 'es' ? '1. Naturaleza Estrictamente Educativa' : '1. Strictly Educational Nature'}
          </h2>
          <p>
            {language === 'es'
              ? 'HealthCare es un compendio informativo. No presta servicios médicos, telemedicina, diagnósticos clínicos ni prescripciones farmacológicas. La lectura de nuestras guías no otorga certificación de socorrista. Se recomienda enfáticamente realizar cursos prácticos presenciales certificados por entidades reconocidas como Cruz Roja o Defensa Civil.'
              : 'HealthCare is an informational compendium. It does not provide medical services, telemedicine, diagnosis, or clinical prescriptions. Reading our guides does not confer certified first-aider accreditation. Users are strongly encouraged to attend hands-on certified practical training provided by organizations like the Red Cross or St. John Ambulance.'}
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-brand-600 dark:text-brand-400" />
            {language === 'es' ? '2. Prioridad de los Servicios de Emergencia' : '2. Priority of Emergency Services'}
          </h2>
          <p>
            {language === 'es'
              ? 'Ante cualquier situación con pérdida del conocimiento, dificultad respiratoria severa, hemorragia abundante, sospecha de ACV o paro cardíaco, comunicarse con el número de emergencias local tiene prioridad absoluta sobre la lectura de este sitio web.'
              : 'In any scenario involving loss of consciousness, compromised airway, profuse hemorrhage, suspected stroke, or cardiac arrest, contacting local professional emergency dispatch must take priority over reading website instructions.'}
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-brand-600 dark:text-brand-400" />
            {language === 'es' ? '3. Difusión y Distribución Educativa Abierta' : '3. Open Educational Sharing'}
          </h2>
          <p>
            {language === 'es'
              ? 'Te alentamos a compartir, imprimir y difundir las fichas educativas de seguridad de HealthCare para fines educativos no comerciales en escuelas, hogares, lugares de trabajo y centros comunitarios, siempre que se conserve la integridad del contenido y las atribuciones de fuentes.'
              : 'You are encouraged to share, print, and disseminate HealthCare educational safety sheets for non-commercial safety education in schools, households, workplaces, and community centers, provided content integrity and source attributions are maintained.'}
          </p>
        </section>
      </div>

    </div>
  );
}

