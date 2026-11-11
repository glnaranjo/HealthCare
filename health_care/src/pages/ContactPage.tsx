import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Send, CheckCircle2, ChevronRight, ShieldAlert, PhoneCall } from 'lucide-react';
import { useCountry } from '../context/CountryContext';

export function ContactPage() {
  const { selectedCountry } = useCountry();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    subject: 'curriculum-review',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10">
      
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-slate-500">
        <Link to="/" className="hover:text-brand-600 transition">Home</Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <span className="text-slate-900 font-bold">Contact & Feedback</span>
      </nav>

      {/* Emergency Warning */}
      <div className="p-4 rounded-2xl bg-emergency-50 border border-emergency-200 text-emergency-900 text-xs sm:text-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-2xs">
        <div className="flex items-center gap-2">
          <ShieldAlert className="w-4 h-4 text-emergency-600 flex-shrink-0" />
          <span>
            <strong>Not for Emergencies:</strong> This contact form is exclusively for educational inquiries and curriculum feedback. If you need medical assistance, call emergency services immediately.
          </span>
        </div>
        <a
          href={`tel:${selectedCountry.ambulance || selectedCountry.generalEmergency}`}
          className="inline-flex items-center gap-1.5 bg-emergency-600 text-white font-bold px-3 py-1.5 rounded-lg text-xs hover:bg-emergency-700 transition flex-shrink-0"
        >
          <PhoneCall className="w-3.5 h-3.5" />
          <span>Dial {selectedCountry.generalEmergency}</span>
        </a>
      </div>

      {/* Header */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-brand-50 text-brand-700 border border-brand-200">
          <MessageSquare className="w-4 h-4 text-brand-600" />
          <span>Public Health Collaboration</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Contact & Curriculum Feedback
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          We welcome contributions, clinical corrections, and partnership inquiries from healthcare practitioners, certified first aid instructors, and public safety organizations.
        </p>
      </div>

      {/* Contact Form Container */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm">
        {submitted ? (
          <div className="text-center py-12 space-y-4 max-w-md mx-auto">
            <div className="w-16 h-16 rounded-3xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Message Received</h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Thank you for helping us maintain international first aid accuracy. Our educational editorial team will review your submission.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({ name: '', email: '', organization: '', subject: 'curriculum-review', message: '' });
              }}
              className="text-xs font-bold text-brand-600 hover:underline pt-2"
            >
              Send another note
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Dr. Jane Doe / John Smith"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 text-sm"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                  Medical / Safety Organization (Optional)
                </label>
                <input
                  type="text"
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  placeholder="e.g. Regional Red Cross / Emergency Hospital"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 text-sm"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                  Subject Category
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 text-sm bg-white"
                >
                  <option value="curriculum-review">Clinical Guideline Correction / Review</option>
                  <option value="translation-request">Translation or Localization Request</option>
                  <option value="partnership">Institutional Partnership / Training Center</option>
                  <option value="general-inquiry">General Platform Feedback</option>
                </select>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                Message / Clinical Details *
              </label>
              <textarea
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Please include specific guide references, source citations, or details of your inquiry..."
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 text-sm"
              />
            </div>

            <div className="flex items-center justify-between pt-2">
              <p className="text-xs text-slate-500">
                All submissions are held in strict privacy.
              </p>
              <button
                type="submit"
                className="bg-brand-600 hover:bg-brand-700 text-white font-bold px-6 py-3 rounded-xl transition duration-150 shadow-sm flex items-center gap-2 text-sm"
              >
                <Send className="w-4 h-4" />
                <span>Submit Feedback</span>
              </button>
            </div>
          </form>
        )}
      </div>

    </div>
  );
}
