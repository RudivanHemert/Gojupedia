import { katas, historicalFigures, articles, principles } from './index';
import { techniquesData } from './techniquesData';

export interface SearchResult {
  id: string;
  title: string;
  description: string;
  type: 'kata' | 'technique' | 'hojo-undo' | 'philosophy' | 'terminology' | 'history' | 'theory' | 'newaza' | 'kumite' | 'person' | 'principle' | 'article' | 'bunkai' | 'junbi-undo';
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

  // Add Junbi Undo exercises
  const junbiUndoExercises = [
    {
      id: 'toe-exercises',
      title: 'Toe Exercises',
      description: 'Exercises to improve toe awareness and dexterity',
      path: '/practice/junbi-undo',
      tags: ['junbi-undo', 'warmup', 'preliminary', 'toes', 'flexibility', 'teen oefeningen', 'zehenübungen', 'exercices des orteils', 'ejercicios de dedos de los pies', 'esercizi delle dita dei piedi']
    },
    {
      id: 'heel-pivots',
      title: 'Heel Pivots',
      description: 'Pivoting exercises on the heel for foot control',
      path: '/practice/junbi-undo',
      tags: ['junbi-undo', 'warmup', 'preliminary', 'heels', 'pivots', 'hiel pivots', 'fersen-drehungen', 'pivots du talon', 'pivotes del talón', 'pivot del tallone']
    },
    {
      id: 'ankle-rotation',
      title: 'Ankle Rotation',
      description: 'Ankle flexibility and balance exercises',
      path: '/practice/junbi-undo',
      tags: ['junbi-undo', 'warmup', 'preliminary', 'ankles', 'rotation', 'balance', 'enkel rotatie', 'knöchel-rotation', 'rotation de la cheville', 'rotación del tobillo', 'rotazione della caviglia']
    },
    {
      id: 'knee-strikes',
      title: 'Knee Strikes',
      description: 'Knee strike exercises for coordination',
      path: '/practice/junbi-undo',
      tags: ['junbi-undo', 'warmup', 'preliminary', 'knees', 'strikes', 'knie stoten', 'knie-schläge', 'coups de genou', 'golpes de rodilla', 'colpi di ginocchio']
    },
    {
      id: 'squatting-exercise',
      title: 'Squatting Exercise',
      description: 'Squatting exercises for leg strength',
      path: '/practice/junbi-undo',
      tags: ['junbi-undo', 'warmup', 'preliminary', 'squat', 'legs', 'hurkoefening', 'hockübung', 'exercice d\'accroupissement', 'ejercicio de cuclillas', 'esercizio di squat']
    },
    {
      id: 'shiko-stretches',
      title: 'Shiko Stretches',
      description: 'Stretching exercises in shiko stance',
      path: '/practice/junbi-undo',
      tags: ['junbi-undo', 'warmup', 'preliminary', 'shiko', 'stretches', 'shiko rekoefeningen', 'shiko-dehnungen', 'étirements shiko', 'estiramientos shiko', 'stretching shiko']
    },
    {
      id: 'leg-stretches',
      title: 'Leg Stretches',
      description: 'Leg stretching exercises for flexibility',
      path: '/practice/junbi-undo',
      tags: ['junbi-undo', 'warmup', 'preliminary', 'legs', 'stretches', 'flexibility', 'been rekoefeningen', 'bein-dehnungen', 'étirements des jambes', 'estiramientos de piernas', 'stretching delle gambe']
    },
    {
      id: 'weight-transfer',
      title: 'Weight Transfer',
      description: 'Weight transfer exercises for balance',
      path: '/practice/junbi-undo',
      tags: ['junbi-undo', 'warmup', 'preliminary', 'weight', 'transfer', 'balance', 'gewichtsoverdracht', 'gewichtsverlagerung', 'transfert de poids', 'transferencia de peso', 'trasferimento di peso']
    },
    {
      id: 'hip-rotation',
      title: 'Hip Rotation',
      description: 'Hip rotation exercises for mobility',
      path: '/practice/junbi-undo',
      tags: ['junbi-undo', 'warmup', 'preliminary', 'hips', 'rotation', 'mobility', 'heup rotatie', 'hüft-rotation', 'rotation des hanches', 'rotación de caderas', 'rotazione dell\'anca']
    },
    {
      id: 'arm-stretches',
      title: 'Arm Stretches',
      description: 'Arm stretching exercises for flexibility',
      path: '/practice/junbi-undo',
      tags: ['junbi-undo', 'warmup', 'preliminary', 'arms', 'stretches', 'flexibility', 'arm rekoefeningen', 'arm-dehnungen', 'étirements des bras', 'estiramientos de brazos', 'stretching delle braccia']
    },
    {
      id: 'arm-swings',
      title: 'Arm Swings',
      description: 'Arm swinging exercises for coordination',
      path: '/practice/junbi-undo',
      tags: ['junbi-undo', 'warmup', 'preliminary', 'arms', 'swings', 'coordination', 'arm zwaaien', 'arm-schwünge', 'balancements des bras', 'balanceos de brazos', 'oscillazioni delle braccia']
    },
    {
      id: 'wrist-flexibility',
      title: 'Wrist Flexibility',
      description: 'Wrist flexibility exercises for hand control',
      path: '/practice/junbi-undo',
      tags: ['junbi-undo', 'warmup', 'preliminary', 'wrists', 'flexibility', 'hands', 'pols flexibiliteit', 'handgelenk-flexibilität', 'flexibilité du poignet', 'flexibilidad de muñeca', 'flessibilità del polso']
    },
    {
      id: 'fist-formation',
      title: 'Fist Formation',
      description: 'Fist formation exercises for hand strength',
      path: '/practice/junbi-undo',
      tags: ['junbi-undo', 'warmup', 'preliminary', 'fists', 'hands', 'strength', 'vuist vorming', 'faust-bildung', 'formation du poing', 'formación de puño', 'formazione del pugno']
    },
    {
      id: 'palm-pressure',
      title: 'Palm Pressure',
      description: 'Palm pressure exercises for hand control',
      path: '/practice/junbi-undo',
      tags: ['junbi-undo', 'warmup', 'preliminary', 'palms', 'pressure', 'hands', 'handpalm druk', 'handflächen-druck', 'pression de la paume', 'presión de palma', 'pressione del palmo']
    },
    {
      id: 'head-movements',
      title: 'Head Movements',
      description: 'Head movement exercises for neck flexibility',
      path: '/practice/junbi-undo',
      tags: ['junbi-undo', 'warmup', 'preliminary', 'head', 'neck', 'movements', 'hoofd bewegingen', 'kopf-bewegungen', 'mouvements de la tête', 'movimientos de cabeza', 'movimenti della testa']
    },
    {
      id: 'neck-stretches',
      title: 'Neck Stretches',
      description: 'Neck stretching exercises for flexibility',
      path: '/practice/junbi-undo',
      tags: ['junbi-undo', 'warmup', 'preliminary', 'neck', 'stretches', 'flexibility', 'nek rekoefeningen', 'nacken-dehnungen', 'étirements du cou', 'estiramientos de cuello', 'stretching del collo']
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
      tags: ['kumite', 'competition', 'tournament', 'scoring', 'rules', 'competitie', 'wedstrijd', 'scoring', 'regels', 'competición', 'torneo', 'puntuación', 'reglas', 'competizione', 'torneo', 'punteggio', 'regole']
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

export const searchIndex = createSearchIndex();

// Search function
export const searchContent = (query: string, language?: string): SearchResult[] => {
  if (!query.trim()) return [];
  
  const searchTerm = query.toLowerCase();
  
  // Start with the original searchIndex
  let results = [...searchIndex];
  
  // Add Dutch-specific search terms if language is Dutch
  if (language === 'nl') {
    const dutchTerms = [
      {
        id: 'sparren-search',
        title: 'Sparren',
        description: 'Sparring en vechttechnieken in karate',
        path: '/kumite',
        tags: ['sparren', 'kumite', 'vechten', 'technieken', 'sparring', 'fighting', 'combat'],
        type: 'terminology' as const
      },
      {
        id: 'aanval-search',
        title: 'Aanval',
        description: 'Aanvalstechnieken en stoot- en traptechnieken',
        path: '/kumite/techniques/attack',
        tags: ['aanval', 'aanvalstechnieken', 'stoten', 'trappen', 'attack', 'striking', 'kicks', 'punches'],
        type: 'terminology' as const
      },
      {
        id: 'verdediging-search',
        title: 'Verdediging',
        description: 'Verdedigingstechnieken en blokkeertechnieken',
        path: '/kumite/techniques/defense',
        tags: ['verdediging', 'verdedigingstechnieken', 'blokkeren', 'defense', 'blocking', 'protection'],
        type: 'terminology' as const
      },
      {
        id: 'worpen-search',
        title: 'Worpen',
        description: 'Throwing and takedown techniques in kumite',
        path: '/kumite/techniques/throwing',
        tags: ['worpen', 'worptechnieken', 'takedown', 'throwing', 'nage', 'grappling'],
        type: 'terminology' as const
      },
      {
        id: 'principes-search',
        title: 'Principes',
        description: 'Mentale, tactische en fysieke principes van kumite',
        path: '/kumite/principles',
        tags: ['principes', 'mentaal', 'tactisch', 'fysiek', 'principles', 'mental', 'tactical', 'physical'],
        type: 'terminology' as const
      },
      {
        id: 'competitie-search',
        title: 'Competitie',
        description: 'Wedstrijdregels en toernooivoorbereiding',
        path: '/kumite/competition',
        tags: ['competitie', 'wedstrijd', 'toernooi', 'regels', 'competition', 'tournament', 'rules'],
        type: 'terminology' as const
      },
      {
        id: 'training-search',
        title: 'Training',
        description: 'Kumite trainingsmethoden en progressie',
        path: '/kumite/training',
        tags: ['training', 'oefening', 'progressie', 'methoden', 'practice', 'progression', 'methods'],
        type: 'terminology' as const
      },
      {
        id: 'veiligheid-search',
        title: 'Veiligheid',
        description: 'Veiligheidsrichtlijnen en beschermende uitrusting',
        path: '/kumite/introduction/safety',
        tags: ['veiligheid', 'bescherming', 'uitrusting', 'richtlijnen', 'safety', 'protection', 'equipment'],
        type: 'terminology' as const
      }
    ];

    results = [...results, ...dutchTerms];
  }
  
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