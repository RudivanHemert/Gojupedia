import React from 'react';
import { useTranslation } from 'react-i18next';
import TheoryHeader from '@/components/theory/TheoryHeader';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import AudioButton from '@/components/ui/audio-button';

const Stances = () => {
  const { t } = useTranslation();
  const { stanceId } = useParams();
  const termsObject = t('terminology.sections.stances-content.terms', { returnObjects: true }) as Record<string, any>;

  // Als er een stanceId is, toon de detailpagina
  if (stanceId) {
    return <StanceDetail termsObject={termsObject} />;
  }

  // Anders toon de overzichtspagina
  return (
    <div className="min-h-screen bg-background">
      <TheoryHeader 
        title={t('terminology.sections.stances')}
        description={t('terminology.sections.stances-content.description')}
        backUrl="/techniques"
      />
      <div className="p-4">
        <div className="w-full max-w-4xl mx-auto">
          <StancesList termsObject={termsObject} />
        </div>
      </div>
    </div>
  );
};

const StancesList = ({ termsObject }: { termsObject: Record<string, any> }) => {
  const { t } = useTranslation();
  return (
    <div className="space-y-6">
      <p className="text-muted-foreground">
        {t('terminology.sections.stances-content.description')}
      </p>
      <div className="grid gap-4">
        {Object.entries(termsObject).map(([key, term]) => (
          <a
            key={key}
            href={`/terminology/stances/${key}`}
            className="block p-4 border rounded-lg hover:bg-muted transition-colors"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg font-japanese">{term.japanese}</span>
              <span className="font-semibold">{term.name}</span>
            </div>
            <p className="text-muted-foreground">{term.english}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

const stanceYoutubeLinks: Record<string, string> = {
  // Goju-Ryu specifieke video's voor standen
  // 'sanchin-dachi': 'https://www.youtube.com/watch?v=...', // Goju-Ryu Sanchin Dachi
  // 'zenkutsu-dachi': 'https://www.youtube.com/watch?v=...', // Goju-Ryu Zenkutsu Dachi
  // 'shiko-dachi': 'https://www.youtube.com/watch?v=...', // Goju-Ryu Shiko Dachi
  // Video's worden alleen toegevoegd als er specifieke Goju-Ryu demonstraties beschikbaar zijn
};

const StanceDetail = ({ termsObject }: { termsObject: Record<string, any> }) => {
  const { stanceId } = useParams();
  const navigate = useNavigate();
  const term = stanceId ? termsObject[stanceId] : null;
  const videoUrl = stanceId && stanceYoutubeLinks[stanceId] ? stanceYoutubeLinks[stanceId] : null;

  if (!term) {
    return <div className="p-8 text-center text-red-500">Techniek niet gevonden.</div>;
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="p-4 max-w-2xl mx-auto">
        <button
          onClick={() => navigate('/terminology/stances')}
          className="flex items-center gap-2 mb-4 text-stone-600 hover:text-stone-900"
        >
          <ChevronLeft className="h-5 w-5" /> Terug
        </button>
        <div className="flex items-center gap-2 mb-2">
          <h1 className="text-3xl font-bold">{term.name}</h1>
          <div className="flex items-center gap-1">
            <span className="text-lg font-japanese">{term.japanese}</span>
            <AudioButton text={term.japanese} size="sm" />
          </div>
        </div>
        <h2 className="text-lg text-muted-foreground mb-4">{term.english}</h2>
        <p className="mb-4 whitespace-pre-line">{term.details}</p>
        {videoUrl ? (
          <div className="aspect-video mb-4">
            <iframe
              width="100%"
              height="315"
              src={videoUrl.replace('watch?v=', 'embed/')}
              title={term.name}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ) : (
          <div className="text-muted-foreground italic">Geen video beschikbaar.</div>
        )}
      </div>
    </div>
  );
};

export default Stances;