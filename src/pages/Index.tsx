import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Card } from '@/components/ui/card';
import { 
  ChevronRight, 
  BookOpen, 
  Dumbbell, 
  GraduationCap, 
  Search, 
  Settings, 
  Info,
  Brain,
  Heart,
  Scroll,
  Target,
  Users
} from 'lucide-react';

const miyagiImg = 'https://upload.wikimedia.org/wikipedia/commons/d/d6/Miyagi_Chojun.jpg';

const IndexPage = () => {
  const { t } = useTranslation();

  const mainSections = [
    {
      id: 'theory',
      title: t('home.sections.theory.title'),
      subtitle: t('home.sections.theory.subtitle'),
      icon: <BookOpen className="h-8 w-8 text-blue-600 dark:text-blue-400" />, 
      path: '/theory',
      color: 'bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-950/40'
    },
    {
      id: 'practice',
      title: t('home.sections.practice.title'),
      subtitle: t('home.sections.practice.subtitle'),
      icon: <Dumbbell className="h-8 w-8 text-green-600 dark:text-green-400" />, 
      path: '/practice',
      color: 'bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800 hover:bg-green-100 dark:hover:bg-green-950/40'
    },
    {
      id: 'study',
      title: t('home.sections.study.title'),
      subtitle: t('home.sections.study.subtitle'),
      icon: <GraduationCap className="h-8 w-8 text-purple-600 dark:text-purple-400" />, 
      path: '/study',
      color: 'bg-purple-50 dark:bg-purple-950/20 border-purple-200 dark:border-purple-800 hover:bg-purple-100 dark:hover:bg-purple-950/40'
    },
    {
      id: 'search',
      title: t('home.sections.search.title'),
      subtitle: t('home.sections.search.subtitle'),
      icon: <Search className="h-8 w-8 text-orange-600 dark:text-orange-400" />, 
      path: '/search',
      color: 'bg-orange-50 dark:bg-orange-950/20 border-orange-200 dark:border-orange-800 hover:bg-orange-100 dark:hover:bg-orange-950/40'
    },
    {
      id: 'settings',
      title: t('settings.title'),
      subtitle: t('settings.subtitle'),
      icon: <Settings className="h-8 w-8 text-muted-foreground dark:text-gray-400" />, 
      path: '/settings',
      color: 'bg-muted dark:bg-muted/20 border-border dark:border-border hover:bg-muted/50 dark:hover:bg-muted/30'
    },
    {
      id: 'about',
      title: t('home.sections.about.title'),
      subtitle: t('home.sections.about.subtitle'),
      icon: <Info className="h-8 w-8 text-red-600 dark:text-red-400" />, 
      path: '/about',
      color: 'bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-800 hover:bg-red-100 dark:hover:bg-red-950/40'
    },
  ];

  return (
    <div className="flex flex-col w-full min-h-screen bg-background">
      <div className="flex flex-col w-full mt-0 px-0">
        {/* Hero block */}
        <div className="flex flex-col items-center mb-8">
          <img
            src={miyagiImg}
            alt="Chojun Miyagi"
            className="w-32 h-32 rounded-full border-4 border-red-500 object-cover mb-4"
          />
          <div className="text-4xl font-bold text-red-600 dark:text-red-400 mt-2">剛柔流</div>
          <div className="text-xl italic text-muted-foreground dark:text-stone-300 mb-2">Goju Ryu Karate-Do</div>
          <div className="text-base text-muted-foreground dark:text-stone-400 mb-4">{t('home.heroTagline')}</div>
        </div>

        {/* Intro block */}
        <div className="bg-card dark:bg-card rounded-none shadow-none p-4 sm:p-6 md:p-8 mb-6 w-full text-center">
          <h2 className="text-3xl font-bold mb-4">{t('home.introTitle')}</h2>
          <div className="text-lg text-foreground leading-relaxed">
            {t('home.introText')}
          </div>
        </div>

        {/* Main sections */}
        <div className="w-full mb-6">
          <h3 className="text-xl font-bold mb-4 text-center">{t('home.mainSectionsTitle')}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 md:gap-4 px-2 sm:px-4 md:px-6">
            {mainSections.map((section) => (
              <Link
                key={section.id}
                to={section.path}
                className={`block rounded-lg border ${section.color} transition-all duration-200 p-6 group`}
              >
                <div className="flex items-center gap-4 mb-2">
                  {section.icon}
                  <h2 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {section.title}
                  </h2>
                </div>
                <p className="text-muted-foreground text-sm">
                  {section.subtitle}
                </p>
                <div className="flex items-center text-primary mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm font-medium">{t('home.viewSection')}</span>
                  <ChevronRight className="h-4 w-4 ml-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Popular subsections */}
        <div className="w-full mb-6">
          <h3 className="text-xl font-bold mb-4 text-center">{t('home.popularSubsectionsTitle')}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 px-2 sm:px-4 md:px-6">
            <Link
              to="/philosophy"
              className="bg-card dark:bg-card rounded-lg shadow flex items-center px-4 py-3 hover:bg-muted/50 transition group"
            >
              <Heart className="h-5 w-5 text-red-500 dark:text-red-400 mr-3" />
              <span className="font-medium text-sm">{t('home.subsections.philosophy')}</span>
            </Link>
            <Link
              to="/techniques"
              className="bg-card dark:bg-card rounded-lg shadow flex items-center px-4 py-3 hover:bg-muted/50 transition group"
            >
              <Target className="h-5 w-5 text-blue-500 dark:text-blue-400 mr-3" />
              <span className="font-medium text-sm">{t('home.subsections.techniques')}</span>
            </Link>
            <Link
              to="/kata"
              className="bg-card dark:bg-card rounded-lg shadow flex items-center px-4 py-3 hover:bg-muted/50 transition group"
            >
              <Users className="h-5 w-5 text-green-500 dark:text-green-400 mr-3" />
              <span className="font-medium text-sm">{t('home.subsections.kata')}</span>
            </Link>
            <Link
              to="/terminology"
              className="bg-card dark:bg-card rounded-lg shadow flex items-center px-4 py-3 hover:bg-muted/50 transition group"
            >
              <Brain className="h-5 w-5 text-purple-500 dark:text-purple-400 mr-3" />
              <span className="font-medium text-sm">{t('home.subsections.terminology')}</span>
            </Link>
          </div>
        </div>

        {/* Quote */}
        <div className="w-full flex flex-col items-center mt-6 mb-6 px-2 sm:px-4 md:px-6">
          <div className="italic text-muted-foreground text-center w-full md:max-w-3xl mb-2 text-lg">
            "{t('home.miyagiQuote')}"
          </div>
          <div className="text-muted-foreground text-sm">{t('home.miyagiAuthor')}</div>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
