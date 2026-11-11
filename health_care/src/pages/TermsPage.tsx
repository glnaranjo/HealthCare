import { Link } from 'react-router-dom';
import { BookOpen, ChevronRight, AlertTriangle, ShieldCheck } from 'lucide-react';

export function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-slate-500">
        <Link to="/" className="hover:text-brand-600 transition">Home</Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <span className="text-slate-900 font-bold">Terms of Educational Use</span>
      </nav>

      {/* Header */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-brand-50 text-brand-700 border border-brand-200">
          <BookOpen className="w-4 h-4 text-brand-600" />
          <span>Public Health License</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Terms of Educational Use
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          By accessing HealthCare, you agree to these fundamental public health terms designed to prioritize casualty safety and proper clinical escalation.
        </p>
      </div>

      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6 text-sm text-slate-700 leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-amber-600" />
            1. Strictly Educational Nature
          </h2>
          <p>
            HealthCare is an informational compendium. It does not provide medical services, telemedicine, diagnosis, or clinical prescriptions. Reading our guides does not confer certified first-aider accreditation. Users are strongly encouraged to attend hands-on certified practical training provided by organizations like the Red Cross or St. John Ambulance.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-brand-600" />
            2. Priority of Emergency Services
          </h2>
          <p>
            In any scenario involving loss of consciousness, compromised airway, profuse hemorrhage, suspected stroke, or cardiac arrest, contacting local professional emergency dispatch must take priority over reading website instructions.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-brand-600" />
            3. Open Educational Sharing
          </h2>
          <p>
            You are encouraged to share, print, and disseminate HealthCare educational safety sheets for non-commercial safety education in schools, households, workplaces, and community centers, provided content integrity and source attributions are maintained.
          </p>
        </section>
      </div>

    </div>
  );
}

