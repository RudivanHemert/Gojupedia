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
export const mediaItems: MediaItem[] = [
  {
    id: 'vital-points-front-view',
    type: 'image',
    url: '/media/vital-points/front-view-diagram.png',
    title: 'Vital Points - Front View',
    description: 'Comprehensive diagram showing the vital points on the front of the human body',
    category: 'vital-points',
    tags: ['vital-points', 'front-view', 'diagram', 'human-body'],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'vital-points-back-view',
    type: 'image',
    url: '/media/vital-points/back-view-diagram.png',
    title: 'Vital Points - Back View',
    description: 'Comprehensive diagram showing the vital points on the back of the human body',
    category: 'vital-points',
    tags: ['vital-points', 'back-view', 'diagram', 'human-body'],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
];

// Example media references
export const mediaReferences: MediaReference[] = [
  {
    mediaId: 'vital-points-front-view',
    context: {
      section: 'vital-points',
      text: 'The human body contains numerous vital points that can be targeted in martial arts techniques. The diagram below shows the key points from the front view.',
      position: 'before'
    }
  },
  {
    mediaId: 'vital-points-back-view',
    context: {
      section: 'vital-points',
      text: 'The back view shows additional vital points that are important to understand in martial arts practice.',
      position: 'before'
    }
  }
]; 