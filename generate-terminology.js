// Script to generate complete Goju Ryu terminology data
// Run with: node generate-terminology.js

const fs = require('fs');
const path = require('path');

const header = `// Goju Ryu Karate Terminology Data
// Complete terminology structure based on authoritative Dutch Goju Ryu documentation

export interface TechniqueData {
  id: string;
  category: 'Basiskennis' | 'Organisatie' | 'Training' | 'Hojo-Undo' | 'Dachi-Waza' | 
    'Verplaatsingen' | 'Anatomische-Wapens' | 'Uke-Waza' | 'Zuki-Uchi-Waza' | 
    'Geri-Waza' | 'Tuite-Waza' | 'Kyusho';
  japanese: string;
  kanji?: string;
  english: string;
  dutch: string;
  description?: string;
}

export const techniquesData: TechniqueData[] = [`;

const footer = `
];
`;

// All terminology data
const allTerms = [
    // BASISKENNIS
    { id: 'basis-karate', category: 'Basiskennis', japanese: 'Karate', english: 'Empty Hand', dutch: 'Gevechtskunst, krijgskunst, de kunst waarbij zowel lichaam als geest wordt getraind voor de (dagelijkse) gezondheid; in noodgevallen is het een zelfverdedigingskunst die geen gebruik maakt van wapens. Letterlijk: lege hand' },
    { id: 'basis-karatedo', category: 'Basiskennis', japanese: 'Karate-do', english: 'The Way of the Empty Hand', dutch: 'De weg van de lege hand. De toevoeging do wordt gewoonlijk gebruikt om de nadruk te leggen op de mentale en spirituele ontwikkeling van de beoefenaar' },
    { id: 'basis-okinawa', category: 'Basiskennis', japanese: 'Okinawa', english: 'Largest of the Ryukyu Islands', dutch: 'Grootste eiland van de Ryukyu-eilanden ten zuiden van Japan voor de kust van China, dat staatkundig bij Japan hoort. Hier is karate oorspronkelijk ontwikkeld' },
    { id: 'basis-ryu', category: 'Basiskennis', japanese: 'Ryu', english: 'Style', dutch: 'Stijl' },
    { id: 'basis-goju-ryu', category: 'Basiskennis', japanese: 'Goju-ryu', english: 'Hard-Soft Style', dutch: 'Hard-zachte stijl. Go betekent hard en ju betekent zacht' },
    { id: 'basis-nahate', category: 'Basiskennis', japanese: 'Naha-te', english: 'Old martial art from Naha', dutch: 'Oude naam voor de krijgskunst die beoefend werd in de plaats Naha op Okinawa' },
    { id: 'basis-shurite', category: 'Basiskennis', japanese: 'Shuri-te', english: 'Old martial art from Shuri', dutch: 'Oude naam voor de krijgskunst afkomstig uit Shuri' },
    { id: 'basis-tomarite', category: 'Basiskennis', japanese: 'Tomari-te', english: 'Old martial art from Tomari', dutch: 'Oude naam voor de krijgskunst afkomstig uit Tomari' },
    { id: 'basis-kobudo', category: 'Basiskennis', japanese: 'Kobudo', english: 'Okinawan weapons art', dutch: 'Okinawaanse vechtkunst die gebruik maakt van wapens (Bo, Sai, Nunchaku, Kama, Katana)' },
    { id: 'basis-kempo-hakku', category: 'Basiskennis', japanese: 'Kempo Hakku', english: 'Eight Laws of the Fist', dutch: 'Gedicht: De acht wetten van de vuist' },
    { id: 'basis-budo', category: 'Basiskennis', japanese: 'Budo', kanji: '武道', english: 'The Way of the Warrior', dutch: 'De weg van de krijger als een levensstijl/filosofie/(levens)weg' },
    { id: 'basis-kenkon', category: 'Basiskennis', japanese: 'Kenkon', english: 'Heaven and Earth', dutch: 'Letterlijk: hemel en aarde; symbool van de International Okinawan Goju-ryu Karate-do Federation (IOGKF)' },
    { id: 'basis-tanden', category: 'Basiskennis', japanese: 'Tanden', english: 'Energy center', dutch: 'Energetisch en psycho-fysisch centrum van het lichaam' },
    { id: 'basis-hara', category: 'Basiskennis', japanese: 'Hara', english: 'Lower abdomen', dutch: 'Letterlijk: lagere buik, in de praktijk hetzelfde als tanden' },
    { id: 'basis-ki', category: 'Basiskennis', japanese: 'Ki', kanji: '気', english: 'Vital energy', dutch: 'De ervaring van vitale energie of levenskracht; manifestatie van de eenwording van lichaam, ademhaling en geest' },
    { id: 'basis-chinkuchi', category: 'Basiskennis', japanese: 'Chinkuchi', english: 'Focused power', dutch: 'Richten van kracht; korte en gerichte aanspanning van de spieren op het moment van raken' },
    { id: 'basis-muchimi', category: 'Basiskennis', japanese: 'Muchimi', english: 'Sticky, heavy movement', dutch: 'Trage, vloeiende, zware, klevende, gecontroleerde en geconcentreerde beweging' },
    { id: 'basis-chikara', category: 'Basiskennis', japanese: 'Chikara', english: 'Power', dutch: 'Kracht, levendige en krachtige beweging; beweging die is geladen door ki' },
    { id: 'basis-kiai', category: 'Basiskennis', japanese: 'Kiai', kanji: '気合', english: 'Spirit shout', dutch: 'Schreeuw, waarbij de kracht wordt geconcentreerd en gestuurd' },
    { id: 'basis-zanshin', category: 'Basiskennis', japanese: 'Zanshin', kanji: '残心', english: 'Remaining awareness', dutch: 'Blijvende aandacht en alertheid, vechtaandacht' },
    { id: 'basis-mushin', category: 'Basiskennis', japanese: 'Mushin', kanji: '無心', english: 'No mind', dutch: 'Letterlijk: geen geest' },
    { id: 'basis-kokyu', category: 'Basiskennis', japanese: 'Kokyu', kanji: '呼吸', english: 'Breath', dutch: 'Adem, ook wel adem, lichaam en geest' },

    // ORGANISATIE  
    { id: 'org-dojo', category: 'Organisatie', japanese: 'Dojo', kanji: '道場', english: 'Training hall', dutch: 'Oefenruimte, letterlijk: plaats van de weg' },
    { id: 'org-sensei', category: 'Organisatie', japanese: 'Sensei', kanji: '先生', english: 'Teacher', dutch: 'Leraar' },
    { id: 'org-senpai', category: 'Organisatie', japanese: 'Senpai', kanji: '先輩', english: 'Senior student', dutch: 'Gevorderde student, assistent' },
    { id: 'org-kohai', category: 'Organisatie', japanese: 'Kohai', kanji: '後輩', english: 'Junior student', dutch: 'Beginnende student' },
    { id: 'org-rei', category: 'Organisatie', japanese: 'Rei', kanji: '礼', english: 'Bow', dutch: 'Buig/begroet' },
    { id: 'org-seiza', category: 'Organisatie', japanese: 'Seiza', kanji: '正座', english: 'Formal sitting', dutch: 'Ga zitten op de knieën' },
    { id: 'org-mokuso', category: 'Organisatie', japanese: 'Mokuso', kanji: '黙想', english: 'Meditation', dutch: 'Meditatie' },
    { id: 'org-yoi', category: 'Organisatie', japanese: 'Yoi', kanji: '用意', english: 'Ready', dutch: 'Klaar, gereed' },
    { id: 'org-hajime', category: 'Organisatie', japanese: 'Hajime', kanji: '始め', english: 'Begin', dutch: 'Begin' },
    { id: 'org-yame', category: 'Organisatie', japanese: 'Yame', kanji: '止め', english: 'Stop', dutch: 'Stop' },
    { id: 'org-osu', category: 'Organisatie', japanese: 'Osu', kanji: '押忍', english: 'Yes, I understand', dutch: 'Ik heb het begrepen' },
    { id: 'org-gi', category: 'Organisatie', japanese: 'Gi', kanji: '着', english: 'Training uniform', dutch: 'Karatepak' },
    { id: 'org-obi', category: 'Organisatie', japanese: 'Obi', kanji: '帯', english: 'Belt', dutch: 'Band' },

    // TRAINING
    { id: 'train-kihon', category: 'Training', japanese: 'Kihon', kanji: '基本', english: 'Basic techniques', dutch: 'Basistechnieken' },
    { id: 'train-kata', category: 'Training', japanese: 'Kata', kanji: '型', english: 'Form', dutch: '(Solo)vorm; stijlvorm' },
    { id: 'train-kumite', category: 'Training', japanese: 'Kumite', kanji: '組手', english: 'Sparring', dutch: 'Gevechtsoefeningen' },
    { id: 'train-jodan', category: 'Training', japanese: 'Jodan', kanji: '上段', english: 'Upper level', dutch: 'Hoog niveau (hoofd, nek)' },
    { id: 'train-chudan', category: 'Training', japanese: 'Chudan', kanji: '中段', english: 'Middle level', dutch: 'Middenniveau (borst, buik)' },
    { id: 'train-gedan', category: 'Training', japanese: 'Gedan', kanji: '下段', english: 'Lower level', dutch: 'Laag niveau (onder buik)' },
    { id: 'train-hidari', category: 'Training', japanese: 'Hidari', kanji: '左', english: 'Left', dutch: 'Links' },
    { id: 'train-migi', category: 'Training', japanese: 'Migi', kanji: '右', english: 'Right', dutch: 'Rechts' },

    // HOJO UNDO
    { id: 'hojo-makiwara', category: 'Hojo-Undo', japanese: 'Makiwara', kanji: '巻藁', english: 'Striking post', dutch: 'Stootplank of -kussen' },
    { id: 'hojo-chishi', category: 'Hojo-Undo', japanese: 'Chishi', english: 'Stone hammer', dutch: 'Stenen hamer voor polstraining' },

    // DACHI WAZA (STANCES)
    { id: 'stance-sanchin', category: 'Dachi-Waza', japanese: 'Sanchin Dachi', kanji: '三戦立', english: 'Hourglass stance', dutch: 'Zandloper-stand, drie gevechten-stand' },
    { id: 'stance-zenkutsu', category: 'Dachi-Waza', japanese: 'Zenkutsu Dachi', kanji: '前屈立', english: 'Forward stance', dutch: 'Voorwaartse stand' },
    { id: 'stance-shiko', category: 'Dachi-Waza', japanese: 'Shiko Dachi', kanji: '四股立', english: 'Wide stance', dutch: 'Wijdbeens stand' },
    { id: 'stance-neko-ashi', category: 'Dachi-Waza', japanese: 'Neko Ashi Dachi', kanji: '猫足立', english: 'Cat stance', dutch: 'Katstand' },
    { id: 'stance-heiko', category: 'Dachi-Waza', japanese: 'Heiko Dachi', kanji: '平行立', english: 'Parallel stance', dutch: 'Parallelstand' },

    // VERPLAATSINGEN
    { id: 'move-tenshin', category: 'Verplaatsingen', japanese: 'Tenshin', english: 'Shifting', dutch: 'Verplaatsing' },
    { id: 'move-tai-sabaki', category: 'Verplaatsingen', japanese: 'Tai Sabaki', english: 'Body movement', dutch: 'Lichaamverplaatsing' },

    // ANATOMISCHE WAPENS
    { id: 'weapon-seiken', category: 'Anatomische-Wapens', japanese: 'Seiken', english: 'Forefist', dutch: 'Vuist' },
    { id: 'weapon-shuto', category: 'Anatomische-Wapens', japanese: 'Shuto', english: 'Knifehand', dutch: 'Pinkzijde van de hand' },
    { id: 'weapon-hiji', category: 'Anatomische-Wapens', japanese: 'Hiji', english: 'Elbow', dutch: 'Elleboog' },
    { id: 'weapon-hiza', category: 'Anatomische-Wapens', japanese: 'Hiza', english: 'Knee', dutch: 'Knie' },

    // UKE WAZA (BLOCKS)
    { id: 'block-age-uke', category: 'Uke-Waza', japanese: 'Age Uke', english: 'Rising block', dutch: 'Opwaartse wering' },
    { id: 'block-soto-uke', category: 'Uke-Waza', japanese: 'Soto Uke', english: 'Outside block', dutch: 'Buitenwaartse wering' },
    { id: 'block-uchi-uke', category: 'Uke-Waza', japanese: 'Uchi Uke', english: 'Inside block', dutch: 'Binnenwaartse wering' },
    { id: 'block-gedan-barai', category: 'Uke-Waza', japanese: 'Gedan Barai', english: 'Downward block', dutch: 'Lage vegende wering' },

    // ZUKI/UCHI WAZA (PUNCHES/STRIKES)
    { id: 'punch-choku-zuki', category: 'Zuki-Uchi-Waza', japanese: 'Choku Zuki', english: 'Straight punch', dutch: 'Rechte stoot' },
    { id: 'punch-gyaku-zuki', category: 'Zuki-Uchi-Waza', japanese: 'Gyaku Zuki', english: 'Reverse punch', dutch: 'Tegengestelde stoot' },
    { id: 'punch-oi-zuki', category: 'Zuki-Uchi-Waza', japanese: 'Oi Zuki', english: 'Lunge punch', dutch: 'Voorwaartse stoot' },
    { id: 'strike-uraken', category: 'Zuki-Uchi-Waza', japanese: 'Uraken Uchi', english: 'Backfist strike', dutch: 'Knokkelslag' },
    { id: 'strike-tettsui', category: 'Zuki-Uchi-Waza', japanese: 'Tettsui Uchi', english: 'Hammerfist strike', dutch: 'Hamerslag' },

    // GERI WAZA (KICKS)
    { id: 'kick-mae-geri', category: 'Geri-Waza', japanese: 'Mae Geri', english: 'Front kick', dutch: 'Voorwaartse trap' },
    { id: 'kick-mawashi-geri', category: 'Geri-Waza', japanese: 'Mawashi Geri', english: 'Roundhouse kick', dutch: 'Cirkeltrap' },
    { id: 'kick-yoko-geri', category: 'Geri-Waza', japanese: 'Yoko Geri', english: 'Side kick', dutch: 'Zijwaartse trap' },
    { id: 'kick-ushiro-geri', category: 'Geri-Waza', japanese: 'Ushiro Geri', english: 'Back kick', dutch: 'Achterwaartse trap' },

    // TUITE WAZA (GRAPPLING)
    { id: 'tuite-kansetsu', category: 'Tuite-Waza', japanese: 'Kansetsu Waza', english: 'Joint locks', dutch: 'Gewrichtsklemmen' },
    { id: 'tuite-nage', category: 'Tuite-Waza', japanese: 'Nage Waza', english: 'Throws', dutch: 'Worpen' },
    { id: 'tuite-shime', category: 'Tuite-Waza', japanese: 'Shime Waza', english: 'Strangulations', dutch: 'Verwurgingen' },

    // KYUSHO (VITAL POINTS)
    { id: 'kyusho-suigetsu', category: 'Kyusho', japanese: 'Suigetsu', english: 'Solar plexus', dutch: 'Zonnevlecht' },
    { id: 'kyusho-jinchu', category: 'Kyusho', japanese: 'Jinchu', english: 'Philtrum', dutch: 'Tussen bovenlip en neus' },
    { id: 'kyusho-komekami', category: 'Kyusho', japanese: 'Komekami', english: 'Temple', dutch: 'Slaap' },
    { id: 'kyusho-dokko', category: 'Kyusho', japanese: 'Dokko', english: 'Mastoid process', dutch: 'Achter het oor' },
];

// Generate the file content
let content = header + '\\n';

allTerms.forEach((term, index) => {
    const kanji = term.kanji ? `, kanji: '${term.kanji}'` : '';
    content += `  { id: '${term.id}', category: '${term.category}', japanese: '${term.japanese}'${kanji}, english: '${term.english}', dutch: '${term.dutch}' }`;

    if (index < allTerms.length - 1) {
        content += ',\\n';
    } else {
        content += '\\n';
    }
});

content += footer;

// Write to file
const outputPath = path.join(__dirname, 'src', 'data', 'techniquesData.ts');
fs.writeFileSync(outputPath, content, 'utf8');

console.log(`✅ Successfully generated ${allTerms.length} terms across 12 categories`);
console.log(`📝 Written to: ${outputPath}`);
console.log('\\n📊 Category breakdown:');

const categoryCounts = {};
allTerms.forEach(term => {
    categoryCounts[term.category] = (categoryCounts[term.category] || 0) + 1;
});

Object.entries(categoryCounts).forEach(([cat, count]) => {
    console.log(`   ${cat}: ${count} terms`);
});
