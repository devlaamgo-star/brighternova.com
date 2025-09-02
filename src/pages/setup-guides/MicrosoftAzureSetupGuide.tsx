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
  HexagonIcon
} from "lucide-react";
import { Link } from "react-router-dom";

const MicrosoftAzureSetupGuide = () => {
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
      title: "Create Azure Account & Storage Account",
      duration: "2 minutes",
      description: "Set up your Azure account and create a storage account"
    },
    {
      id: 2,
      title: "Create Blob Container",
      duration: "1 minute", 
      description: "Create a container for your backup files"
    },
    {
      id: 3,
      title: "Generate Connection String",
      duration: "1 minute",
      description: "Get the connection string for authentication"
    },
    {
      id: 4,
      title: "Configure Novabuckups",
      duration: "1 minute",
      description: "Add your Azure credentials to Novabuckups"
    },
    {
      id: 5,
      title: "Test Connection",
      duration: "30 seconds",
      description: "Verify the integration is working correctly"
    }
  ];

  const requirements = [
    "Microsoft Azure account",
    "Access to Azure Portal",
    "Basic understanding of Azure Storage",
    "Novabuckups account"
  ];

  const benefits = [
    "Highly available and durable storage",
    "Multiple access tiers for cost optimization",
    "Global presence with 60+ regions",
    "Advanced security and compliance",
    "Integration with Microsoft ecosystem",
    "Geo-redundant storage options"
  ];

  const connectionStringExample = `DefaultEndpointsProtocol=https;AccountName=yourstorageaccount;AccountKey=YOUR_ACCOUNT_KEY;EndpointSuffix=core.windows.net`;

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
                <span>Microsoft Azure</span>
              </div>

              <div className="flex items-start gap-6 mb-8">
                <div className="p-3 bg-blue-500 text-white rounded-lg">
                  <Cloud className="h-8 w-8" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h1 className="text-3xl lg:text-4xl font-bold">
                      Microsoft Azure Blob Storage Setup
                    </h1>
                    <Badge variant="outline">Enterprise</Badge>
                  </div>
                  <p className="text-xl text-muted-foreground mb-4">
                    Complete guide to integrate Azure Blob Storage with Novabuckups for enterprise-grade backup solutions.
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>~5 minutes setup</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="h-4 w-4" />
                      <span>Enterprise security</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      <span>Global infrastructure</span>
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
              
              {/* Step 1: Create Azure Account & Storage Account */}
              {currentStep === 1 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">1</div>
                      Create Azure Account & Storage Account
                    </CardTitle>
                    <CardDescription>
                      Set up your Microsoft Azure account and create a storage account for blob storage.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">1.1 Create Azure Account</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm ml-4">
                        <li>Visit <a href="https://azure.microsoft.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">azure.microsoft.com <ExternalLink className="h-3 w-3" /></a></li>
                        <li>Click "Start free" and sign up with Microsoft account</li>
                        <li>Complete identity verification</li>
                        <li>Add payment method (get $200 free credit)</li>
                      </ol>
                    </div>

                    <Separator />

                    <div>
                      <h4 className="font-semibold mb-3">1.2 Create Storage Account</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm ml-4">
                        <li>In Azure Portal, search for "Storage accounts" and click it</li>
                        <li>Click "Create" to create a new storage account</li>
                        <li>Select your subscription and resource group (create new if needed)</li>
                        <li>Enter storage account name (must be globally unique, 3-24 characters)</li>
                        <li>Choose region (select closest to your location)</li>
                        <li>Performance: Standard (unless you need premium)</li>
                        <li>Redundancy: LRS (locally redundant) or GRS (geo-redundant)</li>
                        <li>Click "Review + create" then "Create"</li>
                      </ol>
                    </div>

                    <Alert>
                      <AlertTriangle className="h-4 w-4" />
                      <AlertDescription>
                        <strong>Important:</strong> Storage account names must be globally unique and contain only lowercase letters and numbers. 
                        Choose carefully as this cannot be changed later.
                      </AlertDescription>
                    </Alert>

                    <div className="flex justify-between">
                      <Button variant="outline" disabled>
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Previous
                      </Button>
                      <Button onClick={() => setCurrentStep(2)}>
                        Next: Create Container
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Step 2: Create Blob Container */}
              {currentStep === 2 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">2</div>
                      Create Blob Container
                    </CardTitle>
                    <CardDescription>
                      Create a container within your storage account to organize your backup files.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">2.1 Navigate to Storage Account</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm ml-4">
                        <li>Once your storage account is created, click on it to open</li>
                        <li>In the left menu, click "Containers" under "Data storage"</li>
                        <li>Click "+ Container" to create a new container</li>
                      </ol>
                    </div>

                    <Separator />

                    <div>
                      <h4 className="font-semibold mb-3">2.2 Configure Container Settings</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm ml-4">
                        <li>Enter container name: <code className="bg-muted px-2 py-1 rounded">backups</code></li>
                        <li>Set public access level: "Private (no anonymous access)" for security</li>
                        <li>Click "Create"</li>
                      </ol>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">2.3 Container Access Levels</h4>
                      <div className="bg-muted p-4 rounded">
                        <p className="text-sm mb-2">Available access levels:</p>
                        <ul className="space-y-1 text-sm">
                          <li><strong>Private:</strong> No anonymous access (recommended for backups)</li>
                          <li><strong>Blob:</strong> Anonymous read access for blobs only</li>
                          <li><strong>Container:</strong> Anonymous read access for containers and blobs</li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <Button variant="outline" onClick={() => setCurrentStep(1)}>
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Previous
                      </Button>
                      <Button onClick={() => setCurrentStep(3)}>
                        Next: Get Connection String
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Step 3: Generate Connection String */}
              {currentStep === 3 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">3</div>
                      Generate Connection String
                    </CardTitle>
                    <CardDescription>
                      Get the connection string that Novabuckups will use to access your Azure Blob Storage.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">3.1 Access Storage Account Keys</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm ml-4">
                        <li>In your storage account overview, click "Access keys" in the left menu</li>
                        <li>You'll see two keys (key1 and key2) - either can be used</li>
                        <li>Click "Show keys" to reveal the connection strings</li>
                        <li>Copy the "Connection string" for key1</li>
                      </ol>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">3.2 Connection String Format</h4>
                      <div className="relative">
                        <pre className="bg-muted p-4 rounded text-xs overflow-x-auto">
{connectionStringExample}
                        </pre>
                        <Button
                          variant="outline"
                          size="sm"
                          className="absolute top-2 right-2"
                          onClick={() => copyToClipboard(connectionStringExample, 'Connection String')}
                        >
                          {copiedText === 'Connection String' ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                        </Button>
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">
                        This is an example format. Use your actual connection string from Azure Portal.
                      </p>
                    </div>

                    <Alert>
                      <Key className="h-4 w-4" />
                      <AlertDescription>
                        <strong>Security Notice:</strong> The connection string contains your account key. 
                        Keep it secure and rotate keys regularly for enhanced security.
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
                      Add your Azure Blob Storage connection string to Novabuckups.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">4.1 Access Integration Settings</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm ml-4">
                        <li>Log in to your Novabuckups dashboard</li>
                        <li>Navigate to "Settings" → "Integrations"</li>
                        <li>Find "Microsoft Azure" and click "Configure"</li>
                        <li>Click "Add New Connection"</li>
                      </ol>
                    </div>

                    <Separator />

                    <div>
                      <h4 className="font-semibold mb-3">4.2 Enter Azure Credentials</h4>
                      <div className="bg-muted p-4 rounded space-y-3">
                        <div>
                          <label className="text-sm font-medium">Connection String</label>
                          <p className="text-xs text-muted-foreground">Paste your Azure Storage connection string</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium">Container Name</label>
                          <p className="text-xs text-muted-foreground">Enter your blob container name (e.g., "backups")</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium">Storage Account Name</label>
                          <p className="text-xs text-muted-foreground">Your Azure storage account name</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">4.3 Configure Backup Settings</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm ml-4">
                        <li>Set backup frequency (real-time, daily, weekly)</li>
                        <li>Choose data sources to backup</li>
                        <li>Configure retention policies</li>
                        <li>Select blob access tier (Hot, Cool, or Archive)</li>
                        <li>Enable encryption at rest (default in Azure)</li>
                        <li>Click "Save Configuration"</li>
                      </ol>
                    </div>

                    <div className="flex justify-between">
                      <Button variant="outline" onClick={() => setCurrentStep(3)}>
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Previous
                      </Button>
                      <Button onClick={() => setCurrentStep(5)}>
                        Next: Test Connection
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Step 5: Test Connection */}
              {currentStep === 5 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">5</div>
                      Test Connection
                    </CardTitle>
                    <CardDescription>
                      Verify that Novabuckups can successfully connect to your Azure Blob Storage.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">5.1 Run Connection Test</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm ml-4">
                        <li>In Novabuckups integration settings, click "Test Connection"</li>
                        <li>The system will verify your connection string</li>
                        <li>Check container access and blob permissions</li>
                        <li>You should see "✅ Connection Successful" message</li>
                      </ol>
                    </div>

                    <Separator />

                    <div>
                      <h4 className="font-semibold mb-3">5.2 Run Test Backup</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm ml-4">
                        <li>Go to "Backups" → "Create Manual Backup"</li>
                        <li>Select a small data source for testing</li>
                        <li>Choose your Azure Blob Storage destination</li>
                        <li>Click "Start Backup"</li>
                        <li>Monitor the upload progress</li>
                      </ol>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">5.3 Verify in Azure Portal</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm ml-4">
                        <li>Return to the Azure Portal</li>
                        <li>Navigate to your storage account → Containers</li>
                        <li>Open your backup container</li>
                        <li>Verify that the test backup blobs are present</li>
                      </ol>
                    </div>

                    <Alert>
                      <CheckCircle className="h-4 w-4" />
                      <AlertDescription>
                        <strong>Success!</strong> Your Microsoft Azure integration is complete. 
                        Your backups will leverage Azure's global infrastructure with enterprise-grade compliance.
                      </AlertDescription>
                    </Alert>

                    <div className="bg-primary/5 border border-primary/20 p-4 rounded">
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <Settings className="h-4 w-4" />
                        Enterprise Features
                      </h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Set up lifecycle management for cost optimization</li>
                        <li>• Enable soft delete for accidental deletion protection</li>
                        <li>• Configure Azure Monitor for alerts</li>
                        <li>• Use Azure Key Vault for enhanced security</li>
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
                Our technical team can help you with Microsoft Azure integration and enterprise features.
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

export default MicrosoftAzureSetupGuide;
