import React from 'react';
import MarkdownRenderer from '@/components/hojo-undo/HojoUndoSectionRenderer';
import { useMarkdownContent } from '@/utils/markdown';
import { useTranslation } from 'react-i18next';
import TheoryHeader from '@/components/theory/TheoryHeader';

const MorioHigaonnaSection = () => {
  const { t } = useTranslation();
  const markdownContent = useMarkdownContent('history/morio-higaonna');

  return (
    <div className="min-h-screen bg-background">
      <TheoryHeader
        title={t('history.morioHigaonna')}
        description={t('history.morioHigaonna-desc')}
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

export default MorioHigaonnaSection;
