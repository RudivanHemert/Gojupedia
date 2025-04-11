import React, { useState, useEffect } from 'react';
import InteractiveQuiz, { QuizQuestion, QuestionType, QuizOption } from './InteractiveQuiz';
import { techniquesData, TechniqueData } from '@/data/techniquesData'; // Adjust path as needed

// Utility function to shuffle an array (Fisher-Yates algorithm)
const shuffle = <T,>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

// Updated category type to match TechniqueData
type TechniqueCategory = TechniqueData['category'];

// Updated function to filter by category if provided
const generateQuizQuestions = (
  data: TechniqueData[], 
  numQuestions: number = 10, 
  category?: TechniqueCategory
): QuizQuestion[] => {
  // Filter data by category if provided
  const filteredData = category ? data.filter(item => item.category === category) : data;
  
  // Prevent errors if filter results in empty array
  if (filteredData.length === 0) {
      console.warn(`No techniques found for category: ${category}`);
      return [];
  }

  const shuffledData = shuffle(filteredData);
  // Ensure we don't try to select more questions than available in the category
  const actualNumQuestions = Math.min(numQuestions, shuffledData.length);
  const selectedData = shuffledData.slice(0, actualNumQuestions);
  const questions: QuizQuestion[] = [];

  // Use all data for generating incorrect options to ensure variety
  const allDataForOptions = data;

  selectedData.forEach((item) => {
    const questionType: QuestionType = Math.random() < 0.5 ? 'multiple-choice' : 'text-input';

    if (questionType === 'multiple-choice') {
      const questionText = `What is the English translation for "${item.japanese}"${item.kanji ? ` (${item.kanji})` : ''}?`;
      const correctAnswer = item.english;

      // Generate incorrect options from the *entire* dataset, excluding the correct answer
      let incorrectOptions = shuffle(allDataForOptions.filter(d => d.id !== item.id && d.english !== correctAnswer))
        .slice(0, 3) // Attempt to get 3 unique wrong answers
        .map(d => ({ id: d.id, text: d.english, isCorrect: false }));

      // Fill remaining incorrect options if necessary (ensuring variety)
      while (incorrectOptions.length < 3 && allDataForOptions.length > incorrectOptions.length + 1) {
        const potentialOption = shuffle(allDataForOptions.filter(d => 
          d.id !== item.id && 
          d.english !== correctAnswer && 
          !incorrectOptions.some(opt => opt.id === d.id)
        ))[0];
        if (potentialOption) {
          incorrectOptions.push({ id: potentialOption.id, text: potentialOption.english, isCorrect: false });
        } else {
          break; // Avoid infinite loop if options exhausted
        }
      }
      
      // If still not enough options (very small dataset), duplicate is acceptable
      if (incorrectOptions.length < 3) {
          // Find a fallback option, ensuring it's not the current item
          const fallbackOptionData = shuffle(allDataForOptions.filter(d => d.id !== item.id))[0] || 
                                   { id: 'fallback', japanese:'Fallback', english: 'Other Term', category: 'General' }; // Basic fallback data
          
          // Ensure the fallback data is transformed into a QuizOption structure
          const fallbackQuizOption: QuizOption = {
              id: fallbackOptionData.id, 
              text: fallbackOptionData.english, 
              isCorrect: false 
          };

          while (incorrectOptions.length < 3) {
              // Add copies of the formatted fallback option with unique IDs
              incorrectOptions.push({
                  ...fallbackQuizOption, 
                  id: `${fallbackQuizOption.id}-fallback-${incorrectOptions.length}` 
              });
          }
      }

      const options = shuffle([
        { id: item.id, text: correctAnswer, isCorrect: true },
        ...incorrectOptions,
      ]);

      questions.push({
        id: `${item.id}-mc-jap-eng`,
        type: 'multiple-choice',
        question: questionText,
        options: options,
        explanation: `"${item.japanese}" means "${item.english}".`,
        points: 1,
      });
    } else {
      // English -> Japanese Text Input
      const questionText = `What is the Japanese term (Romaji) for "${item.english}"?`;
      questions.push({
        id: `${item.id}-txt-eng-jap`,
        type: 'text-input',
        question: questionText,
        correctAnswer: item.japanese,
        explanation: `The Japanese term for "${item.english}" is "${item.japanese}"${item.kanji ? ` (${item.kanji})` : ''}.`,
        points: 1,
      });
    }
  });

  return shuffle(questions);
};

// Add category prop to the component
interface TechniqueQuizProps {
  category?: TechniqueCategory;
  title?: string; // Allow overriding the default title
}

const TechniqueQuiz: React.FC<TechniqueQuizProps> = ({ category, title }) => {
  const [quizQuestions, setQuizQuestions] = useState<QuizQuestion[]>([]);

  useEffect(() => {
    // Pass category to generator
    setQuizQuestions(generateQuizQuestions(techniquesData, 10, category)); 
  }, [category]); // Re-generate if category changes

  const handleQuizComplete = (score: number, totalPossible: number) => {
    console.log(`Quiz Complete! [${category || 'All'}] Score: ${score}/${totalPossible}`);
  };

  if (quizQuestions.length === 0 && category) {
      // Specific message if category is empty
      return <div>No quiz questions found for the category: {category}.</div>;
  } else if (quizQuestions.length === 0) {
    return <div>Loading quiz...</div>;
  }

  // Use dynamic title based on category or prop
  const quizTitle = title || (category ? `${category} Quiz` : 'Technique Quiz');

  return (
    <InteractiveQuiz
      title={quizTitle}
      questions={quizQuestions}
      onComplete={handleQuizComplete}
      showExplanations={true}
      shuffleQuestions={false} // Questions are already shuffled by generator
      shuffleOptions={true}
    />
  );
};

export default TechniqueQuiz; 