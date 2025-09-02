import React from 'react';
import PageLayout from '../../components/shared/PageLayout';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Database, HardDrive, Clock, Zap, Shield, FileText, CheckCircle, AlertTriangle, TrendingUp } from 'lucide-react';

export default function UnderstandingBackupTypes() {
  return (
    <PageLayout
      title="Understanding Backup Types"
      description="Learn about different backup strategies, including full, incremental, and differential backups. Understand when and how to use each type effectively."
    >
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            <Database className="w-4 h-4 mr-2" />
            Backup Strategy Guide
          </Badge>
          <h1 className="text-4xl font-bold mb-6">Understanding Backup Types</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Master the fundamentals of backup strategies. Learn when to use full, incremental, and differential backups 
            to optimize storage efficiency and recovery time objectives.
          </p>
        </div>

        {/* Backup Types Overview */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="border-blue-200 bg-blue-50 dark:bg-blue-900/20">
            <CardHeader>
              <CardTitle className="flex items-center text-blue-800 dark:text-blue-200">
                <HardDrive className="w-5 h-5 mr-2" />
                Full Backup
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-3">Complete copy of all selected data, creating a standalone backup that can restore everything independently.</p>
              <div className="space-y-2">
                <Badge variant="outline" className="text-xs">Most Reliable</Badge>
                <Badge variant="outline" className="text-xs">Largest Size</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-green-50 dark:bg-green-900/20">
            <CardHeader>
              <CardTitle className="flex items-center text-green-800 dark:text-green-200">
                <TrendingUp className="w-5 h-5 mr-2" />
                Incremental Backup
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-3">Backs up only data that has changed since the last backup (full or incremental), minimizing storage and time.</p>
              <div className="space-y-2">
                <Badge variant="outline" className="text-xs">Most Efficient</Badge>
                <Badge variant="outline" className="text-xs">Fastest</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="border-purple-200 bg-purple-50 dark:bg-purple-900/20">
            <CardHeader>
              <CardTitle className="flex items-center text-purple-800 dark:text-purple-200">
                <Clock className="w-5 h-5 mr-2" />
                Differential Backup
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-3">Backs up all changes since the last full backup, providing a balance between storage efficiency and recovery simplicity.</p>
              <div className="space-y-2">
                <Badge variant="outline" className="text-xs">Balanced</Badge>
                <Badge variant="outline" className="text-xs">Moderate Size</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Comparison */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <FileText className="w-5 h-5 mr-2 text-blue-600" />
              Backup Types Comparison
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-2">Backup Type</th>
                    <th className="text-left py-3 px-2">Storage Space</th>
                    <th className="text-left py-3 px-2">Backup Time</th>
                    <th className="text-left py-3 px-2">Recovery Time</th>
                    <th className="text-left py-3 px-2">Dependencies</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b bg-blue-50 dark:bg-blue-900/20">
                    <td className="py-3 px-2 font-medium">Full Backup</td>
                    <td className="py-3 px-2">
                      <Badge variant="destructive" className="text-xs">Highest</Badge>
                    </td>
                    <td className="py-3 px-2">
                      <Badge variant="destructive" className="text-xs">Longest</Badge>
                    </td>
                    <td className="py-3 px-2">
                      <Badge variant="default" className="text-xs">Fastest</Badge>
                    </td>
                    <td className="py-3 px-2">
                      <Badge variant="default" className="text-xs">None</Badge>
                    </td>
                  </tr>
                  <tr className="border-b bg-green-50 dark:bg-green-900/20">
                    <td className="py-3 px-2 font-medium">Incremental</td>
                    <td className="py-3 px-2">
                      <Badge variant="default" className="text-xs">Lowest</Badge>
                    </td>
                    <td className="py-3 px-2">
                      <Badge variant="default" className="text-xs">Fastest</Badge>
                    </td>
                    <td className="py-3 px-2">
                      <Badge variant="secondary" className="text-xs">Variable</Badge>
                    </td>
                    <td className="py-3 px-2">
                      <Badge variant="secondary" className="text-xs">Chain Required</Badge>
                    </td>
                  </tr>
                  <tr className="border-b bg-purple-50 dark:bg-purple-900/20">
                    <td className="py-3 px-2 font-medium">Differential</td>
                    <td className="py-3 px-2">
                      <Badge variant="secondary" className="text-xs">Medium</Badge>
                    </td>
                    <td className="py-3 px-2">
                      <Badge variant="secondary" className="text-xs">Medium</Badge>
                    </td>
                    <td className="py-3 px-2">
                      <Badge variant="default" className="text-xs">Fast</Badge>
                    </td>
                    <td className="py-3 px-2">
                      <Badge variant="secondary" className="text-xs">Last Full</Badge>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Full Backup Details */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <HardDrive className="w-5 h-5 mr-2 text-blue-600" />
              Full Backup Deep Dive
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <p>A full backup creates a complete copy of all selected data, regardless of when it was last changed.</p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-green-800 dark:text-green-200">✅ Advantages</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Complete standalone backup</li>
                    <li>• Fastest recovery time</li>
                    <li>• No dependency on other backups</li>
                    <li>• Simplest to manage and restore</li>
                    <li>• Best for disaster recovery scenarios</li>
                  </ul>
                </div>
                
                <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-red-800 dark:text-red-200">⚠️ Disadvantages</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Requires most storage space</li>
                    <li>• Takes longest time to complete</li>
                    <li>• Uses most network bandwidth</li>
                    <li>• Higher resource consumption</li>
                    <li>• May impact system performance</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">🎯 Best Use Cases:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Initial backup setup</li>
                  <li>• Monthly or quarterly archive backups</li>
                  <li>• Before major system changes</li>
                  <li>• Compliance and audit requirements</li>
                  <li>• Disaster recovery baseline</li>
                </ul>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">📊 Example Schedule:</h4>
                <div className="text-sm">
                  <div className="font-mono bg-white dark:bg-gray-900 p-2 rounded border">
                    Weekly: Full backup every Sunday at 2:00 AM<br/>
                    Storage: ~100GB per full backup<br/>
                    Duration: 2-4 hours depending on data size
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Incremental Backup Details */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <TrendingUp className="w-5 h-5 mr-2 text-green-600" />
              Incremental Backup Deep Dive
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <p>Incremental backups save only the data that has changed since the last backup of any type (full or incremental).</p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-green-800 dark:text-green-200">✅ Advantages</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Minimal storage requirements</li>
                    <li>• Fastest backup completion</li>
                    <li>• Lowest network bandwidth usage</li>
                    <li>• Minimal system impact</li>
                    <li>• Ideal for frequent backups</li>
                  </ul>
                </div>
                
                <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-red-800 dark:text-red-200">⚠️ Disadvantages</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Complex restore process</li>
                    <li>• Requires full backup chain</li>
                    <li>• Longer recovery time</li>
                    <li>• Chain integrity critical</li>
                    <li>• More backup management needed</li>
                  </ul>
                </div>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">🎯 Best Use Cases:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Daily or hourly backups</li>
                  <li>• Large databases with small daily changes</li>
                  <li>• Limited storage or bandwidth environments</li>
                  <li>• Continuous data protection strategies</li>
                  <li>• Cost-sensitive backup operations</li>
                </ul>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">📊 Example Schedule:</h4>
                <div className="text-sm">
                  <div className="font-mono bg-white dark:bg-gray-900 p-2 rounded border">
                    Sunday: Full backup (100GB)<br/>
                    Mon-Sat: Incremental backups (~2-5GB each)<br/>
                    Total weekly: ~115-130GB vs 700GB for all full backups
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Differential Backup Details */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Clock className="w-5 h-5 mr-2 text-purple-600" />
              Differential Backup Deep Dive
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <p>Differential backups save all data that has changed since the last full backup, creating cumulative incremental backups.</p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-green-800 dark:text-green-200">✅ Advantages</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Faster restore than incremental</li>
                    <li>• Only needs full + latest differential</li>
                    <li>• Good storage efficiency</li>
                    <li>• Simpler than incremental chains</li>
                    <li>• Balance of speed and space</li>
                  </ul>
                </div>
                
                <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-red-800 dark:text-red-200">⚠️ Disadvantages</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Backup size grows over time</li>
                    <li>• Slower than incremental backups</li>
                    <li>• Duplicates data across differentials</li>
                    <li>• Still requires full backup dependency</li>
                    <li>• More complex than full backups</li>
                  </ul>
                </div>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">🎯 Best Use Cases:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Medium-frequency backups (daily/bi-daily)</li>
                  <li>• Moderate data change rates</li>
                  <li>• When restore speed is important</li>
                  <li>• Limited backup windows</li>
                  <li>• Hybrid backup strategies</li>
                </ul>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">📊 Example Schedule:</h4>
                <div className="text-sm">
                  <div className="font-mono bg-white dark:bg-gray-900 p-2 rounded border">
                    Sunday: Full backup (100GB)<br/>
                    Monday: Differential (5GB)<br/>
                    Tuesday: Differential (10GB)<br/>
                    Wednesday: Differential (15GB)...
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Strategy Recommendations */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Shield className="w-5 h-5 mr-2 text-green-600" />
              Recommended Backup Strategies
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <Card className="border-green-200">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg text-green-800 dark:text-green-200">
                      🏢 Enterprise Strategy
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-sm">
                      <div>
                        <strong>Schedule:</strong>
                        <ul className="mt-1 space-y-1">
                          <li>• Full: Weekly (Sunday)</li>
                          <li>• Incremental: Daily</li>
                          <li>• Archive: Monthly</li>
                        </ul>
                      </div>
                      <div>
                        <strong>Best for:</strong> Large organizations, critical data, compliance requirements
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-blue-200">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg text-blue-800 dark:text-blue-200">
                      🏪 Small Business Strategy
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-sm">
                      <div>
                        <strong>Schedule:</strong>
                        <ul className="mt-1 space-y-1">
                          <li>• Full: Weekly</li>
                          <li>• Differential: Daily</li>
                          <li>• Verification: Weekly</li>
                        </ul>
                      </div>
                      <div>
                        <strong>Best for:</strong> SMBs, balanced cost/protection, moderate data volumes
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-purple-200">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg text-purple-800 dark:text-purple-200">
                      👤 Personal Strategy
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-sm">
                      <div>
                        <strong>Schedule:</strong>
                        <ul className="mt-1 space-y-1">
                          <li>• Full: Bi-weekly</li>
                          <li>• Incremental: Daily</li>
                          <li>• Cloud sync: Real-time</li>
                        </ul>
                      </div>
                      <div>
                        <strong>Best for:</strong> Personal use, limited storage, simple management
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Advanced Backup Concepts */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Zap className="w-5 h-5 mr-2 text-yellow-600" />
              Advanced Backup Concepts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold mb-3">🔄 Synthetic Full Backups</h4>
                  <p className="text-sm mb-2">
                    Creates a full backup by combining a previous full backup with subsequent incremental backups, 
                    without re-reading the original data source.
                  </p>
                  <div className="bg-white dark:bg-gray-800 p-2 rounded text-xs">
                    <strong>Benefits:</strong> Reduces backup window, minimizes source system impact
                  </div>
                </div>

                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold mb-3">📦 Block-Level Backups</h4>
                  <p className="text-sm mb-2">
                    Backs up only the changed blocks of data rather than entire files, 
                    providing extremely efficient incremental backups.
                  </p>
                  <div className="bg-white dark:bg-gray-800 p-2 rounded text-xs">
                    <strong>Benefits:</strong> Minimal storage, faster backups, granular recovery
                  </div>
                </div>

                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold mb-3">🕐 Continuous Data Protection</h4>
                  <p className="text-sm mb-2">
                    Real-time or near real-time backup of changes, providing minimal data loss 
                    with point-in-time recovery capabilities.
                  </p>
                  <div className="bg-white dark:bg-gray-800 p-2 rounded text-xs">
                    <strong>Benefits:</strong> Minimal RPO, frequent recovery points, automated
                  </div>
                </div>

                <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold mb-3">🎯 Application-Aware Backups</h4>
                  <p className="text-sm mb-2">
                    Backups that understand specific application formats and requirements, 
                    ensuring consistent and recoverable application state.
                  </p>
                  <div className="bg-white dark:bg-gray-800 p-2 rounded text-xs">
                    <strong>Benefits:</strong> Application consistency, faster recovery, integrity
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Decision Matrix */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-2 text-green-600" />
              Choosing the Right Backup Type
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              
              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200">
                <h4 className="font-semibold mb-3 text-yellow-800 dark:text-yellow-200">
                  🤔 Decision Framework
                </h4>
                <div className="space-y-3 text-sm">
                  <div>
                    <strong>Choose Full Backup when:</strong>
                    <ul className="mt-1 ml-4 space-y-1">
                      <li>• You need simple backup management</li>
                      <li>• Storage cost is not a primary concern</li>
                      <li>• Fast recovery is critical</li>
                      <li>• Compliance requires complete copies</li>
                    </ul>
                  </div>
                  
                  <div>
                    <strong>Choose Incremental Backup when:</strong>
                    <ul className="mt-1 ml-4 space-y-1">
                      <li>• Storage efficiency is paramount</li>
                      <li>• You have limited backup windows</li>
                      <li>• Data changes are relatively small</li>
                      <li>• You can manage backup chains</li>
                    </ul>
                  </div>
                  
                  <div>
                    <strong>Choose Differential Backup when:</strong>
                    <ul className="mt-1 ml-4 space-y-1">
                      <li>• You want balanced efficiency and simplicity</li>
                      <li>• Moderate data change rates</li>
                      <li>• Restore speed is important</li>
                      <li>• You prefer simpler recovery processes</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">💡 Pro Tips for Backup Strategy:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Start with a hybrid approach: Weekly full + daily incremental</li>
                  <li>• Monitor backup sizes and adjust strategy as data grows</li>
                  <li>• Test restore procedures regularly with different backup types</li>
                  <li>• Consider your Recovery Time Objective (RTO) and Recovery Point Objective (RPO)</li>
                  <li>• Document your backup strategy and train your team</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Implementation Guide */}
        <Card className="mt-8 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20">
          <CardHeader>
            <CardTitle>🚀 Implementing Your Backup Strategy</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p>Ready to implement your backup strategy? Here's your next steps:</p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Implementation Checklist</h4>
                  <div className="space-y-2 text-sm">
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span>Assess your data change patterns</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span>Determine storage and bandwidth constraints</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span>Define RTO and RPO requirements</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span>Select appropriate backup types</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span>Configure backup schedule</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span>Test backup and restore procedures</span>
                    </label>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">Quick Start Actions</h4>
                  <div className="space-y-3">
                    <button className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 text-sm">
                      Create Your First Backup Job
                    </button>
                    <button className="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 text-sm">
                      Configure Backup Schedule
                    </button>
                    <button className="w-full bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 text-sm">
                      Set Up Notifications
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Support Information */}
        <Card className="mt-8 border-orange-200 bg-orange-50 dark:bg-orange-900/20">
          <CardContent className="pt-6">
            <div className="flex items-start space-x-4">
              <div className="bg-orange-100 dark:bg-orange-900/50 p-2 rounded-full">
                <AlertTriangle className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <h3 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">
                  Need Help Choosing Your Strategy?
                </h3>
                <p className="text-sm text-orange-700 dark:text-orange-300 mb-3">
                  Our backup specialists can help you design the optimal backup strategy for your specific needs and requirements.
                </p>
                <div className="space-y-2 text-sm">
                  <div>📧 Email: backup-consulting@pawthway.com</div>
                  <div>📞 Phone: 1-800-PAWTHWAY (US/CA)</div>
                  <div>💬 Live Chat: Available 24/7 in your dashboard</div>
                  <div>📅 Schedule: Free consultation call</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  );
}
