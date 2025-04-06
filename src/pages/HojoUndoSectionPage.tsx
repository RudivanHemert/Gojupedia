import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MobileLayout from '@/components/layout/MobileLayout';
import MarkdownRenderer from '@/components/utils/MarkdownRenderer'; // Updated import path
// Remove direct import of hojoUndoData, we might not need it directly if using i18n keys
// import { hojoUndoData } from '@/data/hojoUndoData'; 
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
// Remove HojoUndoEquipment import if hojoUndoData isn't used directly
// import { HojoUndoEquipment } from '@/data/hojoUndoData'; 
import { useTranslation } from 'react-i18next'; // Import useTranslation

// Use Vite's import.meta.glob to import all markdown files eagerly
// Use the new query syntax instead of the deprecated 'as' option
const markdownModules = import.meta.glob('../content/hojo-undo/**/*.md', { 
  query: '?raw', 
  import: 'default', 
  eager: true 
});
console.log('[HojoUndoSectionPage] Loaded markdown modules:', markdownModules);

// Define type for params directly if not using hojoUndoData keys
type HojoUndoParams = {
  equipmentId: string; // Keep as string, used for path construction
  sectionKey: string; 
};

// Kebab to camel function remains the same
function kebabToCamel(s: string): string {
  return s.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
}

const HojoUndoSectionPage = () => {
  const { equipmentId, sectionKey } = useParams<HojoUndoParams>();
  const { t } = useTranslation(); // Initialize useTranslation hook
  const [markdown, setMarkdown] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Get equipment name and section title using i18n keys
  const equipmentNameKey = `hojoUndo.${equipmentId?.replace(/-/g, '')}.name`; // Construct key (remove hyphens for key convention)
  const sectionTitleKey = `hojoUndo.${equipmentId?.replace(/-/g, '')}.${kebabToCamel(sectionKey ?? '')}`;
  
  // Use t() function to get translated strings, provide fallback
  const translatedEquipmentName = t(equipmentNameKey, equipmentId); // Fallback to ID
  const translatedSectionTitle = t(sectionTitleKey, sectionKey); // Fallback to sectionKey

  useEffect(() => {
    console.log(`[HojoUndoSectionPage] Effect triggered for: eq=${equipmentId}, sec=${sectionKey}`);
    setIsLoading(true);
    setError(null);
    setMarkdown(null);

    if (!equipmentId || !sectionKey) {
        console.log('[HojoUndoSectionPage] Missing equipmentId or sectionKey.');
        setError("Equipment or section not specified in URL.");
        setIsLoading(false);
        return;
    }

    // Construct the expected path key for the markdownModules object
    const targetPath = `../content/hojo-undo/${equipmentId}/${sectionKey}.md`;
    console.log(`[HojoUndoSectionPage] Looking for path: ${targetPath}`);

    if (targetPath in markdownModules) {
      const loadedContent = markdownModules[targetPath];
      if (typeof loadedContent === 'string') {
        console.log('[HojoUndoSectionPage] Found markdown content.');
        setMarkdown(loadedContent);
        setError(null);
      } else {
        console.error(`[HojoUndoSectionPage] Content for path ${targetPath} is not a string:`, loadedContent);
        setError(`Invalid content format for ${equipmentId}/${sectionKey}.`);
        setMarkdown(null);
      }
    } else {
      console.error(`[HojoUndoSectionPage] Markdown file not found in glob results for path: ${targetPath}`);
      setError(`Content file not found for ${equipmentId}/${sectionKey}.`);
      setMarkdown(null);
    }

    setIsLoading(false);
    console.log('[HojoUndoSectionPage] Processing finished.');

  }, [equipmentId, sectionKey]);

  // Construct page title using translated names
  const pageTitle = `${translatedEquipmentName}: ${translatedSectionTitle}`;
  console.log(`[HojoUndoSectionPage] Rendering with: isLoading=${isLoading}, error=${error}, hasMarkdown=${!!markdown}, title=${pageTitle}`);

  return (
    <MobileLayout hideHeader={true}> 
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">{pageTitle}</h1>

        {isLoading && <p>Loading...</p>}
        {error && <p className="text-red-500 font-semibold">Error: {error}</p>}
        
        {!isLoading && !error && markdown !== null && (
          <MarkdownRenderer markdownContent={markdown} />
        )}
        
        {!isLoading && !error && markdown === null && (
          <p>Content could not be displayed.</p>
        )}

        <Button asChild variant="outline" className="mt-6">
          <Link to={`/hojo-undo`}>
            <ChevronLeft className="mr-2 h-4 w-4" />
            {t('navigation.backToHojoUndo', 'Back to Hojo Undo Overview')} 
          </Link>
        </Button>
      </div>
    </MobileLayout>
  );
};

export default HojoUndoSectionPage; 