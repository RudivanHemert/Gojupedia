import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MobileLayout from '@/components/layout/MobileLayout';
import MarkdownRenderer from '@/components/utils/MarkdownRenderer'; 
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { useTranslation } from 'react-i18next';

// Import all general markdown content
const markdownContentModules = import.meta.glob('../content/*.md', { 
  query: '?raw', 
  import: 'default', 
  eager: true 
});
console.log('[MarkdownContentPage] Loaded general markdown modules:', markdownContentModules);

type MarkdownPageParams = {
  pageKey: string; // e.g., 'theory', 'history'
};

const MarkdownContentPage = () => {
  const { pageKey } = useParams<MarkdownPageParams>();
  const { t } = useTranslation();
  const [markdown, setMarkdown] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Construct i18n key for the page title
  const pageTitleKey = `navigation.${pageKey}`; // Assuming title keys match pageKey under navigation
  const translatedPageTitle = t(pageTitleKey, pageKey); // Fallback to pageKey

  useEffect(() => {
    console.log(`[MarkdownContentPage] Effect triggered for: pageKey=${pageKey}`);
    setIsLoading(true);
    setError(null);
    setMarkdown(null);

    if (!pageKey) {
      console.log('[MarkdownContentPage] Missing pageKey.');
      setError("Page key not specified in URL.");
      setIsLoading(false);
      return;
    }

    // Construct the expected path key relative to this file
    const targetPath = `../content/${pageKey}.md`;
    console.log(`[MarkdownContentPage] Looking for path: ${targetPath}`);

    // Check if the path exists in the loaded modules
    if (targetPath in markdownContentModules) {
      const loadedContent = markdownContentModules[targetPath];
      if (typeof loadedContent === 'string') {
        console.log('[MarkdownContentPage] Found markdown content.');
        setMarkdown(loadedContent);
        setError(null);
      } else {
        console.error(`[MarkdownContentPage] Content for path ${targetPath} is not a string:`, loadedContent);
        setError(`Invalid content format for ${pageKey}.`);
        setMarkdown(null);
      }
    } else {
      console.error(`[MarkdownContentPage] Markdown file not found in glob results for path: ${targetPath}`);
      setError(`Content file not found for ${pageKey}.`);
      setMarkdown(null);
    }

    setIsLoading(false);
    console.log('[MarkdownContentPage] Processing finished.');

  }, [pageKey]); // Removed 't' from dependencies, unlikely to change

  console.log(`[MarkdownContentPage] Rendering with: isLoading=${isLoading}, error=${error}, hasMarkdown=${!!markdown}, title=${translatedPageTitle}`);

  return (
    // Assuming MobileLayout handles header visibility based on route or context?
    // Might need adjustment if header should always be hidden/shown here.
    <MobileLayout> 
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
    </MobileLayout>
  );
};

export default MarkdownContentPage; 