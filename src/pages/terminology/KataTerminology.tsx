import React, { useState } from 'react';
import { mediaItems } from '@/data/media';
import MediaManager from '@/components/media/MediaManager';

const KataTerminology = () => {
  const [selectedMedia, setSelectedMedia] = useState<string | null>(null);

  const kataMedia = mediaItems.filter(item => 
    item.tags.includes('kata') || item.category === 'kata'
  );

  return (
    <div className="space-y-6">
      <p className="text-muted-foreground mb-4">Terms related to kata practice, execution, and analysis in karate.</p>
      
      <div className="border border-muted rounded-md mb-2 overflow-hidden">
        <div className="bg-muted/30 px-4 py-3 text-sm font-medium text-secondary-foreground">
          Kata Basics
        </div>
        <div className="px-4 py-2 bg-card">
          <ul className="list-disc pl-4 space-y-2">
            <li>Kata (型) - Form</li>
            <li>Bunkai (分解) - Application Analysis</li>
            <li>Oyo (応用) - Application</li>
            <li>Henka (変化) - Variation</li>
            <li>Kakushi (隠し) - Hidden Technique</li>
            <li>Kime (決め) - Focus</li>
            <li>Zanshin (残心) - Awareness</li>
            <li>Mushin (無心) - Empty Mind</li>
            <li>Kokyu (呼吸) - Breathing</li>
            <li>Kiai (気合) - Spirit Shout</li>
          </ul>
        </div>
      </div>

      <div className="border border-muted rounded-md mb-2 overflow-hidden">
        <div className="bg-muted/30 px-4 py-3 text-sm font-medium text-secondary-foreground">
          Kata Directions
        </div>
        <div className="px-4 py-2 bg-card">
          <ul className="list-disc pl-4 space-y-2">
            <li>Hidari (左) - Left</li>
            <li>Migi (右) - Right</li>
            <li>Mae (前) - Front</li>
            <li>Ushiro (後ろ) - Back</li>
            <li>Yoko (横) - Side</li>
            <li>Naname (斜め) - Diagonal</li>
            <li>Mawari (回り) - Turn</li>
            <li>Kaeshi (返し) - Return</li>
            <li>Hiki (引き) - Pull</li>
            <li>Tsuki (突き) - Thrust</li>
          </ul>
        </div>
      </div>

      <div className="border border-muted rounded-md mb-2 overflow-hidden">
        <div className="bg-muted/30 px-4 py-3 text-sm font-medium text-secondary-foreground">
          Kata Counting
        </div>
        <div className="px-4 py-2 bg-card">
          <ul className="list-disc pl-4 space-y-2">
            <li>Ichi (一) - One</li>
            <li>Ni (二) - Two</li>
            <li>San (三) - Three</li>
            <li>Yon (四) - Four</li>
            <li>Go (五) - Five</li>
            <li>Roku (六) - Six</li>
            <li>Shichi (七) - Seven</li>
            <li>Hachi (八) - Eight</li>
            <li>Ku (九) - Nine</li>
            <li>Ju (十) - Ten</li>
          </ul>
        </div>
      </div>

      {selectedMedia && (
        <MediaManager
          mediaId={selectedMedia}
          onClose={() => setSelectedMedia(null)}
        />
      )}
    </div>
  );
};

export default KataTerminology;