import { AlertTriangle, PhoneCall, Globe, Languages } from 'lucide-react';
import { useCountry } from '../../context/CountryContext';
import { useLanguage } from '../../context/LanguageContext';

export function DisclaimerBanner() {
  const { selectedCountry, setCountryByCode, allCountries } = useCountry();
  const { language, setLanguage, openLanguageSelector, t } = useLanguage();

  return (
    <aside aria-label="Emergency warning" className="bg-emergency-600 text-white text-xs sm:text-sm font-medium py-2 px-3 sm:px-4 shadow-sm border-b border-emergency-700/50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 sm:gap-3">
        <div className="flex items-center gap-2 text-center md:text-left">
          <AlertTriangle className="w-4 h-4 flex-shrink-0 text-amber-300" />
          <p>
            <strong className="font-bold">
              {language === 'es' ? 'Aviso Médico de Emergencia: ' : 'Medical Emergency Notice: '}
            </strong> 
            {t('disclaimerBannerText')}
          </p>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 bg-emergency-700/80 px-3 py-1 rounded-full text-xs self-center md:self-auto flex-shrink-0 border border-emergency-500/40">
          <div className="flex items-center gap-1.5">
            <PhoneCall className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
            <span>{language === 'es' ? 'Emergencias en' : 'Emergency in'} {selectedCountry.countryCode}:</span>
            <span className="font-bold text-white bg-white/20 px-1.5 py-0.5 rounded tracking-wide">
              {selectedCountry.ambulance || selectedCountry.generalEmergency}
            </span>
          </div>

          <div className="flex items-center gap-1 border-l border-white/20 pl-2">
            <Globe className="w-3 h-3 text-white/80" />
            <select
              value={selectedCountry.countryCode}
              onChange={(e) => setCountryByCode(e.target.value)}
              aria-label="Select Country for Emergency Information"
              className="bg-transparent text-white text-xs font-medium focus:outline-none cursor-pointer pr-1"
            >
              {allCountries.map((c) => (
                <option key={c.countryCode} value={c.countryCode} className="text-slate-900">
                  {c.countryName} ({c.generalEmergency})
                </option>
              ))}
            </select>
          </div>

          {/* Quick Language Switcher */}
          <div className="flex items-center gap-1 border-l border-white/20 pl-2">
            <Languages className="w-3 h-3 text-amber-300" />
            <div className="flex items-center gap-1 text-[11px] font-bold">
              <button
                type="button"
                onClick={() => setLanguage('es')}
                className={`px-1.5 py-0.5 rounded transition ${language === 'es' ? 'bg-white text-emergency-700 font-extrabold shadow-xs' : 'hover:text-amber-200 opacity-80'}`}
                title="Cambiar a Español"
              >
                ES
              </button>
              <span className="opacity-50">/</span>
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`px-1.5 py-0.5 rounded transition ${language === 'en' ? 'bg-white text-emergency-700 font-extrabold shadow-xs' : 'hover:text-amber-200 opacity-80'}`}
                title="Switch to English"
              >
                EN
              </button>
            </div>
            <button
              type="button"
              onClick={openLanguageSelector}
              className="text-[10px] underline ml-1 opacity-80 hover:opacity-100 hidden sm:inline"
            >
              {language === 'es' ? 'Selector' : 'Dialog'}
            </button>
          </div>

        </div>
      </div>
    </aside>
  );
}
