import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

export type DiagramType = 
  | 'cpr'
  | 'choking'
  | 'burns'
  | 'bleeding'
  | 'epipen'
  | 'recovery-position';

interface ProtocolDiagramProps {
  type: DiagramType;
}

export const ProtocolDiagram: React.FC<ProtocolDiagramProps> = ({ type }) => {
  const { language } = useLanguage();

  const diagrams: Record<DiagramType, { title: string; subtitle: string; component: React.ReactNode }> = {
    cpr: {
      title: language === 'es' ? 'Diagrama Anatómico: Posición de RCP' : 'Anatomical Diagram: CPR Hand Placement',
      subtitle: language === 'es' 
        ? 'Talón de la mano en el centro del pecho, dedos entrelazados, brazos rígidos a 90°' 
        : 'Heel of hand on center of chest, fingers interlocked, straight arms at 90°',
      component: (
        <svg viewBox="0 0 400 240" className="w-full max-w-md mx-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Patient Chest Silhouette */}
          <ellipse cx="200" cy="180" rx="140" ry="45" className="fill-slate-100 dark:fill-slate-800 stroke-slate-300 dark:stroke-slate-700" strokeWidth="2" />
          {/* Sternum Landmark */}
          <line x1="200" y1="150" x2="200" y2="205" stroke="#ef4444" strokeWidth="4" strokeDasharray="4 2" />
          <circle cx="200" cy="175" r="14" fill="#fee2e2" stroke="#ef4444" strokeWidth="2.5" />
          <text x="200" y="179" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#dc2626">5-6cm</text>
          
          {/* Compressor Arms & Interlocked Hands */}
          <line x1="160" y1="20" x2="190" y2="155" stroke="#0d9488" strokeWidth="9" strokeLinecap="round" />
          <line x1="240" y1="20" x2="210" y2="155" stroke="#0d9488" strokeWidth="9" strokeLinecap="round" />
          {/* Hands Interlocked */}
          <rect x="180" y="145" width="40" height="24" rx="6" fill="#14b8a6" stroke="#0f766e" strokeWidth="2" />
          
          {/* Force Downward Arrows */}
          <path d="M195 90 L200 115 L205 90 Z" fill="#ef4444" />
          <line x1="200" y1="50" x2="200" y2="105" stroke="#ef4444" strokeWidth="4" strokeLinecap="round" />

          {/* Callouts */}
          <text x="70" y="55" fontSize="11" fontWeight="bold" className="fill-slate-800 dark:fill-slate-200">
            {language === 'es' ? 'Brazos rectos (90°)' : 'Arms locked straight'}
          </text>
          <text x="70" y="70" fontSize="10" className="fill-slate-500 dark:fill-slate-400">
            {language === 'es' ? 'Hombros sobre manos' : 'Shoulders directly over hands'}
          </text>
          <path d="M120 75 Q150 75 170 60" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="3 3" fill="none" />

          <text x="275" y="120" fontSize="11" fontWeight="bold" className="fill-red-600 dark:fill-red-400">
            100 – 120 LPM
          </text>
          <text x="275" y="135" fontSize="10" className="fill-slate-500 dark:fill-slate-400">
            {language === 'es' ? '"Stayin\' Alive"' : 'Push hard & fast'}
          </text>
        </svg>
      )
    },
    choking: {
      title: language === 'es' ? 'Diagrama: Maniobra de Heimlich' : 'Diagram: Heimlich Maneuver Thrusts',
      subtitle: language === 'es'
        ? 'Puño cerrado con el pulgar contra el abdomen, entre el ombligo y el esternón'
        : 'Closed fist with thumb against abdomen, halfway between navel and breastbone',
      component: (
        <svg viewBox="0 0 400 240" className="w-full max-w-md mx-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Rescuer & Victim Silhouettes */}
          <path d="M140 220 Q140 100 200 90 Q220 90 230 140 Q230 220 230 220" className="fill-slate-100 dark:fill-slate-800 stroke-slate-300 dark:stroke-slate-700" strokeWidth="2" />
          {/* Sternum & Navel markers */}
          <circle cx="210" cy="115" r="4" fill="#64748b" />
          <text x="220" y="118" fontSize="9" className="fill-slate-500 dark:fill-slate-400">{language === 'es' ? 'Esternón' : 'Sternum'}</text>
          
          <circle cx="210" cy="175" r="4" fill="#64748b" />
          <text x="220" y="178" fontSize="9" className="fill-slate-500 dark:fill-slate-400">{language === 'es' ? 'Ombligo' : 'Navel'}</text>

          {/* Target Impact Zone */}
          <rect x="180" y="132" width="28" height="28" rx="6" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2.5" />
          <text x="194" y="150" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#b45309">✕</text>

          {/* Upward Inward Thrust Arrow */}
          <path d="M140 180 Q160 160 178 152" stroke="#dc2626" strokeWidth="4" strokeLinecap="round" fill="none" />
          <path d="M172 144 L185 149 L178 160 Z" fill="#dc2626" />

          {/* Explanatory callouts */}
          <text x="40" y="140" fontSize="11" fontWeight="bold" className="fill-brand-700 dark:fill-brand-400">
            {language === 'es' ? 'Hacia adentro' : 'Inward &'}
          </text>
          <text x="40" y="155" fontSize="11" fontWeight="bold" className="fill-brand-700 dark:fill-brand-400">
            {language === 'es' ? 'y hacia arriba' : 'Upward Thrust'}
          </text>
          <text x="40" y="172" fontSize="9" className="fill-slate-500 dark:fill-slate-400">
            {language === 'es' ? 'Empuje seco y firme' : 'Quick, distinct thrusts'}
          </text>
        </svg>
      )
    },
    burns: {
      title: language === 'es' ? 'Protocolo de Enfriamiento de Quemaduras' : 'Burns 20-Minute Cooling Rule',
      subtitle: language === 'es'
        ? 'Agua corriente a temperatura ambiente durante 20 minutos completos. NUNCA hielo.'
        : 'Clean cool running tap water for a full 20 minutes. NEVER apply ice.',
      component: (
        <svg viewBox="0 0 400 240" className="w-full max-w-md mx-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Water tap */}
          <path d="M180 30 L220 30 L220 70 L200 70 L200 85 L190 85 L190 70 L180 70 Z" className="fill-slate-300 dark:fill-slate-600 stroke-slate-400 dark:stroke-slate-500" strokeWidth="2" />
          
          {/* Water flow streams */}
          <path d="M192 85 C192 120 185 140 185 170" stroke="#0ea5e9" strokeWidth="3" strokeDasharray="6 3" strokeLinecap="round" />
          <path d="M195 85 C195 120 195 140 195 170" stroke="#38bdf8" strokeWidth="3.5" strokeDasharray="6 3" strokeLinecap="round" />
          <path d="M198 85 C198 120 205 140 205 170" stroke="#0ea5e9" strokeWidth="3" strokeDasharray="6 3" strokeLinecap="round" />

          {/* Injured arm silhouette */}
          <path d="M80 180 Q195 160 320 185 L320 215 Q195 190 80 210 Z" className="fill-orange-100 dark:fill-orange-950/60 stroke-orange-300 dark:stroke-orange-800" strokeWidth="2" />
          {/* Burn site */}
          <ellipse cx="195" cy="175" rx="30" ry="10" fill="#fca5a5" stroke="#ef4444" strokeWidth="2" />

          {/* Timer Clock Badge */}
          <circle cx="80" cy="80" r="32" className="fill-white dark:fill-slate-800 stroke-brand-500" strokeWidth="3" />
          <text x="80" y="78" textAnchor="middle" fontSize="16" fontWeight="bold" className="fill-brand-600 dark:fill-brand-400">20</text>
          <text x="80" y="93" textAnchor="middle" fontSize="9" fontWeight="bold" className="fill-slate-500 dark:fill-slate-400">MIN</text>

          {/* Prohibitions */}
          <g transform="translate(290, 60)">
            <circle cx="30" cy="30" r="26" fill="#fef2f2" stroke="#dc2626" strokeWidth="2" />
            <text x="30" y="34" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#dc2626">NO HIELO</text>
            <line x1="12" y1="48" x2="48" y2="12" stroke="#dc2626" strokeWidth="2" />
          </g>
        </svg>
      )
    },
    bleeding: {
      title: language === 'es' ? 'Diagrama: Presión Directa Continua' : 'Diagram: Direct Continuous Pressure',
      subtitle: language === 'es'
        ? 'Apósito o paño limpio con presión firme constante sin retirar para mirar'
        : 'Sterile dressing with continuous manual pressure; do not lift to inspect',
      component: (
        <svg viewBox="0 0 400 240" className="w-full max-w-md mx-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Limb */}
          <rect x="60" y="140" width="280" height="45" rx="20" className="fill-slate-100 dark:fill-slate-800 stroke-slate-300 dark:stroke-slate-700" strokeWidth="2" />
          {/* Dressing */}
          <rect x="160" y="125" width="80" height="25" rx="4" fill="#ffffff" stroke="#ef4444" strokeWidth="2.5" />
          {/* Hand Pressing */}
          <path d="M175 70 L195 125 L215 125 L230 70 Z" fill="#14b8a6" stroke="#0f766e" strokeWidth="2" />
          {/* Downward Pressure Arrows */}
          <path d="M195 35 L200 55 L205 35 Z" fill="#ef4444" />
          <line x1="200" y1="15" x2="200" y2="45" stroke="#ef4444" strokeWidth="4" strokeLinecap="round" />

          {/* Explanatory callouts */}
          <text x="70" y="55" fontSize="11" fontWeight="bold" className="fill-slate-800 dark:fill-slate-200">
            {language === 'es' ? 'Presión continua' : 'Continuous Pressure'}
          </text>
          <text x="70" y="70" fontSize="10" className="fill-slate-500 dark:fill-slate-400">
            {language === 'es' ? 'NO levantar para mirar' : 'Do NOT lift dressing'}
          </text>

          <text x="270" y="105" fontSize="11" fontWeight="bold" className="fill-emerald-600 dark:fill-emerald-400">
            {language === 'es' ? 'Elevar si es posible' : 'Elevate if possible'}
          </text>
          <text x="270" y="120" fontSize="10" className="fill-slate-500 dark:fill-slate-400">
            {language === 'es' ? 'Sobre nivel del corazón' : 'Above heart level'}
          </text>
        </svg>
      )
    },
    epipen: {
      title: language === 'es' ? 'Uso del Autoinyector de Adrenalina (EpiPen)' : 'EpiPen Auto-Injector Technique',
      subtitle: language === 'es'
        ? 'Inyección en cara lateral externa del muslo a 90°. Sostener durante 3 a 5 segundos.'
        : 'Inject into outer mid-thigh at 90° angle. Hold firmly in place for 3 to 5 seconds.',
      component: (
        <svg viewBox="0 0 400 240" className="w-full max-w-md mx-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Patient Thigh */}
          <ellipse cx="200" cy="180" rx="130" ry="40" className="fill-slate-100 dark:fill-slate-800 stroke-slate-300 dark:stroke-slate-700" strokeWidth="2" />
          <text x="300" y="185" fontSize="10" className="fill-slate-500 dark:fill-slate-400">{language === 'es' ? 'Muslo' : 'Thigh'}</text>

          {/* Auto-Injector Body (Perpendicular at 90°) */}
          <rect x="185" y="30" width="30" height="110" rx="8" fill="#f59e0b" stroke="#b45309" strokeWidth="2.5" />
          {/* Black Tip */}
          <rect x="190" y="140" width="20" height="15" rx="3" fill="#1e293b" />
          {/* Blue Safety Cap (Removed) */}
          <path d="M185 30 L215 30 L200 15 Z" fill="#0284c7" />

          {/* 90-degree marker */}
          <path d="M225 155 L225 140 L240 140" stroke="#0d9488" strokeWidth="2" fill="none" />
          <text x="232" y="135" fontSize="11" fontWeight="bold" fill="#0d9488">90°</text>

          {/* Hold Timer Callout */}
          <g transform="translate(60, 60)">
            <rect x="0" y="0" width="95" height="50" rx="12" className="fill-brand-50 dark:fill-brand-950/80 stroke-brand-300 dark:stroke-brand-700" strokeWidth="1.5" />
            <text x="47" y="24" textAnchor="middle" fontSize="12" fontWeight="black" className="fill-brand-700 dark:fill-brand-300">
              3 – 5 SEG
            </text>
            <text x="47" y="38" textAnchor="middle" fontSize="9" className="fill-slate-600 dark:fill-slate-300">
              {language === 'es' ? 'Mantener presionado' : 'Hold firmly in place'}
            </text>
          </g>

          {/* External thigh text */}
          <text x="270" y="90" fontSize="11" fontWeight="bold" className="fill-slate-800 dark:fill-slate-200">
            {language === 'es' ? 'Cara externa' : 'Outer thigh'}
          </text>
          <text x="270" y="105" fontSize="10" className="fill-slate-500 dark:fill-slate-400">
            {language === 'es' ? 'Atraviesa ropa fina' : 'Through clothing ok'}
          </text>
        </svg>
      )
    },
    'recovery-position': {
      title: language === 'es' ? 'Diagrama: Posición Lateral de Seguridad (PLS)' : 'Recovery Position Step-by-Step',
      subtitle: language === 'es'
        ? 'Mantiene la vía aérea permeable y previene la asfixia por vómito o lengua caída'
        : 'Maintains open airway and prevents aspiration from vomit or tongue fall-back',
      component: (
        <svg viewBox="0 0 400 240" className="w-full max-w-md mx-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Body on Side */}
          <ellipse cx="200" cy="140" rx="120" ry="35" className="fill-slate-100 dark:fill-slate-800 stroke-slate-300 dark:stroke-slate-700" strokeWidth="2" />
          
          {/* Head tilted backwards */}
          <circle cx="90" cy="130" r="24" className="fill-brand-50 dark:fill-brand-950/70 stroke-brand-500" strokeWidth="2" />
          <path d="M75 142 Q90 155 105 142" stroke="#0d9488" strokeWidth="2" fill="none" />

          {/* Bent Knee for Stability */}
          <path d="M250 145 L290 180 L330 180" stroke="#0ea5e9" strokeWidth="7" strokeLinecap="round" fill="none" />
          <circle cx="290" cy="180" r="6" fill="#0284c7" />

          {/* Hand under cheek */}
          <ellipse cx="108" cy="145" rx="14" ry="8" fill="#14b8a6" />

          {/* Callouts */}
          <text x="50" y="60" fontSize="11" fontWeight="bold" className="fill-brand-700 dark:fill-brand-400">
            {language === 'es' ? 'Cabeza extendida' : 'Head tilted back'}
          </text>
          <text x="50" y="75" fontSize="10" className="fill-slate-500 dark:fill-slate-400">
            {language === 'es' ? 'Vía aérea abierta' : 'Clear open airway'}
          </text>

          <text x="250" y="60" fontSize="11" fontWeight="bold" className="fill-sky-700 dark:fill-sky-400">
            {language === 'es' ? 'Pierna doblada en ángulo' : 'Bent leg at 90°'}
          </text>
          <text x="250" y="75" fontSize="10" className="fill-slate-500 dark:fill-slate-400">
            {language === 'es' ? 'Evita que ruede boca abajo' : 'Prevents body rolling'}
          </text>
        </svg>
      )
    }
  };

  const selected = diagrams[type];
  if (!selected) return null;

  return (
    <div className="bg-slate-50 dark:bg-slate-800/60 rounded-3xl border border-slate-200 dark:border-slate-700/80 p-5 sm:p-7 space-y-4 my-6">
      <div className="space-y-1">
        <h4 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-brand-500 inline-block animate-pulse"></span>
          {selected.title}
        </h4>
        <p className="text-xs text-slate-600 dark:text-slate-300">
          {selected.subtitle}
        </p>
      </div>

      <div className="p-3 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-2xs">
        {selected.component}
      </div>
    </div>
  );
};

