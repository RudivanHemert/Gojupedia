import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { ChevronLeft, ChevronRight, X, ZoomIn, ZoomOut, Maximize, Minimize, Play } from 'lucide-react';
import { MediaItem } from '@/data/media';

interface MediaGalleryProps {
  items: MediaItem[];
  initialIndex?: number;
  onClose?: () => void;
  isOpen?: boolean;
}

const MediaGallery: React.FC<MediaGalleryProps> = ({
  items,
  initialIndex = 0,
  onClose,
  isOpen = false
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [dragPosition, setDragPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  
  const currentItem = items[currentIndex];
  
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen().then(() => {
        setIsFullscreen(true);
      }).catch(err => {
        console.error('Error attempting to enable fullscreen:', err);
      });
    } else {
      document.exitFullscreen().then(() => {
        setIsFullscreen(false);
      }).catch(err => {
        console.error('Error attempting to exit fullscreen:', err);
      });
    }
  };
  
  const handleZoomIn = () => {
    setZoomLevel(prevZoom => Math.min(prevZoom + 0.5, 3));
    setDragPosition({ x: 0, y: 0 });
  };
  
  const handleZoomOut = () => {
    setZoomLevel(prevZoom => Math.max(prevZoom - 0.5, 1));
    setDragPosition({ x: 0, y: 0 });
  };
  
  const handlePrev = () => {
    setCurrentIndex(prevIndex => (prevIndex > 0 ? prevIndex - 1 : items.length - 1));
    resetView();
  };
  
  const handleNext = () => {
    setCurrentIndex(prevIndex => (prevIndex < items.length - 1 ? prevIndex + 1 : 0));
    resetView();
  };
  
  const resetView = () => {
    setZoomLevel(1);
    setDragPosition({ x: 0, y: 0 });
  };
  
  const handleDragEnd = (info: any) => {
    // If the drag was significant, change to the next/previous item
    if (Math.abs(info.offset.x) > 100) {
      if (info.offset.x > 0) {
        handlePrev();
      } else {
        handleNext();
      }
    }
  };
  
  // For inline gallery (not in dialog)
  if (!isOpen) {
    return (
      <div className="space-y-4">
        <div className="relative overflow-hidden rounded-lg bg-gray-100" ref={containerRef}>
          {/* Main media display */}
          <div className="flex items-center justify-center h-80">
            {currentItem.type === 'image' ? (
              <img
                src={currentItem.url}
                alt={currentItem.title}
                className="max-h-full max-w-full object-contain"
              />
            ) : (
              <div className="relative w-full h-full">
                <video
                  src={currentItem.url}
                  controls
                  className="w-full h-full object-contain"
                />
              </div>
            )}
          </div>
          
          {/* Navigation controls */}
          {items.length > 1 && (
            <>
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 text-white hover:bg-black/50 rounded-full"
                onClick={handlePrev}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 text-white hover:bg-black/50 rounded-full"
                onClick={handleNext}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </>
          )}
        </div>
        
        {/* Thumbnails */}
        {items.length > 1 && (
          <div className="flex space-x-2 overflow-x-auto py-2">
            {items.map((item, index) => (
              <div
                key={item.id}
                className={`w-16 h-16 flex-shrink-0 cursor-pointer rounded-md overflow-hidden border-2 ${
                  index === currentIndex ? 'border-primary' : 'border-transparent'
                }`}
                onClick={() => setCurrentIndex(index)}
              >
                {item.type === 'image' ? (
                  <img
                    src={item.url}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <Play className="h-6 w-6 text-gray-600" />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
        
        {/* Caption */}
        {currentItem.title && (
          <div className="text-center">
            <h3 className="font-semibold">{currentItem.title}</h3>
            {currentItem.description && (
              <p className="text-gray-600 text-sm mt-1">{currentItem.description}</p>
            )}
          </div>
        )}
      </div>
    );
  }
  
  // For fullscreen dialog view
  return (
    <Dialog open={isOpen} onOpenChange={() => onClose?.()}>
      <DialogContent className="max-w-6xl w-[95vw] max-h-[90vh] p-0 overflow-hidden">
        <div className="relative h-full" ref={containerRef}>
          {/* Close button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-4 z-10 bg-black/30 text-white hover:bg-black/50 rounded-full"
            onClick={onClose}
          >
            <X className="h-5 w-5" />
          </Button>
          
          {/* Control buttons */}
          <div className="absolute left-4 top-4 z-10 flex space-x-2">
            <Button
              variant="ghost"
              size="icon"
              className="bg-black/30 text-white hover:bg-black/50 rounded-full"
              onClick={handleZoomIn}
              disabled={zoomLevel >= 3}
            >
              <ZoomIn className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="bg-black/30 text-white hover:bg-black/50 rounded-full"
              onClick={handleZoomOut}
              disabled={zoomLevel <= 1}
            >
              <ZoomOut className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="bg-black/30 text-white hover:bg-black/50 rounded-full"
              onClick={toggleFullscreen}
            >
              {isFullscreen ? (
                <Minimize className="h-5 w-5" />
              ) : (
                <Maximize className="h-5 w-5" />
              )}
            </Button>
          </div>
          
          {/* Main content */}
          <div className="flex items-center justify-center h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="relative h-full w-full flex items-center justify-center"
              >
                {currentItem.type === 'image' ? (
                  <motion.div
                    drag={zoomLevel > 1}
                    dragConstraints={{ left: -300, right: 300, top: -300, bottom: 300 }}
                    dragElastic={0.1}
                    dragMomentum={false}
                    onDragEnd={(e, info) => zoomLevel === 1 && handleDragEnd(info)}
                    style={{ 
                      scale: zoomLevel,
                      cursor: zoomLevel > 1 ? 'grab' : 'default',
                      x: dragPosition.x,
                      y: dragPosition.y
                    }}
                    className="h-full flex items-center justify-center p-8"
                    onDoubleClick={() => {
                      if (zoomLevel > 1) {
                        resetView();
                      } else {
                        handleZoomIn();
                      }
                    }}
                  >
                    <img
                      src={currentItem.url}
                      alt={currentItem.title}
                      className="max-h-full max-w-full object-contain"
                      draggable="false"
                    />
                  </motion.div>
                ) : (
                  <div className="w-full h-full p-8 flex items-center justify-center">
                    <video
                      src={currentItem.url}
                      controls
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Navigation controls */}
          {items.length > 1 && (
            <>
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 text-white hover:bg-black/50 rounded-full z-10"
                onClick={handlePrev}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 text-white hover:bg-black/50 rounded-full z-10"
                onClick={handleNext}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </>
          )}
          
          {/* Caption */}
          {(currentItem.title || currentItem.description) && (
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4">
              {currentItem.title && (
                <h3 className="font-semibold">{currentItem.title}</h3>
              )}
              {currentItem.description && (
                <p className="text-sm opacity-90 mt-1">{currentItem.description}</p>
              )}
            </div>
          )}
          
          {/* Thumbnails */}
          {items.length > 1 && (
            <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex space-x-2 overflow-x-auto py-2 px-4 bg-black/30 rounded-full">
              {items.map((item, index) => (
                <div
                  key={item.id}
                  className={`w-8 h-8 flex-shrink-0 cursor-pointer rounded-full overflow-hidden border-2 ${
                    index === currentIndex ? 'border-white' : 'border-transparent'
                  }`}
                  onClick={() => setCurrentIndex(index)}
                >
                  {item.type === 'image' ? (
                    <img
                      src={item.url}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-600 flex items-center justify-center">
                      <Play className="h-4 w-4 text-white" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MediaGallery; 