import { MainCategory, Language } from '../types';

export interface CategoryMetadata {
  id: MainCategory;
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  color: string;
  badgeColor: string;
  iconName: string;
  articleCount?: number;
}

export const CATEGORIES_DATA: Record<Language, CategoryMetadata[]> = {
  en: [
    {
      id: 'emergencies',
      slug: 'emergencies',
      title: 'Medical Emergencies',
      shortTitle: 'Emergencies',
      description: 'Immediate, life-threatening conditions requiring urgent action: CPR, choking, stroke, and cardiac arrest.',
      color: 'border-red-500 text-red-600 bg-red-50',
      badgeColor: 'bg-red-100 text-red-800 border-red-200',
      iconName: 'ShieldAlert',
    },
    {
      id: 'accidents',
      slug: 'accidents',
      title: 'Accidents & Injuries',
      shortTitle: 'Accidents',
      description: 'Practical first aid for trauma: cuts, bleeding, burns, fractures, sprains, and insect/animal bites.',
      color: 'border-amber-500 text-amber-600 bg-amber-50',
      badgeColor: 'bg-amber-100 text-amber-800 border-amber-200',
      iconName: 'Bandage',
    },
    {
      id: 'home-health',
      slug: 'home-health',
      title: 'Health at Home',
      shortTitle: 'Home Health',
      description: 'Safe medication management, building a reliable first aid kit, fever measurement, and toxic substance safety.',
      color: 'border-brand-500 text-brand-600 bg-brand-50',
      badgeColor: 'bg-brand-100 text-brand-800 border-brand-200',
      iconName: 'Home',
    },
    {
      id: 'warning-signs',
      slug: 'warning-signs',
      title: 'Recognizing Warning Signs',
      shortTitle: 'Warning Signs',
      description: 'Identifying subtle and serious red flags: respiratory distress, severe dehydration, and infection symptoms.',
      color: 'border-indigo-500 text-indigo-600 bg-indigo-50',
      badgeColor: 'bg-indigo-100 text-indigo-800 border-indigo-200',
      iconName: 'AlertCircle',
    },
    {
      id: 'preparedness',
      slug: 'preparedness',
      title: 'Emergency Preparedness',
      shortTitle: 'Preparedness',
      description: 'Planning ahead: family crisis action plans, disaster emergency supplies, and travel safety protocols.',
      color: 'border-teal-500 text-teal-600 bg-teal-50',
      badgeColor: 'bg-teal-100 text-teal-800 border-teal-200',
      iconName: 'FileText',
    },
    {
      id: 'prevention',
      slug: 'prevention',
      title: 'Prevention & Safety',
      shortTitle: 'Prevention',
      description: 'Proactive habits for daily life: preventing heat stroke, hypothermia, household falls, and foodborne illnesses.',
      color: 'border-emerald-500 text-emerald-600 bg-emerald-50',
      badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
      iconName: 'ShieldCheck',
    },
  ],
  es: [
    {
      id: 'emergencies',
      slug: 'emergencies',
      title: 'Emergencias Médicas',
      shortTitle: 'Emergencias',
      description: 'Situaciones de riesgo vital inmediato que exigen acción urgente: RCP, atragantamiento, ACV y paro cardíaco.',
      color: 'border-red-500 text-red-600 bg-red-50',
      badgeColor: 'bg-red-100 text-red-800 border-red-200',
      iconName: 'ShieldAlert',
    },
    {
      id: 'accidents',
      slug: 'accidents',
      title: 'Accidentes y Lesiones',
      shortTitle: 'Accidentes',
      description: 'Primeros auxilios prácticos ante traumatismos: cortes, hemorragias, quemaduras, fracturas, esguinces y picaduras.',
      color: 'border-amber-500 text-amber-600 bg-amber-50',
      badgeColor: 'bg-amber-100 text-amber-800 border-amber-200',
      iconName: 'Bandage',
    },
    {
      id: 'home-health',
      slug: 'home-health',
      title: 'Salud en el Hogar',
      shortTitle: 'Salud en Casa',
      description: 'Manejo seguro de medicamentos, armado del botiquín de primeros auxilios, control de fiebre y prevención de intoxicaciones.',
      color: 'border-brand-500 text-brand-600 bg-brand-50',
      badgeColor: 'bg-brand-100 text-brand-800 border-brand-200',
      iconName: 'Home',
    },
    {
      id: 'warning-signs',
      slug: 'warning-signs',
      title: 'Señales de Alerta',
      shortTitle: 'Alertas',
      description: 'Identificación de síntomas críticos: dificultad respiratoria aguda, deshidratación severa y signos de infección grave.',
      color: 'border-indigo-500 text-indigo-600 bg-indigo-50',
      badgeColor: 'bg-indigo-100 text-indigo-800 border-indigo-200',
      iconName: 'AlertCircle',
    },
    {
      id: 'preparedness',
      slug: 'preparedness',
      title: 'Preparación para Emergencias',
      shortTitle: 'Preparación',
      description: 'Planificación preventiva: plan de acción familiar, mochila de emergencia ante desastres y protocolos de viaje seguro.',
      color: 'border-teal-500 text-teal-600 bg-teal-50',
      badgeColor: 'bg-teal-100 text-teal-800 border-teal-200',
      iconName: 'FileText',
    },
    {
      id: 'prevention',
      slug: 'prevention',
      title: 'Prevención y Seguridad',
      shortTitle: 'Prevención',
      description: 'Hábitos proactivos cotidianos: prevención de golpes de calor, hipotermia, caídas domésticas e intoxicación alimentaria.',
      color: 'border-emerald-500 text-emerald-600 bg-emerald-50',
      badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
      iconName: 'ShieldCheck',
    },
  ],
};

export const getLocalizedCategories = (lang: Language): CategoryMetadata[] => {
  return CATEGORIES_DATA[lang] || CATEGORIES_DATA.en;
};

// Default export for backwards compatibility
export const CATEGORIES = CATEGORIES_DATA.en;
