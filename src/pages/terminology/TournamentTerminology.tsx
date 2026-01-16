import React from 'react';
import { useTranslation } from 'react-i18next';
import TheoryHeader from '@/components/theory/TheoryHeader';
import AudioButton from '@/components/ui/audio-button';

const TournamentTerminology = () => {
  const { t } = useTranslation();
  const content = t('terminology.sections.tournament-terms-content', { returnObjects: true }) as any;

  return (
    <div className="min-h-screen bg-background">
      <TheoryHeader
        title={t('terminology.sections.tournament-terms')}
        description={content.description}
        backUrl="/terminology"
      />
      <div className="p-4">
        <div className="w-full max-w-4xl mx-auto">
          <TournamentTerminologyContent content={content} />
        </div>
      </div>
    </div>
  );
};

const TournamentTerminologyContent = ({ content }: { content: any }) => {
  const renderTerms = (terms: any) => (
    <div className="grid gap-4">
      {Object.entries(terms).map(([key, value]: any) => (
        <div key={key} className="p-4 border rounded-lg">
          <div className="flex items-center gap-2">
            <span className="font-semibold">{key}</span>
            <AudioButton text={key} lang="ja-JP" size="sm" />
            : <span className="text-muted-foreground">{value}</span>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="space-y-8">
      {content.terms && (
        <section>
          <h2 className="text-xl font-bold mb-2">{content.scoringTitle || 'Scoring'}</h2>
          {renderTerms(content.terms)}
        </section>
      )}
      {content.officialsTerms && (
        <section>
          <h2 className="text-xl font-bold mb-2">{content.officialsTitle || 'Officials'}</h2>
          {renderTerms(content.officialsTerms)}
        </section>
      )}
      {content.commandsTerms && (
        <section>
          <h2 className="text-xl font-bold mb-2">{content.commandsTitle || 'Commands'}</h2>
          {renderTerms(content.commandsTerms)}
        </section>
      )}
      {content.otherTerms && (
        <section>
          <h2 className="text-xl font-bold mb-2">{content.otherTitle || 'Other Terms'}</h2>
          {renderTerms(content.otherTerms)}
        </section>
      )}
    </div>
  );
};

export default TournamentTerminology;