import PageLayout from "@/components/shared/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Shield, Calendar, Clock, CheckCircle, Users, Building, Search, FileText, AlertTriangle, Award } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ScheduleSecurityReview = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Security Review Scheduled",
      description: "Our security team will contact you within 24 hours to confirm the details.",
    });
  };

  const reviewTypes = [
    {
      icon: Shield,
      title: "Infrastructure Security Review",
      duration: "2-3 days",
      description: "Comprehensive assessment of your security infrastructure and controls",
      includes: [
        "Network security assessment",
        "Access control evaluation",
        "Data encryption review",
        "Security architecture analysis"
      ]
    },
    {
      icon: Search,
      title: "Vulnerability Assessment",
      duration: "1-2 days",
      description: "Systematic identification of security vulnerabilities in your systems",
      includes: [
        "Automated vulnerability scanning",
        "Manual security testing",
        "Risk assessment and prioritization",
        "Remediation recommendations"
      ]
    },
    {
      icon: FileText,
      title: "Compliance Gap Analysis",
      duration: "3-5 days",
      description: "Evaluation of your compliance posture against industry standards",
      includes: [
        "Regulatory compliance review",
        "Policy and procedure assessment",
        "Control effectiveness testing",
        "Compliance roadmap development"
      ]
    },
    {
      icon: Users,
      title: "Security Awareness Assessment",
      duration: "1-2 days",
      description: "Evaluation of your organization's security culture and awareness",
      includes: [
        "Phishing simulation testing",
        "Security training assessment",
        "Policy awareness evaluation",
        "Recommendations for improvement"
      ]
    }
  ];

  const reviewProcess = [
    {
      step: "1",
      title: "Initial Consultation",
      description: "Discuss your security concerns and objectives",
      timeframe: "30-60 minutes"
    },
    {
      step: "2",
      title: "Scope Definition",
      description: "Define the scope, timeline, and methodology",
      timeframe: "1-2 days"
    },
    {
      step: "3",
      title: "Security Assessment",
      description: "Conduct comprehensive security review",
      timeframe: "1-5 days"
    },
    {
      step: "4",
      title: "Analysis & Reporting",
      description: "Analyze findings and prepare detailed report",
      timeframe: "2-3 days"
    },
    {
      step: "5",
      title: "Results Presentation",
      description: "Present findings and recommendations",
      timeframe: "1-2 hours"
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Identify Vulnerabilities",
      description: "Discover security weaknesses before they can be exploited"
    },
    {
      icon: CheckCircle,
      title: "Ensure Compliance",
      description: "Verify adherence to regulatory and industry standards"
    },
    {
      icon: Award,
      title: "Improve Security Posture",
      description: "Get actionable recommendations to strengthen security"
    },
    {
      icon: Users,
      title: "Expert Guidance",
      description: "Leverage our security experts' knowledge and experience"
    }
  ];

  return (
    <PageLayout 
      title="Schedule Security Review - Professional Security Assessment Services" 
      description="Schedule a comprehensive security review with our expert team. Get vulnerability assessments, compliance evaluations, and actionable security recommendations for your organization."
    >
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="glass mb-6">
              <Shield className="h-4 w-4 mr-2" />
              Professional Security Assessment
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
              Schedule security 
              <span className="block">review</span>
            </h1>
            <p className="text-xl lg:text-2xl text-primary-foreground/80 text-balance mb-8 max-w-3xl mx-auto">
              Get expert security assessment and recommendations from our 
              certified security professionals to strengthen your defenses.
            </p>
          </div>
        </div>
      </section>

      {/* Review Types */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Security <span className="text-primary">review types</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Choose from our comprehensive range of security assessment services 
              tailored to your organization's specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reviewTypes.map((type, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-500 border-border/50 hover:border-primary/20 bg-gradient-card">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="bg-primary/10 p-4 rounded-xl group-hover:bg-primary/20 transition-colors">
                      <type.icon className="h-8 w-8 text-primary" />
                    </div>
                    <Badge variant="outline">
                      <Clock className="h-3 w-3 mr-1" />
                      {type.duration}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {type.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {type.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-3">What's included:</h4>
                  <ul className="space-y-2">
                    {type.includes.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Why choose our <span className="text-primary">security reviews</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center bg-background border-border/50 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="bg-primary/10 p-4 rounded-xl w-fit mx-auto mb-4">
                    <benefit.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                Schedule your <span className="text-primary">security review</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Fill out the form below and our security team will contact you 
                within 24 hours to discuss your requirements.
              </p>
            </div>

            <Card className="bg-background border-border/50">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Organization Information */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Organization Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="company">Company Name *</Label>
                        <Input id="company" required placeholder="Enter company name" />
                      </div>
                      <div>
                        <Label htmlFor="industry">Industry *</Label>
                        <Select required>
                          <SelectTrigger>
                            <SelectValue placeholder="Select industry" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="healthcare">Healthcare</SelectItem>
                            <SelectItem value="finance">Financial Services</SelectItem>
                            <SelectItem value="education">Education</SelectItem>
                            <SelectItem value="government">Government</SelectItem>
                            <SelectItem value="technology">Technology</SelectItem>
                            <SelectItem value="manufacturing">Manufacturing</SelectItem>
                            <SelectItem value="retail">Retail</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="size">Company Size *</Label>
                        <Select required>
                          <SelectTrigger>
                            <SelectValue placeholder="Select company size" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="startup">Startup (1-50 employees)</SelectItem>
                            <SelectItem value="small">Small (51-200 employees)</SelectItem>
                            <SelectItem value="medium">Medium (201-1000 employees)</SelectItem>
                            <SelectItem value="large">Large (1000+ employees)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="location">Primary Location *</Label>
                        <Input id="location" required placeholder="City, Country" />
                      </div>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Contact Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input id="name" required placeholder="Enter full name" />
                      </div>
                      <div>
                        <Label htmlFor="title">Job Title *</Label>
                        <Input id="title" required placeholder="Enter job title" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email">Business Email *</Label>
                        <Input id="email" type="email" required placeholder="Enter business email" />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input id="phone" type="tel" required placeholder="Enter phone number" />
                      </div>
                    </div>
                  </div>

                  {/* Review Requirements */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Review Requirements</h3>
                    <div>
                      <Label htmlFor="review-type">Review Type *</Label>
                      <Select required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select review type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="infrastructure">Infrastructure Security Review</SelectItem>
                          <SelectItem value="vulnerability">Vulnerability Assessment</SelectItem>
                          <SelectItem value="compliance">Compliance Gap Analysis</SelectItem>
                          <SelectItem value="awareness">Security Awareness Assessment</SelectItem>
                          <SelectItem value="comprehensive">Comprehensive Security Audit</SelectItem>
                          <SelectItem value="custom">Custom Assessment</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label>Compliance Requirements (select all that apply)</Label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-2">
                        {["GDPR", "SOC 2", "ISO 27001", "HIPAA", "PCI DSS", "NIST", "SOX", "None"].map((framework) => (
                          <div key={framework} className="flex items-center space-x-2">
                            <Checkbox id={framework} />
                            <Label htmlFor={framework} className="text-sm">{framework}</Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="timeline">Preferred Timeline *</Label>
                      <Select required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select timeline" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="asap">As soon as possible</SelectItem>
                          <SelectItem value="2weeks">Within 2 weeks</SelectItem>
                          <SelectItem value="month">Within 1 month</SelectItem>
                          <SelectItem value="quarter">Within 3 months</SelectItem>
                          <SelectItem value="flexible">Flexible</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="description">Security Concerns & Objectives *</Label>
                      <Textarea 
                        id="description" 
                        required
                        placeholder="Please describe your specific security concerns, objectives for the review, any recent incidents, and what you hope to achieve from this assessment..."
                        className="min-h-[120px]"
                      />
                    </div>

                    <div>
                      <Label htmlFor="systems">Systems/Environment to Review</Label>
                      <Textarea 
                        id="systems" 
                        placeholder="Describe the systems, networks, applications, or infrastructure components you'd like included in the review..."
                        className="min-h-[80px]"
                      />
                    </div>
                  </div>

                  {/* Submit */}
                  <div className="pt-6">
                    <Button type="submit" size="lg" className="w-full">
                      <Calendar className="h-5 w-5 mr-2" />
                      Schedule Security Review
                    </Button>
                    <p className="text-sm text-muted-foreground text-center mt-3">
                      Our security team will contact you within 24 hours to discuss your requirements and schedule the review.
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Our review <span className="text-primary">process</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our structured approach ensures comprehensive assessment 
              with minimal disruption to your operations.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {reviewProcess.map((step, index) => (
                <Card key={index} className="bg-background border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-6">
                      <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-semibold">{step.title}</h3>
                          <Badge variant="outline" className="text-xs">
                            <Clock className="h-3 w-3 mr-1" />
                            {step.timeframe}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-card border-border/50">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <AlertTriangle className="h-12 w-12 text-warning mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Need Immediate Security Assistance?</h3>
                  <p className="text-muted-foreground mb-6">
                    If you're experiencing a security incident or need urgent security consultation, 
                    contact our security team directly.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="text-center">
                    <h4 className="font-semibold mb-2">Security Hotline</h4>
                    <a href="tel:+44208123456" className="text-primary hover:underline text-lg">
                      +44 (0) 20 8123 456
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">24/7 emergency response</p>
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold mb-2">Security Email</h4>
                    <a href="mailto:security@Novabuckups.com" className="text-primary hover:underline text-lg">
                      security@Novabuckups.com
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">Response within 2 hours</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ScheduleSecurityReview;