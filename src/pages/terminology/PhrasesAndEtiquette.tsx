import React, { useState } from 'react';
import { mediaItems } from '@/data/media';
import MediaManager from '@/components/media/MediaManager';

const PhrasesAndEtiquette = () => {
  const [selectedMedia, setSelectedMedia] = useState<string | null>(null);

  const phrasesMedia = mediaItems.filter(item => 
    item.tags.includes('phrases') || item.category === 'terminology'
  );

  return (
    <div className="space-y-6">
      <p className="text-muted-foreground mb-4">Common Japanese phrases, greetings, and etiquette used in karate training and interactions.</p>
      
      <div className="border border-muted rounded-md mb-2 overflow-hidden">
        <div className="bg-muted/30 px-4 py-3 text-sm font-medium text-secondary-foreground">
          Greetings
        </div>
        <div className="px-4 py-2 bg-card">
          <ul className="list-disc pl-4 space-y-2">
            <li>Osu (押忍) - Versatile Greeting</li>
            <li>Ohayo Gozaimasu (おはようございます) - Good Morning</li>
            <li>Konnichi wa (こんにちは) - Good Afternoon</li>
            <li>Konban wa (こんばんは) - Good Evening</li>
            <li>Oyasumi nasai (おやすみなさい) - Good Night</li>
            <li>Sayonara (さようなら) - Goodbye</li>
          </ul>
        </div>
      </div>

      <div className="border border-muted rounded-md mb-2 overflow-hidden">
        <div className="bg-muted/30 px-4 py-3 text-sm font-medium text-secondary-foreground">
          Respectful Phrases
        </div>
        <div className="px-4 py-2 bg-card">
          <ul className="list-disc pl-4 space-y-2">
            <li>Onegai shimasu (お願いします) - Please Teach Me</li>
            <li>Domo arigato gozaimasu (どうもありがとうございます) - Thank You Very Much</li>
            <li>Gokurosama (ご苦労様) - Thank You for Your Efforts</li>
            <li>Gokurosama deshita (ご苦労様でした) - Thank You for Your Efforts (Past Tense)</li>
            <li>Mo ichi do (もう一度) - One More Time</li>
            <li>Hai (はい) - Yes</li>
            <li>Iie (いいえ) - No</li>
          </ul>
        </div>
      </div>

      <div className="border border-muted rounded-md mb-2 overflow-hidden">
        <div className="bg-muted/30 px-4 py-3 text-sm font-medium text-secondary-foreground">
          Philosophical Terms
        </div>
        <div className="px-4 py-2 bg-card">
          <ul className="list-disc pl-4 space-y-2">
            <li>Gayu no hito (強勇の人) - One Who Possesses Strong Spirit</li>
            <li>Ho go ju donto (呼吸道統) - The Way of Hard and Soft Breathing</li>
            <li>Bushido (武士道) - Way of the Warrior</li>
            <li>Dojo kun (道場訓) - Training Hall Rules</li>
            <li>Karate ni sente nashi (空手に先手なし) - There is no first attack in karate</li>
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

export default PhrasesAndEtiquette;