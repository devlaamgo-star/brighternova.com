import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Progress } from "@/components/ui/progress";
import { Shield, Mail, Clock, CheckCircle, AlertTriangle, Settings } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const SignUpVerification = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Check if user has signup data
    const signupData = localStorage.getItem('signupUserData');
    if (!signupData) {
      // Redirect to signup if no data found
      navigate('/signup');
      return;
    }

    // Start countdown timer
    const interval = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          navigate('/select-plan');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // Update progress bar
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 20; // Increase by 20% each second
      });
    }, 1000);

    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
    };
  }, [navigate]);

  const userData = JSON.parse(localStorage.getItem('signupUserData') || '{}');

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center py-12 px-4 relative">
      {/* Simple header for auth pages */}
      <div className="absolute top-0 left-0 right-0 z-10">
        <div className="container mx-auto px-4 py-6">
          <Link to="/" className="inline-flex items-center gap-2 text-primary-foreground hover:text-primary-glow transition-colors">
            <div className="bg-white/10 p-2 rounded-lg backdrop-blur-sm">
              <Shield className="h-5 w-5" />
            </div>
            <span className="font-heading font-semibold">Novabuckups</span>
          </Link>
        </div>
      </div>

      <div className="w-full max-w-lg">
        {/* Account Created Successfully */}
        <Card className="glass border-white/20 shadow-xl">
          <CardHeader className="text-center pb-4">
            <div className="bg-green-100 p-4 rounded-full w-fit mx-auto mb-4">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-semibold text-foreground">Account Created Successfully!</h2>
            <p className="text-sm text-muted-foreground">
              Welcome to Novabuckups, {userData.firstName}!
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Success Message */}
            <Alert className="border-green-200 bg-green-50">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <AlertDescription className="text-green-800">
                Your account has been created successfully. You're now part of the Novabuckups community!
              </AlertDescription>
            </Alert>

            {/* Account Details */}
            <div className="bg-muted/30 rounded-lg p-4 space-y-2">
              <h3 className="font-medium text-foreground mb-3">Account Details:</h3>
              <div className="text-sm space-y-1">
                <p><span className="text-muted-foreground">Name:</span> <span className="font-medium">{userData.firstName} {userData.lastName}</span></p>
                <p><span className="text-muted-foreground">Email:</span> <span className="font-medium">{userData.email}</span></p>
                {userData.company && (
                  <p><span className="text-muted-foreground">Company:</span> <span className="font-medium">{userData.company}</span></p>
                )}
                <p><span className="text-muted-foreground">Trial Period:</span> <span className="font-medium text-primary">3 Days Free Trial</span></p>
              </div>
            </div>

            {/* Important Notices */}
            <div className="space-y-3">
              <Alert className="border-blue-200 bg-blue-50">
                <Mail className="h-4 w-4 text-blue-600" />
                <AlertDescription className="text-blue-800">
                  <strong>Email Verification Required:</strong> Please check your email and verify your account to complete setup.
                </AlertDescription>
              </Alert>

              <Alert className="border-amber-200 bg-amber-50">
                <Settings className="h-4 w-4 text-amber-600" />
                <AlertDescription className="text-amber-800">
                  <strong>Enable 2FA:</strong> Two-factor authentication setup will be required for enhanced security.
                </AlertDescription>
              </Alert>
            </div>

            {/* Countdown & Progress */}
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>Redirecting to plan selection in {countdown} seconds...</span>
              </div>
              
              <div className="space-y-2">
                <Progress value={progress} className="w-full" />
                <p className="text-xs text-muted-foreground">
                  Setting up your subscription options...
                </p>
              </div>
            </div>

            {/* Manual Continue Button */}
            <div className="text-center">
              <button 
                onClick={() => navigate('/select-plan')}
                className="text-sm text-primary hover:underline font-medium"
              >
                Continue Now →
              </button>
            </div>
          </CardContent>
        </Card>

        {/* Trust Indicators */}
        <div className="flex justify-center items-center gap-6 mt-8 text-primary-foreground/60 text-xs">
          <div className="flex items-center gap-1">
            <CheckCircle className="h-3 w-3" />
            <span>3-day free trial</span>
          </div>
          <div className="flex items-center gap-1">
            <CheckCircle className="h-3 w-3" />
            <span>No credit card required</span>
          </div>
          <div className="flex items-center gap-1">
            <CheckCircle className="h-3 w-3" />
            <span>Cancel anytime</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpVerification;
