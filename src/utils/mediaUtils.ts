import { MediaItem, MediaReference } from '@/data/media';

const GITHUB_RAW_BASE = 'https://raw.githubusercontent.com/yourusername/goju-wiki-quest/main';

export const getMediaUrl = (path: string): string => {
  // If the path is already a full URL (e.g., YouTube), return it as is
  if (path.startsWith('http')) {
    return path;
  }
  
  // Otherwise, treat it as a local path relative to the public directory
  return path.startsWith('/') ? path : `/${path}`;
};

export const getYoutubeEmbedUrl = (videoId: string): string => {
  return `https://www.youtube.com/embed/${videoId}`;
};

export const getYoutubeVideoId = (url: string): string | null => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
};

export const findMediaReferences = (
  mediaId: string,
  references: MediaReference[]
): MediaReference[] => {
  return references.filter(ref => ref.mediaId === mediaId);
};

export const findMediaByCategory = (
  category: MediaItem['category'],
  items: MediaItem[]
): MediaItem[] => {
  return items.filter(item => item.category === category);
};

export const findMediaByTags = (
  tags: string[],
  items: MediaItem[]
): MediaItem[] => {
  return items.filter(item =>
    tags.some(tag => item.tags.includes(tag))
  );
};

export const validateMediaUrl = (url: string, type: 'image' | 'video'): boolean => {
  if (type === 'video') {
    return getYoutubeVideoId(url) !== null;
  }
  // For images, check if it's a valid GitHub raw URL
  return url.startsWith(GITHUB_RAW_BASE);
}; 