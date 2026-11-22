import { Link } from 'react-router-dom';
import { CategoryMetadata } from '../../data/categories';
import { useLanguage } from '../../context/LanguageContext';
import { 
  ShieldAlert, 
  Bandage, 
  Home as HomeIcon, 
  AlertCircle, 
  FileText, 
  ShieldCheck, 
  ArrowRight 
} from 'lucide-react';

interface CategoryCardProps {
  category: CategoryMetadata;
  articleCount?: number;
}

export function CategoryCard({ category, articleCount }: CategoryCardProps) {
  const { language } = useLanguage();

  const iconMap: Record<string, React.ElementType> = {
    ShieldAlert,
    Bandage,
    Home: HomeIcon,
    AlertCircle,
    FileText,
    ShieldCheck,
  };

  const IconComponent = iconMap[category.iconName] || ShieldAlert;

  return (
    <Link
      to={`/${category.slug}`}
      className="group relative bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm hover:shadow-md hover:border-brand-400 dark:hover:border-brand-500 transition-all duration-200 flex flex-col justify-between"
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 rounded-xl bg-brand-50 dark:bg-brand-950/70 text-brand-600 dark:text-brand-400 flex items-center justify-center group-hover:bg-brand-600 group-hover:text-white transition duration-200 shadow-xs">
            <IconComponent className="w-6 h-6 stroke-[2]" />
          </div>
          {typeof articleCount === 'number' && (
            <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2.5 py-0.5 rounded-full">
              {articleCount} {articleCount === 1 ? (language === 'es' ? 'guía' : 'guide') : (language === 'es' ? 'guías' : 'guides')}
            </span>
          )}
        </div>

        <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition duration-150 mb-2">
          {category.title}
        </h3>

        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
          {category.description}
        </p>
      </div>

      <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-brand-600 dark:text-brand-400 group-hover:text-brand-700 dark:group-hover:text-brand-300">
        <span>{language === 'es' ? 'Explorar Guías de la Categoría' : 'Explore Category Guides'}</span>
        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition duration-150" />
      </div>
    </Link>
  );
}
