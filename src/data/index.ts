import { Category, Technique, Kata, HistoricalFigure, Article, Principle, Study, StudyQuestion } from "../types";
import { techniquesData, TechniqueData } from "./techniquesData";
import i18n from '@/i18n'; // Import i18n instance

export const categories: Category[] = [
  {
    id: "techniques",
    name: "Techniques",
    description: "Learn the basic techniques of Goju Ryu",
    icon: "swords",
    image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=2342&auto=format&fit=crop",
    slug: "techniques"
  },
  {
    id: "kata",
    name: "Kata",
    description: "Traditional forms and their applications",
    icon: "user",
    image: "https://images.unsplash.com/photo-1616280162269-3a75fe12edba?q=80&w=2070&auto=format&fit=crop",
    slug: "kata"
  },
  {
    id: "history",
    name: "History",
    description: "The origins and evolution of Goju Ryu",
    icon: "scroll",
    image: "https://images.unsplash.com/photo-1590244303591-872eb8080ebe?q=80&w=2070&auto=format&fit=crop",
    slug: "history"
  },
  {
    id: "philosophy",
    name: "Philosophy",
    description: "Core principles and values of Goju Ryu",
    icon: "brain",
    image: "https://images.unsplash.com/photo-1518459031867-a89b944bffe4?q=80&w=2041&auto=format&fit=crop",
    slug: "philosophy"
  }
];

export const techniques: Technique[] = [
  {
    id: "sanchin-dachi",
    name: "Sanchin Dachi",
    japaneseName: "三戦立ち",
    description: "Hour-glass stance. A strong, rooted stance that forms the foundation of Goju Ryu karate. It focuses on proper alignment, breathing, and tension throughout the body.",
    steps: [
      "Stand with feet shoulder-width apart",
      "Turn feet inward so toes point slightly toward each other",
      "Bend knees slightly while keeping back straight",
      "Tuck pelvis slightly forward to engage core muscles",
      "Distribute weight evenly across both feet"
    ],
    images: [
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1471&auto=format&fit=crop",
    ],
    category: "stances",
    relatedTechniques: ["shiko-dachi", "neko-ashi-dachi"]
  },
  {
    id: "mawashi-uke",
    name: "Mawashi Uke",
    japaneseName: "回し受け",
    description: "Roundhouse block. A circular blocking technique that combines multiple blocks into one flowing movement. It efficiently defends against attacks from multiple angles.",
    steps: [
      "Begin in a natural stance",
      "Start with one hand high near your ear, palm facing forward",
      "Position other hand low near your opposite hip, palm facing downward",
      "Execute a circular motion with both arms simultaneously",
      "High hand moves down and across body in an arc motion",
      "Low hand moves up and across body in an arc motion",
      "End with positions reversed from the starting position"
    ],
    images: [
      "https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=2342&auto=format&fit=crop"
    ],
    category: "blocks",
    relatedTechniques: ["chudan-uke", "gedan-barai"]
  }
];

