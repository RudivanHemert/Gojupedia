@ -1,31 +0,0 @@

import React from 'react';

const KataTerminology = () => {
  const terms = [
    "Gekisai Dai Ichi: Smash and destroy, number one",
    "Gekisai Dai Ni: Smash and destroy, number two",
    "Saifa: Smash and tear",
    "Seiyunchin: To pull off balance and fight",
    "Shisochin: Four direction battle",
    "Sanseru: 36 hands",
    "Sepai: 18 hands",
    "Kururunfa: Silence before the storm",
    "Sesan: 13 hands",
    "Suparinpei/peichurin: 108 hands",
    "Sanchin: Three battles",
    "Tensho: Revolving hands Turning palms"
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

export default KataTerminology;