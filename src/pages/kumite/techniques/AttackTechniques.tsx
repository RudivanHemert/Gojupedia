import React from 'react';
import { useTranslation } from 'react-i18next';
import TheoryHeader from '@/components/theory/TheoryHeader';
import MarkdownRenderer from '@/components/hojo-undo/HojoUndoSectionRenderer';
import { useMarkdownContent } from '@/utils/markdown';

const AttackTechniques = () => {
  const { t } = useTranslation();
  const content = useMarkdownContent('kumite/techniques/attack-techniques');

  return (
    <div className="min-h-screen bg-white">
      <TheoryHeader 
        title={t('kumite.techniques.attack-techniques')}
        description={t('kumite.techniques.attack-techniques')}
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

export default AttackTechniques; 