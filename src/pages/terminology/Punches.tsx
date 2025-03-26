@ -1,54 +0,0 @@

import React from 'react';

const Punches = () => {
  const terms = [
    "Age zuki : Rising punch",
    "Choku zuki : Straight punching from a parallel stance",
    "Chudan zuki : Middle area punch",
    "Furi zuki : Circular punch",
    "Gedan zuki : Punch to low area",
    "Gyaku zuki : Reverse punch",
    "Jodan zuki : Upper punch",
    "Kizame Zuki : Jab Punch",
    "Oi zuki : Lunge punch",
    "Seiken zuki : Forefist punch",
    "Ura zuki : Close range punch",
    "Awase zuki : U punch",
    "Choku zuki chudan : Straight punch to body",
    "Dan zuki : Consecutive punching",
    "Hasami zuki : Scissors punch",
    "Heiko zuki : Double punch, simultaneous",
    "Hiraken zuki : Fore-knuckle-fist straight punch",
    "Hon zuki : Frontal punch",
    "Ippon ken zuki : One-knuckle-fist straight punch",
    "Jun zuki : Double punch, consecutive",
    "Kagi zuki : Hook punch",
    "Mawashi zuki : Roundhouse punch",
    "Morote zuki : Double-fist U-punch",
    "Nagashi zuki : Flowing punch",
    "Nihon zuki : Double punch",
    "Oroshi zuki : Descending punch",
    "Ren zuki : Alternate punching",
    "Sanbon zuki : Three punch combination",
    "San ren zuki : Three consecutive punches",
    "Seiken choku zuki : Fore-fist punching from a parallel stance",
    "Tate zuki : Vertical fist punch",
    "Ten zuki : Heaven punch",
    "Tsun zuki : One inch punch (as used in the kata Sesan)",
    "Yama zuki : Mountain punch",
    "Yoko zuki : Side punch"
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

export default Punches;