
import React from 'react';

const KarateTitles = () => {
  const terms = [
    "Bushi: Great martial artist (Okinawan); Warlord (Japanese)",
    "Hanshi : Head person of an organization",
    "Karateka : A practitioner of Karate",
    "Kohai: A student junior to oneself",
    "Kyoshi: Master instructor",
    "Mudansha : Students without black belt rank",
    "Reigi renshi: Polished instructor",
    "Sensei: Instructor, Teacher",
    "Sempai: A senior student",
    "Shihan : Formal title, Master Instructor, or Teacher of Teachers",
    "Shushin : Referee in a bout",
    "Uchi Deshi: A live-in student",
    "Yudansha : Black belt holder (any rank)"
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

export default KarateTitles;
