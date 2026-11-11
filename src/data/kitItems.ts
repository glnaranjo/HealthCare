export interface KitItem {
  id: string;
  name: string;
  category: 'dressings' | 'tools' | 'hygiene' | 'emergency';
  recommendedQty: string;
  description: string;
  essential: boolean;
}

export const FIRST_AID_KIT_ITEMS: KitItem[] = [
  // Dressings & Wound Care
  {
    id: 'gauze-pads',
    name: 'Sterile Gauze Pads (5x5cm & 10x10cm)',
    category: 'dressings',
    recommendedQty: '10 pads each',
    description: 'For covering open wounds, controlling bleeding, and cleaning abrasions.',
    essential: true
  },
  {
    id: 'adhesive-bandages',
    name: 'Assorted Adhesive Bandages (Plasters)',
    category: 'dressings',
    recommendedQty: '25-40 assorted',
    description: 'Water-resistant, various shapes (strip, knuckle, fingertip) for minor cuts.',
    essential: true
  },
  {
    id: 'elastic-roller',
    name: 'Elastic Roller Bandages (Conforming)',
    category: 'dressings',
    recommendedQty: '3 rolls (7.5cm & 10cm)',
    description: 'For securing dressings, applying pressure, and supporting sprains.',
    essential: true
  },
  {
    id: 'medical-tape',
    name: 'Microporous Medical Adhesive Tape',
    category: 'dressings',
    recommendedQty: '1-2 rolls (2.5cm width)',
    description: 'Hypoallergenic tape to hold gauze firmly without tearing fragile skin.',
    essential: true
  },
  {
    id: 'sterile-saline',
    name: 'Sterile Saline Solution (0.9% NaCl Ampoules)',
    category: 'dressings',
    recommendedQty: '5x 20ml single-use pods',
    description: 'For flushing dirt out of wounds or chemical debris from eyes without stinging.',
    essential: true
  },

  // Instruments & Protection
  {
    id: 'shears',
    name: 'Medical Trauma Shears (Blunt-Tipped)',
    category: 'tools',
    recommendedQty: '1 pair',
    description: 'Heavy-duty scissors that cut through clothing, denim, and seatbelts safely.',
    essential: true
  },
  {
    id: 'tweezers',
    name: 'Fine Point Splinter Tweezers',
    category: 'tools',
    recommendedQty: '1 pair',
    description: 'Precision stainless tweezers for removing glass splinters and insect stingers.',
    essential: true
  },
  {
    id: 'thermometer',
    name: 'Digital Clinical Thermometer',
    category: 'tools',
    recommendedQty: '1 unit',
    description: 'Fast, mercury-free digital temperature reader with spare batteries.',
    essential: true
  },
  {
    id: 'penlight',
    name: 'Compact LED Diagnostic Penlight',
    category: 'tools',
    recommendedQty: '1 unit',
    description: 'For inspecting throat, mouth, eyes, or working in blackout conditions.',
    essential: false
  },

  // Hygiene & Barrier Protection
  {
    id: 'gloves',
    name: 'Disposable Nitrile Examination Gloves',
    category: 'hygiene',
    recommendedQty: '4-6 pairs (non-latex)',
    description: 'Protects both the responder and casualty from bloodborne pathogen transmission.',
    essential: true
  },
  {
    id: 'cpr-shield',
    name: 'CPR Pocket Mask / Face Shield (One-Way Valve)',
    category: 'hygiene',
    recommendedQty: '1 unit',
    description: 'Protective physical barrier with viral filter for safe rescue ventilations.',
    essential: true
  },
  {
    id: 'antiseptic-wipes',
    name: 'Antiseptic Cleansing Wipes (Alcohol-Free)',
    category: 'hygiene',
    recommendedQty: '10-15 sachets',
    description: 'To clean skin around wounds; alcohol-free wipes do not cause severe pain.',
    essential: true
  },
  {
    id: 'hand-sanitizer',
    name: 'Alcohol Hand Rub (Min 60% Alcohol)',
    category: 'hygiene',
    recommendedQty: '1 small bottle (100ml)',
    description: 'To disinfect responder hands before and after applying wound dressings.',
    essential: true
  },

  // Emergency & Thermal Safety
  {
    id: 'cold-pack',
    name: 'Instant Squeeze Cold Compress Pack',
    category: 'emergency',
    recommendedQty: '2 packs',
    description: 'Chemical cold activation without refrigeration for sprains and bumps.',
    essential: true
  },
  {
    id: 'foil-blanket',
    name: 'Emergency Thermal Space Blanket',
    category: 'emergency',
    recommendedQty: '2 sheets',
    description: 'Reflective foil sheet to retain up to 90% body heat and prevent hypothermia.',
    essential: true
  },
  {
    id: 'first-aid-manual',
    name: 'HealthCare Emergency Pocket Guide / Card',
    category: 'emergency',
    recommendedQty: '1 printed card',
    description: 'Quick reference sheet with local emergency telephone numbers.',
    essential: true
  }
];

