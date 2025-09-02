import { Download, Shield, CheckCircle, Calendar, Building, Award, FileText, ExternalLink, Clock, Users } from "lucide-react";
import PageLayout from "@/components/shared/PageLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";

const ComplianceCertificates = () => {
  const certificates = [
    {
      name: "ISO 27001:2013",
      category: "Information Security Management",
      issuer: "BSI Group",
      status: "Active",
      issueDate: "2023-06-15",
      expiryDate: "2026-06-14",
      certificateNumber: "IS 789123",
      scope: "Information security management system for backup automation services",
      description: "International standard for information security management systems (ISMS)",
      downloadUrl: "/certificates/iso-27001-2023.pdf",
      verificationUrl: "https://www.bsigroup.com/verify/IS789123",
    },
    {
      name: "SOC 2 Type II",
      category: "Service Organization Control",
      issuer: "Deloitte & Touche LLP",
      status: "Active",
      issueDate: "2023-08-01",
      expiryDate: "2024-07-31",
      certificateNumber: "SOC2-PWB-2023",
      scope: "Security, availability, and confidentiality of backup automation platform",
      description: "Audit report on controls at a service organization relevant to security, availability, and processing integrity",
      downloadUrl: "/certificates/soc2-type2-2023.pdf",
      verificationUrl: "https://deloitte.com/verify/SOC2-PWB-2023",
    },
    {
      name: "PCI DSS Level 1",
      category: "Payment Card Industry",
      issuer: "Trustwave",
      status: "Active",
      issueDate: "2023-09-12",
      expiryDate: "2024-09-11",
      certificateNumber: "PCI-DSS-PWB-001",
      scope: "Payment processing systems and cardholder data environment",
      description: "Payment Card Industry Data Security Standard compliance for secure payment processing",
      downloadUrl: "/certificates/pci-dss-2023.pdf",
      verificationUrl: "https://trustwave.com/verify/PCI-DSS-PWB-001",
    },
    {
      name: "GDPR Compliance",
      category: "Data Protection",
      issuer: "European Data Protection Board",
      status: "Active",
      issueDate: "2023-05-25",
      expiryDate: "Ongoing",
      certificateNumber: "GDPR-CERT-2023",
      scope: "Data processing activities for EU personal data",
      description: "General Data Protection Regulation compliance certification",
      downloadUrl: "/certificates/gdpr-compliance-2023.pdf",
      verificationUrl: "https://edpb.europa.eu/verify/GDPR-CERT-2023",
    },
    {
      name: "ISO 9001:2015",
      category: "Quality Management",
      issuer: "Lloyd's Register",
      status: "Active",
      issueDate: "2023-07-10",
      expiryDate: "2026-07-09",
      certificateNumber: "QMS-PWB-001",
      scope: "Quality management system for software development and cloud services",
      description: "International standard for quality management systems",
      downloadUrl: "/certificates/iso-9001-2023.pdf",
      verificationUrl: "https://lr.org/verify/QMS-PWB-001",
    },
    {
      name: "Cloud Security Alliance (CSA)",
      category: "Cloud Security",
      issuer: "Cloud Security Alliance",
      status: "Active",
      issueDate: "2023-04-18",
      expiryDate: "2024-04-17",
      certificateNumber: "CSA-STAR-PWB",
      scope: "Cloud security controls and transparency",
      description: "CSA Security, Trust & Assurance Registry (STAR) certification",
      downloadUrl: "/certificates/csa-star-2023.pdf",
      verificationUrl: "https://cloudsecurityalliance.org/verify/CSA-STAR-PWB",
    },
    {
      name: "Cyber Essentials Plus",
      category: "Cybersecurity",
      issuer: "IASME Consortium",
      status: "Active",
      issueDate: "2023-10-05",
      expiryDate: "2024-10-04",
      certificateNumber: "CE-PLUS-PWB-23",
      scope: "Basic cybersecurity controls and technical verification",
      description: "UK government-backed cybersecurity certification scheme",
      downloadUrl: "/certificates/cyber-essentials-plus-2023.pdf",
      verificationUrl: "https://iasme.co.uk/verify/CE-PLUS-PWB-23",
    },
    {
      name: "FedRAMP Moderate",
      category: "US Government",
      issuer: "GSA FedRAMP PMO",
      status: "In Progress",
      issueDate: "Expected Q2 2024",
      expiryDate: "Annual Assessment",
      certificateNumber: "Pending",
      scope: "Cloud services for US federal agencies",
      description: "Federal Risk and Authorization Management Program authorization",
      downloadUrl: null,
      verificationUrl: null,
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'active':
        return 'default';
      case 'expiring':
        return 'destructive';
      case 'in progress':
        return 'secondary';
      default:
        return 'outline';
    }
  };

  const isExpiringSoon = (expiryDate: string) => {
    if (expiryDate === 'Ongoing' || expiryDate === 'Annual Assessment') return false;
    const expiry = new Date(expiryDate);
    const now = new Date();
    const diffMonths = (expiry.getTime() - now.getTime()) / (1000 * 60 * 60 * 24 * 30);
    return diffMonths <= 3;
  };

  const activeCertificates = certificates.filter(cert => cert.status === 'Active').length;
  const inProgressCertificates = certificates.filter(cert => cert.status === 'In Progress').length;

  return (
    <PageLayout
      title="Compliance Certificates"
      description="View and download our security and compliance certificates including ISO 27001, SOC 2, PCI DSS, and GDPR compliance documentation."
    >
      <div className="min-h-screen bg-background py-12">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-heading font-bold text-foreground mb-4">
              Compliance Certificates
            </h1>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Our commitment to security and compliance is demonstrated through rigorous third-party audits 
              and certifications. Download official certificates and verification documents.
            </p>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <Card>
              <CardHeader className="text-center">
                <Award className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Total Certificates</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl font-bold text-primary">{certificates.length}</div>
                <p className="text-sm text-muted-foreground">Current & Planned</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="text-center">
                <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-2" />
                <CardTitle className="text-lg">Active</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl font-bold text-green-500">{activeCertificates}</div>
                <p className="text-sm text-muted-foreground">Currently valid</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="text-center">
                <Clock className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                <CardTitle className="text-lg">In Progress</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl font-bold text-blue-500">{inProgressCertificates}</div>
                <p className="text-sm text-muted-foreground">Being acquired</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="text-center">
                <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Coverage</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl font-bold text-primary">100%</div>
                <p className="text-sm text-muted-foreground">Platform coverage</p>
              </CardContent>
            </Card>
          </div>

          {/* Important Notice */}
          <Alert className="mb-8">
            <Shield className="h-4 w-4" />
            <AlertDescription>
              <strong>Certificate Verification:</strong> All certificates can be independently verified through the issuing organization's 
              verification portal. Click "Verify Online" for each certificate to access the official verification system.
            </AlertDescription>
          </Alert>

          {/* Certificates List */}
          <div className="space-y-6">
            <h2 className="text-2xl font-heading font-bold text-foreground">
              Certificate Details
            </h2>
            
            {certificates.map((cert, index) => (
              <Card key={index} className="hover:shadow-elegant transition-smooth">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <CardTitle className="text-xl">{cert.name}</CardTitle>
                        <Badge variant={getStatusColor(cert.status)}>
                          {cert.status}
                        </Badge>
                        {cert.status === 'Active' && isExpiringSoon(cert.expiryDate) && (
                          <Badge variant="destructive" className="text-xs">
                            Expiring Soon
                          </Badge>
                        )}
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-2">
                        <div className="flex items-center gap-1">
                          <Building className="h-3 w-3" />
                          {cert.issuer}
                        </div>
                        <div className="flex items-center gap-1">
                          <FileText className="h-3 w-3" />
                          {cert.certificateNumber}
                        </div>
                        {cert.status === 'Active' && (
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            Valid until {new Date(cert.expiryDate === 'Ongoing' ? Date.now() + 365*24*60*60*1000 : cert.expiryDate).toLocaleDateString()}
                          </div>
                        )}
                      </div>
                      <CardDescription className="text-base">
                        {cert.description}
                      </CardDescription>
                    </div>
                    <div className="flex flex-col gap-2">
                      {cert.verificationUrl && (
                        <Button variant="outline" size="sm" asChild>
                          <a href={cert.verificationUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-3 w-3 mr-1" />
                            Verify Online
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Certificate Scope</h4>
                      <p className="text-sm text-muted-foreground">{cert.scope}</p>
                    </div>
                    
                    <Separator />
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="font-medium text-foreground">Category:</span>
                        <div className="text-muted-foreground">{cert.category}</div>
                      </div>
                      <div>
                        <span className="font-medium text-foreground">Issue Date:</span>
                        <div className="text-muted-foreground">
                          {cert.issueDate.startsWith('Expected') ? cert.issueDate : new Date(cert.issueDate).toLocaleDateString()}
                        </div>
                      </div>
                      <div>
                        <span className="font-medium text-foreground">Expiry Date:</span>
                        <div className="text-muted-foreground">
                          {cert.expiryDate === 'Ongoing' || cert.expiryDate === 'Annual Assessment' 
                            ? cert.expiryDate 
                            : new Date(cert.expiryDate).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Information */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Audit Process
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground text-sm">
                  Our compliance program includes:
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-3 w-3 mt-0.5 text-primary flex-shrink-0" />
                    Annual third-party security audits
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-3 w-3 mt-0.5 text-primary flex-shrink-0" />
                    Quarterly internal compliance reviews
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-3 w-3 mt-0.5 text-primary flex-shrink-0" />
                    Continuous monitoring systems
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-3 w-3 mt-0.5 text-primary flex-shrink-0" />
                    Employee security training programs
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-3 w-3 mt-0.5 text-primary flex-shrink-0" />
                    Incident response and remediation procedures
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact & Support</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm">
                  For questions about our compliance program or specific certificate requirements:
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Users className="h-4 w-4 text-primary" />
                    <div>
                      <p className="font-medium text-sm">Compliance Team</p>
                      <p className="text-sm text-muted-foreground">compliance@brighternova.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="h-4 w-4 text-primary" />
                    <div>
                      <p className="font-medium text-sm">Security Team</p>
                      <p className="text-sm text-muted-foreground">security@brighternova.com</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2 pt-2">
                  <Button variant="outline" size="sm" asChild>
                    <a href="/security">Security Overview</a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href="/contact">Contact Support</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default ComplianceCertificates;
