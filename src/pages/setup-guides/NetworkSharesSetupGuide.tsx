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
  Network,
  Shield,
  Key,
  Settings,
  Clock,
  Users,
  Terminal,
  Share
} from "lucide-react";
import { Link } from "react-router-dom";

const NetworkSharesSetupGuide = () => {
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
      title: "Set Up Network Share",
      duration: "3 minutes",
      description: "Configure SMB/CIFS or NFS network share"
    },
    {
      id: 2,
      title: "Configure Authentication",
      duration: "2 minutes", 
      description: "Set up secure access credentials"
    },
    {
      id: 3,
      title: "Configure Novabuckups",
      duration: "1 minute",
      description: "Add network share to Novabuckups"
    },
    {
      id: 4,
      title: "Test Mount & Transfer",
      duration: "1 minute",
      description: "Verify network share functionality"
    }
  ];

  const requirements = [
    "Network file server (Windows/Linux/NAS)",
    "SMB/CIFS or NFS share configured",
    "Network connectivity between servers",
    "Novabuckups account"
  ];

  const benefits = [
    "Centralized backup storage",
    "Network accessible from multiple servers",
    "SMB/CIFS and NFS protocol support",
    "Authentication and access control",
    "Cross-platform compatibility",
    "Scalable storage capacity"
  ];

  const smbSetup = `# SMB/CIFS Share Setup (Linux Server)

# Install Samba server
sudo apt install samba samba-common-bin

# Create backup directory
sudo mkdir -p /srv/samba/backups
sudo chown nobody:nogroup /srv/samba/backups
sudo chmod 775 /srv/samba/backups

# Configure Samba share in /etc/samba/smb.conf
echo "
[backups]
    path = /srv/samba/backups
    browseable = yes
    read only = no
    guest ok = no
    valid users = backup_user
    create mask = 0664
    directory mask = 0775
" | sudo tee -a /etc/samba/smb.conf

# Create Samba user
sudo smbpasswd -a backup_user

# Restart Samba service
sudo systemctl restart smbd`;

  const nfsSetup = `# NFS Share Setup (Linux Server)

# Install NFS server
sudo apt install nfs-kernel-server

# Create export directory
sudo mkdir -p /srv/nfs/backups
sudo chown nobody:nogroup /srv/nfs/backups
sudo chmod 755 /srv/nfs/backups

# Configure NFS exports in /etc/exports
echo "/srv/nfs/backups 192.168.1.0/24(rw,sync,no_subtree_check,no_root_squash)" | sudo tee -a /etc/exports

# Export the shares
sudo exportfs -a

# Start NFS service
sudo systemctl start nfs-kernel-server
sudo systemctl enable nfs-kernel-server`;

  const mountCommands = `# Client-side mount commands for testing

# SMB/CIFS mount
sudo mkdir -p /mnt/backup_share
sudo mount -t cifs //server_ip/backups /mnt/backup_share -o username=backup_user,password=your_password

# NFS mount
sudo mkdir -p /mnt/nfs_backup
sudo mount -t nfs server_ip:/srv/nfs/backups /mnt/nfs_backup

# Test write access
touch /mnt/backup_share/test_file
ls -la /mnt/backup_share/

# Add to /etc/fstab for permanent mounting (optional)
echo "//server_ip/backups /mnt/backup_share cifs username=backup_user,password=your_password,uid=1000,gid=1000 0 0" | sudo tee -a /etc/fstab`;

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
                <span>Network Shares</span>
              </div>

              <div className="flex items-start gap-6 mb-8">
                <div className="p-3 bg-purple-600 text-white rounded-lg">
                  <Network className="h-8 w-8" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h1 className="text-3xl lg:text-4xl font-bold">
                      Network Shares Backup Setup
                    </h1>
                    <Badge variant="outline">Enterprise</Badge>
                  </div>
                  <p className="text-xl text-muted-foreground mb-4">
                    Complete guide to configure SMB/CIFS and NFS network shares with Novabuckups for centralized backup storage.
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>~7 minutes setup</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="h-4 w-4" />
                      <span>Network secure</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      <span>Multi-server access</span>
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
              
              {/* Step 1: Set Up Network Share */}
              {currentStep === 1 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">1</div>
                      Set Up Network Share
                    </CardTitle>
                    <CardDescription>
                      Configure SMB/CIFS or NFS network share on your file server.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">1.1 SMB/CIFS Share Setup (Windows/Linux)</h4>
                      <div className="relative">
                        <pre className="bg-muted p-4 rounded text-xs overflow-x-auto">
{smbSetup}
                        </pre>
                        <Button
                          variant="outline"
                          size="sm"
                          className="absolute top-2 right-2"
                          onClick={() => copyToClipboard(smbSetup, 'SMB Setup')}
                        >
                          {copiedText === 'SMB Setup' ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                        </Button>
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <h4 className="font-semibold mb-3">1.2 NFS Share Setup (Linux Only)</h4>
                      <div className="relative">
                        <pre className="bg-muted p-4 rounded text-xs overflow-x-auto">
{nfsSetup}
                        </pre>
                        <Button
                          variant="outline"
                          size="sm"
                          className="absolute top-2 right-2"
                          onClick={() => copyToClipboard(nfsSetup, 'NFS Setup')}
                        >
                          {copiedText === 'NFS Setup' ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                        </Button>
                      </div>
                    </div>

                    <Alert>
                      <AlertTriangle className="h-4 w-4" />
                      <AlertDescription>
                        <strong>Protocol Choice:</strong> Use SMB/CIFS for mixed Windows/Linux environments. 
                        Use NFS for Linux-only environments for better performance.
                      </AlertDescription>
                    </Alert>

                    <div className="flex justify-between">
                      <Button variant="outline" disabled>
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Previous
                      </Button>
                      <Button onClick={() => setCurrentStep(2)}>
                        Next: Configure Authentication
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Step 2: Configure Authentication */}
              {currentStep === 2 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">2</div>
                      Configure Authentication
                    </CardTitle>
                    <CardDescription>
                      Set up secure access credentials and permissions for the network share.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">2.1 SMB/CIFS Authentication</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm ml-4">
                        <li>Create dedicated backup user on file server</li>
                        <li>Set strong password for the backup user</li>
                        <li>Add user to Samba: <code className="bg-muted px-2 py-1 rounded">sudo smbpasswd -a backup_user</code></li>
                        <li>Configure share permissions in smb.conf</li>
                        <li>Test access: <code className="bg-muted px-2 py-1 rounded">smbclient //server_ip/backups -U backup_user</code></li>
                      </ol>
                    </div>

                    <Separator />

                    <div>
                      <h4 className="font-semibold mb-3">2.2 NFS Authentication</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm ml-4">
                        <li>Configure client IP access in /etc/exports</li>
                        <li>Set UID/GID mapping for proper permissions</li>
                        <li>Configure NFS security (auth_sys, sec=krb5 for Kerberos)</li>
                        <li>Update firewall rules for NFS ports (2049, 111)</li>
                        <li>Test mount from client system</li>
                      </ol>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">2.3 Test Mount Commands</h4>
                      <div className="relative">
                        <pre className="bg-muted p-4 rounded text-xs overflow-x-auto">
{mountCommands}
                        </pre>
                        <Button
                          variant="outline"
                          size="sm"
                          className="absolute top-2 right-2"
                          onClick={() => copyToClipboard(mountCommands, 'Mount Commands')}
                        >
                          {copiedText === 'Mount Commands' ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                        </Button>
                      </div>
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
                      Add your network share connection to Novabuckups.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">3.1 Access Storage Integration</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm ml-4">
                        <li>Log in to your Novabuckups dashboard</li>
                        <li>Navigate to "Settings" → "Integrations"</li>
                        <li>Find "Network Shares" and click "Configure"</li>
                        <li>Click "Add New Network Share"</li>
                      </ol>
                    </div>

                    <Separator />

                    <div>
                      <h4 className="font-semibold mb-3">3.2 Enter Share Details</h4>
                      <div className="bg-muted p-4 rounded space-y-3">
                        <div>
                          <label className="text-sm font-medium">Protocol</label>
                          <p className="text-xs text-muted-foreground">SMB/CIFS or NFS</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium">Server Address</label>
                          <p className="text-xs text-muted-foreground">File server hostname or IP address</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium">Share Path</label>
                          <p className="text-xs text-muted-foreground">SMB: //server/backups or NFS: /srv/nfs/backups</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium">Username (SMB only)</label>
                          <p className="text-xs text-muted-foreground">backup_user (for SMB/CIFS shares)</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium">Password (SMB only)</label>
                          <p className="text-xs text-muted-foreground">Password for SMB/CIFS authentication</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium">Mount Options</label>
                          <p className="text-xs text-muted-foreground">Custom mount options if needed</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">3.3 Configure Backup Options</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm ml-4">
                        <li>Set backup directory structure on the share</li>
                        <li>Configure retention policies and cleanup</li>
                        <li>Enable compression for network efficiency</li>
                        <li>Set up backup verification and integrity checks</li>
                        <li>Configure connection timeout and retry settings</li>
                        <li>Click "Save Configuration"</li>
                      </ol>
                    </div>

                    <div className="flex justify-between">
                      <Button variant="outline" onClick={() => setCurrentStep(2)}>
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Previous
                      </Button>
                      <Button onClick={() => setCurrentStep(4)}>
                        Next: Test Mount
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Step 4: Test Mount & Transfer */}
              {currentStep === 4 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">4</div>
                      Test Mount & Transfer
                    </CardTitle>
                    <CardDescription>
                      Verify that network share mounting and file transfers are working correctly.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">4.1 Test Network Share Connection</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm ml-4">
                        <li>In Novabuckups, click "Test Connection" for your network share</li>
                        <li>Verify successful mounting of the network share</li>
                        <li>Check read and write permissions</li>
                        <li>Confirm network connectivity and authentication</li>
                      </ol>
                    </div>

                    <Separator />

                    <div>
                      <h4 className="font-semibold mb-3">4.2 Run Test Backup</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm ml-4">
                        <li>Go to "Backups" → "Create Manual Backup"</li>
                        <li>Select a small data source for testing</li>
                        <li>Choose your network share destination</li>
                        <li>Click "Start Backup"</li>
                        <li>Monitor transfer progress over network</li>
                      </ol>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">4.3 Verify on File Server</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm ml-4">
                        <li>Access your file server directly</li>
                        <li>Check the backup share directory for new files</li>
                        <li>Verify file sizes and timestamps are correct</li>
                        <li>Test file accessibility and permissions</li>
                      </ol>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">4.4 Test Recovery Process</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm ml-4">
                        <li>Use Novabuckups "Restore" feature to download from network share</li>
                        <li>Verify downloaded files match originals</li>
                        <li>Test file extraction and restoration</li>
                        <li>Confirm backup metadata is preserved</li>
                      </ol>
                    </div>

                    <Alert>
                      <CheckCircle className="h-4 w-4" />
                      <AlertDescription>
                        <strong>Success!</strong> Your network share backup integration is complete. 
                        You now have centralized backup storage accessible across your network.
                      </AlertDescription>
                    </Alert>

                    <div className="bg-primary/5 border border-primary/20 p-4 rounded">
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <Settings className="h-4 w-4" />
                        Network Optimization
                      </h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Monitor network bandwidth usage during backups</li>
                        <li>• Configure backup schedules to avoid peak network times</li>
                        <li>• Set up network share monitoring and alerts</li>
                        <li>• Plan for network share capacity expansion</li>
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
                Our network specialists can help you with network share configuration and optimization.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/technical-support">
                    Get Network Support
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

export default NetworkSharesSetupGuide;
