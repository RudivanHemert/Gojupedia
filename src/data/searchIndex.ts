import { katas, historicalFigures, articles, principles } from './index';
import { techniquesData } from './techniquesData';
import i18n from '@/i18n';

export interface SearchResult {
  id: string;
  title: string;
  description: string;
  type: 'kata' | 'technique' | 'hojo-undo' | 'philosophy' | 'terminology' | 'history' | 'theory' | 'newaza' | 'kumite' | 'person' | 'principle' | 'article' | 'bunkai' | 'junbi-undo';
  path: string;
  tags: string[];
  language?: string;
}

// Create search index from all available content with language support
export const createSearchIndex = (language?: string): SearchResult[] => {
  const searchResults: SearchResult[] = [];
  const t = i18n.getFixedT(language || i18n.language);

  // Add kata data with translations
  katas.forEach(kata => {
    const kataName = t(`kata.${kata.id}.name`, { defaultValue: kata.name || kata.id });
    const kataDescription = t(`kata.${kata.id}.description`, { defaultValue: kata.description || '' });
    
    searchResults.push({
      id: `kata-${kata.id}`,
      title: kataName,
      description: kataDescription,
      type: 'kata',
      path: `/kata/${kata.id}`,
      tags: ['kata', kata.level, kata.category]
    });
  });

  // Add historical figures with translations
  historicalFigures.forEach(figure => {
    // Filter out undefined or empty tags
    const validTags = ['history', 'person', 'master', 'founder', ...figure.contributions.map(c => c.toLowerCase())]
      .filter(tag => tag && tag.trim() !== '');
    
    // Map figure IDs to correct routes
    const getPathForFigure = (id: string) => {
      const routeMap: Record<string, string> = {
        'miyagi-chojun': '/history/chojun-miyagi',
        'higaonna-kanryo': '/history/kanryo-higaonna'
      };
      return routeMap[id] || `/history/${id}`;
    };
    
    searchResults.push({
      id: `person-${figure.id}`,
      title: figure.name,
      description: figure.description,
      type: 'person',
      path: getPathForFigure(figure.id),
      tags: validTags
    });
  });

  // Index biography/history articles from content folder via i18n where available
  const peopleKeys = [
    { id: 'morio-higaonna', route: '/history/morio-higaonna' },
    { id: 'chojun-miyagi', route: '/history/chojun-miyagi' },
    { id: 'kanryo-higaonna', route: '/history/kanryo-higaonna' },
    { id: 'anichi-miyagi', route: '/history/anichi-miyagi' },
    { id: 'tetsuji-nakamura', route: '/history/tetsuji-nakamura' },
  ];
  const toTitleCaseFromId = (slug: string): string =>
    slug
      .split('-')
      .map(part => part.charAt(0).toUpperCase() + part.slice(1))
      .join(' ');

  peopleKeys.forEach(({ id, route }) => {
    const fallbackTitle = toTitleCaseFromId(id);
    const title = t(`history.${id}.title`, { defaultValue: fallbackTitle });
    const description = t(`history.${id}.description`, { defaultValue: '' });
    if (title && title !== `history.${id}.title`) {
      searchResults.push({
        id: `history-${id}`,
        title,
        description,
        type: 'history',
        path: route,
        tags: ['history', 'person', id.replace('-', ' ')]
      });
    }
  });

  // Add techniques from techniquesData with translations
  techniquesData.forEach(technique => {
    // Filter out undefined or empty tags
    const validTags = ['technique', technique.category.toLowerCase(), technique.japanese.toLowerCase(), technique.english.toLowerCase()]
      .filter(tag => tag && tag.trim() !== '');
    
    // Map category to correct path
    const getPathForCategory = (category: string) => {
      const categoryMap: Record<string, string> = {
        'Stances': '/terminology/stances',
        'Kicks': '/terminology/kicks', 
        'Punches': '/terminology/punches',
        'Blocks': '/terminology/blocks',
        'Strikes': '/terminology/strikes',
        'General': '/terminology/general-terms',
        'Numbers': '/terminology/numbers',
        'Tournament': '/terminology/tournament-terms',
        'Equipment': '/terminology/equipment-weapons',
        'Goju-Ryu': '/terminology/karate-goju-ryu',
        'Titles': '/terminology/karate-titles',
        'Phrases': '/terminology/phrases-etiquette',
        'Kata': '/terminology/kata-terms'
      };
      return categoryMap[category] || '/terminology';
    };
    
    searchResults.push({
      id: `technique-${technique.id}`,
      title: technique.english,
      description: technique.description || `${technique.japanese} - ${technique.english}`,
      type: 'technique',
      path: getPathForCategory(technique.category),
      tags: validTags
    });
  });

  // Add principles with translations
  principles.forEach(principle => {
    // Filter out undefined or empty tags
    const validTags = ['philosophy', 'principle', principle.japaneseName?.toLowerCase() || '', ...principle.name.toLowerCase().split(' ')]
      .filter(tag => tag && tag.trim() !== '');
    
    searchResults.push({
      id: `principle-${principle.id}`,
      title: principle.name,
      description: principle.description,
      type: 'principle',
      path: `/philosophy/${principle.id}`,
      tags: validTags
    });
  });

  // Add articles with translations
  articles.forEach(article => {
    // Generate tags from content and category
    const contentWords = article.content.toLowerCase().split(/\s+/).slice(0, 10);
    const generatedTags = ['article', article.category, ...contentWords]
      .filter(tag => tag && tag.trim() !== '');
    
    searchResults.push({
      id: `article-${article.id}`,
      title: article.title,
      description: article.content.substring(0, 200) + '...',
      type: 'article',
      path: `/philosophy/${article.id}`,
      tags: generatedTags
    });
  });

  // Add hojo-undo equipment with translations
  const hojoUndoEquipment = [
    {
      id: 'chi-ishi',
      title: t('hojo-undo.chi-ishi.title', { defaultValue: 'Chi-ishi' }),
      description: t('hojo-undo.chi-ishi.description', { defaultValue: 'Stone weight training for strength development' }),
      path: '/hojo-undo/chi-ishi/exercises',
      tags: ['hojo-undo', 'strength', 'equipment', 'chi-ishi']
    },
    {
      id: 'kongoken',
      title: t('hojo-undo.kongoken.title', { defaultValue: 'Kongoken' }),
      description: t('hojo-undo.kongoken.description', { defaultValue: 'Iron ring training for power and conditioning' }),
      path: '/hojo-undo/kongoken/exercises',
      tags: ['hojo-undo', 'strength', 'equipment', 'kongoken']
    },
    {
      id: 'nigiri-game',
      title: t('hojo-undo.nigiri-game.title', { defaultValue: 'Nigiri Game' }),
      description: t('hojo-undo.nigiri-game.description', { defaultValue: 'Gripping jar training for hand strength' }),
      path: '/hojo-undo/nigiri-game/exercises',
      tags: ['hojo-undo', 'strength', 'equipment', 'nigiri-game']
    },
    {
      id: 'ishi-sashi',
      title: t('hojo-undo.ishi-sashi.title', { defaultValue: 'Ishi Sashi' }),
      description: t('hojo-undo.ishi-sashi.description', { defaultValue: 'Stone padlock training for wrist strength' }),
      path: '/hojo-undo/ishi-sashi/exercises',
      tags: ['hojo-undo', 'strength', 'equipment', 'ishi-sashi']
    }
  ];

  hojoUndoEquipment.forEach(equipment => {
    searchResults.push({
      id: `hojo-undo-${equipment.id}`,
      title: equipment.title,
      description: equipment.description,
      type: 'hojo-undo',
      path: equipment.path,
      tags: equipment.tags
    });
  });

  // Add Junbi Undo exercises with translations
  const junbiUndoExercises = [
    {
      id: 'toe-exercises',
      title: t('junbi-undo.toe-exercises.title', { defaultValue: 'Toe Exercises' }),
      description: t('junbi-undo.toe-exercises.description', { defaultValue: 'Exercises to improve toe awareness and dexterity' }),
      path: '/practice/junbi-undo',
      tags: ['junbi-undo', 'warmup', 'preliminary', 'toes', 'flexibility']
    },
    {
      id: 'heel-pivots',
      title: t('junbi-undo.heel-pivots.title', { defaultValue: 'Heel Pivots' }),
      description: t('junbi-undo.heel-pivots.description', { defaultValue: 'Pivoting exercises on the heel for foot control' }),
      path: '/practice/junbi-undo',
      tags: ['junbi-undo', 'warmup', 'preliminary', 'heels', 'pivots']
    },
    {
      id: 'ankle-rotation',
      title: t('junbi-undo.ankle-rotation.title', { defaultValue: 'Ankle Rotation' }),
      description: t('junbi-undo.ankle-rotation.description', { defaultValue: 'Ankle flexibility and balance exercises' }),
      path: '/practice/junbi-undo',
      tags: ['junbi-undo', 'warmup', 'preliminary', 'ankles', 'rotation', 'balance']
    },
    {
      id: 'knee-strikes',
      title: t('junbi-undo.knee-strikes.title', { defaultValue: 'Knee Strikes' }),
      description: t('junbi-undo.knee-strikes.description', { defaultValue: 'Knee strike exercises for coordination' }),
      path: '/practice/junbi-undo',
      tags: ['junbi-undo', 'warmup', 'preliminary', 'knees', 'strikes']
    },
    {
      id: 'squatting-exercise',
      title: t('junbi-undo.squatting-exercise.title', { defaultValue: 'Squatting Exercise' }),
      description: t('junbi-undo.squatting-exercise.description', { defaultValue: 'Squatting exercises for leg strength' }),
      path: '/practice/junbi-undo',
      tags: ['junbi-undo', 'warmup', 'preliminary', 'squatting', 'legs', 'strength']
    }
  ];

  junbiUndoExercises.forEach(exercise => {
    searchResults.push({
      id: `junbi-undo-${exercise.id}`,
      title: exercise.title,
      description: exercise.description,
      type: 'junbi-undo',
      path: exercise.path,
      tags: exercise.tags
    });
  });

  // Add philosophy content with translations
  const philosophyContent = [
    {
      id: 'dojo-kun',
      title: t('philosophy.dojo-kun.title', { defaultValue: 'Dojo Kun' }),
      description: t('philosophy.dojo-kun.description', { defaultValue: 'The dojo precepts and principles' }),
      path: '/philosophy/dojo-kun',
      tags: ['philosophy', 'principles', 'ethics', 'dojo-kun']
    },
    {
      id: 'budo',
      title: t('philosophy.budo.title', { defaultValue: 'Budo' }),
      description: t('philosophy.budo.description', { defaultValue: 'The martial way and its principles' }),
      path: '/philosophy/budo',
      tags: ['philosophy', 'budo', 'martial-arts']
    },
    {
      id: 'kumite-philosophy',
      title: t('philosophy.kumite.title', { defaultValue: 'Kumite Philosophy' }),
      description: t('philosophy.kumite.description', { defaultValue: 'Philosophical aspects of sparring and combat' }),
      path: '/kumite/principles',
      tags: ['philosophy', 'kumite', 'sparring', 'combat', 'mind']
    },
    {
      id: 'mental-discipline',
      title: t('philosophy.mental-discipline.title', { defaultValue: 'Mental Discipline' }),
      description: t('philosophy.mental-discipline.description', { defaultValue: 'Mental training and discipline in kumite' }),
      path: '/kumite/principles',
      tags: ['philosophy', 'mental', 'discipline', 'mind', 'kumite']
    },
    {
      id: 'combat-ethics',
      title: t('philosophy.combat-ethics.title', { defaultValue: 'Combat Ethics' }),
      description: t('philosophy.combat-ethics.description', { defaultValue: 'Ethical considerations in martial arts combat' }),
      path: '/kumite/introduction/safety',
      tags: ['philosophy', 'ethics', 'combat', 'respect', 'kumite']
    }
  ];

  philosophyContent.forEach(item => {
    searchResults.push({
      id: `philosophy-${item.id}`,
      title: item.title,
      description: item.description,
      type: 'philosophy',
      path: item.path,
      tags: item.tags
    });
  });

  // Add theory content with translations
  const theoryContent = [
    {
      id: 'kata-theory',
      title: t('theory.kata.title', { defaultValue: 'Kata Theory' }),
      description: t('theory.kata.description', { defaultValue: 'Understanding kata principles and applications' }),
      path: '/theory/kata',
      tags: ['theory', 'kata', 'principles']
    },
    {
      id: 'vital-points',
      title: t('theory.vital-points.title', { defaultValue: 'Vital Points' }),
      description: t('theory.vital-points.description', { defaultValue: 'Kyusho and pressure point techniques' }),
      path: '/vital-points',
      tags: ['theory', 'vital-points', 'kyusho']
    },
    {
      id: 'kumite-theory',
      title: t('theory.kumite.title', { defaultValue: 'Kumite Theory' }),
      description: t('theory.kumite.description', { defaultValue: 'Theoretical foundations of sparring and combat' }),
      path: '/kumite',
      tags: ['theory', 'kumite', 'sparring', 'combat', 'fighting']
    },
    {
      id: 'distance-timing',
      title: t('theory.distance-timing.title', { defaultValue: 'Distance and Timing' }),
      description: t('theory.distance-timing.description', { defaultValue: 'Ma-ai and timing principles in kumite' }),
      path: '/kumite/principles',
      tags: ['theory', 'ma-ai', 'timing', 'distance', 'kumite']
    },
    {
      id: 'initiative-theory',
      title: t('theory.initiative.title', { defaultValue: 'Initiative Theory' }),
      description: t('theory.initiative.description', { defaultValue: 'Sen, Go No Sen, and Sen No Sen concepts' }),
      path: '/kumite/principles',
      tags: ['theory', 'sen', 'go-no-sen', 'sen-no-sen', 'initiative', 'kumite']
    }
  ];

  theoryContent.forEach(item => {
    searchResults.push({
      id: `theory-${item.id}`,
      title: item.title,
      description: item.description,
      type: 'theory',
      path: item.path,
      tags: item.tags
    });
  });

  // Add newaza content with translations
  const newazaContent = [
    {
      id: 'newaza-intro',
      title: t('newaza.introduction.title', { defaultValue: 'Newaza Introduction' }),
      description: t('newaza.introduction.description', { defaultValue: 'Ground fighting techniques and principles' }),
      path: '/newaza/introduction',
      tags: ['newaza', 'ground-fighting', 'grappling']
    },
    {
      id: 'ground-positions',
      title: t('newaza.ground-positions.title', { defaultValue: 'Ground Positions' }),
      description: t('newaza.ground-positions.description', { defaultValue: 'Basic ground fighting positions' }),
      path: '/newaza/ground-positions',
      tags: ['newaza', 'ground-fighting', 'positions']
    }
  ];

  newazaContent.forEach(item => {
    searchResults.push({
      id: `newaza-${item.id}`,
      title: item.title,
      description: item.description,
      type: 'newaza',
      path: item.path,
      tags: item.tags
    });
  });

  // Add comprehensive kumite content with translations
  const kumiteContent = [
    // Kumite Introduction
    {
      id: 'kumite-intro',
      title: t('kumite.introduction.title', { defaultValue: 'Kumite Introduction' }),
      description: t('kumite.introduction.description', { defaultValue: 'Introduction to sparring and fighting techniques in karate' }),
      path: '/kumite/introduction',
      tags: ['kumite', 'sparring', 'fighting', 'introduction']
    },
    {
      id: 'what-is-kumite',
      title: t('kumite.what-is.title', { defaultValue: 'What is Kumite?' }),
      description: t('kumite.what-is.description', { defaultValue: 'Understanding the fundamentals of sparring in karate' }),
      path: '/kumite/introduction/what-is',
      tags: ['kumite', 'sparring', 'fundamentals', 'definition']
    },
    {
      id: 'types-of-kumite',
      title: t('kumite.types.title', { defaultValue: 'Types of Kumite' }),
      description: t('kumite.types.description', { defaultValue: 'Different forms of sparring and their purposes' }),
      path: '/kumite/introduction/types',
      tags: ['kumite', 'types', 'ippon', 'sanbon', 'gohon', 'jiyu', 'shiai']
    },
    {
      id: 'safety-rules',
      title: t('kumite.safety.title', { defaultValue: 'Safety and Rules' }),
      description: t('kumite.safety.description', { defaultValue: 'Essential safety guidelines and competition rules' }),
      path: '/kumite/introduction/safety',
      tags: ['kumite', 'safety', 'rules', 'protection', 'equipment']
    },

    // Kumite Techniques
    {
      id: 'attack-techniques',
      title: t('kumite.attack-techniques.title', { defaultValue: 'Attack Techniques' }),
      description: t('kumite.attack-techniques.description', { defaultValue: 'Striking and kicking techniques for kumite' }),
      path: '/kumite/techniques/attack',
      tags: ['kumite', 'attack', 'striking', 'kicks', 'punches']
    },
    {
      id: 'defense-techniques',
      title: t('kumite.defense-techniques.title', { defaultValue: 'Defense Techniques' }),
      description: t('kumite.defense-techniques.description', { defaultValue: 'Blocking and evasion techniques' }),
      path: '/kumite/techniques/defense',
      tags: ['kumite', 'defense', 'blocking', 'evasion']
    },
    {
      id: 'throwing-techniques',
      title: t('kumite.throwing-techniques.title', { defaultValue: 'Throwing Techniques' }),
      description: t('kumite.throwing-techniques.description', { defaultValue: 'Takedown and throwing techniques in kumite' }),
      path: '/kumite/techniques/throwing',
      tags: ['kumite', 'throwing', 'takedown', 'nage', 'grappling']
    },

    // Kumite Principles
    {
      id: 'kumite-principles',
      title: t('kumite.principles.title', { defaultValue: 'Kumite Principles' }),
      description: t('kumite.principles.description', { defaultValue: 'Mental, tactical, and physical principles of kumite' }),
      path: '/kumite/principles',
      tags: ['kumite', 'principles', 'mental', 'tactical', 'physical']
    },

    // Kumite Competition
    {
      id: 'kumite-competition',
      title: t('kumite.competition.title', { defaultValue: 'Kumite Competition' }),
      description: t('kumite.competition.description', { defaultValue: 'Competition rules, scoring, and tournament preparation' }),
      path: '/kumite/competition',
      tags: ['kumite', 'competition', 'tournament', 'scoring', 'rules']
    },

    // Specific Kumite Types
    {
      id: 'ippon-kumite',
      title: t('kumite.ippon.title', { defaultValue: 'Ippon Kumite' }),
      description: t('kumite.ippon.description', { defaultValue: 'One-step sparring with predetermined attacks and defenses' }),
      path: '/kumite/introduction/types',
      tags: ['kumite', 'ippon', 'one-step', 'basic', 'sparring']
    },
    {
      id: 'sanbon-kumite',
      title: t('kumite.sanbon.title', { defaultValue: 'Sanbon Kumite' }),
      description: t('kumite.sanbon.description', { defaultValue: 'Three-step sparring sequences' }),
      path: '/kumite/introduction/types',
      tags: ['kumite', 'sanbon', 'three-step', 'intermediate', 'sparring']
    },
    {
      id: 'gohon-kumite',
      title: t('kumite.gohon.title', { defaultValue: 'Gohon Kumite' }),
      description: t('kumite.gohon.description', { defaultValue: 'Five-step sparring sequences' }),
      path: '/kumite/introduction/types',
      tags: ['kumite', 'gohon', 'five-step', 'advanced', 'sparring']
    },
    {
      id: 'jiyu-kumite',
      title: t('kumite.jiyu.title', { defaultValue: 'Jiyu Kumite' }),
      description: t('kumite.jiyu.description', { defaultValue: 'Free sparring without restrictions' }),
      path: '/kumite/introduction/types',
      tags: ['kumite', 'jiyu', 'free', 'sparring', 'unrestricted']
    },
    {
      id: 'shiai-kumite',
      title: t('kumite.shiai.title', { defaultValue: 'Shiai Kumite' }),
      description: t('kumite.shiai.description', { defaultValue: 'Rule-based competitive sparring' }),
      path: '/kumite/introduction/types',
      tags: ['kumite', 'shiai', 'competition', 'rules', 'tournament']
    }
  ];

  kumiteContent.forEach(item => {
    searchResults.push({
      id: `kumite-${item.id}`,
      title: item.title,
      description: item.description,
      type: 'kumite',
      path: item.path,
      tags: item.tags
    });
  });

  // Add general content with translations
  const generalContent = [
    {
      id: 'karate-basics',
      title: t('general.karate-basics.title', { defaultValue: 'Karate Basics' }),
      description: t('general.karate-basics.description', { defaultValue: 'Fundamental techniques and principles of karate' }),
      path: '/basics',
      tags: ['karate', 'basics', 'fundamentals', 'techniques', 'principles']
    },
    {
      id: 'kata-overview',
      title: t('general.kata-overview.title', { defaultValue: 'Kata Overview' }),
      description: t('general.kata-overview.description', { defaultValue: 'Traditional forms and their applications' }),
      path: '/kata',
      tags: ['kata', 'forms', 'traditional', 'applications']
    },
    {
      id: 'bunkai',
      title: t('general.bunkai.title', { defaultValue: 'Bunkai' }),
      description: t('general.bunkai.description', { defaultValue: 'Analysis and application of kata movements' }),
      path: '/kata/bunkai',
      tags: ['bunkai', 'analysis', 'application', 'kata']
    },
    {
      id: 'philosophy',
      title: t('general.philosophy.title', { defaultValue: 'Karate Philosophy' }),
      description: t('general.philosophy.description', { defaultValue: 'Philosophical aspects and mental training' }),
      path: '/philosophy',
      tags: ['philosophy', 'mental', 'training', 'zen']
    },
    {
      id: 'history',
      title: t('general.history.title', { defaultValue: 'Karate History' }),
      description: t('general.history.description', { defaultValue: 'Historical development and lineage' }),
      path: '/history',
      tags: ['history', 'lineage', 'development']
    },
    {
      id: 'terminology',
      title: t('terminology.title', { defaultValue: 'Terminology' }),
      description: t('terminology.description', { defaultValue: 'Japanese terms and their meanings' }),
      path: '/terminology',
      // Include multilingual synonyms to improve matching across languages
      tags: ['terminology', 'terminologie', 'terms', 'termen', 'woordenlijst', 'japanese']
    },
    {
      id: 'equipment',
      title: t('general.equipment.title', { defaultValue: 'Karate Equipment' }),
      description: t('general.equipment.description', { defaultValue: 'Training equipment and protective gear' }),
      path: '/equipment',
      tags: ['equipment', 'training', 'protective', 'gear']
    },
    {
      id: 'grading',
      title: t('general.grading.title', { defaultValue: 'Grading System' }),
      description: t('general.grading.description', { defaultValue: 'Belt ranks and progression system' }),
      path: '/grading',
      tags: ['grading', 'belts', 'ranks', 'progression']
    },
    {
      id: 'dojo',
      title: t('general.dojo.title', { defaultValue: 'Dojo Etiquette' }),
      description: t('general.dojo.description', { defaultValue: 'Proper behavior and customs in the dojo' }),
      path: '/dojo',
      tags: ['dojo', 'etiquette', 'behavior', 'customs']
    },
    {
      id: 'training',
      title: t('general.training.title', { defaultValue: 'Training Methods' }),
      description: t('general.training.description', { defaultValue: 'Various training approaches and methodologies' }),
      path: '/training',
      tags: ['training', 'methods', 'approaches', 'methodology']
    }
  ];

  generalContent.forEach(item => {
    searchResults.push({
      id: `general-${item.id}`,
      title: item.title,
      description: item.description,
      type: 'article',
      path: item.path,
      tags: item.tags
    });
  });

  // Remove duplicates based on ID to prevent React key conflicts
  const uniqueResults = searchResults.filter((item, index, self) => 
    index === self.findIndex(t => t.id === item.id)
  );

  return uniqueResults;
};

// Create a default search index for backward compatibility
export const searchIndex = createSearchIndex();

// Search function
export const searchContent = (query: string, language?: string): SearchResult[] => {
  if (!query.trim()) return [];
  
  const searchTerm = query.toLowerCase();
  
  // Create search index with the specified language
  const results = createSearchIndex(language);
  
  // Filter results based on search term
  return results.filter(item => {
    // Search in title
    if (item.title.toLowerCase().includes(searchTerm)) return true;
    
    // Search in description
    if (item.description.toLowerCase().includes(searchTerm)) return true;
    
    // Search in tags - filter out undefined/null values first
    if (item.tags && item.tags.some(tag => tag && tag.toLowerCase().includes(searchTerm))) return true;
    
    return false;
  });
}; 