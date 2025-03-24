
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.goju-wiki-quest',
  appName: 'goju-wiki-quest',
  webDir: 'dist',
  server: {
    url: 'https://a55a0562-80ea-4779-8e12-950272000753.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  // Additional customizations can be added here later
};

export default config;
