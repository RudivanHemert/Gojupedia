
import React from 'react';

const EquipmentAndWeapons = () => {
  const terms = [
    "Bo : Wooden staff, 6 feet long",
    "Chi ishi: Lever weighted stone",
    "Ishi sashi: Stone padlocks",
    "Jo : Wooden staff, approximately 4 feet long",
    "Kendo : Sword fighting",
    "Kongo ken : Iron ring",
    "Makiwara : Striking board",
    "Nigiri game : Training jars (Nih-gee-ree gam-ay)",
    "Sai: Three pronged knife",
    "Tan : Barbells",
    "Tetsu wa : Iron rings",
    "Tonfa : Farm tool developed into weapon by the Okinawan people"
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

export default EquipmentAndWeapons;
