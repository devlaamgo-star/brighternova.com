import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { AlertDialog, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Shield, Mail, Lock, Eye, EyeOff, ArrowRight, CheckCircle, Github, AlertTriangle, Clock, MailCheck } from "lucide-react";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showErrorDialog, setShowErrorDialog] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [needsEmailVerification, setNeedsEmailVerification] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [resendCountdown, setResendCountdown] = useState(0);
  const [isResending, setIsResending] = useState(false);

  // Countdown timer for resend email
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (resendCountdown > 0) {
      interval = setInterval(() => {
        setResendCountdown(prev => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [resendCountdown]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Show error popup for all sign-in attempts
    setErrorMessage("Your email or password incorrect or please check status account or contact support");
    setShowErrorDialog(true);
  };

  const handleResendEmail = () => {
    if (resendCountdown > 0 || isResending) return;
    
    setIsResending(true);
    
    // Simulate sending email
    setTimeout(() => {
      setEmailSent(true);
      setResendCountdown(59);
      setIsResending(false);
    }, 1000);
  };

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

      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="mb-6"></div>
          
          <Badge variant="secondary" className="glass mb-4">
            <Shield className="h-4 w-4 mr-2" />
            Secure Access
          </Badge>
          
          <h1 className="text-3xl font-bold text-primary-foreground mb-2">
            Welcome back
          </h1>
          <p className="text-primary-foreground/80">
            Sign in to your account to manage your backups
          </p>
        </div>

        {/* Sign In Form or Email Verification */}
        {!needsEmailVerification ? (
          <Card className="glass border-white/20 shadow-xl">
            <CardHeader className="text-center pb-4">
              <h2 className="text-xl font-semibold text-foreground">Sign In</h2>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email Field */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium">
                    Email Address
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="john@company.com" 
                      value={email} 
                      onChange={(e) => setEmail(e.target.value)} 
                      className="pl-10 bg-background/50 border-border/50 focus:bg-background focus:border-primary" 
                      required 
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-sm font-medium">
                    Password
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input 
                      id="password" 
                      type={showPassword ? "text" : "password"} 
                      placeholder="Enter your password" 
                      value={password} 
                      onChange={(e) => setPassword(e.target.value)} 
                      className="pl-10 pr-10 bg-background/50 border-border/50 focus:bg-background focus:border-primary" 
                      required 
                    />
                    <button 
                      type="button" 
                      onClick={() => setShowPassword(!showPassword)} 
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="remember" 
                      checked={rememberMe} 
                      onCheckedChange={(checked) => setRememberMe(checked as boolean)} 
                    />
                    <Label htmlFor="remember" className="text-sm text-muted-foreground">
                      Remember me
                    </Label>
                  </div>
                  <Link to="/forgot-password" className="text-sm text-primary hover:underline">
                    Forgot password?
                  </Link>
                </div>

                {/* Submit Button */}
                <Button type="submit" variant="hero" size="lg" className="w-full group">
                  Sign In
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>

                {/* Divider */}
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-border/50" />
                  </div>
                </div>

                {/* Sign Up Link */}
                <div className="text-center text-sm">
                  <span className="text-muted-foreground">Don't have an account? </span>
                  <Link to="/signup" className="text-primary hover:underline font-medium">
                    Sign up
                  </Link>
                </div>
              </form>
            </CardContent>
          </Card>
        ) : (
          <Card className="glass border-white/20 shadow-xl">
            <CardHeader className="text-center pb-4">
              <div className="bg-primary/10 p-3 rounded-full w-fit mx-auto mb-4">
                <MailCheck className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-xl font-semibold text-foreground">Check Your Email</h2>
              <p className="text-sm text-muted-foreground">
                We've sent a verification link to your email address
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Email Sent Notification */}
              {emailSent && (
                <Alert className="border-green-200 bg-green-50">
                  <MailCheck className="h-4 w-4 text-green-600" />
                  <AlertDescription className="text-green-800">
                    Verification email has been sent! Please check your inbox and spam folder.
                  </AlertDescription>
                </Alert>
              )}

              {/* Email Address Display */}
              <div className="text-center p-4 bg-muted/30 rounded-lg">
                <p className="text-sm text-muted-foreground mb-1">Email sent to:</p>
                <p className="font-medium text-foreground">{email}</p>
              </div>

              {/* Instructions */}
              <div className="text-sm text-muted-foreground space-y-2">
                <p>• Click the verification link in the email to continue</p>
                <p>• Check your spam folder if you don't see the email</p>
                <p>• The link will expire in 24 hours</p>
              </div>

              {/* Resend Email Button */}
              <Button 
                onClick={handleResendEmail}
                disabled={resendCountdown > 0 || isResending}
                variant="outline" 
                size="lg" 
                className="w-full"
              >
                {isResending ? (
                  <>
                    <Clock className="h-4 w-4 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : resendCountdown > 0 ? (
                  <>
                    <Clock className="h-4 w-4 mr-2" />
                    Resend in {resendCountdown}s
                  </>
                ) : (
                  <>
                    <Mail className="h-4 w-4 mr-2" />
                    Resend Email
                  </>
                )}
              </Button>

              {/* Back to Sign In */}
              <div className="text-center">
                <button 
                  type="button"
                  onClick={() => {
                    setNeedsEmailVerification(false);
                    setEmailSent(false);
                    setResendCountdown(0);
                  }}
                  className="text-sm text-primary hover:underline"
                >
                  ← Back to Sign In
                </button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Trust Indicators */}
        <div className="flex justify-center items-center gap-6 mt-8 text-primary-foreground/60 text-xs">
          <div className="flex items-center gap-1">
            <CheckCircle className="h-3 w-3" />
            <span>256-bit SSL</span>
          </div>
          <div className="flex items-center gap-1">
            <CheckCircle className="h-3 w-3" />
            <span>GDPR Compliant</span>
          </div>
          <div className="flex items-center gap-1">
            <CheckCircle className="h-3 w-3" />
            <span>SOC 2 Certified</span>
          </div>
        </div>
      </div>

      {/* Error Dialog */}
      <AlertDialog open={showErrorDialog} onOpenChange={setShowErrorDialog}>
        <AlertDialogContent className="max-w-md">
          <AlertDialogHeader>
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-destructive/10 p-2 rounded-full">
                <AlertTriangle className="h-5 w-5 text-destructive" />
              </div>
              <AlertDialogTitle className="text-lg font-semibold">
                Sign In Failed
              </AlertDialogTitle>
            </div>
            <AlertDialogDescription className="text-muted-foreground">
              {errorMessage}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="flex gap-2">
            <Button 
              variant="outline" 
              onClick={() => setShowErrorDialog(false)}
              className="flex-1"
            >
              Try Again
            </Button>
            <Link to="/contact" className="flex-1">
              <Button 
                variant="default" 
                className="w-full"
                onClick={() => setShowErrorDialog(false)}
              >
                Contact Support
              </Button>
            </Link>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

    </div>
  );
};

export default SignIn;
