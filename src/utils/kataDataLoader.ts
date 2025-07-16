import { useTranslation } from 'react-i18next';

export interface KataData {
  name: string;
  japaneseName: string;
  meaning: string;
  description: string;
  history: string;
  culturalSignificance: string;
  detailedMeaning?: {
    title: string;
    content: string;
  };
  origin?: {
    title: string;
    content: string;
  };
  transmission?: {
    title: string;
    content: string;
  };
  historicalDevelopment?: {
    title: string;
    content: string;
  };
  technicalFeatures?: {
    title: string;
    content: string;
  };
  controversy?: {
    title: string;
    content: string;
  };
  relationships?: {
    title: string;
    content: string;
  };
  modernPractice?: {
    title: string;
    content: string;
  };
  stepsCount?: string;
}

export const useKataData = (kataId: string): KataData | null => {
  const { t } = useTranslation();
  
  try {
    // Try to load from individual kata file first
    const kataData: KataData = {
      name: t(`kata.${kataId}.name`),
      japaneseName: t(`kata.${kataId}.japaneseName`),
      meaning: t(`kata.${kataId}.meaning`),
      description: t(`kata.${kataId}.description`),
      history: t(`kata.${kataId}.history`),
      culturalSignificance: t(`kata.${kataId}.culturalSignificance`),
    };

    // Add optional detailed sections if they exist
    const detailedMeaningTitle = t(`kata.${kataId}.detailedMeaning.title`, { defaultValue: '' });
    if (detailedMeaningTitle && detailedMeaningTitle !== `kata.${kataId}.detailedMeaning.title`) {
      kataData.detailedMeaning = {
        title: detailedMeaningTitle,
        content: t(`kata.${kataId}.detailedMeaning.content`)
      };
    }

    const originTitle = t(`kata.${kataId}.origin.title`, { defaultValue: '' });
    if (originTitle && originTitle !== `kata.${kataId}.origin.title`) {
      kataData.origin = {
        title: originTitle,
        content: t(`kata.${kataId}.origin.content`)
      };
    }

    const transmissionTitle = t(`kata.${kataId}.transmission.title`, { defaultValue: '' });
    if (transmissionTitle && transmissionTitle !== `kata.${kataId}.transmission.title`) {
      kataData.transmission = {
        title: transmissionTitle,
        content: t(`kata.${kataId}.transmission.content`)
      };
    }

    const historicalDevelopmentTitle = t(`kata.${kataId}.historicalDevelopment.title`, { defaultValue: '' });
    if (historicalDevelopmentTitle && historicalDevelopmentTitle !== `kata.${kataId}.historicalDevelopment.title`) {
      kataData.historicalDevelopment = {
        title: historicalDevelopmentTitle,
        content: t(`kata.${kataId}.historicalDevelopment.content`)
      };
    }

    const technicalFeaturesTitle = t(`kata.${kataId}.technicalFeatures.title`, { defaultValue: '' });
    if (technicalFeaturesTitle && technicalFeaturesTitle !== `kata.${kataId}.technicalFeatures.title`) {
      kataData.technicalFeatures = {
        title: technicalFeaturesTitle,
        content: t(`kata.${kataId}.technicalFeatures.content`)
      };
    }

    const controversyTitle = t(`kata.${kataId}.controversy.title`, { defaultValue: '' });
    if (controversyTitle && controversyTitle !== `kata.${kataId}.controversy.title`) {
      kataData.controversy = {
        title: controversyTitle,
        content: t(`kata.${kataId}.controversy.content`)
      };
    }

    const relationshipsTitle = t(`kata.${kataId}.relationships.title`, { defaultValue: '' });
    if (relationshipsTitle && relationshipsTitle !== `kata.${kataId}.relationships.title`) {
      kataData.relationships = {
        title: relationshipsTitle,
        content: t(`kata.${kataId}.relationships.content`)
      };
    }

    const modernPracticeTitle = t(`kata.${kataId}.modernPractice.title`, { defaultValue: '' });
    if (modernPracticeTitle && modernPracticeTitle !== `kata.${kataId}.modernPractice.title`) {
      kataData.modernPractice = {
        title: modernPracticeTitle,
        content: t(`kata.${kataId}.modernPractice.content`)
      };
    }

    const stepsCount = t(`kata.${kataId}.stepsCount`, { defaultValue: '' });
    if (stepsCount && stepsCount !== `kata.${kataId}.stepsCount`) {
      kataData.stepsCount = stepsCount;
    }

    return kataData;
  } catch (error) {
    console.error(`Error loading kata data for ${kataId}:`, error);
    return null;
  }
}; 