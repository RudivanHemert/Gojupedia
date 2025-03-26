import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const GeneralTerminology = () => {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="general-terms">
        <AccordionTrigger>General Terms</AccordionTrigger>
        <AccordionContent>
          <ul className="list-disc pl-4 space-y-2">
            <li>Karate (空手) - Empty Hand</li>
            <li>Karate-Do (空手道) - The Way of Karate</li>
            <li>Dojo (道場) - Training Hall</li>
            <li>Gi (着) - Training Uniform</li>
            <li>Obi (帯) - Belt</li>
            <li>Kata (型) - Forms</li>
            <li>Kumite (組手) - Sparring</li>
            <li>Kihon (基本) - Basic Techniques</li>
            <li>Bunkai (分解) - Application Analysis</li>
            <li>Mokuso (黙想) - Meditation</li>
            <li>Rei (礼) - Bow</li>
            <li>Hajime (始め) - Begin</li>
            <li>Yame (止め) - Stop</li>
            <li>Yoi (用意) - Ready</li>
            <li>Mawatte (回って) - Turn Around</li>
            <li>Shugo (集合) - Line Up</li>
            <li>Ki o tsuke (気をつけ) - Attention</li>
            <li>Kiai (気合) - Spirit Shout</li>
            <li>Zanshin (残心) - Awareness</li>
            <li>Tai Sabaki (体捌き) - Body Movement</li>
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default GeneralTerminology;