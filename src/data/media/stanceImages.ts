import { AttributionMeta } from '@/components/media/AttributionImage';

export interface StanceImageEntry {
  id: string; // matches terminology key, e.g., 'sanchin-dachi'
  src: string;
  alt: string;
  meta: AttributionMeta;
}

// Stance images from public/Images/Stances folder
export const stanceImages: Record<string, StanceImageEntry> = {
  'seiza': {
    id: 'seiza',
    src: '/Images/Stances/seiza-placeholder.jpg', // Placeholder since seiza image not found in folder
    alt: 'Seiza - Kneeling stance',
    meta: {
      title: 'Seiza Stance',
      author: 'Gojupedia',
      license: 'Educational use',
      sourceName: 'Gojupedia',
      sourceUrl: '/'
    }
  },
  'musubi-dachi': {
    id: 'musubi-dachi',
    src: '/Images/Stances/musubi-dachi-1024x619-upscale-4x.jpg',
    alt: 'Musubi Dachi - Standing stance',
    meta: {
      title: 'Musubi Dachi Stance',
      author: 'Gojupedia',
      license: 'Educational use',
      sourceName: 'Gojupedia',
      sourceUrl: '/'
    }
  },
  'heisoku-dachi': {
    id: 'heisoku-dachi',
    src: '/Images/Stances/heisoku-dachi-1024x619-upscale-4x.jpg',
    alt: 'Heisoku Dachi - Closed leg stance',
    meta: {
      title: 'Heisoku Dachi Stance',
      author: 'Gojupedia',
      license: 'Educational use',
      sourceName: 'Gojupedia',
      sourceUrl: '/'
    }
  },
  'heiko-dachi': {
    id: 'heiko-dachi',
    src: '/Images/Stances/heiko-dachi-1024x619-upscale-4x.jpg',
    alt: 'Heiko Dachi - Parallel stance',
    meta: {
      title: 'Heiko Dachi Stance',
      author: 'Gojupedia',
      license: 'Educational use',
      sourceName: 'Gojupedia',
      sourceUrl: '/'
    }
  },
  'hachiji-dachi': {
    id: 'hachiji-dachi',
    src: '/Images/Stances/hachiji-dachi-1024x619-upscale-4x.jpg',
    alt: 'Hachiji Dachi - Natural stance',
    meta: {
      title: 'Hachiji Dachi Stance',
      author: 'Gojupedia',
      license: 'Educational use',
      sourceName: 'Gojupedia',
      sourceUrl: '/'
    }
  },
  'kiba-dachi': {
    id: 'kiba-dachi',
    src: '/Images/Stances/kiba-dachi-1024x619-upscale-4x.jpg',
    alt: 'Kiba Dachi - Horse stance',
    meta: {
      title: 'Kiba Dachi Stance',
      author: 'Gojupedia',
      license: 'Educational use',
      sourceName: 'Gojupedia',
      sourceUrl: '/'
    }
  },
  'shiko-dachi': {
    id: 'shiko-dachi',
    src: '/Images/Stances/shiko-dachi-1024x619-upscale-4x.jpg',
    alt: 'Shiko Dachi - Horse stance with open feet',
    meta: {
      title: 'Shiko Dachi Stance',
      author: 'Gojupedia',
      license: 'Educational use',
      sourceName: 'Gojupedia',
      sourceUrl: '/'
    }
  },
  'sanchin-dachi': {
    id: 'sanchin-dachi',
    src: '/Images/Stances/sanchin-dachi-1024x619-upscale-4x.jpg',
    alt: 'Sanchin Dachi - Three battle stance',
    meta: {
      title: 'Sanchin Dachi Stance',
      author: 'Gojupedia',
      license: 'Educational use',
      sourceName: 'Gojupedia',
      sourceUrl: '/'
    }
  },
  'zenkutsu-dachi': {
    id: 'zenkutsu-dachi',
    src: '/Images/Stances/zenkutsu-dachi-1024x619-upscale-4x.jpg',
    alt: 'Zenkutsu Dachi - Front stance',
    meta: {
      title: 'Zenkutsu Dachi Stance',
      author: 'Gojupedia',
      license: 'Educational use',
      sourceName: 'Gojupedia',
      sourceUrl: '/'
    }
  },
  'han-zenkutsu-dachi': {
    id: 'han-zenkutsu-dachi',
    src: '/Images/Stances/han-zenkutsu-dachi-1024x619-upscale-4x.jpg',
    alt: 'Han Zenkutsu Dachi - Half front stance',
    meta: {
      title: 'Han Zenkutsu Dachi Stance',
      author: 'Gojupedia',
      license: 'Educational use',
      sourceName: 'Gojupedia',
      sourceUrl: '/'
    }
  },
  'kokutsu-dachi': {
    id: 'kokutsu-dachi',
    src: '/Images/Stances/kokutsu-dachi-1024x619-upscale-4x.jpg',
    alt: 'Kokutsu Dachi - Back stance',
    meta: {
      title: 'Kokutsu Dachi Stance',
      author: 'Gojupedia',
      license: 'Educational use',
      sourceName: 'Gojupedia',
      sourceUrl: '/'
    }
  },
  'neko-ashi-dachi': {
    id: 'neko-ashi-dachi',
    src: '/Images/Stances/neko-ashi-dachi-1024x619-upscale-4x.jpg',
    alt: 'Neko Ashi Dachi - Cat stance',
    meta: {
      title: 'Neko Ashi Dachi Stance',
      author: 'Gojupedia',
      license: 'Educational use',
      sourceName: 'Gojupedia',
      sourceUrl: '/'
    }
  },
  'tsuru-ashi-dachi': {
    id: 'tsuru-ashi-dachi',
    src: '/Images/Stances/tsuru-ashi-dachi-1024x619-upscale-4x.jpg',
    alt: 'Tsuru Ashi Dachi - Crane stance',
    meta: {
      title: 'Tsuru Ashi Dachi Stance',
      author: 'Gojupedia',
      license: 'Educational use',
      sourceName: 'Gojupedia',
      sourceUrl: '/'
    }
  },
  'kosa-dachi': {
    id: 'kosa-dachi',
    src: '/Images/Stances/kosa-dachi-1024x619-upscale-4x.jpg',
    alt: 'Kosa Dachi - Cross stance',
    meta: {
      title: 'Kosa Dachi Stance',
      author: 'Gojupedia',
      license: 'Educational use',
      sourceName: 'Gojupedia',
      sourceUrl: '/'
    }
  }
};


