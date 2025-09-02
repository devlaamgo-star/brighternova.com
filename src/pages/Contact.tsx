import { useState } from "react";
import PageLayout from "@/components/shared/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Link } from "react-router-dom";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  MessageCircle,
  Users,
  Shield,
  Headphones,
  ArrowRight,
  CheckCircle,
  AlertTriangle
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    subject: "",
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
    if (!formData.subject.trim()) errors.subject = "Subject is required";
    if (!formData.message.trim()) errors.message = "Message is required";
    
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
      // In production, this would submit to your contact API
      console.log("Contact form submitted:", formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setShowSuccessDialog(true);
      
      // Reset form after successful submission
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        subject: "",
        message: ""
      });
      
    } catch (error) {
      console.error("Submission error:", error);
      setFormErrors({ submit: "Failed to send message. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Get help with technical questions, billing, or general enquiries",
      contact: "hello@brighternova.com",
      href: "mailto:hello@brighternova.com",
      responseTime: "1-2 business days"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Available for Enterprise customers and urgent issues",
      contact: "+44 7418 639569",
      href: "tel:+447418639569",
      responseTime: "Business hours (GMT)"
    },
    {
      icon: Shield,
      title: "Security Issues",
      description: "Report security vulnerabilities or concerns",
      contact: "security@brighternova.com",
      href: "mailto:security@brighternova.com",
      responseTime: "Within 24 hours"
    }
  ];

  const supportTypes = [
    {
      icon: MessageCircle,
      title: "General Support",
      description: "Questions about features, setup, or using Novabuckups",
      examples: ["How to configure backups", "Troubleshooting issues", "Feature requests"]
    },
    {
      icon: Users,
      title: "Sales & Partnership",
      description: "Information about plans, enterprise pricing, or partnerships",
      examples: ["Enterprise pricing", "Volume discounts", "Partnership opportunities"]
    },
    {
      icon: Headphones,
      title: "Technical Support",
      description: "API questions, integration help, or technical issues",
      examples: ["API documentation", "Integration guides", "Technical troubleshooting"]
    }
  ];

  const companyInfo = {
    legalName: "BRIGHTER NOVA LTD",
    companyNumber: "16626529",
    address: {
      street: "2 Frederick Street, Kings Cross",
      city: "London",
      postcode: "WC1X 0ND",
      country: "United Kingdom"
    },
    businessHours: {
      weekdays: "9:00 AM - 6:00 PM GMT",
      weekend: "Emergency support only"
    }
  };

  return (
    <PageLayout 
      title="Contact Us - Get Support & Help"
      description="Contact BRIGHTER NOVA LTD for support, sales enquiries, or technical help. Based in London, UK with email and phone support available."
    >
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="glass mb-6">
              <MessageCircle className="h-4 w-4 mr-2" />
              Get Support
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
              We're here to help 
              <span className="block">when you need us</span>
            </h1>
            <p className="text-xl lg:text-2xl text-primary-foreground/80 text-balance mb-8 max-w-3xl mx-auto">
              Whether you need technical support, have billing questions, or want to 
              explore enterprise options, our team is ready to assist.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 text-primary-foreground/60 text-sm">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>1-2 day response time</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>London, United Kingdom</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                <span>Real humans, no bots</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              How to <span className="text-primary">reach us</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Choose the method that works best for you. We aim to respond to all 
              enquiries within our stated timeframes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20 bg-gradient-card">
                <CardHeader className="text-center">
                  <div className="bg-primary/10 p-4 rounded-xl group-hover:bg-primary/20 transition-colors w-fit mx-auto">
                    <method.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {method.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {method.description}
                  </p>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="mb-4">
                    <a 
                      href={method.href}
                      className="text-lg font-semibold text-primary hover:underline"
                    >
                      {method.contact}
                    </a>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    <Clock className="h-3 w-3 mr-1" />
                    {method.responseTime}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Company Info */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Send us a message</h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and we'll get back to you within 1-2 business days. 
                For urgent issues, please call or email directly.
              </p>

              <Card className="bg-background border-border/50">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input 
                          id="firstName" 
                          value={formData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          className={`mt-2 ${formErrors.firstName ? "border-red-500" : ""}`}
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
                          className={`mt-2 ${formErrors.lastName ? "border-red-500" : ""}`}
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
                        className={`mt-2 ${formErrors.email ? "border-red-500" : ""}`}
                        required 
                      />
                      {formErrors.email && (
                        <p className="text-sm text-red-500 mt-1 flex items-center gap-1">
                          <AlertTriangle className="h-3 w-3" />
                          {formErrors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="company">Company (Optional)</Label>
                      <Input 
                        id="company" 
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        className="mt-2" 
                      />
                    </div>

                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <Input 
                        id="subject" 
                        value={formData.subject}
                        onChange={(e) => handleInputChange('subject', e.target.value)}
                        className={`mt-2 ${formErrors.subject ? "border-red-500" : ""}`}
                        required 
                      />
                      {formErrors.subject && (
                        <p className="text-sm text-red-500 mt-1 flex items-center gap-1">
                          <AlertTriangle className="h-3 w-3" />
                          {formErrors.subject}
                        </p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea 
                        id="message" 
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        className={`mt-2 min-h-[120px] ${formErrors.message ? "border-red-500" : ""}`}
                        placeholder="Please describe your question or issue in detail..."
                        required
                      />
                      {formErrors.message && (
                        <p className="text-sm text-red-500 mt-1 flex items-center gap-1">
                          <AlertTriangle className="h-3 w-3" />
                          {formErrors.message}
                        </p>
                      )}
                    </div>

                    <Button type="submit" variant="hero" size="lg" className="w-full group" disabled={isSubmitting}>
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    
                    {formErrors.submit && (
                      <Alert>
                        <AlertTriangle className="h-4 w-4" />
                        <AlertDescription>{formErrors.submit}</AlertDescription>
                      </Alert>
                    )}

                    <p className="text-xs text-muted-foreground">
                      By submitting this form, you agree to our{" "}
                      <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>.
                      We'll only use your information to respond to your enquiry.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Company Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Company information</h2>
              
              <Card className="bg-background border-border/50 mb-8">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-4">Legal Details</h3>
                  <div className="space-y-3 text-muted-foreground">
                    <div>
                      <strong className="text-foreground">Company Name:</strong><br />
                      {companyInfo.legalName}
                    </div>
                    <div>
                      <strong className="text-foreground">Company Number:</strong><br />
                      {companyInfo.companyNumber}
                    </div>
                    <div>
                      <strong className="text-foreground">Registered Address:</strong><br />
                      {companyInfo.address.street}<br />
                      {companyInfo.address.city}, {companyInfo.address.postcode}<br />
                      {companyInfo.address.country}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-background border-border/50 mb-8">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
                  <div className="space-y-3 text-muted-foreground">
                    <div>
                      <strong className="text-foreground">Monday - Friday:</strong><br />
                      {companyInfo.businessHours.weekdays}
                    </div>
                    <div>
                      <strong className="text-foreground">Weekends:</strong><br />
                      {companyInfo.businessHours.weekend}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-background border-border/50">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-4">What can we help with?</h3>
                  <div className="space-y-4">
                    {supportTypes.map((type, index) => (
                      <div key={index}>
                        <div className="flex items-center gap-3 mb-2">
                          <type.icon className="h-5 w-5 text-primary" />
                          <strong className="text-foreground">{type.title}</strong>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{type.description}</p>
                        <div className="flex flex-wrap gap-1">
                          {type.examples.map((example, exampleIndex) => (
                            <Badge key={exampleIndex} variant="secondary" className="text-xs">
                              {example}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Need immediate help?</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button variant="outline" size="lg" asChild>
                <Link to="/documentation">
                  View Documentation
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/status">
                  Check Status Page
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/faq">
                  Browse FAQ
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Success Dialog */}
      <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <DialogTitle className="text-xl">Message Sent Successfully!</DialogTitle>
            </div>
            <DialogDescription className="text-left">
              Your message has been received and we'll contact you soon.
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-green-900 mb-2">What happens next?</h4>
              <ul className="text-sm text-green-800 space-y-1">
                <li>✓ Your message is now in our support queue</li>
                <li>✓ We'll review and assign it to the right team member</li>
                <li>✓ You'll receive a response within 1-2 business days</li>
                <li>✓ Check your email for our reply</li>
              </ul>
            </div>
            
            <div className="text-center space-y-3">
              <p className="text-sm text-muted-foreground">
                Reference ID: <code className="bg-muted px-2 py-1 rounded text-xs">MSG-{Date.now().toString().slice(-6)}</code>
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
                    window.location.href = '/';
                  }}
                  className="flex-1"
                >
                  Return Home
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </PageLayout>
  );
};

export default Contact;