export const katas: Kata[] = [
  // Kaishugata (Open Hand Forms) - Reordered according to traditional progression
  {
    id: "gekisai-dai-ichi",
    level: "Beginner",
    category: "kaishugata",
    steps: [
      "Begin in natural stance facing forward",
      "Step into sanchin dachi with double block",
      "Execute punch sequence",
      "Perform blocks and counters to the sides",
      "Return to center and complete final techniques",
      "Return to starting position"
    ],
    images: [
      "https://images.unsplash.com/photo-1604652716188-21d725b4c7e9?q=80&w=1470&auto=format&fit=crop"
    ],
    keyFeatures: [
      "Basic blocking and striking techniques",
      "Simple directional changes",
      "Focus on fundamentals",
      "Introduction to breathing coordination"
    ],
    movements: "23 primary movements",
    duration: "1-2 minutes",
    origin: "Okinawa, Japan",
    masters: [
      "Chojun Miyagi",
      "Morio Higaonna",
      "Eiichi Miyazato"
    ],
    videoUrl: "https://www.youtube.com/watch?v=vKLX3tZN1JQ",
    bunkai: [
      {
        id: "gdi-bunkai-1",
        title: "Jodan Age Uke + Jodan Oi Zuki",
        attack: "Jodan Oi Zuki.",
        defense: "Jodan Age Uke.",
        counterAttack: "Jodan Oi Zuki.",
        footwork: "45° schuin naar achteren uitstappen naar Heiko Sanchin Dachi + voetwissel (in-uit).",
        vitalPoints: "Bijv. Oog [Seimo], [Gansei] of [Kasumi].",
        notes: "Behoud steeds Zanshin. Dit geldt voor alle bunkai!",
        kata: "gekisai-dai-ichi"
      },
      {
        id: "gdi-bunkai-2",
        title: "Gedan Harai Uke",
        attack: "Gedan Oi Zuki.",
        defense: "Gedan Harai Uke (als slag en wering tegelijk).",
        counterAttack: "Wering = aanval.",
        footwork: "Zijwaarts uitstappen naar buiten in Shiko Dachi.",
        vitalPoints: "Elleboog [Soto Hijitsume].",
        notes: "Bij training met hard contact niet het vitale punt [Hijitsume] aanvallen maar de onderarm!",
        kata: "gekisai-dai-ichi"
      },
      {
        id: "gdi-bunkai-3",
        title: "Chudan Yoko Uke + Mae Geri + Hiji Ate + Jodan Uraken Uchi",
        attack: "Chudan Oi Zuki.",
        defense: "Chudan Yoko Uke.",
        counterAttack: "Gedan Mae Geri + Chudan Hiji Ate + Jodan Uraken Uchi.",
        footwork: "Sayu Tenshin + na Mae Geri inkomen naar voren met Zenkutsu Dachi.",
        vitalPoints: "Bijv. [Kinteki] (Mae Geri) + [Ganka] of [Suigetsu] (Hiji Ate) + [Jinchu] (Jodan Uraken Uchi).",
        notes: "De lage voorwaartse trap wordt al naar gelang de afstand uitgevoerd met de bal van de voet, de voorzijde van de enkel of het scheenbeen. De aanvaller ontwijkt de Chudan Hiji Ate met een achterwaartse Suri Ashi.",
        kata: "gekisai-dai-ichi"
      },
      {
        id: "gdi-bunkai-4",
        title: "Gedan Harai Uke + Chudan Gyaku Zuki",
        attack: "Gedan Oi Zuki.",
        defense: "Gedan Harai Uke.",
        counterAttack: "Chudan Gyaku Zuki.",
        footwork: "Schuin naar achteren weg stappen.",
        vitalPoints: "Bijv. [Ganka].",
        notes: "Gevorderden (vanaf bruine band) moeten de wering en tegenaanval als één beweging oefenen. De laatste twee Bunkai Kumite moeten door gevorderden ook als één geheel worden getraind.",
        kata: "gekisai-dai-ichi"
      },
      {
        id: "gdi-bunkai-5",
        title: "Ashi Barai + Yoko Shuto Uchi + Hikite + Fumikomi Geri",
        attack: "Chudan Oi Zuki.",
        defense: "Chudan Yoko Uke + Tsukkami (= beetpakken).",
        counterAttack: "Ashi Baraï + Yoko Shuto Uchi + Fumikomi Geri.",
        footwork: "Sayu Tenshin met 45 graden draai.",
        vitalPoints: "Bijv. [Jinchu] of Adamsappel [Nodo Botoku] (Yoko Shuto Uchi) + nek (Fumikomi Geri).",
        notes: "Na de Ashi Barai de voet snel terugbrengen, om te voorkomen dat de tegenstander tegen je been aanvalt. Voor de veiligheid van de tegenstander wordt de Yoko Shuto Uchi niet slaand uitgevoerd naar een Kyusho, maar meer duwend bijvoorbeeld op borst en schouder. De Fumikomi Geri kan met beide benen worden uitgevoerd, afhankelijk van hoe de tegenstander valt. In de Kata is het echter hetzelfde been als die waarmee de veeg wordt uitgevoerd. Gevorderde karata kunnen ook een irimi stap maken en de tegenstander van dichtbij vegen. Bij deze gevorderden variatie wordt tevens de elleboog op de borst klem gezet.",
        kata: "gekisai-dai-ichi"
      },
      {
        id: "gdi-bunkai-6",
        title: "Awase Zuki",
        attack: "Chudan Oi Zuki.",
        defense: "Nagashi Seiken Ura Uke (variant van Chudan Yoko Uke).",
        counterAttack: "Awase Zuki + Awase Oshi.",
        footwork: "Sayu Tenshin + uitstappen naar Zenkutsu Dachi.",
        vitalPoints: "Bijv. [Ganka] (Gyaku Zuki) en [Inazuma] (Ura Zuki).",
        notes: "De aanval moet vroeg onderschept worden. De Awase Zuki moet eerst krachtig gefocust worden voordat deze als duw wordt voortgezet. Om dit te kunnen doen, moet je eerst naar binnen en beneden ontspannen en de adem binnen laten komen. De Awase Zuki is een verkleinde, gesloten hand versie van de Tora Guchi.",
        kata: "gekisai-dai-ichi"
      }
    ]
  },
  {
    id: "gekisai-dai-ni",
    level: "Beginner",
    category: "kaishugata",
    steps: [
      "Begin in natural stance facing forward",
      "Step into sanchin dachi with open hand block",
      "Execute punch and block sequence",
      "Perform kicks and strikes in multiple directions",
      "Complete final blocking sequence",
      "Return to starting position"
    ],
    images: [
      "https://images.unsplash.com/photo-1590244303591-872eb8080ebe?q=80&w=2070&auto=format&fit=crop"
    ],
    keyFeatures: [
      "Introduction to open hand techniques",
      "More advanced kicks than Gekisai Dai Ichi",
      "Multiple directional movements",
      "Enhanced breathing patterns"
    ],
    movements: "24 primary movements",
    duration: "1-2 minutes",
    origin: "Okinawa, Japan",
    masters: [
      "Chojun Miyagi",
      "Morio Higaonna",
      "Eiichi Miyazato"
    ],
    videoUrl: "https://www.youtube.com/watch?v=0Uydn4yEXe4",
    bunkai: "https://www.youtube.com/watch?v=wVFAa_IXqrA"
  },
  {
    id: "saifa",
    level: "Intermediate",
    category: "kaishugata",
    steps: [
      "Begin in natural stance facing forward",
      "Execute opening sequence with simultaneous blocks",
      "Perform circular elbow strike followed by grab and pull motion",
      "Execute turning sequence with kicks and strikes",
      "Complete final sequence returning to starting position",
      "End with formal closing"
    ],
    images: [
      "https://images.unsplash.com/photo-1604652716188-21d725b4c7e9?q=80&w=1470&auto=format&fit=crop"
    ],
    keyFeatures: [
      "Circular blocking and striking techniques",
      "Close-range combat applications",
      "Quick directional changes",
      "Grabbing and tearing movements"
    ],
    movements: "21 primary movements",
    duration: "1-2 minutes",
    origin: "Fujian Province, China",
    masters: [
      "Kanryo Higaonna",
      "Chojun Miyagi"
    ],
    videoUrl: "https://www.youtube.com/watch?v=EXAMPLE_SAIFA_VIDEO",
    bunkai: "https://www.youtube.com/watch?v=EXAMPLE_SAIFA_BUNKAI"
  },
  {
    id: "seiyunchin",
    level: "Intermediate",
    category: "kaishugata",
    steps: [
      "Emphasis on low stances and powerful pulling/unbalancing techniques",
      "Series of blocks and strikes while maintaining a low center of gravity",
      "No kicks are used in this kata"
    ],
    images: [],
    keyFeatures: [
      "Dynamic tension and powerful breathing",
      "Focus on unbalancing and controlling the opponent",
      "Absence of kicking techniques"
    ],
    movements: "Approximately 36 movements",
    duration: "2-3 minutes",
    origin: "Fujian Province, China (unknown specific style)",
    masters: ["Kanryo Higaonna", "Chojun Miyagi"],
    videoUrl: "",
    bunkai: "https://www.youtube.com/watch?v=rplwXor-d2A"
  },
  {
    id: "shisochin",
    level: "Intermediate",
    category: "kaishugata",
    steps: [
      "Combination of powerful linear techniques and soft circular movements",
      "Open-handed strikes and blocks",
      "Four-directional movements"
    ],
    images: [],
    keyFeatures: [
      "Fighting in four directions",
      "Combination of hard and soft techniques",
      "Use of open-handed strikes (nukite)"
    ],
    movements: "Approximately 44 movements",
    duration: "2-3 minutes",
    origin: "Fujian Province, China (likely White Crane style)",
    masters: ["Kanryo Higaonna", "Chojun Miyagi"],
    videoUrl: "",
    bunkai: "https://www.youtube.com/watch?v=2T_aBnzU-VA"
  },
  {
    id: "sanseru",
    level: "Advanced",
    category: "kaishugata",
    steps: [
      "Fast and slow movements",
      "Dynamic combination of attacks and defenses",
      "Techniques against multiple opponents"
    ],
    images: [],
    keyFeatures: [
      "Representing the number 36 (6x6)",
      "Attacking 36 vital points",
      "Combination of hard and soft techniques",
      "Dynamic and powerful movements"
    ],
    movements: "36 primary movements (symbolic)",
    duration: "2-3 minutes",
    origin: "Fujian Province, China (likely White Crane or Tiger style)",
    masters: ["Kanryo Higaonna", "Chojun Miyagi"],
    videoUrl: "",
    bunkai: "https://www.youtube.com/watch?v=fKYlZZnkjoM"
  },
  {
    id: "sepai",
    level: "Master",
    category: "kaishugata",
    steps: [
      "Circular movements",
      "Deflecting and redirecting opponent's force",
      "Advanced combination techniques"
    ],
    images: [],
    keyFeatures: [
      "Representing the number 18 (6x3)",
      "Circular and flowing movements",
      "Techniques for close-range combat and grappling"
    ],
    movements: "18 primary movements (symbolic)",
    duration: "3-4 minutes",
    origin: "Fujian Province, China (likely White Crane style)",
    masters: ["Kanryo Higaonna", "Chojun Miyagi"],
    videoUrl: "",
    bunkai: "https://www.youtube.com/watch?v=BrBc1_vGZDM"
  },
  {
    id: "kururunfa",
    level: "Master",
    category: "kaishugata",
    steps: [
      "Holding and breaking balance",
      "Sudden, fast strikes",
      "Close-quarter combat and joint manipulation"
    ],
    images: [],
    keyFeatures: [
      "'Holding on long and striking suddenly'",
      "Deceptive movements and quick transitions",
      "'Muchimi' (sticky hands) principle"
    ],
    movements: "Approximately 23 movements",
    duration: "3-4 minutes",
    origin: "Fujian Province, China (unknown specific style)",
    masters: ["Kanryo Higaonna", "Chojun Miyagi"],
    videoUrl: "",
    bunkai: "https://www.youtube.com/watch?v=nSX19q6_gNM"
  },
  {
    id: "sesan",
    level: "Master",
    category: "kaishugata",
    steps: [
      "Powerful, direct techniques",
      "Close-quarters fighting",
      "Strong stances and rooting"
    ],
    images: [],
    keyFeatures: [
      "Representing the number 13",
      "One of the oldest Goju Ryu kata",
      "Powerful, direct movements and close-quarters combat"
    ],
    movements: "13 primary movements (symbolic)",
    duration: "3-4 minutes",
    origin: "Fujian Province, China (likely Monk Fist Boxing or Lion's Fist)",
    masters: ["Kanryo Higaonna", "Chojun Miyagi"],
    videoUrl: "",
    bunkai: "https://www.youtube.com/watch?v=LBVbeDCv1jo"
  },
  {
    id: "peichurin",
    level: "Master",
    category: "kaishugata",
    steps: [
      "Comprehensive range of Goju Ryu techniques",
      "Longest and most complex kata",
      "Embodiment of hard and soft principles"
    ],
    images: [],
    keyFeatures: [
      "Representing the number 108 (3x36)",
      "Longest and most advanced kata",
      "Culmination of Goju Ryu principles"
    ],
    movements: "108 primary movements (symbolic)",
    duration: "5-7 minutes",
    origin: "Fujian Province, China (likely White Crane style)",
    masters: ["Kanryo Higaonna", "Chojun Miyagi"],
    videoUrl: "",
    bunkai: "https://www.youtube.com/watch?v=w4wIpiz6l-0"
  },
  // Heishugata (Closed Hand Forms)
  {
    id: "sanchin",
    level: "Beginner",
    category: "heishugata",
    steps: [
      "Begin in natural stance facing forward",
      "Step forward into sanchin dachi",
      "Perform three punches while maintaining proper breathing",
      "Turn 180 degrees while maintaining tension",
      "Continue sequence with controlled movements and breathing",
      "Maintain muscle tension throughout the entire form"
    ],
    images: [
      "https://images.unsplash.com/photo-1616280162269-3a75fe12edba?q=80&w=2070&auto=format&fit=crop"
    ],
    keyFeatures: [
      "Heavy emphasis on breathing technique",
      "Maintains consistent muscle tension",
      "Focuses on internal energy development",
      "Foundation for all other Goju Ryu kata"
    ],
    movements: "13 primary movements",
    duration: "1-3 minutes",
    origin: "Fujian Province, China",
    masters: [
      "Chojun Miyagi",
      "Kanryo Higaonna",
      "Seiko Higa"
    ],
    videoUrl: "https://www.youtube.com/watch?v=kybxNOlnl20",
    bunkai: "https://www.youtube.com/watch?v=Ym-dPP2Mb_c"
  },
  {
    id: "tensho",
    level: "Advanced",
    category: "heishugata",
    steps: [
      "Begin in sanchin stance",
      "Perform circular open-hand techniques",
      "Maintain muscle tension throughout",
      "Focus on fluid, circular movements",
      "Maintain proper breathing throughout kata"
    ],
    images: [
      "https://images.unsplash.com/photo-1616280162269-3a75fe12edba?q=80&w=2070&auto=format&fit=crop"
    ],
    keyFeatures: [
      "Circular, flowing movements",
      "Open-hand techniques",
      "Contrast to Sanchin's hard techniques",
      "Represents the 'ju' (soft) aspect of Goju Ryu"
    ],
    movements: "16 primary movements",
    duration: "1-2 minutes",
    origin: "Okinawa, Japan",
    masters: [
      "Chojun Miyagi"
    ],
    videoUrl: "",
    bunkai: "https://www.youtube.com/watch?v=QM7IZ0gnOzw"
  }
];

