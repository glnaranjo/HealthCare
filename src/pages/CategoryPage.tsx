import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getLocalizedCategories } from '../data/categories';
import { ARTICLES } from '../data/articles';
import { ArticleCard } from '../components/ui/ArticleCard';
import { MainCategory } from '../types';
import { 
  ShieldAlert, 
  Bandage, 
  Home as HomeIcon, 
  AlertCircle, 
  FileText, 
  ShieldCheck, 
  ChevronRight, 
  PhoneCall, 
  Filter,
  Activity,
  CheckSquare
} from 'lucide-react';
import { useCountry } from '../context/CountryContext';
import { useLanguage } from '../context/LanguageContext';

interface CategoryPageProps {
  forcedCategory?: MainCategory;
}

export function CategoryPage({ forcedCategory }: CategoryPageProps) {
  const { categorySlug } = useParams<{ categorySlug?: string }>();
  const { selectedCountry } = useCountry();
  const { language } = useLanguage();
  const [selectedUrgency, setSelectedUrgency] = useState<string>('all');

  const categories = getLocalizedCategories(language);
  const currentCategorySlug = forcedCategory || categorySlug || 'emergencies';
  const category = categories.find(c => c.slug === currentCategorySlug) || categories[0];

  const categoryArticles = ARTICLES.filter(a => a.category === category.id);
  
  const filteredArticles = selectedUrgency === 'all' 
    ? categoryArticles 
    : categoryArticles.filter(a => a.urgency === selectedUrgency);

  const iconMap: Record<string, React.ElementType> = {
    ShieldAlert,
    Bandage,
    Home: HomeIcon,
    AlertCircle,
    FileText,
    ShieldCheck,
  };
  const IconComponent = iconMap[category.iconName] || ShieldAlert;

  const urgencies: { label: string; value: string }[] = [
    { label: language === 'es' ? 'Todos los Protocolos' : 'All Protocols', value: 'all' },
    { label: language === 'es' ? 'Solo Críticos' : 'Critical Only', value: 'critical' },
    { label: language === 'es' ? 'Atención Urgente' : 'Urgent Care', value: 'urgent' },
    { label: language === 'es' ? 'Precaución y Prevención' : 'Safety / Precaution', value: 'precautionary' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10">
      
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-slate-500">
        <Link to="/" className="hover:text-brand-600 transition">
          {language === 'es' ? 'Inicio' : 'Home'}
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <span className="text-slate-900 font-bold">{category.title}</span>
      </nav>

      {/* Category Hero Header */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="max-w-2xl space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center shadow-xs">
              <IconComponent className="w-6 h-6 stroke-[2]" />
            </div>
            <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${category.badgeColor}`}>
              {category.shortTitle} {language === 'es' ? '• Formación' : 'Curriculum'}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {category.title}
          </h1>

          <p className="text-base text-slate-600 leading-relaxed">
            {category.description}
          </p>
        </div>

        {/* Emergency quick-action callout for high urgency categories */}
        {(category.id === 'emergencies' || category.id === 'accidents') && (
          <div className="bg-emergency-50 border border-emergency-200 p-5 rounded-2xl max-w-sm flex-shrink-0 flex flex-col justify-between gap-3 shadow-xs">
            <div className="flex items-center gap-2 text-emergency-800 text-xs font-bold uppercase tracking-wide">
              <PhoneCall className="w-4 h-4 text-emergency-600 animate-pulse" />
              <span>{language === 'es' ? 'Peligro Vital Inmediato' : 'Immediate Life Hazard'}</span>
            </div>
            <p className="text-xs text-emergency-900 leading-relaxed">
              {language === 'es' 
                ? 'Si una persona no responde, no respira o presenta hemorragia masiva, llama a emergencias sin demora.' 
                : 'If a person is unresponsive, turning blue, or hemorrhaging severely, call emergency services without delay.'}
            </p>
            <a
              href={`tel:${selectedCountry.ambulance || selectedCountry.generalEmergency}`}
              className="inline-flex items-center justify-center gap-2 bg-emergency-600 hover:bg-emergency-700 text-white font-bold py-2 px-3 rounded-xl text-xs transition duration-150 shadow"
            >
              <span>{language === 'es' ? 'Llamar al' : 'Dial'} {selectedCountry.generalEmergency} ({selectedCountry.countryName})</span>
            </a>
          </div>
        )}

        {/* Vital Signs reference callout for Warning Signs category */}
        {category.id === 'warning-signs' && (
          <div className="bg-brand-50/80 border border-brand-200 p-5 rounded-2xl max-w-sm flex-shrink-0 flex flex-col justify-between gap-3 shadow-xs">
            <div className="flex items-center gap-2 text-brand-800 text-xs font-bold uppercase tracking-wide">
              <Activity className="w-4 h-4 text-brand-600" />
              <span>{language === 'es' ? 'Herramienta Clínica Interactiva' : 'Interactive Clinical Tool'}</span>
            </div>
            <p className="text-xs text-brand-900 leading-relaxed">
              {language === 'es' 
                ? 'Consulta rangos normales de pulso, respiraciones, presión arterial y temperatura para todas las edades.'
                : 'Check resting baselines for pulse, respirations, blood pressure, and body temperature across all age groups.'}
            </p>
            <Link
              to="/vital-signs"
              className="inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-bold py-2 px-3 rounded-xl text-xs transition duration-150 shadow"
            >
              <span>{language === 'es' ? 'Ver Guía de Signos Vitales' : 'Explore Vital Signs Guide'} &rarr;</span>
            </Link>
          </div>
        )}

        {/* Kit Checklist callout for Health at Home category */}
        {category.id === 'home-health' && (
          <div className="bg-brand-50/80 border border-brand-200 p-5 rounded-2xl max-w-sm flex-shrink-0 flex flex-col justify-between gap-3 shadow-xs">
            <div className="flex items-center gap-2 text-brand-800 text-xs font-bold uppercase tracking-wide">
              <CheckSquare className="w-4 h-4 text-brand-600" />
              <span>{language === 'es' ? 'Lista Interactiva' : 'Interactive Checklist'}</span>
            </div>
            <p className="text-xs text-brand-900 leading-relaxed">
              {language === 'es' 
                ? 'Revisa y audita los insumos médicos de tu botiquín con guardado automático local.'
                : 'Track and audit the medical supplies inside your home or travel first aid kit with automatic local saving.'}
            </p>
            <Link
              to="/kit-checklist"
              className="inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-bold py-2 px-3 rounded-xl text-xs transition duration-150 shadow"
            >
              <span>{language === 'es' ? 'Auditar Botiquín' : 'Audit First Aid Kit'} &rarr;</span>
            </Link>
          </div>
        )}
      </div>

      {/* Filter and Content Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-slate-500" />
          <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
            {language === 'es' ? 'Filtrar por Urgencia:' : 'Filter by Urgency:'}
          </span>
          <div className="flex flex-wrap gap-1.5 ml-2">
            {urgencies.map((u) => (
              <button
                key={u.value}
                onClick={() => setSelectedUrgency(u.value)}
                className={`text-xs px-3 py-1.5 rounded-lg font-semibold transition ${
                  selectedUrgency === u.value
                    ? 'bg-brand-600 text-white shadow-2xs'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                }`}
              >
                {u.label}
              </button>
            ))}
          </div>
        </div>

        <div className="text-xs font-semibold text-slate-500">
          {language === 'es' ? 'Mostrando' : 'Showing'} <strong>{filteredArticles.length}</strong> {filteredArticles.length === 1 ? (language === 'es' ? 'guía' : 'guide') : (language === 'es' ? 'guías' : 'guides')}
        </div>
      </div>

      {/* Articles Grid */}
      {filteredArticles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8">
          <AlertCircle className="w-10 h-10 text-slate-400 mx-auto mb-3" />
          <h3 className="text-lg font-bold text-slate-900 mb-1">
            {language === 'es' ? 'Ninguna guía coincide con este filtro' : 'No guides match this filter'}
          </h3>
          <p className="text-sm text-slate-500 mb-4">
            {language === 'es' ? 'Intenta seleccionar "Todos los Protocolos" para ver el material.' : 'Try selecting "All Protocols" to see all educational material in this category.'}
          </p>
          <button
            onClick={() => setSelectedUrgency('all')}
            className="text-xs font-bold text-brand-600 hover:text-brand-700 underline"
          >
            {language === 'es' ? 'Restablecer Filtros' : 'Reset Filters'}
          </button>
        </div>
      )}

      {/* Safety Notice Footer for Category */}
      <div className="p-4 rounded-2xl bg-slate-100 border border-slate-200/80 text-xs text-slate-600 flex items-center justify-between flex-wrap gap-2">
        <span>
          <strong>{language === 'es' ? 'Estándar Educativo:' : 'Educational Standard:'}</strong> {language === 'es' 
            ? `Todas las guías de ${category.title} se formulan siguiendo consensos internacionales de primeros auxilios.`
            : `All ${category.title} guides are formulated according to international first aid guidelines and consensus statements.`}
        </span>
        <Link to="/disclaimer" className="text-brand-600 font-bold hover:underline">
          {language === 'es' ? 'Aviso de Alcance Médico' : 'Medical Scope Disclaimer'} &rarr;
        </Link>
      </div>

    </div>
  );
}
