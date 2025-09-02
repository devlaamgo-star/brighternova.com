import React, { useState } from 'react';
import { HardDrive, Cloud, Database, Server, Wifi, MapPin, DollarSign, Zap, Shield, Clock, BarChart3, Settings } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import PageLayout from '@/components/shared/PageLayout';

const StorageOptions = () => {
  const [selectedStorage, setSelectedStorage] = useState<string>('cloud');
  const [selectedTier, setSelectedTier] = useState<string>('standard');

  const storageTypes = [
    {
      id: 'cloud',
      name: 'Cloud Storage',
      description: 'Secure, scalable cloud storage with global availability',
      icon: Cloud,
      features: ['99.999% Uptime', 'Global CDN', 'Auto-scaling', 'Redundancy'],
      pricing: 'Pay-as-you-use',
      recommended: true
    },
    {
      id: 'hybrid',
      name: 'Hybrid Storage',
      description: 'Combination of local and cloud storage for optimal performance',
      icon: Server,
      features: ['Fast Local Access', 'Cloud Backup', 'Cost Effective', 'Flexibility'],
      pricing: 'Mixed pricing',
      recommended: false
    },
    {
      id: 'onpremise',
      name: 'On-Premise Storage',
      description: 'Complete control with your own infrastructure',
      icon: HardDrive,
      features: ['Full Control', 'No Internet Required', 'Custom Hardware', 'Privacy'],
      pricing: 'Hardware costs',
      recommended: false
    },
    {
      id: 'edge',
      name: 'Edge Storage',
      description: 'Distributed storage at network edge for low latency',
      icon: Wifi,
      features: ['Ultra-low Latency', 'Edge Computing', 'Regional Presence', 'Fast Access'],
      pricing: 'Premium pricing',
      recommended: false
    }
  ];

  const storageTiers = [
    {
      id: 'hot',
      name: 'Hot Storage',
      description: 'Immediate access for frequently used data',
      access: 'Instant',
      cost: '$$$',
      useCase: 'Active backups, recent data'
    },
    {
      id: 'standard',
      name: 'Standard Storage',
      description: 'Balanced performance and cost for regular access',
      access: '< 1 minute',
      cost: '$$',
      useCase: 'Daily backups, business data'
    },
    {
      id: 'cold',
      name: 'Cold Storage',
      description: 'Cost-effective for infrequently accessed data',
      access: '< 15 minutes',
      cost: '$',
      useCase: 'Monthly backups, archives'
    },
    {
      id: 'archive',
      name: 'Archive Storage',
      description: 'Long-term retention at lowest cost',
      access: '< 12 hours',
      cost: '¢',
      useCase: 'Compliance, long-term storage'
    }
  ];

  const cloudProviders = [
    {
      name: 'Amazon Web Services',
      logo: '🟠',
      regions: 31,
      durability: '99.999999999%',
      features: ['S3 Standard', 'S3 IA', 'Glacier', 'Deep Archive']
    },
    {
      name: 'Microsoft Azure',
      logo: '🔵',
      regions: 60,
      durability: '99.999999999%',
      features: ['Blob Hot', 'Blob Cool', 'Blob Archive', 'Premium SSD']
    },
    {
      name: 'Google Cloud',
      logo: '🔴',
      regions: 35,
      durability: '99.999999999%',
      features: ['Standard', 'Nearline', 'Coldline', 'Archive']
    },
    {
      name: 'IBM Cloud',
      logo: '🔷',
      regions: 19,
      durability: '99.999999999%',
      features: ['Standard', 'Vault', 'Cold Vault', 'Flex']
    }
  ];

  const storageMetrics = [
    { label: 'Total Storage Used', value: '2.4 TB', progress: 65 },
    { label: 'Hot Storage', value: '450 GB', progress: 25 },
    { label: 'Standard Storage', value: '1.2 TB', progress: 45 },
    { label: 'Cold Storage', value: '750 GB', progress: 35 }
  ];

  return (
    <PageLayout title="Storage Options" description="Comprehensive guide to backup storage solutions and configuration">
      <div className="max-w-6xl mx-auto p-6 space-y-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <HardDrive className="h-12 w-12 text-blue-600 mr-3" />
            <h1 className="text-4xl font-bold text-gray-900">Storage Options</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the right storage solution for your backup needs, from instant access to long-term archival
          </p>
        </div>

        {/* Current Usage Overview */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <BarChart3 className="h-5 w-5 mr-2 text-blue-600" />
              Current Storage Usage
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {storageMetrics.map((metric, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{metric.label}</span>
                    <span className="text-gray-600">{metric.value}</span>
                  </div>
                  <Progress value={metric.progress} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="types" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="types">Storage Types</TabsTrigger>
            <TabsTrigger value="tiers">Storage Tiers</TabsTrigger>
            <TabsTrigger value="providers">Cloud Providers</TabsTrigger>
            <TabsTrigger value="configuration">Configuration</TabsTrigger>
            <TabsTrigger value="optimization">Optimization</TabsTrigger>
          </TabsList>

          {/* Storage Types Tab */}
          <TabsContent value="types" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Available Storage Types</CardTitle>
                <CardDescription>Choose the storage architecture that best fits your requirements</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {storageTypes.map((storage) => {
                    const IconComponent = storage.icon;
                    return (
                      <div
                        key={storage.id}
                        className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                          selectedStorage === storage.id
                            ? 'border-blue-500 bg-blue-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                        onClick={() => setSelectedStorage(storage.id)}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex items-start space-x-4">
                            <IconComponent className="h-8 w-8 text-blue-600 mt-1" />
                            <div>
                              <div className="flex items-center mb-2">
                                <h3 className="font-semibold text-lg">{storage.name}</h3>
                                {storage.recommended && (
                                  <Badge className="ml-2 bg-green-100 text-green-800">Recommended</Badge>
                                )}
                              </div>
                              <p className="text-gray-600 mb-3">{storage.description}</p>
                              <div className="flex flex-wrap gap-2">
                                {storage.features.map((feature, index) => (
                                  <Badge key={index} variant="outline" className="text-xs">
                                    {feature}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <Badge variant="secondary">{storage.pricing}</Badge>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Storage Comparison */}
            <Card>
              <CardHeader>
                <CardTitle>Storage Comparison Matrix</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-2">Feature</th>
                        <th className="text-center p-2">Cloud</th>
                        <th className="text-center p-2">Hybrid</th>
                        <th className="text-center p-2">On-Premise</th>
                        <th className="text-center p-2">Edge</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-2 font-medium">Setup Complexity</td>
                        <td className="text-center p-2">Low</td>
                        <td className="text-center p-2">Medium</td>
                        <td className="text-center p-2">High</td>
                        <td className="text-center p-2">Medium</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">Scalability</td>
                        <td className="text-center p-2">Unlimited</td>
                        <td className="text-center p-2">Limited</td>
                        <td className="text-center p-2">Hardware Limited</td>
                        <td className="text-center p-2">Regional</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">Cost (TB/month)</td>
                        <td className="text-center p-2">$25-50</td>
                        <td className="text-center p-2">$15-35</td>
                        <td className="text-center p-2">$200-500</td>
                        <td className="text-center p-2">$50-100</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">Maintenance</td>
                        <td className="text-center p-2">None</td>
                        <td className="text-center p-2">Minimal</td>
                        <td className="text-center p-2">High</td>
                        <td className="text-center p-2">Low</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Storage Tiers Tab */}
          <TabsContent value="tiers" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Storage Tier Selection</CardTitle>
                <CardDescription>Optimize costs by choosing the right access tier for your data</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {storageTiers.map((tier) => (
                    <div
                      key={tier.id}
                      className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                        selectedTier === tier.id
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => setSelectedTier(tier.id)}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-lg">{tier.name}</h3>
                        <div className="flex space-x-2">
                          <Badge variant="outline">Access: {tier.access}</Badge>
                          <Badge variant="outline">Cost: {tier.cost}</Badge>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-2">{tier.description}</p>
                      <div className="text-sm text-gray-500">
                        <strong>Best for:</strong> {tier.useCase}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Automatic Tiering */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Settings className="h-5 w-5 mr-2 text-green-600" />
                  Intelligent Tiering
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold mb-2">Automatic Lifecycle Management</h4>
                    <p className="text-sm text-gray-600 mb-3">
                      Pawthway automatically moves your data between storage tiers based on access patterns to optimize costs.
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Recent backups (0-30 days):</span>
                        <Badge>Hot Storage</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span>Regular backups (30-90 days):</span>
                        <Badge>Standard Storage</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span>Older backups (90+ days):</span>
                        <Badge>Cold Storage</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span>Archive backups (1+ years):</span>
                        <Badge>Archive Storage</Badge>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" defaultChecked />
                      <span className="text-sm">Enable automatic tiering</span>
                    </label>
                    <Button variant="outline" size="sm">Configure Rules</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Cloud Providers Tab */}
          <TabsContent value="providers" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Supported Cloud Providers</CardTitle>
                <CardDescription>Choose from leading cloud storage providers worldwide</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {cloudProviders.map((provider, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center">
                          <span className="text-2xl mr-3">{provider.logo}</span>
                          <div>
                            <h3 className="font-semibold">{provider.name}</h3>
                            <div className="text-sm text-gray-600">
                              {provider.regions} regions • {provider.durability} durability
                            </div>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">Configure</Button>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {provider.features.map((feature, featureIndex) => (
                          <Badge key={featureIndex} variant="secondary" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Multi-Cloud Strategy */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Cloud className="h-5 w-5 mr-2 text-blue-600" />
                  Multi-Cloud Strategy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Benefits of Multi-Cloud</h4>
                    <div className="text-sm text-green-700 space-y-1">
                      <div>• Reduced vendor lock-in</div>
                      <div>• Improved disaster recovery</div>
                      <div>• Geographic distribution</div>
                      <div>• Cost optimization opportunities</div>
                      <div>• Enhanced reliability</div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">Primary Provider</h4>
                      <select className="w-full p-2 border rounded-md">
                        <option>Amazon Web Services</option>
                        <option>Microsoft Azure</option>
                        <option>Google Cloud Platform</option>
                        <option>IBM Cloud</option>
                      </select>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Secondary Provider</h4>
                      <select className="w-full p-2 border rounded-md">
                        <option>None (Single Cloud)</option>
                        <option>Microsoft Azure</option>
                        <option>Google Cloud Platform</option>
                        <option>IBM Cloud</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm">Enable cross-cloud replication</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" defaultChecked />
                      <span className="text-sm">Geographic distribution</span>
                    </label>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Configuration Tab */}
          <TabsContent value="configuration" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Storage Configuration</CardTitle>
                <CardDescription>Configure storage settings and policies</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3">Global Storage Settings</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Default Storage Tier</label>
                        <select className="w-full p-2 border rounded-md">
                          <option value="standard">Standard Storage</option>
                          <option value="hot">Hot Storage</option>
                          <option value="cold">Cold Storage</option>
                          <option value="archive">Archive Storage</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Replication Strategy</label>
                        <select className="w-full p-2 border rounded-md">
                          <option value="3x">3x Replication (Recommended)</option>
                          <option value="2x">2x Replication</option>
                          <option value="1x">No Replication</option>
                          <option value="geo">Geographic Replication</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Regional Preferences</h4>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Primary Region</label>
                        <select className="w-full p-2 border rounded-md">
                          <option>US East (N. Virginia)</option>
                          <option>US West (Oregon)</option>
                          <option>Europe (Ireland)</option>
                          <option>Asia Pacific (Tokyo)</option>
                          <option>Canada (Central)</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Backup Region</label>
                        <select className="w-full p-2 border rounded-md">
                          <option>Auto-select</option>
                          <option>US West (Oregon)</option>
                          <option>Europe (Frankfurt)</option>
                          <option>Asia Pacific (Sydney)</option>
                          <option>South America (São Paulo)</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Data Residency</label>
                        <select className="w-full p-2 border rounded-md">
                          <option>No Restriction</option>
                          <option>US Only</option>
                          <option>EU Only</option>
                          <option>APAC Only</option>
                          <option>Custom</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Advanced Configuration</h4>
                    <div className="space-y-3">
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" defaultChecked />
                        <span className="text-sm">Enable storage analytics and monitoring</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" defaultChecked />
                        <span className="text-sm">Automatic storage optimization</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-sm">Cross-region backup verification</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" defaultChecked />
                        <span className="text-sm">Intelligent caching for faster restoration</span>
                      </label>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Optimization Tab */}
          <TabsContent value="optimization" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <DollarSign className="h-5 w-5 mr-2 text-green-600" />
                    Cost Optimization
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Current Month Savings</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Intelligent Tiering:</span>
                          <span className="text-green-600 font-semibold">$127 saved</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Compression:</span>
                          <span className="text-green-600 font-semibold">$89 saved</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Deduplication:</span>
                          <span className="text-green-600 font-semibold">$156 saved</span>
                        </div>
                        <div className="border-t pt-2 mt-2">
                          <div className="flex justify-between font-semibold">
                            <span>Total Savings:</span>
                            <span className="text-green-600">$372</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Button variant="outline" className="w-full justify-start" size="sm">
                        <BarChart3 className="h-4 w-4 mr-2" />
                        View Cost Analysis
                      </Button>
                      <Button variant="outline" className="w-full justify-start" size="sm">
                        <Settings className="h-4 w-4 mr-2" />
                        Optimize Storage
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Zap className="h-5 w-5 mr-2 text-yellow-600" />
                    Performance Optimization
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Current Performance</h4>
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Upload Speed</span>
                            <span>87 MB/s</span>
                          </div>
                          <Progress value={87} className="h-2" />
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Download Speed</span>
                            <span>156 MB/s</span>
                          </div>
                          <Progress value={92} className="h-2" />
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Latency</span>
                            <span>12ms</span>
                          </div>
                          <Progress value={95} className="h-2" />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Button variant="outline" className="w-full justify-start" size="sm">
                        <MapPin className="h-4 w-4 mr-2" />
                        Optimize Regions
                      </Button>
                      <Button variant="outline" className="w-full justify-start" size="sm">
                        <Clock className="h-4 w-4 mr-2" />
                        Schedule Optimization
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Storage Recommendations */}
            <Card>
              <CardHeader>
                <CardTitle>Personalized Recommendations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Alert>
                    <Shield className="h-4 w-4" />
                    <AlertDescription>
                      Based on your usage patterns, we recommend migrating 65% of your older backups to Cold Storage to save approximately $180/month.
                    </AlertDescription>
                  </Alert>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold text-blue-800 mb-2">Cost Savings</h4>
                      <div className="text-2xl font-bold text-blue-600">$180/mo</div>
                      <div className="text-sm text-blue-600">Potential savings with tiering</div>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg">
                      <h4 className="font-semibold text-green-800 mb-2">Storage Efficiency</h4>
                      <div className="text-2xl font-bold text-green-600">67%</div>
                      <div className="text-sm text-green-600">Space saved with compression</div>
                    </div>
                    <div className="p-4 bg-purple-50 rounded-lg">
                      <h4 className="font-semibold text-purple-800 mb-2">Backup Speed</h4>
                      <div className="text-2xl font-bold text-purple-600">3.2x</div>
                      <div className="text-sm text-purple-600">Faster with edge storage</div>
                    </div>
                  </div>

                  <Button className="w-full">Apply Recommended Settings</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Storage Management Actions */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Storage Management</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" className="h-16 flex flex-col items-center justify-center">
                  <Database className="h-5 w-5 mb-1" />
                  <span className="text-xs">Migrate Data</span>
                </Button>
                <Button variant="outline" className="h-16 flex flex-col items-center justify-center">
                  <Settings className="h-5 w-5 mb-1" />
                  <span className="text-xs">Configure</span>
                </Button>
                <Button variant="outline" className="h-16 flex flex-col items-center justify-center">
                  <BarChart3 className="h-5 w-5 mb-1" />
                  <span className="text-xs">Analytics</span>
                </Button>
                <Button variant="outline" className="h-16 flex flex-col items-center justify-center">
                  <Shield className="h-5 w-5 mb-1" />
                  <span className="text-xs">Security</span>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Button className="w-full justify-start">
                  <Cloud className="h-4 w-4 mr-2" />
                  Set Up New Storage Provider
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <HardDrive className="h-4 w-4 mr-2" />
                  Configure On-Premise Storage
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Wifi className="h-4 w-4 mr-2" />
                  Enable Edge Storage
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Settings className="h-4 w-4 mr-2" />
                  Storage Policy Settings
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Storage Health Status */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Shield className="h-5 w-5 mr-2 text-green-600" />
              Storage Health & Status
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="font-semibold text-green-800">System Health</div>
                <div className="text-2xl font-bold text-green-600 my-2">99.9%</div>
                <div className="text-sm text-green-600">All systems operational</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="font-semibold text-blue-800">Data Integrity</div>
                <div className="text-2xl font-bold text-blue-600 my-2">100%</div>
                <div className="text-sm text-blue-600">No corruption detected</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="font-semibold text-purple-800">Backup Success</div>
                <div className="text-2xl font-bold text-purple-600 my-2">98.7%</div>
                <div className="text-sm text-purple-600">Last 30 days</div>
              </div>
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <div className="font-semibold text-orange-800">Storage Growth</div>
                <div className="text-2xl font-bold text-orange-600 my-2">+12%</div>
                <div className="text-sm text-orange-600">Monthly growth rate</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  );
};

export default StorageOptions;
