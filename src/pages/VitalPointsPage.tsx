import React from 'react';
import MobileLayout from '@/components/layout/MobileLayout';
import { motion } from 'framer-motion';
import VitalPoints from './terminology/VitalPoints';

const VitalPointsPage = () => {
  return (
    <MobileLayout hideHeader={true}>
      <div className="p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow p-4"
        >
          <VitalPoints />
        </motion.div>
      </div>
    </MobileLayout>
  );
};

export default VitalPointsPage;
