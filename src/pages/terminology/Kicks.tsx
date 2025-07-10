import React from 'react';
import { useTranslation } from 'react-i18next';
import TheoryHeader from '@/components/theory/TheoryHeader';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import AudioButton from '@/components/ui/audio-button';

const Kicks = () => {
  const { t } = useTranslation();
  const { kickId } = useParams();
  const termsObject = t('terminology.sections.kicks-content.terms', { returnObjects: true }) as Record<string, any>;

  // Als er een kickId is, toon de detailpagina
  if (kickId) {
    return <KickDetail termsObject={termsObject} />;
  }

  // Anders toon de overzichtspagina
  return (
    <div className="min-h-screen bg-background">
      <TheoryHeader 
        title={t('terminology.sections.kicks')}
        description={t('terminology.sections.kicks-content.description')}
        backUrl="/techniques"
      />
      <div className="p-4">
        <div className="w-full max-w-4xl mx-auto">
          <KicksList termsObject={termsObject} />
        </div>
      </div>
    </div>
  );
};

const KicksList = ({ termsObject }: { termsObject: Record<string, any> }) => {
  const { t } = useTranslation();
  return (
    <div className="space-y-6">
      <p className="text-muted-foreground">
        {t('terminology.sections.kicks-content.description')}
      </p>
      <div className="grid gap-4">
        {Object.entries(termsObject).map(([key, term]) => (
          <a
            key={key}
            href={`/terminology/kicks/${key}`}
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

const kickYoutubeLinks: Record<string, string> = {
  // Goju-Ryu specifieke video's voor trappen
  // 'mae-geri': 'https://www.youtube.com/watch?v=...', // Goju-Ryu Mae Geri
  // 'yoko-geri': 'https://www.youtube.com/watch?v=...', // Goju-Ryu Yoko Geri
  // 'mawashi-geri': 'https://www.youtube.com/watch?v=...', // Goju-Ryu Mawashi Geri
  // 'ushiro-geri': 'https://www.youtube.com/watch?v=...', // Goju-Ryu Ushiro Geri
  // Video's worden alleen toegevoegd als er specifieke Goju-Ryu demonstraties beschikbaar zijn
};

const KickDetail = ({ termsObject }: { termsObject: Record<string, any> }) => {
  const { kickId } = useParams();
  const navigate = useNavigate();
  const term = kickId ? termsObject[kickId] : null;
  const videoUrl = kickId && kickYoutubeLinks[kickId] ? kickYoutubeLinks[kickId] : null;

  if (!term) {
    return <div className="p-8 text-center text-red-500">Techniek niet gevonden.</div>;
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="p-4 max-w-2xl mx-auto">
        <button
          onClick={() => navigate('/terminology/kicks')}
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

export default Kicks;