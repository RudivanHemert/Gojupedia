import React, { useState } from 'react';
import { mediaItems } from '@/data/media';
import MediaManager from '@/components/media/MediaManager';

const KarateGojuRyuTerminology = () => {
  const [selectedMedia, setSelectedMedia] = useState<string | null>(null);

  const gojuRyuMedia = mediaItems.filter(item =>
    item.tags.includes('goju-ryu') || item.category === 'terminology'
  );

  return (
    <div className="space-y-6">
      <p className="text-muted-foreground mb-4">Terminology specific to Goju Ryu karate style and organizational structure.</p>
      
      <div className="border border-muted rounded-md mb-2 overflow-hidden">
        <div className="bg-muted/30 px-4 py-3 text-sm font-medium text-secondary-foreground">
          Basic Terms
        </div>
        <div className="px-4 py-2 bg-card">
          <ul className="list-disc pl-4 space-y-2">
            <li>Karate (空手) - Empty Hand</li>
            <li>Goju-Ryu (剛柔流) - Hard-Soft Style</li>
            <li>Dojo (道場) - Training Hall</li>
            <li>Sensei (先生) - Teacher</li>
            <li>Senpai (先輩) - Senior Student</li>
            <li>Kohai (後輩) - Junior Student</li>
          </ul>
        </div>
      </div>

      <div className="border border-muted rounded-md mb-2 overflow-hidden">
        <div className="bg-muted/30 px-4 py-3 text-sm font-medium text-secondary-foreground">
          Belt Ranks
        </div>
        <div className="px-4 py-2 bg-card">
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

export default KarateGojuRyuTerminology;