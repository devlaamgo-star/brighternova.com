import PageLayout from "@/components/shared/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { 
  Code, 
  Book, 
  Users, 
  Shield, 
  Bell, 
  Webhook, 
  Clock, 
  Key,
  Copy,
  ExternalLink,
  Download,
  Settings,
  Lock,
  Database,
  Terminal,
  Globe
} from "lucide-react";

const APIDocumentation = () => {
  const apiEndpoints = [
    {
      method: "GET",
      endpoint: "/api/v1/backups",
      description: "List all backups for the authenticated user",
      parameters: [
        { name: "limit", type: "integer", description: "Number of results to return (max 100)" },
        { name: "offset", type: "integer", description: "Number of results to skip" },
        { name: "status", type: "string", description: "Filter by backup status (completed, failed, running)" }
      ]
    },
    {
      method: "POST",
      endpoint: "/api/v1/backups",
      description: "Create a new backup job",
      parameters: [
        { name: "name", type: "string", description: "Name for the backup job", required: true },
        { name: "source_path", type: "string", description: "Source directory path", required: true },
        { name: "schedule", type: "string", description: "Cron expression for scheduling" }
      ]
    },
    {
      method: "GET",
      endpoint: "/api/v1/backups/{id}",
      description: "Get details of a specific backup",
      parameters: [
        { name: "id", type: "string", description: "Backup ID", required: true }
      ]
    },
    {
      method: "DELETE",
      endpoint: "/api/v1/backups/{id}",
      description: "Delete a backup",
      parameters: [
        { name: "id", type: "string", description: "Backup ID", required: true }
      ]
    }
  ];

  const sdkLanguages = [
    {
      name: "JavaScript/Node.js",
      icon: "JS",
      installation: "npm install @novabuckups/sdk",
      example: `import { NovabuckupsClient } from '@novabuckups/sdk';

const client = new NovabuckupsClient({
  apiKey: 'your-api-key',
  baseUrl: 'https://novabuckups.com/api'
});

// Create a backup
const backup = await client.backups.create({
  name: 'My Backup',
  sourcePath: '/path/to/data',
  schedule: '0 2 * * *' // Daily at 2 AM
});

console.log('Backup created:', backup.id);`
    },
    {
      name: "Python",
      icon: "PY",
      installation: "pip install novabuckups-sdk",
      example: `from novabuckups import NovabuckupsClient

client = NovabuckupsClient(
    api_key='your-api-key',
    base_url='https://novabuckups.com/api'
)

# Create a backup
backup = client.backups.create(
    name='My Backup',
    source_path='/path/to/data',
    schedule='0 2 * * *'  # Daily at 2 AM
)

print(f'Backup created: {backup.id}')`
    },
    {
      name: "Go",
      icon: "GO",
      installation: "go get github.com/novabuckups/go-sdk",
      example: `package main

import (
    "fmt"
    "github.com/novabuckups/go-sdk"
)

func main() {
    client := novabuckups.NewClient("your-api-key")
    
    backup, err := client.Backups.Create(&novabuckups.BackupRequest{
        Name:       "My Backup",
        SourcePath: "/path/to/data",
        Schedule:   "0 2 * * *",
    })
    
    if err != nil {
        panic(err)
    }
    
    fmt.Printf("Backup created: %s\\n", backup.ID)
}`
    }
  ];

  const userRoles = [
    {
      role: "Admin",
      permissions: [
        "Full system access",
        "User management",
        "Billing management",
        "API key management",
        "Security settings"
      ]
    },
    {
      role: "Manager",
      permissions: [
        "Team backup management",
        "View team reports",
        "User provisioning",
        "Policy configuration"
      ]
    },
    {
      role: "User",
      permissions: [
        "Personal backup management",
        "File restoration",
        "View personal reports"
      ]
    },
    {
      role: "Viewer",
      permissions: [
        "Read-only access",
        "View backup status",
        "Download reports"
      ]
    }
  ];

  const notificationTypes = [
    {
      type: "backup_completed",
      description: "Triggered when a backup job completes successfully",
      payload: "{ backup_id, status, duration, files_count }"
    },
    {
      type: "backup_failed",
      description: "Triggered when a backup job fails",
      payload: "{ backup_id, error_message, retry_count }"
    },
    {
      type: "storage_quota_exceeded",
      description: "Triggered when storage usage exceeds threshold",
      payload: "{ usage_percent, current_usage, quota_limit }"
    },
    {
      type: "user_created",
      description: "Triggered when a new user is added to the organization",
      payload: "{ user_id, email, role, created_at }"
    }
  ];

  const retentionPolicies = [
    {
      name: "Daily Backups",
      description: "Keep daily backups for specified duration",
      options: "7 days, 30 days, 90 days, 1 year"
    },
    {
      name: "Weekly Backups",
      description: "Keep weekly backups for long-term storage",
      options: "4 weeks, 12 weeks, 52 weeks, 2 years"
    },
    {
      name: "Monthly Backups",
      description: "Keep monthly backups for compliance",
      options: "3 months, 6 months, 12 months, 7 years"
    },
    {
      name: "Custom Rules",
      description: "Define custom retention based on file type or path",
      options: "File extension, Directory path, File size, Custom criteria"
    }
  ];

  return (
    <PageLayout 
      title="API Documentation - Developer Resources" 
      description="Comprehensive API documentation for Novabuckups including REST API reference, SDK documentation, user management, webhooks, and security features for developers."
    >
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="glass mb-6">
              <Code className="h-4 w-4 mr-2" />
              API Documentation
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
              Developer 
              <span className="block">documentation</span>
            </h1>
            <p className="text-xl lg:text-2xl text-primary-foreground/80 text-balance mb-8 max-w-3xl mx-auto">
              Everything you need to integrate Novabuckups into your applications. 
              REST APIs, SDKs, webhooks, and enterprise features.
            </p>
          </div>
        </div>
      </section>

      {/* Main Documentation */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <Tabs defaultValue="rest-api" className="w-full max-w-7xl mx-auto">
            <TabsList className="grid w-full grid-cols-4 lg:grid-cols-8 mb-8">
              <TabsTrigger value="rest-api" className="flex items-center gap-1">
                <Globe className="h-4 w-4" />
                <span className="hidden sm:inline">REST API</span>
              </TabsTrigger>
              <TabsTrigger value="sdk" className="flex items-center gap-1">
                <Code className="h-4 w-4" />
                <span className="hidden sm:inline">SDKs</span>
              </TabsTrigger>
              <TabsTrigger value="users" className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                <span className="hidden sm:inline">Users</span>
              </TabsTrigger>
              <TabsTrigger value="roles" className="flex items-center gap-1">
                <Shield className="h-4 w-4" />
                <span className="hidden sm:inline">Roles</span>
              </TabsTrigger>
              <TabsTrigger value="notifications" className="flex items-center gap-1">
                <Bell className="h-4 w-4" />
                <span className="hidden sm:inline">Notifications</span>
              </TabsTrigger>
              <TabsTrigger value="webhooks" className="flex items-center gap-1">
                <Webhook className="h-4 w-4" />
                <span className="hidden sm:inline">Webhooks</span>
              </TabsTrigger>
              <TabsTrigger value="retention" className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span className="hidden sm:inline">Retention</span>
              </TabsTrigger>
              <TabsTrigger value="encryption" className="flex items-center gap-1">
                <Key className="h-4 w-4" />
                <span className="hidden sm:inline">Encryption</span>
              </TabsTrigger>
            </TabsList>

            {/* REST API Reference */}
            <TabsContent value="rest-api">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                    <Globe className="h-8 w-8 text-primary" />
                    REST API Reference
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Our RESTful API provides programmatic access to all Novabuckups features. 
                    Base URL: <code className="bg-muted px-2 py-1 rounded">https://novabuckups.com/api/v1</code>
                  </p>
                </div>

                {/* Authentication */}
                <Card className="bg-gradient-card border-border/50">
                  <CardHeader>
                    <h3 className="text-xl font-semibold flex items-center gap-2">
                      <Lock className="h-5 w-5 text-primary" />
                      Authentication
                    </h3>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">All API requests require authentication using an API key in the Authorization header:</p>
                    <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                      Authorization: Bearer your-api-key-here
                    </div>
                    <p className="mt-4 text-sm text-muted-foreground">
                      API keys can be generated in your account settings under the "API Keys" section.
                    </p>
                  </CardContent>
                </Card>

                {/* API Endpoints */}
                <div>
                  <h3 className="text-2xl font-semibold mb-6">Endpoints</h3>
                  <div className="space-y-4">
                    {apiEndpoints.map((endpoint, index) => (
                      <Card key={index} className="bg-background border-border/50">
                        <CardHeader>
                          <div className="flex items-center gap-3">
                            <Badge variant={endpoint.method === 'GET' ? 'secondary' : endpoint.method === 'POST' ? 'default' : 'destructive'}>
                              {endpoint.method}
                            </Badge>
                            <code className="font-mono text-sm bg-muted px-2 py-1 rounded">{endpoint.endpoint}</code>
                          </div>
                          <p className="text-muted-foreground">{endpoint.description}</p>
                        </CardHeader>
                        <CardContent>
                          <h4 className="font-semibold mb-3">Parameters:</h4>
                          <div className="space-y-2">
                            {endpoint.parameters.map((param, paramIndex) => (
                              <div key={paramIndex} className="flex items-start gap-4 text-sm">
                                <code className="bg-muted px-2 py-1 rounded min-w-0 flex-shrink-0">{param.name}</code>
                                <Badge variant="outline" className="text-xs">{param.type}</Badge>
                                <span className="text-muted-foreground">{param.description}</span>
                                {param.required && <Badge variant="destructive" className="text-xs">Required</Badge>}
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* SDK Documentation */}
            <TabsContent value="sdk">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                    <Code className="h-8 w-8 text-primary" />
                    SDK Documentation
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Official SDKs to integrate Novabuckups into your applications quickly and easily.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {sdkLanguages.map((sdk, index) => (
                    <Card key={index} className="bg-gradient-card border-border/50">
                      <CardHeader>
                        <div className="flex items-center gap-3">
                          <div className="bg-primary/10 p-3 rounded-lg">
                            <span className="font-bold text-primary">{sdk.icon}</span>
                          </div>
                          <h3 className="text-xl font-semibold">{sdk.name}</h3>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold mb-2">Installation:</h4>
                            <div className="bg-muted p-3 rounded font-mono text-sm">
                              {sdk.installation}
                            </div>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">Example Usage:</h4>
                            <div className="bg-muted p-3 rounded font-mono text-xs overflow-x-auto">
                              <pre>{sdk.example}</pre>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* User Management */}
            <TabsContent value="users">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                    <Users className="h-8 w-8 text-primary" />
                    User Management
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Programmatically manage users, teams, and organizations in your Novabuckups account.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Card className="bg-gradient-card border-border/50">
                    <CardHeader>
                      <h3 className="text-xl font-semibold">User Operations</h3>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <Badge variant="secondary">POST</Badge>
                            <code className="text-sm">/api/v1/users</code>
                          </div>
                          <p className="text-sm text-muted-foreground">Create a new user</p>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <Badge variant="secondary">GET</Badge>
                            <code className="text-sm">/api/v1/users</code>
                          </div>
                          <p className="text-sm text-muted-foreground">List all users</p>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <Badge variant="secondary">PUT</Badge>
                            <code className="text-sm">/api/v1/users/{"{"}&lt;id&gt;{"}"}</code>
                          </div>
                          <p className="text-sm text-muted-foreground">Update user details</p>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <Badge variant="destructive">DELETE</Badge>
                            <code className="text-sm">/api/v1/users/{"{"}&lt;id&gt;{"}"}</code>
                          </div>
                          <p className="text-sm text-muted-foreground">Delete a user</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-card border-border/50">
                    <CardHeader>
                      <h3 className="text-xl font-semibold">Example: Create User</h3>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-muted p-4 rounded font-mono text-sm">
                        <pre>{`POST /api/v1/users
{
  "email": "user@example.com",
  "name": "John Doe",
  "role": "user",
  "team_id": "team_123",
  "permissions": [
    "backup:create",
    "backup:restore"
  ]
}`}</pre>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Role-Based Access */}
            <TabsContent value="roles">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                    <Shield className="h-8 w-8 text-primary" />
                    Role-Based Access Control
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Manage user permissions and access levels with granular role-based controls.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {userRoles.map((roleInfo, index) => (
                    <Card key={index} className="bg-gradient-card border-border/50">
                      <CardHeader>
                        <h3 className="text-lg font-semibold text-center">{roleInfo.role}</h3>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {roleInfo.permissions.map((permission, permIndex) => (
                            <li key={permIndex} className="flex items-start gap-2 text-sm">
                              <div className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-muted-foreground">{permission}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Card className="bg-gradient-card border-border/50">
                  <CardHeader>
                    <h3 className="text-xl font-semibold">Custom Permissions</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">You can also create custom roles with specific permissions:</p>
                    <div className="bg-muted p-4 rounded font-mono text-sm">
                      <pre>{`POST /api/v1/roles
{
  "name": "Backup Operator",
  "description": "Can manage backups but not users",
  "permissions": [
    "backup:create",
    "backup:read",
    "backup:update",
    "backup:delete",
    "restore:create"
  ]
}`}</pre>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Notification Settings */}
            <TabsContent value="notifications">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                    <Bell className="h-8 w-8 text-primary" />
                    Notification Settings
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Configure email, SMS, and in-app notifications for various system events.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <Card className="bg-gradient-card border-border/50">
                    <CardHeader>
                      <h3 className="text-xl font-semibold">Notification Types</h3>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {notificationTypes.map((notification, index) => (
                          <div key={index} className="border-l-2 border-primary/20 pl-4">
                            <h4 className="font-semibold text-sm">{notification.type}</h4>
                            <p className="text-sm text-muted-foreground mb-2">{notification.description}</p>
                            <code className="text-xs bg-muted px-2 py-1 rounded">{notification.payload}</code>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-card border-border/50">
                    <CardHeader>
                      <h3 className="text-xl font-semibold">Configuration Example</h3>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-muted p-4 rounded font-mono text-sm">
                        <pre>{`PUT /api/v1/notifications/settings
{
  "email": {
    "enabled": true,
    "events": [
      "backup_failed",
      "storage_quota_exceeded"
    ]
  },
  "sms": {
    "enabled": true,
    "phone": "+1234567890",
    "events": [
      "backup_failed"
    ]
  },
  "webhook": {
    "enabled": true,
    "url": "https://your-app.com/webhook",
    "events": ["*"]
  }
}`}</pre>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Webhook Integration */}
            <TabsContent value="webhooks">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                    <Webhook className="h-8 w-8 text-primary" />
                    Webhook Integration
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Receive real-time notifications about backup events via HTTP webhooks.
                  </p>
                </div>

                <Card className="bg-gradient-card border-border/50">
                  <CardHeader>
                    <h3 className="text-xl font-semibold">Webhook Setup</h3>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">1. Create a webhook endpoint:</h4>
                        <div className="bg-muted p-4 rounded font-mono text-sm">
                          <pre>{`POST /api/v1/webhooks
{
  "url": "https://your-app.com/webhook",
  "events": [
    "backup_completed",
    "backup_failed",
    "user_created"
  ],
  "secret": "your-webhook-secret"
}`}</pre>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2">2. Webhook payload example:</h4>
                        <div className="bg-muted p-4 rounded font-mono text-sm">
                          <pre>{`{
  "event": "backup_completed",
  "timestamp": "2024-01-15T10:30:00Z",
  "data": {
    "backup_id": "backup_123",
    "user_id": "user_456",
    "status": "completed",
    "duration": 3600,
    "files_count": 1250,
    "size_bytes": 1073741824
  }
}`}</pre>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">3. Verify webhook signatures:</h4>
                        <div className="bg-muted p-4 rounded font-mono text-sm">
                          <pre>{`const crypto = require('crypto');

function verifyWebhook(payload, signature, secret) {
  const expectedSignature = crypto
    .createHmac('sha256', secret)
    .update(payload)
    .digest('hex');
  
  return signature === expectedSignature;
}`}</pre>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Custom Retention Policies */}
            <TabsContent value="retention">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                    <Clock className="h-8 w-8 text-primary" />
                    Custom Retention Policies
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Define how long backup data is retained based on your compliance and business requirements.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {retentionPolicies.map((policy, index) => (
                    <Card key={index} className="bg-gradient-card border-border/50">
                      <CardHeader>
                        <h3 className="text-lg font-semibold">{policy.name}</h3>
                        <p className="text-muted-foreground">{policy.description}</p>
                      </CardHeader>
                      <CardContent>
                        <div className="text-sm">
                          <strong>Available options:</strong>
                          <p className="text-muted-foreground mt-1">{policy.options}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Card className="bg-gradient-card border-border/50">
                  <CardHeader>
                    <h3 className="text-xl font-semibold">Policy Configuration Example</h3>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-muted p-4 rounded font-mono text-sm">
                      <pre>{`POST /api/v1/retention-policies
{
  "name": "Compliance Policy",
  "rules": [
    {
      "type": "daily",
      "retain_for": "30d",
      "applies_to": {
        "paths": ["/important/*"],
        "file_types": ["*.pdf", "*.docx"]
      }
    },
    {
      "type": "weekly",
      "retain_for": "1y",
      "applies_to": {
        "paths": ["/archive/*"]
      }
    },
    {
      "type": "monthly",
      "retain_for": "7y",
      "applies_to": {
        "all": true
      }
    }
  ]
}`}</pre>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Encryption Keys */}
            <TabsContent value="encryption">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                    <Key className="h-8 w-8 text-primary" />
                    Encryption Keys Management
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Manage encryption keys for enhanced security and compliance with zero-knowledge architecture.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <Card className="bg-gradient-card border-border/50">
                    <CardHeader>
                      <h3 className="text-xl font-semibold">Key Management Operations</h3>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Generate New Key:</h4>
                          <div className="bg-muted p-3 rounded font-mono text-sm">
                            POST /api/v1/encryption/keys
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Rotate Key:</h4>
                          <div className="bg-muted p-3 rounded font-mono text-sm">
                            POST /api/v1/encryption/keys/{"{"}&lt;id&gt;{"}"}/rotate
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">List Keys:</h4>
                          <div className="bg-muted p-3 rounded font-mono text-sm">
                            GET /api/v1/encryption/keys
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Revoke Key:</h4>
                          <div className="bg-muted p-3 rounded font-mono text-sm">
                            DELETE /api/v1/encryption/keys/{"{"}&lt;id&gt;{"}"}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-card border-border/50">
                    <CardHeader>
                      <h3 className="text-xl font-semibold">Key Types & Usage</h3>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-sm">Master Encryption Key (MEK)</h4>
                          <p className="text-sm text-muted-foreground">Primary key for encrypting data encryption keys</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm">Data Encryption Key (DEK)</h4>
                          <p className="text-sm text-muted-foreground">Individual keys for encrypting backup data</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm">Customer Managed Key (CMK)</h4>
                          <p className="text-sm text-muted-foreground">Your own keys stored in HSM or cloud KMS</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm">Bring Your Own Key (BYOK)</h4>
                          <p className="text-sm text-muted-foreground">Import your existing encryption keys</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card className="bg-gradient-card border-border/50">
                  <CardHeader>
                    <h3 className="text-xl font-semibold">Example: BYOK Configuration</h3>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-muted p-4 rounded font-mono text-sm">
                      <pre>{`POST /api/v1/encryption/keys/import
{
  "type": "customer_managed",
  "key_material": "base64-encoded-key",
  "algorithm": "AES-256-GCM",
  "hsm_provider": "aws-kms",
  "hsm_key_id": "arn:aws:kms:region:account:key/key-id",
  "metadata": {
    "name": "Production Backup Key",
    "purpose": "backup_encryption",
    "compliance": ["FIPS-140-2"]
  }
}`}</pre>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Getting Started */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-card border-border/50">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <Book className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                  <p className="text-muted-foreground mb-6">
                    Start integrating Novabuckups into your applications with our comprehensive 
                    developer resources and support.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="text-center bg-background border-border/50 hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <Terminal className="h-8 w-8 text-primary mx-auto mb-3" />
                      <h4 className="font-semibold mb-2">API Explorer</h4>
                      <p className="text-sm text-muted-foreground mb-3">Interactive API testing tool</p>
                      <Button variant="outline" size="sm" asChild>
                        <a href="/api-tester">Try API</a>
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="text-center bg-background border-border/50 hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <Code className="h-8 w-8 text-primary mx-auto mb-3" />
                      <h4 className="font-semibold mb-2">Code Examples</h4>
                      <p className="text-sm text-muted-foreground mb-3">Sample code and tutorials</p>
                      <Button variant="outline" size="sm" asChild>
                        <a href="/code-examples">View Examples</a>
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="text-center bg-background border-border/50 hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <Users className="h-8 w-8 text-primary mx-auto mb-3" />
                      <h4 className="font-semibold mb-2">Developer Support</h4>
                      <p className="text-sm text-muted-foreground mb-3">Get help from our team</p>
                      <Button variant="outline" size="sm" asChild>
                        <a href="/contact">Contact Support</a>
                      </Button>
                    </CardContent>
                  </Card>
                </div>

                <div className="mt-8 pt-6 border-t border-border/50 text-center">
                  <p className="text-sm text-muted-foreground mb-4">
                    Need an API key? Generate one in your account settings.
                  </p>
                  <Button variant="default" asChild>
                    <Link to="/signin">
                      <Settings className="h-4 w-4 mr-2" />
                      Account Settings
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default APIDocumentation;
