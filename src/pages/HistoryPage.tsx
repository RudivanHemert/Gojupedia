import React from 'react';
import TheoryHeader from '@/components/theory/TheoryHeader';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const historySections = [
  { id: 'origins', path: '/history/origins', labelKey: 'history.origins' },
  { id: 'kanryo-higaonna', path: '/history/kanryo-higaonna', labelKey: 'history.kanryoHigaonna' },
  { id: 'chojun-miyagi', path: '/history/chojun-miyagi', labelKey: 'history.chojunMiyagi' },
  { id: 'anichi-miyagi', path: '/history/anichi-miyagi', labelKey: 'history.anichiMiyagi' },
  { id: 'morio-higaonna', path: '/history/morio-higaonna', labelKey: 'history.morioHigaonna' },
  { id: 'tetsuji-nakamura', path: '/history/tetsuji-nakamura', labelKey: 'history.tetsujiNakamura' },
  { id: 'timeline', path: '/history/timeline', labelKey: 'history.timeline' },
];

const HistoryPage = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background">
      <TheoryHeader 
        title={t('history.title')}
        description={t('history.description')}
      />
      <div className="p-4 max-w-2xl mx-auto">
        <ul className="space-y-3">
          {historySections.map(section => (
            <li key={section.id}>
              <Link
                to={section.path}
                className="block px-4 py-3 rounded-lg border border-muted hover:bg-muted/30 transition-colors text-lg font-medium"
              >
                {t(section.labelKey)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HistoryPage;
