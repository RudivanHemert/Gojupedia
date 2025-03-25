
import React from 'react';

const Numbers = () => {
  const terms = [
    "1. Ichi: One",
    "2. Ni : Two",
    "3. San : Three",
    "4. Shi: Four",
    "5. Go : Five",
    "6. Roku : Six",
    "7. Shichi: Seven",
    "8. Hachi: Eight",
    "9. Ku : Nine",
    "10. Ju : Ten"
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

export default Numbers;
