import PageLayout from "@/components/shared/PageLayout";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle, 
  AlertCircle, 
  XCircle, 
  Clock,
  Activity,
  Server,
  Database,
  Globe,
  Shield
} from "lucide-react";

const Status = () => {
  const currentStatus = {
    overall: "operational",
    lastUpdated: "2024-12-18 14:30 GMT"
  };

  const services = [
    {
      name: "Backup API",
      status: "operational",
      description: "Core backup scheduling and management API",
      uptime: "99.98%",
      responseTime: "142ms"
    },
    {
      name: "Restore Service",
      status: "operational", 
      description: "Data restoration and recovery service",
      uptime: "99.95%",
      responseTime: "89ms"
    },
    {
      name: "Database Connectors",
      status: "operational",
      description: "MySQL, PostgreSQL, MongoDB connections",
      uptime: "99.97%",
      responseTime: "67ms"
    },
    {
      name: "Cloud Storage",
      status: "operational",
      description: "AWS S3, GCP, Azure storage backends",
      uptime: "99.99%",
      responseTime: "23ms"
    },
    {
      name: "Authentication",
      status: "operational",
      description: "User authentication and authorization",
      uptime: "99.96%",
      responseTime: "156ms"
    },
    {
      name: "Web Dashboard",
      status: "maintenance",
      description: "User dashboard and management interface",
      uptime: "99.92%",
      responseTime: "234ms"
    }
  ];

  const incidents = [
    {
      date: "2024-12-18",
      title: "Scheduled Dashboard Maintenance",
      status: "in-progress",
      description: "Routine maintenance to improve dashboard performance. Expected completion: 16:00 GMT.",
      impact: "low",
      duration: "2 hours"
    },
    {
      date: "2024-12-15",
      title: "Brief API Latency Increase",
      status: "resolved",
      description: "Temporarily increased response times due to high traffic. Resolved by scaling infrastructure.",
      impact: "low",
      duration: "23 minutes"
    },
    {
      date: "2024-12-10",
      title: "PostgreSQL Connector Issue",
      status: "resolved",
      description: "Connection timeouts for some PostgreSQL instances. Fixed with connector update.",
      impact: "medium",
      duration: "1 hour 15 minutes"
    }
  ];

  const metrics = [
    { label: "Uptime (30 days)", value: "99.97%", icon: Activity },
    { label: "Response Time", value: "127ms", icon: Clock },
    { label: "Successful Backups", value: "99.94%", icon: CheckCircle },
    { label: "Active Monitors", value: "24/7", icon: Server }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "operational":
        return <CheckCircle className="h-5 w-5 text-accent" />;
      case "maintenance":
        return <AlertCircle className="h-5 w-5 text-warning" />;
      case "degraded":
        return <AlertCircle className="h-5 w-5 text-warning" />;
      case "outage":
        return <XCircle className="h-5 w-5 text-destructive" />;
      default:
        return <CheckCircle className="h-5 w-5 text-accent" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "operational":
        return "bg-accent text-accent-foreground";
      case "maintenance":
        return "bg-warning text-warning-foreground";
      case "degraded":
        return "bg-warning text-warning-foreground";
      case "outage":
        return "bg-destructive text-destructive-foreground";
      default:
        return "bg-accent text-accent-foreground";
    }
  };

  return (
    <PageLayout 
      title="System Status - Service Health & Uptime"
      description="Real-time status of Novabuckups services including API, backups, storage, and authentication systems. Current uptime and incident reports."
    >
      {/* Status Header */}
      <section className="py-20 bg-gradient-to-br from-background to-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <CheckCircle className="h-8 w-8 text-accent" />
              <Badge className="bg-accent text-accent-foreground text-lg px-4 py-2">
                All Systems Operational
              </Badge>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
              Service <span className="text-primary">Status</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-4">
              Real-time monitoring of all Novabuckups services and infrastructure
            </p>
            <p className="text-sm text-muted-foreground">
              Last updated: {currentStatus.lastUpdated}
            </p>
          </div>
        </div>
      </section>

      {/* Metrics Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {metrics.map((metric, index) => (
              <Card key={index} className="text-center bg-gradient-card border-border/50">
                <CardContent className="p-6">
                  <metric.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                  <div className="text-2xl font-bold mb-1">{metric.value}</div>
                  <div className="text-sm text-muted-foreground">{metric.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Status */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Current Service Status</h2>
          
          <div className="max-w-4xl mx-auto space-y-4">
            {services.map((service, index) => (
              <Card key={index} className="bg-background border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      {getStatusIcon(service.status)}
                      <div>
                        <h3 className="font-semibold text-lg">{service.name}</h3>
                        <p className="text-muted-foreground text-sm">{service.description}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge className={getStatusColor(service.status)} variant="secondary">
                        {service.status}
                      </Badge>
                      <div className="text-xs text-muted-foreground mt-2">
                        {service.uptime} uptime • {service.responseTime} avg
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Incidents */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Recent Incidents</h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {incidents.map((incident, index) => (
              <Card key={index} className="bg-gradient-card border-border/50">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-lg">{incident.title}</h3>
                      <p className="text-muted-foreground text-sm">{incident.date}</p>
                    </div>
                    <div className="text-right">
                      <Badge 
                        variant="outline" 
                        className={incident.status === "resolved" ? "text-accent border-accent" : "text-warning border-warning"}
                      >
                        {incident.status}
                      </Badge>
                      <div className="text-xs text-muted-foreground mt-1">
                        {incident.impact} impact • {incident.duration}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{incident.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure Info */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Infrastructure</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-background border-border/50">
                <CardContent className="p-6 text-center">
                  <Globe className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Global CDN</h3>
                  <p className="text-sm text-muted-foreground">
                    Multi-region deployment across EU and UK data centres
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-background border-border/50">
                <CardContent className="p-6 text-center">
                  <Shield className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Security</h3>
                  <p className="text-sm text-muted-foreground">
                    24/7 monitoring with automated threat detection
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-background border-border/50">
                <CardContent className="p-6 text-center">
                  <Database className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Redundancy</h3>
                  <p className="text-sm text-muted-foreground">
                    Multi-zone backup with automatic failover
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Status;