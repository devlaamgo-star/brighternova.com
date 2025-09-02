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
  FileText,
  HardDrive
} from "lucide-react";
import { Link } from "react-router-dom";

const SQLiteSetupGuide = () => {
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
      title: "Locate SQLite Database Files",
      duration: "30 seconds",
      description: "Find and verify SQLite database file locations"
    },
    {
      id: 2,
      title: "Configure File Access",
      duration: "1 minute", 
      description: "Set up proper file permissions and access"
    },
    {
      id: 3,
      title: "Configure Novabuckups",
      duration: "1 minute",
      description: "Add SQLite file paths to Novabuckups"
    },
    {
      id: 4,
      title: "Test Backup & Recovery",
      duration: "1 minute",
      description: "Verify backup functionality and test restoration"
    }
  ];

  const requirements = [
    "SQLite database files",
    "File system read access",
    "Knowledge of database file locations",
    "Novabuckups account"
  ];

  const benefits = [
    "File-based backup simplicity",
    "WAL mode support for consistency",
    "Zero downtime backup capability",
    "Multiple database file support",
    "Lightweight and efficient",
    "Cross-platform compatibility"
  ];

  const sqliteCommands = `# SQLite commands for backup optimization

# Connect to SQLite database
sqlite3 /path/to/your/database.db

# Check current journal mode
PRAGMA journal_mode;

# Enable WAL mode for better backup consistency
PRAGMA journal_mode=WAL;

# Check database integrity
PRAGMA integrity_check;

# Vacuum database to optimize storage
VACUUM;

# Show database info
.databases
.tables
.schema`;

  const backupScript = `#!/bin/bash
# SQLite backup script example

DB_PATH="/path/to/your/database.db"
BACKUP_DIR="/path/to/backup/directory"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)

# Create backup directory if it doesn't exist
mkdir -p "$BACKUP_DIR"

# Backup SQLite database using sqlite3 command
sqlite3 "$DB_PATH" ".backup $BACKUP_DIR/database_$TIMESTAMP.db"

# Verify backup was created
if [ -f "$BACKUP_DIR/database_$TIMESTAMP.db" ]; then
    echo "Backup completed successfully: database_$TIMESTAMP.db"
else
    echo "Backup failed!"
    exit 1
fi`;

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
                <span>SQLite</span>
              </div>

              <div className="flex items-start gap-6 mb-8">
                <div className="p-3 bg-gray-600 text-white rounded-lg">
                  <FileText className="h-8 w-8" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h1 className="text-3xl lg:text-4xl font-bold">
                      SQLite Database Backup Setup
                    </h1>
                    <Badge variant="outline">Lightweight</Badge>
                  </div>
                  <p className="text-xl text-muted-foreground mb-4">
                    Complete guide to integrate SQLite with Novabuckups for simple, efficient file-based database backups.
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>~3 minutes setup</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="h-4 w-4" />
                      <span>File-based</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      <span>Simple & fast</span>
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
              
              {/* Step 1: Locate SQLite Database Files */}
              {currentStep === 1 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">1</div>
                      Locate SQLite Database Files
                    </CardTitle>
                    <CardDescription>
                      Find and verify the locations of your SQLite database files.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">1.1 Find Database Files</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm ml-4">
                        <li>Locate your SQLite database files (usually with .db, .sqlite, or .sqlite3 extensions)</li>
                        <li>Check application configuration for database file paths</li>
                        <li>Use file search if needed: <code className="bg-muted px-2 py-1 rounded">find / -name "*.db" -o -name "*.sqlite" 2&gt;/dev/null</code></li>
                        <li>Note the full file paths for all databases you want to backup</li>
                      </ol>
                    </div>

                    <Separator />

                    <div>
                      <h4 className="font-semibold mb-3">1.2 Verify Database Status</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm ml-4">
                        <li>Test database connection: <code className="bg-muted px-2 py-1 rounded">sqlite3 /path/to/database.db ".tables"</code></li>
                        <li>Check current journal mode: <code className="bg-muted px-2 py-1 rounded">sqlite3 /path/to/database.db "PRAGMA journal_mode;"</code></li>
                        <li>Verify database integrity: <code className="bg-muted px-2 py-1 rounded">sqlite3 /path/to/database.db "PRAGMA integrity_check;"</code></li>
                        <li>Note file sizes and last modification times</li>
                      </ol>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">1.3 Optimization Commands</h4>
                      <div className="relative">
                        <pre className="bg-muted p-4 rounded text-xs overflow-x-auto">
{sqliteCommands}
                        </pre>
                        <Button
                          variant="outline"
                          size="sm"
                          className="absolute top-2 right-2"
                          onClick={() => copyToClipboard(sqliteCommands, 'SQLite Commands')}
                        >
                          {copiedText === 'SQLite Commands' ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                        </Button>
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <Button variant="outline" disabled>
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Previous
                      </Button>
                      <Button onClick={() => setCurrentStep(2)}>
                        Next: Configure File Access
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Step 2: Configure File Access */}
              {currentStep === 2 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">2</div>
                      Configure File Access
                    </CardTitle>
                    <CardDescription>
                      Set up proper file permissions and access for reliable SQLite backups.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">2.1 Check File Permissions</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm ml-4">
                        <li>Check current permissions: <code className="bg-muted px-2 py-1 rounded">ls -la /path/to/database.db</code></li>
                        <li>Ensure read access for Novabuckups backup process</li>
                        <li>Verify the database is not currently locked by applications</li>
                        <li>Check for WAL and SHM files in the same directory</li>
                      </ol>
                    </div>

                    <Separator />

                    <div>
                      <h4 className="font-semibold mb-3">2.2 Enable WAL Mode (Recommended)</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm ml-4">
                        <li>Connect to SQLite: <code className="bg-muted px-2 py-1 rounded">sqlite3 /path/to/database.db</code></li>
                        <li>Enable WAL mode: <code className="bg-muted px-2 py-1 rounded">PRAGMA journal_mode=WAL;</code></li>
                        <li>Verify WAL mode is active: <code className="bg-muted px-2 py-1 rounded">PRAGMA journal_mode;</code></li>
                        <li>This allows concurrent reads during backup operations</li>
                      </ol>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">2.3 File System Considerations</h4>
                      <div className="bg-muted p-4 rounded">
                        <p className="text-sm mb-2">Important file considerations:</p>
                        <ul className="space-y-1 text-sm">
                          <li><strong>Main DB file:</strong> The primary .db file contains your data</li>
                          <li><strong>WAL file:</strong> .db-wal contains recent uncommitted changes</li>
                          <li><strong>SHM file:</strong> .db-shm is a shared memory file for WAL</li>
                          <li><strong>Backup all three:</strong> For complete consistency</li>
                        </ul>
                      </div>
                    </div>

                    <Alert>
                      <Key className="h-4 w-4" />
                      <AlertDescription>
                        <strong>Important:</strong> Always backup SQLite databases when they're not being actively written to, 
                        or use WAL mode to enable online backups.
                      </AlertDescription>
                    </Alert>

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
                      Add your SQLite database files to Novabuckups backup configuration.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">3.1 Access File Integration</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm ml-4">
                        <li>Log in to your Novabuckups dashboard</li>
                        <li>Navigate to "Settings" → "Integrations"</li>
                        <li>Find "SQLite Database" and click "Configure"</li>
                        <li>Click "Add New File Source"</li>
                      </ol>
                    </div>

                    <Separator />

                    <div>
                      <h4 className="font-semibold mb-3">3.2 Enter File Paths</h4>
                      <div className="bg-muted p-4 rounded space-y-3">
                        <div>
                          <label className="text-sm font-medium">Database File Path</label>
                          <p className="text-xs text-muted-foreground">/path/to/your/database.db</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium">Include WAL Files</label>
                          <p className="text-xs text-muted-foreground">Automatically backup .db-wal and .db-shm files</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium">File Pattern</label>
                          <p className="text-xs text-muted-foreground">Use wildcards to backup multiple databases: *.db</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium">Server/Agent</label>
                          <p className="text-xs text-muted-foreground">Select server where SQLite files are located</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">3.3 Configure Backup Options</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm ml-4">
                        <li>Set backup schedule (consider application usage patterns)</li>
                        <li>Configure retention policies</li>
                        <li>Enable compression to save storage space</li>
                        <li>Set up file verification checksums</li>
                        <li>Configure backup notifications</li>
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
                      Verify that SQLite backups are working correctly and test the recovery process.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">4.1 Run Test Backup</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm ml-4">
                        <li>In Novabuckups, go to "Backups" → "Create Manual Backup"</li>
                        <li>Select your SQLite file source</li>
                        <li>Choose backup destination (cloud storage)</li>
                        <li>Click "Start Backup"</li>
                        <li>Monitor backup progress and file transfer</li>
                      </ol>
                    </div>

                    <Separator />

                    <div>
                      <h4 className="font-semibold mb-3">4.2 Verify Backup Contents</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm ml-4">
                        <li>Check all SQLite files are included in backup</li>
                        <li>Verify file sizes match originals</li>
                        <li>Confirm WAL and SHM files are captured if present</li>
                        <li>Test backup file integrity and checksums</li>
                      </ol>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">4.3 Test Recovery Process</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm ml-4">
                        <li>Download backup files to a test location</li>
                        <li>Use Novabuckups "Restore" feature or manual download</li>
                        <li>Test database connectivity: <code className="bg-muted px-2 py-1 rounded">sqlite3 restored_database.db "SELECT COUNT(*) FROM sqlite_master;"</code></li>
                        <li>Verify table structure and sample data</li>
                        <li>Test application connectivity to restored database</li>
                      </ol>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">4.4 Sample Backup Script</h4>
                      <div className="relative">
                        <pre className="bg-muted p-4 rounded text-xs overflow-x-auto">
{backupScript}
                        </pre>
                        <Button
                          variant="outline"
                          size="sm"
                          className="absolute top-2 right-2"
                          onClick={() => copyToClipboard(backupScript, 'Backup Script')}
                        >
                          {copiedText === 'Backup Script' ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                        </Button>
                      </div>
                    </div>

                    <Alert>
                      <CheckCircle className="h-4 w-4" />
                      <AlertDescription>
                        <strong>Success!</strong> Your SQLite backup integration is complete. 
                        You now have automated file-based database backups with reliable recovery.
                      </AlertDescription>
                    </Alert>

                    <div className="bg-primary/5 border border-primary/20 p-4 rounded">
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <Settings className="h-4 w-4" />
                        Best Practices
                      </h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Use WAL mode for concurrent access during backups</li>
                        <li>• Schedule backups during low-activity periods</li>
                        <li>• Regularly run VACUUM to optimize database files</li>
                        <li>• Monitor file system space and backup storage usage</li>
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
                Our file system specialists can help you with SQLite optimization and file-based backup strategies.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/technical-support">
                    Get File System Support
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

export default SQLiteSetupGuide;
