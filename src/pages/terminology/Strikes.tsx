import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const Strikes = () => {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="basic-strikes">
        <AccordionTrigger>Basic Strikes</AccordionTrigger>
        <AccordionContent>
          <ul className="list-disc pl-4 space-y-2">
            <li>Shuto Uchi (手刀打ち) - Knife Hand Strike</li>
            <li>Haito Uchi (背刀打ち) - Ridge Hand Strike</li>
            <li>Haishu Uchi (背手打ち) - Back Hand Strike</li>
            <li>Teisho Uchi (底掌打ち) - Palm Heel Strike</li>
            <li>Kakuto Uchi (鶴頭打ち) - Bent Wrist Strike</li>
            <li>Hiji Ate (肘当て) - Elbow Strike</li>
            <li>Empi Uchi (猿臂打ち) - Elbow Strike</li>
            <li>Hiraken Uchi (平拳打ち) - Flat Fist Strike</li>
            <li>Koken Uchi (虎拳打ち) - Tiger Mouth Strike</li>
            <li>Washide Uchi (鷲手打ち) - Eagle Hand Strike</li>
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default Strikes;