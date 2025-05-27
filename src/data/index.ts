import { Category, Technique, Kata, HistoricalFigure, Article, Principle, Study, StudyQuestion } from "../types";
import { techniquesData, TechniqueData } from "./techniquesData";
import i18n from '@/i18n'; // Import i18n instance

export const categories: Category[] = [
  {
    id: "techniques",
    name: i18n.t('categories.techniques_name'),
    description: i18n.t('categories.techniques_description'),
    icon: "swords",
    image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=2342&auto=format&fit=crop",
    slug: "techniques"
  },
  {
    id: "kata",
    name: i18n.t('categories.kata_name'),
    description: i18n.t('categories.kata_description'),
    icon: "user",
    image: "https://images.unsplash.com/photo-1616280162269-3a75fe12edba?q=80&w=2070&auto=format&fit=crop",
    slug: "kata"
  },
  {
    id: "history",
    name: i18n.t('categories.history_name'),
    description: i18n.t('categories.history_description'),
    icon: "scroll",
    image: "https://images.unsplash.com/photo-1590244303591-872eb8080ebe?q=80&w=2070&auto=format&fit=crop",
    slug: "history"
  },
  {
    id: "philosophy",
    name: i18n.t('categories.philosophy_name'),
    description: i18n.t('categories.philosophy_description'),
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
  {
    id: "sanchin",
    level: "Beginner",
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
      "Contrast to Sanchin\'s hard techniques",
      "Represents the \'ju\' (soft) aspect of Goju Ryu"
    ],
    movements: "16 primary movements",
    duration: "1-2 minutes",
    origin: "Okinawa, Japan",
    masters: [
      "Chojun Miyagi"
    ],
    videoUrl: "",
    bunkai: ""
  },
  {
    id: "gekisai-dai-ichi",
    level: "Beginner",
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
    bunkai: "https://www.youtube.com/watch?v=MdIoFWQNY4M"
  },
  {
    id: "gekisai-dai-ni",
    level: "Beginner",
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
    steps: [
      "Emphasis on low stances and powerful pulling/unbalancing techniques",
      "Unique breathing patterns",
      "No kicking techniques"
    ],
    images: [],
    keyFeatures: [
      "Strong, stable stances (Shiko Dachi)",
      "Pulling and unbalancing techniques",
      "Close-range fighting strategies"
    ],
    movements: "Approximately 34 movements",
    duration: "2-3 minutes",
    origin: "Fujian Province, China (likely from Xingyi Quan or Monk Fist Boxing)",
    masters: ["Kanryo Higaonna", "Chojun Miyagi"],
    videoUrl: "",
    bunkai: ""
  },
  {
    id: "shisochin",
    level: "Advanced",
    steps: [
      "Four-directional movements",
      "Open-hand techniques (Nukite, Shotei)",
      "Joint locks and pressure point strikes"
    ],
    images: [],
    keyFeatures: [
      "Defending against multiple opponents",
      "Open-hand strikes and blocks",
      "Emphasis on precision and control"
    ],
    movements: "Approximately 40 movements",
    duration: "2-3 minutes",
    origin: "Fujian Province, China (likely White Crane style)",
    masters: ["Kanryo Higaonna", "Chojun Miyagi"],
    videoUrl: "",
    bunkai: ""
  },
  {
    id: "sanseru",
    level: "Advanced",
    steps: [
      "Dynamic movements and powerful strikes",
      "Combination techniques targeting vital points",
      "Footwork for evasion and attack"
    ],
    images: [],
    keyFeatures: [
      "Attacking 36 vital points",
      "Combination of hard and soft techniques",
      "Dynamic and powerful movements"
    ],
    movements: "36 primary movements (symbolic)",
    duration: "2-3 minutes",
    origin: "Fujian Province, China (likely White Crane or Tiger style)",
    masters: ["Kanryo Higaonna", "Chojun Miyagi"],
    videoUrl: "",
    bunkai: ""
  },
  {
    id: "sepai",
    level: "Master",
    steps: [
      "Circular movements",
      "Deflecting and redirecting opponent\'s force",
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
    bunkai: ""
  },
  {
    id: "kururunfa",
    level: "Master",
    steps: [
      "Holding and breaking balance",
      "Sudden, fast strikes",
      "Close-quarter combat and joint manipulation"
    ],
    images: [],
    keyFeatures: [
      "\'Holding on long and striking suddenly\'",
      "Deceptive movements and quick transitions",
      "\'Muchimi\' (sticky hands) principle"
    ],
    movements: "Approximately 23 movements",
    duration: "3-4 minutes",
    origin: "Fujian Province, China (unknown specific style)",
    masters: ["Kanryo Higaonna", "Chojun Miyagi"],
    videoUrl: "",
    bunkai: ""
  },
  {
    id: "sesan",
    level: "Master",
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
    origin: "Fujian Province, China (likely Monk Fist Boxing or Lion\'s Fist)",
    masters: ["Kanryo Higaonna", "Chojun Miyagi"],
    videoUrl: "",
    bunkai: ""
  },
  {
    id: "suparinpei",
    level: "Master",
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
    bunkai: ""
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
    content: "Breathing is perhaps the most critical yet often overlooked aspect of Goju Ryu karate. Proper breathing enhances power, endurance, and mental focus while practicing. The founder of Goju Ryu, Chojun Miyagi, placed great emphasis on breathing techniques, as evidenced in the fundamental kata Sanchin. This article explores the various breathing methods in Goju Ryu and their applications in both kata and kumite.",
    category: "techniques",
    image: "https://images.unsplash.com/photo-1518459031867-a89b944bffe4?q=80&w=2041&auto=format&fit=crop",
    author: "Karate Master",
    date: "2023-01-15"
  },
  {
    id: "okinawan-history",
    title: "The Okinawan Roots of Goju Ryu",
    content: "Goju Ryu karate's development is deeply intertwined with the rich history of Okinawa. As a trading hub between Japan, China, and Southeast Asia, Okinawa became a melting pot of martial arts influences. This article traces the historical events that shaped Goju Ryu, from the ban on weapons during the Satsuma domain's rule to the cultural exchange with Chinese martial artists that influenced the style's development.",
    category: "history",
    image: "https://images.unsplash.com/photo-1590244303591-872eb8080ebe?q=80&w=2070&auto=format&fit=crop",
    author: "Karate Historian",
    date: "2023-02-21"
  }
];

export const principles: Principle[] = [
  {
    id: "go-ju",
    name: "Go and Ju",
    japaneseName: "剛柔",
    description: "The balance of hardness and softness",
    explanation: [
      "Go (hard) represents linear, forceful techniques that meet force with greater force",
      "Ju (soft) represents circular, yielding techniques that redirect an opponent's energy",
      "The concept teaches practitioners to appropriately balance these opposing forces",
      "In application, this means knowing when to stand firm and when to yield",
      "This duality extends beyond physical technique to mental approach and life philosophy"
    ]
  },
  {
    id: "ikken-hissatsu",
    name: "Ikken Hissatsu",
    japaneseName: "一拳必殺",
    description: "To kill with one blow",
    explanation: [
      "Represents the ideal of maximum efficiency in technique",
      "Teaches practitioners to develop focus, power, and precision",
      "Not literally about killing, but about resolving conflict decisively",
      "Emphasizes quality of technique over quantity",
      "Encourages mental focus and commitment to each action"
    ]
  }
];

// Get all unique categories from the techniques data
const allTerminologyCategories = [
    ...new Set(techniquesData.map(item => item.category))
] as const;

// Type for category names derived from data
type TerminologyCategory = typeof allTerminologyCategories[number];

// Helper to generate slug from category name
const generateSlug = (name: string) => name.toLowerCase().replace(/\s+/g, '-');

// Generate BOTH quiz and flashcard studies for each terminology category
const generateStudiesFromTechniques = (categories: readonly TerminologyCategory[]): Study[] => {
    const generatedStudies: Study[] = [];

    categories.forEach(category => {
        const categorySlug = generateSlug(category);
        const categoryHasData = techniquesData.some(item => item.category === category);

        if (!categoryHasData) {
            console.warn(`Skipping study generation for empty category: ${category}`);
            return; // Skip empty categories
        }

        // Create Quiz Study
        generatedStudies.push({
            id: `${categorySlug}-quiz`, // e.g., stances-quiz
            title: `${category} Quiz`,
            description: `Test your knowledge of ${category.toLowerCase()}.`,
            type: 'quiz',
            difficulty: 'beginner',
            category: 'Techniques', // Broad category for filtering on StudyPage if re-enabled
            image: '', // Optional: Add relevant images later
            questions: [] // Questions are generated dynamically in TechniqueQuiz
        });

        // Create Flashcard Study
        generatedStudies.push({
            id: `${categorySlug}-flashcard`, // e.g., stances-flashcard
            title: `${category} Flashcards`,
            description: `Review ${category.toLowerCase()} using flashcards.`,
            type: 'flashcard',
            difficulty: 'beginner',
            category: 'Techniques',
            image: '',
            questions: [] // Cards are generated dynamically in TechniqueFlashcards
        });
    });

    return generatedStudies;
};

// --- Manually Defined Studies --- 
// (Can keep specific manual studies if they offer unique content/structure)
const manualStudies: Study[] = [
  // Example: Keep a manually defined study if it has specific questions or structure
  /*
  {
    id: "goju-ryu-history-quiz",
    title: "Goju Ryu History Quiz",
    description: "Test your knowledge of the key figures and events in Goju Ryu history.",
    type: "quiz",
    difficulty: "Intermediate",
    category: "History",
    image: "https://images.unsplash.com/photo-1590244303591-872eb8080ebe?q=80&w=2070&auto=format&fit=crop",
    questions: [
       // ... specific history questions ... 
    ],
    tags: ["history", "quiz"]
  },
  */
];

// --- Combine and Export Studies --- 

// Generate studies from all detected terminology categories
const generatedTerminologyStudies = generateStudiesFromTechniques(allTerminologyCategories);

// Combine manual studies with automatically generated ones
export const studies: Study[] = [
    ...manualStudies, 
    ...generatedTerminologyStudies
];

// Export other data as needed (ensure TechniqueData is not exported twice)
export { techniquesData }; 
