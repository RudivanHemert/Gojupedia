import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const allTerms = [
    // BASISKENNIS
    { id: 'basis-karate', category: 'Basiskennis', japanese: 'Karate', english: 'Empty Hand', dutch: 'Gevechtskunst, letterlijk: lege hand' },
    { id: 'basis-karatedo', category: 'Basiskennis', japanese: 'Karate-do', english: 'The Way of Empty Hand', dutch: 'De weg van de lege hand' },
    { id: 'basis-okinawa', category: 'Basiskennis', japanese: 'Okinawa', english: 'Largest Ryukyu Island', dutch: 'Grootste eiland van de Ryukyu-eilanden' },
    { id: 'basis-ryu', category: 'Basiskennis', japanese: 'Ryu', english: 'Style', dutch: 'Stijl' },
    { id: 'basis-goju-ryu', category: 'Basiskennis', japanese: 'Goju-ryu', english: 'Hard-Soft Style', dutch: 'Hard-zachte stijl' },
    { id: 'basis-budo', category: 'Basiskennis', japanese: 'Budo', kanji: '武道', english: 'Martial Way', dutch: 'De weg van de krijger' },
    { id: 'basis-ki', category: 'Basiskennis', japanese: 'Ki', kanji: '気', english: 'Vital energy', dutch: 'Vitale energie of levenskracht' },
    { id: 'basis-tanden', category: 'Basiskennis', japanese: 'Tanden', english: 'Energy center', dutch: 'Energetisch centrum van het lichaam' },
    { id: 'basis-zanshin', category: 'Basiskennis', japanese: 'Zanshin', kanji: '残心', english: 'Remaining awareness', dutch: 'Blijvende aandacht en alertheid' },
    { id: 'basis-kiai', category: 'Basiskennis', japanese: 'Kiai', kanji: '気合', english: 'Spirit shout', dutch: 'Krachtschreeuw' },

    // ORGANISATIE
    { id: 'org-dojo', category: 'Organisatie', japanese: 'Dojo', kanji: '道場', english: 'Training hall', dutch: 'Oefenruimte' },
    { id: 'org-sensei', category: 'Organisatie', japanese: 'Sensei', kanji: '先生', english: 'Teacher', dutch: 'Leraar' },
    { id: 'org-senpai', category: 'Organisatie', japanese: 'Senpai', kanji: '先輩', english: 'Senior student', dutch: 'Gevorderde student' },
    { id: 'org-kohai', category: 'Organisatie', japanese: 'Kohai', kanji: '後輩', english: 'Junior student', dutch: 'Beginnende student' },
    { id: 'org-rei', category: 'Organisatie', japanese: 'Rei', kanji: '礼', english: 'Bow', dutch: 'Buigen' },
    { id: 'org-seiza', category: 'Organisatie', japanese: 'Seiza', kanji: '正座', english: 'Formal sitting', dutch: 'Formeel zitten' },
    { id: 'org-mokuso', category: 'Organisatie', japanese: 'Mokuso', kanji: '黙想', english: 'Meditation', dutch: 'Meditatie' },
    { id: 'org-yoi', category: 'Organisatie', japanese: 'Yoi', kanji: '用意', english: 'Ready', dutch: 'Klaar' },
    { id: 'org-hajime', category: 'Organisatie', japanese: 'Hajime', kanji: '始め', english: 'Begin', dutch: 'Begin' },
    { id: 'org-yame', category: 'Organisatie', japanese: 'Yame', kanji: '止め', english: 'Stop', dutch: 'Stop' },
    { id: 'org-osu', category: 'Organisatie', japanese: 'Osu', kanji: '押忍', english: 'Yes', dutch: 'Ja, begrepen' },
    { id: 'org-gi', category: 'Organisatie', japanese: 'Gi', kanji: '着', english: 'Uniform', dutch: 'Karatepak' },
    { id: 'org-obi', category: 'Organisatie', japanese: 'Obi', kanji: '帯', english: 'Belt', dutch: 'Band' },

    // TRAINING
    { id: 'train-kihon', category: 'Training', japanese: 'Kihon', kanji: '基本', english: 'Basic techniques', dutch: 'Basistechnieken' },
    { id: 'train-kata', category: 'Training', japanese: 'Kata', kanji: '型', english: 'Form', dutch: 'Stijlvorm' },
    { id: 'train-kumite', category: 'Training', japanese: 'Kumite', kanji: '組手', english: 'Sparring', dutch: 'Gevechtsoefeningen' },
    { id: 'train-jodan', category: 'Training', japanese: 'Jodan', kanji: '上段', english: 'Upper level', dutch: 'Hoog niveau' },
    { id: 'train-chudan', category: 'Training', japanese: 'Chudan', kanji: '中段', english: 'Middle level', dutch: 'Middenniveau' },
    { id: 'train-gedan', category: 'Training', japanese: 'Gedan', kanji: '下段', english: 'Lower level', dutch: 'Laag niveau' },
    { id: 'train-hidari', category: 'Training', japanese: 'Hidari', kanji: '左', english: 'Left', dutch: 'Links' },
    { id: 'train-migi', category: 'Training', japanese: 'Migi', kanji: '右', english: 'Right', dutch: 'Rechts' },

    // HOJO UNDO
    { id: 'hojo-makiwara', category: 'Hojo-Undo', japanese: 'Makiwara', kanji: '巻藁', english: 'Striking post', dutch: 'Stootplank' },
    { id: 'hojo-chishi', category: 'Hojo-Undo', japanese: 'Chishi', english: 'Stone hammer', dutch: 'Stenen hamer' },

    // DACHI WAZA
    { id: 'stance-sanchin', category: 'Dachi-Waza', japanese: 'Sanchin Dachi', kanji: '三戦立', english: 'Hourglass stance', dutch: 'Zandloper-stand' },
    { id: 'stance-zenkutsu', category: 'Dachi-Waza', japanese: 'Zenkutsu Dachi', kanji: '前屈立', english: 'Forward stance', dutch: 'Voorwaartse stand' },
    { id: 'stance-shiko', category: 'Dachi-Waza', japanese: 'Shiko Dachi', kanji: '四股立', english: 'Wide stance', dutch: 'Wijdbeens stand' },
    { id: 'stance-neko-ashi', category: 'Dachi-Waza', japanese: 'Neko Ashi Dachi', kanji: '猫足立', english: 'Cat stance', dutch: 'Katstand' },
    { id: 'stance-heiko', category: 'Dachi-Waza', japanese: 'Heiko Dachi', kanji: '平行立', english: 'Parallel stance', dutch: 'Parallelstand' },

    // VERPLAATSINGEN
    { id: 'move-tenshin', category: 'Verplaatsingen', japanese: 'Tenshin', english: 'Shifting', dutch: 'Verplaatsing' },
    { id: 'move-tai-sabaki', category: 'Verplaatsingen', japanese: 'Tai Sabaki', english: 'Body movement', dutch: 'Lichaamverplaatsing' },

    // ANATOMISCHE WAPENS
    {
        id: 'weapon-se

iken', category: 'Anatomische - Wapens', japanese: 'Seiken', english: 'Forefist', dutch: 'Vuist' },
  { id: 'weapon-shuto', category: 'Anatomische-Wapens', japanese: 'Shuto', english: 'Knifehand', dutch: 'Meshand' },
  { id: 'weapon-hiji', category: 'Anatomische-Wapens', japanese: 'Hiji', english: 'Elbow', dutch: 'Elleboog' },
    { id: 'weapon-hiza', category: 'Anatomische-Wapens', japanese: 'Hiza', english: 'Knee', dutch: 'Knie' },

    // UKE WAZA
    { id: 'block-age-uke', category: 'Uke-Waza', japanese: 'Age Uke', english: 'Rising block', dutch: 'Opwaartse wering' },
    { id: 'block-soto-uke', category: 'Uke-Waza', japanese: 'Soto Uke', english: 'Outside block', dutch: 'Buitenwaartse wering' },
    { id: 'block-uchi-uke', category: 'Uke-Waza', japanese: 'Uchi Uke', english: 'Inside block', dutch: 'Binnenwaartse wering' },
    { id: 'block-gedan-barai', category: 'Uke-Waza', japanese: 'Gedan Barai', english: 'Downward block', dutch: 'Lage wering' },

    // ZUKI/UCHI WAZA
    { id: 'punch-choku-zuki', category: 'Zuki-Uchi-Waza', japanese: 'Choku Zuki', english: 'Straight punch', dutch: 'Rechte stoot' },
    { id: 'punch-gyaku-zuki', category: 'Zuki-Uchi-Waza', japanese: 'Gyaku Zuki', english: 'Reverse punch', dutch: 'Tegengestelde stoot' },
    { id: 'punch-oi-zuki', category: 'Zuki-Uchi-Waza', japanese: 'Oi Zuki', english: 'Lunge punch', dutch: 'Voorwaartse stoot' },
    { id: 'strike-uraken', category: 'Zuki-Uchi-Waza', japanese: 'Uraken Uchi', english: 'Backfist strike', dutch: 'Knokkelslag' },
    { id: 'strike-tettsui', category: 'Zuki-Uchi-Waza', japanese: 'Tettsui Uchi', english: 'Hammerfist strike', dutch: 'Hamerslag' },

    // GERI WAZA
    { id: 'kick-mae-geri', category: 'Geri-Waza', japanese: 'Mae Geri', english: 'Front kick', dutch: 'Voorwaartse trap' },
    { id: 'kick-mawashi-geri', category: 'Geri-Waza', japanese: 'Mawashi Geri', english: 'Roundhouse kick', dutch: 'Cirkeltrap' },
    { id: 'kick-yoko-geri', category: 'Geri-Waza', japanese: 'Yoko Geri', english: 'Side kick', dutch: 'Zijwaartse trap' },
    { id: 'kick-ushiro-geri', category: 'Geri-Waza', japanese: 'Ushiro Geri', english: 'Back kick', dutch: 'Achterwaartse trap' },

    // TUITE WAZA
    { id: 'tuite-kansetsu', category: 'Tuite-Waza', japanese: 'Kansetsu Waza', english: 'Joint locks', dutch: 'Gewrichtsklemmen' },
    { id: 'tuite-nage', category: 'Tuite-Waza', japanese: 'Nage Waza', english: 'Throws', dutch: 'Worpen' },
    { id: 'tuite-shime', category: 'Tuite-Waza', japanese: 'Shime Waza', english: 'Strangulations', dutch: 'Verwurgingen' },

    // KYUSHO
    { id: 'kyusho-suigetsu', category: 'Kyusho', japanese: 'Suigetsu', english: 'Solar plexus', dutch: 'Zonnevlecht' },
    { id: 'kyusho-jinchu', category: 'Kyusho', japanese: 'Jinchu', english: 'Philtrum', dutch: 'Tussen bovenlip en neus' },
    { id: 'kyusho-komekami', category: 'Kyusho', japanese: 'Komekami', english: 'Temple', dutch: 'Slaap' },
    { id: 'kyusho-dokko', category: 'Kyusho', japanese: 'Dokko', english: 'Mastoid process', dutch: 'Achter het oor' },
];

// Build content properly
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

export const techniquesData: TechniqueData[] = [
`;

const lines = allTerms.map((term, index) => {
    const kanji = term.kanji ? `, kanji: '${term.kanji}'` : '';
    const isLast = index === allTerms.length - 1;
    return `  { id: '${term.id}', category: '${term.category}', japanese: '${term.japanese}'${kanji}, english: '${term.english}', dutch: '${term.dutch}' }${isLast ? '' : ','}`;
});

const content = header + lines.join('\n') + '\n];\n';

// Write file
const outputPath = path.join(__dirname, 'src', 'data', 'techniquesData.ts');
fs.writeFileSync(outputPath, content, 'utf8');

console.log(`✅ Successfully generated ${allTerms.length} terms`);
console.log(`📝 Written to: ${outputPath}`);
