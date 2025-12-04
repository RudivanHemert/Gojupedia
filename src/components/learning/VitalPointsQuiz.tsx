import React, { useState, useEffect, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion, AnimatePresence } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';
import { Check, X, RotateCcw } from 'lucide-react';

interface VitalPoint {
  id: string;
  name: string;
  japanese: string;
  number?: number;
  x: number;
  y: number;
  view: 'front' | 'back';
}

// Import vital points data from InteractiveVitalPoints
const vitalPointsData: VitalPoint[] = [
  // Front view vital points
  { id: 'shomon', name: 'Skull', japanese: 'shomon', number: 1, x: 7, y: 9, view: 'front' },
  { id: 'kasumi', name: 'Temple', japanese: 'kasumi', number: 2, x: 6, y: 14, view: 'front' },
  { id: 'komekami', name: 'Cheekbone', japanese: 'komekami', number: 3, x: 7, y: 17, view: 'front' },
  { id: 'jinchu', name: 'Philtrum', japanese: 'jinchu', number: 4, x: 25, y: 19, view: 'front' },
  { id: 'kakon', name: 'Chin', japanese: 'kakon', number: 5, x: 8, y: 24, view: 'front' },
  { id: 'murasame', name: 'Clavicle', japanese: 'murasame', number: 6, x: 20, y: 26, view: 'front' },
  { id: 'hichu', name: 'Windpipe', japanese: 'hichu', number: 7, x: 7, y: 28, view: 'front' },
  { id: 'danchu', name: 'Breastbone', japanese: 'danchu', number: 8, x: 7, y: 32, view: 'front' },
  { id: 'ude-narashi', name: 'Upper arm', japanese: 'ude-narashi', number: 9, x: 10, y: 34, view: 'front' },
  { id: 'ganka', name: 'Ribs under nipple', japanese: 'ganka', number: 10, x: 9, y: 37, view: 'front' },
  { id: 'suigetsu', name: 'Solar Plexus', japanese: 'suigetsu', number: 11, x: 11, y: 40, view: 'front' },
  { id: 'denko', name: 'Ribs', japanese: 'denko', number: 12, x: 9, y: 43, view: 'front' },
  { id: 'soto-shakutaku', name: 'Outer wrist', japanese: 'soto shakutaku', number: 13, x: 6, y: 50, view: 'front' },
  { id: 'shuko', name: 'Back of hand', japanese: 'shuko', number: 14, x: 9, y: 54, view: 'front' },
  { id: 'kokotsu', name: 'Shinbone', japanese: 'kokotsu', number: 15, x: 11, y: 73, view: 'front' },
  { id: 'soin', name: 'Instep', japanese: 'soin', number: 16, x: 9, y: 88, view: 'front' },
  { id: 'kori', name: 'Area around toes', japanese: 'kori', number: 17, x: 9, y: 91, view: 'front' },
  { id: 'uto', name: 'Bridge of nose', japanese: 'uto', number: 18, x: 80, y: 11, view: 'front' },
  { id: 'kasumi-right', name: 'Temple', japanese: 'kasumi', number: 19, x: 81, y: 13, view: 'front' },
  { id: 'seimo', name: 'Eye socket', japanese: 'seimo', number: 20, x: 82, y: 16, view: 'front' },
  { id: 'mikazuki', name: 'Jaw', japanese: 'mikazuki', number: 21, x: 50, y: 19, view: 'front' },
  { id: 'kyosen', name: 'Sternum', japanese: 'kyosen', number: 22, x: 60, y: 29, view: 'front' },
  { id: 'uchi-shakutaku', name: 'Inner wrist', japanese: 'uchi shakutaku', number: 23, x: 77, y: 29, view: 'front' },
  { id: 'ganka-right', name: 'Ribs', japanese: 'ganka', number: 24, x: 82, y: 33, view: 'front' },
  { id: 'hijisume', name: 'Inside of elbow', japanese: 'hijitsume', number: 25, x: 79, y: 38, view: 'front' },
  { id: 'inazuma', name: 'Stomach wall', japanese: 'inazuma', number: 26, x: 79, y: 44, view: 'front' },
  { id: 'myosho', name: 'Navel area', japanese: 'myosho', number: 27, x: 80, y: 47, view: 'front' },
  { id: 'tanden', name: 'Power center', japanese: 'tanden', number: 28, x: 81, y: 49, view: 'front' },
  { id: 'kinteki', name: 'Groin', japanese: 'kinteki', number: 29, x: 81, y: 52, view: 'front' },
  { id: 'yako', name: 'Inner thigh', japanese: 'yako', number: 30, x: 81, y: 60, view: 'front' },
  { id: 'fukuto', name: 'Hollow of knee', japanese: 'fukuto', number: 31, x: 82, y: 70, view: 'front' },
  { id: 'naira', name: 'Achilles tendon', japanese: 'naira', number: 32, x: 84, y: 85, view: 'front' },
  { id: 'kori-right', name: 'Area around toes', japanese: 'kori', number: 33, x: 84, y: 93, view: 'front' },
  // Back view vital points
  { id: 'shuko-back', name: 'Back of hand', japanese: 'shuko', number: 1, x: 10, y: 29, view: 'back' },
  { id: 'soto-shakutaku-back', name: 'Outer wrist', japanese: 'soto shakutaku', number: 2, x: 16, y: 32, view: 'back' },
  { id: 'ude-narashi-back-1', name: 'Upper arm', japanese: 'ude-narashi', number: 3, x: 16, y: 34, view: 'back' },
  { id: 'wakikage', name: 'Under armpit', japanese: 'wakigake', number: 4, x: 16, y: 36, view: 'back' },
  { id: 'ushiro-denko-1', name: 'Kidney area', japanese: 'ushiro denko', number: 5, x: 17, y: 39, view: 'back' },
  { id: 'ushiro-denko-2', name: 'Kidney area', japanese: 'ushiro denko', number: 6, x: 18, y: 46, view: 'back' },
  { id: 'bitei', name: 'Coccyx', japanese: 'bitei', number: 7, x: 10, y: 50, view: 'back' },
  { id: 'ein', name: 'Lower back', japanese: 'ein', number: 8, x: 10, y: 52, view: 'back' },
  { id: 'ushiro-inazuma', name: 'Backside', japanese: 'ushiro inazuma', number: 9, x: 21, y: 56, view: 'back' },
  { id: 'soma', name: 'Calves', japanese: 'soma', number: 10, x: 11, y: 73, view: 'back' },
  { id: 'shomon-back', name: 'Skull', japanese: 'shomon', number: 11, x: 84, y: 11, view: 'back' },
  { id: 'dokusen', name: 'Side of neck', japanese: 'dokusen', number: 12, x: 87, y: 19, view: 'back' },
  { id: 'keichu', name: 'Back of neck', japanese: 'keichu', number: 13, x: 84, y: 22, view: 'back' },
  { id: 'hayauchi', name: 'Upper back', japanese: 'hayauchi', number: 14, x: 84, y: 29, view: 'back' },
  { id: 'kassatsu', name: 'Spine, middle of back', japanese: 'kassatsu', number: 15, x: 83, y: 32, view: 'back' },
  { id: 'ude-narashi-back-2', name: 'Upper arm', japanese: 'ude-narashi', number: 16, x: 84, y: 35, view: 'back' },
  { id: 'hijisume-back', name: 'Inside of elbow', japanese: 'hijitsume', number: 17, x: 85, y: 44, view: 'back' },
  { id: 'uchi-shakutaku-back', name: 'Inner wrist', japanese: 'uchi shakutaku', number: 18, x: 87, y: 52, view: 'back' }
];

