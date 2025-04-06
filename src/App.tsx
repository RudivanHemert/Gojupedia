import React from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { I18nextProvider } from 'react-i18next';
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
import KumitePage from "./pages/KumitePage";
import StudyPage from "./pages/StudyPage";
import StudyDetailPage from "./pages/StudyDetailPage";
import GradingsPage from "./pages/GradingsPage";
import SettingsPage from "./pages/SettingsPage";
import MobileLayout from '@/components/layout/MobileLayout';
import SubNavigation from '@/components/layout/SubNavigation';
import HojoUndoSectionPage from './pages/HojoUndoSectionPage';

// Re-add imports for the general Hojo Undo pages
import GeneralIntro from './pages/hojo-undo/GeneralIntro';
import StrengthExercises from './pages/hojo-undo/StrengthExercises';
import HardeningExercises from './pages/hojo-undo/HardeningExercises';
import EquipmentOverview from './pages/hojo-undo/EquipmentOverview';

// Import the generic markdown page component
import MarkdownContentPage from './pages/MarkdownContentPage';

const queryClient = new QueryClient();

const AppContent = () => {
  const location = useLocation();
  
  return (
    <MobileLayout>
      <SubNavigation currentPath={location.pathname} />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/theory" element={<TheoryPage />} />
        <Route path="/terminology" element={<TerminologyPage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/philosophy" element={<MarkdownContentPage />} />
        <Route path="/vital-points" element={<VitalPointsPage />} />
        <Route path="/theory/kata" element={<KataTheoryPage />} />
        <Route path="/practice" element={<PracticePage />} />
        <Route path="/techniques" element={<TechniquesPage />} />
        <Route path="/techniques/:id" element={<TechniqueDetailPage />} />
        <Route path="/kata" element={<KataPage />} />
        <Route path="/kata/:id" element={<KataDetailPage />} />
        <Route path="/bunkai" element={<BunkaiPage />} />
        <Route path="/bunkai/:id" element={<BunkaiDetailPage />} />
        
        {/* Main Hojo Undo page */}
        <Route path="/hojo-undo" element={<HojoUndoPage />} />
        
        {/* Re-add specific routes for the /general/ sections BEFORE the dynamic route */}
        <Route path="/hojo-undo/general/intro" element={<GeneralIntro />} />
        <Route path="/hojo-undo/general/strength" element={<StrengthExercises />} />
        <Route path="/hojo-undo/general/hardening" element={<HardeningExercises />} />
        <Route path="/hojo-undo/general/equipment" element={<EquipmentOverview />} />

        {/* Dynamic route for equipment-specific sections (now catches paths NOT matched above) */}
        <Route path="/hojo-undo/:equipmentId/:sectionKey" element={<HojoUndoSectionPage />} />

        <Route path="/kumite" element={<KumitePage />} />
        <Route path="/study" element={<StudyPage />} />
        <Route path="/study/:id" element={<StudyDetailPage />} />
        <Route path="/gradings" element={<GradingsPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </MobileLayout>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ThemeProvider>
        <I18nextProvider i18n={i18n}>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <AppContent />
          </BrowserRouter>
        </I18nextProvider>
      </ThemeProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;