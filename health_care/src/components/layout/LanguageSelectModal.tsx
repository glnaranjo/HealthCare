import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { HeartPulse, Check, Globe, X, ArrowRight, ShieldCheck } from 'lucide-react';
import { Language } from '../../types';

export const LanguageSelectModal: React.FC = () => {
  const { 
    language, 
    hasSelectedLanguage, 
    isLanguageModalOpen, 
    setLanguage, 
    closeLanguageSelector 
  } = useLanguage();

  const [tempLang, setTempLang] = useState<Language>(language);

  if (!isLanguageModalOpen) {
    return null;
  }

  const handleConfirm = () => {
    setLanguage(tempLang);
  };

  const isMandatory = !hasSelectedLanguage;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="language-modal-title"
    >
      <div className="bg-white rounded-3xl max-w-lg w-full border border-slate-200 shadow-2xl overflow-hidden relative animate-in zoom-in-95 duration-150">
        
        {/* Close button only available if user had already picked an initial language */}
        {!isMandatory && (
          <button
            onClick={closeLanguageSelector}
            className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        )}

        {/* Modal Header */}
        <div className="bg-gradient-to-b from-brand-50 to-white px-6 pt-8 pb-4 text-center border-b border-slate-100">
          <div className="w-14 h-14 rounded-2xl bg-brand-600 text-white flex items-center justify-center mx-auto mb-4 shadow-lg shadow-brand-600/25">
            <HeartPulse className="w-8 h-8 stroke-[2.2]" />
          </div>

          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-700 bg-brand-100/70 px-3 py-1 rounded-full mb-2">
            <Globe className="w-3.5 h-3.5" />
            <span>Language Selection • Selección de Idioma</span>
          </div>

          <h2 id="language-modal-title" className="text-2xl font-black text-slate-900 tracking-tight">
            Health<span className="text-brand-600">Care</span>
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-sm mx-auto leading-relaxed">
            Please choose your preferred language to read emergency guides and medical instructions.
            <br />
            <span className="text-slate-500 text-xs">
              Por favor selecciona tu idioma para acceder a los protocolos y guías médicas.
            </span>
          </p>
        </div>

        {/* Language Options Cards */}
        <div className="p-6 space-y-3">
          
          {/* Spanish Option */}
          <button
            type="button"
            onClick={() => setTempLang('es')}
            className={`w-full text-left p-4 rounded-2xl border-2 transition-all flex items-center justify-between ${
              tempLang === 'es'
                ? 'border-brand-600 bg-brand-50/60 shadow-sm'
                : 'border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50/50'
            }`}
          >
            <div className="flex items-center gap-3.5">
              <span className="text-3xl" role="img" aria-label="Bandera de España / Español">
                🇪🇸
              </span>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-base font-extrabold text-slate-900">
                    Español
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-0.5">
                  Protocolos, guías y primeros auxilios en español
                </p>
              </div>
            </div>

            <div className={`w-6 h-6 rounded-full flex items-center justify-center border transition ${
              tempLang === 'es'
                ? 'bg-brand-600 border-brand-600 text-white'
                : 'border-slate-300 bg-white text-transparent'
            }`}>
              <Check className="w-3.5 h-3.5 stroke-[3]" />
            </div>
          </button>

          {/* English Option */}
          <button
            type="button"
            onClick={() => setTempLang('en')}
            className={`w-full text-left p-4 rounded-2xl border-2 transition-all flex items-center justify-between ${
              tempLang === 'en'
                ? 'border-brand-600 bg-brand-50/60 shadow-sm'
                : 'border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50/50'
            }`}
          >
            <div className="flex items-center gap-3.5">
              <span className="text-3xl" role="img" aria-label="English / UK Flag">
                🇬🇧
              </span>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-base font-extrabold text-slate-900">
                    English
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-0.5">
                  First aid manuals and emergency protocols in English
                </p>
              </div>
            </div>

            <div className={`w-6 h-6 rounded-full flex items-center justify-center border transition ${
              tempLang === 'en'
                ? 'bg-brand-600 border-brand-600 text-white'
                : 'border-slate-300 bg-white text-transparent'
            }`}>
              <Check className="w-3.5 h-3.5 stroke-[3]" />
            </div>
          </button>

          {/* Educational notice */}
          <div className="pt-2 flex items-center gap-2 text-[11px] text-slate-500 justify-center">
            <ShieldCheck className="w-3.5 h-3.5 text-brand-600" />
            <span>WHO & IFRC First Aid Standards • Standardized Clinical Guidance</span>
          </div>

        </div>

        {/* Modal Action Footer */}
        <div className="p-6 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-3">
          <p className="text-xs text-slate-500 hidden sm:block">
            {tempLang === 'es' ? 'Puedes cambiar el idioma luego.' : 'You can switch languages anytime.'}
          </p>

          <button
            type="button"
            onClick={handleConfirm}
            className="w-full sm:w-auto ml-auto inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-extrabold px-6 py-3 rounded-xl text-sm shadow-md transition duration-150 active:scale-95"
          >
            <span>{tempLang === 'es' ? 'Continuar al Sitio' : 'Continue to Manual'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};

