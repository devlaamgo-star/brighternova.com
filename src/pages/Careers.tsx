import { MapPin, Clock, Users, Heart, Zap, Shield, ArrowRight, CheckCircle, Globe, Coffee, Laptop, Plane } from "lucide-react";
import PageLayout from "@/components/shared/PageLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const Careers = () => {
  const openPositions = [
    {
      title: "Senior Backend Engineer",
      department: "Engineering",
      location: "Remote (UK timezone)",
      type: "Full-time",
      experience: "5+ years",
      description: "Build and scale our backup automation infrastructure using Go, PostgreSQL, and cloud technologies.",
      skills: ["Go", "PostgreSQL", "AWS", "Docker", "Kubernetes"],
      urgent: false,
    },
    {
      title: "Frontend Developer",
      department: "Engineering",
      location: "Remote (EU timezone)",
      type: "Full-time",
      experience: "3+ years",
      description: "Create beautiful, intuitive user interfaces for our backup management platform using React and TypeScript.",
      skills: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
      urgent: true,
    },
    {
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "Remote (Global)",
      type: "Full-time",
      experience: "4+ years",
      description: "Manage and optimize our cloud infrastructure, CI/CD pipelines, and monitoring systems.",
      skills: ["AWS", "Terraform", "Kubernetes", "Monitoring", "CI/CD"],
      urgent: false,
    },
    {
      title: "Customer Success Manager",
      department: "Customer Success",
      location: "London, UK",
      type: "Full-time",
      experience: "2+ years",
      description: "Help our customers succeed with Novabuckups, drive adoption, and ensure customer satisfaction.",
      skills: ["Customer Success", "SaaS", "Communication", "Problem Solving"],
      urgent: false,
    },
    {
      title: "Technical Writer",
      department: "Product",
      location: "Remote (UK timezone)",
      type: "Contract",
      experience: "3+ years",
      description: "Create comprehensive documentation, tutorials, and help content for our backup automation platform.",
      skills: ["Technical Writing", "API Documentation", "Markdown", "Git"],
      urgent: false,
    },
  ];

  const benefits = [
    {
      title: "Competitive Salary",
      description: "Market-leading compensation with equity options",
      icon: Heart,
    },
    {
      title: "Remote First",
      description: "Work from anywhere with flexible hours",
      icon: Globe,
    },
    {
      title: "Health & Wellness",
      description: "Comprehensive health insurance and wellness budget",
      icon: Shield,
    },
    {
      title: "Learning Budget",
      description: "£2,000 annual budget for courses, conferences, and books",
      icon: Zap,
    },
    {
      title: "Top Equipment",
      description: "Latest MacBook Pro and any tools you need",
      icon: Laptop,
    },
    {
      title: "Unlimited PTO",
      description: "Take the time you need to recharge and stay productive",
      icon: Coffee,
    },
    {
      title: "Team Retreats",
      description: "Annual company retreats in beautiful locations",
      icon: Plane,
    },
    {
      title: "Stock Options",
      description: "Equity participation for all full-time employees",
      icon: Users,
    },
  ];

  const values = [
    {
      title: "Customer Obsession",
      description: "We put our customers at the center of everything we do, building products that truly solve their problems.",
    },
    {
      title: "Technical Excellence",
      description: "We strive for the highest standards in code quality, system design, and product reliability.",
    },
    {
      title: "Transparency",
      description: "We believe in open communication, honest feedback, and sharing knowledge across the team.",
    },
    {
      title: "Continuous Learning",
      description: "We encourage experimentation, learning from mistakes, and growing both personally and professionally.",
    },
  ];

  const hiringProcess = [
    {
      step: "1",
      title: "Application Review",
      description: "We review your application and portfolio within 2-3 business days.",
      duration: "2-3 days",
    },
    {
      step: "2",
      title: "Initial Call",
      description: "30-minute call with our recruiting team to discuss the role and your background.",
      duration: "30 minutes",
    },
    {
      step: "3",
      title: "Technical Interview",
      description: "Technical discussion and coding exercise relevant to the role.",
      duration: "60 minutes",
    },
    {
      step: "4",
      title: "Team Interview",
      description: "Meet the team you'll be working with and discuss collaboration.",
      duration: "45 minutes",
    },
    {
      step: "5",
      title: "Final Interview",
      description: "Culture fit discussion with leadership team members.",
      duration: "30 minutes",
    },
    {
      step: "6",
      title: "Offer & Onboarding",
      description: "We'll make an offer and help you get started on your first day.",
      duration: "1-2 days",
    },
  ];

  return (
    <PageLayout
      title="Careers"
      description="Join our team at Novabuckups and help build the future of backup automation. Explore open positions and learn about our culture, benefits, and hiring process."
    >
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-subtle py-20 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-foreground mb-6">
              Join Our Mission
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Help us build the most reliable, secure, and user-friendly backup automation platform. 
              Work with a passionate team that values innovation, quality, and customer success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="bg-gradient-primary shadow-glow" onClick={() => window.location.href = "/jobs"}>
                View Open Positions
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/about">
                  Learn About Our Culture
                </Link>
              </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span>25+ Team Members</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4" />
                <span>Remote First</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="h-4 w-4" />
                <span>95% Employee Satisfaction</span>
              </div>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
                Open Positions
              </h2>
              <p className="text-muted-foreground text-lg">
                Join our growing team and make an impact from day one
              </p>
            </div>

            <div className="space-y-6 max-w-4xl mx-auto">
              {openPositions.map((position, index) => (
                <Card key={index} className="hover:shadow-elegant transition-smooth">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <CardTitle className="text-xl">{position.title}</CardTitle>
                          {position.urgent && (
                            <Badge variant="destructive" className="text-xs">
                              Urgent
                            </Badge>
                          )}
                        </div>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Users className="h-3 w-3" />
                            {position.department}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {position.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {position.type}
                          </div>
                          <div className="flex items-center gap-1">
                            <CheckCircle className="h-3 w-3" />
                            {position.experience}
                          </div>
                        </div>
                      </div>
                      <Button 
                        className="w-full md:w-auto"
                        onClick={() => window.location.href = `/apply?position=${encodeURIComponent(position.title)}`}
                      >
                        Apply Now
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{position.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {position.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <p className="text-muted-foreground mb-4">
                Don't see a role that fits? We're always looking for exceptional talent.
              </p>
              <Button variant="outline" asChild>
                <Link to="/hr-contact">
                  Send Us Your CV
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
                Why Work With Us?
              </h2>
              <p className="text-muted-foreground text-lg">
                We believe in taking care of our team so they can do their best work
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit) => (
                <Card key={benefit.title} className="text-center hover:shadow-elegant transition-smooth">
                  <CardHeader>
                    <div className="bg-gradient-primary p-3 rounded-lg w-fit mx-auto mb-4 shadow-glow">
                      <benefit.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-lg">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
                Our Values
              </h2>
              <p className="text-muted-foreground text-lg">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {values.map((value) => (
                <Card key={value.title} className="border-l-4 border-l-primary">
                  <CardHeader>
                    <CardTitle className="text-lg">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Hiring Process */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
                Our Hiring Process
              </h2>
              <p className="text-muted-foreground text-lg">
                A transparent, efficient process designed to get to know each other
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {hiringProcess.map((step) => (
                  <Card key={step.step} className="relative">
                    <CardHeader>
                      <div className="bg-gradient-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm mb-4 shadow-glow">
                        {step.step}
                      </div>
                      <CardTitle className="text-lg">{step.title}</CardTitle>
                      <CardDescription className="text-primary font-medium">
                        {step.duration}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm">{step.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

      </div>
    </PageLayout>
  );
};

export default Careers;
