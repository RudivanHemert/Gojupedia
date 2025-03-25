
import React from 'react';
import MobileLayout from '@/components/layout/MobileLayout';
import { motion } from 'framer-motion';
import TheoryHeader from '@/components/theory/TheoryHeader';
import InteractiveVitalPoints from '@/components/theory/InteractiveVitalPoints';

const VitalPointsPage = () => {
  return (
    <MobileLayout>
      <TheoryHeader
        title="Vital Points"
        description="Study of pressure points and vulnerable areas"
        imageUrl="https://images.unsplash.com/photo-1519505907962-0a6cb0167c73?q=80&w=2070&auto=format&fit=crop"
      />

      <div className="p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow p-4"
        >
          <p className="text-gray-700 mb-4">
            Vital points (Kyusho) are specific locations on the human body that, when struck, pressed, 
            or manipulated, can produce significant effects ranging from pain to unconsciousness. 
            In Goju-Ryu Karate, knowledge of these points is essential for both offensive techniques 
            and defensive applications.
          </p>
          
          <h2 className="text-xl font-semibold mb-4">Interactive Vital Points Diagram</h2>
          <p className="text-sm text-gray-600 italic mb-4">
            Click on names to show/hide points, or use the buttons to show/hide all points.
          </p>
          
          <InteractiveVitalPoints />
        </motion.div>
      </div>
    </MobileLayout>
  );
};

export default VitalPointsPage;
