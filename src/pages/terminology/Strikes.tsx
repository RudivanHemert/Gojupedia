
import React from 'react';

const Strikes = () => {
  const terms = [
    "Empi ate : Elbow strike (sometimes called hiji ate, empi uchi, hiji uchi)",
    "Haito uchi : Ridge hand strike",
    "Hiji atemi : Elbow strikes",
    "Hiraken : Fore knuckle fist",
    "Hiza uchi : Knee strike (sometimes called hiza geri)",
    "Ko uchi : Wrist strike",
    "Mawashi empi uchi : Round elbow strike",
    "Nukite uchi : Spear hand strike",
    "Shuto uchi : Knife-hand strike",
    "Sokuto uchi : Foot edge strike",
    "Teisho uchi : Palm heel strike (sometimes called Shotei uchi)",
    "Tetsui uchi : Bottom fist strike",
    "Uchi : Striking",
    "Uraken uchi : Back fist strike",
    "Atama uchi : Strike with head",
    "Ganmen uchi : Facial strike",
    "Hai wan : Back arm",
    "Haishu uchi : Back hand strike",
    "Heiwan uchi : Forearm strike",
    "Hitosashi ippon ken : Forefinger knuckle",
    "Hizagashira : Knee cap",
    "Ippon ken : One knuckle fist",
    "Ippon nukite : Stabbing action with extended forefinger",
    "Kentsui uchi : Hammer fist strike",
    "Kumade uchi : Bear hand strike (as used in the kata Sepai)",
    "Mae empi uchi : Forward elbow strike (sometimes called Mae hiji ate)",
    "Mawashi hiji ate : Circular elbow strike",
    "Nakadaka ippon ken : Middle finger one knuckle fist (as used in the kata Sepai)",
    "Nakadaka ken : Middle finger knuckle fist",
    "Nihon nukite : Two finger spear-hand",
    "Otoshi empi uchi : Downward elbow strike (sometimes called Otoshi hiji ate)",
    "Oyayubi ippon ken : Thumb knuckle",
    "Sashite : Raising hand to strike",
    "Seiryuto : Ox jaw hand",
    "Shittsui : Knee hammer",
    "Shu wan : Palm arm",
    "Shubo : Arm stick",
    "Tate empi uchi : Upward elbow strike (sometimes called Tate hiji ate)",
    "Ushiro empi uchi : Back elbow strike (sometimes called Ushiro hiji ate)",
    "Wanto : Arm sword",
    "Washide : Eagle hand",
    "Yoko empi uchi : Side elbow strike (sometimes called Yoko hiji ate)",
    "Yoko mawashi empi uchi : Side round elbow strike (also Yoko mawashi hiji ate)"
  ];

  return (
    <ul className="space-y-2">
      {terms.map((term, index) => (
        <li key={index} className="text-gray-700">
          {term}
        </li>
      ))}
    </ul>
  );
};

export default Strikes;
