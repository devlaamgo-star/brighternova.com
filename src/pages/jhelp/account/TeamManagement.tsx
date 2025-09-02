import React from 'react';
import PageLayout from '../../../components/shared/PageLayout';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card';
import { Badge } from '../../../components/ui/badge';
import { Users, UserPlus, Shield, Crown, Settings, Mail, CheckCircle, AlertTriangle } from 'lucide-react';

export default function TeamManagement() {
  return (
    <PageLayout
      title="Team Management"
      description="Manage team members, roles, and permissions in your Pawthway organization. Add users, assign roles, and control access to backup resources."
    >
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            <Users className="w-4 h-4 mr-2" />
            Team Administration
          </Badge>
          <h1 className="text-4xl font-bold mb-6">Team Management</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Collaborate effectively by managing your team members, assigning appropriate roles, 
            and controlling access to backup resources and sensitive data.
          </p>
        </div>

        {/* Team Overview */}
        <Card className="mb-8 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Users className="w-5 h-5 mr-2 text-blue-600" />
              Team Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-4 text-center">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-blue-600">12</div>
                <div className="text-sm text-muted-foreground">Total Members</div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-green-600">3</div>
                <div className="text-sm text-muted-foreground">Administrators</div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-purple-600">7</div>
                <div className="text-sm text-muted-foreground">Operators</div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-orange-600">2</div>
                <div className="text-sm text-muted-foreground">Viewers</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Role Definitions */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Shield className="w-5 h-5 mr-2 text-purple-600" />
              User Roles & Permissions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <p>Understand the different user roles and their associated permissions within your organization.</p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="border-red-200 bg-red-50 dark:bg-red-900/20">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center text-red-800 dark:text-red-200">
                      <Crown className="w-5 h-5 mr-2" />
                      Administrator
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                        <span>Full system access</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                        <span>Manage team members</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                        <span>Billing management</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                        <span>Security settings</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                        <span>All backup operations</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-blue-200 bg-blue-50 dark:bg-blue-900/20">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center text-blue-800 dark:text-blue-200">
                      <Settings className="w-5 h-5 mr-2" />
                      Operator
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                        <span>Create/modify backups</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                        <span>Monitor backup status</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                        <span>Download backups</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                        <span>Configure notifications</span>
                      </div>
                      <div className="flex items-center opacity-50">
                        <AlertTriangle className="w-4 h-4 mr-2 text-gray-400" />
                        <span>No billing access</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-green-200 bg-green-50 dark:bg-green-900/20">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center text-green-800 dark:text-green-200">
                      <Users className="w-5 h-5 mr-2" />
                      Viewer
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                        <span>View backup status</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                        <span>Access reports</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                        <span>View team activity</span>
                      </div>
                      <div className="flex items-center opacity-50">
                        <AlertTriangle className="w-4 h-4 mr-2 text-gray-400" />
                        <span>No modification rights</span>
                      </div>
                      <div className="flex items-center opacity-50">
                        <AlertTriangle className="w-4 h-4 mr-2 text-gray-400" />
                        <span>No sensitive data access</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Current Team Members */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-2 text-blue-600" />
                Current Team Members
              </div>
              <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 text-sm flex items-center">
                <UserPlus className="w-4 h-4 mr-2" />
                Invite Member
              </button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-medium">
                    JS
                  </div>
                  <div>
                    <div className="font-medium">John Smith</div>
                    <div className="text-sm text-muted-foreground">john.smith@company.com</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Badge variant="destructive">Administrator</Badge>
                  <Badge variant="outline">Owner</Badge>
                  <button className="text-blue-600 hover:text-blue-800 text-sm">Edit</button>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-medium">
                    SM
                  </div>
                  <div>
                    <div className="font-medium">Sarah Miller</div>
                    <div className="text-sm text-muted-foreground">sarah.miller@company.com</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Badge variant="default">Operator</Badge>
                  <Badge variant="secondary">Active</Badge>
                  <button className="text-blue-600 hover:text-blue-800 text-sm">Edit</button>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white font-medium">
                    MJ
                  </div>
                  <div>
                    <div className="font-medium">Mike Johnson</div>
                    <div className="text-sm text-muted-foreground">mike.johnson@company.com</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Badge variant="outline">Viewer</Badge>
                  <Badge variant="secondary">Pending</Badge>
                  <button className="text-blue-600 hover:text-blue-800 text-sm">Edit</button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Adding Team Members */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <UserPlus className="w-5 h-5 mr-2 text-green-600" />
              Adding New Team Members
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <p>Invite new team members and assign appropriate roles based on their responsibilities.</p>
              
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                <h4 className="font-semibold mb-3">📧 Invitation Process</h4>
                <ol className="list-decimal list-inside space-y-1 text-sm">
                  <li>Click "Invite Member" button</li>
                  <li>Enter the user's email address</li>
                  <li>Select appropriate role (Administrator, Operator, or Viewer)</li>
                  <li>Choose accessible backup sources (optional)</li>
                  <li>Add a welcome message (optional)</li>
                  <li>Send invitation</li>
                </ol>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold mb-3">✅ Invitation Best Practices</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Start with Viewer role for new team members</li>
                    <li>• Use corporate email addresses only</li>
                    <li>• Limit Administrator roles to essential personnel</li>
                    <li>• Set up specific backup source access</li>
                    <li>• Include onboarding instructions in welcome message</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200">
                  <h4 className="font-semibold mb-3 text-yellow-800 dark:text-yellow-200">⚠️ Security Considerations</h4>
                  <ul className="space-y-1 text-sm text-yellow-700 dark:text-yellow-300">
                    <li>• Verify email addresses before sending invitations</li>
                    <li>• Enable two-factor authentication for all roles</li>
                    <li>• Regularly audit team member access</li>
                    <li>• Remove inactive users promptly</li>
                    <li>• Monitor team member activity logs</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Permission Management */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Shield className="w-5 h-5 mr-2 text-purple-600" />
              Advanced Permission Management
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <p>Configure granular permissions for team members to ensure appropriate access control.</p>
              
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-semibold mb-3">🔐 Granular Permissions</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2">Permission</th>
                        <th className="text-center py-2">Administrator</th>
                        <th className="text-center py-2">Operator</th>
                        <th className="text-center py-2">Viewer</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-2">Create backup jobs</td>
                        <td className="text-center py-2">✅</td>
                        <td className="text-center py-2">✅</td>
                        <td className="text-center py-2">❌</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">Delete backup jobs</td>
                        <td className="text-center py-2">✅</td>
                        <td className="text-center py-2">✅</td>
                        <td className="text-center py-2">❌</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">View backup logs</td>
                        <td className="text-center py-2">✅</td>
                        <td className="text-center py-2">✅</td>
                        <td className="text-center py-2">✅</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">Download backups</td>
                        <td className="text-center py-2">✅</td>
                        <td className="text-center py-2">✅</td>
                        <td className="text-center py-2">❌</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">Manage team</td>
                        <td className="text-center py-2">✅</td>
                        <td className="text-center py-2">❌</td>
                        <td className="text-center py-2">❌</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">Billing access</td>
                        <td className="text-center py-2">✅</td>
                        <td className="text-center py-2">❌</td>
                        <td className="text-center py-2">❌</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">🎯 Resource-Level Permissions</h4>
                <p className="text-sm mb-3">Control access to specific backup sources and destinations:</p>
                <ul className="space-y-1 text-sm">
                  <li>• Production database backups (Administrators only)</li>
                  <li>• Development environment backups (All roles)</li>
                  <li>• Financial data backups (Specific team members)</li>
                  <li>• Archive storage access (Administrators and designated operators)</li>
                  <li>• Compliance backups (Compliance team only)</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Team Activity */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-2 text-green-600" />
              Team Activity & Audit Trail
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <p>Monitor team member activities and maintain comprehensive audit trails for compliance.</p>
              
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-semibold mb-3">📋 Recent Team Activity</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between py-2 border-b border-gray-200 dark:border-gray-700">
                    <div>
                      <span className="font-medium">Sarah Miller</span>
                      <span className="text-muted-foreground"> created backup job "production-db-daily"</span>
                    </div>
                    <div className="text-xs text-muted-foreground">2 hours ago</div>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-gray-200 dark:border-gray-700">
                    <div>
                      <span className="font-medium">John Smith</span>
                      <span className="text-muted-foreground"> invited new team member</span>
                    </div>
                    <div className="text-xs text-muted-foreground">1 day ago</div>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-gray-200 dark:border-gray-700">
                    <div>
                      <span className="font-medium">Mike Johnson</span>
                      <span className="text-muted-foreground"> downloaded backup file</span>
                    </div>
                    <div className="text-xs text-muted-foreground">2 days ago</div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">🔍 Audit Features</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Complete activity logging</li>
                    <li>• IP address tracking</li>
                    <li>• Failed login attempt monitoring</li>
                    <li>• Permission change history</li>
                    <li>• Data access audit trails</li>
                  </ul>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">📊 Team Analytics</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• User engagement metrics</li>
                    <li>• Most active team members</li>
                    <li>• Resource usage by user</li>
                    <li>• Login frequency analysis</li>
                    <li>• Feature adoption rates</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Team Settings */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Settings className="w-5 h-5 mr-2 text-orange-600" />
              Team Settings & Policies
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <p>Configure organization-wide settings and security policies for your team.</p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold mb-3 text-orange-800 dark:text-orange-200">🔒 Security Policies</h4>
                  <div className="space-y-2 text-sm">
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" defaultChecked />
                      <span>Require two-factor authentication</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" defaultChecked />
                      <span>Enforce strong passwords</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span>Require email domain verification</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span>Enable session timeout (30 min)</span>
                    </label>
                  </div>
                </div>

                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold mb-3 text-purple-800 dark:text-purple-200">📧 Team Notifications</h4>
                  <div className="space-y-2 text-sm">
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" defaultChecked />
                      <span>New member notifications</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" defaultChecked />
                      <span>Role change alerts</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span>Weekly team activity digest</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span>Security event notifications</span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200">
                <h4 className="font-semibold mb-2">💡 Team Management Best Practices:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Regularly review team member access and permissions</li>
                  <li>• Use principle of least privilege when assigning roles</li>
                  <li>• Set up approval workflows for sensitive operations</li>
                  <li>• Maintain up-to-date contact information for all team members</li>
                  <li>• Establish clear escalation procedures for security incidents</li>
                  <li>• Document your organization's backup responsibilities</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Enterprise Features */}
        <Card className="mb-8 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20">
          <CardHeader>
            <CardTitle>🏢 Enterprise Team Features</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">🎯 Advanced Features</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Single Sign-On (SSO) integration</li>
                  <li>• Active Directory sync</li>
                  <li>• Custom role definitions</li>
                  <li>• Approval workflows</li>
                  <li>• Advanced audit reporting</li>
                  <li>• API access management</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">📞 Enterprise Support</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Dedicated customer success manager</li>
                  <li>• Priority technical support</li>
                  <li>• Custom onboarding assistance</li>
                  <li>• Quarterly business reviews</li>
                  <li>• 24/7 phone support</li>
                  <li>• White-glove migration services</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 text-center">
              <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700">
                Upgrade to Enterprise
              </button>
            </div>
          </CardContent>
        </Card>

        {/* Support Information */}
        <Card className="mt-8 border-orange-200 bg-orange-50 dark:bg-orange-900/20">
          <CardContent className="pt-6">
            <div className="flex items-start space-x-4">
              <div className="bg-orange-100 dark:bg-orange-900/50 p-2 rounded-full">
                <Users className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <h3 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">
                  Need Help with Team Management?
                </h3>
                <p className="text-sm text-orange-700 dark:text-orange-300 mb-3">
                  Our team management specialists can help you set up roles, permissions, and security policies.
                </p>
                <div className="space-y-2 text-sm">
                  <div>📧 Email: team-support@pawthway.com</div>
                  <div>📞 Phone: 1-800-PAWTHWAY (US/CA)</div>
                  <div>💬 Live Chat: Available 24/7 in your dashboard</div>
                  <div>👥 Team Setup: Free consultation available</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  );
}
