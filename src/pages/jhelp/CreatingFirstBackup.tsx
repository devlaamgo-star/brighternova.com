import React from 'react';
import PageLayout from '../../components/shared/PageLayout';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { CheckCircle, Database, Settings, Play, AlertTriangle, ArrowRight, Copy, Eye, Download, Shield } from 'lucide-react';

export default function CreatingFirstBackup() {
  return (
    <PageLayout
      title="Creating Your First Backup"
      description="Step-by-step tutorial for creating your first backup job with Pawthway Backups Guardian. Learn best practices and configuration options."
    >
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            <Database className="w-4 h-4 mr-2" />
            Backup Creation Tutorial
          </Badge>
          <h1 className="text-4xl font-bold mb-6">Creating Your First Backup</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Learn how to create, configure, and execute your first backup job with Pawthway Backups Guardian.
            This comprehensive guide covers everything from source selection to backup verification.
          </p>
        </div>

        {/* Overview */}
        <Card className="mb-8 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Settings className="w-5 h-5 mr-2 text-blue-600" />
              Backup Creation Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                  <Database className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                  <h3 className="font-medium text-sm">Select Source</h3>
                </div>
              </div>
              <div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                  <Settings className="w-6 h-6 mx-auto mb-2 text-green-600" />
                  <h3 className="font-medium text-sm">Configure Job</h3>
                </div>
              </div>
              <div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                  <Play className="w-6 h-6 mx-auto mb-2 text-purple-600" />
                  <h3 className="font-medium text-sm">Execute Backup</h3>
                </div>
              </div>
              <div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                  <CheckCircle className="w-6 h-6 mx-auto mb-2 text-green-600" />
                  <h3 className="font-medium text-sm">Verify Results</h3>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Detailed Steps */}
        <div className="space-y-8">
          
          {/* Step 1: Access Backup Dashboard */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">1</span>
                Access Your Backup Dashboard
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p>Navigate to your backup management interface to begin creating your first backup job.</p>
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Navigation Steps:</h4>
                  <ol className="list-decimal list-inside space-y-1 text-sm">
                    <li>Log into your Pawthway account</li>
                    <li>Click "Backups" in the main navigation menu</li>
                    <li>Select "Create New Backup Job" button</li>
                  </ol>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <p className="text-sm">
                    <strong>Note:</strong> If this is your first backup, you'll see a welcome wizard that guides you through the initial setup process.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Step 2: Configure Data Source */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">2</span>
                Configure Your Data Source
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p>Select and configure the data source you want to backup.</p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-semibold mb-3">Database Sources</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-between">
                        <span>PostgreSQL</span>
                        <Badge variant="secondary">Popular</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>MySQL/MariaDB</span>
                        <Badge variant="secondary">Popular</Badge>
                      </div>
                      <div>MongoDB</div>
                      <div>Redis</div>
                      <div>SQLite</div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-semibold mb-3">File & Storage Sources</h4>
                    <div className="space-y-2 text-sm">
                      <div>Local File System</div>
                      <div>SFTP/SCP Servers</div>
                      <div>Network Shares (SMB/CIFS)</div>
                      <div>FTP/FTPS Servers</div>
                      <div>Cloud Storage APIs</div>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Configuration Example (PostgreSQL):</h4>
                  <div className="space-y-2 text-sm font-mono bg-white dark:bg-gray-900 p-3 rounded border">
                    <div>Host: localhost</div>
                    <div>Port: 5432</div>
                    <div>Database: production_db</div>
                    <div>Username: backup_user</div>
                    <div>Password: [secured]</div>
                  </div>
                </div>

                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200">
                  <div className="flex items-start space-x-2">
                    <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-1">Security Best Practice</h4>
                      <p className="text-sm text-yellow-700 dark:text-yellow-300">
                        Always use dedicated backup user accounts with read-only permissions rather than administrative credentials.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Step 3: Set Backup Destination */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">3</span>
                Set Backup Destination
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p>Choose where your backup files will be stored securely.</p>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <Card className="border-green-200 bg-green-50 dark:bg-green-900/20">
                    <CardContent className="pt-4">
                      <h4 className="font-semibold mb-2 text-green-800 dark:text-green-200">
                        🌐 Cloud Storage
                      </h4>
                      <ul className="space-y-1 text-sm">
                        <li>• AWS S3</li>
                        <li>• Google Cloud Storage</li>
                        <li>• Azure Blob Storage</li>
                        <li>• DigitalOcean Spaces</li>
                      </ul>
                      <Badge variant="outline" className="mt-2">Recommended</Badge>
                    </CardContent>
                  </Card>

                  <Card className="border-blue-200 bg-blue-50 dark:bg-blue-900/20">
                    <CardContent className="pt-4">
                      <h4 className="font-semibold mb-2 text-blue-800 dark:text-blue-200">
                        🖥️ Local Storage
                      </h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Local disk drives</li>
                        <li>• External USB drives</li>
                        <li>• Network attached storage</li>
                        <li>• NAS devices</li>
                      </ul>
                      <Badge variant="outline" className="mt-2">Fast Access</Badge>
                    </CardContent>
                  </Card>

                  <Card className="border-purple-200 bg-purple-50 dark:bg-purple-900/20">
                    <CardContent className="pt-4">
                      <h4 className="font-semibold mb-2 text-purple-800 dark:text-purple-200">
                        🔒 Secure Servers
                      </h4>
                      <ul className="space-y-1 text-sm">
                        <li>• SFTP servers</li>
                        <li>• SCP endpoints</li>
                        <li>• Encrypted FTP</li>
                        <li>• Private cloud storage</li>
                      </ul>
                      <Badge variant="outline" className="mt-2">High Security</Badge>
                    </CardContent>
                  </Card>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Destination Configuration:</h4>
                  <ol className="list-decimal list-inside space-y-1 text-sm">
                    <li>Choose your preferred storage type</li>
                    <li>Enter connection credentials and endpoint details</li>
                    <li>Set up folder structure and naming conventions</li>
                    <li>Test connection to verify accessibility</li>
                    <li>Configure encryption settings (if applicable)</li>
                  </ol>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Step 4: Configure Backup Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">4</span>
                Configure Backup Settings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <p>Set up your backup job parameters for optimal performance and reliability.</p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-semibold mb-3">Schedule Options</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-between">
                        <span>Real-time (Continuous)</span>
                        <Badge variant="outline">Enterprise</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Every 15 minutes</span>
                        <Badge variant="outline">Critical</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Hourly</span>
                        <Badge variant="outline">High-frequency</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Daily at 2:00 AM</span>
                        <Badge variant="outline">Recommended</Badge>
                      </div>
                      <div>Weekly (Sundays)</div>
                      <div>Custom cron expression</div>
                    </div>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-semibold mb-3">Backup Options</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                        <span>Compression enabled</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                        <span>Encryption at rest</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                        <span>Integrity verification</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 mr-2 text-blue-500" />
                        <span>Incremental backups</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 mr-2 text-purple-500" />
                        <span>Retention policy</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">💡 Recommended Settings for First Backup:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• <strong>Schedule:</strong> Daily at 2:00 AM (low traffic hours)</li>
                    <li>• <strong>Type:</strong> Full backup initially, then incremental</li>
                    <li>• <strong>Compression:</strong> Enabled (reduces storage costs)</li>
                    <li>• <strong>Encryption:</strong> AES-256 (industry standard)</li>
                    <li>• <strong>Retention:</strong> Keep 30 daily, 12 weekly, 12 monthly</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Step 5: Configure Notifications */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">5</span>
                Set Up Backup Notifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p>Configure alerts to stay informed about your backup job status.</p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-green-800 dark:text-green-200">✅ Success Notifications</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Backup completion confirmations</li>
                      <li>• Weekly summary reports</li>
                      <li>• Monthly storage usage reports</li>
                    </ul>
                  </div>
                  
                  <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-red-800 dark:text-red-200">🚨 Error Notifications</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Failed backup alerts (immediate)</li>
                      <li>• Connection timeout warnings</li>
                      <li>• Storage capacity warnings</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Notification Channels:</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                    <div>📧 Email</div>
                    <div>📱 SMS</div>
                    <div>💬 Slack</div>
                    <div>📞 Webhook</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Step 6: Execute First Backup */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">6</span>
                Execute Your First Backup
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p>Run your backup job and monitor its progress in real-time.</p>
                
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Execution Options:</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <h5 className="font-medium">Run Now (Test)</h5>
                        <p className="text-sm text-muted-foreground">Execute immediately for testing</p>
                      </div>
                      <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700">
                        <Play className="w-4 h-4 inline mr-1" />
                        Run Now
                      </button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h5 className="font-medium">Schedule Only</h5>
                        <p className="text-sm text-muted-foreground">Save job to run on schedule</p>
                      </div>
                      <button className="bg-gray-600 text-white px-4 py-2 rounded text-sm hover:bg-gray-700">
                        <Settings className="w-4 h-4 inline mr-1" />
                        Schedule
                      </button>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Monitor Progress:</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                      Real-time progress indicators
                    </div>
                    <div className="flex items-center">
                      <Eye className="w-4 h-4 mr-2 text-blue-500" />
                      Live log streaming
                    </div>
                    <div className="flex items-center">
                      <Copy className="w-4 h-4 mr-2 text-purple-500" />
                      Data transfer statistics
                    </div>
                    <div className="flex items-center">
                      <Download className="w-4 h-4 mr-2 text-orange-500" />
                      Estimated completion time
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Step 7: Verify Backup */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">7</span>
                Verify Backup Completion
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p>Ensure your backup completed successfully and data integrity is maintained.</p>
                
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">✅ Verification Checklist:</h4>
                  <div className="space-y-2 text-sm">
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span>Backup job completed without errors</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span>All expected files/data were backed up</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span>Backup files are accessible in destination</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span>File sizes and checksums match expectations</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span>Notification alerts were received</span>
                    </label>
                  </div>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Quick Verification Steps:</h4>
                  <ol className="list-decimal list-inside space-y-1 text-sm">
                    <li>Check the backup job status in your dashboard</li>
                    <li>Review the backup log for any warnings or errors</li>
                    <li>Verify backup files exist in your destination storage</li>
                    <li>Confirm backup size matches expected data volume</li>
                    <li>Test file accessibility and download a sample file</li>
                  </ol>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Troubleshooting */}
        <Card className="mt-8 border-orange-200 bg-orange-50 dark:bg-orange-900/20">
          <CardHeader>
            <CardTitle className="flex items-center">
              <AlertTriangle className="w-5 h-5 mr-2 text-orange-600" />
              Common Issues & Solutions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Connection Issues</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Verify credentials and permissions</li>
                    <li>• Check network connectivity</li>
                    <li>• Confirm firewall settings</li>
                    <li>• Test with minimal configuration first</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Performance Issues</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Enable compression for large datasets</li>
                    <li>• Schedule during off-peak hours</li>
                    <li>• Use incremental backups after initial full backup</li>
                    <li>• Configure parallel processing if supported</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-4 rounded border">
                <p className="text-sm">
                  <strong>Need Additional Help?</strong> Our technical support team is available 24/7 to assist with backup configuration. 
                  Contact us at support@pawthway.com or through live chat in your dashboard.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Next Steps */}
        <Card className="mt-8 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20">
          <CardHeader>
            <CardTitle>🎉 Congratulations! Your First Backup is Complete</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p>You've successfully created your first backup job. Here's what you can do next:</p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <Shield className="w-8 h-8 mx-auto mb-2 text-green-600" />
                  <h4 className="font-semibold mb-1">Set Up More Sources</h4>
                  <p className="text-sm text-muted-foreground">Add additional databases and file systems</p>
                </div>
                <div className="text-center">
                  <Database className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                  <h4 className="font-semibold mb-1">Learn Backup Types</h4>
                  <p className="text-sm text-muted-foreground">Understand different backup strategies</p>
                </div>
                <div className="text-center">
                  <CheckCircle className="w-8 h-8 mx-auto mb-2 text-purple-600" />
                  <h4 className="font-semibold mb-1">Configure Monitoring</h4>
                  <p className="text-sm text-muted-foreground">Set up advanced alerting and monitoring</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  );
}
