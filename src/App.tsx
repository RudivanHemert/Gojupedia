import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import TheoryPage from "./pages/TheoryPage";
import TerminologyPage from "./pages/TerminologyPage";
import HistoryPage from "./pages/HistoryPage";
import PhilosophyPage from "./pages/PhilosophyPage";
import VitalPointsPage from "./pages/VitalPointsPage";
import PracticePage from "./pages/PracticePage";
import TechniquesPage from "./pages/TechniquesPage";
import TechniqueDetailPage from "./pages/TechniqueDetailPage";
import KataPage from "./pages/KataPage";
import KataDetailPage from "./pages/KataDetailPage";
import HojoUndoPage from "./pages/HojoUndoPage";
import KumitePage from "./pages/KumitePage";
import StudyPage from "./pages/StudyPage";
import StudyDetailPage from "./pages/StudyDetailPage";
import GradingsPage from "./pages/GradingsPage";
import SettingsPage from "./pages/SettingsPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ThemeProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/theory" element={<TheoryPage />} />
            <Route path="/terminology" element={<TerminologyPage />} />
            <Route path="/history" element={<HistoryPage />} />
            <Route path="/philosophy" element={<PhilosophyPage />} />
            <Route path="/vital-points" element={<VitalPointsPage />} />
            <Route path="/practice" element={<PracticePage />} />
            <Route path="/techniques" element={<TechniquesPage />} />
            <Route path="/techniques/:id" element={<TechniqueDetailPage />} />
            <Route path="/kata" element={<KataPage />} />
            <Route path="/kata/:id" element={<KataDetailPage />} />
            <Route path="/hojo-undo" element={<HojoUndoPage />} />
            <Route path="/kumite" element={<KumitePage />} />
            <Route path="/study" element={<StudyPage />} />
            <Route path="/study/:id" element={<StudyDetailPage />} />
            <Route path="/gradings" element={<GradingsPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;