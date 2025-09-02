import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../../components/shared/PageLayout';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { CheckCircle, Clock, Database, Shield, ArrowRight } from 'lucide-react';

export default function QuickStartGuide() {
  return (
    <PageLayout
      title="Quick Start Guide"
      description="Get started with Pawthway Backups Guardian in minutes. Follow our step-by-step guide to set up your first backup and secure your data."
    >
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            <Clock className="w-4 h-4 mr-2" />
            5-10 minutes setup
          </Badge>
          <h1 className="text-4xl font-bold mb-6">Quick Start Guide</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Welcome to Pawthway Backups Guardian! This guide will help you get your first backup 
            running in just a few simple steps.
          </p>
        </div>

        {/* Prerequisites */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-2 text-green-600" />
              Before You Begin
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Account Requirements</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                    Active Pawthway account
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                    Valid email address
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                    Administrator access to your systems
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Technical Requirements</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                    Stable internet connection
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                    Compatible storage destination
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                    Backup source access credentials
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Step-by-step Guide */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold mb-6">Step-by-Step Setup</h2>

          {/* Step 1 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">1</span>
                Create Your Account
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p>Start your backup journey by creating your Pawthway account.</p>
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Action Steps:</h4>
                  <ol className="list-decimal list-inside space-y-1 text-sm">
                    <li>Visit the sign-up page and enter your details</li>
                    <li>Verify your email address</li>
                    <li>Complete your profile setup</li>
                    <li>Choose your initial plan</li>
                  </ol>
                </div>
                <div className="flex items-center text-sm text-blue-600">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  <span>Estimated time: 2-3 minutes</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Step 2 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">2</span>
                Configure Your First Data Source
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p>Connect your first data source to begin protecting your information.</p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <Database className="w-6 h-6 mb-2 text-blue-600" />
                    <h4 className="font-semibold mb-1">Databases</h4>
                    <p className="text-sm text-muted-foreground">PostgreSQL, MySQL, MongoDB</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <Shield className="w-6 h-6 mb-2 text-green-600" />
                    <h4 className="font-semibold mb-1">Cloud Storage</h4>
                    <p className="text-sm text-muted-foreground">AWS S3, Google Cloud, Azure</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <CheckCircle className="w-6 h-6 mb-2 text-purple-600" />
                    <h4 className="font-semibold mb-1">File Systems</h4>
                    <p className="text-sm text-muted-foreground">Local, SFTP, Network shares</p>
                  </div>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Configuration Steps:</h4>
                  <ol className="list-decimal list-inside space-y-1 text-sm">
                    <li>Navigate to "Data Sources" in your dashboard</li>
                    <li>Click "Add New Source"</li>
                    <li>Select your source type from the available options</li>
                    <li>Enter connection credentials and test the connection</li>
                    <li>Save your configuration</li>
                  </ol>
                </div>
                <div className="flex items-center text-sm text-blue-600">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  <span>Estimated time: 3-5 minutes</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Step 3 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">3</span>
                Set Up Your Backup Destination
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p>Choose where your backups will be securely stored.</p>
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Popular Destinations:</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>• AWS S3</div>
                    <div>• Google Cloud Storage</div>
                    <div>• Microsoft Azure Blob</div>
                    <div>• DigitalOcean Spaces</div>
                    <div>• Local Storage</div>
                    <div>• SFTP/SCP Servers</div>
                  </div>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">💡 Pro Tip:</h4>
                  <p className="text-sm">For maximum security, we recommend using encrypted cloud storage with geographic distribution.</p>
                </div>
                <div className="flex items-center text-sm text-blue-600">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  <span>Estimated time: 2-3 minutes</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Step 4 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">4</span>
                Create Your First Backup Job
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p>Configure when and how your backups will run automatically.</p>
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Backup Schedule Options:</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                      <strong>Hourly:</strong> For critical, high-change data
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-blue-500" />
                      <strong>Daily:</strong> Most common choice for business data
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-purple-500" />
                      <strong>Weekly:</strong> For archival or stable data
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-orange-500" />
                      <strong>Custom:</strong> Define your own schedule
                    </div>
                  </div>
                </div>
                <div className="flex items-center text-sm text-blue-600">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  <span>Estimated time: 1-2 minutes</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Step 5 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">5</span>
                Test & Verify
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p>Run your first backup and verify everything is working correctly.</p>
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">✅ Verification Checklist:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>□ Backup job starts successfully</li>
                    <li>□ Data is transferred to destination</li>
                    <li>□ Backup completes without errors</li>
                    <li>□ Notification alerts are received</li>
                    <li>□ Backup files are accessible in destination</li>
                  </ul>
                </div>
                <div className="flex items-center text-sm text-green-600">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  <span>Your backup system is now active!</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Next Steps */}
        <Card className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
          <CardHeader>
            <CardTitle>🚀 Next Steps</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Explore Advanced Features</h3>
                <ul className="space-y-1 text-sm">
                  <li>• Set up backup retention policies</li>
                  <li>• Configure encryption settings</li>
                  <li>• Enable backup monitoring</li>
                  <li>• Set up disaster recovery plans</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Get Support</h3>
                <ul className="space-y-1 text-sm">
                  <li>• Read our detailed documentation</li>
                  <li>• Join our community forum</li>
                  <li>• Contact technical support</li>
                  <li>• Schedule a consultation call</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Links */}
        <div className="mt-8 grid md:grid-cols-3 gap-4">
          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <Database className="w-8 h-8 mx-auto mb-3 text-blue-600" />
            <h3 className="font-semibold mb-2">Creating Your First Backup</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Detailed walkthrough of backup creation process
            </p>
            <Link 
              to="/jhelp/creating-first-backup" 
              className="text-blue-600 hover:text-blue-800 font-medium text-sm inline-block transition-colors"
            >
              Read Guide →
            </Link>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <Shield className="w-8 h-8 mx-auto mb-3 text-green-600" />
            <h3 className="font-semibold mb-2">Understanding Backup Types</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Learn about different backup strategies and when to use them
            </p>
            <Link 
              to="/jhelp/understanding-backup-types" 
              className="text-blue-600 hover:text-blue-800 font-medium text-sm inline-block transition-colors"
            >
              Learn More →
            </Link>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CheckCircle className="w-8 h-8 mx-auto mb-3 text-purple-600" />
            <h3 className="font-semibold mb-2">Setting Up Notifications</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Configure alerts to stay informed about your backups
            </p>
            <Link 
              to="/jhelp/setting-up-notifications" 
              className="text-blue-600 hover:text-blue-800 font-medium text-sm inline-block transition-colors"
            >
              Configure →
            </Link>
          </Card>
        </div>

        {/* Emergency Support */}
        <Card className="mt-8 border-orange-200 bg-orange-50 dark:bg-orange-900/20">
          <CardContent className="pt-6">
            <div className="flex items-start space-x-4">
              <div className="bg-orange-100 dark:bg-orange-900/50 p-2 rounded-full">
                <Shield className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <h3 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">
                  Need Immediate Help?
                </h3>
                <p className="text-sm text-orange-700 dark:text-orange-300 mb-3">
                  If you encounter any issues during setup, our support team is ready to assist you 24/7.
                </p>
                <div className="space-y-2 text-sm">
                  <div>📧 Email: support@pawthway.com</div>
                  <div>💬 Live Chat: Available in your dashboard</div>
                  <div>📞 Phone: 1-800-PAWTHWAY (US/CA)</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  );
}
