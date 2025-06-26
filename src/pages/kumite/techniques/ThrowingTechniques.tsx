import React from 'react';
import { useTranslation } from 'react-i18next';
import TheoryHeader from '@/components/theory/TheoryHeader';
import MarkdownRenderer from '@/components/hojo-undo/HojoUndoSectionRenderer';
import { useMarkdownContent } from '@/utils/markdown';

const ThrowingTechniques = () => {
  const { t } = useTranslation();
  const content = useMarkdownContent('kumite/techniques/throwing-techniques');

  return (
    <div className="min-h-screen bg-white">
      <TheoryHeader 
        title={t('kumite.techniques.throwing-techniques')}
        description={t('kumite.techniques.throwing-techniques')}
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

export default ThrowingTechniques; 