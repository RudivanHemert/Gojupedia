import React from 'react';
import { useTranslation } from 'react-i18next';
import TheoryHeader from '@/components/theory/TheoryHeader';
import MarkdownRenderer from '@/components/hojo-undo/HojoUndoSectionRenderer';
import { useMarkdownContent } from '@/utils/markdown';

const DefenseTechniques = () => {
  const { t } = useTranslation();
  const content = useMarkdownContent('kumite/techniques/defense-techniques');

  return (
    <div className="min-h-screen bg-white">
      <TheoryHeader 
        title={t('kumite.techniques.defense-techniques')}
        description={t('kumite.techniques.defense-techniques')}
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

export default DefenseTechniques; 