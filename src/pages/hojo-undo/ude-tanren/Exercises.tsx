import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Users, Zap, RotateCcw, Clock } from 'lucide-react';

const exercises = [
  {
    key: 'swinging-arm-drill',
    title: 'Swinging Arm Drill',
    description: 'Basis oefening voor arm conditionering met ontspannen zwaaibewegingen',
    icon: <Target className="h-7 w-7 text-blue-500" />,
    path: '/hojo-undo/ude-tanren/exercises/swinging-arm-drill',
    difficulty: 'Beginner',
    duration: '5-10 minuten'
  },
  {
    key: 'stepping-blocking-drill',
    title: 'Stepping & Blocking Drill',
    description: 'Dynamische oefening met stappen vooruit en achteruit, blokken en slagen',
    icon: <Users className="h-7 w-7 text-blue-500" />,
    path: '/hojo-undo/ude-tanren/exercises/stepping-blocking-drill',
    difficulty: 'Beginner',
    duration: '10-15 minuten'
  },
  {
    key: 'ippon-uke-barai',
    title: 'Ippon Uke Barai',
    description: 'One-step blocking practice met jodan, chudan en gedan blokken',
    icon: <Zap className="h-7 w-7 text-purple-500" />,
    path: '/hojo-undo/ude-tanren/exercises/ippon-uke-barai',
    difficulty: 'Gevorderd',
    duration: '10-15 minuten'
  },
  {
    key: 'sandan-uke-barai',
    title: 'Sandan Uke Barai',
    description: 'Three-step blocking practice met opeenvolgende technieken',
    icon: <Zap className="h-7 w-7 text-purple-500" />,
    path: '/hojo-undo/ude-tanren/exercises/sandan-uke-barai',
    difficulty: 'Gevorderd',
    duration: '15-20 minuten'
  },
  {
    key: 'wrist-rotation',
    title: 'Wrist Rotation',
    description: 'Pols rotatie oefening voor verbinding en kracht ontwikkeling',
    icon: <RotateCcw className="h-7 w-7 text-blue-500" />,
    path: '/hojo-undo/ude-tanren/exercises/wrist-rotation',
    difficulty: 'Beginner',
    duration: '5-10 minuten'
  }
];

const UdeTanrenExercises = () => (
  <div className="min-h-screen bg-white">
    <div className="p-4">
      <div className="max-w-4xl mx-auto">
        <Link to="/hojo-undo" className="inline-flex items-center mb-4 text-sm text-blue-600 hover:underline">
          <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
          Terug naar Hojo Undo
        </Link>
        <h1 className="text-2xl font-bold mb-6">Ude Tanren - Oefeningen</h1>
        <div className="grid gap-4">
          {exercises.map((exercise) => (
            <Link
              key={exercise.key}
              to={exercise.path}
              className="block"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="flex items-center gap-4 p-6">
                  {exercise.icon}
                  <div>
                    <h4 className="font-semibold text-lg mb-1">{exercise.title}</h4>
                    <p className="text-sm text-muted-foreground mb-1">{exercise.description}</p>
                    <div className="flex gap-4 text-xs text-muted-foreground">
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded">{exercise.difficulty}</span>
                      <span><Clock className="inline h-4 w-4 mr-1" />{exercise.duration}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default UdeTanrenExercises; 