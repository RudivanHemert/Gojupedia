import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Study } from '@/types'; // Assuming Study type is defined here
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Brain, BookOpen, BookText, ListCheck } from 'lucide-react';
import { useTranslation } from 'react-i18next';

// Helper function for icons (can be kept here or moved to a utils file)
const getStudyTypeIcon = (type: string) => {
  switch (type) {
    case 'quiz':
      return <Brain className="h-4 w-4" />;
    case 'flashcard':
      return <BookText className="h-4 w-4" />;
    case 'matching':
      return <ListCheck className="h-4 w-4" />;
    default:
      return <BookOpen className="h-4 w-4" />;
  }
};

interface StudyCardProps {
  study: Study;
}

const StudyCard: React.FC<StudyCardProps> = ({ study }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  // Helper function to get translated title and description
  const getTranslatedContent = (study: Study) => {
    const isDutch = t('common.language') === 'nl';
    
    // For dynamically generated studies, create translated content
    if (study.id.includes('-quiz') || study.id.includes('-flashcard')) {
      const category = study.id.split('-')[0];
      const type = study.id.includes('-quiz') ? 'quiz' : 'flashcard';
      
      // Map category slugs to readable names
      const categoryMap: Record<string, string> = {
        'stances': isDutch ? 'Houdingen' : 'Stances',
        'kicks': isDutch ? 'Trappen' : 'Kicks',
        'punches': isDutch ? 'Stoten' : 'Punches',
        'blocks': isDutch ? 'Blokken' : 'Blocks',
        'strikes': isDutch ? 'Slagen' : 'Strikes',
        'throws': isDutch ? 'Worpen' : 'Throws',
        'joint-locks': isDutch ? 'Gewrichtsloten' : 'Joint Locks',
        'chokes': isDutch ? 'Wurgingen' : 'Chokes',
        'pressure-points': isDutch ? 'Drukpunten' : 'Pressure Points',
        'footwork': isDutch ? 'Voetwerk' : 'Footwork',
        'movement': isDutch ? 'Beweging' : 'Movement',
        'balance': isDutch ? 'Balans' : 'Balance',
        'breathing': isDutch ? 'Ademhaling' : 'Breathing',
        'meditation': isDutch ? 'Meditatie' : 'Meditation',
        'philosophy': isDutch ? 'Filosofie' : 'Philosophy',
        'history': isDutch ? 'Geschiedenis' : 'History',
        'terminology': isDutch ? 'Terminologie' : 'Terminology',
        'etiquette': isDutch ? 'Etiquette' : 'Etiquette',
        'traditions': isDutch ? 'Tradities' : 'Traditions'
      };
      
      const categoryName = categoryMap[category] || category;
      
      if (type === 'quiz') {
        return {
          title: isDutch ? `${categoryName} Quiz` : `${categoryName} Quiz`,
          description: isDutch ? `Test je kennis van ${categoryName.toLowerCase()}.` : `Test your knowledge of ${categoryName.toLowerCase()}.`
        };
      } else {
        return {
          title: isDutch ? `${categoryName} Flashcards` : `${categoryName} Flashcards`,
          description: isDutch ? `Bekijk ${categoryName.toLowerCase()} met flashcards.` : `Review ${categoryName.toLowerCase()} using flashcards.`
        };
      }
    }
    
    // For manual studies, return original content
    return {
      title: study.title,
      description: study.description
    };
  };

  const translatedContent = getTranslatedContent(study);

  return (
    <Card key={study.id} className="border border-stone-200 hover:border-karate transition-all">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <Badge variant="outline" className="mb-2">
            {study.difficulty}
          </Badge>
          <Badge variant="secondary" className="flex items-center gap-1 mb-2">
            {getStudyTypeIcon(study.type)}
            {study.type}
          </Badge>
        </div>
        <CardTitle className="text-xl font-serif">{translatedContent.title}</CardTitle>
        <CardDescription className="text-stone-600">{translatedContent.description}</CardDescription>
      </CardHeader>
      {study.image && (
        <div className="px-6">
          <div className="aspect-video rounded-md overflow-hidden border border-stone-200">
            <img
              src={study.image}
              alt={translatedContent.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}
      <CardContent className="pt-4 pb-0">
        <div className="text-sm text-stone-600">
          {/* Dynamically generated studies might have empty questions array initially */}
          {/* Adjusted label for clarity */}
          {study.questions?.length > 0 && (
              <><strong>{study.questions.length}</strong> {study.type === 'quiz' ? t('study.questions') : t('study.cards')} • </> 
          )}
          {t('study.category')}: <Badge variant="outline" className="text-xs">{study.category}</Badge>
        </div>
      </CardContent>
      <CardFooter className="pt-4">
        <Button className="w-full" onClick={() => navigate(`/study/${study.id}`)}>
          {t('study.start')} {study.type === 'quiz' ? t('study.quiz') : t('study.flashcards')}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default StudyCard; 