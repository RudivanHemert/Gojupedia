import React, { useState } from 'react';
import MobileLayout from '@/components/layout/MobileLayout';
import { studies } from '@/data';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Brain, BookOpen, BookText, ListCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const StudyPage = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState<string | null>(null);

  const filteredStudies = filter 
    ? studies.filter(study => study.category === filter || study.difficulty === filter || study.type === filter)
    : studies;

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

  return (
    <MobileLayout hideHeader={true}>
      <div className="bg-stone-100 border-b border-stone-200">
        <div className="px-4 py-6">
          <h1 className="text-2xl font-serif font-semibold text-stone-800 text-center mb-2">Study Section</h1>
          <p className="text-stone-600 text-center text-sm">
            Interactive lessons and tests to enhance your Goju Ryu knowledge
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="px-4 py-3 bg-stone-50 border-b border-stone-200 overflow-x-auto">
        <div className="flex gap-2 pb-1">
          <Badge 
            variant={filter === null ? "default" : "outline"} 
            className="cursor-pointer"
            onClick={() => setFilter(null)}
          >
            All
          </Badge>
          <Badge 
            variant={filter === "techniques" ? "default" : "outline"} 
            className="cursor-pointer"
            onClick={() => setFilter("techniques")}
          >
            Techniques
          </Badge>
          <Badge 
            variant={filter === "kata" ? "default" : "outline"} 
            className="cursor-pointer"
            onClick={() => setFilter("kata")}
          >
            Kata
          </Badge>
          <Badge 
            variant={filter === "history" ? "default" : "outline"} 
            className="cursor-pointer"
            onClick={() => setFilter("history")}
          >
            History
          </Badge>
          <Badge 
            variant={filter === "quiz" ? "default" : "outline"} 
            className="cursor-pointer"
            onClick={() => setFilter("quiz")}
          >
            Quiz
          </Badge>
          <Badge 
            variant={filter === "flashcard" ? "default" : "outline"} 
            className="cursor-pointer"
            onClick={() => setFilter("flashcard")}
          >
            Flashcards
          </Badge>
        </div>
      </div>

      {/* Study Cards */}
      <div className="px-4 py-6 space-y-4">
        {filteredStudies.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-stone-500">No studies match your filter. Try another category.</p>
            <Button variant="outline" className="mt-2" onClick={() => setFilter(null)}>
              Clear Filters
            </Button>
          </div>
        ) : (
          filteredStudies.map(study => (
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
                  <strong>{study.questions.length}</strong> questions • Category: <Badge variant="outline" className="text-xs">{study.category}</Badge>
                </div>
              </CardContent>
              <CardFooter className="pt-4">
                <Button className="w-full" onClick={() => navigate(`/study/${study.id}`)}>
                  Start Study
                </Button>
              </CardFooter>
            </Card>
          ))
        )}
      </div>
    </MobileLayout>
  );
};

export default StudyPage;
