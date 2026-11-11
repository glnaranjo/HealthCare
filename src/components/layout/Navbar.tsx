import { useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { 
  HeartPulse, 
  Search, 
  Menu, 
  X, 
  ShieldAlert, 
  Bandage, 
  Home as HomeIcon, 
  AlertCircle, 
  ShieldCheck, 
  Phone
} from 'lucide-react';
import { useCountry } from '../../context/CountryContext';

interface NavbarProps {
  onOpenSearch?: () => void;
}

export function Navbar({ onOpenSearch }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { selectedCountry } = useCountry();
  const navigate = useNavigate();

  const navItems = [
    { name: 'Home', path: '/', icon: HeartPulse },
    { name: 'Emergencies', path: '/emergencies', icon: ShieldAlert },
    { name: 'Accidents & Injuries', path: '/accidents', icon: Bandage },
    { name: 'Health at Home', path: '/home-health', icon: HomeIcon },
    { name: 'Warning Signs', path: '/warning-signs', icon: AlertCircle },
    { name: 'Prevention', path: '/prevention', icon: ShieldCheck },
  ];

  const handleSearchClick = () => {
    if (onOpenSearch) {
      onOpenSearch();
    } else {
      navigate('/search');
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo & Brand */}
          <Link 
            to="/" 
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded-lg p-1"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-brand-600 flex items-center justify-center text-white shadow-md shadow-brand-600/25 group-hover:bg-brand-700 transition duration-200">
              <HeartPulse className="w-6 h-6 sm:w-6 sm:h-6 text-white stroke-[2.2]" />
            </div>
            <div>
              <div className="font-extrabold text-xl sm:text-2xl text-slate-900 tracking-tight leading-none">
                Health<span className="text-brand-600">Care</span>
              </div>
              <p className="text-[10px] sm:text-[11px] uppercase font-bold text-slate-500 tracking-wider mt-0.5">
                First Aid & Everyday Health
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg text-sm font-semibold transition-colors duration-150 flex items-center gap-1.5 ${
                    isActive
                      ? 'text-brand-700 bg-brand-50/80'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Quick Actions (Search & Emergency Dial Shortcut) */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={handleSearchClick}
              type="button"
              className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200/80 text-slate-600 hover:text-slate-900 px-3.5 py-2 rounded-xl text-sm font-medium transition duration-150 border border-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
              title="Search guides and symptoms (Press / to search)"
            >
              <Search className="w-4 h-4 text-slate-500" />
              <span className="text-xs font-semibold text-slate-700">What should I do if...?</span>
              <kbd className="hidden md:inline-block text-[10px] bg-white border border-slate-300 text-slate-500 px-1.5 py-0.5 rounded shadow-2xs font-mono">
                Search
              </kbd>
            </button>

            <a
              href={`tel:${selectedCountry.ambulance || selectedCountry.generalEmergency}`}
              className="hidden xl:flex items-center gap-2 bg-emergency-50 hover:bg-emergency-100 text-emergency-700 border border-emergency-200 px-3 py-2 rounded-xl text-xs font-bold transition"
              title={`Call local ambulance (${selectedCountry.countryName})`}
            >
              <Phone className="w-3.5 h-3.5 text-emergency-600" />
              <span>Dial {selectedCountry.generalEmergency}</span>
            </a>
          </div>

          {/* Mobile Menu & Search Icon Buttons */}
          <div className="flex items-center gap-1.5 lg:hidden">
            <button
              onClick={handleSearchClick}
              aria-label="Search"
              className="p-2.5 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition focus:outline-none"
            >
              <Search className="w-5 h-5" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
              className="p-2.5 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white shadow-xl animate-in slide-in-from-top-2 duration-150">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-semibold transition ${
                      isActive
                        ? 'text-brand-700 bg-brand-50'
                        : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                    }`
                  }
                >
                  <Icon className="w-4 h-4 text-slate-500" />
                  <span>{item.name}</span>
                </NavLink>
              );
            })}

            <div className="pt-3 mt-3 border-t border-slate-100 flex flex-col gap-2">
              <button
                onClick={handleSearchClick}
                className="w-full flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 py-2.5 px-4 rounded-xl text-sm font-semibold transition"
              >
                <Search className="w-4 h-4" />
                <span>Search "What should I do if..."</span>
              </button>

              <div className="flex items-center justify-between p-3 bg-emergency-50 border border-emergency-200 rounded-xl text-xs text-emergency-800">
                <span className="font-medium">
                  {selectedCountry.countryName} Emergency: <strong>{selectedCountry.generalEmergency}</strong>
                </span>
                <a
                  href={`tel:${selectedCountry.ambulance || selectedCountry.generalEmergency}`}
                  className="bg-emergency-600 text-white font-bold px-3 py-1 rounded-lg text-xs hover:bg-emergency-700 transition"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