export const historicalFigures: HistoricalFigure[] = [
  {
    id: "miyagi-chojun",
    name: "Chojun Miyagi",
    japaneseName: "宮城 長順",
    born: "April 25, 1888",
    died: "October 8, 1953",
    description: "Founder of Goju Ryu karate. After the death of his teacher Kanryo Higaonna, Miyagi traveled to China to continue his study of martial arts. He later synthesized his knowledge into what would become known as Goju Ryu, named after the principles of 'go' (hard) and 'ju' (soft).",
    contributions: [
      "Formalized the Goju Ryu system",
      "Created the kata Tensho and Gekisai I and II",
      "Introduced karate to mainstream Japanese martial arts culture",
      "Emphasized the importance of breathing in karate practice"
    ],
    image: "https://images.unsplash.com/photo-1590244303591-872eb8080ebe?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "higaonna-kanryo",
    name: "Kanryo Higaonna",
    japaneseName: "東恩納 寛量",
    born: "March 10, 1853",
    died: "December 1916",
    description: "The teacher of Chojun Miyagi and a foundational figure in the development of Goju Ryu. Higaonna traveled to Fuzhou, China, where he studied martial arts under Ryu Ryu Ko for many years before returning to Okinawa to teach.",
    contributions: [
      "Brought Chinese martial arts techniques to Okinawa",
      "Taught the fundamental techniques that would form Goju Ryu",
      "Emphasized both hard and soft techniques in combat",
      "Integrated breathing techniques from Chinese martial arts"
    ],
    image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=2342&auto=format&fit=crop"
  }
];

