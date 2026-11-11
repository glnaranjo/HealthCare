import { Link } from 'react-router-dom';
import { CATEGORIES } from '../data/categories';
import { ARTICLES } from '../data/articles';
import { CategoryCard } from '../components/ui/CategoryCard';
import { ArticleCard } from '../components/ui/ArticleCard';
import { 
  ShieldAlert, 
  BookOpen, 
  ArrowRight, 
  Activity, 
  Flame, 
  HeartCrack, 
  Brain, 
  Droplet, 
  AlertTriangle, 
  Search,
  CheckCircle2,
  Award,
  Clock,
  Sparkles
} from 'lucide-react';

interface HomePageProps {
  onOpenSearch?: () => void;
}

export function HomePage({ onOpenSearch }: HomePageProps) {
  // 6 Essential quick-action situations as specified in section 5
  const quickSituations = [
    {
      title: 'Someone is unconscious',
      subtitle: 'Unresponsive, abnormal breathing, or collapsed.',
      slug: 'cardiac-arrest-cpr',
      icon: Activity,
      color: 'text-red-600 bg-red-50 border-red-200 hover:border-red-400',
      actionText: 'Check Breathing & Start CPR',
      urgentBadge: 'Immediate CPR'
    },
    {
      title: 'Someone is choking',
      subtitle: 'Cannot speak, clutching neck, silent coughing.',
      slug: 'choking-adult-child',
      icon: HeartCrack,
      color: 'text-amber-600 bg-amber-50 border-amber-200 hover:border-amber-400',
      actionText: 'Back Blows & Heimlich Thrusts',
      urgentBadge: 'Airway Block'
    },
    {
      title: 'Someone has a burn',
      subtitle: 'Scalds from boiling water, fire, or hot surfaces.',
      slug: 'burns-first-aid',
      icon: Flame,
      color: 'text-orange-600 bg-orange-50 border-orange-200 hover:border-orange-400',
      actionText: 'Cool With Running Water 20 min',
      urgentBadge: 'Cooling Protocol'
    },
    {
      title: 'Someone is bleeding',
      subtitle: 'Continuous bleeding, deep cut, or puncture wound.',
      slug: 'severe-bleeding-wounds',
      icon: Droplet,
      color: 'text-rose-600 bg-rose-50 border-rose-200 hover:border-rose-400',
      actionText: 'Apply Direct Firm Pressure',
      urgentBadge: 'Stop Bleeding'
    },
    {
      title: 'Someone is having a seizure',
      subtitle: 'Convulsions, body stiffening, loss of consciousness.',
      slug: 'seizures-first-aid',
      icon: AlertTriangle,
      color: 'text-purple-600 bg-purple-50 border-purple-200 hover:border-purple-400',
      actionText: 'Protect Head & Do NOT Restrain',
      urgentBadge: 'Protect From Harm'
    },
    {
      title: 'Someone may be having a stroke',
      subtitle: 'Face drooping, arm weakness, slurred speech.',
      slug: 'stroke-recognition',
      icon: Brain,
      color: 'text-blue-600 bg-blue-50 border-blue-200 hover:border-blue-400',
      actionText: 'BE-FAST Test & Emergency Call',
      urgentBadge: 'Time is Brain'
    },
  ];

  // Selected featured educational guides
  const featuredArticles = ARTICLES.slice(0, 6);

  return (
    <div className="space-y-16 sm:space-y-24 py-8 sm:py-12">
      
      {/* 1. HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold bg-brand-50 text-brand-700 border border-brand-200/80 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-brand-600" />
              <span>International Medical Education Manual</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
              Know what to do.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed mx-auto lg:mx-0">
              Practical health knowledge for everyday situations. Learn how to recognize emergencies, provide basic first aid and protect yourself and others.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              <Link
                to="/emergencies"
                className="bg-brand-600 hover:bg-brand-700 text-white font-bold px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition duration-150 flex items-center gap-2 text-sm sm:text-base"
              >
                <span>Explore First Aid</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#categories"
                className="bg-white hover:bg-slate-50 text-slate-800 font-semibold px-6 py-3.5 rounded-xl border border-slate-200 shadow-xs hover:border-slate-300 transition duration-150 flex items-center gap-2 text-sm sm:text-base"
              >
                <BookOpen className="w-4 h-4 text-brand-600" />
                <span>Browse Health Guides</span>
              </a>
            </div>

            {/* Quick search input trigger inside hero */}
            <div className="pt-2 max-w-lg mx-auto lg:mx-0">
              <button
                type="button"
                onClick={onOpenSearch}
                className="w-full flex items-center justify-between bg-white border border-slate-200 hover:border-brand-400 rounded-2xl px-4 py-3 text-slate-500 shadow-sm transition text-left group"
              >
                <div className="flex items-center gap-3">
                  <Search className="w-5 h-5 text-brand-600 group-hover:scale-110 transition" />
                  <span className="text-sm text-slate-600">
                    What should I do if someone faints or burns...?
                  </span>
                </div>
                <span className="bg-brand-50 text-brand-700 font-bold text-xs px-2.5 py-1 rounded-lg">
                  Search
                </span>
              </button>
            </div>
          </div>

          {/* Hero Visual Composition: Medical Clarity & Safe Action */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Background ambient blur */}
              <div className="absolute -inset-2 bg-gradient-to-r from-brand-500/20 to-teal-400/20 rounded-3xl blur-2xl opacity-60"></div>

              <div className="relative bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xl space-y-6">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
                    <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Universal Resuscitation Rules
                    </span>
                  </div>
                  <span className="text-[11px] font-semibold text-slate-400">WHO / IFRC</span>
                </div>

                {/* Core evidence-based stats cards */}
                <div className="space-y-3.5">
                  <div className="flex items-center gap-4 p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="w-10 h-10 rounded-xl bg-red-100 text-red-600 flex items-center justify-center font-bold text-sm">
                      100
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900">CPR Compression Cadence</p>
                      <p className="text-[11px] text-slate-500">100–120 compressions per minute to "Stayin' Alive"</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center font-bold text-sm">
                      20m
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900">Immediate Burn Cooling</p>
                      <p className="text-[11px] text-slate-500">20 minutes under clean running water, never ice or butter</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm">
                      FAST
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900">Acute Stroke Recognition</p>
                      <p className="text-[11px] text-slate-500">Face drooping, Arm weakness, Speech difficulty, Time</p>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center gap-1.5 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-brand-600" /> Non-diagnostic manual
                  </span>
                  <span className="font-semibold text-slate-700">100% Free & Open</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. QUICK ACCESS SECTION: "What do you need help with?" */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-red-600 bg-red-50 border border-red-200 px-2.5 py-0.5 rounded-full mb-2">
              <ShieldAlert className="w-3.5 h-3.5" /> High-Urgency Responses
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              What do you need help with right now?
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-xl">
              Tap the situation matching what you see. Follow clear, step-by-step actions without medical jargon.
            </p>
          </div>

          <Link
            to="/emergencies"
            className="text-xs sm:text-sm font-bold text-brand-600 hover:text-brand-700 flex items-center gap-1 self-start md:self-auto"
          >
            <span>View all emergency guides</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 6 Essential Emergency Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {quickSituations.map((sit, idx) => {
            const Icon = sit.icon;
            return (
              <Link
                key={idx}
                to={`/guide/${sit.slug}`}
                className="group bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:shadow-md hover:border-brand-500 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-105 ${sit.color}`}>
                      <Icon className="w-6 h-6 stroke-[2]" />
                    </div>
                    <span className="text-[11px] font-bold text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded-full">
                      {sit.urgentBadge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-600 transition duration-150 mb-1.5">
                    {sit.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {sit.subtitle}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-brand-600 group-hover:text-brand-700">
                  <span>{sit.actionText}</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition duration-150" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* 3. MAIN CATEGORIES SECTION */}
      <section id="categories" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-700 bg-brand-50 px-3 py-1 rounded-full border border-brand-200">
            Educational Curriculum
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-3">
            Explore Knowledge by Category
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Structured educational modules covering everything from severe trauma to everyday home prevention.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES.map((cat) => {
            const count = ARTICLES.filter(a => a.category === cat.id).length;
            return (
              <CategoryCard key={cat.id} category={cat} articleCount={count} />
            );
          })}
        </div>
      </section>

      {/* 4. FEATURED GUIDES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Evidence-Based Protocols
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              Featured Health & Safety Guides
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Standardized step-by-step instructions reviewed according to WHO and Red Cross guidelines.
            </p>
          </div>

          <Link
            to="/emergencies"
            className="text-xs sm:text-sm font-bold text-brand-600 hover:text-brand-700 flex items-center gap-1 self-start md:self-auto"
          >
            <span>Browse all articles</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </section>

      {/* 5. INTERACTIVE QUIZ & TRAINING TEASER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-navy-900 to-navy-950 text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-navy-800 relative overflow-hidden">
          <div className="absolute right-0 bottom-0 translate-x-12 translate-y-12 opacity-10 pointer-events-none">
            <Award className="w-96 h-96 text-white" />
          </div>

          <div className="max-w-2xl relative z-10 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-brand-500/20 text-brand-300 border border-brand-500/30">
              <Award className="w-4 h-4 text-brand-400" />
              <span>Interactive Knowledge Check</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Test your first aid decision-making.
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Would you know what to do if someone burned their hand or choked at dinner? Test your instincts with our clinical scenario quizzes and learn why specific actions save lives.
            </p>

            <div className="pt-3 flex flex-wrap items-center gap-4">
              <Link
                to="/quiz"
                className="bg-brand-500 hover:bg-brand-400 text-slate-950 font-bold px-6 py-3 rounded-xl transition duration-150 flex items-center gap-2 shadow-md"
              >
                <span>Take the 5-Minute Quiz</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <Clock className="w-4 h-4 text-slate-400" />
                <span>6 scenario-based questions</span>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

