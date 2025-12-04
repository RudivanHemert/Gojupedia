import React, { useState, useEffect, ReactNode, Suspense } from 'react';
import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, useLocation } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { I18nextProvider } from 'react-i18next';
import { LanguageProvider } from '@/contexts/LanguageContext';
import i18n from '@/i18n';
import { initializeSecurityMonitoring } from '@/utils/security';
import SidebarLayout from '@/components/layout/SidebarLayout';
import AppRoutes from '@/routes';

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

  // Initialize security monitoring
  useEffect(() => {
    initializeSecurityMonitoring();
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    const container = document.getElementById('app-scroll-container');
    if (container) {
      container.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    }
  }, [location.pathname, location.search, location.hash]);

  return (
    <ErrorBoundary>
      <SidebarLayout>
        <Suspense fallback={<div className="flex items-center justify-center h-screen">Loading...</div>}>
          <AppRoutes />
        </Suspense>
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