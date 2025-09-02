import { useState } from "react";
import PageLayout from "../../../components/shared/PageLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../components/ui/card";
import { Badge } from "../../../components/ui/badge";
import { Alert, AlertDescription } from "../../../components/ui/alert";
import { Button } from "../../../components/ui/button";
import { Shield, Key, Smartphone, AlertTriangle, CheckCircle, Eye, Settings, Lock, UserCheck, Clock } from "lucide-react";

const AccountSecurity = () => {
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);

  return (
    <PageLayout
      title="Account Security"
      description="Comprehensive security measures to protect your account and backup data"
    >
      <div className="container mx-auto px-4 py-8">
        {/* Security Overview */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-blue-600" />
              Security Overview
            </CardTitle>
            <CardDescription>
              Your account security status and recommendations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Strong Password</span>
                  </div>
                  <Badge variant="default">Active</Badge>
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <Smartphone className="h-5 w-5 text-blue-600" />
                    <span>Two-Factor Authentication</span>
                  </div>
                  <Badge variant={twoFactorEnabled ? "default" : "secondary"}>
                    {twoFactorEnabled ? "Enabled" : "Disabled"}
                  </Badge>
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <Key className="h-5 w-5 text-blue-600" />
                    <span>API Keys</span>
                  </div>
                  <Badge variant="default">2 Active</Badge>
                </div>
              </div>
              <div>
                <Alert>
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription>
                    Security Score: 85/100. Consider enabling two-factor authentication to improve your security posture.
                  </AlertDescription>
                </Alert>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Password Security */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lock className="h-6 w-6 text-blue-600" />
              Password Security
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Password Requirements</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  Minimum 12 characters in length
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  Contains uppercase and lowercase letters
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  Includes numbers and special characters
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  Not found in common password databases
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Best Practices</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Use a unique password for your Pawthway account</li>
                <li>• Consider using a password manager</li>
                <li>• Change your password every 90 days</li>
                <li>• Never share your password with others</li>
              </ul>
            </div>
            <Button variant="outline">Change Password</Button>
          </CardContent>
        </Card>

        {/* Two-Factor Authentication */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Smartphone className="h-6 w-6 text-blue-600" />
              Two-Factor Authentication (2FA)
            </CardTitle>
            <CardDescription>
              Add an extra layer of security to your account
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Available Methods</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2">Authenticator App</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Use Google Authenticator, Authy, or similar apps to generate time-based codes.
                  </p>
                  <Badge variant="default">Recommended</Badge>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2">SMS Text Messages</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Receive verification codes via text message to your mobile phone.
                  </p>
                  <Badge variant="secondary">Available</Badge>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Setup Instructions</h3>
              <ol className="space-y-3 text-sm">
                <li className="flex gap-3">
                  <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-xs font-medium">1</span>
                  <span>Download an authenticator app (Google Authenticator, Authy, etc.)</span>
                </li>
                <li className="flex gap-3">
                  <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-xs font-medium">2</span>
                  <span>Click "Enable 2FA" and scan the QR code with your app</span>
                </li>
                <li className="flex gap-3">
                  <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-xs font-medium">3</span>
                  <span>Enter the 6-digit code from your app to verify setup</span>
                </li>
                <li className="flex gap-3">
                  <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-xs font-medium">4</span>
                  <span>Save your backup codes in a secure location</span>
                </li>
              </ol>
            </div>
            <Button 
              onClick={() => setTwoFactorEnabled(!twoFactorEnabled)}
              variant={twoFactorEnabled ? "destructive" : "default"}
            >
              {twoFactorEnabled ? "Disable 2FA" : "Enable 2FA"}
            </Button>
          </CardContent>
        </Card>

        {/* API Security */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Key className="h-6 w-6 text-blue-600" />
              API Key Management
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Active API Keys</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <div className="font-medium">Production API Key</div>
                    <div className="text-sm text-gray-600">pk_prod_•••••••••••••••••</div>
                    <div className="text-xs text-gray-500">Created: Jan 15, 2025 • Last used: Today</div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline">
                      <Settings className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <div className="font-medium">Development API Key</div>
                    <div className="text-sm text-gray-600">pk_dev_•••••••••••••••••</div>
                    <div className="text-xs text-gray-500">Created: Dec 20, 2024 • Last used: 3 days ago</div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline">
                      <Settings className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">API Security Best Practices</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Rotate API keys regularly (every 90 days)</li>
                <li>• Use different keys for different environments</li>
                <li>• Restrict API key permissions to minimum required scope</li>
                <li>• Monitor API key usage for unusual activity</li>
                <li>• Never commit API keys to version control</li>
              </ul>
            </div>
            <Button variant="outline">Generate New API Key</Button>
          </CardContent>
        </Card>

        {/* Access Control */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <UserCheck className="h-6 w-6 text-blue-600" />
              Access Control
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Login Sessions</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <div className="font-medium">Current Session</div>
                    <div className="text-sm text-gray-600">Chrome on macOS • 192.168.1.100</div>
                    <div className="text-xs text-gray-500">Started: Today at 9:15 AM</div>
                  </div>
                  <Badge variant="default">Active</Badge>
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <div className="font-medium">Mobile Session</div>
                    <div className="text-sm text-gray-600">Safari on iOS • 192.168.1.155</div>
                    <div className="text-xs text-gray-500">Started: Yesterday at 2:30 PM</div>
                  </div>
                  <Button size="sm" variant="outline">Revoke</Button>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Security Policies</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <span className="text-sm">Session timeout</span>
                  <span className="text-sm font-medium">24 hours</span>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <span className="text-sm">Failed login attempts</span>
                  <span className="text-sm font-medium">5 attempts</span>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <span className="text-sm">Account lockout duration</span>
                  <span className="text-sm font-medium">30 minutes</span>
                </div>
              </div>
            </div>
            <Button variant="outline">Revoke All Sessions</Button>
          </CardContent>
        </Card>

        {/* Activity Monitoring */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-6 w-6 text-blue-600" />
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 border-l-4 border-green-500 bg-green-50">
                <div>
                  <div className="text-sm font-medium">Successful login</div>
                  <div className="text-xs text-gray-600">Chrome on macOS • 192.168.1.100</div>
                </div>
                <div className="text-xs text-gray-500">2 hours ago</div>
              </div>
              <div className="flex items-center justify-between p-3 border-l-4 border-blue-500 bg-blue-50">
                <div>
                  <div className="text-sm font-medium">Password changed</div>
                  <div className="text-xs text-gray-600">Account settings updated</div>
                </div>
                <div className="text-xs text-gray-500">3 days ago</div>
              </div>
              <div className="flex items-center justify-between p-3 border-l-4 border-yellow-500 bg-yellow-50">
                <div>
                  <div className="text-sm font-medium">Failed login attempt</div>
                  <div className="text-xs text-gray-600">Chrome on Windows • 203.0.113.45</div>
                </div>
                <div className="text-xs text-gray-500">1 week ago</div>
              </div>
            </div>
            <div className="mt-4">
              <Button variant="outline" size="sm">View Full Activity Log</Button>
            </div>
          </CardContent>
        </Card>

        {/* Security Recommendations */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-6 w-6 text-orange-600" />
              Security Recommendations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Alert>
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription>
                  <strong>High Priority:</strong> Enable two-factor authentication to significantly improve your account security.
                </AlertDescription>
              </Alert>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2">Regular Security Audit</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Review your account security settings monthly and update as needed.
                  </p>
                  <Button size="sm" variant="outline">Schedule Reminder</Button>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2">Backup Recovery Codes</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Store your backup codes in a secure location separate from your device.
                  </p>
                  <Button size="sm" variant="outline">Download Codes</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Security Contact */}
        <div className="mt-8 p-6 bg-gray-50 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Need Security Assistance?</h3>
          <p className="text-gray-600 mb-4">
            If you suspect unauthorized access or have security concerns, contact our security team immediately.
          </p>
          <div className="flex gap-4">
            <Button>Contact Security Team</Button>
            <Button variant="outline">Report Security Issue</Button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default AccountSecurity;
