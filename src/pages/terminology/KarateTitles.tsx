import React, { useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { mediaItems } from '@/data/media';
import MediaManager from '@/components/media/MediaManager';

const KarateTitles = () => {
  const [selectedMedia, setSelectedMedia] = useState<string | null>(null);

  const titlesMedia = mediaItems.filter(item => 
    item.tags.includes('titles') || item.category === 'terminology'
  );

  return (
    <div className="space-y-6">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="instructor-titles">
          <AccordionTrigger>Instructor Titles</AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc pl-4 space-y-2">
              <li>Hanshi (範士) - Head Person of an Organization</li>
              <li>Kyoshi (教士) - Master Instructor</li>
              <li>Renshi (錬士) - Polished Instructor</li>
              <li>Sensei (先生) - Teacher</li>
              <li>Shihan (師範) - Master Instructor, Teacher of Teachers</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="student-titles">
          <AccordionTrigger>Student Titles</AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc pl-4 space-y-2">
              <li>Karateka (空手家) - Karate Practitioner</li>
              <li>Senpai (先輩) - Senior Student</li>
              <li>Kohai (後輩) - Junior Student</li>
              <li>Yudansha (有段者) - Black Belt Holder</li>
              <li>Mudansha (無段者) - Student Without Black Belt</li>
              <li>Uchi Deshi (内弟子) - Live-in Student</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="other-titles">
          <AccordionTrigger>Other Titles</AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc pl-4 space-y-2">
              <li>Bushi (武士) - Great Martial Artist</li>
              <li>Shushin (主審) - Referee</li>
              <li>Fukushin (副審) - Assistant Referee</li>
              <li>Kansa (監査) - Judge</li>
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

export default KarateTitles;