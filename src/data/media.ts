import { TFunction } from 'i18next';

export interface MediaItem {
  id: string;
  type: 'image' | 'video';
  url: string;
  title: string;
  description?: string;
  category: 'vital-points' | 'terminology' | 'techniques' | 'kata' | 'general';
  tags: string[];
  createdAt: string;
  updatedAt: string;
}

export interface MediaReference {
  mediaId: string;
  context: {
    section: string;
    text: string;
    position: 'before' | 'after' | 'inline';
  };
}

// Example media items
export const getMediaItems = (t: TFunction): MediaItem[] => [
  {
    id: 'vital-points-front-view',
    type: 'image',
    url: '/media/vital-points/front-view-diagram.png',
    title: t('media.vitalPointsFrontView.title'),
    description: t('media.vitalPointsFrontView.description'),
    category: 'vital-points',
    tags: ['vital-points', 'front-view', 'diagram', 'human-body'],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'vital-points-back-view',
    type: 'image',
    url: '/media/vital-points/back-view-diagram.png',
    title: t('media.vitalPointsBackView.title'),
    description: t('media.vitalPointsBackView.description'),
    category: 'vital-points',
    tags: ['vital-points', 'back-view', 'diagram', 'human-body'],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
];

// Example media references
export const getMediaReferences = (t: TFunction): MediaReference[] => [
  {
    mediaId: 'vital-points-front-view',
    context: {
      section: 'vital-points',
      text: t('media.references.vitalPointsFrontContext'),
      position: 'before'
    }
  },
  {
    mediaId: 'vital-points-back-view',
    context: {
      section: 'vital-points',
      text: t('media.references.vitalPointsBackContext'),
      position: 'before'
    }
  }
]; 