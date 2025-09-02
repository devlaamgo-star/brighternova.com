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

const MongoDBSetupGuide = () => {
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
      title: "Prepare MongoDB Instance",
      duration: "2 minutes",
      description: "Ensure MongoDB is properly configured for backups"
    },
    {
      id: 2,
      title: "Create Backup User",
      duration: "1 minute", 
      description: "Create a dedicated user with backup privileges"
    },
    {
      id: 3,
      title: "Configure Authentication",
      duration: "1 minute",
      description: "Set up secure authentication for backup operations"
    },
    {
      id: 4,
      title: "Configure Novabuckups",
      duration: "1 minute",
      description: "Add MongoDB connection to Novabuckups"
    },
    {
      id: 5,
      title: "Test Backup & Recovery",
      duration: "2 minutes",
      description: "Verify backup functionality and test restoration"
    }
  ];

  const requirements = [
    "MongoDB 3.6+ server",
    "Admin access to MongoDB instance",
    "Network connectivity to database",
    "Novabuckups account"
  ];

  const benefits = [
    "Document-level backup consistency",
    "Collection and database-level backups",
    "Oplog-based point-in-time recovery",
    "Sharded cluster support",
    "GridFS file backup",
    "Automated backup scheduling"
  ];

  const createUserScript = `// Connect to MongoDB as admin
use admin

// Create backup user with required roles
db.createUser({
  user: "novabuckups_backup",
  pwd: "secure_password_here",
  roles: [
    { role: "backup", db: "admin" },
    { role: "readAnyDatabase", db: "admin" },
    { role: "read", db: "local" },
    { role: "clusterMonitor", db: "admin" }
  ]
})

// Verify user creation
db.getUser("novabuckups_backup")`;

  const mongoConfig = `# MongoDB configuration for backup optimization
# Add to /etc/mongod.conf

storage:
  wiredTiger:
    engineConfig:
      journalCompressor: snappy
      directoryForIndexes: true

operationProfiling:
  mode: slowOp
  slowOpThresholdMs: 100

replication:
  oplogSizeMB: 1024`;

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
                <span>MongoDB</span>
              </div>

              <div className="flex items-start gap-6 mb-8">
                <div className="p-3 bg-green-600 text-white rounded-lg">
                  <Database className="h-8 w-8" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h1 className="text-3xl lg:text-4xl font-bold">
                      MongoDB Database Backup Setup
                    </h1>
                    <Badge className="bg-primary text-primary-foreground">Popular</Badge>
                  </div>
                  <p className="text-xl text-muted-foreground mb-4">
                    Complete guide to integrate MongoDB with Novabuckups for reliable NoSQL database backups and recovery.
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>~5 minutes setup</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="h-4 w-4" />
                      <span>Document consistency</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      <span>NoSQL leader</span>
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
              
              {/* Step 1: Prepare MongoDB Instance */}
              {currentStep === 1 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">1</div>
                      Prepare MongoDB Instance
                    </CardTitle>
                    <CardDescription>
                      Ensure your MongoDB instance is properly configured and accessible for backup operations.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">1.1 Verify MongoDB Installation</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm ml-4">
                        <li>Connect to your MongoDB instance: <code className="bg-muted px-2 py-1 rounded">mongo</code></li>
                        <li>Check MongoDB version: <code className="bg-muted px-2 py-1 rounded">db.version()</code></li>
                        <li>Ensure version is 3.6 or higher for best compatibility</li>
                        <li>Verify network connectivity from Novabuckups</li>
                      </ol>
                    </div>

                    <Separator />

                    <div>
                      <h4 className="font-semibold mb-3">1.2 Check Replica Set Configuration</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm ml-4">
                        <li>Check replica set status: <code className="bg-muted px-2 py-1 rounded">rs.status()</code></li>
                        <li>For standalone instances, consider converting to replica set for better backup consistency</li>
                        <li>Verify oplog is available: <code className="bg-muted px-2 py-1 rounded">db.oplog.rs.find().limit(1)</code></li>
                        <li>Note primary and secondary nodes if applicable</li>
                      </ol>
                    </div>

                    <Alert>
                      <AlertTriangle className="h-4 w-4" />
                      <AlertDescription>
                        <strong>Recommendation:</strong> For production environments, use replica sets even with a single node 
                        to enable oplog-based incremental backups and better consistency.
                      </AlertDescription>
                    </Alert>

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
                      Create a dedicated MongoDB user with appropriate roles for backup operations.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">2.1 Create User with Required Roles</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Execute the following commands in MongoDB shell as admin:
                      </p>
                      <div className="relative">
                        <pre className="bg-muted p-4 rounded text-xs overflow-x-auto">
{createUserScript}
                        </pre>
                        <Button
                          variant="outline"
                          size="sm"
                          className="absolute top-2 right-2"
                          onClick={() => copyToClipboard(createUserScript, 'Create User Script')}
                        >
                          {copiedText === 'Create User Script' ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                        </Button>
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <h4 className="font-semibold mb-3">2.2 Required Roles Explained</h4>
                      <div className="bg-muted p-4 rounded">
                        <p className="text-sm mb-2">The backup user needs these roles:</p>
                        <ul className="space-y-1 text-sm">
                          <li><strong>backup:</strong> Enables mongodump and mongoexport operations</li>
                          <li><strong>readAnyDatabase:</strong> Read access to all databases</li>
                          <li><strong>read (local):</strong> Access to oplog for incremental backups</li>
                          <li><strong>clusterMonitor:</strong> View cluster status and statistics</li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">2.3 Test User Access</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm ml-4">
                        <li>Test connection: <code className="bg-muted px-2 py-1 rounded">mongo -u novabuckups_backup -p --authenticationDatabase admin</code></li>
                        <li>Verify database access: <code className="bg-muted px-2 py-1 rounded">show dbs</code></li>
                        <li>Test collection listing: <code className="bg-muted px-2 py-1 rounded">use your_database; show collections</code></li>
                      </ol>
                    </div>

                    <div className="flex justify-between">
                      <Button variant="outline" onClick={() => setCurrentStep(1)}>
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Previous
                      </Button>
                      <Button onClick={() => setCurrentStep(3)}>
                        Next: Configure Authentication
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Step 3: Configure Authentication */}
              {currentStep === 3 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">3</div>
                      Configure Authentication
                    </CardTitle>
                    <CardDescription>
                      Set up secure authentication and network access for backup operations.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">3.1 Enable Authentication (if not enabled)</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm ml-4">
                        <li>Edit MongoDB configuration file (/etc/mongod.conf)</li>
                        <li>Add or uncomment: <code className="bg-muted px-2 py-1 rounded">security: authorization: enabled</code></li>
                        <li>Restart MongoDB service: <code className="bg-muted px-2 py-1 rounded">sudo systemctl restart mongod</code></li>
                        <li>Verify authentication is working</li>
                      </ol>
                    </div>

                    <Separator />

                    <div>
                      <h4 className="font-semibold mb-3">3.2 Configure Network Access</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm ml-4">
                        <li>Update bind IP in mongod.conf: <code className="bg-muted px-2 py-1 rounded">net: bindIp: 0.0.0.0</code></li>
                        <li>Configure firewall to allow MongoDB port (default 27017)</li>
                        <li>For production, restrict access to specific Novabuckups IP ranges</li>
                        <li>Test remote connectivity</li>
                      </ol>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">3.3 Optimize for Backups</h4>
                      <div className="relative">
                        <pre className="bg-muted p-4 rounded text-xs overflow-x-auto">
{mongoConfig}
                        </pre>
                        <Button
                          variant="outline"
                          size="sm"
                          className="absolute top-2 right-2"
                          onClick={() => copyToClipboard(mongoConfig, 'Mongo Config')}
                        >
                          {copiedText === 'Mongo Config' ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                        </Button>
                      </div>
                    </div>

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
                      Add your MongoDB database connection to Novabuckups.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">4.1 Access Database Integration</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm ml-4">
                        <li>Log in to your Novabuckups dashboard</li>
                        <li>Navigate to "Settings" → "Integrations"</li>
                        <li>Find "MongoDB Database" and click "Configure"</li>
                        <li>Click "Add New Database Connection"</li>
                      </ol>
                    </div>

                    <Separator />

                    <div>
                      <h4 className="font-semibold mb-3">4.2 Enter Connection Details</h4>
                      <div className="bg-muted p-4 rounded space-y-3">
                        <div>
                          <label className="text-sm font-medium">Connection String</label>
                          <p className="text-xs text-muted-foreground">mongodb://novabuckups_backup:password@host:27017/database</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium">Host</label>
                          <p className="text-xs text-muted-foreground">MongoDB server hostname or IP address</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium">Port</label>
                          <p className="text-xs text-muted-foreground">Default: 27017</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium">Authentication Database</label>
                          <p className="text-xs text-muted-foreground">Usually 'admin' for centralized user management</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium">Username & Password</label>
                          <p className="text-xs text-muted-foreground">novabuckups_backup credentials from step 2</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">4.3 Configure Backup Options</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm ml-4">
                        <li>Select databases to backup (or all databases)</li>
                        <li>Choose backup type: Full (mongodump) or Incremental (oplog)</li>
                        <li>Set backup schedule and frequency</li>
                        <li>Configure retention policies</li>
                        <li>Enable compression for large databases</li>
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
                      Verify that MongoDB backups are working correctly and test the recovery process.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">5.1 Run Test Backup</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm ml-4">
                        <li>In Novabuckups, go to "Backups" → "Create Manual Backup"</li>
                        <li>Select your MongoDB database/collection</li>
                        <li>Choose backup destination (cloud storage)</li>
                        <li>Click "Start Backup"</li>
                        <li>Monitor backup progress and completion</li>
                      </ol>
                    </div>

                    <Separator />

                    <div>
                      <h4 className="font-semibold mb-3">5.2 Verify Backup Contents</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm ml-4">
                        <li>Check backup includes BSON data files</li>
                        <li>Verify metadata.json files are present</li>
                        <li>Confirm indexes are backed up</li>
                        <li>Check backup file sizes are reasonable</li>
                      </ol>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">5.3 Test Recovery Process</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm ml-4">
                        <li>Create a test database for recovery</li>
                        <li>Use Novabuckups "Restore" feature</li>
                        <li>Verify document counts match original</li>
                        <li>Test sample queries against restored data</li>
                        <li>Verify indexes are correctly restored</li>
                      </ol>
                    </div>

                    <Alert>
                      <CheckCircle className="h-4 w-4" />
                      <AlertDescription>
                        <strong>Success!</strong> Your MongoDB backup integration is complete. 
                        You now have automated NoSQL database backups with consistent point-in-time recovery.
                      </AlertDescription>
                    </Alert>

                    <div className="bg-primary/5 border border-primary/20 p-4 rounded">
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <Settings className="h-4 w-4" />
                        Advanced Features
                      </h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Set up sharded cluster backup coordination</li>
                        <li>• Configure oplog tailing for real-time backups</li>
                        <li>• Monitor backup performance and optimize chunk sizes</li>
                        <li>• Set up backup verification and integrity checks</li>
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
                Our NoSQL specialists can help you with MongoDB integration and sharded cluster setups.
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

export default MongoDBSetupGuide;
