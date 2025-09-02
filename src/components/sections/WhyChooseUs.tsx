import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Zap, 
  Shield, 
  Clock, 
  Users, 
  Wrench,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  Lightbulb,
  Target,
  Heart,
  Trophy
} from "lucide-react";
import { Link } from "react-router-dom";

const WhyChooseUs = () => {
  const advantages = [
    {
      icon: Zap,
      title: "Lightning Fast Setup",
      description: "Get your first backup running in under 5 minutes. No complex configuration or lengthy onboarding processes.",
      stats: "< 5 min setup",
      highlights: ["One-click integrations", "Smart defaults", "Auto-discovery"]
    },
    {
      icon: Shield,
      title: "Uncompromising Security",
      description: "Military-grade encryption, zero-knowledge architecture, and compliance certifications you can trust.",
      stats: "256-bit encryption",
      highlights: ["End-to-end encryption", "Zero-knowledge", "SOC 2 certified"]
    },
    {
      icon: Clock,
      title: "Reliable & Consistent",
      description: "99.99% uptime SLA with automated failover and redundant infrastructure across multiple regions.",
      stats: "99.99% uptime",
      highlights: ["Multi-region redundancy", "Automated failover", "Real-time monitoring"]
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "Real humans, not bots. Our backup specialists are available 24/7 to help when you need it most.",
      stats: "24/7 support",
      highlights: ["Human experts", "Backup specialists", "Emergency response"]
    },
    {
      icon: Wrench,
      title: "Developer Friendly",
      description: "Comprehensive APIs, detailed documentation, and tools built by developers for developers.",
      stats: "RESTful APIs",
      highlights: ["Complete API access", "CLI tools", "SDK libraries"]
    },
    {
      icon: Target,
      title: "Flexible & Scalable",
      description: "From single databases to enterprise infrastructure. Scale your backups as your business grows.",
      stats: "Unlimited scale",
      highlights: ["Auto-scaling", "Custom schedules", "Multi-environment"]
    }
  ];

  const problems = [
    {
      icon: AlertTriangle,
      problem: "Complex backup setup",
      solution: "One-click configuration with smart defaults"
    },
    {
      icon: AlertTriangle,
      problem: "Unreliable backup schedules",
      solution: "99.99% uptime SLA with automated monitoring"
    },
    {
      icon: AlertTriangle,
      problem: "Security vulnerabilities",
      solution: "Military-grade encryption and zero-knowledge architecture"
    },
    {
      icon: AlertTriangle,
      problem: "Poor customer support",
      solution: "24/7 expert human support from backup specialists"
    }
  ];

  const differentiators = [
    {
      icon: Heart,
      title: "Built for Developers",
      description: "Created by engineers who understand the pain of data loss. Every feature is designed with the developer experience in mind."
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We're constantly pushing the boundaries of backup technology with AI-powered scheduling and predictive recovery."
    },
    {
      icon: Trophy,
      title: "Proven Track Record",
      description: "Trusted by 1,500+ companies worldwide with zero major data loss incidents since our founding."
    }
  ];

  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-6">
            <Trophy className="h-4 w-4 mr-2" />
            Why Choose Novabuckups
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Why thousands of developers 
            <span className="block text-primary">choose Novabuckups</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We're not just another backup service. We're the backup solution built specifically 
            for modern development teams who need reliability, security, and simplicity.
          </p>
        </div>

        {/* Main Advantages */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {advantages.map((advantage, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 bg-gradient-card border-border/50 hover:border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <advantage.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold group-hover:text-primary transition-colors">
                      {advantage.title}
                    </h3>
                    <Badge variant="outline" className="text-xs">
                      {advantage.stats}
                    </Badge>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {advantage.description}
                </p>
                
                <div className="space-y-2">
                  {advantage.highlights.map((highlight, hIndex) => (
                    <div key={hIndex} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Problem vs Solution */}
        <div className="mb-16">
          <h3 className="text-2xl lg:text-3xl font-bold text-center mb-12">
            We solve the problems others ignore
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {problems.map((item, index) => (
              <Card key={index} className="bg-background border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-red-100 dark:bg-red-900/20 p-2 rounded-lg">
                      <item.icon className="h-5 w-5 text-red-600 dark:text-red-400" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-red-600 dark:text-red-400 font-medium mb-1">
                        The Problem:
                      </div>
                      <div className="text-foreground mb-3">{item.problem}</div>
                      <div className="text-sm text-muted-foreground">
                        <span className="text-primary font-medium">Our Solution:</span> {item.solution}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Differentiators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {differentiators.map((diff, index) => (
            <Card key={index} className="text-center bg-gradient-card border-primary/20">
              <CardContent className="p-8">
                <div className="bg-primary/10 p-4 rounded-xl w-fit mx-auto mb-6">
                  <diff.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">{diff.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {diff.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <Card className="bg-gradient-primary">
          <CardContent className="p-8 lg:p-12 text-center">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-black">
              Ready to experience the difference?
            </h3>
            <p className="text-black/80 mb-8 max-w-2xl mx-auto">
              Join thousands of developers who've made the switch to reliable, 
              secure backups. Start your free trial today and see why Novabuckups 
              is the backup solution teams actually love using.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/signup">
                <Button variant="secondary" size="lg" className="group">
                  Start Free Trial
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/schedule-demo">
                <Button variant="outline" size="lg" className="border-white/20 text-black hover:bg-white/10">
                  Schedule Demo
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default WhyChooseUs;
