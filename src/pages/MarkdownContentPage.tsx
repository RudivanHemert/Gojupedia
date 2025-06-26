import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/contexts/LanguageContext';

// Import all markdown content with language variants
const markdownContentModules = import.meta.glob('../content/**/*.{md,*.md}', { 
  query: '?raw', 
  import: 'default', 
  eager: true 
});

type MarkdownPageParams = {
  pageKey: string; // e.g., 'theory', 'history'
};

const MarkdownContentPage = () => {
  const { pageKey } = useParams<MarkdownPageParams>();
  const { t } = useTranslation();
  const { language } = useLanguage();
  const [markdown, setMarkdown] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Construct i18n key for the page title
  const pageTitleKey = `navigation.${pageKey}`; // Assuming title keys match pageKey under navigation
  const translatedPageTitle = t(pageTitleKey, pageKey); // Fallback to pageKey

  useEffect(() => {
    console.log(`[MarkdownContentPage] Effect triggered for: pageKey=${pageKey}, language=${language}`);
    setIsLoading(true);
    setError(null);
    setMarkdown(null);

    if (!pageKey) {
      console.log('[MarkdownContentPage] Missing pageKey.');
      setError("Page key not specified in URL.");
      setIsLoading(false);
      return;
    }

    // First try to load the language-specific file
    const languageSpecificPath = `../content/${pageKey}/${pageKey}.${language}.md`;
    const fallbackPath = `../content/${pageKey}/${pageKey}.md`;

    console.log(`[MarkdownContentPage] Looking for paths: ${languageSpecificPath} or ${fallbackPath}`);

    // Try language-specific file first
    if (languageSpecificPath in markdownContentModules) {
      const loadedContent = markdownContentModules[languageSpecificPath];
      if (typeof loadedContent === 'string') {
        console.log('[MarkdownContentPage] Found language-specific markdown content.');
        setMarkdown(loadedContent);
        setError(null);
        setIsLoading(false);
        return;
      }
    }

    // Fallback to default file if language-specific file not found
    if (fallbackPath in markdownContentModules) {
      const loadedContent = markdownContentModules[fallbackPath];
      if (typeof loadedContent === 'string') {
        console.log('[MarkdownContentPage] Found fallback markdown content.');
        setMarkdown(loadedContent);
        setError(null);
      } else {
        console.error(`[MarkdownContentPage] Content for path ${fallbackPath} is not a string:`, loadedContent);
        setError(`Invalid content format for ${pageKey}.`);
        setMarkdown(null);
      }
    } else {
      console.error(`[MarkdownContentPage] Markdown file not found in glob results for paths: ${languageSpecificPath} or ${fallbackPath}`);
      setError(`Content file not found for ${pageKey}.`);
      setMarkdown(null);
    }

    setIsLoading(false);
    console.log('[MarkdownContentPage] Processing finished.');

  }, [pageKey, language]);

  console.log(`[MarkdownContentPage] Rendering with: isLoading=${isLoading}, error=${error}, hasMarkdown=${!!markdown}, title=${translatedPageTitle}`);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{translatedPageTitle}</h1>

      {isLoading && <p>Loading...</p>}
      {error && <p className="text-red-500 font-semibold">Error: {error}</p>}
      
      {!isLoading && !error && markdown !== null && (
        <MarkdownRenderer markdownContent={markdown} />
      )}
      
      {!isLoading && !error && markdown === null && (
        <p>Content could not be displayed.</p>
      )}

      {/* Consider a more dynamic back button or removing it if MobileLayout handles global nav */}
      <Button asChild variant="outline" className="mt-6">
        <Link to={`/`}> {/* Link back to home for now */}
          <ChevronLeft className="mr-2 h-4 w-4" />
          {t('navigation.backToHome', 'Back to Home')}
        </Link>
      </Button>
    </div>
  );
};

export default MarkdownContentPage; 