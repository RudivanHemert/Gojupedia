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
import KumiteIntroduction from "./pages/kumite/Introduction";
import KumiteTechniques from "./pages/kumite/Techniques";
import KumitePrinciples from "./pages/kumite/Principles";
import KumiteTraining from "./pages/kumite/Training";
import KumiteCompetition from "./pages/kumite/Competition";
import StudyPage from "./pages/StudyPage";
import StudyDetailPage from "./pages/StudyDetailPage";
import GradingsPage from "./pages/GradingsPage";
import SettingsPage from "./pages/SettingsPage";
import AboutPage from "./pages/AboutPage";
import SearchPage from "./pages/SearchPage";
import JunbiUndoPage from "./pages/JunbiUndoPage";
import SidebarLayout from '@/components/layout/SidebarLayout';
import HojoUndoSectionPage from './pages/HojoUndoSectionPage';
import PhilosophyPage from './pages/PhilosophyPage';
import DojoKun from './pages/philosophy/DojoKun';
import GojuRyu from './pages/philosophy/GojuRyu';
import KarateDo from './pages/philosophy/KarateDo';
import MindBody from './pages/philosophy/MindBody';
import Respect from './pages/philosophy/Respect';
import OriginsSection from '@/components/history/OriginsSection';
import KanryoHigaonnaSection from '@/components/history/KanryoHigaonnaSection';
import ChojunMiyagiSection from '@/components/history/ChojunMiyagiSection';
import AnichiMiyagiSection from '@/components/history/AnichiMiyagiSection';
import MorioHigaonnaSection from '@/components/history/MorioHigaonnaSection';
import TetsujiNakamuraSection from '@/components/history/TetsujiNakamuraSection';
import TimelineSection from '@/components/history/TimelineSection';

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

// Import Ude Tanren components
import SwingingArmDrill from './pages/hojo-undo/ude-tanren/exercises/SwingingArmDrill';
import SteppingBlockingDrill from './pages/hojo-undo/ude-tanren/exercises/SteppingBlockingDrill';
import IpponUkeBarai from './pages/hojo-undo/ude-tanren/exercises/IpponUkeBarai';
import SandanUkeBarai from './pages/hojo-undo/ude-tanren/exercises/SandanUkeBarai';
import WristRotation from './pages/hojo-undo/ude-tanren/exercises/WristRotation';

// Import terminology sub-pages
import Stances from './pages/terminology/Stances';
import Kicks from './pages/terminology/Kicks';
import Punches from './pages/terminology/Punches';
import Blocks from './pages/terminology/Blocks';
import Strikes from './pages/terminology/Strikes';
import Warmup from './pages/terminology/Warmup';
import GeneralTerminology from './pages/terminology/GeneralTerminology';
import Numbers from './pages/terminology/Numbers';
import TournamentTerminology from './pages/terminology/TournamentTerminology';
import EquipmentAndWeapons from './pages/terminology/EquipmentAndWeapons';
import KarateGojuRyuTerminology from './pages/terminology/KarateGojuRyuTerminology';
import KarateTitles from './pages/terminology/KarateTitles';
import PhrasesAndEtiquette from './pages/terminology/PhrasesAndEtiquette';
import KataTerminology from './pages/terminology/KataTerminology';

