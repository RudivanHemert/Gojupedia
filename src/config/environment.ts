/**
 * Environment configuration for Gojupedia
 * Provides typed access to environment variables with validation
 */

export interface AppConfig {
  appName: string;
  appVersion: string;
  isDevelopment: boolean;
  isProduction: boolean;
  enableCSP: boolean;
  enableRateLimiting: boolean;
  apiUrl?: string;
  apiKey?: string;
  analyticsId?: string;
  sentryDsn?: string;
  sourceMaps: boolean;
}

/**
 * Loads and validates environment configuration
 */
function loadConfig(): AppConfig {
  const config: AppConfig = {
    appName: import.meta.env.VITE_APP_NAME || 'Gojupedia',
    appVersion: import.meta.env.VITE_APP_VERSION || '1.0.0',
    isDevelopment: import.meta.env.DEV,
    isProduction: import.meta.env.PROD,
    enableCSP: import.meta.env.VITE_ENABLE_CSP !== 'false',
    enableRateLimiting: import.meta.env.VITE_ENABLE_RATE_LIMITING !== 'false',
    apiUrl: import.meta.env.VITE_API_URL,
    apiKey: import.meta.env.VITE_API_KEY,
    analyticsId: import.meta.env.VITE_ANALYTICS_ID,
    sentryDsn: import.meta.env.VITE_SENTRY_DSN,
    sourceMaps: import.meta.env.VITE_SOURCE_MAPS === 'true'
  };

  // Validate required configuration in production
  if (config.isProduction) {
    const errors: string[] = [];

    // Add validation rules as needed
    if (config.apiUrl && !isValidUrl(config.apiUrl)) {
      errors.push('Invalid API URL');
    }

    if (errors.length > 0) {
      throw new Error(`Configuration errors: ${errors.join(', ')}`);
    }
  }

  return config;
}

/**
 * Validates URL format
 */
function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

/**
 * Gets sensitive environment variable without exposing it in logs
 */
export function getSensitiveEnvVar(key: string): string | undefined {
  const value = import.meta.env[key];
  
  // Log access but not the value for security auditing
  if (import.meta.env.DEV) {
    console.debug(`Accessed sensitive env var: ${key} (${value ? 'set' : 'not set'})`);
  }
  
  return value;
}

/**
 * Application configuration singleton
 */
export const config = loadConfig();

/**
 * Runtime configuration checks
 */
export function validateRuntimeConfig(): boolean {
  try {
    // Check if we're in a secure context in production
    if (config.isProduction && typeof window !== 'undefined') {
      if (!window.isSecureContext) {
        console.error('🚨 SECURITY: Application must run over HTTPS in production');
        return false;
      }
    }

    // Check for development mode in production build
    if (config.isProduction && config.isDevelopment) {
      console.error('🚨 SECURITY: Development mode detected in production build');
      return false;
    }

    // Validate localStorage availability
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('__test', 'test');
        localStorage.removeItem('__test');
      } catch {
        console.warn('⚠️ localStorage is not available');
      }
    }

    return true;
  } catch (error) {
    console.error('Configuration validation failed:', error);
    return false;
  }
}

/**
 * Debug helper for development
 */
export function debugConfig(): void {
  if (!config.isDevelopment) {
    return;
  }

  console.group('🔧 App Configuration');
  console.table({
    'App Name': config.appName,
    'Version': config.appVersion,
    'Environment': config.isDevelopment ? 'Development' : 'Production',
    'CSP Enabled': config.enableCSP,
    'Rate Limiting': config.enableRateLimiting,
    'Source Maps': config.sourceMaps,
    'API URL': config.apiUrl || 'Not set',
    'Secure Context': typeof window !== 'undefined' ? window.isSecureContext : 'N/A'
  });
  console.groupEnd();
} 