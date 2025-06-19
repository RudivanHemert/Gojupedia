import { useLanguage } from '@/contexts/LanguageContext';

// Import all markdown content with language variants
const markdownContentModules = import.meta.glob('../content/**/*.md', { 
  query: '?raw', 
  import: 'default', 
  eager: true 
});

// Helper function to remove language codes from markdown content
const removeLanguageCodes = (content: string): string => {
  // Remove language codes like [NL], [DE], etc. from the beginning of lines
  return content.replace(/^\[[A-Z]{2}\]\s*/gm, '');
};

export const useMarkdownContent = (basePath: string) => {
  const { language } = useLanguage();

  // Construct the paths including the ../content/ prefix
  const languageSpecificPath = `../content/${basePath}.${language}.md`;
  const fallbackPath = `../content/${basePath}.md`;
  const englishFallbackPath = `../content/${basePath}.en.md`; // Added English fallback

  console.log(`[useMarkdownContent] Looking for: ${languageSpecificPath}, ${englishFallbackPath}, or ${fallbackPath}`);
  console.log(`[useMarkdownContent] Available modules:`, Object.keys(markdownContentModules));

  // Try language-specific file first
  if (languageSpecificPath in markdownContentModules) {
    const content = markdownContentModules[languageSpecificPath];
    if (typeof content === 'string') {
      console.log(`[useMarkdownContent] Found language-specific content for ${languageSpecificPath}`);
      return removeLanguageCodes(content);
    }
  }

  // Fallback to default language file (e.g., .en.md) if language-specific file not found
  if (englishFallbackPath in markdownContentModules) {
    const content = markdownContentModules[englishFallbackPath];
    if (typeof content === 'string') {
      console.log(`[useMarkdownContent] Found English fallback content for ${englishFallbackPath}`);
      return removeLanguageCodes(content);
    }
  }

  // Fallback to base file (e.g., .md) if default language file not found
  if (fallbackPath in markdownContentModules) {
    const content = markdownContentModules[fallbackPath];
    if (typeof content === 'string') {
      console.log(`[useMarkdownContent] Found base content for ${fallbackPath}`);
      return removeLanguageCodes(content);
    }
  }

  console.log(`[useMarkdownContent] No content found for ${basePath}`);
  return null;
}; 