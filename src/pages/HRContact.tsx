import { useState } from "react";
import { Mail, Phone, Clock, Send, CheckCircle, Users, MessageSquare } from "lucide-react";
import PageLayout from "@/components/shared/PageLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Alert, AlertDescription } from "@/components/ui/alert";

const HRContact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    inquiryType: "",
    message: "",
    urgency: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (submitted) {
    return (
      <PageLayout
        title="Message Sent"
        description="Your message has been sent to our HR team. We'll get back to you within 24 hours."
      >
        <div className="min-h-screen bg-background flex items-center justify-center px-4">
          <Card className="w-full max-w-md text-center">
            <CardHeader>
              <div className="bg-gradient-primary p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-glow">
                <CheckCircle className="h-8 w-8 text-primary-foreground" />
              </div>
              <CardTitle className="text-xl">Message Sent!</CardTitle>
              <CardDescription>
                Thank you for reaching out to our HR team
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                We've received your inquiry and our HR team will review it carefully. 
                You'll hear from us within 24 hours during business days.
              </p>
              <div className="flex flex-col gap-3">
                <Button className="w-full" onClick={() => window.location.href = "/careers"}>
                  Back to Careers
                </Button>
                <Button variant="outline" onClick={() => window.location.href = "/"}>
                  Go to Homepage
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
      title="Contact HR Team"
      description="Get in touch with our Human Resources team for recruitment inquiries, application support, or general employment questions."
    >
      <div className="min-h-screen bg-background py-12">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-heading font-bold text-foreground mb-4">
              Contact Our HR Team
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Have questions about our application process, open positions, or working at Novabuckups? 
              Our HR team is here to help.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    HR Team
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="h-4 w-4 mt-1 text-primary" />
                    <div>
                      <p className="font-medium text-sm">Email</p>
                      <p className="text-sm text-muted-foreground">hr@brighternova.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="h-4 w-4 mt-1 text-primary" />
                    <div>
                      <p className="font-medium text-sm">Phone</p>
                      <p className="text-sm text-muted-foreground">+44 20 1234 5678</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-4 w-4 mt-1 text-primary" />
                    <div>
                      <p className="font-medium text-sm">Office Hours</p>
                      <p className="text-sm text-muted-foreground">Mon-Fri, 9:00 AM - 5:00 PM GMT</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Response Times</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm">General Inquiries</span>
                    <span className="text-sm font-medium text-primary">24 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Application Support</span>
                    <span className="text-sm font-medium text-primary">4 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Interview Scheduling</span>
                    <span className="text-sm font-medium text-primary">2 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Urgent Matters</span>
                    <span className="text-sm font-medium text-primary">1 hour</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Common Topics</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Application status updates</li>
                    <li>• Interview scheduling</li>
                    <li>• Job requirements clarification</li>
                    <li>• Salary and benefits information</li>
                    <li>• Company culture questions</li>
                    <li>• Technical interview preparation</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5" />
                    Send us a Message
                  </CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
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
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="urgency">Urgency Level *</Label>
                        <Select onValueChange={(value) => handleInputChange("urgency", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select urgency level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="low">Low - General inquiry</SelectItem>
                            <SelectItem value="medium">Medium - Need response within 24h</SelectItem>
                            <SelectItem value="high">High - Need response within 4h</SelectItem>
                            <SelectItem value="urgent">Urgent - Need immediate response</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Inquiry Details */}
                    <div>
                      <Label htmlFor="inquiryType">Type of Inquiry *</Label>
                      <Select onValueChange={(value) => handleInputChange("inquiryType", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="application">Application Support</SelectItem>
                          <SelectItem value="interview">Interview Scheduling</SelectItem>
                          <SelectItem value="position">Position Information</SelectItem>
                          <SelectItem value="benefits">Salary & Benefits</SelectItem>
                          <SelectItem value="culture">Company Culture</SelectItem>
                          <SelectItem value="technical">Technical Questions</SelectItem>
                          <SelectItem value="feedback">Application Feedback</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        placeholder="Brief subject line"
                        required
                        value={formData.subject}
                        onChange={(e) => handleInputChange("subject", e.target.value)}
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        rows={6}
                        placeholder="Please provide details about your inquiry..."
                        required
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                      />
                    </div>

                    {/* Privacy Notice */}
                    <Alert>
                      <Mail className="h-4 w-4" />
                      <AlertDescription className="text-sm">
                        Your inquiry will be handled confidentially by our HR team. We use your information 
                        only to respond to your message and improve our recruitment process. See our{" "}
                        <a href="/privacy" className="text-primary hover:underline">
                          Privacy Policy
                        </a>{" "}
                        for more details.
                      </AlertDescription>
                    </Alert>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-primary shadow-glow"
                    >
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* FAQ Section */}
          <Card className="mt-12">
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
              <CardDescription>
                Quick answers to common HR and recruitment questions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">How long does the hiring process take?</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Our hiring process typically takes 2-3 weeks from application to offer, depending on the role and interview availability.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Do you provide visa sponsorship?</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    We evaluate visa sponsorship on a case-by-case basis for exceptional candidates in hard-to-fill roles.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">What's your remote work policy?</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    We're remote-first with most positions offering full remote work. Some roles may require occasional office visits.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Can I apply to multiple positions?</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Yes, you can apply to multiple positions, but we recommend focusing on roles that best match your skills and interests.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageLayout>
  );
};

export default HRContact;