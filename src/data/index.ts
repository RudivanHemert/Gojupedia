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
            question: t(`study.terminology.${category}.terms.${key}.question`, `What is the meaning of "${term.name}"?`),
            options: allOptions.sort(() => Math.random() - 0.5), // Shuffle options
            correctAnswer: correctAnswer,
            explanation: term.details || t(`study.terminology.${category}.terms.${key}.explanation`, `Japanese: ${term.japanese || 'N/A'}`)
          };
        });

        if (questions.length > 0) {
          studies.push({
            id: category,
            title: t(`study.quizTypes.${category}.title`, `${category} Quiz`),
            description: t(`study.quizTypes.${category}.description`, `Test your knowledge of ${category} terminology.`),
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

// Generate study materials for all terminology categories
export const studies: Study[] = generateStudiesFromTechniques(allTerminologyCategories, i18n.t);

// Add flashcard studies
allTerminologyCategories.forEach(category => {
  try {
    const i18nKey = `terminology.sections.${category}-content.terms` as const;
    
    const terms = i18n.t(i18nKey, { returnObjects: true }) as Record<string, { name: string; japanese?: string; english: string }>;

    if (terms && typeof terms === 'object' && Object.keys(terms).length > 0) {
      studies.push({
        id: `${category}-flashcards`,
        title: i18n.t(`study.flashcardTypes.${category}.title`, `${category} Flashcards`),
        description: i18n.t(`study.flashcardTypes.${category}.description`, `Practice ${category} terminology with flashcards.`),
        type: "flashcard",
        category: "terminology",
        difficulty: "beginner",
        questions: Object.entries(terms).map(([key, term]) => ({
          id: `${category}-flashcard-${key}`,
          question: term.name,
          correctAnswer: `${term.english}${term.japanese ? ` (${term.japanese})` : ''}`,
          explanation: i18n.t(`study.terminology.${category}.terms.${key}.explanation`, `Japanese: ${term.japanese || 'N/A'}`)
        }))
      });
    }
  } catch (error) {
    // Silently skip categories that don't have the expected structure
    console.debug(`Skipping ${category} flashcards - no terms available`);
  }
});

// Add comprehensive flashcard studies for all categories
const flashcardStudies: Study[] = [
  // Stances Flashcards
  {
    id: "stances-flashcards",
    title: i18n.t("study.flashcardTypes.stances.title", "Stances Flashcards"),
    description: i18n.t("study.flashcardTypes.stances.description", "Learn all karate stances and positions."),
    type: "flashcard",
    category: "techniques",
    difficulty: "beginner",
    questions: [
      {
        id: "stance-hachiji",
        question: "Hachiji dachi (八字立)",
        correctAnswer: i18n.t("study.terminology.stances.hachiji-dachi.english", "Natural stance"),
        explanation: i18n.t("study.terminology.stances.hachiji-dachi.explanation", "Basic natural stance with feet shoulder-width apart")
      },
      {
        id: "stance-sanchin",
        question: "Sanchin dachi (三戦立)",
        correctAnswer: i18n.t("study.terminology.stances.sanchin-dachi.english", "Hour glass stance"),
        explanation: i18n.t("study.terminology.stances.sanchin-dachi.explanation", "Strong stance with feet turned inward, knees bent")
      },
      {
        id: "stance-zenkutsu",
        question: "Zenkutsu dachi (前屈立)",
        correctAnswer: i18n.t("study.terminology.stances.zenkutsu-dachi.english", "Long stance"),
        explanation: i18n.t("study.terminology.stances.zenkutsu-dachi.explanation", "Forward stance with weight on front leg")
      },
      {
        id: "stance-kokutsu",
        question: "Kokutsu dachi (後屈立)",
        correctAnswer: i18n.t("study.terminology.stances.kokutsu-dachi.english", "Back stance"),
        explanation: i18n.t("study.terminology.stances.kokutsu-dachi.explanation", "Back stance with weight on rear leg")
      },
      {
        id: "stance-kiba",
        question: "Kiba dachi (騎馬立)",
        correctAnswer: i18n.t("study.terminology.stances.kiba-dachi.english", "Straddle stance"),
        explanation: i18n.t("study.terminology.stances.kiba-dachi.explanation", "Horse stance with feet wide apart")
      },
      {
        id: "stance-nekoashi",
        question: "Neko ashi dachi (猫足立)",
        correctAnswer: i18n.t("study.terminology.stances.neko-ashi-dachi.english", "Cat stance"),
        explanation: i18n.t("study.terminology.stances.neko-ashi-dachi.explanation", "Cat stance with weight on back leg")
      }
    ]
  },
  // Kicks Flashcards
  {
    id: "kicks-flashcards",
    title: i18n.t("study.flashcardTypes.kicks.title", "Kicks Flashcards"),
    description: i18n.t("study.flashcardTypes.kicks.description", "Learn all karate kicking techniques."),
    type: "flashcard",
    category: "techniques",
    difficulty: "beginner",
    questions: [
      {
        id: "kick-mae",
        question: "Mae Geri (前蹴り)",
        correctAnswer: i18n.t("study.terminology.kicks.mae-geri.english", "Front Kick"),
        explanation: i18n.t("study.terminology.kicks.mae-geri.explanation", "Kick delivered to the front with the ball of the foot")
      },
      {
        id: "kick-yoko",
        question: "Yoko Geri (横蹴り)",
        correctAnswer: i18n.t("study.terminology.kicks.yoko-geri.english", "Side Kick"),
        explanation: i18n.t("study.terminology.kicks.yoko-geri.explanation", "Kick delivered to the side with the edge of the foot")
      },
      {
        id: "kick-mawashi",
        question: "Mawashi Geri (回し蹴り)",
        correctAnswer: i18n.t("study.terminology.kicks.mawashi-geri.english", "Roundhouse Kick"),
        explanation: i18n.t("study.terminology.kicks.mawashi-geri.explanation", "Circular kick using the instep or ball of the foot")
      },
      {
        id: "kick-ushiro",
        question: "Ushiro Geri (後ろ蹴り)",
        correctAnswer: i18n.t("study.terminology.kicks.ushiro-geri.english", "Back Kick"),
        explanation: i18n.t("study.terminology.kicks.ushiro-geri.explanation", "Kick delivered backward with the heel")
      },
      {
        id: "kick-mikazuki",
        question: "Mikazuki Geri (三日月蹴り)",
        correctAnswer: i18n.t("study.terminology.kicks.mikazuki-geri.english", "Crescent Kick"),
        explanation: i18n.t("study.terminology.kicks.mikazuki-geri.explanation", "Circular kick in a crescent motion")
      }
    ]
  },
  // Punches Flashcards
  {
    id: "punches-flashcards",
    title: i18n.t("study.flashcardTypes.punches.title", "Punches Flashcards"),
    description: i18n.t("study.flashcardTypes.punches.description", "Learn all karate punching techniques."),
    type: "flashcard",
    category: "techniques",
    difficulty: "beginner",
    questions: [
      {
        id: "punch-seiken",
        question: "Seiken Tsuki (正拳突き)",
        correctAnswer: i18n.t("study.terminology.punches.seiken-tsuki.english", "Forefist Punch"),
        explanation: i18n.t("study.terminology.punches.seiken-tsuki.explanation", "Basic punch with the first two knuckles")
      },
      {
        id: "punch-gyaku",
        question: "Gyaku Tsuki (逆突き)",
        correctAnswer: i18n.t("study.terminology.punches.gyaku-tsuki.english", "Reverse Punch"),
        explanation: i18n.t("study.terminology.punches.gyaku-tsuki.explanation", "Punch with the opposite hand to the forward foot")
      },
      {
        id: "punch-oi",
        question: "Oi Tsuki (追い突き)",
        correctAnswer: i18n.t("study.terminology.punches.oi-tsuki.english", "Lunge Punch"),
        explanation: i18n.t("study.terminology.punches.oi-tsuki.explanation", "Stepping punch with the same hand as the forward foot")
      },
      {
        id: "punch-kizami",
        question: "Kizami Tsuki (刻み突き)",
        correctAnswer: i18n.t("study.terminology.punches.kizami-tsuki.english", "Jab Punch"),
        explanation: i18n.t("study.terminology.punches.kizami-tsuki.explanation", "Quick jab punch with the front hand")
      }
    ]
  },
  // Blocks Flashcards
  {
    id: "blocks-flashcards",
    title: i18n.t("study.flashcardTypes.blocks.title", "Blocks Flashcards"),
    description: i18n.t("study.flashcardTypes.blocks.description", "Learn all karate blocking techniques."),
    type: "flashcard",
    category: "techniques",
    difficulty: "beginner",
    questions: [
      {
        id: "block-age-uke",
        question: "Age Uke (上げ受け)",
        correctAnswer: i18n.t("study.terminology.blocks.age-uke.english", "Rising Block"),
        explanation: i18n.t("study.terminology.blocks.age-uke.explanation", "Block that deflects attacks upward")
      },
      {
        id: "block-gedan-barai",
        question: "Gedan Barai (下段払い)",
        correctAnswer: i18n.t("study.terminology.blocks.gedan-barai.english", "Downward Sweep"),
        explanation: i18n.t("study.terminology.blocks.gedan-barai.explanation", "Sweeping block for low attacks")
      },
      {
        id: "block-soto-uke",
        question: "Soto Uke (外受け)",
        correctAnswer: i18n.t("study.terminology.blocks.soto-uke.english", "Outside Block"),
        explanation: i18n.t("study.terminology.blocks.soto-uke.explanation", "Block that deflects attacks from inside to outside")
      },
      {
        id: "block-uchi-uke",
        question: "Uchi Uke (内受け)",
        correctAnswer: i18n.t("study.terminology.blocks.uchi-uke.english", "Inside Block"),
        explanation: i18n.t("study.terminology.blocks.uchi-uke.explanation", "Block that deflects attacks from outside to inside")
      }
    ]
  },
  // Kata Flashcards
  {
    id: "kata-flashcards",
    title: i18n.t("study.flashcardTypes.kata.title", "Kata Flashcards"),
    description: i18n.t("study.flashcardTypes.kata.description", "Learn all Goju Ryu kata names and meanings."),
    type: "flashcard",
    category: "kata",
    difficulty: "intermediate",
    questions: [
      {
        id: "kata-sanchin",
        question: "Sanchin (三戦)",
        correctAnswer: i18n.t("study.terminology.kata.sanchin.english", "Three Battles"),
        explanation: i18n.t("study.terminology.kata.sanchin.explanation", "Represents mind, body, and spirit - the foundation kata")
      },
      {
        id: "kata-tensho",
        question: "Tensho (転掌)",
        correctAnswer: i18n.t("study.terminology.kata.tensho.english", "Turning Palms"),
        explanation: i18n.t("study.terminology.kata.tensho.explanation", "Soft circular movements contrasting with Sanchin's hardness")
      },
      {
        id: "kata-gekisai-dai-ichi",
        question: "Gekisai Dai Ichi (撃砕第一)",
        correctAnswer: i18n.t("study.terminology.kata.gekisai-dai-ichi.english", "Attack and Smash Number One"),
        explanation: i18n.t("study.terminology.kata.gekisai-dai-ichi.explanation", "First of the Gekisai kata, created by Chojun Miyagi")
      },
      {
        id: "kata-gekisai-dai-ni",
        question: "Gekisai Dai Ni (撃砕第二)",
        correctAnswer: i18n.t("study.terminology.kata.gekisai-dai-ni.english", "Attack and Smash Number Two"),
        explanation: i18n.t("study.terminology.kata.gekisai-dai-ni.explanation", "Second of the Gekisai kata, more advanced than Dai Ichi")
      },
      {
        id: "kata-saifa",
        question: "Saifa (砕破)",
        correctAnswer: i18n.t("study.terminology.kata.saifa.english", "Smash and Tear"),
        explanation: i18n.t("study.terminology.kata.saifa.explanation", "One of the traditional kaishugata")
      },
      {
        id: "kata-seiyunchin",
        question: "Seiyunchin (制引戦)",
        correctAnswer: i18n.t("study.terminology.kata.seiyunchin.english", "Control and Pull Battle"),
        explanation: i18n.t("study.terminology.kata.seiyunchin.explanation", "Kata focusing on close combat techniques")
      },
      {
        id: "kata-shisochin",
        question: "Shisochin (四向戦)",
        correctAnswer: i18n.t("study.terminology.kata.shisochin.english", "Four Direction Battle"),
        explanation: i18n.t("study.terminology.kata.shisochin.explanation", "Kata with techniques in four directions")
      },
      {
        id: "kata-sanseru",
        question: "Sanseru (三十六手)",
        correctAnswer: i18n.t("study.terminology.kata.sanseru.english", "Thirty-Six Hands"),
        explanation: i18n.t("study.terminology.kata.sanseru.explanation", "Advanced kata with 36 techniques")
      },
      {
        id: "kata-seipai",
        question: "Seipai (十八手)",
        correctAnswer: i18n.t("study.terminology.kata.seipai.english", "Eighteen Hands"),
        explanation: i18n.t("study.terminology.kata.seipai.explanation", "Advanced kata with 18 techniques")
      },
      {
        id: "kata-kururunfa",
        question: "Kururunfa (久留頓破)",
        correctAnswer: i18n.t("study.terminology.kata.kururunfa.english", "Holding Ground"),
        explanation: i18n.t("study.terminology.kata.kururunfa.explanation", "Advanced kata emphasizing stability and power")
      },
      {
        id: "kata-seisan",
        question: "Seisan (十三手)",
        correctAnswer: i18n.t("study.terminology.kata.seisan.english", "Thirteen Hands"),
        explanation: i18n.t("study.terminology.kata.seisan.explanation", "Advanced kata with 13 techniques")
      },
      {
        id: "kata-suparinpei",
        question: "Suparinpei (壱百零八手)",
        correctAnswer: i18n.t("study.terminology.kata.suparinpei.english", "One Hundred and Eight Hands"),
        explanation: i18n.t("study.terminology.kata.suparinpei.explanation", "The most advanced kata with 108 techniques")
      }
    ]
  },
  // Philosophy Flashcards
  {
    id: "philosophy-flashcards",
    title: i18n.t("study.flashcardTypes.philosophy.title", "Philosophy Flashcards"),
    description: i18n.t("study.flashcardTypes.philosophy.description", "Learn Goju Ryu philosophical concepts and principles."),
    type: "flashcard",
    category: "philosophy",
    difficulty: "intermediate",
    questions: [
      {
        id: "philosophy-goju",
        question: "Goju Ryu (剛柔流)",
        correctAnswer: i18n.t("study.terminology.philosophy.goju-ryu.english", "Hard-Soft Style"),
        explanation: i18n.t("study.terminology.philosophy.goju-ryu.explanation", "The name means 'hard-soft style', combining hard and soft techniques")
      },
      {
        id: "philosophy-dojo-kun",
        question: "Dojo Kun (道場訓)",
        correctAnswer: i18n.t("study.terminology.philosophy.dojo-kun.english", "Training Hall Precepts"),
        explanation: i18n.t("study.terminology.philosophy.dojo-kun.explanation", "The five precepts that guide karate practice")
      },
      {
        id: "philosophy-karate-do",
        question: "Karate-do (空手道)",
        correctAnswer: i18n.t("study.terminology.philosophy.karate-do.english", "Way of the Empty Hand"),
        explanation: i18n.t("study.terminology.philosophy.karate-do.explanation", "The martial art as a way of life, not just fighting")
      },
      {
        id: "philosophy-mind-body",
        question: "Mind-Body Unity",
        correctAnswer: i18n.t("study.terminology.philosophy.mind-body-unity.english", "Shin-Gi-Tai (心技体)"),
        explanation: i18n.t("study.terminology.philosophy.mind-body-unity.explanation", "The unity of mind, technique, and body in training")
      },
      {
        id: "philosophy-respect",
        question: "Respect (礼)",
        correctAnswer: i18n.t("study.terminology.philosophy.respect.english", "Rei"),
        explanation: i18n.t("study.terminology.philosophy.respect.explanation", "Fundamental principle of respect in karate")
      },
      {
        id: "philosophy-perseverance",
        question: "Perseverance (忍)",
        correctAnswer: i18n.t("study.terminology.philosophy.perseverance.english", "Nin"),
        explanation: i18n.t("study.terminology.philosophy.perseverance.explanation", "Endurance and patience in training")
      },
      {
        id: "philosophy-etiquette",
        question: "Etiquette (礼儀)",
        correctAnswer: i18n.t("study.terminology.philosophy.etiquette.english", "Reigi"),
        explanation: i18n.t("study.terminology.philosophy.etiquette.explanation", "Proper behavior and manners in the dojo")
      },
      {
        id: "philosophy-character",
        question: "Character (人格)",
        correctAnswer: i18n.t("study.terminology.philosophy.character.english", "Jinkaku"),
        explanation: i18n.t("study.terminology.philosophy.character.explanation", "Building character through karate training")
      },
      {
        id: "philosophy-sincerity",
        question: "Sincerity (誠)",
        correctAnswer: i18n.t("study.terminology.philosophy.sincerity.english", "Makoto"),
        explanation: i18n.t("study.terminology.philosophy.sincerity.explanation", "Honesty and sincerity in practice")
      },
      {
        id: "philosophy-self-control",
        question: "Self-Control (自制)",
        correctAnswer: i18n.t("study.terminology.philosophy.self-control.english", "Jisei"),
        explanation: i18n.t("study.terminology.philosophy.self-control.explanation", "Controlling one's emotions and actions")
      }
    ]
  },
  // Numbers Flashcards
  {
    id: "numbers-flashcards",
    title: i18n.t("study.flashcardTypes.numbers.title", "Numbers Flashcards"),
    description: i18n.t("study.flashcardTypes.numbers.description", "Learn Japanese numbers used in karate."),
    type: "flashcard",
    category: "terminology",
    difficulty: "beginner",
    questions: [
      {
        id: "number-ichi",
        question: "一 (Ichi)",
        correctAnswer: i18n.t("study.terminology.numbers.ichi.english", "One"),
        explanation: i18n.t("study.terminology.numbers.ichi.explanation", "First number, used in counting techniques")
      },
      {
        id: "number-ni",
        question: "二 (Ni)",
        correctAnswer: i18n.t("study.terminology.numbers.ni.english", "Two"),
        explanation: i18n.t("study.terminology.numbers.ni.explanation", "Second number, used in counting techniques")
      },
      {
        id: "number-san",
        question: "三 (San)",
        correctAnswer: i18n.t("study.terminology.numbers.san.english", "Three"),
        explanation: i18n.t("study.terminology.numbers.san.explanation", "Third number, used in counting techniques")
      },
      {
        id: "number-yon",
        question: "四 (Yon)",
        correctAnswer: i18n.t("study.terminology.numbers.yon.english", "Four"),
        explanation: i18n.t("study.terminology.numbers.yon.explanation", "Fourth number, used in counting techniques")
      },
      {
        id: "number-go",
        question: "五 (Go)",
        correctAnswer: i18n.t("study.terminology.numbers.go.english", "Five"),
        explanation: i18n.t("study.terminology.numbers.go.explanation", "Fifth number, used in counting techniques")
      },
      {
        id: "number-roku",
        question: "六 (Roku)",
        correctAnswer: i18n.t("study.terminology.numbers.roku.english", "Six"),
        explanation: i18n.t("study.terminology.numbers.roku.explanation", "Sixth number, used in counting techniques")
      },
      {
        id: "number-shichi",
        question: "七 (Shichi)",
        correctAnswer: i18n.t("study.terminology.numbers.shichi.english", "Seven"),
        explanation: i18n.t("study.terminology.numbers.shichi.explanation", "Seventh number, used in counting techniques")
      },
      {
        id: "number-hachi",
        question: "八 (Hachi)",
        correctAnswer: i18n.t("study.terminology.numbers.hachi.english", "Eight"),
        explanation: i18n.t("study.terminology.numbers.hachi.explanation", "Eighth number, used in counting techniques")
      },
      {
        id: "number-kyu",
        question: "九 (Kyu)",
        correctAnswer: i18n.t("study.terminology.numbers.kyu.english", "Nine"),
        explanation: i18n.t("study.terminology.numbers.kyu.explanation", "Ninth number, used in counting techniques")
      },
      {
        id: "number-ju",
        question: "十 (Ju)",
        correctAnswer: i18n.t("study.terminology.numbers.ju.english", "Ten"),
        explanation: i18n.t("study.terminology.numbers.ju.explanation", "Tenth number, used in counting techniques")
      }
    ]
  },
  // General Terms Flashcards
  {
    id: "general-flashcards",
    title: i18n.t("study.flashcardTypes.general.title", "General Terms Flashcards"),
    description: i18n.t("study.flashcardTypes.general.description", "Learn essential karate terminology."),
    type: "flashcard",
    category: "terminology",
    difficulty: "beginner",
    questions: [
      {
        id: "general-dojo",
        question: "道場 (Dojo)",
        correctAnswer: i18n.t("study.terminology.general.dojo.english", "Training Hall"),
        explanation: i18n.t("study.terminology.general.dojo.explanation", "The place where karate is practiced")
      },
      {
        id: "general-sensei",
        question: "先生 (Sensei)",
        correctAnswer: i18n.t("study.terminology.general.sensei.english", "Teacher"),
        explanation: i18n.t("study.terminology.general.sensei.explanation", "Respectful term for karate instructor")
      },
      {
        id: "general-sempai",
        question: "先輩 (Sempai)",
        correctAnswer: i18n.t("study.terminology.general.sempai.english", "Senior Student"),
        explanation: i18n.t("study.terminology.general.sempai.explanation", "Student with more experience")
      },
      {
        id: "general-kohai",
        question: "後輩 (Kohai)",
        correctAnswer: i18n.t("study.terminology.general.kohai.english", "Junior Student"),
        explanation: i18n.t("study.terminology.general.kohai.explanation", "Student with less experience")
      },
      {
        id: "general-obi",
        question: "帯 (Obi)",
        correctAnswer: i18n.t("study.terminology.general.obi.english", "Belt"),
        explanation: i18n.t("study.terminology.general.obi.explanation", "The belt worn with the karate uniform")
      },
      {
        id: "general-gi",
        question: "着 (Gi)",
        correctAnswer: i18n.t("study.terminology.general.gi.english", "Uniform"),
        explanation: i18n.t("study.terminology.general.gi.explanation", "The karate training uniform")
      },
      {
        id: "general-kumite",
        question: "組手 (Kumite)",
        correctAnswer: i18n.t("study.terminology.general.kumite.english", "Sparring"),
        explanation: i18n.t("study.terminology.general.kumite.explanation", "Partner training and fighting practice")
      },
      {
        id: "general-kata",
        question: "型 (Kata)",
        correctAnswer: i18n.t("study.terminology.general.kata.english", "Form"),
        explanation: i18n.t("study.terminology.general.kata.explanation", "Pre-arranged sequence of techniques")
      },
      {
        id: "general-kihon",
        question: "基本 (Kihon)",
        correctAnswer: i18n.t("study.terminology.general.kihon.english", "Basics"),
        explanation: i18n.t("study.terminology.general.kihon.explanation", "Fundamental techniques and movements")
      },
      {
        id: "general-bunkai",
        question: "分解 (Bunkai)",
        correctAnswer: i18n.t("study.terminology.general.bunkai.english", "Analysis"),
        explanation: i18n.t("study.terminology.general.bunkai.explanation", "Application of kata techniques")
      }
    ]
  }
];

// Add all flashcard studies to the main studies array
studies.push(...flashcardStudies);

// Add kata-specific study materials
const kataStudies: Study[] = [
  {
    id: "kata-basics-quiz",
    title: i18n.t("study.quizTypes.kata-basics.title", "Kata Basics Quiz"),
    description: i18n.t("study.quizTypes.kata-basics.description", "Test your knowledge of fundamental kata concepts and principles."),
    type: "quiz",
    category: "kata",
    difficulty: "beginner",
    questions: [
      {
        id: "kata-basics-1",
        question: i18n.t("study.questions.kata-basics-1.question", "What does 'kata' mean in Japanese?"),
        options: [
          i18n.t("study.questions.kata-basics-1.option1", "Form"),
          i18n.t("study.questions.kata-basics-1.option2", "Fight"),
          i18n.t("study.questions.kata-basics-1.option3", "Technique"),
          i18n.t("study.questions.kata-basics-1.option4", "Style")
        ],
        correctAnswer: i18n.t("study.questions.kata-basics-1.correct", "Form"),
        explanation: i18n.t("study.questions.kata-basics-1.explanation", "Kata (型) means 'form' in Japanese and refers to the choreographed patterns of movements.")
      },
      {
        id: "kata-basics-2",
        question: i18n.t("study.questions.kata-basics-2.question", "How many kata are there in traditional Goju Ryu?"),
        options: [
          i18n.t("study.questions.kata-basics-2.option1", "8"),
          i18n.t("study.questions.kata-basics-2.option2", "10"),
          i18n.t("study.questions.kata-basics-2.option3", "12"),
          i18n.t("study.questions.kata-basics-2.option4", "15")
        ],
        correctAnswer: i18n.t("study.questions.kata-basics-2.correct", "12"),
        explanation: i18n.t("study.questions.kata-basics-2.explanation", "Traditional Goju Ryu has 12 kata: 2 heishugata (Sanchin, Tensho) and 10 kaishugata.")
      },
      {
        id: "kata-basics-3",
        question: i18n.t("study.questions.kata-basics-3.question", "What are the two main categories of kata in Goju Ryu?"),
        options: [
          i18n.t("study.questions.kata-basics-3.option1", "Hard and Soft"),
          i18n.t("study.questions.kata-basics-3.option2", "Heishugata and Kaishugata"),
          i18n.t("study.questions.kata-basics-3.option3", "Basic and Advanced"),
          i18n.t("study.questions.kata-basics-3.option4", "Old and New")
        ],
        correctAnswer: i18n.t("study.questions.kata-basics-3.correct", "Heishugata and Kaishugata"),
        explanation: i18n.t("study.questions.kata-basics-3.explanation", "Heishugata (closed hand) and Kaishugata (open hand) are the two main categories.")
      }
    ]
  },
  {
    id: "kata-history-quiz",
    title: i18n.t("study.quizTypes.kata-history.title", "Kata History Quiz"),
    description: i18n.t("study.quizTypes.kata-history.description", "Learn about the historical development and origins of kata."),
    type: "quiz",
    category: "kata",
    difficulty: "intermediate",
    questions: [
      {
        id: "kata-history-1",
        question: i18n.t("study.questions.kata-history-1.question", "Who created the Gekisai kata?"),
        options: [
          i18n.t("study.questions.kata-history-1.option1", "Kanryo Higaonna"),
          i18n.t("study.questions.kata-history-1.option2", "Chojun Miyagi"),
          i18n.t("study.questions.kata-history-1.option3", "Morio Higaonna"),
          i18n.t("study.questions.kata-history-1.option4", "Eiichi Miyazato")
        ],
        correctAnswer: i18n.t("study.questions.kata-history-1.correct", "Chojun Miyagi"),
        explanation: i18n.t("study.questions.kata-history-1.explanation", "Chojun Miyagi created Gekisai Dai Ichi and Gekisai Dai Ni in the 1940s.")
      },
      {
        id: "kata-history-2",
        question: i18n.t("study.questions.kata-history-2.question", "What does 'Sanchin' mean?"),
        options: [
          i18n.t("study.questions.kata-history-2.option1", "Three Battles"),
          i18n.t("study.questions.kata-history-2.option2", "Three Steps"),
          i18n.t("study.questions.kata-history-2.option3", "Three Hearts"),
          i18n.t("study.questions.kata-history-2.option4", "Three Minds")
        ],
        correctAnswer: i18n.t("study.questions.kata-history-2.correct", "Three Battles"),
        explanation: i18n.t("study.questions.kata-history-2.explanation", "Sanchin (三戦) means 'three battles' and refers to mind, body, and spirit.")
      }
    ]
  }
];

// Add philosophy study materials
const philosophyStudies: Study[] = [
  {
    id: "philosophy-principles-quiz",
    title: i18n.t("study.quizTypes.philosophy-principles.title", "Philosophy Principles Quiz"),
    description: i18n.t("study.quizTypes.philosophy-principles.description", "Test your understanding of Goju Ryu philosophical principles."),
    type: "quiz",
    category: "philosophy",
    difficulty: "intermediate",
    questions: [
      {
        id: "philosophy-1",
        question: i18n.t("study.questions.philosophy-1.question", "What does 'Goju' mean?"),
        options: [
          i18n.t("study.questions.philosophy-1.option1", "Hard-Soft"),
          i18n.t("study.questions.philosophy-1.option2", "Fast-Slow"),
          i18n.t("study.questions.philosophy-1.option3", "Strong-Weak"),
          i18n.t("study.questions.philosophy-1.option4", "Old-New")
        ],
        correctAnswer: i18n.t("study.questions.philosophy-1.correct", "Hard-Soft"),
        explanation: i18n.t("study.questions.philosophy-1.explanation", "Goju (剛柔) means 'hard-soft' and represents the balance of hard and soft techniques.")
      },
      {
        id: "philosophy-2",
        question: i18n.t("study.questions.philosophy-2.question", "What is 'Muchimi'?"),
        options: [
          i18n.t("study.questions.philosophy-2.option1", "Breathing"),
          i18n.t("study.questions.philosophy-2.option2", "Sticky Hands"),
          i18n.t("study.questions.philosophy-2.option3", "Focus"),
          i18n.t("study.questions.philosophy-2.option4", "Balance")
        ],
        correctAnswer: i18n.t("study.questions.philosophy-2.correct", "Sticky Hands"),
        explanation: i18n.t("study.questions.philosophy-2.explanation", "Muchimi refers to the ability to maintain contact with an opponent like sticky hands.")
      }
    ]
  }
];

// Add technique study materials
const techniqueStudies: Study[] = [
  {
    id: "basic-techniques-quiz",
    title: i18n.t("study.quizTypes.basic-techniques.title", "Basic Techniques Quiz"),
    description: i18n.t("study.quizTypes.basic-techniques.description", "Test your knowledge of fundamental karate techniques."),
    type: "quiz",
    category: "techniques",
    difficulty: "beginner",
    questions: [
      {
        id: "techniques-1",
        question: i18n.t("study.questions.techniques-1.question", "What is the most basic stance in karate?"),
        options: [
          i18n.t("study.questions.techniques-1.option1", "Sanchin Dachi"),
          i18n.t("study.questions.techniques-1.option2", "Zenkutsu Dachi"),
          i18n.t("study.questions.techniques-1.option3", "Hachiji Dachi"),
          i18n.t("study.questions.techniques-1.option4", "Kiba Dachi")
        ],
        correctAnswer: i18n.t("study.questions.techniques-1.correct", "Hachiji Dachi"),
        explanation: i18n.t("study.questions.techniques-1.explanation", "Hachiji Dachi (natural stance) is the most basic stance in karate.")
      },
      {
        id: "techniques-2",
        question: i18n.t("study.questions.techniques-2.question", "What does 'Uke' mean?"),
        options: [
          i18n.t("study.questions.techniques-2.option1", "Attack"),
          i18n.t("study.questions.techniques-2.option2", "Block"),
          i18n.t("study.questions.techniques-2.option3", "Strike"),
          i18n.t("study.questions.techniques-2.option4", "Kick")
        ],
        correctAnswer: i18n.t("study.questions.techniques-2.correct", "Block"),
        explanation: i18n.t("study.questions.techniques-2.explanation", "Uke (受け) means 'block' or 'receive' in Japanese.")
      }
    ]
  }
];

// Add kumite study materials
const kumiteStudies: Study[] = [
  {
    id: "kumite-basics-quiz",
    title: i18n.t("study.quizTypes.kumite-basics.title", "Kumite Basics Quiz"),
    description: i18n.t("study.quizTypes.kumite-basics.description", "Test your knowledge of sparring fundamentals."),
    type: "quiz",
    category: "kumite",
    difficulty: "beginner",
    questions: [
      {
        id: "kumite-1",
        question: i18n.t("study.questions.kumite-1.question", "What does 'Kumite' mean?"),
        options: [
          i18n.t("study.questions.kumite-1.option1", "Sparring"),
          i18n.t("study.questions.kumite-1.option2", "Fighting"),
          i18n.t("study.questions.kumite-1.option3", "Training"),
          i18n.t("study.questions.kumite-1.option4", "Competition")
        ],
        correctAnswer: i18n.t("study.questions.kumite-1.correct", "Sparring"),
        explanation: i18n.t("study.questions.kumite-1.explanation", "Kumite (組手) means 'sparring' or 'meeting of hands' in Japanese.")
      },
      {
        id: "kumite-2",
        question: i18n.t("study.questions.kumite-2.question", "What is 'Ippon Kumite'?"),
        options: [
          i18n.t("study.questions.kumite-2.option1", "Free Sparring"),
          i18n.t("study.questions.kumite-2.option2", "One-Step Sparring"),
          i18n.t("study.questions.kumite-2.option3", "Three-Step Sparring"),
          i18n.t("study.questions.kumite-2.option4", "Five-Step Sparring")
        ],
        correctAnswer: i18n.t("study.questions.kumite-2.correct", "One-Step Sparring"),
        explanation: i18n.t("study.questions.kumite-2.explanation", "Ippon Kumite is one-step sparring with predetermined attacks and defenses.")
      }
    ]
  }
];

// Add all study materials to the main studies array
studies.push(...kataStudies, ...philosophyStudies, ...techniqueStudies, ...kumiteStudies);

// Add matching studies for different content types
const matchingStudies: Study[] = [
  {
    id: "kata-matching",
    title: i18n.t("study.matchingTypes.kata.title", "Kata Matching"),
    description: i18n.t("study.matchingTypes.kata.description", "Match kata names with their meanings and characteristics."),
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
  }
];

studies.push(...matchingStudies);

// Export other data as needed (ensure TechniqueData is not exported twice)
export { techniquesData }; 
