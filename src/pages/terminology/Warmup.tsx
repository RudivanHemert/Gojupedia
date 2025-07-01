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
      title: 'Junbi Undo',
      subtitle: '準備運動',
      description: 'Voorbereidende oefeningen en warming-up technieken',
      path: '/junbi-undo',
      icon: <Activity className="h-8 w-8 text-blue-500" />,
      color: 'bg-blue-50 border-blue-200'
    },
    {
      id: 'hojo-undo',
      title: 'Hojo Undo',
      subtitle: '補助運動',
      description: 'Traditionele kracht- en conditietraining met apparatuur',
      path: '/hojo-undo',
      icon: <Dumbbell className="h-8 w-8 text-green-500" />,
      color: 'bg-green-50 border-green-200'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <TheoryHeader 
        title="Training & Warming-up"
        description="Voorbereidende oefeningen en traditionele training"
        backUrl="/techniques"
      />
      <div className="p-4">
        <div className="w-full max-w-4xl mx-auto">
          <div className="mb-6">
            <p className="text-muted-foreground text-center">
              Deze sectie bevat links naar de training en warming-up oefeningen die onder de Praktijk sectie vallen.
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
                      <h3 className="font-bold text-xl mb-1 text-gray-900">{section.title}</h3>
                      <p className="text-lg font-japanese text-gray-600 mb-2">{section.subtitle}</p>
                      <p className="text-gray-600 leading-relaxed mb-4">{section.description}</p>
                      <div className="flex items-center text-blue-600 font-medium">
                        <span>Bekijk sectie</span>
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="mt-8 bg-stone-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-4 text-center">Over Training in Goju Ryu</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-2">Junbi Undo (準備運動)</h4>
                <p className="text-sm text-gray-600">
                  Voorbereidende oefeningen die het lichaam voorbereiden op training. 
                  Deze oefeningen verbeteren flexibiliteit, mobiliteit en bereiden de spieren voor.
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Hojo Undo (補助運動)</h4>
                <p className="text-sm text-gray-600">
                  Traditionele kracht- en conditietraining met specifieke apparatuur zoals 
                  chi-ishi, nigiri-game, en kongoken. Deze oefeningen ontwikkelen kracht en uithoudingsvermogen.
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