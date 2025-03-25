export interface MediaItem {
  type: 'image' | 'video';
  url: string;
  title?: string;
  description?: string;
}

export interface MediaData {
  vitalPoints: {
    [key: string]: MediaItem[];
  };
  terminology: {
    [key: string]: MediaItem[];
  };
}

export const mediaData: MediaData = {
  vitalPoints: {
    // Example data structure
    "Shomon": [
      {
        type: "image",
        url: "https://example.com/vital-points/shomon.jpg",
        title: "Shomon (正門)",
        description: "Skull pressure point"
      }
    ],
    "Kasumi": [
      {
        type: "image",
        url: "https://example.com/vital-points/kasumi.jpg",
        title: "Kasumi (霞)",
        description: "Temple pressure point"
      }
    ]
  },
  terminology: {
    // Example data structure
    "Zanshin": [
      {
        type: "video",
        url: "https://www.youtube.com/embed/example",
        title: "Zanshin Demonstration",
        description: "Proper zanshin posture and application"
      }
    ]
  }
}; 