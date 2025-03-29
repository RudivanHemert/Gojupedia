import React from 'react';
import MobileLayout from '@/components/layout/MobileLayout';
import { motion } from 'framer-motion';

const HojoUndoPage = () => {
  return (
    <MobileLayout hideHeader={true}>
      <div className="p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow p-4"
        >
          <p className="text-gray-600 text-center italic">
            Hojo Undo content coming soon...
          </p>
        </motion.div>
      </div>
    </MobileLayout>
  );
};

export default HojoUndoPage;
