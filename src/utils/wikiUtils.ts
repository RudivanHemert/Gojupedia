const WIKI_BASE_URL = 'https://raw.githubusercontent.com/wiki/RudivanHemert/goju-wiki-quest';
const WIKI_MEDIA_BASE_URL = `${WIKI_BASE_URL}/media`;

export interface WikiContent {
  content: string;
  metadata?: {
    title?: string;
    description?: string;
    lastUpdated?: string;
  };
}

export interface WikiMedia {
  url: string;
  type: 'image' | 'video';
  title?: string;
  description?: string;
}

export const getWikiImageUrl = (path: string): string => {
  return `${WIKI_MEDIA_BASE_URL}/${path}`;
};

export const getWikiPageUrl = (path: string): string => {
  return `${WIKI_BASE_URL}/${path}.md`;
};

export const parseWikiContent = (markdown: string): WikiContent => {
  // Split front matter from content if it exists
  const parts = markdown.split('---\n');
  if (parts.length === 3) {
    const [_, frontMatter, content] = parts;
    const metadata = parseFrontMatter(frontMatter);
    return { content: content.trim(), metadata };
  }
  
  return { content: markdown.trim() };
};

const parseFrontMatter = (frontMatter: string): WikiContent['metadata'] => {
  const metadata: WikiContent['metadata'] = {};
  const lines = frontMatter.split('\n');
  
  lines.forEach(line => {
    const [key, ...valueParts] = line.split(':');
    if (key && valueParts.length) {
      const value = valueParts.join(':').trim();
      switch (key.trim()) {
        case 'title':
          metadata.title = value;
          break;
        case 'description':
          metadata.description = value;
          break;
        case 'lastUpdated':
          metadata.lastUpdated = value;
          break;
      }
    }
  });
  
  return metadata;
};

export const getMediaList = async (category: string): Promise<WikiMedia[]> => {
  try {
    const response = await fetch(`${WIKI_MEDIA_BASE_URL}/${category}/index.json`);
    if (!response.ok) throw new Error('Failed to fetch media list');
    return await response.json();
  } catch (error) {
    console.error('Error fetching media list:', error);
    return [];
  }
}; 