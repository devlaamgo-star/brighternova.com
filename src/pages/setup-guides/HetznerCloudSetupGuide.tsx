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
  Cloud,
  Shield,
  Key,
  Settings,
  Clock,
  Users,
  Server
} from "lucide-react";
import { Link } from "react-router-dom";

const HetznerCloudSetupGuide = () => {
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
      title: "Create Hetzner Account & Object Storage",
      duration: "1 minute",
      description: "Set up your Hetzner Cloud account and enable object storage"
    },
    {
      id: 2,
      title: "Generate S3 Keys",
      duration: "1 minute", 
      description: "Create S3-compatible access credentials"
    },
    {
      id: 3,
      title: "Configure Novabuckups",
      duration: "1 minute",
      description: "Add your Hetzner credentials to Novabuckups"
    },
    {
      id: 4,
      title: "Test Connection",
      duration: "30 seconds",
      description: "Verify the integration is working correctly"
    }
  ];

  const requirements = [
    "Hetzner Cloud account",
    "Access to Hetzner Cloud Console",
    "Basic understanding of object storage",
    "Novabuckups account"
  ];

  const benefits = [
    "S3-compatible API",
    "European data sovereignty",
    "Competitive pricing",
    "GDPR compliant infrastructure",
    "Green energy powered",
    "Simple configuration"
  ];

  const sampleConfig = `# Hetzner Object Storage Configuration
endpoint: fsn1.your-objectstorage.com
access_key: YOUR_ACCESS_KEY
secret_key: YOUR_SECRET_KEY
bucket: your-backup-bucket
region: fsn1`;

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
                <span>Hetzner Cloud</span>
              </div>

              <div className="flex items-start gap-6 mb-8">
                <div className="p-3 bg-red-500 text-white rounded-lg">
                  <Server className="h-8 w-8" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h1 className="text-3xl lg:text-4xl font-bold">
                      Hetzner Cloud Object Storage Setup
                    </h1>
                    <Badge variant="outline">GDPR Compliant</Badge>
                  </div>
                  <p className="text-xl text-muted-foreground mb-4">
                    Complete guide to integrate Hetzner Cloud Object Storage with Novabuckups for European-compliant backup storage.
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>~3 minutes setup</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="h-4 w-4" />
                      <span>GDPR compliant</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      <span>European hosting</span>
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
              
              {/* Step 1: Create Account & Object Storage */}
              {currentStep === 1 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">1</div>
                      Create Hetzner Account & Object Storage
                    </CardTitle>
                    <CardDescription>
                      Set up your Hetzner Cloud account and enable object storage for backup.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">1.1 Create Hetzner Cloud Account</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm ml-4">
                        <li>Visit <a href="https://www.hetzner.com/cloud" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">hetzner.com/cloud <ExternalLink className="h-3 w-3" /></a></li>
                        <li>Click "Sign up now" and create your account</li>
                        <li>Verify your email address and complete registration</li>
                        <li>Add payment method (get free credits for testing)</li>
                      </ol>
                    </div>

                    <Separator />

                    <div>
                      <h4 className="font-semibold mb-3">1.2 Enable Object Storage</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm ml-4">
                        <li>In the Hetzner Cloud Console, go to "Object Storage" in the sidebar</li>
                        <li>Click "Create Object Storage"</li>
                        <li>Choose a location (Falkenstein or Helsinki)</li>
                        <li>Enter a name for your object storage</li>
                        <li>Click "Create Object Storage"</li>
                        <li>Wait for deployment (usually immediate)</li>
                      </ol>
                    </div>

                    <Alert>
                      <AlertTriangle className="h-4 w-4" />
                      <AlertDescription>
                        <strong>European Focus:</strong> Hetzner provides excellent value for European businesses 
                        requiring GDPR-compliant hosting with competitive pricing.
                      </AlertDescription>
                    </Alert>

                    <div className="flex justify-between">
                      <Button variant="outline" disabled>
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Previous
                      </Button>
                      <Button onClick={() => setCurrentStep(2)}>
                        Next: Generate S3 Keys
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Step 2: Generate S3 Keys */}
              {currentStep === 2 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">2</div>
                      Generate S3 Keys
                    </CardTitle>
                    <CardDescription>
                      Create S3-compatible credentials for Novabuckups to access your Hetzner Object Storage.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">2.1 Access S3 Credentials</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm ml-4">
                        <li>Click on your created Object Storage instance</li>
                        <li>Go to the "S3 Credentials" section</li>
                        <li>Click "Generate S3 Credentials"</li>
                      </ol>
                    </div>

                    <Separator />

                    <div>
                      <h4 className="font-semibold mb-3">2.2 Save Your Credentials</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm ml-4">
                        <li>Copy the Access Key ID</li>
                        <li>Copy the Secret Access Key (shown only once)</li>
                        <li>Note the S3 endpoint URL</li>
                        <li>Note the bucket endpoint (for direct access)</li>
                      </ol>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">2.3 Endpoint Information</h4>
                      <div className="bg-muted p-4 rounded">
                        <p className="text-sm mb-2">Hetzner provides different endpoints:</p>
                        <ul className="space-y-1 text-sm">
                          <li><strong>S3 Endpoint:</strong> For S3-compatible access</li>
                          <li><strong>Bucket Endpoint:</strong> For direct HTTP access</li>
                          <li><strong>Location:</strong> fsn1 (Falkenstein) or hel1 (Helsinki)</li>
                        </ul>
                      </div>
                    </div>

                    <Alert>
                      <Key className="h-4 w-4" />
                      <AlertDescription>
                        <strong>Security:</strong> Your secret key is shown only once during creation. 
                        Store it securely and regenerate if compromised.
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
                      Add your Hetzner Cloud Object Storage credentials to Novabuckups.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">3.1 Access Integration Settings</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm ml-4">
                        <li>Log in to your Novabuckups dashboard</li>
                        <li>Navigate to "Settings" → "Integrations"</li>
                        <li>Find "Hetzner Cloud" and click "Configure"</li>
                        <li>Click "Add New Connection"</li>
                      </ol>
                    </div>

                    <Separator />

                    <div>
                      <h4 className="font-semibold mb-3">3.2 Enter Hetzner Credentials</h4>
                      <div className="bg-muted p-4 rounded space-y-3">
                        <div>
                          <label className="text-sm font-medium">Access Key</label>
                          <p className="text-xs text-muted-foreground">Your Hetzner Object Storage Access Key</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium">Secret Key</label>
                          <p className="text-xs text-muted-foreground">Your Hetzner Object Storage Secret Key</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium">S3 Endpoint</label>
                          <p className="text-xs text-muted-foreground">Your S3 endpoint URL from Hetzner console</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium">Bucket Name</label>
                          <p className="text-xs text-muted-foreground">Create or specify existing bucket name</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium">Region</label>
                          <p className="text-xs text-muted-foreground">fsn1 or hel1</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">3.3 Configuration Example</h4>
                      <div className="relative">
                        <pre className="bg-muted p-4 rounded text-xs overflow-x-auto">
{sampleConfig}
                        </pre>
                        <Button
                          variant="outline"
                          size="sm"
                          className="absolute top-2 right-2"
                          onClick={() => copyToClipboard(sampleConfig, 'Config')}
                        >
                          {copiedText === 'Config' ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                        </Button>
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <Button variant="outline" onClick={() => setCurrentStep(2)}>
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Previous
                      </Button>
                      <Button onClick={() => setCurrentStep(4)}>
                        Next: Test Connection
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Step 4: Test Connection */}
              {currentStep === 4 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">4</div>
                      Test Connection
                    </CardTitle>
                    <CardDescription>
                      Verify that Novabuckups can successfully connect to your Hetzner Object Storage.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">4.1 Run Connection Test</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm ml-4">
                        <li>In Novabuckups integration settings, click "Test Connection"</li>
                        <li>The system will verify your S3-compatible credentials</li>
                        <li>Check bucket access and write permissions</li>
                        <li>You should see "✅ Connection Successful" message</li>
                      </ol>
                    </div>

                    <Separator />

                    <div>
                      <h4 className="font-semibold mb-3">4.2 Run Test Backup</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm ml-4">
                        <li>Go to "Backups" → "Create Manual Backup"</li>
                        <li>Select a small data source for testing</li>
                        <li>Choose your Hetzner Object Storage destination</li>
                        <li>Click "Start Backup"</li>
                        <li>Monitor the backup progress</li>
                      </ol>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">4.3 Verify in Hetzner Console</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm ml-4">
                        <li>Return to the Hetzner Cloud Console</li>
                        <li>Go to Object Storage and open your storage instance</li>
                        <li>Browse your bucket to see the backup files</li>
                        <li>Verify file integrity and timestamps</li>
                      </ol>
                    </div>

                    <Alert>
                      <CheckCircle className="h-4 w-4" />
                      <AlertDescription>
                        <strong>Success!</strong> Your Hetzner Cloud integration is complete. 
                        Your backups will be stored in GDPR-compliant European infrastructure.
                      </AlertDescription>
                    </Alert>

                    <div className="bg-primary/5 border border-primary/20 p-4 rounded">
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <Settings className="h-4 w-4" />
                        European Compliance
                      </h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Data stays within European Union borders</li>
                        <li>• GDPR compliant by design</li>
                        <li>• Green energy powered data centers</li>
                        <li>• Excellent price-performance ratio</li>
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
                Our technical team can help you with Hetzner Cloud integration and European compliance.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/technical-support">
                    Get Technical Support
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/schedule-demo">
                    Schedule Live Demo
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

export default HetznerCloudSetupGuide;
