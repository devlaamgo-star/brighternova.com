import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { 
  Play, 
  Pause, 
  RotateCcw, 
  CheckCircle, 
  Clock, 
  Shield, 
  Zap, 
  Database, 
  Server, 
  Cloud,
  Star,
  Users,
  Cpu,
  HardDrive,
  Network,
  ArrowRight,
  ChevronRight
} from "lucide-react";
import { Link } from "react-router-dom";

const Demo = () => {
  const [activeDemo, setActiveDemo] = useState("backup-process");
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  // Simulate demo progress
  const handlePlayDemo = () => {
    setIsPlaying(true);
    setProgress(0);
    
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsPlaying(false);
          return 100;
        }
        return prev + 2;
      });
    }, 100);
  };

  const handleResetDemo = () => {
    setIsPlaying(false);
    setProgress(0);
  };

  const demoFeatures = [
    {
      id: "backup-process",
      title: "Automated Backup Process",
      description: "Watch how our system automatically backs up your data",
      icon: Database,
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-6 rounded-lg border">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-2 bg-blue-500 text-white rounded-lg">
                <Database className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold">Database Backup in Progress</h3>
                <p className="text-sm text-muted-foreground">Backing up production database...</p>
              </div>
            </div>
            <Progress value={progress} className="mb-4" />
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex justify-between">
                <span>Files processed:</span>
                <span className="font-mono">{Math.floor(progress * 15.7)}/1,570</span>
              </div>
              <div className="flex justify-between">
                <span>Data size:</span>
                <span className="font-mono">{(progress * 0.247).toFixed(1)} GB</span>
              </div>
              <div className="flex justify-between">
                <span>Compression:</span>
                <span className="font-mono">73%</span>
              </div>
              <div className="flex justify-between">
                <span>Encryption:</span>
                <span className="text-green-600 font-medium">AES-256</span>
              </div>
            </div>
          </div>
          
          <div className="flex gap-4">
            <Button onClick={handlePlayDemo} disabled={isPlaying}>
              {isPlaying ? <Pause className="h-4 w-4 mr-2" /> : <Play className="h-4 w-4 mr-2" />}
              {isPlaying ? 'Running...' : 'Start Demo'}
            </Button>
            <Button variant="outline" onClick={handleResetDemo}>
              <RotateCcw className="h-4 w-4 mr-2" />
              Reset
            </Button>
          </div>
        </div>
      )
    },
    {
      id: "real-time-monitoring",
      title: "Real-time Monitoring",
      description: "Live dashboard showing backup status and system health",
      icon: Cpu,
      content: (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">System Health</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <Server className="h-4 w-4" />
                  Server Status
                </span>
                <Badge variant="default" className="bg-green-500">Online</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <HardDrive className="h-4 w-4" />
                  Storage Usage
                </span>
                <span>68% (2.1TB)</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <Network className="h-4 w-4" />
                  Network Status
                </span>
                <Badge variant="default" className="bg-green-500">Stable</Badge>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Recent Backups</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                { name: "Production DB", time: "2 min ago", status: "success" },
                { name: "User Files", time: "15 min ago", status: "success" },
                { name: "Config Files", time: "1 hour ago", status: "success" },
                { name: "Logs Archive", time: "3 hours ago", status: "success" }
              ].map((backup, index) => (
                <div key={index} className="flex items-center justify-between py-2">
                  <div>
                    <p className="font-medium text-sm">{backup.name}</p>
                    <p className="text-xs text-muted-foreground">{backup.time}</p>
                  </div>
                  <CheckCircle className="h-4 w-4 text-green-500" />
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      )
    },
    {
      id: "security-features",
      title: "Security & Encryption",
      description: "Advanced security features protecting your data",
      icon: Shield,
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { 
                title: "End-to-End Encryption", 
                description: "AES-256 encryption for data at rest and in transit",
                icon: Shield,
                status: "Active"
              },
              { 
                title: "Zero-Knowledge Architecture", 
                description: "Your encryption keys never leave your infrastructure",
                icon: Zap,
                status: "Enabled"
              },
              { 
                title: "Compliance Ready", 
                description: "SOC 2, GDPR, HIPAA compliance built-in",
                icon: CheckCircle,
                status: "Verified"
              }
            ].map((feature, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <feature.icon className="h-12 w-12 mx-auto mb-4 text-green-500" />
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{feature.description}</p>
                  <Badge variant="outline" className="text-green-600 border-green-600">
                    {feature.status}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CTO at TechFlow",
      company: "TechFlow Inc.",
      content: "Novabuckups saved us when our primary server crashed. The automated restoration was flawless.",
      rating: 5,
      avatar: "SC"
    },
    {
      name: "Marcus Rodriguez",
      role: "DevOps Engineer",
      company: "DataPrime Solutions",
      content: "The most reliable backup solution we've used. Zero data loss in 18 months of usage.",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "Emily Johnson",
      role: "IT Director",
      company: "FinanceForward",
      content: "Compliance reporting features are exceptional. Made our SOC 2 audit seamless.",
      rating: 5,
      avatar: "EJ"
    }
  ];

  const specifications = [
    { label: "Supported Databases", value: "MySQL, PostgreSQL, MongoDB, Redis, Elasticsearch" },
    { label: "Storage Options", value: "AWS S3, Google Cloud, Azure Blob, On-Premises" },
    { label: "Backup Frequency", value: "Real-time to Daily (customizable)" },
    { label: "Retention Policies", value: "Flexible, automated cleanup" },
    { label: "Recovery Time", value: "< 5 minutes for most datasets" },
    { label: "API Integration", value: "REST API, Webhooks, CLI tools" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-16 lg:py-24 bg-gradient-to-br from-background to-secondary/5">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-4xl mx-auto mb-12">
              <Badge variant="secondary" className="mb-4">
                <Play className="h-4 w-4 mr-2" />
                Interactive Demo
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                See Novabuckups in Action
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Experience our automated backup system through interactive demonstrations. 
                Discover why thousands of developers trust us with their critical data.
              </p>
            </div>

            {/* Interactive Demo Tabs */}
            <div className="max-w-6xl mx-auto">
              <Tabs value={activeDemo} onValueChange={setActiveDemo} className="space-y-8">
                <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 h-auto p-1">
                  {demoFeatures.map((feature) => (
                    <TabsTrigger 
                      key={feature.id} 
                      value={feature.id}
                      className="flex flex-col items-center gap-2 p-4 h-auto"
                    >
                      <feature.icon className="h-6 w-6" />
                      <div className="text-center">
                        <p className="font-medium text-sm">{feature.title}</p>
                        <p className="text-xs text-muted-foreground hidden sm:block">
                          {feature.description}
                        </p>
                      </div>
                    </TabsTrigger>
                  ))}
                </TabsList>

                {demoFeatures.map((feature) => (
                  <TabsContent key={feature.id} value={feature.id}>
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-3">
                          <feature.icon className="h-6 w-6" />
                          {feature.title}
                        </CardTitle>
                        <CardDescription>{feature.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        {feature.content}
                      </CardContent>
                    </Card>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Technical Specifications
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Built for enterprise-grade performance with comprehensive platform support
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card>
                <CardContent className="pt-6">
                  <div className="grid gap-6">
                    {specifications.map((spec, index) => (
                      <div key={index}>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                          <span className="font-medium text-foreground">{spec.label}</span>
                          <span className="text-muted-foreground font-mono text-sm sm:text-base">
                            {spec.value}
                          </span>
                        </div>
                        {index < specifications.length - 1 && <Separator className="mt-4" />}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Customer Testimonials */}
        <section className="py-16 lg:py-24 bg-secondary/5">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Trusted by Industry Leaders
              </h2>
              <p className="text-xl text-muted-foreground">
                See what our customers say about their experience
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="relative">
                  <CardContent className="pt-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <blockquote className="text-muted-foreground mb-6">
                      "{testimonial.content}"
                    </blockquote>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center text-primary-foreground font-semibold">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  question: "How quickly can I restore my data?",
                  answer: "Most data can be restored in under 5 minutes. Large datasets may take longer, but our point-in-time recovery ensures minimal downtime."
                },
                {
                  question: "Is my data encrypted during backup?",
                  answer: "Yes, all data is encrypted using AES-256 encryption both in transit and at rest. Your encryption keys remain under your control."
                },
                {
                  question: "What happens if the backup process fails?",
                  answer: "Our system includes automatic retry mechanisms, intelligent error handling, and instant notifications to ensure you're always informed."
                },
                {
                  question: "Can I schedule backups for specific times?",
                  answer: "Absolutely. You can configure backup schedules ranging from real-time continuous backups to daily, weekly, or monthly intervals."
                }
              ].map((faq, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-3 flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 mt-0.5 text-primary" />
                      {faq.question}
                    </h3>
                    <p className="text-muted-foreground pl-7">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-r from-primary/5 to-primary/10">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Secure Your Data?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Start your free trial today and experience the peace of mind that comes with automated, reliable backups.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group" asChild>
                <Link to="/signup">
                  Start Free Trial
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/schedule-demo">
                  Schedule Personal Demo
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Demo;
