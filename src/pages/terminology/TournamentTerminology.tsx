import React, { useState } from 'react';
// import { mediaItems } from '@/data/media';
// import MediaManager from '@/components/media/MediaManager';
import { useTranslation } from 'react-i18next';

const TournamentTerminology = () => {
  const { t } = useTranslation();
  // const [selectedMedia, setSelectedMedia] = useState<string | null>(null);

  // const tournamentMedia = mediaItems.filter(item => 
  //   item.tags.includes('tournament') || item.category === 'terminology'
  // );

  const scoringTerms = [
    { term: "Ippon (一本)", meaningKey: "ippon" },
    { term: "Waza Ari (技あり)", meaningKey: "waza-ari" },
    { term: "Aiuchi (相打ち)", meaningKey: "aiuchi" },
    { term: "Torimasen (取りません)", meaningKey: "torimasen" },
    { term: "Hikiwake (引き分け)", meaningKey: "hikiwake" },
    { term: "Kachi (勝ち)", meaningKey: "kachi" },
  ];

  const penaltyTerms = [
    { term: "Hansoku (反則)", meaningKey: "hansoku" },
    { term: "Chui (注意)", meaningKey: "chui" }, // Assuming general Chui from JSON, specific ones like Hansoku Chui not in base JSON
    { term: "Keikoku (警告)", meaningKey: "keikoku" },
    { term: "Shikaku (失格)", meaningKey: "shikkaku" },
    // Mubobi (無防備) - Warning for Lack of Self-Defense - not in current JSON structure
  ];

  const officialTerms = [
    { term: "Shushin (主審)", meaningKey: "shushin" },
    { term: "Fukushin (副審)", meaningKey: "fukushin" },
    { term: "Kansa (監査)", meaningKey: "kansa" },
    { term: "Fukushin Shugo (副審集合)", meaningKey: "fukushin-shugo" },
    { term: "Hantei (判定)", meaningKey: "hantei" },
  ];

  const commandTerms = [
    { term: "Shobu Hajime (始め)", meaningKey: "shobu-hajime" }, // Combined from hajime and shobu-hajime
    { term: "Yame (止め)", meaningKey: "yame" },
    { term: "Tsuzukete Hajime (続けて)", meaningKey: "tsuzukete-hajime" }, // Combined from tsuzukete and tsuzukete-hajime
    { term: "Moto no Ichi (元の位置)", meaningKey: "moto-no-ichi" },
    { term: "Sore Made (それまで)", meaningKey: "sore-made" },
    { term: "Atoshi Baraku (後30秒)", meaningKey: "atoshi-baraku" }, // Kept from original, JSON has atoshi-baraku
  ];

  const otherTermsList = [
    { term: "Shiai (試合)", meaningKey: "shiai" },
    { term: "Encho-sen (延長戦)", meaningKey: "encho-sen" },
    { term: "Jogai (場外)", meaningKey: "jogai" },
    { term: "Ma-ai ga To (間合いが遠)", meaningKey: "ma-ai-ga-to" },
    { term: "Ukete Iru (受けている)", meaningKey: "ukete-iru" },
    { term: "Nukete Iru (抜けている)", meaningKey: "nukete-iru" },
    { term: "Fujubun (不十分)", meaningKey: "fujubun" },
    { term: "Yowai (弱い)", meaningKey: "yowai" },
  ];


  return (
    <div className="space-y-6">
      <p className="text-muted-foreground mb-4">{t('terminology.sections.tournament-terms-content.description')}</p>
      
      <div className="border border-muted rounded-md mb-2 overflow-hidden">
        <div className="bg-muted/30 px-4 py-3 text-sm font-medium text-secondary-foreground">
          {t('terminology.sections.tournament-terms-content.scoringTitle')}
        </div>
        <div className="px-4 py-2 bg-card">
          <ul className="list-disc pl-4 space-y-2">
            {scoringTerms.map(item => (
              <li key={item.meaningKey}>{item.term} - {t(`terminology.sections.tournament-terms-content.terms.${item.meaningKey}`)}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border border-muted rounded-md mb-2 overflow-hidden">
        <div className="bg-muted/30 px-4 py-3 text-sm font-medium text-secondary-foreground">
          {t('terminology.sections.tournament-terms-content.penaltiesTitle')}
        </div>
        <div className="px-4 py-2 bg-card">
          <ul className="list-disc pl-4 space-y-2">
            {penaltyTerms.map(item => (
              <li key={item.meaningKey}>{item.term} - {t(`terminology.sections.tournament-terms-content.terms.${item.meaningKey}`)}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border border-muted rounded-md mb-2 overflow-hidden">
        <div className="bg-muted/30 px-4 py-3 text-sm font-medium text-secondary-foreground">
          {t('terminology.sections.tournament-terms-content.officialsTitle')}
        </div>
        <div className="px-4 py-2 bg-card">
          <ul className="list-disc pl-4 space-y-2">
            {officialTerms.map(item => (
              <li key={item.meaningKey}>{item.term} - {t(`terminology.sections.tournament-terms-content.officialsTerms.${item.meaningKey}`)}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border border-muted rounded-md mb-2 overflow-hidden">
        <div className="bg-muted/30 px-4 py-3 text-sm font-medium text-secondary-foreground">
          {t('terminology.sections.tournament-terms-content.commandsTitle')}
        </div>
        <div className="px-4 py-2 bg-card">
          <ul className="list-disc pl-4 space-y-2">
            {commandTerms.map(item => (
              <li key={item.meaningKey}>{item.term} - {t(`terminology.sections.tournament-terms-content.commandsTerms.${item.meaningKey}`)}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border border-muted rounded-md mb-2 overflow-hidden">
        <div className="bg-muted/30 px-4 py-3 text-sm font-medium text-secondary-foreground">
          {t('terminology.sections.tournament-terms-content.otherTitle')}
        </div>
        <div className="px-4 py-2 bg-card">
          <ul className="list-disc pl-4 space-y-2">
            {otherTermsList.map(item => (
              <li key={item.meaningKey}>{item.term} - {t(`terminology.sections.tournament-terms-content.otherTerms.${item.meaningKey}`)}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* {selectedMedia && (
        <MediaManager
          mediaId={selectedMedia}
          onClose={() => setSelectedMedia(null)}
        />
      )} */}
    </div>
  );
};

export default TournamentTerminology;