import { useState } from "react";
import { MapPin, Clock, Users, CheckCircle, ArrowRight, Search, Filter } from "lucide-react";
import PageLayout from "@/components/shared/PageLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const OpenPositions = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [departmentFilter, setDepartmentFilter] = useState("all");
  const [locationFilter, setLocationFilter] = useState("all");

  const openPositions = [
    {
      id: 1,
      title: "Senior Backend Engineer",
      department: "Engineering",
      location: "Remote (UK timezone)",
      type: "Full-time",
      experience: "5+ years",
      description: "Build and scale our backup automation infrastructure using Go, PostgreSQL, and cloud technologies. You'll work on critical systems that ensure data reliability for thousands of customers.",
      skills: ["Go", "PostgreSQL", "AWS", "Docker", "Kubernetes", "Microservices"],
      urgent: false,
      salary: "£80,000 - £120,000",
      posted: "2 days ago",
      responsibilities: [
        "Design and implement scalable backend services",
        "Optimize database performance and reliability",
        "Build monitoring and alerting systems",
        "Collaborate with frontend team on API design",
        "Mentor junior developers"
      ],
      requirements: [
        "5+ years experience with Go or similar language",
        "Strong PostgreSQL and database design skills",
        "Experience with cloud platforms (AWS preferred)",
        "Knowledge of containerization and orchestration",
        "Understanding of distributed systems"
      ]
    },
    {
      id: 2,
      title: "Frontend Developer",
      department: "Engineering",
      location: "Remote (EU timezone)",
      type: "Full-time",
      experience: "3+ years",
      description: "Create beautiful, intuitive user interfaces for our backup management platform using React and TypeScript. Join our mission to make data backup simple and accessible.",
      skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Testing"],
      urgent: true,
      salary: "£55,000 - £75,000",
      posted: "1 week ago",
      responsibilities: [
        "Develop responsive web applications",
        "Implement UI/UX designs with pixel-perfect accuracy",
        "Write comprehensive tests for components",
        "Optimize application performance",
        "Collaborate with design team"
      ],
      requirements: [
        "3+ years of React development experience",
        "Strong TypeScript skills",
        "Experience with modern CSS frameworks",
        "Knowledge of testing frameworks",
        "Understanding of web performance optimization"
      ]
    },
    {
      id: 3,
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "Remote (Global)",
      type: "Full-time",
      experience: "4+ years",
      description: "Manage and optimize our cloud infrastructure, CI/CD pipelines, and monitoring systems. Ensure our platform scales reliably as we grow.",
      skills: ["AWS", "Terraform", "Kubernetes", "Monitoring", "CI/CD", "Security"],
      urgent: false,
      salary: "£70,000 - £95,000",
      posted: "3 days ago",
      responsibilities: [
        "Manage AWS infrastructure using Terraform",
        "Build and maintain CI/CD pipelines",
        "Implement monitoring and alerting solutions",
        "Ensure security best practices",
        "Support development teams"
      ],
      requirements: [
        "4+ years DevOps or SRE experience",
        "Strong AWS and Terraform knowledge",
        "Experience with Kubernetes and Docker",
        "Knowledge of monitoring tools (Prometheus, Grafana)",
        "Understanding of security practices"
      ]
    },
    {
      id: 4,
      title: "Customer Success Manager",
      department: "Customer Success",
      location: "London, UK",
      type: "Full-time",
      experience: "2+ years",
      description: "Help our customers succeed with Novabuckups, drive adoption, and ensure customer satisfaction. Be the voice of our customers and help shape our product.",
      skills: ["Customer Success", "SaaS", "Communication", "Problem Solving", "Analytics"],
      urgent: false,
      salary: "£45,000 - £60,000",
      posted: "5 days ago",
      responsibilities: [
        "Onboard new customers and ensure successful adoption",
        "Monitor customer health metrics",
        "Conduct regular check-ins and business reviews",
        "Identify expansion opportunities",
        "Collaborate with product team on feature requests"
      ],
      requirements: [
        "2+ years in customer success or account management",
        "Experience with SaaS platforms",
        "Strong communication and presentation skills",
        "Data-driven approach to customer success",
        "Problem-solving mindset"
      ]
    },
    {
      id: 5,
      title: "Technical Writer",
      department: "Product",
      location: "Remote (UK timezone)",
      type: "Contract",
      experience: "3+ years",
      description: "Create comprehensive documentation, tutorials, and help content for our backup automation platform. Make complex technical concepts accessible to all users.",
      skills: ["Technical Writing", "API Documentation", "Markdown", "Git", "Developer Tools"],
      urgent: false,
      salary: "£400 - £600/day",
      posted: "1 week ago",
      responsibilities: [
        "Write and maintain API documentation",
        "Create user guides and tutorials",
        "Develop onboarding documentation",
        "Work with engineering teams to document features",
        "Maintain content style and standards"
      ],
      requirements: [
        "3+ years of technical writing experience",
        "Experience documenting APIs and developer tools",
        "Proficiency with Markdown and Git",
        "Ability to explain complex concepts simply",
        "Self-motivated and detail-oriented"
      ]
    },
    {
      id: 6,
      title: "Product Designer",
      department: "Design",
      location: "Remote (EU timezone)",
      type: "Full-time",
      experience: "4+ years",
      description: "Design intuitive user experiences for our backup platform. Work closely with engineering to bring designs to life and improve user satisfaction.",
      skills: ["UI/UX Design", "Figma", "Prototyping", "User Research", "Design Systems"],
      urgent: false,
      salary: "£60,000 - £80,000",
      posted: "2 weeks ago",
      responsibilities: [
        "Design user interfaces and experiences",
        "Conduct user research and usability testing",
        "Maintain and evolve design system",
        "Collaborate with engineering on implementation",
        "Create prototypes and wireframes"
      ],
      requirements: [
        "4+ years of product design experience",
        "Proficiency in Figma and design tools",
        "Experience with design systems",
        "Strong understanding of UX principles",
        "Portfolio demonstrating problem-solving skills"
      ]
    }
  ];

  const departments = ["all", "Engineering", "Infrastructure", "Customer Success", "Product", "Design"];
  const locations = ["all", "Remote", "London, UK", "EU timezone", "UK timezone", "Global"];

  const filteredPositions = openPositions.filter(position => {
    const matchesSearch = position.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         position.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         position.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesDepartment = departmentFilter === "all" || position.department === departmentFilter;
    const matchesLocation = locationFilter === "all" || position.location.includes(locationFilter);
    
    return matchesSearch && matchesDepartment && matchesLocation;
  });

  return (
    <PageLayout
      title="Open Positions"
      description="Explore career opportunities at Novabuckups. Join our team and help build the future of backup automation with competitive salaries and great benefits."
    >
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-subtle py-16">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              Open Positions
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Find your next career opportunity and join our mission to make data backup simple, 
              secure, and reliable for everyone.
            </p>
            <div className="flex justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span>{openPositions.length} Open Positions</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Remote Friendly</span>
              </div>
            </div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="py-8 border-b">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
              <div className="flex-1 max-w-md">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search positions, skills, or keywords..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Select value={departmentFilter} onValueChange={setDepartmentFilter}>
                  <SelectTrigger className="w-full sm:w-48">
                    <Filter className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="Department" />
                  </SelectTrigger>
                  <SelectContent>
                    {departments.map(dept => (
                      <SelectItem key={dept} value={dept}>
                        {dept === "all" ? "All Departments" : dept}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select value={locationFilter} onValueChange={setLocationFilter}>
                  <SelectTrigger className="w-full sm:w-48">
                    <MapPin className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="Location" />
                  </SelectTrigger>
                  <SelectContent>
                    {locations.map(location => (
                      <SelectItem key={location} value={location}>
                        {location === "all" ? "All Locations" : location}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </section>

        {/* Positions List */}
        <section className="py-12">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-heading font-bold text-foreground">
                {filteredPositions.length} Position{filteredPositions.length !== 1 ? 's' : ''} Found
              </h2>
            </div>

            <div className="space-y-6">
              {filteredPositions.map((position) => (
                <Card key={position.id} className="hover:shadow-elegant transition-smooth">
                  <CardHeader>
                    <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <CardTitle className="text-xl">{position.title}</CardTitle>
                          {position.urgent && (
                            <Badge variant="destructive" className="text-xs">
                              Urgent
                            </Badge>
                          )}
                        </div>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
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
                        <div className="flex flex-wrap gap-2 mb-4">
                          <Badge variant="secondary" className="font-medium">
                            {position.salary}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            Posted {position.posted}
                          </Badge>
                        </div>
                      </div>
                      <Button 
                        className="w-full lg:w-auto"
                        onClick={() => window.location.href = `/apply?position=${encodeURIComponent(position.title)}`}
                      >
                        Apply Now
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6">{position.description}</p>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Key Responsibilities</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {position.responsibilities.slice(0, 3).map((resp, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <CheckCircle className="h-3 w-3 mt-0.5 text-primary flex-shrink-0" />
                              {resp}
                            </li>
                          ))}
                          {position.responsibilities.length > 3 && (
                            <li className="text-xs text-muted-foreground/70">
                              +{position.responsibilities.length - 3} more responsibilities
                            </li>
                          )}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Requirements</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {position.requirements.slice(0, 3).map((req, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <CheckCircle className="h-3 w-3 mt-0.5 text-primary flex-shrink-0" />
                              {req}
                            </li>
                          ))}
                          {position.requirements.length > 3 && (
                            <li className="text-xs text-muted-foreground/70">
                              +{position.requirements.length - 3} more requirements
                            </li>
                          )}
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Skills</h4>
                      <div className="flex flex-wrap gap-2">
                        {position.skills.map((skill) => (
                          <Badge key={skill} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredPositions.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground mb-4">
                  No positions found matching your criteria.
                </p>
                <Button variant="outline" onClick={() => {
                  setSearchTerm("");
                  setDepartmentFilter("all");
                  setLocationFilter("all");
                }}>
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
                Don't See The Perfect Role?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                We're always looking for exceptional talent. Send us your CV and we'll keep you in mind for future opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-primary shadow-glow">
                  Send Your CV
                </Button>
                <Button size="lg" variant="outline">
                  Set Job Alerts
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default OpenPositions;