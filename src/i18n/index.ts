import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import modular translation files
import enCommon from './locales/en/common.json';
import enNavigation from './locales/en/navigation.json';
import enHome from './locales/en/home.json';
import enTheory from './locales/en/theory.json';
import enTerminology from './locales/en/terminology.json';
import enHistory from './locales/en/history.json';
import enPractice from './locales/en/practice.json';
import enStudy from './locales/en/study.json';
import enSettings from './locales/en/settings.json';
import enKata from './locales/en/kata.json';
import enBunkai from './locales/en/bunkai.json';
import enPhilosophy from './locales/en/philosophy.json';
import enVitalPoints from './locales/en/vitalPoints.json';
import enTechniques from './locales/en/techniques.json';
import enGraduations from './locales/en/graduations.json';
import enQuiz from './locales/en/quiz.json';
import enHojoUndo from './locales/en/hojoUndo.json';

import deCommon from './locales/de/common.json';
import deNavigation from './locales/de/navigation.json';
import deHome from './locales/de/home.json';
import deTheory from './locales/de/theory.json';
import deTerminology from './locales/de/terminology.json';
import deHistory from './locales/de/history.json';
import dePractice from './locales/de/practice.json';
import deStudy from './locales/de/study.json';
import deSettings from './locales/de/settings.json';
import deKata from './locales/de/kata.json';
import deBunkai from './locales/de/bunkai.json';
import dePhilosophy from './locales/de/philosophy.json';
import deVitalPoints from './locales/de/vitalPoints.json';
import deTechniques from './locales/de/techniques.json';
import deGraduations from './locales/de/graduations.json';
import deQuiz from './locales/de/quiz.json';
import deHojoUndo from './locales/de/hojoUndo.json';

import esCommon from './locales/es/common.json';
import esNavigation from './locales/es/navigation.json';
import esHome from './locales/es/home.json';
import esTheory from './locales/es/theory.json';
import esTerminology from './locales/es/terminology.json';
import esHistory from './locales/es/history.json';
import esPractice from './locales/es/practice.json';
import esStudy from './locales/es/study.json';
import esSettings from './locales/es/settings.json';
import esKata from './locales/es/kata.json';
import esBunkai from './locales/es/bunkai.json';
import esPhilosophy from './locales/es/philosophy.json';
import esVitalPoints from './locales/es/vitalPoints.json';
import esTechniques from './locales/es/techniques.json';
import esGraduations from './locales/es/graduations.json';
import esQuiz from './locales/es/quiz.json';
import esHojoUndo from './locales/es/hojoUndo.json';

import frCommon from './locales/fr/common.json';
import frNavigation from './locales/fr/navigation.json';
import frHome from './locales/fr/home.json';
import frTheory from './locales/fr/theory.json';
import frTerminology from './locales/fr/terminology.json';
import frHistory from './locales/fr/history.json';
import frPractice from './locales/fr/practice.json';
import frStudy from './locales/fr/study.json';
import frSettings from './locales/fr/settings.json';
import frKata from './locales/fr/kata.json';
import frBunkai from './locales/fr/bunkai.json';
import frPhilosophy from './locales/fr/philosophy.json';
import frVitalPoints from './locales/fr/vitalPoints.json';
import frTechniques from './locales/fr/techniques.json';
import frGraduations from './locales/fr/graduations.json';
import frQuiz from './locales/fr/quiz.json';
import frHojoUndo from './locales/fr/hojoUndo.json';

import itCommon from './locales/it/common.json';
import itNavigation from './locales/it/navigation.json';
import itHome from './locales/it/home.json';
import itTheory from './locales/it/theory.json';
import itTerminology from './locales/it/terminology.json';
import itHistory from './locales/it/history.json';
import itPractice from './locales/it/practice.json';
import itStudy from './locales/it/study.json';
import itSettings from './locales/it/settings.json';
import itKata from './locales/it/kata.json';
import itBunkai from './locales/it/bunkai.json';
import itPhilosophy from './locales/it/philosophy.json';
import itVitalPoints from './locales/it/vitalPoints.json';
import itTechniques from './locales/it/techniques.json';
import itGraduations from './locales/it/graduations.json';
import itQuiz from './locales/it/quiz.json';
import itHojoUndo from './locales/it/hojoUndo.json';

