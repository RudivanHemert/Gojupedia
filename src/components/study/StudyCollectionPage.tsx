import React from 'react';
import { useTranslation } from 'react-i18next';
import { Search } from 'lucide-react';
import { buildStudies } from '@/data';
import { Study } from '@/types';
import StudyCard from '@/components/study/StudyCard';
import TheoryHeader from '@/components/theory/TheoryHeader';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

type StudyCollectionPageProps = {
  type: Study['type'];
  title: string;
  description: string;
  emptyMessage: string;
};

const normalize = (value: string) => value.toLowerCase().trim();
const formatFallbackLabel = (value: string) =>
  value
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

const StudyCollectionPage: React.FC<StudyCollectionPageProps> = ({
  type,
  title,
  description,
  emptyMessage,
}) => {
  const { t, i18n } = useTranslation();
  const [query, setQuery] = React.useState('');
  const [category, setCategory] = React.useState('all');
  const [difficulty, setDifficulty] = React.useState('all');

  const translateText = React.useCallback(
    (key: string, fallback: string) => {
      const translated = t(key, { defaultValue: fallback });
      return translated === key ? fallback : translated;
    },
    [t],
  );

  const studies = React.useMemo(() => buildStudies(t), [t, i18n.language]);
  const typeStudies = React.useMemo(
    () => studies.filter((study) => study.type === type),
    [studies, type],
  );

  const categoryOptions = React.useMemo(() => {
    const categories = Array.from(new Set(typeStudies.map((study) => study.category)));
    return categories
      .map((value) => ({
        value,
        label: translateText(`study.categories.${value}`, formatFallbackLabel(value)),
      }))
      .sort((a, b) => a.label.localeCompare(b.label));
  }, [translateText, typeStudies]);

  const filteredStudies = React.useMemo(() => {
    const searchText = normalize(query);

    return typeStudies.filter((study) => {
      const categoryLabel = translateText(
        `study.categories.${study.category}`,
        formatFallbackLabel(study.category),
      );
      const matchesSearch =
        !searchText ||
        normalize(study.title).includes(searchText) ||
        normalize(study.description).includes(searchText) ||
        normalize(categoryLabel).includes(searchText);
      const matchesCategory = category === 'all' || study.category === category;
      const matchesDifficulty = difficulty === 'all' || study.difficulty === difficulty;

      return matchesSearch && matchesCategory && matchesDifficulty;
    });
  }, [category, difficulty, query, translateText, typeStudies]);

  const itemCount = typeStudies.reduce((total, study) => total + (study.questions?.length || 0), 0);
  const itemLabel =
    type === 'flashcard'
      ? t('study.cards', 'cards')
      : type === 'matching'
        ? t('study.pairs', 'pairs')
        : t('study.questionsLabel', 'questions');
  const hasActiveFilters = query.length > 0 || category !== 'all' || difficulty !== 'all';

  const clearFilters = () => {
    setQuery('');
    setCategory('all');
    setDifficulty('all');
  };

  return (
    <div className="min-h-screen bg-background">
      <TheoryHeader title={title} description={description} backUrl="/study" />

      <div className="space-y-5 p-4">
        <section className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-md border border-border bg-card p-3">
            <p className="text-xs text-muted-foreground">{t('study.overview.studySets', 'Study sets')}</p>
            <p className="mt-1 text-xl font-semibold">{typeStudies.length}</p>
          </div>
          <div className="rounded-md border border-border bg-card p-3">
            <p className="text-xs text-muted-foreground">{itemLabel}</p>
            <p className="mt-1 text-xl font-semibold">{itemCount}</p>
          </div>
          <div className="rounded-md border border-border bg-card p-3">
            <p className="text-xs text-muted-foreground">{t('study.filters.categories', 'Categories')}</p>
            <p className="mt-1 text-xl font-semibold">{categoryOptions.length}</p>
          </div>
        </section>

        <section className="space-y-3">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={t('study.filters.searchPlaceholder', 'Search study sets')}
              className="pl-9"
            />
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger>
                <SelectValue placeholder={t('study.filters.allCategories', 'All categories')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{t('study.filters.allCategories', 'All categories')}</SelectItem>
                {categoryOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={difficulty} onValueChange={setDifficulty}>
              <SelectTrigger>
                <SelectValue placeholder={t('study.filters.allDifficulties', 'All levels')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{t('study.filters.allDifficulties', 'All levels')}</SelectItem>
                <SelectItem value="beginner">{t('study.difficulty.beginner', 'Beginner')}</SelectItem>
                <SelectItem value="intermediate">{t('study.difficulty.intermediate', 'Intermediate')}</SelectItem>
                <SelectItem value="advanced">{t('study.difficulty.advanced', 'Advanced')}</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center justify-between gap-3 text-sm text-muted-foreground">
            <span>
              {t('study.filters.resultCount', {
                count: filteredStudies.length,
                total: typeStudies.length,
                defaultValue: `${filteredStudies.length} of ${typeStudies.length}`,
              })}
            </span>
            {hasActiveFilters && (
              <Button variant="ghost" size="sm" onClick={clearFilters}>
                {t('study.filters.clearFilters', 'Clear filters')}
              </Button>
            )}
          </div>
        </section>

        {filteredStudies.length > 0 ? (
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {filteredStudies.map((study) => (
              <StudyCard key={study.id} study={study} />
            ))}
          </div>
        ) : (
          <div className="rounded-md border border-dashed border-border p-8 text-center">
            <p className="text-muted-foreground">{hasActiveFilters ? t('study.filters.noResults', 'No study sets match your filters.') : emptyMessage}</p>
            {hasActiveFilters && (
              <Button variant="outline" className="mt-4" onClick={clearFilters}>
                {t('study.filters.clearFilters', 'Clear filters')}
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default StudyCollectionPage;
