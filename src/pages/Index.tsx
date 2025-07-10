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
      title: 'Theorie',
      subtitle: 'Filosofie, geschiedenis, terminologie en kata theorie',
      icon: <BookOpen className="h-8 w-8 text-blue-600 dark:text-blue-400" />, 
      path: '/theory',
      color: 'bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-950/40'
    },
    {
      id: 'practice',
      title: 'Praktijk',
      subtitle: 'Technieken, kata, bunkai, kumite en hojo undo',
      icon: <Dumbbell className="h-8 w-8 text-green-600 dark:text-green-400" />, 
      path: '/practice',
      color: 'bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800 hover:bg-green-100 dark:hover:bg-green-950/40'
    },
    {
      id: 'study',
      title: 'Studie',
      subtitle: 'Quizzen, flashcards en graduaties',
      icon: <GraduationCap className="h-8 w-8 text-purple-600 dark:text-purple-400" />, 
      path: '/study',
      color: 'bg-purple-50 dark:bg-purple-950/20 border-purple-200 dark:border-purple-800 hover:bg-purple-100 dark:hover:bg-purple-950/40'
    },
    {
      id: 'search',
      title: 'Zoeken',
      subtitle: 'Zoek door alle content en termen',
      icon: <Search className="h-8 w-8 text-orange-600 dark:text-orange-400" />, 
      path: '/search',
      color: 'bg-orange-50 dark:bg-orange-950/20 border-orange-200 dark:border-orange-800 hover:bg-orange-100 dark:hover:bg-orange-950/40'
    },
    {
      id: 'settings',
      title: 'Instellingen',
      subtitle: 'Taal, thema en voorkeuren',
      icon: <Settings className="h-8 w-8 text-gray-600 dark:text-gray-400" />, 
      path: '/settings',
      color: 'bg-muted dark:bg-muted/20 border-border dark:border-border hover:bg-muted/50 dark:hover:bg-muted/30'
    },
    {
      id: 'about',
      title: 'Over',
      subtitle: 'Over Gojupedia en Goju Ryu Karate',
      icon: <Info className="h-8 w-8 text-red-600 dark:text-red-400" />, 
      path: '/about',
      color: 'bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-800 hover:bg-red-100 dark:hover:bg-red-950/40'
    },
  ];

  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-background">
      <div className="flex flex-col items-center w-full max-w-4xl mx-auto mt-8 px-4">
        {/* Hero block */}
        <div className="flex flex-col items-center mb-8">
          <img
            src={miyagiImg}
            alt="Chojun Miyagi"
            className="w-32 h-32 rounded-full border-4 border-red-500 object-cover mb-4"
          />
          <div className="text-4xl font-bold text-red-600 dark:text-red-400 mt-2">剛柔流</div>
          <div className="text-xl italic text-stone-700 dark:text-stone-300 mb-2">Goju Ryu Karate-Do</div>
          <div className="text-base text-stone-500 dark:text-stone-400 mb-4">{t('home.heroTagline')}</div>
        </div>

        {/* Intro block */}
        <div className="bg-card dark:bg-card rounded-xl shadow-lg p-8 mb-8 w-full text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">{t('home.introTitle')}</h2>
          <div className="text-lg text-foreground leading-relaxed">
            {t('home.introText')}
          </div>
        </div>

        {/* Main sections */}
        <div className="w-full mb-8">
          <h3 className="text-xl font-serif font-bold mb-4 text-center">Hoofdsecties</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
                  <span className="text-sm font-medium">Bekijk sectie</span>
                  <ChevronRight className="h-4 w-4 ml-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Popular subsections */}
        <div className="w-full mb-8">
          <h3 className="text-xl font-serif font-bold mb-4 text-center">Populaire Subsecties</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <Link
              to="/philosophy"
              className="bg-card dark:bg-card rounded-lg shadow flex items-center px-4 py-3 hover:bg-muted/50 transition group"
            >
              <Heart className="h-5 w-5 text-red-500 dark:text-red-400 mr-3" />
              <span className="font-medium text-sm">Filosofie</span>
            </Link>
            <Link
              to="/techniques"
              className="bg-card dark:bg-card rounded-lg shadow flex items-center px-4 py-3 hover:bg-muted/50 transition group"
            >
              <Target className="h-5 w-5 text-blue-500 dark:text-blue-400 mr-3" />
              <span className="font-medium text-sm">Technieken</span>
            </Link>
            <Link
              to="/kata"
              className="bg-card dark:bg-card rounded-lg shadow flex items-center px-4 py-3 hover:bg-muted/50 transition group"
            >
              <Users className="h-5 w-5 text-green-500 dark:text-green-400 mr-3" />
              <span className="font-medium text-sm">Kata</span>
            </Link>
            <Link
              to="/terminology"
              className="bg-card dark:bg-card rounded-lg shadow flex items-center px-4 py-3 hover:bg-muted/50 transition group"
            >
              <Brain className="h-5 w-5 text-purple-500 dark:text-purple-400 mr-3" />
              <span className="font-medium text-sm">Terminologie</span>
            </Link>
          </div>
        </div>

        {/* Quote */}
        <div className="w-full flex flex-col items-center mt-8 mb-8">
          <div className="italic text-muted-foreground text-center max-w-xl mb-2 text-lg">
            "{t('home.miyagiQuote')}"
          </div>
          <div className="text-muted-foreground text-sm">{t('home.miyagiAuthor')}</div>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
