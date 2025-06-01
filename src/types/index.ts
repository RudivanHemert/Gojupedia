export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  image: string;
  slug: string;
}

export interface Technique {
  id: string;
  name: string;
  japaneseName: string;
  description: string;
  steps: string[];
  images: string[];
  video?: string;
  category: string;
  relatedTechniques: string[];
}

export interface BunkaiDetail {
  id: string;
  title: string;
  attack: string;
  defense: string;
  counterAttack: string;
  footwork: string;
  vitalPoints: string;
  notes: string;
  kata: string; // Should match a Kata id
}

export interface Kata {
  id: string;
  name?: string;
  japaneseName?: string;
  meaning?: string;
  description?: string;
  level: string;
  steps: string[];
  images: string[];
  video?: string;
  keyFeatures?: string[];
  movements?: string;
  duration?: string;
  origin?: string;
  videoUrl?: string;
  bunkai?: string | BunkaiDetail[];
  history?: string;
  culturalSignificance?: string;
  masters?: string[];
  shime?: string; // Added this field for Sanchin kata's shime demonstration
}

export interface HistoricalFigure {
  id: string;
  name: string;
  japaneseName?: string;
  born: string;
  died?: string;
  description: string;
  contributions: string[];
  image?: string;
}

export interface Article {
  id: string;
  title: string;
  content: string;
  category: string;
  image?: string;
  author: string;
  date: string;
}

export interface Principle {
  id: string;
  name: string;
  japaneseName?: string;
  description: string;
  explanation: string[];
}

export interface Study {
  id: string;
  title: string;
  description: string;
  type: 'quiz' | 'flashcard' | 'matching';
  category: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  questions: StudyQuestion[];
  image?: string;
}

export interface StudyQuestion {
  id: string;
  question: string;
  options?: string[];
  correctAnswer: string;
  explanation?: string;
  image?: string;
}
