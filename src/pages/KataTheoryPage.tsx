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
              <TabsTrigger value="what-are-kata">What are Kata?</TabsTrigger>
              <TabsTrigger value="kata-and-karate">Kata and Karate</TabsTrigger>
              <TabsTrigger value="bunkai">Bunkai</TabsTrigger>
              <TabsTrigger value="origins">Origins</TabsTrigger>
              <TabsTrigger value="power-movement">Power & Movement</TabsTrigger>
              <TabsTrigger value="sources-power">Sources of Power</TabsTrigger>
              <TabsTrigger value="okinawan-concepts">Okinawan Concepts</TabsTrigger>
              <TabsTrigger value="power-transfer">Power Transfer</TabsTrigger>
              <TabsTrigger value="techniques">Techniques</TabsTrigger>
            </TabsList>
          </div>
          
          <div className="mt-4 bg-white p-4 rounded-lg shadow-sm">
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
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default KataTheoryPage; 