import React from 'react';
import { useTranslation } from 'react-i18next';

const KarateTitles = () => {
  const { t } = useTranslation();
  const termsObject = t('terminology.sections.karate-titles-content.terms', { returnObjects: true }) as Record<string, { name: string; japanese?: string; english: string }>;
  const termsKeys = Object.keys(termsObject);

  return (
    <div className="space-y-6">
      <p className="text-muted-foreground mb-4">
        {t('terminology.sections.karate-titles-content.description')}
      </p>
      
      <div className="border border-muted rounded-md mb-2 overflow-hidden">
        <div className="bg-muted/30 px-4 py-3 text-sm font-medium text-secondary-foreground">
          Instructor Titles
        </div>
        <div className="px-4 py-2 bg-card">
          <ul className="list-disc pl-4 space-y-2">
            <li>Hanshi (範士) - Head Person of an Organization</li>
            <li>Kyoshi (教士) - Master Instructor</li>
            <li>Renshi (錬士) - Polished Instructor</li>
            <li>Sensei (先生) - Teacher</li>
            <li>Shihan (師範) - Master Instructor, Teacher of Teachers</li>
          </ul>
        </div>
      </div>

      <div className="border border-muted rounded-md mb-2 overflow-hidden">
        <div className="bg-muted/30 px-4 py-3 text-sm font-medium text-secondary-foreground">
          Student Titles
        </div>
        <div className="px-4 py-2 bg-card">
          <ul className="list-disc pl-4 space-y-2">
            <li>Karateka (空手家) - Karate Practitioner</li>
            <li>Senpai (先輩) - Senior Student</li>
            <li>Kohai (後輩) - Junior Student</li>
            <li>Yudansha (有段者) - Black Belt Holder</li>
            <li>Mudansha (無段者) - Student Without Black Belt</li>
            <li>Uchi Deshi (内弟子) - Live-in Student</li>
          </ul>
        </div>
      </div>

      <div className="border border-muted rounded-md mb-2 overflow-hidden">
        <div className="bg-muted/30 px-4 py-3 text-sm font-medium text-secondary-foreground">
          Other Titles
        </div>
        <div className="px-4 py-2 bg-card">
          <ul className="list-disc pl-4 space-y-2">
            <li>Bushi (武士) - Great Martial Artist</li>
            <li>Shushin (主審) - Referee</li>
            <li>Fukushin (副審) - Assistant Referee</li>
            <li>Kansa (監査) - Judge</li>
          </ul>
        </div>
      </div>

      <div className="border border-muted rounded-md mb-2 overflow-hidden">
        <div className="px-4 py-2 bg-card">
          <ul className="list-disc pl-4 space-y-2">
            {termsKeys.map(key => {
              const term = termsObject[key];
              return (
                <li key={key}>
                  {term.name}
                  {term.japanese && ` (${term.japanese})`}
                  {' - '}{term.english}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default KarateTitles;