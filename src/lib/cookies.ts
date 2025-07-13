// Cookie management utilities

export interface CookiePreferences {
  essential: boolean;
  functional: boolean;
  analytics: boolean;
  marketing: boolean;
}

export const COOKIE_NAMES = {
  SESSION: 'mentra_session',
  CONSENT: 'mentra_consent',
  PREFERENCES: 'mentra_preferences',
  MARKETING: 'mentra_marketing',
  ANALYTICS_GA: '_ga',
  ANALYTICS_GID: '_gid',
} as const;

export const getCookie = (name: string): string | null => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(';').shift() || null;
  return null;
};

export const setCookie = (name: string, value: string, days: number = 365): void => {
  const expires = new Date();
  expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
  document.cookie = `${name}=${value}; expires=${expires.toUTCString()}; path=/`;
};

export const deleteCookie = (name: string): void => {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
};

export const hasConsent = (type: keyof CookiePreferences): boolean => {
  const consent = localStorage.getItem('mentra_consent');
  if (!consent) return false;
  
  try {
    const preferences: CookiePreferences = JSON.parse(consent);
    return preferences[type] || false;
  } catch {
    return false;
  }
};

export const shouldShowAnalytics = (): boolean => {
  return hasConsent('analytics');
};

export const shouldShowMarketing = (): boolean => {
  return hasConsent('marketing');
};

export const shouldShowFunctional = (): boolean => {
  return hasConsent('functional');
};

// Initialize analytics based on consent
export const initializeAnalytics = (): void => {
  if (shouldShowAnalytics()) {
    // Initialize Google Analytics or other analytics
    console.log('Analytics enabled');
    // Add your analytics initialization code here
  }
};

// Initialize marketing tools based on consent
export const initializeMarketing = (): void => {
  if (shouldShowMarketing()) {
    // Initialize marketing tools
    console.log('Marketing tools enabled');
    // Add your marketing tool initialization code here
  }
}; 