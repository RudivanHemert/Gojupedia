
import React from 'react';

const PhrasesAndEtiquette = () => {
  const terms = [
    "Domo Arigato Gozai imasu : Thank you very much",
    "Gaayu no hito : One who possesses a strong spirit and never gives up",
    "Gokurosan : Thank you for doing what was expected of you",
    "Gokurosahma : Thank you for doing what was expected of you (with respect)",
    "Ho go ju donto : The way of inhaling and exhaling is hardness and softness",
    "Kon banwa : Good evening (after daylight)",
    "Konnichi wa : Good evening (day light hours)",
    "Mo ichi do : Once more time",
    "Ohiyo Gozai imasu : Good morning",
    "Onegai shimasu : Please teach me",
    "Osu : Versatile greeting",
    "Oyasumi nasai: Good night (upon departing)"
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

export default PhrasesAndEtiquette;
