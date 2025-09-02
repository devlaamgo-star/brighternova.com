import { useState } from "react";
import { Search, Book, Video, MessageCircle, Phone, Mail, Clock, AlertCircle, CheckCircle, HelpCircle, Zap, Shield, Users } from "lucide-react";
import PageLayout from "@/components/shared/PageLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TechnicalSupport = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [ticketSubmitted, setTicketSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    issueType: "",
    priority: "",
    subject: "",
    description: "",
    browserInfo: "",
    errorMessage: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTicketSubmitted(true);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const supportChannels = [
    {
      title: "Live Chat",
      description: "Get instant help from our support team",
      icon: MessageCircle,
      availability: "Mon-Fri, 9 AM - 6 PM GMT",
      responseTime: "< 5 minutes",
      status: "online",
    },
    {
      title: "Email Support",
      description: "Send detailed questions and get comprehensive answers",
      icon: Mail,
      availability: "24/7",
      responseTime: "< 2 hours",
      status: "online",
    },
    {
      title: "Phone Support",
      description: "Speak directly with our technical experts",
      icon: Phone,
      availability: "Mon-Fri, 9 AM - 5 PM GMT",
      responseTime: "Immediate",
      status: "online",
    },
    {
      title: "Video Call",
      description: "Screen sharing for complex technical issues",
      icon: Video,
      availability: "By appointment",
      responseTime: "Same day",
      status: "available",
    },
  ];

  const commonIssues = [
    {
      title: "Application Won't Load",
      category: "Access Issues",
      description: "Job application page shows loading spinner indefinitely",
      solution: "Clear browser cache and cookies, then try again. If issue persists, try a different browser.",
      difficulty: "Easy",
    },
    {
      title: "File Upload Failing",
      category: "Upload Issues",
      description: "CV/Resume upload returns error message",
      solution: "Ensure file is under 5MB and in PDF/DOC format. Check your internet connection.",
      difficulty: "Easy",
    },
    {
      title: "Form Data Not Saving",
      category: "Form Issues",
      description: "Application form resets when navigating between sections",
      solution: "Enable cookies in your browser and disable ad blockers for this site.",
      difficulty: "Medium",
    },
    {
      title: "Email Notifications Missing",
      category: "Communication",
      description: "Not receiving confirmation emails after application submission",
      solution: "Check spam folder and add hr@Novabuckups.com to your safe senders list.",
      difficulty: "Easy",
    },
    {
      title: "Password Reset Not Working",
      category: "Account Issues",
      description: "Password reset email not arriving",
      solution: "Wait 5-10 minutes and check spam folder. Contact support if still not received.",
      difficulty: "Easy",
    },
    {
      title: "Mobile Application Issues",
      category: "Mobile",
      description: "Application form not working properly on mobile device",
      solution: "Use latest mobile browser version or switch to desktop for best experience.",
      difficulty: "Medium",
    },
  ];

  const filteredIssues = commonIssues.filter(issue =>
    issue.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    issue.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    issue.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (ticketSubmitted) {
    return (
      <PageLayout
        title="Support Ticket Submitted"
        description="Your technical support request has been submitted successfully. Our team will get back to you soon."
      >
        <div className="min-h-screen bg-background flex items-center justify-center px-4">
          <Card className="w-full max-w-md text-center">
            <CardHeader>
              <div className="bg-gradient-primary p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-glow">
                <CheckCircle className="h-8 w-8 text-primary-foreground" />
              </div>
              <CardTitle className="text-xl">Ticket Submitted!</CardTitle>
              <CardDescription>
                Ticket #TS-{Math.random().toString(36).substr(2, 9).toUpperCase()}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                Our technical support team has received your request and will respond based on your selected priority level.
              </p>
              <div className="space-y-3">
                <Button className="w-full" onClick={() => window.location.href = "/help"}>
                  Visit Help Center
                </Button>
                <Button variant="outline" onClick={() => window.location.href = "/apply"}>
                  Back to Application
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout
      title="Technical Support"
      description="Get technical help with job applications, website issues, and account problems. Our support team is here to help you succeed."
    >
      <div className="min-h-screen bg-background py-12">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-heading font-bold text-foreground mb-4">
              Technical Support
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Having technical difficulties with your application? Our support team is here to help you resolve any issues quickly.
            </p>
          </div>

          <Tabs defaultValue="help" className="space-y-8">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="help">Get Help</TabsTrigger>
              <TabsTrigger value="contact">Contact Support</TabsTrigger>
              <TabsTrigger value="status">System Status</TabsTrigger>
            </TabsList>

            {/* Get Help Tab */}
            <TabsContent value="help" className="space-y-8">
              {/* Search Common Issues */}
              <section>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-heading font-bold text-foreground">
                    Common Issues
                  </h2>
                  <div className="relative w-full max-w-md">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search for solutions..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredIssues.map((issue, index) => (
                    <Card key={index} className="hover:shadow-elegant transition-smooth">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="outline" className="text-xs">
                            {issue.category}
                          </Badge>
                          <Badge variant={issue.difficulty === "Easy" ? "default" : "secondary"} className="text-xs">
                            {issue.difficulty}
                          </Badge>
                        </div>
                        <CardTitle className="text-lg">{issue.title}</CardTitle>
                        <CardDescription>{issue.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="bg-card p-4 rounded-lg border">
                          <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                            <Zap className="h-3 w-3 text-primary" />
                            Solution
                          </h4>
                          <p className="text-sm text-muted-foreground">{issue.solution}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {filteredIssues.length === 0 && (
                  <div className="text-center py-8">
                    <HelpCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">
                      No solutions found for "{searchQuery}". Try contacting our support team directly.
                    </p>
                  </div>
                )}
              </section>
            </TabsContent>

            {/* Contact Support Tab */}
            <TabsContent value="contact">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Contact Information */}
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Users className="h-5 w-5" />
                        Support Team
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Mail className="h-4 w-4 mt-1 text-primary" />
                        <div>
                          <p className="font-medium text-sm">Email</p>
                          <p className="text-sm text-muted-foreground">support@Novabuckups.com</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Phone className="h-4 w-4 mt-1 text-primary" />
                        <div>
                          <p className="font-medium text-sm">Phone</p>
                          <p className="text-sm text-muted-foreground">+44 20 1234 5679</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Clock className="h-4 w-4 mt-1 text-primary" />
                        <div>
                          <p className="font-medium text-sm">Hours</p>
                          <p className="text-sm text-muted-foreground">24/7 for critical issues</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Priority Levels</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Critical</span>
                        <Badge variant="destructive" className="text-xs">15 min</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">High</span>
                        <Badge variant="default" className="text-xs">1 hour</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Medium</span>
                        <Badge variant="secondary" className="text-xs">4 hours</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Low</span>
                        <Badge variant="outline" className="text-xs">24 hours</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Support Ticket Form */}
                <div className="lg:col-span-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Submit Support Ticket</CardTitle>
                      <CardDescription>
                        Describe your technical issue in detail and we'll help resolve it quickly.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="name">Full Name *</Label>
                            <Input
                              id="name"
                              required
                              value={formData.name}
                              onChange={(e) => handleInputChange("name", e.target.value)}
                            />
                          </div>
                          <div>
                            <Label htmlFor="email">Email Address *</Label>
                            <Input
                              id="email"
                              type="email"
                              required
                              value={formData.email}
                              onChange={(e) => handleInputChange("email", e.target.value)}
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="issueType">Issue Type *</Label>
                            <Select onValueChange={(value) => handleInputChange("issueType", value)}>
                              <SelectTrigger>
                                <SelectValue placeholder="Select issue type" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="application">Application Form Issues</SelectItem>
                                <SelectItem value="upload">File Upload Problems</SelectItem>
                                <SelectItem value="login">Login/Account Issues</SelectItem>
                                <SelectItem value="email">Email/Notification Issues</SelectItem>
                                <SelectItem value="mobile">Mobile App Issues</SelectItem>
                                <SelectItem value="performance">Site Performance</SelectItem>
                                <SelectItem value="browser">Browser Compatibility</SelectItem>
                                <SelectItem value="other">Other Technical Issue</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <Label htmlFor="priority">Priority Level *</Label>
                            <Select onValueChange={(value) => handleInputChange("priority", value)}>
                              <SelectTrigger>
                                <SelectValue placeholder="Select priority" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="critical">Critical - Cannot proceed</SelectItem>
                                <SelectItem value="high">High - Urgent deadline</SelectItem>
                                <SelectItem value="medium">Medium - Need help soon</SelectItem>
                                <SelectItem value="low">Low - General inquiry</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="subject">Subject *</Label>
                          <Input
                            id="subject"
                            placeholder="Brief description of the issue"
                            required
                            value={formData.subject}
                            onChange={(e) => handleInputChange("subject", e.target.value)}
                          />
                        </div>

                        <div>
                          <Label htmlFor="description">Detailed Description *</Label>
                          <Textarea
                            id="description"
                            rows={6}
                            placeholder="Please describe the issue in detail, including steps to reproduce the problem..."
                            required
                            value={formData.description}
                            onChange={(e) => handleInputChange("description", e.target.value)}
                          />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="browserInfo">Browser & Version</Label>
                            <Input
                              id="browserInfo"
                              placeholder="e.g., Chrome 91.0, Safari 14.1"
                              value={formData.browserInfo}
                              onChange={(e) => handleInputChange("browserInfo", e.target.value)}
                            />
                          </div>
                          <div>
                            <Label htmlFor="errorMessage">Error Message (if any)</Label>
                            <Input
                              id="errorMessage"
                              placeholder="Copy the exact error message here"
                              value={formData.errorMessage}
                              onChange={(e) => handleInputChange("errorMessage", e.target.value)}
                            />
                          </div>
                        </div>

                        <Alert>
                          <AlertCircle className="h-4 w-4" />
                          <AlertDescription className="text-sm">
                            For security reasons, never include passwords or sensitive personal information in your support request.
                          </AlertDescription>
                        </Alert>

                        <Button
                          type="submit"
                          size="lg"
                          className="w-full bg-gradient-primary shadow-glow"
                        >
                          Submit Support Ticket
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* System Status Tab */}
            <TabsContent value="status">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="h-5 w-5 text-green-500" />
                      System Status - All Systems Operational
                    </CardTitle>
                    <CardDescription>
                      Last updated: {new Date().toLocaleString()}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { service: "Job Application Portal", status: "operational", uptime: "99.9%" },
                        { service: "File Upload Service", status: "operational", uptime: "99.8%" },
                        { service: "Email Notifications", status: "operational", uptime: "99.9%" },
                        { service: "User Authentication", status: "operational", uptime: "100%" },
                        { service: "Database", status: "operational", uptime: "99.9%" },
                        { service: "API Services", status: "operational", uptime: "99.8%" },
                      ].map((item, index) => (
                        <div key={index} className="flex items-center justify-between p-3 rounded-lg border">
                          <div className="flex items-center gap-3">
                            <div className="h-3 w-3 rounded-full bg-green-500"></div>
                            <span className="font-medium">{item.service}</span>
                          </div>
                          <div className="flex items-center gap-4 text-sm">
                            <span className="text-muted-foreground">Uptime: {item.uptime}</span>
                            <Badge variant="outline" className="text-green-700 border-green-200">
                              {item.status}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Recent Incidents</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center py-8">
                      No recent incidents to report. All systems are running smoothly.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </PageLayout>
  );
};

export default TechnicalSupport;
