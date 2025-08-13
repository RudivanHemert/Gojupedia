import { AttributionMeta } from '@/components/media/AttributionImage';

export interface StanceImageEntry {
  id: string; // matches terminology key, e.g., 'sanchin-dachi'
  src: string;
  alt: string;
  meta: AttributionMeta;
}

// Note: These are placeholders using Unsplash generic karate images with permissive license (Unsplash License).
// Replace with stance-specific images from Wikimedia Commons or own assets when available.
export const stanceImages: Record<string, StanceImageEntry> = {
  'sanchin-dachi': {
    id: 'sanchin-dachi',
    src: 'https://images.unsplash.com/photo-1604652716188-21d725b4c7e9?q=80&w=1200&auto=format&fit=crop',
    alt: 'Sanchin Dachi stance demonstration',
    meta: {
      title: 'Karate stance (illustrative)',
      author: 'Unsplash contributor',
      license: 'Unsplash License',
      sourceName: 'Unsplash',
      sourceUrl: 'https://unsplash.com/license'
    }
  },
  'zenkutsu-dachi': {
    id: 'zenkutsu-dachi',
    src: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1200&auto=format&fit=crop',
    alt: 'Zenkutsu Dachi stance demonstration',
    meta: {
      title: 'Karate stance (illustrative)',
      author: 'Unsplash contributor',
      license: 'Unsplash License',
      sourceName: 'Unsplash',
      sourceUrl: 'https://unsplash.com/license'
    }
  },
  'shiko-dachi': {
    id: 'shiko-dachi',
    src: 'https://images.unsplash.com/photo-1590244303591-872eb8080ebe?q=80&w=1200&auto=format&fit=crop',
    alt: 'Shiko Dachi stance demonstration',
    meta: {
      title: 'Karate stance (illustrative)',
      author: 'Unsplash contributor',
      license: 'Unsplash License',
      sourceName: 'Unsplash',
      sourceUrl: 'https://unsplash.com/license'
    }
  }
};


