
import React from 'react';
import MobileLayout from '@/components/layout/MobileLayout';
import { motion } from 'framer-motion';
import HistoryHeader from '@/components/history/HistoryHeader';
import OriginsSection from '@/components/history/OriginsSection';
import KanryoHigaonnaSection from '@/components/history/KanryoHigaonnaSection';
import ChojunMiyagiSection from '@/components/history/ChojunMiyagiSection';
import AnichiMiyagiSection from '@/components/history/AnichiMiyagiSection';
import MorioHigaonnaSection from '@/components/history/MorioHigaonnaSection';
import TetsujiNakamuraSection from '@/components/history/TetsujiNakamuraSection';
import ModernDevelopmentSection from '@/components/history/ModernDevelopmentSection';
import TimelineSection from '@/components/history/TimelineSection';

const HistoryPage = () => {
  return (
    <MobileLayout>
      <HistoryHeader />

      <div className="p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <OriginsSection />
          <KanryoHigaonnaSection />
          <ChojunMiyagiSection />
          <AnichiMiyagiSection />
          <MorioHigaonnaSection />
          <TetsujiNakamuraSection />
          <ModernDevelopmentSection />
          <TimelineSection />
        </motion.div>
      </div>
    </MobileLayout>
  );
};

export default HistoryPage;
