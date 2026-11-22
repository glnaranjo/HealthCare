import { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
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
  const { language } = useLanguage();

  const vitalsDataEn: Record<AgeGroup, { label: string; ageSpan: string; metrics: VitalMetric[] }> = {
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

  const vitalsDataEs: Record<AgeGroup, { label: string; ageSpan: string; metrics: VitalMetric[] }> = {
    adult: {
      label: 'Adultos',
      ageSpan: '18+ años',
      metrics: [
        {
          name: 'Frecuencia Cardíaca en Reposo (Pulso)',
          unit: 'latidos por minuto (lpm)',
          icon: Heart,
          normalRange: '60 – 100 lpm',
          lowAlert: '< 50 lpm (Bradicardia)',
          highAlert: '> 100 lpm (Taquicardia)',
          howToMeasure: 'Coloca las yemas de los dedos índice y mayor suavemente sobre la arteria radial en la cara interna de la muñeca, debajo del pulgar. Cuenta los latidos durante 30 segundos y multiplica por 2.',
          clinicalNote: 'Deportistas de alto rendimiento frecuentemente tienen pulsos normales en reposo entre 40 y 60 lpm.',
          redFlags: [
            'Pulso en reposo > 120 lpm acompañado de mareo, dolor de pecho o falta de aire.',
            'Palpitaciones o aleteo irregular que produce sensación de desmayo.',
            'Pulso < 45 lpm en una persona no entrenada que siente debilidad o mareo.'
          ]
        },
        {
          name: 'Frecuencia Respiratoria',
          unit: 'respiraciones por minuto (rpm)',
          icon: Wind,
          normalRange: '12 – 20 rpm',
          lowAlert: '< 10 rpm',
          highAlert: '> 24 rpm',
          howToMeasure: 'Cuenta las elevaciones del pecho mientras la persona está en reposo. Es mejor observar discretamente sin avisar, ya que saberlo altera el ritmo involuntario.',
          clinicalNote: 'Cada ciclo respiratorio comprende una inhalación más una exhalación completa.',
          redFlags: [
            'Frecuencia respiratoria > 25 rpm en reposo absoluto.',
            'Incapacidad de pronunciar una frase de 5 palabras seguidas sin detenerse a tomar aire.',
            'Tinte azulado (cianosis) en labios o lecho de las uñas.'
          ]
        },
        {
          name: 'Temperatura Corporal Central',
          unit: 'Grados Celsius (°C)',
          icon: Thermometer,
          normalRange: '36.5°C – 37.5°C',
          lowAlert: '< 35.0°C (Riesgo de hipotermia)',
          highAlert: '≥ 38.0°C (Fiebre clínica)',
          howToMeasure: 'Usa un termómetro digital sublingual con labios cerrados durante 60 segundos, o en la axila seca (sumar ~0.5°C para estimar la temperatura central).',
          clinicalNote: 'La temperatura corporal normal oscila unos 0.5°C a lo largo del día, alcanzando su pico al atardecer.',
          redFlags: [
            'Temperatura ≥ 39.5°C que no cede con hidratación y antipiréticos.',
            'Fiebre acompañada de rigidez en el cuello, confusión mental o manchas oscuras que no desaparecen al presionar.',
            'Temperatura < 35.0°C en una persona expuesta al frío.'
          ]
        },
        {
          name: 'Presión Arterial',
          unit: 'mmHg (Sistólica / Diastólica)',
          icon: Activity,
          normalRange: '< 120 / < 80 mmHg',
          lowAlert: '< 90 / 60 mmHg (Hipotensión)',
          highAlert: '≥ 140 / 90 mmHg (Hipertensión Etapa 2)',
          howToMeasure: 'Siéntate en silencio durante 5 minutos con los pies apoyados en el piso. Coloca el manguito automático a la altura del corazón. No hables durante la medición.',
          clinicalNote: 'Una única lectura alta no diagnostica hipertensión crónica; mide dos veces con un intervalo de 2 minutos.',
          redFlags: [
            'Crisis hipertensiva: Sistólica > 180 mmHg o Diastólica > 120 mmHg.',
            'Presión alta acompañada de dolor de cabeza explosivo, visión borrosa o dolor en el pecho.',
            'Caída brusca < 90/60 mmHg con desvanecimiento o pérdida del conocimiento.'
          ]
        }
      ]
    },
    child: {
      label: 'Niños',
      ageSpan: '1 – 12 años',
      metrics: [
        {
          name: 'Frecuencia Cardíaca en Reposo (Pulso)',
          unit: 'latidos por minuto (lpm)',
          icon: Heart,
          normalRange: '75 – 115 lpm (varía según la edad)',
          lowAlert: '< 60 lpm',
          highAlert: '> 140 lpm en reposo',
          howToMeasure: 'Palpa el pulso en la muñeca o coloca la palma suavemente sobre el lado izquierdo del pecho cuando el niño esté tranquilo y relajado.',
          clinicalNote: 'Los niños tienen un metabolismo más rápido y un corazón más pequeño, por lo que su pulso es naturalmente más veloz.',
          redFlags: [
            'Pulso acelerado continuo > 150 lpm estando en calma y sin fiebre.',
            'Letargo, palidez extrema o falta de respuesta a los llamados.'
          ]
        },
        {
          name: 'Frecuencia Respiratoria',
          unit: 'respiraciones por minuto (rpm)',
          icon: Wind,
          normalRange: '20 – 30 rpm',
          lowAlert: '< 15 rpm',
          highAlert: '> 35 rpm',
          howToMeasure: 'Cuenta las elevaciones del abdomen durante un minuto completo mientras el niño duerme o juega tranquilamente.',
          clinicalNote: 'Los niños pequeños respiran predominantemente con el diafragma (respiración abdominal).',
          redFlags: [
            'Tiraje subcostal (la piel se hunde entre las costillas o en la base del cuello al inhalar).',
            'Aleteo nasal o quejido audible con cada exhalación.',
            'Estridor (silbido agudo al tomar aire).'
          ]
        },
        {
          name: 'Temperatura Corporal',
          unit: 'Grados Celsius (°C)',
          icon: Thermometer,
          normalRange: '36.5°C – 37.5°C',
          lowAlert: '< 35.5°C',
          highAlert: '≥ 38.0°C (Umbral de fiebre)',
          howToMeasure: 'Termómetro digital axilar o timpánico (oído). Nunca utilices termómetros de vidrio con mercurio.',
          clinicalNote: 'La conducta y vitalidad del niño son indicadores más importantes que el decimal exacto del termómetro.',
          redFlags: [
            'Fiebre con manchitas violáceas en la piel que no desaparecen al apoyar un vaso de vidrio transparente.',
            'Niño decaído, que no sostiene la mirada o con llanto débil y continuo.',
            'Convulsión febril que dura más de 5 minutos.'
          ]
        },
        {
          name: 'Presión Arterial',
          unit: 'mmHg',
          icon: Activity,
          normalRange: '90 – 110 / 55 – 75 mmHg',
          lowAlert: '< 80 / 50 mmHg',
          highAlert: '> 120 / 80 mmHg',
          howToMeasure: 'Debe medirse con un manguito de tamaño pediátrico adecuado que cubra dos tercios del brazo.',
          clinicalNote: 'La presión arterial se evalúa principalmente en consultas pediátricas y no como control habitual en el hogar.',
          redFlags: [
            'Desvanecimiento súbito, manos y pies fríos y sudorosos, y mareos al incorporarse.'
          ]
        }
      ]
    },
    infant: {
      label: 'Lactantes / Bebés',
      ageSpan: '0 – 12 meses',
      metrics: [
        {
          name: 'Frecuencia Cardíaca (Pulso)',
          unit: 'latidos por minuto (lpm)',
          icon: Heart,
          normalRange: '100 – 160 lpm',
          lowAlert: '< 90 lpm (Alarma médica urgente)',
          highAlert: '> 180 lpm en reposo',
          howToMeasure: 'En lactantes, el pulso radial es difícil de palpar. Palpa la arteria braquial en la cara interna del brazo entre el codo y el hombro, o escucha los latidos en el pecho.',
          clinicalNote: 'El pulso de un bebé sube normalmente hasta 180 lpm durante el llanto y baja a ~100 lpm durante el sueño profundo.',
          redFlags: [
            'Pulso sostenido < 80 lpm con flacidez muscular o piel azulada/pálida.',
            'Pulso constante > 190 lpm sin estar llorando ni con fiebre.'
          ]
        },
        {
          name: 'Frecuencia Respiratoria',
          unit: 'respiraciones por minuto (rpm)',
          icon: Wind,
          normalRange: '30 – 50 rpm',
          lowAlert: '< 25 rpm',
          highAlert: '> 60 rpm',
          howToMeasure: 'Cuenta las respiraciones abdominales durante 60 segundos completos, ya que los bebés tienen un patrón de respiración irregular y periódico.',
          clinicalNote: 'Pausas breves de 5 a 10 segundos seguidas de respiraciones rápidas pueden ser normales en recién nacidos sanos.',
          redFlags: [
            'Frecuencia respiratoria sostenida > 60 rpm (taquipnea).',
            'Pausas respiratorias que duran más de 15 a 20 segundos (apneas).',
            'El pecho se hunde marcadamente con cada respiración o cabeceo rítmico.'
          ]
        },
        {
          name: 'Temperatura Corporal',
          unit: 'Grados Celsius (°C)',
          icon: Thermometer,
          normalRange: '36.5°C – 37.5°C',
          lowAlert: '< 36.0°C (Riesgo de hipotermia)',
          highAlert: '≥ 38.0°C (CRÍTICO en menores de 3 meses)',
          howToMeasure: 'La medición rectal digital es el estándar clínico en menores de 3 meses. La axilar se usa para controles cotidianos.',
          clinicalNote: 'Los bebés pequeños tienen poca capacidad de regular la temperatura y se enfrían con rapidez en habitaciones frescas.',
          redFlags: [
            'CUALQUIER fiebre ≥ 38.0°C en un bebé menor de 3 meses es una emergencia médica que exige guardia hospitalaria inmediata.',
            'Mollera (fontanela) hundida acompañada de pañales secos durante más de 6 horas.',
            'Rechazo del alimento, succión débil o flacidez muscular anormal.'
          ]
        },
        {
          name: 'Perfusión General y Relleno Capilar',
          unit: 'segundos',
          icon: Activity,
          normalRange: '< 2 segundos',
          lowAlert: 'N/A',
          highAlert: '> 3 segundos (Mala perfusión periférica)',
          howToMeasure: 'Presiona el centro del esternón o la frente del bebé suavemente durante 5 segundos hasta que quede blanco, luego suelta. Cuenta cuántos segundos tarda en volver el color rosado.',
          clinicalNote: 'La prueba de relleno capilar evalúa el flujo de sangre periférico y detecta signos tempranos de deshidratación o shock.',
          redFlags: [
            'El retorno del color tarda más de 3 segundos.',
            'Piel marmórea (con manchas violáceas en red), grisácea o pálida con manitos y pies muy fríos.'
          ]
        }
      ]
    }
  };

  const vitalsData = language === 'es' ? vitalsDataEs : vitalsDataEn;
  const current = vitalsData[activeGroup];

  return (
    <div className="space-y-8">
      {/* Age Group Selector Tabs */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-3 sm:p-4 rounded-3xl border border-slate-200 shadow-2xs">
        <div>
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
            {language === 'es' ? 'Seleccionar Grupo de Paciente:' : 'Select Patient Cohort:'}
          </span>
          <p className="text-xs text-slate-600 mt-0.5">
            {language === 'es' 
              ? 'Los valores normales varían significativamente entre lactantes, niños y adultos.'
              : 'Normal physiological baselines vary dramatically between infants, children, and adults.'}
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
                        {language === 'es' ? 'Unidad:' : 'Unit:'} {metric.unit}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Normal Value Highlight */}
                <div className="p-4 rounded-2xl bg-brand-50/70 border border-brand-200/60 space-y-1">
                  <div className="flex items-center justify-between text-xs font-semibold text-brand-800">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-brand-600" />
                      {language === 'es' ? 'Valor Normal de Referencia:' : 'Normal Clinical Baseline:'}
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
                      {language === 'es' ? 'Alerta por Valor Bajo:' : 'Low Warning:'}
                    </span>
                    <span className="font-semibold text-slate-800">{metric.lowAlert}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-200">
                    <span className="text-[11px] font-bold text-amber-800 block mb-0.5">
                      {language === 'es' ? 'Alerta por Valor Alto:' : 'High Warning:'}
                    </span>
                    <span className="font-semibold text-amber-900">{metric.highAlert}</span>
                  </div>
                </div>

                {/* How to Measure Safely */}
                <div className="space-y-1 text-xs sm:text-sm text-slate-700">
                  <strong className="text-slate-900 font-bold block flex items-center gap-1.5">
                    <HelpCircle className="w-3.5 h-3.5 text-brand-600" />
                    {language === 'es' ? 'Cómo medir correctamente:' : 'How to measure correctly:'}
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
                  <span>{language === 'es' ? 'Señales de Alarma Médica:' : 'Emergency Red Flags:'}</span>
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
            <strong>{language === 'es' ? 'Nota de Referencia:' : 'Reference Notice:'}</strong>{' '}
            {language === 'es'
              ? 'Los valores representan medianas en reposo para poblaciones sanas. Mediciones fuera de estos rangos requieren evaluación clínica por un profesional de la salud.'
              : 'Values represent healthy population resting medians. Measurements outside these ranges require clinical correlation by a medical professional.'}
          </span>
        </div>
      </div>
    </div>
  );
}
