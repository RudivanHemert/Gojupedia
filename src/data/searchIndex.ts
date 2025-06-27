import { katas, historicalFigures, articles, principles } from './index';
import { techniquesData } from './techniquesData';

export interface SearchResult {
  id: string;
  title: string;
  description: string;
  type: 'kata' | 'technique' | 'hojo-undo' | 'philosophy' | 'terminology' | 'history' | 'theory' | 'newaza' | 'kumite' | 'person' | 'principle' | 'article' | 'bunkai';
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
    },
    // Kumite specific techniques
    {
      id: 'gyaku-tsuki',
      title: 'Gyaku Tsuki',
      description: 'Reverse punch technique in kumite',
      path: '/kumite/techniques/attack',
      tags: ['technique', 'punch', 'attack', 'gyaku-tsuki', 'kumite', 'techniek', 'stoot', 'aanval', 'omgekeerde stoot', 'technik', 'schlag', 'angriff', 'umgekehrter schlag', 'technique', 'coup', 'attaque', 'coup inversé', 'técnica', 'golpe', 'ataque', 'golpe inverso', 'tecnica', 'colpo', 'attacco', 'colpo inverso']
    },
    {
      id: 'oi-tsuki',
      title: 'Oi Tsuki',
      description: 'Lunge punch technique in kumite',
      path: '/kumite/techniques/attack',
      tags: ['technique', 'punch', 'attack', 'oi-tsuki', 'kumite', 'techniek', 'stoot', 'aanval', 'uitval stoot', 'technik', 'schlag', 'angriff', 'ausfallschlag', 'technique', 'coup', 'attaque', 'coup d\'élan', 'técnica', 'golpe', 'ataque', 'golpe de embestida', 'tecnica', 'colpo', 'attacco', 'colpo di affondo']
    },
    {
      id: 'mae-geri',
      title: 'Mae Geri',
      description: 'Front kick technique in kumite',
      path: '/kumite/techniques/attack',
      tags: ['technique', 'kick', 'attack', 'mae-geri', 'kumite', 'techniek', 'trap', 'aanval', 'voorwaartse trap', 'technik', 'tritt', 'angriff', 'vortritt', 'technique', 'coup de pied', 'attaque', 'coup de pied avant', 'técnica', 'patada', 'ataque', 'patada frontal', 'tecnica', 'calcio', 'attacco', 'calcio frontale']
    },
    {
      id: 'mawashi-geri',
      title: 'Mawashi Geri',
      description: 'Roundhouse kick technique in kumite',
      path: '/kumite/techniques/attack',
      tags: ['technique', 'kick', 'attack', 'mawashi-geri', 'kumite', 'techniek', 'trap', 'aanval', 'rondtrap', 'technik', 'tritt', 'angriff', 'rundtritt', 'technique', 'coup de pied', 'attaque', 'coup de pied circulaire', 'técnica', 'patada', 'ataque', 'patada circular', 'tecnica', 'calcio', 'attacco', 'calcio circolare']
    },
    {
      id: 'yoko-geri',
      title: 'Yoko Geri',
      description: 'Side kick technique in kumite',
      path: '/kumite/techniques/attack',
      tags: ['technique', 'kick', 'attack', 'yoko-geri', 'kumite', 'techniek', 'trap', 'aanval', 'zijtrap', 'technik', 'tritt', 'angriff', 'seitentritt', 'technique', 'coup de pied', 'attaque', 'coup de pied latéral', 'técnica', 'patada', 'ataque', 'patada lateral', 'tecnica', 'calcio', 'attacco', 'calcio laterale']
    },
    {
      id: 'ushiro-geri',
      title: 'Ushiro Geri',
      description: 'Back kick technique in kumite',
      path: '/kumite/techniques/attack',
      tags: ['technique', 'kick', 'attack', 'ushiro-geri', 'kumite', 'techniek', 'trap', 'aanval', 'achtertrap', 'technik', 'tritt', 'angriff', 'rücktritt', 'technique', 'coup de pied', 'attaque', 'coup de pied arrière', 'técnica', 'patada', 'ataque', 'patada trasera', 'tecnica', 'calcio', 'attacco', 'calcio posteriore']
    },
    {
      id: 'jodan-uke',
      title: 'Jodan Uke',
      description: 'Upper level block in kumite',
      path: '/kumite/techniques/defense',
      tags: ['technique', 'block', 'defense', 'jodan-uke', 'kumite', 'techniek', 'blok', 'verdediging', 'bovenste blok', 'technik', 'block', 'verteidigung', 'oberblock', 'technique', 'blocage', 'défense', 'blocage supérieur', 'técnica', 'bloqueo', 'defensa', 'bloqueo superior', 'tecnica', 'parata', 'difesa', 'parata superiore']
    },
    {
      id: 'chudan-uke',
      title: 'Chudan Uke',
      description: 'Middle level block in kumite',
      path: '/kumite/techniques/defense',
      tags: ['technique', 'block', 'defense', 'chudan-uke', 'kumite', 'techniek', 'blok', 'verdediging', 'middelste blok', 'technik', 'block', 'verteidigung', 'mittelblock', 'technique', 'blocage', 'défense', 'blocage moyen', 'técnica', 'bloqueo', 'defensa', 'bloqueo medio', 'tecnica', 'parata', 'difesa', 'parata media']
    },
    {
      id: 'gedan-uke',
      title: 'Gedan Uke',
      description: 'Lower level block in kumite',
      path: '/kumite/techniques/defense',
      tags: ['technique', 'block', 'defense', 'gedan-uke', 'kumite', 'techniek', 'blok', 'verdediging', 'onderste blok', 'technik', 'block', 'verteidigung', 'unterblock', 'technique', 'blocage', 'défense', 'blocage inférieur', 'técnica', 'bloqueo', 'defensa', 'bloqueo inferior', 'tecnica', 'parata', 'difesa', 'parata inferiore']
    },
    {
      id: 'ashi-barai',
      title: 'Ashi Barai',
      description: 'Foot sweep technique in kumite',
      path: '/kumite/techniques/throwing',
      tags: ['technique', 'sweep', 'throwing', 'ashi-barai', 'kumite', 'techniek', 'veeg', 'worpen', 'voetveeg', 'technik', 'feger', 'wurf', 'fußfeger', 'technique', 'balayage', 'projection', 'balayage de pied', 'técnica', 'barrido', 'proyección', 'barrido de pie', 'tecnica', 'spazzata', 'proiezione', 'spazzata del piede']
    },
    {
      id: 'o-soto-gari',
      title: 'O Soto Gari',
      description: 'Major outer reap throw in kumite',
      path: '/kumite/techniques/throwing',
      tags: ['technique', 'throw', 'o-soto-gari', 'kumite', 'techniek', 'worp', 'grote buitenste oogst', 'technik', 'wurf', 'große äußere ernte', 'technique', 'projection', 'grande récolte extérieure', 'técnica', 'proyección', 'gran siega exterior', 'tecnica', 'proiezione', 'grande raccolta esterna']
    },
    {
      id: 'seoi-nage',
      title: 'Seoi Nage',
      description: 'Shoulder throw technique in kumite',
      path: '/kumite/techniques/throwing',
      tags: ['technique', 'throw', 'seoi-nage', 'kumite', 'techniek', 'worp', 'schouderworp', 'technik', 'wurf', 'schulterwurf', 'technique', 'projection', 'projection d\'épaule', 'técnica', 'proyección', 'proyección de hombro', 'tecnica', 'proiezione', 'proiezione di spalla']
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
    },
    {
      id: 'kumite-philosophy',
      title: 'Kumite Philosophy',
      description: 'Philosophical aspects of sparring and combat',
      path: '/kumite/principles',
      tags: ['philosophy', 'kumite', 'sparring', 'combat', 'mind']
    },
    {
      id: 'mental-discipline',
      title: 'Mental Discipline',
      description: 'Mental training and discipline in kumite',
      path: '/kumite/principles',
      tags: ['philosophy', 'mental', 'discipline', 'mind', 'kumite']
    },
    {
      id: 'combat-ethics',
      title: 'Combat Ethics',
      description: 'Ethical considerations in martial arts combat',
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
    },
    {
      id: 'kumite-theory',
      title: 'Kumite Theory',
      description: 'Theoretical foundations of sparring and combat',
      path: '/kumite',
      tags: ['theory', 'kumite', 'sparring', 'combat', 'fighting']
    },
    {
      id: 'distance-timing',
      title: 'Distance and Timing',
      description: 'Ma-ai and timing principles in kumite',
      path: '/kumite/principles',
      tags: ['theory', 'ma-ai', 'timing', 'distance', 'kumite']
    },
    {
      id: 'initiative-theory',
      title: 'Initiative Theory',
      description: 'Sen, Go No Sen, and Sen No Sen concepts',
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

  // Add comprehensive kumite content
  const kumiteContent = [
    // Kumite Introduction
    {
      id: 'kumite-intro',
      title: 'Kumite Introduction',
      description: 'Introduction to sparring and fighting techniques in karate',
      path: '/kumite/introduction',
      tags: ['kumite', 'sparring', 'fighting', 'introduction', 'inleiding', 'sparren', 'vechten', 'einführung', 'introduction', 'introducción', 'introduzione', 'kampf', 'combat', 'combate', 'combattimento']
    },
    {
      id: 'what-is-kumite',
      title: 'What is Kumite?',
      description: 'Understanding the fundamentals of sparring in karate',
      path: '/kumite/introduction/what-is',
      tags: ['kumite', 'sparring', 'fundamentals', 'definition', 'wat', 'fundamenten', 'definitie', 'grundlagen', 'fondamentaux', 'fundamentos', 'fondamenti', 'was', 'qu\'est-ce', 'qué', 'cosa']
    },
    {
      id: 'types-of-kumite',
      title: 'Types of Kumite',
      description: 'Different forms of sparring and their purposes',
      path: '/kumite/introduction/types',
      tags: ['kumite', 'types', 'ippon', 'sanbon', 'gohon', 'jiyu', 'shiai', 'soorten', 'vormen', 'arten', 'types', 'tipos', 'tipi', 'formen', 'formes', 'formas', 'forme']
    },
    {
      id: 'safety-rules',
      title: 'Safety and Rules',
      description: 'Essential safety guidelines and competition rules',
      path: '/kumite/introduction/safety',
      tags: ['kumite', 'safety', 'rules', 'protection', 'equipment', 'veiligheid', 'regels', 'bescherming', 'sicherheit', 'regeln', 'sécurité', 'règles', 'seguridad', 'reglas', 'sicurezza', 'regole']
    },

    // Kumite Techniques
    {
      id: 'attack-techniques',
      title: 'Attack Techniques',
      description: 'Effective attacking techniques for sport karate',
      path: '/kumite/techniques/attack',
      tags: ['kumite', 'attack', 'tsuki', 'uchi', 'keri', 'striking', 'aanval', 'aanvalstechnieken', 'slaan', 'angriff', 'angreiftechniken', 'attaque', 'techniques d\'attaque', 'ataque', 'técnicas de ataque', 'attacco', 'tecniche di attacco']
    },
    {
      id: 'defense-techniques',
      title: 'Defense Techniques',
      description: 'Defensive techniques and blocking strategies',
      path: '/kumite/techniques/defense',
      tags: ['kumite', 'defense', 'uke', 'blocking', 'evasion', 'verdediging', 'blokkeren', 'ontwijken', 'verteidigung', 'abwehr', 'défense', 'techniques de défense', 'defensa', 'técnicas de defensa', 'difesa', 'tecniche di difesa']
    },
    {
      id: 'throwing-techniques',
      title: 'Throwing Techniques',
      description: 'Throwing and takedown techniques in kumite',
      path: '/kumite/techniques/throwing',
      tags: ['kumite', 'throwing', 'nage', 'takedown', 'grappling', 'worpen', 'worptechnieken', 'worstelen', 'wurf', 'wurftechniken', 'projection', 'techniques de projection', 'proyección', 'técnicas de proyección', 'proiezione', 'tecniche di proiezione']
    },

    // Kumite Principles
    {
      id: 'kumite-principles',
      title: 'Kumite Principles',
      description: 'Fundamental principles for effective kumite',
      path: '/kumite/principles',
      tags: ['kumite', 'principles', 'mental', 'tactical', 'physical', 'principes', 'mentaal', 'tactisch', 'fysiek', 'prinzipien', 'geistig', 'taktisch', 'körperlich', 'principes', 'mental', 'tactique', 'physique', 'principios', 'mental', 'táctico', 'físico', 'principi', 'mentale', 'tattico', 'fisico']
    },

    // Mental Principles
    {
      id: 'zanshin',
      title: 'Zanshin (残心) - Remaining Mind',
      description: 'Maintaining awareness and readiness after technique execution',
      path: '/kumite/principles',
      tags: ['kumite', 'zanshin', 'mental', 'awareness', 'readiness', 'overblijvende geest', 'bewustzijn', 'paraathouding', 'verbleibender geist', 'bewusstsein', 'bereitschaft', 'esprit restant', 'conscience', 'espíritu restante', 'conciencia', 'spirito rimanente', 'consapevolezza']
    },
    {
      id: 'mushin',
      title: 'Mushin (無心) - Mind Without Thought',
      description: 'State of mind free from conscious thought during combat',
      path: '/kumite/principles',
      tags: ['kumite', 'mushin', 'mental', 'mindfulness', 'zen', 'geest zonder gedachten', 'meditatie', 'gedankenloser geist', 'achtsamkeit', 'esprit sans pensée', 'pleine conscience', 'espíritu sin pensamiento', 'atención plena', 'spirito senza pensiero', 'consapevolezza']
    },
    {
      id: 'fudoshin',
      title: 'Fudoshin (不動心) - Immovable Mind',
      description: 'Unwavering mental state under pressure',
      path: '/kumite/principles',
      tags: ['kumite', 'fudoshin', 'mental', 'stability', 'resilience', 'onbeweeglijke geest', 'stabiliteit', 'weerstand', 'unbeweglicher geist', 'stabilität', 'widerstandsfähigkeit', 'esprit immobile', 'stabilité', 'espíritu inmóvil', 'estabilidad', 'spirito immobile', 'stabilità']
    },
    {
      id: 'senshin',
      title: 'Senshin (先心) - Purified Mind',
      description: 'Refined and purified state of consciousness',
      path: '/kumite/principles',
      tags: ['kumite', 'senshin', 'mental', 'purification', 'consciousness', 'gepurificeerde geest', 'zuivering', 'bewustzijn', 'gereinigter geist', 'reinigung', 'bewusstsein', 'esprit purifié', 'purification', 'espíritu purificado', 'purificación', 'spirito purificato', 'purificazione']
    },

    // Tactical Principles
    {
      id: 'ma-ai',
      title: 'Ma-ai (間合い) - Fighting Distance',
      description: 'Understanding and controlling fighting distance',
      path: '/kumite/principles',
      tags: ['kumite', 'ma-ai', 'tactical', 'distance', 'timing', 'vechtafstand', 'afstand', 'timing', 'kampfdistanz', 'distanz', 'timing', 'distance de combat', 'distance', 'distancia de combate', 'distancia', 'distanza di combattimento', 'distanza']
    },
    {
      id: 'sen',
      title: 'Sen (先) - Initiative',
      description: 'Taking the initiative in combat situations',
      path: '/kumite/principles',
      tags: ['kumite', 'sen', 'tactical', 'initiative', 'attack', 'initiatief', 'aanval', 'initiative', 'angriff', 'initiative', 'attaque', 'initiative', 'ataque', 'iniciativa', 'iniziativa', 'attacco']
    },
    {
      id: 'go-no-sen',
      title: 'Go No Sen (後の先) - Response to Attack',
      description: 'Counter-attacking after defending',
      path: '/kumite/principles',
      tags: ['kumite', 'go-no-sen', 'tactical', 'counter', 'defense', 'reactie op aanval', 'tegenaanval', 'verdediging', 'antwort auf angriff', 'gegenangriff', 'verteidigung', 'réponse à l\'attaque', 'contre-attaque', 'respuesta al ataque', 'contraataque', 'risposta all\'attacco', 'contrattacco']
    },
    {
      id: 'sen-no-sen',
      title: 'Sen No Sen (先の先) - Attacking the Attack',
      description: 'Attacking as the opponent begins their attack',
      path: '/kumite/principles',
      tags: ['kumite', 'sen-no-sen', 'tactical', 'interception', 'timing', 'aanvallen van de aanval', 'interceptie', 'angriff auf den angriff', 'abfangen', 'attaque de l\'attaque', 'interception', 'ataque del ataque', 'intercepción', 'attacco dell\'attacco', 'intercettazione']
    },

    // Physical Principles
    {
      id: 'balance-stability',
      title: 'Balance and Stability',
      description: 'Maintaining proper balance and stance during kumite',
      path: '/kumite/principles',
      tags: ['kumite', 'balance', 'stability', 'physical', 'stance', 'balans', 'stabiliteit', 'houding', 'gleichgewicht', 'stabilität', 'haltung', 'équilibre', 'stabilité', 'posture', 'equilibrio', 'estabilidad', 'postura', 'equilibrio', 'stabilità', 'postura']
    },
    {
      id: 'timing-rhythm',
      title: 'Timing and Rhythm',
      description: 'Understanding timing and rhythm in combat',
      path: '/kumite/principles',
      tags: ['kumite', 'timing', 'rhythm', 'physical', 'coordination', 'timing', 'ritme', 'coördinatie', 'timing', 'rhythmus', 'koordination', 'timing', 'rythme', 'coordination', 'timing', 'ritmo', 'coordinación', 'timing', 'ritmo', 'coordinazione']
    },
    {
      id: 'power-speed',
      title: 'Power and Speed',
      description: 'Developing power and speed in kumite techniques',
      path: '/kumite/principles',
      tags: ['kumite', 'power', 'speed', 'physical', 'strength', 'kracht', 'snelheid', 'sterkte', 'kraft', 'geschwindigkeit', 'stärke', 'puissance', 'vitesse', 'force', 'poder', 'velocidad', 'fuerza', 'potenza', 'velocità', 'forza']
    },

    // Kumite Training
    {
      id: 'kumite-training',
      title: 'Kumite Training',
      description: 'Training methods and progression in kumite',
      path: '/kumite/training',
      tags: ['kumite', 'training', 'progression', 'methods', 'practice', 'training', 'progressie', 'methoden', 'oefening', 'training', 'fortschritt', 'methoden', 'übung', 'entraînement', 'progression', 'méthodes', 'pratique', 'entrenamiento', 'progresión', 'métodos', 'práctica', 'allenamento', 'progressione', 'metodi', 'pratica']
    },

    // Kumite Competition
    {
      id: 'kumite-competition',
      title: 'Kumite Competition',
      description: 'Competition rules, scoring, and tournament preparation',
      path: '/kumite/competition',
      tags: ['kumite', 'competition', 'tournament', 'scoring', 'rules', 'competitie', 'wedstrijd', 'scoring', 'regels', 'wettkampf', 'turnier', 'punktzahlung', 'regeln', 'compétition', 'tournoi', 'score', 'règles', 'competición', 'torneo', 'puntuación', 'reglas', 'competizione', 'torneo', 'punteggio', 'regole']
    },

    // Specific Kumite Types
    {
      id: 'ippon-kumite',
      title: 'Ippon Kumite',
      description: 'One-step sparring with predetermined attacks and defenses',
      path: '/kumite/introduction/types',
      tags: ['kumite', 'ippon', 'one-step', 'basic', 'sparring', 'een-stap', 'basis', 'sparren', 'einstufiger kampf', 'grundlage', 'ein-schritt', 'combat en une étape', 'base', 'combate de un paso', 'básico', 'combattimento di un passo', 'base']
    },
    {
      id: 'sanbon-kumite',
      title: 'Sanbon Kumite',
      description: 'Three-step sparring sequences',
      path: '/kumite/introduction/types',
      tags: ['kumite', 'sanbon', 'three-step', 'intermediate', 'sparring', 'drie-stap', 'tussenliggend', 'dreistufiger kampf', 'mittleres niveau', 'drei-schritt', 'combat en trois étapes', 'niveau intermédiaire', 'combate de tres pasos', 'nivel intermedio', 'combattimento di tre passi', 'livello intermedio']
    },
    {
      id: 'gohon-kumite',
      title: 'Gohon Kumite',
      description: 'Five-step sparring sequences',
      path: '/kumite/introduction/types',
      tags: ['kumite', 'gohon', 'five-step', 'advanced', 'sparring', 'vijf-stap', 'gevorderd', 'fünfstufiger kampf', 'fortgeschritten', 'fünf-schritt', 'combat en cinq étapes', 'niveau avancé', 'combate de cinco pasos', 'nivel avanzado', 'combattimento di cinque passi', 'livello avanzato']
    },
    {
      id: 'jiyu-kumite',
      title: 'Jiyu Kumite',
      description: 'Free sparring without restrictions',
      path: '/kumite/introduction/types',
      tags: ['kumite', 'jiyu', 'free', 'sparring', 'unrestricted', 'vrij', 'onbeperkt', 'freier kampf', 'unbeschränkt', 'combat libre', 'sans restrictions', 'combate libre', 'sin restricciones', 'combattimento libero', 'senza restrizioni']
    },
    {
      id: 'shiai-kumite',
      title: 'Shiai Kumite',
      description: 'Rule-based competitive sparring',
      path: '/kumite/introduction/types',
      tags: ['kumite', 'shiai', 'competition', 'rules', 'tournament', 'wedstrijd', 'regelgebaseerd', 'wettkampf', 'regelbasiert', 'compétition', 'basé sur des règles', 'competición', 'basado en reglas', 'competizione', 'basato su regole']
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
    },
    {
      id: 'sparring-search',
      title: 'Sparring',
      description: 'Kumite and sparring techniques in Goju Ryu',
      path: '/kumite',
      tags: ['sparring', 'kumite', 'fighting', 'combat', 'techniques', 'sparren', 'vechten', 'technieken']
    },
    {
      id: 'fighting-search',
      title: 'Fighting',
      description: 'Combat techniques and fighting principles',
      path: '/kumite',
      tags: ['fighting', 'combat', 'kumite', 'techniques', 'principles', 'vechten', 'gevecht', 'principes']
    },
    {
      id: 'mental-principles-search',
      title: 'Mental Principles',
      description: 'Zanshin, Mushin, Fudoshin, and Senshin in kumite',
      path: '/kumite/principles',
      tags: ['mental', 'principles', 'zanshin', 'mushin', 'fudoshin', 'senshin', 'mind', 'mentaal', 'principes', 'geest']
    },
    {
      id: 'tactical-principles-search',
      title: 'Tactical Principles',
      description: 'Ma-ai, Sen, Go No Sen, and Sen No Sen in kumite',
      path: '/kumite/principles',
      tags: ['tactical', 'principles', 'ma-ai', 'sen', 'go-no-sen', 'sen-no-sen', 'strategy', 'tactisch', 'strategie']
    },
    {
      id: 'physical-principles-search',
      title: 'Physical Principles',
      description: 'Balance, timing, power, and speed in kumite',
      path: '/kumite/principles',
      tags: ['physical', 'principles', 'balance', 'timing', 'power', 'speed', 'stance', 'fysiek', 'balans', 'kracht', 'snelheid']
    },
    {
      id: 'attack-search',
      title: 'Attack',
      description: 'Attack techniques and striking in kumite',
      path: '/kumite/techniques/attack',
      tags: ['attack', 'striking', 'tsuki', 'uchi', 'keri', 'offensive', 'aanval', 'slaan', 'offensief']
    },
    {
      id: 'defense-search',
      title: 'Defense',
      description: 'Defense techniques and blocking in kumite',
      path: '/kumite/techniques/defense',
      tags: ['defense', 'blocking', 'uke', 'evasion', 'protective', 'verdediging', 'blokkeren', 'beschermend']
    },
    {
      id: 'throwing-search',
      title: 'Throwing',
      description: 'Throwing and takedown techniques in kumite',
      path: '/kumite/techniques/throwing',
      tags: ['throwing', 'nage', 'takedown', 'grappling', 'wrestling', 'worpen', 'worptechnieken', 'worstelen']
    },
    {
      id: 'competition-search',
      title: 'Competition',
      description: 'Tournament rules, scoring, and competition preparation',
      path: '/kumite/competition',
      tags: ['competition', 'tournament', 'scoring', 'rules', 'shiai', 'competitie', 'wedstrijd', 'scoring', 'regels']
    },
    {
      id: 'training-search',
      title: 'Training',
      description: 'Kumite training methods and progression',
      path: '/kumite/training',
      tags: ['training', 'practice', 'progression', 'methods', 'development', 'training', 'oefening', 'progressie', 'ontwikkeling']
    },
    {
      id: 'safety-search',
      title: 'Safety',
      description: 'Safety guidelines and protective equipment in kumite',
      path: '/kumite/introduction/safety',
      tags: ['safety', 'protection', 'equipment', 'rules', 'guidelines', 'veiligheid', 'bescherming', 'uitrusting', 'richtlijnen']
    },
    {
      id: 'sparren-search',
      title: 'Sparren',
      description: 'Sparring en vechttechnieken in karate',
      path: '/kumite',
      tags: ['sparren', 'kumite', 'vechten', 'technieken', 'sparring', 'fighting', 'combat']
    },
    {
      id: 'aanval-search',
      title: 'Aanval',
      description: 'Aanvalstechnieken en stoot- en traptechnieken',
      path: '/kumite/techniques/attack',
      tags: ['aanval', 'aanvalstechnieken', 'stoten', 'trappen', 'attack', 'striking', 'kicks', 'punches']
    },
    {
      id: 'verdediging-search',
      title: 'Verdediging',
      description: 'Verdedigingstechnieken en blokkeertechnieken',
      path: '/kumite/techniques/defense',
      tags: ['verdediging', 'verdedigingstechnieken', 'blokkeren', 'defense', 'blocking', 'protection']
    },
    {
      id: 'worpen-search',
      title: 'Worpen',
      description: 'Worptechnieken en takedown technieken',
      path: '/kumite/techniques/throwing',
      tags: ['worpen', 'worptechnieken', 'takedown', 'throwing', 'nage', 'grappling']
    },
    {
      id: 'principes-search',
      title: 'Principes',
      description: 'Mentale, tactische en fysieke principes van kumite',
      path: '/kumite/principles',
      tags: ['principes', 'mentaal', 'tactisch', 'fysiek', 'principles', 'mental', 'tactical', 'physical']
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

  // Add general content
  const generalContent = [
    {
      id: 'karate-basics',
      title: 'Karate Basics',
      description: 'Fundamental techniques and principles of karate',
      path: '/basics',
      tags: ['karate', 'basics', 'fundamentals', 'techniques', 'principles', 'karate', 'basis', 'fundamenten', 'technieken', 'principes', 'karate', 'grundlagen', 'grundtechniken', 'prinzipien', 'karaté', 'bases', 'fondamentaux', 'techniques', 'principes', 'karate', 'básicos', 'fundamentos', 'técnicas', 'principios', 'karate', 'basi', 'fondamenti', 'tecniche', 'principi']
    },
    {
      id: 'kata-overview',
      title: 'Kata Overview',
      description: 'Traditional forms and their applications',
      path: '/kata',
      tags: ['kata', 'forms', 'traditional', 'applications', 'kata', 'vormen', 'traditioneel', 'toepassingen', 'kata', 'formen', 'traditionell', 'anwendungen', 'kata', 'formes', 'traditionnel', 'applications', 'kata', 'formas', 'tradicional', 'aplicaciones', 'kata', 'forme', 'tradizionale', 'applicazioni']
    },
    {
      id: 'bunkai',
      title: 'Bunkai',
      description: 'Analysis and application of kata movements',
      path: '/kata/bunkai',
      tags: ['bunkai', 'analysis', 'application', 'kata', 'bunkai', 'analyse', 'toepassing', 'kata', 'bunkai', 'analyse', 'anwendung', 'kata', 'bunkai', 'analyse', 'application', 'kata', 'bunkai', 'análisis', 'aplicación', 'kata', 'bunkai', 'analisi', 'applicazione']
    },
    {
      id: 'philosophy',
      title: 'Karate Philosophy',
      description: 'Philosophical aspects and mental training',
      path: '/philosophy',
      tags: ['philosophy', 'mental', 'training', 'zen', 'filosofie', 'mentaal', 'training', 'zen', 'philosophie', 'geistig', 'training', 'zen', 'philosophie', 'mental', 'entraînement', 'zen', 'filosofía', 'mental', 'entrenamiento', 'zen', 'filosofia', 'mentale', 'allenamento', 'zen']
    },
    {
      id: 'history',
      title: 'Karate History',
      description: 'Historical development and lineage',
      path: '/history',
      tags: ['history', 'lineage', 'development', 'geschiedenis', 'afstamming', 'ontwikkeling', 'geschichte', 'abstammung', 'entwicklung', 'histoire', 'lignée', 'développement', 'historia', 'linaje', 'desarrollo', 'storia', 'discendenza', 'sviluppo']
    },
    {
      id: 'terminology',
      title: 'Karate Terminology',
      description: 'Japanese terms and their meanings',
      path: '/terminology',
      tags: ['terminology', 'japanese', 'terms', 'meanings', 'terminologie', 'japans', 'termen', 'betekenissen', 'terminologie', 'japanisch', 'begriffe', 'bedeutungen', 'terminologie', 'japonais', 'termes', 'significations', 'terminología', 'japonés', 'términos', 'significados', 'terminologia', 'giapponese', 'termini', 'significati']
    },
    {
      id: 'equipment',
      title: 'Karate Equipment',
      description: 'Training equipment and protective gear',
      path: '/equipment',
      tags: ['equipment', 'training', 'protective', 'gear', 'uitrusting', 'training', 'beschermend', 'materiaal', 'ausrüstung', 'training', 'schutzausrüstung', 'équipement', 'entraînement', 'protecteur', 'equipamiento', 'entrenamiento', 'protector', 'attrezzatura', 'allenamento', 'protettivo']
    },
    {
      id: 'grading',
      title: 'Grading System',
      description: 'Belt ranks and progression system',
      path: '/grading',
      tags: ['grading', 'belts', 'ranks', 'progression', 'graduatie', 'banden', 'graden', 'progressie', 'graduierung', 'gürtel', 'grade', 'fortschritt', 'graduation', 'ceintures', 'grades', 'progression', 'graduación', 'cinturones', 'grados', 'progresión', 'graduazione', 'cinture', 'gradi', 'progressione']
    },
    {
      id: 'dojo',
      title: 'Dojo Etiquette',
      description: 'Proper behavior and customs in the dojo',
      path: '/dojo',
      tags: ['dojo', 'etiquette', 'behavior', 'customs', 'dojo', 'etiquette', 'gedrag', 'gebruiken', 'dojo', 'etikette', 'verhalten', 'bräuche', 'dojo', 'étiquette', 'comportement', 'coutumes', 'dojo', 'etiqueta', 'comportamiento', 'costumbres', 'dojo', 'etichetta', 'comportamento', 'usanze']
    },
    {
      id: 'training',
      title: 'Training Methods',
      description: 'Various training approaches and methodologies',
      path: '/training',
      tags: ['training', 'methods', 'approaches', 'methodology', 'training', 'methoden', 'benaderingen', 'methodologie', 'training', 'methoden', 'ansätze', 'methodik', 'entraînement', 'méthodes', 'approches', 'méthodologie', 'entrenamiento', 'métodos', 'enfoques', 'metodología', 'allenamento', 'metodi', 'approcci', 'metodologia']
    }
  ];

  generalContent.forEach(item => {
    searchResults.push({
      id: `general-${item.id}`,
      title: item.title,
      description: item.description,
      type: 'terminology',
      path: item.path,
      tags: item.tags
    });
  });

  // Add kata content
  const kataContent = [
    {
      id: 'gekisai-dai-ichi',
      title: 'Gekisai Dai Ichi',
      description: 'First kata in the Goju-Ryu system',
      path: '/kata/gekisai-dai-ichi',
      tags: ['kata', 'gekisai', 'dai-ichi', 'first', 'goju-ryu', 'kata', 'eerste', 'goju-ryu', 'kata', 'erste', 'goju-ryu', 'kata', 'première', 'goju-ryu', 'kata', 'primera', 'goju-ryu', 'kata', 'prima', 'goju-ryu']
    },
    {
      id: 'gekisai-dai-ni',
      title: 'Gekisai Dai Ni',
      description: 'Second kata in the Goju-Ryu system',
      path: '/kata/gekisai-dai-ni',
      tags: ['kata', 'gekisai', 'dai-ni', 'second', 'goju-ryu', 'kata', 'tweede', 'goju-ryu', 'kata', 'zweite', 'goju-ryu', 'kata', 'deuxième', 'goju-ryu', 'kata', 'segunda', 'goju-ryu', 'kata', 'seconda', 'goju-ryu']
    },
    {
      id: 'saifa',
      title: 'Saifa',
      description: 'Advanced kata with tearing techniques',
      path: '/kata/saifa',
      tags: ['kata', 'saifa', 'advanced', 'tearing', 'techniques', 'kata', 'gevorderd', 'scheurtechnieken', 'kata', 'fortgeschritten', 'reißtechniken', 'kata', 'avancé', 'techniques de déchirement', 'kata', 'avanzado', 'técnicas de desgarro', 'kata', 'avanzato', 'tecniche di strappo']
    },
    {
      id: 'seiyunchin',
      title: 'Seiyunchin',
      description: 'Kata emphasizing balance and control',
      path: '/kata/seiyunchin',
      tags: ['kata', 'seiyunchin', 'balance', 'control', 'kata', 'balans', 'controle', 'kata', 'gleichgewicht', 'kontrolle', 'kata', 'équilibre', 'contrôle', 'kata', 'equilibrio', 'control', 'kata', 'equilibrio', 'controllo']
    },
    {
      id: 'shisochin',
      title: 'Shisochin',
      description: 'Kata with four-directional fighting',
      path: '/kata/shisochin',
      tags: ['kata', 'shisochin', 'four-directional', 'fighting', 'kata', 'vier-richtingen', 'vechten', 'kata', 'vierrichtungs', 'kampf', 'kata', 'quatre-directions', 'combat', 'kata', 'cuatro-direcciones', 'combate', 'kata', 'quattro-direzioni', 'combattimento']
    },
    {
      id: 'sanseru',
      title: 'Sanseru',
      description: 'Kata representing 36 hands',
      path: '/kata/sanseru',
      tags: ['kata', 'sanseru', '36', 'hands', 'kata', '36', 'handen', 'kata', '36', 'hände', 'kata', '36', 'mains', 'kata', '36', 'manos', 'kata', '36', 'mani']
    },
    {
      id: 'seisan',
      title: 'Seisan',
      description: 'Kata with 13 hands technique',
      path: '/kata/seisan',
      tags: ['kata', 'seisan', '13', 'hands', 'kata', '13', 'handen', 'kata', '13', 'hände', 'kata', '13', 'mains', 'kata', '13', 'manos', 'kata', '13', 'mani']
    },
    {
      id: 'seipai',
      title: 'Seipai',
      description: 'Kata with 18 hands technique',
      path: '/kata/seipai',
      tags: ['kata', 'seipai', '18', 'hands', 'kata', '18', 'handen', 'kata', '18', 'hände', 'kata', '18', 'mains', 'kata', '18', 'manos', 'kata', '18', 'mani']
    },
    {
      id: 'kururunfa',
      title: 'Kururunfa',
      description: 'Kata with holding and tearing techniques',
      path: '/kata/kururunfa',
      tags: ['kata', 'kururunfa', 'holding', 'tearing', 'techniques', 'kata', 'vasthouden', 'scheuren', 'technieken', 'kata', 'halten', 'reißen', 'techniken', 'kata', 'tenir', 'déchirer', 'techniques', 'kata', 'sostener', 'desgarrar', 'técnicas', 'kata', 'tenere', 'strappare', 'tecniche']
    },
    {
      id: 'suparinpei',
      title: 'Suparinpei',
      description: 'Kata with 108 hands technique',
      path: '/kata/suparinpei',
      tags: ['kata', 'suparinpei', '108', 'hands', 'kata', '108', 'handen', 'kata', '108', 'hände', 'kata', '108', 'mains', 'kata', '108', 'manos', 'kata', '108', 'mani']
    }
  ];

  // Add bunkai content
  const bunkaiContent = [
    {
      id: 'bunkai-basics',
      title: 'Bunkai Basics',
      description: 'Fundamental principles of kata application',
      path: '/kata/bunkai',
      tags: ['bunkai', 'basics', 'principles', 'application', 'bunkai', 'basis', 'principes', 'toepassing', 'bunkai', 'grundlagen', 'prinzipien', 'anwendung', 'bunkai', 'bases', 'principes', 'application', 'bunkai', 'básicos', 'principios', 'aplicación', 'bunkai', 'basi', 'principi', 'applicazione']
    },
    {
      id: 'bunkai-techniques',
      title: 'Bunkai Techniques',
      description: 'Specific techniques found in kata',
      path: '/kata/bunkai',
      tags: ['bunkai', 'techniques', 'kata', 'applications', 'bunkai', 'technieken', 'kata', 'toepassingen', 'bunkai', 'techniken', 'kata', 'anwendungen', 'bunkai', 'techniques', 'kata', 'applications', 'bunkai', 'técnicas', 'kata', 'aplicaciones', 'bunkai', 'tecniche', 'kata', 'applicazioni']
    },
    {
      id: 'oyo-bunkai',
      title: 'Oyo Bunkai',
      description: 'Practical applications of kata movements',
      path: '/kata/bunkai',
      tags: ['bunkai', 'oyo', 'practical', 'applications', 'bunkai', 'praktisch', 'toepassingen', 'bunkai', 'praktisch', 'anwendungen', 'bunkai', 'pratique', 'applications', 'bunkai', 'práctico', 'aplicaciones', 'bunkai', 'pratico', 'applicazioni']
    }
  ];

  // Add kata content to search results
  kataContent.forEach(item => {
    searchResults.push({
      id: `kata-${item.id}`,
      title: item.title,
      description: item.description,
      type: 'kata',
      path: item.path,
      tags: item.tags
    });
  });

  // Add bunkai content to search results
  bunkaiContent.forEach(item => {
    searchResults.push({
      id: `bunkai-${item.id}`,
      title: item.title,
      description: item.description,
      type: 'bunkai',
      path: item.path,
      tags: item.tags
    });
  });

  return searchResults;
};

export const searchIndex = createSearchIndex();

// Search function
export const searchContent = (query: string, language?: string): SearchResult[] => {
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