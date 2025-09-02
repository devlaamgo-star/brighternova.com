import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { 
  Phone,
  Mail,
  User,
  Building,
  Users,
  CheckCircle,
  ArrowRight,
  Shield,
  Zap,
  Globe,
  Star,
  Clock,
  AlertTriangle,
  MessageSquare
} from "lucide-react";
import { Link } from "react-router-dom";

const ContactSales = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    jobTitle: "",
    phone: "",
    employees: "",
    currentSolution: "",
    dataSize: "",
    requirements: "",
    budget: "",
    timeline: "",
    message: ""
  });
  
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (formErrors[field]) {
      setFormErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    
    if (!formData.firstName.trim()) errors.firstName = "First name is required";
    if (!formData.lastName.trim()) errors.lastName = "Last name is required";
    if (!formData.email.trim()) errors.email = "Email address is required";
    if (!formData.company.trim()) errors.company = "Company name is required";
    if (!formData.employees) errors.employees = "Company size is required";
    if (!formData.requirements.trim()) errors.requirements = "Requirements description is required";
    
    // Email validation
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }

    return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setIsSubmitting(false);
      return;
    }

    try {
      // In production, this would submit to your sales API
      console.log("Sales contact submitted:", formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setShowSuccessDialog(true);
      
      // Reset form after successful submission
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        jobTitle: "",
        phone: "",
        employees: "",
        currentSolution: "",
        dataSize: "",
        requirements: "",
        budget: "",
        timeline: "",
        message: ""
      });
      
    } catch (error) {
      console.error("Submission error:", error);
      setFormErrors({ submit: "Failed to submit request. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const companySizes = [
    "1-10 employees",
    "11-50 employees",
    "51-200 employees", 
    "201-500 employees",
    "501-1000 employees",
    "1000+ employees"
  ];

  const budgetRanges = [
    "Under £10,000/year",
    "£10,000 - £25,000/year",
    "£25,000 - £50,000/year",
    "£50,000 - £100,000/year",
    "£100,000+/year",
    "Budget not determined"
  ];

  const timelineOptions = [
    "ASAP - Immediate need",
    "Within 1 month",
    "Within 3 months",
    "Within 6 months",
    "Planning for next year",
    "Just exploring options"
  ];

  const enterpriseFeatures = [
    "Dedicated account manager",
    "Custom SLA agreements", 
    "On-premise deployment options",
    "Custom integrations",
    "Advanced security features",
    "Priority support and training",
    "Custom contract terms",
    "Volume pricing discounts"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-16 lg:py-24 bg-gradient-to-br from-background to-secondary/5">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-4xl mx-auto mb-12">
              <Badge variant="secondary" className="mb-4">
                <Phone className="h-4 w-4 mr-2" />
                Enterprise Sales
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Contact Our Sales Team
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Ready to protect your enterprise data with Novabuckups? Our sales team will work with you to create 
                a custom solution that meets your specific needs and requirements.
              </p>
              
              <div className="flex flex-wrap justify-center items-center gap-8 mb-10">
                <div className="flex items-center gap-2 bg-secondary/50 px-4 py-2 rounded-full">
                  <Users className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Enterprise Solutions</span>
                </div>
                <div className="flex items-center gap-2 bg-secondary/50 px-4 py-2 rounded-full">
                  <Shield className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Custom Security</span>
                </div>
                <div className="flex items-center gap-2 bg-secondary/50 px-4 py-2 rounded-full">
                  <Zap className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Dedicated Support</span>
                </div>
              </div>
            </div>

            {/* Contact Options */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
              <Card className="text-center border-primary/20">
                <CardContent className="pt-6">
                  <Phone className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold mb-2">Call Us</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Speak directly with our enterprise sales team
                  </p>
                  <p className="font-medium">+44 7418 639569</p>
                  <p className="text-xs text-muted-foreground">Mon-Fri, 9 AM - 6 PM GMT</p>
                </CardContent>
              </Card>

              <Card className="text-center border-primary/20">
                <CardContent className="pt-6">
                  <Mail className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold mb-2">Email Us</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Send us your requirements for a detailed proposal
                  </p>
                  <p className="font-medium">sales@novabuckups.com</p>
                  <p className="text-xs text-muted-foreground">Response within 4 hours</p>
                </CardContent>
              </Card>

              <Card className="text-center border-primary/20">
                <CardContent className="pt-6">
                  <MessageSquare className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold mb-2">Live Demo</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Schedule a personalized demonstration
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/schedule-demo">
                      Schedule Demo
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                
                {/* Left Column - Form */}
                <div>
                  <h2 className="text-3xl font-bold mb-6">Get a Custom Quote</h2>
                  <p className="text-muted-foreground mb-8">
                    Tell us about your requirements and we'll prepare a custom proposal 
                    with enterprise features and volume pricing.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Contact Information</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="firstName">First Name *</Label>
                            <Input
                              id="firstName"
                              value={formData.firstName}
                              onChange={(e) => handleInputChange('firstName', e.target.value)}
                              placeholder="John"
                              className={formErrors.firstName ? "border-red-500" : ""}
                              required
                            />
                            {formErrors.firstName && (
                              <p className="text-sm text-red-500 mt-1 flex items-center gap-1">
                                <AlertTriangle className="h-3 w-3" />
                                {formErrors.firstName}
                              </p>
                            )}
                          </div>
                          <div>
                            <Label htmlFor="lastName">Last Name *</Label>
                            <Input
                              id="lastName"
                              value={formData.lastName}
                              onChange={(e) => handleInputChange('lastName', e.target.value)}
                              placeholder="Doe"
                              className={formErrors.lastName ? "border-red-500" : ""}
                              required
                            />
                            {formErrors.lastName && (
                              <p className="text-sm text-red-500 mt-1 flex items-center gap-1">
                                <AlertTriangle className="h-3 w-3" />
                                {formErrors.lastName}
                              </p>
                            )}
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            placeholder="john@company.com"
                            className={formErrors.email ? "border-red-500" : ""}
                            required
                          />
                          {formErrors.email && (
                            <p className="text-sm text-red-500 mt-1 flex items-center gap-1">
                              <AlertTriangle className="h-3 w-3" />
                              {formErrors.email}
                            </p>
                          )}
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="company">Company *</Label>
                            <Input
                              id="company"
                              value={formData.company}
                              onChange={(e) => handleInputChange('company', e.target.value)}
                              placeholder="Acme Corp"
                              className={formErrors.company ? "border-red-500" : ""}
                              required
                            />
                            {formErrors.company && (
                              <p className="text-sm text-red-500 mt-1 flex items-center gap-1">
                                <AlertTriangle className="h-3 w-3" />
                                {formErrors.company}
                              </p>
                            )}
                          </div>
                          <div>
                            <Label htmlFor="jobTitle">Job Title</Label>
                            <Input
                              id="jobTitle"
                              value={formData.jobTitle}
                              onChange={(e) => handleInputChange('jobTitle', e.target.value)}
                              placeholder="CTO"
                            />
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            placeholder="+44 20 1234 5678"
                          />
                        </div>
                      </CardContent>
                    </Card>

                    {/* Company Information */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Company Information</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <Label htmlFor="employees">Company Size *</Label>
                          <Select onValueChange={(value) => handleInputChange('employees', value)} required>
                            <SelectTrigger className={formErrors.employees ? "border-red-500" : ""}>
                              <SelectValue placeholder="Select company size" />
                            </SelectTrigger>
                            <SelectContent>
                              {companySizes.map((size) => (
                                <SelectItem key={size} value={size}>{size}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          {formErrors.employees && (
                            <p className="text-sm text-red-500 mt-1 flex items-center gap-1">
                              <AlertTriangle className="h-3 w-3" />
                              {formErrors.employees}
                            </p>
                          )}
                        </div>

                        <div>
                          <Label htmlFor="currentSolution">Current Backup Solution</Label>
                          <Input
                            id="currentSolution"
                            value={formData.currentSolution}
                            onChange={(e) => handleInputChange('currentSolution', e.target.value)}
                            placeholder="e.g., AWS Backup, Veeam, Manual scripts"
                          />
                        </div>

                        <div>
                          <Label htmlFor="dataSize">Approximate Data Size</Label>
                          <Select onValueChange={(value) => handleInputChange('dataSize', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select data size" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="under-100gb">Under 100GB</SelectItem>
                              <SelectItem value="100gb-1tb">100GB - 1TB</SelectItem>
                              <SelectItem value="1tb-10tb">1TB - 10TB</SelectItem>
                              <SelectItem value="10tb-100tb">10TB - 100TB</SelectItem>
                              <SelectItem value="over-100tb">Over 100TB</SelectItem>
                              <SelectItem value="unknown">Not sure</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <Label htmlFor="requirements">Requirements & Use Case *</Label>
                          <Textarea
                            id="requirements"
                            value={formData.requirements}
                            onChange={(e) => handleInputChange('requirements', e.target.value)}
                            placeholder="Describe your backup requirements, compliance needs, integrations needed, etc..."
                            rows={4}
                            className={formErrors.requirements ? "border-red-500" : ""}
                            required
                          />
                          {formErrors.requirements && (
                            <p className="text-sm text-red-500 mt-1 flex items-center gap-1">
                              <AlertTriangle className="h-3 w-3" />
                              {formErrors.requirements}
                            </p>
                          )}
                        </div>
                      </CardContent>
                    </Card>

                    {/* Project Information */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Project Details</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <Label htmlFor="budget">Budget Range</Label>
                          <Select onValueChange={(value) => handleInputChange('budget', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select budget range" />
                            </SelectTrigger>
                            <SelectContent>
                              {budgetRanges.map((range) => (
                                <SelectItem key={range} value={range}>{range}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <Label htmlFor="timeline">Implementation Timeline</Label>
                          <Select onValueChange={(value) => handleInputChange('timeline', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="When do you need this?" />
                            </SelectTrigger>
                            <SelectContent>
                              {timelineOptions.map((option) => (
                                <SelectItem key={option} value={option}>{option}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <Label htmlFor="message">Additional Information</Label>
                          <Textarea
                            id="message"
                            value={formData.message}
                            onChange={(e) => handleInputChange('message', e.target.value)}
                            placeholder="Any specific questions, compliance requirements, or additional context..."
                            rows={3}
                          />
                        </div>
                      </CardContent>
                    </Card>

                    {/* Submit Button */}
                    <Card>
                      <CardContent className="pt-6">
                        <div className="text-center">
                          <Button type="submit" size="lg" className="group" disabled={isSubmitting}>
                            <Phone className="h-4 w-4 mr-2" />
                            {isSubmitting ? 'Submitting...' : 'Contact Sales Team'}
                            <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                          </Button>
                          
                          {formErrors.submit && (
                            <Alert className="mt-4">
                              <AlertTriangle className="h-4 w-4" />
                              <AlertDescription>{formErrors.submit}</AlertDescription>
                            </Alert>
                          )}

                          <p className="text-xs text-muted-foreground mt-4">
                            Our sales team will contact you within 4 hours (business days)
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </form>
                </div>

                {/* Right Column - Info */}
                <div className="space-y-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>Enterprise Features</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {enterpriseFeatures.map((feature, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Why Choose Enterprise?</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-sm mb-2">Tailored Solutions</h4>
                        <p className="text-sm text-muted-foreground">
                          Custom integrations, deployment options, and feature development to match your exact requirements.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-2">Enterprise Support</h4>
                        <p className="text-sm text-muted-foreground">
                          24/7 phone support, dedicated account manager, and priority response times with SLA guarantees.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-2">Security & Compliance</h4>
                        <p className="text-sm text-muted-foreground">
                          Advanced security features, compliance certifications, and audit support for regulated industries.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Trusted by Enterprise</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4 text-center">
                          <div>
                            <div className="text-2xl font-bold text-primary">99.99%</div>
                            <div className="text-xs text-muted-foreground">Uptime SLA</div>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-primary">24/7</div>
                            <div className="text-xs text-muted-foreground">Support</div>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-primary">SOC 2</div>
                            <div className="text-xs text-muted-foreground">Compliant</div>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-primary">GDPR</div>
                            <div className="text-xs text-muted-foreground">Ready</div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Success Dialog */}
      <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <DialogTitle className="text-xl">Request Sent Successfully!</DialogTitle>
            </div>
            <DialogDescription className="text-left">
              Your enterprise sales inquiry has been submitted to our team.
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-green-900 mb-2">What happens next?</h4>
              <ul className="text-sm text-green-800 space-y-1">
                <li>✓ Our sales team will review your requirements</li>
                <li>✓ We'll prepare a custom proposal within 24 hours</li>
                <li>✓ A dedicated account manager will contact you</li>
                <li>✓ We'll schedule a demo tailored to your needs</li>
              </ul>
            </div>
            
            <div className="text-center space-y-3">
              <p className="text-sm text-muted-foreground">
                Reference ID: <code className="bg-muted px-2 py-1 rounded text-xs">SALES-{Date.now().toString().slice(-6)}</code>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  onClick={() => setShowSuccessDialog(false)}
                  className="flex-1"
                >
                  Continue Browsing
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setShowSuccessDialog(false);
                    window.location.href = '/pricing';
                  }}
                  className="flex-1"
                >
                  View Pricing
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ContactSales;
