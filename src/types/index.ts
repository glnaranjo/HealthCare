export type UrgencyLevel = 'critical' | 'urgent' | 'moderate' | 'precautionary';

export type Language = 'es' | 'en';

export type MainCategory = 
  | 'emergencies' 
  | 'accidents' 
  | 'home-health' 
  | 'warning-signs' 
  | 'preparedness' 
  | 'prevention';

export interface ActionStep {
  step: number;
  title: string;
  description: string;
  warning?: string;
}

export interface ArticleSource {
  name: string;
  url?: string;
  year?: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  category: MainCategory;
  urgency: UrgencyLevel;
  readingTimeMinutes: number;
  lastReviewed: string;
  reviewedBy: string;
  
  // Standardized Article Content
  summary: string;
  whatIsIt: string;
  howToRecognize: string[];
  whatToDo: ActionStep[];
  whatNotToDo: string[];
  whenToSeekMedicalHelp: string[];
  
  sources: ArticleSource[];
  relatedArticles: string[]; // slug references
  searchKeywords: string[];
}

export interface EmergencyPhoneGuide {
  countryCode: string;
  countryName: string;
  generalEmergency: string;
  ambulance: string;
  police: string;
  fire: string;
  poisonControl?: string;
  notes?: string;
}

export interface QuizQuestion {
  id: string;
  topic: string;
  question: string;
  context?: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
  medicalAuthority: string;
}

