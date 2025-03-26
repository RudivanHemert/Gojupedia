import React, { useState } from 'react';
import { mediaItems } from '@/data/media';
import MediaManager from '@/components/media/MediaManager';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const VitalPoints = () => {
  const [selectedMedia, setSelectedMedia] = useState<string | null>(null);

  const vitalPointsMedia = mediaItems.filter(item => 
    item.tags.includes('vital-points') || item.category === 'vital-points'
  );

  return (
    <div className="space-y-6">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="front-view">
          <AccordionTrigger>Front View</AccordionTrigger>
          <AccordionContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {vitalPointsMedia
                .filter(item => item.tags.includes('front'))
                .map((item) => (
                  <div key={item.id} className="relative group cursor-pointer">
                    <img
                      src={item.url}
                      alt={item.title}
                      className="w-full h-auto rounded-lg"
                      onClick={() => setSelectedMedia(item.id)}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity rounded-lg" />
                  </div>
                ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="back-view">
          <AccordionTrigger>Back View</AccordionTrigger>
          <AccordionContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {vitalPointsMedia
                .filter(item => item.tags.includes('back'))
                .map((item) => (
                  <div key={item.id} className="relative group cursor-pointer">
                    <img
                      src={item.url}
                      alt={item.title}
                      className="w-full h-auto rounded-lg"
                      onClick={() => setSelectedMedia(item.id)}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity rounded-lg" />
                  </div>
                ))}
            </div>
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

export default VitalPoints;