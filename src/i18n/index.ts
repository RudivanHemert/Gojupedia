import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import modular translation files
import enCommon from './locales/en/common.json';
import enHome from './locales/en/home.json';
import enTheory from './locales/en/theory.json';
import enTerminology from './locales/en/terminology.json';
import enHistory from './locales/en/history.json';
import enPractice from './locales/en/practice.json';
import enStudy from './locales/en/study.json';
import enSettings from './locales/en/settings.json';
import enAbout from './locales/en/about.json';
import enKata from './locales/en/kata.json';
// Import individual kata files for English
import enSaifa from './locales/en/kata/saifa.json';
import enGekisaiDaiIchi from './locales/en/kata/gekisai-dai-ichi.json';
import enGekisaiDaiNi from './locales/en/kata/gekisai-dai-ni.json';
import enSanchin from './locales/en/kata/sanchin.json';
import enTensho from './locales/en/kata/tensho.json';
import enSeiyunchin from './locales/en/kata/seiyunchin.json';
import enShisochin from './locales/en/kata/shisochin.json';
import enSanseru from './locales/en/kata/sanseru.json';
import enSepai from './locales/en/kata/sepai.json';
import enKururunfa from './locales/en/kata/kururunfa.json';
import enSesan from './locales/en/kata/sesan.json';
import enPeichurin from './locales/en/kata/peichurin.json';
import enBunkai from './locales/en/bunkai.json';
import enPhilosophy from './locales/en/philosophy.json';
import enVitalPoints from './locales/en/vitalPoints.json';
import enTechniques from './locales/en/techniques.json';
import enGraduations from './locales/en/graduations.json';
import enQuiz from './locales/en/quiz.json';
import enHojoUndo from './locales/en/hojoUndo.json';
import enNewaza from './locales/en/newaza.json';
import enKumite from './locales/en/kumite.json';
import enJunbiUndo from './locales/en/junbi-undo.json';
import enInformation from './locales/en/information.json';

import deCommon from './locales/de/common.json';
import deHome from './locales/de/home.json';
import deTheory from './locales/de/theory.json';
import deTerminology from './locales/de/terminology.json';
import deHistory from './locales/de/history.json';
import dePractice from './locales/de/practice.json';
import deStudy from './locales/de/study.json';
import deSettings from './locales/de/settings.json';
import deAbout from './locales/de/about.json';
import deKata from './locales/de/kata.json';
// Import individual kata files for German
import deSaifa from './locales/de/kata/saifa.json';
import deGekisaiDaiIchi from './locales/de/kata/gekisai-dai-ichi.json';
import deGekisaiDaiNi from './locales/de/kata/gekisai-dai-ni.json';
import deSanchin from './locales/de/kata/sanchin.json';
import deTensho from './locales/de/kata/tensho.json';
import deSeiyunchin from './locales/de/kata/seiyunchin.json';
import deShisochin from './locales/de/kata/shisochin.json';
import deSanseru from './locales/de/kata/sanseru.json';
import deSepai from './locales/de/kata/sepai.json';
import deKururunfa from './locales/de/kata/kururunfa.json';
import deSesan from './locales/de/kata/sesan.json';
import dePeichurin from './locales/de/kata/peichurin.json';
import deBunkai from './locales/de/bunkai.json';
import dePhilosophy from './locales/de/philosophy.json';
import deVitalPoints from './locales/de/vitalPoints.json';
import deTechniques from './locales/de/techniques.json';
import deGraduations from './locales/de/graduations.json';
import deQuiz from './locales/de/quiz.json';
import deHojoUndo from './locales/de/hojoUndo.json';
import deNewaza from './locales/de/newaza.json';
import deKumite from './locales/de/kumite.json';
import deJunbiUndo from './locales/de/junbi-undo.json';
import deInformation from './locales/de/information.json';

