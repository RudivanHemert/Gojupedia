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
        description="Een van de meest gerespecteerde Goju Ryu meesters en een belangrijke leraar in de moderne tijd."
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

export default MorioHigaonnaSection;
