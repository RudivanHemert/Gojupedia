import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();
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
              {t('blocks.videoError.title')}
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center p-2 flex-col items-center">
            {videoError && (
              <Alert className="mb-4 bg-stone-50">
                <Info className="h-4 w-4" />
                <AlertDescription>
                  {t('blocks.videoError.title')}
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
                  {t('blocks.ageUke.description')}
                </p>
              )}
              {selectedTechnique === 'gedan-barai' && (
                <p className="text-sm text-stone-600">
                  {t('blocks.gedanBarai.description')}
                </p>
              )}
              {selectedTechnique === 'soto-uke' && (
                <p className="text-sm text-stone-600">
                  {t('blocks.sotoUke.description')}
                </p>
              )}
            </div>
            
            {videoError && (
              <div className="mt-4 text-xs text-gray-500 w-full">
                <p>{t('blocks.videoError.pathError', { path: getVideoPath() })}</p>
                <p className="mt-1">{t('blocks.videoError.instructions')}</p>
                <ul className="list-disc pl-4 mt-1">
                  <li>{t('blocks.videoError.files.ageUke')}</li>
                  <li>{t('blocks.videoError.files.gedanBarai')}</li>
                  <li>{t('blocks.videoError.files.sotoUke')}</li>
                </ul>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="basic-blocks">
          <AccordionTrigger>{t('blocks.title')}</AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc pl-4 space-y-2">
              <li className="flex items-center gap-2">
                {t('blocks.ageUke.name')} ({t('blocks.ageUke.japanese')}) - {t('blocks.ageUke.english')}
                <Button 
                  onClick={() => showTechnique('age-uke', `${t('blocks.ageUke.name')} - ${t('blocks.ageUke.english')}`)} 
                  variant="outline"
                  size="sm"
                  className="h-7 px-2 bg-stone-100"
                  aria-label={`Show ${t('blocks.ageUke.name')} demonstration`}
                >
                  <Play size={14} className="mr-1" /> {t('blocks.viewButton')}
                </Button>
              </li>
              <li className="flex items-center gap-2">
                {t('blocks.gedanBarai.name')} ({t('blocks.gedanBarai.japanese')}) - {t('blocks.gedanBarai.english')}
                <Button 
                  onClick={() => showTechnique('gedan-barai', `${t('blocks.gedanBarai.name')} - ${t('blocks.gedanBarai.english')}`)} 
                  variant="outline"
                  size="sm"
                  className="h-7 px-2 bg-stone-100"
                  aria-label={`Show ${t('blocks.gedanBarai.name')} demonstration`}
                >
                  <Play size={14} className="mr-1" /> {t('blocks.viewButton')}
                </Button>
              </li>
              <li className="flex items-center gap-2">
                {t('blocks.sotoUke.name')} ({t('blocks.sotoUke.japanese')}) - {t('blocks.sotoUke.english')}
                <Button 
                  onClick={() => showTechnique('soto-uke', `${t('blocks.sotoUke.name')} - ${t('blocks.sotoUke.english')}`)} 
                  variant="outline"
                  size="sm"
                  className="h-7 px-2 bg-stone-100"
                  aria-label={`Show ${t('blocks.sotoUke.name')} demonstration`}
                >
                  <Play size={14} className="mr-1" /> {t('blocks.viewButton')}
                </Button>
              </li>
              <li>{t('blocks.uchiUke.name')} ({t('blocks.uchiUke.japanese')}) - {t('blocks.uchiUke.english')}</li>
              <li>{t('blocks.shutoUke.name')} ({t('blocks.shutoUke.japanese')}) - {t('blocks.shutoUke.english')}</li>
              <li>{t('blocks.empiUke.name')} ({t('blocks.empiUke.japanese')}) - {t('blocks.empiUke.english')}</li>
              <li>{t('blocks.kosaUke.name')} ({t('blocks.kosaUke.japanese')}) - {t('blocks.kosaUke.english')}</li>
              <li>{t('blocks.jujiUke.name')} ({t('blocks.jujiUke.japanese')}) - {t('blocks.jujiUke.english')}</li>
              <li>{t('blocks.haiwanUke.name')} ({t('blocks.haiwanUke.japanese')}) - {t('blocks.haiwanUke.english')}</li>
              <li>{t('blocks.osaeUke.name')} ({t('blocks.osaeUke.japanese')}) - {t('blocks.osaeUke.english')}</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default Blocks;