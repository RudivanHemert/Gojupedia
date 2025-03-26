import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { motion, AnimatePresence } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface VitalPoint {
  id: string;
  name: string;
  japanese: string;
  number?: number;
  x: number;
  y: number;
  view: 'front' | 'back';
}

const vitalPointsData: VitalPoint[] = [
  // Front view vital points
  {
    id: 'shomon',
    name: 'Skull',
    japanese: 'shomon',
    number: 1,
    x: 45,
    y: 10,
    view: 'front'
  },
  {
    id: 'kasumi',
    name: 'Temple',
    japanese: 'kasumi',
    number: 2,
    x: 25,
    y: 15,
    view: 'front'
  },
  {
    id: 'komekami',
    name: 'Cheekbone',
    japanese: 'komekami',
    number: 3,
    x: 30,
    y: 20,
    view: 'front'
  },
  {
    id: 'jinchu',
    name: 'Philtrum',
    japanese: 'jinchu',
    number: 4,
    x: 35,
    y: 25,
    view: 'front'
  },
  {
    id: 'kakon',
    name: 'Chin',
    japanese: 'kakon',
    number: 5,
    x: 35,
    y: 30,
    view: 'front'
  },
  {
    id: 'murasame',
    name: 'Clavicle',
    japanese: 'murasame',
    number: 6,
    x: 40,
    y: 35,
    view: 'front'
  },
  {
    id: 'hichu',
    name: 'Windpipe',
    japanese: 'hichu',
    number: 7,
    x: 45,
    y: 37,
    view: 'front'
  },
  {
    id: 'danchu',
    name: 'Breastbone',
    japanese: 'danchu',
    number: 8,
    x: 45,
    y: 42,
    view: 'front'
  },
  {
    id: 'ude-narashi',
    name: 'Upper arm',
    japanese: 'ude-narashi',
    number: 9,
    x: 30,
    y: 45,
    view: 'front'
  },
  {
    id: 'ganka',
    name: 'Ribs under nipple',
    japanese: 'ganka',
    number: 10,
    x: 45,
    y: 48,
    view: 'front'
  },
  {
    id: 'suigetsu',
    name: 'Solar Plexus',
    japanese: 'suigetsu',
    number: 11,
    x: 45,
    y: 52,
    view: 'front'
  },
  {
    id: 'denko',
    name: 'Ribs',
    japanese: 'denko',
    number: 12,
    x: 35,
    y: 55,
    view: 'front'
  },
  {
    id: 'soto-shakutaku',
    name: 'Outer wrist',
    japanese: 'soto shakutaku',
    number: 13,
    x: 25,
    y: 60,
    view: 'front'
  },
  {
    id: 'shuko',
    name: 'Back of hand',
    japanese: 'shuko',
    number: 14,
    x: 20,
    y: 65,
    view: 'front'
  },
  {
    id: 'kokotsu',
    name: 'Shinbone',
    japanese: 'kokotsu',
    number: 15,
    x: 40,
    y: 85,
    view: 'front'
  },
  {
    id: 'soin',
    name: 'Instep',
    japanese: 'soin',
    number: 16,
    x: 45,
    y: 95,
    view: 'front'
  },
  {
    id: 'kori',
    name: 'Area around toes',
    japanese: 'kori',
    number: 17,
    x: 45,
    y: 98,
    view: 'front'
  },
  // Right side points
  {
    id: 'uto',
    name: 'Bridge of nose',
    japanese: 'uto',
    number: 18,
    x: 65,
    y: 15,
    view: 'front'
  },
  {
    id: 'kasumi-right',
    name: 'Temple',
    japanese: 'kasumi',
    number: 19,
    x: 70,
    y: 20,
    view: 'front'
  },
  {
    id: 'seimo',
    name: 'Eye socket',
    japanese: 'seimo',
    number: 20,
    x: 75,
    y: 25,
    view: 'front'
  },
  {
    id: 'mikazuki',
    name: 'Jaw',
    japanese: 'mikazuki',
    number: 21,
    x: 70,
    y: 30,
    view: 'front'
  },
  {
    id: 'kyosen',
    name: 'Sternum',
    japanese: 'kyosen',
    number: 22,
    x: 65,
    y: 40,
    view: 'front'
  },
  {
    id: 'uchi-shakutaku',
    name: 'Inner wrist',
    japanese: 'uchi shakutaku',
    number: 23,
    x: 80,
    y: 45,
    view: 'front'
  },
  {
    id: 'ganka-right',
    name: 'Ribs',
    japanese: 'ganka',
    number: 24,
    x: 75,
    y: 50,
    view: 'front'
  },
  {
    id: 'hijisume',
    name: 'Inside of elbow',
    japanese: 'hijisume',
    number: 25,
    x: 80,
    y: 55,
    view: 'front'
  },
  {
    id: 'inazuma',
    name: 'Stomach wall',
    japanese: 'inazuma',
    number: 26,
    x: 70,
    y: 60,
    view: 'front'
  },
  {
    id: 'myosho',
    name: 'Navel area',
    japanese: 'myosho',
    number: 27,
    x: 65,
    y: 65,
    view: 'front'
  },
  {
    id: 'tanden',
    name: 'Power center',
    japanese: 'tanden',
    number: 28,
    x: 65,
    y: 70,
    view: 'front'
  },
  {
    id: 'kinteki',
    name: 'Groin',
    japanese: 'kinteki',
    number: 29,
    x: 55,
    y: 75,
    view: 'front'
  },
  {
    id: 'yako',
    name: 'Inner thigh',
    japanese: 'yako',
    number: 30,
    x: 60,
    y: 80,
    view: 'front'
  },
  {
    id: 'fukuto',
    name: 'Hollow of knee',
    japanese: 'fukuto',
    number: 31,
    x: 55,
    y: 85,
    view: 'front'
  },
  {
    id: 'naira',
    name: 'Achilles tendon',
    japanese: 'naira',
    number: 32,
    x: 60,
    y: 90,
    view: 'front'
  },
  {
    id: 'kori-right',
    name: 'Area around toes',
    japanese: 'kori',
    number: 33,
    x: 60,
    y: 98,
    view: 'front'
  },
  // Back view vital points
  {
    id: 'shomon-back',
    name: 'Skull',
    japanese: 'shomon',
    x: 50,
    y: 10,
    view: 'back'
  },
  {
    id: 'dokusen',
    name: 'Side of neck',
    japanese: 'dokusen',
    x: 50,
    y: 20,
    view: 'back'
  },
  {
    id: 'keichu',
    name: 'Back of neck',
    japanese: 'keichu',
    x: 50,
    y: 25,
    view: 'back'
  },
  {
    id: 'hayauchi',
    name: 'Upper back',
    japanese: 'hayauchi',
    x: 50,
    y: 30,
    view: 'back'
  },
  {
    id: 'kassatsu',
    name: 'Spine, middle of back',
    japanese: 'kassatsu',
    x: 50,
    y: 40,
    view: 'back'
  },
  {
    id: 'ude-narashi-back',
    name: 'Upper arm',
    japanese: 'ude-narashi',
    x: 35,
    y: 45,
    view: 'back'
  },
  {
    id: 'wakikage',
    name: 'Under armpit',
    japanese: 'wakikage',
    x: 35,
    y: 40,
    view: 'back'
  },
  {
    id: 'ushiro-denko',
    name: 'Kidney area',
    japanese: 'ushiro denko',
    x: 35,
    y: 50,
    view: 'back'
  },
  {
    id: 'bitei',
    name: 'Coccyx',
    japanese: 'bitei',
    x: 50,
    y: 60,
    view: 'back'
  },
  {
    id: 'ein',
    name: 'Lower back',
    japanese: 'ein',
    x: 50,
    y: 65,
    view: 'back'
  },
  {
    id: 'ushiro-inazuma',
    name: 'Backside',
    japanese: 'ushiro inazuma',
    x: 50,
    y: 70,
    view: 'back'
  },
  {
    id: 'soma',
    name: 'Calves',
    japanese: 'soma',
    x: 45,
    y: 80,
    view: 'back'
  }
];

