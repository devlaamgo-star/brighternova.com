import PageLayout from "@/components/shared/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Calendar, Clock, Users, Phone, Video, MessageSquare, CheckCircle, Shield, FileText, Building } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ScheduleConsultationCall = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Consultation Scheduled",
      description: "Our team will send you a calendar invite within 2 hours.",
    });
  };

  const consultationTypes = [
    {
      icon: Shield,
      title: "Security Consultation",
      duration: "30-45 minutes",
      description: "Discuss your security requirements and how our solutions can help",
      topics: [
        "Security architecture review",
        "Compliance requirements discussion",
        "Risk assessment planning",
        "Security best practices"
      ]
    },
    {
      icon: FileText,
      title: "Compliance Consultation",
      duration: "45-60 minutes",
      description: "Review compliance frameworks and documentation needs",
      topics: [
        "Regulatory compliance requirements",
        "Audit preparation guidance",
        "Documentation gap analysis",
        "Compliance roadmap planning"
      ]
    },
    {
      icon: Building,
      title: "Enterprise Solution Review",
      duration: "60-90 minutes",
      description: "Comprehensive review of enterprise security solutions",
      topics: [
        "Enterprise architecture planning",
        "Custom solution development",
        "Integration requirements",
        "Scalability considerations"
      ]
    },
    {
      icon: Users,
      title: "Team Training Consultation",
      duration: "30-45 minutes",
      description: "Discuss security training and awareness programs",
      topics: [
        "Security awareness training",
        "Technical training programs",
        "Certification pathways",
        "Training effectiveness measurement"
      ]
    }
  ];

  const meetingFormats = [
    {
      icon: Video,
      title: "Video Call",
      description: "Face-to-face discussion via video conference",
      platforms: ["Microsoft Teams", "Zoom", "Google Meet"]
    },
    {
      icon: Phone,
      title: "Phone Call",
      description: "Traditional phone conversation",
      platforms: ["Direct dial", "Conference bridge"]
    },
    {
      icon: MessageSquare,
      title: "In-Person Meeting",
      description: "Face-to-face meeting at your location or ours",
      platforms: ["Your office", "Our office", "Neutral location"]
    }
  ];

  const timeSlots = [
    "09:00 - 10:00", "10:00 - 11:00", "11:00 - 12:00",
    "13:00 - 14:00", "14:00 - 15:00", "15:00 - 16:00", "16:00 - 17:00"
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: "Expert Guidance",
      description: "Get advice from certified security professionals"
    },
    {
      icon: Shield,
      title: "Tailored Solutions",
      description: "Receive recommendations specific to your needs"
    },
    {
      icon: Clock,
      title: "No Commitment",
      description: "Free consultation with no obligation"
    },
    {
      icon: Users,
      title: "Dedicated Support",
      description: "Direct access to our security experts"
    }
  ];

  return (
    <PageLayout 
      title="Schedule Consultation Call - Expert Security Guidance" 
      description="Schedule a free consultation call with our security experts. Get personalized advice on security solutions, compliance requirements, and best practices for your organization."
    >
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="glass mb-6">
              <Users className="h-4 w-4 mr-2" />
              Expert Consultation
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
              Schedule consultation 
              <span className="block">call</span>
            </h1>
            <p className="text-xl lg:text-2xl text-primary-foreground/80 text-balance mb-8 max-w-3xl mx-auto">
              Get personalized security guidance from our certified experts. 
              Free consultation with no strings attached.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Why book a <span className="text-primary">consultation</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center bg-gradient-card border-border/50 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="bg-primary/10 p-4 rounded-xl w-fit mx-auto mb-4">
                    <benefit.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Types */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Consultation <span className="text-primary">types</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Choose the type of consultation that best matches your needs 
              and objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {consultationTypes.map((type, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-500 border-border/50 hover:border-primary/20 bg-background">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="bg-primary/10 p-4 rounded-xl group-hover:bg-primary/20 transition-colors">
                      <type.icon className="h-8 w-8 text-primary" />
                    </div>
                    <Badge variant="outline">
                      <Clock className="h-3 w-3 mr-1" />
                      {type.duration}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {type.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {type.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-3">Discussion topics:</h4>
                  <ul className="space-y-2">
                    {type.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Meeting Formats */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Meeting <span className="text-primary">formats</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Choose your preferred meeting format for maximum convenience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {meetingFormats.map((format, index) => (
              <Card key={index} className="text-center bg-gradient-card border-border/50 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="bg-primary/10 p-4 rounded-xl w-fit mx-auto mb-4">
                    <format.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{format.title}</h3>
                  <p className="text-muted-foreground">{format.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1">
                    {format.platforms.map((platform, platformIndex) => (
                      <div key={platformIndex} className="text-sm text-muted-foreground">
                        • {platform}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                Book your <span className="text-primary">consultation</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Fill out the form below and we'll send you a calendar invite 
                within 2 hours.
              </p>
            </div>

            <Card className="bg-background border-border/50">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Contact Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input id="name" required placeholder="Enter your full name" />
                      </div>
                      <div>
                        <Label htmlFor="title">Job Title *</Label>
                        <Input id="title" required placeholder="Enter your job title" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email">Business Email *</Label>
                        <Input id="email" type="email" required placeholder="Enter your business email" />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input id="phone" type="tel" required placeholder="Enter your phone number" />
                      </div>
                    </div>
                  </div>

                  {/* Company Information */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Company Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="company">Company Name *</Label>
                        <Input id="company" required placeholder="Enter company name" />
                      </div>
                      <div>
                        <Label htmlFor="industry">Industry *</Label>
                        <Select required>
                          <SelectTrigger>
                            <SelectValue placeholder="Select industry" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="healthcare">Healthcare</SelectItem>
                            <SelectItem value="finance">Financial Services</SelectItem>
                            <SelectItem value="education">Education</SelectItem>
                            <SelectItem value="government">Government</SelectItem>
                            <SelectItem value="technology">Technology</SelectItem>
                            <SelectItem value="manufacturing">Manufacturing</SelectItem>
                            <SelectItem value="retail">Retail</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="company-size">Company Size *</Label>
                      <Select required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select company size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="startup">Startup (1-50 employees)</SelectItem>
                          <SelectItem value="small">Small (51-200 employees)</SelectItem>
                          <SelectItem value="medium">Medium (201-1000 employees)</SelectItem>
                          <SelectItem value="large">Large (1000+ employees)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Consultation Details */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Consultation Details</h3>
                    <div>
                      <Label htmlFor="consultation-type">Consultation Type *</Label>
                      <Select required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select consultation type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="security">Security Consultation</SelectItem>
                          <SelectItem value="compliance">Compliance Consultation</SelectItem>
                          <SelectItem value="enterprise">Enterprise Solution Review</SelectItem>
                          <SelectItem value="training">Team Training Consultation</SelectItem>
                          <SelectItem value="general">General Discussion</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="meeting-format">Preferred Meeting Format *</Label>
                      <Select required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select meeting format" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="video">Video Call</SelectItem>
                          <SelectItem value="phone">Phone Call</SelectItem>
                          <SelectItem value="in-person">In-Person Meeting</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="preferred-date">Preferred Date *</Label>
                        <Input id="preferred-date" type="date" required />
                      </div>
                      <div>
                        <Label htmlFor="preferred-time">Preferred Time *</Label>
                        <Select required>
                          <SelectTrigger>
                            <SelectValue placeholder="Select time" />
                          </SelectTrigger>
                          <SelectContent>
                            {timeSlots.map((slot) => (
                              <SelectItem key={slot} value={slot}>{slot}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="timezone">Timezone *</Label>
                      <Select required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select timezone" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="GMT">GMT (London)</SelectItem>
                          <SelectItem value="CET">CET (Central Europe)</SelectItem>
                          <SelectItem value="EST">EST (New York)</SelectItem>
                          <SelectItem value="PST">PST (Los Angeles)</SelectItem>
                          <SelectItem value="JST">JST (Tokyo)</SelectItem>
                          <SelectItem value="AEST">AEST (Sydney)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="objectives">Meeting Objectives *</Label>
                      <Textarea 
                        id="objectives" 
                        required
                        placeholder="Please describe what you'd like to discuss, your current challenges, and what you hope to achieve from this consultation..."
                        className="min-h-[120px]"
                      />
                    </div>

                    <div>
                      <Label>Current Challenges (select all that apply)</Label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-2">
                        {[
                          "Data security", "Compliance", "Risk management", 
                          "Staff training", "Budget planning", "Technology selection",
                          "Audit preparation", "Incident response", "Other"
                        ].map((challenge) => (
                          <div key={challenge} className="flex items-center space-x-2">
                            <Checkbox id={challenge} />
                            <Label htmlFor={challenge} className="text-sm">{challenge}</Label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Submit */}
                  <div className="pt-6">
                    <Button type="submit" size="lg" className="w-full">
                      <Calendar className="h-5 w-5 mr-2" />
                      Schedule Consultation Call
                    </Button>
                    <p className="text-sm text-muted-foreground text-center mt-3">
                      We'll send you a calendar invite within 2 hours of submission.
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-card border-border/50">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Prefer to Talk Now?</h3>
                  <p className="text-muted-foreground mb-6">
                    If you'd rather speak immediately, give us a call or send an email. 
                    Our team is available during business hours.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="text-center">
                    <h4 className="font-semibold mb-2">Sales Team</h4>
                    <a href="tel:+44208123456" className="text-primary hover:underline text-lg">
                      +44 (0) 20 8123 456
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">Mon-Fri, 9AM-6PM GMT</p>
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold mb-2">Email Us</h4>
                    <a href="mailto:sales@Novabuckups.com" className="text-primary hover:underline text-lg">
                      sales@Novabuckups.com
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">Response within 4 hours</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ScheduleConsultationCall;