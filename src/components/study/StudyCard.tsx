import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Study } from '@/types'; // Assuming Study type is defined here
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Brain, BookOpen, BookText, ListCheck } from 'lucide-react';

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
        <CardTitle className="text-xl font-serif">{study.title}</CardTitle>
        <CardDescription className="text-stone-600">{study.description}</CardDescription>
      </CardHeader>
      {study.image && (
        <div className="px-6">
          <div className="aspect-video rounded-md overflow-hidden border border-stone-200">
            <img
              src={study.image}
              alt={study.title}
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
              <><strong>{study.questions.length}</strong> {study.type === 'quiz' ? 'questions' : 'cards'} • </> 
          )}
          Category: <Badge variant="outline" className="text-xs">{study.category}</Badge>
        </div>
      </CardContent>
      <CardFooter className="pt-4">
        <Button className="w-full" onClick={() => navigate(`/study/${study.id}`)}>
          Start {study.type === 'quiz' ? 'Quiz' : 'Flashcards'}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default StudyCard; 