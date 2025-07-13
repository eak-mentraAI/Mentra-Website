import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Checkbox } from '@/components/ui/checkbox';
import { Settings, X, Shield, BarChart3, Cookie, Info } from 'lucide-react';
import { CookiePreferences, setCookie, deleteCookie, initializeAnalytics, initializeMarketing } from '@/lib/cookies';

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true, // Always true, can't be disabled
    functional: false,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('mentra_consent');
    if (!consent) {
      setShowBanner(true);
    } else {
      const savedPreferences = JSON.parse(consent);
      setPreferences(savedPreferences);
      
      // Initialize services based on saved preferences
      if (savedPreferences.analytics) {
        initializeAnalytics();
      }
      if (savedPreferences.marketing) {
        initializeMarketing();
      }
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = {
      essential: true,
      functional: true,
      analytics: true,
      marketing: true,
    };
    setPreferences(allAccepted);
    localStorage.setItem('mentra_consent', JSON.stringify(allAccepted));
    setShowBanner(false);
    
    // Set actual cookies based on preferences
    setCookies(allAccepted);
    
    // Initialize services
    initializeAnalytics();
    initializeMarketing();
  };

  const handleAcceptEssential = () => {
    const essentialOnly = {
      essential: true,
      functional: false,
      analytics: false,
      marketing: false,
    };
    setPreferences(essentialOnly);
    localStorage.setItem('mentra_consent', JSON.stringify(essentialOnly));
    setShowBanner(false);
    
    // Set actual cookies based on preferences
    setCookies(essentialOnly);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('mentra_consent', JSON.stringify(preferences));
    setShowSettings(false);
    
    // Set actual cookies based on preferences
    setCookies(preferences);
    
    // Initialize services based on new preferences
    if (preferences.analytics) {
      initializeAnalytics();
    }
    if (preferences.marketing) {
      initializeMarketing();
    }
  };

  const setCookies = (prefs: CookiePreferences) => {
    // Essential cookies (always set)
    setCookie('mentra_session', 'true', 1); // 1 day
    setCookie('mentra_consent', 'true', 365); // 1 year
    
    // Functional cookies
    if (prefs.functional) {
      setCookie('mentra_preferences', 'true', 365);
    } else {
      deleteCookie('mentra_preferences');
    }
    
    // Analytics cookies
    if (prefs.analytics) {
      setCookie('_ga', 'true', 730); // 2 years
      setCookie('_gid', 'true', 1); // 1 day
    } else {
      deleteCookie('_ga');
      deleteCookie('_gid');
    }
    
    // Marketing cookies
    if (prefs.marketing) {
      setCookie('mentra_marketing', 'true', 365);
    } else {
      deleteCookie('mentra_marketing');
    }
  };

  if (!showBanner) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <Dialog open={showSettings} onOpenChange={setShowSettings}>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              size="sm"
              className="bg-white/90 backdrop-blur-sm border-gray-200 shadow-lg hover:bg-white"
            >
              <Settings className="w-4 h-4 mr-2" />
              Cookie Settings
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <Cookie className="w-5 h-5" />
                Cookie Preferences
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Checkbox checked={preferences.essential} disabled />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Shield className="w-4 h-4 text-mentra-blue" />
                      <span className="font-medium">Essential Cookies</span>
                      <span className="text-xs bg-mentra-blue/10 text-mentra-blue px-2 py-1 rounded">Required</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      Necessary for the website to function properly. Cannot be disabled.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Checkbox 
                    checked={preferences.functional} 
                    onCheckedChange={(checked) => 
                      setPreferences(prev => ({ ...prev, functional: checked as boolean }))
                    }
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Settings className="w-4 h-4 text-growth-green" />
                      <span className="font-medium">Functional Cookies</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      Remember your preferences and settings to improve your experience.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Checkbox 
                    checked={preferences.analytics} 
                    onCheckedChange={(checked) => 
                      setPreferences(prev => ({ ...prev, analytics: checked as boolean }))
                    }
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <BarChart3 className="w-4 h-4 text-curiosity-coral" />
                      <span className="font-medium">Analytics Cookies</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      Help us understand how visitors use our website to improve it.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Checkbox 
                    checked={preferences.marketing} 
                    onCheckedChange={(checked) => 
                      setPreferences(prev => ({ ...prev, marketing: checked as boolean }))
                    }
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Info className="w-4 h-4 text-grit-gold" />
                      <span className="font-medium">Marketing Cookies</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      Used to deliver personalized content and advertisements.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-2 pt-4">
                <Button onClick={handleSavePreferences} className="flex-1">
                  Save Preferences
                </Button>
                <Button variant="outline" onClick={() => setShowSettings(false)}>
                  Cancel
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    );
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Cookie className="w-5 h-5 text-mentra-blue" />
              <h3 className="font-semibold text-gray-900">We use cookies</h3>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              We use cookies to enhance your experience, analyze site usage, and assist with our marketing efforts. 
              By clicking "Accept All", you consent to our use of cookies. 
              <a href="/cookies" className="text-mentra-blue hover:underline ml-1">
                Learn more
              </a>
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowSettings(true)}
              className="flex items-center gap-2"
            >
              <Settings className="w-4 h-4" />
              Customize
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleAcceptEssential}
              className="flex items-center gap-2"
            >
              <Shield className="w-4 h-4" />
              Essential Only
            </Button>
            <Button
              size="sm"
              onClick={handleAcceptAll}
              className="flex items-center gap-2"
            >
              Accept All
            </Button>
          </div>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowBanner(false)}
            className="absolute top-2 right-2 md:relative md:top-0 md:right-0"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent; 