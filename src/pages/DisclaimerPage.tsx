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

export function DisclaimerPage() {
  const { selectedCountry } = useCountry();

  const clinicalSources = [
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

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10">
      
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-slate-500">
        <Link to="/" className="hover:text-brand-600 transition">Home</Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <span className="text-slate-900 font-bold">Medical Disclaimer & Guidelines</span>
      </nav>

      {/* Main Header */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-800 border border-amber-200">
          <ShieldAlert className="w-4 h-4 text-amber-600" />
          <span>Official Educational Mandate</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Medical Disclaimer & Clinical Standards
        </h1>

        <p className="text-base text-slate-600 leading-relaxed">
          HealthCare is an international educational platform created to teach ordinary people essential health knowledge, first aid, emergency response, and everyday safety.
        </p>
      </div>

      {/* MANDATORY PERSISTENT NOTICE BOX */}
      <div className="bg-red-50 border-2 border-red-300 rounded-3xl p-6 sm:p-8 space-y-4 text-red-950">
        <div className="flex items-center gap-2 font-black text-lg text-red-900">
          <AlertTriangle className="w-6 h-6 text-red-600 animate-pulse flex-shrink-0" />
          <h2>Mandatory Medical Notice</h2>
        </div>

        <p className="text-sm sm:text-base leading-relaxed">
          <strong>"HealthCare provides educational information only. It does not replace professional medical advice, diagnosis, treatment, or certified first aid training. In an emergency, contact your local emergency services immediately."</strong>
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-red-200">
          <span className="text-xs text-red-900">
            Current country setting: <strong>{selectedCountry.countryName}</strong> (Emergency Dispatch: <strong>{selectedCountry.generalEmergency}</strong>)
          </span>
          <a
            href={`tel:${selectedCountry.ambulance || selectedCountry.generalEmergency}`}
            className="inline-flex items-center gap-2 bg-emergency-600 hover:bg-emergency-700 text-white font-bold px-4 py-2 rounded-xl text-xs transition duration-150 shadow"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Call {selectedCountry.generalEmergency}</span>
          </a>
        </div>
      </div>

      {/* Scope Boundaries */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
        <h2 className="text-xl font-bold text-slate-900">
          Platform Scope & What We Never Do
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
          <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-2">
            <div className="font-bold text-emerald-900 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>What HealthCare Provides:</span>
            </div>
            <ul className="space-y-1 list-disc pl-5 text-emerald-950">
              <li>Universal first aid step-by-step guidance.</li>
              <li>Emergency recognition criteria (stroke, CPR, choking).</li>
              <li>Clear demarcation of what NOT to do in an emergency.</li>
              <li>Accident prevention and home safety checklists.</li>
              <li>Location-aware international emergency numbers.</li>
            </ul>
          </div>

          <div className="p-4 rounded-2xl bg-red-50/70 border border-red-200 space-y-2">
            <div className="font-bold text-red-900 flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4 text-red-600" />
              <span>What HealthCare NEVER Does:</span>
            </div>
            <ul className="space-y-1 list-disc pl-5 text-red-950">
              <li>Never provides individual medical diagnosis.</li>
              <li>Never prescribes medication dosages.</li>
              <li>Never endorses unverified home remedies or folk treatments.</li>
              <li>Never uses generative AI to improvise clinical advice.</li>
              <li>Never substitutes practical certified in-person training.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Authoritative Sources List */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2 text-slate-900 font-bold text-xl">
          <BookOpen className="w-5 h-5 text-brand-600" />
          <h2>Recognized International Medical Sources</h2>
        </div>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          HealthCare curates and organizes content exclusively derived from established international public health and resuscitation consensus authorities:
        </p>

        <div className="grid grid-cols-1 gap-3">
          {clinicalSources.map((source, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h3 className="font-bold text-slate-900 text-sm">{source.name}</h3>
                <p className="text-xs text-slate-600 mt-0.5">{source.scope}</p>
              </div>
              <a
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-semibold text-brand-600 hover:text-brand-700 flex-shrink-0"
              >
                <span>Official Portal</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Contact & Feedback */}
      <div className="p-6 rounded-2xl bg-slate-100 border border-slate-200 text-xs text-slate-600 space-y-2">
        <h3 className="font-bold text-slate-900 text-sm">Editorial Curriculum Inquiries</h3>
        <p className="leading-relaxed">
          If you represent a medical authority, certified first aid training center, or public health organization and wish to review or propose improvements to our educational content, please contact our curriculum team via <Link to="/contact" className="text-brand-600 font-bold hover:underline">Contact & Feedback</Link>.
        </p>
      </div>

    </div>
  );
}

