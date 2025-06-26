import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Card } from '@/components/ui/card';
import { ChevronRight, Swords, User, Scroll, Brain, BookOpen, Heart } from 'lucide-react';

const miyagiImg = 'https://upload.wikimedia.org/wikipedia/commons/d/d6/Miyagi_Chojun.jpg';

const IndexPage = () => {
  const { t } = useTranslation();

  const studyAreas = [
    {
      id: 'techniques',
      title: t('common.categories.techniques_name'),
      subtitle: t('common.categories.techniques_description'),
      icon: <Swords className="h-6 w-6 text-red-500" />, 
      path: '/techniques',
    },
    {
      id: 'kata',
      title: t('common.categories.kata_name'),
      subtitle: t('common.categories.kata_description'),
      icon: <User className="h-6 w-6 text-red-500" />, 
      path: '/kata',
    },
    {
      id: 'history',
      title: t('common.categories.history_name'),
      subtitle: t('common.categories.history_description'),
      icon: <Scroll className="h-6 w-6 text-red-500" />, 
      path: '/history',
    },
    {
      id: 'philosophy',
      title: t('common.categories.philosophy_name'),
      subtitle: t('common.categories.philosophy_description'),
      icon: <Heart className="h-6 w-6 text-red-500" />, 
      path: '/philosophy',
    },
    {
      id: 'theory',
      title: t('home.kataTheoryTitle', 'Kata Theorie'),
      subtitle: t('home.kataTheorySubtitle', 'Principes en theorie achter traditionele vormen'),
      icon: <BookOpen className="h-6 w-6 text-red-500" />, 
      path: '/theory/kata',
    },
    {
      id: 'terminology',
      title: t('home.terminologyTitle', 'Terminologie'),
      subtitle: t('home.terminologySubtitle', 'Japanse terminologie en vocabulaire'),
      icon: <Brain className="h-6 w-6 text-red-500" />, 
      path: '/terminology',
    },
  ];

  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-stone-50">
      <div className="flex flex-col items-center w-full max-w-2xl mx-auto mt-8">
        {/* Hero block */}
        <div className="flex flex-col items-center mb-6">
          <img
            src={miyagiImg}
            alt="Chojun Miyagi"
            className="w-28 h-28 rounded-full border-4 border-red-500 object-cover mb-2"
          />
          <div className="text-3xl font-bold text-red-600 mt-2">剛柔流</div>
          <div className="text-lg italic text-stone-700 mb-1">Goju Ryu Karate-Do</div>
          <div className="text-sm text-stone-500 mb-2">{t('home.heroTagline')}</div>
        </div>

        {/* Intro block */}
        <div className="bg-white rounded-xl shadow p-6 mb-8 w-full text-center">
          <h2 className="text-2xl font-serif font-bold mb-2">{t('home.introTitle')}</h2>
          <div className="text-base text-stone-700 leading-relaxed">
            {t('home.introText')}
          </div>
        </div>

        {/* Study areas */}
        <div className="w-full mb-8">
          <h3 className="text-xl font-serif font-bold mb-4 text-center">{t('home.studyAreasTitle')}</h3>
          <div className="flex flex-col gap-3">
            {studyAreas.map((area) => (
              <Link
                to={area.path}
                key={area.id}
                className="bg-white rounded-xl shadow flex items-center px-4 py-3 hover:bg-stone-100 transition group"
              >
                <div className="mr-4">{area.icon}</div>
                <div className="flex-1">
                  <div className="font-semibold text-base text-stone-900 group-hover:text-red-600">
                    {area.title}
                  </div>
                  <div className="text-xs text-stone-500">{area.subtitle}</div>
                </div>
                <ChevronRight className="text-stone-300 group-hover:text-red-500" />
              </Link>
            ))}
          </div>
        </div>

        {/* Quote */}
        <div className="w-full flex flex-col items-center mt-4 mb-8">
          <div className="italic text-stone-600 text-center max-w-xl mb-2">
            “{t('home.miyagiQuote')}”
          </div>
          <div className="text-stone-400 text-sm">{t('home.miyagiAuthor')}</div>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
