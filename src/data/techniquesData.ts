import { TFunction } from 'i18next';

// Goju Ryu Karate Terminology Data
// Complete terminology structure based on authoritative Dutch Goju Ryu documentation

export interface TechniqueData {
  id: string;
  category: 'Basiskennis' | 'Organisatie' | 'Training' | 'Hojo-Undo' | 'Dachi-Waza' |
  'Verplaatsingen' | 'Anatomische-Wapens' | 'Uke-Waza' | 'Zuki-Uchi-Waza' |
  'Geri-Waza' | 'Tuite-Waza' | 'Kyusho';
  japanese: string;
  kanji?: string;
  english: string; // This will hold the localized translation (English, Dutch, etc.)
  dutch?: string; // Kept for interface compatibility, but will be same as english or redundant
  description?: string;
}

// Helper to safely get terms object
const getTerms = (t: TFunction, key: string): Record<string, any> => {
  const terms = t(`terminology.sections.${key}.terms`, { returnObjects: true });
  return typeof terms === 'object' && terms !== null ? terms : {};
};

// Function to generate data dynamically based on current language
export const getTechniquesData = (t: TFunction): TechniqueData[] => {
  const data: TechniqueData[] = [];

  // 1. General Terms -> Basiskennis
  const generalTerms = getTerms(t, 'general-terms-content');
  Object.entries(generalTerms).forEach(([key, term]: [string, any]) => {
    data.push({
      id: `general-${key}`,
      category: 'Basiskennis',
      japanese: term.name, // 'name' usually holds Japanese (Romaji)
      kanji: term.japanese, // 'japanese' usually holds Kanji/Kana
      english: term.english, // Localized meaning
      dutch: term.english,
      description: term.details
    });
  });

  // 2. Organization -> Organisatie
  const orgTerms = getTerms(t, 'phrases-etiquette-content');
  Object.entries(orgTerms).forEach(([key, term]: [string, any]) => {
    data.push({
      id: `org-${key}`,
      category: 'Organisatie',
      japanese: term.name,
      kanji: term.japanese,
      english: term.english,
      dutch: term.english,
      description: term.details
    });
  });

  // 3. Training -> Training
  const trainingTerms = getTerms(t, 'training-content');
  Object.entries(trainingTerms).forEach(([key, term]: [string, any]) => {
    data.push({
      id: `train-${key}`,
      category: 'Training',
      japanese: term.name,
      kanji: term.japanese,
      english: term.english,
      dutch: term.english,
      description: term.details
    });
  });

  // 4. Hojo Undo -> Hojo-Undo
  const hojoTerms = getTerms(t, 'hojo-undo-content');
  Object.entries(hojoTerms).forEach(([key, term]: [string, any]) => {
    data.push({
      id: `hojo-${key}`,
      category: 'Hojo-Undo',
      japanese: term.name,
      kanji: term.japanese,
      english: term.english,
      dutch: term.english,
      description: term.details
    });
  });

  // 5. Stances -> Dachi-Waza
  const stanceTerms = getTerms(t, 'stances-content');
  Object.entries(stanceTerms).forEach(([key, term]: [string, any]) => {
    data.push({
      id: `stance-${key}`,
      category: 'Dachi-Waza',
      japanese: term.name,
      kanji: term.japanese,
      english: term.english,
      dutch: term.english,
      description: term.details || term.instructions
    });
  });

  // 6. Movement -> Verplaatsingen
  const moveTerms = getTerms(t, 'movement-content');
  Object.entries(moveTerms).forEach(([key, term]: [string, any]) => {
    data.push({
      id: `move-${key}`,
      category: 'Verplaatsingen',
      japanese: term.name,
      kanji: term.japanese,
      english: term.english,
      dutch: term.english,
      description: term.details
    });
  });

  // 7. Anatomical Weapons -> Anatomische-Wapens
  const weaponTerms = getTerms(t, 'anatomical-weapons-content');
  Object.entries(weaponTerms).forEach(([key, term]: [string, any]) => {
    data.push({
      id: `weapon-${key}`,
      category: 'Anatomische-Wapens',
      japanese: term.name,
      kanji: term.japanese,
      english: term.english,
      dutch: term.english,
      description: term.details
    });
  });

  // 8. Blocks -> Uke-Waza
  const blockTerms = getTerms(t, 'blocks-content');
  Object.entries(blockTerms).forEach(([key, term]: [string, any]) => {
    data.push({
      id: `block-${key}`,
      category: 'Uke-Waza',
      japanese: term.name,
      kanji: term.japanese,
      english: term.english,
      dutch: term.english,
      description: term.details
    });
  });

  // 9. Punches -> Zuki-Uchi-Waza
  const punchTerms = getTerms(t, 'punches-content');
  Object.entries(punchTerms).forEach(([key, term]: [string, any]) => {
    data.push({
      id: `punch-${key}`,
      category: 'Zuki-Uchi-Waza',
      japanese: term.name,
      kanji: term.japanese,
      english: term.english,
      dutch: term.english,
      description: term.details
    });
  });

  // 10. Kicks -> Geri-Waza
  const kickTerms = getTerms(t, 'kicks-content');
  Object.entries(kickTerms).forEach(([key, term]: [string, any]) => {
    data.push({
      id: `kick-${key}`,
      category: 'Geri-Waza',
      japanese: term.name,
      kanji: term.japanese,
      english: term.english,
      dutch: term.english,
      description: term.details
    });
  });

  // 11. Grappling -> Tuite-Waza
  // NOTE: Assuming grappling might be in 'grappling', but checking structure if it matches 'terms' pattern
  // If not present in JSON structure standardized way, we might skip or fallback. 
  // Based on review, 'grappling' might be a direct object or inside 'goju-ryu-techniques'. 
  // Let's check 'goju-ryu-techniques.grappling'.
  const grapplingTerms = t('terminology.sections.goju-ryu-techniques.grappling', { returnObjects: true });
  if (typeof grapplingTerms === 'object' && grapplingTerms !== null) {
    // Structure of 'goju-ryu-techniques' items is often just "Key": "Value (Desc)". 
    // This is different from the 'terms' structure { name, english, japanese }.
    // We might need to parse strings here if we want to include them, OR rely on 'grappling' section if it exists.
    // For now, let's omit if standard 'terms' section doesn't exist, to avoid breaking via bad parsing.
  }

  // 12. Kyusho -> Kyusho
  const vitalPointsTerms = getTerms(t, 'vital-points-content');
  Object.entries(vitalPointsTerms).forEach(([key, term]: [string, any]) => {
    data.push({
      id: `kyusho-${key}`,
      category: 'Kyusho',
      japanese: term.name,
      kanji: term.japanese,
      english: term.english,
      dutch: term.english,
      description: term.details
    });
  });

  // 13. Goju Ryu Terms (Generic/Specific)
  // This covers terms like 'gyaku-zuki' if they are under 'karate-goju-ryu-content' or 'goju-ryu-techniques' sections
  // We explicitly look for 'goju-ryu-techniques' which has a nested structure without a 'terms' parent key
  const gojuTerms = t('terminology.sections.goju-ryu-techniques', { returnObjects: true });

  if (gojuTerms && typeof gojuTerms === 'object' && !Array.isArray(gojuTerms)) {
    // Helper to process terms recursively or by section
    const processGojuSection = (section: any, prefix: string, parentKey: string) => {
      Object.entries(section).forEach(([key, value]) => {
        if (typeof value === 'object' && value !== null && key !== 'terms') {
          // Recurse into subsections
          processGojuSection(value, prefix ? `${prefix}-${key}` : key, key);
        } else if (typeof value === 'string' && key !== 'title' && key !== 'description') {
          // It's a term string
          const id = prefix ? `goju-${prefix}-${key}` : `goju-${key}`;

          // Only add if not already present
          if (!data.find(d => d.id === id)) {
            const [termName, ...descParts] = value.split(' - ');

            // Infer category based on parent section or keywords
            let category: TechniqueData['category'] = 'Basiskennis';

            const lowerKey = key.toLowerCase();
            const lowerParent = parentKey.toLowerCase();

            if (lowerParent.includes('punches') || lowerParent.includes('zuki') || lowerKey.includes('zuki')) {
              category = 'Zuki-Uchi-Waza';
            } else if (lowerParent.includes('blocks') || lowerParent.includes('uke') || lowerKey.includes('uke')) {
              category = 'Uke-Waza';
            } else if (lowerParent.includes('kicks') || lowerParent.includes('geri') || lowerKey.includes('geri')) {
              category = 'Geri-Waza';
            } else if (lowerParent.includes('stances') || lowerParent.includes('dachi')) {
              category = 'Dachi-Waza';
            }

            data.push({
              id: id,
              category: category,
              japanese: termName || value,
              kanji: '',
              english: termName || value,
              dutch: termName || value, // Added fallback
              description: value
            });
          }
        }
      });
    };

    // Start processing from root of goju terms
    processGojuSection(gojuTerms, '', '');
  }

  return data;
};

// Deprecated: Empty array to satisfy imports if needed temporarily, but consumers should switch to getTechniquesData
export const techniquesData: TechniqueData[] = [];
