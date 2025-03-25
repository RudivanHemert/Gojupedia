export const getMediaUrl = (path: string): string => {
  // In production, this would be your CDN or storage service URL
  return `https://lovable-dev.amazonaws.com/prod/gojuwiki/${path}`;
};

export const getYouTubeEmbedUrl = (videoId: string): string => {
  return `https://www.youtube.com/embed/${videoId}`;
};

export const extractYouTubeId = (url: string): string | null => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
};

export const formatMediaTitle = (name: string, japaneseName?: string): string => {
  return japaneseName ? `${name} (${japaneseName})` : name;
};

export const validateMediaUrl = (url: string, type: 'image' | 'video'): boolean => {
  if (type === 'video') {
    return extractYouTubeId(url) !== null;
  }
  // For images, you might want to add more validation
  return url.startsWith('http') && /\.(jpg|jpeg|png|gif|webp)$/i.test(url);
}; 