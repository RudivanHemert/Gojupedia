/**
 * Security utilities for the Gojupedia app
 * Provides input sanitization, validation, and other security functions
 */

// Maximum lengths for different input types
const MAX_SEARCH_LENGTH = 100;
const MAX_INPUT_LENGTH = 1000;
const MAX_URL_PARAM_LENGTH = 200;

/**
 * Sanitizes user input to prevent XSS and injection attacks
 */
export function sanitizeInput(input: string): string {
  if (typeof input !== 'string') {
    return '';
  }

  return input
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .replace(/javascript:/gi, '') // Remove javascript: protocols
    .replace(/on\w+=/gi, '') // Remove event handlers
    .replace(/data:/gi, '') // Remove data URLs
    .replace(/vbscript:/gi, '') // Remove vbscript
    .replace(/\0/g, '') // Remove null bytes
    .trim()
    .slice(0, MAX_INPUT_LENGTH); // Limit length
}

/**
 * Validates search query input
 */
export function validateSearchQuery(query: string): boolean {
  if (!query || typeof query !== 'string') {
    return false;
  }

  const sanitized = sanitizeInput(query);
  return sanitized.length > 0 && sanitized.length <= MAX_SEARCH_LENGTH;
}

/**
 * Validates URL parameters to prevent URL manipulation
 */
export function validateUrlParam(param: string): boolean {
  if (!param || typeof param !== 'string') {
    return false;
  }

  // Allow only alphanumeric, hyphens, and underscores
  const validPattern = /^[a-zA-Z0-9-_]+$/;
  return validPattern.test(param) && param.length <= MAX_URL_PARAM_LENGTH;
}

/**
 * Sanitizes text content for display (prevents HTML injection)
 */
export function sanitizeForDisplay(text: string): string {
  if (typeof text !== 'string') {
    return '';
  }

  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
}

/**
 * Validates that a string is safe for use as a CSS class name
 */
export function validateCssClass(className: string): boolean {
  if (!className || typeof className !== 'string') {
    return false;
  }

  // CSS class names should start with letter and contain only letters, numbers, hyphens, underscores
  const validPattern = /^[a-zA-Z][a-zA-Z0-9-_]*$/;
  return validPattern.test(className) && className.length <= 50;
}

/**
 * Rate limiting utility for preventing abuse
 */
class RateLimiter {
  private requests: Map<string, number[]> = new Map();
  private readonly maxRequests: number;
  private readonly windowMs: number;

  constructor(maxRequests: number = 100, windowMs: number = 60000) {
    this.maxRequests = maxRequests;
    this.windowMs = windowMs;
  }

  isAllowed(identifier: string): boolean {
    const now = Date.now();
    const windowStart = now - this.windowMs;

    if (!this.requests.has(identifier)) {
      this.requests.set(identifier, [now]);
      return true;
    }

    const timestamps = this.requests.get(identifier)!;
    
    // Remove old timestamps
    const recentTimestamps = timestamps.filter(time => time > windowStart);
    
    if (recentTimestamps.length >= this.maxRequests) {
      return false;
    }

    recentTimestamps.push(now);
    this.requests.set(identifier, recentTimestamps);
    return true;
  }

  reset(identifier?: string): void {
    if (identifier) {
      this.requests.delete(identifier);
    } else {
      this.requests.clear();
    }
  }
}

// Export a default rate limiter instance
export const searchRateLimiter = new RateLimiter(50, 60000); // 50 searches per minute

/**
 * Secure random string generator for IDs
 */
export function generateSecureId(length: number = 16): string {
  const array = new Uint8Array(length);
  if (typeof window !== 'undefined' && window.crypto) {
    window.crypto.getRandomValues(array);
  } else {
    // Fallback for environments without crypto
    for (let i = 0; i < length; i++) {
      array[i] = Math.floor(Math.random() * 256);
    }
  }
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
}

/**
 * Checks if running in a secure context (HTTPS)
 */
export function isSecureContext(): boolean {
  if (typeof window === 'undefined') {
    return true; // SSR context
  }
  
  return window.isSecureContext || window.location.protocol === 'https:';
}

/**
 * Content Security Policy violation reporter
 */
export function reportCSPViolation(violationEvent: SecurityPolicyViolationEvent): void {
  console.error('CSP Violation:', {
    violatedDirective: violationEvent.violatedDirective,
    blockedURI: violationEvent.blockedURI,
    documentURI: violationEvent.documentURI,
    originalPolicy: violationEvent.originalPolicy,
    timestamp: new Date().toISOString()
  });

  // In production, you might want to send this to a logging service
  if (import.meta.env.PROD) {
    // Example: sendToLoggingService(violationData);
  }
}

/**
 * Initialize CSP violation reporting
 */
export function initializeSecurityMonitoring(): void {
  if (typeof window === 'undefined') return;

  // Listen for CSP violations
  window.addEventListener('securitypolicyviolation', reportCSPViolation);

  // Check if we're in a secure context
  if (!isSecureContext()) {
    console.warn('⚠️ Application is not running in a secure context (HTTPS)');
  }

  // Warn about development mode in production
  if (import.meta.env.PROD && import.meta.env.DEV) {
    console.error('🚨 Development mode detected in production build!');
  }
} 