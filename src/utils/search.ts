import { Article, Language } from '../types';
import { getLocalizedArticles } from '../data/articles';

export interface SearchResult {
  article: Article;
  score: number;
  matchedTerms: string[];
}

const STOP_WORDS = new Set([
  // English
  'what', 'should', 'i', 'do', 'if', 'someone', 'a', 'an', 'the', 'is', 'has', 'my', 'how', 'to', 'can', 'in', 'on', 'at', 'with', 'for', 'of', 'and', 'or',
  // Spanish
  'que', 'qué', 'debo', 'debe', 'hacer', 'hago', 'si', 'alguien', 'un', 'una', 'el', 'la', 'los', 'las', 'en', 'con', 'por', 'para', 'de', 'y', 'o', 'como', 'cómo', 'mi', 'su'
]);

export function searchGuides(query: string, lang: Language = 'en'): Article[] {
  const articles = getLocalizedArticles(lang);

  if (!query || query.trim().length === 0) {
    return articles;
  }

  const cleanQuery = query.toLowerCase().trim();
  const rawTokens = cleanQuery.split(/[\s,?.!]+/).filter(Boolean);
  const meaningfulTokens = rawTokens.filter(t => !STOP_WORDS.has(t) && t.length > 1);
  const tokensToMatch = meaningfulTokens.length > 0 ? meaningfulTokens : rawTokens;

  const results: SearchResult[] = [];

  for (const article of articles) {
    let score = 0;
    const matched: string[] = [];

    const titleLower = article.title.toLowerCase();
    const summaryLower = article.summary.toLowerCase();
    const whatIsItLower = article.whatIsIt.toLowerCase();
    const keywords = article.searchKeywords.map(k => k.toLowerCase());

    // Exact full query match
    if (titleLower.includes(cleanQuery)) {
      score += 50;
      matched.push('exact title');
    }

    for (const token of tokensToMatch) {
      if (titleLower.includes(token)) {
        score += 20;
        matched.push(`title: ${token}`);
      }

      if (keywords.some(k => k.includes(token))) {
        score += 15;
        matched.push(`keyword: ${token}`);
      }

      if (summaryLower.includes(token) || whatIsItLower.includes(token)) {
        score += 8;
        matched.push(`content: ${token}`);
      }

      // Check action steps
      for (const step of article.whatToDo) {
        if (step.title.toLowerCase().includes(token) || step.description.toLowerCase().includes(token)) {
          score += 4;
        }
      }
    }

    // Boost critical life-threatening conditions
    if (article.urgency === 'critical') {
      score += 2;
    }

    if (score > 0) {
      results.push({ article, score, matchedTerms: matched });
    }
  }

  // Sort by highest score first
  results.sort((a, b) => b.score - a.score);

  return results.map(r => r.article);
}

export function getArticleBySlug(slug: string, lang: Language = 'en'): Article | undefined {
  const articles = getLocalizedArticles(lang);
  return articles.find(a => a.slug === slug);
}

export function getArticlesByCategory(category: string, lang: Language = 'en'): Article[] {
  const articles = getLocalizedArticles(lang);
  return articles.filter(a => a.category === category);
}

export function getRelatedArticles(slugs: string[], lang: Language = 'en'): Article[] {
  const articles = getLocalizedArticles(lang);
  return articles.filter(a => slugs.includes(a.slug));
}
