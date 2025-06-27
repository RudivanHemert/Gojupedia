import React, { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';
import { searchContent, SearchResult } from '@/data/searchIndex';

const SearchPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  // Helper function to get translation key based on item type and id
  const getTranslationKey = (item: SearchResult): string | null => {
    switch (item.type) {
      case 'kumite':
        return getKumiteTranslationKey(item);
      case 'technique':
        return getTechniqueTranslationKey(item);
      case 'kata':
        return `kata.${item.id.replace('kata-', '')}.name`;
      case 'philosophy':
        return `philosophy.${item.id.replace('philosophy-', '')}.title`;
      case 'theory':
        return `theory.${item.id.replace('theory-', '')}.title`;
      case 'newaza':
        return `newaza.${item.id.replace('newaza-', '')}.title`;
      case 'hojo-undo':
        return `hojoUndo.${item.id.replace('hojo-undo-', '')}.title`;
      case 'junbi-undo':
        return `junbiUndo.exercises.list.${item.id.replace('junbi-undo-', '').replace('-', '_')}.name`;
      default:
        return null;
    }
  };

  // Helper function to get kumite translation keys
  const getKumiteTranslationKey = (item: SearchResult): string | null => {
    const kumiteKeyMap: Record<string, string> = {
      'kumite-intro': 'kumite.introduction.title',
      'what-is-kumite': 'kumite.introduction.what-is',
      'types-of-kumite': 'kumite.introduction.types-title',
      'safety-rules': 'kumite.introduction.safety-title',
      'attack-techniques': 'kumite.techniques.attack-techniques',
      'defense-techniques': 'kumite.techniques.defense-techniques',
      'throwing-techniques': 'kumite.techniques.throwing-techniques',
      'kumite-principles': 'kumite.principles.title',
      'kumite-training': 'kumite.training.title',
      'kumite-competition': 'kumite.competition.title',
      'zanshin': 'kumite.principles.mental.zanshin.name',
      'mushin': 'kumite.principles.mental.mushin.name',
      'fudoshin': 'kumite.principles.mental.fudoshin.name',
      'senshin': 'kumite.principles.mental.senshin.name',
      'ma-ai': 'kumite.principles.tactical.ma-ai.name',
      'sen': 'kumite.principles.tactical.sen.name',
      'go-no-sen': 'kumite.principles.tactical.go-no-sen.name',
      'sen-no-sen': 'kumite.principles.tactical.sen-no-sen.name',
      'balance-stability': 'kumite.principles.physical.balance.name',
      'timing-rhythm': 'kumite.principles.physical.timing.name',
      'power-speed': 'kumite.principles.physical.power.name',
      'ippon-kumite': 'kumite.introduction.types.ippon.title',
      'sanbon-kumite': 'kumite.introduction.types.sanbon.title',
      'gohon-kumite': 'kumite.introduction.types.gohon.title',
      'jiyu-kumite': 'kumite.introduction.types.jiyu.title',
      'shiai-kumite': 'kumite.introduction.types.shiai.title'
    };
    return kumiteKeyMap[item.id.replace('kumite-', '')] || null;
  };

  // Helper function to get technique translation keys
  const getTechniqueTranslationKey = (item: SearchResult): string | null => {
    const techniqueKeyMap: Record<string, string> = {
      'gyaku-tsuki': 'techniques.punches.gyaku-tsuki.name',
      'oi-tsuki': 'techniques.punches.oi-tsuki.name',
      'mae-geri': 'techniques.kicks.mae-geri.name',
      'mawashi-geri': 'techniques.kicks.mawashi-geri.name',
      'yoko-geri': 'techniques.kicks.yoko-geri.name',
      'ushiro-geri': 'techniques.kicks.ushiro-geri.name',
      'jodan-uke': 'techniques.blocks.jodan-uke.name',
      'chudan-uke': 'techniques.blocks.chudan-uke.name',
      'gedan-uke': 'techniques.blocks.gedan-uke.name',
      'age-uke': 'techniques.blocks.age-uke.name',
      'gedan-barai': 'techniques.blocks.gedan-barai.name',
      'soto-uke': 'techniques.blocks.soto-uke.name'
    };
    return techniqueKeyMap[item.id.replace('technique-', '')] || null;
  };

  // Helper function to get translated titles
  const getTranslatedTitle = (item: SearchResult, language: string): string => {
    // Special handling for history/person content
    if (item.type === 'history' || item.type === 'person') {
      const historyTranslations: Record<string, Record<string, string>> = {
        'history-chojun-miyagi': {
          'nl': 'Chojun Miyagi',
          'de': 'Chojun Miyagi',
          'fr': 'Chojun Miyagi',
          'es': 'Chojun Miyagi',
          'it': 'Chojun Miyagi'
        },
        'history-kanryo-higaonna': {
          'nl': 'Kanryo Higaonna',
          'de': 'Kanryo Higaonna',
          'fr': 'Kanryo Higaonna',
          'es': 'Kanryo Higaonna',
          'it': 'Kanryo Higaonna'
        },
        'history-anichi-miyagi': {
          'nl': 'Anichi Miyagi',
          'de': 'Anichi Miyagi',
          'fr': 'Anichi Miyagi',
          'es': 'Anichi Miyagi',
          'it': 'Anichi Miyagi'
        },
        'history-morio-higaonna': {
          'nl': 'Morio Higaonna',
          'de': 'Morio Higaonna',
          'fr': 'Morio Higaonna',
          'es': 'Morio Higaonna',
          'it': 'Morio Higaonna'
        },
        'history-tetsuji-nakamura': {
          'nl': 'Tetsuji Nakamura',
          'de': 'Tetsuji Nakamura',
          'fr': 'Tetsuji Nakamura',
          'es': 'Tetsuji Nakamura',
          'it': 'Tetsuji Nakamura'
        }
      };

      const translation = historyTranslations[item.id]?.[language];
      if (translation) {
        return translation;
      }
    }

    // Special handling for kumite content
    if (item.type === 'kumite') {
      const kumiteTranslations: Record<string, Record<string, string>> = {
        'kumite-intro': {
          'nl': 'Kumite Inleiding',
          'de': 'Kumite Einführung',
          'fr': 'Introduction au Kumite',
          'es': 'Introducción al Kumite',
          'it': 'Introduzione al Kumite'
        },
        'attack-techniques': {
          'nl': 'Aanvalstechnieken',
          'de': 'Angriffstechniken',
          'fr': 'Techniques d\'attaque',
          'es': 'Técnicas de ataque',
          'it': 'Tecniche di attacco'
        },
        'defense-techniques': {
          'nl': 'Verdedigingstechnieken',
          'de': 'Verteidigungstechniken',
          'fr': 'Techniques de défense',
          'es': 'Técnicas de defensa',
          'it': 'Tecniche di difesa'
        },
        'throwing-techniques': {
          'nl': 'Worptechnieken',
          'de': 'Wurftechniken',
          'fr': 'Techniques de projection',
          'es': 'Técnicas de proyección',
          'it': 'Tecniche di proiezione'
        },
        'kumite-principles': {
          'nl': 'Kumite Principes',
          'de': 'Kumite Prinzipien',
          'fr': 'Principes du Kumite',
          'es': 'Principios del Kumite',
          'it': 'Principi del Kumite'
        },
        'kumite-training': {
          'nl': 'Kumite Training',
          'de': 'Kumite Training',
          'fr': 'Entraînement Kumite',
          'es': 'Entrenamiento Kumite',
          'it': 'Allenamento Kumite'
        },
        'kumite-competition': {
          'nl': 'Kumite Competitie',
          'de': 'Kumite Wettkampf',
          'fr': 'Compétition Kumite',
          'es': 'Competición Kumite',
          'it': 'Competizione Kumite'
        }
      };

      const translation = kumiteTranslations[item.id]?.[language];
      if (translation) {
        return translation;
      }
    }

    // Special handling for junbi-undo content
    if (item.type === 'junbi-undo') {
      const junbiUndoTranslations: Record<string, Record<string, string>> = {
        'junbi-undo-toe-exercises': {
          'nl': 'Teen Oefeningen',
          'de': 'Zehenübungen',
          'fr': 'Exercices des Orteils',
          'es': 'Ejercicios de Dedos de los Pies',
          'it': 'Esercizi delle Dita dei Piedi'
        },
        'junbi-undo-heel-pivots': {
          'nl': 'Hiel Pivots',
          'de': 'Fersen-Drehungen',
          'fr': 'Pivots du Talon',
          'es': 'Pivotes del Talón',
          'it': 'Pivot del Tallone'
        },
        'junbi-undo-ankle-rotation': {
          'nl': 'Enkel Rotatie',
          'de': 'Knöchel-Rotation',
          'fr': 'Rotation de la Cheville',
          'es': 'Rotación del Tobillo',
          'it': 'Rotazione della Caviglia'
        },
        'junbi-undo-knee-strikes': {
          'nl': 'Knie Stoten',
          'de': 'Knie-Schläge',
          'fr': 'Coups de Genou',
          'es': 'Golpes de Rodilla',
          'it': 'Colpi di Ginocchio'
        },
        'junbi-undo-squatting-exercise': {
          'nl': 'Hurkoefening',
          'de': 'Hockübung',
          'fr': 'Exercice d\'Accroupissement',
          'es': 'Ejercicio de Cuclillas',
          'it': 'Esercizio di Squat'
        },
        'junbi-undo-shiko-stretches': {
          'nl': 'Shiko Rekoefeningen',
          'de': 'Shiko-Dehnungen',
          'fr': 'Étirements Shiko',
          'es': 'Estiramientos Shiko',
          'it': 'Stretching Shiko'
        },
        'junbi-undo-leg-stretches': {
          'nl': 'Been Rekoefeningen',
          'de': 'Bein-Dehnungen',
          'fr': 'Étirements des Jambes',
          'es': 'Estiramientos de Piernas',
          'it': 'Stretching delle Gambe'
        },
        'junbi-undo-weight-transfer': {
          'nl': 'Gewichtsoverdracht',
          'de': 'Gewichtsverlagerung',
          'fr': 'Transfert de Poids',
          'es': 'Transferencia de Peso',
          'it': 'Trasferimento di Peso'
        },
        'junbi-undo-hip-rotation': {
          'nl': 'Heup Rotatie',
          'de': 'Hüft-Rotation',
          'fr': 'Rotation des Hanches',
          'es': 'Rotación de Caderas',
          'it': 'Rotazione dell\'Anca'
        },
        'junbi-undo-arm-stretches': {
          'nl': 'Arm Rekoefeningen',
          'de': 'Arm-Dehnungen',
          'fr': 'Étirements des Bras',
          'es': 'Estiramientos de Brazos',
          'it': 'Stretching delle Braccia'
        },
        'junbi-undo-arm-swings': {
          'nl': 'Arm Zwaaien',
          'de': 'Arm-Schwünge',
          'fr': 'Balancements des Bras',
          'es': 'Balanceos de Brazos',
          'it': 'Oscillazioni delle Braccia'
        },
        'junbi-undo-wrist-flexibility': {
          'nl': 'Pols Flexibiliteit',
          'de': 'Handgelenk-Flexibilität',
          'fr': 'Flexibilité du Poignet',
          'es': 'Flexibilidad de Muñeca',
          'it': 'Flessibilità del Polso'
        },
        'junbi-undo-fist-formation': {
          'nl': 'Vuist Vorming',
          'de': 'Faust-Bildung',
          'fr': 'Formation du Poing',
          'es': 'Formación de Puño',
          'it': 'Formazione del Pugno'
        },
        'junbi-undo-palm-pressure': {
          'nl': 'Handpalm Druk',
          'de': 'Handflächen-Druck',
          'fr': 'Pression de la Paume',
          'es': 'Presión de Palma',
          'it': 'Pressione del Palmo'
        },
        'junbi-undo-head-movements': {
          'nl': 'Hoofd Bewegingen',
          'de': 'Kopf-Bewegungen',
          'fr': 'Mouvements de la Tête',
          'es': 'Movimientos de Cabeza',
          'it': 'Movimenti della Testa'
        },
        'junbi-undo-neck-stretches': {
          'nl': 'Nek Rekoefeningen',
          'de': 'Nacken-Dehnungen',
          'fr': 'Étirements du Cou',
          'es': 'Estiramientos de Cuello',
          'it': 'Stretching del Collo'
        }
      };

      const translation = junbiUndoTranslations[item.id]?.[language];
      if (translation) {
        return translation;
      }
    }

    // Special handling for philosophy content
    if (item.type === 'philosophy') {
      const philosophyTranslations: Record<string, Record<string, string>> = {
        'philosophy-dojo-kun': {
          'nl': 'Dojo Kun',
          'de': 'Dojo Kun',
          'fr': 'Dojo Kun',
          'es': 'Dojo Kun',
          'it': 'Dojo Kun'
        },
        'philosophy-budo': {
          'nl': 'Budo',
          'de': 'Budo',
          'fr': 'Budo',
          'es': 'Budo',
          'it': 'Budo'
        },
        'philosophy-kumite-philosophy': {
          'nl': 'Kumite Filosofie',
          'de': 'Kumite Philosophie',
          'fr': 'Philosophie du Kumite',
          'es': 'Filosofía del Kumite',
          'it': 'Filosofia del Kumite'
        },
        'philosophy-mental-discipline': {
          'nl': 'Mentale Discipline',
          'de': 'Mentale Disziplin',
          'fr': 'Discipline Mentale',
          'es': 'Disciplina Mental',
          'it': 'Disciplina Mentale'
        },
        'philosophy-combat-ethics': {
          'nl': 'Gevechtsethiek',
          'de': 'Kampfethik',
          'fr': 'Éthique du Combat',
          'es': 'Ética del Combate',
          'it': 'Etica del Combattimento'
        }
      };

      const translation = philosophyTranslations[item.id]?.[language];
      if (translation) {
        return translation;
      }
    }

    // Special handling for general content
    const generalTranslations: Record<string, Record<string, string>> = {
      'general-karate-basics': {
        'nl': 'Karate Basis',
        'de': 'Karate Grundlagen',
        'fr': 'Bases du Karaté',
        'es': 'Básicos del Karate',
        'it': 'Basi del Karate'
      },
      'general-kata-overview': {
        'nl': 'Kata Overzicht',
        'de': 'Kata Übersicht',
        'fr': 'Aperçu des Kata',
        'es': 'Resumen de Kata',
        'it': 'Panoramica Kata'
      },
      'general-bunkai': {
        'nl': 'Bunkai',
        'de': 'Bunkai',
        'fr': 'Bunkai',
        'es': 'Bunkai',
        'it': 'Bunkai'
      },
      'general-philosophy': {
        'nl': 'Karate Filosofie',
        'de': 'Karate Philosophie',
        'fr': 'Philosophie du Karaté',
        'es': 'Filosofía del Karate',
        'it': 'Filosofia del Karate'
      },
      'general-history': {
        'nl': 'Karate Geschiedenis',
        'de': 'Karate Geschichte',
        'fr': 'Histoire du Karaté',
        'es': 'Historia del Karate',
        'it': 'Storia del Karate'
      },
      'general-terminology': {
        'nl': 'Karate Terminologie',
        'de': 'Karate Terminologie',
        'fr': 'Terminologie du Karaté',
        'es': 'Terminología del Karate',
        'it': 'Terminologia del Karate'
      },
      'general-equipment': {
        'nl': 'Karate Uitrusting',
        'de': 'Karate Ausrüstung',
        'fr': 'Équipement de Karaté',
        'es': 'Equipamiento de Karate',
        'it': 'Attrezzatura Karate'
      },
      'general-grading': {
        'nl': 'Graduatiesysteem',
        'de': 'Graduierungssystem',
        'fr': 'Système de Graduation',
        'es': 'Sistema de Graduación',
        'it': 'Sistema di Graduazione'
      },
      'general-dojo': {
        'nl': 'Dojo Etiquette',
        'de': 'Dojo Etikette',
        'fr': 'Étiquette du Dojo',
        'es': 'Etiqueta del Dojo',
        'it': 'Etichetta del Dojo'
      },
      'general-training': {
        'nl': 'Trainingsmethoden',
        'de': 'Trainingsmethoden',
        'fr': 'Méthodes d\'Entraînement',
        'es': 'Métodos de Entrenamiento',
        'it': 'Metodi di Allenamento'
      },
      'kata-gekisai-dai-ichi': {
        'nl': 'Gekisai Dai Ichi',
        'de': 'Gekisai Dai Ichi',
        'fr': 'Gekisai Dai Ichi',
        'es': 'Gekisai Dai Ichi',
        'it': 'Gekisai Dai Ichi'
      },
      'kata-gekisai-dai-ni': {
        'nl': 'Gekisai Dai Ni',
        'de': 'Gekisai Dai Ni',
        'fr': 'Gekisai Dai Ni',
        'es': 'Gekisai Dai Ni',
        'it': 'Gekisai Dai Ni'
      },
      'kata-saifa': {
        'nl': 'Saifa',
        'de': 'Saifa',
        'fr': 'Saifa',
        'es': 'Saifa',
        'it': 'Saifa'
      },
      'kata-seiyunchin': {
        'nl': 'Seiyunchin',
        'de': 'Seiyunchin',
        'fr': 'Seiyunchin',
        'es': 'Seiyunchin',
        'it': 'Seiyunchin'
      },
      'kata-shisochin': {
        'nl': 'Shisochin',
        'de': 'Shisochin',
        'fr': 'Shisochin',
        'es': 'Shisochin',
        'it': 'Shisochin'
      },
      'kata-sanseru': {
        'nl': 'Sanseru',
        'de': 'Sanseru',
        'fr': 'Sanseru',
        'es': 'Sanseru',
        'it': 'Sanseru'
      },
      'kata-seisan': {
        'nl': 'Seisan',
        'de': 'Seisan',
        'fr': 'Seisan',
        'es': 'Seisan',
        'it': 'Seisan'
      },
      'kata-seipai': {
        'nl': 'Seipai',
        'de': 'Seipai',
        'fr': 'Seipai',
        'es': 'Seipai',
        'it': 'Seipai'
      },
      'kata-kururunfa': {
        'nl': 'Kururunfa',
        'de': 'Kururunfa',
        'fr': 'Kururunfa',
        'es': 'Kururunfa',
        'it': 'Kururunfa'
      },
      'kata-suparinpei': {
        'nl': 'Suparinpei',
        'de': 'Suparinpei',
        'fr': 'Suparinpei',
        'es': 'Suparinpei',
        'it': 'Suparinpei'
      },
      'kata-tensho': {
        'nl': 'Tensho',
        'de': 'Tensho',
        'fr': 'Tensho',
        'es': 'Tensho',
        'it': 'Tensho'
      },
      'kata-sanchin': {
        'nl': 'Fundamentele kata voor ademhaling en interne kracht',
        'de': 'Grundlegende Kata für Atmung und innere Kraft',
        'fr': 'Kata fondamental pour la respiration et la force interne',
        'es': 'Kata fundamental para respiración y fuerza interna',
        'it': 'Kata fondamentale per respirazione e forza interna'
      },
      // Search index specific terms
      'term-higaonna-search': {
        'nl': 'Historische figuren in Goju Ryu: Kanryo Higaonna en Morio Higaonna',
        'de': 'Historische Figuren im Goju Ryu: Kanryo Higaonna und Morio Higaonna',
        'fr': 'Figures historiques du Goju Ryu: Kanryo Higaonna et Morio Higaonna',
        'es': 'Figuras históricas del Goju Ryu: Kanryo Higaonna y Morio Higaonna',
        'it': 'Figure storiche del Goju Ryu: Kanryo Higaonna e Morio Higaonna'
      },
      'term-miyagi-search': {
        'nl': 'Chojun Miyagi, grondlegger van Goju Ryu karate',
        'de': 'Chojun Miyagi, Gründer des Goju Ryu Karate',
        'fr': 'Chojun Miyagi, fondateur du karaté Goju Ryu',
        'es': 'Chojun Miyagi, fundador del karate Goju Ryu',
        'it': 'Chojun Miyagi, fondatore del karate Goju Ryu'
      },
      'term-sparring-search': {
        'nl': 'Kumite en sparring technieken in Goju Ryu',
        'de': 'Kumite und Sparring-Techniken im Goju Ryu',
        'fr': 'Techniques de kumite et sparring en Goju Ryu',
        'es': 'Técnicas de kumite y sparring en Goju Ryu',
        'it': 'Tecniche di kumite e sparring nel Goju Ryu'
      },
      'term-fighting-search': {
        'nl': 'Gevechtstechnieken en vechtprincipes',
        'de': 'Kampftechniken und Kampfprinzipien',
        'fr': 'Techniques de combat et principes de combat',
        'es': 'Técnicas de combate y principios de combate',
        'it': 'Tecniche di combattimento e principi di combattimento'
      },
      'term-mental-principles-search': {
        'nl': 'Zanshin, Mushin, Fudoshin en Senshin in kumite',
        'de': 'Zanshin, Mushin, Fudoshin und Senshin im Kumite',
        'fr': 'Zanshin, Mushin, Fudoshin et Senshin en kumite',
        'es': 'Zanshin, Mushin, Fudoshin y Senshin en kumite',
        'it': 'Zanshin, Mushin, Fudoshin e Senshin nel kumite'
      },
      'term-tactical-principles-search': {
        'nl': 'Ma-ai, Sen, Go No Sen en Sen No Sen in kumite',
        'de': 'Ma-ai, Sen, Go No Sen und Sen No Sen im Kumite',
        'fr': 'Ma-ai, Sen, Go No Sen et Sen No Sen en kumite',
        'es': 'Ma-ai, Sen, Go No Sen y Sen No Sen en kumite',
        'it': 'Ma-ai, Sen, Go No Sen e Sen No Sen nel kumite'
      },
      'term-physical-principles-search': {
        'nl': 'Balans, timing, kracht en snelheid in kumite',
        'de': 'Gleichgewicht, Timing, Kraft und Geschwindigkeit im Kumite',
        'fr': 'Équilibre, timing, puissance et vitesse en kumite',
        'es': 'Equilibrio, timing, poder y velocidad en kumite',
        'it': 'Equilibrio, timing, potenza e velocità nel kumite'
      },
      'term-attack-search': {
        'nl': 'Aanvalstechnieken en stoot- en traptechnieken in kumite',
        'de': 'Angriffstechniken und Schlag- und Tritttechniken im Kumite',
        'fr': 'Techniques d\'attaque et coups de poing et de pied en kumite',
        'es': 'Técnicas de ataque y golpes de puño y patada en kumite',
        'it': 'Tecniche di attacco e colpi di pugno e calcio nel kumite'
      },
      'term-defense-search': {
        'nl': 'Verdedigingstechnieken en blokkeertechnieken in kumite',
        'de': 'Verteidigungstechniken und Blocktechniken im Kumite',
        'fr': 'Techniques défensives et techniques de blocage en kumite',
        'es': 'Técnicas defensivas y técnicas de bloqueo en kumite',
        'it': 'Tecniche difensive e tecniche di parata nel kumite'
      },
      'term-throwing-search': {
        'nl': 'Worptechnieken en takedown technieken in kumite',
        'de': 'Wurftechniken und Takedown-Techniken im Kumite',
        'fr': 'Techniques de projection et takedown en kumite',
        'es': 'Técnicas de proyección y derribo en kumite',
        'it': 'Tecniche di proiezione e takedown nel kumite'
      },
      'term-competition-search': {
        'nl': 'Wedstrijdregels, scoring en toernooivoorbereiding',
        'de': 'Wettkampfregeln, Bewertung und Turniervorbereitung',
        'fr': 'Règles de compétition, notation et préparation aux tournois',
        'es': 'Reglas de competición, puntuación y preparación para torneos',
        'it': 'Regole di competizione, punteggio e preparazione ai tornei'
      },
      'term-training-search': {
        'nl': 'Kumite trainingsmethoden en progressie',
        'de': 'Kumite-Trainingsmethoden und Fortschritt',
        'fr': 'Méthodes d\'entraînement kumite et progression',
        'es': 'Métodos de entrenamiento kumite y progresión',
        'it': 'Metodi di allenamento kumite e progressione'
      },
      'term-safety-search': {
        'nl': 'Veiligheidsrichtlijnen en beschermende uitrusting in kumite',
        'de': 'Sicherheitsrichtlinien und Schutzausrüstung im Kumite',
        'fr': 'Directives de sécurité et équipement de protection en kumite',
        'es': 'Directrices de seguridad y equipo protector en kumite',
        'it': 'Linee guida di sicurezza e equipaggiamento protettivo nel kumite'
      },
      'term-sparren-search': {
        'nl': 'Sparring en vechttechnieken in karate',
        'de': 'Sparring und Kampftechniken im Karate',
        'fr': 'Sparring et techniques de combat en karaté',
        'es': 'Sparring y técnicas de combate en karate',
        'it': 'Sparring e tecniche di combattimento nel karate'
      },
      'term-aanval-search': {
        'nl': 'Aanvalstechnieken en stoot- en traptechnieken',
        'de': 'Angriffstechniken und Schlag- und Tritttechniken',
        'fr': 'Techniques d\'attaque et coups de poing et de pied',
        'es': 'Técnicas de ataque y golpes de puño y patada',
        'it': 'Tecniche di attacco e colpi di pugno e calcio'
      },
      'term-verdediging-search': {
        'nl': 'Verdedigingstechnieken en blokkeertechnieken',
        'de': 'Verteidigungstechniken und Blocktechniken',
        'fr': 'Techniques défensives et techniques de blocage',
        'es': 'Técnicas defensivas y técnicas de bloqueo',
        'it': 'Tecniche difensive e tecniche di parata'
      },
      'term-worpen-search': {
        'nl': 'Worptechnieken en takedown technieken',
        'de': 'Wurftechniken und Takedown-Techniken',
        'fr': 'Techniques de projection et takedown',
        'es': 'Técnicas de proyección y derribo',
        'it': 'Tecniche di proiezione e takedown'
      },
      'term-principes-search': {
        'nl': 'Mentale, tactische en fysieke principes van kumite',
        'de': 'Mentale, taktische und physische Prinzipien des Kumite',
        'fr': 'Principes mentaux, tactiques et physiques du kumite',
        'es': 'Principios mentales, tácticos y físicos del kumite',
        'it': 'Principi mentali, tattici e fisici del kumite'
      }
    };

    const generalTranslation = generalTranslations[item.id]?.[language];
    if (generalTranslation) {
      return generalTranslation;
    }

    // Try to get translation from i18n system
    const translationKey = getTranslationKey(item);
    if (translationKey) {
      return t(translationKey, item.title);
    }

    return item.title;
  };

  // Helper function to get translated descriptions
  const getTranslatedDescription = (item: SearchResult, language: string): string => {
    // Special handling for history/person content
    if (item.type === 'history' || item.type === 'person') {
      const historyDescriptions: Record<string, Record<string, string>> = {
        'history-chojun-miyagi': {
          'nl': 'Grondlegger van Goju Ryu karate. Na de dood van zijn leraar Kanryo Higaonna reisde Miyagi naar China om zijn studie van krijgskunsten voort te zetten. Later synthetiseerde hij zijn kennis tot wat bekend zou worden als Goju Ryu, genoemd naar de principes van \'go\' (hard) en \'ju\' (zacht).',
          'de': 'Gründer des Goju Ryu Karate. Nach dem Tod seines Lehrers Kanryo Higaonna reiste Miyagi nach China, um sein Studium der Kampfkünste fortzusetzen. Später synthetisierte er sein Wissen zu dem, was als Goju Ryu bekannt werden sollte, benannt nach den Prinzipien von \'go\' (hart) und \'ju\' (weich).',
          'fr': 'Fondateur du karaté Goju Ryu. Après la mort de son maître Kanryo Higaonna, Miyagi se rendit en Chine pour poursuivre ses études d\'arts martiaux. Il synthétisa plus tard ses connaissances en ce qui deviendrait connu sous le nom de Goju Ryu, nommé d\'après les principes de \'go\' (dur) et \'ju\' (doux).',
          'es': 'Fundador del karate Goju Ryu. Después de la muerte de su maestro Kanryo Higaonna, Miyagi viajó a China para continuar sus estudios de artes marciales. Más tarde sintetizó su conocimiento en lo que se conocería como Goju Ryu, nombrado por los principios de \'go\' (duro) y \'ju\' (suave).',
          'it': 'Fondatore del karate Goju Ryu. Dopo la morte del suo maestro Kanryo Higaonna, Miyagi viaggiò in Cina per continuare i suoi studi di arti marziali. In seguito sintetizzò la sua conoscenza in quello che sarebbe diventato noto come Goju Ryu, chiamato dai principi di \'go\' (duro) en \'ju\' (morbido).'
        },
        'history-kanryo-higaonna': {
          'nl': 'De leraar van Chojun Miyagi en een fundamentele figuur in de ontwikkeling van Goju Ryu. Higaonna reisde naar Fuzhou, China, waar hij vele jaren onder Ryu Ryu Ko krijgskunsten studeerde voordat hij terugkeerde naar Okinawa om les te geven.',
          'de': 'Der Lehrer von Chojun Miyagi und eine grundlegende Figur in der Entwicklung des Goju Ryu. Higaonna reiste nach Fuzhou, China, wo er viele Jahre unter Ryu Ryu Ko Kampfkünste studierte, bevor er nach Okinawa zurückkehrte, um zu unterrichten.',
          'fr': 'Le maître de Chojun Miyagi et une figure fondamentale dans le développement du Goju Ryu. Higaonna se rendit à Fuzhou, en Chine, où il étudia les arts martiaux sous Ryu Ryu Ko pendant de nombreuses années avant de retourner à Okinawa pour enseigner.',
          'es': 'El maestro de Chojun Miyagi y una figura fundamental en el desarrollo del Goju Ryu. Higaonna viajó a Fuzhou, China, donde estudió artes marciales bajo Ryu Ryu Ko durante muchos años antes de regresar a Okinawa para enseñar.',
          'it': 'Il maestro di Chojun Miyagi e una figura fondamentale nello sviluppo del Goju Ryu. Higaonna viaggiò a Fuzhou, Cina, dove studiò arti marziali sotto Ryu Ryu Ko per molti anni prima di tornare a Okinawa per insegnare.'
        }
      };

      const translation = historyDescriptions[item.id]?.[language];
      if (translation) {
        return translation;
      }
    }

    // Special handling for kumite content
    if (item.type === 'kumite') {
      const kumiteDescriptions: Record<string, Record<string, string>> = {
        'kumite-intro': {
          'nl': 'Inleiding tot sparring en vechttechnieken in karate',
          'de': 'Einführung in Sparring und Kampftechniken im Karate',
          'fr': 'Introduction au sparring et aux techniques de combat en karaté',
          'es': 'Introducción al sparring y técnicas de combate en karate',
          'it': 'Introduzione al combattimento e alle tecniche di karate'
        },
        'attack-techniques': {
          'nl': 'Effectieve aanvalstechnieken voor sportkarate',
          'de': 'Effektive Angriffstechniken für Sportkarate',
          'fr': 'Techniques d\'attaque efficaces pour le karaté sportif',
          'es': 'Técnicas de ataque efectivas para karate deportivo',
          'it': 'Tecniche di attacco efficaci per il karate sportivo'
        },
        'defense-techniques': {
          'nl': 'Verdedigingstechnieken en blokkeerstrategieën',
          'de': 'Verteidigungstechniken und Blockstrategien',
          'fr': 'Techniques défensives et stratégies de blocage',
          'es': 'Técnicas defensivas y estrategias de bloqueo',
          'it': 'Tecniche difensive e strategie di blocco'
        },
        'throwing-techniques': {
          'nl': 'Worpen en takedown technieken in kumite',
          'de': 'Würfe und Takedown-Techniken im Kumite',
          'fr': 'Techniques de projection et de takedown en kumite',
          'es': 'Técnicas de proyección y derribo en kumite',
          'it': 'Tecniche di proiezione e takedown nel kumite'
        },
        'kumite-principles': {
          'nl': 'Fundamentele principes voor effectief kumite',
          'de': 'Grundlegende Prinzipien für effektives Kumite',
          'fr': 'Principes fondamentaux pour un kumite efficace',
          'es': 'Principios fundamentales para un kumite efectivo',
          'it': 'Principi fondamentali per un kumite efficace'
        },
        'kumite-training': {
          'nl': 'Trainingsmethoden en progressie in kumite',
          'de': 'Trainingsmethoden und Fortschritt im Kumite',
          'fr': 'Méthodes d\'entraînement et progression en kumite',
          'es': 'Métodos de entrenamiento y progresión en kumite',
          'it': 'Metodi di allenamento e progressione nel kumite'
        },
        'kumite-competition': {
          'nl': 'Wedstrijdregels, scoring en toernooivoorbereiding',
          'de': 'Wettkampfregeln, Bewertung und Turniervorbereitung',
          'fr': 'Règles de compétition, notation et préparation aux tournois',
          'es': 'Reglas de competición, puntuación y preparación para torneos',
          'it': 'Regole di competizione, punteggio e preparazione ai tornei'
        }
      };

      const translation = kumiteDescriptions[item.id]?.[language];
      if (translation) {
        return translation;
      }
    }

    // Special handling for philosophy content
    if (item.type === 'philosophy') {
      const philosophyDescriptions: Record<string, Record<string, string>> = {
        'philosophy-dojo-kun': {
          'nl': 'De dojo precepten en principes van karate',
          'de': 'Die Dojo-Prinzipien und Grundsätze des Karate',
          'fr': 'Les préceptes et principes du dojo de karaté',
          'es': 'Los preceptos y principios del dojo de karate',
          'it': 'I precetti e principi del dojo di karate'
        },
        'philosophy-budo': {
          'nl': 'De krijgskunstweg en zijn principes',
          'de': 'Der Weg der Kampfkunst und seine Prinzipien',
          'fr': 'La voie martiale et ses principes',
          'es': 'El camino marcial y sus principios',
          'it': 'La via marziale e i suoi principi'
        },
        'philosophy-kumite-philosophy': {
          'nl': 'Filosofische aspecten van sparring en gevecht',
          'de': 'Philosophische Aspekte des Sparrings und Kampfes',
          'fr': 'Aspects philosophiques du sparring et du combat',
          'es': 'Aspectos filosóficos del sparring y combate',
          'it': 'Aspetti filosofici del combattimento e della lotta'
        },
        'philosophy-mental-discipline': {
          'nl': 'Mentale training en discipline in kumite',
          'de': 'Mentales Training und Disziplin im Kumite',
          'fr': 'Entraînement mental et discipline en kumite',
          'es': 'Entrenamiento mental y disciplina en kumite',
          'it': 'Allenamento mentale e disciplina nel kumite'
        },
        'philosophy-combat-ethics': {
          'nl': 'Ethische overwegingen in krijgskunstgevechten',
          'de': 'Ethische Überlegungen im Kampfkunstkampf',
          'fr': 'Considérations éthiques dans les combats d\'arts martiaux',
          'es': 'Consideraciones éticas en combates de artes marciales',
          'it': 'Considerazioni etiche nei combattimenti di arti marziali'
        }
      };

      const translation = philosophyDescriptions[item.id]?.[language];
      if (translation) {
        return translation;
      }
    }

    // Special handling for general content descriptions
    const generalDescriptions: Record<string, Record<string, string>> = {
      'general-karate-basics': {
        'nl': 'Fundamentele technieken en principes van karate',
        'de': 'Grundlegende Techniken und Prinzipien des Karate',
        'fr': 'Techniques et principes fondamentaux du karaté',
        'es': 'Técnicas y principios fundamentales del karate',
        'it': 'Tecniche e principi fondamentali del karate'
      },
      'general-kata-overview': {
        'nl': 'Traditionele vormen en hun toepassingen',
        'de': 'Traditionelle Formen und ihre Anwendungen',
        'fr': 'Formes traditionnelles et leurs applications',
        'es': 'Formas tradicionales y sus aplicaciones',
        'it': 'Forme tradizionali e le loro applicazioni'
      },
      'general-bunkai': {
        'nl': 'Analyse en toepassing van kata bewegingen',
        'de': 'Analyse und Anwendung von Kata-Bewegungen',
        'fr': 'Analyse et application des mouvements de kata',
        'es': 'Análisis y aplicación de movimientos de kata',
        'it': 'Analisi e applicazione dei movimenti di kata'
      },
      'general-philosophy': {
        'nl': 'Filosofische aspecten en mentale training',
        'de': 'Philosophische Aspekte und mentales Training',
        'fr': 'Aspects philosophiques et entraînement mental',
        'es': 'Aspectos filosóficos y entrenamiento mental',
        'it': 'Aspetti filosofici e allenamento mentale'
      },
      'general-history': {
        'nl': 'Historische ontwikkeling en afstamming',
        'de': 'Historische Entwicklung und Abstammung',
        'fr': 'Développement historique et lignée',
        'es': 'Desarrollo histórico y linaje',
        'it': 'Sviluppo storico e lignaggio'
      },
      'general-terminology': {
        'nl': 'Japanse termen en hun betekenissen',
        'de': 'Japanische Begriffe und ihre Bedeutungen',
        'fr': 'Termes japonais et leurs significations',
        'es': 'Términos japoneses y sus significados',
        'it': 'Termini giapponesi e i loro significati'
      },
      'general-equipment': {
        'nl': 'Training uitrusting en beschermende materialen',
        'de': 'Trainingsausrüstung und Schutzausrüstung',
        'fr': 'Équipement d\'entraînement et équipement de protection',
        'es': 'Equipamiento de entrenamiento y equipo protector',
        'it': 'Attrezzatura di allenamento e equipaggiamento protettivo'
      },
      'general-grading': {
        'nl': 'Band graden en progressie systeem',
        'de': 'Gürtelgrade und Fortschrittssystem',
        'fr': 'Grades de ceinture et système de progression',
        'es': 'Grados de cinturón y sistema de progresión',
        'it': 'Gradi di cintura e sistema di progressione'
      },
      'general-dojo': {
        'nl': 'Correct gedrag en gebruiken in de dojo',
        'de': 'Angemessenes Verhalten und Bräuche im Dojo',
        'fr': 'Comportement approprié et coutumes au dojo',
        'es': 'Comportamiento apropiado y costumbres en el dojo',
        'it': 'Comportamento appropriato e usanze nel dojo'
      },
      'general-training': {
        'nl': 'Verschillende trainingsbenaderingen en methodologieën',
        'de': 'Verschiedene Trainingsansätze und Methodologien',
        'fr': 'Différentes approches et méthodologies d\'entraînement',
        'es': 'Diferentes enfoques y metodologías de entrenamiento',
        'it': 'Diversi approcci e metodologie di allenamento'
      },
      'kata-gekisai-dai-ichi': {
        'nl': 'Eerste kata voor beginners - basis technieken en bewegingen',
        'de': 'Erste Kata für Anfänger - Grundtechniken und Bewegungen',
        'fr': 'Premier kata pour débutants - techniques et mouvements de base',
        'es': 'Primer kata para principiantes - técnicas y movimientos básicos',
        'it': 'Primo kata per principianti - tecniche e movimenti base'
      },
      'kata-gekisai-dai-ni': {
        'nl': 'Tweede kata voor beginners - voortgezette basis technieken',
        'de': 'Zweite Kata für Anfänger - fortgeschrittene Grundtechniken',
        'fr': 'Deuxième kata pour débutants - techniques de base avancées',
        'es': 'Segundo kata para principiantes - técnicas básicas avanzadas',
        'it': 'Secondo kata per principianti - tecniche base avanzate'
      },
      'kata-saifa': {
        'nl': 'Geavanceerde kata met complexe technieken en toepassingen',
        'de': 'Fortgeschrittene Kata mit komplexen Techniken und Anwendungen',
        'fr': 'Kata avancé avec techniques et applications complexes',
        'es': 'Kata avanzado con técnicas y aplicaciones complejas',
        'it': 'Kata avanzato con tecniche e applicazioni complesse'
      },
      'kata-seiyunchin': {
        'nl': 'Traditionele kata met nadruk op balans en stabiliteit',
        'de': 'Traditionelle Kata mit Fokus auf Gleichgewicht und Stabilität',
        'fr': 'Kata traditionnel mettant l\'accent sur l\'équilibre et la stabilité',
        'es': 'Kata tradicional con énfasis en equilibrio y estabilidad',
        'it': 'Kata tradizionale con enfasi su equilibrio e stabilità'
      },
      'kata-shisochin': {
        'nl': 'Kata met circulaire bewegingen en verdedigingstechnieken',
        'de': 'Kata mit kreisförmigen Bewegungen und Verteidigungstechniken',
        'fr': 'Kata avec mouvements circulaires et techniques défensives',
        'es': 'Kata con movimientos circulares y técnicas defensivas',
        'it': 'Kata con movimenti circolari e tecniche difensive'
      },
      'kata-sanseru': {
        'nl': 'Krachtige kata met lineaire bewegingen en directe technieken',
        'de': 'Kraftvolle Kata mit linearen Bewegungen und direkten Techniken',
        'fr': 'Kata puissant avec mouvements linéaires et techniques directes',
        'es': 'Kata potente con movimientos lineales y técnicas directas',
        'it': 'Kata potente con movimenti lineari e tecniche dirette'
      },
      'kata-seisan': {
        'nl': 'Klassieke kata met nadruk op ademhaling en interne kracht',
        'de': 'Klassische Kata mit Fokus auf Atmung und innere Kraft',
        'fr': 'Kata classique mettant l\'accent sur la respiration et la force interne',
        'es': 'Kata clásico con énfasis en respiración y fuerza interna',
        'it': 'Kata classico con enfasi su respirazione e forza interna'
      },
      'kata-seipai': {
        'nl': 'Geavanceerde kata met complexe combinaties en toepassingen',
        'de': 'Fortgeschrittene Kata mit komplexen Kombinationen und Anwendungen',
        'fr': 'Kata avancé avec combinaisons et applications complexes',
        'es': 'Kata avanzado con combinaciones y aplicaciones complejas',
        'it': 'Kata avanzato con combinazioni e applicazioni complesse'
      },
      'kata-kururunfa': {
        'nl': 'Krachtige kata met nadruk op kracht en stabiliteit',
        'de': 'Kraftvolle Kata mit Fokus auf Kraft und Stabilität',
        'fr': 'Kata puissant mettant l\'accent sur la force et la stabilité',
        'es': 'Kata potente con énfasis en fuerza y estabilidad',
        'it': 'Kata potente con enfasi su forza e stabilità'
      },
      'kata-suparinpei': {
        'nl': 'De langste en meest complexe kata in Goju Ryu',
        'de': 'Die längste und komplexeste Kata im Goju Ryu',
        'fr': 'Le kata le plus long et le plus complexe du Goju Ryu',
        'es': 'El kata más largo y complejo del Goju Ryu',
        'it': 'Il kata più lungo e complesso del Goju Ryu'
      },
      'kata-tensho': {
        'nl': 'Zachte kata met circulaire bewegingen en ademhalingstechnieken',
        'de': 'Sanfte Kata mit kreisförmigen Bewegungen und Atemtechniken',
        'fr': 'Kata doux avec mouvements circulaires et techniques respiratoires',
        'es': 'Kata suave con movimientos circulares y técnicas de respiración',
        'it': 'Kata morbido con movimenti circolari e tecniche di respirazione'
      },
      'kata-sanchin': {
        'nl': 'Fundamentele kata voor ademhaling en interne kracht',
        'de': 'Grundlegende Kata für Atmung und innere Kraft',
        'fr': 'Kata fondamental pour la respiration et la force interne',
        'es': 'Kata fundamental para respiración y fuerza interna',
        'it': 'Kata fondamentale per respirazione e forza interna'
      },
      // Search index specific terms descriptions
      'term-higaonna-search': {
        'nl': 'Historische figuren in Goju Ryu: Kanryo Higaonna en Morio Higaonna',
        'de': 'Historische Figuren im Goju Ryu: Kanryo Higaonna und Morio Higaonna',
        'fr': 'Figures historiques du Goju Ryu: Kanryo Higaonna et Morio Higaonna',
        'es': 'Figuras históricas del Goju Ryu: Kanryo Higaonna y Morio Higaonna',
        'it': 'Figure storiche del Goju Ryu: Kanryo Higaonna e Morio Higaonna'
      },
      'term-miyagi-search': {
        'nl': 'Chojun Miyagi, grondlegger van Goju Ryu karate',
        'de': 'Chojun Miyagi, Gründer des Goju Ryu Karate',
        'fr': 'Chojun Miyagi, fondateur du karaté Goju Ryu',
        'es': 'Chojun Miyagi, fundador del karate Goju Ryu',
        'it': 'Chojun Miyagi, fondatore del karate Goju Ryu'
      },
      'term-sparring-search': {
        'nl': 'Kumite en sparring technieken in Goju Ryu',
        'de': 'Kumite und Sparring-Techniken im Goju Ryu',
        'fr': 'Techniques de kumite et sparring en Goju Ryu',
        'es': 'Técnicas de kumite y sparring en Goju Ryu',
        'it': 'Tecniche di kumite e sparring nel Goju Ryu'
      },
      'term-fighting-search': {
        'nl': 'Gevechtstechnieken en vechtprincipes',
        'de': 'Kampftechniken und Kampfprinzipien',
        'fr': 'Techniques de combat et principes de combat',
        'es': 'Técnicas de combate y principios de combate',
        'it': 'Tecniche di combattimento e principi di combattimento'
      },
      'term-mental-principles-search': {
        'nl': 'Zanshin, Mushin, Fudoshin en Senshin in kumite',
        'de': 'Zanshin, Mushin, Fudoshin und Senshin im Kumite',
        'fr': 'Zanshin, Mushin, Fudoshin et Senshin en kumite',
        'es': 'Zanshin, Mushin, Fudoshin y Senshin en kumite',
        'it': 'Zanshin, Mushin, Fudoshin e Senshin nel kumite'
      },
      'term-tactical-principles-search': {
        'nl': 'Ma-ai, Sen, Go No Sen en Sen No Sen in kumite',
        'de': 'Ma-ai, Sen, Go No Sen und Sen No Sen im Kumite',
        'fr': 'Ma-ai, Sen, Go No Sen et Sen No Sen en kumite',
        'es': 'Ma-ai, Sen, Go No Sen y Sen No Sen en kumite',
        'it': 'Ma-ai, Sen, Go No Sen e Sen No Sen nel kumite'
      },
      'term-physical-principles-search': {
        'nl': 'Balans, timing, kracht en snelheid in kumite',
        'de': 'Gleichgewicht, Timing, Kraft und Geschwindigkeit im Kumite',
        'fr': 'Équilibre, timing, puissance et vitesse en kumite',
        'es': 'Equilibrio, timing, poder y velocidad en kumite',
        'it': 'Equilibrio, timing, potenza e velocità nel kumite'
      },
      'term-attack-search': {
        'nl': 'Aanvalstechnieken en stoot- en traptechnieken in kumite',
        'de': 'Angriffstechniken und Schlag- und Tritttechniken im Kumite',
        'fr': 'Techniques d\'attaque et coups de poing et de pied en kumite',
        'es': 'Técnicas de ataque y golpes de puño y patada en kumite',
        'it': 'Tecniche di attacco e colpi di pugno e calcio nel kumite'
      },
      'term-defense-search': {
        'nl': 'Verdedigingstechnieken en blokkeertechnieken in kumite',
        'de': 'Verteidigungstechniken und Blocktechniken im Kumite',
        'fr': 'Techniques défensives et techniques de blocage en kumite',
        'es': 'Técnicas defensivas y técnicas de bloqueo en kumite',
        'it': 'Tecniche difensive e tecniche di parata nel kumite'
      },
      'term-throwing-search': {
        'nl': 'Worptechnieken en takedown technieken in kumite',
        'de': 'Wurftechniken und Takedown-Techniken im Kumite',
        'fr': 'Techniques de projection et takedown en kumite',
        'es': 'Técnicas de proyección y derribo en kumite',
        'it': 'Tecniche di proiezione e takedown nel kumite'
      },
      'term-competition-search': {
        'nl': 'Wedstrijdregels, scoring en toernooivoorbereiding',
        'de': 'Wettkampfregeln, Bewertung und Turniervorbereitung',
        'fr': 'Règles de compétition, notation et préparation aux tournois',
        'es': 'Reglas de competición, puntuación y preparación para torneos',
        'it': 'Regole di competizione, punteggio e preparazione ai tornei'
      },
      'term-training-search': {
        'nl': 'Kumite trainingsmethoden en progressie',
        'de': 'Kumite-Trainingsmethoden und Fortschritt',
        'fr': 'Méthodes d\'entraînement kumite et progression',
        'es': 'Métodos de entrenamiento kumite y progresión',
        'it': 'Metodi di allenamento kumite e progressione'
      },
      'term-safety-search': {
        'nl': 'Veiligheidsrichtlijnen en beschermende uitrusting in kumite',
        'de': 'Sicherheitsrichtlinien und Schutzausrüstung im Kumite',
        'fr': 'Directives de sécurité et équipement de protection en kumite',
        'es': 'Directrices de seguridad y equipo protector en kumite',
        'it': 'Linee guida di sicurezza e equipaggiamento protettivo nel kumite'
      },
      'term-sparren-search': {
        'nl': 'Sparring en vechttechnieken in karate',
        'de': 'Sparring und Kampftechniken im Karate',
        'fr': 'Sparring et techniques de combat en karaté',
        'es': 'Sparring y técnicas de combate en karate',
        'it': 'Sparring e tecniche di combattimento nel karate'
      },
      'term-aanval-search': {
        'nl': 'Aanvalstechnieken en stoot- en traptechnieken',
        'de': 'Angriffstechniken und Schlag- und Tritttechniken',
        'fr': 'Techniques d\'attaque et coups de poing et de pied',
        'es': 'Técnicas de ataque y golpes de puño y patada',
        'it': 'Tecniche di attacco e colpi di pugno e calcio'
      },
      'term-verdediging-search': {
        'nl': 'Verdedigingstechnieken en blokkeertechnieken',
        'de': 'Verteidigungstechniken und Blocktechniken',
        'fr': 'Techniques défensives et techniques de blocage',
        'es': 'Técnicas defensivas y técnicas de bloqueo',
        'it': 'Tecniche difensive e tecniche di parata'
      },
      'term-worpen-search': {
        'nl': 'Worptechnieken en takedown technieken',
        'de': 'Wurftechniken und Takedown-Techniken',
        'fr': 'Techniques de projection et takedown',
        'es': 'Técnicas de proyección y derribo',
        'it': 'Tecniche di proiezione e takedown'
      },
      'term-principes-search': {
        'nl': 'Mentale, tactische en fysieke principes van kumite',
        'de': 'Mentale, taktische und physische Prinzipien des Kumite',
        'fr': 'Principes mentaux, tactiques et physiques du kumite',
        'es': 'Principios mentales, tácticos y físicos del kumite',
        'it': 'Principi mentali, tattici e fisici del kumite'
      }
    };

    const generalDescription = generalDescriptions[item.id]?.[language];
    if (generalDescription) {
      return generalDescription;
    }

    // Try to get translation from i18n system
    const translationKey = getTranslationKey(item);
    if (translationKey) {
      const descKey = `${translationKey}.description`;
      return t(descKey, item.description);
    }

    return item.description;
  };

  const searchResults = useMemo(() => {
    const results = searchContent(searchQuery, i18n.language);
    return results.map(item => ({
      ...item,
      title: getTranslatedTitle(item, i18n.language),
      description: getTranslatedDescription(item, i18n.language)
    }));
  }, [searchQuery, i18n.language, t]);

  const handleItemClick = (path: string) => {
    navigate(path);
  };

  const getTypeIcon = (type: string) => {
    const icons: Record<string, string> = {
      'kata': '🥋',
      'technique': '👊',
      'hojo-undo': '🏋️',
      'philosophy': '🧘',
      'theory': '📚',
      'newaza': '🤼',
      'kumite': '🥊',
      'terminology': '📖',
      'history': '📜',
      'person': '👤',
      'principle': '⚖️',
      'article': '📄'
    };
    return icons[type] || '📄';
  };

  const getTypeLabel = (type: string) => {
    const labels: Record<string, string> = {
      'kata': t('search.types.kata', 'Kata'),
      'technique': t('search.types.technique', 'Technique'),
      'hojo-undo': t('search.types.hojoUndo', 'Hojo Undo'),
      'philosophy': t('search.types.philosophy', 'Philosophy'),
      'theory': t('search.types.theory', 'Theory'),
      'newaza': t('search.types.newaza', 'Newaza'),
      'kumite': t('search.types.kumite', 'Kumite'),
      'terminology': t('search.types.terminology', 'Terminology'),
      'history': t('search.types.history', 'History'),
      'person': t('search.types.person', 'Person'),
      'principle': t('search.types.principle', 'Principle'),
      'article': t('search.types.article', 'Article')
    };
    return labels[type] || type;
  };

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">{t('search.title', 'Search')}</h1>
        <p className="text-muted-foreground">
          {t('search.description', 'Search through all GojuPedia content')}
        </p>
      </div>

      {/* Search Input */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
        <Input
          type="text"
          placeholder={t('search.placeholder', 'Search for kata, techniques, philosophy...')}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 pr-4 h-12 text-lg"
        />
      </div>

      {/* Results */}
      <div>
        {searchQuery && (
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">
              {t('search.results', 'Results')} ({searchResults.length})
            </h3>
          </div>
        )}

        {searchQuery && searchResults.length === 0 ? (
          <Card>
            <CardContent className="p-8 text-center">
              <Search size={48} className="mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-lg font-medium mb-2">
                {t('search.noResults', 'No results found')}
              </h3>
              <p className="text-muted-foreground">
                {t('search.noResultsDescription', 'Try different search terms')}
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            {searchResults.map(item => (
              <Card
                key={item.id}
                className="cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => handleItemClick(item.path)}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{getTypeIcon(item.type)}</span>
                      <div>
                        <CardTitle className="text-lg">{item.title}</CardTitle>
                        <p className="text-sm text-muted-foreground">
                          {getTypeLabel(item.type)}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground mb-3">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {item.tags.slice(0, 3).map((tag, index) => (
                      <Badge key={`${item.id}-tag-${index}`} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {!searchQuery && (
          <Card>
            <CardContent className="p-8 text-center">
              <Search size={48} className="mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-lg font-medium mb-2">
                {t('search.startSearching', 'Start searching')}
              </h3>
              <p className="text-muted-foreground">
                {t('search.startSearchingDescription', 'Enter a search term to find content')}
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default SearchPage; 