import { Link } from 'react-router-dom';
import { CategoryMetadata } from '../../data/categories';
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
      className="group relative bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md hover:border-brand-400 transition-all duration-200 flex flex-col justify-between"
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center group-hover:bg-brand-600 group-hover:text-white transition duration-200 shadow-xs">
            <IconComponent className="w-6 h-6 stroke-[2]" />
          </div>
          {typeof articleCount === 'number' && (
            <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full">
              {articleCount} {articleCount === 1 ? 'guide' : 'guides'}
            </span>
          )}
        </div>

        <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-600 transition duration-150 mb-2">
          {category.title}
        </h3>

        <p className="text-sm text-slate-600 leading-relaxed mb-6">
          {category.description}
        </p>
      </div>

      <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-brand-600 group-hover:text-brand-700">
        <span>Explore Category Guides</span>
        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition duration-150" />
      </div>
    </Link>
  );
}

