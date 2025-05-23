import React from 'react';
import { useTranslation } from 'react-i18next';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import GeneralTerminology from '@/pages/terminology/GeneralTerminology';
import Numbers from '@/pages/terminology/Numbers';
import TournamentTerminology from '@/pages/terminology/TournamentTerminology';
import EquipmentAndWeapons from '@/pages/terminology/EquipmentAndWeapons';
import KarateGojuRyuTerminology from '@/pages/terminology/KarateGojuRyuTerminology';
import KarateTitles from '@/pages/terminology/KarateTitles';
import PhrasesAndEtiquette from '@/pages/terminology/PhrasesAndEtiquette';
import KataTerminology from '@/pages/terminology/KataTerminology';
import Blocks from '@/pages/terminology/Blocks';
import Kicks from '@/pages/terminology/Kicks';
import Punches from '@/pages/terminology/Punches';
import Stances from '@/pages/terminology/Stances';
import Strikes from '@/pages/terminology/Strikes';
import VitalPoints from '@/pages/terminology/VitalPoints';

export const TerminologyList = () => {
  const { t } = useTranslation();
  
  const sections = [
    { id: 'general-terms', title: t('terminology.sections.general-terms'), component: <GeneralTerminology /> },
    { id: 'numbers', title: t('terminology.sections.numbers'), component: <Numbers /> },
    { id: 'tournament-terms', title: t('terminology.sections.tournament-terms'), component: <TournamentTerminology /> },
    { id: 'equipment-weapons', title: t('terminology.sections.equipment-weapons'), component: <EquipmentAndWeapons /> },
    { id: 'karate-goju-ryu', title: t('terminology.sections.karate-goju-ryu'), component: <KarateGojuRyuTerminology /> },
    { id: 'karate-titles', title: t('terminology.sections.karate-titles'), component: <KarateTitles /> },
    { id: 'phrases-etiquette', title: t('terminology.sections.phrases-etiquette'), component: <PhrasesAndEtiquette /> },
    { id: 'kata-terms', title: t('terminology.sections.kata-terms'), component: <KataTerminology /> },
    { id: 'blocks', title: t('terminology.sections.blocks'), component: <Blocks /> },
    { id: 'kicks', title: t('terminology.sections.kicks'), component: <Kicks /> },
    { id: 'punches', title: t('terminology.sections.punches'), component: <Punches /> },
    { id: 'stances', title: t('terminology.sections.stances'), component: <Stances /> },
    { id: 'strikes', title: t('terminology.sections.strikes'), component: <Strikes /> },
    { id: 'vital-points', title: t('terminology.sections.vital-points'), component: <VitalPoints /> }
  ];

  return (
    <Accordion type="single" collapsible className="w-full">
      {sections.map((section) => (
        <AccordionItem key={section.id} value={section.id}>
          <AccordionTrigger>{section.title}</AccordionTrigger>
          <AccordionContent>
            {section.component}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}; 