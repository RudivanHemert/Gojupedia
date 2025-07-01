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
      icon: <BookOpen className="h-8 w-8 text-blue-600" />, 
      path: '/theory',
      color: 'bg-blue-50 border-blue-200 hover:bg-blue-100'
    },
    {
      id: 'practice',
      title: 'Praktijk',
      subtitle: 'Technieken, kata, bunkai, kumite en hojo undo',
      icon: <Dumbbell className="h-8 w-8 text-green-600" />, 
      path: '/practice',
      color: 'bg-green-50 border-green-200 hover:bg-green-100'
    },
    {
      id: 'study',
      title: 'Studie',
      subtitle: 'Quizzen, flashcards en graduaties',
      icon: <GraduationCap className="h-8 w-8 text-purple-600" />, 
      path: '/study',
      color: 'bg-purple-50 border-purple-200 hover:bg-purple-100'
    },
    {
      id: 'search',
      title: 'Zoeken',
      subtitle: 'Zoek door alle content en termen',
      icon: <Search className="h-8 w-8 text-orange-600" />, 
      path: '/search',
      color: 'bg-orange-50 border-orange-200 hover:bg-orange-100'
    },
    {
      id: 'settings',
      title: 'Instellingen',
      subtitle: 'Taal, thema en voorkeuren',
      icon: <Settings className="h-8 w-8 text-gray-600" />, 
      path: '/settings',
      color: 'bg-gray-50 border-gray-200 hover:bg-gray-100'
    },
    {
      id: 'about',
      title: 'Over',
      subtitle: 'Over Gojupedia en Goju Ryu Karate',
      icon: <Info className="h-8 w-8 text-red-600" />, 
      path: '/about',
      color: 'bg-red-50 border-red-200 hover:bg-red-100'
    },
  ];

  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-stone-50">
      <div className="flex flex-col items-center w-full max-w-4xl mx-auto mt-8 px-4">
        {/* Hero block */}
        <div className="flex flex-col items-center mb-8">
          <img
            src={miyagiImg}
            alt="Chojun Miyagi"
            className="w-32 h-32 rounded-full border-4 border-red-500 object-cover mb-4"
          />
          <div className="text-4xl font-bold text-red-600 mt-2">剛柔流</div>
          <div className="text-xl italic text-stone-700 mb-2">Goju Ryu Karate-Do</div>
          <div className="text-base text-stone-500 mb-4">{t('home.heroTagline')}</div>
        </div>

        {/* Intro block */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8 w-full text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">{t('home.introTitle')}</h2>
          <div className="text-lg text-stone-700 leading-relaxed">
            {t('home.introText')}
          </div>
        </div>

        {/* Main sections */}
        <div className="w-full mb-8">
          <h3 className="text-2xl font-serif font-bold mb-6 text-center">Hoofdsecties</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {mainSections.map((section) => (
              <Link
                to={section.path}
                key={section.id}
                className={`${section.color} rounded-xl border-2 p-6 transition-all duration-200 hover:shadow-lg hover:scale-105`}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4">{section.icon}</div>
                  <h4 className="font-bold text-lg text-gray-900 mb-2">
                    {section.title}
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {section.subtitle}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Quick access to popular subsections */}
        <div className="w-full mb-8">
          <h3 className="text-xl font-serif font-bold mb-4 text-center">Populaire Subsecties</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <Link
              to="/philosophy"
              className="bg-white rounded-lg shadow flex items-center px-4 py-3 hover:bg-stone-100 transition group"
            >
              <Heart className="h-5 w-5 text-red-500 mr-3" />
              <span className="font-medium text-sm">Filosofie</span>
            </Link>
            <Link
              to="/techniques"
              className="bg-white rounded-lg shadow flex items-center px-4 py-3 hover:bg-stone-100 transition group"
            >
              <Target className="h-5 w-5 text-blue-500 mr-3" />
              <span className="font-medium text-sm">Technieken</span>
            </Link>
            <Link
              to="/kata"
              className="bg-white rounded-lg shadow flex items-center px-4 py-3 hover:bg-stone-100 transition group"
            >
              <Users className="h-5 w-5 text-green-500 mr-3" />
              <span className="font-medium text-sm">Kata</span>
            </Link>
            <Link
              to="/terminology"
              className="bg-white rounded-lg shadow flex items-center px-4 py-3 hover:bg-stone-100 transition group"
            >
              <Brain className="h-5 w-5 text-purple-500 mr-3" />
              <span className="font-medium text-sm">Terminologie</span>
            </Link>
          </div>
        </div>

        {/* Quote */}
        <div className="w-full flex flex-col items-center mt-8 mb-8">
          <div className="italic text-stone-600 text-center max-w-xl mb-2 text-lg">
            "{t('home.miyagiQuote')}"
          </div>
          <div className="text-stone-400 text-sm">{t('home.miyagiAuthor')}</div>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
