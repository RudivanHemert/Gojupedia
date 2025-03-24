
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import TechniquesPage from "./pages/TechniquesPage";
import KataPage from "./pages/KataPage";
import HistoryPage from "./pages/HistoryPage";
import PhilosophyPage from "./pages/PhilosophyPage";
import TechniqueDetailPage from "./pages/TechniqueDetailPage";
import KataDetailPage from "./pages/KataDetailPage";
import AdminPage from "./pages/AdminPage";
import StudyPage from "./pages/StudyPage";
import StudyDetailPage from "./pages/StudyDetailPage";
import GradingsPage from "./pages/GradingsPage";
import TheoryPage from "./pages/TheoryPage";
import PracticePage from "./pages/PracticePage";
import TerminologyPage from "./pages/TerminologyPage";
import HojoUndoPage from "./pages/HojoUndoPage";
import KumitePage from "./pages/KumitePage";
import VitalPointsPage from "./pages/VitalPointsPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Theory section */}
          <Route path="/theory" element={<TheoryPage />} />
          <Route path="/terminology" element={<TerminologyPage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/philosophy" element={<PhilosophyPage />} />
          <Route path="/vital-points" element={<VitalPointsPage />} />
          
          {/* Practice section */}
          <Route path="/practice" element={<PracticePage />} />
          <Route path="/techniques" element={<TechniquesPage />} />
          <Route path="/techniques/:id" element={<TechniqueDetailPage />} />
          <Route path="/kata" element={<KataPage />} />
          <Route path="/kata/:id" element={<KataDetailPage />} />
          <Route path="/hojo-undo" element={<HojoUndoPage />} />
          <Route path="/kumite" element={<KumitePage />} />
          
          {/* Study section */}
          <Route path="/study" element={<StudyPage />} />
          <Route path="/study/:id" element={<StudyDetailPage />} />
          <Route path="/gradings" element={<GradingsPage />} />
          
          {/* Admin */}
          <Route path="/admin" element={<AdminPage />} />
          
          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
