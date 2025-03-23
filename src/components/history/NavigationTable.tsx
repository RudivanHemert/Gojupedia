
import React from 'react';
import { motion } from 'framer-motion';

interface NavigationTableProps {
  onNavigate: (sectionId: string) => void;
}

const NavigationTable = ({ onNavigate }: NavigationTableProps) => {
  const sections = [
    { id: 'origins', title: 'Origins in Okinawa' },
    { id: 'kanryo-higaonna', title: 'Kanryo Higaonna (1853-1915)' },
    { id: 'chojun-miyagi', title: 'Chojun Miyagi (1888-1953)' },
    { id: 'anichi-miyagi', title: 'An\'ichi Miyagi (1931-2009)' },
    { id: 'morio-higaonna', title: 'Morio Higaonna (1939 - )' },
    { id: 'tetsuji-nakamura', title: 'Tetsuji Nakamura (1965 - )' },
    { id: 'timeline', title: 'Timeline' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mb-8 bg-white rounded-lg shadow-md overflow-hidden"
    >
      <h2 className="text-lg font-serif font-semibold bg-red-600 text-white p-3">
        Navigation
      </h2>
      <div className="divide-y divide-gray-200">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => onNavigate(section.id)}
            className="w-full text-left p-3 hover:bg-gray-100 transition-colors"
          >
            {section.title}
          </button>
        ))}
      </div>
    </motion.div>
  );
};

export default NavigationTable;
