import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.goju.ryu.karate',
  appName: 'Goju-Ryu Karate',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
