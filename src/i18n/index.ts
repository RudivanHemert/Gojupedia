import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translations
import enTranslations from './locales/en.json';
import nlTranslations from './locales/nl.json';
import jaTranslations from './locales/ja.json';
import deTranslations from './locales/de.json';
import esTranslations from './locales/es.json';
import frTranslations from './locales/fr.json';
import itTranslations from './locales/it.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslations
      },
      nl: {
        translation: nlTranslations
      },
      ja: {
        translation: jaTranslations
      },
      de: {
        translation: deTranslations
      },
      es: {
        translation: esTranslations
      },
      fr: {
        translation: frTranslations
      },
      it: {
        translation: itTranslations
      }
    },
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n; 