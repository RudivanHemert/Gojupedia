import React, { useState } from 'react';
import MobileLayout from '@/components/layout/MobileLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronDown, ChevronUp, Award, Book, GraduationCap, Swords } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from '@/components/ui/badge';
import { useTranslation } from 'react-i18next';

const GraduationsPage = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("ranks");

  const sections = [
    { 
      id: "ranks", 
      label: t('graduations.sections.ranks.title'),
      icon: <Award className="h-4 w-4" />
    },
    { 
      id: "beltColors", 
      label: t('graduations.sections.beltColors.title'),
      icon: <GraduationCap className="h-4 w-4" />
    },
    { 
      id: "titles", 
      label: t('graduations.sections.titles.title'),
      icon: <Book className="h-4 w-4" />
    },
    { 
      id: "gradingSystem", 
      label: t('graduations.sections.gradingSystem.title'),
      icon: <Swords className="h-4 w-4" />
    }
  ];

  const renderRanks = () => {
    const ranks = t('graduations.sections.ranks', { returnObjects: true }) as any;
    
    if (!ranks || !ranks.kyu || !ranks.dan || !ranks.ranks) {
      return (
        <div className="space-y-6">
          <div className="text-muted-foreground">
            Loading graduations data...
          </div>
        </div>
      );
    }
    
    return (
      <div className="space-y-6">
        <div className="text-muted-foreground">
          {ranks.description}
        </div>

        <div className="grid gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-lg font-japanese">{ranks.kyu.japanese}</span>
                <span>{ranks.kyu.name}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{ranks.kyu.description}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-lg font-japanese">{ranks.dan.japanese}</span>
                <span>{ranks.dan.name}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{ranks.dan.description}</p>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Dan Ranks</h3>
            <div className="grid gap-3">
              {Object.entries(ranks.ranks).map(([key, rank]: [string, any]) => (
                <Card key={key}>
                  <CardContent className="pt-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-lg font-japanese">{rank.japanese}</span>
                          <span className="font-semibold">{rank.name}</span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">{rank.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderBeltColors = () => {
    const beltColors = t('graduations.sections.beltColors', { returnObjects: true }) as any;
    
    if (!beltColors || !beltColors.colors) {
      return (
        <div className="space-y-6">
          <div className="text-muted-foreground">
            Loading belt colors data...
          </div>
        </div>
      );
    }
    
    return (
      <div className="space-y-6">
        <div className="text-muted-foreground">
          {beltColors.description}
        </div>

        <div className="grid gap-4">
          {Object.entries(beltColors.colors).map(([key, color]: [string, any]) => (
            <Card key={key}>
              <CardContent className="pt-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div 
                      className={`w-8 h-4 rounded border-2 border-gray-300 ${
                        key === 'white' ? 'bg-white' :
                        key === 'yellow' ? 'bg-yellow-400' :
                        key === 'orange' ? 'bg-orange-500' :
                        key === 'green' ? 'bg-green-600' :
                        key === 'blue' ? 'bg-blue-600' :
                        key === 'brown' ? 'bg-amber-800' :
                        key === 'black' ? 'bg-black' : 'bg-gray-300'
                      }`}
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-japanese">{color.japanese}</span>
                        <span className="font-semibold">{color.name}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{color.description}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  };

  const renderTitles = () => {
    const titles = t('graduations.sections.titles', { returnObjects: true }) as any;
    
    if (!titles || !titles.studentTitles || !titles.instructorTitles || !titles.otherTitles) {
      return (
        <div className="space-y-6">
          <div className="text-muted-foreground">
            Loading titles data...
          </div>
        </div>
      );
    }
    
    return (
      <div className="space-y-6">
        <div className="text-muted-foreground">
          {titles.description}
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          <AccordionItem value="studentTitles" className="border rounded-lg overflow-hidden">
            <AccordionTrigger className="px-4 py-3 flex text-left hover:bg-stone-50">
              <div className="flex items-center">
                <Book className="mr-2 h-5 w-5 text-karate" />
                <h3 className="font-semibold text-stone-700">
                  {titles.studentTitles.title}
                </h3>
              </div>
            </AccordionTrigger>
            <AccordionContent className="p-4 pt-2">
              <div className="grid gap-3">
                {Object.entries(titles.studentTitles.titles).map(([key, title]: [string, any]) => (
                  <div key={key} className="flex items-center justify-between p-3 bg-stone-50 rounded-lg">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-japanese">{title.japanese}</span>
                        <span className="font-semibold">{title.name}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{title.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="instructorTitles" className="border rounded-lg overflow-hidden">
            <AccordionTrigger className="px-4 py-3 flex text-left hover:bg-stone-50">
              <div className="flex items-center">
                <Award className="mr-2 h-5 w-5 text-karate" />
                <h3 className="font-semibold text-stone-700">
                  {titles.instructorTitles.title}
                </h3>
              </div>
            </AccordionTrigger>
            <AccordionContent className="p-4 pt-2">
              <div className="grid gap-3">
                {Object.entries(titles.instructorTitles.titles).map(([key, title]: [string, any]) => (
                  <div key={key} className="flex items-center justify-between p-3 bg-stone-50 rounded-lg">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-japanese">{title.japanese}</span>
                        <span className="font-semibold">{title.name}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{title.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="otherTitles" className="border rounded-lg overflow-hidden">
            <AccordionTrigger className="px-4 py-3 flex text-left hover:bg-stone-50">
              <div className="flex items-center">
                <GraduationCap className="mr-2 h-5 w-5 text-karate" />
                <h3 className="font-semibold text-stone-700">
                  {titles.otherTitles.title}
                </h3>
              </div>
            </AccordionTrigger>
            <AccordionContent className="p-4 pt-2">
              <div className="grid gap-3">
                {Object.entries(titles.otherTitles.titles).map(([key, title]: [string, any]) => (
                  <div key={key} className="flex items-center justify-between p-3 bg-stone-50 rounded-lg">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-japanese">{title.japanese}</span>
                        <span className="font-semibold">{title.name}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{title.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    );
  };

  const renderGradingSystem = () => {
    const gradingSystem = t('graduations.sections.gradingSystem', { returnObjects: true }) as any;
    
    if (!gradingSystem || !gradingSystem.kyuSystem || !gradingSystem.danSystem) {
      return (
        <div className="space-y-6">
          <div className="text-muted-foreground">
            Loading grading system data...
          </div>
        </div>
      );
    }
    
    return (
      <div className="space-y-6">
        <div className="text-muted-foreground">
          {gradingSystem.description}
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          <AccordionItem value="kyuSystem" className="border rounded-lg overflow-hidden">
            <AccordionTrigger className="px-4 py-3 flex text-left hover:bg-stone-50">
              <div className="flex items-center">
                <Swords className="mr-2 h-5 w-5 text-karate" />
                <h3 className="font-semibold text-stone-700">
                  {gradingSystem.kyuSystem.title}
                </h3>
              </div>
            </AccordionTrigger>
            <AccordionContent className="p-4 pt-2">
              <p className="text-muted-foreground mb-4">{gradingSystem.kyuSystem.description}</p>
              <div className="grid gap-2">
                {Object.entries(gradingSystem.kyuSystem.levels).map(([key, level]: [string, any]) => (
                  <div key={key} className="flex items-center justify-between p-2 bg-stone-50 rounded">
                    <span className="font-medium">{level}</span>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="danSystem" className="border rounded-lg overflow-hidden">
            <AccordionTrigger className="px-4 py-3 flex text-left hover:bg-stone-50">
              <div className="flex items-center">
                <Award className="mr-2 h-5 w-5 text-karate" />
                <h3 className="font-semibold text-stone-700">
                  {gradingSystem.danSystem.title}
                </h3>
              </div>
            </AccordionTrigger>
            <AccordionContent className="p-4 pt-2">
              <p className="text-muted-foreground mb-4">{gradingSystem.danSystem.description}</p>
              <div className="grid gap-2">
                {Object.entries(gradingSystem.danSystem.levels).map(([key, level]: [string, any]) => (
                  <div key={key} className="flex items-center justify-between p-2 bg-stone-50 rounded">
                    <span className="font-medium">{level}</span>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    );
  };

  const renderContent = () => {
    switch (activeTab) {
      case "ranks":
        return renderRanks();
      case "beltColors":
        return renderBeltColors();
      case "titles":
        return renderTitles();
      case "gradingSystem":
        return renderGradingSystem();
      default:
        return renderRanks();
    }
  };

  return (
    <MobileLayout>
      <div className="p-4">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-stone-900 mb-2">
            {t('graduations.title')}
          </h1>
          <p className="text-stone-600">
            {t('graduations.description')}
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-2 mb-6 h-auto">
            {sections.map((section) => (
              <TabsTrigger
                key={section.id}
                value={section.id}
                className="h-12 p-2 text-xs flex items-center gap-2"
              >
                {section.icon}
                <span className="hidden sm:inline">{section.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={activeTab} className="space-y-6">
            {renderContent()}
          </TabsContent>
        </Tabs>
      </div>
    </MobileLayout>
  );
};

export default GraduationsPage; 