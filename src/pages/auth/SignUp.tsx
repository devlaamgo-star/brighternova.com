import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { AlertDialog, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Shield, Mail, Lock, Eye, EyeOff, ArrowRight, CheckCircle, User, Building, Github, AlertTriangle } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
const SignUp = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showErrorDialog, setShowErrorDialog] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
    subscribeToUpdates: true
  });
  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Complete form validation - all fields required except company
    if (!formData.firstName.trim()) {
      setErrorMessage("First name is required.");
      setShowErrorDialog(true);
      return;
    }
    
    if (!formData.lastName.trim()) {
      setErrorMessage("Last name is required.");
      setShowErrorDialog(true);
      return;
    }
    
    if (!formData.email.trim()) {
      setErrorMessage("Email address is required.");
      setShowErrorDialog(true);
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage("Please enter a valid email address.");
      setShowErrorDialog(true);
      return;
    }
    
    if (!formData.password) {
      setErrorMessage("Password is required.");
      setShowErrorDialog(true);
      return;
    }
    
    if (formData.password.length < 8) {
      setErrorMessage("Password must be at least 8 characters long.");
      setShowErrorDialog(true);
      return;
    }
    
    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("Passwords do not match. Please try again.");
      setShowErrorDialog(true);
      return;
    }
    
    if (!formData.agreeToTerms) {
      setErrorMessage("You must agree to the Terms of Service and Privacy Policy.");
      setShowErrorDialog(true);
      return;
    }
    
    // Simulate various authentication errors that might occur
    const emailDomain = formData.email.split('@')[1];
    
    if (formData.email === "test@blocked.com") {
      setErrorMessage("Your email address is incorrect or your account is not active. Please contact support for assistance.");
      setShowErrorDialog(true);
      return;
    }
    
    if (emailDomain === "tempmail.com" || emailDomain === "10minutemail.com") {
      setErrorMessage("Temporary email addresses are not allowed. Please use a valid email address.");
      setShowErrorDialog(true);
      return;
    }
    
    if (formData.email.includes("admin") || formData.email.includes("root")) {
      setErrorMessage("Your account could not be created. Please contact support for assistance.");
      setShowErrorDialog(true);
      return;
    }
    
    console.log("Sign up successful:", formData);
    
    // Store user data in localStorage for access by subscription pages
    localStorage.setItem('signupUserData', JSON.stringify(formData));
    
    // Redirect to verification page (5 second delay page)
    navigate('/signup-verification');
  };
  return <div className="min-h-screen bg-gradient-hero flex items-center justify-center py-12 px-4 relative">
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
        <div className="text-center mb-8 animate-fade-in">
          
          
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
            <User className="h-4 w-4 text-primary-foreground" />
            <span className="text-sm font-medium text-primary-foreground">Join Our Community</span>
          </div>
          
          <h1 className="text-4xl font-bold text-primary-foreground mb-3 leading-tight">
            Welcome to Novabuckups
          </h1>
          <p className="text-lg text-primary-foreground/70 max-w-md mx-auto">
            Secure, automated backups for your most important data. Get started with your free account today.
          </p>
        </div>

        {/* Sign Up Form */}
        <Card className="glass border-white/20 shadow-xl">
          <CardHeader className="text-center pb-4">
            <h2 className="text-xl font-semibold text-foreground">Sign Up</h2>
            <p className="text-sm text-muted-foreground">
              Join thousands of developers protecting their data
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Fields */}
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-sm font-medium">
                    First Name
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input id="firstName" type="text" placeholder="John" value={formData.firstName} onChange={e => handleInputChange("firstName", e.target.value)} className="pl-10 bg-background/50 border-border/50 focus:bg-background focus:border-primary" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-sm font-medium">
                    Last Name
                  </Label>
                  <Input id="lastName" type="text" placeholder="Doe" value={formData.lastName} onChange={e => handleInputChange("lastName", e.target.value)} className="bg-background/50 border-border/50 focus:bg-background focus:border-primary" required />
                </div>
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">
                  Email Address
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input id="email" type="email" placeholder="john@company.com" value={formData.email} onChange={e => handleInputChange("email", e.target.value)} className="pl-10 bg-background/50 border-border/50 focus:bg-background focus:border-primary" required />
                </div>
              </div>

              {/* Company Field */}
              <div className="space-y-2">
                <Label htmlFor="company" className="text-sm font-medium">
                  Company <span className="text-muted-foreground">(Optional)</span>
                </Label>
                <div className="relative">
                  <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input id="company" type="text" placeholder="Acme Inc." value={formData.company} onChange={e => handleInputChange("company", e.target.value)} className="pl-10 bg-background/50 border-border/50 focus:bg-background focus:border-primary" />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium">
                  Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input id="password" type={showPassword ? "text" : "password"} placeholder="Create a strong password" value={formData.password} onChange={e => handleInputChange("password", e.target.value)} className="pl-10 pr-10 bg-background/50 border-border/50 focus:bg-background focus:border-primary" required />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground">
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              {/* Confirm Password Field */}
              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-sm font-medium">
                  Confirm Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input id="confirmPassword" type={showConfirmPassword ? "text" : "password"} placeholder="Confirm your password" value={formData.confirmPassword} onChange={e => handleInputChange("confirmPassword", e.target.value)} className="pl-10 pr-10 bg-background/50 border-border/50 focus:bg-background focus:border-primary" required />
                  <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground">
                    {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              {/* Terms and Updates */}
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <Checkbox id="terms" checked={formData.agreeToTerms} onCheckedChange={checked => handleInputChange("agreeToTerms", checked as boolean)} className="mt-0.5" />
                  <Label htmlFor="terms" className="text-sm text-muted-foreground leading-relaxed">
                    I agree to the{" "}
                    <Link to="/terms" className="text-primary hover:underline">
                      Terms of Service
                    </Link>
                    {" "}and{" "}
                    <Link to="/privacy" className="text-primary hover:underline">
                      Privacy Policy
                    </Link>
                  </Label>
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox id="updates" checked={formData.subscribeToUpdates} onCheckedChange={checked => handleInputChange("subscribeToUpdates", checked as boolean)} className="mt-0.5" />
                  <Label htmlFor="updates" className="text-sm text-muted-foreground">
                    Send me product updates and backup tips
                  </Label>
                </div>
              </div>

              {/* Submit Button */}
              <Button type="submit" variant="hero" size="lg" className="w-full group" disabled={!formData.agreeToTerms}>
                Create Account
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>


              {/* Sign In Link */}
              <div className="text-center text-sm">
                <span className="text-muted-foreground">Already have an account? </span>
                <Link to="/signin" className="text-primary hover:underline font-medium">
                  Sign in
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Trust Indicators */}
        <div className="flex justify-center items-center gap-6 mt-8 text-primary-foreground/60 text-xs">
          <div className="flex items-center gap-1">
            <CheckCircle className="h-3 w-3" />
            <span>Free 14-day trial</span>
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

      {/* Error Dialog */}
      <AlertDialog open={showErrorDialog} onOpenChange={setShowErrorDialog}>
        <AlertDialogContent className="max-w-md">
          <AlertDialogHeader>
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-destructive/10 p-2 rounded-full">
                <AlertTriangle className="h-5 w-5 text-destructive" />
              </div>
              <AlertDialogTitle className="text-lg font-semibold">
                Sign Up Failed
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
    </div>;
};
export default SignUp;
