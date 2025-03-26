import React, { useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { mediaItems } from '@/data/media';
import MediaManager from '@/components/media/MediaManager';
import { motion } from 'framer-motion';

const TournamentTerminology = () => {
  const [selectedMedia, setSelectedMedia] = useState<string | null>(null);

  const tournamentMedia = mediaItems.filter(item => 
    item.tags.includes('tournament') || item.category === 'terminology'
  );

  return (
    <div className="space-y-6">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="scoring">
          <AccordionTrigger>Scoring</AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc pl-4 space-y-2">
              <li>Ippon (一本) - One Point</li>
              <li>Waza Ari (技あり) - Half Point</li>
              <li>Aiuchi (相打ち) - Simultaneous Points</li>
              <li>Torimasen (取りません) - No Point</li>
              <li>Hikiwake (引き分け) - Draw</li>
              <li>Kachi (勝ち) - Victory</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="penalties">
          <AccordionTrigger>Penalties</AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc pl-4 space-y-2">
              <li>Hansoku (反則) - Foul</li>
              <li>Hansoku Chui (反則注意) - Warning with Ippon Penalty</li>
              <li>Keikoku (警告) - Warning with Waza Ari Penalty</li>
              <li>Chui (注意) - Warning</li>
              <li>Shikaku (失格) - Disqualification</li>
              <li>Mubobi (無防備) - Warning for Lack of Self-Defense</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="officials">
          <AccordionTrigger>Tournament Officials</AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc pl-4 space-y-2">
              <li>Shushin (主審) - Referee</li>
              <li>Fukushin (副審) - Judge</li>
              <li>Kansa (監査) - Arbitrator</li>
              <li>Fukushin Shugo (副審集合) - Judges Conference</li>
              <li>Hantei (判定) - Decision</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="commands">
          <AccordionTrigger>Commands</AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc pl-4 space-y-2">
              <li>Hajime (始め) - Begin</li>
              <li>Yame (止め) - Stop</li>
              <li>Tsuzukete (続けて) - Continue</li>
              <li>Moto no Ichi (元の位置) - Return to Starting Position</li>
              <li>Sore Made (それまで) - End of Match</li>
              <li>Atoshi Baraku (後30秒) - 30 Seconds Remaining</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="other-terms">
          <AccordionTrigger>Other Terms</AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc pl-4 space-y-2">
              <li>Shiai (試合) - Match</li>
              <li>Encho-sen (延長戦) - Extension</li>
              <li>Jogai (場外) - Exit from Fighting Area</li>
              <li>Ma-ai ga To (間合いが遠) - Improper Distance</li>
              <li>Ukete Iru (受けている) - Blocked</li>
              <li>Nukete Iru (抜けている) - Out of Target</li>
              <li>Fujubun (不十分) - Insufficient Power</li>
              <li>Yowai (弱い) - Weak Focus</li>
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

export default TournamentTerminology;