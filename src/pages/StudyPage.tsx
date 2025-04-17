import React from 'react';
import MobileLayout from '@/components/layout/MobileLayout';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, BookText, ChevronRight } from 'lucide-react';

const StudyPage = () => {
  return (
    <MobileLayout hideHeader={true}>
      <div className="bg-stone-100 border-b border-stone-200">
        <div className="px-4 py-6">
          <h1 className="text-2xl font-serif font-semibold text-stone-800 text-center mb-2">Study Section</h1>
          <p className="text-stone-600 text-center text-sm">
            Choose a study method to enhance your Goju Ryu knowledge.
          </p>
        </div>
      </div>

      {/* Navigation Cards */}
      <div className="px-4 py-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Quiz Navigation Card */}
        <Link to="/study/quizzes" className="block hover:no-underline">
          <Card className="hover:shadow-md hover:border-karate transition-all h-full flex flex-col">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                 <Brain className="h-6 w-6 text-karate" />
                 <span>Quizzes</span>
              </CardTitle>
              <CardDescription>Test your knowledge with multiple-choice questions.</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow flex items-end justify-end">
                <ChevronRight className="h-5 w-5 text-muted-foreground"/>
            </CardContent>
          </Card>
        </Link>

        {/* Flashcard Navigation Card */}
        <Link to="/study/flashcards" className="block hover:no-underline">
           <Card className="hover:shadow-md hover:border-karate transition-all h-full flex flex-col">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                 <BookText className="h-6 w-6 text-blue-600" />
                 <span>Flashcards</span>
              </CardTitle>
              <CardDescription>Review terms and concepts using interactive flashcards.</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow flex items-end justify-end">
                <ChevronRight className="h-5 w-5 text-muted-foreground"/>
            </CardContent>
          </Card>
        </Link>

        {/* Placeholder for other study types if needed */}
        {/* 
        <Link to="/study/matching" className="block hover:no-underline">
          <Card>...</Card>
        </Link> 
        */}
      </div>
    </MobileLayout>
  );
};

export default StudyPage;
