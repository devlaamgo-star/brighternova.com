import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  Shield, 
  Mail, 
  ArrowRight,
  CheckCircle,
  ArrowLeft,
  Key,
  Clock,
  X
} from "lucide-react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [resendCooldown, setResendCooldown] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Password reset requested for:", email);
    setIsSubmitted(true);
  };

  const handleResend = () => {
    console.log("Resending password reset for:", email);
    
    // Start 30-second cooldown
    setResendCooldown(30);
    
    // Show popup notification
    setShowPopup(true);
    
    // Auto-hide popup after 5 seconds
    setTimeout(() => {
      setShowPopup(false);
    }, 5000);
  };

  // Countdown timer effect
  useEffect(() => {
    if (resendCooldown > 0) {
      const timer = setTimeout(() => {
        setResendCooldown(resendCooldown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [resendCooldown]);

  // Popup component
  const EmailSentPopup = () => {
    if (!showPopup) return null;

    return (
      <div className="fixed top-4 right-4 z-50 animate-in slide-in-from-top-2">
        <Alert className="w-80 bg-green-50 border-green-200 text-green-800 shadow-lg">
          <CheckCircle className="h-4 w-4 text-green-600" />
          <AlertDescription className="flex justify-between items-center">
            <span>Your email has been sent, check your inbox</span>
            <Button
              variant="ghost"
              size="sm"
              className="h-4 w-4 p-0 hover:bg-green-100"
              onClick={() => setShowPopup(false)}
            >
              <X className="h-3 w-3" />
            </Button>
          </AlertDescription>
        </Alert>
      </div>
    );
  };

  if (isSubmitted) {
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
              <Mail className="h-4 w-4 mr-2" />
              Email Sent
            </Badge>
            
            <h1 className="text-3xl font-bold text-primary-foreground mb-2">
              Check your email
            </h1>
            <p className="text-primary-foreground/80">
              We've sent password reset instructions to your email
            </p>
          </div>

          {/* Success Card */}
          <Card className="glass border-white/20 shadow-xl">
            <CardContent className="p-8 text-center">
              <div className="bg-accent/20 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <CheckCircle className="h-8 w-8 text-accent" />
              </div>
              
              <h2 className="text-xl font-semibold mb-4">Reset link sent!</h2>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We've sent a password reset link to{" "}
                <span className="font-medium text-foreground">{email}</span>.
                Click the link in the email to reset your password.
              </p>

              <div className="bg-muted/50 rounded-lg p-4 mb-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Clock className="h-4 w-4" />
                  <span>Didn't receive the email?</span>
                </div>
                <ul className="text-xs text-muted-foreground space-y-1 text-left">
                  <li>• Check your spam or junk folder</li>
                  <li>• Make sure {email} is correct</li>
                  <li>• The link expires in 1 hour</li>
                </ul>
              </div>

              <div className="space-y-3">
                <Button
                  onClick={handleResend}
                  variant="outline"
                  size="lg"
                  className="w-full"
                  disabled={resendCooldown > 0}
                >
                  {resendCooldown > 0 ? (
                    <span className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      Resend in {resendCooldown}s
                    </span>
                  ) : (
                    "Resend Email"
                  )}
                </Button>
                
                <Button
                  variant="hero"
                  size="lg"
                  className="w-full group"
                  asChild
                >
                  <Link to="/signin">
                    Back to Sign In
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Support */}
          <div className="text-center mt-8">
            <p className="text-primary-foreground/60 text-sm">
              Still having trouble?{" "}
              <Link to="/contact" className="text-primary-foreground hover:underline">
                Contact support
              </Link>
            </p>
          </div>
        </div>

        {/* Email Sent Popup */}
        <EmailSentPopup />
      </div>
    );
  }

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
            <Key className="h-4 w-4 mr-2" />
            Reset Password
          </Badge>
          
          <h1 className="text-3xl font-bold text-primary-foreground mb-2">
            Forgot your password?
          </h1>
          <p className="text-primary-foreground/80">
            No worries! Enter your email and we'll send you reset instructions
          </p>
        </div>

        {/* Forgot Password Form */}
        <Card className="glass border-white/20 shadow-xl">
          <CardHeader className="text-center pb-4">
            <h2 className="text-xl font-semibold text-foreground">Reset Password</h2>
            <p className="text-sm text-muted-foreground">
              Enter the email address associated with your account
            </p>
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
                <p className="text-xs text-muted-foreground">
                  We'll send reset instructions to this email address
                </p>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full group"
              >
                Send Reset Instructions
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>

              {/* Back to Sign In */}
              <div className="text-center">
                <Link
                  to="/signin"
                  className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to Sign In
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Security Info */}
        <div className="mt-8 p-4 glass border-white/20 rounded-lg">
          <h3 className="text-sm font-medium text-primary-foreground mb-2">Security Notice</h3>
          <ul className="text-xs text-primary-foreground/70 space-y-1">
            <li>• Reset links expire after 1 hour</li>
            <li>• Only the most recent reset link will work</li>
            <li>• Check your spam folder if you don't see the email</li>
          </ul>
        </div>

        {/* Trust Indicators */}
        <div className="flex justify-center items-center gap-6 mt-8 text-primary-foreground/60 text-xs">
          <div className="flex items-center gap-1">
            <CheckCircle className="h-3 w-3" />
            <span>Secure Reset</span>
          </div>
          <div className="flex items-center gap-1">
            <CheckCircle className="h-3 w-3" />
            <span>1-Hour Expiry</span>
          </div>
          <div className="flex items-center gap-1">
            <CheckCircle className="h-3 w-3" />
            <span>Email Verification</span>
          </div>
        </div>
      </div>

      {/* Email Sent Popup */}
      <EmailSentPopup />
    </div>
  );
};

export default ForgotPassword;
