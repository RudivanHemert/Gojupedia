import React, { useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { mediaItems } from '@/data/media';
import MediaManager from '@/components/media/MediaManager';
import { motion } from 'framer-motion';

const Numbers = () => {
  const [selectedMedia, setSelectedMedia] = useState<string | null>(null);

  const numbersMedia = mediaItems.filter(item => 
    item.tags.includes('numbers') || item.category === 'terminology'
  );

  return (
    <div className="space-y-6">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="basic-numbers">
          <AccordionTrigger>Basic Numbers</AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc pl-4 space-y-2">
              <li>Ichi (一) - One</li>
              <li>Ni (二) - Two</li>
              <li>San (三) - Three</li>
              <li>Shi/Yon (四) - Four</li>
              <li>Go (五) - Five</li>
              <li>Roku (六) - Six</li>
              <li>Shichi/Nana (七) - Seven</li>
              <li>Hachi (八) - Eight</li>
              <li>Ku (九) - Nine</li>
              <li>Ju (十) - Ten</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="compound-numbers">
          <AccordionTrigger>Compound Numbers</AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc pl-4 space-y-2">
              <li>Ju Ichi (十一) - Eleven</li>
              <li>Ju Ni (十二) - Twelve</li>
              <li>Ju San (十三) - Thirteen</li>
              <li>Ni Ju (二十) - Twenty</li>
              <li>San Ju (三十) - Thirty</li>
              <li>Yon Ju (四十) - Forty</li>
              <li>Go Ju (五十) - Fifty</li>
              <li>Roku Ju (六十) - Sixty</li>
              <li>Nana Ju (七十) - Seventy</li>
              <li>Hachi Ju (八十) - Eighty</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {selectedMedia && (
        <MediaManager
          mediaId={selectedMedia}
          onClose={() => setSelectedMedia(null)}
        />
      )}
    </div>
  );
};

export default Numbers;