import nlCommon from './locales/nl/common.json';
import nlNavigation from './locales/nl/navigation.json';
import nlHome from './locales/nl/home.json';
import nlTheory from './locales/nl/theory.json';
import nlTerminology from './locales/nl/terminology.json';
import nlHistory from './locales/nl/history.json';
import nlPractice from './locales/nl/practice.json';
import nlStudy from './locales/nl/study.json';
import nlSettings from './locales/nl/settings.json';
import nlKata from './locales/nl/kata.json';
import nlBunkai from './locales/nl/bunkai.json';
import nlPhilosophy from './locales/nl/philosophy.json';
import nlVitalPoints from './locales/nl/vitalPoints.json';
import nlTechniques from './locales/nl/techniques.json';
import nlGraduations from './locales/nl/graduations.json';
import nlQuiz from './locales/nl/quiz.json';
import nlHojoUndo from './locales/nl/hojoUndo.json';

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

// Combine all translations for each language
const combineTranslations = (modules: Record<string, any>) => {
  const result = Object.keys(modules).reduce((acc, key) => {
    if (key === 'hojoUndo') {
      // Keep hojoUndo as a separate namespace
      return { ...acc, hojoUndo: modules[key] };
    } else {
      // Merge other modules into the root level
      return { ...acc, ...modules[key] };
    }
  }, {});
  
  return result;
};

const enTranslations = combineTranslations({
  common: enCommon,
  navigation: enNavigation,
  home: enHome,
  theory: enTheory,
  terminology: enTerminology,
  history: enHistory,
  practice: enPractice,
  study: enStudy,
  settings: enSettings,
  kata: enKata,
  bunkai: enBunkai,
  philosophy: enPhilosophy,
  vitalPoints: enVitalPoints,
  techniques: enTechniques,
  graduations: enGraduations,
  quiz: enQuiz,
  hojoUndo: enHojoUndo,
});

const deTranslations = combineTranslations({
  common: deCommon,
  navigation: deNavigation,
  home: deHome,
  theory: deTheory,
  terminology: deTerminology,
  history: deHistory,
  practice: dePractice,
  study: deStudy,
  settings: deSettings,
  kata: deKata,
  bunkai: deBunkai,
  philosophy: dePhilosophy,
  vitalPoints: deVitalPoints,
  techniques: deTechniques,
  graduations: deGraduations,
  quiz: deQuiz,
  hojoUndo: deHojoUndo,
});

const esTranslations = combineTranslations({
  common: esCommon,
  navigation: esNavigation,
  home: esHome,
  theory: esTheory,
  terminology: esTerminology,
  history: esHistory,
  practice: esPractice,
  study: esStudy,
  settings: esSettings,
  kata: esKata,
  bunkai: esBunkai,
  philosophy: esPhilosophy,
  vitalPoints: esVitalPoints,
  techniques: esTechniques,
  graduations: esGraduations,
  quiz: esQuiz,
  hojoUndo: esHojoUndo,
});

const frTranslations = combineTranslations({
  common: frCommon,
  navigation: frNavigation,
  home: frHome,
  theory: frTheory,
  terminology: frTerminology,
  history: frHistory,
  practice: frPractice,
  study: frStudy,
  settings: frSettings,
  kata: frKata,
  bunkai: frBunkai,
  philosophy: frPhilosophy,
  vitalPoints: frVitalPoints,
  techniques: frTechniques,
  graduations: frGraduations,
  quiz: frQuiz,
  hojoUndo: frHojoUndo,
});

const itTranslations = combineTranslations({
  common: itCommon,
  navigation: itNavigation,
  home: itHome,
  theory: itTheory,
  terminology: itTerminology,
  history: itHistory,
  practice: itPractice,
  study: itStudy,
  settings: itSettings,
  kata: itKata,
  bunkai: itBunkai,
  philosophy: itPhilosophy,
  vitalPoints: itVitalPoints,
  techniques: itTechniques,
  graduations: itGraduations,
  quiz: itQuiz,
  hojoUndo: itHojoUndo,
});

const nlTranslations = combineTranslations({
  common: nlCommon,
  navigation: nlNavigation,
  home: nlHome,
  theory: nlTheory,
  terminology: nlTerminology,
  history: nlHistory,
  practice: nlPractice,
  study: nlStudy,
  settings: nlSettings,
  kata: nlKata,
  bunkai: nlBunkai,
  philosophy: nlPhilosophy,
  vitalPoints: nlVitalPoints,
  techniques: nlTechniques,
  graduations: nlGraduations,
  quiz: nlQuiz,
  hojoUndo: nlHojoUndo,
});

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslations },
      de: { translation: deTranslations },
      es: { translation: esTranslations },
      fr: { translation: frTranslations },
      it: { translation: itTranslations },
      nl: { translation: nlTranslations }
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