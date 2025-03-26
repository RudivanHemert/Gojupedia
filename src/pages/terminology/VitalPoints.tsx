@ -1,96 +0,0 @@
import React, { useState } from 'react';
import { mediaData } from '@/data/media';
import MediaManager from '@/components/media/MediaManager';
import { Play } from 'lucide-react';

const VitalPoints = () => {
  const [selectedMedia, setSelectedMedia] = useState<{
    type: 'image' | 'video';
    url: string;
    title?: string;
    description?: string;
  } | null>(null);

  const terms = [
    "Bitei: Coccyx",
    "Danchu : Breastbone",
    "Denko : Ribs (slightly below ganka)",
    "Dokusen : Side of neck",
    "Fukuto : Hollow of knee",
    "Ganka : Ribs (point located directly under the nipple)",
    "Hayauchi: Upper back",
    "Hichu : Windpipe",
    "Hijisume : Inside of elbow",
    "Inazuma : Stomach wall (ganka level)",
    "Jinchu : Philtrum (dimple between top lip and nose)",
    "Kakon : Chin",
    "Kassatsu : Spine, middle of back",
    "Kasumi: Temple on the side of the head",
    "Keichu : Back of neck; Base of cerebellum",
    "Kinteki: Groin",
    "Kokotsu : Shinbone",
    "Komekami: Cheekbone",
    "Kori: Area around the toes",
    "Kutaku : Inner wrist",
    "Kyosen : Sternum",
    "Mikazuki : Jaw",
    "Murasame : Clavicle",
    "Myosho : Navel area, abdomen",
    "Naira : Achilles tendon",
    "Seimo : Eye socket",
    "Shomon : Skull",
    "Shuko : Back of hand",
    "Soin : Instep",
    "Soma : Calves",
    "Soto shakutaku : Outer wrist",
    "Suigetsu : Solar plexus",
    "Tanden : Abdomen (the power center of the body)",
    "Tsumasaki : Tips of toes",
    "Ushiro denko : Kidney area (Literally: back ribs)",
    "Ushiro inazuma : Backside",
    "Uto : Bridge of nose",
    "Yako : Inner thigh"
  ];

  const getTermKey = (term: string) => {
    return term.split(':')[0].trim();
  };

  return (
    <>
      <ul className="space-y-2">
        {terms.map((term, index) => {
          const termKey = getTermKey(term);
          const mediaItems = mediaData.vitalPoints[termKey] || [];
          
          return (
            <li key={index} className="text-gray-700 flex items-center justify-between">
              <span>{term}</span>
              {mediaItems.length > 0 && (
                <button
                  onClick={() => setSelectedMedia(mediaItems[0])}
                  className="ml-2 p-1 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <Play size={16} className="text-karate" />
                </button>
              )}
            </li>
          );
        })}
      </ul>

      <MediaManager
        media={selectedMedia || {
          type: 'image',
          url: '',
          title: '',
          description: ''
        }}
        isOpen={!!selectedMedia}
        onClose={() => setSelectedMedia(null)}
      />
    </>
  );
};

export default VitalPoints;