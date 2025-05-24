import React from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { getMediaItems } from '@/data/media';
import { useTranslation } from 'react-i18next';

interface MediaManagerProps {
  mediaId: string;
  onClose: () => void;
}

const MediaManager: React.FC<MediaManagerProps> = ({ mediaId, onClose }) => {
  const { t } = useTranslation();
  const mediaItems = getMediaItems(t);
  const mediaItem = mediaItems.find(item => item.id === mediaId);

  if (!mediaItem) {
    return null;
  }

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl">
        {mediaItem.type === 'image' ? (
          <img
            src={mediaItem.url}
            alt={mediaItem.title}
            className="w-full h-auto rounded-lg"
          />
        ) : (
          <video
            src={mediaItem.url}
            controls
            className="w-full h-auto rounded-lg"
          />
        )}
        {mediaItem.title && (
          <h3 className="text-xl font-semibold mt-4">{mediaItem.title}</h3>
        )}
        {mediaItem.description && (
          <p className="text-gray-600 mt-2">{mediaItem.description}</p>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default MediaManager; 