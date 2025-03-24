
import React from 'react';
import MobileLayout from '@/components/layout/MobileLayout';
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const TerminologyPage = () => {
  const sections = [
    { id: 'basics', title: 'Basiskennis en fundamentele begrippen', terms: [] },
    { id: 'organization', title: 'Organisatie en etiquette', terms: [] },
    { id: 'training', title: 'Training', terms: [] },
    { id: 'hojo-undo', title: 'Hojo Undo', terms: [] },
    { id: 'dachi-waza', title: 'Standen (Dachi Waza)', terms: [] },
    { id: 'gi-jutsu', title: 'Verplaatsingen (Gi Jutsu) Voetenwerk (Unsoku ho)', terms: [] },
    { id: 'kamae', title: 'Houdingen (Kamae)', terms: [] },
    { id: 'anatomical', title: 'Anatomische wapens', terms: [] },
    { id: 'uke-waza', title: 'Afweertechnieken (Uke Waza)', terms: [] },
    { id: 'striking', title: 'Stoot- (Zuki of Tsuki) en Slagtechnieken (Uchi Waza)', terms: [] },
    { id: 'kicking', title: 'Traptechnieken (Geri of Keri Waza)', terms: [] },
    { id: 'grappling', title: 'Worstel-technieken voor korte-afstandsgevecht (Tuite of Gyakute Waza)', terms: [] },
    { id: 'kumite', title: 'Gevechtstoepassingen (Kumite)', terms: [] },
    { id: 'kata', title: 'Kata\'s (Kata)', terms: [] },
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
                  {section.terms.length > 0 ? (
                    <ul className="space-y-2">
                      {section.terms.map((term, index) => (
                        <li key={index} className="text-gray-700">
                          {term}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-500 italic py-2">
                      Terms will be added soon...
                    </p>
                  )}
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
