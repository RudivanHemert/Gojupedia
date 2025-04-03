export interface TechniqueItem {
  id: string;
  name: string;
  japaneseName: string;
  englishName: string;
  hasButton?: boolean; 
  description?: string;
  execution?: string[];
  youtubeVideoId?: string; // Optional field for YouTube video ID
}

export interface TechniqueSubCategory {
  title: string;
  techniques: TechniqueItem[];
}

export const techniqueData: TechniqueSubCategory[] = [
  // Blocks
  {
    title: 'Basic Blocks',
    techniques: [
      { 
        id: 'age-uke', name: 'Age Uke', japaneseName: '上げ受け', englishName: 'Rising Block', hasButton: true,
        description: "A forearm block used to deflect high attacks (e.g., head strikes).",
        execution: [
          "Chamber the blocking arm near the opposite hip (palm up).",
          "Swing the forearm upward in a diagonal motion, rotating the wrist outward.",
          "Stop at forehead level, forearm angled at 45°.",
          "Key Points: Use hip rotation for power. The non-blocking hand retracts to the hip (hikite)."
        ],
        youtubeVideoId: 'dQw4w9WgXcQ' // Placeholder Rick Roll Video ID
      },
      { 
        id: 'gedan-barai', name: 'Gedan Barai', japaneseName: '下段払い', englishName: 'Downward Sweep', hasButton: true,
        description: "A low block to deflect kicks or strikes to the legs/groin.",
        execution: [
          "Start with the blocking arm across the body (palm inward).",
          "Sweep downward diagonally, ending just above the knee.",
          "The other hand pulls back to the hip.",
          "Key Points: Keep the forearm firm to absorb impact."
        ],
        youtubeVideoId: 'oHg5SJYRHA0' // Placeholder Cat Video ID
      },
      { 
        id: 'soto-uke', name: 'Soto Uke', japaneseName: '外受け', englishName: 'Outside Block', hasButton: true,
        description: "Deflects inward attacks (e.g., hooks) by sweeping outward.",
        execution: [
          "Chamber the arm across the chest (fist near opposite shoulder).",
          "Rotate the forearm outward, ending with the fist at shoulder height.",
          "Key Points: Use a circular motion to redirect force."
        ]
      },
      { 
        id: 'uchi-uke', name: 'Uchi Uke', japaneseName: '内受け', englishName: 'Inside Block',
        description: "Blocks outward attacks (e.g., straight punches).",
        execution: [
          "Start with the blocking arm extended slightly across the body.",
          "Rotate inward, stopping with the forearm vertical (fist at chest level).",
          "Key Points: Tight forearm to avoid collapsing on impact."
        ]
      },
      { 
        id: 'shuto-uke', name: 'Shuto Uke', japaneseName: '手刀受け', englishName: 'Knife Hand Block',
        description: "Uses the blade of the hand to deflect strikes.",
        execution: [
          "Chamber the hand near the ear (palm inward).",
          "Swing outward in a circular motion, striking with the pinky edge.",
          "Key Points: Fingers slightly relaxed to prevent injury."
        ]
      },
    ]
  },
  {
    title: 'Advanced Blocks',
    techniques: [
      { 
        id: 'empi-uke', name: 'Empi Uke', japaneseName: '肘受け', englishName: 'Elbow Block',
        description: "Uses the elbow to block close-range strikes.",
        execution: [
          "Raise the elbow horizontally or vertically to intercept the attack.",
          "Tighten the core for stability."
        ]
      },
      { 
        id: 'kosa-uke', name: 'Kosa Uke', japaneseName: '交差受け', englishName: 'Cross Block',
        description: "Arms cross to block simultaneous high/low attacks.",
        execution: [
          "Cross forearms in an \"X\" (one high, one low).",
          "Push outward to disperse force."
        ]
      },
      { 
        id: 'juji-uke', name: 'Juji Uke', japaneseName: '十字受け', englishName: 'X Block',
        description: "Reinforced block with wrists crossed.",
        execution: [
          "Cross both forearms in front of the body.",
          "Absorb the strike at the intersection point."
        ]
      },
      { 
        id: 'haiwan-uke', name: 'Haiwan Uke', japaneseName: '背腕受け', englishName: 'Back Arm Block',
        description: "Uses the back of the forearm to deflect.",
        execution: [
          "Rotate the arm so the back faces outward.",
          "Sweep across the body to redirect force."
        ]
      },
      { 
        id: 'osae-uke', name: 'Osae Uke', japaneseName: '押さえ受け', englishName: 'Pressing Block',
        description: "A downward pressing motion to deflect kicks.",
        execution: [
          "Press the palm or forearm downward onto the opponent's limb.",
          "Follow up with a counterattack."
        ]
      },
    ]
  },
  // Kicks
  {
    title: 'Basic Kicks',
    techniques: [
      { 
        id: 'mae-geri', name: 'Mae Geri', japaneseName: '前蹴り', englishName: 'Front Kick',
        description: "A straight kick thrusting forward.",
        execution: [
          "Lift the knee to chamber.",
          "Extend the leg, striking with the ball of the foot.",
          "Retract quickly."
        ]
      },
      { 
        id: 'yoko-geri', name: 'Yoko Geri', japaneseName: '横蹴り', englishName: 'Side Kick',
        description: "A powerful kick to the side.",
        execution: [
          "Pivot on the supporting foot, chamber the knee across the body.",
          "Thrust the heel outward, hips fully extended."
        ]
      },
      { 
        id: 'mawashi-geri', name: 'Mawashi Geri', japaneseName: '回し蹴り', englishName: 'Roundhouse Kick',
        description: "A circular kick striking with the instep.",
        execution: [
          "Pivot on the supporting foot, swing the leg in an arc.",
          "Snap the hip forward at impact."
        ]
      },
      { 
        id: 'ushiro-geri', name: 'Ushiro Geri', japaneseName: '後ろ蹴り', englishName: 'Back Kick',
        description: "Powerful straight kick delivered backward",
        execution: [
          "Pivot 180° on supporting foot (eyes track target over shoulder)",
          "Chamber knee close to chest",
          "Thrust heel straight backward",
          "Retract leg quickly",
          "Target: Solar plexus, groin",
          "Key Points: Keep shoulders aligned with kick, Use hip thrust for power, Common counter against rear attackers"
        ]
      },
      { 
        id: 'mikazuki-geri', name: 'Mikazuki Geri', japaneseName: '三日月蹴り', englishName: 'Crescent Kick',
        description: "Circular kick resembling crescent moon",
        execution: [
          "Swing leg in arcing motion (inside-out or outside-in)",
          "Strike with instep or blade of foot",
          "Follow through across body",
          "Variations: Uchi Mikazuki (inside-out) - Blocks/attacks high, Soto Mikazuki (outside-in) - Deflects limbs",
          "Key Points: More defensive than powerful, Often used to redirect opponent's arms"
        ]
      },
      { 
        id: 'kekomi', name: 'Kekomi', japaneseName: '蹴込み', englishName: 'Thrust Kick',
        description: "Deep-penetrating linear kick",
        execution: [
          "Chamber knee high",
          "Drive heel/ball of foot straight forward",
          "Push hips completely forward",
          "Maintain upright posture",
          "Comparison: vs Mae Geri: Longer range, more hip commitment; vs Keage: Full extension rather than snap",
          "Target: Abdomen, ribs"
        ]
      },
      { 
        id: 'keage', name: 'Keage', japaneseName: '蹴上げ', englishName: 'Snap Kick',
        description: "Quick, whipping kick with rapid retraction",
        execution: [
          "Fast knee lift",
          "Snap foot outward (like cracking a whip)",
          "Immediate rechamber",
          "Key Points: Minimal hip commitment, Best for speed & surprise",
          "Common Uses: Jodan (head) attacks, Feints to set up combinations"
        ]
      },
      { 
        id: 'fumikomi', name: 'Fumikomi', japaneseName: '踏み込み', englishName: 'Stomp Kick',
        description: "Downward stomping motion",
        execution: [
          "Lift knee high",
          "Drive foot straight downward",
          "Transfer full body weight",
          "Targets: Opponent's foot/knee, Falling opponent's torso",
          "Key Points: Often combined with grabs, Can break balance or bones"
        ]
      },
      { 
        id: 'hiza-geri', name: 'Hiza Geri', japaneseName: '膝蹴り', englishName: 'Knee Strike',
        description: "Close-range knee attack",
        execution: [
          "Grab opponent's collar/lapel",
          "Drive knee upward",
          "Strike with kneecap",
          "Variations: Straight up (groin), Diagonal (floating ribs), Circular (Thai-style)",
          "Key Points: Always control opponent's head, Works best in clinch"
        ]
      },
      { 
        id: 'ashi-barai', name: 'Ashi Barai', japaneseName: '足払い', englishName: 'Foot Sweep',
        description: "Off-balancing technique",
        execution: [
          "Slide foot along ground",
          "Hook opponent's ankle",
          "Push upper body backward",
          "Key Points: Time with opponent's step, Use more push than force",
          "Follow-ups: Immediately attack downed opponent"
        ]
      },
    ]
  },
  {
    title: 'Advanced Kicks',
    techniques: [
      { 
        id: 'ura-mawashi-geri', name: 'Ura Mawashi Geri', japaneseName: '裏回し蹴り', englishName: 'Reverse Roundhouse Kick',
        description: "A deceptive kick using the heel in a reverse circular motion",
        execution: [
          "Chamber knee across body (like Mawashi Geri)",
          "Pivot 180° on supporting foot",
          "Strike with heel in outward arc",
          "Target: Head, ribs",
          "Key Points: Use hip rotation for power, Keep guard hand up"
        ]
      },
      { 
        id: 'ushiro-mawashi-geri', name: 'Ushiro Mawashi Geri', japaneseName: '後ろ回し蹴り', englishName: 'Spinning Roundhouse',
        description: "Full 360° spinning version of Mawashi Geri",
        execution: [
          "Pivot on lead foot while turning head to spot target",
          "Swing rear leg in full circle",
          "Strike with instep/heel",
          "Key Points: Maintain balance through spin, Use arms for momentum"
        ]
       },
      { 
        id: 'nidan-geri', name: 'Nidan Geri', japaneseName: '二段蹴り', englishName: 'Double Kick',
        description: "Two rapid kicks without rechambering",
        execution: [
          "Execute Mae Geri",
          "Immediately follow with Yoko Geri",
          "Variations: Mawashi + Ura Mawashi combo, Low-high combination"
        ]
      },
      { 
        id: 'tobi-geri', name: 'Tobi Geri', japaneseName: '飛び蹴り', englishName: 'Jumping Kick',
        description: "Any kick performed while airborne",
        execution: [
          "Take off from both feet",
          "Execute kick (usually Mae/Yoko Geri) mid-air",
          "Land in fighting stance",
          "Key Points: Time jump for maximum height, Retract kicking leg quickly"
        ]
      },
      { 
        id: 'gyaku-mawashi-geri', name: 'Gyaku Mawashi Geri', japaneseName: '逆回し蹴り', englishName: 'Inside Roundhouse',
        description: "Circular kick from inside-out",
        execution: [
          "Lift knee across centerline",
          "Whip leg outward in reverse arc",
          "Strike with instep",
          "Target: Knee, groin"
        ]
      },
      { 
        id: 'kakato-geri', name: 'Kakato Geri', japaneseName: '踵蹴り', englishName: 'Axe Kick',
        description: "Vertical heel strike downward",
        execution: [
          "Raise leg straight up",
          "Hammer heel down onto target",
          "Key Points: Control descent, Often used against collarbone"
        ]
      },
    ]
  },
  {
    title: 'Kicking Variations',
    techniques: [
      { 
        id: 'jodan-geri', name: 'Jodan Geri', japaneseName: '上段蹴り', englishName: 'High Level Kick',
        description: "A kick aimed at the upper level (head/neck).",
        execution: [
          "Target: Head, neck",
          "Key Points: Requires excellent flexibility, Faster kicks (Mae Geri Keage) work best"
        ]
      },
      { 
        id: 'chudan-geri', name: 'Chudan Geri', japaneseName: '中段蹴り', englishName: 'Middle Level Kick',
        description: "A kick aimed at the middle level (torso).",
        execution: [
          "Target: Solar plexus, ribs",
          "Key Points: Balance speed and power, Most common in sparring"
        ]
      },
      { 
        id: 'gedan-geri', name: 'Gedan Geri', japaneseName: '下段蹴り', englishName: 'Low Level Kick',
        description: "A kick aimed at the lower level (legs/knees).",
        execution: [
          "Target: Thighs, knees",
          "Key Points: Fastest to execute, Often used to disrupt stance"
        ]
      },
      { 
        id: 'kin-geri', name: 'Kin Geri', japaneseName: '金的蹴り', englishName: 'Groin Kick',
        description: "A quick snap kick aimed at the groin.",
        execution: [
          "Quick snap kick upward",
          "Use instep or toe",
          "Key Points: Small, precise motion"
        ]
      },
      { 
        id: 'kakato-otoshi-geri', name: 'Kakato Otoshi Geri', japaneseName: '踵落とし蹴り', englishName: 'Heel Drop',
        description: "Stamping kick from above",
        execution: [
          "Raise knee high",
          "Drive heel straight down",
          "Target: Foot, instep"
        ]
      },
    ]
  },
  // Punches
  {
    title: 'Basic Punches',
    techniques: [
      { 
        id: 'seiken-tsuki', name: 'Seiken Tsuki', japaneseName: '正拳突き', englishName: 'Forefist Punch',
        description: "The fundamental straight punch using the first two knuckles.",
        execution: [
          "Fist rotates from hip",
          "Strikes with first two knuckles",
          "Hikite (other hand pulls back)",
          "Key Points: Wrist straight on impact"
        ]
      },
      { 
        id: 'gyaku-tsuki', name: 'Gyaku Tsuki', japaneseName: '逆突き', englishName: 'Reverse Punch',
        description: "Power punch from rear hand",
        execution: [
          "Rotate hips into punch",
          "Drive from back leg",
          "Key Points: Most powerful basic punch"
        ]
      },
      { 
        id: 'oi-tsuki', name: 'Oi Tsuki', japaneseName: '追い突き', englishName: 'Lunge Punch',
        description: "A punch delivered while stepping forward.",
        execution: [
          "Step forward while punching",
          "Front and back foot switch",
          "Key Points: Maintain balance during step"
        ]
      },
      { 
        id: 'kizami-tsuki', name: 'Kizami Tsuki', japaneseName: '刻み突き', englishName: 'Jab',
        description: "Lead hand quick punch",
        execution: [
          "Snap fist straight out",
          "Immediate retraction",
          "Key Points: Shoulder remains relaxed"
        ]
      },
      { 
        id: 'morote-tsuki', name: 'Morote Tsuki', japaneseName: '諸手突き', englishName: 'Double Punch',
        description: "Striking with both fists simultaneously.",
        execution: [
          "Both fists strike simultaneously",
          "Typically one high/one low",
          "Key Points: Coordinate both arms"
        ]
      },
      { id: 'yama-tsuki', name: 'Yama Tsuki', japaneseName: '山突き', englishName: 'Mountain Punch' },
      { id: 'awase-tsuki', name: 'Awase Tsuki', japaneseName: '合わせ突き', englishName: 'U Punch' },
      { id: 'hasami-tsuki', name: 'Hasami Tsuki', japaneseName: 'はさみ突き', englishName: 'Scissors Punch' },
      { id: 'heiko-tsuki', name: 'Heiko Tsuki', japaneseName: '平行突き', englishName: 'Parallel Punch' },
      { id: 'kage-tsuki', name: 'Kage Tsuki', japaneseName: '影突き', englishName: 'Hook Punch' },
    ]
  },
  {
    title: 'Special Punches',
    techniques: [
      { 
        id: 'tate-tsuki', name: 'Tate Tsuki', japaneseName: '立て突き', englishName: 'Vertical Punch',
        description: "Fist held vertically",
        execution: [
          "Thumb-side knuckles strike",
          "Use: Close-range body shots"
        ]
      },
      { 
        id: 'ura-tsuki', name: 'Ura Tsuki', japaneseName: '裏突き', englishName: 'Backfist Strike',
        description: "A strike using the back of the knuckles.",
        execution: [
          "Swing arm in arc",
          "Strike with back knuckles",
          "Target: Temple, nose"
        ]
       },
      { 
        id: 'nukite', name: 'Nukite', japaneseName: '貫手', englishName: 'Spear Hand',
        description: "Fingertip strike",
        execution: [
          "Variations: Ippon Nukite (1 finger), Nihon Nukite (2 fingers)",
          "Target: Eyes, throat"
        ]
      },
      { 
        id: 'ippon-ken', name: 'Ippon Ken', japaneseName: '一本拳', englishName: 'One Knuckle Punch',
        description: "A punch using the extended knuckle of the middle finger.",
        execution: [
          "Middle finger knuckle extended",
          "Use: Pressure point strikes"
        ]
      },
      { id: 'nakadaka-ippon-ken', name: 'Nakadaka Ippon Ken', japaneseName: '中高一本拳', englishName: 'Middle Finger One Knuckle Punch' },
      { id: 'hiraken', name: 'Hiraken', japaneseName: '平拳', englishName: 'Flat Fist' },
      { id: 'washide', name: 'Washide', japaneseName: '鷲手', englishName: 'Eagle Hand' },
      { id: 'koken', name: 'Koken', japaneseName: '虎拳', englishName: 'Tiger Mouth' },
    ]
  },
  // Stances (No description/execution provided by user)
  {
    title: 'Basic Stances',
    techniques: [
      { id: 'hachiji-dachi', name: 'Hachiji dachi', japaneseName: '八字立', englishName: 'Natural stance' },
      { id: 'heiko-dachi', name: 'Heiko dachi', japaneseName: '平行立', englishName: 'Parallel stance' },
      { id: 'heisoku-dachi', name: 'Heisoku dachi', japaneseName: '閉足立', englishName: 'Informal attention stance' },
      { id: 'musubi-dachi', name: 'Musubi dachi', japaneseName: '結び立', englishName: 'Informal attention stance, feet turned out' },
      { id: 'shizen-dachi', name: 'Shizen dachi', japaneseName: '自然立', englishName: 'Natural combative posture' },
      { id: 'shizentai', name: 'Shizentai', japaneseName: '自然体', englishName: 'Natural position' },
    ]
  },
  {
    title: 'Combative Stances',
    techniques: [
      { id: 'zenkutsu-dachi', name: 'Zenkutsu dachi', japaneseName: '前屈立', englishName: 'Long stance' },
      { id: 'han-zenkutsu-dachi', name: 'Han zenkutsu dachi', japaneseName: '半前屈立', englishName: 'Half forward stance' },
      { id: 'kokutsu-dachi', name: 'Kokutsu dachi', japaneseName: '後屈立', englishName: 'Back stance' },
      { id: 'kiba-dachi', name: 'Kiba dachi', japaneseName: '騎馬立', englishName: 'Straddle stance' },
      { id: 'naihanshi-dachi', name: 'Naihanshi dachi', japaneseName: '内八字立', englishName: 'Kiba dachi with knees turned in and down' },
      { id: 'sanchin-dachi', name: 'Sanchin dachi', japaneseName: '三戦立', englishName: 'Hour glass stance' },
      { id: 'neko-ashi-dachi', name: 'Neko ashi dachi', japaneseName: '猫足立', englishName: 'Cat stance' },
      { id: 'sagi-ashi-dachi', name: 'Sagi ashi dachi', japaneseName: '鷺足立', englishName: 'Propped leg stance' },
      { id: 'tsuri-ashi-dachi', name: 'Tsuri ashi dachi', japaneseName: '釣足立', englishName: 'Crane stance with propped leg' },
    ]
  },
  {
    title: 'Special Stances',
    techniques: [
      { id: 'fudo-dachi', name: 'Fudo dachi', japaneseName: '不動立', englishName: "Rooted stance, 'Immovable stance'" },
      { id: 'gankaku-dachi', name: 'Gankaku dachi', japaneseName: '岩鶴立', englishName: 'One legged stance' },
      { id: 'hangetsu-dachi', name: 'Hangetsu dachi', japaneseName: '半月立', englishName: 'Half moon stance' },
      { id: 'sochin-dachi', name: 'Sochin dachi', japaneseName: '壮鎮立', englishName: "Diagonal straddle leg 'Immovable' stance" },
      { id: 'shiko-dachi', name: 'Shiko dachi', japaneseName: '四股立', englishName: 'Box stance' },
      { id: 'reinoji-dachi', name: 'Reinoji dachi', japaneseName: 'レイノジ立', englishName: 'L stance' },
      { id: 'sesan-dachi', name: 'Sesan dachi', japaneseName: '三戦立', englishName: 'Side facing straddle stance' }, 
    ]
  },
  {
    title: 'Movement and Position',
    techniques: [
      { id: 'hanmi', name: 'Hanmi', japaneseName: '半身', englishName: 'Half front facing position' },
      { id: 'hanmi-no-kamae', name: 'Hanmi no kamae', japaneseName: '半身の構え', englishName: 'Half forward facing combative posture' },
      { id: 'hidari-shizen-tai', name: 'Hidari shizen tai', japaneseName: '左自然体', englishName: 'Left natural position' },
      { id: 'hidari-teiji-dachi', name: 'Hidari teiji dachi', japaneseName: '左丁字立', englishName: 'Left T stance' },
      { id: 'jodan-no-kamae', name: 'Jodan no kamae', japaneseName: '上段の構え', englishName: 'Upper level combative posture' },
      { id: 'gedan-no-kamae', name: 'Gedan no kamae', japaneseName: '下段の構え', englishName: 'Lower level combative posture' },
      { id: 'tsugi-ashi', name: 'Tsugi ashi', japaneseName: '次足', englishName: 'Shuffling step' },
      { id: 'yori-ashi', name: 'Yori ashi', japaneseName: '寄足', englishName: 'Dragging step' },
    ]
  },
  // Strikes (No description/execution provided by user)
  {
    title: 'Basic Strikes',
    techniques: [
      { id: 'shuto-uchi', name: 'Shuto Uchi', japaneseName: '手刀打ち', englishName: 'Knife Hand Strike' },
      { id: 'haito-uchi', name: 'Haito Uchi', japaneseName: '背刀打ち', englishName: 'Ridge Hand Strike' },
      { id: 'haishu-uchi', name: 'Haishu Uchi', japaneseName: '背手打ち', englishName: 'Back Hand Strike' },
      { id: 'teisho-uchi', name: 'Teisho Uchi', japaneseName: '底掌打ち', englishName: 'Palm Heel Strike' },
      { id: 'kakuto-uchi', name: 'Kakuto Uchi', japaneseName: '鶴頭打ち', englishName: 'Bent Wrist Strike' },
      { id: 'hiji-ate', name: 'Hiji Ate', japaneseName: '肘当て', englishName: 'Elbow Strike' },
      { id: 'empi-uchi-strike', name: 'Empi Uchi', japaneseName: '猿臂打ち', englishName: 'Elbow Strike' },
      { id: 'hiraken-uchi', name: 'Hiraken Uchi', japaneseName: '平拳打ち', englishName: 'Flat Fist Strike' },
      { id: 'koken-uchi', name: 'Koken Uchi', japaneseName: '虎拳打ち', englishName: 'Tiger Mouth Strike' },
      { id: 'washide-uchi', name: 'Washide Uchi', japaneseName: '鷲手打ち', englishName: 'Eagle Hand Strike' },
    ]
  }
]; 