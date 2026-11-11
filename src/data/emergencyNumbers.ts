import { EmergencyPhoneGuide } from '../types';

export const EMERGENCY_NUMBERS: EmergencyPhoneGuide[] = [
  {
    countryCode: 'INTL',
    countryName: 'International (Default / GSM standard)',
    generalEmergency: '112',
    ambulance: '112',
    police: '112',
    fire: '112',
    poisonControl: 'Consult local hospital',
    notes: '112 is the universal GSM emergency standard and works in all EU countries and most cellular networks globally.'
  },
  {
    countryCode: 'US',
    countryName: 'United States',
    generalEmergency: '911',
    ambulance: '911',
    police: '911',
    fire: '911',
    poisonControl: '1-800-222-1222',
    notes: 'Call 911 for all immediate life-threatening situations.'
  },
  {
    countryCode: 'GB',
    countryName: 'United Kingdom',
    generalEmergency: '999',
    ambulance: '999 (or 111 for non-emergency)',
    police: '999',
    fire: '999',
    poisonControl: '111',
    notes: '999 is the primary emergency number; 112 also routes to emergency services in the UK.'
  },
  {
    countryCode: 'EU',
    countryName: 'European Union',
    generalEmergency: '112',
    ambulance: '112',
    police: '112',
    fire: '112',
    poisonControl: 'Local toxicological center',
    notes: '112 functions free of charge across all 27 EU member states from fixed and mobile phones.'
  },
  {
    countryCode: 'CA',
    countryName: 'Canada',
    generalEmergency: '911',
    ambulance: '911',
    police: '911',
    fire: '911',
    poisonControl: '1-844-POISON-X (Regional)',
    notes: 'In some remote areas without 911, direct local 10-digit emergency lines apply.'
  },
  {
    countryCode: 'AU',
    countryName: 'Australia',
    generalEmergency: '000',
    ambulance: '000',
    police: '000',
    fire: '000',
    poisonControl: '13 11 26',
    notes: '000 (Triple Zero) connects to Police, Fire, and Ambulance.'
  },
  {
    countryCode: 'MX',
    countryName: 'Mexico',
    generalEmergency: '911',
    ambulance: '911 (Cruz Roja: 065)',
    police: '911',
    fire: '911',
    poisonControl: '800-009-2800',
    notes: '911 is the unified emergency number across all Mexican states.'
  },
  {
    countryCode: 'AR',
    countryName: 'Argentina',
    generalEmergency: '911',
    ambulance: '107 (SAME)',
    police: '911 (or 101)',
    fire: '100',
    poisonControl: '0800-333-0160',
    notes: '107 connects to public emergency medical ambulances (SAME).'
  },
  {
    countryCode: 'ES',
    countryName: 'Spain',
    generalEmergency: '112',
    ambulance: '061 (or 112)',
    police: '091 (Nacional) / 092 (Local)',
    fire: '080',
    poisonControl: '+34 91 562 04 20',
    notes: '112 is the single emergency contact center with multilingual dispatch.'
  },
  {
    countryCode: 'JP',
    countryName: 'Japan',
    generalEmergency: '119 (Medical/Fire) / 110 (Police)',
    ambulance: '119',
    police: '110',
    fire: '119',
    poisonControl: '072-727-2499',
    notes: 'Dial 119 for ambulance and fire rescue services.'
  }
];

