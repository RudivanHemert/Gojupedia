
import React from 'react';
import MobileLayout from '@/components/layout/MobileLayout';
import { motion } from 'framer-motion';

const TerminologyPage = () => {
  return (
    <MobileLayout>
      {/* Header Image */}
      <div className="relative h-40 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1524684009724-bee13ad8305f?q=80&w=2970&auto=format&fit=crop" 
          alt="Japanese Terminology" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70"></div>
        <div className="absolute bottom-0 left-0 p-5 w-full">
          <h1 className="text-white text-3xl font-bold">Terminology</h1>
          <p className="text-white opacity-90">
            Japanese vocabulary used in Goju Ryu
          </p>
        </div>
      </div>

      <div className="p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow p-4"
        >
          <p className="text-gray-600 text-center italic">
            Terminology content coming soon...
          </p>
        </motion.div>
      </div>
    </MobileLayout>
  );
};

export default TerminologyPage;
