import PageLayout from "@/components/shared/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Target, DollarSign, AlertTriangle, CheckCircle, Clock, Mail, FileText, Users, Award, Zap } from "lucide-react";

const BugBountyProgramme = () => {
  const bountyScope = [
    {
      category: "In Scope",
      icon: Target,
      items: [
        "*.brighternova.com (excluding staging environments)",
        "API endpoints and authentication flows",
        "Data encryption and storage vulnerabilities",
        "Access control bypasses",
        "Cross-site scripting (XSS)",
        "SQL injection vulnerabilities",
        "Server-side request forgery (SSRF)",
        "Authentication and authorization flaws"
      ],
      variant: "default" as const
    },
    {
      category: "Out of Scope",
      icon: Shield,
      items: [
        "Third-party services and integrations",
        "Physical security testing",
        "Social engineering attacks",
        "Denial of service (DoS) attacks",
        "Spam or content injection",
        "Non-security related bugs",
        "Testing environments (*.staging.brighternova.com)",
        "Rate limiting bypasses"
      ],
      variant: "secondary" as const
    }
  ];

  const rewardTiers = [
    {
      severity: "Critical",
      reward: "£2,000 - £5,000",
      description: "Remote code execution, authentication bypass, data breach",
      color: "bg-red-500/10 text-red-500 border-red-500/20",
      icon: AlertTriangle
    },
    {
      severity: "High",
      reward: "£1,000 - £2,000",
      description: "Privilege escalation, sensitive data exposure",
      color: "bg-orange-500/10 text-orange-500 border-orange-500/20",
      icon: Zap
    },
    {
      severity: "Medium",
      reward: "£250 - £1,000",
      description: "Cross-site scripting, CSRF, information disclosure",
      color: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
      icon: Target
    },
    {
      severity: "Low",
      reward: "£50 - £250",
      description: "Minor security issues, configuration problems",
      color: "bg-blue-500/10 text-blue-500 border-blue-500/20",
      icon: Shield
    }
  ];

  const submissionProcess = [
    {
      step: "1",
      title: "Discover",
      description: "Find a security vulnerability within our defined scope",
      timeframe: "Research phase"
    },
    {
      step: "2",
      title: "Report",
      description: "Submit detailed report via our security email",
      timeframe: "Within 24 hours"
    },
    {
      step: "3",
      title: "Triage",
      description: "Our security team reviews and validates the report",
      timeframe: "1-3 business days"
    },
    {
      step: "4",
      title: "Fix",
      description: "We develop and deploy a fix for the vulnerability",
      timeframe: "5-30 days"
    },
    {
      step: "5",
      title: "Reward",
      description: "Bounty payment processed after fix verification",
      timeframe: "Within 14 days"
    }
  ];

  const guidelines = [
    {
      icon: CheckCircle,
      title: "Responsible Disclosure",
      description: "Report vulnerabilities privately before public disclosure",
      details: ["24-hour grace period for initial response", "90-day disclosure timeline", "Coordinate disclosure with our team"]
    },
    {
      icon: Users,
      title: "Testing Guidelines",
      description: "Follow ethical testing practices during research",
      details: ["No testing on production user data", "Minimal impact testing only", "Respect user privacy and data"]
    },
    {
      icon: FileText,
      title: "Quality Reports",
      description: "Provide comprehensive vulnerability documentation",
      details: ["Clear reproduction steps", "Impact assessment", "Proof of concept code/screenshots"]
    },
    {
      icon: Award,
      title: "Recognition",
      description: "Get credited for your security contributions",
      details: ["Hall of fame listing (with permission)", "LinkedIn recommendations", "Public acknowledgment in security advisories"]
    }
  ];

  return (
    <PageLayout 
      title="Bug Bounty Programme - Responsible Security Research Rewards" 
      description="Join our bug bounty programme to help improve Novabuckups security. Earn rewards for responsibly disclosing security vulnerabilities with bounties up to £5,000."
    >
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="glass mb-6">
              <Shield className="h-4 w-4 mr-2" />
              Security Research Programme
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
              Bug bounty 
              <span className="block">programme</span>
            </h1>
            <p className="text-xl lg:text-2xl text-primary-foreground/80 text-balance mb-8 max-w-3xl mx-auto">
              Help us keep Novabuckups secure. Earn rewards up to £5,000 for 
              responsibly disclosing security vulnerabilities.
            </p>
          </div>
        </div>
      </section>

      {/* Reward Tiers */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Bounty <span className="text-primary">rewards</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We offer competitive rewards based on the severity and impact of 
              the security vulnerabilities you discover.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {rewardTiers.map((tier, index) => (
              <Card key={index} className={`border-2 ${tier.color} hover:shadow-lg transition-all duration-300`}>
                <CardHeader className="text-center">
                  <tier.icon className="h-8 w-8 mx-auto mb-2" />
                  <h3 className="text-xl font-bold">{tier.severity}</h3>
                  <div className="text-2xl font-bold text-primary">{tier.reward}</div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground text-center">
                    {tier.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Scope */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Programme <span className="text-primary">scope</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Clear guidelines on what's included and excluded from our 
              bug bounty programme scope.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {bountyScope.map((scope, index) => (
              <Card key={index} className="bg-background border-border/50">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <scope.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">{scope.category}</h3>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {scope.items.map((item, itemIndex) => (
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

      {/* Submission Process */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Submission <span className="text-primary">process</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our streamlined process ensures quick review and fair compensation 
              for security researchers.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {submissionProcess.map((step, index) => (
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

      {/* Guidelines */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Programme <span className="text-primary">guidelines</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Follow these guidelines to ensure your research is eligible 
              for our bug bounty rewards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {guidelines.map((guideline, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-500 border-border/50 hover:border-primary/20 bg-gradient-card">
                <CardHeader>
                  <div className="bg-primary/10 p-4 rounded-xl group-hover:bg-primary/20 transition-colors w-fit">
                    <guideline.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {guideline.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {guideline.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {guideline.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
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
                  <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Ready to Submit a Report?</h3>
                  <p className="text-muted-foreground mb-6">
                    Send your security vulnerability reports to our dedicated security team.
                    All reports are reviewed within 24 hours.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="text-center">
                    <h4 className="font-semibold mb-2">Security Email</h4>
                    <a href="mailto:security@brighternova.com" className="text-primary hover:underline text-lg">
                      security@brighternova.com
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">Encrypted communication preferred</p>
                  </div>
                </div>

                <div className="bg-muted/50 p-6 rounded-lg">
                  <h4 className="font-semibold mb-3">Report Template</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• <strong>Vulnerability Type:</strong> [XSS, SQLi, etc.]</li>
                    <li>• <strong>Affected URL/Endpoint:</strong> [Specific location]</li>
                    <li>• <strong>Reproduction Steps:</strong> [Step-by-step instructions]</li>
                    <li>• <strong>Impact:</strong> [What an attacker could achieve]</li>
                    <li>• <strong>Proof of Concept:</strong> [Screenshots, code, etc.]</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default BugBountyProgramme;
