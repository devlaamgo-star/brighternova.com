import PageLayout from "@/components/shared/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Lock, Key, Eye, FileText, Globe, CheckCircle, ArrowRight, AlertTriangle, Server, Users, Clock } from "lucide-react";
const Security = () => {
  const securityFeatures = [{
    icon: Lock,
    title: "End-to-End Encryption",
    description: "AES-256 encryption protects your data both in transit and at rest",
    details: ["AES-256-GCM encryption for data at rest", "TLS 1.3 for data in transit", "Perfect Forward Secrecy", "Industry-standard cipher suites"]
  }, {
    icon: Key,
    title: "Customer-Managed Keys",
    description: "You control your encryption keys with our zero-knowledge architecture",
    details: ["Bring Your Own Key (BYOK) support", "Hardware Security Module (HSM) storage", "Key rotation and lifecycle management", "Zero-knowledge encryption"]
  }, {
    icon: Eye,
    title: "Access Control",
    description: "Granular permissions and multi-factor authentication",
    details: ["Role-based access control (RBAC)", "Multi-factor authentication (MFA)", "Single Sign-On (SSO) integration", "API key management"]
  }, {
    icon: FileText,
    title: "Comprehensive Auditing",
    description: "Complete audit trails for compliance and security monitoring",
    details: ["Detailed access and activity logs", "Real-time security monitoring", "Compliance reporting", "Anomaly detection"]
  }, {
    icon: Server,
    title: "Infrastructure Security",
    description: "Secure infrastructure with regular security assessments",
    details: ["Regular penetration testing", "Vulnerability assessments", "Secure development lifecycle", "24/7 security monitoring"]
  }, {
    icon: Globe,
    title: "Data Residency",
    description: "Choose where your data is stored to meet compliance requirements",
    details: ["UK and EU data centres", "Data sovereignty compliance", "Regional data residency options", "Cross-border data controls"]
  }];
  const complianceFrameworks = [{
    name: "GDPR & UK GDPR",
    description: "Full compliance with European and UK data protection regulations",
    status: "Compliant",
    features: ["Data subject rights", "Privacy by design", "Lawful basis documentation", "DPA available"]
  }, {
    name: "ISO 27001",
    description: "Information security management system certification",
    status: "In Progress",
    features: ["Security policies", "Risk management", "Incident response", "Regular audits"]
  }, {
    name: "SOC 2 Type II",
    description: "Security, availability, and confidentiality controls",
    status: "In Progress",
    features: ["Security controls", "Availability monitoring", "Confidentiality measures", "Annual audits"]
  }, {
    name: "Cyber Essentials",
    description: "UK government-backed cybersecurity certification",
    status: "Compliant",
    features: ["Boundary firewalls", "Secure configuration", "Access control", "Malware protection"]
  }];
  const incidentResponse = [{
    step: "1",
    title: "Detection",
    description: "24/7 monitoring systems detect security incidents",
    timeframe: "< 5 minutes"
  }, {
    step: "2",
    title: "Assessment",
    description: "Security team assesses the scope and impact",
    timeframe: "< 15 minutes"
  }, {
    step: "3",
    title: "Containment",
    description: "Immediate containment to prevent further damage",
    timeframe: "< 30 minutes"
  }, {
    step: "4",
    title: "Customer Notification",
    description: "Affected customers notified within regulatory timeframes",
    timeframe: "< 72 hours"
  }, {
    step: "5",
    title: "Recovery",
    description: "Systems restored and security measures strengthened",
    timeframe: "< 24 hours"
  }];
  return <PageLayout title="Security & Compliance - Enterprise-Grade Protection" description="Comprehensive security measures including end-to-end encryption, GDPR compliance, access controls, and audit trails for professional backup services.">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="glass mb-6">
              <Shield className="h-4 w-4 mr-2" />
              Enterprise Security
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
              Security &amp; compliance 
              <span className="block">you can trust</span>
            </h1>
            <p className="text-xl lg:text-2xl text-primary-foreground/80 text-balance mb-8 max-w-3xl mx-auto">
              Military-grade encryption, zero-knowledge architecture, and comprehensive 
              compliance frameworks protect your most critical data.
            </p>
            
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Multi-layered <span className="text-primary">security approach</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Every layer of our infrastructure is designed with security first. 
              From encryption to access controls, we protect your data at every level.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityFeatures.map((feature, index) => <Card key={index} className="group hover:shadow-xl transition-all duration-500 border-border/50 hover:border-primary/20 bg-gradient-card">
                <CardHeader>
                  <div className="bg-primary/10 p-4 rounded-xl group-hover:bg-primary/20 transition-colors w-fit">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.details.map((detail, detailIndex) => <li key={detailIndex} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{detail}</span>
                      </li>)}
                  </ul>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Compliance <span className="text-primary">frameworks</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We maintain compliance with international standards to ensure 
              your data meets regulatory requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {complianceFrameworks.map((framework, index) => <Card key={index} className="bg-background border-border/50 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-bold">{framework.name}</h3>
                    <Badge variant={framework.status === "Compliant" ? "default" : "secondary"} className={framework.status === "Compliant" ? "bg-accent text-accent-foreground" : ""}>
                      {framework.status}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground">
                    {framework.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {framework.features.map((feature, featureIndex) => <li key={featureIndex} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>)}
                  </ul>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Incident Response */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Incident <span className="text-primary">response process</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our structured incident response process ensures rapid detection, 
              containment, and recovery from any security incidents.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {incidentResponse.map((step, index) => <Card key={index} className="bg-gradient-card border-border/50">
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
                </Card>)}
            </div>
          </div>
        </div>
      </section>

      {/* Security Contact */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-background border-border/50">
                <CardHeader>
                  <AlertTriangle className="h-8 w-8 text-warning mb-4" />
                  <h3 className="text-2xl font-bold">Report Security Issues</h3>
                  <p className="text-muted-foreground">
                    Found a security vulnerability? We take security seriously and 
                    appreciate responsible disclosure.
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <strong>Security Email:</strong>
                      <br />
                      <a href="mailto:security@Novabuckups.com" className="text-primary hover:underline">
                        security@Novabuckups.com
                      </a>
                    </div>
                    <div>
                      <strong>Response Time:</strong>
                      <br />
                      Within 24 hours for security reports
                    </div>
                    <Button variant="outline" className="w-full" asChild>
                      <a href="/bug-bounty">
                        View Bug Bounty Programme
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-background border-border/50">
                <CardHeader>
                  <FileText className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-2xl font-bold">Security Documentation</h3>
                  <p className="text-muted-foreground">
                    Access our comprehensive security documentation and 
                    compliance certificates.
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Button variant="outline" size="sm" className="w-full justify-start" asChild>
                      <a href="/security-whitepaper">
                        <FileText className="h-4 w-4 mr-2" />
                        Security Whitepaper
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" className="w-full justify-start" asChild>
                      <a href="/compliance-certificates">
                        <Shield className="h-4 w-4 mr-2" />
                        Compliance Certificates
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" className="w-full justify-start" asChild>
                      <a href="/dpa">
                        <Users className="h-4 w-4 mr-2" />
                        Data Processing Agreement
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" className="w-full justify-start" asChild>
                      <a href="/sub-processors">
                        <Globe className="h-4 w-4 mr-2" />
                        Sub-processors List
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>;
};
export default Security;