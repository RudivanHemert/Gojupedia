import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import MobileLayout from '@/components/layout/MobileLayout';
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
  return (
    <MobileLayout>
      <div className="relative h-40 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=2142&auto=format&fit=crop" 
          alt="Kata Theory" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70"></div>
        <div className="absolute bottom-0 left-0 p-5 w-full">
          <h1 className="text-white text-3xl font-bold">Kata Theory</h1>
          <p className="text-white opacity-90">
            Understanding the principles and practice of kata
          </p>
        </div>
      </div>

      <div className="p-4">
        <Tabs defaultValue="what-are-kata" className="w-full">
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
    </MobileLayout>
  );
};

export default KataTheoryPage; 