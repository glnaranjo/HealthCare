import { Routes, Route, Link } from 'react-router-dom';
import { HeartPulse, ShieldAlert, BookOpen, Search, AlertTriangle, ArrowRight } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
      {/* Top Universal Emergency Disclaimer Banner */}
      <div className="bg-emergency-600 text-white text-xs sm:text-sm font-medium py-2 px-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 flex-shrink-0 animate-pulse text-amber-300" />
            <span>
              <strong>Emergency Notice:</strong> If you or someone nearby is experiencing a life-threatening medical emergency, call your local emergency services immediately (e.g., 911, 112, 999).
            </span>
          </div>
          <span className="hidden md:inline-block bg-white/20 px-2 py-0.5 rounded text-xs">
            Educational Platform
          </span>
        </div>
      </div>

      {/* Main Header / Navigation */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-brand-600 flex items-center justify-center text-white shadow-md shadow-brand-500/20">
              <HeartPulse className="w-6 h-6" />
            </div>
            <div>
              <span className="font-bold text-xl text-slate-900 tracking-tight flex items-center gap-1">
                Health<span className="text-brand-600">Care</span>
              </span>
              <span className="text-[10px] uppercase font-semibold text-slate-500 tracking-wider block -mt-1">
                International First Aid
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
            <Link to="/" className="text-brand-600 hover:text-brand-700 transition">Home</Link>
            <Link to="/emergencies" className="hover:text-brand-600 transition">Emergencies</Link>
            <Link to="/accidents" className="hover:text-brand-600 transition">Accidents & Injuries</Link>
            <Link to="/home-health" className="hover:text-brand-600 transition">Health at Home</Link>
            <Link to="/warning-signs" className="hover:text-brand-600 transition">Warning Signs</Link>
            <Link to="/prevention" className="hover:text-brand-600 transition">Prevention</Link>
          </nav>

          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-600 px-3 py-1.5 rounded-lg text-sm font-medium transition">
              <Search className="w-4 h-4" />
              <span className="hidden sm:inline">Search Guide</span>
            </button>
          </div>
        </div>
      </header>

      {/* Body Content */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomeOverview />} />
          <Route path="*" element={<HomeOverview />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-10 px-4 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left text-sm">
          <div>
            <div className="flex items-center justify-center md:justify-start gap-2 text-white font-semibold mb-1">
              <HeartPulse className="w-5 h-5 text-brand-400" />
              <span>HealthCare Platform</span>
            </div>
            <p className="text-xs text-slate-400 max-w-md">
              HealthCare provides educational information only. It does not replace professional medical advice, diagnosis, treatment or certified first aid training.
            </p>
          </div>
          <div className="text-xs text-slate-500">
            International Medical Guidelines • WHO • IFRC Standards
          </div>
        </div>
      </footer>
    </div>
  );
}

function HomeOverview() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-50 text-brand-700 border border-brand-200 mb-4">
          <ShieldAlert className="w-3.5 h-3.5" />
          International Health & First Aid Manual
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
          Know what to do.
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed">
          Practical health knowledge for everyday situations. Learn how to recognize emergencies, provide basic first aid, and protect yourself and others.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <button className="bg-brand-600 hover:bg-brand-700 text-white font-semibold px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition flex items-center gap-2">
            Explore First Aid <ArrowRight className="w-4 h-4" />
          </button>
          <button className="bg-white hover:bg-slate-50 text-slate-800 font-semibold px-6 py-3 rounded-xl border border-slate-200 shadow-sm transition flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-brand-600" /> Browse Health Guides
          </button>
        </div>
      </div>
    </div>
  );
}
