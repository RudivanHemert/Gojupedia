import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, BookText, Brain, Layers3, ListCheck, Target } from 'lucide-react';
import { buildStudies } from '@/data';
import TheoryHeader from '@/components/theory/TheoryHeader';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

type StudyMode = {
  id: string;
  title: string;
  description: string;
  path: string;
  count: number;
  itemCount: number;
  itemLabel: string;
  icon: React.ReactNode;
  iconPanelClassName: string;
};

const StudyPage = () => {
  const { t, i18n } = useTranslation();
  const studies = React.useMemo(() => buildStudies(t), [t, i18n.language]);

  const getStudiesByType = (type: string) => studies.filter((study) => study.type === type);
  const getQuestionCount = (type: string) =>
    getStudiesByType(type).reduce((total, study) => total + (study.questions?.length || 0), 0);

  const studyModes: StudyMode[] = [
    {
      id: 'quiz',
      title: t('study.quizzes.title', 'Quizzes'),
      description: t('study.quizzes.description', 'Test your knowledge on various topics.'),
      path: '/study/quizzes',
      count: getStudiesByType('quiz').length,
      itemCount: getQuestionCount('quiz'),
      itemLabel: t('study.questionsLabel', 'questions'),
      icon: <Brain className="h-5 w-5" />,
      iconPanelClassName: 'bg-sky-100 text-sky-700 dark:bg-sky-950 dark:text-sky-300',
    },
    {
      id: 'flashcards',
      title: t('study.flashcards.title', 'Flashcards'),
      description: t('study.flashcards.description', 'Review terms and concepts with flashcards.'),
      path: '/study/flashcards',
      count: getStudiesByType('flashcard').length,
      itemCount: getQuestionCount('flashcard'),
      itemLabel: t('study.cards', 'cards'),
      icon: <BookText className="h-5 w-5" />,
      iconPanelClassName: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300',
    },
    {
      id: 'matching',
      title: t('study.matching.title', 'Matching'),
      description: t('study.matching.description', 'Match terms and concepts with each other.'),
      path: '/study/matching',
      count: getStudiesByType('matching').length,
      itemCount: getQuestionCount('matching'),
      itemLabel: t('study.pairs', 'pairs'),
      icon: <ListCheck className="h-5 w-5" />,
      iconPanelClassName: 'bg-violet-100 text-violet-700 dark:bg-violet-950 dark:text-violet-300',
    },
  ];

  const totalSets = studyModes.reduce((total, mode) => total + mode.count, 0);
  const totalItems = studyModes.reduce((total, mode) => total + mode.itemCount, 0);
  const hasVitalPointsQuiz = studies.some((study) => study.type === 'vital-points-quiz');

  return (
    <div className="min-h-screen bg-background">
      <TheoryHeader
        title={t('study.pageHeaderTitle', t('study.title', 'Study'))}
        description={t('study.pageHeaderDescription', t('study.description', 'Test your knowledge and practice techniques'))}
        backUrl="/"
      />

      <div className="space-y-6 p-4">
        <section className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-md border border-border bg-card p-4">
            <p className="text-sm text-muted-foreground">{t('study.overview.studySets', 'Study sets')}</p>
            <p className="mt-1 text-2xl font-semibold text-foreground">{totalSets}</p>
          </div>
          <div className="rounded-md border border-border bg-card p-4">
            <p className="text-sm text-muted-foreground">{t('study.overview.studyItems', 'Study items')}</p>
            <p className="mt-1 text-2xl font-semibold text-foreground">{totalItems}</p>
          </div>
          <div className="rounded-md border border-border bg-card p-4">
            <p className="text-sm text-muted-foreground">{t('study.overview.studyModes', 'Study modes')}</p>
            <p className="mt-1 text-2xl font-semibold text-foreground">{studyModes.length}</p>
          </div>
        </section>

        <section className="space-y-3">
          <div className="flex items-center justify-between gap-3">
            <div>
              <h2 className="text-lg font-semibold text-foreground">
                {t('study.overview.chooseMode', 'Choose a study mode')}
              </h2>
              <p className="text-sm text-muted-foreground">
                {t('study.overview.chooseModeDescription', 'Practice the same content through questions, cards or matching exercises.')}
              </p>
            </div>
            <Badge variant="outline" className="hidden shrink-0 sm:inline-flex">
              <Layers3 className="mr-1 h-3.5 w-3.5" />
              {t('study.overview.allContent', 'All content')}
            </Badge>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {studyModes.map((mode) => (
              <Link key={mode.id} to={mode.path} className="group block">
                <Card className="h-full border-border transition-colors hover:border-karate">
                  <CardHeader className="space-y-4 pb-3">
                    <div className="flex items-start justify-between gap-3">
                      <div className={`flex h-11 w-11 items-center justify-center rounded-md ${mode.iconPanelClassName}`}>
                        {mode.icon}
                      </div>
                      <ArrowRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{mode.title}</CardTitle>
                      <p className="mt-1 text-sm text-muted-foreground">{mode.description}</p>
                    </div>
                  </CardHeader>
                  <CardContent className="flex flex-wrap gap-2 pt-0">
                    <Badge variant="secondary">
                      {mode.count} {t('study.overview.sets', 'sets')}
                    </Badge>
                    <Badge variant="outline">
                      {mode.itemCount} {mode.itemLabel}
                    </Badge>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {hasVitalPointsQuiz && (
          <section className="rounded-md border border-border bg-card p-4">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300">
                  <Target className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="font-semibold text-foreground">
                    {t('vitalPoints.quiz.title', t('vitalPoints.title', 'Vital Points'))}
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    {t('vitalPoints.quiz.description', t('vitalPoints.description', 'Study pressure points and vulnerable areas'))}
                  </p>
                </div>
              </div>
              <Button asChild className="sm:w-auto">
                <Link to="/study/vital-points-quiz">
                  {t('study.overview.start', 'Start')}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default StudyPage;
