import React from 'react';
import { useTranslation } from 'react-i18next';
import TheoryHeader from '@/components/theory/TheoryHeader';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Blocks from './terminology/Blocks';
import Kicks from './terminology/Kicks';
import Punches from './terminology/Punches';
import Stances from './terminology/Stances';
import Strikes from './terminology/Strikes';
import Warmup from './terminology/Warmup';

const TechniquesPage = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white">
      <TheoryHeader 
        title={t('techniques.title')}
        description={t('techniques.description')}
      />
      <div className="p-4">
        <div className="w-full max-w-4xl mx-auto mt-4 bg-white p-4 rounded-lg shadow-sm">
          <Blocks />
        </div>
      </div>
    </div>
  );
};

export default TechniquesPage;
