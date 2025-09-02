import { useState } from "react";
import PageLayout from "../../components/shared/PageLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Alert, AlertDescription } from "../../components/ui/alert";
import { Button } from "../../components/ui/button";
import { Code, Book, Key, Globe, Shield, Zap, Terminal, FileText } from "lucide-react";

const APIDocumentationGuide = () => {
  const [selectedEndpoint, setSelectedEndpoint] = useState("backups");

  const apiEndpoints = [
    { id: "backups", name: "Backups", description: "Create, list, and manage backup operations", methods: ["GET", "POST", "DELETE"] },
    { id: "schedules", name: "Schedules", description: "Configure and manage backup schedules", methods: ["GET", "POST", "PUT", "DELETE"] },
    { id: "restores", name: "Restores", description: "Initiate and monitor restore operations", methods: ["GET", "POST"] },
    { id: "storage", name: "Storage", description: "Manage storage destinations and configurations", methods: ["GET", "POST", "PUT"] },
    { id: "webhooks", name: "Webhooks", description: "Configure webhook endpoints and event subscriptions", methods: ["GET", "POST", "PUT", "DELETE"] },
    { id: "monitoring", name: "Monitoring", description: "Access backup metrics and health status", methods: ["GET"] }
  ];

  return (
    <PageLayout
      title="API Documentation Guide"
      description="Complete guide to the Pawthway REST API for developers"
    >
      <div className="container mx-auto px-4 py-8">
        {/* API Overview */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="h-6 w-6 text-blue-600" />
              Pawthway API Overview
            </CardTitle>
            <CardDescription>
              RESTful API for programmatic backup management and automation
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 border rounded-lg">
                <Globe className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <h3 className="font-semibold">REST API</h3>
                <p className="text-sm text-gray-600">JSON over HTTPS</p>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <Shield className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <h3 className="font-semibold">API Key Auth</h3>
                <p className="text-sm text-gray-600">Secure authentication</p>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <Zap className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <h3 className="font-semibold">Rate Limited</h3>
                <p className="text-sm text-gray-600">1000 requests/hour</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Getting Started */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Book className="h-6 w-6 text-blue-600" />
              Getting Started
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Base URL</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="font-mono text-sm">https://api.pawthway.com/v1</div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Authentication</h3>
              <p className="text-gray-600 mb-4">
                All API requests require authentication using an API key in the Authorization header.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <pre className="text-sm font-mono text-gray-800">
{`curl -H "Authorization: Bearer YOUR_API_KEY" \\
     -H "Content-Type: application/json" \\
     https://api.pawthway.com/v1/backups`}
                </pre>
              </div>
              <div className="mt-4">
                <Button size="sm" variant="outline">
                  <Key className="h-4 w-4 mr-2" />
                  Generate API Key
                </Button>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Response Format</h3>
              <p className="text-gray-600 mb-4">
                All responses are returned in JSON format with consistent structure.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <pre className="text-sm font-mono text-gray-800">
{`{
  "success": true,
  "data": {
    // Response data here
  },
  "meta": {
    "page": 1,
    "limit": 50,
    "total": 150
  }
}`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* API Endpoints */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Terminal className="h-6 w-6 text-blue-600" />
              API Endpoints
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {apiEndpoints.map((endpoint) => (
                <div 
                  key={endpoint.id}
                  className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                    selectedEndpoint === endpoint.id ? "border-blue-500 bg-blue-50" : "border-gray-200"
                  }`}
                  onClick={() => setSelectedEndpoint(endpoint.id)}
                >
                  <h3 className="font-semibold mb-2">{endpoint.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{endpoint.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {endpoint.methods.map((method) => (
                      <Badge key={method} variant="outline" className="text-xs">
                        {method}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Code Examples */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Code Examples</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Create a Database Backup</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <pre className="text-sm font-mono text-gray-800 overflow-x-auto">
{`const response = await fetch('https://api.pawthway.com/v1/backups', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    data_source_id: 'ds_postgresql_prod',
    backup_type: 'full',
    destination: {
      provider: 'aws-s3',
      bucket: 'my-backups'
    }
  })
});

const backup = await response.json();
console.log('Backup started:', backup.data.id);`}
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Monitor Backup Progress</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <pre className="text-sm font-mono text-gray-800 overflow-x-auto">
{`import requests
import time

def monitor_backup(backup_id, api_key):
    headers = {'Authorization': f'Bearer {api_key}'}
    
    while True:
        response = requests.get(
            f'https://api.pawthway.com/v1/backups/{backup_id}',
            headers=headers
        )
        
        backup = response.json()
        status = backup['data']['status']
        
        if status in ['completed', 'failed']:
            break
            
        time.sleep(30)
    
    return backup`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Authentication & Security */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Key className="h-6 w-6 text-blue-600" />
              Authentication & Security
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">API Key Types</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2">Production Keys</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Live data access and operations</li>
                    <li>• Higher rate limits (1000 req/hour)</li>
                    <li>• Full API access</li>
                    <li>• Enhanced monitoring</li>
                  </ul>
                  <div className="mt-3">
                    <Badge variant="destructive">pk_live_...</Badge>
                  </div>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2">Test Keys</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Sandbox environment only</li>
                    <li>• Lower rate limits (100 req/hour)</li>
                    <li>• Safe for development</li>
                    <li>• No production impact</li>
                  </ul>
                  <div className="mt-3">
                    <Badge variant="secondary">pk_test_...</Badge>
                  </div>
                </div>
              </div>
            </div>

            <Alert>
              <Shield className="h-4 w-4" />
              <AlertDescription>
                Never expose API keys in client-side code or version control. Use environment variables and secure secret management.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Rate Limiting */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-6 w-6 text-blue-600" />
              Rate Limiting
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Current Limits</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2">Standard Plan</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 1000 requests per hour</li>
                    <li>• 50 concurrent connections</li>
                    <li>• 10 MB max request size</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2">Enterprise Plan</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 10,000 requests per hour</li>
                    <li>• 200 concurrent connections</li>
                    <li>• 100 MB max request size</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Rate Limit Headers</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <pre className="text-sm font-mono text-gray-800">
{`X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 847
X-RateLimit-Reset: 1642694400`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* SDKs */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Official SDKs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium mb-2">JavaScript/TypeScript</h4>
                <div className="bg-gray-50 p-3 rounded text-xs font-mono mb-2">
                  npm install @pawthway/sdk
                </div>
                <Button size="sm" variant="outline">View Docs</Button>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium mb-2">Python</h4>
                <div className="bg-gray-50 p-3 rounded text-xs font-mono mb-2">
                  pip install pawthway-python
                </div>
                <Button size="sm" variant="outline">View Docs</Button>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium mb-2">Go</h4>
                <div className="bg-gray-50 p-3 rounded text-xs font-mono mb-2">
                  go get github.com/pawthway/go-sdk
                </div>
                <Button size="sm" variant="outline">View Docs</Button>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium mb-2">Ruby</h4>
                <div className="bg-gray-50 p-3 rounded text-xs font-mono mb-2">
                  gem install pawthway
                </div>
                <Button size="sm" variant="outline">View Docs</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* API Reference */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-6 w-6 text-blue-600" />
              Quick API Reference
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium mb-2 flex items-center gap-2">
                  <Badge variant="default" className="text-xs">GET</Badge>
                  /v1/backups
                </h4>
                <p className="text-sm text-gray-600">List all backups with filtering and pagination</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium mb-2 flex items-center gap-2">
                  <Badge variant="secondary" className="text-xs">POST</Badge>
                  /v1/backups
                </h4>
                <p className="text-sm text-gray-600">Create a new backup operation</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium mb-2 flex items-center gap-2">
                  <Badge variant="default" className="text-xs">GET</Badge>
                  /v1/backups/{"{id}"}
                </h4>
                <p className="text-sm text-gray-600">Get details of a specific backup</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium mb-2 flex items-center gap-2">
                  <Badge variant="destructive" className="text-xs">DELETE</Badge>
                  /v1/backups/{"{id}"}
                </h4>
                <p className="text-sm text-gray-600">Delete a backup from storage</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Testing Tools */}
        <Card>
          <CardHeader>
            <CardTitle>API Testing Tools</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Development Tools</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2">Swagger/OpenAPI</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Interactive API documentation and testing interface
                  </p>
                  <Button size="sm" variant="outline">Open API Explorer</Button>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2">Postman Collection</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Pre-configured collection with all endpoints
                  </p>
                  <Button size="sm" variant="outline">Import Collection</Button>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Sandbox Environment</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <span className="text-sm">Test API access</span>
                  <Badge variant="default">Available</Badge>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <span className="text-sm">Mock data endpoints</span>
                  <Badge variant="default">Enabled</Badge>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <span className="text-sm">Request logging</span>
                  <Badge variant="default">Available</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Help and Support */}
        <div className="mt-8 p-6 bg-gray-50 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Need API Support?</h3>
          <p className="text-gray-600 mb-4">
            Our developer support team can help you integrate the Pawthway API into your applications.
          </p>
          <div className="flex gap-4">
            <Button>Contact API Support</Button>
            <Button variant="outline">View Full Documentation</Button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default APIDocumentationGuide;
