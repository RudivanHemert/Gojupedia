import React from 'react';
import { motion } from 'framer-motion';

interface TheoryHeaderProps {
  title: string;
  description: string;
}

const TheoryHeader: React.FC<TheoryHeaderProps> = ({ title, description }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative py-12 bg-gradient-to-b from-stone-50 to-white border-b border-stone-200"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl font-serif font-bold text-stone-800 mb-3"
          >
            {title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-stone-600"
          >
            {description}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

export default TheoryHeader;
