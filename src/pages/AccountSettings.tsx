import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import PageLayout from "@/components/shared/PageLayout";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Eye, EyeOff, Copy, Plus, Trash2, Key, User, Bell, Shield, CreditCard, Lock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function AccountSettings() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showApiKey, setShowApiKey] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(false);

  // Check authentication status (simulate checking for auth token/session)
  useEffect(() => {
    // In a real app, you would check for a valid auth token here
    const authToken = localStorage.getItem('auth_token');
    const isLoggedIn = authToken && authToken !== 'null';
    setIsAuthenticated(isLoggedIn);

    // Redirect to signup if not authenticated
    if (!isLoggedIn) {
      // Give user a moment to see the page before redirect
      const timer = setTimeout(() => {
        window.location.href = '/signup';
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  // Show authentication required message if not logged in
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <section className="py-20 lg:py-32">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="text-center max-w-2xl mx-auto">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Lock className="h-8 w-8 text-primary" />
                </div>
                <h1 className="text-3xl font-bold mb-4">Authentication Required</h1>
                <p className="text-xl text-muted-foreground mb-8">
                  You need to sign in to access your account settings. Create an account or sign in to continue.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild>
                    <Link to="/signup">
                      <User className="h-4 w-4 mr-2" />
                      Create Account
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link to="/signin">
                      Sign In
                    </Link>
                  </Button>
                </div>
                
                <p className="text-sm text-muted-foreground mt-6">
                  Redirecting to signup in a few seconds...
                </p>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  const apiKeys = [
    { id: "1", name: "Production Key", key: "pk_live_••••••••••••••••••••••••4567", created: "2024-01-15", lastUsed: "2024-01-20" },
    { id: "2", name: "Development Key", key: "pk_test_••••••••••••••••••••••••8901", created: "2024-01-10", lastUsed: "2024-01-19" },
  ];

  return (
    <PageLayout 
      title="Account Settings" 
      description="Manage your account preferences and security settings"
    >
      <div className="min-h-screen bg-background py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Account Settings</h1>
            <p className="text-muted-foreground">Manage your account preferences and security settings</p>
          </div>

          <Tabs defaultValue="profile" className="space-y-6">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="profile">
                <User className="h-4 w-4 mr-2" />
                Profile
              </TabsTrigger>
              <TabsTrigger value="api-keys">
                <Key className="h-4 w-4 mr-2" />
                API Keys
              </TabsTrigger>
              <TabsTrigger value="notifications">
                <Bell className="h-4 w-4 mr-2" />
                Notifications
              </TabsTrigger>
              <TabsTrigger value="security">
                <Shield className="h-4 w-4 mr-2" />
                Security
              </TabsTrigger>
              <TabsTrigger value="billing">
                <CreditCard className="h-4 w-4 mr-2" />
                Billing
              </TabsTrigger>
            </TabsList>

            <TabsContent value="profile" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Profile Information</CardTitle>
                  <CardDescription>Update your personal details and contact information</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" defaultValue="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" defaultValue="Doe" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" defaultValue="john.doe@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" defaultValue="Acme Inc." />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="timezone">Timezone</Label>
                    <Select defaultValue="utc">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="utc">UTC</SelectItem>
                        <SelectItem value="est">Eastern Time</SelectItem>
                        <SelectItem value="pst">Pacific Time</SelectItem>
                        <SelectItem value="cet">Central European Time</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button>Save Changes</Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="api-keys" className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <div>
                      <CardTitle>API Keys</CardTitle>
                      <CardDescription>Manage your API keys for accessing Novabuckups services</CardDescription>
                    </div>
                    <Button>
                      <Plus className="h-4 w-4 mr-2" />
                      Generate New Key
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {apiKeys.map((key) => (
                      <div key={key.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <h4 className="font-medium">{key.name}</h4>
                            <Badge variant="secondary">
                              {key.name.includes("Production") ? "Live" : "Test"}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-2">
                            <code className="text-sm bg-muted px-2 py-1 rounded">
                              {showApiKey ? key.key.replace("••••••••••••••••••••••••", "1234567890abcdef1234567890ab") : key.key}
                            </code>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => setShowApiKey(!showApiKey)}
                            >
                              {showApiKey ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Copy className="h-4 w-4" />
                            </Button>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Created: {key.created} • Last used: {key.lastUsed}
                          </p>
                        </div>
                        <Button variant="ghost" size="sm" className="text-destructive">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="notifications" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Notification Preferences</CardTitle>
                  <CardDescription>Choose how you want to be notified about important events</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <h4 className="text-sm font-medium">Email Notifications</h4>
                      <p className="text-sm text-muted-foreground">Receive updates via email</p>
                    </div>
                    <Switch checked={emailNotifications} onCheckedChange={setEmailNotifications} />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <h4 className="text-sm font-medium">SMS Notifications</h4>
                      <p className="text-sm text-muted-foreground">Receive critical alerts via SMS</p>
                    </div>
                    <Switch checked={smsNotifications} onCheckedChange={setSmsNotifications} />
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-sm font-medium">Notification Types</h4>
                    <div className="space-y-3">
                      {[
                        { name: "Backup Completed", description: "When backups finish successfully" },
                        { name: "Backup Failed", description: "When backups encounter errors" },
                        { name: "Storage Limit Warning", description: "When approaching storage limits" },
                        { name: "Security Alerts", description: "Important security notifications" },
                        { name: "Billing Updates", description: "Payment and billing notifications" },
                      ].map((item) => (
                        <div key={item.name} className="flex items-center justify-between">
                          <div className="space-y-1">
                            <h5 className="text-sm">{item.name}</h5>
                            <p className="text-xs text-muted-foreground">{item.description}</p>
                          </div>
                          <Switch defaultChecked />
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="security" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Security Settings</CardTitle>
                  <CardDescription>Manage your account security and authentication</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h4 className="text-sm font-medium">Change Password</h4>
                    <div className="space-y-2">
                      <Label htmlFor="currentPassword">Current Password</Label>
                      <Input id="currentPassword" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="newPassword">New Password</Label>
                      <Input id="newPassword" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">Confirm Password</Label>
                      <Input id="confirmPassword" type="password" />
                    </div>
                    <Button>Update Password</Button>
                  </div>

                  <div className="pt-6 border-t">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <h4 className="text-sm font-medium">Two-Factor Authentication</h4>
                        <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
                      </div>
                      <Button variant="outline">Enable 2FA</Button>
                    </div>
                  </div>

                  <div className="pt-6 border-t">
                    <div className="space-y-4">
                      <h4 className="text-sm font-medium">Active Sessions</h4>
                      <div className="space-y-3">
                        {[
                          { device: "Chrome on macOS", location: "San Francisco, CA", lastActive: "Current session" },
                          { device: "Safari on iPhone", location: "San Francisco, CA", lastActive: "2 hours ago" },
                        ].map((session, index) => (
                          <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                            <div>
                              <p className="text-sm font-medium">{session.device}</p>
                              <p className="text-xs text-muted-foreground">{session.location} • {session.lastActive}</p>
                            </div>
                            {session.lastActive !== "Current session" && (
                              <Button variant="ghost" size="sm" className="text-destructive">
                                Revoke
                              </Button>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="billing" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Billing & Usage</CardTitle>
                  <CardDescription>Manage your subscription and view usage details</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 border rounded-lg">
                      <h4 className="text-sm font-medium text-muted-foreground">Current Plan</h4>
                      <p className="text-2xl font-bold">Professional</p>
                      <p className="text-sm text-muted-foreground">$29/month</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h4 className="text-sm font-medium text-muted-foreground">Storage Used</h4>
                      <p className="text-2xl font-bold">1.2 TB</p>
                      <p className="text-sm text-muted-foreground">of 2 TB</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h4 className="text-sm font-medium text-muted-foreground">API Calls</h4>
                      <p className="text-2xl font-bold">8,450</p>
                      <p className="text-sm text-muted-foreground">this month</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-sm font-medium">Payment Method</h4>
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-5 bg-primary rounded flex items-center justify-center text-xs text-primary-foreground font-bold">
                          ••••
                        </div>
                        <div>
                          <p className="text-sm font-medium">•••• •••• •••• 4242</p>
                          <p className="text-xs text-muted-foreground">Expires 12/25</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">Update</Button>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button variant="outline">Download Invoice</Button>
                    <Button variant="outline">Change Plan</Button>
                    <Button variant="destructive">Cancel Subscription</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </PageLayout>
  );
}
