import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const GeneralTerminology = () => {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>General Terms</AccordionTrigger>
        <AccordionContent>
          <ul className="list-disc pl-4 space-y-2">
            <li>Kihon (基本) - Basics</li>
            <li>Kata (型) - Form</li>
            <li>Kumite (組手) - Sparring</li>
            <li>Bunkai (分解) - Application</li>
            <li>Gi (着) - Training Uniform</li>
            <li>Obi (帯) - Belt</li>
            <li>Mokuso (黙想) - Meditation</li>
            <li>Rei (礼) - Bow</li>
            <li>Hajime (始め) - Begin</li>
            <li>Yame (止め) - Stop</li>
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default GeneralTerminology; 