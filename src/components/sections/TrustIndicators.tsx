import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Award, 
  Lock, 
  Eye, 
  Clock, 
  Globe,
  CheckCircle,
  Users,
  TrendingUp,
  Server
} from "lucide-react";
import dataCenterImage from "@/assets/data-center.jpg";
import securityAbstractImage from "@/assets/security-abstract.jpg";

const TrustIndicators = () => {
  const certifications = [
    {
      icon: Shield,
      title: "SOC 2 Type II",
      description: "Comprehensive security audit covering availability, processing integrity, confidentiality, and privacy",
      status: "Certified",
      year: "2024"
    },
    {
      icon: Lock,
      title: "ISO 27001",
      description: "International standard for information security management systems",
      status: "Compliant",
      year: "2024"
    },
    {
      icon: Eye,
      title: "GDPR Ready",
      description: "Full compliance with European data protection regulation",
      status: "Verified",
      year: "2024"
    },
    {
      icon: Award,
      title: "HIPAA Compliant",
      description: "Healthcare data protection and privacy safeguards",
      status: "Certified",
      year: "2024"
    }
  ];

  const securityFeatures = [
    {
      icon: Lock,
      title: "End-to-End Encryption",
      description: "256-bit AES encryption for data in transit and at rest"
    },
    {
      icon: Shield,
      title: "Zero-Knowledge Architecture", 
      description: "We can't access your data even if we wanted to"
    },
    {
      icon: Clock,
      title: "Point-in-Time Recovery",
      description: "Restore to any moment with granular backup history"
    },
    {
      icon: Globe,
      title: "Multi-Region Redundancy",
      description: "Backups distributed across multiple geographic locations"
    },
    {
      icon: Eye,
      title: "Audit Logging",
      description: "Complete transparency with detailed access logs"
    },
    {
      icon: Server,
      title: "Infrastructure Monitoring",
      description: "24/7 monitoring of backup infrastructure health"
    }
  ];

  const companyInfo = {
    founded: "2024",
    headquarters: "London, United Kingdom",
    companyNumber: "16626529",
    legalName: "BRIGHTER NOVA LTD",
    datacenters: ["UK", "EU", "US", "Asia-Pacific"],
    uptime: "99.99%",
    support: "24/7"
  };

  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-6">
            <Shield className="h-4 w-4 mr-2" />
            Security & Trust
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            <span className="text-primary">Enterprise-grade security</span>
            <br />meets regulatory compliance
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Built from the ground up with security, privacy, and compliance in mind. 
            Your data is protected by the same standards used by Fortune 500 companies.
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative mb-16">
          <img 
            src={dataCenterImage}
            alt="Modern secure data center with advanced server infrastructure and blue lighting"
            className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
          <div className="absolute bottom-8 left-8 text-white">
            <h3 className="text-2xl font-bold mb-2">Military-Grade Infrastructure</h3>
            <p className="text-white/80">Our data centers feature redundant security and 24/7 monitoring</p>
          </div>
        </div>

        {/* Certifications */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {certifications.map((cert, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 bg-gradient-card border-border/50 hover:border-primary/20">
              <CardContent className="p-6 text-center">
                <div className="bg-primary/10 p-4 rounded-xl group-hover:bg-primary/20 transition-colors w-fit mx-auto mb-4">
                  <cert.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                  {cert.description}
                </p>
                <div className="flex items-center justify-center gap-2">
                  <Badge variant="secondary" className="text-xs">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    {cert.status}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{cert.year}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Security Features */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-8">
                How we protect your data
              </h3>
              <div className="space-y-6">
                {securityFeatures.map((feature, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src={securityAbstractImage}
                alt="Abstract digital security visualization with encryption patterns and shield icons"
                className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>

        {/* Company Information */}
        <Card className="bg-gradient-card border-primary/20">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">Transparent & Trustworthy</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We believe in complete transparency. Here's everything you need to know about our company, 
                infrastructure, and commitment to data protection.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">{companyInfo.founded}</div>
                <div className="text-sm font-medium mb-1">Founded</div>
                <div className="text-xs text-muted-foreground">Established in London, UK</div>
              </div>
              
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">{companyInfo.uptime}</div>
                <div className="text-sm font-medium mb-1">Uptime SLA</div>
                <div className="text-xs text-muted-foreground">Guaranteed availability</div>
              </div>
              
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">{companyInfo.datacenters.length}</div>
                <div className="text-sm font-medium mb-1">Data Centers</div>
                <div className="text-xs text-muted-foreground">{companyInfo.datacenters.join(", ")}</div>
              </div>
              
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">{companyInfo.support}</div>
                <div className="text-sm font-medium mb-1">Expert Support</div>
                <div className="text-xs text-muted-foreground">Always available</div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-border/50 text-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                <div>
                  <strong className="text-foreground">Company:</strong> {companyInfo.legalName}
                </div>
                <div>
                  <strong className="text-foreground">Registration:</strong> UK Company {companyInfo.companyNumber}
                </div>
                <div>
                  <strong className="text-foreground">Headquarters:</strong> {companyInfo.headquarters}
                </div>
                <div>
                  <strong className="text-foreground">Compliance:</strong> GDPR, SOC 2, ISO 27001
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default TrustIndicators;