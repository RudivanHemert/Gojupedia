import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronRight, Award, Book, GraduationCap, Swords, ScrollText, Menu, Calendar, Clock, Dumbbell, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Badge } from '@/components/ui/badge';
import { useTranslation } from 'react-i18next';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import AudioButton from '@/components/ui/audio-button';
import { cn } from '@/lib/utils';

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

interface TechniqueCategory {
  category: string;
  techniques: string[];
}

interface KnowledgeItem {
  term: string;
  meaning?: string;
}

interface GradingData {
  title: string;
  requirements: {
    classes: number;
    months: number;
  };
  techniques: TechniqueCategory[];
  knowledge?: KnowledgeItem[];
  history?: string[];
}

const GraduationsPage = () => {
  const { t, i18n } = useTranslation();
  const [activeSection, setActiveSection] = useState("ranks");
  const [activeKyu, setActiveKyu] = useState("10th-kyu");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    { id: "10th-kyu", label: "10th Kyu", color: "bg-white", stripes: 1, borderColor: "border-stone-300" },
    { id: "9th-kyu", label: "9th Kyu", color: "bg-white", stripes: 2, borderColor: "border-stone-300" },
    { id: "8th-kyu", label: "8th Kyu", color: "bg-white", stripes: 3, borderColor: "border-stone-300" },
    { id: "7th-kyu", label: "7th Kyu", color: "bg-[#FFD700]", stripes: 0, borderColor: "border-amber-500" },
    { id: "6th-kyu", label: "6th Kyu", color: "bg-orange-600", stripes: 0, borderColor: "border-orange-700" },
    { id: "5th-kyu", label: "5th Kyu", color: "bg-green-700", stripes: 0, borderColor: "border-green-800" },
    { id: "4th-kyu", label: "4th Kyu", color: "bg-blue-700", stripes: 0, borderColor: "border-blue-800" },
    { id: "3rd-kyu", label: "3rd Kyu", color: "bg-amber-800", stripes: 0, textColor: "text-white", borderColor: "border-amber-900" },
    { id: "2nd-kyu", label: "2nd Kyu", color: "bg-amber-800", stripes: 1, textColor: "text-white", borderColor: "border-amber-900" },
    { id: "1st-kyu", label: "1st Kyu", color: "bg-amber-800", stripes: 2, textColor: "text-white", borderColor: "border-amber-900" },
    { id: "shodan", label: "Shodan", color: "bg-black", stripes: 0, textColor: "text-white", borderColor: "border-gray-800" },
  ];

  const sections = [
    {
      id: "ranks",
      label: t('graduations.sections.ranks.title'),
      icon: <Award className="h-4 w-4" />
    },
    {
      id: "examRequirements",
      label: t('graduations.sections.examRequirements.title'),
      icon: <ScrollText className="h-4 w-4" />
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

  const SidebarContent = () => (
    <div className="flex flex-col gap-2 p-1">
      {sections.map((section) => (
        <Button
          key={section.id}
          variant={activeSection === section.id ? "secondary" : "ghost"}
          className={cn(
            "w-full justify-start gap-3",
            activeSection === section.id && "bg-secondary font-medium"
          )}
          onClick={() => {
            setActiveSection(section.id);
            setIsMobileMenuOpen(false);
          }}
        >
          {section.icon}
          {section.label}
        </Button>
      ))}
    </div>
  );

  const renderRanks = () => {
    const ranks = t('graduations.sections.ranks', { returnObjects: true }) as any;

    if (!ranks || !ranks.kyu || !ranks.dan || !ranks.ranks) return null;

    return (
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div>
          <h2 className="text-3xl font-bold mb-4">{t('graduations.sections.ranks.title')}</h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            {ranks.description}
          </p>
        </div>

        <div className="grid gap-6">
          <Card className="border-l-4 border-l-primary/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Badge variant="outline" className="text-lg px-3 py-1 bg-background">Kyu</Badge>
                <div className="flex items-center gap-2">
                  <span className="text-xl font-japanese">{ranks.kyu.japanese}</span>
                  <AudioButton text={ranks.kyu.japanese} size="sm" />
                </div>
                <span>{ranks.kyu.name}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">{ranks.kyu.description}</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-primary">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Badge variant="default" className="text-lg px-3 py-1">Dan</Badge>
                <div className="flex items-center gap-2">
                  <span className="text-xl font-japanese">{ranks.dan.japanese}</span>
                  <AudioButton text={ranks.dan.japanese} size="sm" />
                </div>
                <span>{ranks.dan.name}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">{ranks.dan.description}</p>
            </CardContent>
          </Card>

          <div className="space-y-6 pt-6">
            <h3 className="text-2xl font-bold border-b pb-2">Dan Ranks Overview</h3>
            <div className="grid gap-4 md:grid-cols-2">
              {Object.entries(ranks.ranks).map(([key, rank]: [string, any]) => (
                <Card key={key} className="hover:bg-muted/50 transition-colors">
                  <CardContent className="pt-6">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-xl font-japanese font-bold text-primary">{rank.japanese}</span>
                          <AudioButton text={rank.japanese} size="sm" />
                        </div>
                        <Badge variant="secondary">{rank.name}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{rank.description}</p>
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
    if (!beltColors || !beltColors.colors) return null;

    return (
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div>
          <h2 className="text-3xl font-bold mb-4">{t('graduations.sections.beltColors.title')}</h2>
          <p className="text-muted-foreground leading-relaxed text-lg">{beltColors.description}</p>
        </div>

        <div className="grid gap-4">
          {Object.entries(beltColors.colors).map(([key, color]: [string, any]) => (
            <div key={key} className="group flex items-start gap-4 p-4 rounded-xl border bg-card hover:shadow-md transition-all">
              <div
                className={`flex-shrink-0 w-16 h-16 rounded-lg shadow-sm border-2 border-border/50 ${key === 'white' ? 'bg-white' :
                  key === 'yellow' ? 'bg-yellow-400' :
                    key === 'orange' ? 'bg-orange-500' :
                      key === 'green' ? 'bg-green-600' :
                        key === 'blue' ? 'bg-blue-600' :
                          key === 'brown' ? 'bg-amber-800' :
                            key === 'black' ? 'bg-black' : 'bg-gray-300'
                  }`}
              />
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="font-bold text-lg">{color.name}</h3>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <span className="font-japanese text-sm">{color.japanese}</span>
                    <AudioButton text={color.japanese} size="sm" />
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">{color.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderTitles = () => {
    const titles = t('graduations.sections.titles', { returnObjects: true }) as any;
    if (!titles) return null;

    return (
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div>
          <h2 className="text-3xl font-bold mb-4">{t('graduations.sections.titles.title')}</h2>
          <p className="text-muted-foreground leading-relaxed text-lg">{titles.description}</p>
        </div>

        {['studentTitles', 'instructorTitles', 'otherTitles'].map((sectionKey) => {
          const section = titles[sectionKey];
          if (!section) return null;
          return (
            <div key={sectionKey} className="space-y-4">
              <h3 className="text-2xl font-bold flex items-center gap-2 border-b pb-2 mt-8">
                {sectionKey === 'studentTitles' ? <Book className="w-6 h-6 text-primary" /> :
                  sectionKey === 'instructorTitles' ? <Award className="w-6 h-6 text-primary" /> :
                    <GraduationCap className="w-6 h-6 text-primary" />}
                {section.title}
              </h3>
              <div className="grid gap-4 md:grid-cols-2">
                {Object.entries(section.titles).map(([key, title]: [string, any]) => (
                  <Card key={key} className="h-full">
                    <CardHeader className="pb-3">
                      <CardTitle className="flex items-center justify-between text-base">
                        <span className="font-bold">{title.name}</span>
                        <div className="flex items-center gap-1 text-sm font-normal text-muted-foreground">
                          <span className="font-japanese">{title.japanese}</span>
                          <AudioButton text={title.japanese} size="sm" />
                        </div>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground leading-relaxed">{title.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    );
  };

  const renderGradingSystem = () => {
    const gradingSystem = t('graduations.sections.gradingSystem', { returnObjects: true }) as any;
    const regulations = t('graduations.regulations', { returnObjects: true }) as any;

    if (!gradingSystem || !regulations) return null;

    return (
      <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div>
          <h2 className="text-3xl font-bold mb-4">{t('graduations.sections.gradingSystem.title')}</h2>
          <p className="text-muted-foreground leading-relaxed text-lg border-l-4 border-primary/20 pl-4 py-2 bg-muted/20">
            {gradingSystem.description}
          </p>
        </div>

        {/* Regulations Content - Document Style */}
        <div className="prose prose-slate dark:prose-invert max-w-none space-y-12">

          {/* Intro */}
          {regulations.intro && (
            <section>
              <p className="font-medium text-lg text-primary mb-4">{regulations.intro.text}</p>
            </section>
          )}

          {/* Grading Systems (Kyu/Dan) from Original Data */}
          <section className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Swords className="w-5 h-5" /> {gradingSystem.kyuSystem.title}
              </h3>
              <div className="bg-card border rounded-xl p-6 shadow-sm">
                <p className="text-muted-foreground mb-4 text-sm">{gradingSystem.kyuSystem.description}</p>
                <div className="space-y-2">
                  {Object.entries(gradingSystem.kyuSystem.levels).map(([key, level]: [string, any]) => (
                    <div key={key} className="flex items-center gap-2 text-sm font-medium p-2 bg-muted/50 rounded">
                      <div className="w-2 h-2 rounded-full bg-primary/40" />
                      {level}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Award className="w-5 h-5" /> {gradingSystem.danSystem.title}
              </h3>
              <div className="bg-card border rounded-xl p-6 shadow-sm">
                <p className="text-muted-foreground mb-4 text-sm">{gradingSystem.danSystem.description}</p>
                <div className="space-y-2">
                  {Object.entries(gradingSystem.danSystem.levels).map(([key, level]: [string, any]) => (
                    <div key={key} className="flex items-center gap-2 text-sm font-medium p-2 bg-muted/50 rounded">
                      <div className="w-2 h-2 rounded-full bg-primary/40" />
                      {level}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* 3.1 Junior Grades */}
          {regulations.junior && (
            <section className="space-y-6">
              <h3 className="text-2xl font-bold border-b pb-2 text-primary/80">{regulations.junior.title}</h3>
              <div className="bg-muted/30 p-6 rounded-lg space-y-4">
                <p className="leading-relaxed">{regulations.junior.text}</p>

                {regulations.junior.categories && (
                  <div className="grid sm:grid-cols-3 gap-4 mt-4">
                    {Object.entries(regulations.junior.categories).map(([key, val]: [string, any]) => (
                      <div key={key} className="bg-background border p-4 rounded-lg text-center shadow-sm">
                        <span className="font-bold block text-primary">{val}</span>
                      </div>
                    ))}
                  </div>
                )}
                <div className="flex flex-col gap-2 mt-4 text-sm text-muted-foreground bg-background/50 p-4 rounded border">
                  <p>• {regulations.junior.registration}</p>
                  <p>• {regulations.junior.turning18}</p>
                </div>
              </div>
            </section>
          )}

          {/* 3.2 Senior Ranks */}
          {regulations.senior && (
            <section className="space-y-8">
              <h3 className="text-2xl font-bold border-b pb-2 text-primary/80">{regulations.senior.title}</h3>

              <div className="grid gap-12">
                {regulations.senior.sandan && (
                  <div className="relative pl-8 border-l-2 border-muted hover:border-primary/50 transition-colors">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-background border-2 border-primary" />
                    <h4 className="text-xl font-bold mb-3">{regulations.senior.sandan.title}</h4>
                    <p className="text-muted-foreground mb-4">{regulations.senior.sandan.text}</p>
                    <ul className="space-y-2">
                      {regulations.senior.sandan.points && regulations.senior.sandan.points.map((p: string, i: number) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/60 flex-shrink-0" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {regulations.senior.yondan && (
                  <div className="relative pl-8 border-l-2 border-muted hover:border-primary/50 transition-colors">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-background border-2 border-primary" />
                    <h4 className="text-xl font-bold mb-3">{regulations.senior.yondan.title}</h4>
                    <p className="text-muted-foreground">{regulations.senior.yondan.text}</p>
                  </div>
                )}

                {regulations.senior.godan && (
                  <div className="relative pl-8 border-l-2 border-muted hover:border-primary/50 transition-colors">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-background border-2 border-primary" />
                    <h4 className="text-xl font-bold mb-3">{regulations.senior.godan.title}</h4>
                    <p className="text-muted-foreground mb-4">{regulations.senior.godan.text}</p>
                    <ul className="space-y-2">
                      {regulations.senior.godan.points && regulations.senior.godan.points.map((p: string, i: number) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/60 flex-shrink-0" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {regulations.senior.rokudan && (
                  <div className="relative pl-8 border-l-2 border-muted hover:border-primary/50 transition-colors">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-background border-2 border-primary" />
                    <h4 className="text-xl font-bold mb-3">{regulations.senior.rokudan.title}</h4>
                    <p className="text-muted-foreground mb-4">{regulations.senior.rokudan.text}</p>
                    <div className="bg-muted/30 p-4 rounded-lg">
                      <p className="font-semibold mb-2">{regulations.senior.rokudan.considerationsTitle}</p>
                      <ul className="space-y-2">
                        {regulations.senior.rokudan.points && regulations.senior.rokudan.points.map((p: string, i: number) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/60 flex-shrink-0" />
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
                {regulations.senior.highranks && (
                  <div className="relative pl-8 border-l-2 border-muted hover:border-primary/50 transition-colors">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-background border-2 border-primary" />
                    <h4 className="text-xl font-bold mb-3">{regulations.senior.highranks.title}</h4>
                    <p className="text-muted-foreground">{regulations.senior.highranks.text}</p>
                  </div>
                )}
              </div>
            </section>
          )}

          {/* 4. General Rules */}
          {regulations.generalRules && (
            <section className="space-y-8">
              <h3 className="text-2xl font-bold border-b pb-2 text-primary/80">{regulations.generalRules.title}</h3>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Admin */}
                {regulations.generalRules.admin && (
                  <Card>
                    <CardHeader><CardTitle className="text-lg">{regulations.generalRules.admin.title}</CardTitle></CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {regulations.generalRules.admin.points && regulations.generalRules.admin.points.map((p: string, i: number) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <ChevronRight className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )}

                {/* Time & Fee */}
                {regulations.generalRules.timeFee && (
                  <Card>
                    <CardHeader><CardTitle className="text-lg">{regulations.generalRules.timeFee.title}</CardTitle></CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h5 className="font-medium text-sm mb-2 underline decoration-primary/50">{regulations.generalRules.timeFee.definitions.title}</h5>
                        <ul className="space-y-1">
                          {regulations.generalRules.timeFee.definitions.points && regulations.generalRules.timeFee.definitions.points.map((p: string, i: number) => (
                            <li key={i} className="text-xs text-muted-foreground">• {p}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="text-xs bg-muted p-2 rounded italic">
                        {regulations.generalRules.timeFee.definitions.note}
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>

              {/* Categories */}
              {regulations.generalRules.categories && (
                <div className="bg-card border rounded-xl overflow-hidden">
                  <div className="bg-muted/50 p-4 border-b">
                    <h4 className="font-bold">{regulations.generalRules.categories.title}</h4>
                  </div>
                  <div className="p-6 space-y-6">
                    <p className="text-muted-foreground">{regulations.generalRules.categories.text}</p>

                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="space-y-2">
                        <span className="font-medium block text-primary">{regulations.generalRules.categories.chiefs.title}</span>
                        <ul className="text-sm space-y-1 text-muted-foreground">
                          {regulations.generalRules.categories.chiefs.points && regulations.generalRules.categories.chiefs.points.map((p: string, i: number) => <li key={i}>• {p}</li>)}
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <span className="font-medium block text-primary">{regulations.generalRules.categories.kambukai.title}</span>
                        <p className="text-sm text-muted-foreground">{regulations.generalRules.categories.kambukai.text}</p>
                      </div>
                      <div className="space-y-2">
                        <span className="font-medium block text-primary">{regulations.generalRules.categories.representatives.title}</span>
                        <p className="text-sm text-muted-foreground">{regulations.generalRules.categories.representatives.text}</p>
                      </div>
                    </div>
                    <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900 p-3 rounded text-center text-red-600 dark:text-red-400 font-medium text-sm">
                      {regulations.generalRules.categories.permission}
                    </div>
                  </div>
                </div>
              )}
            </section>
          )}

          {/* Written Exam */}
          {regulations.writtenExam && (
            <section className="space-y-6">
              <h3 className="text-2xl font-bold border-b pb-2 text-primary/80">{regulations.writtenExam.title}</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {regulations.writtenExam.low && (
                  <div className="bg-secondary/20 p-6 rounded-xl border border-secondary/50">
                    <h4 className="font-bold text-lg mb-2">{regulations.writtenExam.low.title}</h4>
                    <p className="text-muted-foreground">{regulations.writtenExam.low.text}</p>
                  </div>
                )}
                {regulations.writtenExam.high && (
                  <div className="bg-primary/5 p-6 rounded-xl border border-primary/20">
                    <h4 className="font-bold text-lg mb-2">{regulations.writtenExam.high.title}</h4>
                    <p className="text-muted-foreground">{regulations.writtenExam.high.text}</p>
                  </div>
                )}
              </div>
            </section>
          )}

        </div>
      </div>
    );
  };

  const renderExamRequirements = () => {
    const gradingData: GradingData = getKyuData(activeKyu, i18n.language);

    // Helpers specifically for this section
    const renderStripes = (count: number) => {
      if (count <= 0) return null;
      const stripes = [];
      for (let i = 0; i < count; i++) {
        stripes.push(
          <div key={i} className="w-1.5 h-full bg-black absolute" style={{ right: `${i * 8 + 4}px` }} />
        );
      }
      return stripes;
    };

    const renderTechniques = (techniquesData: TechniqueCategory[]) => {
      return (
        <div className="space-y-4">
          {techniquesData.map((category, index) => (
            <div key={index} className="space-y-2">
              <h4 className="font-medium text-foreground">{category.category}</h4>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                {category.techniques.map((technique, techIndex) => (
                  <li key={techIndex}>{technique}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      );
    };

    const renderKnowledge = (knowledgeData: KnowledgeItem[]) => {
      return (
        <div className="space-y-2">
          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
            {knowledgeData.map((item, index) => (
              <li key={index}>
                <strong>{item.term}</strong> {item.meaning && `- ${item.meaning}`}
              </li>
            ))}
          </ul>
        </div>
      );
    };

    const renderHistory = (historyData: string[]) => {
      return (
        <div className="space-y-2">
          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
            {historyData.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      );
    };

    const activeLevelConfig = gradingLevels.find(l => l.id === activeKyu) || gradingLevels[0];

    return (
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div>
          <h2 className="text-3xl font-bold mb-4">{t('graduations.sections.examRequirements.title')}</h2>
          <p className="text-muted-foreground leading-relaxed text-lg mb-6">
            {t('graduations.sections.examRequirements.description')}
          </p>

          {/* Kyu Selector - Horizontal Scroll on mobile, Grid on desktop */}
          <ScrollArea className="w-full whitespace-nowrap pb-4">
            <div className="flex w-max space-x-2 p-1">
              {gradingLevels.map((level) => (
                <button
                  key={level.id}
                  onClick={() => setActiveKyu(level.id)}
                  className={cn(
                    "flex flex-col items-center justify-center p-3 rounded-lg border transition-all w-24 h-20",
                    activeKyu === level.id
                      ? "ring-2 ring-primary border-primary bg-secondary/50"
                      : "hover:bg-muted/50 border-border"
                  )}
                >
                  {/* Mini Belt Visual */}
                  <div className={cn(
                    "w-12 h-3 mb-2 relative border border-black/10 shadow-sm",
                    level.color
                  )}>
                    {renderStripes(level.stripes)}
                  </div>
                  <span className="text-xs font-semibold">{level.label}</span>
                </button>
              ))}
            </div>
          </ScrollArea>
        </div>

        <Card className="overflow-hidden border-2">
          <CardHeader className={`${activeLevelConfig.color} ${activeLevelConfig.textColor || 'text-foreground'} relative overflow-hidden border-b ${activeLevelConfig.borderColor}`}>
            {renderStripes(activeLevelConfig.stripes)}
            <CardTitle className="text-2xl text-center relative z-10">{gradingData.title}</CardTitle>
          </CardHeader>

          <CardContent className="pt-6 space-y-8">
            {/* Basic Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-muted p-4 rounded-xl border text-center">
                <div className="flex items-center justify-center gap-2 mb-1 text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span className="text-xs uppercase tracking-wider">Start</span>
                </div>
                <p className="text-2xl font-bold">{gradingData.requirements.months} <span className="text-sm font-normal text-muted-foreground">months</span></p>
              </div>
              {gradingData.requirements.classes > 0 && (
                <div className="bg-muted p-4 rounded-xl border text-center">
                  <div className="flex items-center justify-center gap-2 mb-1 text-muted-foreground">
                    <Dumbbell className="w-4 h-4" />
                    <span className="text-xs uppercase tracking-wider">Training</span>
                  </div>
                  <p className="text-2xl font-bold">{gradingData.requirements.classes} <span className="text-sm font-normal text-muted-foreground">classes</span></p>
                </div>
              )}
            </div>

            {/* Requirements Accordion */}
            <Accordion type="single" collapsible defaultValue="techniques" className="w-full space-y-4">
              <AccordionItem value="techniques" className="border rounded-xl px-2">
                <AccordionTrigger className="hover:no-underline py-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-2 rounded-lg text-primary">
                      <Swords className="w-5 h-5" />
                    </div>
                    <span className="font-bold text-lg">Techniques</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-2 pb-4 pl-12 pr-4">
                  {renderTechniques(gradingData.techniques)}
                </AccordionContent>
              </AccordionItem>

              {gradingData.knowledge && gradingData.knowledge.length > 0 && (
                <AccordionItem value="knowledge" className="border rounded-xl px-2">
                  <AccordionTrigger className="hover:no-underline py-4">
                    <div className="flex items-center gap-3">
                      <div className="bg-primary/10 p-2 rounded-lg text-primary">
                        <Book className="w-5 h-5" />
                      </div>
                      <span className="font-bold text-lg">Knowledge & Terminology</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-2 pb-4 pl-12 pr-4">
                    {renderKnowledge(gradingData.knowledge)}
                  </AccordionContent>
                </AccordionItem>
              )}

              {gradingData.history && gradingData.history.length > 0 && (
                <AccordionItem value="history" className="border rounded-xl px-2">
                  <AccordionTrigger className="hover:no-underline py-4">
                    <div className="flex items-center gap-3">
                      <div className="bg-primary/10 p-2 rounded-lg text-primary">
                        <Clock className="w-5 h-5" />
                      </div>
                      <span className="font-bold text-lg">History</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-2 pb-4 pl-12 pr-4">
                    {renderHistory(gradingData.history)}
                  </AccordionContent>
                </AccordionItem>
              )}
            </Accordion>
          </CardContent>
        </Card>
      </div>
    );
  };

  return (
    <div className="container py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">{t('graduations.title')}</h1>
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <div className="mt-6">
              <SidebarContent />
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Desktop Sidebar */}
        <aside className="hidden md:block md:col-span-3 lg:col-span-2 space-y-6">
          <div className="sticky top-24">
            <h2 className="text-xl font-bold mb-4 px-2">{t('graduations.title')}</h2>
            <nav className="space-y-1">
              <SidebarContent />
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="md:col-span-9 lg:col-span-10 min-h-[500px]">
          {activeSection === "ranks" && renderRanks()}
          {activeSection === "examRequirements" && renderExamRequirements()}
          {activeSection === "beltColors" && renderBeltColors()}
          {activeSection === "titles" && renderTitles()}
          {activeSection === "gradingSystem" && renderGradingSystem()}
        </main>
      </div>
    </div>
  );
};

export default GraduationsPage;