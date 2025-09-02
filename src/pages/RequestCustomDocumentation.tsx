import PageLayout from "@/components/shared/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { FileText, Shield, Clock, CheckCircle, Building, Users, Globe, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const RequestCustomDocumentation = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Request Submitted",
      description: "Our security team will contact you within 2 business days.",
    });
  };

  const documentTypes = [
    {
      icon: Shield,
      title: "Security Assessment Reports",
      description: "Comprehensive security posture evaluation for your organization"
    },
    {
      icon: FileText,
      title: "Compliance Documentation",
      description: "Industry-specific compliance reports and certifications"
    },
    {
      icon: Building,
      title: "Architecture Documentation",
      description: "Detailed security architecture and infrastructure diagrams"
    },
    {
      icon: Globe,
      title: "Data Processing Agreements",
      description: "Customized DPAs for specific jurisdictions and requirements"
    }
  ];

  const processingSteps = [
    {
      step: "1",
      title: "Request Review",
      description: "Our security team reviews your documentation request",
      timeframe: "1 business day"
    },
    {
      step: "2",
      title: "Requirements Analysis",
      description: "We analyze your specific compliance and security needs",
      timeframe: "2-3 business days"
    },
    {
      step: "3",
      title: "Documentation Preparation",
      description: "Custom documentation prepared by our security experts",
      timeframe: "5-10 business days"
    },
    {
      step: "4",
      title: "Review & Delivery",
      description: "Final review and secure delivery of documentation",
      timeframe: "1-2 business days"
    }
  ];

  return (
    <PageLayout 
      title="Request Custom Security Documentation - Tailored Compliance Reports" 
      description="Request customized security documentation, compliance reports, and technical specifications tailored to your organization's specific requirements and industry standards."
    >
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="glass mb-6">
              <FileText className="h-4 w-4 mr-2" />
              Custom Documentation
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
              Request custom 
              <span className="block">documentation</span>
            </h1>
            <p className="text-xl lg:text-2xl text-primary-foreground/80 text-balance mb-8 max-w-3xl mx-auto">
              Get tailored security documentation and compliance reports 
              specific to your organization's requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Document Types */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Available <span className="text-primary">documentation types</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We can provide customized documentation to meet your specific 
              compliance, audit, and security assessment needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {documentTypes.map((type, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-500 border-border/50 hover:border-primary/20 bg-gradient-card">
                <CardHeader>
                  <div className="bg-primary/10 p-4 rounded-xl group-hover:bg-primary/20 transition-colors w-fit">
                    <type.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {type.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {type.description}
                  </p>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Request Form */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                Documentation <span className="text-primary">request form</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Provide details about your documentation requirements and we'll prepare 
                a customized package for your organization.
              </p>
            </div>

            <Card className="bg-background border-border/50">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Organization Information */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Organization Information</h3>
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
                        <Label htmlFor="country">Country/Region *</Label>
                        <Select required>
                          <SelectTrigger>
                            <SelectValue placeholder="Select country" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="uk">United Kingdom</SelectItem>
                            <SelectItem value="eu">European Union</SelectItem>
                            <SelectItem value="us">United States</SelectItem>
                            <SelectItem value="canada">Canada</SelectItem>
                            <SelectItem value="australia">Australia</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
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
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" type="tel" placeholder="Enter phone number" />
                      </div>
                    </div>
                  </div>

                  {/* Documentation Requirements */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Documentation Requirements</h3>
                    <div>
                      <Label htmlFor="doc-type">Document Type *</Label>
                      <Select required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select document type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="security-assessment">Security Assessment Report</SelectItem>
                          <SelectItem value="compliance-report">Compliance Documentation</SelectItem>
                          <SelectItem value="architecture-docs">Architecture Documentation</SelectItem>
                          <SelectItem value="custom-dpa">Custom Data Processing Agreement</SelectItem>
                          <SelectItem value="audit-package">Audit Package</SelectItem>
                          <SelectItem value="other">Other (specify in requirements)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label>Compliance Frameworks (select all that apply)</Label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-2">
                        {["GDPR", "SOC 2", "ISO 27001", "HIPAA", "PCI DSS", "NIST", "SOX", "Other"].map((framework) => (
                          <div key={framework} className="flex items-center space-x-2">
                            <Checkbox id={framework} />
                            <Label htmlFor={framework} className="text-sm">{framework}</Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="requirements">Specific Requirements *</Label>
                      <Textarea 
                        id="requirements" 
                        required
                        placeholder="Please describe your specific documentation requirements, use case, deadlines, and any particular compliance standards or frameworks that need to be addressed..."
                        className="min-h-[120px]"
                      />
                    </div>

                    <div>
                      <Label htmlFor="timeline">Required Timeline</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select timeline" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="urgent">Urgent (within 1 week)</SelectItem>
                          <SelectItem value="standard">Standard (2-3 weeks)</SelectItem>
                          <SelectItem value="flexible">Flexible (1+ months)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Submit */}
                  <div className="pt-6">
                    <Button type="submit" size="lg" className="w-full">
                      <Mail className="h-5 w-5 mr-2" />
                      Submit Documentation Request
                    </Button>
                    <p className="text-sm text-muted-foreground text-center mt-3">
                      Our security team will review your request and contact you within 2 business days.
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Request <span className="text-primary">processing timeline</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our structured process ensures comprehensive documentation 
              that meets your specific requirements and deadlines.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {processingSteps.map((step, index) => (
                <Card key={index} className="bg-gradient-card border-border/50">
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
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-background border-border/50">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Need Help with Your Request?</h3>
                  <p className="text-muted-foreground mb-6">
                    Our security and compliance team is here to help you understand 
                    what documentation would best serve your needs.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="text-center">
                    <h4 className="font-semibold mb-2">Security Team</h4>
                    <a href="mailto:security@Novabuckups.com" className="text-primary hover:underline">
                      security@Novabuckups.com
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">General security inquiries</p>
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold mb-2">Compliance Team</h4>
                    <a href="mailto:compliance@Novabuckups.com" className="text-primary hover:underline">
                      compliance@Novabuckups.com
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">Compliance and regulatory questions</p>
                  </div>
                </div>

                <div className="flex justify-center mt-8">
                  <Button variant="outline" asChild>
                    <a href="/schedule-consultation">
                      <Users className="h-4 w-4 mr-2" />
                      Schedule Consultation Call
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default RequestCustomDocumentation;