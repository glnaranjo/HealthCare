import React, { createContext, useContext, useState, useEffect } from 'react';
import { EmergencyPhoneGuide } from '../types';
import { EMERGENCY_NUMBERS } from '../data/emergencyNumbers';

interface CountryContextType {
  selectedCountry: EmergencyPhoneGuide;
  setCountryByCode: (code: string) => void;
  allCountries: EmergencyPhoneGuide[];
}

const CountryContext = createContext<CountryContextType | undefined>(undefined);

export const CountryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedCountry, setSelectedCountry] = useState<EmergencyPhoneGuide>(() => {
    const saved = localStorage.getItem('healthcare_selected_country');
    if (saved) {
      const match = EMERGENCY_NUMBERS.find(c => c.countryCode === saved);
      if (match) return match;
    }
    return EMERGENCY_NUMBERS[0]; // INTL default
  });

  const setCountryByCode = (code: string) => {
    const found = EMERGENCY_NUMBERS.find(c => c.countryCode === code);
    if (found) {
      setSelectedCountry(found);
      localStorage.setItem('healthcare_selected_country', code);
    }
  };

  useEffect(() => {
    // Optional: detect locale or keep user preference
  }, []);

  return (
    <CountryContext.Provider value={{ selectedCountry, setCountryByCode, allCountries: EMERGENCY_NUMBERS }}>
      {children}
    </CountryContext.Provider>
  );
};

export const useCountry = (): CountryContextType => {
  const context = useContext(CountryContext);
  if (!context) {
    throw new Error('useCountry must be used within a CountryProvider');
  }
  return context;
};

