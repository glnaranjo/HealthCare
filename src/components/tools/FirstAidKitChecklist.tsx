import { useState, useEffect } from 'react';
import { FIRST_AID_KIT_ITEMS, KitItem } from '../../data/kitItems';
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
    if (window.confirm('Are you sure you want to reset all checklist items?')) {
      setCheckedIds({});
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const filteredItems = filterCategory === 'all'
    ? FIRST_AID_KIT_ITEMS
    : FIRST_AID_KIT_ITEMS.filter(item => item.category === filterCategory);

  const totalItems = FIRST_AID_KIT_ITEMS.length;
  const packedCount = Object.values(checkedIds).filter(Boolean).length;
  const progressPercent = Math.round((packedCount / totalItems) * 100);

  const categories = [
    { id: 'all', label: 'All Essentials', icon: CheckSquare },
    { id: 'dressings', label: 'Dressings & Gauze', icon: Bandage },
    { id: 'tools', label: 'Instruments', icon: Scissors },
    { id: 'hygiene', label: 'Hygiene & Barriers', icon: Sparkles },
    { id: 'emergency', label: 'Emergency & Thermal', icon: HeartHandshake },
  ];

  return (
    <div className="space-y-8">
      {/* Printable Header */}
      <div className="print-only border-b-2 border-slate-900 pb-3 mb-4">
        <h1 className="text-2xl font-black text-slate-950 uppercase tracking-tight">
          HealthCare • Home First Aid Kit Checklist
        </h1>
        <p className="text-xs text-slate-600">
          International Red Cross Standards • Keep with your household medical box
        </p>
      </div>

      {/* Progress & Readiness Card */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
              Inventory Readiness Tracker
            </span>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                {packedCount}
              </span>
              <span className="text-base font-bold text-slate-500">
                / {totalItems} items packed ({progressPercent}%)
              </span>
            </div>
          </div>

          <div className="no-print flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="p-2.5 sm:px-4 sm:py-2.5 rounded-xl border border-slate-300 hover:bg-slate-100 text-slate-700 text-xs font-bold transition flex items-center gap-1.5 shadow-2xs"
              title="Print checklist for shopping or audits"
            >
              <Printer className="w-4 h-4 text-slate-500" />
              <span className="hidden sm:inline">Print Checklist</span>
            </button>
            <button
              onClick={handleReset}
              className="p-2.5 sm:px-4 sm:py-2.5 rounded-xl border border-slate-300 hover:bg-red-50 hover:text-red-700 hover:border-red-300 text-slate-600 text-xs font-bold transition flex items-center gap-1.5"
              title="Reset all checkboxes"
            >
              <RotateCcw className="w-4 h-4" />
              <span className="hidden sm:inline">Reset</span>
            </button>
          </div>
        </div>

        {/* Visual Progress Bar */}
        <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
          <div
            className={`h-full transition-all duration-300 rounded-full ${
              progressPercent === 100 
                ? 'bg-emerald-500' 
                : progressPercent > 50 
                ? 'bg-brand-500' 
                : 'bg-amber-500'
            }`}
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {progressPercent === 100 && (
          <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-bold flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span>Excellent! Your household first aid kit meets international basic response recommendations.</span>
          </div>
        )}
      </div>

      {/* Category Pills (Hidden on print) */}
      <div className="no-print flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
        {categories.map((cat) => {
          const Icon = cat.icon;
          return (
            <button
              key={cat.id}
              onClick={() => setFilterCategory(cat.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition flex-shrink-0 border ${
                filterCategory === cat.id
                  ? 'bg-brand-600 text-white border-brand-600 shadow-xs'
                  : 'bg-white hover:bg-slate-100 text-slate-700 border-slate-200'
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
              className={`p-5 rounded-2xl border transition duration-150 cursor-pointer flex items-start gap-4 select-none ${
                isChecked
                  ? 'bg-brand-50/50 border-brand-300 text-slate-900 shadow-2xs'
                  : 'bg-white border-slate-200 hover:border-slate-300 text-slate-800 hover:shadow-xs'
              }`}
            >
              <div className="pt-0.5 text-brand-600 flex-shrink-0">
                {isChecked ? (
                  <CheckSquare className="w-6 h-6 stroke-[2.2] fill-brand-100" />
                ) : (
                  <Square className="w-6 h-6 text-slate-300 stroke-[1.8]" />
                )}
              </div>

              <div className="space-y-1 flex-1 min-w-0">
                <div className="flex flex-wrap items-center justify-between gap-1">
                  <h3 className={`text-sm sm:text-base font-bold ${isChecked ? 'line-through text-slate-500' : 'text-slate-900'}`}>
                    {item.name}
                  </h3>
                  <span className="text-[11px] font-bold text-brand-700 bg-brand-100/70 px-2 py-0.5 rounded-md">
                    {item.recommendedQty}
                  </span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.description}
                </p>

                {item.essential && (
                  <span className="inline-block text-[10px] font-semibold text-amber-700 bg-amber-50 border border-amber-200 px-1.5 py-0.2 rounded mt-1">
                    Core Essential
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Storage & Expiry Guidance */}
      <div className="bg-slate-100 p-5 rounded-3xl border border-slate-200 text-xs text-slate-700 space-y-2">
        <h4 className="font-bold text-slate-900 flex items-center gap-1.5 text-sm">
          <AlertCircle className="w-4 h-4 text-brand-600" />
          Maintenance and Storage Rules:
        </h4>
        <ul className="space-y-1 list-disc pl-5 leading-relaxed text-slate-600">
          <li>Store in a cool, dry place. Avoid high-humidity bathrooms where moisture degrades adhesives and pills.</li>
          <li>Set a bi-annual calendar reminder (e.g. spring and fall daylight savings) to check expiration dates.</li>
          <li>Keep out of reach of young toddlers, but ensure all older children and adult babysitters know its location.</li>
        </ul>
      </div>
    </div>
  );
}

