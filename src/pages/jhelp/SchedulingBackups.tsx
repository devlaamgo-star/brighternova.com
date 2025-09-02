import { useState } from "react";
import PageLayout from "../../components/shared/PageLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Alert, AlertDescription } from "../../components/ui/alert";
import { Button } from "../../components/ui/button";
import { Clock, Calendar, PlayCircle, PauseCircle, Settings, AlertTriangle, CheckCircle, RefreshCw, Zap } from "lucide-react";

const SchedulingBackups = () => {
  const [scheduleType, setScheduleType] = useState("daily");

  return (
    <PageLayout
      title="Scheduling Backups"
      description="Automate your backup processes with flexible scheduling options"
    >
      <div className="container mx-auto px-4 py-8">
        {/* Scheduling Overview */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-6 w-6 text-blue-600" />
              Backup Scheduling Overview
            </CardTitle>
            <CardDescription>
              Configure automated backup schedules to ensure your data is always protected
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 border rounded-lg">
                <Calendar className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <h3 className="font-semibold">5 Active Schedules</h3>
                <p className="text-sm text-gray-600">Running automatically</p>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <h3 className="font-semibold">Last Backup</h3>
                <p className="text-sm text-gray-600">2 hours ago</p>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <Zap className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
                <h3 className="font-semibold">Next Backup</h3>
                <p className="text-sm text-gray-600">In 22 hours</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Schedule Types */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <RefreshCw className="h-6 w-6 text-blue-600" />
              Schedule Types
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div 
                  className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                    scheduleType === "daily" ? "border-blue-500 bg-blue-50" : "border-gray-200"
                  }`}
                  onClick={() => setScheduleType("daily")}
                >
                  <h3 className="font-semibold mb-2">Daily Backups</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Run backups every day at a specified time. Best for frequently changing data.
                  </p>
                  <Badge variant="default">Most Popular</Badge>
                </div>
                <div 
                  className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                    scheduleType === "weekly" ? "border-blue-500 bg-blue-50" : "border-gray-200"
                  }`}
                  onClick={() => setScheduleType("weekly")}
                >
                  <h3 className="font-semibold mb-2">Weekly Backups</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Run backups once per week on a chosen day. Suitable for stable data sets.
                  </p>
                  <Badge variant="secondary">Balanced</Badge>
                </div>
                <div 
                  className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                    scheduleType === "monthly" ? "border-blue-500 bg-blue-50" : "border-gray-200"
                  }`}
                  onClick={() => setScheduleType("monthly")}
                >
                  <h3 className="font-semibold mb-2">Monthly Backups</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Run backups once per month. Good for archival and compliance purposes.
                  </p>
                  <Badge variant="outline">Archive</Badge>
                </div>
              </div>
              <div className="space-y-4">
                <div 
                  className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                    scheduleType === "hourly" ? "border-blue-500 bg-blue-50" : "border-gray-200"
                  }`}
                  onClick={() => setScheduleType("hourly")}
                >
                  <h3 className="font-semibold mb-2">Hourly Backups</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Run backups every hour. Critical for high-value, rapidly changing data.
                  </p>
                  <Badge variant="destructive">High Frequency</Badge>
                </div>
                <div 
                  className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                    scheduleType === "custom" ? "border-blue-500 bg-blue-50" : "border-gray-200"
                  }`}
                  onClick={() => setScheduleType("custom")}
                >
                  <h3 className="font-semibold mb-2">Custom Schedule</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Define your own schedule using cron expressions or interval settings.
                  </p>
                  <Badge variant="outline">Advanced</Badge>
                </div>
                <div 
                  className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                    scheduleType === "realtime" ? "border-blue-500 bg-blue-50" : "border-gray-200"
                  }`}
                  onClick={() => setScheduleType("realtime")}
                >
                  <h3 className="font-semibold mb-2">Real-time Sync</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Continuous backup as data changes. Maximum protection with minimal data loss.
                  </p>
                  <Badge variant="destructive">Premium</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Current Schedules */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-6 w-6 text-blue-600" />
              Current Backup Schedules
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div>
                    <div className="font-medium">Database Production Backup</div>
                    <div className="text-sm text-gray-600">Daily at 2:00 AM UTC</div>
                    <div className="text-xs text-gray-500">PostgreSQL Database • Full Backup</div>
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
                    <div className="font-medium">File Storage Backup</div>
                    <div className="text-sm text-gray-600">Weekly on Sundays at 1:00 AM UTC</div>
                    <div className="text-xs text-gray-500">AWS S3 Bucket • Incremental Backup</div>
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
                    <div className="font-medium">Development Environment</div>
                    <div className="text-sm text-gray-600">Daily at 6:00 PM UTC</div>
                    <div className="text-xs text-gray-500">MongoDB • Differential Backup</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">Paused</Badge>
                  <Button size="sm" variant="outline">
                    <PlayCircle className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <Button>Create New Schedule</Button>
            </div>
          </CardContent>
        </Card>

        {/* Schedule Configuration */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-6 w-6 text-blue-600" />
              Schedule Configuration Guide
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Step-by-Step Setup</h3>
              <ol className="space-y-4">
                <li className="flex gap-4">
                  <span className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-medium flex-shrink-0">1</span>
                  <div>
                    <div className="font-medium">Select Data Source</div>
                    <div className="text-sm text-gray-600">Choose the database, files, or application you want to backup</div>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-medium flex-shrink-0">2</span>
                  <div>
                    <div className="font-medium">Choose Schedule Type</div>
                    <div className="text-sm text-gray-600">Select from predefined schedules or create a custom cron expression</div>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-medium flex-shrink-0">3</span>
                  <div>
                    <div className="font-medium">Set Time and Timezone</div>
                    <div className="text-sm text-gray-600">Specify when backups should run and in which timezone</div>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-medium flex-shrink-0">4</span>
                  <div>
                    <div className="font-medium">Configure Backup Type</div>
                    <div className="text-sm text-gray-600">Choose between full, incremental, or differential backups</div>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-medium flex-shrink-0">5</span>
                  <div>
                    <div className="font-medium">Set Notifications</div>
                    <div className="text-sm text-gray-600">Configure alerts for successful backups, failures, and warnings</div>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-medium flex-shrink-0">6</span>
                  <div>
                    <div className="font-medium">Test and Activate</div>
                    <div className="text-sm text-gray-600">Run a test backup and enable the schedule</div>
                  </div>
                </li>
              </ol>
            </div>
          </CardContent>
        </Card>

        {/* Advanced Scheduling Options */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Advanced Scheduling Options</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Custom Cron Expressions</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="font-mono text-sm mb-2">0 2 * * *</div>
                <div className="text-sm text-gray-600">Runs daily at 2:00 AM</div>
              </div>
              <div className="mt-4">
                <h4 className="font-medium mb-2">Common Examples:</h4>
                <ul className="space-y-2 text-sm">
                  <li><code className="bg-gray-100 px-2 py-1 rounded">0 */6 * * *</code> - Every 6 hours</li>
                  <li><code className="bg-gray-100 px-2 py-1 rounded">0 2 * * 0</code> - Weekly on Sunday at 2:00 AM</li>
                  <li><code className="bg-gray-100 px-2 py-1 rounded">0 3 1 * *</code> - Monthly on the 1st at 3:00 AM</li>
                  <li><code className="bg-gray-100 px-2 py-1 rounded">0 1 * * 1-5</code> - Weekdays only at 1:00 AM</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Conditional Scheduling</h3>
              <div className="space-y-3">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2">Resource-Based Triggers</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Run backup when database size increases by 10%</li>
                    <li>• Trigger backup after 1000 new records</li>
                    <li>• Schedule backup when disk usage exceeds threshold</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2">Event-Based Triggers</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Backup after application deployment</li>
                    <li>• Run backup on database schema changes</li>
                    <li>• Trigger backup on file system modifications</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Schedule Management */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Schedule Management</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Managing Your Schedules</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2 flex items-center gap-2">
                    <PlayCircle className="h-4 w-4 text-green-600" />
                    Start/Stop Schedules
                  </h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Pause schedules temporarily or stop them permanently when needed.
                  </p>
                  <Button size="sm" variant="outline">Manage Schedules</Button>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2 flex items-center gap-2">
                    <Settings className="h-4 w-4 text-blue-600" />
                    Modify Schedules
                  </h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Update timing, backup types, or destinations for existing schedules.
                  </p>
                  <Button size="sm" variant="outline">Edit Schedules</Button>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Schedule Conflicts</h3>
              <Alert>
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription>
                  Pawthway automatically detects and resolves schedule conflicts. When multiple backups are scheduled at the same time, they are queued and executed sequentially to prevent resource conflicts.
                </AlertDescription>
              </Alert>
            </div>
          </CardContent>
        </Card>

        {/* Backup Windows and Maintenance */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Backup Windows & Maintenance</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Backup Windows</h3>
              <p className="text-gray-600 mb-4">
                Define time periods when backups are allowed to run, preventing interference with peak usage hours.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2">Production Window</h4>
                  <div className="text-sm text-gray-600">
                    <div>Weekdays: 11:00 PM - 5:00 AM</div>
                    <div>Weekends: 10:00 PM - 6:00 AM</div>
                  </div>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2">Development Window</h4>
                  <div className="text-sm text-gray-600">
                    <div>All days: 6:00 PM - 8:00 AM</div>
                    <div>No restrictions on weekends</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Maintenance Scheduling</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Schedule maintenance windows for backup infrastructure updates</li>
                <li>• Automatic rescheduling of backups during maintenance periods</li>
                <li>• Email notifications 24 hours before scheduled maintenance</li>
                <li>• Emergency override options for critical backup operations</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Monitoring and Alerts */}
        <Card>
          <CardHeader>
            <CardTitle>Schedule Monitoring</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Performance Metrics</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 border rounded-lg">
                  <div className="text-2xl font-bold text-green-600 mb-1">98.5%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 mb-1">15min</div>
                  <div className="text-sm text-gray-600">Avg Duration</div>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <div className="text-2xl font-bold text-purple-600 mb-1">2.3GB</div>
                  <div className="text-sm text-gray-600">Avg Backup Size</div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Alert Configuration</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <span className="text-sm">Backup failure notifications</span>
                  <Badge variant="default">Enabled</Badge>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <span className="text-sm">Schedule deviation alerts</span>
                  <Badge variant="default">Enabled</Badge>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <span className="text-sm">Performance degradation warnings</span>
                  <Badge variant="secondary">Disabled</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Help and Support */}
        <div className="mt-8 p-6 bg-gray-50 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Need Help with Scheduling?</h3>
          <p className="text-gray-600 mb-4">
            Our support team can help you optimize your backup schedules for your specific use case.
          </p>
          <div className="flex gap-4">
            <Button>Contact Support</Button>
            <Button variant="outline">View Documentation</Button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default SchedulingBackups;
