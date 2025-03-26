import React, { useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { mediaItems } from '@/data/media';
import MediaManager from '@/components/media/MediaManager';

const Punches = () => {
  const [selectedMedia, setSelectedMedia] = useState<string | null>(null);

  const punchesMedia = mediaItems.filter(item => 
    item.tags.includes('punches') || item.category === 'terminology'
  );

  return (
    <div className="space-y-6">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="basic-punches">
          <AccordionTrigger>Basic Punches</AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc pl-4 space-y-2">
              <li>Seiken Tsuki (正拳突き) - Forefist Punch</li>
              <li>Gyaku Tsuki (逆突き) - Reverse Punch</li>
              <li>Oi Tsuki (追い突き) - Lunge Punch</li>
              <li>Kizami Tsuki (刻み突き) - Jab Punch</li>
              <li>Morote Tsuki (諸手突き) - Double Punch</li>
              <li>Yama Tsuki (山突き) - Mountain Punch</li>
              <li>Awase Tsuki (合わせ突き) - U Punch</li>
              <li>Hasami Tsuki (はさみ突き) - Scissors Punch</li>
              <li>Heiko Tsuki (平行突き) - Parallel Punch</li>
              <li>Kage Tsuki (影突き) - Hook Punch</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="special-punches">
          <AccordionTrigger>Special Punches</AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc pl-4 space-y-2">
              <li>Tate Tsuki (立て突き) - Vertical Punch</li>
              <li>Ura Tsuki (裏突き) - Back Fist Punch</li>
              <li>Nukite (貫手) - Spear Hand</li>
              <li>Ippon Ken (一本拳) - One Knuckle Punch</li>
              <li>Nakadaka Ippon Ken (中高一本拳) - Middle Finger One Knuckle Punch</li>
              <li>Hiraken (平拳) - Flat Fist</li>
              <li>Washide (鷲手) - Eagle Hand</li>
              <li>Koken (虎拳) - Tiger Mouth</li>
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

export default Punches;