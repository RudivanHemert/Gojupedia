
import { Category, Technique, Kata, HistoricalFigure, Article, Principle } from "../types";

export const categories: Category[] = [
  {
    id: "techniques",
    name: "Techniques",
    description: "Learn fundamental Goju Ryu techniques including stances, blocks, strikes, and kicks",
    icon: "swords",
    image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=2342&auto=format&fit=crop",
    slug: "techniques"
  },
  {
    id: "kata",
    name: "Kata",
    description: "Explore the traditional forms of Goju Ryu with detailed instructions and videos",
    icon: "user",
    image: "https://images.unsplash.com/photo-1616280162269-3a75fe12edba?q=80&w=2070&auto=format&fit=crop",
    slug: "kata"
  },
  {
    id: "history",
    name: "History",
    description: "Discover the rich history and lineage of Goju Ryu Karate",
    icon: "scroll",
    image: "https://images.unsplash.com/photo-1590244303591-872eb8080ebe?q=80&w=2070&auto=format&fit=crop",
    slug: "history"
  },
  {
    id: "philosophy",
    name: "Philosophy",
    description: "Understand the principles and philosophy behind Goju Ryu practice",
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
    name: "Sanchin",
    japaneseName: "三戦",
    meaning: "Three Battles/Conflicts",
    description: "The most fundamental kata in Goju Ryu. It focuses on proper breathing, stance, and tension throughout the body. The 'three battles' refer to the mind, body, and spirit.",
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
    history: "Sanchin is one of the oldest kata in the Goju Ryu system. It was brought to Okinawa from China by Kanryo Higaonna in the late 19th century. The original Chinese version was practiced with open hands, but it was modified to use closed fists in the Okinawan tradition.",
    culturalSignificance: "Sanchin is considered the essence of Goju Ryu karate, embodying the principles of breathing, stance, and focus that are central to the style's philosophy.",
    masters: [
      "Chojun Miyagi",
      "Kanryo Higaonna",
      "Seiko Higa"
    ],
    videoUrl: "https://www.youtube.com/watch?v=example-sanchin"
  },
  {
    id: "saifa",
    name: "Saifa",
    japaneseName: "砕破",
    meaning: "Smash and Tear",
    description: "A kata that emphasizes quick directional changes and close-range techniques. It contains grabbing, pulling, and tearing motions designed for close combat.",
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
    movements: "24 primary movements",
    duration: "1-2 minutes",
    origin: "Fujian Province, China",
    history: "Saifa was brought to Okinawa by Kanryo Higaonna after his studies in China. It was later standardized by Chojun Miyagi as part of the formal Goju Ryu curriculum. The kata's techniques reflect practical combat applications for close-quarters fighting.",
    culturalSignificance: "Saifa represents the evolution of martial arts techniques designed for practical self-defense situations in crowded environments.",
    masters: [
      "Chojun Miyagi",
      "Morio Higaonna",
      "Eiichi Miyazato"
    ],
    videoUrl: "https://www.youtube.com/watch?v=example-saifa"
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
