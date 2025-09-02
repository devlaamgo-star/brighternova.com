import React from 'react';
import PageLayout from '../../../components/shared/PageLayout';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card';
import { Badge } from '../../../components/ui/badge';
import { User, Settings, Shield, Mail, Phone, Camera, CheckCircle, AlertTriangle } from 'lucide-react';

export default function ManagingProfile() {
  return (
    <PageLayout
      title="Managing Your Profile"
      description="Learn how to manage your Pawthway account profile, update personal information, configure preferences, and customize your dashboard experience."
    >
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            <User className="w-4 h-4 mr-2" />
            Account Management
          </Badge>
          <h1 className="text-4xl font-bold mb-6">Managing Your Profile</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Customize your Pawthway account to match your preferences and ensure your profile information 
            stays current for optimal service delivery.
          </p>
        </div>

        {/* Profile Overview */}
        <Card className="mb-8 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
          <CardHeader>
            <CardTitle className="flex items-center">
              <User className="w-5 h-5 mr-2 text-blue-600" />
              Profile Information Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-4 text-center">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                <Camera className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                <h3 className="font-medium text-sm">Profile Photo</h3>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                <Mail className="w-6 h-6 mx-auto mb-2 text-green-600" />
                <h3 className="font-medium text-sm">Contact Info</h3>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                <Settings className="w-6 h-6 mx-auto mb-2 text-purple-600" />
                <h3 className="font-medium text-sm">Preferences</h3>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                <Shield className="w-6 h-6 mx-auto mb-2 text-orange-600" />
                <h3 className="font-medium text-sm">Security</h3>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Basic Profile Information */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <User className="w-5 h-5 mr-2 text-blue-600" />
              Basic Profile Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <p>Keep your basic profile information up to date for account security and service communications.</p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-semibold mb-3">Personal Information</h4>
                  <div className="space-y-3 text-sm">
                    <div>
                      <label className="block font-medium mb-1">Full Name</label>
                      <div className="bg-white dark:bg-gray-900 p-2 rounded border">John Smith</div>
                    </div>
                    <div>
                      <label className="block font-medium mb-1">Display Name</label>
                      <div className="bg-white dark:bg-gray-900 p-2 rounded border">J. Smith</div>
                    </div>
                    <div>
                      <label className="block font-medium mb-1">Job Title</label>
                      <div className="bg-white dark:bg-gray-900 p-2 rounded border">Senior DevOps Engineer</div>
                    </div>
                    <div>
                      <label className="block font-medium mb-1">Company</label>
                      <div className="bg-white dark:bg-gray-900 p-2 rounded border">Tech Solutions Inc.</div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-semibold mb-3">Contact Information</h4>
                  <div className="space-y-3 text-sm">
                    <div>
                      <label className="block font-medium mb-1">Email Address</label>
                      <div className="bg-white dark:bg-gray-900 p-2 rounded border">john.smith@company.com</div>
                    </div>
                    <div>
                      <label className="block font-medium mb-1">Phone Number</label>
                      <div className="bg-white dark:bg-gray-900 p-2 rounded border">+1-555-123-4567</div>
                    </div>
                    <div>
                      <label className="block font-medium mb-1">Time Zone</label>
                      <div className="bg-white dark:bg-gray-900 p-2 rounded border">Eastern Standard Time (EST)</div>
                    </div>
                    <div>
                      <label className="block font-medium mb-1">Language</label>
                      <div className="bg-white dark:bg-gray-900 p-2 rounded border">English (US)</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">📝 How to Update Your Information:</h4>
                <ol className="list-decimal list-inside space-y-1 text-sm">
                  <li>Navigate to Account Settings → Profile</li>
                  <li>Click "Edit Profile" button</li>
                  <li>Update the desired fields</li>
                  <li>Verify email changes with verification code</li>
                  <li>Save your changes</li>
                </ol>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Profile Photo Management */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Camera className="w-5 h-5 mr-2 text-green-600" />
              Profile Photo Management
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <p>Upload and manage your profile photo for better team recognition and personalized experience.</p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-green-800 dark:text-green-200">✅ Supported Formats</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• JPEG (.jpg, .jpeg)</li>
                    <li>• PNG (.png)</li>
                    <li>• WebP (.webp)</li>
                    <li>• Maximum size: 5MB</li>
                    <li>• Recommended: 400x400px</li>
                  </ul>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-blue-800 dark:text-blue-200">📷 Upload Process</h4>
                  <ol className="list-decimal list-inside space-y-1 text-sm">
                    <li>Click on profile photo area</li>
                    <li>Select "Upload New Photo"</li>
                    <li>Choose file from device</li>
                    <li>Crop and adjust as needed</li>
                    <li>Save changes</li>
                  </ol>
                </div>

                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-purple-800 dark:text-purple-200">🎨 Photo Guidelines</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Use professional headshot</li>
                    <li>• Ensure good lighting</li>
                    <li>• Face should be clearly visible</li>
                    <li>• Avoid inappropriate content</li>
                    <li>• Square aspect ratio preferred</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Dashboard Preferences */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Settings className="w-5 h-5 mr-2 text-purple-600" />
              Dashboard Preferences
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <p>Customize your dashboard layout and preferences for an optimized workflow experience.</p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-semibold mb-3">🎨 Interface Preferences</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center justify-between">
                      <span>Theme</span>
                      <select className="p-1 rounded border text-xs">
                        <option>Auto (System)</option>
                        <option>Light</option>
                        <option>Dark</option>
                      </select>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Dashboard Layout</span>
                      <select className="p-1 rounded border text-xs">
                        <option>Standard</option>
                        <option>Compact</option>
                        <option>Detailed</option>
                      </select>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Date Format</span>
                      <select className="p-1 rounded border text-xs">
                        <option>MM/DD/YYYY</option>
                        <option>DD/MM/YYYY</option>
                        <option>YYYY-MM-DD</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-semibold mb-3">📊 Data Display Options</h4>
                  <div className="space-y-2 text-sm">
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" defaultChecked />
                      <span>Show backup size in dashboard</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" defaultChecked />
                      <span>Display last backup time</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span>Show detailed backup logs</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span>Enable advanced metrics</span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">⚡ Quick Access Shortcuts:</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                  <div>Ctrl+B - New Backup</div>
                  <div>Ctrl+D - Dashboard</div>
                  <div>Ctrl+S - Settings</div>
                  <div>Ctrl+H - Help Center</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Notification Preferences */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Mail className="w-5 h-5 mr-2 text-green-600" />
              Communication Preferences
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <p>Control how and when you receive communications from Pawthway.</p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold mb-3 text-green-800 dark:text-green-200">📧 Email Preferences</h4>
                  <div className="space-y-2 text-sm">
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" defaultChecked />
                      <span>Service notifications</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" defaultChecked />
                      <span>Security alerts</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span>Product updates</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span>Marketing communications</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span>Educational content</span>
                    </label>
                  </div>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold mb-3 text-blue-800 dark:text-blue-200">📱 Mobile Preferences</h4>
                  <div className="space-y-2 text-sm">
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" defaultChecked />
                      <span>Critical backup alerts</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span>Daily backup summaries</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span>Weekly reports</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span>Maintenance notifications</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Account Activity */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-2 text-green-600" />
              Account Activity & History
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <p>Monitor your account activity and review recent changes for security and audit purposes.</p>
              
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-semibold mb-3">📋 Recent Activity</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between py-2 border-b border-gray-200 dark:border-gray-700">
                    <div>
                      <span className="font-medium">Profile updated</span>
                      <div className="text-xs text-muted-foreground">Phone number changed</div>
                    </div>
                    <div className="text-xs text-muted-foreground">2 hours ago</div>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-gray-200 dark:border-gray-700">
                    <div>
                      <span className="font-medium">Password changed</span>
                      <div className="text-xs text-muted-foreground">Security update</div>
                    </div>
                    <div className="text-xs text-muted-foreground">1 day ago</div>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-gray-200 dark:border-gray-700">
                    <div>
                      <span className="font-medium">Two-factor authentication enabled</span>
                      <div className="text-xs text-muted-foreground">Security enhancement</div>
                    </div>
                    <div className="text-xs text-muted-foreground">3 days ago</div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">🔍 Activity Monitoring Features:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Login history with IP addresses and devices</li>
                  <li>• Profile changes with timestamps</li>
                  <li>• Security events and authentication attempts</li>
                  <li>• API access and integration activities</li>
                  <li>• Backup job creation and modification history</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Privacy Settings */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Shield className="w-5 h-5 mr-2 text-purple-600" />
              Privacy & Data Settings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <p>Control how your personal data is used and shared within the Pawthway platform.</p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold mb-3 text-purple-800 dark:text-purple-200">🔒 Data Privacy Controls</h4>
                  <div className="space-y-2 text-sm">
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span>Share usage analytics</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" defaultChecked />
                      <span>Allow profile visibility to team members</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span>Include in customer testimonials</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span>Participate in user research</span>
                    </label>
                  </div>
                </div>

                <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold mb-3 text-orange-800 dark:text-orange-200">📊 Data Export & Deletion</h4>
                  <div className="space-y-3">
                    <button className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 text-sm">
                      Export My Data
                    </button>
                    <button className="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 text-sm">
                      Download Activity Report
                    </button>
                    <button className="w-full bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 text-sm">
                      Request Account Deletion
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200">
                <div className="flex items-start space-x-2">
                  <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-1">GDPR Rights</h4>
                    <p className="text-sm text-yellow-700 dark:text-yellow-300">
                      As a user, you have the right to access, rectify, erase, restrict processing, and port your personal data. 
                      Contact our privacy team for assistance with these requests.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Account Status */}
        <Card className="mb-8 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20">
          <CardHeader>
            <CardTitle>📈 Account Status & Statistics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">142</div>
                <div className="text-sm text-muted-foreground">Total Backups</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">1.2TB</div>
                <div className="text-sm text-muted-foreground">Data Protected</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">99.9%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">347</div>
                <div className="text-sm text-muted-foreground">Days Active</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Support Information */}
        <Card className="mt-8 border-orange-200 bg-orange-50 dark:bg-orange-900/20">
          <CardContent className="pt-6">
            <div className="flex items-start space-x-4">
              <div className="bg-orange-100 dark:bg-orange-900/50 p-2 rounded-full">
                <User className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <h3 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">
                  Need Help Managing Your Profile?
                </h3>
                <p className="text-sm text-orange-700 dark:text-orange-300 mb-3">
                  Our support team can assist with profile management, privacy settings, and account configuration.
                </p>
                <div className="space-y-2 text-sm">
                  <div>📧 Email: account-support@pawthway.com</div>
                  <div>📞 Phone: 1-800-PAWTHWAY (US/CA)</div>
                  <div>💬 Live Chat: Available 24/7 in your dashboard</div>
                  <div>📚 Knowledge Base: Self-service articles available</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  );
}
