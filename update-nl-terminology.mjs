import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, 'src', 'i18n', 'locales', 'nl', 'terminology.json');
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

// Expand general-terms-content with COMPLETE Basiskennis + Organisatie
data.terminology.sections["general-terms-content"].terms = {
    // BASISKENNIS
    "karate": { "name": "Karate", "japanese": "空手", "english": "Gevechtskunst, letterlijk: lege hand" },
    "karate-do": { "name": "Karate-do", "japanese": "空手道", "english": "De weg van de lege hand" },
    "okinawa": { "name": "Okinawa", "japanese": "沖縄", "english": "Grootste eiland van de Ryukyu-eilanden" },
    "ryu": { "name": "Ryu", "japanese": "流", "english": "Stijl" },
    "goju-ryu": { "name": "Goju-ryu", "japanese": "剛柔流", "english": "Hard-zachte stijl" },
    "naha-te": { "name": "Naha-te", "japanese": "那覇手", "english": "Oude krijgskunst uit Naha" },
    "shuri-te": { "name": "Shuri-te", "japanese": "首里手", "english": "Oude krijgskunst uit Shuri" },
    "tomari-te": { "name": "Tomari-te", "japanese": "泊手", "english": "Oude krijgskunst uit Tomari" },
    "kobudo": { "name": "Kobudo", "japanese": "古武道", "english": "Okinawaanse wapenkunst" },
    "budo": { "name": "Budo", "japanese": "武道", "english": "De weg van de krijger" },
    "kenkon": { "name": "Kenkon", "japanese": "乾坤", "english": "Hemel en aarde (IOGKF symbool)" },
    "tanden": { "name": "Tanden", "japanese": "丹田", "english": "Energetisch centrum van het lichaam" },
    "hara": { "name": "Hara", "japanese": "腹", "english": "Lagere buik" },
    "ki": { "name": "Ki", "japanese": "気", "english": "Vitale energie, levenskracht" },
    "chinkuchi": { "name": "Chinkuchi", "japanese": "チンクチ", "english": "Richten van kracht" },
    "muchimi": { "name": "Muchimi", "japanese": "ムチミ", "english": "Klevende, gecontroleerde beweging" },
    "kiai": { "name": "Kiai", "japanese": "気合", "english": "Krachtschreeuw" },
    "zanshin": { "name": "Zanshin", "japanese": "残心", "english": "Blijvende aandacht en alertheid" },
    "heijoshin": { "name": "Heijoshin", "japanese": "平常心", "english": "Evenwichtige kalme geest" },
    "mushin": { "name": "Mushin", "japanese": "無心", "english": "Geen geest" },
    "kokyu": { "name": "Kokyu", "japanese": "呼吸", "english": "Ademhaling" },

    // ORGANISATIE & ETIQUETTE
    "dojo": { "name": "Dojo", "japanese": "道場", "english": "Oefenruimte" },
    "dojo-kun": { "name": "Dojo Kun", "japanese": "道場訓", "english": "Dojo regels" },
    "shomen": { "name": "Shomen", "japanese": "正面", "english": "Voorzijde van de dojo" },
    "shinden": { "name": "Shinden", "japanese": "神殿", "english": "Altaar" },
    "sensei": { "name": "Sensei", "japanese": "先生", "english": "Leraar" },
    "senpai": { "name": "Senpai", "japanese": "先輩", "english": "Gevorderde student" },
    "kohai": { "name": "Kohai", "japanese": "後輩", "english": "Beginnende student" },
    "dan": { "name": "Dan", "japanese": "段", "english": "Dan graad (zwarte band)" },
    "kyu": { "name": "Kyu", "japanese": "級", "english": "Kyu graad (gekleurde band)" },
    "yudansha": { "name": "Yudansha", "japanese": "有段者", "english": "Zwarte band houder" },
    "reigi": { "name": "Reigi", "japanese": "礼儀", "english": "Etiquette, respect" },
    "shugo": { "name": "Shugo", "japanese": "集合", "english": "Verzamelen" },
    "ki-o-tsuke": { "name": "Ki O Tsuke", "japanese": "気をつけ", "english": "Attentie" },
    "seiza": { "name": "Seiza", "japanese": "正座", "english": "Formeel zitten" },
    "anza": { "name": "Anza", "japanese": "安座", "english": "Kleermakerszit" },
    "mokuso": { "name": "Mokuso", "japanese": "黙想", "english": "Meditatie" },
    "mokuso-yame": { "name": "Mokuso Yame", "japanese": "黙想止め", "english": "Beëindig meditatie" },
    "rei": { "name": "Rei", "japanese": "礼", "english": "Buigen" },
    "shomen-ni-rei": { "name": "Shomen Ni Rei", "japanese": "正面に礼", "english": "Buig naar de voorkant" },
    "shinden-ni-rei": { "name": "Shinden Ni Rei", "japanese": "神殿に礼", "english": "Buig naar het altaar" },
    "sensei-ni-rei": { "name": "Sensei Ni Rei", "japanese": "先生に礼", "english": "Buig naar de leraar" },
    "otagaini-rei": { "name": "Otagaini Rei", "japanese": "お互いに礼", "english": "Buig naar elkaar" },
    "onegai-shimasu": { "name": "Onegai Shimasu", "japanese": "お願いします", "english": "Alstublieft (begin groet)" },
    "arigato-gozaimashita": { "name": "Arigato Gozaimashita", "japanese": "ありがとうございました", "english": "Dank u wel" },
    "osu": { "name": "Osu", "japanese": "押忍", "english": "Ja, begrepen" },
    "owarimas": { "name": "Owarimas", "japanese": "終わります", "english": "Dat was het" },
    "shitsurei-shimasu": { "name": "Shitsurei Shimasu", "japanese": "失礼します", "english": "Sorry" },
    "tatte": { "name": "Tatte", "japanese": "立って", "english": "Sta op" },
    "yoi": { "name": "Yoi", "japanese": "用意", "english": "Klaar" },
    "hajime": { "name": "Hajime", "japanese": "始め", "english": "Begin" },
    "yame": { "name": "Yame", "japanese": "止め", "english": "Stop" },
    "kime": { "name": "Kime", "japanese": "決め", "english": "Focus" },
    "yasume": { "name": "Yasume", "japanese": "休め", "english": "Ontspan" },
    "gorei-nashi": { "name": "Gorei Nashi", "japanese": "号令なし", "english": "Op één tel" },
    "gasshuku": { "name": "Gasshuku", "japanese": "合宿", "english": "Trainings kamp" },
    "sayonara": { "name": "Sayonara", "japanese": "さようなら", "english": "Tot ziens" },
    "gi": { "name": "Gi", "japanese": "着", "english": "Karatepak" },
    "obi": { "name": "Obi", "japanese": "帯", "english": "Band" },
    "geiko": { "name": "Geiko", "japanese": "稽古", "english": "Trainen" },
    "moichido": { "name": "Moichido", "japanese": "もう一度", "english": "Nog een keer" },

    // TRAINING
    "junbi-undo": { "name": "Junbi Undo", "japanese": "準備運動", "english": "Warming-up" },
    "kokyu-undo": { "name": "Kokyu Undo", "japanese": "呼吸運動", "english": "Ademhalingsoefeningen" },
    "hojo-undo": {
        "name": "Hojo Undo", "japanese": "補助運動", "english": "Ondersteunende krachtoe

feningen" },
  "kihon": { "name": "Kihon", "japanese": "基本", "english": "Basistechnieken" },
"kata": { "name": "Kata", "japanese": "型", "english": "Stijlvorm" },
"kumite": { "name": "Kumite", "japanese": "組手", "english": "Gevechtsoefeningen" },
"semete": { "name": "Semete", "japanese": "攻め手", "english": "Aanvaller" },
"ukete": { "name": "Ukete", "japanese": "受け手", "english": "Verdediger" },
"jodan": { "name": "Jodan", "japanese": "上段", "english": "Hoog niveau" },
"chudan": { "name": "Chudan", "japanese": "中段", "english": "Middenniveau" },
"gedan": { "name": "Gedan", "japanese": "下段", "english": "Laag niveau" },
"hidari": { "name": "Hidari", "japanese": "左", "english": "Links" },
"migi": { "name": "Migi", "japanese": "右", "english": "Rechts" },
"age": { "name": "Age", "japanese": "上げ", "english": "Opwaarts" },
"otoshi": { "name": "Otoshi", "japanese": "落とし", "english": "Neerwaarts" },
"yoko": { "name": "Yoko", "japanese": "横", "english": "Zijwaarts" },
"soto": { "name": "Soto", "japanese": "外", "english": "Buitenwaarts" },
"uchi": { "name": "Uchi", "japanese": "内", "english": "Binnenwaarts" },
"mawatte": { "name": "Mawatte", "japanese": "回って", "english": "Draai" },
"ashi-o-kaete": { "name": "Ashi O Kaete", "japanese": "足を変えて", "english": "Voetwissel" },
"te-o-kaete": { "name": "Te O Kaete", "japanese": "手を変えて", "english": "Armwissel" },
"go-waza": { "name": "Go Waza", "japanese": "剛技", "english": "Harde technieken" },
"ju-waza": { "name": "Ju Waza", "japanese": "柔技", "english": "Zachte technieken" },
"dachi-waza": { "name": "Dachi Waza", "japanese": "立ち技", "english": "Standen" },
"uke-waza": { "name": "Uke Waza", "japanese": "受け技", "english": "Afweertechnieken" },
"zuki-waza": { "name": "Zuki Waza", "japanese": "突き技", "english": "Stoottechnieken" },
"uchi-waza": { "name": "Uchi Waza", "japanese": "打ち技", "english": "Slagtechnieken" },
"geri-waza": { "name": "Geri Waza", "japanese": "蹴り技", "english": "Traptechnieken" },
"ne-waza": { "name": "Ne Waza", "japanese": "寝技", "english": "Grondtechnieken" },
"tuite-waza": { "name": "Tuite Waza", "japanese": "取手技", "english": "Worstel-technieken" }
};

// Add Hojo Undo to equipment section
data.terminology.sections["equipment-weapons-content"].terms = {
    ...data.terminology.sections["equipment-weapons-content"].terms,
    "chishi": { "name": "Chishi", "japanese": "力石", "english": "Stenen hamer" },
    "ishi-sashi": { "name": "Ishi Sashi", "japanese": "石鎖", "english": "Stenen hangslot" },
    "nigiri-game": { "name": "Nigiri Game", "japanese": "握り甕", "english": "Grijpvazen" },
    "kongoken": { "name": "Kongoken", "japanese": "金剛圏", "english": "Ijzeren ovaal" },
    "tan": { "name": "Tan", "japanese": "担", "english": "Halter" },
    "makiwara": { "name": "Makiwara", "japanese": "巻藁", "english": "Stootplank" }
};

// Write back
fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');

console.log('✅ Successfully updated Dutch terminology!');
console.log('📝 Added:');
console.log('   - Basiskennis & Organisatie: ~60 terms');
console.log('   - Training: ~30 terms');
console.log('   - Hojo Undo: 6 terms');
console.log('\n🎯 Next: Add blocks, punches, kicks, and vital points...');
