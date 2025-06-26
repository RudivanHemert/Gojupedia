import React from 'react';
import { useTranslation } from 'react-i18next';
import TheoryHeader from '@/components/theory/TheoryHeader';
import MarkdownRenderer from '@/components/hojo-undo/HojoUndoSectionRenderer';
import { useMarkdownContent } from '@/utils/markdown';

const KumitePrinciples = () => {
  const { t } = useTranslation();
  const content = useMarkdownContent('kumite/principles');

  return (
    <div className="min-h-screen bg-white">
      <TheoryHeader 
        title={t('kumite.principles.title')}
        description={t('kumite.principles.core-principles')}
        backUrl="/kumite"
      />
      <div className="p-4">
        <div className="max-w-4xl mx-auto">
          {content && <MarkdownRenderer markdownContent={content} />}
        </div>
      </div>
    </div>
  );
};

export default KumitePrinciples; 