import { Link } from 'react-router-dom';
import { ShieldCheck, ChevronRight, CheckCircle2, Lock } from 'lucide-react';

export function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-slate-500">
        <Link to="/" className="hover:text-brand-600 transition">Home</Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <span className="text-slate-900 font-bold">Privacy Policy</span>
      </nav>

      {/* Header */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-brand-50 text-brand-700 border border-brand-200">
          <Lock className="w-4 h-4 text-brand-600" />
          <span>Zero Personal Tracking</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Privacy Policy
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          HealthCare is an educational public utility. We believe that access to life-saving health education should be completely private, free, and unrestricted.
        </p>
      </div>

      {/* Privacy Principles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="p-6 bg-white rounded-3xl border border-slate-200 shadow-sm space-y-2">
          <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center font-bold">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-slate-900 text-base">No Medical Record Tracking</h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            We never ask for, record, or transmit personal health identifiers, medical history, or patient conditions.
          </p>
        </div>

        <div className="p-6 bg-white rounded-3xl border border-slate-200 shadow-sm space-y-2">
          <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center font-bold">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-slate-900 text-base">Local Search Execution</h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            All searches in "What should I do if...?" run directly inside your browser against our static local index. Your search queries never leave your device.
          </p>
        </div>

        <div className="p-6 bg-white rounded-3xl border border-slate-200 shadow-sm space-y-2">
          <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center font-bold">
            <Lock className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-slate-900 text-base">Local Country Preference</h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Your emergency telephone preference (e.g. 911 vs 112) is saved exclusively in your browser's local storage (`localStorage`) so emergency numbers persist across visits without tracking your identity.
          </p>
        </div>

        <div className="p-6 bg-white rounded-3xl border border-slate-200 shadow-sm space-y-2">
          <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center font-bold">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-slate-900 text-base">No Third-Party Advertising</h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            We do not sell advertising space, embed tracking pixels, or monetize your safety inquiries in any way.
          </p>
        </div>
      </div>

    </div>
  );
}

