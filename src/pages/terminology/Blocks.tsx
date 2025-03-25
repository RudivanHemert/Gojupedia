
import React from 'react';

const Blocks = () => {
  const terms = [
    "Age uke : Rising block",
    "Chudan uke : Middle level block",
    "Gedan barai : Lower level sweep",
    "Jodan uke : Upper level block",
    "Hiji uke : Elbow block",
    "Hiki uke : Pulling / grasping block",
    "Hiza uke : Knee block",
    "Jodan uke : Upper level block",
    "Ko uke : Wrist block",
    "Shotei barai : Palm heel sweep",
    "Shotei uke : Palm heel block",
    "Soto uke : Forearm block (from outside moving inward to the centre line of the body)",
    "Sukui uke : Scooping block",
    "Tora guchi uke - Tiger mouth block (sometimes called mawashi uke)"
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

export default Blocks;
