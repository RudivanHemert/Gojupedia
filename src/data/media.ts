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
    id: 'vital-points-1',
    type: 'image',
    url: 'https://raw.githubusercontent.com/yourusername/goju-wiki-quest/main/media/vital-points/head-pressure-points.jpg',
    title: 'Head Pressure Points',
    description: 'Key pressure points on the head and face',
    category: 'vital-points',
    tags: ['head', 'pressure-points', 'vital-points'],
    createdAt: '2024-03-20T00:00:00Z',
    updatedAt: '2024-03-20T00:00:00Z'
  },
  {
    id: 'terminology-1',
    type: 'video',
    url: 'https://www.youtube.com/embed/example-video-id',
    title: 'Basic Karate Stances',
    description: 'Demonstration of fundamental karate stances',
    category: 'terminology',
    tags: ['stances', 'basics', 'terminology'],
    createdAt: '2024-03-20T00:00:00Z',
    updatedAt: '2024-03-20T00:00:00Z'
  }
];

// Example media references
export const mediaReferences: MediaReference[] = [
  {
    mediaId: 'vital-points-1',
    context: {
      section: 'vital-points',
      text: 'The head contains several important pressure points that can be targeted in self-defense situations.',
      position: 'after'
    }
  },
  {
    mediaId: 'terminology-1',
    context: {
      section: 'terminology',
      text: 'Basic stances are the foundation of karate practice.',
      position: 'before'
    }
  }
]; 