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
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { 
  Calendar,
  Clock,
  CheckCircle,
  ArrowRight,
  User,
  Mail,
  Building,
  FileText,
  Shield,
  Zap,
  Database,
  Server,
  Cloud,
  Users,
  Phone,
  MapPin,
  Star,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { Link } from "react-router-dom";

const ScheduleDemo = () => {
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    jobTitle: "",
    companySize: "",
    useCase: "",
    integrationsNeeded: [] as string[],
    additionalInfo: ""
  });

  // Mock calendar data - in production, this would come from an API
  const currentMonth = new Date().toLocaleString('default', { month: 'long', year: 'numeric' });
  const availableSlots = {
    "2025-09-02": ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00"],
    "2025-09-03": ["09:00", "10:00", "13:00", "14:00", "15:00"],
    "2025-09-04": ["10:00", "11:00", "14:00", "15:00", "16:00"],
    "2025-09-05": ["09:00", "11:00", "13:00", "14:00", "16:00"],
    "2025-09-08": ["09:00", "10:00", "11:00", "13:00", "14:00", "15:00"],
    "2025-09-09": ["10:00", "11:00", "14:00", "15:00", "16:00"],
    "2025-09-10": ["09:00", "13:00", "14:00", "15:00", "16:00"],
  };

  const integrationOptions = [
    { id: "aws", label: "Amazon Web Services", icon: Cloud },
    { id: "gcp", label: "Google Cloud Platform", icon: Cloud },
    { id: "azure", label: "Microsoft Azure", icon: Cloud },
    { id: "mysql", label: "MySQL Database", icon: Database },
    { id: "postgresql", label: "PostgreSQL", icon: Database },
    { id: "mongodb", label: "MongoDB", icon: Database },
    { id: "redis", label: "Redis", icon: Server },
    { id: "elasticsearch", label: "Elasticsearch", icon: Server }
  ];

  const companySizes = [
    "1-10 employees",
    "11-50 employees", 
    "51-200 employees",
    "201-500 employees",
    "501-1000 employees",
    "1000+ employees"
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleIntegrationToggle = (integrationId: string) => {
    setFormData(prev => ({
      ...prev,
      integrationsNeeded: prev.integrationsNeeded.includes(integrationId)
        ? prev.integrationsNeeded.filter(id => id !== integrationId)
        : [...prev.integrationsNeeded, integrationId]
    }));
  };

  const handleSubmit = () => {
    // In production, this would submit to your API
    console.log("Demo scheduled:", {
      ...formData,
      selectedDate,
      selectedTime
    });
    setCurrentStep(4); // Show confirmation
  };

  const isFormValid = () => {
    return formData.firstName && 
           formData.lastName && 
           formData.email && 
           formData.company && 
           selectedDate && 
           selectedTime;
  };

  const generateCalendarDays = () => {
    const today = new Date();
    const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
    const firstDay = new Date(today.getFullYear(), today.getMonth(), 1).getDay();
    
    const days = [];
    
    // Empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="p-2"></div>);
    }
    
    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      const isPast = new Date(date) < new Date(today.toDateString());
      const hasSlots = availableSlots[date];
      const isSelected = selectedDate === date;
      
      days.push(
        <button
          key={day}
          onClick={() => !isPast && hasSlots && setSelectedDate(date)}
          disabled={isPast || !hasSlots}
          className={`
            p-2 text-sm rounded-lg transition-colors
            ${isPast || !hasSlots 
              ? 'text-muted-foreground cursor-not-allowed opacity-50' 
              : 'hover:bg-primary hover:text-primary-foreground cursor-pointer'
            }
            ${isSelected ? 'bg-primary text-primary-foreground' : ''}
            ${hasSlots && !isPast && !isSelected ? 'bg-secondary' : ''}
          `}
        >
          {day}
        </button>
      );
    }
    
    return days;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-background to-secondary/5">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-4xl mx-auto mb-12">
              <Badge variant="secondary" className="mb-4">
                <Calendar className="h-4 w-4 mr-2" />
                Personal Demo
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Schedule Your Personal Demo
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Get a personalized walkthrough of Novabuckups tailored to your specific needs. 
                Our experts will show you exactly how we can secure your data.
              </p>
            </div>

            {/* Demo Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
              {[
                {
                  icon: Users,
                  title: "1-on-1 Expert Session",
                  description: "Work directly with our technical specialists who understand your industry"
                },
                {
                  icon: Zap,
                  title: "Custom Configuration",
                  description: "See exactly how Novabuckups would integrate with your existing infrastructure"
                },
                {
                  icon: Shield,
                  title: "Security Deep Dive",
                  description: "Detailed review of our security measures and compliance certifications"
                }
              ].map((benefit, index) => (
                <Card key={index} className="text-center border-0 shadow-sm">
                  <CardContent className="pt-6">
                    <benefit.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                    <h3 className="font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Booking Form */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              {/* Progress Steps */}
              <div className="flex items-center justify-center mb-12">
                <div className="flex items-center space-x-4">
                  {[1, 2, 3, 4].map((step) => (
                    <div key={step} className="flex items-center">
                      <div
                        className={`
                          w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium
                          ${currentStep >= step 
                            ? 'bg-primary text-primary-foreground' 
                            : 'bg-muted text-muted-foreground'
                          }
                        `}
                      >
                        {currentStep > step ? <CheckCircle className="h-5 w-5" /> : step}
                      </div>
                      {step < 4 && (
                        <div 
                          className={`w-16 h-1 mx-2 ${
                            currentStep > step ? 'bg-primary' : 'bg-muted'
                          }`}
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column - Form */}
                <div className="space-y-6">
                  {currentStep === 1 && (
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <User className="h-5 w-5" />
                          Personal Information
                        </CardTitle>
                        <CardDescription>
                          Tell us about yourself so we can personalize your demo
                        </CardDescription>
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
                            />
                          </div>
                          <div>
                            <Label htmlFor="lastName">Last Name *</Label>
                            <Input
                              id="lastName"
                              value={formData.lastName}
                              onChange={(e) => handleInputChange('lastName', e.target.value)}
                              placeholder="Doe"
                            />
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
                          />
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
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="company">Company *</Label>
                            <Input
                              id="company"
                              value={formData.company}
                              onChange={(e) => handleInputChange('company', e.target.value)}
                              placeholder="Acme Corp"
                            />
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
                          <Label htmlFor="companySize">Company Size</Label>
                          <Select onValueChange={(value) => handleInputChange('companySize', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select company size" />
                            </SelectTrigger>
                            <SelectContent>
                              {companySizes.map((size) => (
                                <SelectItem key={size} value={size}>{size}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="flex justify-end">
                          <Button 
                            onClick={() => setCurrentStep(2)}
                            disabled={!formData.firstName || !formData.lastName || !formData.email || !formData.company}
                          >
                            Next: Select Date
                            <ArrowRight className="h-4 w-4 ml-2" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {currentStep === 2 && (
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Calendar className="h-5 w-5" />
                          Choose Date & Time
                        </CardTitle>
                        <CardDescription>
                          Select your preferred date and time for the demo
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        {/* Calendar */}
                        <div>
                          <div className="flex items-center justify-between mb-4">
                            <h3 className="font-medium">{currentMonth}</h3>
                            <div className="flex gap-2">
                              <Button variant="outline" size="sm">
                                <ChevronLeft className="h-4 w-4" />
                              </Button>
                              <Button variant="outline" size="sm">
                                <ChevronRight className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-7 gap-1 mb-4">
                            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                              <div key={day} className="p-2 text-center text-sm font-medium text-muted-foreground">
                                {day}
                              </div>
                            ))}
                          </div>
                          
                          <div className="grid grid-cols-7 gap-1">
                            {generateCalendarDays()}
                          </div>
                        </div>

                        {/* Time Slots */}
                        {selectedDate && (
                          <div>
                            <h3 className="font-medium mb-4">Available Times</h3>
                            <div className="grid grid-cols-3 gap-2">
                              {availableSlots[selectedDate]?.map((time) => (
                                <Button
                                  key={time}
                                  variant={selectedTime === time ? "default" : "outline"}
                                  size="sm"
                                  onClick={() => setSelectedTime(time)}
                                  className="justify-center"
                                >
                                  <Clock className="h-4 w-4 mr-2" />
                                  {time}
                                </Button>
                              ))}
                            </div>
                            <p className="text-sm text-muted-foreground mt-2">
                              All times are in your local timezone (EST)
                            </p>
                          </div>
                        )}

                        <div className="flex justify-between">
                          <Button variant="outline" onClick={() => setCurrentStep(1)}>
                            <ChevronLeft className="h-4 w-4 mr-2" />
                            Back
                          </Button>
                          <Button 
                            onClick={() => setCurrentStep(3)}
                            disabled={!selectedDate || !selectedTime}
                          >
                            Next: Technical Details
                            <ArrowRight className="h-4 w-4 ml-2" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {currentStep === 3 && (
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <FileText className="h-5 w-5" />
                          Technical Requirements
                        </CardTitle>
                        <CardDescription>
                          Help us prepare a customized demo for your needs
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div>
                          <Label htmlFor="useCase">Primary Use Case *</Label>
                          <Textarea
                            id="useCase"
                            value={formData.useCase}
                            onChange={(e) => handleInputChange('useCase', e.target.value)}
                            placeholder="Describe your current backup challenges and what you hope to achieve..."
                            rows={3}
                          />
                        </div>

                        <div>
                          <Label>Integration Interests</Label>
                          <p className="text-sm text-muted-foreground mb-4">
                            Select the platforms and databases you'd like to see integrated
                          </p>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {integrationOptions.map((integration) => (
                              <div key={integration.id} className="flex items-center space-x-2">
                                <Checkbox
                                  id={integration.id}
                                  checked={formData.integrationsNeeded.includes(integration.id)}
                                  onCheckedChange={() => handleIntegrationToggle(integration.id)}
                                />
                                <Label 
                                  htmlFor={integration.id} 
                                  className="flex items-center gap-2 cursor-pointer"
                                >
                                  <integration.icon className="h-4 w-4" />
                                  {integration.label}
                                </Label>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="additionalInfo">Additional Information</Label>
                          <Textarea
                            id="additionalInfo"
                            value={formData.additionalInfo}
                            onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
                            placeholder="Any specific questions or requirements you'd like us to address?"
                            rows={3}
                          />
                        </div>

                        <div className="flex justify-between">
                          <Button variant="outline" onClick={() => setCurrentStep(2)}>
                            <ChevronLeft className="h-4 w-4 mr-2" />
                            Back
                          </Button>
                          <Button onClick={handleSubmit} disabled={!isFormValid()}>
                            Schedule Demo
                            <CheckCircle className="h-4 w-4 ml-2" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {currentStep === 4 && (
                    <Card className="border-green-200 bg-green-50">
                      <CardContent className="pt-6 text-center">
                        <CheckCircle className="h-16 w-16 mx-auto mb-4 text-green-600" />
                        <h2 className="text-2xl font-bold mb-4 text-green-900">Demo Scheduled!</h2>
                        <p className="text-green-700 mb-6">
                          Your personalized demo has been scheduled for{" "}
                          <strong>
                            {new Date(selectedDate).toLocaleDateString()} at {selectedTime}
                          </strong>
                        </p>
                        
                        <div className="bg-white p-4 rounded-lg border border-green-200 mb-6">
                          <h3 className="font-semibold mb-2">What happens next?</h3>
                          <div className="text-sm text-green-700 space-y-1">
                            <p>✓ You'll receive a calendar invitation via email</p>
                            <p>✓ We'll send you a preparation checklist</p>
                            <p>✓ Our expert will contact you 1 day before the demo</p>
                            <p>✓ The demo link will be included in your calendar invite</p>
                          </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                          <Button asChild>
                            <Link to="/">Return Home</Link>
                          </Button>
                          <Button variant="outline" asChild>
                            <Link to="/demo">Explore Interactive Demo</Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </div>

                {/* Right Column - Info Panel */}
                <div className="space-y-6">
                  {/* Demo Details */}
                  <Card>
                    <CardHeader>
                      <CardTitle>What to Expect</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {[
                        { icon: Clock, title: "45-minute session", desc: "Comprehensive walkthrough" },
                        { icon: Users, title: "Technical expert", desc: "Industry specialist assigned" },
                        { icon: Shield, title: "Security focus", desc: "Detailed compliance review" },
                        { icon: Zap, title: "Live integration", desc: "See real-time setup process" }
                      ].map((item, index) => (
                        <div key={index} className="flex gap-3">
                          <item.icon className="h-5 w-5 text-primary mt-0.5" />
                          <div>
                            <p className="font-medium text-sm">{item.title}</p>
                            <p className="text-xs text-muted-foreground">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>

                  {/* Contact Info */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Need Help?</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Phone className="h-4 w-4 text-primary" />
                        <div>
                          <p className="text-sm font-medium">Call us</p>
                          <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="h-4 w-4 text-primary" />
                        <div>
                          <p className="text-sm font-medium">Email us</p>
                          <p className="text-sm text-muted-foreground">demos@novabuckups.com</p>
                        </div>
                      </div>
                      <Separator />
                      <p className="text-xs text-muted-foreground">
                        Available Monday-Friday, 9 AM - 6 PM EST
                      </p>
                    </CardContent>
                  </Card>

                  {/* Customer Testimonial */}
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <blockquote className="text-sm text-muted-foreground mb-4">
                        "The demo was incredibly thorough. They showed exactly how Novabuckups would integrate with our existing infrastructure. The ROI was clear within the first 15 minutes."
                      </blockquote>
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-xs font-semibold">
                          DW
                        </div>
                        <div>
                          <p className="text-sm font-medium">David Wilson</p>
                          <p className="text-xs text-muted-foreground">CTO, TechStart Inc.</p>
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
    </div>
  );
};

export default ScheduleDemo;
