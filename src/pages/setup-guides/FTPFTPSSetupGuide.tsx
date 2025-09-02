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
  Upload
} from "lucide-react";
import { Link } from "react-router-dom";

const FTPFTPSSetupGuide = () => {
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
      title: "Set Up FTP Server",
      duration: "3 minutes",
      description: "Install and configure FTP server with optional SSL/TLS"
    },
    {
      id: 2,
      title: "Configure Users & Security",
      duration: "2 minutes", 
      description: "Set up FTP users and security settings"
    },
    {
      id: 3,
      title: "Configure Novabuckups",
      duration: "1 minute",
      description: "Add FTP/FTPS connection to Novabuckups"
    },
    {
      id: 4,
      title: "Test File Transfer",
      duration: "1 minute",
      description: "Verify FTP backup functionality"
    }
  ];

  const requirements = [
    "FTP server (vsftpd, ProFTPD, or FileZilla Server)",
    "User account with upload permissions",
    "Network connectivity and firewall configuration",
    "Novabuckups account"
  ];

  const benefits = [
    "Wide protocol compatibility",
    "SSL/TLS encryption support (FTPS)",
    "Resume support for large files",
    "Passive and active mode support",
    "Cross-platform compatibility",
    "Legacy system support"
  ];

  const vsftpdConfig = `# vsftpd configuration for secure FTP backups
# Edit /etc/vsftpd.conf

# Basic settings
listen=YES
listen_ipv6=NO
anonymous_enable=NO
local_enable=YES
write_enable=YES
dirmessage_enable=YES
use_localtime=YES

# Security settings
chroot_local_user=YES
allow_writeable_chroot=YES
secure_chroot_dir=/var/run/vsftpd/empty

# SSL/TLS encryption (FTPS)
ssl_enable=YES
ssl_tlsv1=YES
ssl_sslv2=NO
ssl_sslv3=NO
rsa_cert_file=/etc/ssl/certs/vsftpd.pem
rsa_private_key_file=/etc/ssl/private/vsftpd.key
allow_anon_ssl=NO
force_local_data_ssl=YES
force_local_logins_ssl=YES

# Passive mode configuration
pasv_enable=YES
pasv_min_port=40000
pasv_max_port=40100`;

  const ftpUserSetup = `# Create FTP user for backup operations

# Create dedicated backup user
sudo adduser backup_ftp
sudo passwd backup_ftp

# Create backup directory
sudo mkdir -p /home/backup_ftp/backups
sudo chown backup_ftp:backup_ftp /home/backup_ftp/backups
sudo chmod 755 /home/backup_ftp/backups

# Generate SSL certificate for FTPS (if using SSL)
sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
    -keyout /etc/ssl/private/vsftpd.key \
    -out /etc/ssl/certs/vsftpd.pem

# Set certificate permissions
sudo chmod 600 /etc/ssl/private/vsftpd.key
sudo chmod 644 /etc/ssl/certs/vsftpd.pem

# Restart FTP service
sudo systemctl restart vsftpd`;

  const firewallConfig = `# Configure firewall for FTP/FTPS

# Allow FTP control port
sudo ufw allow 21/tcp

# Allow passive mode ports (adjust range as configured)
sudo ufw allow 40000:40100/tcp

# For FTPS, also allow port 990 for implicit SSL
sudo ufw allow 990/tcp

# Check firewall status
sudo ufw status

# Test FTP connection
ftp server_ip
# Or for FTPS
lftp -e "set ftp:ssl-force true; connect ftps://server_ip"`;

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
                <span>FTP/FTPS</span>
              </div>

              <div className="flex items-start gap-6 mb-8">
                <div className="p-3 bg-orange-600 text-white rounded-lg">
                  <Upload className="h-8 w-8" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h1 className="text-3xl lg:text-4xl font-bold">
                      FTP/FTPS Server Backup Setup
                    </h1>
                    <Badge variant="outline">Traditional</Badge>
                  </div>
                  <p className="text-xl text-muted-foreground mb-4">
                    Complete guide to configure FTP/FTPS with Novabuckups for traditional file transfer protocol backups.
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>~7 minutes setup</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="h-4 w-4" />
                      <span>SSL/TLS optional</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      <span>Legacy support</span>
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
              
              {/* Step 1: Set Up FTP Server */}
              {currentStep === 1 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">1</div>
                      Set Up FTP Server
                    </CardTitle>
                    <CardDescription>
                      Install and configure FTP server with optional SSL/TLS encryption for secure transfers.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">1.1 Install FTP Server</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm ml-4">
                        <li>Install vsftpd: <code className="bg-muted px-2 py-1 rounded">sudo apt install vsftpd</code> (Ubuntu/Debian)</li>
                        <li>Or for CentOS/RHEL: <code className="bg-muted px-2 py-1 rounded">sudo yum install vsftpd</code></li>
                        <li>Start FTP service: <code className="bg-muted px-2 py-1 rounded">sudo systemctl start vsftpd</code></li>
                        <li>Enable on boot: <code className="bg-muted px-2 py-1 rounded">sudo systemctl enable vsftpd</code></li>
                      </ol>
                    </div>

                    <Separator />

                    <div>
                      <h4 className="font-semibold mb-3">1.2 Configure FTP Server</h4>
                      <div className="relative">
                        <pre className="bg-muted p-4 rounded text-xs overflow-x-auto">
{vsftpdConfig}
                        </pre>
                        <Button
                          variant="outline"
                          size="sm"
                          className="absolute top-2 right-2"
                          onClick={() => copyToClipboard(vsftpdConfig, 'FTP Config')}
                        >
                          {copiedText === 'FTP Config' ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                        </Button>
                      </div>
                    </div>

                    <Alert>
                      <Shield className="h-4 w-4" />
                      <AlertDescription>
                        <strong>Security Recommendation:</strong> Always use FTPS (FTP over SSL/TLS) instead of plain FTP 
                        for production environments to encrypt data transfers and credentials.
                      </AlertDescription>
                    </Alert>

                    <div className="flex justify-between">
                      <Button variant="outline" disabled>
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Previous
                      </Button>
                      <Button onClick={() => setCurrentStep(2)}>
                        Next: Configure Security
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Step 2: Configure Users & Security */}
              {currentStep === 2 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">2</div>
                      Configure Users & Security
                    </CardTitle>
                    <CardDescription>
                      Set up FTP users, SSL certificates, and firewall configuration for secure file transfers.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">2.1 Create FTP User and SSL Setup</h4>
                      <div className="relative">
                        <pre className="bg-muted p-4 rounded text-xs overflow-x-auto">
{ftpUserSetup}
                        </pre>
                        <Button
                          variant="outline"
                          size="sm"
                          className="absolute top-2 right-2"
                          onClick={() => copyToClipboard(ftpUserSetup, 'FTP User Setup')}
                        >
                          {copiedText === 'FTP User Setup' ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                        </Button>
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <h4 className="font-semibold mb-3">2.2 Configure Firewall</h4>
                      <div className="relative">
                        <pre className="bg-muted p-4 rounded text-xs overflow-x-auto">
{firewallConfig}
                        </pre>
                        <Button
                          variant="outline"
                          size="sm"
                          className="absolute top-2 right-2"
                          onClick={() => copyToClipboard(firewallConfig, 'Firewall Config')}
                        >
                          {copiedText === 'Firewall Config' ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                        </Button>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">2.3 FTP vs FTPS Comparison</h4>
                      <div className="bg-muted p-4 rounded">
                        <p className="text-sm mb-2">Protocol options:</p>
                        <ul className="space-y-1 text-sm">
                          <li><strong>FTP (Port 21):</strong> Traditional protocol, unencrypted</li>
                          <li><strong>FTPS Explicit (Port 21):</strong> FTP with SSL/TLS upgrade</li>
                          <li><strong>FTPS Implicit (Port 990):</strong> SSL/TLS from connection start</li>
                          <li><strong>Passive Mode:</strong> Required for firewalls and NAT</li>
                        </ul>
                      </div>
                    </div>

                    <Alert>
                      <Key className="h-4 w-4" />
                      <AlertDescription>
                        <strong>Security Note:</strong> Plain FTP transmits passwords in clear text. 
                        Always use FTPS for production backup operations to ensure data security.
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
                      Add your FTP/FTPS server connection to Novabuckups.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">3.1 Access Storage Integration</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm ml-4">
                        <li>Log in to your Novabuckups dashboard</li>
                        <li>Navigate to "Settings" → "Integrations"</li>
                        <li>Find "FTP/FTPS Server" and click "Configure"</li>
                        <li>Click "Add New Connection"</li>
                      </ol>
                    </div>

                    <Separator />

                    <div>
                      <h4 className="font-semibold mb-3">3.2 Enter Connection Details</h4>
                      <div className="bg-muted p-4 rounded space-y-3">
                        <div>
                          <label className="text-sm font-medium">Protocol</label>
                          <p className="text-xs text-muted-foreground">FTP, FTPS Explicit, or FTPS Implicit</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium">Hostname/IP Address</label>
                          <p className="text-xs text-muted-foreground">Your FTP server hostname or IP address</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium">Port</label>
                          <p className="text-xs text-muted-foreground">21 (FTP/FTPS Explicit) or 990 (FTPS Implicit)</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium">Username</label>
                          <p className="text-xs text-muted-foreground">backup_ftp (from step 2)</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium">Password</label>
                          <p className="text-xs text-muted-foreground">Password for FTP user</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium">Remote Directory</label>
                          <p className="text-xs text-muted-foreground">/backups or relative path from user home</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">3.3 Configure Transfer Options</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm ml-4">
                        <li>Select transfer mode: Passive (recommended) or Active</li>
                        <li>Enable SSL/TLS if using FTPS</li>
                        <li>Configure connection timeout and retry settings</li>
                        <li>Set bandwidth limiting if needed</li>
                        <li>Enable resume support for large files</li>
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
                      Verify that FTP/FTPS file transfers are working correctly.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">4.1 Test FTP Connection</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm ml-4">
                        <li>In Novabuckups, click "Test Connection" for your FTP/FTPS configuration</li>
                        <li>Verify successful authentication with credentials</li>
                        <li>Check remote directory access and write permissions</li>
                        <li>Confirm SSL/TLS encryption is working (if using FTPS)</li>
                      </ol>
                    </div>

                    <Separator />

                    <div>
                      <h4 className="font-semibold mb-3">4.2 Run Test Backup</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm ml-4">
                        <li>Go to "Backups" → "Create Manual Backup"</li>
                        <li>Select a small data source for testing</li>
                        <li>Choose your FTP/FTPS destination</li>
                        <li>Click "Start Backup"</li>
                        <li>Monitor transfer progress and completion</li>
                      </ol>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">4.3 Verify on FTP Server</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm ml-4">
                        <li>Connect to FTP server: <code className="bg-muted px-2 py-1 rounded">ftp server_ip</code></li>
                        <li>Login with backup_ftp credentials</li>
                        <li>List files: <code className="bg-muted px-2 py-1 rounded">ls -la</code></li>
                        <li>Verify file sizes and transfer completion</li>
                      </ol>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">4.4 Test File Download</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm ml-4">
                        <li>Use Novabuckups "Restore" feature to download backup file</li>
                        <li>Verify downloaded file matches original</li>
                        <li>Test file extraction and restoration process</li>
                        <li>Confirm transfer resume functionality works</li>
                      </ol>
                    </div>

                    <Alert>
                      <CheckCircle className="h-4 w-4" />
                      <AlertDescription>
                        <strong>Success!</strong> Your FTP/FTPS backup integration is complete. 
                        You now have traditional file transfer protocol backups with optional SSL/TLS encryption.
                      </AlertDescription>
                    </Alert>

                    <div className="bg-primary/5 border border-primary/20 p-4 rounded">
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <Settings className="h-4 w-4" />
                        Performance Tips
                      </h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Use passive mode for better firewall compatibility</li>
                        <li>• Monitor FTP logs for connection issues</li>
                        <li>• Configure appropriate timeout values</li>
                        <li>• Regular SSL certificate renewal for FTPS</li>
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
                Our system administrators can help you with FTP server setup and SSL/TLS configuration.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/technical-support">
                    Get FTP Support
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

export default FTPFTPSSetupGuide;
