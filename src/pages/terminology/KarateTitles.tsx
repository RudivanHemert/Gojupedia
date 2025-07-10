import React from 'react';
import { useTranslation } from 'react-i18next';
import TheoryHeader from '@/components/theory/TheoryHeader';
import AudioButton from '@/components/ui/audio-button';

const KarateTitles = () => {
  const { t } = useTranslation();
  const content = t('terminology.sections.karate-titles-content', { returnObjects: true }) as any;

  return (
    <div className="min-h-screen bg-background">
      <TheoryHeader 
        title={t('terminology.sections.karate-titles')}
        description={content.description}
        backUrl="/terminology"
      />
      <div className="p-4">
        <div className="w-full max-w-4xl mx-auto">
          <KarateTitlesContent content={content} />
        </div>
      </div>
    </div>
  );
};

const KarateTitlesContent = ({ content }: { content: any }) => {
  const renderTerms = (terms: any) => (
    <div className="grid gap-4">
      {Object.entries(terms).map(([key, term]: any) => (
        <div key={key} className="p-4 border rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <div className="flex items-center gap-1">
              <span className="text-lg font-japanese">{term.japanese}</span>
              {term.japanese && <AudioButton text={term.japanese} size="sm" />}
            </div>
            <span className="font-semibold">{term.name}</span>
          </div>
          <p className="text-muted-foreground">{term.english}</p>
        </div>
      ))}
    </div>
  );

  return (
    <div className="space-y-8">
      {content.instructorTitles && (
        <section>
          <h2 className="text-xl font-bold mb-2">{content.instructorTitles.title}</h2>
          {renderTerms(content.instructorTitles.terms)}
        </section>
      )}
      {content.studentTitles && (
        <section>
          <h2 className="text-xl font-bold mb-2">{content.studentTitles.title}</h2>
          {renderTerms(content.studentTitles.terms)}
        </section>
      )}
      {content.otherTitles && (
        <section>
          <h2 className="text-xl font-bold mb-2">{content.otherTitles.title}</h2>
          {renderTerms(content.otherTitles.terms)}
        </section>
      )}
      {content.genericTerms && (
        <section>
          <h2 className="text-xl font-bold mb-2">Overige termen</h2>
          {renderTerms(content.genericTerms)}
        </section>
      )}
    </div>
  );
};

export default KarateTitles;