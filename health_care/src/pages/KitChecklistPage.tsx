import { Link } from 'react-router-dom';
import { FirstAidKitChecklist } from '../components/tools/FirstAidKitChecklist';
import { useLanguage } from '../context/LanguageContext';
import { BriefcaseMedical, ChevronRight, BookOpen } from 'lucide-react';

export function KitChecklistPage() {
  const { language } = useLanguage();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10">
      
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="no-print flex items-center gap-2 text-xs font-semibold text-slate-500">
        <Link to="/" className="hover:text-brand-600 transition">
          {language === 'es' ? 'Inicio' : 'Home'}
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <Link to="/home-health" className="hover:text-brand-600 transition">
          {language === 'es' ? 'Salud en el Hogar' : 'Health at Home'}
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <span className="text-slate-900 font-bold">
          {language === 'es' ? 'Checklist del Botiquín' : 'First Aid Kit Checklist'}
        </span>
      </nav>

      {/* Hero Header */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-10 shadow-sm space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-brand-50 dark:bg-brand-900/40 text-brand-700 dark:text-brand-400 border border-brand-200 dark:border-brand-800">
          <BriefcaseMedical className="w-4 h-4 text-brand-600 dark:text-brand-400" />
          <span>{language === 'es' ? 'Herramienta de Preparación Doméstica' : 'Household Readiness Tool'}</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          {language === 'es' ? 'Checklist Interactivo del Botiquín de Primeros Auxilios' : 'First Aid Kit Interactive Checklist'}
        </h1>

        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
          {language === 'es'
            ? 'Revisa y audita los insumos médicos en tu botiquín del hogar, vehículo o trabajo. Tu inventario se guarda automáticamente en este dispositivo.'
            : 'Check off the medical supplies in your home, vehicle, or workplace first aid kit. Your inventory is automatically saved on this device.'}
        </p>
      </div>

      {/* Main Interactive Checklist Tool */}
      <FirstAidKitChecklist />

      {/* Related Article Guide Link */}
      <div className="no-print bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <h3 className="font-bold text-slate-900 dark:text-white text-base flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-brand-600" />
            {language === 'es' ? '¿Necesitas instrucciones detalladas sobre el uso de estos insumos?' : 'Need detailed instructions on using these supplies?'}
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            {language === 'es'
              ? 'Lee nuestro manual educativo completo sobre cómo armar, inspeccionar y usar los elementos del botiquín.'
              : 'Read our full educational manual on assembling, inspecting, and using home first aid items.'}
          </p>
        </div>
        <Link
          to="/guide/first-aid-kit-checklist"
          className="bg-brand-600 hover:bg-brand-700 text-white font-bold px-5 py-2.5 rounded-xl text-xs transition duration-150 shadow-xs flex-shrink-0"
        >
          {language === 'es' ? 'Leer Guía Completa del Botiquín' : 'Read Full Kit Protocol Guide'} &rarr;
        </Link>
      </div>

    </div>
  );
}
