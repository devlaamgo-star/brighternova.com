import React, { useState } from 'react';
import { Search, Book, MessageCircle, Phone, Mail, Clock, CheckCircle, ArrowRight, FileText, Shield, Database, Cloud, Users, Zap } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import PageLayout from "@/components/shared/PageLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchQuery.trim()) {
      // Simple search logic - redirect to most relevant page based on search terms
      const query = searchQuery.toLowerCase();
      if (query.includes('setup') || query.includes('start')) {
        navigate('/jhelp/quick-start-guide');
      } else if (query.includes('backup') || query.includes('create')) {
        navigate('/jhelp/creating-first-backup');
      } else if (query.includes('billing') || query.includes('payment')) {
        navigate('/jhelp/account/billing-subscriptions');
      } else if (query.includes('api') || query.includes('webhook')) {
        navigate('/jhelp/api-documentation-guide');
      } else if (query.includes('security') || query.includes('encrypt')) {
        navigate('/jhelp/backup-encryption');
      } else if (query.includes('storage')) {
        navigate('/jhelp/storage-options');
      } else {
        navigate('/docs');
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const popularSearches = [
    { term: "Setup Guide", route: "/jhelp/quick-start-guide" },
    { term: "Backup Failed", route: "/docs" },
    { term: "API Keys", route: "/jhelp/api-documentation-guide" },
    { term: "Billing", route: "/jhelp/account/billing-subscriptions" },
    { term: "Restore Data", route: "/jhelp/creating-first-backup" }
  ];
  const helpCategories = [
    {
      title: "Getting Started",
      description: "Learn the basics of Novabuckups and set up your first backup",
      icon: Book,
      articles: [
        { title: "Quick Start Guide", readTime: "5 min", href: "/jhelp/quick-start-guide" },
        { title: "Creating Your First Backup", readTime: "3 min", href: "/jhelp/creating-first-backup" },
        { title: "Understanding Backup Types", readTime: "4 min", href: "/jhelp/understanding-backup-types" },
        { title: "Setting Up Notifications", readTime: "2 min", href: "/jhelp/setting-up-notifications" },
      ],
    },
    {
      title: "Account Management",
      description: "Manage your account, billing, and subscription settings",
      icon: Users,
      articles: [
        { title: "Managing Your Profile", readTime: "2 min", href: "/jhelp/account/managing-profile" },
        { title: "Billing & Subscriptions", readTime: "3 min", href: "/jhelp/account/billing-subscriptions" },
        { title: "Team Management", readTime: "4 min", href: "/jhelp/account/team-management" },
        { title: "Account Security", readTime: "3 min", href: "/jhelp/account/account-security" },
      ],
    },
    {
      title: "Backup Configuration",
      description: "Advanced backup settings and optimization techniques",
      icon: Database,
      articles: [
        { title: "Scheduling Backups", readTime: "5 min", href: "/jhelp/scheduling-backups" },
        { title: "Retention Policies", readTime: "4 min", href: "/jhelp/retention-policies" },
        { title: "Backup Encryption", readTime: "6 min", href: "/jhelp/backup-encryption" },
        { title: "Storage Options", readTime: "3 min", href: "/jhelp/storage-options" },
      ],
    },
    {
      title: "Integrations",
      description: "Connect Novabuckups with your favorite tools and services",
      icon: Zap,
      articles: [
        { title: "Database Integrations", readTime: "4 min", href: "/jhelp/database-integrations" },
        { title: "Cloud Storage Setup", readTime: "3 min", href: "/jhelp/cloud-storage-setup" },
        { title: "Webhook Configuration", readTime: "5 min", href: "/jhelp/webhook-configuration" },
        { title: "API Documentation", readTime: "8 min", href: "/jhelp/api-documentation-guide" },
      ],
    },
    {
      title: "Security & Compliance",
      description: "Learn about our security measures and compliance standards",
      icon: Shield,
      articles: [
        { title: "Data Encryption", readTime: "4 min", href: "/security" },
        { title: "GDPR Compliance", readTime: "6 min", href: "/security" },
        { title: "Access Controls", readTime: "3 min", href: "/security" },
        { title: "Audit Logs", readTime: "4 min", href: "/security" },
      ],
    },
    {
      title: "Troubleshooting",
      description: "Common issues and their solutions",
      icon: FileText,
      articles: [
        { title: "Backup Failures", readTime: "5 min", href: "/docs" },
        { title: "Connection Issues", readTime: "3 min", href: "/docs" },
        { title: "Performance Optimization", readTime: "6 min", href: "/docs" },
        { title: "Error Messages", readTime: "4 min", href: "/docs" },
      ],
    },
  ];

  const faqs = [
    {
      question: "How do I set up my first backup?",
      answer: "Setting up your first backup is simple. After signing up, navigate to the dashboard, click 'New Backup', select your data source, configure your settings, and click 'Start Backup'. Our Quick Start Guide provides detailed step-by-step instructions.",
    },
    {
      question: "What types of data can I backup?",
      answer: "Novabuckups supports a wide range of data sources including databases (MySQL, PostgreSQL, MongoDB), cloud storage (AWS S3, Google Cloud), file systems, and popular applications. Check our integrations page for the complete list.",
    },
    {
      question: "How secure are my backups?",
      answer: "Your data security is our top priority. All backups are encrypted in transit using TLS 1.3 and at rest using AES-256 encryption. We're SOC 2 Type II certified and fully GDPR compliant.",
    },
    {
      question: "Can I restore individual files or entire backups?",
      answer: "Yes, you can restore both individual files and complete backups. Our granular restore feature allows you to select specific files, folders, or database records to restore, saving time and storage space.",
    },
    {
      question: "What happens if a backup fails?",
      answer: "If a backup fails, you'll receive an immediate notification via email and in-app alert. Our system automatically retries failed backups and provides detailed error logs to help identify and resolve issues quickly.",
    },
    {
      question: "How long are backups retained?",
      answer: "Backup retention depends on your plan and configuration. You can set custom retention policies ranging from 7 days to indefinite storage. Enterprise plans include advanced lifecycle management options.",
    },
  ];

  const supportOptions = [
    {
      title: "Live Chat",
      description: "Get instant help from our support team",
      icon: MessageCircle,
      availability: "24/7",
      responseTime: "< 5 minutes",
      action: "Start Chat",
      route: "/technical-support"
    },
    {
      title: "Email Support",
      description: "Send us a detailed message about your issue",
      icon: Mail,
      availability: "24/7",
      responseTime: "< 2 hours",
      action: "Send Email",
      route: "/contact"
    },
    {
      title: "Phone Support",
      description: "Speak directly with our technical experts",
      icon: Phone,
      availability: "Mon-Fri 9AM-6PM GMT",
      responseTime: "Immediate",
      action: "Call Us",
      route: "/contact"
    },
  ];

  return (
    <PageLayout
      title="Help Center"
      description="Find answers to your questions, browse our documentation, and get support for Novabuckups backup automation."
    >
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-subtle py-20 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-foreground mb-6">
              How can we help you?
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Search our knowledge base, browse documentation, or contact our support team for assistance.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative mb-8">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                placeholder="Search for help articles, guides, and more..."
                className="pl-12 pr-4 py-6 text-lg border-2"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <Button 
                className="absolute right-2 top-1/2 transform -translate-y-1/2"
                onClick={handleSearch}
              >
                Search
              </Button>
            </div>

            {/* Popular Searches */}
            <div className="flex flex-wrap justify-center gap-2">
              <span className="text-muted-foreground text-sm">Popular:</span>
              {popularSearches.map((search) => (
                <Link key={search.term} to={search.route}>
                  <Badge variant="secondary" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                    {search.term}
                  </Badge>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Support Options */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
                Get Support
              </h2>
              <p className="text-muted-foreground text-lg">
                Multiple ways to get the help you need, when you need it
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {supportOptions.map((option) => (
                <Card key={option.title} className="text-center hover:shadow-elegant transition-smooth">
                  <CardHeader>
                    <div className="bg-gradient-primary p-3 rounded-lg w-fit mx-auto mb-4 shadow-glow">
                      <option.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <CardTitle>{option.title}</CardTitle>
                    <CardDescription>{option.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        {option.availability}
                      </div>
                      <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4" />
                        Response: {option.responseTime}
                      </div>
                    </div>
                    <Link to={option.route}>
                      <Button className="w-full" variant="outline">
                        {option.action}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Help Categories */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
                Browse by Category
              </h2>
              <p className="text-muted-foreground text-lg">
                Find detailed guides and tutorials organized by topic
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {helpCategories.map((category) => (
                <Card key={category.title} className="hover:shadow-elegant transition-smooth">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-gradient-primary p-2 rounded-lg shadow-glow">
                        <category.icon className="h-5 w-5 text-primary-foreground" />
                      </div>
                      <CardTitle className="text-lg">{category.title}</CardTitle>
                    </div>
                    <CardDescription>{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {category.articles.map((article) => (
                        <Link 
                          key={article.title} 
                          to={article.href}
                          className="flex items-center justify-between group cursor-pointer block"
                        >
                          <div className="flex-1">
                            <h4 className="font-medium text-foreground group-hover:text-primary transition-smooth">
                              {article.title}
                            </h4>
                            <p className="text-sm text-muted-foreground">{article.readTime} read</p>
                          </div>
                          <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-smooth" />
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground text-lg">
                Quick answers to common questions about Novabuckups
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6">
                    <AccordionTrigger className="text-left font-medium hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
                Still need help?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Can't find what you're looking for? Our support team is here to help you get the most out of Novabuckups.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" className="bg-gradient-primary shadow-glow">
                    Contact Support
                  </Button>
                </Link>
                <Link to="/schedule-demo">
                  <Button size="lg" variant="outline">
                    Schedule a Demo
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default HelpCenter;