import esCommon from './locales/es/common.json';
import esHome from './locales/es/home.json';
import esTheory from './locales/es/theory.json';
import esTerminology from './locales/es/terminology.json';
import esHistory from './locales/es/history.json';
import esPractice from './locales/es/practice.json';
import esStudy from './locales/es/study.json';
import esSettings from './locales/es/settings.json';
import esAbout from './locales/es/about.json';
import esKata from './locales/es/kata.json';
// Import individual kata files for Spanish
import esSaifa from './locales/es/kata/saifa.json';
import esGekisaiDaiIchi from './locales/es/kata/gekisai-dai-ichi.json';
import esGekisaiDaiNi from './locales/es/kata/gekisai-dai-ni.json';
import esSanchin from './locales/es/kata/sanchin.json';
import esTensho from './locales/es/kata/tensho.json';
import esSeiyunchin from './locales/es/kata/seiyunchin.json';
import esShisochin from './locales/es/kata/shisochin.json';
import esSanseru from './locales/es/kata/sanseru.json';
import esSepai from './locales/es/kata/sepai.json';
import esKururunfa from './locales/es/kata/kururunfa.json';
import esSesan from './locales/es/kata/sesan.json';
import esPeichurin from './locales/es/kata/peichurin.json';
import esBunkai from './locales/es/bunkai.json';
import esPhilosophy from './locales/es/philosophy.json';
import esVitalPoints from './locales/es/vitalPoints.json';
import esTechniques from './locales/es/techniques.json';
import esGraduations from './locales/es/graduations.json';
import esQuiz from './locales/es/quiz.json';
import esHojoUndo from './locales/es/hojoUndo.json';
import esNewaza from './locales/es/newaza.json';
import esKumite from './locales/es/kumite.json';
import esJunbiUndo from './locales/es/junbi-undo.json';
import esInformation from './locales/es/information.json';

import frCommon from './locales/fr/common.json';
import frHome from './locales/fr/home.json';
import frTheory from './locales/fr/theory.json';
import frTerminology from './locales/fr/terminology.json';
import frHistory from './locales/fr/history.json';
import frPractice from './locales/fr/practice.json';
import frStudy from './locales/fr/study.json';
import frSettings from './locales/fr/settings.json';
import frAbout from './locales/fr/about.json';
import frKata from './locales/fr/kata.json';
// Import individual kata files for French
import frSaifa from './locales/fr/kata/saifa.json';
import frGekisaiDaiIchi from './locales/fr/kata/gekisai-dai-ichi.json';
import frGekisaiDaiNi from './locales/fr/kata/gekisai-dai-ni.json';
import frSanchin from './locales/fr/kata/sanchin.json';
import frTensho from './locales/fr/kata/tensho.json';
import frSeiyunchin from './locales/fr/kata/seiyunchin.json';
import frShisochin from './locales/fr/kata/shisochin.json';
import frSanseru from './locales/fr/kata/sanseru.json';
import frSepai from './locales/fr/kata/sepai.json';
import frKururunfa from './locales/fr/kata/kururunfa.json';
import frSesan from './locales/fr/kata/sesan.json';
import frPeichurin from './locales/fr/kata/peichurin.json';
import frBunkai from './locales/fr/bunkai.json';
import frPhilosophy from './locales/fr/philosophy.json';
import frVitalPoints from './locales/fr/vitalPoints.json';
import frTechniques from './locales/fr/techniques.json';
import frGraduations from './locales/fr/graduations.json';
import frQuiz from './locales/fr/quiz.json';
import frHojoUndo from './locales/fr/hojoUndo.json';
import frNewaza from './locales/fr/newaza.json';
import frKumite from './locales/fr/kumite.json';
import frJunbiUndo from './locales/fr/junbi-undo.json';
import frInformation from './locales/fr/information.json';

import itCommon from './locales/it/common.json';
import itHome from './locales/it/home.json';
import itTheory from './locales/it/theory.json';
import itTerminology from './locales/it/terminology.json';
import itHistory from './locales/it/history.json';
import itPractice from './locales/it/practice.json';
import itStudy from './locales/it/study.json';
import itSettings from './locales/it/settings.json';
import itAbout from './locales/it/about.json';
import itKata from './locales/it/kata.json';
// Import individual kata files for Italian
import itSaifa from './locales/it/kata/saifa.json';
import itGekisaiDaiIchi from './locales/it/kata/gekisai-dai-ichi.json';
import itGekisaiDaiNi from './locales/it/kata/gekisai-dai-ni.json';
import itSanchin from './locales/it/kata/sanchin.json';
import itTensho from './locales/it/kata/tensho.json';
import itSeiyunchin from './locales/it/kata/seiyunchin.json';
import itShisochin from './locales/it/kata/shisochin.json';
import itSanseru from './locales/it/kata/sanseru.json';
import itSepai from './locales/it/kata/sepai.json';
import itKururunfa from './locales/it/kata/kururunfa.json';
import itSesan from './locales/it/kata/sesan.json';
import itPeichurin from './locales/it/kata/peichurin.json';
import itBunkai from './locales/it/bunkai.json';
import itPhilosophy from './locales/it/philosophy.json';
import itVitalPoints from './locales/it/vitalPoints.json';
import itTechniques from './locales/it/techniques.json';
import itGraduations from './locales/it/graduations.json';
import itQuiz from './locales/it/quiz.json';
import itHojoUndo from './locales/it/hojoUndo.json';
import itNewaza from './locales/it/newaza.json';
import itKumite from './locales/it/kumite.json';
import itJunbiUndo from './locales/it/junbi-undo.json';
import itInformation from './locales/it/information.json';

