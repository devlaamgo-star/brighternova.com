import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import PageLayout from "@/components/shared/PageLayout";
import { Copy, Code, Terminal, Zap, Database, Cloud, Shield, Smartphone } from "lucide-react";

export default function CodeExamples() {
  const [copiedCode, setCopiedCode] = useState("");

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(""), 2000);
  };

  const examples = {
    quickstart: {
      title: "Quick Start",
      description: "Get started with Novabuckups in minutes",
      icon: Zap,
      examples: [
        {
          title: "Install CLI",
          language: "bash",
          code: `# Install Novabuckups CLI
curl -fsSL https://Novabuckups.com/install | bash

# Verify installation
Novabuckups --version`
        },
        {
          title: "First Backup",
          language: "bash",
          code: `# Login to your account
Novabuckups auth login

# Create your first backup
Novabuckups backup create \\
  --name "My First Backup" \\
  --source /path/to/data \\
  --destination s3://my-bucket/backups/

# Check backup status
Novabuckups backup list`
        }
      ]
    },
    database: {
      title: "Database Backups",
      description: "Backup various database systems",
      icon: Database,
      examples: [
        {
          title: "PostgreSQL Backup",
          language: "bash",
          code: `# Create PostgreSQL backup
Novabuckups backup create \\
  --name "PostgreSQL Daily" \\
  --type postgres \\
  --host localhost \\
  --port 5432 \\
  --database mydb \\
  --username postgres \\
  --destination s3://my-bucket/postgres/

# Schedule daily backups
Novabuckups schedule create \\
  --name "PostgreSQL Daily" \\
  --backup-id backup_123 \\
  --cron "0 2 * * *"`
        },
        {
          title: "MySQL Backup",
          language: "bash", 
          code: `# MySQL backup with compression
Novabuckups backup create \\
  --name "MySQL Production" \\
  --type mysql \\
  --host db.example.com \\
  --port 3306 \\
  --database production \\
  --username backup_user \\
  --compress gzip \\
  --destination s3://backups/mysql/`
        },
        {
          title: "MongoDB Backup",
          language: "bash",
          code: `# MongoDB backup
Novabuckups backup create \\
  --name "MongoDB Cluster" \\
  --type mongodb \\
  --uri "mongodb://user:pass@cluster.mongodb.net/" \\
  --database app_db \\
  --destination azure://backups/mongodb/`
        }
      ]
    },
    cloud: {
      title: "Cloud Storage",
      description: "Backup to various cloud providers",
      icon: Cloud,
      examples: [
        {
          title: "AWS S3 Backup",
          language: "bash",
          code: `# Configure AWS credentials
Novabuckups config set aws.access_key YOUR_ACCESS_KEY
Novabuckups config set aws.secret_key YOUR_SECRET_KEY
Novabuckups config set aws.region us-west-2

# Create S3 backup
Novabuckups backup create \\
  --name "S3 Backup" \\
  --source /var/www/html \\
  --destination s3://my-bucket/website/ \\
  --encrypt \\
  --compress`
        },
        {
          title: "Google Cloud Storage",
          language: "bash",
          code: `# Setup GCS credentials
Novabuckups auth gcs --key-file /path/to/service-account.json

# Backup to GCS
Novabuckups backup create \\
  --name "GCS Backup" \\
  --source /data \\
  --destination gcs://my-bucket/backups/ \\
  --storage-class COLDLINE`
        },
        {
          title: "Azure Blob Storage",
          language: "bash",
          code: `# Configure Azure
Novabuckups config set azure.account_name myaccount
Novabuckups config set azure.account_key mykey

# Backup to Azure
Novabuckups backup create \\
  --name "Azure Backup" \\
  --source /app/data \\
  --destination azure://container/backups/ \\
  --tier cool`
        }
      ]
    },
    api: {
      title: "API Integration",
      description: "Integrate Novabuckups with your applications",
      icon: Code,
      examples: [
        {
          title: "JavaScript/Node.js",
          language: "javascript",
          code: `const NovabuckupsClient = require('@Novabuckups/client');

const client = new NovabuckupsClient({
  apiKey: 'your-api-key',
  baseUrl: 'https://Novabuckups.com/api'
});

// Create a backup
async function createBackup() {
  try {
    const backup = await client.backups.create({
      name: 'API Backup',
      source: '/path/to/data',
      destination: 's3://my-bucket/api-backups/',
      schedule: '0 3 * * *',
      options: {
        compression: 'gzip',
        encryption: true
      }
    });
    
    console.log('Backup created:', backup.id);
    return backup;
  } catch (error) {
    console.error('Failed to create backup:', error);
  }
}

// Monitor backup status
async function monitorBackup(backupId) {
  const backup = await client.backups.get(backupId);
  console.log(\`Backup status: \${backup.status}\`);
  
  if (backup.status === 'completed') {
    console.log(\`Backup size: \${backup.size}\`);
  }
}`
        },
        {
          title: "Python",
          language: "python",
          code: `import Novabuckups
from datetime import datetime

# Initialize client
client = Novabuckups.Client(
    api_key='your-api-key',
    base_url='https://Novabuckups.com/api'
)

# Create backup
def create_backup():
    try:
        backup = client.backups.create(
            name='Python Backup',
            source='/var/lib/app/data',
            destination='s3://my-bucket/python-backups/',
            schedule='0 2 * * *',
            options={
                'compression': 'lz4',
                'encryption': True,
                'verify_checksum': True
            }
        )
        print(f"Backup created: {backup['id']}")
        return backup
    except Novabuckups.APIError as e:
        print(f"API Error: {e}")
    except Exception as e:
        print(f"Error: {e}")

# List recent backups
def list_recent_backups():
    backups = client.backups.list(
        limit=10,
        status='completed',
        created_after=datetime.now().isoformat()
    )
    
    for backup in backups['data']:
        print(f"{backup['name']}: {backup['status']} ({backup['size']})")`
        },
        {
          title: "cURL Examples",
          language: "bash",
          code: `# Create backup via REST API
curl -X POST https://Novabuckups.com/api/v1/backups \\
  -H "Authorization: Bearer your-api-key" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "API Backup",
    "source": "/data",
    "destination": "s3://bucket/backups/",
    "options": {
      "compression": "gzip",
      "encryption": true
    }
  }'

# Get backup status
curl -X GET https://Novabuckups.com/api/v1/backups/backup_123 \\
  -H "Authorization: Bearer your-api-key"

# List all backups
curl -X GET "https://Novabuckups.com/api/v1/backups?limit=50" \\
  -H "Authorization: Bearer your-api-key"`
        }
      ]
    },
    security: {
      title: "Security & Encryption",
      description: "Secure your backups with encryption",
      icon: Shield,
      examples: [
        {
          title: "Client-Side Encryption",
          language: "bash",
          code: `# Generate encryption key
Novabuckups crypto generate-key --output backup.key

# Create encrypted backup
Novabuckups backup create \\
  --name "Encrypted Backup" \\
  --source /sensitive/data \\
  --destination s3://secure-bucket/encrypted/ \\
  --encrypt \\
  --key-file backup.key \\
  --cipher AES-256-GCM`
        },
        {
          title: "GPG Encryption",
          language: "bash",
          code: `# Setup GPG key
gpg --gen-key
Novabuckups config set encryption.gpg_key your@email.com

# Create GPG encrypted backup
Novabuckups backup create \\
  --name "GPG Backup" \\
  --source /documents \\
  --destination local:///backups/gpg/ \\
  --encrypt gpg`
        },
        {
          title: "Zero-Knowledge Backup",
          language: "bash",
          code: `# Enable zero-knowledge mode
Novabuckups config set security.zero_knowledge true
Novabuckups config set security.master_password

# Create zero-knowledge backup
Novabuckups backup create \\
  --name "Zero Knowledge" \\
  --source /private \\
  --destination s3://bucket/zk-backups/ \\
  --zero-knowledge`
        }
      ]
    },
    mobile: {
      title: "Mobile & IoT",
      description: "Backup mobile devices and IoT systems",
      icon: Smartphone,
      examples: [
        {
          title: "Android Backup",
          language: "bash",
          code: `# Install mobile agent
adb install Novabuckups-mobile.apk

# Configure mobile backup
Novabuckups mobile setup \\
  --device android \\
  --backup-apps \\
  --backup-data \\
  --destination s3://mobile-backups/android/

# Schedule automatic mobile backups
Novabuckups mobile schedule \\
  --frequency daily \\
  --time "03:00" \\
  --wifi-only`
        },
        {
          title: "iOS Backup",
          language: "bash",
          code: `# Setup iOS backup (requires iTunes backup)
Novabuckups mobile setup \\
  --device ios \\
  --source ~/Library/Application\\ Support/MobileSync/Backup/ \\
  --destination s3://mobile-backups/ios/ \\
  --encrypt

# Restore iOS backup
Novabuckups mobile restore \\
  --backup-id mobile_backup_123 \\
  --device-id iPhone_XYZ`
        },
        {
          title: "IoT Device Backup",
          language: "bash",
          code: `# Setup IoT device backup
Novabuckups iot setup \\
  --device-type raspberry-pi \\
  --host 192.168.1.100 \\
  --user pi \\
  --source /home/pi/projects \\
  --destination local:///iot-backups/

# Bulk IoT backup
Novabuckups iot bulk-backup \\
  --config iot-devices.yaml \\
  --parallel 5`
        }
      ]
    }
  };

  return (
    <PageLayout 
      title="Code Examples" 
      description="Comprehensive examples and code snippets for Novabuckups"
    >
      <div className="min-h-screen bg-background py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Code Examples</h1>
            <p className="text-muted-foreground">
              Comprehensive examples and code snippets to help you integrate Novabuckups
            </p>
          </div>

          <Tabs defaultValue="quickstart" className="space-y-6">
            <TabsList className="grid w-full grid-cols-6">
              {Object.entries(examples).map(([key, section]) => {
                const IconComponent = section.icon;
                return (
                  <TabsTrigger key={key} value={key} className="flex items-center gap-2">
                    <IconComponent className="h-4 w-4" />
                    <span className="hidden sm:inline">{section.title}</span>
                  </TabsTrigger>
                );
              })}
            </TabsList>

            {Object.entries(examples).map(([key, section]) => (
              <TabsContent key={key} value={key}>
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">{section.title}</h2>
                    <p className="text-muted-foreground">{section.description}</p>
                  </div>

                  <div className="grid gap-6">
                    {section.examples.map((example, index) => (
                      <Card key={index}>
                        <CardHeader>
                          <div className="flex items-center justify-between">
                            <div>
                              <CardTitle>{example.title}</CardTitle>
                              <div className="flex items-center gap-2 mt-2">
                                <Badge variant="secondary">{example.language}</Badge>
                              </div>
                            </div>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => copyToClipboard(example.code, `${key}-${index}`)}
                            >
                              {copiedCode === `${key}-${index}` ? (
                                "Copied!"
                              ) : (
                                <>
                                  <Copy className="h-4 w-4 mr-2" />
                                  Copy
                                </>
                              )}
                            </Button>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <ScrollArea className="h-auto max-h-96 w-full">
                            <pre className="text-sm bg-muted p-4 rounded overflow-x-auto">
                              <code>{example.code}</code>
                            </pre>
                          </ScrollArea>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>

          {/* Additional Resources */}
          <div className="mt-12 pt-8 border-t border-border/50">
            <h2 className="text-2xl font-bold mb-6">Additional Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <Terminal className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">CLI Reference</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Complete command-line interface documentation
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <a href="/docs">View CLI Docs</a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <Code className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">API Reference</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Detailed API documentation and endpoints
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <a href="/api-docs">View API Docs</a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <Zap className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">Quick Start Guide</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Get up and running in minutes
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <a href="/quickstart">Start Tutorial</a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}