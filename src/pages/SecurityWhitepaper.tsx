import PageLayout from "@/components/shared/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, FileText, Shield, Lock, Key, Eye, Server, Globe, CheckCircle, AlertTriangle, Calendar } from "lucide-react";

const SecurityWhitepaper = () => {
  const whitepaperSections = [
    {
      icon: Shield,
      title: "Executive Summary",
      description: "Overview of our comprehensive security framework and commitment to data protection",
      content: [
        "Zero-trust security architecture",
        "Multi-layered defence strategy", 
        "Continuous security monitoring",
        "Compliance with international standards"
      ]
    },
    {
      icon: Lock,
      title: "Encryption Standards",
      description: "Detailed information about our encryption implementations",
      content: [
        "AES-256-GCM encryption for data at rest",
        "TLS 1.3 with perfect forward secrecy",
        "End-to-end encryption protocols",
        "Hardware security module integration"
      ]
    },
    {
      icon: Key,
      title: "Key Management",
      description: "How we securely manage and rotate encryption keys",
      content: [
        "Customer-managed encryption keys (CMEK)",
        "Automated key rotation policies",
        "Hardware security module storage",
        "Zero-knowledge key architecture"
      ]
    },
    {
      icon: Eye,
      title: "Access Controls",
      description: "Identity and access management policies",
      content: [
        "Role-based access control (RBAC)",
        "Principle of least privilege",
        "Multi-factor authentication enforcement",
        "Just-in-time access provisioning"
      ]
    },
    {
      icon: Server,
      title: "Infrastructure Security",
      description: "Physical and virtual infrastructure protection measures",
      content: [
        "Secure cloud infrastructure design",
        "Network segmentation and isolation",
        "Intrusion detection and prevention",
        "Regular vulnerability assessments"
      ]
    },
    {
      icon: Globe,
      title: "Data Governance",
      description: "Data handling, retention, and sovereignty policies",
      content: [
        "Data minimization principles",
        "Geographic data residency controls",
        "Automated data retention policies",
        "Right to erasure implementation"
      ]
    }
  ];

  const technicalSpecs = [
    {
      category: "Encryption",
      specifications: [
        "AES-256-GCM for symmetric encryption",
        "RSA-4096 and ECDSA P-384 for asymmetric encryption",
        "PBKDF2 with 100,000+ iterations for key derivation",
        "Authenticated encryption with associated data (AEAD)"
      ]
    },
    {
      category: "Transport Security",
      specifications: [
        "TLS 1.3 with perfect forward secrecy",
        "HSTS with preload directive",
        "Certificate transparency monitoring",
        "OCSP stapling for certificate validation"
      ]
    },
    {
      category: "Authentication",
      specifications: [
        "SAML 2.0 and OpenID Connect support",
        "TOTP and FIDO2/WebAuthn for MFA",
        "OAuth 2.0 with PKCE",
        "JWT with asymmetric signing"
      ]
    },
    {
      category: "Monitoring",
      specifications: [
        "Real-time security event correlation",
        "Machine learning-based anomaly detection",
        "SIEM integration with major platforms",
        "24/7 security operations center (SOC)"
      ]
    }
  ];

  return (
    <PageLayout 
      title="Security Whitepaper - Technical Security Documentation" 
      description="Comprehensive technical documentation of Novabuckups security architecture, encryption standards, access controls, and compliance frameworks for enterprise customers."
    >
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="glass mb-6">
              <FileText className="h-4 w-4 mr-2" />
              Technical Documentation
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
              Security 
              <span className="block">whitepaper</span>
            </h1>
            <p className="text-xl lg:text-2xl text-primary-foreground/80 text-balance mb-8 max-w-3xl mx-auto">
              Comprehensive technical documentation of our security architecture, 
              encryption standards, and compliance frameworks.
            </p>
          </div>
        </div>
      </section>

      {/* Document Info */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-background border-border/50">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <h3 className="font-semibold mb-2">Document Version</h3>
                    <p className="text-2xl font-bold text-primary">2.1</p>
                    <p className="text-sm text-muted-foreground">Updated December 2024</p>
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold mb-2">Classification</h3>
                    <Badge variant="secondary" className="text-lg px-4 py-1">
                      Public
                    </Badge>
                    <p className="text-sm text-muted-foreground mt-1">Available to all customers</p>
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold mb-2">Next Review</h3>
                    <p className="text-2xl font-bold text-primary">Q2 2025</p>
                    <p className="text-sm text-muted-foreground">Quarterly updates</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Security Framework */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Security <span className="text-primary">framework overview</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our security framework is built on industry best practices and continuous improvement,
              providing multiple layers of protection for your critical data.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whitepaperSections.map((section, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-500 border-border/50 hover:border-primary/20 bg-gradient-card">
                <CardHeader>
                  <div className="bg-primary/10 p-4 rounded-xl group-hover:bg-primary/20 transition-colors w-fit">
                    <section.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {section.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {section.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {section.content.map((item, itemIndex) => (
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

      {/* Technical Specifications */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Technical <span className="text-primary">specifications</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Detailed technical specifications of our security implementations
              and the standards we adhere to.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {technicalSpecs.map((spec, index) => (
              <Card key={index} className="bg-background border-border/50">
                <CardHeader>
                  <h3 className="text-xl font-bold">{spec.category}</h3>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {spec.specifications.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security Contact */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-card border-border/50">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <AlertTriangle className="h-12 w-12 text-warning mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Security Questions or Concerns?</h3>
                  <p className="text-muted-foreground mb-6">
                    Our security team is available to answer questions about this whitepaper
                    or discuss your specific security requirements.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="text-center">
                    <h4 className="font-semibold mb-2">Security Team</h4>
                    <a href="mailto:security@Novabuckups.com" className="text-primary hover:underline">
                      security@Novabuckups.com
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">Response within 24 hours</p>
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold mb-2">Enterprise Sales</h4>
                    <a href="mailto:enterprise@Novabuckups.com" className="text-primary hover:underline">
                      enterprise@Novabuckups.com
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">For compliance discussions</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
                  <Button variant="outline" asChild>
                    <a href="/schedule-security-review">
                      <Shield className="h-4 w-4 mr-2" />
                      Schedule Security Review
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="/request-custom-documentation">
                      <FileText className="h-4 w-4 mr-2" />
                      Request Custom Documentation
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

export default SecurityWhitepaper;
