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
        description={t('history.tetsujiNakamura-desc')}
        backUrl="/history"
      />
      <div className="p-4">
        <div className="w-full">
          {markdownContent && <MarkdownRenderer markdownContent={markdownContent} />}
        </div>
      </div>
    </div>
  );
};

export default TetsujiNakamuraSection;
