import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import MarkdownRenderer from '@/components/hojo-undo/HojoUndoSectionRenderer';
import { useMarkdownContent } from '@/utils/markdown';

const Warmup = () => {
  const { t } = useTranslation();
  const [isHoeiJukuOpen, setIsHoeiJukuOpen] = useState(false);
  const hoeiJukuContent = useMarkdownContent('techniques/hoei-juku-warmup');

  return (
    <div className="space-y-6">
      <p className="text-muted-foreground mb-4">
        {t('techniques.hoeiJuku.warmup.description')}
      </p>

      {/* Hoei Juku Warm-up Section */}
      <Collapsible open={isHoeiJukuOpen} onOpenChange={setIsHoeiJukuOpen}>
        <CollapsibleTrigger asChild>
          <Button variant="outline" className="w-full justify-between">
            <span>{t('techniques.hoeiJuku.warmup.title')}</span>
            {isHoeiJukuOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="mt-4">
          <div className="border border-muted rounded-md overflow-hidden">
            <div className="bg-blue-50 px-4 py-3 text-sm font-medium text-blue-900">
              {t('techniques.hoeiJuku.warmup.description')}
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

export default Warmup; 