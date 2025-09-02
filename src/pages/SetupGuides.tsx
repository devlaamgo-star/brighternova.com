import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { 
  Cloud,
  Database,
  Server,
  Search,
  FileText,
  Clock,
  CheckCircle,
  ArrowRight,
  ExternalLink,
  Copy,
  Terminal,
  Settings,
  Key,
  Shield,
  Zap,
  Book,
  Play,
  Download
} from "lucide-react";
import { Link } from "react-router-dom";

const SetupGuides = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const guides = [
    // Cloud Providers
    {
      id: "aws-s3",
      title: "Amazon Web Services (AWS S3)",
      category: "cloud",
      description: "Complete setup guide for AWS S3 backup integration",
      setupTime: "5 minutes",
      difficulty: "Easy",
      popular: true,
      steps: [
        "Create AWS IAM user with S3 permissions",
        "Generate access keys",
        "Configure bucket settings",
        "Test connection"
      ],
      requirements: ["AWS Account", "S3 Bucket", "IAM Permissions"]
    },
    {
      id: "gcp-storage",
      title: "Google Cloud Platform (GCS)",
      category: "cloud",
      description: "Setup Google Cloud Storage for automated backups",
      setupTime: "5 minutes",
      difficulty: "Easy",
      popular: true,
      steps: [
        "Create service account",
        "Download JSON key file",
        "Set up storage bucket",
        "Configure authentication"
      ],
      requirements: ["GCP Account", "Storage Bucket", "Service Account"]
    },
    {
      id: "azure-blob",
      title: "Microsoft Azure Blob Storage",
      category: "cloud",
      description: "Configure Azure Blob Storage integration",
      setupTime: "5 minutes",
      difficulty: "Medium",
      popular: false,
      steps: [
        "Create storage account",
        "Generate connection string",
        "Configure container",
        "Set access policies"
      ],
      requirements: ["Azure Account", "Storage Account", "Container"]
    },
    {
      id: "digitalocean-spaces",
      title: "DigitalOcean Spaces",
      category: "cloud",
      description: "Setup DigitalOcean Spaces for backup storage",
      setupTime: "3 minutes",
      difficulty: "Easy",
      popular: true,
      steps: [
        "Create Spaces bucket",
        "Generate API keys",
        "Configure CDN (optional)",
        "Test connectivity"
      ],
      requirements: ["DigitalOcean Account", "Spaces Bucket", "API Keys"]
    },

    // Databases
    {
      id: "mysql-setup",
      title: "MySQL Database Backup",
      category: "database",
      description: "Configure automated MySQL database backups",
      setupTime: "2 minutes",
      difficulty: "Easy",
      popular: true,
      steps: [
        "Create backup user",
        "Grant necessary permissions",
        "Configure connection settings",
        "Schedule backup jobs"
      ],
      requirements: ["MySQL Server", "Admin Access", "Network Connectivity"]
    },
    {
      id: "postgresql-setup",
      title: "PostgreSQL Database Backup",
      category: "database",
      description: "Setup PostgreSQL backup with WAL archiving",
      setupTime: "3 minutes",
      difficulty: "Medium",
      popular: true,
      steps: [
        "Create backup role",
        "Configure pg_hba.conf",
        "Enable WAL archiving",
        "Test backup process"
      ],
      requirements: ["PostgreSQL Server", "Superuser Access", "WAL Configuration"]
    },
    {
      id: "mongodb-setup",
      title: "MongoDB Database Backup",
      category: "database",
      description: "Configure MongoDB backup for replica sets",
      setupTime: "4 minutes",
      difficulty: "Medium",
      popular: true,
      steps: [
        "Create backup user with roles",
        "Configure authentication",
        "Setup replica set backup",
        "Test mongodump process"
      ],
      requirements: ["MongoDB Instance", "Admin User", "Replica Set (recommended)"]
    },
    {
      id: "redis-setup",
      title: "Redis Memory Database",
      category: "database",
      description: "Setup Redis backup with RDB and AOF",
      setupTime: "2 minutes",
      difficulty: "Easy",
      popular: false,
      steps: [
        "Configure redis.conf",
        "Enable RDB snapshots",
        "Setup AOF persistence",
        "Schedule backup sync"
      ],
      requirements: ["Redis Server", "File System Access", "Configuration Rights"]
    },

    // Storage Systems
    {
      id: "sftp-setup",
      title: "SFTP/SCP Server Setup",
      category: "storage",
      description: "Configure secure file transfer backup destination",
      setupTime: "3 minutes",
      difficulty: "Easy",
      popular: true,
      steps: [
        "Setup SSH key authentication",
        "Create backup directory",
        "Configure permissions",
        "Test file transfer"
      ],
      requirements: ["SSH Server", "User Account", "SSH Keys"]
    },
    {
      id: "nfs-setup",
      title: "Network File System (NFS)",
      category: "storage",
      description: "Setup NFS share for backup storage",
      setupTime: "4 minutes",
      difficulty: "Medium",
      popular: false,
      steps: [
        "Configure NFS server",
        "Export backup directory",
        "Mount on client systems",
        "Set proper permissions"
      ],
      requirements: ["NFS Server", "Network Access", "Mount Permissions"]
    },
    {
      id: "local-storage",
      title: "Local File System",
      category: "storage",
      description: "Configure local directory backup storage",
      setupTime: "1 minute",
      difficulty: "Easy",
      popular: false,
      steps: [
        "Create backup directory",
        "Set directory permissions",
        "Configure retention policies",
        "Test write access"
      ],
      requirements: ["Local Storage", "Directory Permissions", "Sufficient Space"]
    }
  ];

  const categories = [
    { id: "all", label: "All Guides", icon: Book, count: guides.length },
    { id: "cloud", label: "Cloud Storage", icon: Cloud, count: guides.filter(g => g.category === "cloud").length },
    { id: "database", label: "Databases", icon: Database, count: guides.filter(g => g.category === "database").length },
    { id: "storage", label: "Storage Systems", icon: Server, count: guides.filter(g => g.category === "storage").length }
  ];

  const filteredGuides = guides.filter(guide => {
    const matchesSearch = guide.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         guide.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "all" || guide.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const popularGuides = guides.filter(guide => guide.popular).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-16 lg:py-24 bg-gradient-to-br from-background to-secondary/5">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-4xl mx-auto mb-12">
              <Badge variant="secondary" className="mb-4">
                <FileText className="h-4 w-4 mr-2" />
                Setup Guides
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Quick Setup Guides
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Step-by-step instructions to connect Novabuckups with your infrastructure. 
                Get up and running in minutes, not hours.
              </p>
              
              {/* Search Bar */}
              <div className="relative max-w-md mx-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search guides..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            {/* Popular Guides Preview */}
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold text-center mb-8">Most Popular Guides</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {popularGuides.map((guide) => (
                  <Card key={guide.id} className="group hover:shadow-lg transition-all duration-300 border-primary/20">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <CardTitle className="text-lg group-hover:text-primary transition-colors">
                          {guide.title}
                        </CardTitle>
                        <Badge className="bg-primary text-primary-foreground text-xs">
                          Popular
                        </Badge>
                      </div>
                      <CardDescription>{guide.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{guide.setupTime}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Shield className="h-4 w-4" />
                          <span>{guide.difficulty}</span>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="w-full group">
                        View Guide
                        <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Main Guides Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-6xl mx-auto">
              {/* Category Filter */}
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={activeCategory === category.id ? "default" : "outline"}
                    onClick={() => setActiveCategory(category.id)}
                    className="flex items-center gap-2"
                  >
                    <category.icon className="h-4 w-4" />
                    {category.label}
                    <Badge variant="secondary" className="ml-1 text-xs">
                      {category.count}
                    </Badge>
                  </Button>
                ))}
              </div>

              {/* Guides Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {filteredGuides.map((guide) => (
                  <Card key={guide.id} className="group hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">
                          {guide.title}
                        </CardTitle>
                        <div className="flex gap-2">
                          {guide.popular && (
                            <Badge className="bg-primary text-primary-foreground text-xs">
                              Popular
                            </Badge>
                          )}
                          <Badge variant="outline" className="text-xs">
                            {guide.category}
                          </Badge>
                        </div>
                      </div>
                      <CardDescription>{guide.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      {/* Metadata */}
                      <div className="flex items-center gap-6 mb-6 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{guide.setupTime}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Shield className="h-4 w-4" />
                          <span>{guide.difficulty}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <FileText className="h-4 w-4" />
                          <span>{guide.steps.length} steps</span>
                        </div>
                      </div>

                      {/* Requirements */}
                      <div className="mb-6">
                        <h4 className="font-medium mb-2 text-sm">Requirements:</h4>
                        <div className="flex flex-wrap gap-2">
                          {guide.requirements.map((req, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {req}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Steps Preview */}
                      <div className="mb-6">
                        <h4 className="font-medium mb-3 text-sm">Quick Steps:</h4>
                        <div className="space-y-2">
                          {guide.steps.slice(0, 2).map((step, index) => (
                            <div key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <div className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-medium mt-0.5">
                                {index + 1}
                              </div>
                              <span>{step}</span>
                            </div>
                          ))}
                          {guide.steps.length > 2 && (
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <div className="w-5 h-5 rounded-full bg-muted text-muted-foreground flex items-center justify-center text-xs">
                                +
                              </div>
                              <span>{guide.steps.length - 2} more steps...</span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex gap-2">
                        <Button variant="outline" className="flex-1 group">
                          <Play className="h-4 w-4 mr-2" />
                          Start Setup
                          <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Download className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {filteredGuides.length === 0 && (
                <div className="text-center py-12">
                  <FileText className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                  <h3 className="text-lg font-semibold mb-2">No guides found</h3>
                  <p className="text-muted-foreground mb-6">
                    Try adjusting your search or browse all categories
                  </p>
                  <Button variant="outline" onClick={() => { setSearchTerm(""); setActiveCategory("all"); }}>
                    Show All Guides
                  </Button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Help Section */}
        <section className="py-16 lg:py-24 bg-secondary/5">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Need Help?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our technical team is here to help you with custom integrations and complex setups.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/technical-support">
                    <Settings className="h-4 w-4 mr-2" />
                    Technical Support
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/request-integration">
                    Request Custom Integration
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SetupGuides;
