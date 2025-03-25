
import React from 'react';

const VitalPoints = () => {
  const terms = [
    "Bitei: Coccyx",
    "Danchu : Breastbone",
    "Denko : Ribs (slightly below ganka)",
    "Dokusen : Side of neck",
    "Fukuto : Hollow of knee",
    "Ganka : Ribs (point located directly under the nipple)",
    "Hayauchi: Upper back",
    "Hichu : Windpipe",
    "Hijisume : Inside of elbow",
    "Inazuma : Stomach wall (ganka level)",
    "Jinchu : Philtrum (dimple between top lip and nose)",
    "Kakon : Chin",
    "Kassatsu : Spine, middle of back",
    "Kasumi: Temple on the side of the head",
    "Keichu : Back of neck; Base of cerebellum",
    "Kinteki: Groin",
    "Kokotsu : Shinbone",
    "Komekami: Cheekbone",
    "Kori: Area around the toes",
    "Kutaku : Inner wrist",
    "Kyosen : Sternum",
    "Mikazuki : Jaw",
    "Murasame : Clavicle",
    "Myosho : Navel area, abdomen",
    "Naira : Achilles tendon",
    "Seimo : Eye socket",
    "Shomon : Skull",
    "Shuko : Back of hand",
    "Soin : Instep",
    "Soma : Calves",
    "Soto shakutaku : Outer wrist",
    "Suigetsu : Solar plexus",
    "Tanden : Abdomen (the power center of the body)",
    "Tsumasaki : Tips of toes",
    "Ushiro denko : Kidney area (Literally: back ribs)",
    "Ushiro inazuma : Backside",
    "Uto : Bridge of nose",
    "Yako : Inner thigh"
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

export default VitalPoints;
