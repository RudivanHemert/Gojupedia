import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage, languageNames, SupportedLanguage } from '@/contexts/LanguageContext';
import { useProgress } from '@/hooks/useProgress';
import { useFavorites } from '@/hooks/useFavorites';
import ProgressBar from '@/components/ui/ProgressBar';
import { useOfflineCache } from '@/hooks/useOfflineCache';

const SettingsPage: React.FC = () => {
  const { theme, setTheme, isDarkMode } = useTheme();
  const { language, setLanguage, t, loadingTranslations } = useLanguage();
  const { getProgressStats, resetAllProgress } = useProgress();
  const { favorites, clearFavorites } = useFavorites();
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const [cacheSizeEstimate, setCacheSizeEstimate] = useState<number | null>(null);
  
  // Get progress stats
  const progressStats = getProgressStats();
  
  // Estimate cache size
  const estimateCacheSize = async () => {
    try {
      const caches = await window.caches.keys();
      let totalSize = 0;
      
      for (const cacheName of caches) {
        const cache = await window.caches.open(cacheName);
        const requests = await cache.keys();
        
        // Estimate size based on URL length as a rough approximation
        for (const request of requests) {
          // Rough estimate: 1KB per cache entry + URL length
          totalSize += 1024 + request.url.length;
        }
      }
      
      setCacheSizeEstimate(totalSize);
    } catch (error) {
      console.error('Failed to estimate cache size:', error);
      setCacheSizeEstimate(null);
    }
  };
  
  // Clear all caches
  const clearAllCaches = async () => {
    try {
      const caches = await window.caches.keys();
      
      for (const cacheName of caches) {
        await window.caches.delete(cacheName);
      }
      
      // Update cache size estimate
      setCacheSizeEstimate(0);
      
      // Show success message
      alert(t('settings.cacheCleared'));
    } catch (error) {
      console.error('Failed to clear caches:', error);
      alert(t('errors.unexpectedError'));
    }
  };
  
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">{t('settings.appSettings')}</h1>
        <p className="text-gray-600 dark:text-gray-400">{t('settings.appSettingsDescription')}</p>
      </header>
      
      <Tabs defaultValue="appearance">
        <TabsList className="mb-6">
          <TabsTrigger value="appearance">{t('settings.appearance')}</TabsTrigger>
          <TabsTrigger value="language">{t('settings.language')}</TabsTrigger>
          <TabsTrigger value="progress">{t('settings.progress')}</TabsTrigger>
          <TabsTrigger value="data">{t('settings.dataPreferences')}</TabsTrigger>
          <TabsTrigger value="about">{t('settings.about')}</TabsTrigger>
        </TabsList>
        
        {/* Appearance Tab */}
        <TabsContent value="appearance" className="space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">{t('settings.theme')}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {['light', 'dark', 'system'].map((themeOption) => (
                <button
                  key={themeOption}
                  onClick={() => setTheme(themeOption as 'light' | 'dark' | 'system')}
                  className={`p-4 rounded-lg border transition-all ${
                    theme === themeOption
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                      : 'border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      themeOption === 'light' 
                        ? 'bg-yellow-100 text-yellow-600' 
                        : themeOption === 'dark' 
                          ? 'bg-gray-800 text-gray-200' 
                          : 'bg-gradient-to-r from-yellow-100 to-gray-800 text-gray-700'
                    }`}>
                      {themeOption === 'light' && '☀️'}
                      {themeOption === 'dark' && '🌙'}
                      {themeOption === 'system' && '⚙️'}
                    </div>
                    <div className="text-left">
                      <div className="font-medium">
                        {themeOption === 'light' && t('common.lightMode')}
                        {themeOption === 'dark' && t('common.darkMode')}
                        {themeOption === 'system' && t('common.systemTheme')}
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </TabsContent>
        
        {/* Language Tab */}
        <TabsContent value="language" className="space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">{t('settings.language')}</h2>
            
            {loadingTranslations && (
              <div className="text-center py-4">
                <div className="animate-spin w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full mx-auto mb-2"></div>
                <p>{t('common.loading')}</p>
              </div>
            )}
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Object.entries(languageNames).map(([langCode, langName]) => (
                <button
                  key={langCode}
                  onClick={() => setLanguage(langCode as SupportedLanguage)}
                  disabled={loadingTranslations}
                  className={`p-4 rounded-lg border transition-all ${
                    language === langCode
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                      : 'border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="text-left flex-grow">
                      <div className="font-medium">{langName}</div>
                    </div>
                    {language === langCode && (
                      <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white" className="w-3 h-3">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </TabsContent>
        
        {/* Progress Tab */}
        <TabsContent value="progress" className="space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">{t('settings.progress')}</h2>
            
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-3">{t('settings.overallProgress')}</h3>
              <ProgressBar 
                value={progressStats.percentComplete} 
                animated={true}
                height={12}
                labelPosition="top"
                color="primary"
              />
              
              <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                {progressStats.completedItems} / {progressStats.totalItems} {t('settings.itemsCompleted')}
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-medium mb-1">{t('settings.progressByCategory')}</h3>
              
              {Object.entries(progressStats.byType).map(([type, stats]) => (
                <div key={type} className="mb-3">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">
                      {t(`settings.category.${type}`)}
                    </span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {stats.completed} / {stats.total}
                    </span>
                  </div>
                  <ProgressBar 
                    value={stats.percentComplete} 
                    animated={false}
                    height={8}
                    showLabel={false}
                    color={stats.percentComplete > 80 ? 'success' : stats.percentComplete > 30 ? 'info' : 'primary'}
                  />
                </div>
              ))}
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-medium mb-4">{t('settings.resetProgress')}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {t('settings.resetProgressWarning')}
              </p>
              
              {!showResetConfirm ? (
                <button
                  onClick={() => setShowResetConfirm(true)}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                >
                  {t('settings.resetProgress')}
                </button>
              ) : (
                <div className="flex gap-3">
                  <button
                    onClick={() => {
                      resetAllProgress();
                      setShowResetConfirm(false);
                    }}
                    className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                  >
                    {t('settings.confirmReset')}
                  </button>
                  <button
                    onClick={() => setShowResetConfirm(false)}
                    className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                  >
                    {t('common.cancel')}
                  </button>
                </div>
              )}
            </div>
          </div>
        </TabsContent>
        
        {/* Data Preferences Tab */}
        <TabsContent value="data" className="space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">{t('settings.dataPreferences')}</h2>
            
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-2">{t('settings.favorites')}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                {t('settings.favoritesCount', { count: favorites.length.toString() })}
              </p>
              
              {favorites.length > 0 && (
                <button
                  onClick={clearFavorites}
                  className="px-3 py-1.5 bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg hover:bg-red-200 dark:hover:bg-red-900/40 transition-colors text-sm"
                >
                  {t('settings.clearFavorites')}
                </button>
              )}
            </div>
            
            <div className="mb-6 pt-6 border-t border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-medium mb-2">{t('settings.cacheSettings')}</h3>
              
              <div className="flex items-center gap-3 mb-4">
                <button
                  onClick={estimateCacheSize}
                  className="px-4 py-2 bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-900/40 transition-colors"
                >
                  {t('settings.checkCacheSize')}
                </button>
                
                {cacheSizeEstimate !== null && (
                  <span className="text-sm">
                    {(cacheSizeEstimate / (1024 * 1024)).toFixed(2)} MB
                  </span>
                )}
              </div>
              
              <button
                onClick={clearAllCaches}
                className="px-4 py-2 bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg hover:bg-red-200 dark:hover:bg-red-900/40 transition-colors"
              >
                {t('settings.clearCache')}
              </button>
            </div>
            
            <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-medium mb-2">{t('settings.exportImport')}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {t('settings.exportImportDescription')}
              </p>
              
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => {
                    // Export data as JSON file
                    const data = {
                      favorites,
                      progress: getProgressStats(),
                      settings: {
                        theme,
                        language
                      }
                    };
                    
                    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = 'goju-ryu-data.json';
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                    URL.revokeObjectURL(url);
                  }}
                  className="px-4 py-2 bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-lg hover:bg-green-200 dark:hover:bg-green-900/40 transition-colors"
                >
                  {t('settings.exportData')}
                </button>
                
                {/* Import button would have additional functionality */}
                <button
                  className="px-4 py-2 bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 rounded-lg hover:bg-purple-200 dark:hover:bg-purple-900/40 transition-colors"
                >
                  {t('settings.importData')}
                </button>
              </div>
            </div>
          </div>
        </TabsContent>
        
        {/* About Tab */}
        <TabsContent value="about" className="space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">{t('settings.about')}</h2>
            
            <div className="text-center mb-6">
              <div className="w-24 h-24 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">🥋</span>
              </div>
              <h3 className="text-xl font-bold mb-1">{t('app.title')}</h3>
              <p className="text-gray-600 dark:text-gray-400">{t('app.slogan')}</p>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-2">{t('settings.version')}</h3>
              <p className="text-gray-600 dark:text-gray-400">1.0.0</p>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-2">{t('settings.developers')}</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Made with ❤️ by Goju-Ryu enthusiasts
              </p>
            </div>
            
            <div className="flex gap-3">
              <button className="px-4 py-2 bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-900/40 transition-colors">
                {t('settings.feedback')}
              </button>
              <button className="px-4 py-2 bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-lg hover:bg-green-200 dark:hover:bg-green-900/40 transition-colors">
                {t('settings.rateApp')}
              </button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SettingsPage; 