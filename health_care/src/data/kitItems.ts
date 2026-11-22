import { Language } from '../types';

export interface KitItem {
  id: string;
  name: string;
  category: 'dressings' | 'tools' | 'hygiene' | 'emergency';
  recommendedQty: string;
  description: string;
  essential: boolean;
}

export const FIRST_AID_KIT_ITEMS_EN: KitItem[] = [
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

export const FIRST_AID_KIT_ITEMS_ES: KitItem[] = [
  // Curaciones y apósitos
  {
    id: 'gauze-pads',
    name: 'Gasas Estériles (5x5 cm y 10x10 cm)',
    category: 'dressings',
    recommendedQty: '10 sobres de cada una',
    description: 'Para cubrir heridas abiertas, contener sangrados y limpiar raspaduras.',
    essential: true
  },
  {
    id: 'adhesive-bandages',
    name: 'Apósitos Adhesivos Variados (Curitas)',
    category: 'dressings',
    recommendedQty: '25-40 unidades surtidas',
    description: 'Resistentes al agua, de varias formas para cortes pequeños en dedos y nudillos.',
    essential: true
  },
  {
    id: 'elastic-roller',
    name: 'Vendas Elásticas de Rollo (Conformables)',
    category: 'dressings',
    recommendedQty: '3 rollos (7.5 cm y 10 cm)',
    description: 'Para sujetar apósitos, realizar vendajes compresivos y sostener esguinces.',
    essential: true
  },
  {
    id: 'medical-tape',
    name: 'Cinta Adhesiva Hipoalergénica (Microporosa)',
    category: 'dressings',
    recommendedQty: '1-2 rollos (2.5 cm de ancho)',
    description: 'Cinta suave para fijar gasas firmemente sin dañar la piel sensible.',
    essential: true
  },
  {
    id: 'sterile-saline',
    name: 'Solución Fisiológica Estéril (Ampollas 0.9%)',
    category: 'dressings',
    recommendedQty: '5 ampollas monodosis de 20 ml',
    description: 'Para lavar suciedad de heridas o enjuagar sustancias en ojos sin ardor.',
    essential: true
  },

  // Instrumental y protección
  {
    id: 'shears',
    name: 'Tijeras de Trauma (Punta Roma)',
    category: 'tools',
    recommendedQty: '1 par',
    description: 'Tijeras resistentes que cortan ropa gruesa, jeans y cinturones con seguridad.',
    essential: true
  },
  {
    id: 'tweezers',
    name: 'Pinza para Astillas de Punta Fina',
    category: 'tools',
    recommendedQty: '1 unidad',
    description: 'Pinzas de acero inoxidable para retirar espinas, vidrios y aguijones.',
    essential: true
  },
  {
    id: 'thermometer',
    name: 'Termómetro Clínico Digital',
    category: 'tools',
    recommendedQty: '1 unidad',
    description: 'Lectura rápida sin mercurio, con señal sonora y baterías de repuesto.',
    essential: true
  },
  {
    id: 'penlight',
    name: 'Linterna LED de Diagnóstico Compacta',
    category: 'tools',
    recommendedQty: '1 unidad',
    description: 'Para examinar garganta, ojos o iluminar durante cortes de energía.',
    essential: false
  },

  // Higiene y barrera de bioseguridad
  {
    id: 'gloves',
    name: 'Guantes Descartables de Nitrilo',
    category: 'hygiene',
    recommendedQty: '4-6 pares (sin látex)',
    description: 'Protege al socorrista y a la víctima del contagio por contacto con sangre o fluidos.',
    essential: true
  },
  {
    id: 'cpr-shield',
    name: 'Mascarilla / Pantalla Facial de RCP (Válvula Unidireccional)',
    category: 'hygiene',
    recommendedQty: '1 unidad',
    description: 'Barrera física con filtro antiviral para ventilaciones de rescate seguras.',
    essential: true
  },
  {
    id: 'antiseptic-wipes',
    name: 'Toallitas Antisépticas (Sin Alcohol)',
    category: 'hygiene',
    recommendedQty: '10-15 sobres',
    description: 'Para higienizar la piel alrededor de heridas sin provocar dolor intenso.',
    essential: true
  },
  {
    id: 'hand-sanitizer',
    name: 'Alcohol en Gel (Mínimo 60% Alcohol)',
    category: 'hygiene',
    recommendedQty: '1 frasco pequeño (100 ml)',
    description: 'Para desinfectar las manos antes y después de atender cualquier herida.',
    essential: true
  },

  // Emergencia y control térmico
  {
    id: 'cold-pack',
    name: 'Compresa Fría Instantánea',
    category: 'emergency',
    recommendedQty: '2 paquetes',
    description: 'Se activa al apretar sin necesidad de freezer para aliviar golpes y torceduras.',
    essential: true
  },
  {
    id: 'foil-blanket',
    name: 'Manta Térmica de Emergencia (Aluminizada)',
    category: 'emergency',
    recommendedQty: '2 unidades',
    description: 'Lámina reflectante que retiene hasta el 90% del calor corporal y evita la hipotermia.',
    essential: true
  },
  {
    id: 'first-aid-manual',
    name: 'Tarjeta / Guía de Bolsillo de Emergencia HealthCare',
    category: 'emergency',
    recommendedQty: '1 tarjeta impresa',
    description: 'Hoja plastificada con los teléfonos locales de ambulancia, bomberos y policía.',
    essential: true
  }
];

export const getLocalizedKitItems = (lang: Language): KitItem[] => {
  return lang === 'es' ? FIRST_AID_KIT_ITEMS_ES : FIRST_AID_KIT_ITEMS_EN;
};

export const FIRST_AID_KIT_ITEMS = FIRST_AID_KIT_ITEMS_EN;
