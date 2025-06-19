import React from 'react';
import { useTranslation } from 'react-i18next';
import MobileLayout from '@/components/layout/MobileLayout';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronLeft, Weight, HandMetal, Hammer, CircleEllipsis } from 'lucide-react';

const EquipmentOverview = () => {
  const { t } = useTranslation();

  const equipment = [
    {
      name: t('hojoUndo.equipment.chiIshi.name'),
      translation: t('hojoUndo.equipment.chiIshi.translation'),
      icon: Weight,
      description: t('hojoUndo.equipment.chiIshi.description'),
      origin: t('hojoUndo.equipment.chiIshi.origin'),
      weight: t('hojoUndo.equipment.chiIshi.weight'),
      path: '/hojo-undo/chi-ishi/function'
    },
    {
      name: t('hojoUndo.equipment.nigiriGame.name'),
      translation: t('hojoUndo.equipment.nigiriGame.translation'),
      icon: HandMetal,
      description: t('hojoUndo.equipment.nigiriGame.description'),
      origin: t('hojoUndo.equipment.nigiriGame.origin'),
      weight: t('hojoUndo.equipment.nigiriGame.weight'),
      path: '/hojo-undo/nigiri-game/function'
    },
    {
      name: t('hojoUndo.equipment.kongoken.name'),
      translation: t('hojoUndo.equipment.kongoken.translation'),
      icon: Hammer,
      description: t('hojoUndo.equipment.kongoken.description'),
      origin: t('hojoUndo.equipment.kongoken.origin'),
      weight: t('hojoUndo.equipment.kongoken.weight'),
      path: '/hojo-undo/kongoken/classic-exercises'
    },
    {
      name: t('hojoUndo.equipment.ishiSashi.name'),
      translation: t('hojoUndo.equipment.ishiSashi.translation'),
      icon: Weight,
      description: t('hojoUndo.equipment.ishiSashi.description'),
      origin: t('hojoUndo.equipment.ishiSashi.origin'),
      weight: t('hojoUndo.equipment.ishiSashi.weight'),
      path: '/hojo-undo/ishi-sashi/function'
    }
  ];

  const additionalEquipment = [
    {
      name: 'Tekkan',
      translation: t('hojoUndo.additionalEquipment.tekkan'),
      description: t('hojoUndo.additionalEquipment.tekkanDescription')
    },
    {
      name: 'Tetsu geta',
      translation: t('hojoUndo.additionalEquipment.tetsuGeta'),
      description: t('hojoUndo.additionalEquipment.tetsuGetaDescription')
    },
    {
      name: 'Ishi geta',
      translation: t('hojoUndo.additionalEquipment.ishiGeta'),
      description: t('hojoUndo.additionalEquipment.ishiGetaDescription')
    },
    {
      name: 'Chikara ishi',
      translation: t('hojoUndo.additionalEquipment.chikaraIshi'),
      description: t('hojoUndo.additionalEquipment.chikaraIshiDescription')
    },
    {
      name: 'Uki kago',
      translation: t('hojoUndo.additionalEquipment.ukiKago'),
      description: t('hojoUndo.additionalEquipment.ukiKagoDescription')
    },
    {
      name: 'Sashi ishi',
      translation: t('hojoUndo.additionalEquipment.sashiIshi'),
      description: t('hojoUndo.additionalEquipment.sashiIshiDescription')
    },
    {
      name: 'To',
      translation: t('hojoUndo.additionalEquipment.to'),
      description: t('hojoUndo.additionalEquipment.toDescription')
    },
    {
      name: 'Tan',
      translation: t('hojoUndo.additionalEquipment.tan'),
      description: t('hojoUndo.additionalEquipment.tanDescription')
    },
    {
      name: 'Tetsuarei',
      translation: t('hojoUndo.additionalEquipment.tetsuarei'),
      description: t('hojoUndo.additionalEquipment.tetsuareiDescription')
    },
    {
      name: 'Sunabako',
      translation: t('hojoUndo.additionalEquipment.sunabako'),
      description: t('hojoUndo.additionalEquipment.sunabakoDescription')
    },
    {
      name: 'Jari bako',
      translation: t('hojoUndo.additionalEquipment.jariBako'),
      description: t('hojoUndo.additionalEquipment.jariBakoDescription')
    },
    {
      name: 'Makiwara',
      translation: t('hojoUndo.additionalEquipment.makiwara'),
      description: t('hojoUndo.additionalEquipment.makiwaraDescription')
    }
  ];

  return (
    <MobileLayout hideHeader={true}>
      <div className="p-4">
        <div className="mb-6">
          <Button asChild variant="outline" className="mb-4">
            <Link to="/hojo-undo">
              <ChevronLeft className="mr-2 h-4 w-4" />
              {t('common.back')}
            </Link>
          </Button>
          <h1 className="text-2xl font-bold mb-2">{t('hojoUndo.equipment.overview')}</h1>
          <p className="text-muted-foreground">{t('hojoUndo.equipment.overviewDescription')}</p>
        </div>

        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-4">{t('hojoUndo.equipment.mainEquipment')}</h2>
            <div className="grid gap-4">
              {equipment.map((item) => (
                <Card key={item.name}>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <item.icon className="mr-2 h-5 w-5 text-primary" />
                      {item.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-2">{item.translation}</p>
                    <p className="mb-2">{item.description}</p>
                    <div className="text-sm space-y-1">
                      <p><strong>{t('hojoUndo.equipment.origin')}:</strong> {item.origin}</p>
                      <p><strong>{t('hojoUndo.equipment.weight')}:</strong> {item.weight}</p>
                    </div>
                    <Button asChild variant="outline" className="mt-3">
                      <Link to={item.path}>{t('hojoUndo.equipment.moreInfo')}</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">{t('hojoUndo.equipment.additionalEquipment')}</h2>
            <div className="grid gap-3">
              {additionalEquipment.map((item) => (
                <Card key={item.name}>
                  <CardContent className="pt-4">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm text-muted-foreground mb-1">{item.translation}</p>
                    <p className="text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </MobileLayout>
  );
};

export default EquipmentOverview; 