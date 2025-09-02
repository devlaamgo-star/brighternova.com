import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { X, Cookie, Shield, Settings, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const CookieConsentPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState({
    essential: true, // Always required
    analytics: false,
    marketing: false,
    functional: false
  });

  useEffect(() => {
    // Check if user has already given consent
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Show popup after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    const consentData = {
      essential: true,
      analytics: true,
      marketing: true,
      functional: true,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('cookie-consent', JSON.stringify(consentData));
    setIsVisible(false);
  };

  const handleAcceptSelected = () => {
    const consentData = {
      ...preferences,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('cookie-consent', JSON.stringify(consentData));
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    const consentData = {
      essential: true,
      analytics: false,
      marketing: false,
      functional: false,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('cookie-consent', JSON.stringify(consentData));
    setIsVisible(false);
  };

  const togglePreference = (key: keyof typeof preferences) => {
    if (key === 'essential') return; // Essential cookies cannot be disabled
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-black/20 backdrop-blur-sm">
      <Card className="max-w-4xl mx-auto glass border-primary/30 shadow-2xl">
        <CardContent className="p-6">
          {!showPreferences ? (
            /* Main Cookie Notice */
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-primary p-2 rounded-lg shadow-glow flex-shrink-0">
                  <Cookie className="h-5 w-5 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-semibold text-foreground">Cookie & Privacy Notice</h3>
                    <Badge variant="secondary" className="text-xs">GDPR Compliant</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    We use cookies to enhance your experience, analyze site usage, and improve our services. 
                    Essential cookies are required for the site to function. By clicking "Accept All", 
                    you consent to our use of cookies as described in our{" "}
                    <Link to="/cookies" className="text-primary hover:underline">Cookie Policy</Link>
                    {" "}and{" "}
                    <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>.
                  </p>
                  
                  <div className="flex flex-wrap gap-3">
                    <Button 
                      onClick={handleAcceptAll}
                      variant="hero" 
                      size="sm"
                      className="group"
                    >
                      Accept All Cookies
                      <Shield className="h-4 w-4 ml-2" />
                    </Button>
                    
                    <Button 
                      onClick={() => setShowPreferences(true)}
                      variant="outline" 
                      size="sm"
                      className="group"
                    >
                      <Settings className="h-4 w-4 mr-2" />
                      Customize Preferences
                    </Button>
                    
                    <Button 
                      onClick={handleRejectAll}
                      variant="ghost" 
                      size="sm"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      Reject Non-Essential
                    </Button>
                  </div>
                </div>
                
                <button
                  onClick={() => setIsVisible(false)}
                  className="text-muted-foreground hover:text-foreground transition-colors flex-shrink-0"
                  aria-label="Close"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>
          ) : (
            /* Cookie Preferences */
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Settings className="h-5 w-5 text-primary" />
                  <h3 className="text-lg font-semibold text-foreground">Cookie Preferences</h3>
                </div>
                <button
                  onClick={() => setShowPreferences(false)}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Back"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              
              <div className="space-y-4">
                {/* Essential Cookies */}
                <div className="flex items-start justify-between p-4 bg-muted/30 rounded-lg border border-border/50">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-medium text-foreground">Essential Cookies</h4>
                      <Badge variant="secondary" className="text-xs">Required</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Required for the website to function properly. These cannot be disabled.
                    </p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-6 bg-primary rounded-full flex items-center justify-end px-1">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div className="flex items-start justify-between p-4 bg-background/50 rounded-lg border border-border/50">
                  <div className="flex-1">
                    <h4 className="font-medium text-foreground mb-1">Analytics Cookies</h4>
                    <p className="text-xs text-muted-foreground">
                      Help us understand how visitors interact with our website to improve user experience.
                    </p>
                  </div>
                  <button
                    onClick={() => togglePreference('analytics')}
                    className="flex items-center"
                    aria-label="Toggle analytics cookies"
                  >
                    <div className={`w-10 h-6 rounded-full flex items-center px-1 transition-colors ${
                      preferences.analytics ? 'bg-primary justify-end' : 'bg-muted justify-start'
                    }`}>
                      <div className="w-4 h-4 bg-white rounded-full transition-transform"></div>
                    </div>
                  </button>
                </div>

                {/* Marketing Cookies */}
                <div className="flex items-start justify-between p-4 bg-background/50 rounded-lg border border-border/50">
                  <div className="flex-1">
                    <h4 className="font-medium text-foreground mb-1">Marketing Cookies</h4>
                    <p className="text-xs text-muted-foreground">
                      Used to deliver personalized advertisements and track campaign effectiveness.
                    </p>
                  </div>
                  <button
                    onClick={() => togglePreference('marketing')}
                    className="flex items-center"
                    aria-label="Toggle marketing cookies"
                  >
                    <div className={`w-10 h-6 rounded-full flex items-center px-1 transition-colors ${
                      preferences.marketing ? 'bg-primary justify-end' : 'bg-muted justify-start'
                    }`}>
                      <div className="w-4 h-4 bg-white rounded-full transition-transform"></div>
                    </div>
                  </button>
                </div>

                {/* Functional Cookies */}
                <div className="flex items-start justify-between p-4 bg-background/50 rounded-lg border border-border/50">
                  <div className="flex-1">
                    <h4 className="font-medium text-foreground mb-1">Functional Cookies</h4>
                    <p className="text-xs text-muted-foreground">
                      Enable enhanced functionality like chat widgets and personalized content.
                    </p>
                  </div>
                  <button
                    onClick={() => togglePreference('functional')}
                    className="flex items-center"
                    aria-label="Toggle functional cookies"
                  >
                    <div className={`w-10 h-6 rounded-full flex items-center px-1 transition-colors ${
                      preferences.functional ? 'bg-primary justify-end' : 'bg-muted justify-start'
                    }`}>
                      <div className="w-4 h-4 bg-white rounded-full transition-transform"></div>
                    </div>
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                <Button 
                  onClick={handleAcceptSelected}
                  variant="hero" 
                  size="sm"
                  className="flex-1"
                >
                  Save Preferences
                </Button>
                
                <Button 
                  onClick={handleAcceptAll}
                  variant="outline" 
                  size="sm"
                  className="flex-1"
                >
                  Accept All
                </Button>
              </div>

              <div className="text-center">
                <Link 
                  to="/cookies" 
                  className="text-xs text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
                >
                  Learn more about our cookies
                  <ExternalLink className="h-3 w-3" />
                </Link>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default CookieConsentPopup;
