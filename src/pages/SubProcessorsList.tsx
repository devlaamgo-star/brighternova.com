import { ExternalLink, Shield, MapPin, Calendar, FileText, AlertTriangle, CheckCircle, Building, Globe, Lock } from "lucide-react";
import PageLayout from "@/components/shared/PageLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";

const SubProcessorsList = () => {
  const subProcessors = [
    {
      name: "Amazon Web Services (AWS)",
      category: "Cloud Infrastructure",
      purpose: "Primary cloud hosting, data storage, and compute services",
      location: "Ireland (EU-West-1), United States",
      dataTypes: ["Customer data", "Application data", "Backup data", "Logs"],
      certifications: ["ISO 27001", "SOC 2 Type II", "GDPR", "PCI DSS"],
      contractDate: "2023-01-15",
      website: "https://aws.amazon.com",
      dataRetention: "As per customer settings, max 7 years",
      security: "AES-256 encryption, VPC isolation, IAM controls",
    },
    {
      name: "Stripe Inc.",
      category: "Payment Processing",
      purpose: "Credit card payment processing and subscription management",
      location: "Ireland, United States",
      dataTypes: ["Payment information", "Billing addresses", "Transaction data"],
      certifications: ["PCI DSS Level 1", "SOC 2 Type II", "GDPR"],
      contractDate: "2023-02-01",
      website: "https://stripe.com",
      dataRetention: "7 years for tax purposes",
      security: "PCI DSS compliant, tokenization, end-to-end encryption",
    },
    {
      name: "SendGrid (Twilio)",
      category: "Email Services",
      purpose: "Transactional emails, notifications, and marketing communications",
      location: "United States, Ireland",
      dataTypes: ["Email addresses", "Email content", "Delivery metrics"],
      certifications: ["SOC 2 Type II", "ISO 27001", "GDPR"],
      contractDate: "2023-01-20",
      website: "https://sendgrid.com",
      dataRetention: "30 days for logs, indefinite for opt-outs",
      security: "TLS encryption, dedicated IP pools, authentication",
    },
    {
      name: "Intercom Inc.",
      category: "Customer Support",
      purpose: "Customer support chat, help desk, and user communication",
      location: "Ireland, United States",
      dataTypes: ["Support conversations", "User profiles", "Usage data"],
      certifications: ["SOC 2 Type II", "GDPR", "Privacy Shield"],
      contractDate: "2023-03-01",
      website: "https://intercom.com",
      dataRetention: "2 years for inactive conversations",
      security: "End-to-end encryption, access controls, audit logs",
    },
    {
      name: "Mixpanel Inc.",
      category: "Analytics",
      purpose: "Product analytics and user behavior tracking",
      location: "United States",
      dataTypes: ["Usage analytics", "Feature usage", "User interactions"],
      certifications: ["SOC 2 Type II", "GDPR", "CCPA"],
      contractDate: "2023-02-15",
      website: "https://mixpanel.com",
      dataRetention: "5 years, user-configurable",
      security: "Data encryption, anonymization options, access controls",
    },
    {
      name: "Sentry (Functional Software Inc.)",
      category: "Error Monitoring",
      purpose: "Application error tracking and performance monitoring",
      location: "United States",
      dataTypes: ["Error logs", "Performance data", "Stack traces"],
      certifications: ["SOC 2 Type II", "GDPR"],
      contractDate: "2023-01-10",
      website: "https://sentry.io",
      dataRetention: "90 days for free, 1 year for paid plans",
      security: "Data scrubbing, IP masking, encrypted transmission",
    },
    {
      name: "Cloudflare Inc.",
      category: "CDN & Security",
      purpose: "Content delivery network, DDoS protection, and web security",
      location: "United States, Global Edge Locations",
      dataTypes: ["Request logs", "Security events", "Cache data"],
      certifications: ["SOC 2 Type II", "ISO 27001", "GDPR"],
      contractDate: "2023-01-05",
      website: "https://cloudflare.com",
      dataRetention: "7 days for logs, varies by service",
      security: "TLS 1.3, bot protection, DDoS mitigation",
    },
    {
      name: "Google Cloud Platform",
      category: "Authentication",
      purpose: "Single sign-on and OAuth authentication services",
      location: "Ireland, United States",
      dataTypes: ["Authentication tokens", "User profiles", "Login events"],
      certifications: ["ISO 27001", "SOC 2 Type II", "GDPR"],
      contractDate: "2023-02-20",
      website: "https://cloud.google.com",
      dataRetention: "As per user settings, max 18 months",
      security: "OAuth 2.0, OpenID Connect, MFA support",
    },
  ];

  const categories = [...new Set(subProcessors.map(sp => sp.category))];

  return (
    <PageLayout
      title="Sub-processors List"
      description="Complete list of third-party sub-processors used by Novabuckups, including their purposes, data handling practices, and security certifications."
    >
      <div className="min-h-screen bg-background py-12">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-heading font-bold text-foreground mb-4">
              Sub-processors List
            </h1>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              We work with carefully selected third-party sub-processors to provide our services. 
              This page provides transparency about who processes your data and how.
            </p>
          </div>

          {/* Key Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardHeader className="text-center">
                <Building className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Total Sub-processors</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl font-bold text-primary">{subProcessors.length}</div>
                <p className="text-sm text-muted-foreground">Actively monitored</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="text-center">
                <Globe className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Primary Locations</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl font-bold text-primary">EU + US</div>
                <p className="text-sm text-muted-foreground">GDPR compliant</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="text-center">
                <Lock className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Last Updated</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl font-bold text-primary">{new Date().toLocaleDateString()}</div>
                <p className="text-sm text-muted-foreground">Monthly reviews</p>
              </CardContent>
            </Card>
          </div>

          {/* Important Notice */}
          <Alert className="mb-8">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              <strong>Important:</strong> This list is updated monthly. If you have specific questions about data processing 
              activities, please contact our Data Protection Officer at{" "}
              <a href="mailto:dpo@Novabuckups.com" className="text-primary hover:underline">
                dpo@Novabuckups.com
              </a>
            </AlertDescription>
          </Alert>

          {/* Category Overview */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Sub-processor Categories</CardTitle>
              <CardDescription>
                Our sub-processors are organized into the following categories based on their function
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <Badge key={category} variant="secondary" className="text-sm">
                    {category} ({subProcessors.filter(sp => sp.category === category).length})
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Sub-processors List */}
          <div className="space-y-6">
            <h2 className="text-2xl font-heading font-bold text-foreground">
              Detailed Sub-processor Information
            </h2>
            
            {subProcessors.map((processor, index) => (
              <Card key={index} className="hover:shadow-elegant transition-smooth">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <CardTitle className="text-xl">{processor.name}</CardTitle>
                        <Badge variant="outline">{processor.category}</Badge>
                      </div>
                      <CardDescription className="text-base">
                        {processor.purpose}
                      </CardDescription>
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <a href={processor.website} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-3 w-3 mr-1" />
                        Visit
                      </a>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Location & Contract */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        Location & Contract
                      </h4>
                      <div className="space-y-2 text-sm">
                        <div>
                          <span className="text-muted-foreground">Location:</span>
                          <div className="font-medium">{processor.location}</div>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Contract Date:</span>
                          <div className="font-medium flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {new Date(processor.contractDate).toLocaleDateString()}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Data Types */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <FileText className="h-4 w-4" />
                        Data Processed
                      </h4>
                      <div className="space-y-1">
                        {processor.dataTypes.map((type, idx) => (
                          <div key={idx} className="text-sm flex items-center gap-2">
                            <CheckCircle className="h-3 w-3 text-primary" />
                            {type}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Security & Compliance */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <Shield className="h-4 w-4" />
                        Certifications
                      </h4>
                      <div className="space-y-1">
                        {processor.certifications.map((cert, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs mr-1 mb-1">
                            {cert}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* Additional Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Data Retention</h4>
                      <p className="text-sm text-muted-foreground">{processor.dataRetention}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Security Measures</h4>
                      <p className="text-sm text-muted-foreground">{processor.security}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Footer Information */}
          <Card className="mt-12">
            <CardHeader>
              <CardTitle>Data Protection Rights</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Under GDPR and other data protection laws, you have rights regarding your personal data processed by our sub-processors. 
                These include the right to access, rectify, erase, restrict processing, data portability, and to object to processing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="outline" asChild>
                  <a href="/privacy">View Privacy Policy</a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="/dpa">Data Processing Agreement</a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="/contact">Contact DPO</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageLayout>
  );
};

export default SubProcessorsList;