import React from 'react';
import MobileLayout from '@/components/layout/MobileLayout';
import { Book, Scroll, Target, ChevronDown } from 'lucide-react';
import TheoryHeader from '@/components/theory/TheoryHeader';
import { TheorySectionList } from '@/components/theory/TheorySection';

const TheoryPage = () => {
  const sections = [
    {
      id: 'terminology',
      name: 'Terminology',
      description: 'Japanese terminology and vocabulary used in Goju Ryu',
      icon: <Book className="h-5 w-5 text-karate" />,
      path: '/terminology',
    },
    {
      id: 'history',
      name: 'History',
      description: 'The origins and evolution of Goju Ryu Karate',
      icon: <Scroll className="h-5 w-5 text-karate" />,
      path: '/history',
    },
    {
      id: 'kata',
      name: 'Kata',
      description: 'Principles and theory behind traditional forms',
      icon: <ChevronDown className="h-5 w-5 text-karate" />,
      path: '/theory/kata',
    },
    {
      id: 'vital-points',
      name: 'Vital Points',
      description: 'Study of pressure points and vulnerable areas',
      icon: <Target className="h-5 w-5 text-karate" />,
      path: '/vital-points',
    }
  ];

  return (
    <MobileLayout hideHeader={true}>
      <TheoryHeader 
        title="Theory"
        description="Principles and knowledge of Goju Ryu"
        imageUrl="https://images.unsplash.com/photo-1518459031867-a89b944bffe4?q=80&w=2041&auto=format&fit=crop"
      />

      <div className="p-4">
        <TheorySectionList sections={sections} />
      </div>
    </MobileLayout>
  );
};

export default TheoryPage;
