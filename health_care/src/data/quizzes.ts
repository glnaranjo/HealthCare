import { QuizQuestion, Language } from '../types';

export const FIRST_AID_QUIZZES_EN: QuizQuestion[] = [
  {
    id: 'quiz-cpr-depth',
    topic: 'CPR & Resuscitation',
    question: 'When performing chest compressions on an adult in cardiac arrest, what is the recommended depth and compression rate?',
    options: [
      '2 to 3 cm depth at 60 to 80 compressions per minute',
      '5 to 6 cm depth at 100 to 120 compressions per minute',
      '8 to 10 cm depth as fast as possible without stopping',
      'Any depth, as long as rescue breaths are given first'
    ],
    correctAnswerIndex: 1,
    explanation: 'International resuscitation guidelines (AHA and ERC) specify compressing the adult breastbone 5 to 6 cm (approx. 2 to 2.4 inches) deep at a cadence of 100 to 120 compressions per minute (matching the beat of "Stayin\' Alive"). This maintains crucial cerebral and coronary perfusion.',
    medicalAuthority: 'AHA & European Resuscitation Council (ERC) Consensus'
  },
  {
    id: 'quiz-burns-water',
    topic: 'Burns and Scalds',
    question: 'What is the immediate, evidence-based first aid step for a thermal burn or scald?',
    options: [
      'Apply ice cubes directly to freeze the tissue immediately',
      'Apply butter or oil to prevent the skin from drying out',
      'Cool under clean running tap water for a full 20 minutes',
      'Break any blisters to release trapped heat'
    ],
    correctAnswerIndex: 2,
    explanation: 'Cooling under cool or lukewarm running tap water (10-20°C) for a minimum of 20 minutes draws residual heat out of deeper skin layers and dramatically reduces subsequent tissue necrosis and scarring. Ice, butter, or bursting blisters cause further tissue destruction and infection.',
    medicalAuthority: 'International Society for Burn Injuries (ISBI)'
  },
  {
    id: 'quiz-choking-coughing',
    topic: 'Choking',
    question: 'A dining companion is choking on food but is able to speak raspy words and is coughing loudly. What should you do first?',
    options: [
      'Immediately deliver 5 hard abdominal thrusts (Heimlich manoeuvre)',
      'Encourage them to keep coughing forcefully and monitor closely without interfering',
      'Stick your fingers blindly down their throat to fish for the object',
      'Give them a large glass of water to wash down the blockage'
    ],
    correctAnswerIndex: 1,
    explanation: 'If a choking person can speak or cough forcefully, the airway obstruction is partial (mild). The person’s own cough is the most powerful and effective mechanism to clear the foreign body. Delivering thrusts or slapping an upright person can convert a partial obstruction into a fatal complete blockage.',
    medicalAuthority: 'International Federation of Red Cross (IFRC)'
  },
  {
    id: 'quiz-seizure-object',
    topic: 'Seizures',
    question: 'You witness someone collapse and experience generalized tonic-clonic convulsions. Which action is strictly prohibited?',
    options: [
      'Placing a soft jacket or folded towel under their head',
      'Moving sharp furniture and glass tables away from the person',
      'Timing the duration of active shaking with a watch or phone',
      'Inserting a spoon, wooden stick, or fingers into their mouth to prevent tongue swallowing'
    ],
    correctAnswerIndex: 3,
    explanation: 'You must NEVER put anything inside the mouth of a convulsing person. It is physically impossible to swallow one\'s tongue. Inserting items breaks teeth, fractures jaw bones, triggers severe vomiting, and creates an immediate airway obstruction risk.',
    medicalAuthority: 'International League Against Epilepsy (ILAE)'
  },
  {
    id: 'quiz-stroke-fast',
    topic: 'Stroke Recognition',
    question: 'In the BE-FAST stroke recognition protocol, what does the letter "F" stand for?',
    options: [
      'Feet: checking for swollen ankles',
      'Fever: measuring elevated body temperature',
      'Face: checking if one side of the face droops or the smile is uneven',
      'First Aid: giving an aspirin immediately'
    ],
    correctAnswerIndex: 2,
    explanation: 'In the BE-FAST acronym, "F" stands for Face drooping. Asking the person to smile reveals whether facial muscles on one side have lost motor control due to localized cerebral ischemia or hemorrhage.',
    medicalAuthority: 'World Stroke Organization (WSO)'
  },
  {
    id: 'quiz-poison-vomit',
    topic: 'Household Poisoning',
    question: 'A child has accidentally swallowed a household cleaning solution containing bleach. Why should you NOT induce vomiting?',
    options: [
      'Because the child might choke on the vomit and the corrosive chemical burns the throat twice',
      'Because inducing vomiting is only recommended for children over 12',
      'Because bleach becomes harmless once in the stomach acid',
      'Because milk must always be given before vomiting'
    ],
    correctAnswerIndex: 0,
    explanation: 'Inducing vomiting after ingesting corrosive substances causes the caustic chemical to burn the lining of the esophagus, pharynx, and mouth a second time. Additionally, vomiting severely increases the danger of chemical aspiration into the lungs, which can cause fatal chemical pneumonitis.',
    medicalAuthority: 'World Health Organization (WHO) Chemical Safety'
  }
];

