import { useLanguage } from '@/contexts/LanguageContext';

// Import all markdown content with language variants
const markdownContentModules = import.meta.glob('../content/**/*.{md,*.md}', { 
  query: '?raw', 
  import: 'default', 
  eager: true 
});

export const useMarkdownContent = (basePath: string) => {
  const { language } = useLanguage();

  // First try to load the language-specific file
  const languageSpecificPath = `${basePath}.${language}.md`;
  const fallbackPath = `${basePath}.md`;

  // Try language-specific file first
  if (languageSpecificPath in markdownContentModules) {
    const content = markdownContentModules[languageSpecificPath];
    if (typeof content === 'string') {
      return content;
    }
  }

  // Fallback to default file if language-specific file not found
  if (fallbackPath in markdownContentModules) {
    const content = markdownContentModules[fallbackPath];
    if (typeof content === 'string') {
      return content;
    }
  }

  return null;
}; 