export const articles: Article[] = [
  {
    id: "breathing-importance",
    title: "The Importance of Proper Breathing in Goju Ryu",
    author: "John Doe",
    date: "2023-01-15",
    content: "Proper breathing, or 'kokyu', is a cornerstone of Goju Ryu practice. It is not merely about inhaling and exhaling, but about coordinating breath with movement to generate power, maintain stability, and cultivate internal energy (ki). The Sanchin kata is a primary vehicle for developing this skill, teaching the practitioner to maintain a state of dynamic tension throughout the body, synchronized with a deep, resonant breathing pattern. This not only strengthens the body but also forges a deep connection between mind and body, a critical aspect of martial arts mastery.",
    tags: ["breathing", "kokyu", "sanchin", "ki"]
  },
  {
    id: "history-of-goju-ryu",
    title: "A Brief History of Goju Ryu Karate",
    author: "Jane Smith",
    date: "2023-02-20",
    content: "Goju Ryu's roots can be traced back to the Okinawan master Kanryo Higaonna, who studied Chinese martial arts in Fuzhou. His top student, Chojun Miyagi, synthesized these teachings with native Okinawan techniques to create the system we know today. The name 'Goju Ryu' itself, meaning 'hard-soft style', was inspired by a line from the Bubishi, a classic Chinese text on martial arts. This name perfectly encapsulates the style's core philosophy: the seamless integration of hard, linear attacks with soft, circular blocks and deflections.",
    tags: ["history", "chojun-miyagi", "kanryo-higaonna", "okinawa"]
  }
];

