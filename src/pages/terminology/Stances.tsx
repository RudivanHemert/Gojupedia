import React, { useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { mediaItems } from '@/data/media';
import MediaManager from '@/components/media/MediaManager';

const Stances = () => {
  const [selectedMedia, setSelectedMedia] = useState<string | null>(null);

  const stancesMedia = mediaItems.filter(item => 
    item.tags.includes('stances') || item.category === 'terminology'
  );

  return (
    <div className="space-y-6">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="basic-stances">
          <AccordionTrigger>Basic Stances</AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc pl-4 space-y-2">
              <li>Hachiji dachi (八字立) - Natural stance</li>
              <li>Heiko dachi (平行立) - Parallel stance</li>
              <li>Heisoku dachi (閉足立) - Informal attention stance</li>
              <li>Musubi dachi (結び立) - Informal attention stance, feet turned out</li>
              <li>Shizen dachi (自然立) - Natural combative posture</li>
              <li>Shizentai (自然体) - Natural position</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="combative-stances">
          <AccordionTrigger>Combative Stances</AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc pl-4 space-y-2">
              <li>Zenkutsu dachi (前屈立) - Long stance</li>
              <li>Han zenkutsu dachi (半前屈立) - Half forward stance</li>
              <li>Kokutsu dachi (後屈立) - Back stance</li>
              <li>Kiba dachi (騎馬立) - Straddle stance</li>
              <li>Naihanshi dachi (内八字立) - Kiba dachi with knees turned in and down</li>
              <li>Sanchin dachi (三戦立) - Hour glass stance</li>
              <li>Neko ashi dachi (猫足立) - Cat stance</li>
              <li>Sagi ashi dachi (鷺足立) - Propped leg stance</li>
              <li>Tsuri ashi dachi (釣足立) - Crane stance with propped leg</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="special-stances">
          <AccordionTrigger>Special Stances</AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc pl-4 space-y-2">
              <li>Fudo dachi (不動立) - Rooted stance, 'Immovable stance'</li>
              <li>Gankaku dachi (岩鶴立) - One legged stance</li>
              <li>Hangetsu dachi (半月立) - Half moon stance</li>
              <li>Sochin dachi (壮鎮立) - Diagonal straddle leg 'Immovable' stance</li>
              <li>Shiko dachi (四股立) - Box stance</li>
              <li>Reinoji dachi (レイノジ立) - L stance</li>
              <li>Sesan dachi (三戦立) - Side facing straddle stance</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="movement-and-position">
          <AccordionTrigger>Movement and Position</AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc pl-4 space-y-2">
              <li>Hanmi (半身) - Half front facing position</li>
              <li>Hanmi no kamae (半身の構え) - Half forward facing combative posture</li>
              <li>Hidari shizen tai (左自然体) - Left natural position</li>
              <li>Hidari teiji dachi (左丁字立) - Left T stance</li>
              <li>Jodan no kamae (上段の構え) - Upper level combative posture</li>
              <li>Gedan no kamae (下段の構え) - Lower level combative posture</li>
              <li>Tsugi ashi (次足) - Shuffling step</li>
              <li>Yori ashi (寄足) - Dragging step</li>
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

export default Stances;