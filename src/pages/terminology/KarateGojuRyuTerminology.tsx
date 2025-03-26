import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const KarateGojuRyuTerminology = () => {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Basic Terms</AccordionTrigger>
        <AccordionContent>
          <ul className="list-disc pl-4 space-y-2">
            <li>Karate (空手) - Empty Hand</li>
            <li>Goju-Ryu (剛柔流) - Hard-Soft Style</li>
            <li>Dojo (道場) - Training Hall</li>
            <li>Sensei (先生) - Teacher</li>
            <li>Senpai (先輩) - Senior Student</li>
            <li>Kohai (後輩) - Junior Student</li>
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default KarateGojuRyuTerminology; 