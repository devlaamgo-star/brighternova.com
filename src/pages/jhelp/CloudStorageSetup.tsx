import { useState } from "react";
import { Link } from "react-router-dom";
import PageLayout from "../../components/shared/PageLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Alert, AlertDescription } from "../../components/ui/alert";
import { Button } from "../../components/ui/button";
import { Cloud, HardDrive, Shield, Settings, CheckCircle, AlertTriangle, Zap, Globe, Key } from "lucide-react";

const CloudStorageSetup = () => {
  const [selectedProvider, setSelectedProvider] = useState("aws");

  const providers = [
    { id: "aws", name: "Amazon S3", icon: "🟠", status: "connected", region: "us-east-1" },
    { id: "azure", name: "Azure Blob", icon: "🔵", status: "connected", region: "eastus" },
    { id: "gcp", name: "Google Cloud Storage", icon: "🔴", status: "available", region: "us-central1" },
    { id: "digitalocean", name: "DigitalOcean Spaces", icon: "🔷", status: "available", region: "nyc3" },
    { id: "vultr", name: "Vultr Object Storage", icon: "⚡", status: "available", region: "ewr" },
    { id: "wasabi", name: "Wasabi Hot Cloud", icon: "🌶️", status: "available", region: "us-east-1" }
  ];

  return (
    <PageLayout
      title="Cloud Storage Setup"
      description="Configure secure cloud storage destinations for your backup data"
    >
      <div className="container mx-auto px-4 py-8">
        {/* Storage Overview */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Cloud className="h-6 w-6 text-blue-600" />
              Cloud Storage Overview
            </CardTitle>
            <CardDescription>
              Manage your cloud storage destinations and backup configurations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 border rounded-lg">
                <HardDrive className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <h3 className="font-semibold">2 Connected</h3>
                <p className="text-sm text-gray-600">Active storage providers</p>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <Globe className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <h3 className="font-semibold">4 Regions</h3>
                <p className="text-sm text-gray-600">Geographic distribution</p>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <Shield className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <h3 className="font-semibold">2.8 TB</h3>
                <p className="text-sm text-gray-600">Total stored data</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Supported Providers */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-6 w-6 text-blue-600" />
              Supported Cloud Storage Providers
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {providers.map((provider) => (
                <div 
                  key={provider.id}
                  className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                    selectedProvider === provider.id ? "border-blue-500 bg-blue-50" : "border-gray-200"
                  }`}
                  onClick={() => setSelectedProvider(provider.id)}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{provider.icon}</span>
                    <div>
                      <h3 className="font-semibold">{provider.name}</h3>
                      <p className="text-xs text-gray-600">{provider.region}</p>
                    </div>
                  </div>
                  <Badge variant={provider.status === "connected" ? "default" : "secondary"}>
                    {provider.status === "connected" ? "Connected" : "Available"}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Setup Instructions */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-6 w-6 text-blue-600" />
              Cloud Storage Setup Process
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">General Setup Steps</h3>
              <ol className="space-y-4">
                <li className="flex gap-4">
                  <span className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-medium flex-shrink-0">1</span>
                  <div>
                    <div className="font-medium">Choose Storage Provider</div>
                    <div className="text-sm text-gray-600">Select from supported cloud storage services</div>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-medium flex-shrink-0">2</span>
                  <div>
                    <div className="font-medium">Create Storage Bucket/Container</div>
                    <div className="text-sm text-gray-600">Set up dedicated storage location in your cloud account</div>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-medium flex-shrink-0">3</span>
                  <div>
                    <div className="font-medium">Configure Access Credentials</div>
                    <div className="text-sm text-gray-600">Create API keys or service accounts with appropriate permissions</div>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-medium flex-shrink-0">4</span>
                  <div>
                    <div className="font-medium">Test Connection</div>
                    <div className="text-sm text-gray-600">Verify access and upload/download capabilities</div>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-medium flex-shrink-0">5</span>
                  <div>
                    <div className="font-medium">Configure Storage Settings</div>
                    <div className="text-sm text-gray-600">Set encryption, versioning, and lifecycle policies</div>
                  </div>
                </li>
              </ol>
            </div>
          </CardContent>
        </Card>

        {/* Current Storage Configurations */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="h-6 w-6 text-blue-600" />
              Current Storage Configurations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-4">
                  <span className="text-2xl">🟠</span>
                  <div>
                    <div className="font-medium">AWS S3 - Primary Storage</div>
                    <div className="text-sm text-gray-600">pawthway-backups-prod (us-east-1)</div>
                    <div className="text-xs text-gray-500">Used: 1.8 TB • Free: 200 GB • Encryption: AES-256</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="default">Active</Badge>
                  <Button size="sm" variant="outline">
                    <Settings className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-4">
                  <span className="text-2xl">🔵</span>
                  <div>
                    <div className="font-medium">Azure Blob - Secondary Storage</div>
                    <div className="text-sm text-gray-600">pawthwaybackups (eastus)</div>
                    <div className="text-xs text-gray-500">Used: 1.0 TB • Tier: Cool • Redundancy: GRS</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="default">Active</Badge>
                  <Button size="sm" variant="outline">
                    <Settings className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <Button>Add New Storage Provider</Button>
            </div>
          </CardContent>
        </Card>

        {/* Security Configuration */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-blue-600" />
              Security & Encryption
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Encryption Settings</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2">Encryption at Rest</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• AES-256 encryption standard</li>
                    <li>• Customer-managed keys (CMK) support</li>
                    <li>• Key rotation policies</li>
                    <li>• Hardware security module (HSM) options</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2">Encryption in Transit</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• TLS 1.3 for all transfers</li>
                    <li>• Certificate pinning</li>
                    <li>• End-to-end encryption</li>
                    <li>• Secure upload protocols</li>
                  </ul>
                </div>
              </div>
            </div>

            <Alert>
              <Key className="h-4 w-4" />
              <AlertDescription>
                All backup data is encrypted using AES-256 before upload. Encryption keys are managed separately from storage credentials for enhanced security.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Performance Metrics */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-6 w-6 text-blue-600" />
              Performance Metrics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="text-center p-4 border rounded-lg">
                <div className="text-xl font-bold text-blue-600 mb-1">85 MB/s</div>
                <div className="text-xs text-gray-600">Avg Upload Speed</div>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <div className="text-xl font-bold text-green-600 mb-1">99.9%</div>
                <div className="text-xs text-gray-600">Upload Success Rate</div>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <div className="text-xl font-bold text-purple-600 mb-1">12ms</div>
                <div className="text-xs text-gray-600">Avg Latency</div>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <div className="text-xl font-bold text-orange-600 mb-1">2.8:1</div>
                <div className="text-xs text-gray-600">Compression Ratio</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Troubleshooting */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-6 w-6 text-blue-600" />
              Troubleshooting Common Issues
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Connection Issues</h3>
              <div className="space-y-3">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2 text-red-700">Authentication Failed</h4>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Verify API keys or access tokens are correct</li>
                    <li>• Check that credentials haven't expired</li>
                    <li>• Ensure IAM permissions include required actions</li>
                    <li>• Confirm bucket/container names are correct</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2 text-red-700">Upload Failed</h4>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Check available storage quota</li>
                    <li>• Verify network connectivity and bandwidth</li>
                    <li>• Review file size limits for storage provider</li>
                    <li>• Ensure backup files aren't corrupted</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Performance Issues</h3>
              <div className="space-y-3">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2 text-orange-700">Slow Upload Speeds</h4>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Use multipart uploads for files over 100MB</li>
                    <li>• Enable compression to reduce transfer size</li>
                    <li>• Choose storage regions closer to your data source</li>
                    <li>• Increase parallel upload streams</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2 text-orange-700">High Storage Costs</h4>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Implement lifecycle policies for automatic tiering</li>
                    <li>• Review and optimize retention policies</li>
                    <li>• Use deduplication to reduce redundant data</li>
                    <li>• Consider cheaper storage classes for archives</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Help and Support */}
        <div className="mt-8 p-6 bg-gray-50 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Need Help with Cloud Storage?</h3>
          <p className="text-gray-600 mb-4">
            Our cloud specialists can help you configure optimal storage solutions for your backup requirements.
          </p>
          <div className="flex gap-4">
            <Link to="/technical-support">
              <Button>Contact Cloud Team</Button>
            </Link>
            <Link to="/docs">
              <Button variant="outline">View Setup Guides</Button>
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default CloudStorageSetup;
