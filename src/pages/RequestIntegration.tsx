import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { 
  MessageSquare,
  User,
  Building,
  Mail,
  Phone,
  Globe,
  Database,
  Cloud,
  Server,
  Code,
  CheckCircle,
  ArrowRight,
  Zap,
  Users,
  Star,
  TrendingUp,
  Clock,
  Shield,
  Settings,
  AlertTriangle,
  X
} from "lucide-react";
import { Link } from "react-router-dom";

const RequestIntegration = () => {
  const [formData, setFormData] = useState({
    // Personal Info
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    jobTitle: "",
    phone: "",
    
    // Integration Details
    integrationType: "",
    serviceName: "",
    serviceUrl: "",
    priority: "",
    useCase: "",
    description: "",
    
    // Technical Info
    hasAPI: "",
    apiDocumentation: "",
    authMethod: "",
    estimatedUsers: "",
    
    // Additional Info
    timeline: "",
    budget: "",
    additionalInfo: "",
    
    // Preferences
    notifyUpdates: true,
    shareWithCommunity: false
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (formErrors[field]) {
      setFormErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    
    // Required field validation
    if (!formData.firstName.trim()) errors.firstName = "First name is required";
    if (!formData.lastName.trim()) errors.lastName = "Last name is required";
    if (!formData.email.trim()) errors.email = "Email address is required";
    if (!formData.company.trim()) errors.company = "Company name is required";
    if (!formData.integrationType) errors.integrationType = "Integration type is required";
    if (!formData.serviceName.trim()) errors.serviceName = "Service name is required";
    if (!formData.priority) errors.priority = "Priority level is required";
    if (!formData.useCase.trim()) errors.useCase = "Use case description is required";
    
    // Email validation
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }
    
    // URL validation if provided
    if (formData.serviceUrl && !/^https?:\/\/.+/.test(formData.serviceUrl)) {
      errors.serviceUrl = "Please enter a valid URL (including http:// or https://)";
    }
    
    if (formData.apiDocumentation && !/^https?:\/\/.+/.test(formData.apiDocumentation)) {
      errors.apiDocumentation = "Please enter a valid URL (including http:// or https://)";
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
      // In production, this would submit to your API
      console.log("Integration request submitted:", formData);
      
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
        integrationType: "",
        serviceName: "",
        serviceUrl: "",
        priority: "",
        useCase: "",
        description: "",
        hasAPI: "",
        apiDocumentation: "",
        authMethod: "",
        estimatedUsers: "",
        timeline: "",
        budget: "",
        additionalInfo: "",
        notifyUpdates: true,
        shareWithCommunity: false
      });
      
    } catch (error) {
      console.error("Submission error:", error);
      setFormErrors({ submit: "Failed to submit request. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const integrationTypes = [
    { value: "cloud", label: "Cloud Storage Provider", icon: Cloud },
    { value: "database", label: "Database System", icon: Database },
    { value: "storage", label: "Storage System", icon: Server },
    { value: "saas", label: "SaaS Platform", icon: Globe },
    { value: "api", label: "API Service", icon: Code },
    { value: "other", label: "Other", icon: MessageSquare }
  ];

  const priorityLevels = [
    { value: "low", label: "Low - Nice to have" },
    { value: "medium", label: "Medium - Would be helpful" },
    { value: "high", label: "High - Important for our workflow" },
    { value: "critical", label: "Critical - Blocking our adoption" }
  ];

  const authMethods = [
    "API Key",
    "OAuth 2.0",
    "JWT Token",
    "Basic Authentication",
    "Custom Headers",
    "Certificate-based",
    "No Authentication",
    "Unknown/Other"
  ];

  const timelineOptions = [
    "No specific timeline",
    "Within 1 month",
    "Within 3 months", 
    "Within 6 months",
    "Within 1 year",
    "Future consideration"
  ];

  const budgetRanges = [
    "No budget allocated",
    "Under $1,000",
    "$1,000 - $5,000",
    "$5,000 - $10,000",
    "$10,000 - $25,000",
    "$25,000+",
    "Prefer not to say"
  ];

  const popularRequests = [
    {
      name: "Notion API",
      category: "SaaS Platform",
      votes: 147,
      description: "Backup Notion workspaces and databases"
    },
    {
      name: "Supabase",
      category: "Database",
      votes: 89,
      description: "Native Supabase PostgreSQL backup integration"
    },
    {
      name: "Vercel",
      category: "Cloud Platform",
      votes: 76,
      description: "Backup Vercel deployments and environment variables"
    }
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
                <MessageSquare className="h-4 w-4 mr-2" />
                Integration Request
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Request Custom Integration
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Don't see the integration you need? Let us know what you'd like to connect with Novabuckups. 
                We prioritize integrations based on community demand and business impact.
              </p>
              
              <div className="flex flex-wrap justify-center items-center gap-8 mb-10">
                <div className="flex items-center gap-2 bg-secondary/50 px-4 py-2 rounded-full">
                  <Users className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Community Driven</span>
                </div>
                <div className="flex items-center gap-2 bg-secondary/50 px-4 py-2 rounded-full">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Prioritized by Demand</span>
                </div>
                <div className="flex items-center gap-2 bg-secondary/50 px-4 py-2 rounded-full">
                  <Zap className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Fast Development</span>
                </div>
              </div>
            </div>

            {/* Popular Requests */}
            <div className="max-w-4xl mx-auto mb-12">
              <h2 className="text-2xl font-bold text-center mb-8">Most Requested Integrations</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {popularRequests.map((request, index) => (
                  <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                    <CardContent className="pt-6">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="font-semibold group-hover:text-primary transition-colors">
                          {request.name}
                        </h3>
                        <div className="flex items-center gap-1 bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">
                          <Star className="h-3 w-3" />
                          {request.votes}
                        </div>
                      </div>
                      <Badge variant="outline" className="mb-3 text-xs">
                        {request.category}
                      </Badge>
                      <p className="text-sm text-muted-foreground mb-4">
                        {request.description}
                      </p>
                      <Button variant="outline" size="sm" className="w-full" asChild>
                        <Link to={`/vote/${request.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}>
                          Vote for this integration
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Request Form */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <User className="h-5 w-5" />
                      Personal Information
                    </CardTitle>
                    <CardDescription>
                      Tell us about yourself so we can follow up on your request
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Integration Details */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Code className="h-5 w-5" />
                      Integration Details
                    </CardTitle>
                    <CardDescription>
                      Describe the service or system you'd like to integrate
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="integrationType">Integration Type *</Label>
                      <Select onValueChange={(value) => handleInputChange('integrationType', value)} required>
                        <SelectTrigger className={formErrors.integrationType ? "border-red-500" : ""}>
                          <SelectValue placeholder="Select integration type" />
                        </SelectTrigger>
                        <SelectContent>
                          {integrationTypes.map((type) => (
                            <SelectItem key={type.value} value={type.value}>
                              <div className="flex items-center gap-2">
                                <type.icon className="h-4 w-4" />
                                {type.label}
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {formErrors.integrationType && (
                        <p className="text-sm text-red-500 mt-1 flex items-center gap-1">
                          <AlertTriangle className="h-3 w-3" />
                          {formErrors.integrationType}
                        </p>
                      )}
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="serviceName">Service Name *</Label>
                        <Input
                          id="serviceName"
                          value={formData.serviceName}
                          onChange={(e) => handleInputChange('serviceName', e.target.value)}
                          placeholder="e.g., Notion, Slack, Custom API"
                          className={formErrors.serviceName ? "border-red-500" : ""}
                          required
                        />
                        {formErrors.serviceName && (
                          <p className="text-sm text-red-500 mt-1 flex items-center gap-1">
                            <AlertTriangle className="h-3 w-3" />
                            {formErrors.serviceName}
                          </p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="serviceUrl">Service URL</Label>
                        <Input
                          id="serviceUrl"
                          value={formData.serviceUrl}
                          onChange={(e) => handleInputChange('serviceUrl', e.target.value)}
                          placeholder="https://example.com"
                          className={formErrors.serviceUrl ? "border-red-500" : ""}
                        />
                        {formErrors.serviceUrl && (
                          <p className="text-sm text-red-500 mt-1 flex items-center gap-1">
                            <AlertTriangle className="h-3 w-3" />
                            {formErrors.serviceUrl}
                          </p>
                        )}
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="priority">Priority Level *</Label>
                      <Select onValueChange={(value) => handleInputChange('priority', value)} required>
                        <SelectTrigger className={formErrors.priority ? "border-red-500" : ""}>
                          <SelectValue placeholder="How important is this integration?" />
                        </SelectTrigger>
                        <SelectContent>
                          {priorityLevels.map((level) => (
                            <SelectItem key={level.value} value={level.value}>
                              {level.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {formErrors.priority && (
                        <p className="text-sm text-red-500 mt-1 flex items-center gap-1">
                          <AlertTriangle className="h-3 w-3" />
                          {formErrors.priority}
                        </p>
                      )}
                    </div>
                    
                    <div>
                      <Label htmlFor="useCase">Use Case *</Label>
                      <Textarea
                        id="useCase"
                        value={formData.useCase}
                        onChange={(e) => handleInputChange('useCase', e.target.value)}
                        placeholder="Describe how you would use this integration and what data you need to backup..."
                        rows={3}
                        className={formErrors.useCase ? "border-red-500" : ""}
                        required
                      />
                      {formErrors.useCase && (
                        <p className="text-sm text-red-500 mt-1 flex items-center gap-1">
                          <AlertTriangle className="h-3 w-3" />
                          {formErrors.useCase}
                        </p>
                      )}
                    </div>
                    
                    <div>
                      <Label htmlFor="description">Additional Description</Label>
                      <Textarea
                        id="description"
                        value={formData.description}
                        onChange={(e) => handleInputChange('description', e.target.value)}
                        placeholder="Any additional context, specific features, or requirements..."
                        rows={3}
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Technical Information */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Settings className="h-5 w-5" />
                      Technical Information
                    </CardTitle>
                    <CardDescription>
                      Help us understand the technical aspects (optional but helpful)
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="hasAPI">Does this service have a public API?</Label>
                      <Select onValueChange={(value) => handleInputChange('hasAPI', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select option" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="yes">Yes, it has a public API</SelectItem>
                          <SelectItem value="no">No public API available</SelectItem>
                          <SelectItem value="unknown">Not sure</SelectItem>
                          <SelectItem value="private">Has API but requires special access</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="apiDocumentation">API Documentation URL</Label>
                      <Input
                        id="apiDocumentation"
                        value={formData.apiDocumentation}
                        onChange={(e) => handleInputChange('apiDocumentation', e.target.value)}
                        placeholder="https://docs.example.com/api"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="authMethod">Authentication Method (if known)</Label>
                      <Select onValueChange={(value) => handleInputChange('authMethod', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select authentication method" />
                        </SelectTrigger>
                        <SelectContent>
                          {authMethods.map((method) => (
                            <SelectItem key={method} value={method.toLowerCase().replace(/[^a-z0-9]/g, '')}>
                              {method}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="estimatedUsers">Estimated number of users who would benefit</Label>
                      <Select onValueChange={(value) => handleInputChange('estimatedUsers', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-10">1-10 users</SelectItem>
                          <SelectItem value="11-50">11-50 users</SelectItem>
                          <SelectItem value="51-100">51-100 users</SelectItem>
                          <SelectItem value="101-500">101-500 users</SelectItem>
                          <SelectItem value="500+">500+ users</SelectItem>
                          <SelectItem value="unknown">Not sure</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                </Card>

                {/* Project Information */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="h-5 w-5" />
                      Project Information
                    </CardTitle>
                    <CardDescription>
                      Help us prioritize and plan development
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="timeline">Desired Timeline</Label>
                      <Select onValueChange={(value) => handleInputChange('timeline', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="When do you need this integration?" />
                        </SelectTrigger>
                        <SelectContent>
                          {timelineOptions.map((option) => (
                            <SelectItem key={option} value={option.toLowerCase().replace(/[^a-z0-9]/g, '')}>
                              {option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="budget">Development Budget (optional)</Label>
                      <Select onValueChange={(value) => handleInputChange('budget', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Any budget allocated for this integration?" />
                        </SelectTrigger>
                        <SelectContent>
                          {budgetRanges.map((range) => (
                            <SelectItem key={range} value={range.toLowerCase().replace(/[^a-z0-9]/g, '')}>
                              {range}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="additionalInfo">Additional Information</Label>
                      <Textarea
                        id="additionalInfo"
                        value={formData.additionalInfo}
                        onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
                        placeholder="Any other relevant information, constraints, or specific requirements..."
                        rows={3}
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Preferences */}
                <Card>
                  <CardHeader>
                    <CardTitle>Preferences</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="notifyUpdates"
                        checked={formData.notifyUpdates}
                        onCheckedChange={(checked) => handleInputChange('notifyUpdates', checked as boolean)}
                      />
                      <Label htmlFor="notifyUpdates" className="text-sm">
                        Notify me about progress updates on this integration
                      </Label>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="shareWithCommunity"
                        checked={formData.shareWithCommunity}
                        onCheckedChange={(checked) => handleInputChange('shareWithCommunity', checked as boolean)}
                      />
                      <Label htmlFor="shareWithCommunity" className="text-sm">
                        Allow others to vote and comment on this integration request
                      </Label>
                    </div>
                  </CardContent>
                </Card>

                {/* Submit */}
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <h3 className="text-lg font-semibold mb-2">Ready to submit your request?</h3>
                      <p className="text-muted-foreground mb-6">
                        Our team will review your request and get back to you within 2 business days.
                      </p>
                      
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button type="submit" size="lg" className="group" disabled={isSubmitting}>
                          <MessageSquare className="h-4 w-4 mr-2" />
                          {isSubmitting ? 'Submitting...' : 'Submit Integration Request'}
                          <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button type="button" variant="outline" size="lg" asChild>
                          <Link to="/api-docs">
                            View API Documentation
                          </Link>
                        </Button>
                      </div>
                      
                      {formErrors.submit && (
                        <Alert className="mt-4">
                          <AlertTriangle className="h-4 w-4" />
                          <AlertDescription>{formErrors.submit}</AlertDescription>
                        </Alert>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </form>
            </div>
          </div>
        </section>

        {/* Support Section */}
        <section className="py-16 lg:py-24 bg-secondary/5">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Need Help?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Have questions about integrations or need technical assistance? Our team is here to help.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/technical-support">
                    Technical Support
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/schedule-demo">
                    Schedule Consultation
                  </Link>
                </Button>
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
              <DialogTitle className="text-xl">Request Submitted Successfully!</DialogTitle>
            </div>
            <DialogDescription className="text-left">
              Your integration request has been created and submitted to our development team.
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-green-900 mb-2">What happens next?</h4>
              <ul className="text-sm text-green-800 space-y-1">
                <li>✓ Your request will be reviewed by our technical team</li>
                <li>✓ We'll assess feasibility and community demand</li>
                <li>✓ You'll receive an email update within 2 business days</li>
                <li>✓ If approved, development will begin based on priority</li>
              </ul>
            </div>
            
            <div className="text-center space-y-3">
              <p className="text-sm text-muted-foreground">
                Request ID: <code className="bg-muted px-2 py-1 rounded text-xs">REQ-{Date.now().toString().slice(-6)}</code>
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
                    window.location.href = '/integrations';
                  }}
                  className="flex-1"
                >
                  View Integrations
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default RequestIntegration;
