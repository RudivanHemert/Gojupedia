import React, { useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { mediaItems } from '@/data/media';
import MediaManager from '@/components/media/MediaManager';

const KarateGojuRyuTerminology = () => {
  const [selectedMedia, setSelectedMedia] = useState<string | null>(null);

  const gojuRyuMedia = mediaItems.filter(item => 
    item.tags.includes('goju-ryu') || item.category === 'terminology'
  );

  return (
    <div className="space-y-6">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="basic-terms">
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

        <AccordionItem value="belt-ranks">
          <AccordionTrigger>Belt Ranks</AccordionTrigger>
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

      {selectedMedia && (
        <MediaManager
          mediaId={selectedMedia}
          onClose={() => setSelectedMedia(null)}
        />
      )}
    </div>
  );
};

export default KarateGojuRyuTerminology;