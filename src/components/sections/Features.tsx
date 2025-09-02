import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Clock, 
  Database, 
  RotateCcw, 
  Users, 
  FileText,
  Zap,
  Lock,
  Globe
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Clock,
      title: "Automated Scheduling",
      description: "Set up backup schedules that run automatically. Daily, weekly, or custom intervals – never miss a backup again.",
      badge: "Popular"
    },
    {
      icon: Shield,
      title: "Military-Grade Security",
      description: "End-to-end encryption, secure key management, and zero-knowledge architecture protect your data.",
      badge: "Security"
    },
    {
      icon: Database,
      title: "Multi-Database Support",
      description: "MySQL, PostgreSQL, MongoDB, and more. Dump, compress, and store your databases safely.",
      badge: "Databases"
    },
    {
      icon: RotateCcw,
      title: "One-Click Restore",
      description: "Disaster recovery made simple. Restore your data to any point in time with just one click.",
      badge: "Recovery"
    },
    {
      icon: Users,
      title: "Team Management",
      description: "Role-based access control, team permissions, and collaborative backup management.",
      badge: "Teams"
    },
    {
      icon: FileText,
      title: "Comprehensive Audit Logs",
      description: "Track every backup, restore, and access event. Complete transparency for compliance.",
      badge: "Compliance"
    },
    {
      icon: Zap,
      title: "Lightning Fast Setup",
      description: "Connect your infrastructure in minutes, not hours. Our CLI and API make integration seamless.",
      badge: "Developer"
    },
    {
      icon: Lock,
      title: "Retention Policies",
      description: "Intelligent backup retention with custom rules. Keep what you need, delete what you don't.",
      badge: "Storage"
    },
    {
      icon: Globe,
      title: "Multi-Cloud Support",
      description: "Works with AWS, Google Cloud, Azure, DigitalOcean, and more. Your choice of provider.",
      badge: "Cloud"
    }
  ];

  const badgeVariants = {
    "Popular": "bg-primary/20 text-primary border-primary/30",
    "Security": "bg-destructive/20 text-destructive border-destructive/30",
    "Databases": "bg-accent/20 text-accent border-accent/30",
    "Recovery": "bg-warning/20 text-warning border-warning/30",
    "Teams": "bg-muted/20 text-muted-foreground border-muted/30",
    "Compliance": "bg-primary/20 text-primary border-primary/30",
    "Developer": "bg-accent/20 text-accent border-accent/30",
    "Storage": "bg-muted/20 text-muted-foreground border-muted/30",
    "Cloud": "bg-primary/20 text-primary border-primary/30"
  };

  return (
    <section id="features" className="py-12 lg:py-16 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4">
            Features
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold text-balance mb-6">
            Everything you need for 
            <span className="text-primary"> professional backups</span>
          </h2>
          <p className="text-lg text-muted-foreground text-balance">
            From automated scheduling to disaster recovery, we've built every feature 
            you need to protect your data and sleep soundly.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20 bg-gradient-card">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <Badge 
                    variant="outline" 
                    className={`text-xs ${badgeVariants[feature.badge as keyof typeof badgeVariants] || badgeVariants.Popular}`}
                  >
                    {feature.badge}
                  </Badge>
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Want to see all features in action?
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/docs" 
              className="text-primary hover:underline font-medium"
            >
              Read the documentation →
            </a>
            <span className="text-muted-foreground hidden sm:inline">•</span>
            <a 
              href="#pricing" 
              className="text-primary hover:underline font-medium"
            >
              View pricing plans →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;