export const FIRST_AID_QUIZZES_ES: QuizQuestion[] = [
  {
    id: 'quiz-cpr-depth',
    topic: 'RCP y Resucitación',
    question: 'Al realizar compresiones torácicas a un adulto en paro cardíaco, ¿cuál es la profundidad y el ritmo recomendado?',
    options: [
      'De 2 a 3 cm de profundidad a 60 a 80 compresiones por minuto',
      'De 5 a 6 cm de profundidad a 100 a 120 compresiones por minuto',
      'De 8 a 10 cm de profundidad lo más rápido posible sin parar',
      'Cualquier profundidad, siempre que se den respiraciones de rescate primero'
    ],
    correctAnswerIndex: 1,
    explanation: 'Las guías internacionales de resucitación (AHA y ERC) establecen comprimir el esternón entre 5 y 6 cm de profundidad a un ritmo constante de 100 a 120 compresiones por minuto (al compás de la canción "Stayin\' Alive"). Esto mantiene el flujo de sangre indispensable hacia el cerebro y el corazón.',
    medicalAuthority: 'Consenso de la AHA y del Consejo Europeo de Resucitación (ERC)'
  },
  {
    id: 'quiz-burns-water',
    topic: 'Quemaduras y Escaldaduras',
    question: '¿Cuál es el primer paso inmediato y respaldado por la evidencia ante una quemadura térmica o por agua hirviendo?',
    options: [
      'Aplicar cubos de hielo directo sobre la herida para congelar el tejido',
      'Colocar manteca o aceite para evitar que la piel se reseque',
      'Enfriar bajo agua corriente limpia del grifo durante 20 minutos completos',
      'Reventar las ampollas para liberar el calor acumulado'
    ],
    correctAnswerIndex: 2,
    explanation: 'Enfriar con agua corriente fresca (10 a 20 °C) durante un mínimo de 20 minutos extrae el calor residual de las capas profundas de la piel y reduce drásticamente la muerte del tejido y las cicatrices. El hielo, la manteca o reventar ampollas empeoran las lesiones y causan infecciones severas.',
    medicalAuthority: 'Sociedad Internacional de Quemaduras (ISBI)'
  },
  {
    id: 'quiz-choking-coughing',
    topic: 'Atragantamiento',
    question: 'Una persona en la mesa se atraganta con comida, pero puede pronunciar palabras entrecortadas y tose fuertemente. ¿Qué debes hacer primero?',
    options: [
      'Aplicar inmediatamente 5 compresiones abdominales fuertes (maniobra de Heimlich)',
      'Animarla a que continúe tosiendo con fuerza y observarla de cerca sin intervenir',
      'Introducir los dedos a ciegas en su garganta para buscar el trozo de comida',
      'Darle un vaso grande de agua para que empuje la obstrucción'
    ],
    correctAnswerIndex: 1,
    explanation: 'Si la persona puede hablar o toser con fuerza, la obstrucción es parcial (leve). La propia tos de la persona es el mecanismo más potente y seguro para expulsar el cuerpo extraño. Golpear la espalda o hacer compresiones abdominales en este momento puede convertir una obstrucción leve en un bloqueo total asfixiante.',
    medicalAuthority: 'Federación Internacional de la Cruz Roja (IFRC)'
  },
  {
    id: 'quiz-seizure-object',
    topic: 'Convulsiones',
    question: 'Presencias a una persona caer al suelo con sacudidas convulsivas generalizadas. ¿Cuál de las siguientes acciones está estrictamente prohibida?',
    options: [
      'Colocar una prenda doblada o toalla suave debajo de su cabeza para protegerla',
      'Alejar muebles con esquinas filosas y objetos de vidrio alrededor',
      'Controlar la duración de la crisis con el reloj o teléfono',
      'Introducir una cuchara, palo o los dedos dentro de su boca para evitar que se trague la lengua'
    ],
    correctAnswerIndex: 3,
    explanation: 'NUNCA se debe meter nada en la boca de una persona que convulsiona. Es anatómicamente imposible tragarse la propia lengua. Forzar la apertura de la boca fractura dientes, luxa la mandíbula, provoca vómitos e introduce un riesgo mortal de asfixia.',
    medicalAuthority: 'Liga Internacional contra la Epilepsia (ILAE)'
  },
  {
    id: 'quiz-stroke-fast',
    topic: 'Reconocimiento de ACV',
    question: 'En el protocolo de reconocimiento rápido de ACV "BE-FAST", ¿qué evalúa la letra "F" (Face / Rostro)?',
    options: [
      'Fiebre: medir si la temperatura corporal está elevada',
      'Frente: palpar si hay sudoración fría en la frente',
      'Face (Rostro): pedirle a la persona que sonría para ver si un lado de la cara se cae o está caído',
      'Fármacos: administrarle una aspirina inmediatamente'
    ],
    correctAnswerIndex: 2,
    explanation: 'La letra "F" corresponde a Face (Rostro caído o asimétrico). Pedirle a la persona que sonría pone en evidencia la parálisis muscular de un lado de la cara producida por la falta de irrigación sanguínea en el cerebro.',
    medicalAuthority: 'Organización Mundial del Accidente Cerebrovascular (WSO)'
  },
  {
    id: 'quiz-poison-vomit',
    topic: 'Intoxicaciones Domésticas',
    question: 'Un niño ingiere accidentalmente lavandina u otro producto de limpieza cáustico. ¿Por qué NO se debe inducir el vómito?',
    options: [
      'Porque el químico corrosivo volvería a quemar el esófago y la garganta al subir, y hay riesgo de asfixia pulmonar',
      'Porque inducir el vómito solo está permitido en mayores de 12 años',
      'Porque los ácidos del estómago neutralizan automáticamente la lavandina',
      'Porque primero siempre se debe administrar un vaso de leche'
    ],
    correctAnswerIndex: 0,
    explanation: 'Provocar el vómito tras ingerir sustancias cáusticas (ácidos, lavandina, soda cáustica) quema las mucosas de la garganta y esófago por segunda vez. Además, existe un riesgo altísimo de que el vómito con químicos entre a las vías respiratorias provocando neumonitis química fatal.',
    medicalAuthority: 'Seguridad Química de la Organización Mundial de la Salud (OMS)'
  }
];

export const getLocalizedQuizzes = (lang: Language): QuizQuestion[] => {
  return lang === 'es' ? FIRST_AID_QUIZZES_ES : FIRST_AID_QUIZZES_EN;
};

export const FIRST_AID_QUIZZES = FIRST_AID_QUIZZES_EN;
