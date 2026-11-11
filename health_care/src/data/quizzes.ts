import { QuizQuestion } from '../types';

export const FIRST_AID_QUIZZES: QuizQuestion[] = [
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

