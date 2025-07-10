import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, GraduationCap, Book, Swords, ChevronRight, ChevronDown, ChevronUp, Calendar, Clock, Dumbbell } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import TheoryHeader from '@/components/theory/TheoryHeader';

// Import kyu data from JSON files
import tenthKyuData from '@/data/graduations/10th-kyu.json';
import ninthKyuData from '@/data/graduations/9th-kyu.json';
import eighthKyuData from '@/data/graduations/8th-kyu.json';
import seventhKyuData from '@/data/graduations/7th-kyu.json';
import sixthKyuData from '@/data/graduations/6th-kyu.json';
import fifthKyuData from '@/data/graduations/5th-kyu.json';
import fourthKyuData from '@/data/graduations/4th-kyu.json';
import thirdKyuData from '@/data/graduations/3rd-kyu.json';
import secondKyuData from '@/data/graduations/2nd-kyu.json';
import firstKyuData from '@/data/graduations/1st-kyu.json';
import shodanData from '@/data/graduations/shodan.json';

// Import Dutch versions
import tenthKyuDataNL from '@/data/graduations/10th-kyu.nl.json';
import ninthKyuDataNL from '@/data/graduations/9th-kyu.nl.json';
import eighthKyuDataNL from '@/data/graduations/8th-kyu.nl.json';
import seventhKyuDataNL from '@/data/graduations/7th-kyu.nl.json';
import sixthKyuDataNL from '@/data/graduations/6th-kyu.nl.json';
import fifthKyuDataNL from '@/data/graduations/5th-kyu.nl.json';
import fourthKyuDataNL from '@/data/graduations/4th-kyu.nl.json';
import thirdKyuDataNL from '@/data/graduations/3rd-kyu.nl.json';
import secondKyuDataNL from '@/data/graduations/2nd-kyu.nl.json';
import firstKyuDataNL from '@/data/graduations/1st-kyu.nl.json';
import shodanDataNL from '@/data/graduations/shodan.nl.json';

