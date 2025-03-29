import React, { createContext, useContext } from 'react';

// Only support English for now
export type SupportedLanguage = 'en';

// Language names for the UI
export const languageNames: Record<SupportedLanguage, string> = {
  en: 'English'
};

interface LanguageContextType {
  language: SupportedLanguage;
  setLanguage: (lang: SupportedLanguage) => void;
  t: (key: string, vars?: Record<string, string>) => string;
  isRtl: boolean;
  loadingTranslations: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// This is a simplified provider that only supports English
export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Fixed values
  const language: SupportedLanguage = 'en';
  const isRtl = false;
  const loadingTranslations = false;
  
  // No-op function since we only support English
  const setLanguage = (lang: SupportedLanguage) => {
    console.info('Language switching temporarily disabled. Only English is supported.');
    // Ensure HTML attributes are set correctly
    document.documentElement.lang = 'en';
    document.documentElement.dir = 'ltr';
  };
  
  // Simplified translation function
  const t = (key: string, vars?: Record<string, string>): string => {
    // Get translation or just return the key itself
    let translation = key;
    
    // Replace variables if any
    if (vars) {
      Object.entries(vars).forEach(([varKey, value]) => {
        translation = translation.replace(new RegExp(`{{${varKey}}}`, 'g'), value);
      });
    }
    
    return translation;
  };
  
  return (
    <LanguageContext.Provider value={{ 
      language, 
      setLanguage, 
      t, 
      isRtl, 
      loadingTranslations 
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}; 