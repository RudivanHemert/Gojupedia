export interface HojoUndoSection {
  title: string; // This will now be an i18n key
  // Store content as an array of strings, where each string can be a paragraph or list item.
  // We'll need to handle list formatting during rendering if needed.
  content: string[]; // Keep this empty, content is in Markdown
}

export interface HojoUndoEquipment {
  id: string;
  name: string; // This will now be an i18n key
  // Using specific keys for known sections makes lookup easier
  function?: HojoUndoSection;
  construction?: HojoUndoSection;
  attentionPoints?: HojoUndoSection;
  exercises?: HojoUndoSection;
  classicExercises?: HojoUndoSection; // Specific for Kongoken
  // Add other specific sections if needed
}

// Structure the data using equipment IDs as keys for easy access
export const hojoUndoData: Record<string, HojoUndoEquipment> = {
  'chi-ishi': {
    id: 'chi-ishi',
    name: 'hojoUndo.chiIshi.name', // i18n key
    function: {
      title: 'hojoUndo.chiIshi.function', // i18n key
      content: []
    },
    construction: {
      title: 'hojoUndo.chiIshi.construction', // i18n key
      content: []
    },
    attentionPoints: {
      title: 'hojoUndo.chiIshi.attentionPoints', // i18n key
      content: []
    },
    exercises: {
      title: 'hojoUndo.chiIshi.exercises', // i18n key
      content: []
    }
  },
  'nigiri-game': {
    id: 'nigiri-game',
    name: 'hojoUndo.nigiriGame.name', // i18n key
    function: {
      title: 'hojoUndo.nigiriGame.function', // i18n key
      content: []
    },
    construction: {
      title: 'hojoUndo.nigiriGame.construction', // i18n key
      content: []
    },
    exercises: {
      title: 'hojoUndo.nigiriGame.exercises', // i18n key
      content: []
    },
    attentionPoints: {
      title: 'hojoUndo.nigiriGame.attentionPoints', // i18n key
      content: []
    }
  },
  'kongoken': {
    id: 'kongoken',
    name: 'hojoUndo.kongoken.name', // i18n key
    exercises: {
      title: 'hojoUndo.kongoken.exercises', // i18n key
      content: []
    },
    classicExercises: {
      title: 'hojoUndo.kongoken.classicExercises', // i18n key
      content: []
    }
  },
  'ishi-sashi': {
    id: 'ishi-sashi',
    name: 'hojoUndo.ishiSashi.name', // i18n key
    function: {
      title: 'hojoUndo.ishiSashi.function', // i18n key
      content: []
    },
    construction: {
      title: 'hojoUndo.ishiSashi.construction', // i18n key
      content: []
    },
    exercises: {
      title: 'hojoUndo.ishiSashi.exercises', // i18n key
      content: []
    },
    attentionPoints: {
      title: 'hojoUndo.ishiSashi.attentionPoints', // i18n key
      content: []
    }
  }
}; 