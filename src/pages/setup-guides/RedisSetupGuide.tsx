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
  Database,
  Shield,
  Key,
  Settings,
  Clock,
  Users,
  Terminal,
  Zap
} from "lucide-react";
import { Link } from "react-router-dom";

const RedisSetupGuide = () => {
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
      title: "Prepare Redis Instance",
      duration: "1 minute",
      description: "Ensure Redis is properly configured for backups"
    },
    {
      id: 2,
      title: "Configure Persistence",
      duration: "2 minutes", 
      description: "Set up RDB snapshots and AOF logging"
    },
    {
      id: 3,
      title: "Configure Novabuckups",
      duration: "1 minute",
      description: "Add Redis connection to Novabuckups"
    },
    {
      id: 4,
      title: "Test Backup & Recovery",
      duration: "1 minute",
      description: "Verify backup functionality and test restoration"
    }
  ];

  const requirements = [
    "Redis 4.0+ server",
    "Access to Redis configuration",
    "Network connectivity to Redis",
    "Novabuckups account"
  ];

  const benefits = [
    "RDB snapshot backups",
    "AOF append-only file logging",
    "Memory-optimized backup strategies",
    "Cluster and sentinel support",
    "Fast backup and recovery",
    "Minimal performance impact"
  ];

  const redisConfig = `# Redis configuration for optimal backups
# Add to /etc/redis/redis.conf

# RDB Snapshots
save 900 1      # Save if at least 1 key changed in 900 seconds
save 300 10     # Save if at least 10 keys changed in 300 seconds  
save 60 10000   # Save if at least 10000 keys changed in 60 seconds

# AOF Configuration
appendonly yes
appendfilename "appendonly.aof"
appendfsync everysec

# Security
requirepass your_redis_password_here
protected-mode yes

# Network
bind 0.0.0.0
port 6379`;

  const testCommands = `# Redis CLI commands for testing backup setup

# Connect to Redis
redis-cli -h localhost -p 6379 -a your_password

# Test basic operations
SET test_key "backup_test_value"
GET test_key
BGSAVE
LASTSAVE

# Check persistence files
ls -la /var/lib/redis/dump.rdb
ls -la /var/lib/redis/appendonly.aof`;

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
                <span>Redis</span>
              </div>

              <div className="flex items-start gap-6 mb-8">
                <div className="p-3 bg-red-600 text-white rounded-lg">
                  <Zap className="h-8 w-8" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h1 className="text-3xl lg:text-4xl font-bold">
                      Redis Memory Database Backup Setup
                    </h1>
                    <Badge variant="outline">High Performance</Badge>
                  </div>
                  <p className="text-xl text-muted-foreground mb-4">
                    Complete guide to integrate Redis with Novabuckups for fast, reliable in-memory database backups.
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>~4 minutes setup</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="h-4 w-4" />
                      <span>Memory optimized</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      <span>Cache leader</span>
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
              
              {/* Step 1: Prepare Redis Instance */}
              {currentStep === 1 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">1</div>
                      Prepare Redis Instance
                    </CardTitle>
                    <CardDescription>
                      Ensure your Redis instance is properly configured and accessible for backup operations.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">1.1 Verify Redis Installation</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm ml-4">
                        <li>Connect to Redis: <code className="bg-muted px-2 py-1 rounded">redis-cli</code></li>
                        <li>Check Redis version: <code className="bg-muted px-2 py-1 rounded">INFO server</code></li>
                        <li>Ensure version is 4.0 or higher for optimal backup features</li>
                        <li>Verify Redis is running: <code className="bg-muted px-2 py-1 rounded">PING</code> should return "PONG"</li>
                      </ol>
                    </div>

                    <Separator />

                    <div>
                      <h4 className="font-semibold mb-3">1.2 Check Current Configuration</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm ml-4">
                        <li>View current config: <code className="bg-muted px-2 py-1 rounded">CONFIG GET save</code></li>
                        <li>Check AOF status: <code className="bg-muted px-2 py-1 rounded">CONFIG GET appendonly</code></li>
                        <li>Verify data directory: <code className="bg-muted px-2 py-1 rounded">CONFIG GET dir</code></li>
                        <li>Note current memory usage: <code className="bg-muted px-2 py-1 rounded">INFO memory</code></li>
                      </ol>
                    </div>

                    <Alert>
                      <AlertTriangle className="h-4 w-4" />
                      <AlertDescription>
                        <strong>Performance Note:</strong> Redis backups can impact performance during RDB saves. 
                        Consider scheduling backups during low-traffic periods.
                      </AlertDescription>
                    </Alert>

                    <div className="flex justify-between">
                      <Button variant="outline" disabled>
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Previous
                      </Button>
                      <Button onClick={() => setCurrentStep(2)}>
                        Next: Configure Persistence
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Step 2: Configure Persistence */}
              {currentStep === 2 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">2</div>
                      Configure Persistence
                    </CardTitle>
                    <CardDescription>
                      Set up RDB snapshots and AOF logging for reliable Redis data persistence.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">2.1 Update Redis Configuration</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Add these settings to your redis.conf file:
                      </p>
                      <div className="relative">
                        <pre className="bg-muted p-4 rounded text-xs overflow-x-auto">
{redisConfig}
                        </pre>
                        <Button
                          variant="outline"
                          size="sm"
                          className="absolute top-2 right-2"
                          onClick={() => copyToClipboard(redisConfig, 'Redis Config')}
                        >
                          {copiedText === 'Redis Config' ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                        </Button>
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <h4 className="font-semibold mb-3">2.2 Restart Redis Server</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm ml-4">
                        <li>Restart Redis service: <code className="bg-muted px-2 py-1 rounded">sudo systemctl restart redis</code></li>
                        <li>Verify configuration: <code className="bg-muted px-2 py-1 rounded">redis-cli CONFIG GET save</code></li>
                        <li>Check AOF is enabled: <code className="bg-muted px-2 py-1 rounded">redis-cli CONFIG GET appendonly</code></li>
                        <li>Test manual snapshot: <code className="bg-muted px-2 py-1 rounded">redis-cli BGSAVE</code></li>
                      </ol>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">2.3 Persistence Options Explained</h4>
                      <div className="bg-muted p-4 rounded">
                        <p className="text-sm mb-2">Redis offers two persistence options:</p>
                        <ul className="space-y-1 text-sm">
                          <li><strong>RDB Snapshots:</strong> Point-in-time snapshots, compact but can lose recent data</li>
                          <li><strong>AOF (Append Only File):</strong> Logs every write operation, more durable</li>
                          <li><strong>Mixed Mode:</strong> Use both for maximum data protection (recommended)</li>
                        </ul>
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
                      Add your Redis database connection to Novabuckups.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">3.1 Access Database Integration</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm ml-4">
                        <li>Log in to your Novabuckups dashboard</li>
                        <li>Navigate to "Settings" → "Integrations"</li>
                        <li>Find "Redis Database" and click "Configure"</li>
                        <li>Click "Add New Database Connection"</li>
                      </ol>
                    </div>

                    <Separator />

                    <div>
                      <h4 className="font-semibold mb-3">3.2 Enter Connection Details</h4>
                      <div className="bg-muted p-4 rounded space-y-3">
                        <div>
                          <label className="text-sm font-medium">Host</label>
                          <p className="text-xs text-muted-foreground">Redis server hostname or IP address</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium">Port</label>
                          <p className="text-xs text-muted-foreground">Default: 6379</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium">Password</label>
                          <p className="text-xs text-muted-foreground">Redis authentication password (if enabled)</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium">Database Index</label>
                          <p className="text-xs text-muted-foreground">Default: 0 (or specify specific database number)</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium">SSL/TLS</label>
                          <p className="text-xs text-muted-foreground">Enable if Redis is configured with TLS</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">3.3 Configure Backup Options</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm ml-4">
                        <li>Select backup method: RDB snapshot or AOF backup</li>
                        <li>Set backup schedule (consider Redis usage patterns)</li>
                        <li>Configure retention policy</li>
                        <li>Enable compression for large datasets</li>
                        <li>Set backup timeout settings</li>
                        <li>Click "Save Configuration"</li>
                      </ol>
                    </div>

                    <div className="flex justify-between">
                      <Button variant="outline" onClick={() => setCurrentStep(2)}>
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Previous
                      </Button>
                      <Button onClick={() => setCurrentStep(4)}>
                        Next: Test Backup
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Step 4: Test Backup & Recovery */}
              {currentStep === 4 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">4</div>
                      Test Backup & Recovery
                    </CardTitle>
                    <CardDescription>
                      Verify that Redis backups are working correctly and test the recovery process.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">4.1 Run Test Backup</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm ml-4">
                        <li>In Novabuckups, go to "Backups" → "Create Manual Backup"</li>
                        <li>Select your Redis instance</li>
                        <li>Choose backup destination (cloud storage)</li>
                        <li>Click "Start Backup"</li>
                        <li>Monitor backup progress and completion</li>
                      </ol>
                    </div>

                    <Separator />

                    <div>
                      <h4 className="font-semibold mb-3">4.2 Verify Backup Files</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm ml-4">
                        <li>Check RDB file is created and has reasonable size</li>
                        <li>Verify AOF file contains recent operations (if enabled)</li>
                        <li>Test backup file integrity</li>
                        <li>Check backup metadata and timestamps</li>
                      </ol>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">4.3 Test Recovery Process</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm ml-4">
                        <li>Set up a test Redis instance for recovery</li>
                        <li>Use Novabuckups "Restore" feature</li>
                        <li>Verify all keys are restored: <code className="bg-muted px-2 py-1 rounded">DBSIZE</code></li>
                        <li>Test sample key-value operations</li>
                        <li>Compare data structures (lists, sets, hashes)</li>
                      </ol>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">4.4 Test Commands Reference</h4>
                      <div className="relative">
                        <pre className="bg-muted p-4 rounded text-xs overflow-x-auto">
{testCommands}
                        </pre>
                        <Button
                          variant="outline"
                          size="sm"
                          className="absolute top-2 right-2"
                          onClick={() => copyToClipboard(testCommands, 'Test Commands')}
                        >
                          {copiedText === 'Test Commands' ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                        </Button>
                      </div>
                    </div>

                    <Alert>
                      <CheckCircle className="h-4 w-4" />
                      <AlertDescription>
                        <strong>Success!</strong> Your Redis backup integration is complete. 
                        You now have automated memory database backups with fast recovery capabilities.
                      </AlertDescription>
                    </Alert>

                    <div className="bg-primary/5 border border-primary/20 p-4 rounded">
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <Settings className="h-4 w-4" />
                        Performance Tips
                      </h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Schedule backups during low-traffic periods</li>
                        <li>• Monitor memory usage and optimize RDB save points</li>
                        <li>• Use Redis Sentinel for high availability setups</li>
                        <li>• Configure backup verification and integrity checks</li>
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
                Our Redis specialists can help you with memory database optimization and cluster setups.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/technical-support">
                    Get Database Support
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/schedule-demo">
                    Schedule Database Demo
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

export default RedisSetupGuide;
