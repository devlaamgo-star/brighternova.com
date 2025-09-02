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
  FileText,
  Clock,
  Users,
  Download
} from "lucide-react";
import { Link } from "react-router-dom";

const GCPSetupGuide = () => {
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
      title: "Create GCP Project & Storage Bucket",
      duration: "2 minutes",
      description: "Set up your Google Cloud project and create a storage bucket"
    },
    {
      id: 2,
      title: "Create Service Account",
      duration: "2 minutes", 
      description: "Create a service account with proper Cloud Storage permissions"
    },
    {
      id: 3,
      title: "Generate Service Account Key",
      duration: "1 minute",
      description: "Download the JSON key file for authentication"
    },
    {
      id: 4,
      title: "Configure Novabuckups",
      duration: "1 minute",
      description: "Upload your service account key to Novabuckups"
    },
    {
      id: 5,
      title: "Test Connection",
      duration: "30 seconds",
      description: "Verify the integration is working correctly"
    }
  ];

  const serviceAccountRoles = [
    "Storage Object Admin",
    "Storage Object Creator", 
    "Storage Object Viewer"
  ];

  const requirements = [
    "Google Cloud Platform account",
    "Basic understanding of GCP IAM",
    "Access to GCP Console", 
    "Novabuckups account"
  ];

  const benefits = [
    "99.999999999% (11 9's) durability",
    "Multi-regional and regional storage options",
    "Intelligent tiering for cost optimization",
    "Strong consistency across regions",
    "Integrated with Google ecosystem",
    "Advanced security and compliance"
  ];

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
                <span>Google Cloud Platform</span>
              </div>

              <div className="flex items-start gap-6 mb-8">
                <div className="p-3 bg-blue-500 text-white rounded-lg">
                  <Cloud className="h-8 w-8" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h1 className="text-3xl lg:text-4xl font-bold">
                      Google Cloud Platform Setup
                    </h1>
                    <Badge className="bg-primary text-primary-foreground">Popular</Badge>
                  </div>
                  <p className="text-xl text-muted-foreground mb-4">
                    Complete guide to integrate Google Cloud Storage with Novabuckups for reliable, global backup storage.
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
                      <span>Popular choice</span>
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
              
              {/* Step 1: Create GCP Project & Storage Bucket */}
              {currentStep === 1 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">1</div>
                      Create GCP Project & Storage Bucket
                    </CardTitle>
                    <CardDescription>
                      Set up your Google Cloud project and create a Cloud Storage bucket for backups.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">1.1 Create Google Cloud Account</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm ml-4">
                        <li>Visit <a href="https://cloud.google.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">cloud.google.com <ExternalLink className="h-3 w-3" /></a></li>
                        <li>Click "Get started for free" and sign in with your Google account</li>
                        <li>Accept the terms and provide billing information (free tier available)</li>
                        <li>Complete the verification process</li>
                      </ol>
                    </div>

                    <Separator />

                    <div>
                      <h4 className="font-semibold mb-3">1.2 Create New Project</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm ml-4">
                        <li>In the GCP Console, click the project dropdown at the top</li>
                        <li>Click "New Project"</li>
                        <li>Enter project name: <code className="bg-muted px-2 py-1 rounded">novabuckups-backup</code></li>
                        <li>Choose billing account (if required)</li>
                        <li>Click "Create"</li>
                      </ol>
                    </div>

                    <Separator />

                    <div>
                      <h4 className="font-semibold mb-3">1.3 Create Storage Bucket</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm ml-4">
                        <li>Navigate to Cloud Storage in the console menu</li>
                        <li>Click "Create bucket"</li>
                        <li>Enter a globally unique bucket name (e.g., "your-company-backups-gcs")</li>
                        <li>Choose location type: Regional for better performance, Multi-regional for durability</li>
                        <li>Select default storage class: "Standard" for frequently accessed data</li>
                        <li>Leave other settings as default</li>
                        <li>Click "Create"</li>
                      </ol>
                    </div>

                    <Alert>
                      <AlertTriangle className="h-4 w-4" />
                      <AlertDescription>
                        <strong>Tip:</strong> Choose a region close to your application for better performance. 
                        Multi-regional buckets provide higher availability but cost more.
                      </AlertDescription>
                    </Alert>

                    <div className="flex justify-between">
                      <Button variant="outline" disabled>
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Previous
                      </Button>
                      <Button onClick={() => setCurrentStep(2)}>
                        Next: Create Service Account
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Step 2: Create Service Account */}
              {currentStep === 2 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">2</div>
                      Create Service Account
                    </CardTitle>
                    <CardDescription>
                      Create a service account with proper permissions for Novabuckups to access Cloud Storage.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">2.1 Navigate to IAM & Admin</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm ml-4">
                        <li>In the GCP Console, go to "IAM & Admin" → "Service Accounts"</li>
                        <li>Click "Create Service Account"</li>
                        <li>Enter service account name: <code className="bg-muted px-2 py-1 rounded">novabuckups-backup</code></li>
                        <li>Add description: "Service account for Novabuckups backup integration"</li>
                        <li>Click "Create and continue"</li>
                      </ol>
                    </div>

                    <Separator />

                    <div>
                      <h4 className="font-semibold mb-3">2.2 Grant Permissions</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm ml-4">
                        <li>In the "Grant this service account access to project" section</li>
                        <li>Click "Select a role" dropdown</li>
                        <li>Search for and select: <code className="bg-muted px-2 py-1 rounded">Storage Object Admin</code></li>
                        <li>Alternatively, you can use "Storage Admin" for full storage permissions</li>
                        <li>Click "Continue"</li>
                        <li>Skip "Grant users access to this service account" (optional)</li>
                        <li>Click "Done"</li>
                      </ol>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">2.3 Required Roles</h4>
                      <div className="bg-muted p-4 rounded">
                        <p className="text-sm mb-2">For backup operations, the service account needs:</p>
                        <ul className="space-y-1 text-sm">
                          {serviceAccountRoles.map((role, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span><strong>{role}:</strong> {
                                role === "Storage Object Admin" ? "Full control over objects" :
                                role === "Storage Object Creator" ? "Create and write objects" :
                                "Read access to objects"
                              }</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <Button variant="outline" onClick={() => setCurrentStep(1)}>
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Previous
                      </Button>
                      <Button onClick={() => setCurrentStep(3)}>
                        Next: Generate Key
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Step 3: Generate Service Account Key */}
              {currentStep === 3 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">3</div>
                      Generate Service Account Key
                    </CardTitle>
                    <CardDescription>
                      Download the JSON key file that Novabuckups will use to authenticate with Google Cloud.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">3.1 Create and Download Key</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm ml-4">
                        <li>On the Service Accounts page, find your newly created service account</li>
                        <li>Click on the service account email to open details</li>
                        <li>Go to the "Keys" tab</li>
                        <li>Click "Add Key" → "Create new key"</li>
                        <li>Select "JSON" as the key type</li>
                        <li>Click "Create"</li>
                        <li>The JSON key file will automatically download to your computer</li>
                      </ol>
                    </div>

                    <Alert>
                      <Key className="h-4 w-4" />
                      <AlertDescription>
                        <strong>Security Notice:</strong> The downloaded JSON file contains sensitive credentials. 
                        Store it securely and never commit it to version control. You'll upload this file to Novabuckups in the next step.
                      </AlertDescription>
                    </Alert>

                    <div>
                      <h4 className="font-semibold mb-3">3.2 Key File Contents</h4>
                      <div className="bg-muted p-4 rounded">
                        <p className="text-sm mb-2">Your JSON key file will contain:</p>
                        <ul className="space-y-1 text-sm font-mono">
                          <li>• project_id: Your GCP project ID</li>
                          <li>• client_email: Service account email</li>
                          <li>• private_key: Private key for authentication</li>
                          <li>• type: "service_account"</li>
                        </ul>
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
                      Upload your service account key to Novabuckups and configure backup settings.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">4.1 Access Integration Settings</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm ml-4">
                        <li>Log in to your Novabuckups dashboard</li>
                        <li>Navigate to "Settings" → "Integrations"</li>
                        <li>Find "Google Cloud Platform" and click "Configure"</li>
                        <li>Click "Add New Connection"</li>
                      </ol>
                    </div>

                    <Separator />

                    <div>
                      <h4 className="font-semibold mb-3">4.2 Upload Service Account Key</h4>
                      <div className="bg-muted p-4 rounded space-y-3">
                        <div>
                          <label className="text-sm font-medium">Service Account Key File</label>
                          <p className="text-xs text-muted-foreground">Upload the JSON key file you downloaded in Step 3</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium">Project ID</label>
                          <p className="text-xs text-muted-foreground">Your GCP project ID (auto-filled from key file)</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium">Bucket Name</label>
                          <p className="text-xs text-muted-foreground">Enter your Cloud Storage bucket name</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium">Region (Optional)</label>
                          <p className="text-xs text-muted-foreground">Specify region if using regional bucket</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">4.3 Configure Backup Settings</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm ml-4">
                        <li>Set backup schedule (real-time, hourly, daily, or custom)</li>
                        <li>Choose which data sources to backup</li>
                        <li>Configure retention policy</li>
                        <li>Select storage class (Standard, Nearline, Coldline, Archive)</li>
                        <li>Enable encryption (Google manages keys by default)</li>
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
                      Verify that Novabuckups can successfully connect to your Google Cloud Storage bucket.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">5.1 Run Connection Test</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm ml-4">
                        <li>In Novabuckups integration settings, click "Test Connection"</li>
                        <li>The system will verify your service account permissions</li>
                        <li>Check bucket access and write permissions</li>
                        <li>You should see "✅ Connection Successful" message</li>
                      </ol>
                    </div>

                    <Separator />

                    <div>
                      <h4 className="font-semibold mb-3">5.2 Run Test Backup</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm ml-4">
                        <li>Go to "Backups" → "Create Manual Backup"</li>
                        <li>Select a small data source for testing</li>
                        <li>Choose your GCP Cloud Storage destination</li>
                        <li>Click "Start Backup"</li>
                        <li>Monitor the backup progress in real-time</li>
                      </ol>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">5.3 Verify in GCP Console</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm ml-4">
                        <li>Return to the Google Cloud Storage console</li>
                        <li>Open your backup bucket</li>
                        <li>Verify that the test backup files are present</li>
                        <li>Check file metadata and permissions</li>
                      </ol>
                    </div>

                    <Alert>
                      <CheckCircle className="h-4 w-4" />
                      <AlertDescription>
                        <strong>Success!</strong> Your Google Cloud Platform integration is complete. 
                        Your backups will be stored in Google's global infrastructure with industry-leading reliability.
                      </AlertDescription>
                    </Alert>

                    <div className="bg-primary/5 border border-primary/20 p-4 rounded">
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <Settings className="h-4 w-4" />
                        Optimization Tips
                      </h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Set up lifecycle rules for automatic archiving</li>
                        <li>• Enable versioning for additional protection</li>
                        <li>• Configure monitoring and alerting</li>
                        <li>• Consider multi-regional replication for critical data</li>
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
                Our technical team can help you with Google Cloud Platform integration and optimization.
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

export default GCPSetupGuide;
