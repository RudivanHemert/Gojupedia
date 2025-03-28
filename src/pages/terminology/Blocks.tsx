import React, { useState, useEffect, useRef } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Play, AlertCircle, Info } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle, DialogHeader, DialogDescription } from '@/components/ui/dialog';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';

// Placeholder component to show when videos don't load
const PlaceholderAnimation = ({ title }: { title: string }) => {
  return (
    <div className="w-full h-[40vh] bg-stone-100 flex flex-col items-center justify-center p-4 rounded-lg">
      <div className="animate-bounce mb-2">
        <Play className="h-12 w-12 text-stone-400" />
      </div>
      <p className="text-lg font-medium text-stone-600">{title}</p>
      <p className="text-sm text-stone-500 text-center mt-2">
        Animation placeholder - Video loading is not supported in this environment
      </p>
    </div>
  );
};

const Blocks = () => {
  const [open, setOpen] = useState(false);
  const [selectedTechnique, setSelectedTechnique] = useState<string>('');
  const [selectedTitle, setSelectedTitle] = useState('');
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const showTechnique = (technique: string, title: string) => {
    setSelectedTechnique(technique);
    setSelectedTitle(title);
    setVideoError(false);
    setOpen(true);
  };
  
  useEffect(() => {
    // Reset states when dialog closes
    if (!open) {
      setVideoError(false);
    } else {
      // Try to play the video when dialog opens
      if (videoRef.current) {
        videoRef.current.play().catch(() => {
          // Silently catch autoplay errors - we'll handle them in onError
        });
      }
    }
  }, [open]);

  // Handle video load error
  const handleVideoError = () => {
    setVideoError(true);
  };

  // Get the appropriate video path for the selected technique
  const getVideoPath = () => {
    return `/Video/Blocks/${selectedTechnique}.mp4`;
  };

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{selectedTitle}</DialogTitle>
            <DialogDescription>
              Demonstration of the {selectedTitle} technique
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center p-2 flex-col items-center">
            {videoError && (
              <Alert className="mb-4 bg-stone-50">
                <Info className="h-4 w-4" />
                <AlertDescription>
                  Video demonstrations will be visible in the mobile app
                </AlertDescription>
              </Alert>
            )}
            
            <div className="relative w-full">
              {!videoError && (
                <video
                  ref={videoRef}
                  src={getVideoPath()}
                  controls
                  autoPlay
                  playsInline
                  onError={handleVideoError}
                  className="max-h-[40vh] w-full object-contain bg-black"
                />
              )}
              
              {videoError && (
                <PlaceholderAnimation title={selectedTitle} />
              )}
            </div>
            
            <div className="w-full mt-4 bg-stone-50 p-3 rounded-lg">
              <h3 className="text-sm font-medium mb-2">About this technique</h3>
              {selectedTechnique === 'age-uke' && (
                <p className="text-sm text-stone-600">
                  Age Uke (Rising Block) is a basic upward blocking technique used to defend against attacks to the face or upper body. The forearm moves upward to deflect the attack, while the other hand is pulled back to the hip in preparation for a counter-attack.
                </p>
              )}
              {selectedTechnique === 'gedan-barai' && (
                <p className="text-sm text-stone-600">
                  Gedan Barai (Downward Block) is a sweeping downward block that defends against low attacks. The arm moves in a downward arc to deflect strikes aimed at the lower body, while the other arm retracts to the hip position.
                </p>
              )}
              {selectedTechnique === 'soto-uke' && (
                <p className="text-sm text-stone-600">
                  Soto Uke (Outside Block) is an outward block used to deflect attacks coming from the inside to the outside. The forearm moves from the inside outward in a horizontal path to redirect the opponent's strike.
                </p>
              )}
            </div>
            
            {videoError && (
              <div className="mt-4 text-xs text-gray-500 w-full">
                <p>Video could not be loaded from: {getVideoPath()}</p>
                <p className="mt-1">Please ensure MP4 files are placed in the public/Video/Blocks directory with these filenames:</p>
                <ul className="list-disc pl-4 mt-1">
                  <li>age-uke.mp4</li>
                  <li>gedan-barai.mp4</li>
                  <li>soto-uke.mp4</li>
                </ul>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="basic-blocks">
          <AccordionTrigger>Basic Blocks</AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc pl-4 space-y-2">
              <li className="flex items-center gap-2">
                Age Uke (上げ受け) - Rising Block
                <Button 
                  onClick={() => showTechnique('age-uke', 'Age Uke - Rising Block')} 
                  variant="outline"
                  size="sm"
                  className="h-7 px-2 bg-stone-100"
                  aria-label="Show Age Uke demonstration"
                >
                  <Play size={14} className="mr-1" /> View
                </Button>
              </li>
              <li className="flex items-center gap-2">
                Gedan Barai (下段払い) - Downward Block
                <Button 
                  onClick={() => showTechnique('gedan-barai', 'Gedan Barai - Downward Block')} 
                  variant="outline"
                  size="sm"
                  className="h-7 px-2 bg-stone-100"
                  aria-label="Show Gedan Barai demonstration"
                >
                  <Play size={14} className="mr-1" /> View
                </Button>
              </li>
              <li className="flex items-center gap-2">
                Soto Uke (外受け) - Outside Block
                <Button 
                  onClick={() => showTechnique('soto-uke', 'Soto Uke - Outside Block')} 
                  variant="outline"
                  size="sm"
                  className="h-7 px-2 bg-stone-100"
                  aria-label="Show Soto Uke demonstration"
                >
                  <Play size={14} className="mr-1" /> View
                </Button>
              </li>
              <li>Uchi Uke (内受け) - Inside Block</li>
              <li>Shuto Uke (手刀受け) - Knife Hand Block</li>
              <li>Empi Uke (肘受け) - Elbow Block</li>
              <li>Kosa Uke (交差受け) - Cross Block</li>
              <li>Juji Uke (十字受け) - X Block</li>
              <li>Haiwan Uke (背腕受け) - Back Arm Block</li>
              <li>Osae Uke (押さえ受け) - Pressing Block</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default Blocks;