const GradingsPage = () => {
  const [activeTab, setActiveTab] = useState("10th-kyu");
  const { t, i18n } = useTranslation();

  // Helper function to get the correct language version of kyu data
  const getKyuData = (kyuId: string, language: string) => {
    // Dutch versions
    if (language === 'nl') {
      switch (kyuId) {
        case "10th-kyu": return tenthKyuDataNL;
        case "9th-kyu": return ninthKyuDataNL;
        case "8th-kyu": return eighthKyuDataNL;
        case "7th-kyu": return seventhKyuDataNL;
        case "6th-kyu": return sixthKyuDataNL;
        case "5th-kyu": return fifthKyuDataNL;
        case "4th-kyu": return fourthKyuDataNL;
        case "3rd-kyu": return thirdKyuDataNL;
        case "2nd-kyu": return secondKyuDataNL;
        case "1st-kyu": return firstKyuDataNL;
        case "shodan": return shodanDataNL;
        default: return tenthKyuDataNL;
      }
    }
    
    // Default to English versions
    switch (kyuId) {
      case "10th-kyu": return tenthKyuData;
      case "9th-kyu": return ninthKyuData;
      case "8th-kyu": return eighthKyuData;
      case "7th-kyu": return seventhKyuData;
      case "6th-kyu": return sixthKyuData;
      case "5th-kyu": return fifthKyuData;
      case "4th-kyu": return fourthKyuData;
      case "3rd-kyu": return thirdKyuData;
      case "2nd-kyu": return secondKyuData;
      case "1st-kyu": return firstKyuData;
      case "shodan": return shodanData;
      default: return tenthKyuData;
    }
  };

  const gradingLevels = [
    { 
      id: "10th-kyu", 
      label: "10th Kyu", 
      color: "bg-white", 
      stripes: 1,
      borderColor: "border-stone-300" 
    },
    { 
      id: "9th-kyu", 
      label: "9th Kyu", 
      color: "bg-white", 
      stripes: 2,
      borderColor: "border-stone-300" 
    },
    { 
      id: "8th-kyu", 
      label: "8th Kyu", 
      color: "bg-white", 
      stripes: 3,
      borderColor: "border-stone-300" 
    },
    { 
      id: "7th-kyu", 
      label: "7th Kyu", 
      color: "bg-[#FFD700]", 
      stripes: 0,
      borderColor: "border-amber-500" 
    },
    { 
      id: "6th-kyu", 
      label: "6th Kyu", 
      color: "bg-orange-600", 
      stripes: 0,
      borderColor: "border-orange-700" 
    },
    { 
      id: "5th-kyu", 
      label: "5th Kyu", 
      color: "bg-green-700", 
      stripes: 0,
      borderColor: "border-green-800" 
    },
    { 
      id: "4th-kyu", 
      label: "4th Kyu", 
      color: "bg-blue-700", 
      stripes: 0,
      borderColor: "border-blue-800" 
    },
    { 
      id: "3rd-kyu", 
      label: "3rd Kyu", 
      color: "bg-amber-800", 
      stripes: 0,
      textColor: "text-white", 
      borderColor: "border-amber-900" 
    },
    { 
      id: "2nd-kyu", 
      label: "2nd Kyu", 
      color: "bg-amber-800", 
      stripes: 1,
      textColor: "text-white", 
      borderColor: "border-amber-900" 
    },
    { 
      id: "1st-kyu", 
      label: "1st Kyu", 
      color: "bg-amber-800", 
      stripes: 2,
      textColor: "text-white", 
      borderColor: "border-amber-900" 
    },
    { 
      id: "shodan", 
      label: "Shodan", 
      color: "bg-black", 
      stripes: 0,
      textColor: "text-white", 
      borderColor: "border-gray-800" 
    },
  ];

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

  const renderTechniques = (techniquesData) => {
    return (
      <div className="space-y-4">
        {techniquesData.map((category, index) => (
          <div key={index} className="space-y-2">
            <h4 className="font-medium text-stone-800">{category.category}</h4>
            <ul className="list-disc list-inside space-y-1 text-stone-600">
              {category.techniques.map((technique, techIndex) => (
                <li key={techIndex}>{technique}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  };

  const renderKnowledge = (knowledgeData) => {
    return (
      <div className="space-y-2">
        <ul className="list-disc list-inside space-y-1 text-stone-600">
          {knowledgeData.map((item, index) => (
            <li key={index}>
              <strong>{item.term}</strong> {item.meaning && `- ${item.meaning}`}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const renderHistory = (historyData) => {
    return (
      <div className="space-y-2">
        <ul className="list-disc list-inside space-y-1 text-stone-600">
          {historyData.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  };

  const getGradingData = (tabId) => {
    return getKyuData(tabId, i18n.language);
  };

  const activeGradingData = getGradingData(activeTab);

  const renderStripes = (count) => {
    if (count <= 0) return null;
    
    const stripes = [];
    for (let i = 0; i < count; i++) {
      stripes.push(
        <div 
          key={i} 
          className="w-1.5 h-full bg-black absolute" 
          style={{ right: `${i * 8 + 4}px` }} 
        />
      );
    }
    return stripes;
  };

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
    const gradingSystem = t('graduations.sections.gradingSystem', { returnObjects: true }) as any;
    
    if (!gradingSystem || !gradingSystem.kyuSystem) {
      return (
        <div className="space-y-6">
          <div className="text-muted-foreground">
            Loading kyu grades data...
          </div>
        </div>
      );
    }
    
    return (
      <div className="space-y-6">
        <div className="text-muted-foreground">
          {gradingSystem.kyuSystem.description}
        </div>

        <div className="grid gap-3">
          {Object.entries(gradingSystem.kyuSystem.levels).map(([key, level]: [string, any]) => (
            <Card key={key}>
              <CardContent className="pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-semibold">{level}</span>
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
            <AccordionTrigger className="px-4 py-3 flex text-left hover:bg-muted">
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
                  <div key={key} className="flex items-center justify-between p-3 bg-muted rounded-lg">
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
            <AccordionTrigger className="px-4 py-3 flex text-left hover:bg-muted">
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
                  <div key={key} className="flex items-center justify-between p-3 bg-muted rounded-lg">
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
            <AccordionTrigger className="px-4 py-3 flex text-left hover:bg-muted">
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
                  <div key={key} className="flex items-center justify-between p-3 bg-muted rounded-lg">
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
            <AccordionTrigger className="px-4 py-3 flex text-left hover:bg-muted">
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
                  <div key={key} className="flex items-center justify-between p-2 bg-muted rounded">
                    <span className="font-medium">{level}</span>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="danSystem" className="border rounded-lg overflow-hidden">
            <AccordionTrigger className="px-4 py-3 flex text-left hover:bg-muted">
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
                  <div key={key} className="flex items-center justify-between p-2 bg-muted rounded">
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
    <div className="p-4">
      <TheoryHeader 
        title={t('graduations.title')}
        description={t('graduations.description')}
        backUrl="/theory"
      />
      <div className="space-y-12">
        {gradingLevels.map((level) => {
          const gradingData = getGradingData(level.id);
          return (
            <section key={level.id} className="mb-12">
              <Card>
                <CardHeader className={`${level.color} ${level.textColor || 'text-stone-800'} relative overflow-hidden border-b ${level.borderColor}`}>
                  {renderStripes(level.stripes)}
                  <CardTitle className="text-xl font-serif text-center relative z-10">{gradingData.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="mb-6">
                    <h3 className="font-semibold mb-3 flex items-center text-stone-700 text-lg">
                      <Award className="mr-2 h-5 w-5 text-karate" />
                      Basic Requirements
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      {gradingData.requirements.classes > 0 && (
                        <div className="bg-muted p-3 rounded-lg border border-border text-center">
                          <p className="text-xs text-stone-500">Minimum Classes</p>
                          <p className="text-2xl font-semibold text-stone-800">{gradingData.requirements.classes}</p>
                        </div>
                      )}
                      <div className="bg-muted p-3 rounded-lg border border-border text-center">
                        <p className="text-xs text-stone-500">Months of Training</p>
                        <p className="text-2xl font-semibold text-stone-800">{gradingData.requirements.months}</p>
                      </div>
                    </div>
                  </div>

                  <Accordion type="single" collapsible className="w-full space-y-4">
                    <AccordionItem value="techniques" className="border rounded-lg overflow-hidden">
                      <AccordionTrigger className="px-4 py-3 flex text-left hover:bg-muted">
                        <div className="flex items-center">
                          <Swords className="mr-2 h-5 w-5 text-karate" />
                          <h3 className="font-semibold text-stone-700">
                            Techniques
                          </h3>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="p-4 pt-2">
                        {renderTechniques(gradingData.techniques)}
                      </AccordionContent>
                    </AccordionItem>

                    {gradingData.knowledge && gradingData.knowledge.length > 0 && (
                      <AccordionItem value="knowledge" className="border rounded-lg overflow-hidden">
                        <AccordionTrigger className="px-4 py-3 flex text-left hover:bg-muted">
                          <div className="flex items-center">
                            <Book className="mr-2 h-5 w-5 text-karate" />
                            <h3 className="font-semibold text-stone-700">
                              Knowledge & Terminology
                            </h3>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="p-4 pt-2">
                          {renderKnowledge(gradingData.knowledge)}
                        </AccordionContent>
                      </AccordionItem>
                    )}

                    {gradingData.history && gradingData.history.length > 0 && (
                      <AccordionItem value="history" className="border rounded-lg overflow-hidden">
                        <AccordionTrigger className="px-4 py-3 flex text-left hover:bg-muted">
                          <div className="flex items-center">
                            <GraduationCap className="mr-2 h-5 w-5 text-karate" />
                            <h3 className="font-semibold text-stone-700">
                              History
                            </h3>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="p-4 pt-2">
                          {renderHistory(gradingData.history)}
                        </AccordionContent>
                      </AccordionItem>
                    )}
                  </Accordion>

                  <div className="mt-4 border-t pt-4 flex justify-between items-center text-sm text-stone-500">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{gradingData.requirements.months} months</span>
                    </div>
                    {gradingData.requirements.classes > 0 && (
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{gradingData.requirements.classes} classes</span>
                      </div>
                    )}
                    <Badge variant="outline" className="text-xs">
                      {level.label}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default GradingsPage; 