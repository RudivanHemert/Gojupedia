import React from 'react';
import MarkdownRenderer from '@/components/hojo-undo/HojoUndoSectionRenderer';
import { useMarkdownContent } from '@/utils/markdown';
import { useTranslation } from 'react-i18next';
import TheoryHeader from '@/components/theory/TheoryHeader';

const KanryoHigaonnaSection = () => {
  const { t } = useTranslation();
  const markdownContent = useMarkdownContent('history/kanryo-higaonna');

  return (
    <div className="min-h-screen bg-background">
      <TheoryHeader 
        title={t('history.kanryoHigaonna')}
        description="De leraar van Chojun Miyagi en een belangrijke figuur in de ontwikkeling van Goju Ryu."
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

export default KanryoHigaonnaSection;
