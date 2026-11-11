import { Link } from 'react-router-dom';
import { HeartPulse, Shield, HelpCircle, Phone, BookOpen, AlertCircle } from 'lucide-react';
import { useCountry } from '../../context/CountryContext';

export function Footer() {
  const { selectedCountry } = useCountry();

  return (
    <footer className="bg-navy-950 text-slate-300 border-t border-navy-800 text-sm mt-auto">
      {/* Upper Footer: Core educational statement & emergency callout */}
      <div className="border-b border-navy-900 bg-navy-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold bg-brand-500/10 text-brand-400 border border-brand-500/20 mb-2">
                <Shield className="w-3.5 h-3.5" /> Core Educational Mission
              </span>
              <h3 className="text-lg font-bold text-white mb-1">
                "Know what to do." Practical Health Knowledge for Everyday People.
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-2xl">
                HealthCare is an international educational platform designed to empower individuals with essential first aid knowledge and accident prevention strategies. We believe rapid, informed response saves lives.
              </p>
            </div>

            <div className="bg-navy-900 border border-navy-800 p-4 rounded-2xl flex flex-col sm:flex-row md:flex-col justify-between gap-3 shadow-lg">
              <div>
                <p className="text-xs uppercase font-bold text-slate-400 tracking-wider">
                  Emergency Dispatch ({selectedCountry.countryName})
                </p>
                <p className="text-2xl font-black text-white mt-0.5 tracking-tight">
                  {selectedCountry.ambulance || selectedCountry.generalEmergency}
                </p>
                {selectedCountry.poisonControl && (
                  <p className="text-[11px] text-slate-400 mt-1">
                    Poison Control: <span className="text-slate-200">{selectedCountry.poisonControl}</span>
                  </p>
                )}
              </div>
              <a
                href={`tel:${selectedCountry.ambulance || selectedCountry.generalEmergency}`}
                className="inline-flex items-center justify-center gap-2 bg-emergency-600 hover:bg-emergency-700 text-white font-semibold py-2 px-3 rounded-xl text-xs transition duration-150 shadow"
              >
                <Phone className="w-3.5 h-3.5" /> Call Emergency Line
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
              <span className="font-extrabold text-lg text-white tracking-tight">
                Health<span className="text-brand-400">Care</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              International manual for everyday medical situations, home safety, and emergency response guidelines.
            </p>
            <div className="pt-2">
              <Link 
                to="/quiz" 
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-400 hover:text-brand-300 transition"
              >
                <HelpCircle className="w-4 h-4" /> Test Your First Aid Skills (Quiz) &rarr;
              </Link>
            </div>
          </div>

          {/* Col 2: Educational Categories */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-3">
              Guides & Manuals
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/emergencies" className="text-slate-400 hover:text-white transition">Medical Emergencies (CPR, AED, Stroke)</Link>
              </li>
              <li>
                <Link to="/accidents" className="text-slate-400 hover:text-white transition">Accidents & Injuries (Burns, Bleeding)</Link>
              </li>
              <li>
                <Link to="/home-health" className="text-slate-400 hover:text-white transition">Health at Home (First Aid Kit, Storage)</Link>
              </li>
              <li>
                <Link to="/warning-signs" className="text-slate-400 hover:text-white transition">Recognizing Warning Signs</Link>
              </li>
              <li>
                <Link to="/preparedness" className="text-slate-400 hover:text-white transition">Emergency Preparedness</Link>
              </li>
              <li>
                <Link to="/prevention" className="text-slate-400 hover:text-white transition">Everyday Prevention & Safety</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Recognized Standards */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-3">
              Recognized Sources
            </h4>
            <p className="text-xs text-slate-400 mb-2 leading-relaxed">
              Curated following guidelines established by leading international medical bodies:
            </p>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li className="flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-brand-400 flex-shrink-0" />
                <span>World Health Organization (WHO)</span>
              </li>
              <li className="flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-brand-400 flex-shrink-0" />
                <span>International Federation of Red Cross (IFRC)</span>
              </li>
              <li className="flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-brand-400 flex-shrink-0" />
                <span>European Resuscitation Council (ERC)</span>
              </li>
              <li className="flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-brand-400 flex-shrink-0" />
                <span>American Heart Association (AHA)</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Legal & Contact */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-3">
              Platform & Legal
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/disclaimer" className="text-slate-400 hover:text-white transition flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5 text-amber-400" />
                  Medical Disclaimer
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-slate-400 hover:text-white transition">Privacy Policy (No tracking)</Link>
              </li>
              <li>
                <Link to="/terms" className="text-slate-400 hover:text-white transition">Terms of Educational Use</Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-white transition">Contact & Feedback</Link>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Mandatory Legal Disclaimer Banner */}
      <div className="border-t border-navy-900 bg-black/40 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400 text-center sm:text-left">
          <div className="max-w-3xl">
            <strong className="text-slate-200">Mandatory Medical Notice: </strong>
            HealthCare provides educational information only. It does not replace professional medical advice, diagnosis, treatment or certified first aid training. In an emergency, contact your local emergency services immediately.
          </div>
          <div className="text-slate-400 flex-shrink-0">
            © {new Date().getFullYear()} HealthCare. International Public Health Initiative.
          </div>
        </div>
      </div>
    </footer>
  );
}
