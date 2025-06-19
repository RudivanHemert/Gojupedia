import React from 'react';
import { useTranslation } from 'react-i18next';
import MobileLayout from '@/components/layout/MobileLayout';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';
import MarkdownRenderer from '@/components/hojo-undo/HojoUndoSectionRenderer';
import { useMarkdownContent } from '@/utils/markdown';

const GeneralIntro = () => {
  const { t } = useTranslation();
  const markdownContent = useMarkdownContent('hojo-undo/introduction');

  return (
    <MobileLayout hideHeader={true}>
      <div className="p-4">
        <div className="mb-6">
          <Button asChild variant="outline" className="mb-4">
            <Link to="/hojo-undo">
              <ChevronLeft className="mr-2 h-4 w-4" />
              {t('common.back')}
            </Link>
          </Button>
          <h1 className="text-2xl font-bold mb-2">{t('hojoUndo.introduction.title')}</h1>
          <p className="text-muted-foreground">{t('hojoUndo.description')}</p>
        </div>
        
        {markdownContent && (
          <div className="prose prose-stone dark:prose-invert max-w-none">
            <MarkdownRenderer markdownContent={markdownContent} />
          </div>
        )}
      </div>
    </MobileLayout>
  );
};

export default GeneralIntro; 