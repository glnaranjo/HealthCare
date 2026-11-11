import { Link } from 'react-router-dom';
import { Article } from '../../types';
import { UrgencyBadge } from './UrgencyBadge';
import { Clock, ArrowRight, BookOpen } from 'lucide-react';

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
}

export function ArticleCard({ article, featured = false }: ArticleCardProps) {
  return (
    <article
      className={`group bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md hover:border-brand-400 transition-all duration-200 flex flex-col justify-between ${
        featured ? 'ring-1 ring-brand-500/10' : ''
      }`}
    >
      <div>
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <UrgencyBadge urgency={article.urgency} />
          <div className="flex items-center gap-1 text-xs text-slate-500 font-medium">
            <Clock className="w-3.5 h-3.5" />
            <span>{article.readingTimeMinutes} min read</span>
          </div>
        </div>

        <Link to={`/guide/${article.slug}`}>
          <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-600 transition duration-150 mb-2 leading-snug">
            {article.title}
          </h3>
        </Link>

        <p className="text-sm text-slate-600 leading-relaxed mb-6 line-clamp-2">
          {article.shortDescription}
        </p>
      </div>

      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
        <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1">
          <BookOpen className="w-3.5 h-3.5 text-slate-400" />
          {article.category.replace('-', ' ')}
        </span>
        <Link
          to={`/guide/${article.slug}`}
          className="inline-flex items-center gap-1 text-xs font-bold text-brand-600 group-hover:text-brand-700 transition"
        >
          <span>Read Protocol</span>
          <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition duration-150" />
        </Link>
      </div>
    </article>
  );
}

