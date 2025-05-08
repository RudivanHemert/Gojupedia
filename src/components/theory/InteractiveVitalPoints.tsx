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
    x: 7,
    y: 9,
    view: 'front'
  },
  {
    id: 'kasumi',
    name: 'Temple',
    japanese: 'kasumi',
    number: 2,
    x: 6,
    y: 14,
    view: 'front'
  },
  {
    id: 'komekami',
    name: 'Cheekbone',
    japanese: 'komekami',
    number: 3,
    x: 7,
    y: 17,
    view: 'front'
  },
  {
    id: 'jinchu',
    name: 'Philtrum',
    japanese: 'jinchu',
    number: 4,
    x: 25,
    y: 19,
    view: 'front'
  },
  {
    id: 'kakon',
    name: 'Chin',
    japanese: 'kakon',
    number: 5,
    x: 8,
    y: 24,
    view: 'front'
  },
  {
    id: 'murasame',
    name: 'Clavicle',
    japanese: 'murasame',
    number: 6,
    x: 20,
    y: 26,
    view: 'front'
  },
  {
    id: 'hichu',
    name: 'Windpipe',
    japanese: 'hichu',
    number: 7,
    x: 7,
    y: 28,
    view: 'front'
  },
  {
    id: 'danchu',
    name: 'Breastbone',
    japanese: 'danchu',
    number: 8,
    x: 7,
    y: 32,
    view: 'front'
  },
  {
    id: 'ude-narashi',
    name: 'Upper arm',
    japanese: 'ude-narashi',
    number: 9,
    x: 10,
    y: 34,
    view: 'front'
  },
  {
    id: 'ganka',
    name: 'Ribs under nipple',
    japanese: 'ganka',
    number: 10,
    x: 9,
    y: 37,
    view: 'front'
  },
  {
    id: 'suigetsu',
    name: 'Solar Plexus',
    japanese: 'suigetsu',
    number: 11,
    x: 11,
    y: 40,
    view: 'front'
  },
  {
    id: 'denko',
    name: 'Ribs',
    japanese: 'denko',
    number: 12,
    x: 9,
    y: 43,
    view: 'front'
  },
  {
    id: 'soto-shakutaku',
    name: 'Outer wrist',
    japanese: 'soto shakutaku',
    number: 13,
    x: 6,
    y: 50,
    view: 'front'
  },
  {
    id: 'shuko',
    name: 'Back of hand',
    japanese: 'shuko',
    number: 14,
    x: 9,
    y: 54,
    view: 'front'
  },
  {
    id: 'kokotsu',
    name: 'Shinbone',
    japanese: 'kokotsu',
    number: 15,
    x: 11,
    y: 73,
    view: 'front'
  },
  {
    id: 'soin',
    name: 'Instep',
    japanese: 'soin',
    number: 16,
    x: 9,
    y: 88,
    view: 'front'
  },
  {
    id: 'kori',
    name: 'Area around toes',
    japanese: 'kori',
    number: 17,
    x: 9,
    y: 91,
    view: 'front'
  },
  // Right side points
  {
    id: 'uto',
    name: 'Bridge of nose',
    japanese: 'uto',
    number: 18,
    x: 80,
    y: 11,
    view: 'front'
  },
  {
    id: 'kasumi-right',
    name: 'Temple',
    japanese: 'kasumi',
    number: 19,
    x: 81,
    y: 13,
    view: 'front'
  },
  {
    id: 'seimo',
    name: 'Eye socket',
    japanese: 'seimo',
    number: 20,
    x: 82,
    y: 16,
    view: 'front'
  },
  {
    id: 'mikazuki',
    name: 'Jaw',
    japanese: 'mikazuki',
    number: 21,
    x: 50,
    y: 19,
    view: 'front'
  },
  {
    id: 'kyosen',
    name: 'Sternum',
    japanese: 'kyosen',
    number: 22,
    x: 60,
    y: 29,
    view: 'front'
  },
  {
    id: 'uchi-shakutaku',
    name: 'Inner wrist',
    japanese: 'uchi shakutaku',
    number: 23,
    x: 77,
    y: 29,
    view: 'front'
  },
  {
    id: 'ganka-right',
    name: 'Ribs',
    japanese: 'ganka',
    number: 24,
    x: 82,
    y: 33,
    view: 'front'
  },
  {
    id: 'hijisume',
    name: 'Inside of elbow',
    japanese: 'hijitsume',
    number: 25,
    x: 79,
    y: 38,
    view: 'front'
  },
  {
    id: 'inazuma',
    name: 'Stomach wall',
    japanese: 'inazuma',
    number: 26,
    x: 79,
    y: 44,
    view: 'front'
  },
  {
    id: 'myosho',
    name: 'Navel area',
    japanese: 'myosho',
    number: 27,
    x: 80,
    y: 47,
    view: 'front'
  },
  {
    id: 'tanden',
    name: 'Power center',
    japanese: 'tanden',
    number: 28,
    x: 81,
    y: 49,
    view: 'front'
  },
  {
    id: 'kinteki',
    name: 'Groin',
    japanese: 'kinteki',
    number: 29,
    x: 81,
    y: 52,
    view: 'front'
  },
  {
    id: 'yako',
    name: 'Inner thigh',
    japanese: 'yako',
    number: 30,
    x: 81,
    y: 60,
    view: 'front'
  },
  {
    id: 'fukuto',
    name: 'Hollow of knee',
    japanese: 'fukuto',
    number: 31,
    x: 82,
    y: 70,
    view: 'front'
  },
  {
    id: 'naira',
    name: 'Achilles tendon',
    japanese: 'naira',
    number: 32,
    x: 84,
    y: 85,
    view: 'front'
  },
  {
    id: 'kori-right',
    name: 'Area around toes',
    japanese: 'kori',
    number: 33,
    x: 84,
    y: 93,
    view: 'front'
  },
  // Back view vital points
  {
    id: 'shuko-back',
    name: 'Back of hand',
    japanese: 'shuko',
    number: 1,
    x: 10,
    y: 29,
    view: 'back'
  },
  {
    id: 'soto-shakutaku-back',
    name: 'Outer wrist',
    japanese: 'soto shakutaku',
    number: 2,
    x: 16,
    y: 32,
    view: 'back'
  },
  {
    id: 'ude-narashi-back-1',
    name: 'Upper arm',
    japanese: 'ude-narashi',
    number: 3,
    x: 16,
    y: 34,
    view: 'back'
  },
  {
    id: 'wakikage',
    name: 'Under armpit',
    japanese: 'wakigake',
    number: 4,
    x: 16,
    y: 36,
    view: 'back'
  },
  {
    id: 'ushiro-denko-1',
    name: 'Kidney area',
    japanese: 'ushiro denko',
    number: 5,
    x: 17,
    y: 39,
    view: 'back'
  },
  {
    id: 'ushiro-denko-2',
    name: 'Kidney area',
    japanese: 'ushiro denko',
    number: 6,
    x: 18,
    y: 46,
    view: 'back'
  },
  {
    id: 'bitei',
    name: 'Coccyx',
    japanese: 'bitei',
    number: 7,
    x: 10,
    y: 50,
    view: 'back'
  },
  {
    id: 'ein',
    name: 'Lower back',
    japanese: 'ein',
    number: 8,
    x: 10,
    y: 52,
    view: 'back'
  },
  {
    id: 'ushiro-inazuma',
    name: 'Backside',
    japanese: 'ushiro inazuma',
    number: 9,
    x: 21,
    y: 56,
    view: 'back'
  },
  {
    id: 'soma',
    name: 'Calves',
    japanese: 'soma',
    number: 10,
    x: 11,
    y: 73,
    view: 'back'
  },
  {
    id: 'shomon-back',
    name: 'Skull',
    japanese: 'shomon',
    number: 11,
    x: 84,
    y: 11,
    view: 'back'
  },
  {
    id: 'dokusen',
    name: 'Side of neck',
    japanese: 'dokusen',
    number: 12,
    x: 87,
    y: 19,
    view: 'back'
  },
  {
    id: 'keichu',
    name: 'Back of neck',
    japanese: 'keichu',
    number: 13,
    x: 84,
    y: 22,
    view: 'back'
  },
  {
    id: 'hayauchi',
    name: 'Upper back',
    japanese: 'hayauchi',
    number: 14,
    x: 84,
    y: 29,
    view: 'back'
  },
  {
    id: 'kassatsu',
    name: 'Spine, middle of back',
    japanese: 'kassatsu',
    number: 15,
    x: 83,
    y: 32,
    view: 'back'
  },
  {
    id: 'ude-narashi-back-2',
    name: 'Upper arm',
    japanese: 'ude-narashi',
    number: 16,
    x: 84,
    y: 35,
    view: 'back'
  },
  {
    id: 'hijisume-back',
    name: 'Inside of elbow',
    japanese: 'hijitsume',
    number: 17,
    x: 85,
    y: 44,
    view: 'back'
  },
  {
    id: 'uchi-shakutaku-back',
    name: 'Inner wrist',
    japanese: 'uchi shakutaku',
    number: 18,
    x: 87,
    y: 52,
    view: 'back'
  }
];

