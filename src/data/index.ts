import { Category, Technique, Kata, HistoricalFigure, Article, Principle, Study } from "../types";

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
    history: "Betekent letterlijk '3 gevechten'. Het verwijst niet naar een feitelijk gevecht, maar naar de interne strijd om lichaam, geest en spirit door wilskracht te harden. Het kata bestaat uit langzaam uitgevoerde technieken, welke met continue spierspanning en diepe buikademhaling worden uitgevoerd. De hedendaags gelopen Sanchin is een variant ontwikkeld door Miyagi Chojun sensei (grondlegger, 1888-1953) op het aan hem overgeleverde origineel van Higaonna Kanryo sensei. De ademhaling in de originele versie had een explosiever karakter en het lichaam maakte twee keer een lichaamsdraai van 180 graden. Gevorderde karatestudenten kunnen tijdens de uitvoering van kata Sanchin getest worden op correcte spierspanning door medeleerlingen, die middels voelen en het slaan op bepaalde lichaamsdelen correcte uitvoering controleren. Dit testen wordt shime genoemd. Examenstof voor gokyu (vijfde kyu, groene band) en hoger.",
    culturalSignificance: "Sanchin is considered the essence of Goju Ryu karate, embodying the principles of breathing, stance, and focus that are central to the style's philosophy.",
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
    name: "Tensho",
    japaneseName: "転掌",
    meaning: "Rotating Palms",
    description: "Betekent letterlijk 'draaiende palmen'. Dit kata werd door Miyagi Chojun sensei ontwikkeld als tegenhanger van kata Sanchin. Dit kata wordt net als kata Sanchin met diepe ademhaling en algehele spierspanning uitgevoerd. Het karakter van het kata is echter geheel anders. Waar Sanchin heel gesloten, hoekig en hard (go) over komt, doet Tensho open, sierlijk en zacht (ju) aan. Debet hieraan zijn de vele ronde draaiende hand- en polstechnieken ('draaiende (hand)palmen'). Examenstof voor sandan (derde dan) en hoger.",
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
      "Contrast to Sanchin's hard techniques",
      "Represents the 'ju' (soft) aspect of Goju Ryu"
    ],
    movements: "16 primary movements",
    duration: "1-2 minutes",
    origin: "Okinawa, Japan",
    history: "Created by Chojun Miyagi as a counterpart to Sanchin, Tensho represents the soft, circular aspect of Goju Ryu.",
    culturalSignificance: "Tensho demonstrates the 'ju' (soft) side of Goju Ryu, complementing Sanchin's 'go' (hard) qualities.",
    masters: [
      "Chojun Miyagi"
    ],
    videoUrl: "",
    bunkai: ""
  },
  {
    id: "gekisai-dai-ichi",
    name: "Gekisai Dai Ichi",
    japaneseName: "撃砕第一",
    meaning: "Attack and Destroy, First Form",
    description: "One of the two Gekisai kata created by Chojun Miyagi for physical education in schools. It teaches fundamental techniques and breathing patterns in a simpler format than the older kata.",
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
    history: "Betekent letterlijk 'aanval en vernietiging 1'. Deze voor het karate wat ongebruikelijk aggressieve benaming weerspiegelt de tijd waarin het Japanse eiland Okinawa het slagveld voor Japans-Amerikaanse oorlogshandelingen was. Het kata werd in 1940 ontwikkeld door de grondlegger van het Okinawa Goju-ryu Karate-do, Myagi Chojun sensei. Het bestaat uit diverse combinaties van eenvoudige basistechnieken, die het aanleren van de latere moeilijkere klassieke koryu kata vergemakkelijken. Examenstof voor kukyu (negende kyu, witte band) en hoger.",
    culturalSignificance: "This kata was part of Miyagi's effort to popularize karate and make it accessible to a wider audience, particularly the younger generation.",
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
    name: "Gekisai Dai Ni",
    japaneseName: "撃砕第二",
    meaning: "Attack and Destroy, Second Form",
    description: "The second of the two Gekisai kata. It builds upon the techniques of Gekisai Dai Ichi with additional movements and slightly more complex patterns.",
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
    history: "Betekent letterlijk 'aanval en vernietiging 2'. Net als Gekisai Dai Ichi ontwikkeld door Myagi Chojun sensei om dezelfde redenen. Examenstof voor nanakyu (zevende kyu, gele band) en hoger.",
    culturalSignificance: "Represents the evolution of karate instruction as it was being standardized for broader teaching applications.",
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
    history: "Betekent zoiets als 'vernietigende slagen'. Sai betekent, net als in Gekisai, 'vernietigen'. Fa betekent ondermeer 'slaan'. Typerend voor kata Saifa zijn de vele slagtechnieken, zoals bijvoorbeeld uraken uchi, tettsui uchi en haito uchi. Saifa is het eerste klassieke koryu kata. Het kata werd overgeleverd door Ryu Ryu Ko aan Higaonna Kanryo sensei. Vergeleken met het Gekisai Dai kata neemt vanaf Saifa de moeilijkheidsgraad van de kata toe en verschijnen meer en meer komen combinaties van hand- en beentechnieken die goede coördinatie vergen. Examenstof voor gokyu (vijfde kyu, groene band) en hoger.",
    culturalSignificance: "Saifa represents the evolution of martial arts techniques designed for practical self-defense situations in crowded environments.",
    masters: [
      "Chojun Miyagi",
      "Morio Higaonna",
      "Eiichi Miyazato"
    ],
    videoUrl: "https://www.youtube.com/watch?v=kCaUTTfOvhY",
    bunkai: "https://www.youtube.com/watch?v=a9NZZ_e6iJE"
  },
  {
    id: "seiyunchin",
    name: "Seiyunchin",
    japaneseName: "制引戦",
    meaning: "Control and Pull in Battle",
    description: "A kata focused on controlling an opponent's balance and power. It teaches techniques for gripping, pulling, and manipulating an attacker's force.",
    level: "Intermediate",
    steps: [
      "Begin with opening salutation",
      "Execute gripping and controlling techniques",
      "Perform circular movements with quick stance changes",
      "Execute horizontal and vertical pulling motions",
      "Demonstrate sweeping and unbalancing techniques",
      "Complete the closing sequence"
    ],
    images: [
      "https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=2342&auto=format&fit=crop"
    ],
    keyFeatures: [
      "Strong emphasis on grappling techniques",
      "Focuses on breaking opponent's balance",
      "Circular and flowing movements",
      "Multiple applications of shiko dachi stance"
    ],
    movements: "32 primary movements",
    duration: "2-3 minutes",
    origin: "Fujian Province, China",
    history: "Betekent zoiets als 'in het gevecht uit balans brengen'. Het kata is het enige kaishu kata dat geen traptechnieken bevat en benadrukt de vorming van sterke stabiele standen. De bunkai kumite (toepassingen) bestaan uit diverse worstel- en werptechnieken die uitermate geschikt zijn in 'close-combat'. Examenstof voor sankyu (derde kyu, bruine band) en hoger.",
    culturalSignificance: "This kata demonstrates the 'ju' (soft, yielding) aspect of Goju Ryu, showing how to redirect an opponent's energy rather than meeting it with force.",
    masters: [
      "Kanryo Higaonna",
      "Chojun Miyagi",
      "Morio Higaonna"
    ],
    videoUrl: "https://www.youtube.com/watch?v=_52ye5xADGA",
    bunkai: "https://www.youtube.com/watch?v=NMJgHOhDTBI"
  },
  {
    id: "shisochin",
    name: "Shisochin",
    japaneseName: "四向戦",
    meaning: "Fight in Four Directions",
    description: "This kata emphasizes techniques that can be applied in four directions, teaching the practitioner to be aware of and defend against multiple attackers.",
    level: "Advanced",
    steps: [
      "Begin in formal stance",
      "Execute open hand techniques in four directions",
      "Perform joint locks and manipulation techniques",
      "Demonstrate powerful palm heel strikes",
      "Use circular movements to redirect attacks",
      "Complete the closing sequence"
    ],
    images: [
      "https://images.unsplash.com/photo-1604652716188-21d725b4c7e9?q=80&w=1470&auto=format&fit=crop"
    ],
    keyFeatures: [
      "Open hand techniques",
      "Multiple direction awareness",
      "Rooting and stability",
      "Joint locking applications"
    ],
    movements: "36 primary movements",
    duration: "2-3 minutes",
    origin: "Fujian Province, China",
    history: "Betekent letterlijk 'gevecht in 4 richtingen'. Een andere vertaling is '4 deuren'. Het woord deur is een symbolisch woord voor de plaats waar een eventuele tegenstander een aanval kan plegen, kan 'binnenkomen'. Het kata bevat een typische aanvalscombinatie, welke in vier richtingen uitgevoerd wordt. Examenstof voor ikkyu (eerste kyu, bruine band) en hoger.",
    culturalSignificance: "The kata emphasizes situational awareness and the importance of being prepared for threats from all directions, a crucial aspect of traditional martial arts wisdom.",
    masters: [
      "Kanryo Higaonna",
      "Chojun Miyagi",
      "Eiichi Miyazato"
    ],
    videoUrl: "https://www.youtube.com/watch?v=GyRyR3pd7FI",
    bunkai: "https://www.youtube.com/watch?v=hPoZgm9cHTI"
  },
  {
    id: "sanseru",
    name: "Sanseru",
    japaneseName: "三十六",
    meaning: "Thirty-Six",
    description: "Named after the 36 vital points of the body, this kata contains powerful striking techniques targeted at these points, as well as defensive movements.",
    level: "Advanced",
    steps: [
      "Begin with formal opening",
      "Execute quick striking combinations",
      "Perform precise blocking techniques",
      "Demonstrate powerful kicks and strikes",
      "Utilize quick directional changes",
      "Complete with formal closing"
    ],
    images: [
      "https://images.unsplash.com/photo-1590244303591-872eb8080ebe?q=80&w=2070&auto=format&fit=crop"
    ],
    keyFeatures: [
      "Precise striking techniques",
      "Focus on vital point attacks",
      "Balance between hard and soft applications",
      "Quick reaction sequences"
    ],
    movements: "38 primary movements",
    duration: "2-3 minutes",
    origin: "Fujian Province, China",
    history: "De namen van de kata Sanseru, Sepai, Sesan en Suparinpei zijn Chinese namen. In de schrijftaal wordt achter alle 4 het woord 'handen' toegevoegd, hetgeen in de spreektaal echter weggelaten wordt en wordt bijvoorbeeld Sanseru gezegd in plaats van Sanseru shu. Deze 4 namen zijn allemaal getallen die verwijzen naar boedhistische symboliek. Zo staat Sanseru voor '36 (handen)'. 36 is de symbolische vermenigvuldiging van 6 * 6. De eerste 6 staat voor oog, oor, neus, tong, lichaam en geest. De tweede 6 symboliseert kleur, stem, smaak, reuk, tast en rechtvaardigheid. Examenstof voor nidan (tweede dan) en hoger.",
    culturalSignificance: "The number 36 has significance in many Asian martial and philosophical traditions, representing the harmony between physical technique and deeper understanding.",
    masters: [
      "Kanryo Higaonna",
      "Chojun Miyagi",
      "Seikichi Toguchi"
    ],
    videoUrl: "https://www.youtube.com/watch?v=LdbxQinYfXo",
    bunkai: "https://www.youtube.com/watch?v=_msUEfWbiPs"
  },
  {
    id: "sepai",
    name: "Sepai",
    japaneseName: "十八",
    meaning: "Eighteen",
    description: "Named after the 18 Arhats (enlightened disciples of Buddha), this kata focuses on advanced techniques and applications, including vital point strikes and joint manipulations.",
    level: "Advanced",
    steps: [
      "Begin with formal opening",
      "Execute complex hand techniques",
      "Perform circular defensive patterns",
      "Demonstrate quick stance transitions",
      "Apply joint manipulation techniques",
      "Complete with formal closing"
    ],
    images: [
      "https://images.unsplash.com/photo-1616280162269-3a75fe12edba?q=80&w=2070&auto=format&fit=crop"
    ],
    keyFeatures: [
      "Complex hand techniques",
      "Joint manipulation applications",
      "Circular defensive patterns",
      "Advanced stance work"
    ],
    movements: "40 primary movements",
    duration: "2-3 minutes",
    origin: "Fujian Province, China",
    history: "Betekent '18 (handen)'. 18 is de vermenigvuldiging van 6 x 3. De uitleg van de 6 is hetzelfde als de tweede 6 van kata sanseru. De 3 staat voor goed, slecht en vrede. Sepai, Kururunfa, Sesan en Suparinpei benadrukken door hun afwisseling van hard en zacht, van go en ju, van ken en kon, de ware essentie van het Okinawa Goju-ryu Karate-do. Examenstof voor sandan (derde dan) en hoger.",
    culturalSignificance: "The number 18 has significance in Buddhist and Chinese martial traditions, representing different aspects of enlightenment and the path to mastery.",
    masters: [
      "Kanryo Higaonna",
      "Chojun Miyagi",
      "Morio Higaonna"
    ],
    videoUrl: "https://www.youtube.com/watch?v=rBvK4eSHReY",
    bunkai: "https://www.youtube.com/watch?v=ch425QMrgak"
  },
  {
    id: "kururunfa",
    name: "Kururunfa",
    japaneseName: "久留頓破",
    meaning: "Holding, Falling, and Breaking",
    description: "A kata that teaches techniques for dealing with a physically stronger opponent. It contains powerful blocking, grappling techniques, and swift counterattacks.",
    level: "Advanced",
    steps: [
      "Begin with formal opening",
      "Execute heavy strikes and blocks",
      "Perform quick evasive maneuvers",
      "Demonstrate powerful takedown techniques",
      "Apply circular hand movements",
      "Complete with formal closing"
    ],
    images: [
      "https://images.unsplash.com/photo-1604652716188-21d725b4c7e9?q=80&w=1470&auto=format&fit=crop"
    ],
    keyFeatures: [
      "Powerful blocking techniques",
      "Grappling applications",
      "Use of body weight and momentum",
      "Techniques for dealing with stronger opponents"
    ],
    movements: "45 primary movements",
    duration: "3-4 minutes",
    origin: "Fujian Province, China",
    history: "Vrij vertaald 'stilte voor de storm'. Kuru betekent zoiets als 'aanhouden' of 'afwachten'. Run betekent in de kalligrafie de pauze of vertraging in de beweging van de kwast, voordat er een geaccentueerde streek 'vrijkomt'. Het is een snel en krachtig uitgevoerd kata, waarbij de nadruk ligt op sabaki (verplaatsing). Examenstof voor yondan (vierde dan) en hoger.",
    culturalSignificance: "The kata embodies the principle that proper technique can overcome greater physical strength, a core tenet of many martial arts traditions.",
    masters: [
      "Kanryo Higaonna",
      "Chojun Miyagi",
      "An'ichi Miyagi"
    ],
    videoUrl: "https://www.youtube.com/watch?v=tpoJ4-6L1Wc",
    bunkai: ""
  },
  {
    id: "sesan",
    name: "Sesan",
    japaneseName: "十三",
    meaning: "Thirteen",
    description: "Named after the 13 principles of fighting, this kata contains techniques for both close and long-range combat, with emphasis on rapid strikes and kicks.",
    level: "Advanced",
    steps: [
      "Begin with formal opening",
      "Execute long-range striking techniques",
      "Perform rapid combination attacks",
      "Demonstrate whipping and snapping techniques",
      "Apply quick directional changes",
      "Complete with formal closing"
    ],
    images: [
      "https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=2342&auto=format&fit=crop"
    ],
    keyFeatures: [
      "Blend of long and short-range techniques",
      "Rapid combination attacks",
      "Whipping and snapping movements",
      "Dynamic footwork patterns"
    ],
    movements: "38 primary movements",
    duration: "2-3 minutes",
    origin: "Fujian Province, China",
    history: "Betekent '13 (handen)'. Het getal 13 staat in de Chinese cultuur voor geluk en welvarendheid. Kata Sesan was het favoriete kata van grondlegger Miyagi Chojun sensei en diens vroegtijdig overleden topleerling Shinzato Jinan sensei. Examenstof voor godan (vijfde dan) en hoger.",
    culturalSignificance: "The number 13 in this context represents completeness in martial theory rather than the Western superstition of bad luck.",
    masters: [
      "Kanryo Higaonna",
      "Chojun Miyagi",
      "Seiko Higa"
    ],
    videoUrl: "https://www.youtube.com/watch?v=LJeOCRV0oF0",
    bunkai: "https://www.youtube.com/watch?v=Nt6UaofHJow"
  },
  {
    id: "suparinpei",
    name: "Suparinpei",
    japaneseName: "壱百零八",
    meaning: "108",
    description: "The longest and most advanced kata in the Goju Ryu system, named after the 108 defilements of man in Buddhist philosophy. It contains a comprehensive collection of techniques from the entire system.",
    level: "Master",
    steps: [
      "Begin with formal opening",
      "Execute complex technique combinations",
      "Perform advanced defensive patterns",
      "Demonstrate integrated breathing methods",
      "Apply techniques from multiple preceding kata",
      "Complete with formal closing"
    ],
    images: [
      "https://images.unsplash.com/photo-1590244303591-872eb8080ebe?q=80&w=2070&auto=format&fit=crop"
    ],
    keyFeatures: [
      "Comprehensive collection of techniques",
      "Advanced breathing methods",
      "Integration of concepts from all Goju Ryu kata",
      "The most complex footwork in the system"
    ],
    movements: "65+ primary movements",
    duration: "4-5 minutes",
    origin: "Fujian Province, China",
    history: "Betekent '108 (handen)'. Het getal 108 is volgens de boedhistische getalssymboliek opgebouwd uit de vermenigvuldiging 3 x 36. De symboliek van 3 en 36 is die van kata Sanseru en Sepai. 108 verwijst naar de 108 kwade hartstochten die de mens volgens het boedhisme heeft. Suparinpei is het meest gevorderd en langste kata uit het Okinawa Goju-ryu Karate-do curiculum en behoort tot de examenstof voor rokudan (zesde dan) en hoger.",
    culturalSignificance: "The number 108 is significant in many Eastern traditions, and the kata symbolizes the mastery of the complete Goju Ryu system.",
    masters: [
      "Kanryo Higaonna",
      "Chojun Miyagi",
      "Morio Higaonna"
    ],
    videoUrl: "https://www.youtube.com/watch?v=ufr4QdN6Ko0",
    bunkai: "https://www.youtube.com/watch?v=IvugPHXbK4M"
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

export const studies: Study[] = [
  {
    id: "basic-stances",
    title: "Basic Goju Ryu Stances",
    description: "Test your knowledge of fundamental stances in Goju Ryu karate.",
    type: "quiz",
    category: "techniques",
    difficulty: "beginner",
    image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=2342&auto=format&fit=crop",
    questions: [
      {
        id: "q1",
        question: "Which stance is known as the 'hour-glass stance' in Goju Ryu?",
        options: ["Sanchin Dachi", "Shiko Dachi", "Zenkutsu Dachi", "Neko Ashi Dachi"],
        correctAnswer: "Sanchin Dachi",
        explanation: "Sanchin Dachi (三戦立ち) is known as the 'hour-glass stance' and forms the foundation of Goju Ryu karate."
      },
      {
        id: "q2",
        question: "In Sanchin Dachi, how should the feet be positioned?",
        options: [
          "Shoulder-width apart with toes pointing slightly inward",
          "Wide apart with toes pointing outward",
          "One foot forward, one foot back",
          "Both feet together"
        ],
        correctAnswer: "Shoulder-width apart with toes pointing slightly inward",
        explanation: "In Sanchin Dachi, feet should be shoulder-width apart with toes pointing slightly inward to create stability."
      },
      {
        id: "q3",
        question: "What is a key aspect of proper breathing in Goju Ryu stances?",
        options: [
          "Shallow, rapid breathing",
          "Holding your breath for stability",
          "Deep, controlled abdominal breathing",
          "Only breathing through the mouth"
        ],
        correctAnswer: "Deep, controlled abdominal breathing",
        explanation: "Proper breathing in Goju Ryu involves deep, controlled abdominal breathing that works in harmony with movement."
      }
    ]
  },
  {
    id: "kata-principles",
    title: "Kata Principles Flashcards",
    description: "Learn and memorize the important principles behind kata practice.",
    type: "flashcard",
    category: "kata",
    difficulty: "intermediate",
    image: "https://images.unsplash.com/photo-1616280162269-3a75fe12edba?q=80&w=2070&auto=format&fit=crop",
    questions: [
      {
        id: "k1",
        question: "What does the term Sanchin (三戦) mean?",
        correctAnswer: "Three Battles/Conflicts",
        explanation: "Sanchin refers to the 'three battles' of mind, body, and spirit that practitioners must overcome."
      },
      {
        id: "k2",
        question: "What is the primary purpose of Sanchin kata in Goju Ryu?",
        correctAnswer: "To develop proper breathing, stance, and internal body tension",
        explanation: "Sanchin focuses on proper breathing techniques, rooted stance, and developing internal strength through muscular contraction."
      },
      {
        id: "k3",
        question: "What does the name Saifa (砕破) mean?",
        correctAnswer: "Smash and Tear",
        explanation: "Saifa translates to 'smash and tear', reflecting the kata's tearing and pulling techniques for close combat."
      }
    ]
  },
  {
    id: "history-matching",
    title: "Goju Ryu Founders & History",
    description: "Match the important figures to their contributions in Goju Ryu history.",
    type: "matching",
    category: "history",
    difficulty: "intermediate",
    image: "https://images.unsplash.com/photo-1590244303591-872eb8080ebe?q=80&w=2070&auto=format&fit=crop",
    questions: [
      {
        id: "h1",
        question: "Chojun Miyagi",
        correctAnswer: "Founder of Goju Ryu karate",
        explanation: "Chojun Miyagi (1888-1953) systematized and named the Goju Ryu style, emphasizing both hard and soft techniques."
      },
      {
        id: "h2",
        question: "Kanryo Higaonna",
        correctAnswer: "Teacher of Chojun Miyagi who studied martial arts in China",
        explanation: "Kanryo Higaonna (1853-1916) traveled to Fuzhou, China to study martial arts before returning to Okinawa to teach."
      },
      {
        id: "h3",
        question: "Go and Ju Principle",
        correctAnswer: "The balance of hardness and softness",
        explanation: "The name Goju Ryu reflects the principle of balancing hard (Go) and soft (Ju) techniques in training."
      }
    ]
  }
];
