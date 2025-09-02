import React from 'react';
import PageLayout from '../../../components/shared/PageLayout';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card';
import { Badge } from '../../../components/ui/badge';
import { CreditCard, DollarSign, Calendar, Download, AlertTriangle, CheckCircle, TrendingUp, Receipt } from 'lucide-react';

export default function BillingSubscriptions() {
  return (
    <PageLayout
      title="Billing & Subscriptions"
      description="Manage your Pawthway billing information, subscription plans, payment methods, and invoicing. View usage statistics and upgrade options."
    >
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            <CreditCard className="w-4 h-4 mr-2" />
            Billing Management
          </Badge>
          <h1 className="text-4xl font-bold mb-6">Billing & Subscriptions</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Manage your subscription plans, payment methods, and billing preferences. 
            Monitor usage and optimize your costs with detailed analytics.
          </p>
        </div>

        {/* Current Plan Overview */}
        <Card className="mb-8 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20">
          <CardHeader>
            <CardTitle className="flex items-center">
              <TrendingUp className="w-5 h-5 mr-2 text-green-600" />
              Current Subscription
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">Professional</div>
                <div className="text-sm text-muted-foreground">Current Plan</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">$49/mo</div>
                <div className="text-sm text-muted-foreground">Monthly Cost</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">15</div>
                <div className="text-sm text-muted-foreground">Days Remaining</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">Auto</div>
                <div className="text-sm text-muted-foreground">Renewal Status</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Plan Comparison */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <DollarSign className="w-5 h-5 mr-2 text-blue-600" />
              Plan Comparison & Upgrades
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <p>Compare available plans and upgrade options to find the best fit for your backup needs.</p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="border-gray-200">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg text-center">Starter</CardTitle>
                    <div className="text-center">
                      <div className="text-3xl font-bold">$19</div>
                      <div className="text-sm text-muted-foreground">per month</div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                        <span>100GB storage</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                        <span>3 backup sources</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                        <span>Daily backups</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                        <span>Email support</span>
                      </li>
                    </ul>
                    <button className="w-full mt-4 bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-700 text-sm">
                      Downgrade
                    </button>
                  </CardContent>
                </Card>

                <Card className="border-blue-200 bg-blue-50 dark:bg-blue-900/20">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg text-center text-blue-800 dark:text-blue-200">
                      Professional
                      <Badge variant="default" className="ml-2">Current</Badge>
                    </CardTitle>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600">$49</div>
                      <div className="text-sm text-muted-foreground">per month</div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                        <span>1TB storage</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                        <span>Unlimited sources</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                        <span>Hourly backups</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                        <span>Priority support</span>
                      </li>
                    </ul>
                    <button className="w-full mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 text-sm">
                      Current Plan
                    </button>
                  </CardContent>
                </Card>

                <Card className="border-purple-200">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg text-center text-purple-800 dark:text-purple-200">
                      Enterprise
                      <Badge variant="outline" className="ml-2">Popular</Badge>
                    </CardTitle>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-600">$199</div>
                      <div className="text-sm text-muted-foreground">per month</div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                        <span>10TB storage</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                        <span>Team management</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                        <span>Real-time backups</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                        <span>24/7 phone support</span>
                      </li>
                    </ul>
                    <button className="w-full mt-4 bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 text-sm">
                      Upgrade
                    </button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Payment Methods */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <CreditCard className="w-5 h-5 mr-2 text-green-600" />
              Payment Methods
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <p>Manage your payment methods and billing information securely.</p>
              
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-semibold mb-3">💳 Saved Payment Methods</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-white dark:bg-gray-900 rounded border">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-6 bg-blue-600 rounded text-white text-xs flex items-center justify-center">VISA</div>
                      <div>
                        <div className="font-medium">•••• •••• •••• 4242</div>
                        <div className="text-xs text-muted-foreground">Expires 12/2027</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant="default" className="text-xs">Primary</Badge>
                      <button className="text-blue-600 hover:text-blue-800 text-sm">Edit</button>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-white dark:bg-gray-900 rounded border">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-6 bg-red-600 rounded text-white text-xs flex items-center justify-center">MC</div>
                      <div>
                        <div className="font-medium">•••• •••• •••• 5555</div>
                        <div className="text-xs text-muted-foreground">Expires 08/2026</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline" className="text-xs">Backup</Badge>
                      <button className="text-blue-600 hover:text-blue-800 text-sm">Edit</button>
                    </div>
                  </div>
                </div>
                
                <button className="w-full mt-4 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 text-sm">
                  + Add New Payment Method
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">🏦 Billing Address</h4>
                  <div className="text-sm space-y-1">
                    <div>Tech Solutions Inc.</div>
                    <div>123 Business Ave, Suite 100</div>
                    <div>New York, NY 10001</div>
                    <div>United States</div>
                  </div>
                  <button className="mt-3 text-blue-600 hover:text-blue-800 text-sm">Update Address</button>
                </div>

                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">📄 Tax Information</h4>
                  <div className="text-sm space-y-1">
                    <div>Tax ID: 12-3456789</div>
                    <div>VAT Number: US123456789</div>
                    <div>Tax Rate: 8.25%</div>
                    <div>Tax Exempt: No</div>
                  </div>
                  <button className="mt-3 text-blue-600 hover:text-blue-800 text-sm">Update Tax Info</button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Billing History */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Receipt className="w-5 h-5 mr-2 text-purple-600" />
              Billing History & Invoices
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <p>Access your complete billing history, download invoices, and track payment status.</p>
              
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-semibold mb-3">📋 Recent Invoices</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-white dark:bg-gray-900 rounded border">
                    <div>
                      <div className="font-medium">Invoice #INV-2024-001</div>
                      <div className="text-xs text-muted-foreground">Professional Plan - December 2024</div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <div className="font-medium">$49.00</div>
                        <Badge variant="default" className="text-xs">Paid</Badge>
                      </div>
                      <button className="text-blue-600 hover:text-blue-800 text-sm">
                        <Download className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-white dark:bg-gray-900 rounded border">
                    <div>
                      <div className="font-medium">Invoice #INV-2024-002</div>
                      <div className="text-xs text-muted-foreground">Professional Plan - January 2025</div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <div className="font-medium">$49.00</div>
                        <Badge variant="secondary" className="text-xs">Pending</Badge>
                      </div>
                      <button className="text-blue-600 hover:text-blue-800 text-sm">
                        <Download className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-white dark:bg-gray-900 rounded border">
                    <div>
                      <div className="font-medium">Invoice #INV-2023-012</div>
                      <div className="text-xs text-muted-foreground">Professional Plan - November 2024</div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <div className="font-medium">$49.00</div>
                        <Badge variant="default" className="text-xs">Paid</Badge>
                      </div>
                      <button className="text-blue-600 hover:text-blue-800 text-sm">
                        <Download className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">📊 Billing Summary</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Total Paid (2024):</span>
                      <span className="font-medium">$588.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Average Monthly:</span>
                      <span className="font-medium">$49.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Next Payment:</span>
                      <span className="font-medium">Feb 15, 2025</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Payment Method:</span>
                      <span className="font-medium">Visa •••• 4242</span>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">💰 Cost Optimization</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Annual billing saves 20%</li>
                    <li>• Current usage: 743GB / 1TB</li>
                    <li>• Estimated monthly growth: 12GB</li>
                    <li>• Upgrade recommended in 6 months</li>
                  </ul>
                  <button className="mt-3 text-green-600 hover:text-green-800 text-sm font-medium">
                    Switch to Annual Billing →
                  </button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Usage Analytics */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <TrendingUp className="w-5 h-5 mr-2 text-green-600" />
              Usage Analytics & Monitoring
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <p>Monitor your storage usage, backup frequency, and costs to optimize your subscription.</p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="border-blue-200 bg-blue-50 dark:bg-blue-900/20">
                  <CardContent className="pt-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600 mb-1">743GB</div>
                      <div className="text-sm text-muted-foreground mb-2">Storage Used</div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{width: '74%'}}></div>
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">74% of 1TB limit</div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-green-200 bg-green-50 dark:bg-green-900/20">
                  <CardContent className="pt-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600 mb-1">142</div>
                      <div className="text-sm text-muted-foreground mb-2">Backups This Month</div>
                      <div className="text-xs text-muted-foreground">
                        Average: 4.7 per day<br/>
                        Success rate: 99.9%
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-purple-200 bg-purple-50 dark:bg-purple-900/20">
                  <CardContent className="pt-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600 mb-1">8</div>
                      <div className="text-sm text-muted-foreground mb-2">Active Sources</div>
                      <div className="text-xs text-muted-foreground">
                        3 Databases<br/>
                        5 File systems
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200">
                <h4 className="font-semibold mb-2">💡 Cost Optimization Tips:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Enable compression to reduce storage usage by up to 60%</li>
                  <li>• Use incremental backups to minimize data transfer costs</li>
                  <li>• Set up retention policies to automatically clean old backups</li>
                  <li>• Monitor usage trends to right-size your plan</li>
                  <li>• Consider annual billing for 20% discount</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Billing Preferences */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calendar className="w-5 h-5 mr-2 text-purple-600" />
              Billing Preferences & Automation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <p>Configure billing preferences, auto-renewal settings, and invoice delivery options.</p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold mb-3 text-purple-800 dark:text-purple-200">🔄 Auto-Renewal Settings</h4>
                  <div className="space-y-3 text-sm">
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" defaultChecked />
                      <span>Enable auto-renewal</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" defaultChecked />
                      <span>Send renewal reminders (7 days prior)</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span>Auto-upgrade based on usage</span>
                    </label>
                    <div className="pt-2">
                      <label className="block font-medium mb-1">Billing Cycle</label>
                      <select className="w-full p-2 rounded border bg-white dark:bg-gray-900">
                        <option>Monthly</option>
                        <option>Annual (20% discount)</option>
                        <option>Quarterly</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold mb-3 text-blue-800 dark:text-blue-200">📧 Invoice Delivery</h4>
                  <div className="space-y-3 text-sm">
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" defaultChecked />
                      <span>Email invoices</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span>Mail paper invoices</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" defaultChecked />
                      <span>Send payment confirmations</span>
                    </label>
                    <div className="pt-2">
                      <label className="block font-medium mb-1">Invoice Email</label>
                      <div className="bg-white dark:bg-gray-900 p-2 rounded border">
                        billing@company.com
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Support & Billing Issues */}
        <Card className="mt-8 border-orange-200 bg-orange-50 dark:bg-orange-900/20">
          <CardContent className="pt-6">
            <div className="flex items-start space-x-4">
              <div className="bg-orange-100 dark:bg-orange-900/50 p-2 rounded-full">
                <CreditCard className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <h3 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">
                  Billing Questions or Issues?
                </h3>
                <p className="text-sm text-orange-700 dark:text-orange-300 mb-3">
                  Our billing team can help with payment issues, plan changes, refunds, and invoice questions.
                </p>
                <div className="space-y-2 text-sm">
                  <div>📧 Email: billing@pawthway.com</div>
                  <div>📞 Phone: 1-800-PAWTHWAY (US/CA)</div>
                  <div>💬 Live Chat: Available 24/7 in your dashboard</div>
                  <div>🏦 Accounting Dept: accounting@pawthway.com</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  );
}
