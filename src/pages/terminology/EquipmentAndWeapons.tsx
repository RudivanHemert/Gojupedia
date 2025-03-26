import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const EquipmentAndWeapons = () => {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="equipment-weapons">
        <AccordionTrigger>Equipment & Weapons</AccordionTrigger>
        <AccordionContent>
          <ul className="list-disc pl-4 space-y-2">
            <li>Bo (棒) - Wooden Staff (6 feet long)</li>
            <li>Jo (杖) - Wooden Staff (4 feet long)</li>
            <li>Sai (釵) - Three-Pronged Knife</li>
            <li>Tonfa (トンファー) - Side-Handle Baton</li>
            <li>Makiwara (巻藁) - Striking Board</li>
            <li>Nigiri Game (握り甕) - Training Jars</li>
            <li>Chi Ishi (地石) - Weighted Stone</li>
            <li>Ishi Sashi (石差) - Stone Padlocks</li>
            <li>Kongo Ken (金剛拳) - Iron Ring</li>
            <li>Tetsu Wa (鉄輪) - Iron Rings</li>
            <li>Tan (担) - Barbells</li>
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default EquipmentAndWeapons;