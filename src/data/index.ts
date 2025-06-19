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
    bunkai: "https://www.youtube.com/watch?v=VfyccUJZEqs"
  },
  {
    id: "shisochin",
    level: "Advanced",
    category: "kaishugata",
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
    bunkai: [
      {
        id: "shisochin-bunkai-01",
        title: "01. Chudan Nukite Zuki",
        attack: "Chudan Oi Zuki.",
        defense: "Chudan Haishu Nagashi Uke.",
        counterAttack: "Chudan Nukite Zuki.",
        footwork: "Sayu Tenshin.",
        vitalPoints: "Bijv. zonnevlecht [Suigetsu]) of halssalgader [Matsukaze].",
        notes: "Een aanval naar Suigetsu zal alleen reëel zijn bij een groot krachtsverschil en sterke handen.",
        kata: "shisochin"
      },
      {
        id: "shisochin-bunkai-02",
        title: "02. Morote Sukui Uke + 'Morote Gedan Harai Uke'",
        attack: "Morete Kubi Dori.",
        defense: "Morete Sukui Uke + Tsukkami + 'Morete Gedan Harai Uke'.",
        counterAttack: "Mae Geri of Hiza Geri met achterste been.",
        footwork: "Naar achteren stappen om de aanval te ontwijken en de duimen of polsen van de tegenstander beet te kunnen pakken.",
        vitalPoints: "Bijv. zonnevlecht [Suigetsu].",
        notes: "Dezelfde Bunkai kan ook worden uitgevoerd indien beide polsen worden beetgepakt.",
        kata: "shisochin"
      },
      {
        id: "shisochin-bunkai-03",
        title: "03. Chudan Ura Kake Uke Uke (Doji Uke) + Gyaku Te",
        attack: "Chudan Oi Zuki.",
        defense: "Chudan Ura Kake Uke.",
        counterAttack: "Gyaku Te + Otoshi Hij Ate.",
        footwork: "Sayu Tenshin, dan indraaien met buitenste been en deze vervolgens strekken om de tegenstander uit balans te brengen. Dan naar Shiko Dachi draaien voor Otoshi Hiji Ate.",
        vitalPoints: "Bijv. [Kassatsu] (Otoshi Hiji Ate).",
        notes: "Door gevorderden moet de wering en de Gyaku Te in één beweging worden uitgevoerd. De techniek in kwestie heeft geen op zich zelf staande naam maar wordt vernoemd naar de toepassing. Namelijk: Gyaku Te, wat een verzamelnaam is voor klemmen, grepen, e.d.",
        kata: "shisochin"
      },
      {
        id: "shisochin-bunkai-04",
        title: "04. Hiji Age / Ushiro Hiji Ate",
        attack: "Omstrengeling van achteren, één arm ingesloten.",
        defense: "Jodan Ushiro Zuki + Ushiro Hiji Ate.",
        counterAttack: "Verdedigings is tegenaanval.",
        footwork: "",
        vitalPoints: "Bijv. [Jinchu] (Jodan Ushiro Zuki) + [Inazuma] (Ushiro Hiji Ate)",
        notes: "Wanneer de omarming te sterk is kun je beter eerst een Kyusho aanvallen. Bijvoorbeeld het punt [Koin] (op de voet) met de hak of de testikels [Kinteki] met de hand.",
        kata: "shisochin"
      },
      {
        id: "shisochin-bunkai-05",
        title: "05. Nagashi Shotei Gedan Harai Uke + Shotei Zuki",
        attack: "Chudan Oi Zuki",
        defense: "Nagashi Shotei Gedan Harai Uke.",
        counterAttack: "Shotei Zuki",
        footwork: "Instappen en wegdraaien in een beweging.",
        vitalPoints: "Bijv. kaak [Mikazuki].",
        notes: "Het opwaartse effect in de beweging helpt het ontwortelen van de tegenstander. In het geval van een aanval op de ogen kan de tegenstander hand .' moeilijker zien aankomen omdat deze van onderen komt.",
        kata: "shisochin"
      },
      {
        id: "shisochin-bunkai-06",
        title: "06. Hiki Uke + Mae Geri + Chudan Hiji Ate",
        attack: "Chudan Oi Zuki.",
        defense: "Hiki Uke.",
        counterAttack: "Gedan Mae Geri + Chudan Hiji Ate + Nihon Nukite.",
        footwork: "Sayu Tenshin. Na Mae Geri naar voren gaan in Zenkutsu Dachi.",
        vitalPoints: "Bijv. [Kinteki] (Gedan Mae Geri) + [Ganka] (Chudan Hiji Ate) + Ogen [Gansei] (Nihon Nukite).",
        notes: "",
        kata: "shisochin"
      },
      {
        id: "shisochin-bunkai-07",
        title: "07. Otoshi Uke + Hiji Ate",
        attack: "Chudan Oi Zuki",
        defense: "Osae Uke.",
        counterAttack: "Hiji Ate",
        footwork: "Instappen.",
        vitalPoints: "Bijv. [Suigetsu]",
        notes: "De aanval moet vroegtijdig worden onderschept en naar binnen en (dan) naar beneden worden gedrukt.",
        kata: "shisochin"
      },
      {
        id: "shisochin-bunkai-08",
        title: "08. Morote Hiji Ate",
        attack: "Morote Kote Dori.",
        defense: "Morote Hiji Age.",
        counterAttack: "Otoshi Hiji Age.",
        footwork: "Een voet naar achteren voor stabiliteit daar na instappen.",
        vitalPoints: "Bijv. sleutelbeen of borst (Otoshi Hiji Ate).",
        notes: "Aandachtspunt(en): Voor de inzet van de Morote Hiji Age worden de handen opgetild en open gesperd.",
        kata: "shisochin"
      },
      {
        id: "shisochin-bunkai-09",
        title: "09. Doji Uke",
        attack: "Chudan Oi Zuki.",
        defense: "Doji Uke.",
        counterAttack: "Gyaku Te + Otoshi Hiji Ate.",
        footwork: "Sayu Tenshin, dan indraaien met buitenste been en deze vervolgens strekken om de tegenstander uit balans te brengen. Dan naar Shiko Dachi draaien voor Otoshi Hiji Ate.",
        vitalPoints: "Bijv. [Kassatsu] (Otoshi Hiji Ate).",
        notes: "Door gevorderden moet de wering en de Gyaku Te in één beweging worden uitgevoerd. De techniek in kwestie heeft geen op zich zelf staande naam maar wordt vernoemd naar de toepassing. Namelijk: Gyaku Te, wat een verzamelnaam is voor klemmen, grepen, e.d.",
        kata: "shisochin"
      }
    ]
  },
  {
    id: "sanseru",
    level: "Advanced",
    category: "kaishugata",
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
    bunkai: "https://www.youtube.com/watch?v=fKYlZZnkjoM"
  },
  {
    id: "sepai",
    level: "Master",
    category: "kaishugata",
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
      "\'Holding on long and striking suddenly\'",
      "Deceptive movements and quick transitions",
      "\'Muchimi\' (sticky hands) principle"
    ],
    movements: "Approximately 23 movements",
    duration: "3-4 minutes",
    origin: "Fujian Province, China (unknown specific style)",
    masters: ["Kanryo Higaonna", "Chojun Miyagi"],
    videoUrl: "",
    bunkai: "https://www.youtube.com/watch?v=nSX19q6_gNM"
  },
  {
    id: "peichurin",
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
    origin: "Fujian Province, China (likely Monk Fist Boxing or Lion\'s Fist)",
    masters: ["Kanryo Higaonna", "Chojun Miyagi"],
    videoUrl: "",
    bunkai: "https://www.youtube.com/watch?v=LBVbeDCv1jo"
  },
  {
    id: "peichuin",
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
