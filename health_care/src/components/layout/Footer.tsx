import { Link } from 'react-router-dom';
import { HeartPulse, Shield, Phone, BookOpen, AlertCircle, Languages } from 'lucide-react';
import { useCountry } from '../../context/CountryContext';
import { useLanguage } from '../../context/LanguageContext';

export function Footer() {
  const { selectedCountry } = useCountry();
  const { language, openLanguageSelector, t } = useLanguage();

  return (
    <footer className="bg-navy-950 text-slate-300 border-t border-navy-800 text-sm mt-auto">
      {/* Upper Footer: Core educational statement & emergency callout */}
      <div className="border-b border-navy-900 bg-navy-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold bg-brand-500/10 text-brand-400 border border-brand-500/20 mb-2">
                <Shield className="w-3.5 h-3.5" /> {language === 'es' ? 'Misión Educativa Central' : 'Core Educational Mission'}
              </span>
              <h3 className="text-lg font-bold text-white mb-1">
                {language === 'es' 
                  ? '"Saber qué hacer." Conocimiento de salud práctico para la ciudadanía.' 
                  : '"Know what to do." Practical Health Knowledge for Everyday People.'}
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-2xl">
                {t('footerDesc')}
              </p>
            </div>

            <div className="bg-navy-900 border border-navy-800 p-4 rounded-2xl flex flex-col sm:flex-row md:flex-col justify-between gap-3 shadow-lg">
              <div>
                <p className="text-xs uppercase font-bold text-slate-400 tracking-wider">
                  {language === 'es' ? 'Central de Emergencias' : 'Emergency Dispatch'} ({selectedCountry.countryName})
                </p>
                <p className="text-2xl font-black text-white mt-0.5 tracking-tight">
                  {selectedCountry.ambulance || selectedCountry.generalEmergency}
                </p>
                {selectedCountry.poisonControl && (
                  <p className="text-[11px] text-slate-400 mt-1">
                    {language === 'es' ? 'Toxicología / Venenos:' : 'Poison Control:'} <span className="text-slate-200">{selectedCountry.poisonControl}</span>
                  </p>
                )}
              </div>
              <a
                href={`tel:${selectedCountry.ambulance || selectedCountry.generalEmergency}`}
                className="inline-flex items-center justify-center gap-2 bg-emergency-600 hover:bg-emergency-700 text-white font-semibold py-2 px-3 rounded-xl text-xs transition duration-150 shadow"
              >
                <Phone className="w-3.5 h-3.5" /> {language === 'es' ? 'Llamar a Emergencias' : 'Call Emergency Line'}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Footer: Links, Categories, Sources */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Col 1: About & Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center text-white">
                <HeartPulse className="w-5 h-5 stroke-[2.2]" />
              </div>
              <span className="font-extrabold text-xl text-white tracking-tight">
                Health<span className="text-brand-500">Care</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              {t('brandTagline')}. {language === 'es' ? 'Pautas internacionales de la OMS, Cruz Roja y consensos de resucitación.' : 'Based on WHO, Red Cross, and international resuscitation standards.'}
            </p>
            
            <button
              type="button"
              onClick={openLanguageSelector}
              className="inline-flex items-center gap-2 text-xs font-bold text-brand-400 hover:text-brand-300 bg-brand-950/60 border border-brand-800/80 px-3 py-1.5 rounded-xl transition"
            >
              <Languages className="w-3.5 h-3.5" />
              <span>{language === 'es' ? 'Cambiar Idioma (ES / EN)' : 'Change Language (EN / ES)'}</span>
            </button>
          </div>

          {/* Col 2: Quick Protocols */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {t('footerQuickLinks')}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/guide/cardiac-arrest-cpr" className="text-slate-400 hover:text-white transition">
                  {language === 'es' ? 'RCP solo con las manos' : 'Hands-Only Adult CPR'}
                </Link>
              </li>
              <li>
                <Link to="/guide/choking-adult-child" className="text-slate-400 hover:text-white transition">
                  {language === 'es' ? 'Primeros auxilios por atragantamiento' : 'Choking First Aid (Heimlich)'}
                </Link>
              </li>
              <li>
                <Link to="/guide/burns-first-aid" className="text-slate-400 hover:text-white transition">
                  {language === 'es' ? 'Protocolo de quemaduras' : 'Burns Cooling Protocol'}
                </Link>
              </li>
              <li>
                <Link to="/guide/stroke-recognition" className="text-slate-400 hover:text-white transition">
                  {language === 'es' ? 'Reconocimiento de ACV (BE-FAST)' : 'Stroke Warning Signs (BE-FAST)'}
                </Link>
              </li>
              <li>
                <Link to="/guide/severe-bleeding-wounds" className="text-slate-400 hover:text-white transition">
                  {language === 'es' ? 'Hemorragias graves y cortes' : 'Severe Bleeding Control'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Interactive Tools */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {t('footerTools')}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/vital-signs" className="text-slate-400 hover:text-white transition">
                  {t('vitalSignsTitle')}
                </Link>
              </li>
              <li>
                <Link to="/kit-checklist" className="text-slate-400 hover:text-white transition">
                  {t('kitChecklistTitle')}
                </Link>
              </li>
              <li>
                <Link to="/quiz" className="text-slate-400 hover:text-white transition">
                  {t('quizTitle')}
                </Link>
              </li>
              <li>
                <Link to="/search" className="text-slate-400 hover:text-white transition">
                  {language === 'es' ? 'Búsqueda por Síntomas' : 'Search by Symptoms'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Institutional & Scope */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {t('footerInstitutions')}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/disclaimer" className="text-slate-400 hover:text-white transition flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-brand-500" />
                  <span>{language === 'es' ? 'Fuentes Médicas y Alcance' : 'Medical Sources & Scope'}</span>
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-slate-400 hover:text-white transition">
                  {language === 'es' ? 'Términos de Uso Educativo' : 'Terms of Educational Use'}
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-slate-400 hover:text-white transition">
                  {language === 'es' ? 'Política de Privacidad' : 'Zero-Tracking Privacy'}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-white transition">
                  {language === 'es' ? 'Contacto y Sugerencias' : 'Feedback & Contact'}
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Mandatory Medical Scope Notice & Bottom Bar */}
      <div className="border-t border-navy-900 bg-navy-950/80 py-6 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="p-4 rounded-2xl bg-navy-900/60 border border-navy-800 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
            <div className="space-y-1">
              <p className="font-bold text-slate-300">
                {t('footerMedicalNotice')}
              </p>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                {t('footerMedicalNoticeText')}
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 text-[11px]">
            <span>
              © {new Date().getFullYear()} {t('footerAllRights')}
            </span>
            <div className="flex items-center gap-4">
              <Link to="/disclaimer" className="hover:text-slate-300 transition">
                {language === 'es' ? 'Aviso Médico' : 'Medical Disclaimer'}
              </Link>
              <Link to="/privacy" className="hover:text-slate-300 transition">
                {language === 'es' ? 'Privacidad' : 'Privacy Policy'}
              </Link>
              <Link to="/terms" className="hover:text-slate-300 transition">
                {language === 'es' ? 'Términos' : 'Terms of Use'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
