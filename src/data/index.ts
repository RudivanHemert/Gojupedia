import { Category, Technique, Kata, HistoricalFigure, Article, Principle, Study, StudyQuestion } from "../types";
import { techniquesData, TechniqueData } from "./techniquesData";
import i18n from '@/i18n'; // Import i18n instance

export const categories: Category[] = [
  {
    id: "techniques",
    name: i18n.t('study.categories.techniques'),
    description: i18n.t('techniques.description', 'Leer de basistechnieken van Goju Ryu'),
    icon: "swords",
    image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=2342&auto=format&fit=crop",
    slug: "techniques"
  },
  {
    id: "kata",
    name: i18n.t('study.categories.kata'),
    description: i18n.t('kata.description', 'Traditionele vormen en toepassingen'),
    icon: "user",
    image: "https://images.unsplash.com/photo-1616280162269-3a75fe12edba?q=80&w=2070&auto=format&fit=crop",
    slug: "kata"
  },
  {
    id: "history",
    name: i18n.t('study.categories.history'),
    description: i18n.t('history.description', 'De oorsprong en evolutie van Goju Ryu'),
    icon: "scroll",
    image: "https://images.unsplash.com/photo-1590244303591-872eb8080ebe?q=80&w=2070&auto=format&fit=crop",
    slug: "history"
  },
  {
    id: "philosophy",
    name: i18n.t('study.categories.philosophy'),
    description: i18n.t('philosophy.description', 'Kernprincipes en waarden van Goju Ryu'),
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
    videoUrl: "https://www.youtube.com/watch?v=edeh-DuW5ZI",
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
const generateStudiesFromTechniques = (categories: readonly TerminologyCategory[], t: (key: string, options?: any) => string): Study[] => {
  const studies: Study[] = [];

  // Helper function to generate wrong options for multiple choice
  const generateWrongOptions = (correctAnswer: string, allTerms: Record<string, { english: string }>): string[] => {
    const allAnswers = Object.values(allTerms).map(term => term.english);
    const wrongOptions = allAnswers.filter(answer => answer !== correctAnswer);
    // Shuffle and take 3 random wrong options
    return wrongOptions.sort(() => Math.random() - 0.5).slice(0, 3);
  };

  categories.forEach(category => {
    try {
      // Correctly type the keys for the i18n object
      const i18nKey = `terminology.sections.${category}-content.terms` as const;
      
      const terms = i18n.t(i18nKey, { returnObjects: true }) as Record<string, { name: string; japanese?: string; english: string; details?: string }>;

      if (terms && typeof terms === 'object' && Object.keys(terms).length > 0) {
        const questions: StudyQuestion[] = Object.entries(terms).map(([key, term]) => {
          const correctAnswer = term.english;
          const wrongOptions = generateWrongOptions(correctAnswer, terms);
          const allOptions = [correctAnswer, ...wrongOptions];
          
          return {
            id: `${category}-${key}`,
            question: t(`study.terminology.${category}.terms.${key}.question`, { term: term.name, defaultValue: `What is the meaning of "${term.name}"?` }),
            options: allOptions.sort(() => Math.random() - 0.5), // Shuffle options
            correctAnswer: correctAnswer,
            explanation: term.details || t(`study.terminology.${category}.terms.${key}.explanation`, { japanese: term.japanese || t('study.notAvailable', 'N/A'), defaultValue: `Japanese: ${term.japanese || 'N/A'}` })
          };
        });

        if (questions.length > 0) {
          studies.push({
            id: category,
            title: t(`study.quizTypes.${category}.title`, t(`quizTypes.${category}.title`, `${category} Quiz`)),
            description: t(`study.quizTypes.${category}.description`, t(`quizTypes.${category}.description`, `Test your knowledge of ${category} terminology.`)),
            type: "quiz",
            questions: questions,
            category: "terminology",
            difficulty: "beginner"
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

// Build studies on demand using the current translation function
export const buildStudies = (t: (key: string, options?: any) => string): Study[] => {
  // Generate study materials for all terminology categories
  const studies: Study[] = generateStudiesFromTechniques(allTerminologyCategories, t);

  // Add flashcard studies
  allTerminologyCategories.forEach(category => {
    try {
      const i18nKey = `terminology.sections.${category}-content.terms` as const;
      const terms = t(i18nKey, { returnObjects: true }) as Record<string, { name: string; japanese?: string; english: string }>;

      if (terms && typeof terms === 'object' && Object.keys(terms).length > 0) {
        studies.push({
          id: `${category}-flashcards`,
          title: t(`study.flashcardTypes.${category}.title`, t(`flashcardTypes.${category}.title`, `${category} Flashcards`)),
          description: t(`study.flashcardTypes.${category}.description`, t(`flashcardTypes.${category}.description`, `Practice ${category} terminology with flashcards.`)),
          type: "flashcard",
          category: "terminology",
          difficulty: "beginner",
          questions: Object.entries(terms).map(([key, term]) => ({
            id: `${category}-flashcard-${key}`,
            question: term.name,
            correctAnswer: `${term.english}${term.japanese ? ` (${term.japanese})` : ''}`,
            // Show Japanese label localized without English fallback in UI language
            explanation: t(`study.terminology.${category}.terms.${key}.explanation`, { japanese: term.japanese || t('study.notAvailable') })
          }))
        });
      }
    } catch (error) {
      console.debug(`Skipping ${category} flashcards - no terms available`);
    }
  });

  // Add curated flashcard studies that do not overlap with auto-generated terminology sets
  const flashcardStudies: Study[] = [
    {
      id: "kata-flashcards",
      title: t("study.flashcardTypes.kata.title", "Kata Flashcards"),
      description: t("study.flashcardTypes.kata.description", "Learn all Goju Ryu kata names and meanings."),
      type: "flashcard",
      category: "kata",
      difficulty: "intermediate",
      questions: [
        { id: "kata-sanchin", question: "Sanchin (三戦)", correctAnswer: t("studyTerminology.kata.sanchin.english", "Three Battles"), explanation: t("studyTerminology.kata.sanchin.explanation", "Represents mind, body, and spirit - the foundation kata") },
        { id: "kata-tensho", question: "Tensho (転掌)", correctAnswer: t("studyTerminology.kata.tensho.english", "Turning Palms"), explanation: t("studyTerminology.kata.tensho.explanation", "Soft circular movements contrasting with Sanchin's hardness") },
        { id: "kata-gekisai-dai-ichi", question: "Gekisai Dai Ichi (撃砕第一)", correctAnswer: t("studyTerminology.kata.gekisai-dai-ichi.english", "Attack and Smash Number One"), explanation: t("studyTerminology.kata.gekisai-dai-ichi.explanation", "First of the Gekisai kata, created by Chojun Miyagi") },
        { id: "kata-gekisai-dai-ni", question: "Gekisai Dai Ni (撃砕第二)", correctAnswer: t("studyTerminology.kata.gekisai-dai-ni.english", "Attack and Smash Number Two"), explanation: t("studyTerminology.kata.gekisai-dai-ni.explanation", "Second of the Gekisai kata, more advanced than Dai Ichi") },
        { id: "kata-saifa", question: "Saifa (砕破)", correctAnswer: t("studyTerminology.kata.saifa.english", "Smash and Tear"), explanation: t("studyTerminology.kata.saifa.explanation", "One of the traditional kaishugata") },
        { id: "kata-seiyunchin", question: "Seiyunchin (制引戦)", correctAnswer: t("studyTerminology.kata.seiyunchin.english", "Control and Pull Battle"), explanation: t("studyTerminology.kata.seiyunchin.explanation", "Kata focusing on close combat techniques") },
        { id: "kata-shisochin", question: "Shisochin (四向戦)", correctAnswer: t("studyTerminology.kata.shisochin.english", "Four Direction Battle"), explanation: t("studyTerminology.kata.shisochin.explanation", "Kata with techniques in four directions") },
        { id: "kata-sanseru", question: "Sanseru (三十六手)", correctAnswer: t("studyTerminology.kata.sanseru.english", "Thirty-Six Hands"), explanation: t("studyTerminology.kata.sanseru.explanation", "Advanced kata with 36 techniques") },
        { id: "kata-seipai", question: "Seipai (十八手)", correctAnswer: t("studyTerminology.kata.seipai.english", "Eighteen Hands"), explanation: t("studyTerminology.kata.seipai.explanation", "Advanced kata with 18 techniques") },
        { id: "kata-kururunfa", question: "Kururunfa (久留頓破)", correctAnswer: t("studyTerminology.kata.kururunfa.english", "Holding Ground"), explanation: t("studyTerminology.kata.kururunfa.explanation", "Advanced kata emphasizing stability and power") },
        { id: "kata-seisan", question: "Seisan (十三手)", correctAnswer: t("studyTerminology.kata.seisan.english", "Thirteen Hands"), explanation: t("studyTerminology.kata.seisan.explanation", "Advanced kata with 13 techniques") },
        { id: "kata-suparinpei", question: "Suparinpei (壱百零八手)", correctAnswer: t("studyTerminology.kata.suparinpei.english", "One Hundred and Eight Hands"), explanation: t("studyTerminology.kata.suparinpei.explanation", "The most advanced kata with 108 techniques") }
      ]
    },
    {
      id: "philosophy-flashcards",
      title: t("study.flashcardTypes.philosophy.title", "Philosophy Flashcards"),
      description: t("study.flashcardTypes.philosophy.description", "Learn Goju Ryu philosophical concepts and principles."),
      type: "flashcard",
      category: "philosophy",
      difficulty: "intermediate",
      questions: [
        { id: "philosophy-goju", question: "Goju Ryu (剛柔流)", correctAnswer: t("studyTerminology.philosophy.goju-ryu.english", "Hard-Soft Style"), explanation: t("studyTerminology.philosophy.goju-ryu.explanation", "The name means 'hard-soft style', combining hard and soft techniques") },
        { id: "philosophy-dojo-kun", question: "Dojo Kun (道場訓)", correctAnswer: t("studyTerminology.philosophy.dojo-kun.english", "Training Hall Precepts"), explanation: t("studyTerminology.philosophy.dojo-kun.explanation", "The five precepts that guide karate practice") },
        { id: "philosophy-karate-do", question: "Karate-do (空手道)", correctAnswer: t("studyTerminology.philosophy.karate-do.english", "Way of the Empty Hand"), explanation: t("studyTerminology.philosophy.karate-do.explanation", "The martial art as a way of life, not just fighting") },
        { id: "philosophy-mind-body", question: "Mind-Body Unity", correctAnswer: t("studyTerminology.philosophy.mind-body-unity.english", "Shin-Gi-Tai (心技体)"), explanation: t("studyTerminology.philosophy.mind-body-unity.explanation", "The unity of mind, technique, and body in training") },
        { id: "philosophy-respect", question: "Respect (礼)", correctAnswer: t("studyTerminology.philosophy.respect.english", "Rei"), explanation: t("studyTerminology.philosophy.respect.explanation", "Fundamental principle of respect in karate") },
        { id: "philosophy-perseverance", question: "Perseverance (忍)", correctAnswer: t("studyTerminology.philosophy.perseverance.english", "Nin"), explanation: t("studyTerminology.philosophy.perseverance.explanation", "Endurance and patience in training") },
        { id: "philosophy-etiquette", question: "Etiquette (礼儀)", correctAnswer: t("studyTerminology.philosophy.etiquette.english", "Reigi"), explanation: t("studyTerminology.philosophy.etiquette.explanation", "Proper behavior and manners in the dojo") },
        { id: "philosophy-character", question: "Character (人格)", correctAnswer: t("studyTerminology.philosophy.character.english", "Jinkaku"), explanation: t("studyTerminology.philosophy.character.explanation", "Building character through karate training") },
        { id: "philosophy-sincerity", question: "Sincerity (誠)", correctAnswer: t("studyTerminology.philosophy.sincerity.english", "Makoto"), explanation: t("studyTerminology.philosophy.sincerity.explanation", "Honesty and sincerity in practice") },
        { id: "philosophy-self-control", question: "Self-Control (自制)", correctAnswer: t("studyTerminology.philosophy.self-control.english", "Jisei"), explanation: t("studyTerminology.philosophy.self-control.explanation", "Controlling one's emotions and actions") }
      ]
    }
  ];

  // Add all flashcard studies
  studies.push(...flashcardStudies);

  // Add kata-specific study materials
  const kataStudies: Study[] = [
  {
    id: "kata-basics-quiz",
    title: t("study.quizTypes.kata-basics.title", "Kata Basics Quiz"),
    description: t("study.quizTypes.kata-basics.description", "Test your knowledge of fundamental kata concepts and principles."),
    type: "quiz",
    category: "kata",
    difficulty: "beginner",
    questions: [
      {
        id: "kata-basics-1",
        question: t("study.questions.kata-basics-1.question", "What does 'kata' mean in Japanese?"),
        options: [
          t("study.questions.kata-basics-1.option1", "Form"),
          t("study.questions.kata-basics-1.option2", "Fight"),
          t("study.questions.kata-basics-1.option3", "Technique"),
          t("study.questions.kata-basics-1.option4", "Style")
        ],
        correctAnswer: t("study.questions.kata-basics-1.correct", "Form"),
        explanation: t("study.questions.kata-basics-1.explanation", "Kata (型) means 'form' in Japanese and refers to the choreographed patterns of movements.")
      },
      {
        id: "kata-basics-2",
        question: t("study.questions.kata-basics-2.question", "How many kata are there in traditional Goju Ryu?"),
        options: [
          t("study.questions.kata-basics-2.option1", "8"),
          t("study.questions.kata-basics-2.option2", "10"),
          t("study.questions.kata-basics-2.option3", "12"),
          t("study.questions.kata-basics-2.option4", "15")
        ],
        correctAnswer: t("study.questions.kata-basics-2.correct", "12"),
        explanation: t("study.questions.kata-basics-2.explanation", "Traditional Goju Ryu has 12 kata: 2 heishugata (Sanchin, Tensho) and 10 kaishugata.")
      },
      {
        id: "kata-basics-3",
        question: t("study.questions.kata-basics-3.question", "What are the two main categories of kata in Goju Ryu?"),
        options: [
          t("study.questions.kata-basics-3.option1", "Hard and Soft"),
          t("study.questions.kata-basics-3.option2", "Heishugata and Kaishugata"),
          t("study.questions.kata-basics-3.option3", "Basic and Advanced"),
          t("study.questions.kata-basics-3.option4", "Old and New")
        ],
        correctAnswer: t("study.questions.kata-basics-3.correct", "Heishugata and Kaishugata"),
        explanation: t("study.questions.kata-basics-3.explanation", "Heishugata (closed hand) and Kaishugata (open hand) are the two main categories.")
      }
    ]
  },
  {
    id: "kata-history-quiz",
    title: t("study.quizTypes.kata-history.title", "Kata History Quiz"),
    description: t("study.quizTypes.kata-history.description", "Learn about the historical development and origins of kata."),
    type: "quiz",
    category: "kata",
    difficulty: "intermediate",
    questions: [
      {
        id: "kata-history-1",
        question: t("study.questions.kata-history-1.question", "Who created the Gekisai kata?"),
        options: [
          t("study.questions.kata-history-1.option1", "Kanryo Higaonna"),
          t("study.questions.kata-history-1.option2", "Chojun Miyagi"),
          t("study.questions.kata-history-1.option3", "Morio Higaonna"),
          t("study.questions.kata-history-1.option4", "Eiichi Miyazato")
        ],
        correctAnswer: t("study.questions.kata-history-1.correct", "Chojun Miyagi"),
        explanation: t("study.questions.kata-history-1.explanation", "Chojun Miyagi created Gekisai Dai Ichi and Gekisai Dai Ni in the 1940s.")
      },
      {
        id: "kata-history-2",
        question: t("study.questions.kata-history-2.question", "What does 'Sanchin' mean?"),
        options: [
          t("study.questions.kata-history-2.option1", "Three Battles"),
          t("study.questions.kata-history-2.option2", "Three Steps"),
          t("study.questions.kata-history-2.option3", "Three Hearts"),
          t("study.questions.kata-history-2.option4", "Three Minds")
        ],
        correctAnswer: t("study.questions.kata-history-2.correct", "Three Battles"),
        explanation: t("study.questions.kata-history-2.explanation", "Sanchin (三戦) means 'three battles' and refers to mind, body, and spirit.")
      }
    ]
  }
];

// Add philosophy study materials
const philosophyStudies: Study[] = [
  {
    id: "philosophy-principles-quiz",
    title: t("study.quizTypes.philosophy-principles.title", "Philosophy Principles Quiz"),
    description: t("study.quizTypes.philosophy-principles.description", "Test your understanding of Goju Ryu philosophical principles."),
    type: "quiz",
    category: "philosophy",
    difficulty: "intermediate",
    questions: [
      {
        id: "philosophy-1",
        question: t("study.questions.philosophy-1.question", "What does 'Goju' mean?"),
        options: [
          t("study.questions.philosophy-1.option1", "Hard-Soft"),
          t("study.questions.philosophy-1.option2", "Fast-Slow"),
          t("study.questions.philosophy-1.option3", "Strong-Weak"),
          t("study.questions.philosophy-1.option4", "Old-New")
        ],
        correctAnswer: t("study.questions.philosophy-1.correct", "Hard-Soft"),
        explanation: t("study.questions.philosophy-1.explanation", "Goju (剛柔) means 'hard-soft' and represents the balance of hard and soft techniques.")
      },
      {
        id: "philosophy-2",
        question: t("study.questions.philosophy-2.question", "What is 'Muchimi'?"),
        options: [
          t("study.questions.philosophy-2.option1", "Breathing"),
          t("study.questions.philosophy-2.option2", "Sticky Hands"),
          t("study.questions.philosophy-2.option3", "Focus"),
          t("study.questions.philosophy-2.option4", "Balance")
        ],
        correctAnswer: t("study.questions.philosophy-2.correct", "Sticky Hands"),
        explanation: t("study.questions.philosophy-2.explanation", "Muchimi refers to the ability to maintain contact with an opponent like sticky hands.")
      }
    ]
  }
];

// Add technique study materials
const techniqueStudies: Study[] = [
  {
    id: "basic-techniques-quiz",
    title: t("study.quizTypes.basic-techniques.title", "Basic Techniques Quiz"),
    description: t("study.quizTypes.basic-techniques.description", "Test your knowledge of fundamental karate techniques."),
    type: "quiz",
    category: "techniques",
    difficulty: "beginner",
    questions: [
      {
        id: "techniques-1",
        question: t("study.questions.techniques-1.question", "What is the most basic stance in karate?"),
        options: [
          t("study.questions.techniques-1.option1", "Sanchin Dachi"),
          t("study.questions.techniques-1.option2", "Zenkutsu Dachi"),
          t("study.questions.techniques-1.option3", "Hachiji Dachi"),
          t("study.questions.techniques-1.option4", "Kiba Dachi")
        ],
        correctAnswer: t("study.questions.techniques-1.correct", "Hachiji Dachi"),
        explanation: t("study.questions.techniques-1.explanation", "Hachiji Dachi (natural stance) is the most basic stance in karate.")
      },
      {
        id: "techniques-2",
        question: t("study.questions.techniques-2.question", "What does 'Uke' mean?"),
        options: [
          t("study.questions.techniques-2.option1", "Attack"),
          t("study.questions.techniques-2.option2", "Block"),
          t("study.questions.techniques-2.option3", "Strike"),
          t("study.questions.techniques-2.option4", "Kick")
        ],
        correctAnswer: t("study.questions.techniques-2.correct", "Block"),
        explanation: t("study.questions.techniques-2.explanation", "Uke (受け) means 'block' or 'receive' in Japanese.")
      }
    ]
  }
];

// Add kumite study materials
const kumiteStudies: Study[] = [
  {
    id: "kumite-basics-quiz",
    title: t("study.quizTypes.kumite-basics.title", "Kumite Basics Quiz"),
    description: t("study.quizTypes.kumite-basics.description", "Test your knowledge of sparring fundamentals."),
    type: "quiz",
    category: "kumite",
    difficulty: "beginner",
    questions: [
      {
        id: "kumite-1",
        question: t("study.questions.kumite-1.question", "What does 'Kumite' mean?"),
        options: [
          t("study.questions.kumite-1.option1", "Sparring"),
          t("study.questions.kumite-1.option2", "Fighting"),
          t("study.questions.kumite-1.option3", "Training"),
          t("study.questions.kumite-1.option4", "Competition")
        ],
        correctAnswer: t("study.questions.kumite-1.correct", "Sparring"),
        explanation: t("study.questions.kumite-1.explanation", "Kumite (組手) means 'sparring' or 'meeting of hands' in Japanese.")
      },
      {
        id: "kumite-2",
        question: t("study.questions.kumite-2.question", "What is 'Ippon Kumite'?"),
        options: [
          t("study.questions.kumite-2.option1", "Free Sparring"),
          t("study.questions.kumite-2.option2", "One-Step Sparring"),
          t("study.questions.kumite-2.option3", "Three-Step Sparring"),
          t("study.questions.kumite-2.option4", "Five-Step Sparring")
        ],
        correctAnswer: t("study.questions.kumite-2.correct", "One-Step Sparring"),
        explanation: t("study.questions.kumite-2.explanation", "Ippon Kumite is one-step sparring with predetermined attacks and defenses.")
      }
    ]
  }
];

// Add new cross-section study materials (History, Hojo Undo, Newaza, Rules)
const crossSectionStudies: Study[] = [
  {
    id: "history-origins-quiz",
    title: t("study.quizTypes.history-origins.title", "History & Origins Quiz"),
    description: t("study.quizTypes.history-origins.description", "Key people, places and origins of Goju Ryu."),
    type: "quiz",
    category: "history",
    difficulty: "intermediate",
    questions: [
      {
        id: "history-1",
        question: t("study.questions.history-1.question", "Who founded Goju Ryu?"),
        options: [
          t("study.questions.history-1.option1", "Chojun Miyagi"),
          t("study.questions.history-1.option2", "Kanryo Higaonna"),
          t("study.questions.history-1.option3", "Gichin Funakoshi"),
          t("study.questions.history-1.option4", "Kenwa Mabuni")
        ],
        correctAnswer: t("study.questions.history-1.correct", "Chojun Miyagi"),
        explanation: t("study.questions.history-1.explanation", "Chojun Miyagi formally named the style Goju Ryu, inspired by the Bubishi.")
      },
      {
        id: "history-2",
        question: t("study.questions.history-2.question", "Which teacher strongly influenced Chojun Miyagi?"),
        options: [
          t("study.questions.history-2.option1", "Kanryo Higaonna"),
          t("study.questions.history-2.option2", "Anko Itosu"),
          t("study.questions.history-2.option3", "Mabuni Kenwa"),
          t("study.questions.history-2.option4", "Motobu Choki")
        ],
        correctAnswer: t("study.questions.history-2.correct", "Kanryo Higaonna"),
        explanation: t("study.questions.history-2.explanation", "Miyagi was a top student of Kanryo Higaonna.")
      }
    ]
  },
  {
    id: "hojo-undo-basics-quiz",
    title: t("study.quizTypes.hojo-undo-basics.title", "Hojo Undo Basics Quiz"),
    description: t("study.quizTypes.hojo-undo-basics.description", "Equipment names and training focus (chi-ishi, ishi sashi, nigiri game, kongoken)."),
    type: "quiz",
    category: "hojo-undo",
    difficulty: "beginner",
    questions: [
      {
        id: "hojo-1",
        question: t("study.questions.hojo-1.question", "Which tool is a stone lever used for circular strength?"),
        options: [
          t("study.questions.hojo-1.option1", "Chi-ishi"),
          t("study.questions.hojo-1.option2", "Ishi sashi"),
          t("study.questions.hojo-1.option3", "Nigiri game"),
          t("study.questions.hojo-1.option4", "Kongoken")
        ],
        correctAnswer: t("study.questions.hojo-1.correct", "Chi-ishi"),
        explanation: t("study.questions.hojo-1.explanation", "Chi-ishi trains circular strength and wrist/forearm conditioning.")
      },
      {
        id: "hojo-2",
        question: t("study.questions.hojo-2.question", "Which tool primarily trains grip strength?"),
        options: [
          t("study.questions.hojo-2.option1", "Nigiri game"),
          t("study.questions.hojo-2.option2", "Kongoken"),
          t("study.questions.hojo-2.option3", "Ishi sashi"),
          t("study.questions.hojo-2.option4", "Makiwara")
        ],
        correctAnswer: t("study.questions.hojo-2.correct", "Nigiri game"),
        explanation: t("study.questions.hojo-2.explanation", "Nigiri game jars are used to develop grip strength and stance.")
      }
    ]
  },
  {
    id: "newaza-intro-quiz",
    title: t("study.quizTypes.newaza-intro.title", "Newaza Introduction Quiz"),
    description: t("study.quizTypes.newaza-intro.description", "Fundamental ground positions and control concepts."),
    type: "quiz",
    category: "newaza",
    difficulty: "intermediate",
    questions: [
      {
        id: "newaza-1",
        question: t("study.questions.newaza-1.question", "Which position emphasizes chest-to-chest control from the side?"),
        options: [
          t("study.questions.newaza-1.option1", "Side control"),
          t("study.questions.newaza-1.option2", "Mount"),
          t("study.questions.newaza-1.option3", "Guard"),
          t("study.questions.newaza-1.option4", "Back control")
        ],
        correctAnswer: t("study.questions.newaza-1.correct", "Side control"),
        explanation: t("study.questions.newaza-1.explanation", "Side control (yoko shiho-like control) focuses on chest-to-chest pressure.")
      }
    ]
  },
  {
    id: "kumite-rules-quiz",
    title: t("study.quizTypes.kumite-rules.title", "Kumite Rules Quiz"),
    description: t("study.quizTypes.kumite-rules.description", "Scoring, penalties and referee commands."),
    type: "quiz",
    category: "kumite",
    difficulty: "advanced",
    questions: [
      {
        id: "rules-1",
        question: t("study.questions.rules-1.question", "What does 'Hansoku' mean?"),
        options: [
          t("study.questions.rules-1.option1", "Foul"),
          t("study.questions.rules-1.option2", "Extension round"),
          t("study.questions.rules-1.option3", "Draw"),
          t("study.questions.rules-1.option4", "Half point")
        ],
        correctAnswer: t("study.questions.rules-1.correct", "Foul"),
        explanation: t("study.questions.rules-1.explanation", "Hansoku is a foul; serious infractions can lead to disqualification.")
      }
    ]
  }
];

  // Add all study materials
  studies.push(
    ...kataStudies,
    ...philosophyStudies,
    ...techniqueStudies,
    ...kumiteStudies,
    ...crossSectionStudies
  );

  // Add matching studies for different content types
  const matchingStudies: Study[] = [
  {
    id: "kata-matching",
      title: t("study.matchingTypes.kata.title", "Kata Matching"),
      description: t("study.matchingTypes.kata.description", "Match kata names with their meanings and characteristics."),
    type: "matching",
    category: "kata",
    difficulty: "intermediate",
    image: "https://images.unsplash.com/photo-1616280162269-3a75fe12edba?q=80&w=2070&auto=format&fit=crop",
    questions: [
      {
        id: "kata-matching-1",
        question: "Match the kata with its meaning",
        correctAnswer: "Sanchin - Three Battles, Gekisai - Attack and Smash, Tensho - Turning Palms",
        explanation: "Each kata has a specific meaning that reflects its purpose and characteristics."
      }
    ]
  },
  {
    id: "terminology-matching",
      title: t("study.matchingTypes.terminology.title", "Terminology Matching"),
      description: t("study.matchingTypes.terminology.description", "Match Japanese terms to their English meanings across categories."),
    type: "matching",
    category: "terminology",
    difficulty: "advanced",
    questions: [
      {
        id: "terminology-matching-1",
          question: t("study.matchingTypes.terminology.q1", "Match the Japanese term to its meaning: Rei, Kime, Zanshin"),
          correctAnswer: t("study.matchingTypes.terminology.a1", "Rei-Respect, Kime-Focus, Zanshin-Remaining mind"),
          explanation: t("study.matchingTypes.terminology.e1", "Fundamental dojo concepts used throughout training.")
      }
    ]
  }
];
  studies.push(...matchingStudies);

  return studies;
};

// Export other data as needed (ensure TechniqueData is not exported twice)
export { techniquesData }; 