import nlCommon from './locales/nl/common.json';
import nlHome from './locales/nl/home.json';
import nlTheory from './locales/nl/theory.json';
import nlTerminology from './locales/nl/terminology.json';
import nlHistory from './locales/nl/history.json';
import nlPractice from './locales/nl/practice.json';
import nlStudy from './locales/nl/study.json';
import nlSettings from './locales/nl/settings.json';
import nlAbout from './locales/nl/about.json';
import nlKata from './locales/nl/kata.json';
// Import individual kata files for Dutch
import nlSaifa from './locales/nl/kata/saifa.json';
import nlGekisaiDaiIchi from './locales/nl/kata/gekisai-dai-ichi.json';
import nlGekisaiDaiNi from './locales/nl/kata/gekisai-dai-ni.json';
import nlSanchin from './locales/nl/kata/sanchin.json';
import nlTensho from './locales/nl/kata/tensho.json';
import nlSeiyunchin from './locales/nl/kata/seiyunchin.json';
import nlShisochin from './locales/nl/kata/shisochin.json';
import nlSanseru from './locales/nl/kata/sanseru.json';
import nlSepai from './locales/nl/kata/sepai.json';
import nlKururunfa from './locales/nl/kata/kururunfa.json';
import nlSesan from './locales/nl/kata/sesan.json';
import nlPeichurin from './locales/nl/kata/peichurin.json';
import nlBunkai from './locales/nl/bunkai.json';
import nlPhilosophy from './locales/nl/philosophy.json';
import nlVitalPoints from './locales/nl/vitalPoints.json';
import nlTechniques from './locales/nl/techniques.json';
import nlGraduations from './locales/nl/graduations.json';
import nlQuiz from './locales/nl/quiz.json';
import nlHojoUndo from './locales/nl/hojoUndo.json';
import nlNewaza from './locales/nl/newaza.json';
import nlKumite from './locales/nl/kumite.json';
import nlJunbiUndo from './locales/nl/junbi-undo.json';
import nlInformation from './locales/nl/information.json';

// Import Portuguese translation files
import ptCommon from './locales/pt/common.json';
import ptHome from './locales/pt/home.json';
import ptTheory from './locales/pt/theory.json';
import ptTerminology from './locales/pt/terminology.json';
import ptHistory from './locales/pt/history.json';
import ptPractice from './locales/pt/practice.json';
import ptStudy from './locales/pt/study.json';
import ptSettings from './locales/pt/settings.json';
import ptAbout from './locales/pt/about.json';
import ptKata from './locales/pt/kata.json';
// Import individual kata files for Portuguese
import ptSaifa from './locales/pt/kata/saifa.json';
import ptGekisaiDaiIchi from './locales/pt/kata/gekisai-dai-ichi.json';
import ptGekisaiDaiNi from './locales/pt/kata/gekisai-dai-ni.json';
import ptSanchin from './locales/pt/kata/sanchin.json';
import ptTensho from './locales/pt/kata/tensho.json';
import ptSeiyunchin from './locales/pt/kata/seiyunchin.json';
import ptShisochin from './locales/pt/kata/shisochin.json';
import ptSanseru from './locales/pt/kata/sanseru.json';
import ptSepai from './locales/pt/kata/sepai.json';
import ptKururunfa from './locales/pt/kata/kururunfa.json';
import ptSesan from './locales/pt/kata/sesan.json';
import ptPeichurin from './locales/pt/kata/peichurin.json';
import ptBunkai from './locales/pt/bunkai.json';
import ptPhilosophy from './locales/pt/philosophy.json';
import ptVitalPoints from './locales/pt/vitalPoints.json';
import ptTechniques from './locales/pt/techniques.json';
import ptGraduations from './locales/pt/graduations.json';
import ptQuiz from './locales/pt/quiz.json';
import ptHojoUndo from './locales/pt/hojoUndo.json';
import ptNewaza from './locales/pt/newaza.json';
import ptKumite from './locales/pt/kumite.json';
import ptJunbiUndo from './locales/pt/junbi-undo.json';
import ptInformation from './locales/pt/information.json';

