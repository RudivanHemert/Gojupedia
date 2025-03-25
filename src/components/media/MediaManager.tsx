import React from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Play } from 'lucide-react';

interface MediaManagerProps {
  media: {
    type: 'image' | 'video';
    url: string;
    title?: string;
    description?: string;
  };
  isOpen: boolean;
  onClose: () => void;
}

const MediaManager: React.FC<MediaManagerProps> = ({ media, isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl p-0">
        <div className="relative">
          {media.type === 'image' ? (
            <img
              src={media.url}
              alt={media.title || 'Media content'}
              className="w-full h-auto rounded-lg"
            />
          ) : (
            <div className="relative pt-[56.25%]">
              <iframe
                className="absolute inset-0 w-full h-full rounded-lg"
                src={media.url}
                title={media.title || 'Video content'}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}
          {(media.title || media.description) && (
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 rounded-b-lg">
              {media.title && <h3 className="text-lg font-semibold">{media.title}</h3>}
              {media.description && <p className="text-sm mt-1">{media.description}</p>}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MediaManager; 