export const principles: Principle[] = [
  {
    id: "go-ju",
    name: "Go and Ju (Hard and Soft)",
    japaneseName: "剛柔",
    description: "The core principle of Goju Ryu, representing the balance between hard (Go) and soft (Ju) techniques. This philosophy extends beyond physical movements to encompass a balanced approach to life.",
    relatedKatas: ["Sanchin", "Tensho"]
  },
  {
    id: "muchimi",
    name: "Muchimi (Sticky Hands)",
    japaneseName: "鞭身",
    description: "The ability to maintain constant contact with an opponent, feeling their energy and intentions. This allows for fluid transitions between offense and defense, sticking to the opponent like glue.",
    relatedKatas: ["Kururunfa"]
  },
  {
    id: "kokyu",
    name: "Kokyu (Breathing)",
    japaneseName: "呼吸",
    description: "The art of coordinating breath with movement. Proper breathing is essential for generating power (kime), maintaining stamina, and focusing the mind.",
    relatedKatas: ["Sanchin", "Tensho"]
  }
];

export const allTerminologyCategories = ["common", "stances", "blocks", "punches", "kicks", "strikes", "body-parts", "commands", "numbers", "ranks", "weapons", "concepts", "kata-specific", "kumite", "dojo"] as const;

export type TerminologyCategory = typeof allTerminologyCategories[number];

