import React from 'react';
import MobileLayout from '@/components/layout/MobileLayout';
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import GeneralTerminology from './terminology/GeneralTerminology';
import Numbers from './terminology/Numbers';
import TournamentTerminology from './terminology/TournamentTerminology';
import EquipmentAndWeapons from './terminology/EquipmentAndWeapons';
import KarateGojuRyuTerminology from './terminology/KarateGojuRyuTerminology';
import KarateTitles from './terminology/KarateTitles';
import PhrasesAndEtiquette from './terminology/PhrasesAndEtiquette';
import KataTerminology from './terminology/KataTerminology';
import Blocks from './terminology/Blocks';
import Kicks from './terminology/Kicks';
import Punches from './terminology/Punches';
import Stances from './terminology/Stances';
import Strikes from './terminology/Strikes';
import VitalPoints from './terminology/VitalPoints';

const TerminologyPage = () => {
  const sections = [
    { id: 'general-terms', title: 'General Terms', component: <GeneralTerminology /> },
    { id: 'numbers', title: 'Numbers', component: <Numbers /> },
    { id: 'tournament-terms', title: 'Tournament Terminology', component: <TournamentTerminology /> },
    { id: 'equipment-weapons', title: 'Equipment & Weapons', component: <EquipmentAndWeapons /> },
    { id: 'karate-goju-ryu', title: 'Karate & Goju ryu Terminology', component: <KarateGojuRyuTerminology /> },
    { id: 'karate-titles', title: 'Karate Titles', component: <KarateTitles /> },
    { id: 'phrases-etiquette', title: 'Phrases & Etiquette', component: <PhrasesAndEtiquette /> },
    { id: 'kata-terms', title: 'Kata Terminology', component: <KataTerminology /> },
    { id: 'blocks', title: 'Blocks', component: <Blocks /> },
    { id: 'kicks', title: 'Kicks', component: <Kicks /> },
    { id: 'punches', title: 'Punches', component: <Punches /> },
    { id: 'stances', title: 'Stances', component: <Stances /> },
    { id: 'strikes', title: 'Strikes', component: <Strikes /> },
    { id: 'vital-points', title: 'Vital Points', component: <VitalPoints /> }
  ];

  return (
    <MobileLayout hideHeader={true}>
      <div className="relative h-40 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1524684009724-bee13ad8305f?q=80&w=2970&auto=format&fit"
          alt="Japanese Terminology"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 bg-black opacity-50"
        />
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 text-white text-4xl font-bold text-center mt-16"
        >
          Karate Terminology
        </motion.h1>
      </div>
      <div className="container mx-auto px-4 py-8">
        <Accordion type="single" collapsible className="w-full">
          {sections.map((section) => (
            <AccordionItem key={section.id} value={section.id}>
              <AccordionTrigger>{section.title}</AccordionTrigger>
              <AccordionContent>
                {section.component}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </MobileLayout>
  );
};

export default TerminologyPage;