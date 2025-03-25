import React from 'react';
import { MediaItem } from '@/data/media';
import { getYoutubeEmbedUrl, getYoutubeVideoId } from '@/utils/mediaUtils';

interface MediaDisplayProps {
  media: MediaItem;
  className?: string;
}

const MediaDisplay: React.FC<MediaDisplayProps> = ({ media, className = '' }) => {
  if (media.type === 'video') {
    const videoId = getYoutubeVideoId(media.url);
    if (!videoId) return null;

    return (
      <div className={`relative w-full aspect-video ${className}`}>
        <iframe
          src={getYoutubeEmbedUrl(videoId)}
          title={media.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full rounded-lg"
        />
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      <img
        src={media.url}
        alt={media.title}
        className="w-full h-auto rounded-lg"
      />
      {media.description && (
        <div className="mt-2 text-sm text-gray-600">
          {media.description}
        </div>
      )}
    </div>
  );
};

export default MediaDisplay; 