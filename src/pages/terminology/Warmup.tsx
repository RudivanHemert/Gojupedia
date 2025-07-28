import React from 'react';
import { useTranslation } from 'react-i18next';
import TheoryHeader from '@/components/theory/TheoryHeader';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Dumbbell, Activity, ArrowRight } from 'lucide-react';

const Warmup = () => {
  const { t } = useTranslation();

  const trainingSections = [
    {
      id: 'junbi-undo',
      title: t('terminology.warmup.junbiUndo.title'),
      subtitle: t('terminology.warmup.junbiUndo.subtitle'),
      description: t('terminology.warmup.junbiUndo.description'),
      path: '/junbi-undo',
      icon: <Activity className="h-8 w-8 text-blue-500" />,
      color: 'bg-blue-50 border-blue-200'
    },
    {
      id: 'hojo-undo',
      title: t('terminology.warmup.hojoUndo.title'),
      subtitle: t('terminology.warmup.hojoUndo.subtitle'),
      description: t('terminology.warmup.hojoUndo.description'),
      path: '/hojo-undo',
      icon: <Dumbbell className="h-8 w-8 text-green-500" />,
      color: 'bg-green-50 border-green-200'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <TheoryHeader 
        title={t('terminology.warmup.title')}
        description={t('terminology.warmup.description')}
        backUrl="/terminology"
      />
      <div className="p-4">
        <div className="w-full max-w-4xl mx-auto">
          <div className="mb-6">
            <p className="text-muted-foreground text-center">
              {t('terminology.warmup.sectionDescription')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {trainingSections.map((section) => (
              <Link key={section.id} to={section.path} className="block">
                <Card className={`overflow-hidden hover:shadow-lg transition-all duration-200 border-2 ${section.color}`}>
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="mb-4 bg-white p-3 rounded-full shadow-sm">
                        {section.icon}
                      </div>
                      <h3 className="font-bold text-xl mb-1 text-foreground">{section.title}</h3>
                      <p className="text-lg font-japanese text-muted-foreground mb-2">{section.subtitle}</p>
                      <p className="text-muted-foreground leading-relaxed mb-4">{section.description}</p>
                      <div className="flex items-center text-blue-600 font-medium">
                        <span>{t('terminology.warmup.viewSection')}</span>
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="mt-8 bg-muted rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-4 text-center">{t('terminology.warmup.aboutTraining')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-2">{t('terminology.warmup.junbiUndo.title')} ({t('terminology.warmup.junbiUndo.subtitle')})</h4>
                <p className="text-sm text-muted-foreground">
                  {t('terminology.warmup.junbiUndo.explanation')}
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2">{t('terminology.warmup.hojoUndo.title')} ({t('terminology.warmup.hojoUndo.subtitle')})</h4>
                <p className="text-sm text-muted-foreground">
                  {t('terminology.warmup.hojoUndo.explanation')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Warmup; 