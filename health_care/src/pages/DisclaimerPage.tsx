import { Link } from 'react-router-dom';
import { 
  ShieldAlert, 
  AlertTriangle, 
  PhoneCall, 
  BookOpen, 
  ChevronRight, 
  CheckCircle2, 
  ExternalLink 
} from 'lucide-react';
import { useCountry } from '../context/CountryContext';
import { useLanguage } from '../context/LanguageContext';

export function DisclaimerPage() {
  const { selectedCountry } = useCountry();
  const { language } = useLanguage();

  const clinicalSourcesEn = [
    {
      name: 'World Health Organization (WHO)',
      scope: 'Global health guidelines, emergency medical care standards, and chemical poisoning protocols.',
      url: 'https://www.who.int'
    },
    {
      name: 'International Federation of Red Cross and Red Crescent Societies (IFRC)',
      scope: 'International first aid, resuscitation, and disaster preparedness consensus.',
      url: 'https://www.ifrc.org'
    },
    {
      name: 'International Liaison Committee on Resuscitation (ILCOR)',
      scope: 'Universal evidence evaluation for cardiopulmonary resuscitation (CPR) and ECC science.',
      url: 'https://www.ilcor.org'
    },
    {
      name: 'European Resuscitation Council (ERC)',
      scope: 'Evidence-based European guidelines for resuscitation, AED operation, and basic life support.',
      url: 'https://www.erc.edu'
    },
    {
      name: 'American Heart Association (AHA)',
      scope: 'Cardiovascular emergency care, CPR guidelines, and stroke recognition programs.',
      url: 'https://cpr.heart.org'
    },
    {
      name: 'International Society for Burn Injuries (ISBI)',
      scope: 'Clinical practice guidelines for burn first care and thermal injury prevention.',
      url: 'https://www.worldburn.org'
    }
  ];

  const clinicalSourcesEs = [
    {
      name: 'Organización Mundial de la Salud (OMS)',
      scope: 'Pautas globales de salud, estándares de atención médica de urgencia e intoxicaciones químicas.',
      url: 'https://www.who.int'
    },
    {
      name: 'Federación Internacional de la Cruz Roja y de la Media Luna Roja (IFRC)',
      scope: 'Consenso internacional de primeros auxilios, resucitación y preparación ante desastres.',
      url: 'https://www.ifrc.org'
    },
    {
      name: 'Comité Internacional de Enlace sobre Resucitación (ILCOR)',
      scope: 'Evaluación universal de evidencia científica en reanimación cardiopulmonar (RCP).',
      url: 'https://www.ilcor.org'
    },
    {
      name: 'Consejo Europeo de Resucitación (ERC)',
      scope: 'Guías europeas basadas en evidencia para RCP, uso de DEA y soporte vital básico.',
      url: 'https://www.erc.edu'
    },
    {
      name: 'American Heart Association (AHA)',
      scope: 'Cuidado cardiovascular de emergencia, guías de RCP y programas de reconocimiento de ACV.',
      url: 'https://cpr.heart.org'
    },
    {
      name: 'Sociedad Internacional de Quemaduras (ISBI)',
      scope: 'Guías de práctica clínica para primeros auxilios en quemaduras y prevención de lesiones térmicas.',
      url: 'https://www.worldburn.org'
    }
  ];

  const clinicalSources = language === 'es' ? clinicalSourcesEs : clinicalSourcesEn;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10">
      
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-slate-500">
        <Link to="/" className="hover:text-brand-600 transition">
          {language === 'es' ? 'Inicio' : 'Home'}
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <span className="text-slate-900 font-bold">
          {language === 'es' ? 'Aviso Médico y Pautas Clínicas' : 'Medical Disclaimer & Guidelines'}
        </span>
      </nav>

      {/* Main Header */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-10 shadow-sm space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-50 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
          <ShieldAlert className="w-4 h-4 text-amber-600 dark:text-amber-400" />
          <span>{language === 'es' ? 'Mandato Educativo Oficial' : 'Official Educational Mandate'}</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          {language === 'es' ? 'Aviso de Alcance Médico y Fuentes Clínicas' : 'Medical Disclaimer & Clinical Standards'}
        </h1>

        <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          {language === 'es'
            ? 'HealthCare es una plataforma educativa internacional creada para enseñar a la comunidad conocimientos indispensables de salud, primeros auxilios, respuesta ante emergencias y seguridad cotidiana.'
            : 'HealthCare is an international educational platform created to teach ordinary people essential health knowledge, first aid, emergency response, and everyday safety.'}
        </p>
      </div>

      {/* MANDATORY PERSISTENT NOTICE BOX */}
      <div className="bg-red-50 dark:bg-red-950/40 border-2 border-red-300 dark:border-red-900/60 rounded-3xl p-6 sm:p-8 space-y-4 text-red-950 dark:text-red-200">
        <div className="flex items-center gap-2 font-black text-lg text-red-900 dark:text-red-200">
          <AlertTriangle className="w-6 h-6 text-red-600 dark:text-red-400 animate-pulse flex-shrink-0" />
          <h2>{language === 'es' ? 'Aviso Médico de Cumplimiento Obligatorio' : 'Mandatory Medical Notice'}</h2>
        </div>

        <p className="text-sm sm:text-base leading-relaxed">
          <strong>
            {language === 'es'
              ? '"HealthCare proporciona información exclusivamente con fines educativos. No sustituye la atención médica profesional, el diagnóstico clínico, el tratamiento prescriptivo ni la formación presencial certificada en primeros auxilios. Ante cualquier emergencia médica, comunícate de inmediato con los servicios de urgencia locales."'
              : '"HealthCare provides educational information only. It does not replace professional medical advice, diagnosis, treatment, or certified first aid training. In an emergency, contact your local emergency services immediately."'}
          </strong>
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-red-200 dark:border-red-900/60">
          <span className="text-xs text-red-900 dark:text-red-200">
            {language === 'es' ? 'Configuración de país actual:' : 'Current country setting:'}{' '}
            <strong>{selectedCountry.countryName}</strong> ({language === 'es' ? 'Central de Emergencias:' : 'Emergency Dispatch:'}{' '}
            <strong>{selectedCountry.generalEmergency}</strong>)
          </span>
          <a
            href={`tel:${selectedCountry.ambulance || selectedCountry.generalEmergency}`}
            className="inline-flex items-center gap-2 bg-emergency-600 hover:bg-emergency-700 text-white font-bold px-4 py-2 rounded-xl text-xs transition duration-150 shadow"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>{language === 'es' ? 'Llamar al' : 'Call'} {selectedCountry.generalEmergency}</span>
          </a>
        </div>
      </div>

      {/* Scope Boundaries */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">
          {language === 'es' ? 'Alcance de la Plataforma y lo que NUNCA hacemos' : 'Platform Scope & What We Never Do'}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
          <div className="p-4 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/60 space-y-2">
            <div className="font-bold text-emerald-900 dark:text-emerald-200 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>{language === 'es' ? 'Lo que HealthCare SÍ proporciona:' : 'What HealthCare Provides:'}</span>
            </div>
            <ul className="space-y-1 list-disc pl-5 text-emerald-950 dark:text-emerald-100">
              <li>{language === 'es' ? 'Guías universales de primeros auxilios paso a paso.' : 'Universal first aid step-by-step guidance.'}</li>
              <li>{language === 'es' ? 'Criterios de reconocimiento de emergencias (ACV, RCP, asfixia).' : 'Emergency recognition criteria (stroke, CPR, choking).'}</li>
              <li>{language === 'es' ? 'Delimitación rigurosa de lo que NO se debe hacer ante una crisis.' : 'Clear demarcation of what NOT to do in an emergency.'}</li>
              <li>{language === 'es' ? 'Listas de control para prevención de accidentes y armado del botiquín.' : 'Accident prevention and home safety checklists.'}</li>
              <li>{language === 'es' ? 'Guía internacional de teléfonos de auxilio según el país.' : 'Location-aware international emergency numbers.'}</li>
            </ul>
          </div>

          <div className="p-4 rounded-2xl bg-red-50/70 dark:bg-red-950/40 border border-red-200 dark:border-red-900/60 space-y-2">
            <div className="font-bold text-red-900 dark:text-red-200 flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4 text-red-600 dark:text-red-400" />
              <span>{language === 'es' ? 'Lo que HealthCare NUNCA hace:' : 'What HealthCare NEVER Does:'}</span>
            </div>
            <ul className="space-y-1 list-disc pl-5 text-red-950 dark:text-red-100">
              <li>{language === 'es' ? 'Jamás emite diagnósticos médicos individualizados.' : 'Never provides individual medical diagnosis.'}</li>
              <li>{language === 'es' ? 'Jamás prescribe dosis ni recetas de fármacos.' : 'Never prescribes medication dosages.'}</li>
              <li>{language === 'es' ? 'Jamás avala remedios caseros sin evidencia o tratamientos populares.' : 'Never endorses unverified home remedies or folk treatments.'}</li>
              <li>{language === 'es' ? 'Jamás utiliza IA generativa para improvisar indicaciones de salud.' : 'Never uses generative AI to improvise clinical advice.'}</li>
              <li>{language === 'es' ? 'Jamás sustituye la capacitación práctica certificada en persona.' : 'Never substitutes practical certified in-person training.'}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Authoritative Sources List */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-xl">
          <BookOpen className="w-5 h-5 text-brand-600 dark:text-brand-400" />
          <h2>{language === 'es' ? 'Fuentes Médicas Internacionales Reconocidas' : 'Recognized International Medical Sources'}</h2>
        </div>

        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          {language === 'es'
            ? 'HealthCare cura y organiza contenidos derivados exclusivamente de consensos establecidos por autoridades de salud pública y resucitación:'
            : 'HealthCare curates and organizes content exclusively derived from established international public health and resuscitation consensus authorities:'}
        </p>

        <div className="grid grid-cols-1 gap-3">
          {clinicalSources.map((source, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white text-sm">{source.name}</h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">{source.scope}</p>
              </div>
              <a
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-semibold text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 flex-shrink-0"
              >
                <span>{language === 'es' ? 'Portal Oficial' : 'Official Portal'}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Contact & Feedback */}
      <div className="p-6 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 space-y-2">
        <h3 className="font-bold text-slate-900 dark:text-white text-sm">
          {language === 'es' ? 'Consultas Editoriales y Colaboración' : 'Editorial Curriculum Inquiries'}
        </h3>
        <p className="leading-relaxed">
          {language === 'es'
            ? 'Si representas a una autoridad médica, centro de formación de primeros auxilios certificado u organización de salud pública y deseas revisar o proponer mejoras a nuestro contenido educativo, contáctanos a través de '
            : 'If you represent a medical authority, certified first aid training center, or public health organization and wish to review or propose improvements to our educational content, please contact our curriculum team via '}
          <Link to="/contact" className="text-brand-600 dark:text-brand-400 font-bold hover:underline">
            {language === 'es' ? 'Contacto y Sugerencias' : 'Contact & Feedback'}
          </Link>.
        </p>
      </div>

    </div>
  );
}
