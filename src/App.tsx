import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { CountryProvider } from './context/CountryContext';
import { Layout } from './components/layout/Layout';
import { HomePage } from './pages/HomePage';
import { BookOpen } from 'lucide-react';

export default function App() {
  const [, setSearchModalOpen] = useState(false);

  return (
    <CountryProvider>
      <Layout onOpenSearch={() => setSearchModalOpen(true)}>
        <Routes>
          <Route path="/" element={<HomePage onOpenSearch={() => setSearchModalOpen(true)} />} />
          <Route path="/emergencies" element={<CategoryPlaceholder title="Medical Emergencies" description="Life-threatening conditions, CPR, AED, choking, seizures, and stroke response." />} />
          <Route path="/accidents" element={<CategoryPlaceholder title="Accidents & Injuries" description="First aid for burns, wounds, bleeding, fractures, sprains, and bites." />} />
          <Route path="/home-health" element={<CategoryPlaceholder title="Health at Home" description="First aid kit essentials, temperature checks, medication safety, and poison control." />} />
          <Route path="/warning-signs" element={<CategoryPlaceholder title="Recognizing Warning Signs" description="Identifying fever red flags, respiratory distress, and dehydration." />} />
          <Route path="/preparedness" element={<CategoryPlaceholder title="Emergency Preparedness" description="Household safety plans, emergency bags, and crisis contact sheets." />} />
          <Route path="/prevention" element={<CategoryPlaceholder title="Prevention & Everyday Safety" description="Heat, cold, workplace, kitchen, and infection prevention guidelines." />} />
          <Route path="/search" element={<CategoryPlaceholder title="What should I do if...?" description="Interactive natural language first aid situation finder." />} />
          <Route path="/quiz" element={<CategoryPlaceholder title="First Aid Knowledge Quiz" description="Interactive scenario tests based on WHO and Red Cross guidelines." />} />
          <Route path="/disclaimer" element={<CategoryPlaceholder title="Medical Disclaimer" description="Official educational scope, non-diagnostic statement, and international guidance standards." />} />
          <Route path="*" element={<HomePage onOpenSearch={() => setSearchModalOpen(true)} />} />
        </Routes>
      </Layout>
    </CountryProvider>
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
