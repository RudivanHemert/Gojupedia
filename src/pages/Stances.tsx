import React from 'react';

const Stances = () => {
  const terms = [
    "Hachiji dachi: Natural stance",
    "Han zenkutsu dachi: Half forward stance",
    "Heiko dachi: Parallel stance",
    "Heisoku dachi: Informal attention stance",
    "Kokutsu dachi: Back stance",
    "Kosa dachi: Crouched stance",
    "Musubi dachi: Informal attention stance, feet turned out",
    "Neko ashi dachi: Cat stance",
    "Reinoji dachi - L stance (sometimes called 'haraisa dachi')",
    "Sanchin dachi: Hour glass stance",
    "Sesan dachi: Side facing straddle stance",
    "Shiko dachi : Box stance (sometimes called 'square stance' or 'sumo stance')",
    "Zenkutsu dachi: Long stance",
    "Fudo dachi: Rooted stance, 'Immovable stance'",
    "Gankaku dachi: One legged stance",
    "Sagi ashi dachi Gedan no kamae : Lower level combative posture",
    "Shizen dachi: Natural combative posture",
    "Hangetsu dachi: Half moon stance",
    "Hanmi: Half front facing position",
    "Hanmi no kamae : Half forward facing combative posture",
    "Hidari shizen tai: Left natural position",
    "Hidari teiji dachi: 'Left T' stance",
    "Jodan no kamae : Upper level combative posture",
    "Kiba dachi: Straddle stance (sometimes called Naihanchin dachi; Naifanchin dachi)",
    "Naihanshi dachi: Kiba dachi with knees turned in and down",
    "Sagi ashi dachi: Propped leg stance",
    "Shizen dachi no kamae : Natural combative posture",
    "Shizentai: Natural position",
    "Sochin dachi: Diagonal straddle leg 'Immovable' stance, rooted stance",
    "Teiji dachi: T stance",
    "Tsugi ashi: Shuffling step",
    "Tsuri ashi dachi: Crane stance with propped leg",
    "Uchi hachiji dachi: Inverted open-leg stance",
    "Yori ashi : Dragging step"
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

export default Stances;