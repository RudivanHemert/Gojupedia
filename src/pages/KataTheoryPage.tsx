import React from 'react';
import { useTranslation } from 'react-i18next';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import TheoryHeader from '@/components/theory/TheoryHeader';
import WhatAreKata from './kata/WhatAreKata';
import KataAndKarate from './kata/KataAndKarate';
import BunkaiAndTechniques from './kata/BunkaiAndTechniques';
import KataOrigins from './kata/KataOrigins';
import PowerAndMovement from './kata/PowerAndMovement';
import SourcesOfPower from './kata/SourcesOfPower';
import OkinawanConcepts from './kata/OkinawanConcepts';
import PowerTransfer from './kata/PowerTransfer';
import KataTechniques from './kata/KataTechniques';

const KataTheoryPage = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white">
      <TheoryHeader 
        title={t('kata.theory.title')}
        description={t('kata.theory.description')}
        backUrl="/theory"
      />
      <div className="p-4">
        <div className="w-full max-w-4xl mx-auto">
          <WhatAreKata />
          <hr className="my-8" />
          <KataAndKarate />
          <hr className="my-8" />
          <BunkaiAndTechniques />
          <hr className="my-8" />
          <KataOrigins />
          <hr className="my-8" />
          <PowerAndMovement />
          <hr className="my-8" />
          <SourcesOfPower />
          <hr className="my-8" />
          <OkinawanConcepts />
          <hr className="my-8" />
          <PowerTransfer />
          <hr className="my-8" />
          <KataTechniques />
        </div>
      </div>
    </div>
  );
};

export default KataTheoryPage; 