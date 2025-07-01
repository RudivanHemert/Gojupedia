import React from 'react';
import { useTranslation } from 'react-i18next';
import TheoryHeader from '@/components/theory/TheoryHeader';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

const Warmup = () => {
  const { t } = useTranslation();
  const { warmupId } = useParams();
  const termsObject = t('terminology.sections.warmup-content.terms', { returnObjects: true }) as Record<string, any>;

  // Als er een warmupId is, toon de detailpagina
  if (warmupId) {
    return <WarmupDetail termsObject={termsObject} />;
  }

  // Anders toon de overzichtspagina
  return (
    <div className="min-h-screen bg-white">
      <TheoryHeader 
        title={t('terminology.sections.warmup')}
        description={t('terminology.sections.warmup-content.description')}
        backUrl="/terminology"
      />
      <div className="p-4">
        <div className="w-full max-w-4xl mx-auto">
          <WarmupList termsObject={termsObject} />
        </div>
      </div>
    </div>
  );
};

const WarmupList = ({ termsObject }: { termsObject: Record<string, any> }) => {
  const { t } = useTranslation();
  return (
    <div className="space-y-6">
      <p className="text-muted-foreground">
        {t('terminology.sections.warmup-content.description')}
      </p>
      <div className="grid gap-4">
        {Object.entries(termsObject).map(([key, term]) => (
          <a
            key={key}
            href={`/terminology/warmup/${key}`}
            className="block p-4 border rounded-lg hover:bg-stone-50 transition-colors"
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

const warmupYoutubeLinks: Record<string, string> = {
  // Goju-Ryu specifieke video's voor warming-up oefeningen
  // 'junbi-undo': 'https://www.youtube.com/watch?v=...', // Goju-Ryu Junbi Undo
  // 'hojo-undo': 'https://www.youtube.com/watch?v=...', // Goju-Ryu Hojo Undo
  // 'kihon-undo': 'https://www.youtube.com/watch?v=...', // Goju-Ryu Kihon Undo
  // Video's worden alleen toegevoegd als er specifieke Goju-Ryu demonstraties beschikbaar zijn
};

const WarmupDetail = ({ termsObject }: { termsObject: Record<string, any> }) => {
  const { warmupId } = useParams();
  const navigate = useNavigate();
  const term = warmupId ? termsObject[warmupId] : null;
  const videoUrl = warmupId && warmupYoutubeLinks[warmupId] ? warmupYoutubeLinks[warmupId] : null;

  if (!term) {
    return <div className="p-8 text-center text-red-500">Techniek niet gevonden.</div>;
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="p-4 max-w-2xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 mb-4 text-stone-600 hover:text-stone-900"
        >
          <ChevronLeft className="h-5 w-5" /> Terug
        </button>
        <h1 className="text-3xl font-bold mb-2">{term.name} <span className="text-lg font-japanese">{term.japanese}</span></h1>
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

export default Warmup; 