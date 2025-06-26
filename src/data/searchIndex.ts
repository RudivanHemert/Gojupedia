import { katas, historicalFigures, articles, principles } from './index';
import { techniquesData } from './techniquesData';

export interface SearchResult {
  id: string;
  title: string;
  description: string;
  type: 'kata' | 'technique' | 'hojo-undo' | 'philosophy' | 'terminology' | 'history' | 'theory' | 'newaza' | 'kumite' | 'person' | 'principle' | 'article';
  path: string;
  tags: string[];
  language?: string;
}

// Create search index from all available content
export const createSearchIndex = (): SearchResult[] => {
  const searchResults: SearchResult[] = [];

  // Add kata data
  katas.forEach(kata => {
    searchResults.push({
      id: `kata-${kata.id}`,
      title: kata.name || kata.id,
      description: kata.description || '',
      type: 'kata',
      path: `/kata/${kata.id}`,
      tags: ['kata', kata.level, kata.category]
    });
  });

  // Add historical figures
  historicalFigures.forEach(figure => {
    // Filter out undefined or empty tags
    const validTags = ['history', 'person', 'master', 'founder', ...figure.contributions.map(c => c.toLowerCase())]
      .filter(tag => tag && tag.trim() !== '');
    
    searchResults.push({
      id: `person-${figure.id}`,
      title: figure.name,
      description: figure.description,
      type: 'person',
      path: `/history/${figure.id}`,
      tags: validTags
    });
  });

  // Add techniques from techniquesData
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

  // Add principles
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

  // Add articles
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

  // Add hojo-undo equipment
  const hojoUndoEquipment = [
    {
      id: 'chi-ishi',
      title: 'Chi-ishi',
      description: 'Stone weight training for strength development',
      path: '/hojo-undo/chi-ishi/exercises',
      tags: ['hojo-undo', 'strength', 'equipment', 'chi-ishi']
    },
    {
      id: 'kongoken',
      title: 'Kongoken',
      description: 'Iron ring training for power and conditioning',
      path: '/hojo-undo/kongoken/exercises',
      tags: ['hojo-undo', 'strength', 'equipment', 'kongoken']
    },
    {
      id: 'nigiri-game',
      title: 'Nigiri Game',
      description: 'Gripping jar training for hand strength',
      path: '/hojo-undo/nigiri-game/exercises',
      tags: ['hojo-undo', 'strength', 'equipment', 'nigiri-game']
    },
    {
      id: 'ishi-sashi',
      title: 'Ishi Sashi',
      description: 'Stone padlock training for wrist strength',
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

  // Add basic techniques
  const techniques = [
    {
      id: 'age-uke',
      title: 'Age-uke',
      description: 'Rising block technique',
      path: '/terminology/blocks',
      tags: ['technique', 'block', 'defense', 'age-uke']
    },
    {
      id: 'gedan-barai',
      title: 'Gedan Barai',
      description: 'Downward sweep block',
      path: '/terminology/blocks',
      tags: ['technique', 'block', 'defense', 'gedan-barai']
    },
    {
      id: 'soto-uke',
      title: 'Soto-uke',
      description: 'Outside block technique',
      path: '/terminology/blocks',
      tags: ['technique', 'block', 'defense', 'soto-uke']
    }
  ];

  techniques.forEach(technique => {
    searchResults.push({
      id: `technique-${technique.id}`,
      title: technique.title,
      description: technique.description,
      type: 'technique',
      path: technique.path,
      tags: technique.tags
    });
  });

  // Add philosophy content
  const philosophyContent = [
    {
      id: 'dojo-kun',
      title: 'Dojo Kun',
      description: 'The dojo precepts and principles',
      path: '/philosophy/dojo-kun',
      tags: ['philosophy', 'principles', 'ethics', 'dojo-kun']
    },
    {
      id: 'budo',
      title: 'Budo',
      description: 'The martial way and its principles',
      path: '/philosophy/budo',
      tags: ['philosophy', 'budo', 'martial-arts']
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

  // Add theory content
  const theoryContent = [
    {
      id: 'kata-theory',
      title: 'Kata Theory',
      description: 'Understanding kata principles and applications',
      path: '/theory/kata',
      tags: ['theory', 'kata', 'principles']
    },
    {
      id: 'vital-points',
      title: 'Vital Points',
      description: 'Kyusho and pressure point techniques',
      path: '/vital-points',
      tags: ['theory', 'vital-points', 'kyusho']
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

  // Add newaza content
  const newazaContent = [
    {
      id: 'newaza-intro',
      title: 'Newaza Introduction',
      description: 'Ground fighting techniques and principles',
      path: '/newaza/introduction',
      tags: ['newaza', 'ground-fighting', 'grappling']
    },
    {
      id: 'ground-positions',
      title: 'Ground Positions',
      description: 'Basic ground fighting positions',
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

  // Add kumite content
  const kumiteContent = [
    {
      id: 'kumite-basics',
      title: 'Kumite Basics',
      description: 'Basic sparring techniques and principles',
      path: '/kumite',
      tags: ['kumite', 'sparring', 'fighting']
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

  // Add specific search terms for better discoverability
  const specificTerms = [
    {
      id: 'higaonna-search',
      title: 'Higaonna',
      description: 'Historical figures in Goju Ryu: Kanryo Higaonna and Morio Higaonna',
      path: '/history',
      tags: ['higaonna', 'kanryo', 'morio', 'history', 'person', 'master']
    },
    {
      id: 'miyagi-search',
      title: 'Miyagi',
      description: 'Chojun Miyagi, founder of Goju Ryu karate',
      path: '/history',
      tags: ['miyagi', 'chojun', 'founder', 'history', 'person', 'master']
    }
  ];

  specificTerms.forEach(term => {
    searchResults.push({
      id: `term-${term.id}`,
      title: term.title,
      description: term.description,
      type: 'terminology',
      path: term.path,
      tags: term.tags
    });
  });

  return searchResults;
};

export const searchIndex = createSearchIndex();

// Search function
export const searchContent = (query: string): SearchResult[] => {
  if (!query.trim()) return [];
  
  const searchTerm = query.toLowerCase();
  
  return searchIndex.filter(item => {
    // Search in title
    if (item.title.toLowerCase().includes(searchTerm)) return true;
    
    // Search in description
    if (item.description.toLowerCase().includes(searchTerm)) return true;
    
    // Search in tags - filter out undefined/null values first
    if (item.tags && item.tags.some(tag => tag && tag.toLowerCase().includes(searchTerm))) return true;
    
    return false;
  });
}; 