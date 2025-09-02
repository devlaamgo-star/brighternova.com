import PageLayout from "@/components/shared/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Users, 
  Target, 
  Award,
  ArrowRight,
  Shield,
  Heart,
  Zap,
  Globe,
  Mail,
  Phone
} from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Security First",
      description: "Every decision we make prioritises the security and privacy of your data. We believe trust is earned through transparency and robust security practices."
    },
    {
      icon: Heart,
      title: "Customer Obsessed",
      description: "We're obsessed with solving real problems for developers. Your feedback drives our roadmap and shapes our product decisions."
    },
    {
      icon: Zap,
      title: "Simplicity",
      description: "Complex problems deserve simple solutions. We believe backup shouldn't be complicated, even when your infrastructure is."
    },
    {
      icon: Globe,
      title: "Open & Transparent",
      description: "No hidden fees, no surprises, no black boxes. We believe in honest pricing, clear documentation, and transparent communication."
    }
  ];

  const timeline = [
    {
      year: "2024",
      title: "Foundation",
      description: "BRIGHTER NOVA LTD founded in London, UK with a mission to simplify backup automation for developers worldwide."
    },
    {
      year: "2024",
      title: "Product Launch",
      description: "Novabuckups launched with support for major cloud providers and database systems. First customers begin automated backups."
    },
    {
      year: "2024",
      title: "Growing Team",
      description: "Expanded team with backup specialists, security experts, and customer success professionals."
    },
    {
      year: "2025",
      title: "Enterprise Ready",
      description: "Advanced compliance features, enterprise integrations, and dedicated support for larger organisations."
    }
  ];

  const stats = [
    { number: "1000+", label: "Backups Protected Daily" },
    { number: "99.9%", label: "Uptime SLA" },
    { number: "256-bit", label: "AES Encryption" },
    { number: "<5min", label: "Average Setup Time" }
  ];

  const team = [
    {
      name: "Sarah Chen",
      role: "Founder & CEO",
      bio: "Former senior engineer at major cloud providers. 10+ years building scalable backup systems.",
      expertise: ["Cloud Architecture", "Backup Systems", "Product Strategy"]
    },
    {
      name: "David Kumar", 
      role: "CTO",
      bio: "Database specialist with extensive experience in enterprise backup solutions and disaster recovery.",
      expertise: ["Database Systems", "Security", "Infrastructure"]
    },
    {
      name: "Emma Thompson",
      role: "Head of Security",
      bio: "Cybersecurity expert specialising in encryption, compliance, and data protection regulations.",
      expertise: ["Security", "Compliance", "Privacy"]
    },
    {
      name: "Michael Rodriguez",
      role: "Customer Success",
      bio: "DevOps background with passion for helping teams build resilient backup strategies.",
      expertise: ["Customer Success", "DevOps", "Training"]
    }
  ];

  return (
    <PageLayout 
      title="About Us - The Team Behind Novabuckups"
      description="Meet the team building professional backup automation. Based in London, UK, BRIGHTER NOVA LTD is dedicated to simplifying backup for developers worldwide."
    >
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="glass mb-6">
              <Users className="h-4 w-4 mr-2" />
              About BRIGHTER NOVA LTD
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
              Building the future of 
              <span className="block">backup automation</span>
            </h1>
            <p className="text-xl lg:text-2xl text-primary-foreground/80 text-balance mb-8 max-w-3xl mx-auto">
              We're a UK-based team of backup specialists, security experts, and 
              developers on a mission to make data protection simple and reliable.
            </p>
            <div className="flex items-center justify-center gap-8 text-primary-foreground/60 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>London, United Kingdom</span>
              </div>
              <div className="flex items-center gap-2">
                <Target className="h-4 w-4" />
                <span>Founded 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4" />
                <span>UK Company 16626529</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Our <span className="text-primary">mission &amp; values</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
              We believe that every developer should have access to enterprise-grade backup solutions 
              without the enterprise complexity. Our mission is to democratise data protection.
            </p>
            
            {/* Mission Statement */}
            <Card className="bg-gradient-card border-primary/20 p-8 mb-12 max-w-4xl mx-auto">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To provide developers and teams worldwide with simple, secure, and reliable 
                  backup automation that scales from personal projects to enterprise infrastructure. 
                  We believe data protection should be accessible, transparent, and trustworthy.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20 bg-background">
                <CardContent className="p-8">
                  <div className="bg-primary/10 p-4 rounded-xl group-hover:bg-primary/20 transition-colors w-fit mb-6">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Meet the <span className="text-primary">team</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our diverse team combines deep technical expertise with a passion for 
              solving real-world backup challenges for developers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 bg-gradient-card border-border/50 hover:border-primary/20">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full mb-4 flex items-center justify-center text-primary-foreground font-bold text-xl">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-primary font-medium">{member.role}</p>
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {member.bio}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Our <span className="text-primary">journey</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From concept to serving customers worldwide, here's how we're building 
              the future of backup automation.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                      {item.year.slice(-2)}
                    </div>
                  </div>
                  <div className="flex-1 pb-8">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <div className="text-sm text-muted-foreground mb-2">{item.year}</div>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-gradient-card border-border/50">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Get in touch</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-primary" />
                      <div>
                        <div className="font-medium">Email</div>
                        <a href="mailto:hello@brighternova.com" className="text-muted-foreground hover:text-primary">
                          hello@brighternova.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-primary" />
                      <div>
                        <div className="font-medium">Phone</div>
                        <a href="tel:+447418639569" className="text-muted-foreground hover:text-primary">
                          +44 7418 639569
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-primary" />
                      <div>
                        <div className="font-medium">Address</div>
                        <div className="text-muted-foreground">
                          2 Frederick Street, Kings Cross<br />
                          London, WC1X 0ND<br />
                          United Kingdom
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-border/50">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Work with us</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    We're always looking for talented individuals who share our passion 
                    for building reliable, secure backup solutions.
                  </p>
                  <div className="space-y-4">
                    <Button variant="outline" className="w-full group" asChild>
                      <a href="/careers">
                        View Open Positions
                        <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
