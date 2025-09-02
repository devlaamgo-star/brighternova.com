import PageLayout from "@/components/shared/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle, 
  Terminal, 
  Database, 
  Cloud, 
  Shield,
  Clock,
  Copy,
  Play,
  ArrowRight,
  AlertTriangle,
  Info,
  ExternalLink
} from "lucide-react";

const QuickstartGuide = () => {
  const prerequisites = [
    "A computer with internet access",
    "Command line/terminal access", 
    "A database or files you want to backup",
    "A cloud storage account (AWS S3, Google Cloud, etc.)"
  ];

  const steps = [
    {
      title: "Install the Novabuckups CLI",
      description: "Download and install our command-line tool",
      time: "2 minutes",
      commands: [
        "# For macOS and Linux:",
        "curl -fsSL https://Novabuckups.com/install | bash",
        "",
        "# For Windows (PowerShell):",
        "iwr -useb https://Novabuckups.com/install/windows | iex",
        "",
        "# Verify installation:",
        "Novabuckups --version"
      ],
      tips: [
        "The installer will automatically add Novabuckups to your PATH",
        "You may need to restart your terminal after installation",
        "Use 'Novabuckups help' to see all available commands"
      ]
    },
    {
      title: "Create Your Account & Authenticate",
      description: "Sign up and connect the CLI to your account",
      time: "3 minutes",
      commands: [
        "# Start the authentication process:",
        "Novabuckups auth login",
        "",
        "# This will open your browser to complete signup",
        "# After signup, you'll get an API key",
        "",
        "# Verify you're logged in:",
        "Novabuckups auth status"
      ],
      tips: [
        "Your API key is stored securely on your machine",
        "You can manage API keys from your dashboard",
        "Use 'Novabuckups auth logout' to sign out"
      ]
    },
    {
      title: "Configure Your Storage Destination",
      description: "Set up where your backups will be stored",
      time: "5 minutes",
      commands: [
        "# Add AWS S3 storage:",
        "Novabuckups storage add s3 \\",
        "  --name \"my-backup-bucket\" \\",
        "  --bucket \"my-company-backups\" \\",
        "  --region \"eu-west-1\" \\",
        "  --access-key \"YOUR_ACCESS_KEY\" \\",
        "  --secret-key \"YOUR_SECRET_KEY\"",
        "",
        "# List configured storage:",
        "Novabuckups storage list"
      ],
      tips: [
        "Supports AWS S3, Google Cloud, Azure, DigitalOcean and more",
        "Storage credentials are encrypted and stored securely",
        "You can configure multiple storage destinations"
      ]
    },
    {
      title: "Create Your First Backup",
      description: "Set up automated backups for your database or files",
      time: "5 minutes",
      commands: [
        "# PostgreSQL database backup:",
        "Novabuckups backup create \\",
        "  --name \"production-db\" \\",
        "  --type \"postgresql\" \\",
        "  --connection \"postgresql://user:pass@host:5432/dbname\" \\",
        "  --storage \"my-backup-bucket\" \\",
        "  --schedule \"daily\" \\",
        "  --retention \"30d\"",
        "",
        "# File/directory backup:",
        "Novabuckups backup create \\",
        "  --name \"important-files\" \\",
        "  --type \"files\" \\",
        "  --path \"/home/user/documents\" \\",
        "  --storage \"my-backup-bucket\" \\",
        "  --schedule \"daily\" \\",
        "  --retention \"30d\""
      ],
      tips: [
        "Test your database connection first with 'Novabuckups test connection'",
        "Use --dry-run flag to test backup configuration",
        "Schedule options: hourly, daily, weekly, monthly, or cron syntax"
      ]
    },
    {
      title: "Run Your First Backup",
      description: "Execute a backup immediately to test everything works",
      time: "2 minutes",
      commands: [
        "# Run backup immediately:",
        "Novabuckups backup run production-db",
        "",
        "# Check backup status:",
        "Novabuckups backup status production-db",
        "",
        "# List all backups:",
        "Novabuckups backup list"
      ],
      tips: [
        "First backup may take longer as it's a full backup",
        "Subsequent backups will be incremental (faster)",
        "You'll receive email notifications about backup status"
      ]
    },
    {
      title: "Verify & Test Restore",
      description: "Ensure your backups are working and restorable",
      time: "3 minutes",
      commands: [
        "# List available backup snapshots:",
        "Novabuckups restore list production-db",
        "",
        "# Test restore to a temporary location:",
        "Novabuckups restore run production-db \\",
        "  --snapshot \"latest\" \\",
        "  --destination \"/tmp/test-restore\" \\",
        "  --dry-run",
        "",
        "# Actual restore (be careful!):",
        "Novabuckups restore run production-db \\",
        "  --snapshot \"2024-12-18T10:00:00Z\" \\",
        "  --destination \"/path/to/restore\""
      ],
      tips: [
        "Always test restores in a safe environment first",
        "You can restore to any point in time within your retention period",
        "Use --dry-run to see what would be restored without actually doing it"
      ]
    }
  ];

  const nextSteps = [
    {
      title: "Set Up Monitoring",
      description: "Configure notifications and monitoring",
      links: [
        { text: "Notification Settings", href: "/docs#notifications" },
        { text: "Webhook Integration", href: "/docs#webhooks" }
      ]
    },
    {
      title: "Advanced Configuration",
      description: "Explore advanced backup features",
      links: [
        { text: "Custom Retention Policies", href: "/docs#retention" },
        { text: "Encryption Keys", href: "/docs#encryption" }
      ]
    },
    {
      title: "Team Management",
      description: "Add team members and set permissions",
      links: [
        { text: "User Management", href: "/docs#users" },
        { text: "Role-Based Access", href: "/docs#roles" }
      ]
    },
    {
      title: "API Integration",
      description: "Integrate backups into your applications",
      links: [
        { text: "REST API Reference", href: "/docs#api" },
        { text: "SDK Documentation", href: "/docs#sdk" }
      ]
    }
  ];

  const troubleshooting = [
    {
      issue: "Command not found: Novabuckups",
      solution: "Restart your terminal or run 'source ~/.bashrc' (Linux/macOS) or restart PowerShell (Windows)"
    },
    {
      issue: "Authentication failed",
      solution: "Check your internet connection and try 'Novabuckups auth logout' followed by 'Novabuckups auth login'"
    },
    {
      issue: "Database connection failed",
      solution: "Verify your connection string, check firewall settings, and ensure the database is accessible"
    },
    {
      issue: "Storage permission denied",
      solution: "Check your storage credentials and ensure the bucket/container exists with proper permissions"
    }
  ];

  return (
    <PageLayout 
      title="Quickstart Guide - Get Started with Novabuckups"
      description="Complete step-by-step guide to set up your first automated backup with Novabuckups in under 20 minutes. From installation to your first successful backup."
    >
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="glass mb-6">
              <Terminal className="h-4 w-4 mr-2" />
              Quickstart Guide
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
              Your first backup in 
              <span className="block text-accent">under 20 minutes</span>
            </h1>
            <p className="text-xl lg:text-2xl text-primary-foreground/80 text-balance mb-8 max-w-3xl mx-auto">
              Follow this step-by-step guide to install Novabuckups, configure your first backup, 
              and ensure your data is protected with automated backups.
            </p>
            
            <div className="flex flex-wrap justify-center items-center gap-6 mb-8">
              <div className="flex items-center gap-2 glass px-4 py-2 rounded-full">
                <Clock className="h-5 w-5 text-accent" />
                <span className="text-primary-foreground/90 text-sm font-medium">Total time: ~20 minutes</span>
              </div>
              <div className="flex items-center gap-2 glass px-4 py-2 rounded-full">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span className="text-primary-foreground/90 text-sm font-medium">6 simple steps</span>
              </div>
              <div className="flex items-center gap-2 glass px-4 py-2 rounded-full">
                <Shield className="h-5 w-5 text-accent" />
                <span className="text-primary-foreground/90 text-sm font-medium">Production ready</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prerequisites */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-card border-primary/20 mb-12">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Info className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-bold">Before You Start</h2>
                </div>
                <p className="text-muted-foreground">
                  Make sure you have the following ready before beginning:
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {prerequisites.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Step-by-Step Guide */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Step-by-step <span className="text-primary">guide</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Follow these steps in order. Each step builds on the previous one 
              to get you from zero to a fully automated backup system.
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-12">
            {steps.map((step, index) => (
              <Card key={index} className="bg-background border-border/50">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-2xl font-bold">{step.title}</h3>
                        <Badge variant="outline">
                          <Clock className="h-3 w-3 mr-1" />
                          {step.time}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Commands */}
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold text-lg">Commands</h4>
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm">
                            <Copy className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Play className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <div className="bg-muted/50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                        <pre className="text-foreground whitespace-pre-wrap">
                          {step.commands.join('\n')}
                        </pre>
                      </div>
                    </div>

                    {/* Tips */}
                    <div>
                      <h4 className="font-semibold text-lg mb-3">Tips & Notes</h4>
                      <div className="space-y-3">
                        {step.tips.map((tip, tipIndex) => (
                          <div key={tipIndex} className="flex items-start gap-2">
                            <AlertTriangle className="h-4 w-4 text-warning mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{tip}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Troubleshooting */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Common <span className="text-primary">issues</span>
            </h2>
            
            <div className="space-y-4">
              {troubleshooting.map((item, index) => (
                <Card key={index} className="bg-gradient-card border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <AlertTriangle className="h-5 w-5 text-warning mt-1 flex-shrink-0" />
                      <div className="flex-1">
                        <h4 className="font-semibold mb-2">{item.issue}</h4>
                        <p className="text-muted-foreground text-sm">{item.solution}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              What's <span className="text-primary">next?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Great job! You now have automated backups running. Here are some 
              advanced features to explore next.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {nextSteps.map((step, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 bg-background border-border/50 hover:border-primary/20">
                <CardHeader>
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {step.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {step.links.map((link, linkIndex) => (
                      <a
                        key={linkIndex}
                        href={link.href}
                        className="flex items-center justify-between text-sm text-primary hover:underline group"
                      >
                        <span>{link.text}</span>
                        <ExternalLink className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center bg-gradient-card rounded-2xl p-12 border border-border max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Need help with setup?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Stuck on any step? Our support team is here to help you get 
              your backups running smoothly.
            </p>
            <div className="flex justify-center">
              <Button variant="hero" size="lg" className="group" asChild>
                <a href="/contact">
                  Get Support
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default QuickstartGuide;