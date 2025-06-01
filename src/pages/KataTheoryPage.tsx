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
      />
      <div className="p-4">
        <Tabs defaultValue="what-are-kata" className="w-full max-w-4xl mx-auto">
          <div className="overflow-x-auto pb-2">
            <TabsList className="w-max">
              <TabsTrigger value="what-are-kata">{t('kata.theory.sections.what-are-kata')}</TabsTrigger>
              <TabsTrigger value="kata-and-karate">{t('kata.theory.sections.kata-and-karate')}</TabsTrigger>
              <TabsTrigger value="bunkai">{t('kata.theory.sections.bunkai-and-techniques')}</TabsTrigger>
              <TabsTrigger value="origins">{t('kata.theory.sections.kata-origins')}</TabsTrigger>
              <TabsTrigger value="power-movement">{t('kata.theory.sections.power-and-movement')}</TabsTrigger>
              <TabsTrigger value="sources-power">{t('kata.theory.sections.sources-of-power')}</TabsTrigger>
              <TabsTrigger value="okinawan-concepts">{t('kata.theory.sections.okinawan-concepts')}</TabsTrigger>
              <TabsTrigger value="power-transfer">{t('kata.theory.sections.power-transfer')}</TabsTrigger>
              <TabsTrigger value="techniques">{t('kata.theory.sections.kata-techniques')}</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="what-are-kata">
            <WhatAreKata />
          </TabsContent>
          
          <TabsContent value="kata-and-karate">
            <KataAndKarate />
          </TabsContent>
          
          <TabsContent value="bunkai">
            <BunkaiAndTechniques />
          </TabsContent>
          
          <TabsContent value="origins">
            <KataOrigins />
          </TabsContent>
          
          <TabsContent value="power-movement">
            <PowerAndMovement />
          </TabsContent>
          
          <TabsContent value="sources-power">
            <SourcesOfPower />
          </TabsContent>
          
          <TabsContent value="okinawan-concepts">
            <OkinawanConcepts />
          </TabsContent>
          
          <TabsContent value="power-transfer">
            <PowerTransfer />
          </TabsContent>
          
          <TabsContent value="techniques">
            <KataTechniques />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default KataTheoryPage; 