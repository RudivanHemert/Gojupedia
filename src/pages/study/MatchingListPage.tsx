import React from 'react';
import { buildStudies } from '@/data';
import StudyCard from '@/components/study/StudyCard';
import { useTranslation } from 'react-i18next';
import TheoryHeader from '@/components/theory/TheoryHeader';

const MatchingListPage = () => {
  const { t, i18n } = useTranslation();
  const allStudies = React.useMemo(() => buildStudies(t), [i18n.language]);
  const matchingStudies = allStudies.filter(study => study.type === 'matching');

  return (
    <>
      <TheoryHeader 
        title={t('study.matching.title', t('title', 'Matching'))}
        description={t('study.matching.description', t('description', 'Match terms and concepts'))}
        backUrl="/study"
      />

      {/* Matching Cards */}
      <div className="px-4 py-6 space-y-4">
        {matchingStudies.length > 0 ? (
          matchingStudies.map(study => (
            <StudyCard key={study.id} study={study} />
          ))
        ) : (
          <p className="text-center text-muted-foreground italic">
            {t('study.noMatching', 'Er zijn momenteel geen matching oefeningen beschikbaar.')}
          </p>
        )}
      </div>
    </>
  );
};

export default MatchingListPage; 