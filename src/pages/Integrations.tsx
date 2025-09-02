import PageLayout from "@/components/shared/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Database, 
  Cloud, 
  Server, 
  ArrowRight,
  CheckCircle,
  ExternalLink,
  Zap,
  Shield,
  Globe,
  FileText,
  MessageSquare
} from "lucide-react";

const Integrations = () => {
  const cloudProviders = [
    {
      name: "Amazon Web Services",
      description: "S3, RDS, EC2, and EBS volume backups",
      features: ["Multi-region support", "IAM integration", "S3 Glacier support", "VPC compatibility"],
      setupTime: "5 minutes",
      popular: true
    },
    {
      name: "Google Cloud Platform", 
      description: "Cloud Storage, SQL, and Compute Engine backups",
      features: ["Cloud Storage integration", "Cloud SQL support", "Regional backups", "Service account auth"],
      setupTime: "5 minutes",
      popular: true
    },
    {
      name: "Microsoft Azure",
      description: "Blob Storage, SQL Database, and VM backups", 
      features: ["Blob Storage tiers", "Azure SQL support", "Managed identity", "Resource group backup"],
      setupTime: "5 minutes",
      popular: false
    },
    {
      name: "DigitalOcean",
      description: "Spaces, Droplets, and Managed Database backups",
      features: ["Spaces integration", "Droplet snapshots", "Managed DB backup", "API key auth"],
      setupTime: "3 minutes",
      popular: true
    },
    {
      name: "Vultr",
      description: "Object Storage and Instance backups",
      features: ["Object Storage support", "Instance snapshots", "Block storage backup", "API integration"],
      setupTime: "3 minutes",
      popular: false
    },
    {
      name: "Hetzner Cloud",
      description: "Cloud storage and server backups",
      features: ["Object Storage", "Server snapshots", "Volume backups", "API access"],
      setupTime: "3 minutes",
      popular: false
    }
  ];

  const databases = [
    {
      name: "MySQL",
      description: "Complete database dumps with point-in-time recovery",
      features: ["mysqldump integration", "Binary log backup", "InnoDB support", "Replication-aware"],
      setupTime: "2 minutes",
      popular: true
    },
    {
      name: "PostgreSQL",
      description: "Logical and physical backups with WAL archiving",
      features: ["pg_dump/pg_dumpall", "WAL-E integration", "Point-in-time recovery", "Schema-only backups"],
      setupTime: "2 minutes", 
      popular: true
    },
    {
      name: "MongoDB",
      description: "Database and collection-level backups",
      features: ["mongodump support", "Sharded cluster backup", "Oplog backup", "GridFS support"],
      setupTime: "3 minutes",
      popular: true
    },
    {
      name: "Redis",
      description: "Memory snapshots and AOF backups",
      features: ["RDB snapshots", "AOF backup", "Cluster support", "Sentinel integration"],
      setupTime: "2 minutes",
      popular: false
    },
    {
      name: "MariaDB",
      description: "MariaDB-specific optimisations and features",
      features: ["MariaBackup support", "Galera cluster backup", "MyRocks support", "Aria storage engine"],
      setupTime: "2 minutes",
      popular: false
    },
    {
      name: "SQLite",
      description: "File-based database backups",
      features: ["WAL mode support", "Online backup", "VACUUM integration", "Multiple databases"],
      setupTime: "1 minute",
      popular: false
    }
  ];

  const storageTypes = [
    {
      name: "SFTP/SCP",
      description: "Secure file transfer to any SSH-enabled server",
      features: ["Key-based auth", "Custom ports", "Directory structure", "Bandwidth limiting"],
      setupTime: "2 minutes",
      popular: true
    },
    {
      name: "Local Storage",
      description: "Direct file system backups",
      features: ["Path-based backup", "Symlink handling", "Permission preservation", "Compression"],
      setupTime: "1 minute",
      popular: false
    },
    {
      name: "Network Shares",
      description: "SMB/CIFS and NFS network storage",
      features: ["SMB/CIFS support", "NFS integration", "Authentication", "Mount management"],
      setupTime: "3 minutes",
      popular: false
    },
    {
      name: "FTP/FTPS",
      description: "Traditional FTP with optional SSL/TLS",
      features: ["Passive/Active mode", "SSL/TLS encryption", "Directory creation", "Resume support"],
      setupTime: "2 minutes",
      popular: false
    }
  ];

  const IntegrationGrid = ({ 
    title, 
    items, 
    icon: Icon 
  }: { 
    title: string;
    items: typeof cloudProviders;
    icon: any;
  }) => (
    <div className="mb-16">
      <div className="flex items-center gap-3 mb-8">
        <Icon className="h-8 w-8 text-primary" />
        <h2 className="text-3xl font-bold">{title}</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <Card key={index} className={`group hover:shadow-lg transition-all duration-300 ${
            item.popular ? 'ring-2 ring-primary/20 bg-gradient-card' : 'border-border/50 hover:border-primary/20 bg-background'
          }`}>
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {item.name}
                </h3>
                <div className="flex gap-2">
                  {item.popular && (
                    <Badge className="bg-primary text-primary-foreground">
                      Popular
                    </Badge>
                  )}
                  <Badge variant="outline" className="text-xs">
                    {item.setupTime}
                  </Badge>
                </div>
              </div>
              <p className="text-muted-foreground text-sm">
                {item.description}
              </p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-4">
                {item.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button variant="outline" size="sm" className="w-full group" asChild>
                <Link to={`/setup-guides/${item.name.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '')}`}>
                  Setup Guide
                  <ExternalLink className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  return (
    <PageLayout 
      title="Integrations - Multi-Cloud Backup Support"
      description="Connect Novabuckups to AWS, Google Cloud, Azure, DigitalOcean, MySQL, PostgreSQL, MongoDB and more. Quick setup guides for all major providers."
    >
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="glass mb-6">
              <Globe className="h-4 w-4 mr-2" />
              40+ Integrations
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
              Works with your 
              <span className="block">entire infrastructure</span>
            </h1>
            <p className="text-xl lg:text-2xl text-primary-foreground/80 text-balance mb-8 max-w-3xl mx-auto">
              Connect to any cloud provider, database, or storage system in minutes. 
              No vendor lock-in, maximum flexibility.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 mb-10">
              <div className="flex items-center gap-2 glass px-4 py-2 rounded-full">
                <Zap className="h-5 w-5 text-accent" />
                <span className="text-primary-foreground/90 text-sm font-medium">Quick Setup</span>
              </div>
              <div className="flex items-center gap-2 glass px-4 py-2 rounded-full">
                <Shield className="h-5 w-5 text-accent" />
                <span className="text-primary-foreground/90 text-sm font-medium">Secure Auth</span>
              </div>
              <div className="flex items-center gap-2 glass px-4 py-2 rounded-full">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span className="text-primary-foreground/90 text-sm font-medium">Tested &amp; Reliable</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <IntegrationGrid 
            title="Cloud Storage Providers"
            items={cloudProviders}
            icon={Cloud}
          />
          
          <IntegrationGrid 
            title="Database Systems"
            items={databases}
            icon={Database}
          />
          
          <IntegrationGrid 
            title="Storage Types"
            items={storageTypes}
            icon={Server}
          />
        </div>
      </section>

      {/* API Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Can't find your integration?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Use our comprehensive REST API and CLI tools to integrate with any system. 
              Full documentation and SDKs available.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/api-docs">
                  <FileText className="h-4 w-4 mr-2" />
                  API Documentation
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/request-integration">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Request Integration
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Integrations;
