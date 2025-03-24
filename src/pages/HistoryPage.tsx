
import React, { useState } from 'react';
import MobileLayout from '@/components/layout/MobileLayout';
import { motion } from 'framer-motion';
import HistoryHeader from '@/components/history/HistoryHeader';
import OriginsSection from '@/components/history/OriginsSection';
import KanryoHigaonnaSection from '@/components/history/KanryoHigaonnaSection';
import ChojunMiyagiSection from '@/components/history/ChojunMiyagiSection';
import AnichiMiyagiSection from '@/components/history/AnichiMiyagiSection';
import MorioHigaonnaSection from '@/components/history/MorioHigaonnaSection';
import TetsujiNakamuraSection from '@/components/history/TetsujiNakamuraSection';
import TimelineSection from '@/components/history/TimelineSection';
import NavigationTable from '@/components/history/NavigationTable';
import { ArrowUp } from 'lucide-react';

const HistoryPage = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <MobileLayout>
      <HistoryHeader />

      <div className="p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <NavigationTable onNavigate={scrollToSection} />
          
          <div id="origins" className="scroll-mt-16">
            <OriginsSection />
          </div>
          
          <div id="kanryo-higaonna" className="scroll-mt-16">
            <KanryoHigaonnaSection />
          </div>
          
          <div id="chojun-miyagi" className="scroll-mt-16">
            <ChojunMiyagiSection />
          </div>
          
          <div id="anichi-miyagi" className="scroll-mt-16">
            <AnichiMiyagiSection />
          </div>
          
          <div id="morio-higaonna" className="scroll-mt-16">
            <MorioHigaonnaSection />
          </div>
          
          <div id="tetsuji-nakamura" className="scroll-mt-16">
            <TetsujiNakamuraSection />
          </div>
          
          <div id="timeline" className="scroll-mt-16">
            <TimelineSection />
          </div>

          <button 
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 bg-red-600 text-white p-2 rounded-full shadow-lg"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </motion.div>
      </div>
    </MobileLayout>
  );
};

export default HistoryPage;
