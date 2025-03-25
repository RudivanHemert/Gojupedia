import React, { useState } from 'react';
import { Eye, EyeOff, Circle, Play } from 'lucide-react';
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Button } from "@/components/ui/button";
import { mediaItems } from '@/data/media';
import { motion } from 'framer-motion';

// Define the vital point data structure
interface VitalPoint {
  id: number;
  name: string;
  japaneseName: string;
  description: string;
  position: {
    x: number;
    y: number;
  };
  view: 'front' | 'back';
}

const vitalPointsData: VitalPoint[] = [
  // Front view vital points
  { id: 1, name: "Shomon", japaneseName: "正門", description: "Skull", position: { x: 50, y: 14 }, view: 'front' },
  { id: 2, name: "Kasumi", japaneseName: "霞", description: "Temple on the side of the head", position: { x: 28, y: 21 }, view: 'front' },
  { id: 3, name: "Seimo", japaneseName: "正目", description: "Eye socket", position: { x: 33, y: 24 }, view: 'front' },
  { id: 4, name: "Mikazuki", japaneseName: "三日月", description: "Jaw", position: { x: 50, y: 27 }, view: 'front' },
  { id: 5, name: "Hichu", japaneseName: "肺注", description: "Windpipe", position: { x: 50, y: 35 }, view: 'front' },
  { id: 6, name: "Murasame", japaneseName: "村雨", description: "Clavicle", position: { x: 42, y: 37 }, view: 'front' },
  { id: 7, name: "Kyosen", japaneseName: "胸線", description: "Sternum", position: { x: 50, y: 42 }, view: 'front' },
  { id: 8, name: "Danchu", japaneseName: "膽柱", description: "Breastbone", position: { x: 50, y: 45 }, view: 'front' },
  { id: 9, name: "Ganka", japaneseName: "眼下", description: "Ribs (under nipple)", position: { x: 37, y: 48 }, view: 'front' },
  { id: 10, name: "Denko", japaneseName: "電光", description: "Ribs (below ganka)", position: { x: 34, y: 50 }, view: 'front' },
  { id: 11, name: "Suigetsu", japaneseName: "水月", description: "Solar plexus", position: { x: 50, y: 52 }, view: 'front' },
  { id: 12, name: "Inazuma", japaneseName: "稲妻", description: "Stomach wall", position: { x: 42, y: 54 }, view: 'front' },
  { id: 13, name: "Kutaku", japaneseName: "苦沢", description: "Inner wrist", position: { x: 20, y: 67 }, view: 'front' },
  { id: 14, name: "Shuko", japaneseName: "手甲", description: "Back of hand", position: { x: 22, y: 73 }, view: 'front' },
  { id: 15, name: "Fukuto", japaneseName: "腹兎", description: "Hollow of knee", position: { x: 40, y: 86 }, view: 'front' },
  { id: 16, name: "Kokotsu", japaneseName: "腰骨", description: "Shinbone", position: { x: 35, y: 95 }, view: 'front' },
  { id: 17, name: "Kori", japaneseName: "小裏", description: "Area around the toes", position: { x: 35, y: 98 }, view: 'front' },
  { id: 18, name: "Jinchu", japaneseName: "人中", description: "Philtrum", position: { x: 70, y: 20 }, view: 'front' },
  { id: 19, name: "Komekami", japaneseName: "米上", description: "Cheekbone", position: { x: 72, y: 22 }, view: 'front' },
  { id: 20, name: "Uto", japaneseName: "烏頭", description: "Bridge of nose", position: { x: 70, y: 24 }, view: 'front' },
  { id: 21, name: "Kakon", japaneseName: "下墩", description: "Chin", position: { x: 70, y: 27 }, view: 'front' },
  { id: 22, name: "Dokusen", japaneseName: "独栓", description: "Side of neck", position: { x: 74, y: 39 }, view: 'front' },
  { id: 23, name: "Hijisume", japaneseName: "肘詰", description: "Inside of elbow", position: { x: 78, y: 43 }, view: 'front' },
  { id: 24, name: "Soto shakutaku", japaneseName: "外尺沢", description: "Outer wrist", position: { x: 75, y: 46 }, view: 'front' },
  { id: 25, name: "Tanden", japaneseName: "丹田", description: "Abdomen", position: { x: 70, y: 58 }, view: 'front' },
  { id: 26, name: "Myosho", japaneseName: "明掌", description: "Navel area", position: { x: 70, y: 60 }, view: 'front' },
  { id: 27, name: "Kinteki", japaneseName: "金的", description: "Groin", position: { x: 70, y: 65 }, view: 'front' },
  { id: 28, name: "Yako", japaneseName: "野虎", description: "Inner thigh", position: { x: 64, y: 69 }, view: 'front' },
  { id: 29, name: "Soma", japaneseName: "相馬", description: "Calves", position: { x: 70, y: 79 }, view: 'front' },
  { id: 30, name: "Naira", japaneseName: "内羅", description: "Achilles tendon", position: { x: 70, y: 92 }, view: 'front' },
  { id: 31, name: "Soin", japaneseName: "足引", description: "Instep", position: { x: 66, y: 95 }, view: 'front' },
  { id: 32, name: "Tsumasaki", japaneseName: "爪先", description: "Tips of toes", position: { x: 67, y: 98 }, view: 'front' },
  
  // Back view vital points
  { id: 33, name: "Keichu", japaneseName: "経注", description: "Back of neck", position: { x: 50, y: 20 }, view: 'back' },
  { id: 34, name: "Kassatsu", japaneseName: "活殺", description: "Spine, middle of back", position: { x: 50, y: 38 }, view: 'back' },
  { id: 35, name: "Hayauchi", japaneseName: "早打", description: "Upper back", position: { x: 45, y: 29 }, view: 'back' },
  { id: 36, name: "Ushiro denko", japaneseName: "後電光", description: "Kidney area", position: { x: 45, y: 45 }, view: 'back' },
  { id: 37, name: "Bitei", japaneseName: "尾底", description: "Coccyx", position: { x: 50, y: 55 }, view: 'back' },
  { id: 38, name: "Ushiro inazuma", japaneseName: "後稲妻", description: "Backside", position: { x: 50, y: 60 }, view: 'back' }
];

