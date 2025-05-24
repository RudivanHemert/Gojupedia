import React, { useState, useEffect, useRef } from 'react';
import { Play, AlertCircle, Info } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle, DialogHeader, DialogDescription } from '@/components/ui/dialog';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';

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
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const [selectedTechniqueKey, setSelectedTechniqueKey] = useState<string>('');
  const [selectedTitle, setSelectedTitle] = useState<string>('');
  const [selectedDescription, setSelectedDescription] = useState<string>('');
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const blockTerms = i18n.t('terminology.sections.blocks-content.terms', { returnObjects: true }) as Record<string, { name: string; japanese?: string; english: string; details?: string; videoFile?: string }>;
  const termKeys = blockTerms && typeof blockTerms === 'object' ? Object.keys(blockTerms) : [];

  const showTechnique = (termKey: string) => {
    const term = blockTerms[termKey];
    if (term) {
      // Use videoFile field if present, otherwise construct from termKey
      const videoFileName = term.videoFile || termKey.toLowerCase().replace(/ /g, '-');
      setSelectedTechniqueKey(videoFileName);
      setSelectedTitle(`${term.name} - ${term.english}`);
      setSelectedDescription(term.details || t('terminology.sections.blocks-content.videoNotAvailableDescription'));
      setVideoError(false);
      setOpen(true);
    }
  };

  useEffect(() => {
    if (!open) {
      setVideoError(false);
      setSelectedTechniqueKey(''); // Reset selected technique when dialog closes
      setSelectedTitle('');
      setSelectedDescription('');
    } else if (videoRef.current && selectedTechniqueKey) {
      videoRef.current.src = `/video/blocks/${selectedTechniqueKey}.mp4`; // Set src directly
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          setVideoError(true);
        });
      }
    }
  }, [open, selectedTechniqueKey]);

  const handleVideoError = () => {
    setVideoError(true);
  };

  // Helper to check if a video should be available (for button display)
  // This can be refined based on actual video availability
  const hasVideo = (termKey: string) => {
    const term = blockTerms[termKey];
    if (term?.videoFile) return true; // If explicitly defined
    // Add more conditions if needed, e.g. checking a list of known videos
    const knownVideos = ['age-uke', 'gedan-barai', 'soto-uke'];
    return knownVideos.includes(termKey.toLowerCase().replace(/ /g, '-'));
  };


  return (
    <>
      <div className="space-y-6">
        <p className="text-muted-foreground mb-4">{t('terminology.sections.blocks-content.description')}</p>
        
        <div className="border border-muted rounded-md mb-2 overflow-hidden">
          <div className="bg-muted/30 px-4 py-3 text-sm font-medium text-secondary-foreground">
            {t('terminology.sections.blocks-content.basicBlocksTitle', 'Basic Blocks')}
          </div>
          <div className="px-4 py-2 bg-card">
            <ul className="list-disc pl-4 space-y-2">
              {termKeys
                .filter(key => ['age-uke', 'gedan-barai', 'soto-uke', 'uchi-uke', 'shuto-uke'].includes(key))
                .map(termKey => {
                  const term = blockTerms[termKey];
                  if (!term) return null;
                  return (
                    <li key={termKey} className="flex items-center justify-between">
                      <div>
                        {term.name} {term.japanese && `(${term.japanese})`} - {term.english}
                      </div>
                      {hasVideo(termKey) && (
                        <Button
                          onClick={() => showTechnique(termKey)}
                          variant="outline"
                          size="sm"
                          className="h-7 px-2 bg-stone-100 ml-2"
                          aria-label={`Show ${term.name} demonstration`}
                        >
                          <Play size={14} className="mr-1" /> {t('common.viewButton', 'View')}
                        </Button>
                      )}
                    </li>
                  );
              })}
            </ul>
          </div>
        </div>

        <div className="border border-muted rounded-md mb-2 overflow-hidden">
          <div className="bg-muted/30 px-4 py-3 text-sm font-medium text-secondary-foreground">
            {t('terminology.sections.blocks-content.advancedBlocksTitle', 'Advanced Blocks')}
          </div>
          <div className="px-4 py-2 bg-card">
            <ul className="list-disc pl-4 space-y-2">
             {termKeys
                .filter(key => ['empi-uke', 'kosa-uke', 'juji-uke', 'haiwan-uke', 'osae-uke'].includes(key))
                .map(termKey => {
                  const term = blockTerms[termKey];
                  if (!term) return null;
                  return (
                    <li key={termKey}>
                      {term.name} {term.japanese && `(${term.japanese})`} - {term.english}
                    </li>
                  );
              })}
            </ul>
          </div>
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{selectedTitle}</DialogTitle>
            {selectedDescription && (
                <DialogDescription>
                    {selectedDescription}
                </DialogDescription>
            )}
          </DialogHeader>
          <div className="flex justify-center p-2 flex-col items-center">
            {videoError && selectedTechniqueKey && (
              <Alert className="mb-4 bg-stone-50">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  {t('terminology.sections.blocks-content.videoLoadError', { file: `${selectedTechniqueKey}.mp4` })}
                </AlertDescription>
              </Alert>
            )}

            <div className="relative w-full">
              {selectedTechniqueKey && !videoError && (
                <video 
                  ref={videoRef}
                  className="w-full rounded-md" 
                  // src is set in useEffect
                  poster={`/images/blocks/${selectedTechniqueKey}-poster.jpg`} // Assuming posters might exist
                  loop
                  controls
                  onError={handleVideoError}
                  playsInline 
                />
              )}
              {selectedTechniqueKey && videoError && (
                 <PlaceholderAnimation title={selectedTitle} />
              )}
            </div>
            {!selectedTechniqueKey && ( // Show placeholder if no technique selected (e.g. on initial dialog open before selection)
                <PlaceholderAnimation title={t('terminology.sections.blocks-content.selectVideoTitle', 'Select a technique to view')} />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Blocks;