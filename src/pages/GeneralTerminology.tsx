import React from 'react';

const General = () => {
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
    "Jyudan : 10th Dan",
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

export default General;