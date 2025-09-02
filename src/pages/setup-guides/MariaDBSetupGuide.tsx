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

const MariaDBSetupGuide = () => {
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
      title: "Prepare MariaDB Server",
      duration: "1 minute",
      description: "Ensure MariaDB is properly configured for backups"
    },
    {
      id: 2,
      title: "Create Backup User",
      duration: "1 minute", 
      description: "Create a dedicated user with backup privileges"
    },
    {
      id: 3,
      title: "Configure Novabuckups",
      duration: "1 minute",
      description: "Add MariaDB connection to Novabuckups"
    },
    {
      id: 4,
      title: "Test Backup & Recovery",
      duration: "1 minute",
      description: "Verify backup functionality and test restoration"
    }
  ];

  const requirements = [
    "MariaDB 10.2+ server",
    "Admin access to MariaDB",
    "Network connectivity to database",
    "Novabuckups account"
  ];

  const benefits = [
    "MariaBackup for hot backups",
    "Galera cluster backup support",
    "MyRocks storage engine compatibility",
    "Binary log backup for PITR",
    "InnoDB and Aria engine support",
    "Optimized for high performance"
  ];

  const createUserSQL = `-- Create backup user with required privileges
CREATE USER 'novabuckups_backup'@'%' IDENTIFIED BY 'secure_password_here';

-- Grant necessary privileges for backup operations
GRANT SELECT, LOCK TABLES, SHOW VIEW, EVENT, TRIGGER ON *.* TO 'novabuckups_backup'@'%';
GRANT RELOAD, SUPER ON *.* TO 'novabuckups_backup'@'%';
GRANT REPLICATION CLIENT ON *.* TO 'novabuckups_backup'@'%';

-- For MariaBackup support (if using)
GRANT PROCESS ON *.* TO 'novabuckups_backup'@'%';

-- Apply changes
FLUSH PRIVILEGES;

-- Verify user creation
SELECT User, Host FROM mysql.user WHERE User = 'novabuckups_backup';`;

  const mariadbConfig = `# MariaDB configuration optimizations for backup
# Add to /etc/mysql/mariadb.conf.d/50-backup.cnf

[mariadb]
# Binary logging for point-in-time recovery
log_bin = /var/log/mysql/mariadb-bin
binlog_format = ROW
expire_logs_days = 7

# InnoDB settings for consistent backups
innodb_file_per_table = ON
innodb_flush_log_at_trx_commit = 1

# General settings
max_connections = 200
slow_query_log = ON`;

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
                <span>MariaDB</span>
              </div>

              <div className="flex items-start gap-6 mb-8">
                <div className="p-3 bg-blue-700 text-white rounded-lg">
                  <Database className="h-8 w-8" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h1 className="text-3xl lg:text-4xl font-bold">
                      MariaDB Database Backup Setup
                    </h1>
                    <Badge variant="outline">MySQL Compatible</Badge>
                  </div>
                  <p className="text-xl text-muted-foreground mb-4">
                    Complete guide to integrate MariaDB with Novabuckups for reliable database backups with advanced features.
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>~4 minutes setup</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="h-4 w-4" />
                      <span>Hot backup support</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      <span>Open source</span>
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
              
              {/* Step 1: Prepare MariaDB Server */}
              {currentStep === 1 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">1</div>
                      Prepare MariaDB Server
                    </CardTitle>
                    <CardDescription>
                      Ensure your MariaDB server is properly configured and accessible for backup operations.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">1.1 Verify MariaDB Installation</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm ml-4">
                        <li>Connect to MariaDB: <code className="bg-muted px-2 py-1 rounded">mysql -u root -p</code></li>
                        <li>Check MariaDB version: <code className="bg-muted px-2 py-1 rounded">SELECT VERSION();</code></li>
                        <li>Ensure version is 10.2 or higher for advanced features</li>
                        <li>Verify server is running and accessible</li>
                      </ol>
                    </div>

                    <Separator />

                    <div>
                      <h4 className="font-semibold mb-3">1.2 Check Current Configuration</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm ml-4">
                        <li>Check binary logging: <code className="bg-muted px-2 py-1 rounded">SHOW VARIABLES LIKE 'log_bin';</code></li>
                        <li>Verify InnoDB settings: <code className="bg-muted px-2 py-1 rounded">SHOW VARIABLES LIKE 'innodb%';</code></li>
                        <li>Check storage engines: <code className="bg-muted px-2 py-1 rounded">SHOW ENGINES;</code></li>
                        <li>Note data directory location</li>
                      </ol>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">1.3 Optimize Configuration</h4>
                      <div className="relative">
                        <pre className="bg-muted p-4 rounded text-xs overflow-x-auto">
{mariadbConfig}
                        </pre>
                        <Button
                          variant="outline"
                          size="sm"
                          className="absolute top-2 right-2"
                          onClick={() => copyToClipboard(mariadbConfig, 'MariaDB Config')}
                        >
                          {copiedText === 'MariaDB Config' ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                        </Button>
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <Button variant="outline" disabled>
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Previous
                      </Button>
                      <Button onClick={() => setCurrentStep(2)}>
                        Next: Create Backup User
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Step 2: Create Backup User */}
              {currentStep === 2 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">2</div>
                      Create Backup User
                    </CardTitle>
                    <CardDescription>
                      Create a dedicated MariaDB user with appropriate privileges for backup operations.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">2.1 Create User with Required Privileges</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Execute the following SQL commands as root or admin user:
                      </p>
                      <div className="relative">
                        <pre className="bg-muted p-4 rounded text-xs overflow-x-auto">
{createUserSQL}
                        </pre>
                        <Button
                          variant="outline"
                          size="sm"
                          className="absolute top-2 right-2"
                          onClick={() => copyToClipboard(createUserSQL, 'Create User SQL')}
                        >
                          {copiedText === 'Create User SQL' ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                        </Button>
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <h4 className="font-semibold mb-3">2.2 Required Privileges Explained</h4>
                      <div className="bg-muted p-4 rounded">
                        <p className="text-sm mb-2">The backup user needs these privileges:</p>
                        <ul className="space-y-1 text-sm">
                          <li><strong>SELECT:</strong> Read data from all tables</li>
                          <li><strong>LOCK TABLES:</strong> Ensure consistent backups</li>
                          <li><strong>SHOW VIEW:</strong> Backup view definitions</li>
                          <li><strong>EVENT, TRIGGER:</strong> Backup stored procedures and triggers</li>
                          <li><strong>RELOAD:</strong> Flush tables for consistency</li>
                          <li><strong>REPLICATION CLIENT:</strong> Access binary logs</li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">2.3 Test User Connection</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm ml-4">
                        <li>Test connection: <code className="bg-muted px-2 py-1 rounded">mysql -u novabuckups_backup -p -h localhost</code></li>
                        <li>Verify database access: <code className="bg-muted px-2 py-1 rounded">SHOW DATABASES;</code></li>
                        <li>Test table access: <code className="bg-muted px-2 py-1 rounded">USE your_database; SHOW TABLES;</code></li>
                      </ol>
                    </div>

                    <div className="flex justify-between">
                      <Button variant="outline" onClick={() => setCurrentStep(1)}>
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Previous
                      </Button>
                      <Button onClick={() => setCurrentStep(3)}>
                        Next: Configure Novabuckups
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Step 3: Configure Novabuckups */}
              {currentStep === 3 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">3</div>
                      Configure Novabuckups
                    </CardTitle>
                    <CardDescription>
                      Add your MariaDB database connection to Novabuckups.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">3.1 Access Database Integration</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm ml-4">
                        <li>Log in to your Novabuckups dashboard</li>
                        <li>Navigate to "Settings" → "Integrations"</li>
                        <li>Find "MariaDB Database" and click "Configure"</li>
                        <li>Click "Add New Database Connection"</li>
                      </ol>
                    </div>

                    <Separator />

                    <div>
                      <h4 className="font-semibold mb-3">3.2 Enter Connection Details</h4>
                      <div className="bg-muted p-4 rounded space-y-3">
                        <div>
                          <label className="text-sm font-medium">Host</label>
                          <p className="text-xs text-muted-foreground">MariaDB server hostname or IP address</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium">Port</label>
                          <p className="text-xs text-muted-foreground">Default: 3306</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium">Database</label>
                          <p className="text-xs text-muted-foreground">Specific database name or leave empty for all</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium">Username</label>
                          <p className="text-xs text-muted-foreground">novabuckups_backup (from step 2)</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium">Password</label>
                          <p className="text-xs text-muted-foreground">Password for backup user</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">3.3 Configure Backup Options</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm ml-4">
                        <li>Select backup tool: mysqldump (logical) or MariaBackup (physical)</li>
                        <li>Choose databases to backup</li>
                        <li>Set backup schedule and frequency</li>
                        <li>Configure retention policies</li>
                        <li>Enable compression and encryption</li>
                        <li>Click "Save Configuration"</li>
                      </ol>
                    </div>

                    <div className="flex justify-between">
                      <Button variant="outline" onClick={() => setCurrentStep(2)}>
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Previous
                      </Button>
                      <Button onClick={() => setCurrentStep(4)}>
                        Next: Test Backup
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Step 4: Test Backup & Recovery */}
              {currentStep === 4 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">4</div>
                      Test Backup & Recovery
                    </CardTitle>
                    <CardDescription>
                      Verify that MariaDB backups are working correctly and test the recovery process.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">4.1 Run Test Backup</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm ml-4">
                        <li>In Novabuckups, go to "Backups" → "Create Manual Backup"</li>
                        <li>Select your MariaDB database</li>
                        <li>Choose backup destination (cloud storage)</li>
                        <li>Click "Start Backup"</li>
                        <li>Monitor backup progress and completion</li>
                      </ol>
                    </div>

                    <Separator />

                    <div>
                      <h4 className="font-semibold mb-3">4.2 Verify Backup Contents</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm ml-4">
                        <li>Check backup includes all expected databases and tables</li>
                        <li>Verify stored procedures, functions, and triggers are included</li>
                        <li>Confirm binary logs are captured (if enabled)</li>
                        <li>Check backup file size and compression ratio</li>
                      </ol>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">4.3 Test Recovery Process</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm ml-4">
                        <li>Create a test database for recovery</li>
                        <li>Use Novabuckups "Restore" feature</li>
                        <li>Verify table structure and data integrity</li>
                        <li>Test stored procedures and triggers</li>
                        <li>Compare row counts with original database</li>
                      </ol>
                    </div>

                    <Alert>
                      <CheckCircle className="h-4 w-4" />
                      <AlertDescription>
                        <strong>Success!</strong> Your MariaDB backup integration is complete. 
                        You now have automated database backups with MariaDB-specific optimizations.
                      </AlertDescription>
                    </Alert>

                    <div className="bg-primary/5 border border-primary/20 p-4 rounded">
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <Settings className="h-4 w-4" />
                        Advanced Features
                      </h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Use MariaBackup for hot backups without locking</li>
                        <li>• Configure Galera cluster backup coordination</li>
                        <li>• Set up binary log archiving for point-in-time recovery</li>
                        <li>• Monitor backup performance and optimize settings</li>
                      </ul>
                    </div>

                    <div className="flex justify-between">
                      <Button variant="outline" onClick={() => setCurrentStep(3)}>
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
                Our MariaDB specialists can help you with database optimization and Galera cluster setups.
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

export default MariaDBSetupGuide;
