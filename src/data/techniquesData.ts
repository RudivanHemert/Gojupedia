// Define an interface for the technique data
export interface TechniqueData {
  id: string;
  category: 'Stances' | 'Kicks' | 'Punches' | 'Blocks' | 'Strikes' | 'General' | 'Numbers' | 'Tournament' | 'Equipment' | 'Goju-Ryu' | 'Titles' | 'Phrases' | 'Kata';
  japanese: string;
  kanji?: string; // Kanji is optional
  english: string;
  description?: string; // Optional description
  // Add other fields as needed, e.g., imageUrl, videoUrl
}

// Define the technique data array
export const techniquesData: TechniqueData[] = [
  // --- Stances --- 
  // Basic Stances
  { id: 'stance-hachiji', category: 'Stances', japanese: 'Hachiji dachi', kanji: '八字立', english: 'Natural stance' },
  { id: 'stance-heiko', category: 'Stances', japanese: 'Heiko dachi', kanji: '平行立', english: 'Parallel stance' },
  { id: 'stance-heisoku', category: 'Stances', japanese: 'Heisoku dachi', kanji: '閉足立', english: 'Informal attention stance' },
  { id: 'stance-musubi', category: 'Stances', japanese: 'Musubi dachi', kanji: '結び立', english: 'Informal attention stance, feet turned out' },
  { id: 'stance-shizen', category: 'Stances', japanese: 'Shizen dachi', kanji: '自然立', english: 'Natural combative posture' },
  { id: 'stance-shizentai', category: 'Stances', japanese: 'Shizentai', kanji: '自然体', english: 'Natural position' },
  // Combative Stances
  { id: 'stance-zenkutsu', category: 'Stances', japanese: 'Zenkutsu dachi', kanji: '前屈立', english: 'Long stance' },
  { id: 'stance-han-zenkutsu', category: 'Stances', japanese: 'Han zenkutsu dachi', kanji: '半前屈立', english: 'Half forward stance' },
  { id: 'stance-kokutsu', category: 'Stances', japanese: 'Kokutsu dachi', kanji: '後屈立', english: 'Back stance' },
  { id: 'stance-kiba', category: 'Stances', japanese: 'Kiba dachi', kanji: '騎馬立', english: 'Straddle stance' },
  { id: 'stance-naihanshi', category: 'Stances', japanese: 'Naihanshi dachi', kanji: '内八字立', english: 'Kiba dachi with knees turned in and down' },
  { id: 'stance-sanchin', category: 'Stances', japanese: 'Sanchin dachi', kanji: '三戦立', english: 'Hour glass stance' },
  { id: 'stance-nekoashi', category: 'Stances', japanese: 'Neko ashi dachi', kanji: '猫足立', english: 'Cat stance' },
  { id: 'stance-sagiashi', category: 'Stances', japanese: 'Sagi ashi dachi', kanji: '鷺足立', english: 'Propped leg stance' },
  { id: 'stance-tsuriashi', category: 'Stances', japanese: 'Tsuri ashi dachi', kanji: '釣足立', english: 'Crane stance with propped leg' },
  // Special Stances
  { id: 'stance-fudo', category: 'Stances', japanese: 'Fudo dachi', kanji: '不動立', english: 'Rooted stance, \'Immovable stance\'' },
  { id: 'stance-gankaku', category: 'Stances', japanese: 'Gankaku dachi', kanji: '岩鶴立', english: 'One legged stance' },
  { id: 'stance-hangetsu', category: 'Stances', japanese: 'Hangetsu dachi', kanji: '半月立', english: 'Half moon stance' },
  { id: 'stance-sochin', category: 'Stances', japanese: 'Sochin dachi', kanji: '壮鎮立', english: 'Diagonal straddle leg \'Immovable\' stance' },
  { id: 'stance-shiko', category: 'Stances', japanese: 'Shiko dachi', kanji: '四股立', english: 'Box stance' },
  { id: 'stance-reinoji', category: 'Stances', japanese: 'Reinoji dachi', kanji: 'レイノジ立', english: 'L stance' },
  { id: 'stance-sesan', category: 'Stances', japanese: 'Sesan dachi', kanji: '三戦立', english: 'Side facing straddle stance' }, // Note: Same kanji as Sanchin, but different reading/stance
  // Movement and Position
  { id: 'stance-hanmi', category: 'Stances', japanese: 'Hanmi', kanji: '半身', english: 'Half front facing position' },
  { id: 'stance-hanmi-kamae', category: 'Stances', japanese: 'Hanmi no kamae', kanji: '半身の構え', english: 'Half forward facing combative posture' },
  { id: 'stance-hidari-shizen', category: 'Stances', japanese: 'Hidari shizen tai', kanji: '左自然体', english: 'Left natural position' },
  { id: 'stance-hidari-teiji', category: 'Stances', japanese: 'Hidari teiji dachi', kanji: '左丁字立', english: 'Left T stance' },
  { id: 'stance-jodan-kamae', category: 'Stances', japanese: 'Jodan no kamae', kanji: '上段の構え', english: 'Upper level combative posture' },
  { id: 'stance-gedan-kamae', category: 'Stances', japanese: 'Gedan no kamae', kanji: '下段の構え', english: 'Lower level combative posture' },
  { id: 'stance-tsugiashi', category: 'Stances', japanese: 'Tsugi ashi', kanji: '次足', english: 'Shuffling step' },
  { id: 'stance-yoriashi', category: 'Stances', japanese: 'Yori ashi', kanji: '寄足', english: 'Dragging step' },

  // --- Kicks --- 
  // Basic Kicks
  { id: 'kick-mae', category: 'Kicks', japanese: 'Mae Geri', kanji: '前蹴り', english: 'Front Kick' },
  { id: 'kick-yoko', category: 'Kicks', japanese: 'Yoko Geri', kanji: '横蹴り', english: 'Side Kick' },
  { id: 'kick-mawashi', category: 'Kicks', japanese: 'Mawashi Geri', kanji: '回し蹴り', english: 'Roundhouse Kick' },
  { id: 'kick-ushiro', category: 'Kicks', japanese: 'Ushiro Geri', kanji: '後ろ蹴り', english: 'Back Kick' },
  { id: 'kick-mikazuki', category: 'Kicks', japanese: 'Mikazuki Geri', kanji: '三日月蹴り', english: 'Crescent Kick' },
  { id: 'kick-kekomi', category: 'Kicks', japanese: 'Kekomi', kanji: '蹴込み', english: 'Thrust Kick' },
  { id: 'kick-keage', category: 'Kicks', japanese: 'Keage', kanji: '蹴上げ', english: 'Snap Kick' },
  { id: 'kick-fumikomi', category: 'Kicks', japanese: 'Fumikomi', kanji: '踏み込み', english: 'Stomp Kick' },
  { id: 'kick-hiza', category: 'Kicks', japanese: 'Hiza Geri', kanji: '膝蹴り', english: 'Knee Kick' },
  { id: 'kick-ashibarai', category: 'Kicks', japanese: 'Ashi Barai', kanji: '足払い', english: 'Foot Sweep' },
  // Advanced Kicks (Note: Some duplicates from Basic, kept for categorization from original file)
  { id: 'kick-ura-mawashi', category: 'Kicks', japanese: 'Ura Mawashi Geri', kanji: '裏回し蹴り', english: 'Reverse Roundhouse Kick' },
  { id: 'kick-ushiro-mawashi', category: 'Kicks', japanese: 'Ushiro Mawashi Geri', kanji: '後ろ回し蹴り', english: 'Spinning Roundhouse Kick' },
  { id: 'kick-nidan', category: 'Kicks', japanese: 'Nidan Geri', kanji: '二段蹴り', english: 'Double Kick' },
  { id: 'kick-tobi', category: 'Kicks', japanese: 'Tobi Geri', kanji: '飛び蹴り', english: 'Jumping Kick' },
  { id: 'kick-gyaku-mawashi', category: 'Kicks', japanese: 'Gyaku Mawashi Geri', kanji: '逆回し蹴り', english: 'Reverse Roundhouse Kick' }, // Duplicate of ura mawashi?
  { id: 'kick-kakato', category: 'Kicks', japanese: 'Kakato Geri', kanji: '踵蹴り', english: 'Heel Kick' },
  // Kicking Variations
  { id: 'kick-jodan', category: 'Kicks', japanese: 'Jodan Geri', kanji: '上段蹴り', english: 'High Level Kick' },
  { id: 'kick-chudan', category: 'Kicks', japanese: 'Chudan Geri', kanji: '中段蹴り', english: 'Middle Level Kick' },
  { id: 'kick-gedan', category: 'Kicks', japanese: 'Gedan Geri', kanji: '下段蹴り', english: 'Low Level Kick' },
  { id: 'kick-kin', category: 'Kicks', japanese: 'Kin Geri', kanji: '金的蹴り', english: 'Groin Kick' },
  { id: 'kick-kakato-otoshi', category: 'Kicks', japanese: 'Kakato Otoshi Geri', kanji: '踵落とし蹴り', english: 'Heel Drop Kick' },

  // --- Punches --- 
  // Basic Punches
  { id: 'punch-seiken', category: 'Punches', japanese: 'Seiken Tsuki', kanji: '正拳突き', english: 'Forefist Punch' },
  { id: 'punch-gyaku', category: 'Punches', japanese: 'Gyaku Tsuki', kanji: '逆突き', english: 'Reverse Punch' },
  { id: 'punch-oi', category: 'Punches', japanese: 'Oi Tsuki', kanji: '追い突き', english: 'Lunge Punch' },
  { id: 'punch-kizami', category: 'Punches', japanese: 'Kizami Tsuki', kanji: '刻み突き', english: 'Jab Punch' },
  { id: 'punch-morote', category: 'Punches', japanese: 'Morote Tsuki', kanji: '諸手突き', english: 'Double Punch' },
  { id: 'punch-yama', category: 'Punches', japanese: 'Yama Tsuki', kanji: '山突き', english: 'Mountain Punch' },
  { id: 'punch-awase', category: 'Punches', japanese: 'Awase Tsuki', kanji: '合わせ突き', english: 'U Punch' },
  { id: 'punch-hasami', category: 'Punches', japanese: 'Hasami Tsuki', kanji: 'はさみ突き', english: 'Scissors Punch' },
  { id: 'punch-heiko', category: 'Punches', japanese: 'Heiko Tsuki', kanji: '平行突き', english: 'Parallel Punch' },
  { id: 'punch-kage', category: 'Punches', japanese: 'Kage Tsuki', kanji: '影突き', english: 'Hook Punch' },
  // Special Punches
  { id: 'punch-tate', category: 'Punches', japanese: 'Tate Tsuki', kanji: '立て突き', english: 'Vertical Punch' },
  { id: 'punch-ura', category: 'Punches', japanese: 'Ura Tsuki', kanji: '裏突き', english: 'Back Fist Punch' }, // Note: Ura Tsuki usually refers to Close Punch/Uppercut, but original used Back Fist. Might need clarification.
  { id: 'punch-nukite', category: 'Punches', japanese: 'Nukite', kanji: '貫手', english: 'Spear Hand' },
  { id: 'punch-ipponken', category: 'Punches', japanese: 'Ippon Ken', kanji: '一本拳', english: 'One Knuckle Punch' },
  { id: 'punch-nakadaka', category: 'Punches', japanese: 'Nakadaka Ippon Ken', kanji: '中高一本拳', english: 'Middle Finger One Knuckle Punch' },
  { id: 'punch-hiraken', category: 'Punches', japanese: 'Hiraken', kanji: '平拳', english: 'Flat Fist' },
  { id: 'punch-washide', category: 'Punches', japanese: 'Washide', kanji: '鷲手', english: 'Eagle Hand' },
  { id: 'punch-koken', category: 'Punches', japanese: 'Koken', kanji: '虎拳', english: 'Tiger Mouth' }, // Note: Koken is usually translated as Wrist Strike/Bent Wrist.

  // --- Blocks ---
  // Basic Blocks
  { id: 'block-age-uke', category: 'Blocks', japanese: 'Age Uke', kanji: '上げ受け', english: 'Rising Block', description: 'A block that deflects an attack upward, protecting the face and upper body.' },
  { id: 'block-gedan-barai', category: 'Blocks', japanese: 'Gedan Barai', kanji: '下段払い', english: 'Downward Sweep', description: 'A sweeping block that deflects attacks aimed at the lower body.' },
  { id: 'block-soto-uke', category: 'Blocks', japanese: 'Soto Uke', kanji: '外受け', english: 'Outside Block', description: 'A block that deflects an attack from the inside to the outside.' },
  { id: 'block-uchi-uke', category: 'Blocks', japanese: 'Uchi Uke', kanji: '内受け', english: 'Inside Block', description: 'A block that deflects an attack from the outside to the inside.' },
  { id: 'block-shuto-uke', category: 'Blocks', japanese: 'Shuto Uke', kanji: '手刀受け', english: 'Knife Hand Block', description: 'A block performed with the side of the hand.' },
  // Advanced Blocks
  { id: 'block-empi-uke', category: 'Blocks', japanese: 'Empi Uke', kanji: '肘受け', english: 'Elbow Block', description: 'A block performed with the elbow.' },
  { id: 'block-kosa-uke', category: 'Blocks', japanese: 'Kosa Uke', kanji: '交差受け', english: 'Cross Block', description: 'A block performed with crossed wrists.' },
  { id: 'block-juji-uke', category: 'Blocks', japanese: 'Juji Uke', kanji: '十字受け', english: 'X Block', description: 'A block performed with crossed arms forming an X shape.' },
  { id: 'block-haiwan-uke', category: 'Blocks', japanese: 'Haiwan Uke', kanji: '背腕受け', english: 'Back Arm Block', description: 'A block performed with the back of the forearm.' },
  { id: 'block-osae-uke', category: 'Blocks', japanese: 'Osae Uke', kanji: '押さえ受け', english: 'Pressing Block', description: 'A downward pressing block.' },

  // --- Strikes ---
  { id: 'strike-shuto-uchi', category: 'Strikes', japanese: 'Shuto Uchi', kanji: '手刀打ち', english: 'Knife Hand Strike' },
  { id: 'strike-haito-uchi', category: 'Strikes', japanese: 'Haito Uchi', kanji: '背刀打ち', english: 'Ridge Hand Strike' },
  { id: 'strike-haishu-uchi', category: 'Strikes', japanese: 'Haishu Uchi', kanji: '背手打ち', english: 'Back Hand Strike' },
  { id: 'strike-teisho-uchi', category: 'Strikes', japanese: 'Teisho Uchi', kanji: '底掌打ち', english: 'Palm Heel Strike' },
  { id: 'strike-kakuto-uchi', category: 'Strikes', japanese: 'Kakuto Uchi', kanji: '鶴頭打ち', english: 'Bent Wrist Strike' }, // Also known as Koken Uchi in some contexts
  { id: 'strike-hiji-ate', category: 'Strikes', japanese: 'Hiji Ate', kanji: '肘当て', english: 'Elbow Strike' },
  { id: 'strike-empi-uchi', category: 'Strikes', japanese: 'Empi Uchi', kanji: '猿臂打ち', english: 'Elbow Strike' }, // Alternate name/variation for Hiji Ate
  { id: 'strike-hiraken-uchi', category: 'Strikes', japanese: 'Hiraken Uchi', kanji: '平拳打ち', english: 'Flat Fist Strike' },
  { id: 'strike-koken-uchi', category: 'Strikes', japanese: 'Koken Uchi', kanji: '虎拳打ち', english: 'Tiger Mouth Strike' }, // Often refers to the striking surface, similar to Kakuto Uchi
  { id: 'strike-washide-uchi', category: 'Strikes', japanese: 'Washide Uchi', kanji: '鷲手打ち', english: 'Eagle Hand Strike' },

  // --- General Terms ---
  { id: 'general-karate', category: 'General', japanese: 'Karate', kanji: '空手', english: 'Empty Hand' },
  { id: 'general-karate-do', category: 'General', japanese: 'Karate-Do', kanji: '空手道', english: 'The Way of Karate' },
  { id: 'general-dojo', category: 'General', japanese: 'Dojo', kanji: '道場', english: 'Training Hall' },
  { id: 'general-gi', category: 'General', japanese: 'Gi', kanji: '着', english: 'Training Uniform' },
  { id: 'general-obi', category: 'General', japanese: 'Obi', kanji: '帯', english: 'Belt' },
  { id: 'general-kata', category: 'General', japanese: 'Kata', kanji: '型', english: 'Forms' },
  { id: 'general-kumite', category: 'General', japanese: 'Kumite', kanji: '組手', english: 'Sparring' },
  { id: 'general-kihon', category: 'General', japanese: 'Kihon', kanji: '基本', english: 'Basic Techniques' },
  { id: 'general-bunkai', category: 'General', japanese: 'Bunkai', kanji: '分解', english: 'Application Analysis' },
  { id: 'general-mokuso', category: 'General', japanese: 'Mokuso', kanji: '黙想', english: 'Meditation' },
  { id: 'general-rei', category: 'General', japanese: 'Rei', kanji: '礼', english: 'Bow' },
  { id: 'general-hajime', category: 'General', japanese: 'Hajime', kanji: '始め', english: 'Begin' },
  { id: 'general-yame', category: 'General', japanese: 'Yame', kanji: '止め', english: 'Stop' },
  { id: 'general-yoi', category: 'General', japanese: 'Yoi', kanji: '用意', english: 'Ready' },
  { id: 'general-mawatte', category: 'General', japanese: 'Mawatte', kanji: '回って', english: 'Turn Around' },
  { id: 'general-shugo', category: 'General', japanese: 'Shugo', kanji: '集合', english: 'Line Up' },
  { id: 'general-kiotsuke', category: 'General', japanese: 'Ki o tsuke', kanji: '気をつけ', english: 'Attention' },
  { id: 'general-kiai', category: 'General', japanese: 'Kiai', kanji: '気合', english: 'Spirit Shout' },
  { id: 'general-zanshin', category: 'General', japanese: 'Zanshin', kanji: '残心', english: 'Awareness' },
  { id: 'general-tai-sabaki', category: 'General', japanese: 'Tai Sabaki', kanji: '体捌き', english: 'Body Movement' },

  // --- Numbers ---
  // Basic Numbers
  { id: 'number-ichi', category: 'Numbers', japanese: 'Ichi', kanji: '一', english: 'One' },
  { id: 'number-ni', category: 'Numbers', japanese: 'Ni', kanji: '二', english: 'Two' },
  { id: 'number-san', category: 'Numbers', japanese: 'San', kanji: '三', english: 'Three' },
  { id: 'number-shi-yon', category: 'Numbers', japanese: 'Shi / Yon', kanji: '四', english: 'Four' },
  { id: 'number-go', category: 'Numbers', japanese: 'Go', kanji: '五', english: 'Five' },
  { id: 'number-roku', category: 'Numbers', japanese: 'Roku', kanji: '六', english: 'Six' },
  { id: 'number-shichi-nana', category: 'Numbers', japanese: 'Shichi / Nana', kanji: '七', english: 'Seven' },
  { id: 'number-hachi', category: 'Numbers', japanese: 'Hachi', kanji: '八', english: 'Eight' },
  { id: 'number-ku', category: 'Numbers', japanese: 'Ku / Kyu', kanji: '九', english: 'Nine' }, // Added Kyu as common variant
  { id: 'number-ju', category: 'Numbers', japanese: 'Ju', kanji: '十', english: 'Ten' },
  // Compound Numbers
  { id: 'number-ju-ichi', category: 'Numbers', japanese: 'Ju Ichi', kanji: '十一', english: 'Eleven' },
  { id: 'number-ju-ni', category: 'Numbers', japanese: 'Ju Ni', kanji: '十二', english: 'Twelve' },
  { id: 'number-ju-san', category: 'Numbers', japanese: 'Ju San', kanji: '十三', english: 'Thirteen' },
  { id: 'number-ni-ju', category: 'Numbers', japanese: 'Ni Ju', kanji: '二十', english: 'Twenty' },
  { id: 'number-san-ju', category: 'Numbers', japanese: 'San Ju', kanji: '三十', english: 'Thirty' },
  { id: 'number-yon-ju', category: 'Numbers', japanese: 'Yon Ju', kanji: '四十', english: 'Forty' },
  { id: 'number-go-ju', category: 'Numbers', japanese: 'Go Ju', kanji: '五十', english: 'Fifty' },
  { id: 'number-roku-ju', category: 'Numbers', japanese: 'Roku Ju', kanji: '六十', english: 'Sixty' },
  { id: 'number-nana-ju', category: 'Numbers', japanese: 'Nana Ju', kanji: '七十', english: 'Seventy' },
  { id: 'number-hachi-ju', category: 'Numbers', japanese: 'Hachi Ju', kanji: '八十', english: 'Eighty' },
  { id: 'number-kyu-ju', category: 'Numbers', japanese: 'Kyu Ju', kanji: '九十', english: 'Ninety' }, // Added Ninety
  { id: 'number-hyaku', category: 'Numbers', japanese: 'Hyaku', kanji: '百', english: 'One Hundred' }, // Added One Hundred

  // --- Tournament Terminology ---
  // Scoring
  { id: 'tournament-ippon', category: 'Tournament', japanese: 'Ippon', kanji: '一本', english: 'One Point' },
  { id: 'tournament-waza-ari', category: 'Tournament', japanese: 'Waza Ari', kanji: '技あり', english: 'Half Point' },
  { id: 'tournament-aiuchi', category: 'Tournament', japanese: 'Aiuchi', kanji: '相打ち', english: 'Simultaneous Points' },
  { id: 'tournament-torimasen', category: 'Tournament', japanese: 'Torimasen', kanji: '取りません', english: 'No Point' },
  { id: 'tournament-hikiwake', category: 'Tournament', japanese: 'Hikiwake', kanji: '引き分け', english: 'Draw' },
  { id: 'tournament-kachi', category: 'Tournament', japanese: 'Kachi', kanji: '勝ち', english: 'Victory' },
  // Penalties
  { id: 'tournament-hansoku', category: 'Tournament', japanese: 'Hansoku', kanji: '反則', english: 'Foul' },
  { id: 'tournament-hansoku-chui', category: 'Tournament', japanese: 'Hansoku Chui', kanji: '反則注意', english: 'Warning with Ippon Penalty' },
  { id: 'tournament-keikoku', category: 'Tournament', japanese: 'Keikoku', kanji: '警告', english: 'Warning with Waza Ari Penalty' },
  { id: 'tournament-chui', category: 'Tournament', japanese: 'Chui', kanji: '注意', english: 'Warning' },
  { id: 'tournament-shikaku', category: 'Tournament', japanese: 'Shikaku', kanji: '失格', english: 'Disqualification' },
  { id: 'tournament-mubobi', category: 'Tournament', japanese: 'Mubobi', kanji: '無防備', english: 'Warning for Lack of Self-Defense' },
  // Tournament Officials
  { id: 'tournament-shushin', category: 'Tournament', japanese: 'Shushin', kanji: '主審', english: 'Referee' },
  { id: 'tournament-fukushin', category: 'Tournament', japanese: 'Fukushin', kanji: '副審', english: 'Judge' },
  { id: 'tournament-kansa', category: 'Tournament', japanese: 'Kansa', kanji: '監査', english: 'Arbitrator' },
  { id: 'tournament-fukushin-shugo', category: 'Tournament', japanese: 'Fukushin Shugo', kanji: '副審集合', english: 'Judges Conference' },
  { id: 'tournament-hantei', category: 'Tournament', japanese: 'Hantei', kanji: '判定', english: 'Decision' },
  // Commands
  { id: 'tournament-hajime', category: 'Tournament', japanese: 'Hajime', kanji: '始め', english: 'Begin' }, // Duplicate of general-hajime
  { id: 'tournament-yame', category: 'Tournament', japanese: 'Yame', kanji: '止め', english: 'Stop' }, // Duplicate of general-yame
  { id: 'tournament-tsuzukete', category: 'Tournament', japanese: 'Tsuzukete', kanji: '続けて', english: 'Continue' },
  { id: 'tournament-moto-no-ichi', category: 'Tournament', japanese: 'Moto no Ichi', kanji: '元の位置', english: 'Return to Starting Position' },
  { id: 'tournament-sore-made', category: 'Tournament', japanese: 'Sore Made', kanji: 'それまで', english: 'End of Match' },
  { id: 'tournament-atoshi-baraku', category: 'Tournament', japanese: 'Atoshi Baraku', kanji: '後30秒', english: '30 Seconds Remaining' }, // Kanji might be 後暫く depending on context
  // Other Terms
  { id: 'tournament-shiai', category: 'Tournament', japanese: 'Shiai', kanji: '試合', english: 'Match' },
  { id: 'tournament-encho-sen', category: 'Tournament', japanese: 'Encho-sen', kanji: '延長戦', english: 'Extension' },
  { id: 'tournament-jogai', category: 'Tournament', japanese: 'Jogai', kanji: '場外', english: 'Exit from Fighting Area' },
  { id: 'tournament-maai-ga-to', category: 'Tournament', japanese: 'Ma-ai ga To', kanji: '間合いが遠', english: 'Improper Distance' },
  { id: 'tournament-ukete-iru', category: 'Tournament', japanese: 'Ukete Iru', kanji: '受けている', english: 'Blocked' },
  { id: 'tournament-nukete-iru', category: 'Tournament', japanese: 'Nukete Iru', kanji: '抜けている', english: 'Out of Target' },
  { id: 'tournament-fujubun', category: 'Tournament', japanese: 'Fujubun', kanji: '不十分', english: 'Insufficient Power' },
  { id: 'tournament-yowai', category: 'Tournament', japanese: 'Yowai', kanji: '弱い', english: 'Weak Focus' },

  // --- Equipment & Weapons ---
  { id: 'equipment-bo', category: 'Equipment', japanese: 'Bo', kanji: '棒', english: 'Wooden Staff', description: 'Wooden Staff (6 feet long)' },
  { id: 'equipment-jo', category: 'Equipment', japanese: 'Jo', kanji: '杖', english: 'Wooden Staff', description: 'Wooden Staff (4 feet long)' },
  { id: 'equipment-sai', category: 'Equipment', japanese: 'Sai', kanji: '釵', english: 'Three-Pronged Knife' },
  { id: 'equipment-tonfa', category: 'Equipment', japanese: 'Tonfa', kanji: 'トンファー', english: 'Side-Handle Baton' }, // Katakana, no specific kanji
  { id: 'equipment-makiwara', category: 'Equipment', japanese: 'Makiwara', kanji: '巻藁', english: 'Striking Board' },
  { id: 'equipment-nigiri-game', category: 'Equipment', japanese: 'Nigiri Game', kanji: '握り甕', english: 'Training Jars' },
  { id: 'equipment-chi-ishi', category: 'Equipment', japanese: 'Chi Ishi', kanji: '地石', english: 'Weighted Stone' },
  { id: 'equipment-ishi-sashi', category: 'Equipment', japanese: 'Ishi Sashi', kanji: '石差', english: 'Stone Padlocks' },
  { id: 'equipment-kongo-ken', category: 'Equipment', japanese: 'Kongo Ken', kanji: '金剛拳', english: 'Iron Ring' },
  { id: 'equipment-tetsu-wa', category: 'Equipment', japanese: 'Tetsu Wa', kanji: '鉄輪', english: 'Iron Rings' },
  { id: 'equipment-tan', category: 'Equipment', japanese: 'Tan', kanji: '担', english: 'Barbells' },

  // --- Karate & Goju-Ryu Terminology ---
  // Basic Terms
  { id: 'goju-karate', category: 'Goju-Ryu', japanese: 'Karate', kanji: '空手', english: 'Empty Hand' }, // Duplicate of general-karate
  { id: 'goju-ryu', category: 'Goju-Ryu', japanese: 'Goju-Ryu', kanji: '剛柔流', english: 'Hard-Soft Style' },
  { id: 'goju-dojo', category: 'Goju-Ryu', japanese: 'Dojo', kanji: '道場', english: 'Training Hall' }, // Duplicate of general-dojo
  { id: 'goju-sensei', category: 'Goju-Ryu', japanese: 'Sensei', kanji: '先生', english: 'Teacher' },
  { id: 'goju-senpai', category: 'Goju-Ryu', japanese: 'Senpai', kanji: '先輩', english: 'Senior Student' },
  { id: 'goju-kohai', category: 'Goju-Ryu', japanese: 'Kohai', kanji: '後輩', english: 'Junior Student' },
  // Belt Ranks (Dan)
  { id: 'goju-shodan', category: 'Goju-Ryu', japanese: 'Shodan', kanji: '初段', english: 'First Degree Black Belt' },
  { id: 'goju-nidan', category: 'Goju-Ryu', japanese: 'Nidan', kanji: '二段', english: 'Second Degree Black Belt' },
  { id: 'goju-sandan', category: 'Goju-Ryu', japanese: 'Sandan', kanji: '三段', english: 'Third Degree Black Belt' },
  { id: 'goju-yondan', category: 'Goju-Ryu', japanese: 'Yondan', kanji: '四段', english: 'Fourth Degree Black Belt' },
  { id: 'goju-godan', category: 'Goju-Ryu', japanese: 'Godan', kanji: '五段', english: 'Fifth Degree Black Belt' },
  { id: 'goju-rokudan', category: 'Goju-Ryu', japanese: 'Rokudan', kanji: '六段', english: 'Sixth Degree Black Belt' },
  { id: 'goju-shichidan', category: 'Goju-Ryu', japanese: 'Shichidan', kanji: '七段', english: 'Seventh Degree Black Belt' },
  { id: 'goju-hachidan', category: 'Goju-Ryu', japanese: 'Hachidan', kanji: '八段', english: 'Eighth Degree Black Belt' },
  { id: 'goju-kudan', category: 'Goju-Ryu', japanese: 'Kudan', kanji: '九段', english: 'Ninth Degree Black Belt' },
  { id: 'goju-judan', category: 'Goju-Ryu', japanese: 'Judan', kanji: '十段', english: 'Tenth Degree Black Belt' },

  // --- Karate Titles ---
  // Instructor Titles
  { id: 'title-hanshi', category: 'Titles', japanese: 'Hanshi', kanji: '範士', english: 'Head Person of an Organization' },
  { id: 'title-kyoshi', category: 'Titles', japanese: 'Kyoshi', kanji: '教士', english: 'Master Instructor' },
  { id: 'title-renshi', category: 'Titles', japanese: 'Renshi', kanji: '錬士', english: 'Polished Instructor' },
  { id: 'title-sensei', category: 'Titles', japanese: 'Sensei', kanji: '先生', english: 'Teacher' }, // Duplicate of goju-sensei
  { id: 'title-shihan', category: 'Titles', japanese: 'Shihan', kanji: '師範', english: 'Master Instructor, Teacher of Teachers' },
  // Student Titles
  { id: 'title-karateka', category: 'Titles', japanese: 'Karateka', kanji: '空手家', english: 'Karate Practitioner' },
  { id: 'title-senpai', category: 'Titles', japanese: 'Senpai', kanji: '先輩', english: 'Senior Student' }, // Duplicate of goju-senpai
  { id: 'title-kohai', category: 'Titles', japanese: 'Kohai', kanji: '後輩', english: 'Junior Student' }, // Duplicate of goju-kohai
  { id: 'title-yudansha', category: 'Titles', japanese: 'Yudansha', kanji: '有段者', english: 'Black Belt Holder' },
  { id: 'title-mudansha', category: 'Titles', japanese: 'Mudansha', kanji: '無段者', english: 'Student Without Black Belt' },
  { id: 'title-uchi-deshi', category: 'Titles', japanese: 'Uchi Deshi', kanji: '内弟子', english: 'Live-in Student' },
  // Other Titles
  { id: 'title-bushi', category: 'Titles', japanese: 'Bushi', kanji: '武士', english: 'Great Martial Artist' },
  { id: 'title-shushin', category: 'Titles', japanese: 'Shushin', kanji: '主審', english: 'Referee' }, // Duplicate of tournament-shushin
  { id: 'title-fukushin', category: 'Titles', japanese: 'Fukushin', kanji: '副審', english: 'Assistant Referee' }, // Duplicate of tournament-fukushin (slight variation in English)
  { id: 'title-kansa', category: 'Titles', japanese: 'Kansa', kanji: '監査', english: 'Judge' }, // Duplicate of tournament-kansa (slight variation in English)

  // --- Phrases & Etiquette ---
  // Greetings
  { id: 'phrase-osu', category: 'Phrases', japanese: 'Osu', kanji: '押忍', english: 'Versatile Greeting' },
  { id: 'phrase-ohayo', category: 'Phrases', japanese: 'Ohayo Gozaimasu', kanji: 'おはようございます', english: 'Good Morning' },
  { id: 'phrase-konnichiwa', category: 'Phrases', japanese: 'Konnichi wa', kanji: 'こんにちは', english: 'Good Afternoon' },
  { id: 'phrase-konbanwa', category: 'Phrases', japanese: 'Konban wa', kanji: 'こんばんは', english: 'Good Evening' },
  { id: 'phrase-oyasumi', category: 'Phrases', japanese: 'Oyasumi nasai', kanji: 'おやすみなさい', english: 'Good Night' },
  { id: 'phrase-sayonara', category: 'Phrases', japanese: 'Sayonara', kanji: 'さようなら', english: 'Goodbye' },
  // Respectful Phrases
  { id: 'phrase-onegaishimasu', category: 'Phrases', japanese: 'Onegai shimasu', kanji: 'お願いします', english: 'Please Teach Me' },
  { id: 'phrase-arigato', category: 'Phrases', japanese: 'Domo arigato gozaimasu', kanji: 'どうもありがとうございます', english: 'Thank You Very Much' },
  { id: 'phrase-gokurosama', category: 'Phrases', japanese: 'Gokurosama', kanji: 'ご苦労様', english: 'Thank You for Your Efforts' },
  { id: 'phrase-gokurosama-deshita', category: 'Phrases', japanese: 'Gokurosama deshita', kanji: 'ご苦労様でした', english: 'Thank You for Your Efforts (Past Tense)' },
  { id: 'phrase-mo-ichi-do', category: 'Phrases', japanese: 'Mo ichi do', kanji: 'もう一度', english: 'One More Time' },
  { id: 'phrase-hai', category: 'Phrases', japanese: 'Hai', kanji: 'はい', english: 'Yes' },
  { id: 'phrase-iie', category: 'Phrases', japanese: 'Iie', kanji: 'いいえ', english: 'No' },
  // Philosophical Terms
  { id: 'phrase-gayu-no-hito', category: 'Phrases', japanese: 'Gayu no hito', kanji: '強勇の人', english: 'One Who Possesses Strong Spirit' },
  { id: 'phrase-ho-go-ju-donto', category: 'Phrases', japanese: 'Ho go ju donto', kanji: '呼吸道統', english: 'The Way of Hard and Soft Breathing' },
  { id: 'phrase-bushido', category: 'Phrases', japanese: 'Bushido', kanji: '武士道', english: 'Way of the Warrior' },
  { id: 'phrase-dojo-kun', category: 'Phrases', japanese: 'Dojo kun', kanji: '道場訓', english: 'Training Hall Rules' },
  { id: 'phrase-karate-ni-sente-nashi', category: 'Phrases', japanese: 'Karate ni sente nashi', kanji: '空手に先手なし', english: 'There is no first attack in karate' },

  // --- Kata Terminology ---
  // Kata Basics
  { id: 'kata-kata', category: 'Kata', japanese: 'Kata', kanji: '型', english: 'Form' }, // Duplicate of general-kata
  { id: 'kata-bunkai', category: 'Kata', japanese: 'Bunkai', kanji: '分解', english: 'Application Analysis' }, // Duplicate of general-bunkai
  { id: 'kata-oyo', category: 'Kata', japanese: 'Oyo', kanji: '応用', english: 'Application' },
  { id: 'kata-henka', category: 'Kata', japanese: 'Henka', kanji: '変化', english: 'Variation' },
  { id: 'kata-kakushi', category: 'Kata', japanese: 'Kakushi', kanji: '隠し', english: 'Hidden Technique' },
  { id: 'kata-kime', category: 'Kata', japanese: 'Kime', kanji: '決め', english: 'Focus' },
  { id: 'kata-zanshin', category: 'Kata', japanese: 'Zanshin', kanji: '残心', english: 'Awareness' }, // Duplicate of general-zanshin
  { id: 'kata-mushin', category: 'Kata', japanese: 'Mushin', kanji: '無心', english: 'Empty Mind' },
  { id: 'kata-kokyu', category: 'Kata', japanese: 'Kokyu', kanji: '呼吸', english: 'Breathing' },
  { id: 'kata-kiai', category: 'Kata', japanese: 'Kiai', kanji: '気合', english: 'Spirit Shout' }, // Duplicate of general-kiai
  // Kata Directions
  { id: 'kata-hidari', category: 'Kata', japanese: 'Hidari', kanji: '左', english: 'Left' },
  { id: 'kata-migi', category: 'Kata', japanese: 'Migi', kanji: '右', english: 'Right' },
  { id: 'kata-mae', category: 'Kata', japanese: 'Mae', kanji: '前', english: 'Front' },
  { id: 'kata-ushiro', category: 'Kata', japanese: 'Ushiro', kanji: '後ろ', english: 'Back' },
  { id: 'kata-yoko', category: 'Kata', japanese: 'Yoko', kanji: '横', english: 'Side' },
  { id: 'kata-naname', category: 'Kata', japanese: 'Naname', kanji: '斜め', english: 'Diagonal' },
  { id: 'kata-mawari', category: 'Kata', japanese: 'Mawari', kanji: '回り', english: 'Turn' },
  { id: 'kata-kaeshi', category: 'Kata', japanese: 'Kaeshi', kanji: '返し', english: 'Return' },
  { id: 'kata-hiki', category: 'Kata', japanese: 'Hiki', kanji: '引き', english: 'Pull' },
  { id: 'kata-tsuki', category: 'Kata', japanese: 'Tsuki', kanji: '突き', english: 'Thrust' }, // Often relates to punches, context needed
  // Kata Counting (Included for context, duplicates of numbers)
  { id: 'kata-ichi', category: 'Kata', japanese: 'Ichi', kanji: '一', english: 'One' },
  { id: 'kata-ni', category: 'Kata', japanese: 'Ni', kanji: '二', english: 'Two' },
  { id: 'kata-san', category: 'Kata', japanese: 'San', kanji: '三', english: 'Three' },
  { id: 'kata-yon', category: 'Kata', japanese: 'Yon', kanji: '四', english: 'Four' },
  { id: 'kata-go', category: 'Kata', japanese: 'Go', kanji: '五', english: 'Five' },
  { id: 'kata-roku', category: 'Kata', japanese: 'Roku', kanji: '六', english: 'Six' },
  { id: 'kata-shichi', category: 'Kata', japanese: 'Shichi', kanji: '七', english: 'Seven' },
  { id: 'kata-hachi', category: 'Kata', japanese: 'Hachi', kanji: '八', english: 'Eight' },
  { id: 'kata-ku', category: 'Kata', japanese: 'Ku', kanji: '九', english: 'Nine' },
  { id: 'kata-ju', category: 'Kata', japanese: 'Ju', kanji: '十', english: 'Ten' },
]; 