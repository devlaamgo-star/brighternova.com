import React from 'react';
import PageLayout from '../../components/shared/PageLayout';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Bell, Mail, MessageSquare, Smartphone, Webhook, CheckCircle, AlertTriangle, Settings, Volume2, Clock } from 'lucide-react';

export default function SettingUpNotifications() {
  return (
    <PageLayout
      title="Setting Up Notifications"
      description="Configure comprehensive backup notifications and alerts. Learn how to set up email, SMS, Slack, and webhook notifications to stay informed about your backup status."
    >
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            <Bell className="w-4 h-4 mr-2" />
            Notification Setup Guide
          </Badge>
          <h1 className="text-4xl font-bold mb-6">Setting Up Notifications</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay informed about your backup operations with comprehensive notification systems. 
            Configure alerts for success, failures, and important status updates.
          </p>
        </div>

        {/* Notification Channels Overview */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <Card className="border-blue-200 bg-blue-50 dark:bg-blue-900/20 text-center">
            <CardContent className="pt-6">
              <Mail className="w-8 h-8 mx-auto mb-3 text-blue-600" />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-sm text-muted-foreground">Rich HTML notifications with detailed reports</p>
              <Badge variant="outline" className="mt-2">Most Popular</Badge>
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-green-50 dark:bg-green-900/20 text-center">
            <CardContent className="pt-6">
              <Smartphone className="w-8 h-8 mx-auto mb-3 text-green-600" />
              <h3 className="font-semibold mb-2">SMS</h3>
              <p className="text-sm text-muted-foreground">Instant mobile alerts for critical events</p>
              <Badge variant="outline" className="mt-2">Immediate</Badge>
            </CardContent>
          </Card>

          <Card className="border-purple-200 bg-purple-50 dark:bg-purple-900/20 text-center">
            <CardContent className="pt-6">
              <MessageSquare className="w-8 h-8 mx-auto mb-3 text-purple-600" />
              <h3 className="font-semibold mb-2">Slack</h3>
              <p className="text-sm text-muted-foreground">Team integration with channels and threads</p>
              <Badge variant="outline" className="mt-2">Team Friendly</Badge>
            </CardContent>
          </Card>

          <Card className="border-orange-200 bg-orange-50 dark:bg-orange-900/20 text-center">
            <CardContent className="pt-6">
              <Webhook className="w-8 h-8 mx-auto mb-3 text-orange-600" />
              <h3 className="font-semibold mb-2">Webhook</h3>
              <p className="text-sm text-muted-foreground">Custom integrations and automated workflows</p>
              <Badge variant="outline" className="mt-2">Advanced</Badge>
            </CardContent>
          </Card>
        </div>

        {/* Email Notifications Setup */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Mail className="w-5 h-5 mr-2 text-blue-600" />
              Email Notifications Setup
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <p>Configure email alerts for comprehensive backup monitoring and reporting.</p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold mb-3 text-green-800 dark:text-green-200">✅ Success Notifications</h4>
                  <div className="space-y-2 text-sm">
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" defaultChecked />
                      <span>Backup completion confirmations</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span>Weekly backup summary reports</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span>Monthly storage usage reports</span>
                    </label>
                  </div>
                </div>

                <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold mb-3 text-red-800 dark:text-red-200">🚨 Error Alerts</h4>
                  <div className="space-y-2 text-sm">
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" defaultChecked />
                      <span>Backup failure notifications</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" defaultChecked />
                      <span>Connection timeout warnings</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span>Storage capacity warnings</span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">📧 Email Configuration Example:</h4>
                <div className="bg-white dark:bg-gray-900 p-3 rounded border text-sm font-mono">
                  <div>To: admin@company.com</div>
                  <div>From: notifications@pawthway.com</div>
                  <div>Subject: [SUCCESS] Daily PostgreSQL Backup Complete</div>
                  <div className="mt-2 text-xs">
                    Backup Job: daily-postgres-backup<br/>
                    Status: Completed Successfully<br/>
                    Duration: 2m 34s<br/>
                    Data Size: 1.2GB<br/>
                    Next Scheduled: Tomorrow 2:00 AM
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* SMS Setup */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Smartphone className="w-5 h-5 mr-2 text-green-600" />
              SMS Notifications Setup
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <p>Get instant mobile alerts for critical backup events that require immediate attention.</p>
              
              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200">
                <div className="flex items-start space-x-2">
                  <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-1">SMS Best Practices</h4>
                    <p className="text-sm text-yellow-700 dark:text-yellow-300">
                      SMS notifications should be reserved for critical alerts only to avoid notification fatigue and messaging costs.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold mb-3 text-red-800 dark:text-red-200">🚨 Critical Alerts</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-red-500" />
                      <span>Backup failures</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-red-500" />
                      <span>Storage full warnings</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-red-500" />
                      <span>Security alerts</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-semibold mb-3">📱 Phone Configuration</h4>
                  <div className="space-y-3 text-sm">
                    <div>Primary Phone: +1-555-123-4567</div>
                    <div>Backup Contact: +1-555-765-4321</div>
                    <div>Quiet Hours: 10:00 PM - 7:00 AM</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Slack Integration */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <MessageSquare className="w-5 h-5 mr-2 text-purple-600" />
              Slack Integration Setup
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <p>Integrate backup notifications with your team's Slack workspace for collaborative monitoring.</p>
              
              <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                <h4 className="font-semibold mb-3">📋 Slack Setup Steps:</h4>
                <ol className="list-decimal list-inside space-y-1 text-sm">
                  <li>Go to Integrations → Slack in your Pawthway dashboard</li>
                  <li>Click "Connect to Slack" and authorize the application</li>
                  <li>Select the workspace and channels for notifications</li>
                  <li>Configure notification types and frequency</li>
                  <li>Test the integration with a sample notification</li>
                </ol>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">📢 Channel Examples:</h4>
                <div className="space-y-2 text-sm">
                  <div>#backups - All backup events and status updates</div>
                  <div>#alerts - Critical errors and failures only</div>
                  <div>#ops-team - Operational notifications</div>
                  <div>@admin (DM) - Personal failure notifications</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Webhook Setup */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Webhook className="w-5 h-5 mr-2 text-orange-600" />
              Webhook Notifications Setup
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <p>Create custom integrations with your existing monitoring and automation systems.</p>
              
              <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                <h4 className="font-semibold mb-3">🔧 Webhook Configuration:</h4>
                <div className="space-y-3 text-sm">
                  <div>Webhook URL: https://api.yourcompany.com/webhooks/backup-status</div>
                  <div>Authentication: Bearer Token / API Key</div>
                  <div>Format: JSON / XML / Custom</div>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">📋 Sample JSON Payload:</h4>
                <div className="bg-white dark:bg-gray-900 p-3 rounded border text-xs font-mono">
                  {JSON.stringify({
                    event: "backup_completed",
                    timestamp: "2025-09-02T03:04:45Z",
                    job_name: "daily-postgres-backup",
                    status: "success",
                    duration: 154,
                    size_bytes: 1289472000
                  }, null, 2)}
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">🔗 Popular Integrations:</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                  <div>• PagerDuty</div>
                  <div>• Datadog</div>
                  <div>• New Relic</div>
                  <div>• Grafana</div>
                  <div>• Microsoft Teams</div>
                  <div>• Discord</div>
                  <div>• JIRA Service Desk</div>
                  <div>• Custom SIEM</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Notification Rules */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Settings className="w-5 h-5 mr-2 text-blue-600" />
              Notification Rules and Filters
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <p>Create intelligent notification rules to avoid alert fatigue while ensuring critical events are never missed.</p>
              
              <div className="grid md:grid-cols-3 gap-4">
                <Card className="border-red-200">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg text-red-800 dark:text-red-200">🚨 Critical Rules</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center">
                        <AlertTriangle className="w-4 h-4 mr-2 text-red-500" />
                        <span>Backup failures</span>
                      </div>
                      <div className="flex items-center">
                        <AlertTriangle className="w-4 h-4 mr-2 text-red-500" />
                        <span>Storage 95% full</span>
                      </div>
                      <div className="flex items-center">
                        <AlertTriangle className="w-4 h-4 mr-2 text-red-500" />
                        <span>Connection lost</span>
                      </div>
                      <div className="text-xs text-muted-foreground mt-2">
                        Sent immediately via all channels
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-yellow-200">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg text-yellow-800 dark:text-yellow-200">⚠️ Warning Rules</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center">
                        <Volume2 className="w-4 h-4 mr-2 text-yellow-500" />
                        <span>Long backup duration</span>
                      </div>
                      <div className="flex items-center">
                        <Volume2 className="w-4 h-4 mr-2 text-yellow-500" />
                        <span>Storage 80% full</span>
                      </div>
                      <div className="flex items-center">
                        <Volume2 className="w-4 h-4 mr-2 text-yellow-500" />
                        <span>Unusual data size</span>
                      </div>
                      <div className="text-xs text-muted-foreground mt-2">
                        Sent daily via email
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-green-200">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg text-green-800 dark:text-green-200">ℹ️ Info Rules</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                        <span>Successful backups</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                        <span>Schedule changes</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                        <span>Monthly reports</span>
                      </div>
                      <div className="text-xs text-muted-foreground mt-2">
                        Sent weekly via email digest
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Testing */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-2 text-green-600" />
              Testing Your Notification Setup
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <p>Validate your notification configuration to ensure alerts work correctly when you need them most.</p>
              
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                <h4 className="font-semibold mb-3">🧪 Test Procedures:</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-medium mb-2">Success Tests</h5>
                    <ul className="space-y-1 text-sm">
                      <li>• Trigger test backup completion</li>
                      <li>• Verify notification delivery timing</li>
                      <li>• Check message formatting</li>
                      <li>• Confirm channel delivery</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium mb-2">Failure Tests</h5>
                    <ul className="space-y-1 text-sm">
                      <li>• Simulate backup failure</li>
                      <li>• Test escalation timing</li>
                      <li>• Verify critical alert delivery</li>
                      <li>• Check emergency contacts</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">✅ Validation Checklist:</h4>
                <div className="space-y-2 text-sm">
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded" />
                    <span>Email notifications delivered successfully</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded" />
                    <span>SMS alerts received on mobile devices</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded" />
                    <span>Slack messages appear in correct channels</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded" />
                    <span>Webhook payloads received by endpoints</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded" />
                    <span>Escalation policies trigger correctly</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded" />
                    <span>Quiet hours respected for non-critical alerts</span>
                  </label>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Best Practices */}
        <Card className="mb-8 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20">
          <CardHeader>
            <CardTitle>💡 Notification Best Practices</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">✅ Do's</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Test all notification channels regularly</li>
                  <li>• Use escalation policies for critical alerts</li>
                  <li>• Group similar notifications to reduce noise</li>
                  <li>• Set up quiet hours for non-critical alerts</li>
                  <li>• Document your notification procedures</li>
                  <li>• Train team members on alert acknowledgment</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">❌ Don'ts</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Don't send success notifications via SMS</li>
                  <li>• Don't ignore notification delivery failures</li>
                  <li>• Don't use the same channel for all alert types</li>
                  <li>• Don't forget to update contact information</li>
                  <li>• Don't over-complicate notification rules</li>
                  <li>• Don't skip testing failure scenarios</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Support */}
        <Card className="mt-8 border-orange-200 bg-orange-50 dark:bg-orange-900/20">
          <CardContent className="pt-6">
            <div className="flex items-start space-x-4">
              <div className="bg-orange-100 dark:bg-orange-900/50 p-2 rounded-full">
                <Bell className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <h3 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">
                  Need Help with Notification Setup?
                </h3>
                <p className="text-sm text-orange-700 dark:text-orange-300 mb-3">
                  Our support team can help you configure the perfect notification strategy for your organization's needs.
                </p>
                <div className="space-y-2 text-sm">
                  <div>📧 Email: notifications-support@pawthway.com</div>
                  <div>📞 Phone: 1-800-PAWTHWAY (US/CA)</div>
                  <div>💬 Live Chat: Available 24/7 in your dashboard</div>
                  <div>📅 Schedule: Free notification strategy consultation</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  );
}
