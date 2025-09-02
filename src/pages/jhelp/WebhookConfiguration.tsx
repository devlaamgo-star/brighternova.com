import { useState } from "react";
import PageLayout from "../../components/shared/PageLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Alert, AlertDescription } from "../../components/ui/alert";
import { Button } from "../../components/ui/button";
import { Webhook, Link, Settings, CheckCircle, AlertTriangle, Code, Shield, Bell, Globe, Zap } from "lucide-react";

const WebhookConfiguration = () => {
  const [selectedEvent, setSelectedEvent] = useState("backup-complete");

  const webhookEvents = [
    { id: "backup-complete", name: "Backup Complete", description: "Triggered when a backup finishes successfully" },
    { id: "backup-failed", name: "Backup Failed", description: "Triggered when a backup encounters an error" },
    { id: "restore-complete", name: "Restore Complete", description: "Triggered when a restore operation finishes" },
    { id: "retention-cleanup", name: "Retention Cleanup", description: "Triggered when old backups are automatically deleted" },
    { id: "storage-warning", name: "Storage Warning", description: "Triggered when storage usage exceeds thresholds" },
    { id: "schedule-update", name: "Schedule Update", description: "Triggered when backup schedules are modified" }
  ];

  return (
    <PageLayout
      title="Webhook Configuration"
      description="Configure webhooks to receive real-time notifications about backup events"
    >
      <div className="container mx-auto px-4 py-8">
        {/* Webhook Overview */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Webhook className="h-6 w-6 text-blue-600" />
              Webhook Overview
            </CardTitle>
            <CardDescription>
              Integrate Pawthway with your applications using real-time event notifications
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 border rounded-lg">
                <Link className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <h3 className="font-semibold">3 Active</h3>
                <p className="text-sm text-gray-600">Configured webhooks</p>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <h3 className="font-semibold">847 Events</h3>
                <p className="text-sm text-gray-600">Delivered this month</p>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <Zap className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <h3 className="font-semibold">99.2%</h3>
                <p className="text-sm text-gray-600">Delivery success rate</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Available Events */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-6 w-6 text-blue-600" />
              Available Webhook Events
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {webhookEvents.map((event) => (
                <div 
                  key={event.id}
                  className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                    selectedEvent === event.id ? "border-blue-500 bg-blue-50" : "border-gray-200"
                  }`}
                  onClick={() => setSelectedEvent(event.id)}
                >
                  <h3 className="font-semibold mb-2">{event.name}</h3>
                  <p className="text-sm text-gray-600">{event.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Webhook Setup */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-6 w-6 text-blue-600" />
              Webhook Configuration Setup
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Setup Process</h3>
              <ol className="space-y-4">
                <li className="flex gap-4">
                  <span className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-medium flex-shrink-0">1</span>
                  <div>
                    <div className="font-medium">Create Webhook Endpoint</div>
                    <div className="text-sm text-gray-600">Set up an HTTP endpoint in your application to receive webhook events</div>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-medium flex-shrink-0">2</span>
                  <div>
                    <div className="font-medium">Configure URL and Events</div>
                    <div className="text-sm text-gray-600">Specify your endpoint URL and select which events to receive</div>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-medium flex-shrink-0">3</span>
                  <div>
                    <div className="font-medium">Set Security Headers</div>
                    <div className="text-sm text-gray-600">Configure authentication and signature verification</div>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-medium flex-shrink-0">4</span>
                  <div>
                    <div className="font-medium">Test Webhook</div>
                    <div className="text-sm text-gray-600">Send test events to verify your endpoint is working correctly</div>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-medium flex-shrink-0">5</span>
                  <div>
                    <div className="font-medium">Activate Webhook</div>
                    <div className="text-sm text-gray-600">Enable the webhook to start receiving live events</div>
                  </div>
                </li>
              </ol>
            </div>
          </CardContent>
        </Card>

        {/* Current Webhooks */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Link className="h-6 w-6 text-blue-600" />
              Current Webhook Configurations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div>
                    <div className="font-medium">Slack Notifications</div>
                    <div className="text-sm text-gray-600">https://hooks.slack.com/services/...</div>
                    <div className="text-xs text-gray-500">Events: backup-complete, backup-failed • Last triggered: 2 hours ago</div>
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
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div>
                    <div className="font-medium">Internal Monitoring System</div>
                    <div className="text-sm text-gray-600">https://monitoring.company.com/webhooks/pawthway</div>
                    <div className="text-xs text-gray-500">Events: All events • Last triggered: 6 hours ago</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="default">Active</Badge>
                  <Button size="sm" variant="outline">
                    <Settings className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 border rounded-lg bg-yellow-50">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div>
                    <div className="font-medium">Development Webhook</div>
                    <div className="text-sm text-gray-600">https://dev.company.com/api/webhooks</div>
                    <div className="text-xs text-gray-500">Events: backup-complete • Status: Failing (404 errors)</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="destructive">Error</Badge>
                  <Button size="sm" variant="outline">
                    <Settings className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <Button>Add New Webhook</Button>
            </div>
          </CardContent>
        </Card>

        {/* Payload Examples */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="h-6 w-6 text-blue-600" />
              Webhook Payload Examples
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Backup Complete Event</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <pre className="text-sm font-mono text-gray-800 overflow-x-auto">
{`{
  "event": "backup-complete",
  "timestamp": "2025-01-15T10:30:00Z",
  "backup_id": "bkp_1234567890",
  "data_source": {
    "type": "postgresql",
    "name": "Production Database",
    "connection_id": "conn_abc123"
  },
  "backup_details": {
    "size_bytes": 2147483648,
    "duration_seconds": 870,
    "compression_ratio": 3.2,
    "backup_type": "full"
  },
  "destination": {
    "provider": "aws-s3",
    "bucket": "pawthway-backups-prod",
    "key": "backups/2025/01/15/bkp_1234567890.tar.gz"
  },
  "status": "success"
}`}
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Backup Failed Event</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <pre className="text-sm font-mono text-gray-800 overflow-x-auto">
{`{
  "event": "backup-failed",
  "timestamp": "2025-01-15T10:45:00Z",
  "backup_id": "bkp_1234567891",
  "data_source": {
    "type": "mongodb",
    "name": "User Database",
    "connection_id": "conn_def456"
  },
  "error": {
    "code": "CONNECTION_TIMEOUT",
    "message": "Connection to database timed out after 30 seconds",
    "details": "Unable to establish connection to mongodb://..."
  },
  "retry_info": {
    "attempt": 3,
    "max_attempts": 5,
    "next_retry": "2025-01-15T11:00:00Z"
  },
  "status": "failed"
}`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Security & Authentication */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-blue-600" />
              Security & Authentication
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Webhook Security</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2">Signature Verification</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    All webhook payloads are signed using HMAC-SHA256 to verify authenticity.
                  </p>
                  <div className="bg-gray-50 p-3 rounded text-xs font-mono">
                    X-Pawthway-Signature: sha256=abc123...
                  </div>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2">Authentication Headers</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Optional authentication using API keys or custom headers.
                  </p>
                  <div className="bg-gray-50 p-3 rounded text-xs font-mono">
                    Authorization: Bearer your-api-key<br/>
                    X-Custom-Auth: your-token
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Verification Example (Node.js)</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <pre className="text-sm font-mono text-gray-800 overflow-x-auto">
{`const crypto = require('crypto');

function verifyWebhook(payload, signature, secret) {
  const expectedSignature = crypto
    .createHmac('sha256', secret)
    .update(payload, 'utf8')
    .digest('hex');
  
  const receivedSignature = signature.replace('sha256=', '');
  
  return crypto.timingSafeEqual(
    Buffer.from(expectedSignature, 'hex'),
    Buffer.from(receivedSignature, 'hex')
  );
}`}
                </pre>
              </div>
            </div>

            <Alert>
              <Shield className="h-4 w-4" />
              <AlertDescription>
                Always verify webhook signatures to ensure events are genuinely from Pawthway. Store your webhook secrets securely and rotate them regularly.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Webhook Configuration */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-6 w-6 text-blue-600" />
              Webhook Configuration Options
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Delivery Settings</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2">Retry Policy</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Maximum 5 retry attempts</li>
                    <li>• Exponential backoff strategy</li>
                    <li>• Initial delay: 1 second</li>
                    <li>• Maximum delay: 5 minutes</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2">Timeout Settings</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Connection timeout: 10 seconds</li>
                    <li>• Response timeout: 30 seconds</li>
                    <li>• Keep-alive connections supported</li>
                    <li>• HTTP/2 protocol support</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Response Requirements</h3>
              <div className="space-y-3">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2">Success Response</h4>
                  <p className="text-sm text-gray-600 mb-2">
                    Your endpoint should return HTTP 2xx status codes to acknowledge successful receipt.
                  </p>
                  <div className="bg-gray-50 p-3 rounded text-sm font-mono">
                    HTTP/1.1 200 OK<br/>
                    Content-Type: application/json<br/>
                    <br/>
                    {"{"}"status": "received"{"}"}
                  </div>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2">Error Handling</h4>
                  <p className="text-sm text-gray-600 mb-2">
                    Return 4xx/5xx status codes for processing errors. Include error details in response body.
                  </p>
                  <div className="bg-gray-50 p-3 rounded text-sm font-mono">
                    HTTP/1.1 400 Bad Request<br/>
                    Content-Type: application/json<br/>
                    <br/>
                    {"{"}"error": "Invalid payload format"{"}"}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Integration Examples */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="h-6 w-6 text-blue-600" />
              Integration Examples
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Popular Integrations</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2 flex items-center gap-2">
                    <span className="text-lg">🔔</span>
                    Slack Integration
                  </h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Send backup notifications directly to your Slack channels.
                  </p>
                  <div className="bg-gray-50 p-3 rounded text-xs font-mono">
                    POST https://hooks.slack.com/services/...
                  </div>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2 flex items-center gap-2">
                    <span className="text-lg">📊</span>
                    Monitoring Systems
                  </h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Integrate with Datadog, New Relic, or custom monitoring solutions.
                  </p>
                  <div className="bg-gray-50 p-3 rounded text-xs font-mono">
                    POST https://api.datadoghq.com/...
                  </div>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2 flex items-center gap-2">
                    <span className="text-lg">🎫</span>
                    Ticketing Systems
                  </h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Automatically create tickets for backup failures in Jira or ServiceNow.
                  </p>
                  <div className="bg-gray-50 p-3 rounded text-xs font-mono">
                    POST https://company.atlassian.net/...
                  </div>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2 flex items-center gap-2">
                    <span className="text-lg">📱</span>
                    Mobile Notifications
                  </h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Send push notifications via Firebase or custom mobile apps.
                  </p>
                  <div className="bg-gray-50 p-3 rounded text-xs font-mono">
                    POST https://fcm.googleapis.com/...
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Sample Webhook Handler (Express.js)</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <pre className="text-sm font-mono text-gray-800 overflow-x-auto">
{`const express = require('express');
const crypto = require('crypto');

app.post('/webhooks/pawthway', (req, res) => {
  const signature = req.headers['x-pawthway-signature'];
  const payload = JSON.stringify(req.body);
  
  // Verify signature
  if (!verifyWebhook(payload, signature, process.env.WEBHOOK_SECRET)) {
    return res.status(401).send('Invalid signature');
  }
  
  // Process the event
  const event = req.body;
  
  switch (event.event) {
    case 'backup-complete':
      console.log(\`Backup \${event.backup_id} completed successfully\`);
      // Send success notification
      break;
      
    case 'backup-failed':
      console.log(\`Backup \${event.backup_id} failed: \${event.error.message}\`);
      // Create incident ticket
      break;
      
    default:
      console.log(\`Unknown event: \${event.event}\`);
  }
  
  res.status(200).json({ status: 'received' });
});`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Testing & Debugging */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="h-6 w-6 text-blue-600" />
              Testing & Debugging
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Webhook Testing Tools</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2">Test Event Sender</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Send test payloads to your webhook endpoint to verify integration.
                  </p>
                  <Button size="sm" variant="outline">Send Test Event</Button>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2">Delivery Logs</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    View detailed logs of webhook delivery attempts and responses.
                  </p>
                  <Button size="sm" variant="outline">View Logs</Button>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Common Issues & Solutions</h3>
              <div className="space-y-3">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2 text-orange-700">Webhook Not Receiving Events</h4>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Verify webhook URL is accessible from external networks</li>
                    <li>• Check firewall and security group settings</li>
                    <li>• Ensure SSL certificate is valid for HTTPS endpoints</li>
                    <li>• Confirm webhook is enabled and not paused</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2 text-orange-700">High Failure Rate</h4>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Implement proper error handling in your endpoint</li>
                    <li>• Return appropriate HTTP status codes</li>
                    <li>• Handle duplicate events gracefully (idempotency)</li>
                    <li>• Monitor endpoint performance and response times</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Webhook Management */}
        <Card>
          <CardHeader>
            <CardTitle>Webhook Management</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Delivery Statistics</h3>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="text-center p-4 border rounded-lg">
                  <div className="text-xl font-bold text-blue-600 mb-1">847</div>
                  <div className="text-xs text-gray-600">Events Sent</div>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <div className="text-xl font-bold text-green-600 mb-1">841</div>
                  <div className="text-xs text-gray-600">Successful</div>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <div className="text-xl font-bold text-red-600 mb-1">6</div>
                  <div className="text-xs text-gray-600">Failed</div>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <div className="text-xl font-bold text-orange-600 mb-1">1.2s</div>
                  <div className="text-xs text-gray-600">Avg Response Time</div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Recent Webhook Activity</h3>
              <div className="space-y-3">
                <div className="p-3 border-l-4 border-green-500 bg-green-50">
                  <div className="text-sm font-medium">backup-complete event delivered</div>
                  <div className="text-xs text-gray-600">Slack Notifications • Response: 200 OK • 450ms</div>
                  <div className="text-xs text-gray-500">2 hours ago</div>
                </div>
                <div className="p-3 border-l-4 border-green-500 bg-green-50">
                  <div className="text-sm font-medium">retention-cleanup event delivered</div>
                  <div className="text-xs text-gray-600">Internal Monitoring • Response: 200 OK • 320ms</div>
                  <div className="text-xs text-gray-500">6 hours ago</div>
                </div>
                <div className="p-3 border-l-4 border-red-500 bg-red-50">
                  <div className="text-sm font-medium">backup-complete delivery failed</div>
                  <div className="text-xs text-gray-600">Development Webhook • Error: 404 Not Found</div>
                  <div className="text-xs text-gray-500">8 hours ago</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Help and Support */}
        <div className="mt-8 p-6 bg-gray-50 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Need Help with Webhooks?</h3>
          <p className="text-gray-600 mb-4">
            Our integration team can help you set up and troubleshoot webhook configurations for your specific use case.
          </p>
          <div className="flex gap-4">
            <Button>Contact Integration Team</Button>
            <Button variant="outline">View API Documentation</Button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default WebhookConfiguration;
