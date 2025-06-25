export interface NewazaSection {
  title: string; // This will be an i18n key
  content: string[]; // Keep this empty, content is in Markdown
}

export interface NewazaEquipment {
  id: string;
  name: string; // This will be an i18n key
  introduction?: NewazaSection;
  trainingElements?: NewazaSection;
  groundPositions?: NewazaSection;
  kakie?: NewazaSection;
  techniques?: NewazaSection;
  drills?: NewazaSection;
}

// Structure the data using equipment IDs as keys for easy access
export const newazaData: Record<string, NewazaEquipment> = {
  'introduction': {
    id: 'introduction',
    name: 'newaza.sections.introduction.title',
    introduction: {
      title: 'newaza.sections.introduction.title',
      content: []
    }
  },
  'training-elements': {
    id: 'training-elements',
    name: 'newaza.sections.training-elements.title',
    trainingElements: {
      title: 'newaza.sections.training-elements.title',
      content: []
    }
  },
  'ground-positions': {
    id: 'ground-positions',
    name: 'newaza.sections.ground-positions.title',
    groundPositions: {
      title: 'newaza.sections.ground-positions.title',
      content: []
    }
  },
  'kakie': {
    id: 'kakie',
    name: 'newaza.sections.kakie.title',
    kakie: {
      title: 'newaza.sections.kakie.title',
      content: []
    }
  },
  'techniques': {
    id: 'techniques',
    name: 'newaza.sections.techniques.title',
    techniques: {
      title: 'newaza.sections.techniques.title',
      content: []
    }
  },
  'drills': {
    id: 'drills',
    name: 'newaza.sections.drills.title',
    drills: {
      title: 'newaza.sections.drills.title',
      content: []
    }
  }
}; 