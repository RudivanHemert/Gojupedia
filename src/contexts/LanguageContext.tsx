import React, { createContext, useState, useContext, useEffect } from 'react';

// Define all supported languages
export type SupportedLanguage = 'en' | 'ja' | 'nl' | 'es' | 'fr' | 'de' | 'it' | 'pt' | 'zh' | 'ko';

// Language names for the UI
export const languageNames: Record<SupportedLanguage, string> = {
  en: 'English',
  ja: '日本語',
  nl: 'Nederlands',
  es: 'Español',
  fr: 'Français',
  de: 'Deutsch',
  it: 'Italiano',
  pt: 'Português',
  zh: '中文',
  ko: '한국어'
};

interface LanguageContextType {
  language: SupportedLanguage;
  setLanguage: (lang: SupportedLanguage) => void;
  t: (key: string, vars?: Record<string, string>) => string;
  isRtl: boolean;
  loadingTranslations: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// This will store all loaded translations
const translations: Record<SupportedLanguage, Record<string, string>> = {
  en: {}, // English is our base language
  ja: {},
  nl: {},
  es: {},
  fr: {},
  de: {},
  it: {},
  pt: {},
  zh: {},
  ko: {}
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<SupportedLanguage>(() => {
    // Try to get from localStorage, then from browser, default to English
    const savedLang = localStorage.getItem('language') as SupportedLanguage;
    if (savedLang && Object.keys(languageNames).includes(savedLang)) {
      return savedLang;
    }
    
    // Check browser language
    const browserLang = navigator.language.split('-')[0] as SupportedLanguage;
    if (browserLang && Object.keys(languageNames).includes(browserLang)) {
      return browserLang;
    }
    
    return 'en';
  });
  
  const [loadingTranslations, setLoadingTranslations] = useState(language !== 'en');
  
  // RTL languages would be added here
  const rtlLanguages: SupportedLanguage[] = [];
  const isRtl = rtlLanguages.includes(language);
  
  // Load translations for the current language
  useEffect(() => {
    const loadTranslations = async () => {
      if (language === 'en' || Object.keys(translations[language]).length > 0) {
        setLoadingTranslations(false);
        return;
      }
      
      setLoadingTranslations(true);
      
      try {
        // Dynamic import for translations
        const response = await fetch(`/locales/${language}.json`);
        
        if (response.ok) {
          const data = await response.json();
          translations[language] = data;
        } else {
          console.error(`Failed to load translations for ${language}`);
        }
      } catch (error) {
        console.error('Error loading translations:', error);
      } finally {
        setLoadingTranslations(false);
      }
    };
    
    loadTranslations();
  }, [language]);
  
  // Set language and save to localStorage
  const setLanguage = (lang: SupportedLanguage) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Update dir attribute for RTL languages
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
  };
  
  // Set initial HTML attributes
  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
  }, [language, isRtl]);
  
  // Translation function
  const t = (key: string, vars?: Record<string, string>): string => {
    // If we're still loading translations, use English
    if (loadingTranslations) {
      return translations.en[key] || key;
    }
    
    // Get translation or fallback to English or key itself
    let translation = translations[language][key] || translations.en[key] || key;
    
    // Replace variables
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