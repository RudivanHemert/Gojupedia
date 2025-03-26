import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const Blocks = () => {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="basic-blocks">
        <AccordionTrigger>Basic Blocks</AccordionTrigger>
        <AccordionContent>
          <ul className="list-disc pl-4 space-y-2">
            <li>Age Uke (上げ受け) - Rising Block</li>
            <li>Gedan Barai (下段払い) - Downward Block</li>
            <li>Soto Uke (外受け) - Outside Block</li>
            <li>Uchi Uke (内受け) - Inside Block</li>
            <li>Shuto Uke (手刀受け) - Knife Hand Block</li>
            <li>Empi Uke (肘受け) - Elbow Block</li>
            <li>Kosa Uke (交差受け) - Cross Block</li>
            <li>Juji Uke (十字受け) - X Block</li>
            <li>Haiwan Uke (背腕受け) - Back Arm Block</li>
            <li>Osae Uke (押さえ受け) - Pressing Block</li>
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default Blocks;