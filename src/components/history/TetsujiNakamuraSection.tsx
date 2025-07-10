import React from 'react';
import MarkdownRenderer from '@/components/hojo-undo/HojoUndoSectionRenderer';
import { useMarkdownContent } from '@/utils/markdown';
import { useTranslation } from 'react-i18next';
import TheoryHeader from '@/components/theory/TheoryHeader';

const TetsujiNakamuraSection = () => {
  const { t } = useTranslation();
  const markdownContent = useMarkdownContent('history/tetsuji-nakamura');

  return (
    <div className="min-h-screen bg-background">
      <TheoryHeader 
        title={t('history.tetsujiNakamura')}
        description="Een moderne Goju Ryu meester en leraar die de traditie voortzet in de 21e eeuw."
        backUrl="/history"
      />
      <div className="p-4">
        <div className="w-full max-w-4xl mx-auto">
          {markdownContent && <MarkdownRenderer markdownContent={markdownContent} />}
        </div>
      </div>
    </div>
  );
};

export default TetsujiNakamuraSection;
