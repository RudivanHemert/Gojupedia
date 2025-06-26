import React from 'react';
import MarkdownRenderer from '@/components/hojo-undo/HojoUndoSectionRenderer';
import { useMarkdownContent } from '@/utils/markdown';
import { useTranslation } from 'react-i18next';
import TheoryHeader from '@/components/theory/TheoryHeader';

const ChojunMiyagiSection = () => {
  const { t } = useTranslation();
  const markdownContent = useMarkdownContent('history/chojun-miyagi');

  return (
    <div className="min-h-screen bg-white">
      <TheoryHeader 
        title={t('history.chojunMiyagi')}
        description="De grondlegger van Goju Ryu Karate en een van de meest invloedrijke karate meesters."
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

export default ChojunMiyagiSection;
