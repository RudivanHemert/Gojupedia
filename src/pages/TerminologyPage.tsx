import React, { useEffect, useState } from 'react';
import MobileLayout from '@/components/layout/MobileLayout';
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const TerminologyPage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/terminology.json')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  if (!data) {
    return <p>Loading...</p>;
  }

  const sections = [
    { id: 'karate-goju-ryu', title: 'Karate & Goju ryu Terminology', terms: data.karateGojuRyuTerminology },
    { id: 'karate-titles', title: 'Karate Titles', terms: data.karateTitles },
    { id: 'stances', title: 'Stances', terms: data.stances },
    { id: 'blocks', title: 'Blocks', terms: data.blocks },
    { id: 'general-terms', title: 'General Terms', terms: data.generalTerms },
	{ id: 'Equipment-and-Weapons', title: 'Equipment and Weapons', terms: data.EquipmentandWeapons },
	{ id: 'Kata', title: 'Kata', terms: data.Kata },
	{ id: 'Kicks', title: 'Kicks', terms: data.Kicks },
	{ id: 'Numbers', title: 'Numbers', terms: data.Numbers },
	{ id: 'Punches', title: 'Punches', terms: data.Punches },
	{ id: 'Phrases-and-Etiquette', title: 'Phrases and Etiquette', terms: data.PhrasesandEtiquette },
	{ id: 'Strikes', title: 'Strikes', terms: data.Strikes },
	{ id: 'Tournament-Terminology', title: 'Tournament Terminology', terms: data.TournamentTerminology },
	{ id: 'Vital-Points', title: 'Vital Points', terms: data.Vitalpoints },
    // Add other sections similarly
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
          className="bg-white rounded-lg shadow"
        >
          <Accordion type="single" collapsible className="w-full">
            {sections.map((section) => (
              <AccordionItem key={section.id} value={section.id}>
                <AccordionTrigger className="px-4 py-3 hover:bg-gray-50">
                  {section.title}
                </AccordionTrigger>
                <AccordionContent className="px-4 py-2 bg-gray-50">
                  <ul className="space-y-2">
                    {section.terms.map((term, index) => (
                      <li key={index} className="text-gray-700">
                        {term}
                      </li>
                    ))}
                  </ul>
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