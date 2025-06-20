import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import MarkdownRenderer from '@/components/hojo-undo/HojoUndoSectionRenderer';
import { useMarkdownContent } from '@/utils/markdown';

const Stances = () => {
  const { t, i18n } = useTranslation();
  const [isHoeiJukuOpen, setIsHoeiJukuOpen] = useState(false);
  
  const stanceTerms = i18n.t('terminology.sections.stances-content.terms', { returnObjects: true }) as Record<string, { name: string; japanese?: string; english: string; details?: string }>;
  const hoeiJukuContent = useMarkdownContent('techniques/hoei-juku-stances');
  
  const termKeys = stanceTerms && typeof stanceTerms === 'object' ? Object.keys(stanceTerms) : [];

  return (
    <div className="space-y-6">
      <p className="text-muted-foreground mb-4">
        {t('terminology.sections.stances-content.description')}
      </p>

      <div className="border border-muted rounded-md mb-2 overflow-hidden">
        <div className="bg-muted/30 px-4 py-3 text-sm font-medium text-secondary-foreground">
          {t('terminology.sections.stances-content.title')}
        </div>
        <div className="px-4 py-2 bg-card">
          {termKeys.length > 0 ? (
            <ul className="list-disc pl-4 space-y-2">
              {termKeys.map(termKey => {
                const term = stanceTerms[termKey];
                if (!term) return null;
                return (
                  <li key={termKey}>
                    {term.name} {term.japanese && `(${term.japanese})`} - {term.english}
                    {term.details && <p className="text-sm text-muted-foreground pl-2">{term.details}</p>}
                  </li>
                );
              })}
            </ul>
          ) : (
            <p>{t('terminology.noTermsAvailable')}</p>
          )}
        </div>
      </div>

      {/* Hoei Juku Stances Section */}
      <Collapsible open={isHoeiJukuOpen} onOpenChange={setIsHoeiJukuOpen}>
        <CollapsibleTrigger asChild>
          <Button variant="outline" className="w-full justify-between">
            <span>{t('techniques.hoeiJuku.stances.title')}</span>
            {isHoeiJukuOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="mt-4">
          <div className="border border-muted rounded-md overflow-hidden">
            <div className="bg-blue-50 px-4 py-3 text-sm font-medium text-blue-900">
              {t('techniques.hoeiJuku.stances.description')}
            </div>
            <div className="px-4 py-4 bg-card">
              {hoeiJukuContent && <MarkdownRenderer markdownContent={hoeiJukuContent} />}
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default Stances;