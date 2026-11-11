import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { CountryProvider } from './context/CountryContext';
import { Layout } from './components/layout/Layout';
import { ShieldAlert, BookOpen, ArrowRight, Activity, Flame, HeartCrack } from 'lucide-react';

export default function App() {
  const [, setSearchModalOpen] = useState(false);

  return (
    <CountryProvider>
      <Layout onOpenSearch={() => setSearchModalOpen(true)}>
        <Routes>
          <Route path="/" element={<HomeOverview onOpenSearch={() => setSearchModalOpen(true)} />} />
          <Route path="/emergencies" element={<CategoryPlaceholder title="Medical Emergencies" description="Life-threatening conditions, CPR, AED, choking, seizures, and stroke response." />} />
          <Route path="/accidents" element={<CategoryPlaceholder title="Accidents & Injuries" description="First aid for burns, wounds, bleeding, fractures, sprains, and bites." />} />
          <Route path="/home-health" element={<CategoryPlaceholder title="Health at Home" description="First aid kit essentials, temperature checks, medication safety, and poison control." />} />
          <Route path="/warning-signs" element={<CategoryPlaceholder title="Recognizing Warning Signs" description="Identifying fever red flags, respiratory distress, and dehydration." />} />
          <Route path="/preparedness" element={<CategoryPlaceholder title="Emergency Preparedness" description="Household safety plans, emergency bags, and crisis contact sheets." />} />
          <Route path="/prevention" element={<CategoryPlaceholder title="Prevention & Everyday Safety" description="Heat, cold, workplace, kitchen, and infection prevention guidelines." />} />
          <Route path="/search" element={<CategoryPlaceholder title="What should I do if...?" description="Interactive natural language first aid situation finder." />} />
          <Route path="/quiz" element={<CategoryPlaceholder title="First Aid Knowledge Quiz" description="Interactive scenario tests based on WHO and Red Cross guidelines." />} />
          <Route path="/disclaimer" element={<CategoryPlaceholder title="Medical Disclaimer" description="Official educational scope, non-diagnostic statement, and international guidance standards." />} />
          <Route path="*" element={<HomeOverview onOpenSearch={() => setSearchModalOpen(true)} />} />
        </Routes>
      </Layout>
    </CountryProvider>
  );
}

function HomeOverview({ onOpenSearch }: { onOpenSearch: () => void }) {
  const quickEmergencies = [
    { title: 'Someone is unconscious', icon: Activity, desc: 'Check breathing, call emergency, place in recovery position.' },
    { title: 'Someone is choking', icon: HeartCrack, desc: 'Recognize airway obstruction and perform back blows/abdominal thrusts.' },
    { title: 'Someone has a burn', icon: Flame, desc: 'Cool immediately with clean running water for 20 minutes.' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-50 text-brand-700 border border-brand-200 mb-5">
          <ShieldAlert className="w-4 h-4 text-brand-600" />
          International Educational First Aid Platform
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-5">
          Know what to do.
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          Practical health knowledge for everyday situations. Learn how to recognize emergencies, provide basic first aid, and protect yourself and others.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-8">
          <button 
            onClick={onOpenSearch}
            className="bg-brand-600 hover:bg-brand-700 text-white font-semibold px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition duration-150 flex items-center gap-2 text-sm sm:text-base"
          >
            Explore First Aid <ArrowRight className="w-4 h-4" />
          </button>
          <a
            href="/emergencies"
            className="bg-white hover:bg-slate-50 text-slate-800 font-semibold px-6 py-3.5 rounded-xl border border-slate-200 shadow-sm transition duration-150 flex items-center gap-2 text-sm sm:text-base"
          >
            <BookOpen className="w-4 h-4 text-brand-600" /> Browse Health Guides
          </a>
        </div>
      </div>

      {/* Quick Situation Cards Preview */}
      <div className="mb-14">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              What do you need help with right now?
            </h2>
            <p className="text-sm text-slate-500">
              Immediate response guides for high-frequency emergency situations.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {quickEmergencies.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-brand-300 transition group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center mb-4 group-hover:bg-brand-600 group-hover:text-white transition">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-brand-600 transition">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center text-xs font-bold text-brand-600 group-hover:text-brand-700">
                  <span>View Step-by-Step Action Guide</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function CategoryPlaceholder({ title, description }: { title: string; description: string }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
      <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
        <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center mx-auto mb-4">
          <BookOpen className="w-6 h-6" />
        </div>
        <h1 className="text-2xl font-bold text-slate-900 mb-2">{title}</h1>
        <p className="text-slate-600 text-sm mb-6">{description}</p>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-600">
          Module ready for comprehensive guides data integration
        </span>
      </div>
    </div>
  );
}
