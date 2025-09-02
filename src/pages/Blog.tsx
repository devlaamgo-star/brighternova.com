import { useState } from "react";
import PageLayout from "@/components/shared/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { 
  Calendar, 
  User, 
  ArrowRight,
  BookOpen,
  Code,
  Shield,
  Database,
  Zap,
  CheckCircle,
  AlertTriangle
} from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const [email, setEmail] = useState("");
  const [showSubscribeSuccess, setShowSubscribeSuccess] = useState(false);
  const [subscribeError, setSubscribeError] = useState("");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setSubscribeError("Email address is required");
      return;
    }
    
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setSubscribeError("Please enter a valid email address");
      return;
    }

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));
      setShowSubscribeSuccess(true);
      setEmail("");
      setSubscribeError("");
    } catch (error) {
      setSubscribeError("Failed to subscribe. Please try again.");
    }
  };
  const [visibleCount, setVisibleCount] = useState(4);
  const loadMore = () => setVisibleCount((v) => v + 4);

  const blogPosts = [
    {
      title: "Automating PostgreSQL Backups with Novabuckups",
      excerpt: "Step-by-step guide to setting up automated PostgreSQL backups with point-in-time recovery.",
      author: "David Kumar",
      date: "10 December 2024",
      readTime: "8 min read",
      category: "Tutorial",
      tags: ["PostgreSQL", "Automation", "Recovery"]
    },
    {
      title: "Multi-Cloud Backup Strategies: Avoiding Vendor Lock-in",
      excerpt: "How to design a backup strategy that works across multiple cloud providers for maximum resilience.",
      author: "Emma Thompson",
      date: "5 December 2024", 
      readTime: "10 min read",
      category: "Strategy",
      tags: ["Multi-cloud", "Strategy", "Resilience"]
    },
    {
      title: "Understanding Backup Retention Policies",
      excerpt: "Design effective retention policies that balance storage costs with recovery requirements.",
      author: "Michael Rodriguez",
      date: "1 December 2024",
      readTime: "6 min read",
      category: "Best Practices",
      tags: ["Retention", "Storage", "Compliance"]
    },
    {
      title: "Disaster Recovery Planning for Small Teams",
      excerpt: "Essential disaster recovery planning for startups and small development teams.",
      author: "Sarah Chen",
      date: "28 November 2024",
      readTime: "9 min read",
      category: "Planning",
      tags: ["Disaster Recovery", "Planning", "Small Teams"]
    },
    {
      title: "API-First Backup: Integrating Novabuckups into Your CI/CD",
      excerpt: "Automate backups as part of your deployment pipeline using our REST API and CLI tools.",
      author: "Alex Foster",
      date: "25 November 2024",
      readTime: "11 min read",
      category: "Development",
      tags: ["API", "CI/CD", "Automation"]
    },
    {
      title: "MongoDB Backup Best Practices",
      excerpt: "Comprehensive guide to backing up MongoDB, including sharded clusters and replica sets.",
      author: "James Wilson",
      date: "20 November 2024",
      readTime: "7 min read",
      category: "Tutorial",
      tags: ["MongoDB", "NoSQL", "Sharding"]
    }
  ];

  const categories = [
    { name: "All Posts", count: 24, icon: BookOpen },
    { name: "Tutorials", count: 12, icon: Code },
    { name: "Best Practices", count: 8, icon: Shield },
    { name: "Database", count: 6, icon: Database },
    { name: "Automation", count: 4, icon: Zap }
  ];

  const categoryColors = {
    "Tutorial": "bg-primary/20 text-primary border-primary/30",
    "Strategy": "bg-accent/20 text-accent border-accent/30", 
    "Best Practices": "bg-warning/20 text-warning border-warning/30",
    "Planning": "bg-muted/20 text-muted-foreground border-muted/30",
    "Development": "bg-destructive/20 text-destructive border-destructive/30"
  };

  return (
    <PageLayout 
      title="Blog & Tutorials - Backup Best Practices"
      description="Expert guides, tutorials, and best practices for database backups, disaster recovery, and automation. Learn from backup professionals."
    >
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="glass mb-6">
              <BookOpen className="h-4 w-4 mr-2" />
              Knowledge Hub
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
              Backup expertise &amp;
              <span className="block">best practices</span>
            </h1>
            <p className="text-xl lg:text-2xl text-primary-foreground/80 text-balance mb-8 max-w-3xl mx-auto">
              Learn from backup professionals. Tutorials, guides, and insights 
              to help you build bulletproof backup strategies.
            </p>
            <Button variant="glass" size="xl" className="group text-white" asChild>
              <a href="/blog/all">
                Browse All Posts
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      

      {/* Categories and Posts */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Categories Sidebar */}
            <div className="lg:col-span-1">
              <h3 className="text-xl font-bold mb-6">Categories</h3>
              <div className="space-y-2">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    className={`w-full flex items-center justify-between p-3 rounded-lg text-left transition-colors ${
                      index === 0 
                        ? 'bg-primary text-primary-foreground' 
                        : 'bg-background hover:bg-secondary text-muted-foreground hover:text-secondary-foreground'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <category.icon className="h-4 w-4" />
                      <span className="font-medium">{category.name}</span>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {category.count}
                    </Badge>
                  </button>
                ))}
              </div>
            </div>

            {/* Posts Grid */}
            <div className="lg:col-span-3">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold">Latest Articles</h2>
                <Button variant="outline" size="sm" onClick={() => document.getElementById('newsletter-section')?.scrollIntoView({ behavior: 'smooth' })}>
                  Subscribe to Updates
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {blogPosts.slice(0, visibleCount).map((post, index) => (
                  <Card key={index} className="group hover:shadow-lg transition-all duration-300 bg-background border-border/50 hover:border-primary/20">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-3">
                        <Badge 
                          variant="outline" 
                          className={`text-xs ${categoryColors[post.category as keyof typeof categoryColors]}`}
                        >
                          {post.category}
                        </Badge>
                      </div>
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors text-balance">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {post.excerpt}
                      </p>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <User className="h-3 w-3" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>{post.date}</span>
                        </div>
                        <span>{post.readTime}</span>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <Button variant="outline" size="sm" className="group w-full" asChild>
                        <Link to={`/blog/post/${post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`}>
                          Read Article
                          <ArrowRight className="h-3 w-3 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-12">
                {visibleCount < blogPosts.length && (
                  <Button variant="outline" size="lg" onClick={loadMore}>
                    Load More Articles
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section id="newsletter-section" className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center bg-gradient-card rounded-2xl p-12 border border-border max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Stay updated with backup best practices
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get the latest tutorials, guides, and insights delivered to your inbox. 
              No spam, just valuable backup knowledge.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
              <Input
                type="email" 
                placeholder="Enter your email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setSubscribeError("");
                }}
                className="flex-1"
                required
              />
              <Button type="submit" variant="hero">
                Subscribe
              </Button>
            </form>
            {subscribeError && (
              <p className="text-sm text-red-500 mt-2 flex items-center justify-center gap-1">
                <AlertTriangle className="h-3 w-3" />
                {subscribeError}
              </p>
            )}
            
            <div className="mt-8 pt-6 border-t border-border/50">
              <p className="text-sm text-muted-foreground mb-4">
                Ready to get started with automated backups?
              </p>
              <Button size="lg" asChild>
                <Link to="/signup">
                  Start Free Trial
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe Success Dialog */}
      <Dialog open={showSubscribeSuccess} onOpenChange={setShowSubscribeSuccess}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <DialogTitle className="text-xl">Successfully Subscribed!</DialogTitle>
            </div>
            <DialogDescription className="text-left">
              Thank you for subscribing to our blog updates.
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-green-900 mb-2">What's next?</h4>
              <ul className="text-sm text-green-800 space-y-1">
                <li>✓ You'll receive a confirmation email shortly</li>
                <li>✓ New articles will be delivered weekly</li>
                <li>✓ Get exclusive backup tips and tutorials</li>
                <li>✓ Unsubscribe anytime with one click</li>
              </ul>
            </div>
            
            <div className="text-center">
              <Button onClick={() => setShowSubscribeSuccess(false)} className="w-full">
                Continue Reading
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </PageLayout>
  );
};

export default Blog;
