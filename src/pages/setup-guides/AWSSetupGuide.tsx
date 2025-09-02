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
  Terminal,
  Clock,
  Users
} from "lucide-react";
import { Link } from "react-router-dom";

const AWSSetupGuide = () => {
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
      title: "Create AWS Account & S3 Bucket",
      duration: "2 minutes",
      description: "Set up your AWS account and create an S3 bucket for backups"
    },
    {
      id: 2,
      title: "Create IAM User",
      duration: "2 minutes", 
      description: "Create a dedicated IAM user with proper S3 permissions"
    },
    {
      id: 3,
      title: "Generate Access Keys",
      duration: "1 minute",
      description: "Generate access keys for programmatic access"
    },
    {
      id: 4,
      title: "Configure Novabuckups",
      duration: "1 minute",
      description: "Add your AWS credentials to Novabuckups"
    },
    {
      id: 5,
      title: "Test Connection",
      duration: "30 seconds",
      description: "Verify the integration is working correctly"
    }
  ];

  const iamPolicy = `{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "s3:ListBucket",
                "s3:GetBucketLocation",
                "s3:GetBucketVersioning"
            ],
            "Resource": "arn:aws:s3:::your-backup-bucket"
        },
        {
            "Effect": "Allow",
            "Action": [
                "s3:PutObject",
                "s3:GetObject",
                "s3:DeleteObject",
                "s3:PutObjectAcl"
            ],
            "Resource": "arn:aws:s3:::your-backup-bucket/*"
        }
    ]
}`;

  const requirements = [
    "AWS Account (free tier eligible)",
    "Basic understanding of AWS IAM",
    "Access to AWS Management Console",
    "Novabuckups account"
  ];

  const benefits = [
    "99.999999999% (11 9's) durability",
    "Multiple storage classes for cost optimization",
    "Cross-region replication support",
    "Lifecycle management and archiving",
    "Server-side encryption",
    "Versioning and access logging"
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
                <span>AWS S3</span>
              </div>

              <div className="flex items-start gap-6 mb-8">
                <div className="p-3 bg-orange-500 text-white rounded-lg">
                  <Cloud className="h-8 w-8" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h1 className="text-3xl lg:text-4xl font-bold">
                      Amazon Web Services S3 Setup
                    </h1>
                    <Badge className="bg-primary text-primary-foreground">Popular</Badge>
                  </div>
                  <p className="text-xl text-muted-foreground mb-4">
                    Complete guide to integrate AWS S3 with Novabuckups for secure, scalable backup storage.
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>~5 minutes setup</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="h-4 w-4" />
                      <span>Enterprise-grade security</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      <span>Most popular choice</span>
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
              
              {/* Step 1: Create AWS Account & S3 Bucket */}
              {currentStep === 1 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">1</div>
                      Create AWS Account & S3 Bucket
                    </CardTitle>
                    <CardDescription>
                      Set up your AWS account and create a dedicated S3 bucket for your backups.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">1.1 Create AWS Account (if needed)</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm ml-4">
                        <li>Visit <a href="https://aws.amazon.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">aws.amazon.com <ExternalLink className="h-3 w-3" /></a></li>
                        <li>Click "Create an AWS Account" and follow the registration process</li>
                        <li>You'll need a valid email address and credit card (free tier available)</li>
                        <li>Complete email verification and account setup</li>
                      </ol>
                    </div>

                    <Separator />

                    <div>
                      <h4 className="font-semibold mb-3">1.2 Create S3 Bucket</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm ml-4">
                        <li>Sign in to the AWS Management Console</li>
                        <li>Navigate to the S3 service (search for "S3" in the services menu)</li>
                        <li>Click "Create bucket"</li>
                        <li>Choose a unique bucket name (e.g., "your-company-backups-2024")</li>
                        <li>Select your preferred AWS region (choose closest to your location for better performance)</li>
                        <li>Leave other settings as default for now</li>
                        <li>Click "Create bucket"</li>
                      </ol>
                    </div>

                    <Alert>
                      <AlertTriangle className="h-4 w-4" />
                      <AlertDescription>
                        <strong>Important:</strong> Choose your bucket name carefully as it must be globally unique across all AWS accounts. 
                        Consider including your company name and date for uniqueness.
                      </AlertDescription>
                    </Alert>

                    <div className="flex justify-between">
                      <Button variant="outline" disabled>
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Previous
                      </Button>
                      <Button onClick={() => setCurrentStep(2)}>
                        Next: Create IAM User
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Step 2: Create IAM User */}
              {currentStep === 2 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">2</div>
                      Create IAM User
                    </CardTitle>
                    <CardDescription>
                      Create a dedicated IAM user with proper permissions for Novabuckups to access your S3 bucket.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">2.1 Navigate to IAM Service</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm ml-4">
                        <li>In the AWS Management Console, search for "IAM" and click on the service</li>
                        <li>Click "Users" in the left sidebar</li>
                        <li>Click "Create user"</li>
                      </ol>
                    </div>

                    <Separator />

                    <div>
                      <h4 className="font-semibold mb-3">2.2 Configure User Settings</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm ml-4">
                        <li>Enter username: <code className="bg-muted px-2 py-1 rounded">novabuckups-backup</code></li>
                        <li>Check "Provide user access to the AWS Management Console" (optional)</li>
                        <li>Choose "I want to create an IAM user"</li>
                        <li>Click "Next"</li>
                      </ol>
                    </div>

                    <Separator />

                    <div>
                      <h4 className="font-semibold mb-3">2.3 Set Permissions</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm ml-4">
                        <li>Choose "Attach policies directly"</li>
                        <li>Search for and select: <code className="bg-muted px-2 py-1 rounded">AmazonS3FullAccess</code> (for simplicity) or create a custom policy</li>
                        <li>For better security, create a custom policy with minimal permissions (see policy below)</li>
                        <li>Click "Next"</li>
                      </ol>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">2.4 Custom IAM Policy (Recommended)</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        For enhanced security, use this minimal permission policy instead:
                      </p>
                      <div className="relative">
                        <pre className="bg-muted p-4 rounded text-xs overflow-x-auto">
{iamPolicy}
                        </pre>
                        <Button
                          variant="outline"
                          size="sm"
                          className="absolute top-2 right-2"
                          onClick={() => copyToClipboard(iamPolicy, 'IAM Policy')}
                        >
                          {copiedText === 'IAM Policy' ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                        </Button>
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">
                        Replace <code>your-backup-bucket</code> with your actual bucket name.
                      </p>
                    </div>

                    <div className="flex justify-between">
                      <Button variant="outline" onClick={() => setCurrentStep(1)}>
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Previous
                      </Button>
                      <Button onClick={() => setCurrentStep(3)}>
                        Next: Generate Keys
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Step 3: Generate Access Keys */}
              {currentStep === 3 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">3</div>
                      Generate Access Keys
                    </CardTitle>
                    <CardDescription>
                      Create programmatic access keys for the IAM user to authenticate with AWS S3.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">3.1 Create Access Keys</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm ml-4">
                        <li>After creating the user, you'll be taken to the user details page</li>
                        <li>Click on the "Security credentials" tab</li>
                        <li>Scroll down to "Access keys" section</li>
                        <li>Click "Create access key"</li>
                        <li>Choose "Application running outside AWS"</li>
                        <li>Click "Next"</li>
                        <li>Add a description tag (e.g., "Novabuckups Integration")</li>
                        <li>Click "Create access key"</li>
                      </ol>
                    </div>

                    <Alert>
                      <Key className="h-4 w-4" />
                      <AlertDescription>
                        <strong>Security Notice:</strong> Your Secret Access Key will only be shown once. 
                        Make sure to copy both the Access Key ID and Secret Access Key immediately. 
                        Store them securely - you'll need them in the next step.
                      </AlertDescription>
                    </Alert>

                    <div>
                      <h4 className="font-semibold mb-3">3.2 Save Your Credentials</h4>
                      <div className="bg-muted p-4 rounded">
                        <p className="text-sm mb-2">You'll receive two pieces of information:</p>
                        <ul className="space-y-1 text-sm">
                          <li><strong>Access Key ID:</strong> Starts with "AKIA..." (this is not secret)</li>
                          <li><strong>Secret Access Key:</strong> A long random string (keep this secure!)</li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">3.3 Download Credentials (Optional)</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        You can download a CSV file with your credentials or copy them manually. 
                        Either way, make sure to store them securely.
                      </p>
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
                      Add your AWS credentials to Novabuckups and configure your backup settings.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">4.1 Access Integration Settings</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm ml-4">
                        <li>Log in to your Novabuckups dashboard</li>
                        <li>Navigate to "Settings" → "Integrations"</li>
                        <li>Find "Amazon Web Services S3" and click "Configure"</li>
                        <li>Click "Add New Connection"</li>
                      </ol>
                    </div>

                    <Separator />

                    <div>
                      <h4 className="font-semibold mb-3">4.2 Enter AWS Credentials</h4>
                      <div className="bg-muted p-4 rounded space-y-3">
                        <div>
                          <label className="text-sm font-medium">Access Key ID</label>
                          <p className="text-xs text-muted-foreground">Paste your AWS Access Key ID (starts with AKIA...)</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium">Secret Access Key</label>
                          <p className="text-xs text-muted-foreground">Paste your AWS Secret Access Key</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium">Region</label>
                          <p className="text-xs text-muted-foreground">Select the region where you created your S3 bucket</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium">Bucket Name</label>
                          <p className="text-xs text-muted-foreground">Enter your S3 bucket name</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">4.3 Configure Backup Settings</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm ml-4">
                        <li>Set your backup schedule (daily, weekly, or custom)</li>
                        <li>Choose which data sources to backup</li>
                        <li>Configure retention policy (how long to keep backups)</li>
                        <li>Enable encryption if desired (recommended)</li>
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
                      Verify that Novabuckups can successfully connect to your AWS S3 bucket.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">5.1 Run Connection Test</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm ml-4">
                        <li>In the Novabuckups integration settings, click "Test Connection"</li>
                        <li>Wait for the test to complete (usually 10-30 seconds)</li>
                        <li>You should see a green "✅ Connection Successful" message</li>
                        <li>Check that Novabuckups can list your bucket contents</li>
                      </ol>
                    </div>

                    <Separator />

                    <div>
                      <h4 className="font-semibold mb-3">5.2 Run Test Backup</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm ml-4">
                        <li>Navigate to "Backups" → "Create Manual Backup"</li>
                        <li>Select a small data source for testing</li>
                        <li>Choose your AWS S3 destination</li>
                        <li>Click "Start Backup"</li>
                        <li>Monitor the backup progress</li>
                      </ol>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">5.3 Verify in AWS Console</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm ml-4">
                        <li>Go back to your AWS S3 console</li>
                        <li>Open your backup bucket</li>
                        <li>You should see the test backup files</li>
                        <li>Verify the file sizes and timestamps are correct</li>
                      </ol>
                    </div>

                    <Alert>
                      <CheckCircle className="h-4 w-4" />
                      <AlertDescription>
                        <strong>Success!</strong> Your AWS S3 integration is now complete and ready for production use. 
                        Your backups will be stored securely in AWS with enterprise-grade durability and availability.
                      </AlertDescription>
                    </Alert>

                    <div className="bg-primary/5 border border-primary/20 p-4 rounded">
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <Settings className="h-4 w-4" />
                        Next Steps
                      </h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Set up automated backup schedules</li>
                        <li>• Configure monitoring and alerts</li>
                        <li>• Enable cross-region replication for extra protection</li>
                        <li>• Set up lifecycle policies for cost optimization</li>
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
                Our technical team is available to help you with AWS S3 integration and troubleshooting.
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

export default AWSSetupGuide;
