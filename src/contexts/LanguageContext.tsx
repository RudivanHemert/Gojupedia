import React, { createContext, useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SupportedLanguage, supportedLanguages } from '@/i18n';

interface LanguageContextType {
  language: SupportedLanguage;
  setLanguage: (lang: SupportedLanguage) => void;
  t: (key: string, vars?: Record<string, string>) => string;
  isRtl: boolean;
  loadingTranslations: boolean;
  supportedLanguages: typeof supportedLanguages;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { i18n, t: i18nT } = useTranslation();
  const [loadingTranslations, setLoadingTranslations] = useState(false);
  
  // Get current language from i18n
  const language = i18n.language as SupportedLanguage;
  
  // Determine if current language is RTL
  const isRtl = ['ar', 'he', 'fa'].includes(language);
  
  // Set language function
  const setLanguage = async (lang: SupportedLanguage) => {
    setLoadingTranslations(true);
    try {
      await i18n.changeLanguage(lang);
      // Update HTML attributes
      document.documentElement.lang = lang;
      document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    } catch (error) {
      console.error('Failed to change language:', error);
    } finally {
      setLoadingTranslations(false);
    }
  };
  
  // Wrapper for translation function
  const t = (key: string, vars?: Record<string, string>): string => {
    return i18nT(key, vars);
  };
  
  // Initialize language on mount
  useEffect(() => {
    const savedLang = localStorage.getItem('i18nextLng') as SupportedLanguage;
    if (savedLang && Object.keys(supportedLanguages).includes(savedLang)) {
      setLanguage(savedLang);
    }
  }, []);
  
  return (
    <LanguageContext.Provider value={{ 
      language, 
      setLanguage, 
      t, 
      isRtl, 
      loadingTranslations,
      supportedLanguages
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