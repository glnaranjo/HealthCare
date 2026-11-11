import { useState } from 'react';
import { 
  Heart, 
  Wind, 
  Thermometer, 
  Activity, 
  AlertTriangle, 
  HelpCircle, 
  ShieldCheck, 
  CheckCircle2 
} from 'lucide-react';

type AgeGroup = 'adult' | 'child' | 'infant';

interface VitalMetric {
  name: string;
  unit: string;
  icon: React.ElementType;
  normalRange: string;
  lowAlert: string;
  highAlert: string;
  howToMeasure: string;
  clinicalNote: string;
  redFlags: string[];
}

export function VitalSignsReference() {
  const [activeGroup, setActiveGroup] = useState<AgeGroup>('adult');

  const vitalsData: Record<AgeGroup, { label: string; ageSpan: string; metrics: VitalMetric[] }> = {
    adult: {
      label: 'Adults',
      ageSpan: '18+ years',
      metrics: [
        {
          name: 'Resting Heart Rate (Pulse)',
          unit: 'beats per minute (bpm)',
          icon: Heart,
          normalRange: '60 – 100 bpm',
          lowAlert: '< 50 bpm (Bradycardia)',
          highAlert: '> 100 bpm (Tachycardia)',
          howToMeasure: 'Place index and middle fingertips gently on the radial artery inside the wrist below the thumb base. Count beats for 30 seconds and multiply by 2.',
          clinicalNote: 'Well-conditioned athletes often have normal resting heart rates between 40 and 60 bpm.',
          redFlags: [
            'Resting pulse > 120 bpm accompanied by dizziness, chest pain, or shortness of breath.',
            'Irregular fluttering or skipped beats causing faintness.',
            'Pulse < 45 bpm in an untrained person feeling lightheaded or weak.'
          ]
        },
        {
          name: 'Respiratory Rate',
          unit: 'breaths per minute',
          icon: Wind,
          normalRange: '12 – 20 breaths/min',
          lowAlert: '< 10 breaths/min',
          highAlert: '> 24 breaths/min',
          howToMeasure: 'Count chest rises while the person is at rest. It is best to observe discreetly without announcing it, as conscious awareness alters natural breathing cadence.',
          clinicalNote: 'Each breath cycle equals one inhalation plus one exhalation.',
          redFlags: [
            'Breathing rate > 25 breaths/min at complete rest.',
            'Inability to speak a full 5-word sentence without pausing for breath.',
            'Bluish tint (cyanosis) around lips or fingernails.'
          ]
        },
        {
          name: 'Core Body Temperature',
          unit: 'Celsius / Fahrenheit',
          icon: Thermometer,
          normalRange: '36.5°C – 37.5°C (97.7°F – 99.5°F)',
          lowAlert: '< 35.0°C (Hypothermia hazard)',
          highAlert: '≥ 38.0°C (Clinical fever)',
          howToMeasure: 'Use a digital thermometer under the tongue with lips closed for 60 seconds, or axillary in the dry armpit (add ~0.5°C for core estimate).',
          clinicalNote: 'Normal body temperature fluctuates by 0.5°C throughout the day, peaking in early evening.',
          redFlags: [
            'Temperature ≥ 39.5°C (103.1°F) unresponsive to hydration and antipyretics.',
            'Fever combined with stiff neck, confusion, or a non-blanching dark rash.',
            'Temperature < 35.0°C in an exposed individual.'
          ]
        },
        {
          name: 'Blood Pressure',
          unit: 'mmHg (Systolic / Diastolic)',
          icon: Activity,
          normalRange: '< 120 / < 80 mmHg',
          lowAlert: '< 90 / 60 mmHg (Hypotension)',
          highAlert: '≥ 140 / 90 mmHg (Stage 2 Hypertension)',
          howToMeasure: 'Sit quietly for 5 minutes with feet flat on the floor. Wrap an upper-arm automated cuff at heart level. Do not speak during measurement.',
          clinicalNote: 'A single high reading does not define chronic disease; measure twice at a 2-minute interval.',
          redFlags: [
            'Hypertensive crisis: Systolic > 180 mmHg or Diastolic > 120 mmHg.',
            'High blood pressure accompanied by sudden severe headache, blurred vision, or chest pain.',
            'Sudden drop < 90/60 mmHg causing loss of consciousness.'
          ]
        }
      ]
    },
    child: {
      label: 'Children',
      ageSpan: '1 – 12 years',
      metrics: [
        {
          name: 'Resting Heart Rate (Pulse)',
          unit: 'beats per minute (bpm)',
          icon: Heart,
          normalRange: '75 – 115 bpm (varies by age)',
          lowAlert: '< 60 bpm',
          highAlert: '> 140 bpm at rest',
          howToMeasure: 'Feel the radial wrist pulse or place palm gently over the left chest while the child is calm and rested.',
          clinicalNote: 'Children have higher baseline metabolic rates and smaller stroke volume, requiring faster heartbeats.',
          redFlags: [
            'Sustained racing pulse > 150 bpm when calm and without fever.',
            'Lethargy, extreme paleness, or unresponsiveness.'
          ]
        },
        {
          name: 'Respiratory Rate',
          unit: 'breaths per minute',
          icon: Wind,
          normalRange: '20 – 30 breaths/min',
          lowAlert: '< 15 breaths/min',
          highAlert: '> 35 breaths/min',
          howToMeasure: 'Count tummy rises for a full 60 seconds while the child is sleeping or quietly playing.',
          clinicalNote: 'Young children breathe predominantly with their diaphragm (abdominal breathing).',
          redFlags: [
            'Subcostal retractions (skin sucking inward under ribs or neck hollow during inhalation).',
            'Nasal flaring or grunting sounds with each exhalation.',
            'Stridor (high-pitched whistling while breathing in).'
          ]
        },
        {
          name: 'Core Body Temperature',
          unit: 'Celsius / Fahrenheit',
          icon: Thermometer,
          normalRange: '36.5°C – 37.5°C (97.7°F – 99.5°F)',
          lowAlert: '< 35.5°C',
          highAlert: '≥ 38.0°C (Fever threshold)',
          howToMeasure: 'Digital axillary (armpit) or tympanic (ear) thermometer. Never use glass mercury thermometers.',
          clinicalNote: 'Child behavior and alertness are far more important indicators than the exact thermometer decimal.',
          redFlags: [
            'Fever with purple spot rash that does not fade under pressure from a clear drinking glass.',
            'Child is listless, will not make eye contact, or has a weak, high-pitched continuous cry.',
            'Febrile convulsion lasting longer than 5 minutes.'
          ]
        },
        {
          name: 'Blood Pressure',
          unit: 'mmHg',
          icon: Activity,
          normalRange: '90 – 110 / 55 – 75 mmHg',
          lowAlert: '< 80 / 50 mmHg',
          highAlert: '> 120 / 80 mmHg',
          howToMeasure: 'Must be measured using a pediatric-sized cuff covering two-thirds of the upper arm length.',
          clinicalNote: 'Blood pressure is primarily evaluated in pediatric clinics rather than routine home monitoring.',
          redFlags: [
            'Sudden faintness, clammy cold extremities, and dizziness upon sitting.'
          ]
        }
      ]
    },
    infant: {
      label: 'Infants',
      ageSpan: '0 – 12 months',
      metrics: [
        {
          name: 'Resting Heart Rate (Pulse)',
          unit: 'beats per minute (bpm)',
          icon: Heart,
          normalRange: '100 – 160 bpm',
          lowAlert: '< 90 bpm (Immediate medical concern)',
          highAlert: '> 180 bpm at rest',
          howToMeasure: 'In infants, radial pulse is difficult to palpate. Feel the brachial artery on the inner upper arm between the elbow and shoulder, or listen to the apical chest beat.',
          clinicalNote: 'Infant heart rate naturally rises up to 180 bpm during crying and drops to ~100 bpm during deep sleep.',
          redFlags: [
            'Sustained heart rate < 80 bpm with poor muscle tone or pale/blue skin.',
            'Heart rate consistently > 190 bpm without crying or fever.'
          ]
        },
        {
          name: 'Respiratory Rate',
          unit: 'breaths per minute',
          icon: Wind,
          normalRange: '30 – 50 breaths/min',
          lowAlert: '< 25 breaths/min',
          highAlert: '> 60 breaths/min',
          howToMeasure: 'Count abdominal breathing rises for a complete 60 seconds, as infants naturally have irregular periodic breathing patterns.',
          clinicalNote: 'Brief pauses in breathing of up to 5 to 10 seconds followed by rapid breaths can be normal in healthy neonates.',
          redFlags: [
            'Sustained breathing rate > 60 breaths/min (tachypnea).',
            'Pauses in breathing lasting longer than 15-20 seconds (apnea).',
            'Chest pulling in deeply with each breath (sternal retractions) or head-bobbing.'
          ]
        },
        {
          name: 'Core Body Temperature',
          unit: 'Celsius / Fahrenheit',
          icon: Thermometer,
          normalRange: '36.5°C – 37.5°C (97.7°F – 99.5°F)',
          lowAlert: '< 36.0°C (Hypothermia risk)',
          highAlert: '≥ 38.0°C (CRITICAL in <3 months)',
          howToMeasure: 'Digital rectal measurement is the clinical gold standard for infants under 3 months. Axillary is used for routine screening.',
          clinicalNote: 'Young infants have poor thermoregulation and can develop hypothermia quickly in cold rooms.',
          redFlags: [
            'ANY fever ≥ 38.0°C in an infant under 3 months is a pediatric medical emergency requiring immediate hospital evaluation.',
            'Sunken soft spot (fontanelle) on top of head accompanied by dry diapers for 6+ hours.',
            'Inability to feed, weak latch, or abnormal floppiness.'
          ]
        },
        {
          name: 'General Perfusion & Capillary Refill',
          unit: 'seconds',
          icon: Activity,
          normalRange: '< 2 seconds',
          lowAlert: 'N/A',
          highAlert: '> 3 seconds (Poor peripheral perfusion)',
          howToMeasure: 'Press the center of the infant\'s sternum or forehead gently for 5 seconds until blanched white, then release. Count seconds until healthy pink color returns.',
          clinicalNote: 'Capillary refill test assesses peripheral blood flow and early signs of shock or dehydration.',
          redFlags: [
            'Refill time takes longer than 3 seconds.',
            'Mottled, grayish, or pale skin with cold hands and feet.'
          ]
        }
      ]
    }
  };

  const current = vitalsData[activeGroup];

  return (
    <div className="space-y-8">
      {/* Age Group Selector Tabs */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-3 sm:p-4 rounded-3xl border border-slate-200 shadow-2xs">
        <div>
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
            Select Patient Cohort:
          </span>
          <p className="text-xs text-slate-600 mt-0.5">
            Normal physiological baselines vary dramatically between infants, children, and adults.
          </p>
        </div>

        <div className="flex items-center gap-1.5 bg-slate-100 p-1.5 rounded-2xl self-start sm:self-auto">
          {(['adult', 'child', 'infant'] as AgeGroup[]).map((group) => (
            <button
              key={group}
              onClick={() => setActiveGroup(group)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition duration-150 ${
                activeGroup === group
                  ? 'bg-brand-600 text-white shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              <span>{vitalsData[group].label}</span>
              <span className="text-[10px] block opacity-80 font-normal">
                {vitalsData[group].ageSpan}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Metrics Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {current.metrics.map((metric, idx) => {
          const Icon = metric.icon;
          return (
            <div
              key={idx}
              className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm hover:shadow-md transition duration-200 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center flex-shrink-0 shadow-xs">
                      <Icon className="w-6 h-6 stroke-[2.2]" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                        {metric.name}
                      </h3>
                      <p className="text-xs text-slate-500 font-medium">
                        Unit: {metric.unit}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Normal Value Highlight */}
                <div className="p-4 rounded-2xl bg-brand-50/70 border border-brand-200/60 space-y-1">
                  <div className="flex items-center justify-between text-xs font-semibold text-brand-800">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-brand-600" />
                      Normal Clinical Baseline:
                    </span>
                    <span className="text-[11px] text-brand-700 bg-white/80 px-2 py-0.5 rounded-md font-bold">
                      {current.label}
                    </span>
                  </div>
                  <p className="text-xl sm:text-2xl font-black text-brand-900 tracking-tight">
                    {metric.normalRange}
                  </p>
                </div>

                {/* Low & High Warning Thresholds */}
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-[11px] font-bold text-slate-500 block mb-0.5">
                      Low Warning:
                    </span>
                    <span className="font-semibold text-slate-800">{metric.lowAlert}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-200">
                    <span className="text-[11px] font-bold text-amber-800 block mb-0.5">
                      High Warning:
                    </span>
                    <span className="font-semibold text-amber-900">{metric.highAlert}</span>
                  </div>
                </div>

                {/* How to Measure Safely */}
                <div className="space-y-1 text-xs sm:text-sm text-slate-700">
                  <strong className="text-slate-900 font-bold block flex items-center gap-1.5">
                    <HelpCircle className="w-3.5 h-3.5 text-brand-600" />
                    How to measure correctly:
                  </strong>
                  <p className="leading-relaxed text-slate-600 pl-5">
                    {metric.howToMeasure}
                  </p>
                </div>

                {/* Clinical Context */}
                <p className="text-xs text-slate-500 italic pl-5 border-l-2 border-slate-200">
                  {metric.clinicalNote}
                </p>
              </div>

              {/* Red Flag Warning Box */}
              <div className="pt-4 border-t border-slate-100 space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-bold text-red-700 uppercase tracking-wide">
                  <AlertTriangle className="w-3.5 h-3.5 text-red-600" />
                  <span>Emergency Red Flags:</span>
                </div>
                <ul className="space-y-1 text-xs text-slate-700">
                  {metric.redFlags.map((flag, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-red-500 mt-1.5 flex-shrink-0"></span>
                      <span>{flag}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>

      {/* Mandatory Scope Banner */}
      <div className="bg-slate-100 border border-slate-200 p-4 rounded-2xl text-xs text-slate-600 flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-brand-600 flex-shrink-0" />
          <span>
            <strong>Reference Notice:</strong> Values represent healthy population resting medians. Measurements outside these ranges require clinical correlation by a medical professional.
          </span>
        </div>
      </div>
    </div>
  );
}