interface InteractiveVitalPointsProps {
  media: MediaItem;
}

const InteractiveVitalPoints: React.FC<InteractiveVitalPointsProps> = ({ media }) => {
  const [activeView, setActiveView] = useState<'front' | 'back'>('front');
  const [visiblePoints, setVisiblePoints] = useState<number[]>([]);
  const [selectedPoint, setSelectedPoint] = useState<VitalPoint | null>(null);

  const frontViewDiagram = mediaItems.find(item => item.id === 'vital-points-front-view');
  const backViewDiagram = mediaItems.find(item => item.id === 'vital-points-back-view');
  
  const filteredPoints = vitalPointsData.filter(point => point.view === activeView);
  
  const toggleAllPoints = () => {
    if (visiblePoints.length === filteredPoints.length) {
      setVisiblePoints([]);
    } else {
      setVisiblePoints(filteredPoints.map(point => point.id));
    }
    setSelectedPoint(null);
  };

  const togglePoint = (pointId: number) => {
    if (visiblePoints.includes(pointId)) {
      setVisiblePoints(visiblePoints.filter(id => id !== pointId));
    } else {
      setVisiblePoints([...visiblePoints, pointId]);
    }
    setSelectedPoint(filteredPoints.find(point => point.id === pointId) || null);
  };

  return (
    <div className="flex flex-col gap-4">
      {/* View toggle */}
      <div className="flex justify-center mb-2">
        <ToggleGroup type="single" value={activeView} onValueChange={(value) => {
          if (value) {
            setActiveView(value as 'front' | 'back');
            setVisiblePoints([]);
            setSelectedPoint(null);
          }
        }}>
          <ToggleGroupItem value="front" aria-label="Front view">
            Front View
          </ToggleGroupItem>
          <ToggleGroupItem value="back" aria-label="Back view">
            Back View
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
      
      {/* Toggle visibility button */}
      <div className="flex justify-center mb-2">
        <Button 
          variant="outline" 
          size="sm" 
          onClick={toggleAllPoints}
          className="flex items-center gap-2"
        >
          {visiblePoints.length === filteredPoints.length ? (
            <>
              <EyeOff size={16} />
              <span>Hide All Points</span>
            </>
          ) : (
            <>
              <Eye size={16} />
              <span>Show All Points</span>
            </>
          )}
        </Button>
      </div>
      
      {/* Interactive diagram */}
      <div className="relative">
        <img 
          src={activeView === 'front' 
            ? frontViewDiagram?.url 
            : backViewDiagram?.url} 
          alt={`${activeView} view of vital points`}
          className="max-w-full max-h-[60vh] object-contain mx-auto"
        />
        
        {/* Vital points markers */}
        {filteredPoints.map(point => (
          visiblePoints.includes(point.id) && (
            <motion.button
              key={point.id}
              className={`absolute w-4 h-4 rounded-full bg-red-500 opacity-70 hover:opacity-100 
                ${selectedPoint?.id === point.id ? 'ring-2 ring-white' : ''}`}
              style={{
                left: `${point.position.x}%`,
                top: `${point.position.y}%`,
                transform: 'translate(-50%, -50%)'
              }}
              whileHover={{ scale: 1.2 }}
              onClick={() => togglePoint(point.id)}
            />
          )
        ))}
      </div>
      
      {/* Point information */}
      {selectedPoint && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 p-4 bg-white rounded-lg shadow-md"
        >
          <h3 className="text-lg font-semibold">{selectedPoint.name} ({selectedPoint.japaneseName})</h3>
          <p className="text-gray-600">{selectedPoint.description}</p>
        </motion.div>
      )}

      {/* Point list */}
      <div className="mt-4">
        <h3 className="text-lg font-medium mb-2">Vital Points ({activeView} view)</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {filteredPoints.map(point => (
            <div 
              key={point.id}
              className={`p-2 rounded-md cursor-pointer flex items-center gap-2 transition-colors
                ${visiblePoints.includes(point.id) ? 'bg-green-100' : 'bg-stone-100'}
                ${selectedPoint?.id === point.id ? 'ring-2 ring-green-500' : ''}`}
              onClick={() => togglePoint(point.id)}
            >
              <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center rounded-full bg-green-600 text-white text-xs">
                {point.id}
              </div>
              <div className="flex-grow">
                <div className="font-medium">{point.name} ({point.japaneseName})</div>
                <div className="text-xs text-gray-600">{point.description}</div>
              </div>
              {visiblePoints.includes(point.id) ? (
                <EyeOff size={16} className="text-gray-500" />
              ) : (
                <Eye size={16} className="text-gray-500" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InteractiveVitalPoints;