// Define supported languages
export const supportedLanguages = {
  en: 'English',
  de: 'Deutsch',
  es: 'Español',
  fr: 'Français',
  it: 'Italiano',
  nl: 'Nederlands',
  pt: 'Português'
} as const;

export type SupportedLanguage = keyof typeof supportedLanguages;

// Simple translation combination
const enTranslations = {
  ...enCommon,
  ...enHome,
  ...enTheory,
  ...enTerminology,
  ...enHistory,
  ...enPractice,
  ...enStudy,
  ...enSettings,
  ...enAbout,
  kata: {
    ...enKata.kata,
    saifa: enSaifa,
    'gekisai-dai-ichi': enGekisaiDaiIchi,
    'gekisai-dai-ni': enGekisaiDaiNi,
    sanchin: enSanchin,
    tensho: enTensho,
    seiyunchin: enSeiyunchin,
    shisochin: enShisochin,
    sanseru: enSanseru,
    sepai: enSepai,
    kururunfa: enKururunfa,
    sesan: enSesan,
    peichurin: enPeichurin
  },
  kataTheoryDetailPage: enKata.kataTheoryDetailPage,
  kataDetailPage: enKata.kataDetailPage,
  ...enBunkai,
  ...enPhilosophy,
  ...enVitalPoints,
  ...enTechniques,
  ...enGraduations,
  ...enQuiz,
  hojoUndo: enHojoUndo,
  ...enNewaza,
  kumite: enKumite,
  ...enJunbiUndo,
  ...enInformation,
};

const deTranslations = {
  ...deCommon,
  ...deHome,
  ...deTheory,
  ...deTerminology,
  ...deHistory,
  ...dePractice,
  ...deStudy,
  ...deSettings,
  ...deAbout,
  kata: {
    ...deKata.kata,
    saifa: deSaifa,
    'gekisai-dai-ichi': deGekisaiDaiIchi,
    'gekisai-dai-ni': deGekisaiDaiNi,
    sanchin: deSanchin,
    tensho: deTensho,
    seiyunchin: deSeiyunchin,
    shisochin: deShisochin,
    sanseru: deSanseru,
    sepai: deSepai,
    kururunfa: deKururunfa,
    sesan: deSesan,
    peichurin: dePeichurin
  },
  kataTheoryDetailPage: deKata.kataTheoryDetailPage,
  kataDetailPage: deKata.kataDetailPage,
  ...deBunkai,
  ...dePhilosophy,
  ...deVitalPoints,
  ...deTechniques,
  ...deGraduations,
  ...deQuiz,
  hojoUndo: deHojoUndo,
  ...deNewaza,
  kumite: deKumite,
  ...deJunbiUndo,
  ...deInformation,
};

const esTranslations = {
  ...esCommon,
  ...esHome,
  ...esTheory,
  ...esTerminology,
  ...esHistory,
  ...esPractice,
  ...esStudy,
  ...esSettings,
  ...esAbout,
  kata: {
    ...esKata.kata,
    saifa: esSaifa,
    'gekisai-dai-ichi': esGekisaiDaiIchi,
    'gekisai-dai-ni': esGekisaiDaiNi,
    sanchin: esSanchin,
    tensho: esTensho,
    seiyunchin: esSeiyunchin,
    shisochin: esShisochin,
    sanseru: esSanseru,
    sepai: esSepai,
    kururunfa: esKururunfa,
    sesan: esSesan,
    peichurin: esPeichurin
  },
  kataTheoryDetailPage: esKata.kataTheoryDetailPage,
  kataDetailPage: esKata.kataDetailPage,
  ...esBunkai,
  ...esPhilosophy,
  ...esVitalPoints,
  ...esTechniques,
  ...esGraduations,
  ...esQuiz,
  hojoUndo: esHojoUndo,
  ...esNewaza,
  kumite: esKumite,
  ...esJunbiUndo,
  ...esInformation,
};

