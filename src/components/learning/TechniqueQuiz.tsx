import React, { useState, useEffect } from 'react';
import InteractiveQuiz, { QuizQuestion, QuestionType, QuizOption } from './InteractiveQuiz';
import { techniquesData, TechniqueData } from '@/data/techniquesData'; // Adjust path as needed
import { useTranslation } from 'react-i18next';

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
  category?: TechniqueCategory,
  language: string = 'en'
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
    // Force multiple-choice for all questions
    const questionType: QuestionType = 'multiple-choice'; 

    if (questionType === 'multiple-choice') {
      // Use Dutch translation if available, otherwise fall back to English
      const isDutch = language === 'nl';
      const correctAnswer = item.english; // For now, always use English as fallback
      
      const questionText = isDutch 
        ? `Wat is de Nederlandse vertaling voor "${item.japanese}"${item.kanji ? ` (${item.kanji})` : ''}?`
        : `What is the English translation for "${item.japanese}"${item.kanji ? ` (${item.kanji})` : ''}?`;
      
      const correctCategory = item.category;

      let incorrectOptions: QuizOption[] = [];

      // --- New Distractor Logic ---
      
      // 1. Try to get 2 distractors from the same category
      const sameCategoryDistractors = shuffle(
          allDataForOptions.filter(d => 
              d.category === correctCategory && 
              d.id !== item.id && 
              d.english !== correctAnswer
          )
      ).slice(0, 2);

      incorrectOptions.push(...sameCategoryDistractors.map(d => ({ 
        id: d.id, 
        text: d.english, 
        isCorrect: false 
      })));

      // 2. Try to get 1 distractor from other categories
      if (incorrectOptions.length < 3) { // Only if needed
          const otherCategoryDistractors = shuffle(
              allDataForOptions.filter(d => 
                  d.category !== correctCategory && // Different category
                  d.id !== item.id && 
                  d.english !== correctAnswer &&
                  !incorrectOptions.some(opt => opt.id === d.id) // Not already selected
              )
          ).slice(0, 3 - incorrectOptions.length); // Get remaining needed

          incorrectOptions.push(...otherCategoryDistractors.map(d => ({ 
            id: d.id, 
            text: d.english, 
            isCorrect: false 
          })));
      }

      // --- Fallback Logic (if still not enough options) ---

      // 3. If still needed, fill remaining from ANY category (including same, but excluding correct/already chosen)
      if (incorrectOptions.length < 3) {
          console.warn(`Needed fallback distractors for item '${item.id}' in category '${correctCategory}'.`);
          const additionalNeeded = 3 - incorrectOptions.length;
          const fallbackOptions = shuffle(
              allDataForOptions.filter(d => 
                  d.id !== item.id && 
                  d.english !== correctAnswer && 
                  !incorrectOptions.some(opt => opt.id === d.id)
              )
          ).slice(0, additionalNeeded);
          incorrectOptions.push(...fallbackOptions.map(d => ({ 
            id: d.id, 
            text: d.english, 
            isCorrect: false 
          })));
      }

      // 4. Final fallback with placeholders if absolutely necessary
      while (incorrectOptions.length < 3) {
           console.warn(`Using generic fallback distractors for item '${item.id}'. Dataset might be too small.`);
           const fallbackQuizOption: QuizOption = {
               id: `fallback-${item.id}-${incorrectOptions.length}`,
               text: isDutch ? `Andere Term ${incorrectOptions.length + 1}` : `Other Term ${incorrectOptions.length + 1}`, 
               isCorrect: false 
           };
           incorrectOptions.push(fallbackQuizOption);
      }
      // --- End of New Distractor Logic ---

      // Ensure we only have 3 incorrect options exactly
      incorrectOptions = incorrectOptions.slice(0, 3);

      const options = shuffle([
        { id: item.id, text: correctAnswer, isCorrect: true },
        ...incorrectOptions,
      ]);

      const explanation = isDutch
        ? `"${item.japanese}" betekent "${correctAnswer}".`
        : `"${item.japanese}" means "${correctAnswer}".`;

      questions.push({
        id: `${item.id}-mc-jap-${language}`,
        type: 'multiple-choice',
        question: questionText,
        options: options,
        explanation: explanation,
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
  const { t, i18n } = useTranslation();
  const [quizQuestions, setQuizQuestions] = useState<QuizQuestion[]>([]);

  useEffect(() => {
    // Pass category and language to generator
    setQuizQuestions(generateQuizQuestions(techniquesData, 10, category, i18n.language)); 
  }, [category, i18n.language]); // Re-generate if category or language changes

  const handleQuizComplete = (score: number, totalPossible: number) => {
    console.log(`Quiz Complete! [${category || 'All'}] Score: ${score}/${totalPossible}`);
  };

  if (quizQuestions.length === 0 && category) {
      // Specific message if category is empty
      return <div>{t('quiz.noQuestionsForCategory', 'No quiz questions found for the category:')} {category}.</div>;
  } else if (quizQuestions.length === 0) {
    return <div>{t('quiz.loading')}</div>;
  }

  // Use dynamic title based on category or prop
  const quizTitle = title || (category ? `${category} ${t('quiz.quiz')}` : t('quiz.techniqueQuiz', 'Technique Quiz'));

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