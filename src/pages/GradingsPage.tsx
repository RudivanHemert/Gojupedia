import React, { useState } from 'react';
import MobileLayout from '@/components/layout/MobileLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronDown, ChevronUp, Calendar, Clock, Award, Book, Dumbbell, GraduationCap, Swords } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from '@/components/ui/badge';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Cell, Pie, PieChart } from "recharts";

const GradingsPage = () => {
  const [activeTab, setActiveTab] = useState("10th-kyu");

  const gradingLevels = [
    { 
      id: "10th-kyu", 
      label: "10th Kyu", 
      color: "bg-white", 
      stripes: 1,
      borderColor: "border-stone-300" 
    },
    { 
      id: "9th-kyu", 
      label: "9th Kyu", 
      color: "bg-white", 
      stripes: 2,
      borderColor: "border-stone-300" 
    },
    { 
      id: "8th-kyu", 
      label: "8th Kyu", 
      color: "bg-white", 
      stripes: 3,
      borderColor: "border-stone-300" 
    },
    { 
      id: "7th-kyu", 
      label: "7th Kyu", 
      color: "bg-[#FFD700]", 
      stripes: 0,
      borderColor: "border-amber-500" 
    },
    { 
      id: "6th-kyu", 
      label: "6th Kyu", 
      color: "bg-orange-600", 
      stripes: 0,
      borderColor: "border-orange-700" 
    },
    { 
      id: "5th-kyu", 
      label: "5th Kyu", 
      color: "bg-green-700", 
      stripes: 0,
      borderColor: "border-green-800" 
    },
    { 
      id: "4th-kyu", 
      label: "4th Kyu", 
      color: "bg-blue-700", 
      stripes: 0,
      borderColor: "border-blue-800" 
    },
    { 
      id: "3rd-kyu", 
      label: "3rd Kyu", 
      color: "bg-amber-800", 
      stripes: 0,
      textColor: "text-white", 
      borderColor: "border-amber-900" 
    },
    { 
      id: "2nd-kyu", 
      label: "2nd Kyu", 
      color: "bg-amber-800", 
      stripes: 1,
      textColor: "text-white", 
      borderColor: "border-amber-900" 
    },
    { 
      id: "1st-kyu", 
      label: "1st Kyu", 
      color: "bg-amber-800", 
      stripes: 2,
      textColor: "text-white", 
      borderColor: "border-amber-900" 
    },
    { 
      id: "shodan", 
      label: "Shodan", 
      color: "bg-black", 
      stripes: 0,
      textColor: "text-white", 
      borderColor: "border-gray-800" 
    },
  ];

  const tenthKyuData = {
    title: "THE WAY TO 10TH KYU",
    requirements: {
      classes: 16,
      months: 2,
    },
    techniques: [
      { category: "Kihon Waza (Basic Techniques)", techniques: [
        "Jodan age uke (Upper rising block)",
        "Chudan (soto) yoko uke (Middle/out/side block)",
        "Gedan harai uke / gedan barai (Lower sweeping block)",
        "Seiken zuki (Proper fist punch)",
        "Mae geri (Front kick)",
        "Mawashi geri (Roundhouse kick)",
      ]},
      { category: "Tachi Kata (Stances)", techniques: [
        "Musubi dachi (Ready stance)",
        "Heiko dachi (Parallel stance)",
        "Zenkutsu dachi (Front stance)",
      ]},
      { category: "Unsoku Ho (Foot Work)", techniques: [
        "Zenkutsu dachi",
      ]},
      { category: "Hojo Undo (Supplemental Training)", techniques: [
        "Makiwara (Focus pad)",
        "O gyaku zuki (Reverse punch)",
        "O mae geri (Front kick)",
        "O mawashi geri (Roundhouse kick)",
      ]},
    ],
    knowledge: [
      { term: "Onegai shimasu", meaning: "Please teach/help me" },
      { term: "Arigato gozaimashita", meaning: "Thank you for teaching/helping me" },
      { term: "Sayonara", meaning: "Good bye" },
      { term: "Sensei", meaning: "Teacher/instructor" },
      { term: "Senpai", meaning: "Senior students" },
      { term: "Kohai", meaning: "Junior students" },
      { term: "Hai Sensei", meaning: "Yes, teacher" },
      { term: "Karate", meaning: "Literally means empty hands" },
      { term: "Dojo", meaning: "Martial arts school" },
      { term: "Gi/dogi", meaning: "Training uniform" },
      { term: "Obi", meaning: "Belt" },
      { term: "Jodan, chudan, gedan", meaning: "Upper level, middle level, lower level" },
    ],
    history: [
      "Karate came from Okinawa, Japan",
    ]
  };

  const ninthKyuData = {
    title: "THE WAY TO 9TH KYU",
    requirements: {
      classes: 20,
      months: 2,
    },
    techniques: [
      { category: "Kihon Waza (Basic Techniques)", techniques: [
        "Uraken uchi (Back fist strike; front, side & back)",
        "Shuto uchi (Knife hand strike, upper level side)",
        "Age hiji ate (Rising elbow strike)",
        "Nami gaeshi (Foot sweep & stamp)",
        "Shikodachi gedan harai uke (Lower sweeping block with straddle leg stance)",
      ]},
      { category: "Tachi Kata (Stances)", techniques: [
        "Shiko dachi (Straddle leg stance)",
        "Han zenkutsu dachi (Half front stance)",
        "Hachiji dachi (Natural stance, toes slightly out)",
      ]},
      { category: "Unsoku Ho (Foot Work)", techniques: [
        "Han zenkutsu dachi",
        "Shiko dachi",
        "Heiko dachi suri ashi (Sideways)",
      ]},
      { category: "Ido (Moving Basics)", techniques: [
        "Oi zuki (Lunge punch)",
        "Gyaku zuki (Reverse punch)",
        "Jodan age uke (Upper rising block)",
        "Chudan yoko uke (Middle outside block)",
        "Gedan harai uke (Lower sweeping block)",
        "Mae geri (Front kick)",
        "Mawashi geri (Roundhouse kick)",
      ]},
      { category: "Kata", techniques: [
        "Gekisai Dai Ichi (Sequence)",
      ]},
      { category: "Kumite", techniques: [
        "Basic blocks with partner (Jodan, chudan, gedan)",
      ]},
      { category: "Hojo Undo (Supplemental Training)", techniques: [
        "Makiwara - Uraken uchi, jodan yoko shuto uchi, chudan age hiji ate",
        "Kakato otoshi",
      ]},
    ],
    knowledge: [
      { term: "Shugo", meaning: "Line up" },
      { term: "Hajime", meaning: "Begin" },
      { term: "Yame", meaning: "Stop" },
      { term: "Yoi", meaning: "Ready" },
      { term: "Kamae", meaning: "Fighting pose" },
      { term: "Semete", meaning: "Attacker" },
      { term: "Ukete", meaning: "Defender" },
    ],
    history: [
      "Hand to hand combat (karate) was developed when the government banned the carrying of weapons in Okinawa",
      "Previously karate was taught secretly, and the sensei would carefully observe the person's character before he accepted him as a student",
    ]
  };

  const eighthKyuData = {
    title: "THE WAY TO 8TH KYU",
    requirements: {
      classes: 24,
      months: 2,
    },
    techniques: [
      { category: "Kihon Waza (Basic Techniques)", techniques: [
        "Chudan ura zuki (Middle level short punch)",
        "Jodan age zuki (Upper cut)",
        "Sanbon zuki (Triple punch)",
        "Hiza geri (Knee kick)",
        "Chudan hiki uke (Middle level pulling block)",
        "Tora guchi (Tiger mouth block)",
        "Sanbon uke (Triple block)",
      ]},
      { category: "Tachi Kata (Stances)", techniques: [
        "Neko ashi dachi (Cat stance)",
      ]},
      { category: "Unsoku Ho (Foot Work)", techniques: [
        "Heiko dachi twist 90 degrees back",
        "Neko ashi dachi suri ashi (Forward, backward, sideways)",
      ]},
      { category: "Ido (Moving Basics)", techniques: [
        "Jodan oi zuki, chudan gyaku zuki",
        "Mae geri, gyaku zuki",
        "Mawashi geri, gyaku zuki",
        "Jodan age uke, gyaku zuki",
        "Chudan yoko uke, gyaku zuki",
        "Gedan harai uke, gyaku zuki",
        "Shiko dachi gedan harai uke",
        "One men sandan gi",
      ]},
      { category: "Kata", techniques: [
        "Gekisai Dai Ichi (Detail)",
        "Gekisai Dai Ni (Sequence)",
      ]},
      { category: "Kumite", techniques: [
        "Kihon ippon kumite (Jodan, chudan, gedan)",
        "Sonoba sandan gi",
      ]},
      { category: "Hojo Undo (Supplemental Training)", techniques: [
        "Makiwara - Hiza geri, jodan age zuki, chudan ura zuki",
        "Ukemi (Mae & ushiro)",
      ]},
    ],
    knowledge: [
      { term: "International Okinawan Goju-Ryu Karate-Do Federation (IOGKF)", meaning: "" },
      { term: "Kenkon/tenchi", meaning: "" },
      { term: "Mon", meaning: "" },
      { term: "Count to 10 in Japanese", meaning: "" },
      { term: "Shitsurei shimasu", meaning: "" },
      { term: "Moichido", meaning: "" },
      { term: "Karate-ka", meaning: "" },
      { term: "Kata", meaning: "" },
      { term: "Kihon", meaning: "" },
      { term: "Kiai", meaning: "" },
      { term: "Zuki / tsuki", meaning: "" },
      { term: "Uchi", meaning: "" },
      { term: "Geri / keri", meaning: "" },
    ],
    history: [
      "Sensei Chojun Miyagi (1888 - 1953) - founder of Goju-Ryu.",
      "Sensei Kanryo Higaonna (1853 - 1915) - teacher of Sensei Chojun Miyagi, who went to China to practice Southern Chinese Martial Arts, founder of Naha-Te.",
      "Ryu Ryu Ko - Chinese Martial Arts (Southern Shaolin Style) Master, teacher of Sensei Kanryo Higaonna.",
    ]
  };

  const seventhKyuData = {
    title: "THE WAY TO 7TH KYU",
    requirements: {
      classes: 30,
      months: 3,
    },
    techniques: [
      { category: "Kihon Waza (Basic Techniques)", techniques: [
        "Kizami zuki (Snap punch)",
        "Yoko geri (Side kick)",
        "Kin geri (Groin kick)",
        "Fumikomi geri (Stamping kick)",
        "Chudan uchi uke (Middle level inside block)",
        "Gedan uchi uke (Lower level inside block)",
      ]},
      { category: "Tachi Kata (Stances)", techniques: [
        "Sanchin dachi (Hourglass stance/sanchin stance)",
      ]},
      { category: "Unsoku Ho (Foot Work)", techniques: [
        "Sanchin dachi",
        "Neko ashi dachi (Turn, 45 degrees forward & backward)",
      ]},
      { category: "Ido (Moving Basics)", techniques: [
        "Hiza geri",
        "Yoko geri",
        "Mae geri, mawashi geri, gyaku zuki",
        "Hiki uke, gyaku zuki",
      ]},
      { category: "Kata", techniques: [
        "Gekisai Dai Ni (Detail)",
        "Sanchin (Sequence)",
      ]},
      { category: "Bunkai", techniques: [
        "Gekisai Dai Ichi",
      ]},
      { category: "Kumite", techniques: [
        "Sandan gi",
        "Basic block with partner – hiki uke",
        "Kakie – basic",
        "Ippon kumite",
        "Chudan uchi uke, jodan age zuki",
        "Gedan uchi uke, chudan gyaku zuki",
        "Chudan hiki uke, chudan mawashi geri, chudan gyaku zuki",
        "Ude tanren (kote gitae) chudan gedan inside & outside",
      ]},
      { category: "Hojo Undo (Supplemental Training)", techniques: [
        "Makiwara - Yoko geri, kingeri, kizami zuki",
        "Tai otoshi",
      ]},
    ],
    knowledge: [
      { term: "Seiza", meaning: "" },
      { term: "Mokuso", meaning: "" },
      { term: "Dojo kun", meaning: "" },
      { term: "Mae/yoko/migi/hidari/ushiro/naname", meaning: "" },
      { term: "Ashi kaete", meaning: "" },
      { term: "Shomen/shimoza", meaning: "" },
      { term: "Joseki/shimoseki", meaning: "" },
    ],
    history: [
      "Sensei Anichi Miyagi - Direct/last student of Sensei Chojun Miyagi, and teacher of Sensei Morio Higaonna",
      "Sensei Morio Higaonna - 1st Chairman and International Chief Instructor of IOGKF",
      "IOGKF was formed in 1979 by Sensei Morio Higaonna",
      "Bodhi Dharma - 5th century Zen Buddhist monk who had a major influence on development of martial arts",
    ]
  };

  const sixthKyuData = {
    title: "THE WAY TO 6TH KYU",
    requirements: {
      classes: 35,
      months: 3,
    },
    techniques: [
      { category: "Kihon Waza (Basic Techniques)", techniques: [
        "Tateken zuki (Vertical fist punch)",
        "Haito uchi (Ridge hand strike)",
        "Ushiro geri (Back kick)",
        "Sukui uke (Scooping block)",
        "Kaishu gedan harai uke (Open hand lower level sweeping block)",
      ]},
      { category: "Tachi Kata (Stances)", techniques: [
        "Sagi ashi dachi (Stork stance)",
      ]},
      { category: "Unsoku Ho (Foot Work)", techniques: [
        "Sagi ashi dachi (Side step)",
      ]},
      { category: "Ido (Moving Basics)", techniques: [
        "Mae geri, mawashi geri, yoko geri",
        "Chudan uchi uke, jodan age zuki",
        "Gedan uchi uke, chudan ura zuki",
        "Yoko geri (Hachiji dachi, side step)",
        "Shiko dachi gedan harai uke, zenkutsu dachi chudan gyaku zuki, shiko dachi gedan harai uke",
      ]},
      { category: "Kata", techniques: [
        "Saifa (Sequence)",
      ]},
      { category: "Bunkai", techniques: [
        "Gekisai Dai Ni",
      ]},
      { category: "Kumite", techniques: [
        "Basic block – chudan uchi uke, gedan uchi uke, jodan shotei uchi uke",
        "Ude tanren combination",
        "Hachiji sabaki (Chudan uchi uke, gedan uchi uke)",
        "Kakie with suri ashi",
        "Kakie with balance breaking techniques",
        "Irikumi ju",
      ]},
      { category: "Hojo Undo (Supplemental Training)", techniques: [
        "Makiwara – tateken zuki, haito uchi, ushiro geri",
        "Ten tsuki (Single hand, double hands)",
        "Furi sute",
        "Ukemi (Yoko, mae, kaiten)",
      ]},
    ],
    knowledge: [
      { term: "Kime", meaning: "" },
      { term: "Budo", meaning: "" },
      { term: "Do", meaning: "" },
      { term: "Honbu", meaning: "" },
      { term: "Yudansha", meaning: "" },
      { term: "Mudansha", meaning: "" },
      { term: "Waza", meaning: "" },
      { term: "Gorei nashi", meaning: "" },
      { term: "Mawatte", meaning: "" },
      { term: "Irikumi", meaning: "" },
      { term: "Reigi/reishiki", meaning: "" },
    ],
    history: [
      "Four major Japanese karate styles, Goju-Ryu, Shotokan, Wado-Ryu, Shito-Ryu.",
      "Sensei Jin'an Shinzato – the top student, uchi deshi, and intended successor of Sensei Chojun Miyagi, died during World War II.",
      "Goju-Ryu was the first official style name in all karate styles.",
      "Karate was originally called \"te\" (martial arts) or \"tode\" (Chinese martial arts) in Okinawa.",
    ]
  };

  const fifthKyuData = {
    title: "THE WAY TO 5TH KYU",
    requirements: {
      classes: 35,
      months: 3,
    },
    techniques: [
      { category: "Kihon Waza (Basic Techniques)", techniques: [
        "Mawashi hiji ate (Roundhouse elbow strike)",
        "Ushiro hiji ate (Back elbow strike)",
      ]},
      { category: "Ido (Moving Basics)", techniques: [
        "Chudan uchi uke, haito uchi",
        "Gedan uchi uke, jodan tateken zuki",
        "Neko ashi dachi, hiki uke",
        "Neko ashi dachi, hiki uke, mae ashi kin geri",
        "Neko ashi dachi, hiki uke, zenkutsu dachi, gyaku zuki, neko ashi dachi, hiki uke",
      ]},
      { category: "Kata", techniques: [
        "Saifa (Good kata)",
        "Sanchin (Good form)",
      ]},
      { category: "Bunkai", techniques: [
        "Saifa",
      ]},
      { category: "Kumite", techniques: [
        "Basic block – sukui uke, kaishu gedan harai uke",
        "Kakie – kote gaeshi",
        "Kakie – Gekisai Dai Ni hiki uke bunkai (Nodo tsukami)",
        "Thigh conditioning",
        "Stomach conditioning",
      ]},
      { category: "Hojo Undo (Supplemental Training)", techniques: [
        "Makiwara – mawashi hiji ate, ushiro hiji ate",
        "Chiishi – front & back/side to side",
        "Neko undo",
      ]},
    ],
    knowledge: [
      { term: "Dojo kun in Japanese and its meaning", meaning: "" },
      { term: "Opening & closing ceremony in Japanese", meaning: "" },
      { term: "Gasshuku", meaning: "" },
      { term: "Zenshin", meaning: "" },
      { term: "Kotai", meaning: "" },
      { term: "Kyu", meaning: "" },
      { term: "Dan", meaning: "" },
      { term: "Ryu", meaning: "" },
    ],
    history: [
      "Your own lineage",
      "Sensei Anichi Miyagi started training karate under Sensei Chojun Miyagi after World War II",
      "Sensei Shuichi Aragaki - Direct student of Sensei Chojun Miyagi, trained with Sensei Anichi Miyagi, IOGKF technical advisor",
      "Three major Okinawan karate styles were Naha-Te, Shuri-Te, Tomari-Te",
    ]
  };

  const fourthKyuData = {
    title: "THE WAY TO 4TH KYU",
    requirements: {
      classes: 40,
      months: 3,
    },
    techniques: [
      { category: "Kihon Waza (Basic Techniques)", techniques: [
        "Shotei zuki (Palm heel thrust)",
        "Shuto uchi (Front- jodan, gedan)",
        "Tobi mae geri (Jumping front kick)",
      ]},
      { category: "Tachi Kata (Stances)", techniques: [
        "Bensoku dachi (Cross leg stance)",
        "Renoji dachi (Checkmark stance)",
      ]},
      { category: "Ido (Moving Basics)", techniques: [
        "Jodan mawashi hiji ate, jodan uraken uchi, chudan ura zuki",
        "Jodan shotei uchi, shuto uchi",
      ]},
      { category: "Kata", techniques: [
        "Seiyunchin (Sequence)",
      ]},
      { category: "Bunkai", techniques: [
        "Gekisai Dai Ichi renzoku bunkai",
      ]},
      { category: "Kumite", techniques: [
        "Kakie - Gekisai Dai Ichi #4 (Shuto uchi)",
        "Kakie – seiken zuki (Jodan, chudan, gedan)",
        "Kakie – jodan shuto uchi",
        "Kakie – chudan age hiji ate",
        "Kakie – jodan mawashi hiji ate",
        "Kakie – gedan kin geri",
        "Shoulder conditioning",
        "Back conditioning",
      ]},
      { category: "Hojo Undo (Supplemental Training)", techniques: [
        "Makiwara (Focus pad) – shotei zuki, shuto uchi, tobi mae geri",
        "Chiishi - rotate & push",
        "Chiishi - swing around body & pick up",
        "Nigiri game - Sanchin step",
      ]},
    ],
    knowledge: [
      { term: "Junbi undo", meaning: "" },
      { term: "Hojo undo", meaning: "" },
      { term: "Makiwara", meaning: "" },
      { term: "Gyaku waza", meaning: "" },
      { term: "Hazushi waza", meaning: "" },
      { term: "Nage waza", meaning: "" },
      { term: "Ne waza", meaning: "" },
      { term: "Zanshin", meaning: "" },
      { term: "Morote", meaning: "" },
      { term: "Morote waza", meaning: "" },
    ],
    history: [
      "Sensei Chojun Miyagi created Gekisai Dai Ichi, Gekisai Dai Ni, Tensho kata, junbi undo and zenshin kotai Sanchin",
      "Sensei Chojun Miyagi created Gekisai Dai Ichi, Gekisai Dai Ni in 1940's to promote karate to the younger generation",
      "Sensei Chojun Miyagi named his martial art \"Goju-Ryu\" from one of eight martial arts principals (poems) from Bubishi",
      "Sensei Kanryo Higaonna went to Fuzou, China to learn martial arts when he was about 15 years old",
      "Sensei Chojun Miyagi and Sensei Kanryo Higaonna were called \"bushi (superb martial artist)\" in Okinawan society",
      "Kobudo was developed for the same reason as karate, as weapons were banned",
    ]
  };

  const thirdKyuData = {
    title: "THE WAY TO 3RD KYU",
    requirements: {
      classes: 45,
      months: 4,
    },
    techniques: [
      { category: "Kihon Waza (Basic Techniques)", techniques: [
        "Nukite zuki (Knife hand punch) jodan, chudan, gedan",
        "Furi zuki (Swing punch)",
        "Kaiten ushiro geri (Spinning back kick)",
      ]},
      { category: "Tachi Kata (Stances)", techniques: [
        "Heisoku dachi (Feet together stance)",
      ]},
      { category: "Unsoku Ho (Foot Work)", techniques: [
        "Bensoku dachi",
        "Renoji dachi",
      ]},
      { category: "Ido", techniques: [
        "Mae geri, mawashi geri, kaiten ushiro geri",
        "Mae geri, mawashi geri, yoko geri, kaiten ushiro geri",
      ]},
      { category: "Kata", techniques: [
        "Seiyunchin (Good kata)",
        "Sanchin (Good form & breathing)",
      ]},
      { category: "Bunkai", techniques: [
        "Seiyunchin (First 6 bunkai)",
      ]},
      { category: "Kumite", techniques: [
        "Sandan gi – suri ashi",
      ]},
      { category: "Hojo Undo (Supplemental Training)", techniques: [
        "Makiwara – furi zuki, kaiten ushiro geri",
        "Chiishi – swing & thrust with naname shiko dachi",
        "Chiishi – squeeze (Up, down & rotate, forward)",
      ]},
    ],
    knowledge: [
      { term: "Renzoku", meaning: "" },
      { term: "Kenpo hakku", meaning: "" },
      { term: "Heijo shin (fudo shin)", meaning: "" },
      { term: "Sabaki / tai sabaki", meaning: "" },
      { term: "Shihan", meaning: "" },
      { term: "Bubishi", meaning: "" },
      { term: "Muchimi", meaning: "" },
      { term: "Chiru no chan chan", meaning: "" },
      { term: "Chin kuchi kakin", meaning: "" },
      { term: "Shime jurasan", meaning: "" },
    ],
    history: [
      "Sensei Kanryo Higaonna and Sensei Chojun Miyagi taught only Sanchin and hojo undo to their students for the first couple of years of their training",
      "Sensei Ryuko Aragaki - first karate teacher of Sensei Chojun Miyagi, grandfather of Sensei Shuichi Aragaki",
      "Naha-Te, the martial art form that Sensei Kanryo Higaonna taught",
      "Sensei Chojun Miyagi went to China for the first time in 1915",
    ]
  };

  const secondKyuData = {
    title: "THE WAY TO 2ND KYU",
    requirements: {
      classes: 45,
      months: 4,
    },
    techniques: [
      { category: "Kihon", techniques: [
        "Kagi zuki (Hook punch)",
        "Kansetsu geri (Joint kick)",
        "Jodan ko uke (Upper level wrist block)",
      ]},
      { category: "Ido", techniques: [
        "Jodan oi zuki, jodan furi zuki",
        "Jodan oi zuki, chudan gyaku zuki, jodan kaki zuki",
        "Neko ashi dachi, kaishu sandan uke",
      ]},
      { category: "Kumite", techniques: [
        "Basic blocks with partner – jodan ko uke",
        "Sandan gi – open hand blocks",
        "Kakie – hiji tori (Shisochin)",
        "Kakie – jodan ude garami",
        "Ippon kumite",
        "Chudan hiki uke, kansetsu geri",
        "Chudan yoko uke, jodan kagi zuki",
      ]},
      { category: "Kata", techniques: [
        "Shisochin (Sequence)",
        "Sanchin (Good kata)",
      ]},
      { category: "Bunkai", techniques: [
        "Seiyunchin (Last 6 bunkai)",
      ]},
      { category: "Hojo Undo (Supplemental Training)", techniques: [
        "Makiwara – furi zuki, kagi zuki",
        "Kongo ken – twist",
        "Kongo ken – lift up",
        "Kongo ken – shiko dachi squat",
      ]},
    ],
    knowledge: [
      { term: "Kaishu gata", meaning: "" },
      { term: "Heishu gata", meaning: "" },
      { term: "Sho dan, ni dan, san dan, yon dan, go dan, rok udan, shichi dan, hachi dan, kyu dan, ju dan", meaning: "" },
      { term: "Ritsu rei", meaning: "" },
      { term: "Za rei", meaning: "" },
      { term: "Hoshin", meaning: "" },
    ],
    history: [
      "Sensei Kanryo Higaonna's nickname was \"ashi (legs) no Higaonna\" because of his superb kicking techniques",
      "Both Sensei Kanryo Higaonna and Chojun Miyagi taught karate at Naha Shogyo Koko (Naha Commercial High School)",
      "Sensei Chojun Miyagi created Tensho kata in 1926 from the Chinese form called Rokkishu",
      "Sensei Kanryo Higaonna is the among the first to teach karate publicly",
    ]
  };

  const firstKyuData = {
    title: "THE WAY TO 1ST KYU",
    requirements: {
      classes: 50,
      months: 4,
    },
    techniques: [
      { category: "Kihon", techniques: [
        "Jodan haishu/haiwan age uke (Upper level back hand rising block)",
        "Chudan haishu/haiwan otoshi uke (Middle level back hand dropping block)",
      ]},
      { category: "Ido", techniques: [
        "Neko ashi dachi chudan haishu otoshi uke",
        "Neko ashi dachi chudan hiki uke, mae ashi kin geri, zenkutsu dachi chudan gyaku zuki, neko ashi dachi chudan hiki uke",
        "Neko ashi dachi chudan chudan, haishu otoshi uke, mae ashi kin geri, zenkutsu dachi chudan gyaku zuki, neko ashi dachi chudan haishu otoshi uke",
      ]},
      { category: "Kata", techniques: [
        "Shisochin (Good kata)",
      ]},
      { category: "Kumite", techniques: [
        "Basic block with partner – jodan haishu age uke, chudan haishu otoshi uke",
        "Sandan gi – neko ashi dachi open hand block",
        "Niohn kumite (Two attacks sparring)",
      ]},
      { category: "Hojo Undo (Supplemental Training)", techniques: [
        "Kongo ken – chest & shoulder push",
        "Kongo ken – catch & push (Two men)",
        "Ishi sashi – Shisochin, nukite zuki",
        "Ishi sashi – Shisochin shotei zuki",
        "Ishi sashi – shiko dachi open and close",
        "Ishi sashi – bent over open & close",
      ]},
    ],
    knowledge: [
      { term: "Uchi deshi", meaning: "" },
      { term: "Unsoku ho", meaning: "" },
      { term: "Josokutei", meaning: "" },
      { term: "Kakato", meaning: "" },
      { term: "Sokuto", meaning: "" },
      { term: "Haisoku", meaning: "" },
      { term: "Tsumasaki", meaning: "" },
      { term: "Kasokutei", meaning: "" },
    ],
    history: [
      "Sensei Chojun Miyagi's childhood name was \"Machu\"",
      "Sensei Chojun Miyagi introduced the kongoken after observing professional wrestlers training with it in Hawaii",
      "In 1915, Sensei Chojun Miyagi traveled to China first time for his research of martial arts",
      "In 1934, Sensei Chojun Miyagi traveled to Hawaii to promote karate",
    ]
  };

  const shodanData = {
    title: "THE WAY TO SHODAN",
    requirements: {
      classes: 0,
      months: 6,
    },
    techniques: [
      { category: "Unsoku Ho", techniques: [
        "Neko ashi dachi shiho sabaki (Four direction step)",
      ]},
      { category: "Bunkai", techniques: [
        "Shisochin",
      ]},
      { category: "Kumite", techniques: [
        "Kakie – shuto uchi nage (Gekisai Dai Ichi)",
        "Kakie – gedan mae geri, chudan age hiji ate, uraken uchi (Gekisai Dai Ichi)",
        "Kakie – awase zuki (Gekisai Dai Ichi)",
        "Kakie – toraguchi oshi (Gekisai Dai Ni)",
        "Kakie – gedan ude garami",
        "Kakie – ashi garami",
        "Kakie – hiji tori, ashi garami",
        "Jiyu ippon kumite (Free one attack sparring)",
      ]},
      { category: "Hojo Undo (Supplemental Training)", techniques: [
        "Udetate ryoashi ashi geri otoshi",
        "Kusshin tobi (Squat jump)",
        "Nigiri game – shiko dachi",
        "Nigiri game – neko ashi dachi",
      ]},
    ],
    knowledge: [
      { term: "Body parts in Japanese", meaning: "" },
    ],
    history: [
      "Sensei Chojun Miyagi went to Shanghai, China in 1936 for research and to build friendships with Chinese martial artists",
      "In 1926, Sensei Chojun Miyagi established the Karate KenKyu Club in Naha with masters from other Okinawa karate styles, Chomo Hanashiro, Choyu Motobu, and Kenwa Mabuni",
      "The purpose of the Karate KenKyu Club was to ensure the preservation of karate as an intangible cultural treasure in Okinawa for all time, to bring the karate community of the island into one cohesive force, to transmit traditional karate to future generations both in Okinawa and elsewhere, and to elevate karate in the eyes of the Japanese, bringing it to the level already enjoyed by judo and kendo.",
    ]
  };

  const renderTechniques = (techniquesData) => {
    return (
      <div className="space-y-4">
        {techniquesData.map((category, index) => (
          <div key={index} className="space-y-2">
            <h4 className="font-medium text-stone-800">{category.category}</h4>
            <ul className="list-disc list-inside space-y-1 text-stone-600">
              {category.techniques.map((technique, techIndex) => (
                <li key={techIndex}>{technique}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  };

  const renderKnowledge = (knowledgeData) => {
    return (
      <div className="space-y-2">
        <ul className="list-disc list-inside space-y-1 text-stone-600">
          {knowledgeData.map((item, index) => (
            <li key={index}>
              <strong>{item.term}</strong> {item.meaning && `- ${item.meaning}`}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const renderHistory = (historyData) => {
    return (
      <div className="space-y-2">
        <ul className="list-disc list-inside space-y-1 text-stone-600">
          {historyData.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  };

  const getGradingData = (tabId) => {
    switch (tabId) {
      case "10th-kyu": return tenthKyuData;
      case "9th-kyu": return ninthKyuData;
      case "8th-kyu": return eighthKyuData;
      case "7th-kyu": return seventhKyuData;
      case "6th-kyu": return sixthKyuData;
      case "5th-kyu": return fifthKyuData;
      case "4th-kyu": return fourthKyuData;
      case "3rd-kyu": return thirdKyuData;
      case "2nd-kyu": return secondKyuData;
      case "1st-kyu": return firstKyuData;
      case "shodan": return shodanData;
      default: return tenthKyuData;
    }
  };

  const activeGradingData = getGradingData(activeTab);

  const chartData = [
    { name: "Required Classes", value: activeGradingData.requirements.classes || 0 },
    { name: "Months of Training", value: activeGradingData.requirements.months || 0 }
  ];

  const chartColors = ["#9f7aea", "#3182ce"];

  const chartConfig = {
    classes: {
      label: "Required Classes",
      color: "#9f7aea"
    },
    months: {
      label: "Months of Training",
      color: "#3182ce"
    }
  };

  const renderStripes = (count) => {
    if (count <= 0) return null;
    
    const stripes = [];
    for (let i = 0; i < count; i++) {
      stripes.push(
        <div 
          key={i} 
          className="w-1.5 h-full bg-black absolute" 
          style={{ right: `${i * 8 + 4}px` }} 
        />
      );
    }
    return stripes;
  };

  return (
    <MobileLayout hideHeader={true}>
      <div className="p-4">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-4 mb-4 h-auto">
            {gradingLevels.map((level) => (
              <TabsTrigger
                key={level.id}
                value={level.id}
                className={`h-12 p-1 text-xs relative ${level.color} ${level.textColor || 'text-stone-800'} overflow-hidden pr-${level.stripes > 0 ? (level.stripes * 2 + 2) : 0}
                  data-[state=active]:border-2 data-[state=active]:border-karate`}
              >
                {level.label}
                {renderStripes(level.stripes)}
              </TabsTrigger>
            ))}
          </TabsList>

          {gradingLevels.map((level) => {
            const gradingData = getGradingData(level.id);
            return (
              <TabsContent key={level.id} value={level.id} className="space-y-6">
                <Card>
                  <CardHeader className={`${level.color} ${level.textColor || 'text-stone-800'} relative overflow-hidden border-b ${level.borderColor}`}>
                    {renderStripes(level.stripes)}
                    <CardTitle className="text-xl font-serif text-center relative z-10">{gradingData.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="mb-6">
                      <h3 className="font-semibold mb-3 flex items-center text-stone-700 text-lg">
                        <Award className="mr-2 h-5 w-5 text-karate" />
                        Basic Requirements
                      </h3>
                      <div className="grid grid-cols-2 gap-4">
                        {gradingData.requirements.classes > 0 && (
                          <div className="bg-stone-50 p-3 rounded-lg border border-stone-200 text-center">
                            <p className="text-xs text-stone-500">Minimum Classes</p>
                            <p className="text-2xl font-semibold text-stone-800">{gradingData.requirements.classes}</p>
                          </div>
                        )}
                        <div className="bg-stone-50 p-3 rounded-lg border border-stone-200 text-center">
                          <p className="text-xs text-stone-500">Months of Training</p>
                          <p className="text-2xl font-semibold text-stone-800">{gradingData.requirements.months}</p>
                        </div>
                      </div>

                      {(gradingData.requirements.classes > 0) && (
                        <div className="mt-4 h-44">
                          <ChartContainer config={chartConfig}>
                            <PieChart>
                              <Pie
                                data={chartData}
                                dataKey="value"
                                nameKey="name"
                                cx="50%"
                                cy="50%"
                                outerRadius={70}
                                label={(entry) => `${entry.name}: ${entry.value}`}
                              >
                                {chartData.map((entry, index) => (
                                  <Cell key={`cell-${index}`} fill={chartColors[index % chartColors.length]} />
                                ))}
                              </Pie>
                              <ChartTooltip
                                content={
                                  <ChartTooltipContent />
                                }
                              />
                            </PieChart>
                          </ChartContainer>
                        </div>
                      )}
                    </div>

                    <Accordion type="single" collapsible className="w-full space-y-4">
                      <AccordionItem value="techniques" className="border rounded-lg overflow-hidden">
                        <AccordionTrigger className="px-4 py-3 flex text-left hover:bg-stone-50">
                          <div className="flex items-center">
                            <Swords className="mr-2 h-5 w-5 text-karate" />
                            <h3 className="font-semibold text-stone-700">
                              Techniques
                            </h3>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="p-4 pt-2">
                          {renderTechniques(gradingData.techniques)}
                        </AccordionContent>
                      </AccordionItem>

                      {gradingData.knowledge && gradingData.knowledge.length > 0 && (
                        <AccordionItem value="knowledge" className="border rounded-lg overflow-hidden">
                          <AccordionTrigger className="px-4 py-3 flex text-left hover:bg-stone-50">
                            <div className="flex items-center">
                              <Book className="mr-2 h-5 w-5 text-karate" />
                              <h3 className="font-semibold text-stone-700">
                                Knowledge & Terminology
                              </h3>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="p-4 pt-2">
                            {renderKnowledge(gradingData.knowledge)}
                          </AccordionContent>
                        </AccordionItem>
                      )}

                      {gradingData.history && gradingData.history.length > 0 && (
                        <AccordionItem value="history" className="border rounded-lg overflow-hidden">
                          <AccordionTrigger className="px-4 py-3 flex text-left hover:bg-stone-50">
                            <div className="flex items-center">
                              <GraduationCap className="mr-2 h-5 w-5 text-karate" />
                              <h3 className="font-semibold text-stone-700">
                                History
                              </h3>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="p-4 pt-2">
                            {renderHistory(gradingData.history)}
                          </AccordionContent>
                        </AccordionItem>
                      )}
                    </Accordion>

                    <div className="mt-4 border-t pt-4 flex justify-between items-center text-sm text-stone-500">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{gradingData.requirements.months} months</span>
                      </div>
                      {gradingData.requirements.classes > 0 && (
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{gradingData.requirements.classes} classes</span>
                        </div>
                      )}
                      <Badge variant="outline" className="text-xs">
                        {level.label}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </MobileLayout>
  );
};

export default GradingsPage;
