import React from 'react';
import MobileLayout from '@/components/layout/MobileLayout';
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import KarateGojuRyuTerminology from './terminology/KarateGojuRyuTerminology';
import KarateTitles from './terminology/KarateTitles';
import Stances from './terminology/Stances';
import Blocks from './terminology/Blocks';
import GeneralTerminology from './terminology/GeneralTerminology';
// Import other subsections similarly

const TerminologyPage = () => {
  const sections = [
    { id: 'karate-goju-ryu', title: 'Karate & Goju ryu Terminology', component: <KarateGojuRyuTerminology /> },
    { id: 'karate-titles', title: 'Karate Titles', component: <KarateTitles /> },
    { id: 'stances', title: 'Stances', component: <Stances /> },
    { id: 'blocks', title: 'Blocks', component: <Blocks /> },
    { id: 'general-terms', title: 'General Terms', component: <GeneralTerminology /> },
    // Add other subsections similarly
  ];

  return (
    <MobileLayout>
      {/* Header Image */}
      <div className="relative h-40 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1524684009724-bee13ad8305f?q=80&w=2970&auto=format&fit=crop" 
          alt="Japanese Terminology" 
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </MobileLayout>
  );
};

export default TerminologyPage;