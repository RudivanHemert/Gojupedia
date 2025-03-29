import React, { useState, useEffect, useRef } from 'react';
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

// Temporary hardcoded strings (from en.json)
const translations = {
  blocks: {
    title: "Blocks",
    viewButton: "View",
    videoError: {
      title: "Unable to load video",
      pathError: "Failed to load: {{path}}",
      instructions: "Please ensure the following files exist:",
      files: {
        ageUke: "age-uke.mp4",
        gedanBarai: "gedan-barai.mp4",
        sotoUke: "soto-uke.mp4"
      }
    },
    ageUke: {
      name: "Age Uke",
      japanese: "上げ受け",
      english: "Rising Block",
      description: "A block that deflects an attack upward, protecting the face and upper body."
    },
    gedanBarai: {
      name: "Gedan Barai",
      japanese: "下段払い",
      english: "Downward Sweep",
      description: "A sweeping block that deflects attacks aimed at the lower body."
    },
    sotoUke: {
      name: "Soto Uke",
      japanese: "外受け",
      english: "Outside Block",
      description: "A block that deflects an attack from the inside to the outside."
    },
    uchiUke: {
      name: "Uchi Uke",
      japanese: "内受け",
      english: "Inside Block",
      description: "A block that deflects an attack from the outside to the inside."
    },
    shutoUke: {
      name: "Shuto Uke",
      japanese: "手刀受け",
      english: "Knife Hand Block",
      description: "A block performed with the side of the hand."
    },
    empiUke: {
      name: "Empi Uke",
      japanese: "肘受け",
      english: "Elbow Block",
      description: "A block performed with the elbow."
    },
    kosaUke: {
      name: "Kosa Uke",
      japanese: "交差受け",
      english: "Cross Block",
      description: "A block performed with crossed wrists."
    },
    jujiUke: {
      name: "Juji Uke",
      japanese: "十字受け",
      english: "X Block",
      description: "A block performed with crossed arms forming an X shape."
    },
    haiwanUke: {
      name: "Haiwan Uke",
      japanese: "背腕受け",
      english: "Back Arm Block",
      description: "A block performed with the back of the forearm."
    },
    osaeUke: {
      name: "Osae Uke",
      japanese: "押さえ受け",
      english: "Pressing Block",
      description: "A downward pressing block."
    }
  }
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
        const playPromise = videoRef.current.play();
        if (playPromise) {
          playPromise.catch(() => {
            setVideoError(true);
          });
        }
      }
    }
  }, [open]);

  const handleVideoError = () => {
    setVideoError(true);
  };

  // Simple translation helper
  const t = (key: string) => {
    const keys = key.split('.');
    let result: any = translations;
    for (const k of keys) {
      if (result && result[k]) {
        result = result[k];
      } else {
        return key;
      }
    }
    return result;
  };

  return (
    <>
      <div className="space-y-6">
        <p className="text-muted-foreground mb-4">Common defensive techniques used to block or deflect attacks.</p>
        
        <div className="border border-muted rounded-md mb-2 overflow-hidden">
          <div className="bg-muted/30 px-4 py-3 text-sm font-medium text-secondary-foreground">
            Basic Blocks
          </div>
          <div className="px-4 py-2 bg-card">
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
            </ul>
          </div>
        </div>

        <div className="border border-muted rounded-md mb-2 overflow-hidden">
          <div className="bg-muted/30 px-4 py-3 text-sm font-medium text-secondary-foreground">
            Advanced Blocks
          </div>
          <div className="px-4 py-2 bg-card">
            <ul className="list-disc pl-4 space-y-2">
              <li>{t('blocks.empiUke.name')} ({t('blocks.empiUke.japanese')}) - {t('blocks.empiUke.english')}</li>
              <li>{t('blocks.kosaUke.name')} ({t('blocks.kosaUke.japanese')}) - {t('blocks.kosaUke.english')}</li>
              <li>{t('blocks.jujiUke.name')} ({t('blocks.jujiUke.japanese')}) - {t('blocks.jujiUke.english')}</li>
              <li>{t('blocks.haiwanUke.name')} ({t('blocks.haiwanUke.japanese')}) - {t('blocks.haiwanUke.english')}</li>
              <li>{t('blocks.osaeUke.name')} ({t('blocks.osaeUke.japanese')}) - {t('blocks.osaeUke.english')}</li>
            </ul>
          </div>
        </div>
      </div>

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
              {selectedTechnique && (
                videoError ? (
                  <PlaceholderAnimation title={selectedTitle} />
                ) : (
                  <video 
                    ref={videoRef}
                    className="w-full rounded-md" 
                    src={`/images/blocks/${selectedTechnique}.gif`}
                    poster={`/images/blocks/${selectedTechnique}-poster.jpg`}
                    loop
                    controls
                    onError={handleVideoError}
                  />
                )
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
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Blocks;