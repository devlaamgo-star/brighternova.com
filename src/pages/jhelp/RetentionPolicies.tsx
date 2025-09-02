import { useState } from "react";
import PageLayout from "../../components/shared/PageLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Alert, AlertDescription } from "../../components/ui/alert";
import { Button } from "../../components/ui/button";
import { Archive, Calendar, Database, HardDrive, Trash2, Shield, Clock, FileText, Settings, AlertTriangle } from "lucide-react";

const RetentionPolicies = () => {
  const [selectedPolicy, setSelectedPolicy] = useState("standard");

  return (
    <PageLayout
      title="Retention Policies"
      description="Manage how long your backup data is stored and automatically archived"
    >
      <div className="container mx-auto px-4 py-8">
        {/* Retention Overview */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Archive className="h-6 w-6 text-blue-600" />
              Retention Policy Overview
            </CardTitle>
            <CardDescription>
              Control backup storage duration, compliance requirements, and cost optimization
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 border rounded-lg">
                <Database className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <h3 className="font-semibold">8 Active Policies</h3>
                <p className="text-sm text-gray-600">Across all data sources</p>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <HardDrive className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <h3 className="font-semibold">2.8 TB</h3>
                <p className="text-sm text-gray-600">Total stored data</p>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <Trash2 className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                <h3 className="font-semibold">450 GB</h3>
                <p className="text-sm text-gray-600">Auto-deleted this month</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Policy Types */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-6 w-6 text-blue-600" />
              Retention Policy Types
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div 
                  className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                    selectedPolicy === "standard" ? "border-blue-500 bg-blue-50" : "border-gray-200"
                  }`}
                  onClick={() => setSelectedPolicy("standard")}
                >
                  <h3 className="font-semibold mb-2">Standard Retention</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Keep daily backups for 30 days, weekly for 12 weeks, monthly for 12 months
                  </p>
                  <Badge variant="default">Recommended</Badge>
                </div>
                <div 
                  className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                    selectedPolicy === "compliance" ? "border-blue-500 bg-blue-50" : "border-gray-200"
                  }`}
                  onClick={() => setSelectedPolicy("compliance")}
                >
                  <h3 className="font-semibold mb-2">Compliance Retention</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Extended retention periods to meet regulatory requirements (5-7 years)
                  </p>
                  <Badge variant="destructive">Regulatory</Badge>
                </div>
                <div 
                  className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                    selectedPolicy === "minimal" ? "border-blue-500 bg-blue-50" : "border-gray-200"
                  }`}
                  onClick={() => setSelectedPolicy("minimal")}
                >
                  <h3 className="font-semibold mb-2">Minimal Retention</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Keep only recent backups (7-30 days) to minimize storage costs
                  </p>
                  <Badge variant="outline">Cost-Effective</Badge>
                </div>
              </div>
              <div className="space-y-4">
                <div 
                  className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                    selectedPolicy === "custom" ? "border-blue-500 bg-blue-50" : "border-gray-200"
                  }`}
                  onClick={() => setSelectedPolicy("custom")}
                >
                  <h3 className="font-semibold mb-2">Custom Policy</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Define your own retention rules based on backup type, age, and importance
                  </p>
                  <Badge variant="outline">Advanced</Badge>
                </div>
                <div 
                  className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                    selectedPolicy === "tiered" ? "border-blue-500 bg-blue-50" : "border-gray-200"
                  }`}
                  onClick={() => setSelectedPolicy("tiered")}
                >
                  <h3 className="font-semibold mb-2">Tiered Storage</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Automatically move older backups to cheaper storage tiers over time
                  </p>
                  <Badge variant="secondary">Optimized</Badge>
                </div>
                <div 
                  className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                    selectedPolicy === "legal-hold" ? "border-blue-500 bg-blue-50" : "border-gray-200"
                  }`}
                  onClick={() => setSelectedPolicy("legal-hold")}
                >
                  <h3 className="font-semibold mb-2">Legal Hold</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Indefinite retention for legal discovery and litigation purposes
                  </p>
                  <Badge variant="destructive">Legal</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Current Retention Policies */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-6 w-6 text-blue-600" />
              Current Retention Policies
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h4 className="font-medium">Production Database Policy</h4>
                    <p className="text-sm text-gray-600">PostgreSQL Production Server</p>
                  </div>
                  <Badge variant="default">Active</Badge>
                </div>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <div className="font-medium text-gray-700">Daily Backups</div>
                    <div className="text-gray-600">Keep for 30 days</div>
                  </div>
                  <div>
                    <div className="font-medium text-gray-700">Weekly Backups</div>
                    <div className="text-gray-600">Keep for 12 weeks</div>
                  </div>
                  <div>
                    <div className="font-medium text-gray-700">Monthly Backups</div>
                    <div className="text-gray-600">Keep for 24 months</div>
                  </div>
                </div>
              </div>

              <div className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h4 className="font-medium">File Storage Policy</h4>
                    <p className="text-sm text-gray-600">Document and Media Files</p>
                  </div>
                  <Badge variant="default">Active</Badge>
                </div>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <div className="font-medium text-gray-700">Daily Backups</div>
                    <div className="text-gray-600">Keep for 7 days</div>
                  </div>
                  <div>
                    <div className="font-medium text-gray-700">Weekly Backups</div>
                    <div className="text-gray-600">Keep for 8 weeks</div>
                  </div>
                  <div>
                    <div className="font-medium text-gray-700">Monthly Backups</div>
                    <div className="text-gray-600">Keep for 12 months</div>
                  </div>
                </div>
              </div>

              <div className="p-4 border rounded-lg bg-yellow-50">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h4 className="font-medium">Compliance Archive Policy</h4>
                    <p className="text-sm text-gray-600">Financial Records (SOX Compliance)</p>
                  </div>
                  <Badge variant="destructive">Legal Hold</Badge>
                </div>
                <div className="text-sm">
                  <div className="font-medium text-gray-700">All Backups</div>
                  <div className="text-gray-600">Keep for 7 years (2,555 days)</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Storage Tiers */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <HardDrive className="h-6 w-6 text-blue-600" />
              Storage Tiers & Cost Optimization
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Automated Tiering</h3>
              <p className="text-gray-600 mb-4">
                Pawthway automatically moves backups between storage tiers to optimize costs while maintaining access requirements.
              </p>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <div className="font-medium text-green-700">Hot Storage (0-30 days)</div>
                    <div className="text-sm text-gray-600">Instant access • $0.025/GB/month</div>
                  </div>
                  <Badge variant="default">Fast Access</Badge>
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <div className="font-medium text-blue-700">Warm Storage (31-90 days)</div>
                    <div className="text-sm text-gray-600">1-hour retrieval • $0.015/GB/month</div>
                  </div>
                  <Badge variant="secondary">Standard</Badge>
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <div className="font-medium text-purple-700">Cold Storage (91+ days)</div>
                    <div className="text-sm text-gray-600">12-hour retrieval • $0.005/GB/month</div>
                  </div>
                  <Badge variant="outline">Archive</Badge>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Cost Analysis</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2">Current Month</h4>
                  <div className="text-2xl font-bold text-blue-600 mb-1">$127.50</div>
                  <div className="text-sm text-gray-600">2.8 TB across all tiers</div>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2">Projected Savings</h4>
                  <div className="text-2xl font-bold text-green-600 mb-1">$45.20</div>
                  <div className="text-sm text-gray-600">Monthly with current policies</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Policy Configuration */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-6 w-6 text-blue-600" />
              Configuring Retention Policies
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Policy Creation Steps</h3>
              <ol className="space-y-4">
                <li className="flex gap-4">
                  <span className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-medium flex-shrink-0">1</span>
                  <div>
                    <div className="font-medium">Define Retention Rules</div>
                    <div className="text-sm text-gray-600">Set how long different types of backups should be kept</div>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-medium flex-shrink-0">2</span>
                  <div>
                    <div className="font-medium">Configure Storage Tiers</div>
                    <div className="text-sm text-gray-600">Choose when to move backups to cheaper storage options</div>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-medium flex-shrink-0">3</span>
                  <div>
                    <div className="font-medium">Set Compliance Requirements</div>
                    <div className="text-sm text-gray-600">Define legal and regulatory retention minimums</div>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-medium flex-shrink-0">4</span>
                  <div>
                    <div className="font-medium">Apply to Data Sources</div>
                    <div className="text-sm text-gray-600">Assign policies to specific databases, files, or applications</div>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-medium flex-shrink-0">5</span>
                  <div>
                    <div className="font-medium">Monitor and Adjust</div>
                    <div className="text-sm text-gray-600">Review policy effectiveness and make adjustments as needed</div>
                  </div>
                </li>
              </ol>
            </div>
          </CardContent>
        </Card>

        {/* Retention Rules Examples */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Common Retention Scenarios</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2 flex items-center gap-2">
                    <Shield className="h-4 w-4 text-green-600" />
                    Development Environment
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Daily backups: 7 days</li>
                    <li>• Weekly backups: 4 weeks</li>
                    <li>• Monthly backups: 3 months</li>
                    <li>• Focus on recent recovery options</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2 flex items-center gap-2">
                    <Database className="h-4 w-4 text-blue-600" />
                    Production Database
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Daily backups: 30 days</li>
                    <li>• Weekly backups: 12 weeks</li>
                    <li>• Monthly backups: 24 months</li>
                    <li>• Annual archive: 7 years</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2 flex items-center gap-2">
                    <Archive className="h-4 w-4 text-purple-600" />
                    Document Archive
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Weekly backups: 8 weeks</li>
                    <li>• Monthly backups: 12 months</li>
                    <li>• Quarterly backups: 10 years</li>
                    <li>• Permanent archive available</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2 flex items-center gap-2">
                    <FileText className="h-4 w-4 text-orange-600" />
                    Financial Records
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Daily backups: 90 days</li>
                    <li>• Monthly backups: 7 years</li>
                    <li>• Annual backups: Permanent</li>
                    <li>• SOX/GDPR compliant retention</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Automated Cleanup */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trash2 className="h-6 w-6 text-blue-600" />
              Automated Cleanup
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Cleanup Process</h3>
              <p className="text-gray-600 mb-4">
                Pawthway automatically removes backups that exceed your retention policy timelines, freeing up storage space and reducing costs.
              </p>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <Clock className="h-4 w-4 text-blue-600" />
                    <span className="text-sm">Daily cleanup scan</span>
                  </div>
                  <Badge variant="default">3:00 AM UTC</Badge>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <Shield className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Safety buffer period</span>
                  </div>
                  <Badge variant="secondary">24 hours</Badge>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <FileText className="h-4 w-4 text-purple-600" />
                    <span className="text-sm">Cleanup notifications</span>
                  </div>
                  <Badge variant="default">Enabled</Badge>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Manual Cleanup Options</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2">Emergency Cleanup</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Immediately remove oldest backups when storage limits are reached.
                  </p>
                  <Button size="sm" variant="outline">Run Emergency Cleanup</Button>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2">Selective Cleanup</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Choose specific backup sets or date ranges to remove manually.
                  </p>
                  <Button size="sm" variant="outline">Select Backups</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Compliance and Legal */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Compliance & Legal Considerations</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Regulatory Compliance</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2">GDPR Compliance</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Right to erasure support</li>
                    <li>• Data minimization principles</li>
                    <li>• Audit trail maintenance</li>
                    <li>• Geographic data residency</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2">SOX Compliance</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 7-year financial record retention</li>
                    <li>• Immutable backup storage</li>
                    <li>• Access logging and monitoring</li>
                    <li>• Regular compliance audits</li>
                  </ul>
                </div>
              </div>
            </div>

            <Alert>
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                <strong>Important:</strong> Consult with your legal team before configuring retention policies for regulated data. Some industries require specific retention periods that override standard policies.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Policy Monitoring */}
        <Card>
          <CardHeader>
            <CardTitle>Policy Monitoring & Reporting</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Retention Reports</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2">Storage Usage Report</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Monthly breakdown of storage usage by data source and retention tier.
                  </p>
                  <Button size="sm" variant="outline">Generate Report</Button>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2">Compliance Audit Report</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Detailed compliance status and retention policy adherence documentation.
                  </p>
                  <Button size="sm" variant="outline">Download Audit</Button>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Policy Alerts</h3>
              <div className="space-y-3">
                <div className="p-3 border-l-4 border-blue-500 bg-blue-50">
                  <div className="text-sm font-medium">Policy Update</div>
                  <div className="text-xs text-gray-600">Production policy updated to extend monthly retention to 36 months</div>
                  <div className="text-xs text-gray-500">2 hours ago</div>
                </div>
                <div className="p-3 border-l-4 border-green-500 bg-green-50">
                  <div className="text-sm font-medium">Cleanup Completed</div>
                  <div className="text-xs text-gray-600">Removed 127 GB of expired backups across 3 data sources</div>
                  <div className="text-xs text-gray-500">Yesterday at 3:15 AM</div>
                </div>
                <div className="p-3 border-l-4 border-yellow-500 bg-yellow-50">
                  <div className="text-sm font-medium">Storage Tier Migration</div>
                  <div className="text-xs text-gray-600">850 GB moved from warm to cold storage (cost savings: $8.50/month)</div>
                  <div className="text-xs text-gray-500">3 days ago</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Help and Support */}
        <div className="mt-8 p-6 bg-gray-50 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Need Help with Retention Policies?</h3>
          <p className="text-gray-600 mb-4">
            Our compliance experts can help you design retention policies that meet your regulatory requirements while optimizing costs.
          </p>
          <div className="flex gap-4">
            <Button>Contact Compliance Team</Button>
            <Button variant="outline">View Policy Templates</Button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default RetentionPolicies;