const InteractiveVitalPoints = () => {
  const [showLabels, setShowLabels] = useState(true);
  const [selectedPoint, setSelectedPoint] = useState<VitalPoint | null>(null);
  const [activeView, setActiveView] = useState<'front' | 'back'>('front');

  const filteredPoints = vitalPointsData.filter(point => point.view === activeView);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Switch
            id="show-labels"
            checked={showLabels}
            onCheckedChange={setShowLabels}
          />
          <Label htmlFor="show-labels">Show Labels</Label>
        </div>
        <Button
          variant="outline"
          onClick={() => setSelectedPoint(null)}
          disabled={!selectedPoint}
        >
          Close Details
        </Button>
      </div>

      <Tabs value={activeView} onValueChange={(value) => setActiveView(value as 'front' | 'back')}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="front">Front View</TabsTrigger>
          <TabsTrigger value="back">Back View</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="relative">
        <img
          src={`/Images/Vital-points-${activeView}.jpg`}
          alt={`Vital Points - ${activeView.charAt(0).toUpperCase() + activeView.slice(1)} View`}
          className="w-full h-auto rounded-lg shadow-lg"
          onError={(e) => {
            console.error(`Failed to load image: ${e.currentTarget.src}`);
            e.currentTarget.src = '/placeholder.svg';
          }}
        />
        
        <AnimatePresence>
          {showLabels && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0"
            >
              {filteredPoints.map((point) => (
                <motion.div
                  key={point.id}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="absolute group"
                  style={{
                    left: `${point.x}%`,
                    top: `${point.y}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                >
                  <div className="relative">
                    <div className="absolute w-2 h-2 bg-red-500 rounded-full -translate-x-1/2 -translate-y-1/2" />
                    <Button
                      variant="ghost"
                      size="sm"
                      className="bg-white/80 hover:bg-white text-black opacity-0 group-hover:opacity-100 transition-opacity text-xs px-2 py-1 h-auto min-w-0"
                      onClick={() => setSelectedPoint(point)}
                    >
                      {point.number ? `${point.number}. ${point.japanese}` : point.japanese}
                    </Button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {selectedPoint && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="bg-white p-4 rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-bold mb-2">
              {selectedPoint.number ? `${selectedPoint.number}. ` : ''}{selectedPoint.name}
            </h3>
            <p className="text-lg text-gray-600 mb-2">{selectedPoint.japanese}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default InteractiveVitalPoints;
