import { Article } from '../types';

export const ARTICLES: Article[] = [
  // 1. CARDIAC ARREST & CPR
  {
    id: 'cpr-cardiac-arrest',
    slug: 'cardiac-arrest-cpr',
    title: 'Adult Cardiac Arrest and Hands-Only CPR',
    shortDescription: 'How to recognize sudden cardiac arrest and deliver immediate, life-saving chest compressions.',
    category: 'emergencies',
    urgency: 'critical',
    readingTimeMinutes: 4,
    lastReviewed: 'November 2024',
    reviewedBy: 'International Resuscitation & Emergency Consensus Committee',
    summary: 'When a person collapses, becomes unresponsive, and is not breathing normally, every second counts. Immediate bystander CPR doubles or triples the person’s chance of survival.',
    whatIsIt: 'Cardiac arrest occurs when the heart suddenly stops pumping blood through the body due to an electrical malfunction. It is distinct from a heart attack, though a heart attack can cause cardiac arrest. Without oxygenated blood flow, brain death begins within 3 to 5 minutes.',
    howToRecognize: [
      'The person suddenly collapses and does not respond when shaken gently by the shoulders.',
      'No breathing, or only occasional gasping/agonal breaths (gasping sounds are NOT normal breathing).',
      'No reaction to loud questions or firm stimulus.',
      'Pale, bluish, or grayish skin color, particularly around lips and fingers.'
    ],
    whatToDo: [
      {
        step: 1,
        title: 'Check Safety & Responsiveness',
        description: 'Ensure the immediate surroundings are safe for you. Tap the person firmly on both shoulders and ask loudly: "Are you okay?" If no response, act immediately.',
        warning: 'Do not spend more than 10 seconds checking for responsiveness and normal breathing.'
      },
      {
        step: 2,
        title: 'Call Emergency Services & Request an AED',
        description: 'Call your local emergency number (e.g. 911, 112, 999). Put the phone on speaker. Point directly to a specific bystander and say: "You, call emergency and bring an Automated External Defibrillator (AED) right now!"',
      },
      {
        step: 3,
        title: 'Position Hands on Center of Chest',
        description: 'Place the heel of one hand in the very center of the person’s bare chest (lower half of the breastbone). Place the heel of your other hand on top and interlock your fingers. Keep your elbows straight and position your shoulders directly over your hands.',
      },
      {
        step: 4,
        title: 'Deliver High-Quality Chest Compressions',
        description: 'Push hard and fast: compress the chest at least 5 to 6 cm (2 to 2.4 inches) deep at a cadence of 100 to 120 beats per minute (to the rhythm of the song "Stayin\' Alive"). Allow the chest to recoil completely between each compression.',
        warning: 'Do not lean continuously on the chest between pushes; full recoil allows the heart to refill with blood.'
      },
      {
        step: 5,
        title: 'Continue Until Help Arrives or AED Is Ready',
        description: 'Do not interrupt compressions unless the person clearly wakes up and breathes normally, an AED is analyzing/delivering a shock, or professional emergency medics take over. If multiple bystanders are present, rotate compressors every 2 minutes to prevent fatigue.',
      }
    ],
    whatNotToDo: [
      'DO NOT hesitate to act out of fear of causing injury; cracked ribs heal, death is permanent.',
      'DO NOT delay compressions to search for a faint pulse if you are not a certified medical professional.',
      'DO NOT interpret agonal gasps or wheezes as genuine breathing.',
      'DO NOT leave the person alone unless you must retrieve a phone or AED with no one else nearby.',
      'DO NOT give liquids, food, or medication into the mouth of an unconscious person.'
    ],
    whenToSeekMedicalHelp: [
      'Cardiac arrest is the most extreme medical emergency; emergency dispatch must be dialed immediately at Step 1.',
      'Even if the person regains consciousness before medics arrive, they must undergo immediate hospital evaluation in an intensive care setting.'
    ],
    sources: [
      { name: 'American Heart Association (AHA) CPR & ECC Guidelines', year: '2023' },
      { name: 'European Resuscitation Council (ERC) Guidelines for Resuscitation', year: '2023' },
      { name: 'World Health Organization (WHO) Emergency Medical Care Standards', year: '2022' }
    ],
    relatedArticles: ['aed-basics', 'stroke-recognition', 'choking-adult-child'],
    searchKeywords: ['cpr', 'cardiac arrest', 'heart stopped', 'unconscious', 'chest compressions', 'resuscitation', 'stayin alive', 'collapse']
  },

  // 2. AED BASICS
  {
    id: 'aed-basics',
    slug: 'aed-basics',
    title: 'Automated External Defibrillator (AED) Guide',
    shortDescription: 'How anyone can safely use a public AED to restart a heart in ventricular fibrillation.',
    category: 'emergencies',
    urgency: 'critical',
    readingTimeMinutes: 3,
    lastReviewed: 'November 2024',
    reviewedBy: 'International Resuscitation & Emergency Consensus Committee',
    summary: 'An Automated External Defibrillator (AED) is a portable device that analyzes the heart’s rhythm and delivers an electric shock if needed. Modern AEDs give clear spoken audio instructions and will never shock someone who does not need it.',
    whatIsIt: 'When sudden cardiac arrest occurs, the heart frequently enters a chaotic, non-pumping rhythm known as ventricular fibrillation (VF). An electrical defibrillation shock stops this chaotic rhythm, permitting the heart’s natural pacemaker to restart organized contractions.',
    howToRecognize: [
      'Public AED cabinets are usually marked with a bright green or red heart symbol with an electrical lightning bolt.',
      'An AED should be used immediately on any person who is unresponsive and not breathing normally.'
    ],
    whatToDo: [
      {
        step: 1,
        title: 'Turn On the AED',
        description: 'Open the lid or push the power button. The device will immediately begin speaking clear voice instructions.',
      },
      {
        step: 2,
        title: 'Bare the Chest and Attach Pads',
        description: 'Remove all clothing from the patient’s chest. Peel the adhesive backing off the electrode pads and attach them exactly as illustrated on the pads: one pad on the upper right chest below the collarbone, and the other pad on the lower left rib cage below the armpit.',
        warning: 'Ensure the chest is dry. Quickly wipe away water or heavy sweat before sticking pads.'
      },
      {
        step: 3,
        title: 'Clear the Patient for Rhythm Analysis',
        description: 'When the AED states: "Analyzing heart rhythm, do not touch the patient," stand back and shout firmly: "Clear!" Ensure nobody is in physical contact with the person.',
      },
      {
        step: 4,
        title: 'Deliver Shock if Advised',
        description: 'If the AED indicates a shock is advised, ensure everyone remains clear, then press the flashing orange or red shock button. If it is a fully automated unit, it will count down and deliver the shock automatically.',
      },
      {
        step: 5,
        title: 'Resume Chest Compressions Immediately',
        description: 'Right after the shock is delivered (or if no shock is advised), immediately restart chest compressions. Do not remove the pads. The AED will time 2 minutes of CPR and re-analyze automatically.',
      }
    ],
    whatNotToDo: [
      'DO NOT touch the patient while the AED is analyzing or delivering an electric shock.',
      'DO NOT remove the electrode pads even if the person regains consciousness; leave them on until medics arrive.',
      'DO NOT use adult pads on infants under 1 year of age if pediatric pads/attenuator are available; however, if pediatric pads are absent, adult pads are safer than no defibrillation.',
      'DO NOT attach pads directly over implanted pacemakers (visible bulge under skin) or medication patches (remove patch and wipe skin first).'
    ],
    whenToSeekMedicalHelp: [
      'Emergency medical dispatch must be en route prior to or simultaneously with AED retrieval.'
    ],
    sources: [
      { name: 'International Liaison Committee on Resuscitation (ILCOR)', year: '2023' },
      { name: 'European Resuscitation Council (ERC)', year: '2023' }
    ],
    relatedArticles: ['cardiac-arrest-cpr', 'stroke-recognition'],
    searchKeywords: ['aed', 'defibrillator', 'electric shock', 'heart paddles', 'public defibrillator', 'pads']
  },

  // 3. CHOKING
  {
    id: 'choking-adult-child',
    slug: 'choking-adult-child',
    title: 'Choking First Aid (Adults and Children)',
    shortDescription: 'How to relieve severe airway obstruction using back blows and abdominal thrusts.',
    category: 'emergencies',
    urgency: 'critical',
    readingTimeMinutes: 4,
    lastReviewed: 'November 2024',
    reviewedBy: 'Global First Aid Advisory Panel',
    summary: 'Choking occurs when a foreign object or food lodges in the throat, obstructing airflow. Quick recognition of mild vs. severe obstruction determines the correct life-saving action.',
    whatIsIt: 'Airway obstruction prevents oxygen from entering the lungs. A mild obstruction allows coughing and speech. A severe obstruction completely blocks air exchange, leading to unconsciousness and cardiac arrest within minutes.',
    howToRecognize: [
      'The universal choking sign: clutching the neck with one or both hands.',
      'Inability to speak, cry, or make normal sounds.',
      'Weak, ineffective coughing or silent coughing efforts.',
      'High-pitched wheezing sound during inhalation (stridor).',
      'Bluish discoloration of the lips, tongue, or earlobes (cyanosis).'
    ],
    whatToDo: [
      {
        step: 1,
        title: 'Assess Severity: Encourage Coughing if Mild',
        description: 'Ask: "Are you choking?" If the person can speak, cough forcefully, or breathe, do NOT interfere with back blows. Encourage them to keep coughing forcefully.',
      },
      {
        step: 2,
        title: 'Give 5 Sharp Back Blows (Severe Obstruction)',
        description: 'If the person cannot speak or cough, stand slightly behind and to the side. Support their chest with one hand and lean them well forward. Deliver up to 5 firm, sharp blows between the shoulder blades using the heel of your other hand.',
      },
      {
        step: 3,
        title: 'Give 5 Abdominal Thrusts (Heimlich Manoeuvre)',
        description: 'If back blows do not dislodge the object, stand behind the person. Wrap both arms around the waist. Make a fist with one hand and place the thumb side just above the navel (well below the ribcage). Grasp your fist with your other hand and pull sharply inward and upward 5 times.',
        warning: 'For pregnant individuals or severely obese individuals, perform chest thrusts against the center of the breastbone instead of abdominal thrusts.'
      },
      {
        step: 4,
        title: 'Alternate 5 Back Blows and 5 Thrusts',
        description: 'Continue alternating 5 back blows and 5 abdominal thrusts until the object is expelled or the person becomes unconscious.',
      },
      {
        step: 5,
        title: 'If Person Becomes Unresponsive: Begin CPR',
        description: 'Lower them safely to the floor. Call emergency services immediately. Begin 30 chest compressions. Look inside the mouth before giving breaths; only remove an object if it is clearly visible and loose.',
        warning: 'Never perform blind finger sweeps down the throat, as this can push the obstruction deeper.'
      }
    ],
    whatNotToDo: [
      'DO NOT slap a person on the back if they are standing upright, as gravity can pull the object further down.',
      'DO NOT give a choking person water to drink; water will not dissolve the obstruction and increases aspiration risk.',
      'DO NOT perform blind finger sweeps in the mouth.',
      'DO NOT perform abdominal thrusts on infants under 1 year old (use alternate 5 back slaps and 5 chest thrusts with 2 fingers).'
    ],
    whenToSeekMedicalHelp: [
      'Anyone who has received abdominal thrusts or lost consciousness must be examined by a physician, even if the object was expelled, to check for internal abdominal or throat injuries.'
    ],
    sources: [
      { name: 'International Federation of Red Cross and Red Crescent Societies (IFRC)', year: '2023' },
      { name: 'European Resuscitation Council (ERC) First Aid Guidelines', year: '2022' }
    ],
    relatedArticles: ['cardiac-arrest-cpr', 'aed-basics'],
    searchKeywords: ['choking', 'heimlich', 'back blows', 'throat stuck', 'cannot breathe', 'food stuck', 'swallowed object']
  },

  // 4. STROKE RECOGNITION
  {
    id: 'stroke-recognition',
    slug: 'stroke-recognition',
    title: 'Recognizing a Stroke: The BE-FAST Protocol',
    shortDescription: 'Identify the sudden warning signs of a stroke and act immediately to preserve brain function.',
    category: 'emergencies',
    urgency: 'critical',
    readingTimeMinutes: 3,
    lastReviewed: 'November 2024',
    reviewedBy: 'World Stroke Organization Clinical Guidelines',
    summary: 'A stroke is a medical emergency that happens when blood supply to part of the brain is cut off. "Time is brain": every minute untreated, approximately 1.9 million neurons die. Rapid hospital admission enables clot-dissolving therapies.',
    whatIsIt: 'Strokes are primarily ischemic (caused by a blood clot blocking an artery in the brain) or hemorrhagic (caused by a ruptured blood vessel bleeding into brain tissue). Both cause sudden localized neurological deficits.',
    howToRecognize: [
      'B - Balance: Sudden loss of balance, dizziness, or difficulty walking.',
      'E - Eyes: Sudden loss of vision in one or both eyes, or sudden double vision.',
      'F - Face: One side of the face droops or is numb. Ask the person to smile; is the smile uneven?',
      'A - Arms: Sudden weakness or numbness in one arm or leg. Ask them to raise both arms; does one arm drift downward?',
      'S - Speech: Slurred speech, inability to find words, or difficulty comprehending simple sentences.',
      'T - Time: Time to call emergency dispatch immediately if ANY one of these signs is present.'
    ],
    whatToDo: [
      {
        step: 1,
        title: 'Call Emergency Services Immediately',
        description: 'Tell the dispatcher: "I suspect this person is having an acute stroke." Note the exact time when symptoms first started or when the person was last seen normal.',
      },
      {
        step: 2,
        title: 'Keep the Person Calm and Comfortable',
        description: 'Position them lying down on their back with head and shoulders slightly elevated on pillows (around 30 degrees) to help reduce intracranial pressure.',
      },
      {
        step: 3,
        title: 'Loosen Restrictive Clothing',
        description: 'Unbutton tight collars, neckties, and belts to ensure unrestricted breathing.',
      },
      {
        step: 4,
        title: 'Monitor Breathing and Consciousness',
        description: 'If the person vomits or loses consciousness, turn them gently onto their side into the recovery position to keep the airway open.',
      }
    ],
    whatNotToDo: [
      'DO NOT give aspirin or medication; if the stroke is hemorrhagic (bleeding), aspirin will worsen the bleeding significantly.',
      'DO NOT offer food, water, or medication; stroke frequently paralyzes swallowing reflexes, causing choking or pulmonary aspiration.',
      'DO NOT let the person go to sleep or "wait to see if it gets better."',
      'DO NOT drive the person to the hospital yourself if ambulance services are available; paramedics initiate specialized stroke protocols en route.'
    ],
    whenToSeekMedicalHelp: [
      'A stroke is an absolute emergency; dial emergency immediately at the onset of any symptom.'
    ],
    sources: [
      { name: 'World Stroke Organization (WSO)', year: '2023' },
      { name: 'American Heart Association / American Stroke Association Guidelines', year: '2023' }
    ],
    relatedArticles: ['cardiac-arrest-cpr', 'seizures-first-aid'],
    searchKeywords: ['stroke', 'be-fast', 'fast', 'face drooping', 'arm weakness', 'slurred speech', 'paralysis', 'brain ischemia']
  },

  // 5. SEIZURES
  {
    id: 'seizures-first-aid',
    slug: 'seizures-first-aid',
    title: 'Seizure and Convulsion First Aid',
    shortDescription: 'How to protect someone having a generalized seizure and what dangerous myths to avoid.',
    category: 'emergencies',
    urgency: 'urgent',
    readingTimeMinutes: 3,
    lastReviewed: 'November 2024',
    reviewedBy: 'International League Against Epilepsy (ILAE)',
    summary: 'Watching someone have a tonic-clonic seizure can be distressing, but most seizures stop naturally within 2 to 3 minutes. The primary role of a first aider is to protect the person from physical injury while the seizure runs its course.',
    whatIsIt: 'A seizure occurs when sudden, abnormal bursts of electrical activity disrupt normal brain communication. Causes include epilepsy, high fever (febrile seizures in infants), head trauma, low blood sugar, or stroke.',
    howToRecognize: [
      'Sudden collapse or cry, followed by muscle stiffening (tonic phase).',
      'Rhythmic, jerking contractions of arms and legs (clonic phase).',
      'Irregular breathing, drooling, or frothing at the mouth.',
      'Temporary loss of bowel or bladder control.',
      'Post-seizure confusion, extreme fatigue, and headache (postictal phase).'
    ],
    whatToDo: [
      {
        step: 1,
        title: 'Protect From Physical Trauma',
        description: 'Gently guide them to the floor if they are falling. Clear away hard, sharp, or hot objects (furniture, glass, heaters) to prevent blunt injury.',
      },
      {
        step: 2,
        title: 'Cushion the Head',
        description: 'Place a folded jacket, towel, or small soft pillow under their head to prevent head impact trauma.',
      },
      {
        step: 3,
        title: 'Time the Seizure',
        description: 'Look at your watch or phone. Note the exact duration of active jerking; this duration is critical information for medical responders.',
      },
      {
        step: 4,
        title: 'Place in Recovery Position Once Jerking Stops',
        description: 'As soon as active contractions cease, roll the person onto their side. Tilt the chin gently upward to keep the airway open and allow fluids to drain from the mouth.',
      },
      {
        step: 5,
        title: 'Stay Until Fully Alert',
        description: 'Speak calmly and reassuringly. Reorient them to their surroundings, as they may feel confused or embarrassed.',
      }
    ],
    whatNotToDo: [
      'DO NOT put anything in the person\'s mouth (no fingers, spoons, or bite sticks); people cannot swallow their tongue, and inserting objects breaks teeth and blocks airways.',
      'DO NOT restrain their movements or hold them down; this can cause severe muscle tears and bone fractures.',
      'DO NOT give liquids, medications, or food until the person is 100% awake and responsive.',
      'DO NOT attempt artificial respiration or CPR while the person is having active convulsions.'
    ],
    whenToSeekMedicalHelp: [
      'Call emergency services immediately if:',
      '- The seizure lasts longer than 5 minutes.',
      '- A second seizure begins before the person fully regains consciousness.',
      '- The person has trouble breathing after the jerking stops.',
      '- The seizure occurs in water (pool, bathtub).',
      '- The person is pregnant, injured, or has no prior history of seizures.'
    ],
    sources: [
      { name: 'International League Against Epilepsy (ILAE)', year: '2023' },
      { name: 'Centers for Disease Control and Prevention (CDC) Epilepsy Guidelines', year: '2023' }
    ],
    relatedArticles: ['stroke-recognition', 'head-injuries-concussion'],
    searchKeywords: ['seizure', 'epilepsy', 'convulsion', 'jerking', 'shaking', 'fit', 'foaming at mouth']
  },

  // 6. SEVERE BURNS
  {
    id: 'burns-first-aid',
    slug: 'burns-first-aid',
    title: 'Burns and Scalds First Aid',
    shortDescription: 'The proven 20-minute cooling rule, blister care, and preventing dangerous home remedies.',
    category: 'accidents',
    urgency: 'urgent',
    readingTimeMinutes: 4,
    lastReviewed: 'November 2024',
    reviewedBy: 'International Society for Burn Injuries (ISBI)',
    summary: 'Burns can result from thermal heat, hot liquids (scalds), electricity, radiation, or chemicals. Immediate, correct cooling prevents burn progression into deeper tissue layers and significantly reduces scarring.',
    whatIsIt: 'Burn injuries damage the skin layers. Superficial (1st degree) affects only the epidermis (redness, pain). Partial thickness (2nd degree) causes blistering and intense pain. Full thickness (3rd degree) destroys all skin layers, appearing white, charred, or leathery, often with diminished pain due to nerve destruction.',
    howToRecognize: [
      'Red, swollen skin with intense localized pain.',
      'Formation of clear fluid-filled blisters.',
      'Skin that appears charred black, waxy white, or leathery.',
      'Signs of smoke inhalation: soot around nose or mouth, singed facial hair, difficulty breathing.'
    ],
    whatToDo: [
      {
        step: 1,
        title: 'Stop the Burning Process',
        description: 'Safely extinguish flames or disconnect the power source. Remove the casualty from the danger zone.',
      },
      {
        step: 2,
        title: 'Cool With Clean Running Water for 20 Minutes',
        description: 'Immediately cool the burned area under cool or lukewarm running tap water for a full 20 minutes. This draws residual heat out of deep tissue even after the heat source is removed.',
        warning: 'Use cool running water (around 10-20°C). Do NOT use freezing ice or ice water.'
      },
      {
        step: 3,
        title: 'Gently Remove Constrictive Items',
        description: 'Carefully take off rings, bracelets, watches, and tight clothing near the burned area before swelling begins. Do NOT peel away clothing that is melted or stuck to the burn.',
      },
      {
        step: 4,
        title: 'Cover With Clean Plastic Cling Film or Sterile Dressing',
        description: 'Cover the burn loosely with clean food plastic wrap (cling film) layered lengthwise, or a clean sterile non-adherent dressing. Cling film protects exposed nerve endings, reduces pain, and keeps out airborne bacteria.',
      },
      {
        step: 5,
        title: 'Keep the Patient Warm',
        description: 'While cooling large burns, wrap unburned body parts in a clean blanket to prevent hypothermia, especially in children and the elderly.',
      }
    ],
    whatNotToDo: [
      'DO NOT apply ice, ice packs, or freezing water; extreme cold constricts blood vessels, worsening tissue ischemia.',
      'DO NOT apply butter, oil, mayonnaise, toothpaste, eggs, or ointments; these trap heat and cause severe bacterial infections.',
      'DO NOT burst blisters; intact blisters provide a sterile natural barrier against infection.',
      'DO NOT use fluffy cotton wool or adhesive tape directly over burned skin.'
    ],
    whenToSeekMedicalHelp: [
      'Seek urgent medical attention or call an ambulance if:',
      '- The burn is larger than the palm of the casualty’s hand.',
      '- The burn affects the face, hands, feet, groin, major joints, or encircles a limb.',
      '- The burn is electrical or chemical in origin.',
      '- The skin appears charred, white, or leathery.',
      '- The casualty is an infant, young child, or elderly person.'
    ],
    sources: [
      { name: 'International Society for Burn Injuries (ISBI) Practice Guidelines', year: '2023' },
      { name: 'British Burn Association First Aid Clinical Guidance', year: '2022' }
    ],
    relatedArticles: ['severe-bleeding-wounds', 'first-aid-kit-checklist'],
    searchKeywords: ['burn', 'scald', 'hot water', 'fire', 'blister', 'cooling', 'cling wrap', 'sunburn', 'chemical burn']
  },

  // 7. SEVERE BLEEDING
  {
    id: 'severe-bleeding-wounds',
    slug: 'severe-bleeding-wounds',
    title: 'Severe Bleeding and Wound Management',
    shortDescription: 'How to control arterial and life-threatening bleeding using direct pressure, packing, and bandages.',
    category: 'accidents',
    urgency: 'critical',
    readingTimeMinutes: 4,
    lastReviewed: 'November 2024',
    reviewedBy: 'Global First Aid & Trauma Consensus Group',
    summary: 'A person can bleed to death from a severed major artery in under 3 minutes. Continuous direct firm pressure is the single most effective first aid technique to stop external hemorrhage.',
    whatIsIt: 'Bleeding can be capillary (minor oozing), venous (steady dark red flow), or arterial (pulsating or spurting bright red blood under high pressure). Severe external bleeding requires rapid physical intervention before hemorrhagic shock sets in.',
    howToRecognize: [
      'Blood spurting or pumping from the wound in rhythm with the heartbeat.',
      'Continuous pooling of blood on the floor or soaking quickly through clothing.',
      'Victim appears pale, cold, clammy, and anxious.',
      'Dizziness, rapid weak pulse, and decreasing level of consciousness.'
    ],
    whatToDo: [
      {
        step: 1,
        title: 'Protect Yourself & Expose the Wound',
        description: 'Put on disposable gloves if immediately available. Tear or cut clothing to see the exact bleeding point clearly.',
      },
      {
        step: 2,
        title: 'Apply Continuous Direct Pressure',
        description: 'Place a clean sterile dressing, cloth, or your gloved hand directly over the bleeding site. Push down firmly with maximum body weight. Maintain continuous, uninterrupted pressure.',
        warning: 'Do not peek underneath the dressing to see if bleeding has stopped; peeking dislodges the newly formed fibrin blood clot.'
      },
      {
        step: 3,
        title: 'Apply a Firm Pressure Bandage',
        description: 'Wrap a rolled bandage firmly around the dressing to maintain pressure. Ensure the bandage is tight enough to control bleeding, but not so tight that it turns the fingers or toes blue.',
      },
      {
        step: 4,
        title: 'Manage Shock and Keep Warm',
        description: 'Help the casualty lie down flat. Cover them with a jacket or blanket to preserve body temperature, as hypothermia severely impairs the body’s blood clotting mechanism.',
      },
      {
        step: 5,
        title: 'Tourniquet for Severe Limb Hemorrhage',
        description: 'If life-threatening bleeding from an arm or leg does not stop with direct pressure, apply a commercial manufactured tourniquet 5 to 7 cm (2-3 inches) above the wound (never over a joint). Tighten until bleeding stops completely. Note the exact application time on the tourniquet.',
      }
    ],
    whatNotToDo: [
      'DO NOT remove an embedded knife, glass shard, or foreign object; removing it releases internal vascular pressure and triggers uncontrollable bleeding. Pad around the object instead.',
      'DO NOT remove blood-soaked dressings; always place new dressings directly on top of old ones.',
      'DO NOT use improvised tourniquets (like thin wires or shoelaces) that cut into flesh; stick to direct continuous pressure unless trained.',
      'DO NOT give the person anything to eat or drink, even if they complain of severe thirst.'
    ],
    whenToSeekMedicalHelp: [
      'Call emergency services immediately for any bleeding that spurts, pools, does not stop within 5 to 10 minutes of direct pressure, or causes faintness and shock.'
    ],
    sources: [
      { name: 'American College of Surgeons: Stop the Bleed Program', year: '2023' },
      { name: 'World Health Organization Trauma Care Guidelines', year: '2022' }
    ],
    relatedArticles: ['burns-first-aid', 'first-aid-kit-checklist'],
    searchKeywords: ['bleeding', 'cut', 'artery', 'blood', 'wound', 'pressure bandage', 'tourniquet', 'hemorrhage', 'deep laceration']
  },

  // 8. FIRST AID KIT CHECKLIST
  {
    id: 'first-aid-kit-checklist',
    slug: 'first-aid-kit-checklist',
    title: 'How to Build an Essential Home First Aid Kit',
    shortDescription: 'Comprehensive checklist of medical essentials, correct storage conditions, and expiry tracking.',
    category: 'home-health',
    urgency: 'precautionary',
    readingTimeMinutes: 5,
    lastReviewed: 'November 2024',
    reviewedBy: 'International Federation of Red Cross Public Health Reference',
    summary: 'A well-stocked, easily accessible first aid kit is your household’s first line of defense during unexpected accidents and sudden injuries.',
    whatIsIt: 'A home first aid kit is an organized container of medical supplies used to treat minor cuts, scrapes, burns, sprains, and provide initial stabilization for more serious emergencies until professional medical care arrives.',
    howToRecognize: [
      'Every household should have at least one clearly designated first aid box.',
      'The container should be clean, durable, water-resistant, and marked with a recognizable cross symbol.'
    ],
    whatToDo: [
      {
        step: 1,
        title: 'Stock Wound Cleaning and Dressings',
        description: 'Include: Sterile gauze pads (5x5 cm and 10x10 cm), adhesive bandages in multiple sizes, medical adhesive tape, elastic roller bandages, sterile eye pads, and saline solution (0.9% NaCl ampoules) for wound flushing.',
      },
      {
        step: 2,
        title: 'Include First Aid Tools & Barrier Protection',
        description: 'Stock: Medical stainless blunt-tipped shears, fine tweezers for splinter removal, disposable nitrile gloves (at least 4 pairs), a CPR pocket face shield, and an instant cold compress pack.',
      },
      {
        step: 3,
        title: 'Add Diagnostic Equipment',
        description: 'Digital fever thermometer, a small penlight for pupil/throat examination, and an emergency foil blanket (space blanket) to prevent shock and hypothermia.',
      },
      {
        step: 4,
        title: 'Store in a Dry, Cool, Accessible Location',
        description: 'Keep the kit out of reach of young children, but easily accessible to all adults. Avoid storing it in humid bathrooms, where steam degrades adhesive bandages and medications.',
      },
      {
        step: 5,
        title: 'Perform a Bi-Annual Expiry Audit',
        description: 'Check your kit every 6 months (such as when daylight saving time changes). Replace expired antiseptic solutions, degraded rubber bands, and used supplies.',
      }
    ],
    whatNotToDo: [
      'DO NOT lock the kit with a key that can be lost during a panic situation; use child-resistant latches instead.',
      'DO NOT store prescription medications intended for specific family members inside the general first aid kit.',
      'DO NOT store kit in direct sunlight or hot car trunks for extended periods.'
    ],
    whenToSeekMedicalHelp: [
      'First aid supplies are designed for preliminary care; seek certified medical care for deep puncture wounds, uncontrolled bleeding, animal bites, or signs of wound infection (red streaks, pus, heat).'
    ],
    sources: [
      { name: 'International Red Cross First Aid Kit Standards', year: '2023' },
      { name: 'World Health Organization Essential Medical Equipment', year: '2022' }
    ],
    relatedArticles: ['severe-bleeding-wounds', 'household-poisoning-prevention'],
    searchKeywords: ['first aid kit', 'bandages', 'gauze', 'tweezers', 'medical box', 'home emergency supplies', 'antiseptic']
  },

  // 9. HOUSEHOLD POISONING
  {
    id: 'household-poisoning-prevention',
    slug: 'household-poisoning-prevention',
    title: 'Household Poisoning and Chemical Safety',
    shortDescription: 'Immediate protocol for toxic ingestion, chemical exposure, and why you should never induce vomiting.',
    category: 'home-health',
    urgency: 'urgent',
    readingTimeMinutes: 4,
    lastReviewed: 'November 2024',
    reviewedBy: 'World Health Organization Chemical Safety Program',
    summary: 'Household chemicals, detergents, and improperly stored medications are leading causes of accidental poisoning, especially in children under 5 years of age. Knowing what NOT to do is critical.',
    whatIsIt: 'Poisoning occurs when a harmful substance is swallowed, inhaled, absorbed through the skin, or splashed into the eyes. Corrosive chemicals (bleach, drain openers) cause catastrophic burn damage to the esophagus and lungs.',
    howToRecognize: [
      'Open or spilled containers of cleaning agents, medicines, or chemicals nearby.',
      'Chemical odor on the breath, burns, or redness around the lips and mouth.',
      'Sudden unexplained nausea, vomiting, stomach cramps, or profuse salivation.',
      'Drowsiness, confusion, pinpoint or dilated pupils, or sudden unresponsiveness.'
    ],
    whatToDo: [
      {
        step: 1,
        title: 'Check Safety & Remove Casualty From Source',
        description: 'Ensure your own safety first (beware of toxic fumes). Move the person into fresh air if inhaled. If chemical is on skin or eyes, flush immediately with plenty of clean running water for 15 minutes.',
      },
      {
        step: 2,
        title: 'Call Poison Control Center Immediately',
        description: 'Contact your national poison control hotline or local emergency services. Have the product container, bottle, or packaging in your hand to read the exact chemical ingredients to the toxicologist.',
      },
      {
        step: 3,
        title: 'Check Responsiveness & Breathing',
        description: 'If the person becomes unconscious or stops breathing, immediately place them in the recovery position or initiate CPR if breathing is absent.',
      }
    ],
    whatNotToDo: [
      'DO NOT INDUCE VOMITING; vomiting corrosive liquids (acids, bleaches, alkalis) burns the esophagus and airway a second time and risks pulmonary aspiration.',
      'DO NOT give milk, raw eggs, saltwater, or activated charcoal unless specifically instructed by a certified poison control specialist.',
      'DO NOT attempt to "neutralize" an acid with a base or vice versa; the resulting chemical reaction generates extreme heat that causes severe internal thermal burns.'
    ],
    whenToSeekMedicalHelp: [
      'Every suspected toxic ingestion, detergent pod swallowing, or medication overdose requires immediate consultation with Poison Control or Emergency Services.'
    ],
    sources: [
      { name: 'World Health Organization Guidelines for Poison Control', year: '2023' },
      { name: 'American Association of Poison Control Centers (AAPCC)', year: '2023' }
    ],
    relatedArticles: ['first-aid-kit-checklist', 'dehydration-warning-signs'],
    searchKeywords: ['poison', 'swallowed bleach', 'detergent', 'chemical', 'overdose', 'toxic', 'cleaner swallowed', 'poison control']
  },

  // 10. RECOGNIZING DEHYDRATION
  {
    id: 'dehydration-warning-signs',
    slug: 'dehydration-warning-signs',
    title: 'Recognizing Severe Dehydration Warning Signs',
    shortDescription: 'Distinguish mild thirst from dangerous dehydration in vulnerable infants, children, and the elderly.',
    category: 'warning-signs',
    urgency: 'urgent',
    readingTimeMinutes: 4,
    lastReviewed: 'November 2024',
    reviewedBy: 'WHO Child and Adolescent Health Department',
    summary: 'Dehydration occurs when the body loses more fluids and electrolytes than are taken in, often driven by gastroenteritis (diarrhea/vomiting), high fever, or extreme heat.',
    whatIsIt: 'Water comprises 60-70% of human body weight and is vital for cellular metabolism, blood volume, and kidney function. Severe dehydration leads to hypovolemic shock, renal failure, and death if untreated.',
    howToRecognize: [
      'Mild: Thirst, slightly dry mouth, darker yellow urine, mild headache.',
      'Moderate to Severe in Adults: Very dark amber urine or no urination for 8+ hours, extreme dizziness when standing up, sunken eyes, dry cracked lips, rapid heart rate.',
      'Severe in Infants & Toddlers: Sunken soft spot (fontanelle) on top of the head, no tears when crying, dry diapers for 6+ hours, lethargy or extreme irritability, skin that does not bounce back when pinched gently on the abdomen (loss of skin turgor).'
    ],
    whatToDo: [
      {
        step: 1,
        title: 'Assess Severity & Ability to Drink',
        description: 'If the person is conscious and not vomiting persistently, begin immediate oral rehydration.',
      },
      {
        step: 2,
        title: 'Administer Oral Rehydration Solution (ORS)',
        description: 'Give WHO-formula Oral Rehydration Salts (ORS) dissolved in clean water. Give small, frequent sips (a teaspoon every 2-3 minutes for children) rather than large gulps, which can trigger vomiting.',
      },
      {
        step: 3,
        title: 'Move to a Cool Environment',
        description: 'If heat-related, rest in an air-conditioned room or shaded area and loosen clothing.',
      }
    ],
    whatNotToDo: [
      'DO NOT give concentrated sugary sodas, energy drinks, or undiluted fruit juices; high sugar concentrations worsen osmotic diarrhea in the intestines.',
      'DO NOT give plain water in massive quantities to severely dehydrated infants, as this can dilute electrolytes and trigger water-intoxication seizures.',
      'DO NOT withhold fluids from a vomiting child; wait 10 minutes after a vomit, then resume small sips with a spoon.'
    ],
    whenToSeekMedicalHelp: [
      'Seek emergency hospital care immediately if:',
      '- The person cannot keep any fluids down for over 12 hours.',
      '- An infant has a sunken fontanelle, no tears, and extreme lethargy/unresponsiveness.',
      '- Presence of high fever, blood in stools, or continuous vomiting.',
      '- Signs of confusion, delirium, or inability to stand.'
    ],
    sources: [
      { name: 'World Health Organization (WHO) Diarrhoea and Dehydration Clinical Guidelines', year: '2023' },
      { name: 'UNICEF Rehydration Protocols', year: '2022' }
    ],
    relatedArticles: ['heat-illness-prevention', 'household-poisoning-prevention'],
    searchKeywords: ['dehydration', 'water loss', 'diarrhea', 'sunken eyes', 'dry mouth', 'electrolyte', 'ors', 'vomiting']
  },

  // 11. HEAT-RELATED ILLNESS PREVENTION
  {
    id: 'heat-illness-prevention',
    slug: 'heat-illness-prevention',
    title: 'Heat Exhaustion vs. Life-Threatening Heat Stroke',
    shortDescription: 'How to differentiate heat cramps, heat exhaustion, and fatal heat stroke, plus cooling protocols.',
    category: 'prevention',
    urgency: 'urgent',
    readingTimeMinutes: 4,
    lastReviewed: 'November 2024',
    reviewedBy: 'Global Heat Health Information Network (GHHIN)',
    summary: 'Rising global temperatures have made heat illness a widespread public health risk. Knowing the distinct line between heat exhaustion and heat stroke saves lives.',
    whatIsIt: 'Heat exhaustion is the body’s response to an excessive loss of water and salt through sweating. Heat stroke is a medical emergency where the body’s thermoregulatory system completely fails, causing core temperature to spike above 40°C (104°F).',
    howToRecognize: [
      'Heat Exhaustion: Heavy sweating, pale clammy skin, nausea, weakness, dizziness, fast weak pulse, muscle cramps.',
      'Heat Stroke (CRITICAL): High body temperature (>40°C / 104°F), hot red dry skin OR profuse sweating in exertional heat stroke, confusion, slurred speech, delirium, seizures, and loss of consciousness.'
    ],
    whatToDo: [
      {
        step: 1,
        title: 'Recognize the Warning Signs',
        description: 'If someone exhibits confusion, altered mental status, or collapses in the heat, treat immediately as potential heat stroke and call emergency services.',
      },
      {
        step: 2,
        title: 'Initiate Rapid Active Cooling',
        description: 'Move the person to shade or air-conditioning. Remove outer layers of clothing. Apply cold wet towels or water spray over the body and fan vigorously.',
      },
      {
        step: 3,
        title: 'Apply Ice Packs to Strategic Areas',
        description: 'Place cold packs or wet cloths wrapped in ice at the neck, armpits, and groin, where major blood vessels run close to the skin surface.',
      },
      {
        step: 4,
        title: 'Hydrate Only if Fully Conscious',
        description: 'If the person has heat exhaustion and is fully alert, give cool water or an electrolyte drink in slow sips.',
        warning: 'NEVER give drinks to someone with altered mental state or suspected heat stroke due to severe aspiration risk.'
      }
    ],
    whatNotToDo: [
      'DO NOT underestimate heat stroke; it has a high mortality rate without immediate active cooling.',
      'DO NOT give fever-reducing medications (such as paracetamol/acetaminophen or aspirin); heat stroke is caused by ambient thermal overload, not hypothalamus fever reset, and these drugs strain the liver and kidneys.',
      'DO NOT leave children, disabled individuals, or pets in parked vehicles even for a single minute.'
    ],
    whenToSeekMedicalHelp: [
      'Heat stroke is an absolute medical emergency: dial emergency services immediately.',
      'If heat exhaustion symptoms do not significantly improve after 30 minutes of cooling and rest, transport to emergency care.'
    ],
    sources: [
      { name: 'World Health Organization Heat and Health Guidelines', year: '2023' },
      { name: 'Centers for Disease Control and Prevention (CDC) Extreme Heat Guidance', year: '2023' }
    ],
    relatedArticles: ['dehydration-warning-signs', 'burns-first-aid'],
    searchKeywords: ['heat stroke', 'heat exhaustion', 'hot weather', 'sunstroke', 'summer safety', 'high temperature', 'cramps']
  }
];

