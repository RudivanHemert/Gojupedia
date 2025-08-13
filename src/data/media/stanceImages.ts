import { AttributionMeta } from '@/components/media/AttributionImage';

export interface StanceImageEntry {
  id: string; // matches terminology key, e.g., 'sanchin-dachi'
  src: string;
  alt: string;
  meta: AttributionMeta;
}

// No images configured yet. Add entries here when licensed stance photos are approved.
export const stanceImages: Record<string, StanceImageEntry> = {};