const frTranslations = {
  ...frCommon,
  ...frHome,
  ...frTheory,
  ...frTerminology,
  ...frHistory,
  ...frPractice,
  ...frStudy,
  ...frSettings,
  ...frAbout,
  kata: {
    ...frKata.kata,
    saifa: frSaifa,
    'gekisai-dai-ichi': frGekisaiDaiIchi,
    'gekisai-dai-ni': frGekisaiDaiNi,
    sanchin: frSanchin,
    tensho: frTensho,
    seiyunchin: frSeiyunchin,
    shisochin: frShisochin,
    sanseru: frSanseru,
    sepai: frSepai,
    kururunfa: frKururunfa,
    sesan: frSesan,
    peichurin: frPeichurin
  },
  kataTheoryDetailPage: frKata.kataTheoryDetailPage,
  kataDetailPage: frKata.kataDetailPage,
  ...frBunkai,
  ...frPhilosophy,
  ...frVitalPoints,
  ...frTechniques,
  ...frGraduations,
  ...frQuiz,
  hojoUndo: frHojoUndo,
  ...frNewaza,
  kumite: frKumite,
  ...frJunbiUndo,
  ...frInformation,
};

const itTranslations = {
  ...itCommon,
  ...itHome,
  ...itTheory,
  ...itTerminology,
  ...itHistory,
  ...itPractice,
  ...itStudy,
  ...itSettings,
  ...itAbout,
  kata: {
    ...itKata.kata,
    saifa: itSaifa,
    'gekisai-dai-ichi': itGekisaiDaiIchi,
    'gekisai-dai-ni': itGekisaiDaiNi,
    sanchin: itSanchin,
    tensho: itTensho,
    seiyunchin: itSeiyunchin,
    shisochin: itShisochin,
    sanseru: itSanseru,
    sepai: itSepai,
    kururunfa: itKururunfa,
    sesan: itSesan,
    peichurin: itPeichurin
  },
  kataTheoryDetailPage: itKata.kataTheoryDetailPage,
  kataDetailPage: itKata.kataDetailPage,
  ...itBunkai,
  ...itPhilosophy,
  ...itVitalPoints,
  ...itTechniques,
  ...itGraduations,
  ...itQuiz,
  hojoUndo: itHojoUndo,
  ...itNewaza,
  kumite: itKumite,
  ...itJunbiUndo,
  ...itInformation,
};

const nlTranslations = {
  ...nlCommon,
  ...nlHome,
  ...nlTheory,
  ...nlTerminology,
  ...nlHistory,
  ...nlPractice,
  ...nlStudy,
  ...nlSettings,
  ...nlAbout,
  kata: {
    ...nlKata.kata,
    saifa: nlSaifa,
    'gekisai-dai-ichi': nlGekisaiDaiIchi,
    'gekisai-dai-ni': nlGekisaiDaiNi,
    sanchin: nlSanchin,
    tensho: nlTensho,
    seiyunchin: nlSeiyunchin,
    shisochin: nlShisochin,
    sanseru: nlSanseru,
    sepai: nlSepai,
    kururunfa: nlKururunfa,
    sesan: nlSesan,
    peichurin: nlPeichurin
  },
  kataTheoryDetailPage: nlKata.kataTheoryDetailPage,
  kataDetailPage: nlKata.kataDetailPage,
  ...nlBunkai,
  ...nlPhilosophy,
  ...nlVitalPoints,
  ...nlTechniques,
  ...nlGraduations,
  ...nlQuiz,
  hojoUndo: nlHojoUndo,
  ...nlNewaza,
  kumite: nlKumite,
  ...nlJunbiUndo,
  ...nlInformation,
};

const ptTranslations = {
  ...ptCommon,
  ...ptHome,
  ...ptTheory,
  ...ptTerminology,
  ...ptHistory,
  ...ptPractice,
  ...ptStudy,
  ...ptSettings,
  ...ptAbout,
  kata: {
    ...ptKata.kata,
    saifa: ptSaifa,
    'gekisai-dai-ichi': ptGekisaiDaiIchi,
    'gekisai-dai-ni': ptGekisaiDaiNi,
    sanchin: ptSanchin,
    tensho: ptTensho,
    seiyunchin: ptSeiyunchin,
    shisochin: ptShisochin,
    sanseru: ptSanseru,
    sepai: ptSepai,
    kururunfa: ptKururunfa,
    sesan: ptSesan,
    peichurin: ptPeichurin
  },
  kataTheoryDetailPage: ptKata.kataTheoryDetailPage,
  kataDetailPage: ptKata.kataDetailPage,
  ...ptBunkai,
  ...ptPhilosophy,
  ...ptVitalPoints,
  ...ptTechniques,
  ...ptGraduations,
  ...ptQuiz,
  hojoUndo: ptHojoUndo,
  ...ptNewaza,
  kumite: ptKumite,
  ...ptJunbiUndo,
  ...ptInformation,
};

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
      nl: { translation: nlTranslations },
      pt: { translation: ptTranslations }
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