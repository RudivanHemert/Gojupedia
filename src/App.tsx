import React, { useState, useEffect, ReactNode } from 'react';
import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { I18nextProvider, useTranslation } from 'react-i18next';
import { LanguageProvider } from '@/contexts/LanguageContext';
import i18n from '@/i18n';
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import TheoryPage from "./pages/TheoryPage";
import TerminologyPage from "./pages/TerminologyPage";
import HistoryPage from "./pages/HistoryPage";
import VitalPointsPage from "./pages/VitalPointsPage";
import PracticePage from "./pages/PracticePage";
import TechniquesPage from "./pages/TechniquesPage";
import TechniqueDetailPage from "./pages/TechniqueDetailPage";
import KataPage from "./pages/KataPage";
import KataDetailPage from "./pages/KataDetailPage";
import KataTheoryPage from "./pages/KataTheoryPage";
import BunkaiPage from "./pages/BunkaiPage";
import BunkaiDetailPage from "./pages/BunkaiDetailPage";
import HojoUndoPage from "./pages/HojoUndoPage";
import NewazaPage from "./pages/NewazaPage";
import KumitePage from "./pages/KumitePage";
import StudyPage from "./pages/StudyPage";
import StudyDetailPage from "./pages/StudyDetailPage";
import GradingsPage from "./pages/GradingsPage";
import SettingsPage from "./pages/SettingsPage";
import SearchPage from "./pages/SearchPage";
import SidebarLayout from '@/components/layout/SidebarLayout';
import SubNavigation from '@/components/layout/SubNavigation';
import HojoUndoSectionPage from './pages/HojoUndoSectionPage';
import PhilosophyPage from './pages/PhilosophyPage';

// Re-add imports for the general Hojo Undo pages
import GeneralIntro from './pages/hojo-undo/GeneralIntro';
import StrengthExercises from './pages/hojo-undo/StrengthExercises';
import HardeningExercises from './pages/hojo-undo/HardeningExercises';

// Import Newaza sub-pages
import NewazaIntroduction from './pages/newaza/Introduction';
import NewazaTrainingElements from './pages/newaza/TrainingElements';
import NewazaGroundPositions from './pages/newaza/GroundPositions';
import NewazaKakie from './pages/newaza/Kakie';
import NewazaTechniques from './pages/newaza/Techniques';
import NewazaDrills from './pages/newaza/Drills';

// Import the generic markdown page component
import MarkdownContentPage from './pages/MarkdownContentPage';

// Import the new list pages
import QuizListPage from './pages/study/QuizListPage';
import FlashcardListPage from './pages/study/FlashcardListPage';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes (replaces cacheTime)
      refetchOnWindowFocus: false,
      retry: 1
    }
  }
});

interface ErrorBoundaryProps {
  children: ReactNode;
}

const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const errorHandler = (error: ErrorEvent) => {
      console.error('Error caught by boundary:', error.error, error.message);
      setHasError(true);
    };

    window.addEventListener('error', errorHandler);
    window.addEventListener('unhandledrejection', event => {
      console.error('Unhandled rejection caught by boundary:', event.reason);
      setHasError(true);
    });

    return () => {
      window.removeEventListener('error', errorHandler);
      window.removeEventListener('unhandledrejection', event => {
        console.error('Unhandled rejection caught by boundary:', event.reason);
        setHasError(true);
      });
    };
  }, []);

  if (hasError) {
    return <div className="p-4 text-center">Something went wrong. Please refresh the page.</div>;
  }

  return <>{children}</>;
};

const AppContent = React.memo(() => {
  const location = useLocation();
  
  return (
    <ErrorBoundary>
      <SidebarLayout>
        <div className="p-6">
          <SubNavigation currentPath={location.pathname} />
          <div className="mt-4">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/theory" element={<TheoryPage />} />
              <Route path="/terminology" element={<TerminologyPage />} />
              <Route path="/history" element={<HistoryPage />} />
              <Route path="/philosophy" element={<PhilosophyPage />} />
              <Route path="/vital-points" element={<VitalPointsPage />} />
              <Route path="/theory/kata" element={<KataTheoryPage />} />
              <Route path="/practice" element={<PracticePage />} />
              <Route path="/techniques" element={<TechniquesPage />} />
              <Route path="/techniques/:id" element={<TechniqueDetailPage />} />
              <Route path="/kata" element={<KataPage />} />
              <Route path="/kata/:id" element={<KataDetailPage />} />
              <Route path="/bunkai" element={<BunkaiPage />} />
              <Route path="/bunkai/:id" element={<BunkaiDetailPage />} />
              <Route path="/hojo-undo" element={<HojoUndoPage />} />
              <Route path="/hojo-undo/general/intro" element={<GeneralIntro />} />
              <Route path="/hojo-undo/general/strength" element={<StrengthExercises />} />
              <Route path="/hojo-undo/general/hardening" element={<HardeningExercises />} />
              <Route path="/hojo-undo/:equipmentId/:sectionKey" element={<HojoUndoSectionPage />} />
              <Route path="/newaza" element={<NewazaPage />} />
              <Route path="/newaza/introduction" element={<NewazaIntroduction />} />
              <Route path="/newaza/training-elements" element={<NewazaTrainingElements />} />
              <Route path="/newaza/ground-positions" element={<NewazaGroundPositions />} />
              <Route path="/newaza/kakie" element={<NewazaKakie />} />
              <Route path="/newaza/techniques" element={<NewazaTechniques />} />
              <Route path="/newaza/drills" element={<NewazaDrills />} />
              <Route path="/kumite" element={<KumitePage />} />
              <Route path="/study" element={<StudyPage />} />
              <Route path="/study/quizzes" element={<QuizListPage />} />
              <Route path="/study/flashcards" element={<FlashcardListPage />} />
              <Route path="/study/:id" element={<StudyDetailPage />} />
              <Route path="/gradings" element={<GradingsPage />} />
              <Route path="/settings" element={<SettingsPage />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </SidebarLayout>
    </ErrorBoundary>
  );
});

const Providers = React.memo(({ children }: { children: React.ReactNode }) => {
  const providers = React.useMemo(() => (
    <QueryClientProvider client={queryClient}>
      <I18nextProvider i18n={i18n}>
        <LanguageProvider>
          <TooltipProvider>
            <ThemeProvider>
              {children}
            </ThemeProvider>
          </TooltipProvider>
        </LanguageProvider>
      </I18nextProvider>
    </QueryClientProvider>
  ), [children]);

  return providers;
});

const App = () => (
  <BrowserRouter>
    <Providers>
      <Toaster />
      <Sonner />
      <AppContent />
    </Providers>
  </BrowserRouter>
);

export default App;