const VitalPointsQuiz = () => {
  const { t } = useTranslation();
  const [activeView, setActiveView] = useState<'front' | 'back'>('front');
  const [pointsToShow, setPointsToShow] = useState([10]);
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [checked, setChecked] = useState(false);
  const [score, setScore] = useState<{ correct: number; total: number } | null>(null);

  const filteredPoints = useMemo(() => 
    vitalPointsData.filter(point => point.view === activeView),
    [activeView]
  );

  // Randomly select which points to show and which to hide
  const { visiblePoints, hiddenPoints } = useMemo(() => {
    const shuffled = [...filteredPoints].sort(() => Math.random() - 0.5);
    const numToShow = Math.min(pointsToShow[0], filteredPoints.length);
    return {
      visiblePoints: shuffled.slice(0, numToShow),
      hiddenPoints: shuffled.slice(numToShow)
    };
  }, [filteredPoints, pointsToShow]);

  const handleAnswerChange = (pointId: string, value: string) => {
    setUserAnswers(prev => ({ ...prev, [pointId]: value }));
  };

  const handleCheck = () => {
    let correct = 0;
    const total = hiddenPoints.length;
    
    hiddenPoints.forEach(point => {
      const userAnswer = userAnswers[point.id]?.toLowerCase().trim();
      const correctName = t(`vitalPoints.points.${point.id}.name`).toLowerCase().trim();
      const correctJapanese = point.japanese.toLowerCase().trim();
      
      if (userAnswer === correctName || userAnswer === correctJapanese) {
        correct++;
      }
    });
    
    setScore({ correct, total });
    setChecked(true);
  };

  const handleRestart = () => {
    setUserAnswers({});
    setChecked(false);
    setScore(null);
  };

  const isCorrect = (pointId: string) => {
    if (!checked) return null;
    const userAnswer = userAnswers[pointId]?.toLowerCase().trim();
    const correctName = t(`vitalPoints.points.${pointId}.name`).toLowerCase().trim();
    const correctJapanese = vitalPointsData.find(p => p.id === pointId)?.japanese.toLowerCase().trim();
    return userAnswer === correctName || userAnswer === correctJapanese;
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>{t('vitalPoints.quiz.title')}</CardTitle>
          <p className="text-sm text-muted-foreground">{t('vitalPoints.quiz.description')}</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>{t('vitalPoints.quiz.pointsToShow')}: {pointsToShow[0]}</Label>
            <Slider
              value={pointsToShow}
              onValueChange={setPointsToShow}
              min={1}
              max={filteredPoints.length}
              step={1}
              disabled={checked}
            />
          </div>
          
          <div className="flex gap-2">
            <Button onClick={handleCheck} disabled={checked || hiddenPoints.length === 0}>
              {t('vitalPoints.quiz.checkAnswers')}
            </Button>
            {checked && (
              <Button variant="outline" onClick={handleRestart}>
                <RotateCcw className="mr-2 h-4 w-4" />
                {t('vitalPoints.quiz.restart')}
              </Button>
            )}
          </div>

          {score && (
            <div className="p-4 bg-muted rounded-lg">
              <p className="text-lg font-semibold">
                {t('vitalPoints.quiz.score', { correct: score.correct, total: score.total })}
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      <Tabs value={activeView} onValueChange={(value) => {
        setActiveView(value as 'front' | 'back');
        handleRestart();
      }}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="front">{t('vitalPoints.interactive.frontViewTab')}</TabsTrigger>
          <TabsTrigger value="back">{t('vitalPoints.interactive.backViewTab')}</TabsTrigger>
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
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0"
          >
            {/* Show visible points */}
            {visiblePoints.map((point) => (
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
                  <div className="absolute w-2 h-2 bg-green-500 rounded-full -translate-x-1/2 -translate-y-1/2" />
                  <div className="bg-white/90 text-black text-xs px-2 py-1 rounded shadow-md">
                    {point.number ? `${point.number}. ${t(`vitalPoints.points.${point.id}.name`)}` : t(`vitalPoints.points.${point.id}.name`)}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Show hidden points with input fields */}
            {hiddenPoints.map((point) => {
              const correct = isCorrect(point.id);
              return (
                <motion.div
                  key={point.id}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="absolute"
                  style={{
                    left: `${point.x}%`,
                    top: `${point.y}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                >
                  <div className="relative flex flex-col items-center gap-1">
                    <div className={cn(
                      "absolute w-2 h-2 rounded-full -translate-x-1/2 -translate-y-1/2",
                      checked 
                        ? (correct ? "bg-green-500" : "bg-red-500")
                        : "bg-yellow-500"
                    )} />
                    <Input
                      type="text"
                      placeholder={t('vitalPoints.quiz.enterAnswer')}
                      value={userAnswers[point.id] || ''}
                      onChange={(e) => handleAnswerChange(point.id, e.target.value)}
                      disabled={checked}
                      className={cn(
                        "w-32 text-xs h-7 px-2 py-1 text-center",
                        checked && correct && "border-green-500 bg-green-50",
                        checked && correct === false && "border-red-500 bg-red-50"
                      )}
                    />
                    {checked && (
                      <div className="flex items-center gap-1 text-xs">
                        {correct ? (
                          <Check className="h-4 w-4 text-green-500" />
                        ) : (
                          <>
                            <X className="h-4 w-4 text-red-500" />
                            <span className="text-red-500">
                              {t('vitalPoints.quiz.correctAnswer')}: {t(`vitalPoints.points.${point.id}.name`)}
                            </span>
                          </>
                        )}
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default VitalPointsQuiz;

