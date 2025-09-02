import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import PageLayout from "@/components/shared/PageLayout";
import { Play, Code, Copy, Settings, Key, Send, FileText, Database, User } from "lucide-react";

export default function APITester() {
  const [selectedEndpoint, setSelectedEndpoint] = useState("backups");
  const [method, setMethod] = useState("GET");
  const [apiKey, setApiKey] = useState("");
  const [requestBody, setRequestBody] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const endpoints = {
    backups: {
      path: "/v1/backups",
      methods: ["GET", "POST"],
      description: "List and create backups",
      parameters: [
        { name: "limit", type: "integer", description: "Number of results to return" },
        { name: "offset", type: "integer", description: "Number of results to skip" },
      ]
    },
    backup: {
      path: "/v1/backups/{id}",
      methods: ["GET", "PUT", "DELETE"],
      description: "Manage specific backup",
      parameters: [
        { name: "id", type: "string", description: "Backup ID", required: true },
      ]
    },
    restore: {
      path: "/v1/restore",
      methods: ["POST"],
      description: "Restore from backup",
      parameters: [
        { name: "backup_id", type: "string", description: "Backup to restore from", required: true },
        { name: "destination", type: "string", description: "Restore destination", required: true },
      ]
    },
    schedules: {
      path: "/v1/schedules",
      methods: ["GET", "POST"],
      description: "Manage backup schedules",
      parameters: [
        { name: "frequency", type: "string", description: "Schedule frequency" },
        { name: "enabled", type: "boolean", description: "Schedule status" },
      ]
    }
  };

  const sampleRequests = {
    backups: {
      GET: "",
      POST: JSON.stringify({
        "name": "Daily Database Backup",
        "source": "/var/lib/postgresql/data",
        "destination": "s3://my-bucket/backups/",
        "schedule": "0 2 * * *",
        "compression": "gzip",
        "encryption": true
      }, null, 2)
    },
    backup: {
      GET: "",
      PUT: JSON.stringify({
        "name": "Updated Backup Name",
        "schedule": "0 3 * * *",
        "enabled": true
      }, null, 2),
      DELETE: ""
    },
    restore: {
      POST: JSON.stringify({
        "backup_id": "backup_123456789",
        "destination": "/var/restore/",
        "options": {
          "overwrite": false,
          "verify_checksum": true
        }
      }, null, 2)
    },
    schedules: {
      GET: "",
      POST: JSON.stringify({
        "name": "Weekly Full Backup",
        "frequency": "0 0 * * 0",
        "backup_type": "full",
        "retention": "30d",
        "enabled": true
      }, null, 2)
    }
  };

  const handleSendRequest = async () => {
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      const mockResponses = {
        GET: {
          status: 200,
          data: {
            backups: [
              {
                id: "backup_123456789",
                name: "Daily Database Backup",
                status: "completed",
                size: "2.4 GB",
                created_at: "2024-01-20T10:30:00Z"
              }
            ],
            total: 1,
            page: 1
          }
        },
        POST: {
          status: 201,
          data: {
            id: "backup_987654321",
            name: "Daily Database Backup",
            status: "queued",
            message: "Backup job created successfully"
          }
        },
        PUT: {
          status: 200,
          data: {
            id: "backup_123456789",
            message: "Backup updated successfully"
          }
        },
        DELETE: {
          status: 204,
          message: "Backup deleted successfully"
        }
      };

      setResponse(JSON.stringify(mockResponses[method], null, 2));
      setLoading(false);
    }, 1000);
  };

  const currentEndpoint = endpoints[selectedEndpoint];
  const currentSample = sampleRequests[selectedEndpoint]?.[method] || "";

  return (
    <PageLayout 
      title="API Explorer" 
      description="Interactive API testing tool for Novabuckups"
    >
      <div className="min-h-screen bg-background py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">API Explorer</h1>
            <p className="text-muted-foreground">Test Novabuckups API endpoints interactively</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Endpoint Selection */}
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="h-5 w-5" />
                    Configuration
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="apiKey">API Key</Label>
                    <div className="flex gap-2">
                      <Input
                        id="apiKey"
                        type="password"
                        placeholder="Enter your API key"
                        value={apiKey}
                        onChange={(e) => setApiKey(e.target.value)}
                      />
                      <Button variant="outline" size="sm">
                        <Key className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Endpoint</Label>
                    <Select value={selectedEndpoint} onValueChange={setSelectedEndpoint}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.entries(endpoints).map(([key, endpoint]) => (
                          <SelectItem key={key} value={key}>
                            {endpoint.path}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Method</Label>
                    <Select value={method} onValueChange={setMethod}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {currentEndpoint.methods.map((m) => (
                          <SelectItem key={m} value={m}>
                            <div className="flex items-center gap-2">
                              <Badge variant={m === "GET" ? "secondary" : m === "POST" ? "default" : "destructive"}>
                                {m}
                              </Badge>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="pt-4 border-t">
                    <h4 className="font-medium mb-2">Parameters</h4>
                    <div className="space-y-2">
                      {currentEndpoint.parameters.map((param) => (
                        <div key={param.name} className="text-sm">
                          <div className="flex items-center gap-2">
                            <code className="bg-muted px-2 py-1 rounded text-xs">{param.name}</code>
                            <Badge variant="outline" className="text-xs">{param.type}</Badge>
                            {param.required && <Badge variant="destructive" className="text-xs">Required</Badge>}
                          </div>
                          <p className="text-muted-foreground mt-1">{param.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Request/Response */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="request" className="space-y-4">
                <TabsList>
                  <TabsTrigger value="request">
                    <Send className="h-4 w-4 mr-2" />
                    Request
                  </TabsTrigger>
                  <TabsTrigger value="response">
                    <FileText className="h-4 w-4 mr-2" />
                    Response
                  </TabsTrigger>
                  <TabsTrigger value="examples">
                    <Code className="h-4 w-4 mr-2" />
                    Examples
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="request">
                  <Card>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="flex items-center gap-2">
                          <Badge variant={method === "GET" ? "secondary" : method === "POST" ? "default" : "destructive"}>
                            {method}
                          </Badge>
                          <code className="text-sm">https://novabuckups.com/api{currentEndpoint.path}</code>
                        </CardTitle>
                        <Button onClick={handleSendRequest} disabled={loading || !apiKey}>
                          <Play className="h-4 w-4 mr-2" />
                          {loading ? "Sending..." : "Send Request"}
                        </Button>
                      </div>
                      <CardDescription>{currentEndpoint.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      {(method === "POST" || method === "PUT") && (
                        <div className="space-y-2">
                          <Label>Request Body (JSON)</Label>
                          <Textarea
                            placeholder="Enter JSON request body..."
                            className="min-h-[200px] font-mono text-sm"
                            value={requestBody || currentSample}
                            onChange={(e) => setRequestBody(e.target.value)}
                          />
                          <div className="flex gap-2">
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => setRequestBody(currentSample)}
                            >
                              Use Sample
                            </Button>
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => navigator.clipboard.writeText(requestBody || currentSample)}
                            >
                              <Copy className="h-4 w-4 mr-2" />
                              Copy
                            </Button>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="response">
                  <Card>
                    <CardHeader>
                      <CardTitle>Response</CardTitle>
                      <CardDescription>API response will appear here</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ScrollArea className="h-[400px] w-full">
                        <pre className="text-sm bg-muted p-4 rounded overflow-x-auto">
                          {response || "Send a request to see the response"}
                        </pre>
                      </ScrollArea>
                      {response && (
                        <div className="mt-4">
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => navigator.clipboard.writeText(response)}
                          >
                            <Copy className="h-4 w-4 mr-2" />
                            Copy Response
                          </Button>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="examples">
                  <div className="grid gap-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>cURL Example</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <pre className="text-sm bg-muted p-4 rounded overflow-x-auto">
                          {`curl -X ${method} \\
  -H "Authorization: Bearer your-api-key" \\
  -H "Content-Type: application/json" \\${method !== "GET" && method !== "DELETE" ? `
  -d '${currentSample}' \\` : ""}
  https://novabuckups.com/api${currentEndpoint.path}`}
                        </pre>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>JavaScript Example</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <pre className="text-sm bg-muted p-4 rounded overflow-x-auto">
                          {`const response = await fetch('https://novabuckups.com/api${currentEndpoint.path}', {
  method: '${method}',
  headers: {
    'Authorization': 'Bearer your-api-key',
    'Content-Type': 'application/json'
  }${method !== "GET" && method !== "DELETE" ? `,
  body: JSON.stringify(${currentSample || "{}"})` : ""}
});

const data = await response.json();
console.log(data);`}
                        </pre>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Python Example</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <pre className="text-sm bg-muted p-4 rounded overflow-x-auto">
                          {`import requests

url = 'https://novabuckups.com/api${currentEndpoint.path}'
headers = {
    'Authorization': 'Bearer your-api-key',
    'Content-Type': 'application/json'
}${method !== "GET" && method !== "DELETE" ? `
data = ${currentSample || "{}"}

response = requests.${method.toLowerCase()}(url, headers=headers, json=data)` : `

response = requests.${method.toLowerCase()}(url, headers=headers)`}
print(response.json())`}
                        </pre>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}