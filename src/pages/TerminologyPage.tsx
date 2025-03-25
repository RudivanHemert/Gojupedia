
import React, { useState } from 'react';
import MobileLayout from '@/components/layout/MobileLayout';
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import General from './GeneralTerminology';
import Blocks from './Blocks';
import Stances from './Stances';
import KarateGojuRyuTerminology from './terminology/KarateGojuRyuTerminology';
import KarateTitles from './terminology/KarateTitles';

const TerminologyPage = () => {
  // Define sections using the imported components
  const sections = {
    'General Terminology': <General />,
    'Blocks': <Blocks />,
    'Stances': <Stances />,
    'Karate Goju Ryu Terminology': <KarateGojuRyuTerminology />,
    'Karate Titles': <KarateTitles />
  };

  // Display section names in more readable format
  const formatSectionName = (key: string) => {
    return key;
  };

  return (
    <MobileLayout>
      {/* Header Image */}
      <div className="relative h-40 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1524684009724-bee13ad8305f?q=80&w=2970&auto=format&fit=crop" 
          alt="Japanese Terminology" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-3xl font-bold">Terminology</h1>
        </div>
      </div>

      <div className="p-4">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {Object.keys(sections).map((section, index) => (
              <AccordionItem key={index} value={`section-${index}`}>
                <AccordionTrigger className="text-lg font-medium">
                  {formatSectionName(section)}
                </AccordionTrigger>
                <AccordionContent>
                  {sections[section as keyof typeof sections]}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </MobileLayout>
  );
};

export default TerminologyPage;
