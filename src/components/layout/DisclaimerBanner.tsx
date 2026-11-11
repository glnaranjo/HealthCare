import { AlertTriangle, PhoneCall, Globe } from 'lucide-react';
import { useCountry } from '../../context/CountryContext';

export function DisclaimerBanner() {
  const { selectedCountry, setCountryByCode, allCountries } = useCountry();

  return (
    <aside aria-label="Emergency warning" className="bg-emergency-600 text-white text-xs sm:text-sm font-medium py-2 px-3 sm:px-4 shadow-sm border-b border-emergency-700/50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 sm:gap-3">
        <div className="flex items-center gap-2 text-center md:text-left">
          <AlertTriangle className="w-4 h-4 flex-shrink-0 text-amber-300" />
          <p>
            <strong className="font-bold">Medical Emergency Notice:</strong> This platform is strictly educational. If you or someone nearby is experiencing a life-threatening condition, call emergency services immediately.
          </p>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 bg-emergency-700/80 px-3 py-1 rounded-full text-xs self-center md:self-auto flex-shrink-0 border border-emergency-500/40">
          <div className="flex items-center gap-1.5">
            <PhoneCall className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
            <span>Emergency in {selectedCountry.countryCode}:</span>
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
        </div>
      </div>
    </aside>
  );
}

