
import React from 'react';

const KarateGojuRyuTerminology = () => {
  const terms = [
    "Shodan : 1st Dan black belt",
    "Nidan : 2nd Dan",
    "Sandan : 3rd Dan",
    "Yondan : 4th Dan",
    "Godan : 5th Dan",
    "Rokudan : 6th Dan",
    "Nanadan : 7th Dan",
    "Hachidan : 8th Dan",
    "Kyudan : 9th Dan",
    "Jyudan : 10th Dan"
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

export default KarateGojuRyuTerminology;
