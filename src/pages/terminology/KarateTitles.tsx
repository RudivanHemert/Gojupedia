import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const KarateTitles = () => {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Karate Titles and Ranks</AccordionTrigger>
        <AccordionContent>
          <ul className="list-disc pl-4 space-y-2">
            <li>Shodan (初段) - First Degree Black Belt</li>
            <li>Nidan (二段) - Second Degree Black Belt</li>
            <li>Sandan (三段) - Third Degree Black Belt</li>
            <li>Yondan (四段) - Fourth Degree Black Belt</li>
            <li>Godan (五段) - Fifth Degree Black Belt</li>
            <li>Rokudan (六段) - Sixth Degree Black Belt</li>
            <li>Shichidan (七段) - Seventh Degree Black Belt</li>
            <li>Hachidan (八段) - Eighth Degree Black Belt</li>
            <li>Kudan (九段) - Ninth Degree Black Belt</li>
            <li>Judan (十段) - Tenth Degree Black Belt</li>
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default KarateTitles; 