
import React, { createContext, useState, useContext, ReactNode } from 'react';
// FIX: Removed unused `Translation` import.
import { translations } from '../translations';

export type Language = 'en' | 'fr' | 'zh' | 'ja';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  // FIX: The return type of `t` is changed from `string` to `any` to allow returning structured data (objects/arrays) from translations.
  t: (key: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  // FIX: The return type of `t` is changed from `string` to `any` to handle complex translation values.
  const t = (key: string): any => {
    const keys = key.split('.');
    let current: any = translations[language];
    for (const k of keys) {
      if (current && typeof current === 'object' && k in current) {
        current = current[k];
      } else {
        return key; // Return the key itself if not found
      }
    }
    // FIX: The function now returns the retrieved value directly, which can be a string, object, or array, instead of conditionally returning only strings. This prevents a runtime error.
    return current;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
