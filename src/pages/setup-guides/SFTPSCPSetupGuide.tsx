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
  Server,
  Shield,
  Key,
  Settings,
  Clock,
  Users,
  Terminal,
  Lock
} from "lucide-react";
import { Link } from "react-router-dom";

const SFTPSCPSetupGuide = () => {
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
      title: "Prepare SSH Server",
      duration: "2 minutes",
      description: "Set up SSH server and user accounts"
    },
    {
      id: 2,
      title: "Configure SSH Key Authentication",
      duration: "2 minutes", 
      description: "Set up secure key-based authentication"
    },
    {
      id: 3,
      title: "Configure Novabuckups",
      duration: "1 minute",
      description: "Add SFTP/SCP connection to Novabuckups"
    },
    {
      id: 4,
      title: "Test File Transfer",
      duration: "1 minute",
      description: "Verify backup transfer functionality"
    }
  ];

  const requirements = [
    "SSH server (OpenSSH)",
    "User account with backup directory access",
    "Network connectivity between servers",
    "Novabuckups account"
  ];

  const benefits = [
    "Secure encrypted file transfers",
    "SSH key-based authentication",
    "Cross-platform compatibility",
    "Bandwidth limiting and resume support",
    "Directory structure preservation",
    "Custom port and configuration support"
  ];

  const sshKeyGeneration = `# Generate SSH key pair for backup authentication
ssh-keygen -t rsa -b 4096 -C "novabuckups-backup" -f ~/.ssh/novabuckups_backup

# This creates two files:
# ~/.ssh/novabuckups_backup (private key - keep secure)
# ~/.ssh/novabuckups_backup.pub (public key - copy to server)

# Set proper permissions
chmod 600 ~/.ssh/novabuckups_backup
chmod 644 ~/.ssh/novabuckups_backup.pub`;

  const serverConfig = `# SSH server configuration for backup access
# Add to /etc/ssh/sshd_config

# Enable key-based authentication
PubkeyAuthentication yes
AuthorizedKeysFile .ssh/authorized_keys

# Security settings
PasswordAuthentication no
PermitRootLogin no
AllowUsers backup_user

# SFTP subsystem (usually already enabled)
Subsystem sftp /usr/lib/openssh/sftp-server

# Restart SSH service after changes
sudo systemctl restart ssh`;

  const authorizedKeysSetup = `# Set up authorized_keys on backup server

# Create .ssh directory for backup user
sudo mkdir -p /home/backup_user/.ssh
sudo chown backup_user:backup_user /home/backup_user/.ssh
sudo chmod 700 /home/backup_user/.ssh

# Add public key to authorized_keys
sudo echo "ssh-rsa AAAAB3NzaC1yc2E... novabuckups-backup" >> /home/backup_user/.ssh/authorized_keys
sudo chown backup_user:backup_user /home/backup_user/.ssh/authorized_keys
sudo chmod 600 /home/backup_user/.ssh/authorized_keys

# Create backup directory
sudo mkdir -p /home/backup_user/backups
sudo chown backup_user:backup_user /home/backup_user/backups
sudo chmod 755 /home/backup_user/backups`;

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
                <span>SFTP/SCP</span>
              </div>

              <div className="flex items-start gap-6 mb-8">
                <div className="p-3 bg-green-600 text-white rounded-lg">
                  <Lock className="h-8 w-8" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h1 className="text-3xl lg:text-4xl font-bold">
                      SFTP/SCP Server Backup Setup
                    </h1>
                    <Badge className="bg-primary text-primary-foreground">Popular</Badge>
                  </div>
                  <p className="text-xl text-muted-foreground mb-4">
                    Complete guide to set up SFTP/SCP with Novabuckups for secure, encrypted file transfer backups.
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>~6 minutes setup</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="h-4 w-4" />
                      <span>SSH encrypted</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      <span>Universal support</span>
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
              
              {/* Step 1: Prepare SSH Server */}
              {currentStep === 1 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">1</div>
                      Prepare SSH Server
                    </CardTitle>
                    <CardDescription>
                      Set up SSH server and create a dedicated user account for backup operations.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">1.1 Install SSH Server</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm ml-4">
                        <li>Install OpenSSH server: <code className="bg-muted px-2 py-1 rounded">sudo apt install openssh-server</code> (Ubuntu/Debian)</li>
                        <li>Or for CentOS/RHEL: <code className="bg-muted px-2 py-1 rounded">sudo yum install openssh-server</code></li>
                        <li>Start SSH service: <code className="bg-muted px-2 py-1 rounded">sudo systemctl start ssh</code></li>
                        <li>Enable on boot: <code className="bg-muted px-2 py-1 rounded">sudo systemctl enable ssh</code></li>
                      </ol>
                    </div>

                    <Separator />

                    <div>
                      <h4 className="font-semibold mb-3">1.2 Create Backup User</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm ml-4">
                        <li>Create dedicated user: <code className="bg-muted px-2 py-1 rounded">sudo adduser backup_user</code></li>
                        <li>Set strong password when prompted</li>
                        <li>Create backup directory: <code className="bg-muted px-2 py-1 rounded">sudo mkdir -p /home/backup_user/backups</code></li>
                        <li>Set ownership: <code className="bg-muted px-2 py-1 rounded">sudo chown backup_user:backup_user /home/backup_user/backups</code></li>
                      </ol>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">1.3 Configure SSH Server</h4>
                      <div className="relative">
                        <pre className="bg-muted p-4 rounded text-xs overflow-x-auto">
{serverConfig}
                        </pre>
                        <Button
                          variant="outline"
                          size="sm"
                          className="absolute top-2 right-2"
                          onClick={() => copyToClipboard(serverConfig, 'SSH Config')}
                        >
                          {copiedText === 'SSH Config' ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                        </Button>
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <Button variant="outline" disabled>
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Previous
                      </Button>
                      <Button onClick={() => setCurrentStep(2)}>
                        Next: Configure SSH Keys
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Step 2: Configure SSH Key Authentication */}
              {currentStep === 2 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">2</div>
                      Configure SSH Key Authentication
                    </CardTitle>
                    <CardDescription>
                      Set up secure SSH key-based authentication for passwordless, secure connections.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">2.1 Generate SSH Key Pair</h4>
                      <div className="relative">
                        <pre className="bg-muted p-4 rounded text-xs overflow-x-auto">
{sshKeyGeneration}
                        </pre>
                        <Button
                          variant="outline"
                          size="sm"
                          className="absolute top-2 right-2"
                          onClick={() => copyToClipboard(sshKeyGeneration, 'SSH Key Gen')}
                        >
                          {copiedText === 'SSH Key Gen' ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                        </Button>
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <h4 className="font-semibold mb-3">2.2 Set Up Authorized Keys on Server</h4>
                      <div className="relative">
                        <pre className="bg-muted p-4 rounded text-xs overflow-x-auto">
{authorizedKeysSetup}
                        </pre>
                        <Button
                          variant="outline"
                          size="sm"
                          className="absolute top-2 right-2"
                          onClick={() => copyToClipboard(authorizedKeysSetup, 'Authorized Keys')}
                        >
                          {copiedText === 'Authorized Keys' ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                        </Button>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">2.3 Test SSH Connection</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm ml-4">
                        <li>Test key-based connection: <code className="bg-muted px-2 py-1 rounded">ssh -i ~/.ssh/novabuckups_backup backup_user@server_ip</code></li>
                        <li>Verify you can access the backup directory</li>
                        <li>Test SFTP connection: <code className="bg-muted px-2 py-1 rounded">sftp -i ~/.ssh/novabuckups_backup backup_user@server_ip</code></li>
                        <li>Try uploading a test file to verify write permissions</li>
                      </ol>
                    </div>

                    <Alert>
                      <Key className="h-4 w-4" />
                      <AlertDescription>
                        <strong>Security Best Practice:</strong> Never share private keys. Store them securely and use 
                        different keys for different purposes. Consider using SSH agent for key management.
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
                      Add your SFTP/SCP server connection to Novabuckups.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">3.1 Access Storage Integration</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm ml-4">
                        <li>Log in to your Novabuckups dashboard</li>
                        <li>Navigate to "Settings" → "Integrations"</li>
                        <li>Find "SFTP/SCP Server" and click "Configure"</li>
                        <li>Click "Add New Connection"</li>
                      </ol>
                    </div>

                    <Separator />

                    <div>
                      <h4 className="font-semibold mb-3">3.2 Enter Connection Details</h4>
                      <div className="bg-muted p-4 rounded space-y-3">
                        <div>
                          <label className="text-sm font-medium">Hostname/IP Address</label>
                          <p className="text-xs text-muted-foreground">Your SSH server hostname or IP address</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium">Port</label>
                          <p className="text-xs text-muted-foreground">Default: 22 (or custom port if configured)</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium">Username</label>
                          <p className="text-xs text-muted-foreground">backup_user (from step 1)</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium">Authentication Method</label>
                          <p className="text-xs text-muted-foreground">SSH Key (recommended) or Password</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium">Private Key</label>
                          <p className="text-xs text-muted-foreground">Upload your private key file or paste key content</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium">Remote Directory</label>
                          <p className="text-xs text-muted-foreground">/home/backup_user/backups</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">3.3 Configure Transfer Options</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm ml-4">
                        <li>Set transfer protocol: SFTP (recommended) or SCP</li>
                        <li>Configure bandwidth limiting if needed</li>
                        <li>Set connection timeout and retry settings</li>
                        <li>Enable compression for faster transfers</li>
                        <li>Configure backup retention on remote server</li>
                        <li>Click "Save Configuration"</li>
                      </ol>
                    </div>

                    <div className="flex justify-between">
                      <Button variant="outline" onClick={() => setCurrentStep(2)}>
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Previous
                      </Button>
                      <Button onClick={() => setCurrentStep(4)}>
                        Next: Test Transfer
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Step 4: Test File Transfer */}
              {currentStep === 4 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">4</div>
                      Test File Transfer
                    </CardTitle>
                    <CardDescription>
                      Verify that SFTP/SCP file transfers are working correctly.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">4.1 Run Connection Test</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm ml-4">
                        <li>In Novabuckups, click "Test Connection" for your SFTP/SCP configuration</li>
                        <li>Verify successful authentication with SSH keys</li>
                        <li>Check remote directory access and write permissions</li>
                        <li>Confirm network connectivity and firewall settings</li>
                      </ol>
                    </div>

                    <Separator />

                    <div>
                      <h4 className="font-semibold mb-3">4.2 Run Test Backup</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm ml-4">
                        <li>Go to "Backups" → "Create Manual Backup"</li>
                        <li>Select a small data source for testing</li>
                        <li>Choose your SFTP/SCP destination</li>
                        <li>Click "Start Backup"</li>
                        <li>Monitor transfer progress and completion</li>
                      </ol>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">4.3 Verify on Remote Server</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm ml-4">
                        <li>SSH into your backup server: <code className="bg-muted px-2 py-1 rounded">ssh backup_user@server_ip</code></li>
                        <li>Check backup directory: <code className="bg-muted px-2 py-1 rounded">ls -la ~/backups/</code></li>
                        <li>Verify file sizes and timestamps are correct</li>
                        <li>Test file integrity and accessibility</li>
                      </ol>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">4.4 Test File Download</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm ml-4">
                        <li>Use Novabuckups "Restore" feature to download a backup file</li>
                        <li>Verify downloaded file matches the original</li>
                        <li>Test file extraction and restoration process</li>
                        <li>Confirm backup metadata is preserved</li>
                      </ol>
                    </div>

                    <Alert>
                      <CheckCircle className="h-4 w-4" />
                      <AlertDescription>
                        <strong>Success!</strong> Your SFTP/SCP backup integration is complete. 
                        You now have secure, encrypted file transfer backups to your remote server.
                      </AlertDescription>
                    </Alert>

                    <div className="bg-primary/5 border border-primary/20 p-4 rounded">
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <Settings className="h-4 w-4" />
                        Security Best Practices
                      </h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Regularly rotate SSH keys and passwords</li>
                        <li>• Use fail2ban to prevent brute force attacks</li>
                        <li>• Monitor backup directory disk usage</li>
                        <li>• Set up log monitoring for connection attempts</li>
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
                Our system administrators can help you with SSH server setup and security configuration.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/technical-support">
                    Get System Support
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

export default SFTPSCPSetupGuide;