// Import new Kumite sub-pages
import WhatIsKumite from './pages/kumite/introduction/WhatIsKumite';
import TypesOfKumite from './pages/kumite/introduction/TypesOfKumite';
import SafetyAndRules from './pages/kumite/introduction/SafetyAndRules';
import AttackTechniques from './pages/kumite/techniques/AttackTechniques';
import DefenseTechniques from './pages/kumite/techniques/DefenseTechniques';
import ThrowingTechniques from './pages/kumite/techniques/ThrowingTechniques';

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
          <div className="mt-4">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/theory" element={<TheoryPage />} />
              <Route path="/terminology" element={<TerminologyPage />} />
              <Route path="/terminology/stances" element={<Stances />} />
              <Route path="/terminology/stances/:stanceId" element={<Stances />} />
              <Route path="/terminology/kicks" element={<Kicks />} />
              <Route path="/terminology/kicks/:kickId" element={<Kicks />} />
              <Route path="/terminology/punches" element={<Punches />} />
              <Route path="/terminology/punches/:punchId" element={<Punches />} />
              <Route path="/terminology/blocks" element={<Blocks />} />
              <Route path="/terminology/blocks/:blockId" element={<Blocks />} />
              <Route path="/terminology/strikes" element={<Strikes />} />
              <Route path="/terminology/strikes/:strikeId" element={<Strikes />} />
              <Route path="/terminology/warmup" element={<Warmup />} />
              <Route path="/terminology/warmup/:warmupId" element={<Warmup />} />
              <Route path="/terminology/general-terms" element={<GeneralTerminology />} />
              <Route path="/terminology/numbers" element={<Numbers />} />
              <Route path="/terminology/tournament-terms" element={<TournamentTerminology />} />
              <Route path="/terminology/equipment-weapons" element={<EquipmentAndWeapons />} />
              <Route path="/terminology/karate-goju-ryu" element={<KarateGojuRyuTerminology />} />
              <Route path="/terminology/karate-titles" element={<KarateTitles />} />
              <Route path="/terminology/phrases-etiquette" element={<PhrasesAndEtiquette />} />
              <Route path="/terminology/kata-terms" element={<KataTerminology />} />
              <Route path="/history" element={<HistoryPage />} />
              <Route path="/history/origins" element={<OriginsSection />} />
              <Route path="/history/kanryo-higaonna" element={<KanryoHigaonnaSection />} />
              <Route path="/history/chojun-miyagi" element={<ChojunMiyagiSection />} />
              <Route path="/history/anichi-miyagi" element={<AnichiMiyagiSection />} />
              <Route path="/history/morio-higaonna" element={<MorioHigaonnaSection />} />
              <Route path="/history/tetsuji-nakamura" element={<TetsujiNakamuraSection />} />
              <Route path="/history/timeline" element={<TimelineSection />} />
              <Route path="/philosophy" element={<PhilosophyPage />} />
              <Route path="/philosophy/dojo-kun" element={<DojoKun />} />
              <Route path="/philosophy/goju-ryu" element={<GojuRyu />} />
              <Route path="/philosophy/karate-do" element={<KarateDo />} />
              <Route path="/philosophy/mind-body" element={<MindBody />} />
              <Route path="/philosophy/respect" element={<Respect />} />
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
              <Route path="/hojo-undo/ude-tanren/exercises/swinging-arm-drill" element={<SwingingArmDrill />} />
              <Route path="/hojo-undo/ude-tanren/exercises/stepping-blocking-drill" element={<SteppingBlockingDrill />} />
              <Route path="/hojo-undo/ude-tanren/exercises/ippon-uke-barai" element={<IpponUkeBarai />} />
              <Route path="/hojo-undo/ude-tanren/exercises/sandan-uke-barai" element={<SandanUkeBarai />} />
              <Route path="/hojo-undo/ude-tanren/exercises/wrist-rotation" element={<WristRotation />} />
              <Route path="/hojo-undo/:equipmentId/:sectionKey" element={<HojoUndoSectionPage />} />
              <Route path="/newaza" element={<NewazaPage />} />
              <Route path="/newaza/introduction" element={<NewazaIntroduction />} />
              <Route path="/newaza/training-elements" element={<NewazaTrainingElements />} />
              <Route path="/newaza/ground-positions" element={<NewazaGroundPositions />} />
              <Route path="/newaza/kakie" element={<NewazaKakie />} />
              <Route path="/newaza/techniques" element={<NewazaTechniques />} />
              <Route path="/newaza/drills" element={<NewazaDrills />} />
              <Route path="/kumite" element={<KumitePage />} />
              <Route path="/kumite/introduction" element={<KumiteIntroduction />} />
              <Route path="/kumite/techniques" element={<KumiteTechniques />} />
              <Route path="/kumite/principles" element={<KumitePrinciples />} />
              <Route path="/kumite/training" element={<KumiteTraining />} />
              <Route path="/kumite/competition" element={<KumiteCompetition />} />
              <Route path="/kumite/introduction/what-is" element={<WhatIsKumite />} />
              <Route path="/kumite/introduction/types" element={<TypesOfKumite />} />
              <Route path="/kumite/introduction/safety" element={<SafetyAndRules />} />
              <Route path="/kumite/techniques/attack" element={<AttackTechniques />} />
              <Route path="/kumite/techniques/defense" element={<DefenseTechniques />} />
              <Route path="/kumite/techniques/throwing" element={<ThrowingTechniques />} />
              <Route path="/study" element={<StudyPage />} />
              <Route path="/study/quizzes" element={<QuizListPage />} />
              <Route path="/study/flashcards" element={<FlashcardListPage />} />
              <Route path="/study/:id" element={<StudyDetailPage />} />
              <Route path="/gradings" element={<GradingsPage />} />
              <Route path="/settings" element={<SettingsPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/junbi-undo" element={<JunbiUndoPage />} />
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