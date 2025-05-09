import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translations
import en from './locales/en.json';
import de from './locales/de.json';
import es from './locales/es.json';
import fr from './locales/fr.json';
import it from './locales/it.json';
import nl from './locales/nl.json';

// Define supported languages
export const supportedLanguages = {
  en: 'English',
  de: 'Deutsch',
  es: 'Español',
  fr: 'Français',
  it: 'Italiano',
  nl: 'Nederlands'
} as const;

export type SupportedLanguage = keyof typeof supportedLanguages;

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      de: { translation: de },
      es: { translation: es },
      fr: { translation: fr },
      it: { translation: it },
      nl: { translation: nl }
    },
    fallbackLng: 'en',
    supportedLngs: Object.keys(supportedLanguages),
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng'
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n; 