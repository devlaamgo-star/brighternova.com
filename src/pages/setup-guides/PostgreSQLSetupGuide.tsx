import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { 
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  Copy,
  ExternalLink,
  AlertTriangle,
  Database,
  Shield,
  Key,
  Settings,
  Clock,
  Users,
  Terminal
} from "lucide-react";
import { Link } from "react-router-dom";

const PostgreSQLSetupGuide = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const copyToClipboard = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(label);
      setTimeout(() => setCopiedText(null), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const steps = [
    {
      id: 1,
      title: "Prepare PostgreSQL Server",
      duration: "2 minutes",
      description: "Ensure PostgreSQL is properly configured for backups"
    },
    {
      id: 2,
      title: "Create Backup Role",
      duration: "1 minute", 
      description: "Create a dedicated database role for backup operations"
    },
    {
      id: 3,
      title: "Configure WAL Archiving",
      duration: "2 minutes",
      description: "Enable Write-Ahead Logging for point-in-time recovery"
    },
    {
      id: 4,
      title: "Configure Novabuckups",
      duration: "1 minute",
      description: "Add PostgreSQL connection to Novabuckups"
    },
    {
      id: 5,
      title: "Test Backup & Recovery",
      duration: "2 minutes",
      description: "Verify backup functionality and test recovery"
    }
  ];

  const requirements = [
    "PostgreSQL 10+ server",
    "Superuser or database admin access",
    "Network connectivity to database",
    "Novabuckups account"
  ];

  const benefits = [
    "Point-in-time recovery capability",
    "Consistent logical backups",
    "WAL-based incremental backups",
    "Schema and data backup options",
    "Multiple database support",
    "Automated backup scheduling"
  ];

  const createRoleSQL = `-- Create backup role with minimal required permissions
CREATE ROLE novabuckups_backup WITH LOGIN PASSWORD 'secure_password_here';

-- Grant necessary privileges for backup operations
GRANT pg_read_all_data TO novabuckups_backup;
GRANT pg_read_all_settings TO novabuckups_backup;
GRANT pg_read_all_stats TO novabuckups_backup;

-- For specific databases (replace 'your_database' with actual name)
GRANT CONNECT ON DATABASE your_database TO novabuckups_backup;
GRANT USAGE ON SCHEMA public TO novabuckups_backup;
GRANT SELECT ON ALL TABLES IN SCHEMA public TO novabuckups_backup;

-- Set default privileges for future tables
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT SELECT ON TABLES TO novabuckups_backup;`;

  const walConfig = `# Add to postgresql.conf for WAL archiving
wal_level = replica
archive_mode = on
archive_command = 'cp %p /path/to/wal/archive/%f'
max_wal_senders = 3
wal_keep_size = 1GB`;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-12 lg:py-16 bg-gradient-to-br from-background to-secondary/5">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                <Link to="/integrations" className="hover:text-primary">Integrations</Link>
                <span>→</span>
                <Link to="/setup-guides" className="hover:text-primary">Setup Guides</Link>
                <span>→</span>
                <span>PostgreSQL</span>
              </div>

              <div className="flex items-start gap-6 mb-8">
                <div className="p-3 bg-blue-600 text-white rounded-lg">
                  <Database className="h-8 w-8" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h1 className="text-3xl lg:text-4xl font-bold">
                      PostgreSQL Database Backup Setup
                    </h1>
                    <Badge className="bg-primary text-primary-foreground">Popular</Badge>
                  </div>
                  <p className="text-xl text-muted-foreground mb-4">
                    Complete guide to integrate PostgreSQL with Novabuckups for reliable database backups and point-in-time recovery.
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>~6 minutes setup</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="h-4 w-4" />
                      <span>Enterprise features</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      <span>Industry standard</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Info Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Requirements</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {requirements.map((req, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Key Benefits</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {benefits.slice(0, 4).map((benefit, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <Shield className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Progress Steps */}
        <section className="py-8 border-b">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold">Setup Progress</h2>
                <div className="text-sm text-muted-foreground">
                  Step {currentStep} of {steps.length}
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                {steps.map((step, index) => (
                  <div key={step.id} className="flex items-center">
                    <div
                      className={`
                        w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium cursor-pointer
                        ${currentStep >= step.id 
                          ? 'bg-primary text-primary-foreground' 
                          : 'bg-muted text-muted-foreground'
                        }
                      `}
                      onClick={() => setCurrentStep(step.id)}
                    >
                      {currentStep > step.id ? <CheckCircle className="h-5 w-5" /> : step.id}
                    </div>
                    {index < steps.length - 1 && (
                      <div 
                        className={`w-16 h-1 mx-2 ${
                          currentStep > step.id ? 'bg-primary' : 'bg-muted'
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>
              
              <div className="mt-4 text-center">
                <h3 className="font-semibold text-lg">{steps[currentStep - 1]?.title}</h3>
                <p className="text-muted-foreground text-sm">{steps[currentStep - 1]?.description}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Step Content */}
        <section className="py-12">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              
              {/* Step 1: Prepare PostgreSQL Server */}
              {currentStep === 1 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">1</div>
                      Prepare PostgreSQL Server
                    </CardTitle>
                    <CardDescription>
                      Ensure your PostgreSQL server is properly configured and accessible for backup operations.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">1.1 Verify PostgreSQL Installation</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm ml-4">
                        <li>Connect to your PostgreSQL server as superuser</li>
                        <li>Check PostgreSQL version: <code className="bg-muted px-2 py-1 rounded">SELECT version();</code></li>
                        <li>Ensure version is 10 or higher for best compatibility</li>
                        <li>Verify network connectivity from Novabuckups</li>
                      </ol>
                    </div>

                    <Separator />

                    <div>
                      <h4 className="font-semibold mb-3">1.2 Configure pg_hba.conf</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm ml-4">
                        <li>Locate pg_hba.conf file (usually in PostgreSQL data directory)</li>
                        <li>Add connection rule for Novabuckups IP address</li>
                        <li>Example: <code className="bg-muted px-2 py-1 rounded">host all novabuckups_backup 0.0.0.0/0 md5</code></li>
                        <li>Reload PostgreSQL configuration: <code className="bg-muted px-2 py-1 rounded">SELECT pg_reload_conf();</code></li>
                      </ol>
                    </div>

                    <Alert>
                      <AlertTriangle className="h-4 w-4" />
                      <AlertDescription>
                        <strong>Security:</strong> For production environments, restrict the IP range to only allow 
                        connections from Novabuckups servers. Contact support for our current IP ranges.
                      </AlertDescription>
                    </Alert>

                    <div className="flex justify-between">
                      <Button variant="outline" disabled>
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Previous
                      </Button>
                      <Button onClick={() => setCurrentStep(2)}>
                        Next: Create Backup Role
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Step 2: Create Backup Role */}
              {currentStep === 2 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">2</div>
                      Create Backup Role
                    </CardTitle>
                    <CardDescription>
                      Create a dedicated database role with minimal required permissions for backup operations.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">2.1 Create Role with SQL</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Execute the following SQL commands as a superuser to create the backup role:
                      </p>
                      <div className="relative">
                        <pre className="bg-muted p-4 rounded text-xs overflow-x-auto">
{createRoleSQL}
                        </pre>
                        <Button
                          variant="outline"
                          size="sm"
                          className="absolute top-2 right-2"
                          onClick={() => copyToClipboard(createRoleSQL, 'Create Role SQL')}
                        >
                          {copiedText === 'Create Role SQL' ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                        </Button>
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <h4 className="font-semibold mb-3">2.2 Role Permissions Explained</h4>
                      <div className="bg-muted p-4 rounded">
                        <p className="text-sm mb-2">The backup role needs:</p>
                        <ul className="space-y-1 text-sm">
                          <li><strong>pg_read_all_data:</strong> Read access to all tables</li>
                          <li><strong>pg_read_all_settings:</strong> Access to configuration settings</li>
                          <li><strong>pg_read_all_stats:</strong> Access to statistics views</li>
                          <li><strong>CONNECT:</strong> Connect to specific databases</li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">2.3 Test Role Connection</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm ml-4">
                        <li>Test connection with new role: <code className="bg-muted px-2 py-1 rounded">psql -U novabuckups_backup -h localhost -d your_database</code></li>
                        <li>Verify you can query tables: <code className="bg-muted px-2 py-1 rounded">SELECT count(*) FROM information_schema.tables;</code></li>
                        <li>Confirm read access to all required databases</li>
                      </ol>
                    </div>

                    <div className="flex justify-between">
                      <Button variant="outline" onClick={() => setCurrentStep(1)}>
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Previous
                      </Button>
                      <Button onClick={() => setCurrentStep(3)}>
                        Next: Configure WAL
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Step 3: Configure WAL Archiving */}
              {currentStep === 3 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">3</div>
                      Configure WAL Archiving
                    </CardTitle>
                    <CardDescription>
                      Enable Write-Ahead Log archiving for point-in-time recovery capabilities.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">3.1 Update postgresql.conf</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Add these settings to your postgresql.conf file:
                      </p>
                      <div className="relative">
                        <pre className="bg-muted p-4 rounded text-xs overflow-x-auto">
{walConfig}
                        </pre>
                        <Button
                          variant="outline"
                          size="sm"
                          className="absolute top-2 right-2"
                          onClick={() => copyToClipboard(walConfig, 'WAL Config')}
                        >
                          {copiedText === 'WAL Config' ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                        </Button>
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <h4 className="font-semibold mb-3">3.2 Create WAL Archive Directory</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm ml-4">
                        <li>Create directory for WAL files: <code className="bg-muted px-2 py-1 rounded">mkdir -p /path/to/wal/archive</code></li>
                        <li>Set proper permissions: <code className="bg-muted px-2 py-1 rounded">chown postgres:postgres /path/to/wal/archive</code></li>
                        <li>Ensure adequate disk space (WAL files can grow quickly)</li>
                        <li>Test archive command manually</li>
                      </ol>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">3.3 Restart PostgreSQL</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm ml-4">
                        <li>Restart PostgreSQL service: <code className="bg-muted px-2 py-1 rounded">sudo systemctl restart postgresql</code></li>
                        <li>Verify WAL archiving is active: <code className="bg-muted px-2 py-1 rounded">SELECT name, setting FROM pg_settings WHERE name LIKE 'archive%';</code></li>
                        <li>Check that WAL files are being archived to your directory</li>
                      </ol>
                    </div>

                    <Alert>
                      <Key className="h-4 w-4" />
                      <AlertDescription>
                        <strong>Important:</strong> WAL archiving is required for point-in-time recovery. 
                        Monitor disk space as WAL files can accumulate quickly under high write loads.
                      </AlertDescription>
                    </Alert>

                    <div className="flex justify-between">
                      <Button variant="outline" onClick={() => setCurrentStep(2)}>
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Previous
                      </Button>
                      <Button onClick={() => setCurrentStep(4)}>
                        Next: Configure Novabuckups
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Step 4: Configure Novabuckups */}
              {currentStep === 4 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">4</div>
                      Configure Novabuckups
                    </CardTitle>
                    <CardDescription>
                      Add your PostgreSQL database connection to Novabuckups.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">4.1 Access Database Integration</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm ml-4">
                        <li>Log in to your Novabuckups dashboard</li>
                        <li>Navigate to "Settings" → "Integrations"</li>
                        <li>Find "PostgreSQL Database" and click "Configure"</li>
                        <li>Click "Add New Database Connection"</li>
                      </ol>
                    </div>

                    <Separator />

                    <div>
                      <h4 className="font-semibold mb-3">4.2 Enter Connection Details</h4>
                      <div className="bg-muted p-4 rounded space-y-3">
                        <div>
                          <label className="text-sm font-medium">Host</label>
                          <p className="text-xs text-muted-foreground">PostgreSQL server hostname or IP address</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium">Port</label>
                          <p className="text-xs text-muted-foreground">Default: 5432</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium">Database</label>
                          <p className="text-xs text-muted-foreground">Database name to backup (or 'postgres' for all)</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium">Username</label>
                          <p className="text-xs text-muted-foreground">novabuckups_backup (from step 2)</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium">Password</label>
                          <p className="text-xs text-muted-foreground">Password for backup role</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">4.3 Configure Backup Options</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm ml-4">
                        <li>Select backup type: Logical (pg_dump) or Physical (pg_basebackup)</li>
                        <li>Choose backup schedule (daily, weekly, or custom)</li>
                        <li>Set retention policy (how long to keep backups)</li>
                        <li>Enable compression to save storage space</li>
                        <li>Configure encryption for sensitive data</li>
                        <li>Click "Save Configuration"</li>
                      </ol>
                    </div>

                    <div className="flex justify-between">
                      <Button variant="outline" onClick={() => setCurrentStep(3)}>
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Previous
                      </Button>
                      <Button onClick={() => setCurrentStep(5)}>
                        Next: Test Backup
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Step 5: Test Backup & Recovery */}
              {currentStep === 5 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">5</div>
                      Test Backup & Recovery
                    </CardTitle>
                    <CardDescription>
                      Verify that PostgreSQL backups are working correctly and test the recovery process.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">5.1 Run Test Backup</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm ml-4">
                        <li>In Novabuckups, go to "Backups" → "Create Manual Backup"</li>
                        <li>Select your PostgreSQL database</li>
                        <li>Choose backup destination (cloud storage)</li>
                        <li>Click "Start Backup"</li>
                        <li>Monitor backup progress and completion</li>
                      </ol>
                    </div>

                    <Separator />

                    <div>
                      <h4 className="font-semibold mb-3">5.2 Verify Backup Contents</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm ml-4">
                        <li>Check backup file size is reasonable</li>
                        <li>Verify all expected tables are included</li>
                        <li>Test backup file integrity</li>
                        <li>Check backup metadata and timestamps</li>
                      </ol>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">5.3 Test Recovery Process</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm ml-4">
                        <li>Create a test database for recovery testing</li>
                        <li>Use Novabuckups "Restore" feature to restore backup</li>
                        <li>Verify all data is correctly restored</li>
                        <li>Compare table counts and sample data</li>
                        <li>Test application connectivity to restored database</li>
                      </ol>
                    </div>

                    <Alert>
                      <CheckCircle className="h-4 w-4" />
                      <AlertDescription>
                        <strong>Success!</strong> Your PostgreSQL backup integration is complete. 
                        You now have automated database backups with point-in-time recovery capabilities.
                      </AlertDescription>
                    </Alert>

                    <div className="bg-primary/5 border border-primary/20 p-4 rounded">
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <Settings className="h-4 w-4" />
                        Advanced Features
                      </h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Set up streaming replication backup from standby</li>
                        <li>• Configure automated backup verification</li>
                        <li>• Monitor backup performance and optimize settings</li>
                        <li>• Set up alerts for backup failures</li>
                      </ul>
                    </div>

                    <div className="flex justify-between">
                      <Button variant="outline" onClick={() => setCurrentStep(4)}>
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Previous
                      </Button>
                      <Button asChild>
                        <Link to="/integrations">
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Setup Complete
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}

            </div>
          </div>
        </section>

        {/* Help Section */}
        <section className="py-12 bg-secondary/5">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4">Need Help?</h2>
              <p className="text-muted-foreground mb-6">
                Our database specialists can help you with PostgreSQL integration and optimization.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/technical-support">
                    Get Database Support
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/schedule-demo">
                    Schedule Database Demo
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

export default PostgreSQLSetupGuide;