const InteractiveVitalPoints = () => {
  const [showLabels, setShowLabels] = useState(true);
  const [selectedPoint, setSelectedPoint] = useState<VitalPoint | null>(null);
  const [activeView, setActiveView] = useState<'front' | 'back'>('front');
  const [showCoordinates, setShowCoordinates] = useState(false);
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

  const filteredPoints = vitalPointsData.filter(point => point.view === activeView);
  
  const handleImageClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!showCoordinates) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    setCoordinates({
      x: Math.round(x),
      y: Math.round(y)
    });
    
    console.log(`Coordinates: x: ${Math.round(x)}, y: ${Math.round(y)}`);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Switch
              id="show-labels"
              checked={showLabels}
              onCheckedChange={setShowLabels}
            />
            <Label htmlFor="show-labels">Show Labels</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch
              id="show-coordinates"
              checked={showCoordinates}
              onCheckedChange={setShowCoordinates}
            />
            <Label htmlFor="show-coordinates">Show Coordinates</Label>
          </div>
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

      <div 
        className="relative cursor-crosshair" 
        onClick={handleImageClick}
      >
        <img
          src={`/Images/Vital-points-${activeView}.jpg`}
          alt={`Vital Points - ${activeView.charAt(0).toUpperCase() + activeView.slice(1)} View`}
          className="w-full h-auto rounded-lg shadow-lg"
          onError={(e) => {
            console.error(`Failed to load image: ${e.currentTarget.src}`);
            e.currentTarget.src = '/placeholder.svg';
          }}
        />
        
        {showCoordinates && (
          <div className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm">
            x: {coordinates.x}, y: {coordinates.y}
          </div>
        )}
        
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
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedPoint(point);
                      }}
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

      <div className="mt-8 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Front View Vital Points</h2>
            <div className="space-y-2">
              {vitalPointsData
                .filter(point => point.view === 'front')
                .sort((a, b) => (a.number || 0) - (b.number || 0))
                .map(point => (
                  <div key={point.id} className="p-2 rounded hover:bg-gray-50">
                    <div className="font-semibold">
                      {point.number}. {point.japanese}
                    </div>
                    <div className="text-gray-600 ml-6">
                      {point.name}
              </div>
              </div>
                ))}
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Back View Vital Points</h2>
            <div className="space-y-2">
              {vitalPointsData
                .filter(point => point.view === 'back')
                .sort((a, b) => (a.number || 0) - (b.number || 0))
                .map(point => (
                  <div key={point.id} className="p-2 rounded hover:bg-gray-50">
                    <div className="font-semibold">
                      {point.number}. {point.japanese}
                    </div>
                    <div className="text-gray-600 ml-6">
                      {point.name}
                    </div>
            </div>
          ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveVitalPoints;
