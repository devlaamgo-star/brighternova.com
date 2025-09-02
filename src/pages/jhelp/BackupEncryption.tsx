import React, { useState } from 'react';
import { Shield, Lock, Key, Eye, EyeOff, AlertTriangle, CheckCircle, FileText, Database, Settings, Clock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import PageLayout from '@/components/shared/PageLayout';

const BackupEncryption = () => {
  const [selectedEncryption, setSelectedEncryption] = useState<string>('aes256');
  const [keyVisible, setKeyVisible] = useState(false);
  const [selectedKeyManagement, setSelectedKeyManagement] = useState<string>('managed');

  const encryptionMethods = [
    {
      id: 'aes256',
      name: 'AES-256-GCM',
      description: 'Industry-standard 256-bit Advanced Encryption Standard with Galois/Counter Mode',
      security: 'Military Grade',
      performance: 'Excellent',
      recommended: true
    },
    {
      id: 'aes128',
      name: 'AES-128-GCM',
      description: '128-bit AES encryption for faster processing with strong security',
      security: 'High',
      performance: 'Outstanding',
      recommended: false
    },
    {
      id: 'chacha20',
      name: 'ChaCha20-Poly1305',
      description: 'Modern stream cipher with high performance on mobile devices',
      security: 'High',
      performance: 'Excellent',
      recommended: false
    }
  ];

  const keyManagementOptions = [
    {
      id: 'managed',
      name: 'Pawthway Managed Keys',
      description: 'We handle all key management securely',
      complexity: 'Simple',
      control: 'Standard'
    },
    {
      id: 'customer',
      name: 'Customer Managed Keys',
      description: 'You provide and manage your own encryption keys',
      complexity: 'Advanced',
      control: 'Full'
    },
    {
      id: 'hybrid',
      name: 'Hybrid Key Management',
      description: 'Shared responsibility between Pawthway and customer',
      complexity: 'Moderate',
      control: 'High'
    }
  ];

  const encryptionLayers = [
    {
      layer: 'Data-at-Rest',
      description: 'Files encrypted before storage',
      method: 'AES-256-GCM',
      status: 'Active'
    },
    {
      layer: 'Data-in-Transit',
      description: 'TLS 1.3 encryption during transfer',
      method: 'TLS 1.3 + Perfect Forward Secrecy',
      status: 'Active'
    },
    {
      layer: 'Database Encryption',
      description: 'Metadata and configurations encrypted',
      method: 'Field-level AES-256',
      status: 'Active'
    },
    {
      layer: 'Key Encryption',
      description: 'Encryption keys are themselves encrypted',
      method: 'HSM + Key Wrapping',
      status: 'Active'
    }
  ];

  return (
    <PageLayout title="Backup Encryption" description="Comprehensive encryption guide for securing your backup data">
      <div className="max-w-6xl mx-auto p-6 space-y-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Shield className="h-12 w-12 text-blue-600 mr-3" />
            <h1 className="text-4xl font-bold text-gray-900">Backup Encryption</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive encryption guide for securing your backup data at every layer
          </p>
        </div>

        {/* Security Overview Alert */}
        <Alert>
          <Shield className="h-4 w-4" />
          <AlertDescription>
            All Pawthway backups are encrypted by default using military-grade AES-256 encryption. 
            Your data is protected both at rest and in transit with zero-knowledge architecture.
          </AlertDescription>
        </Alert>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="methods">Encryption Methods</TabsTrigger>
            <TabsTrigger value="keys">Key Management</TabsTrigger>
            <TabsTrigger value="configuration">Configuration</TabsTrigger>
            <TabsTrigger value="compliance">Compliance</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Lock className="h-5 w-5 mr-2 text-green-600" />
                    End-to-End Encryption
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Your data is encrypted on your device before it ever leaves your premises, 
                    ensuring complete privacy and security.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">Client-side encryption</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">Zero-knowledge architecture</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">Military-grade security</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Database className="h-5 w-5 mr-2 text-blue-600" />
                    Multi-Layer Protection
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {encryptionLayers.map((layer, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <div className="font-semibold text-sm">{layer.layer}</div>
                          <div className="text-xs text-gray-600">{layer.description}</div>
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {layer.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Encryption Process Flow */}
            <Card>
              <CardHeader>
                <CardTitle>Encryption Process Flow</CardTitle>
                <CardDescription>How your data is protected throughout the backup process</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="text-center p-4 border rounded-lg">
                    <FileText className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                    <div className="font-semibold text-sm">1. Data Collection</div>
                    <div className="text-xs text-gray-600 mt-1">Files gathered on your system</div>
                  </div>
                  <div className="text-center p-4 border rounded-lg bg-blue-50">
                    <Lock className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                    <div className="font-semibold text-sm">2. Client Encryption</div>
                    <div className="text-xs text-gray-600 mt-1">AES-256 encryption applied locally</div>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <Shield className="h-8 w-8 mx-auto mb-2 text-green-600" />
                    <div className="font-semibold text-sm">3. Secure Transfer</div>
                    <div className="text-xs text-gray-600 mt-1">TLS 1.3 encrypted transmission</div>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <Database className="h-8 w-8 mx-auto mb-2 text-green-600" />
                    <div className="font-semibold text-sm">4. Secure Storage</div>
                    <div className="text-xs text-gray-600 mt-1">Encrypted storage with redundancy</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Encryption Methods Tab */}
          <TabsContent value="methods" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Available Encryption Methods</CardTitle>
                <CardDescription>Choose the encryption standard that best fits your security requirements</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {encryptionMethods.map((method) => (
                    <div
                      key={method.id}
                      className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                        selectedEncryption === method.id
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => setSelectedEncryption(method.id)}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          <h3 className="font-semibold">{method.name}</h3>
                          {method.recommended && (
                            <Badge className="ml-2 bg-green-100 text-green-800">Recommended</Badge>
                          )}
                        </div>
                        <div className="flex space-x-2">
                          <Badge variant="outline">Security: {method.security}</Badge>
                          <Badge variant="outline">Performance: {method.performance}</Badge>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm">{method.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Technical Specifications */}
            <Card>
              <CardHeader>
                <CardTitle>Technical Specifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">AES-256-GCM Details</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Algorithm:</span>
                        <span className="font-mono">Advanced Encryption Standard</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Key Size:</span>
                        <span className="font-mono">256 bits</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Mode:</span>
                        <span className="font-mono">Galois/Counter Mode</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Block Size:</span>
                        <span className="font-mono">128 bits</span>
                      </div>
                      <div className="flex justify-between">
                        <span>IV Size:</span>
                        <span className="font-mono">96 bits</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Tag Size:</span>
                        <span className="font-mono">128 bits</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Security Features</h4>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-sm">Authenticated encryption</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-sm">Integrity verification</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-sm">Unique initialization vectors</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-sm">Perfect forward secrecy</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-sm">FIPS 140-2 Level 3 compliant</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Key Management Tab */}
          <TabsContent value="keys" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Key Management Options</CardTitle>
                <CardDescription>Choose how your encryption keys are managed and stored</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {keyManagementOptions.map((option) => (
                    <div
                      key={option.id}
                      className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                        selectedKeyManagement === option.id
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => setSelectedKeyManagement(option.id)}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold">{option.name}</h3>
                        <div className="flex space-x-2">
                          <Badge variant="outline">Complexity: {option.complexity}</Badge>
                          <Badge variant="outline">Control: {option.control}</Badge>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm">{option.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Key Management Details */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Key className="h-5 w-5 mr-2 text-blue-600" />
                    Key Generation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Secure Random Generation</h4>
                      <div className="text-sm text-gray-600 space-y-1">
                        <div>• Cryptographically secure random number generator</div>
                        <div>• Hardware entropy sources when available</div>
                        <div>• Minimum 256-bit entropy for all keys</div>
                        <div>• Regular key rotation policies</div>
                      </div>
                    </div>
                    <div className="p-3 bg-gray-50 rounded">
                      <div className="text-sm font-mono">
                        Key Generation Example:<br />
                        <span className="text-gray-500">
                          openssl rand -hex 32<br />
                          # Generates: a1b2c3d4e5f6...
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Settings className="h-5 w-5 mr-2 text-green-600" />
                    Key Rotation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Automatic Rotation</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm">Master Keys:</span>
                          <Badge variant="outline">Annual</Badge>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">Data Encryption Keys:</span>
                          <Badge variant="outline">Quarterly</Badge>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">Session Keys:</span>
                          <Badge variant="outline">Daily</Badge>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">API Keys:</span>
                          <Badge variant="outline">On-Demand</Badge>
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      <Clock className="h-4 w-4 mr-2" />
                      Schedule Key Rotation
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Customer Key Management */}
            {selectedKeyManagement === 'customer' && (
              <Card>
                <CardHeader>
                  <CardTitle>Customer Managed Keys Setup</CardTitle>
                  <CardDescription>Configure your own encryption keys for maximum control</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Master Key</label>
                        <div className="relative">
                          <input
                            type={keyVisible ? 'text' : 'password'}
                            value="••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••"
                            className="w-full p-2 border rounded-md font-mono text-sm"
                            readOnly
                          />
                          <button
                            onClick={() => setKeyVisible(!keyVisible)}
                            className="absolute right-2 top-2"
                          >
                            {keyVisible ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          </button>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Key Derivation Function</label>
                        <select className="w-full p-2 border rounded-md">
                          <option>PBKDF2-SHA256</option>
                          <option>Argon2id</option>
                          <option>scrypt</option>
                        </select>
                      </div>
                    </div>
                    
                    <Alert>
                      <AlertTriangle className="h-4 w-4" />
                      <AlertDescription>
                        <strong>Important:</strong> You are responsible for securely storing your encryption keys. 
                        Loss of keys will result in permanent data loss as we cannot recover encrypted data without them.
                      </AlertDescription>
                    </Alert>

                    <div className="flex space-x-2">
                      <Button>Generate New Key</Button>
                      <Button variant="outline">Import Key</Button>
                      <Button variant="outline">Export Key</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          {/* Configuration Tab */}
          <TabsContent value="configuration" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Encryption Configuration</CardTitle>
                <CardDescription>Configure encryption settings for your backup jobs</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3">Global Encryption Settings</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Default Encryption Method</label>
                        <select className="w-full p-2 border rounded-md">
                          <option value="aes256">AES-256-GCM (Recommended)</option>
                          <option value="aes128">AES-128-GCM</option>
                          <option value="chacha20">ChaCha20-Poly1305</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Compression Before Encryption</label>
                        <select className="w-full p-2 border rounded-md">
                          <option value="enabled">Enabled (Recommended)</option>
                          <option value="disabled">Disabled</option>
                          <option value="adaptive">Adaptive</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Advanced Options</h4>
                    <div className="space-y-3">
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" defaultChecked />
                        <span className="text-sm">Enable file-level deduplication before encryption</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" defaultChecked />
                        <span className="text-sm">Store encryption metadata separately</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-sm">Enable encryption performance monitoring</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" defaultChecked />
                        <span className="text-sm">Verify data integrity after encryption</span>
                      </label>
                    </div>
                  </div>

                  <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <h4 className="font-semibold text-yellow-800 mb-2">Performance Impact</h4>
                    <div className="text-sm text-yellow-700 space-y-1">
                      <div>• AES-256 adds ~15-20% processing overhead</div>
                      <div>• Compression can reduce backup size by 30-70%</div>
                      <div>• Hardware acceleration available on modern CPUs</div>
                      <div>• Parallel encryption for large files</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Compliance Tab */}
          <TabsContent value="compliance" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Compliance Standards</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded">
                      <span className="font-semibold">GDPR Compliant</span>
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded">
                      <span className="font-semibold">HIPAA Compliant</span>
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded">
                      <span className="font-semibold">SOC 2 Type II</span>
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded">
                      <span className="font-semibold">ISO 27001</span>
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded">
                      <span className="font-semibold">FIPS 140-2 Level 3</span>
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Audit & Reporting</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Encryption Audit Logs</h4>
                      <div className="text-sm text-gray-600 space-y-1">
                        <div>• Key generation and rotation events</div>
                        <div>• Encryption/decryption operations</div>
                        <div>• Access control and permissions</div>
                        <div>• Security policy violations</div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Compliance Reports</h4>
                      <div className="flex flex-wrap gap-2">
                        <Button variant="outline" size="sm">Download Security Report</Button>
                        <Button variant="outline" size="sm">Export Audit Logs</Button>
                        <Button variant="outline" size="sm">Compliance Summary</Button>
                      </div>
                    </div>

                    <div className="p-3 bg-blue-50 rounded">
                      <div className="text-sm">
                        <strong>Last Audit:</strong> December 15, 2024<br />
                        <strong>Next Scheduled:</strong> March 15, 2025<br />
                        <strong>Status:</strong> <Badge className="bg-green-100 text-green-800">Compliant</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Regulatory Requirements */}
            <Card>
              <CardHeader>
                <CardTitle>Industry-Specific Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Healthcare (HIPAA)</h4>
                    <div className="text-sm text-gray-600 space-y-1">
                      <div>• PHI encryption required</div>
                      <div>• Access logging mandatory</div>
                      <div>• Breach notification protocols</div>
                      <div>• Business associate agreements</div>
                    </div>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Financial (PCI DSS)</h4>
                    <div className="text-sm text-gray-600 space-y-1">
                      <div>• Strong cryptography required</div>
                      <div>• Key management standards</div>
                      <div>• Regular vulnerability testing</div>
                      <div>• Secure key transmission</div>
                    </div>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Government (FedRAMP)</h4>
                    <div className="text-sm text-gray-600 space-y-1">
                      <div>• FIPS 140-2 Level 3 HSMs</div>
                      <div>• Continuous monitoring</div>
                      <div>• Incident response procedures</div>
                      <div>• Annual security assessments</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Best Practices */}
        <Card>
          <CardHeader>
            <CardTitle>Encryption Best Practices</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3 text-green-600">✓ Do</h4>
                <div className="space-y-2 text-sm">
                  <div>• Use strong, unique encryption keys</div>
                  <div>• Enable automatic key rotation</div>
                  <div>• Regularly audit encryption settings</div>
                  <div>• Monitor encryption performance</div>
                  <div>• Keep encryption libraries updated</div>
                  <div>• Use hardware security modules (HSMs)</div>
                  <div>• Implement proper access controls</div>
                  <div>• Test backup restoration regularly</div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-red-600">✗ Don't</h4>
                <div className="space-y-2 text-sm">
                  <div>• Reuse encryption keys across environments</div>
                  <div>• Store keys in plain text</div>
                  <div>• Use deprecated encryption algorithms</div>
                  <div>• Skip key rotation policies</div>
                  <div>• Ignore compliance requirements</div>
                  <div>• Use weak or predictable keys</div>
                  <div>• Store keys with encrypted data</div>
                  <div>• Forget to backup encryption keys</div>
                </div>
              </div>
            </div>

            {/* Emergency Procedures */}
            <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <h4 className="font-semibold text-red-800 mb-2">Emergency Key Recovery</h4>
              <div className="text-sm text-red-700 space-y-2">
                <div>If you lose access to your encryption keys:</div>
                <div>1. Contact our support team immediately</div>
                <div>2. Provide proof of identity and account ownership</div>
                <div>3. Use emergency recovery codes if available</div>
                <div>4. Be prepared that data recovery may not be possible</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
                <Key className="h-6 w-6 mb-2" />
                <span className="text-sm">Generate Key</span>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
                <Settings className="h-6 w-6 mb-2" />
                <span className="text-sm">Configure Encryption</span>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
                <Shield className="h-6 w-6 mb-2" />
                <span className="text-sm">Security Audit</span>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
                <FileText className="h-6 w-6 mb-2" />
                <span className="text-sm">Export Report</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  );
};

export default BackupEncryption;
