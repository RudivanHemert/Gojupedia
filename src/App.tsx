
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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/techniques" element={<TechniquesPage />} />
          <Route path="/techniques/:id" element={<TechniqueDetailPage />} />
          <Route path="/kata" element={<KataPage />} />
          <Route path="/kata/:id" element={<KataDetailPage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/philosophy" element={<PhilosophyPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
