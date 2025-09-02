import { useState } from "react";
import PageLayout from "../../components/shared/PageLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Alert, AlertDescription } from "../../components/ui/alert";
import { Button } from "../../components/ui/button";
import { Database, Server, Plug, CheckCircle, AlertTriangle, Settings, Code, Shield, Zap, Cloud } from "lucide-react";

const DatabaseIntegrations = () => {
  const [selectedDatabase, setSelectedDatabase] = useState("postgresql");

  const databases = [
    { id: "postgresql", name: "PostgreSQL", icon: "🐘", status: "connected", version: "15.2" },
    { id: "mysql", name: "MySQL", icon: "🐬", status: "connected", version: "8.0.33" },
    { id: "mongodb", name: "MongoDB", icon: "🍃", status: "connected", version: "6.0.4" },
    { id: "redis", name: "Redis", icon: "🔴", status: "connected", version: "7.0.8" },
    { id: "mariadb", name: "MariaDB", icon: "🦭", status: "available", version: "10.11" },
    { id: "sqlite", name: "SQLite", icon: "📦", status: "available", version: "3.40" }
  ];

  return (
    <PageLayout
      title="Database Integrations"
      description="Connect and configure database backups for all your data sources"
    >
      <div className="container mx-auto px-4 py-8">
        {/* Integration Overview */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="h-6 w-6 text-blue-600" />
              Database Integration Overview
            </CardTitle>
            <CardDescription>
              Manage connections to your databases and configure automated backup processes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 border rounded-lg">
                <Plug className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <h3 className="font-semibold">4 Connected</h3>
                <p className="text-sm text-gray-600">Active database connections</p>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <CheckCircle className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <h3 className="font-semibold">12 Backups</h3>
                <p className="text-sm text-gray-600">Completed in last 24h</p>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <Server className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <h3 className="font-semibold">6 Supported</h3>
                <p className="text-sm text-gray-600">Database types available</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Supported Databases */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Server className="h-6 w-6 text-blue-600" />
              Supported Database Types
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {databases.map((db) => (
                <div 
                  key={db.id}
                  className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                    selectedDatabase === db.id ? "border-blue-500 bg-blue-50" : "border-gray-200"
                  }`}
                  onClick={() => setSelectedDatabase(db.id)}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{db.icon}</span>
                    <div>
                      <h3 className="font-semibold">{db.name}</h3>
                      <p className="text-xs text-gray-600">v{db.version}</p>
                    </div>
                  </div>
                  <Badge variant={db.status === "connected" ? "default" : "secondary"}>
                    {db.status === "connected" ? "Connected" : "Available"}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Connection Setup */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Plug className="h-6 w-6 text-blue-600" />
              Database Connection Setup
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Connection Methods</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2 flex items-center gap-2">
                    <Code className="h-4 w-4 text-blue-600" />
                    Direct Connection
                  </h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Connect directly to your database using connection strings or credentials
                  </p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Standard database protocols</li>
                    <li>• SSL/TLS encryption support</li>
                    <li>• Connection pooling available</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2 flex items-center gap-2">
                    <Cloud className="h-4 w-4 text-green-600" />
                    Cloud Database Integration
                  </h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Connect to managed database services with pre-configured integrations
                  </p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• AWS RDS, Azure SQL, Google Cloud SQL</li>
                    <li>• MongoDB Atlas, Redis Cloud</li>
                    <li>• Authentication via cloud IAM</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Setup Process</h3>
              <ol className="space-y-4">
                <li className="flex gap-4">
                  <span className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-medium flex-shrink-0">1</span>
                  <div>
                    <div className="font-medium">Choose Database Type</div>
                    <div className="text-sm text-gray-600">Select your database from the supported types list</div>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-medium flex-shrink-0">2</span>
                  <div>
                    <div className="font-medium">Configure Connection</div>
                    <div className="text-sm text-gray-600">Provide connection details, credentials, and security settings</div>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-medium flex-shrink-0">3</span>
                  <div>
                    <div className="font-medium">Test Connection</div>
                    <div className="text-sm text-gray-600">Verify connectivity and permissions before proceeding</div>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-medium flex-shrink-0">4</span>
                  <div>
                    <div className="font-medium">Configure Backup Settings</div>
                    <div className="text-sm text-gray-600">Set backup frequency, retention, and destination preferences</div>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-medium flex-shrink-0">5</span>
                  <div>
                    <div className="font-medium">Activate Integration</div>
                    <div className="text-sm text-gray-600">Start automated backups and monitoring</div>
                  </div>
                </li>
              </ol>
            </div>
          </CardContent>
        </Card>

        {/* Current Integrations */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="h-6 w-6 text-blue-600" />
              Current Database Integrations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-4">
                  <span className="text-2xl">🐘</span>
                  <div>
                    <div className="font-medium">Production PostgreSQL</div>
                    <div className="text-sm text-gray-600">prod-db.company.com:5432/maindb</div>
                    <div className="text-xs text-gray-500">Last backup: 2 hours ago • Size: 2.1 GB</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="default">Connected</Badge>
                  <Button size="sm" variant="outline">
                    <Settings className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-4">
                  <span className="text-2xl">🍃</span>
                  <div>
                    <div className="font-medium">MongoDB Atlas Cluster</div>
                    <div className="text-sm text-gray-600">cluster0.mongodb.net/userdata</div>
                    <div className="text-xs text-gray-500">Last backup: 6 hours ago • Size: 850 MB</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="default">Connected</Badge>
                  <Button size="sm" variant="outline">
                    <Settings className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-4">
                  <span className="text-2xl">🔴</span>
                  <div>
                    <div className="font-medium">Redis Cache</div>
                    <div className="text-sm text-gray-600">redis.company.com:6379/0</div>
                    <div className="text-xs text-gray-500">Last backup: 4 hours ago • Size: 125 MB</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="default">Connected</Badge>
                  <Button size="sm" variant="outline">
                    <Settings className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <Button>Add New Database</Button>
            </div>
          </CardContent>
        </Card>

        {/* Database-Specific Configuration */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Database-Specific Configuration</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">PostgreSQL Configuration</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2">Backup Methods</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• pg_dump for logical backups</li>
                    <li>• pg_basebackup for physical backups</li>
                    <li>• WAL archiving for point-in-time recovery</li>
                    <li>• Custom format for compression</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2">Advanced Options</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Schema-only or data-only backups</li>
                    <li>• Exclude specific tables or schemas</li>
                    <li>• Custom pre/post backup scripts</li>
                    <li>• Parallel backup processing</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">MongoDB Configuration</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2">Backup Strategies</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• mongodump for logical backups</li>
                    <li>• Replica set snapshots</li>
                    <li>• Sharded cluster coordination</li>
                    <li>• GridFS file handling</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2">Atlas Integration</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Native Atlas API integration</li>
                    <li>• Cross-region backup support</li>
                    <li>• Automated cluster discovery</li>
                    <li>• Performance impact monitoring</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">MySQL/MariaDB Configuration</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2">Backup Tools</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• mysqldump for logical backups</li>
                    <li>• Binary log backups for PITR</li>
                    <li>• InnoDB hot backups</li>
                    <li>• Multi-database coordination</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2">Cloud Service Support</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• AWS RDS integration</li>
                    <li>• Azure Database for MySQL</li>
                    <li>• Google Cloud SQL</li>
                    <li>• DigitalOcean Managed Databases</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Security and Permissions */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-blue-600" />
              Security & Permissions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Required Permissions</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2">PostgreSQL Permissions</h4>
                  <div className="bg-gray-50 p-3 rounded text-sm font-mono mb-2">
                    GRANT SELECT ON ALL TABLES<br/>
                    GRANT USAGE ON ALL SEQUENCES<br/>
                    GRANT EXECUTE ON ALL FUNCTIONS
                  </div>
                  <p className="text-xs text-gray-600">Minimum permissions for backup operations</p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2">MongoDB Permissions</h4>
                  <div className="bg-gray-50 p-3 rounded text-sm font-mono mb-2">
                    readWrite: database<br/>
                    backup: cluster<br/>
                    restore: cluster
                  </div>
                  <p className="text-xs text-gray-600">Role-based access for backup operations</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Security Best Practices</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Use dedicated backup user accounts with minimal permissions</li>
                <li>• Enable SSL/TLS encryption for all database connections</li>
                <li>• Rotate database credentials regularly (every 90 days)</li>
                <li>• Monitor connection attempts and backup operations</li>
                <li>• Use IP whitelisting for enhanced security</li>
                <li>• Store credentials securely using encrypted vaults</li>
              </ul>
            </div>

            <Alert>
              <Shield className="h-4 w-4" />
              <AlertDescription>
                All database connections are encrypted in transit using TLS 1.3. Credentials are stored using AES-256 encryption and never logged in plain text.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Performance Optimization */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-6 w-6 text-blue-600" />
              Performance Optimization
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Backup Performance Settings</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2">Connection Optimization</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Connection pooling configuration</li>
                    <li>• Timeout and retry settings</li>
                    <li>• Bandwidth throttling options</li>
                    <li>• Parallel connection support</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2">Backup Optimization</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Compression algorithms (gzip, lz4, zstd)</li>
                    <li>• Incremental backup strategies</li>
                    <li>• Parallel processing threads</li>
                    <li>• Memory usage limits</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Performance Metrics</h3>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="text-center p-4 border rounded-lg">
                  <div className="text-xl font-bold text-blue-600 mb-1">2.3 GB/min</div>
                  <div className="text-xs text-gray-600">Avg Backup Speed</div>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <div className="text-xl font-bold text-green-600 mb-1">98.9%</div>
                  <div className="text-xs text-gray-600">Success Rate</div>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <div className="text-xl font-bold text-purple-600 mb-1">15 min</div>
                  <div className="text-xs text-gray-600">Avg Duration</div>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <div className="text-xl font-bold text-orange-600 mb-1">3.2:1</div>
                  <div className="text-xs text-gray-600">Compression Ratio</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Integration Troubleshooting */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-6 w-6 text-blue-600" />
              Troubleshooting Common Issues
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Connection Issues</h3>
              <div className="space-y-3">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2 text-red-700">Connection Timeout</h4>
                  <p className="text-sm text-gray-600 mb-2">
                    Unable to connect to database within specified timeout period.
                  </p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Check network connectivity and firewall rules</li>
                    <li>• Verify database server is running and accessible</li>
                    <li>• Confirm connection string format and credentials</li>
                    <li>• Review SSL/TLS certificate configuration</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2 text-red-700">Permission Denied</h4>
                  <p className="text-sm text-gray-600 mb-2">
                    Database user lacks sufficient privileges for backup operations.
                  </p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Grant SELECT permissions on all required tables</li>
                    <li>• Ensure backup user has USAGE rights on schemas</li>
                    <li>• For PostgreSQL: GRANT pg_read_all_data role</li>
                    <li>• For MongoDB: Assign backup role to user</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Backup Issues</h3>
              <div className="space-y-3">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2 text-orange-700">Slow Backup Performance</h4>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Increase parallel processing threads</li>
                    <li>• Enable compression to reduce transfer time</li>
                    <li>• Schedule backups during low-usage periods</li>
                    <li>• Consider incremental backup strategies</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2 text-orange-700">Large Database Handling</h4>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Use streaming backups for large datasets</li>
                    <li>• Implement table-level backup parallelization</li>
                    <li>• Configure backup chunking for better reliability</li>
                    <li>• Monitor disk space during backup operations</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Integration Monitoring */}
        <Card>
          <CardHeader>
            <CardTitle>Integration Monitoring</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Health Monitoring</h3>
              <div className="space-y-3">
                <div className="p-3 border-l-4 border-green-500 bg-green-50">
                  <div className="text-sm font-medium">PostgreSQL Health Check</div>
                  <div className="text-xs text-gray-600">All connections healthy • Last checked: 5 minutes ago</div>
                </div>
                <div className="p-3 border-l-4 border-green-500 bg-green-50">
                  <div className="text-sm font-medium">MongoDB Cluster Status</div>
                  <div className="text-xs text-gray-600">Primary and secondary nodes operational • Replica lag: 2ms</div>
                </div>
                <div className="p-3 border-l-4 border-yellow-500 bg-yellow-50">
                  <div className="text-sm font-medium">Redis Memory Usage</div>
                  <div className="text-xs text-gray-600">Memory usage at 78% • Consider cleanup or scaling</div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Backup History</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2">Database</th>
                      <th className="text-left p-2">Status</th>
                      <th className="text-left p-2">Duration</th>
                      <th className="text-left p-2">Size</th>
                      <th className="text-left p-2">Timestamp</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-2">PostgreSQL Prod</td>
                      <td className="p-2"><Badge variant="default" className="text-xs">Success</Badge></td>
                      <td className="p-2">14m 32s</td>
                      <td className="p-2">2.1 GB</td>
                      <td className="p-2">2 hours ago</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2">MongoDB Atlas</td>
                      <td className="p-2"><Badge variant="default" className="text-xs">Success</Badge></td>
                      <td className="p-2">8m 15s</td>
                      <td className="p-2">850 MB</td>
                      <td className="p-2">6 hours ago</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2">Redis Cache</td>
                      <td className="p-2"><Badge variant="default" className="text-xs">Success</Badge></td>
                      <td className="p-2">2m 45s</td>
                      <td className="p-2">125 MB</td>
                      <td className="p-2">4 hours ago</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Help and Support */}
        <div className="mt-8 p-6 bg-gray-50 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Need Help with Database Integrations?</h3>
          <p className="text-gray-600 mb-4">
            Our database specialists can help you optimize your backup configurations for maximum performance and reliability.
          </p>
          <div className="flex gap-4">
            <Button>Contact Database Team</Button>
            <Button variant="outline">View Setup Guides</Button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default DatabaseIntegrations;
