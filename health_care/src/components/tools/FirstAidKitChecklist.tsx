import { useState, useEffect } from 'react';
import { getLocalizedKitItems, KitItem } from '../../data/kitItems';
import { useLanguage } from '../../context/LanguageContext';
import { 
  CheckSquare, 
  Square, 
  RotateCcw, 
  Printer, 
  ShieldCheck, 
  AlertCircle, 
  Bandage, 
  Scissors, 
  Sparkles, 
  HeartHandshake 
} from 'lucide-react';

export function FirstAidKitChecklist() {
  const { language } = useLanguage();
  const kitItems = getLocalizedKitItems(language);

  const [checkedIds, setCheckedIds] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem('healthcare_kit_checklist');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [filterCategory, setFilterCategory] = useState<string>('all');

  useEffect(() => {
    localStorage.setItem('healthcare_kit_checklist', JSON.stringify(checkedIds));
  }, [checkedIds]);

  const toggleItem = (id: string) => {
    setCheckedIds(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleReset = () => {
    const confirmMsg = language === 'es'
      ? '¿Estás seguro de que deseas reiniciar todos los elementos de la lista?'
      : 'Are you sure you want to reset all checklist items?';
    if (window.confirm(confirmMsg)) {
      setCheckedIds({});
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const filteredItems = filterCategory === 'all'
    ? kitItems
    : kitItems.filter(item => item.category === filterCategory);

  const totalItems = kitItems.length;
  const packedCount = Object.values(checkedIds).filter(Boolean).length;
  const progressPercent = Math.round((packedCount / totalItems) * 100);

  const categories = language === 'es' ? [
    { id: 'all', label: 'Todos los Insumos', icon: CheckSquare },
    { id: 'dressings', label: 'Gasas y Curaciones', icon: Bandage },
    { id: 'tools', label: 'Instrumental', icon: Scissors },
    { id: 'hygiene', label: 'Higiene y Barrera', icon: Sparkles },
    { id: 'emergency', label: 'Seguridad Térmica', icon: HeartHandshake },
  ] : [
    { id: 'all', label: 'All Essentials', icon: CheckSquare },
    { id: 'dressings', label: 'Dressings & Gauze', icon: Bandage },
    { id: 'tools', label: 'Instruments', icon: Scissors },
    { id: 'hygiene', label: 'Hygiene & Barrier', icon: Sparkles },
    { id: 'emergency', label: 'Emergency & Thermal', icon: HeartHandshake },
  ];

  return (
    <div className="space-y-8">
      {/* Overview & Progress Bar */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand-700 dark:text-brand-300 bg-brand-50 dark:bg-brand-950/80 px-3 py-1 rounded-full border border-brand-200 dark:border-brand-800">
              {language === 'es' ? 'Auditoría del Botiquín' : 'Supply Inventory'}
            </span>
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-2">
              {language === 'es' ? 'Control de Suministros Médicos' : 'First Aid Kit Supply Audit'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1">
              {language === 'es'
                ? 'Marca los elementos presentes en tu botiquín. Los cambios se guardan automáticamente en tu dispositivo.'
                : 'Tick the items currently stored in your kit. Changes are saved locally on your device.'}
            </p>
          </div>

          <div className="no-print flex items-center gap-2 self-start sm:self-auto flex-shrink-0">
            <button
              onClick={handleReset}
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-semibold flex items-center gap-1.5 transition"
              title={language === 'es' ? 'Reiniciar lista' : 'Reset checklist'}
            >
              <RotateCcw className="w-4 h-4" />
              <span className="hidden md:inline">{language === 'es' ? 'Reiniciar' : 'Reset'}</span>
            </button>
            <button
              onClick={handlePrint}
              className="p-2.5 rounded-xl bg-slate-900 hover:bg-black dark:bg-brand-600 dark:hover:bg-brand-700 text-white text-xs font-bold flex items-center gap-1.5 transition shadow"
              title={language === 'es' ? 'Imprimir lista de insumos' : 'Print supply sheet'}
            >
              <Printer className="w-4 h-4" />
              <span>{language === 'es' ? 'Imprimir Lista' : 'Print Checklist'}</span>
            </button>
          </div>
        </div>

        {/* Progress Bar Component */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs font-bold">
            <span className="text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-brand-600 dark:text-brand-400" />
              {language === 'es' ? 'Disponibilidad del Botiquín:' : 'Kit Readiness Score:'}
            </span>
            <span className="text-brand-700 dark:text-brand-300 font-extrabold">
              {packedCount} / {totalItems} {language === 'es' ? 'insumos' : 'items'} ({progressPercent}%)
            </span>
          </div>

          <div className="w-full h-3 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden p-0.5 border border-slate-200/80 dark:border-slate-700">
            <div
              className={`h-full rounded-full transition-all duration-300 ${
                progressPercent === 100
                  ? 'bg-emerald-500'
                  : progressPercent > 50
                  ? 'bg-brand-500'
                  : 'bg-amber-500'
              }`}
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>

          {progressPercent === 100 && (
            <p className="text-xs text-emerald-700 dark:text-emerald-400 font-bold flex items-center gap-1.5 pt-1">
              <span>{language === 'es' ? '¡Excelente! Tu botiquín cumple con todos los insumos indispensables.' : 'Excellent! Your kit contains all clinically recommended supplies.'}</span>
            </p>
          )}
        </div>
      </div>

      {/* Category Tabs */}
      <div className="no-print flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {categories.map((cat) => {
          const Icon = cat.icon;
          return (
            <button
              key={cat.id}
              onClick={() => setFilterCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 whitespace-nowrap transition duration-150 ${
                filterCategory === cat.id
                  ? 'bg-brand-600 text-white shadow-2xs'
                  : 'bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* Checklist Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredItems.map((item: KitItem) => {
          const isChecked = !!checkedIds[item.id];
          return (
            <div
              key={item.id}
              onClick={() => toggleItem(item.id)}
              className={`p-5 rounded-2xl border transition-all duration-150 cursor-pointer flex items-start gap-4 select-none ${
                isChecked
                  ? 'bg-brand-50/50 dark:bg-brand-950/40 border-brand-300 dark:border-brand-800 shadow-2xs'
                  : 'bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/60 border-slate-200 dark:border-slate-800 shadow-2xs'
              }`}
            >
              <button
                type="button"
                aria-label={`Toggle ${item.name}`}
                className={`mt-0.5 w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 transition ${
                  isChecked
                    ? 'bg-brand-600 text-white'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200'
                }`}
              >
                {isChecked ? <CheckSquare className="w-4 h-4 stroke-[2.5]" /> : <Square className="w-4 h-4 stroke-[2]" />}
              </button>

              <div className="space-y-1 min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <h4 className={`text-sm font-bold leading-snug ${isChecked ? 'line-through text-slate-400 dark:text-slate-500' : 'text-slate-900 dark:text-white'}`}>
                    {item.name}
                  </h4>
                  {item.essential && (
                    <span className="text-[10px] font-black uppercase tracking-wider bg-red-50 dark:bg-red-950/60 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-800 px-2 py-0.5 rounded-full flex-shrink-0">
                      {language === 'es' ? 'Indispensable' : 'Essential'}
                    </span>
                  )}
                </div>

                <p className="text-xs text-brand-700 dark:text-brand-400 font-bold">
                  {language === 'es' ? 'Cantidad recomendada:' : 'Recommended:'} {item.recommendedQty}
                </p>

                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Safety Warning Notice */}
      <div className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 flex items-start gap-2.5">
        <AlertCircle className="w-4 h-4 text-brand-600 flex-shrink-0 mt-0.5" />
        <p>
          <strong>{language === 'es' ? 'Pauta de Mantenimiento Semestral:' : 'Semi-Annual Kit Maintenance Rule:'}</strong>{' '}
          {language === 'es'
            ? 'Inspecciona tu botiquín cada 6 meses. Desecha envases abiertos o apósitos con sellos dañados y reemplaza las pilas del termómetro y la linterna.'
            : 'Inspect your first aid supplies every 6 months. Discard opened single-use saline pods and replace batteries in your digital thermometer and penlight.'}
        </p>
      </div>
    </div>
  );
}
