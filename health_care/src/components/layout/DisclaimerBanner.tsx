import { AlertTriangle, PhoneCall, Globe } from 'lucide-react';
import { useCountry } from '../../context/CountryContext';
import { useLanguage } from '../../context/LanguageContext';

export function DisclaimerBanner() {
  const { selectedCountry, setCountryByCode, allCountries } = useCountry();
  const { language, t } = useLanguage();

  return (
    <aside aria-label="Emergency warning" className="bg-emergency-600 text-white text-xs sm:text-sm font-medium py-2 px-4 sm:px-6 lg:px-8 xl:px-12 shadow-sm border-b border-emergency-700/50 w-full">
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-2 sm:gap-3">
        <div className="flex items-center gap-2 text-center md:text-left">
          <AlertTriangle className="w-4 h-4 flex-shrink-0 text-amber-300" />
          <p className="leading-snug">
            <strong className="font-bold">
              {language === 'es' ? 'Aviso Médico de Emergencia: ' : 'Medical Emergency Notice: '}
            </strong> 
            {t('disclaimerBannerText')}
          </p>
        </div>

        {/* Local Emergency Dispatch Callout & Country Selector */}
        <div className="flex items-center gap-2 sm:gap-3 bg-emergency-700/80 px-3 py-1 rounded-full text-xs self-center md:self-auto flex-shrink-0 border border-emergency-500/40 max-w-full">
          <div className="flex items-center gap-1.5 flex-shrink-0">
            <PhoneCall className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
            <span className="hidden xs:inline">
              {language === 'es' ? 'Emergencias en' : 'Emergency in'} {selectedCountry.countryCode}:
            </span>
            <span className="xs:hidden">
              {selectedCountry.countryCode}:
            </span>
            <span className="font-bold text-white bg-white/20 px-1.5 py-0.5 rounded tracking-wide">
              {selectedCountry.ambulance || selectedCountry.generalEmergency}
            </span>
          </div>

          <div className="flex items-center gap-1 border-l border-white/20 pl-2 min-w-0">
            <Globe className="w-3 h-3 text-white/80 flex-shrink-0" />
            <select
              value={selectedCountry.countryCode}
              onChange={(e) => setCountryByCode(e.target.value)}
              aria-label="Select Country for Emergency Information"
              className="bg-transparent text-white text-xs font-medium focus:outline-none cursor-pointer pr-1 truncate max-w-[130px] sm:max-w-[190px] md:max-w-none"
            >
              {allCountries.map((c) => (
                <option key={c.countryCode} value={c.countryCode} className="text-slate-900">
                  {c.countryName} ({c.generalEmergency})
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </aside>
  );
}
