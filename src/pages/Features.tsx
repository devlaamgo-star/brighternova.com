import PageLayout from "@/components/shared/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Shield, 
  Clock, 
  Database, 
  RotateCcw, 
  Users, 
  FileText,
  Zap,
  Lock,
  Globe,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  Bell,
  Code,
  Settings,
  Star,
  Sparkles,
  Target,
  Play
} from "lucide-react";

const Features = () => {
  const primaryFeatures = [
    {
      icon: Clock,
      title: "Smart Automation",
      description: "Intelligent backup scheduling that adapts to your workflow patterns and system load.",
      features: ["Zero-config setup", "Smart scheduling", "Auto-retry logic", "Load balancing"],
      color: "text-blue-500"
    },
    {
      icon: Shield,
      title: "Military-Grade Security",
      description: "Enterprise-level encryption with zero-knowledge architecture for maximum data protection.",
      features: ["AES-256 encryption", "Zero-knowledge", "Multi-factor auth", "Role-based access"],
      color: "text-green-500"
    },
    {
      icon: Database,
      title: "Universal Database Support",
      description: "Native support for all major databases with optimized backup strategies.",
      features: ["MySQL & PostgreSQL", "MongoDB & Redis", "Point-in-time recovery", "Schema validation"],
      color: "text-purple-500"
    },
    {
      icon: Globe,
      title: "Multi-Cloud Native",
      description: "Seamlessly works across all major cloud providers with intelligent redundancy.",
      features: ["AWS, GCP, Azure", "Cross-region backup", "Provider failover", "Hybrid support"],
      color: "text-orange-500"
    }
  ];

  const secondaryFeatures = [
    {
      icon: RotateCcw,
      title: "Instant Recovery",
      description: "One-click data restoration with granular control over what and when to restore."
    },
    {
      icon: Lock,
      title: "Smart Retention",
      description: "AI-powered retention policies that optimize storage costs while meeting compliance."
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Advanced team management with role-based permissions and audit trails."
    },
    {
      icon: Bell,
      title: "Intelligent Alerts",
      description: "Smart notifications that reduce noise while keeping you informed of critical issues."
    },
    {
      icon: Code,
      title: "Developer-First API",
      description: "Comprehensive REST API and CLI tools designed for modern development workflows."
    },
    {
      icon: Settings,
      title: "Custom Workflows",
      description: "Flexible pre/post-backup hooks and integrations with your existing tools."
    }
  ];

  const stats = [
    { value: "99.99%", label: "Uptime SLA" },
    { value: "< 10min", label: "Recovery Time" },
    { value: "256-bit", label: "Encryption" },
    { value: "24/7", label: "Support" }
  ];

  return (
    <PageLayout 
      title="Features - Complete Backup Solution"
      description="Discover Novabuckups' comprehensive backup features including automated scheduling, enterprise security, universal database support, and intelligent recovery for modern teams."
    >
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 bg-gradient-to-br from-background via-muted/30 to-background overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-6 border-primary/20 text-primary">
              <Sparkles className="h-4 w-4 mr-2" />
              Complete Backup Platform
            </Badge>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Professional backup features
              <span className="block text-primary">built for modern teams</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
              Everything you need to protect, manage, and recover your critical data with 
              enterprise-grade security and developer-friendly automation.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 group" asChild>
                <Link to="/signup">
                  Start Free Trial
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/demo">
                  <Play className="h-4 w-4 mr-2" />
                  View Live Demo
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Primary Features */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              <Target className="h-4 w-4 mr-2" />
              Core Features
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Everything you need in one platform
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Four pillars of professional backup management designed to scale 
              with your business from startup to enterprise.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {primaryFeatures.map((feature, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-lg bg-muted ${feature.color} bg-opacity-10`}>
                      <feature.icon className={`h-6 w-6 ${feature.color}`} />
                    </div>
                    <Badge variant="outline" className="text-xs">
                      Essential
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {feature.features.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Secondary Features */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Advanced capabilities for power users
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Extended features that make Novabuckups the complete solution 
              for teams that demand more from their backup infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {secondaryFeatures.map((feature, index) => (
              <Card key={index} className="group hover:shadow-md transition-all duration-300 bg-background/50 backdrop-blur-sm border-border/50 hover:border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <feature.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-semibold group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-gradient-to-r from-primary/5 via-background to-accent/5 rounded-2xl p-8 lg:p-12 border border-border/50">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Why teams choose Novabuckups
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                See how we compare to traditional backup solutions and why 
                thousands of developers trust us with their critical data.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-full bg-green-100 text-green-600">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Zero Configuration Required</h3>
                    <p className="text-sm text-muted-foreground">
                      Get started in minutes with intelligent defaults that work for 99% of use cases.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-full bg-blue-100 text-blue-600">
                    <Shield className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Security-First Architecture</h3>
                    <p className="text-sm text-muted-foreground">
                      Built with zero-knowledge encryption and enterprise security standards.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-full bg-purple-100 text-purple-600">
                    <Zap className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Developer Experience Focus</h3>
                    <p className="text-sm text-muted-foreground">
                      Comprehensive APIs, CLI tools, and integrations that developers actually want to use.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-background/50 backdrop-blur-sm rounded-xl p-8 border border-border/50">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
                    <Star className="h-4 w-4" />
                    Most Popular
                  </div>
                  <h3 className="text-2xl font-bold">Professional Plan</h3>
                  <p className="text-muted-foreground">Perfect for growing teams</p>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Automated backups</span>
                    <CheckCircle className="h-4 w-4 text-green-500" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Multi-cloud support</span>
                    <CheckCircle className="h-4 w-4 text-green-500" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Team collaboration</span>
                    <CheckCircle className="h-4 w-4 text-green-500" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Priority support</span>
                    <CheckCircle className="h-4 w-4 text-green-500" />
                  </div>
                </div>
                
                <Button className="w-full" variant="outline" asChild>
                  <Link to="/signup">Start Free Trial</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to protect your data?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join thousands of developers who trust Novabuckups with their critical data. 
              Start your free trial today - no credit card required.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                <Link to="/signup">
                  Start Free Trial
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/schedule-demo">
                  Schedule Demo
                </Link>
              </Button>
            </div>
            
            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Features;
