import PageLayout from "@/components/shared/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Search, 
  HelpCircle, 
  Shield, 
  Settings, 
  CreditCard, 
  Users, 
  Code, 
  Phone,
  Mail,
  MessageCircle,
  ExternalLink,
  CheckCircle
} from "lucide-react";
import { useState } from "react";

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const faqCategories = {
    general: {
      title: "General Questions",
      icon: HelpCircle,
      faqs: [
        {
          question: "What is Novabuckups and how does it work?",
          answer: "Novabuckups is a secure backup solution that automatically backs up your important data to encrypted cloud storage. Our service uses military-grade encryption and provides continuous data protection with automatic scheduling, versioning, and instant recovery options."
        },
        {
          question: "Which platforms and devices are supported?",
          answer: "Novabuckups supports Windows, macOS, Linux, iOS, and Android. We also provide API access for custom integrations and support for major cloud platforms including AWS, Google Cloud, and Microsoft Azure."
        },
        {
          question: "How secure is my data with Novabuckups?",
          answer: "Your data is protected with AES-256 encryption both in transit and at rest. We use zero-knowledge architecture, meaning only you have access to your encryption keys. Our infrastructure is SOC 2 compliant and regularly audited by independent security firms."
        },
        {
          question: "What happens if I exceed my storage limit?",
          answer: "If you approach your storage limit, we'll notify you via email. You can either upgrade your plan or delete old backup versions. Your backups will continue to work normally until you reach 110% of your limit, at which point new backups will pause until you free up space."
        },
        {
          question: "Can I access my backups from anywhere?",
          answer: "Yes, you can access your backups from any device through our web portal, mobile apps, or desktop applications. All access is secured with multi-factor authentication and encrypted connections."
        }
      ]
    },
    setup: {
      title: "Setup & Configuration",
      icon: Settings,
      faqs: [
        {
          question: "How do I get started with Novabuckups?",
          answer: "Getting started is easy: 1) Create your account at brighternova.com, 2) Download our application for your device, 3) Sign in and select what you want to back up, 4) Configure your backup schedule. Your first backup will begin automatically."
        },
        {
          question: "How do I configure automatic backups?",
          answer: "In the Novabuckups application, go to Settings > Backup Schedule. You can set backups to run hourly, daily, weekly, or continuously. We recommend continuous backup for critical files and daily backup for general files."
        },
        {
          question: "Can I backup external drives and network storage?",
          answer: "Yes, Novabuckups can backup external USB drives, network attached storage (NAS), and mapped network drives. Simply add these locations in your backup configuration and ensure they're accessible when backups run."
        },
        {
          question: "How do I exclude certain files or folders?",
          answer: "In your backup configuration, use the 'Exclusions' tab to specify files, folders, or file types to skip. You can exclude by file extension (e.g., *.tmp), folder paths, or file size. Common exclusions include temp files, cache folders, and large media files."
        },
        {
          question: "What's the difference between full and incremental backups?",
          answer: "Full backups copy all selected files every time, while incremental backups only copy files that have changed since the last backup. Novabuckups uses intelligent incremental backups by default to save time and bandwidth, with periodic full backups for integrity."
        }
      ]
    },
    billing: {
      title: "Billing & Plans",
      icon: CreditCard,
      faqs: [
        {
          question: "What payment methods do you accept?",
          answer: "We accept all major credit cards (Visa, MasterCard, American Express) and bank transfers for enterprise customers. All payments are processed securely with PCI DSS compliance and bank-level encryption."
        },
        {
          question: "Can I change my plan anytime?",
          answer: "Yes, you can upgrade or downgrade your plan at any time. Upgrades take effect immediately, while downgrades take effect at your next billing cycle. Any plan changes are prorated automatically."
        },
        {
          question: "Do you offer discounts for annual payments?",
          answer: "Yes, we offer 2 months free when you pay annually (17% discount). Enterprise customers can also negotiate custom pricing for multi-year contracts and volume discounts."
        },
        {
          question: "What happens if I cancel my subscription?",
          answer: "You can cancel anytime with no cancellation fees. Your service continues until the end of your billing period. After cancellation, you have 30 days to download your data before it's permanently deleted."
        },
        {
          question: "Do you offer a free trial?",
          answer: "Yes, we offer a 14-day free trial with full access to all features and 100GB of backup storage. No credit card required to start your trial."
        }
      ]
    },
    security: {
      title: "Security & Privacy",
      icon: Shield,
      faqs: [
        {
          question: "How is my data encrypted?",
          answer: "We use AES-256-GCM encryption for data at rest and TLS 1.3 for data in transit. Your data is encrypted on your device before transmission using keys that only you control. We cannot access your data even if we wanted to."
        },
        {
          question: "Where is my data stored?",
          answer: "Your data is stored in enterprise-grade data centers in the UK and EU. We use multiple availability zones for redundancy and compliance with GDPR. You can choose your preferred data region in your account settings."
        },
        {
          question: "What compliance certifications do you have?",
          answer: "Novabuckups is SOC 2 Type II certified, GDPR compliant, and working towards ISO 27001 certification. We undergo regular security audits and penetration testing by independent third parties."
        },
        {
          question: "How do you handle data breaches?",
          answer: "We follow a strict incident response protocol. In the unlikely event of a security incident, affected customers are notified within 72 hours as required by GDPR. However, due to our zero-knowledge encryption, your data remains protected even in a breach scenario."
        },
        {
          question: "Can Novabuckups employees access my data?",
          answer: "No, our zero-knowledge architecture ensures that Novabuckups employees cannot access your encrypted data. Only you have the encryption keys, and we designed our systems so that we cannot bypass this protection."
        }
      ]
    },
    technical: {
      title: "Technical Support",
      icon: Code,
      faqs: [
        {
          question: "What internet connection do I need?",
          answer: "Novabuckups works with any broadband internet connection. We recommend at least 10 Mbps upload speed for optimal performance. Our adaptive throttling ensures backups don't interfere with your regular internet usage."
        },
        {
          question: "How much bandwidth does Novabuckups use?",
          answer: "Bandwidth usage depends on how much data changes between backups. Initial backups use more bandwidth, but subsequent incremental backups typically use very little. You can set bandwidth limits in the application settings."
        },
        {
          question: "Why is my backup running slowly?",
          answer: "Slow backups can be caused by large file sizes, limited bandwidth, or system resources. Try: 1) Checking your internet speed, 2) Adjusting bandwidth limits, 3) Running backups during off-peak hours, 4) Excluding large unnecessary files."
        },
        {
          question: "How do I restore files from a backup?",
          answer: "You can restore files through the web portal, desktop app, or mobile app. Select the backup date, choose the files you want to restore, and select the restoration location. Files are downloaded and decrypted automatically."
        },
        {
          question: "Can I backup databases and running applications?",
          answer: "Yes, Novabuckups includes special handling for databases (MySQL, PostgreSQL, SQL Server) and application data. We use Volume Shadow Copy Service (VSS) on Windows and similar technologies on other platforms to backup open files consistently."
        }
      ]
    },
    enterprise: {
      title: "Enterprise & Teams",
      icon: Users,
      faqs: [
        {
          question: "What enterprise features are available?",
          answer: "Enterprise plans include centralized management, user provisioning, advanced reporting, custom retention policies, API access, dedicated support, SSO integration, and custom branding options."
        },
        {
          question: "How does team management work?",
          answer: "Administrators can create and manage user accounts, set backup policies, monitor backup status across the organization, and generate compliance reports. Users can be organized into groups with different policies and permissions."
        },
        {
          question: "Do you support single sign-on (SSO)?",
          answer: "Yes, we support SAML 2.0 and OpenID Connect for SSO integration with Active Directory, Okta, Azure AD, Google Workspace, and other identity providers. This is available on Enterprise plans."
        },
        {
          question: "Can I get dedicated support?",
          answer: "Enterprise customers receive dedicated support with guaranteed response times, a dedicated customer success manager, and priority phone support. We also offer on-site training and implementation assistance."
        },
        {
          question: "What SLAs do you offer?",
          answer: "Enterprise plans include 99.9% uptime SLA with financial penalties for downtime. We also guarantee backup completion times and recovery time objectives based on your specific requirements."
        }
      ]
    }
  };

  // Filter FAQs based on search query
  const filteredCategories = Object.entries(faqCategories).reduce((acc, [key, category]) => {
    if (!searchQuery) {
      acc[key] = category;
      return acc;
    }

    const filteredFaqs = category.faqs.filter(faq => 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (filteredFaqs.length > 0) {
      acc[key] = { ...category, faqs: filteredFaqs };
    }

    return acc;
  }, {} as typeof faqCategories);

  const popularQuestions = [
    "How secure is my data?",
    "How do I get started?",
    "What happens if I cancel?",
    "Can I restore individual files?",
    "Do you offer enterprise plans?"
  ];

  return (
    <PageLayout 
      title="Frequently Asked Questions - Help & Support" 
      description="Find answers to common questions about Novabuckups backup service, including setup, security, billing, technical support, and enterprise features."
    >
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="glass mb-6">
              <HelpCircle className="h-4 w-4 mr-2" />
              Help & Support
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
              Frequently asked 
              <span className="block">questions</span>
            </h1>
            <p className="text-xl lg:text-2xl text-primary-foreground/80 text-balance mb-8 max-w-3xl mx-auto">
              Find quick answers to common questions about our backup service, 
              security, billing, and technical support.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-primary-foreground/60" />
                <Input
                  type="text"
                  placeholder="Search FAQs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 py-4 text-lg glass border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/60"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Questions */}
      {!searchQuery && (
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-4">Popular Questions</h2>
              <p className="text-muted-foreground">Quick access to our most frequently asked questions</p>
            </div>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {popularQuestions.map((question, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  onClick={() => setSearchQuery(question.toLowerCase())}
                  className="hover:bg-primary hover:text-primary-foreground"
                >
                  {question}
                </Button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          {searchQuery ? (
            /* Search Results */
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4">
                  Search Results for "{searchQuery}"
                </h2>
                <p className="text-muted-foreground">
                  {Object.values(filteredCategories).reduce((total, category) => total + category.faqs.length, 0)} results found
                </p>
              </div>

              {Object.keys(filteredCategories).length === 0 ? (
                <Card className="text-center p-8 bg-muted/30">
                  <CardContent>
                    <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">No results found</h3>
                    <p className="text-muted-foreground mb-4">
                      Try searching with different keywords or browse our categories below.
                    </p>
                    <Button onClick={() => setSearchQuery("")}>
                      Clear Search
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <div className="space-y-8">
                  {Object.entries(filteredCategories).map(([key, category]) => (
                    <div key={key}>
                      <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                        <category.icon className="h-5 w-5 text-primary" />
                        {category.title}
                      </h3>
                      <Accordion type="single" collapsible className="space-y-2">
                        {category.faqs.map((faq, index) => (
                          <AccordionItem 
                            key={index} 
                            value={`${key}-${index}`}
                            className="border border-border/50 rounded-lg px-6 bg-gradient-card"
                          >
                            <AccordionTrigger className="text-left hover:no-underline hover:text-primary">
                              {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground pt-2 pb-4">
                              {faq.answer}
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : (
            /* Category Tabs */
            <div className="max-w-6xl mx-auto">
              <Tabs defaultValue="general" className="w-full">
                <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 mb-8">
                  {Object.entries(faqCategories).map(([key, category]) => (
                    <TabsTrigger key={key} value={key} className="flex items-center gap-2">
                      <category.icon className="h-4 w-4" />
                      <span className="hidden sm:inline">{category.title.split(' ')[0]}</span>
                    </TabsTrigger>
                  ))}
                </TabsList>

                {Object.entries(faqCategories).map(([key, category]) => (
                  <TabsContent key={key} value={key}>
                    <div className="mb-8">
                      <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                        <category.icon className="h-8 w-8 text-primary" />
                        {category.title}
                      </h2>
                    </div>

                    <Accordion type="single" collapsible className="space-y-4">
                      {category.faqs.map((faq, index) => (
                        <AccordionItem 
                          key={index} 
                          value={`faq-${index}`}
                          className="border border-border/50 rounded-lg px-6 bg-gradient-card hover:shadow-lg transition-all duration-300"
                        >
                          <AccordionTrigger className="text-left hover:no-underline hover:text-primary text-lg font-semibold py-6">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground pt-2 pb-6 text-base leading-relaxed">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          )}
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-card border-border/50">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <MessageCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Still need help?</h3>
                  <p className="text-muted-foreground mb-6">
                    Can't find what you're looking for? Our support team is here to help 
                    with any questions or issues you might have.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="text-center bg-background border-border/50 hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <Mail className="h-8 w-8 text-primary mx-auto mb-3" />
                      <h4 className="font-semibold mb-2">Email Support</h4>
                      <p className="text-sm text-muted-foreground mb-3">Response within 1-2 business days</p>
                      <Button variant="outline" size="sm" asChild>
                        <a href="mailto:hello@brighternova.com">
                          Send Email
                        </a>
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="text-center bg-background border-border/50 hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <MessageCircle className="h-8 w-8 text-primary mx-auto mb-3" />
                      <h4 className="font-semibold mb-2">Contact Form</h4>
                      <p className="text-sm text-muted-foreground mb-3">Detailed inquiry form</p>
                      <Button variant="outline" size="sm" asChild>
                        <a href="/contact">
                          Contact Us
                        </a>
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="text-center bg-background border-border/50 hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <Phone className="h-8 w-8 text-primary mx-auto mb-3" />
                      <h4 className="font-semibold mb-2">Phone Support</h4>
                      <p className="text-sm text-muted-foreground mb-3">Enterprise customers only</p>
                      <Button variant="outline" size="sm" asChild>
                        <a href="tel:+447418639569">
                          Call Now
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </div>

                <div className="mt-8 pt-6 border-t border-border/50">
                  <div className="text-center">
                    <h4 className="font-semibold mb-3">Other helpful resources:</h4>
                    <div className="flex flex-wrap justify-center gap-3">
                      <Button variant="outline" size="sm" asChild>
                        <a href="/docs">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Documentation
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <a href="/status">
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Service Status
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <a href="/quickstart">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Quick Start Guide
                        </a>
                      </Button>
                    </div>
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

export default FAQ;