// Helper function to generate a URL-friendly slug
const generateSlug = (name: string) => name.toLowerCase().replace(/\s+/g, '-');

// Function to generate study materials from techniques
const generateStudiesFromTechniques = (categories: readonly TerminologyCategory[]): Study[] => {
  const studies: Study[] = [];

  categories.forEach(category => {
    try {
      // Correctly type the keys for the i18n object
      const i18nKey = `terminology.sections.${category}-content.terms` as const;
      
      const terms = i18n.t(i18nKey, { returnObjects: true }) as Record<string, { name: string; japanese?: string; english: string; details?: string }>;

      if (terms && typeof terms === 'object' && Object.keys(terms).length > 0) {
        const questions: StudyQuestion[] = Object.entries(terms).map(([key, term]) => ({
          id: `${category}-${key}`,
          question: `What is the meaning of "${term.name}"?`,
          options: [term.english], // Correct answer
          correctAnswer: term.english,
          explanation: term.details || `Japanese: ${term.japanese || 'N/A'}`
        }));

        if (questions.length > 0) {
          studies.push({
            id: category,
            title: `Quiz: ${category.charAt(0).toUpperCase() + category.slice(1)}`,
            description: `Test your knowledge of ${category} terminology.`,
            type: "quiz",
            questions: questions,
            category: "terminology",
            difficulty: "beginner",
            image: "https://images.unsplash.com/photo-1593340578844-89a1c5d33c5e?q=80&w=2070&auto=format&fit=crop"
          });
        }
      }
    } catch (error) {
      // Silently skip categories that don't have the expected structure
      console.debug(`Skipping ${category} - no terms available`);
    }
  });

  return studies;
};

// Generate study materials for all terminology categories
export const studies: Study[] = generateStudiesFromTechniques(allTerminologyCategories);

// Add flashcard studies
allTerminologyCategories.forEach(category => {
  try {
    const i18nKey = `terminology.sections.${category}-content.terms` as const;
    
    const terms = i18n.t(i18nKey, { returnObjects: true }) as Record<string, { name: string; japanese?: string; english: string }>;

    if (terms && typeof terms === 'object' && Object.keys(terms).length > 0) {
      studies.push({
        id: `${category}-flashcards`,
        title: `Flashcards: ${category.charAt(0).toUpperCase() + category.slice(1)}`,
        description: `Practice ${category} terminology with flashcards.`,
        type: "flashcard",
        category: "terminology",
        difficulty: "beginner",
        image: "https://images.unsplash.com/photo-1588725193539-7a723a247ab6?q=80&w=2070&auto=format&fit=crop",
        questions: Object.entries(terms).map(([key, term]) => ({
          id: `${category}-flashcard-${key}`,
          question: term.name,
          correctAnswer: `${term.english}${term.japanese ? ` (${term.japanese})` : ''}`,
          explanation: `Japanese: ${term.japanese || 'N/A'}`
        }))
      });
    }
  } catch (error) {
    // Silently skip categories that don't have the expected structure
    console.debug(`Skipping ${category} flashcards - no terms available`);
  }
});

// Export other data as needed (ensure TechniqueData is not exported twice)
export { techniquesData }; 
