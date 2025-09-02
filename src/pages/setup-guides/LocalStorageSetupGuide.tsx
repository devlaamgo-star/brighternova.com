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
  HardDrive,
  Shield,
  Key,
  Settings,
  Clock,
  Users,
  Terminal,
  Folder
} from "lucide-react";
import { Link } from "react-router-dom";

const LocalStorageSetupGuide = () => {
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
      title: "Prepare Storage Directory",
      duration: "1 minute",
      description: "Create and configure local backup directory"
    },
    {
      id: 2,
      title: "Set Directory Permissions",
      duration: "1 minute", 
      description: "Configure proper file system permissions"
    },
    {
      id: 3,
      title: "Configure Novabuckups",
      duration: "1 minute",
      description: "Add local storage path to Novabuckups"
    },
    {
      id: 4,
      title: "Test Backup Operations",
      duration: "1 minute",
      description: "Verify backup functionality and storage"
    }
  ];

  const requirements = [
    "Local file system access",
    "Sufficient disk space for backups",
    "Proper directory permissions",
    "Novabuckups account"
  ];

  const benefits = [
    "Fast local backup access",
    "No network dependency",
    "Full control over storage",
    "Cost-effective for local setups",
    "Simple configuration",
    "High-speed data transfer"
  ];

  const directorySetup = `# Create and configure local backup directory

# Create backup directory
sudo mkdir -p /var/backups/novabuckups

# Create subdirectories for organization
sudo mkdir -p /var/backups/novabuckups/{databases,files,logs}

# Set ownership (replace 'novabuckups' with actual service user)
sudo chown -R novabuckups:novabuckups /var/backups/novabuckups

# Set proper permissions
sudo chmod 755 /var/backups/novabuckups
sudo chmod 750 /var/backups/novabuckups/{databases,files,logs}

# Check available disk space
df -h /var/backups/novabuckups`;

  const permissionsScript = `# Set up proper permissions for backup operations

# Create backup group if it doesn't exist
sudo groupadd backups

# Add Novabuckups service user to backup group
sudo usermod -a -G backups novabuckups

# Set directory permissions with group access
sudo chgrp -R backups /var/backups/novabuckups
sudo chmod -R g+w /var/backups/novabuckups

# Set up logrotate for backup logs
sudo echo '/var/backups/novabuckups/logs/*.log {
    daily
    rotate 30
    compress
    delaycompress
    missingok
    notifempty
}' > /etc/logrotate.d/novabuckups-backups`;

  const monitoringScript = `# Monitoring script for local backup storage

#!/bin/bash
# Save as /usr/local/bin/check_backup_storage.sh

BACKUP_DIR="/var/backups/novabuckups"
THRESHOLD=85  # Alert when disk usage exceeds 85%

# Check disk usage
USAGE=$(df "$BACKUP_DIR" | awk 'NR==2 {print $5}' | sed 's/%//')

echo "Backup storage usage: \${USAGE}%"

if [ "\$USAGE" -gt "\$THRESHOLD" ]; then
    echo "WARNING: Backup storage is \${USAGE}% full!"
    # Send alert (customize as needed)
    # echo "Backup storage critical" | mail -s "Backup Alert" admin@company.com
fi

# Show oldest backups that could be cleaned up
echo "Oldest backup files:"
find "$BACKUP_DIR" -type f -name "*.backup" -printf '%T@ %p\n' | sort -n | head -5`;

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
                <span>Local Storage</span>
              </div>

              <div className="flex items-start gap-6 mb-8">
                <div className="p-3 bg-gray-600 text-white rounded-lg">
                  <HardDrive className="h-8 w-8" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h1 className="text-3xl lg:text-4xl font-bold">
                      Local Storage Backup Setup
                    </h1>
                    <Badge variant="outline">Simple</Badge>
                  </div>
                  <p className="text-xl text-muted-foreground mb-4">
                    Complete guide to configure local file system storage with Novabuckups for fast, direct backup access.
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>~4 minutes setup</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="h-4 w-4" />
                      <span>Direct access</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      <span>Cost effective</span>
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
              
              {/* Step 1: Prepare Storage Directory */}
              {currentStep === 1 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">1</div>
                      Prepare Storage Directory
                    </CardTitle>
                    <CardDescription>
                      Create and configure a local directory structure for backup storage.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">1.1 Create Backup Directory Structure</h4>
                      <div className="relative">
                        <pre className="bg-muted p-4 rounded text-xs overflow-x-auto">
{directorySetup}
                        </pre>
                        <Button
                          variant="outline"
                          size="sm"
                          className="absolute top-2 right-2"
                          onClick={() => copyToClipboard(directorySetup, 'Directory Setup')}
                        >
                          {copiedText === 'Directory Setup' ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                        </Button>
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <h4 className="font-semibold mb-3">1.2 Plan Storage Capacity</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm ml-4">
                        <li>Estimate backup storage requirements based on your data size</li>
                        <li>Consider retention policies and growth over time</li>
                        <li>Ensure adequate free space: aim for 3x your data size minimum</li>
                        <li>Monitor disk usage regularly to prevent storage exhaustion</li>
                      </ol>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">1.3 Storage Location Best Practices</h4>
                      <div className="bg-muted p-4 rounded">
                        <p className="text-sm mb-2">Recommended storage locations:</p>
                        <ul className="space-y-1 text-sm">
                          <li><strong>/var/backups/:</strong> Standard system backup location</li>
                          <li><strong>/opt/backups/:</strong> For application-specific backups</li>
                          <li><strong>/backup/:</strong> Dedicated partition for backups</li>
                          <li><strong>Separate drive:</strong> Dedicated backup drive for isolation</li>
                        </ul>
                      </div>
                    </div>

                    <Alert>
                      <AlertTriangle className="h-4 w-4" />
                      <AlertDescription>
                        <strong>Important:</strong> Store backups on a different physical drive than your primary data 
                        to protect against drive failures. Consider RAID configurations for additional protection.
                      </AlertDescription>
                    </Alert>

                    <div className="flex justify-between">
                      <Button variant="outline" disabled>
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Previous
                      </Button>
                      <Button onClick={() => setCurrentStep(2)}>
                        Next: Set Permissions
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Step 2: Set Directory Permissions */}
              {currentStep === 2 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">2</div>
                      Set Directory Permissions
                    </CardTitle>
                    <CardDescription>
                      Configure proper file system permissions for secure and reliable backup operations.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">2.1 Configure Permissions and Groups</h4>
                      <div className="relative">
                        <pre className="bg-muted p-4 rounded text-xs overflow-x-auto">
{permissionsScript}
                        </pre>
                        <Button
                          variant="outline"
                          size="sm"
                          className="absolute top-2 right-2"
                          onClick={() => copyToClipboard(permissionsScript, 'Permissions Script')}
                        >
                          {copiedText === 'Permissions Script' ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                        </Button>
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <h4 className="font-semibold mb-3">2.2 Security Considerations</h4>
                      <div className="bg-muted p-4 rounded">
                        <p className="text-sm mb-2">Security best practices:</p>
                        <ul className="space-y-1 text-sm">
                          <li><strong>Owner only write:</strong> Only backup service can write to backup directory</li>
                          <li><strong>Group read access:</strong> Allow authorized users to read backups</li>
                          <li><strong>No world access:</strong> Prevent unauthorized access to backup data</li>
                          <li><strong>SELinux/AppArmor:</strong> Configure security policies if enabled</li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">2.3 Test Directory Access</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm ml-4">
                        <li>Test write access: <code className="bg-muted px-2 py-1 rounded">touch /var/backups/novabuckups/test_file</code></li>
                        <li>Verify permissions: <code className="bg-muted px-2 py-1 rounded">ls -la /var/backups/novabuckups/</code></li>
                        <li>Test directory creation: <code className="bg-muted px-2 py-1 rounded">mkdir /var/backups/novabuckups/test_dir</code></li>
                        <li>Clean up test files: <code className="bg-muted px-2 py-1 rounded">rm -rf /var/backups/novabuckups/test_*</code></li>
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
                      Add your local storage path to Novabuckups configuration.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">3.1 Access Storage Integration</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm ml-4">
                        <li>Log in to your Novabuckups dashboard</li>
                        <li>Navigate to "Settings" → "Integrations"</li>
                        <li>Find "Local Storage" and click "Configure"</li>
                        <li>Click "Add New Storage Location"</li>
                      </ol>
                    </div>

                    <Separator />

                    <div>
                      <h4 className="font-semibold mb-3">3.2 Enter Storage Details</h4>
                      <div className="bg-muted p-4 rounded space-y-3">
                        <div>
                          <label className="text-sm font-medium">Storage Path</label>
                          <p className="text-xs text-muted-foreground">/var/backups/novabuckups (from step 1)</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium">Storage Name</label>
                          <p className="text-xs text-muted-foreground">Friendly name for this storage location</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium">Mount Point</label>
                          <p className="text-xs text-muted-foreground">If using a dedicated partition or drive</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium">File Permissions</label>
                          <p className="text-xs text-muted-foreground">Default: 640 for files, 750 for directories</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">3.3 Configure Storage Options</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm ml-4">
                        <li>Set directory structure for organizing backups</li>
                        <li>Configure compression settings</li>
                        <li>Set retention policies and cleanup rules</li>
                        <li>Enable storage monitoring and alerts</li>
                        <li>Configure backup verification checksums</li>
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

              {/* Step 4: Test Backup Operations */}
              {currentStep === 4 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">4</div>
                      Test Backup Operations
                    </CardTitle>
                    <CardDescription>
                      Verify that local storage backups are working correctly.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">4.1 Run Test Backup</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm ml-4">
                        <li>In Novabuckups, go to "Backups" → "Create Manual Backup"</li>
                        <li>Select a small data source for testing</li>
                        <li>Choose your local storage destination</li>
                        <li>Click "Start Backup"</li>
                        <li>Monitor backup progress and completion</li>
                      </ol>
                    </div>

                    <Separator />

                    <div>
                      <h4 className="font-semibold mb-3">4.2 Verify Backup Files</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm ml-4">
                        <li>Check backup directory: <code className="bg-muted px-2 py-1 rounded">ls -la /var/backups/novabuckups/</code></li>
                        <li>Verify file sizes and timestamps</li>
                        <li>Test file integrity and checksums</li>
                        <li>Check backup metadata and logs</li>
                      </ol>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">4.3 Test Recovery Process</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm ml-4">
                        <li>Use Novabuckups "Restore" feature to restore from local backup</li>
                        <li>Verify restored data matches original</li>
                        <li>Test file extraction and decompression</li>
                        <li>Confirm backup metadata is preserved</li>
                      </ol>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">4.4 Set Up Monitoring</h4>
                      <div className="relative">
                        <pre className="bg-muted p-4 rounded text-xs overflow-x-auto">
{monitoringScript}
                        </pre>
                        <Button
                          variant="outline"
                          size="sm"
                          className="absolute top-2 right-2"
                          onClick={() => copyToClipboard(monitoringScript, 'Monitoring Script')}
                        >
                          {copiedText === 'Monitoring Script' ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                        </Button>
                      </div>
                    </div>

                    <Alert>
                      <CheckCircle className="h-4 w-4" />
                      <AlertDescription>
                        <strong>Success!</strong> Your local storage backup integration is complete. 
                        You now have fast, direct access backups stored locally on your file system.
                      </AlertDescription>
                    </Alert>

                    <div className="bg-primary/5 border border-primary/20 p-4 rounded">
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <Settings className="h-4 w-4" />
                        Maintenance Tips
                      </h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Set up automated disk space monitoring</li>
                        <li>• Configure log rotation for backup logs</li>
                        <li>• Implement backup verification scripts</li>
                        <li>• Plan for backup directory cleanup and archiving</li>
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
                Our system administrators can help you with local storage optimization and file system configuration.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/technical-support">
                    Get Storage Support
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/schedule-demo">
                    Schedule Storage Demo
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

export default LocalStorageSetupGuide;
