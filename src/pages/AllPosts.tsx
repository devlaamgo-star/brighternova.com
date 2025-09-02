import PageLayout from "@/components/shared/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Calendar, 
  User, 
  ArrowRight,
  Search,
  Filter,
  BookOpen,
  Code,
  Shield,
  Database,
  Zap,
  Grid3X3,
  List
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const AllPosts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Posts");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const allPosts = [
    {
      title: "Complete Guide to Database Backup Strategies for 2024",
      excerpt: "Learn the essential backup strategies every developer should know, from MySQL to MongoDB, with practical examples and best practices.",
      author: "Sarah Chen",
      date: "15 December 2024",
      readTime: "12 min read",
      category: "Tutorial",
      tags: ["Database", "MySQL", "MongoDB", "Best Practices"],
      featured: true
    },
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
    },
    {
      title: "Backup Security: Encryption and Access Control",
      excerpt: "Secure your backups with proper encryption, key management, and access control strategies.",
      author: "Lisa Park",
      date: "18 November 2024",
      readTime: "9 min read",
      category: "Security",
      tags: ["Security", "Encryption", "Access Control"]
    },
    {
      title: "Cost Optimization for Cloud Backups",
      excerpt: "Reduce backup costs without compromising recovery capabilities using intelligent tiering and lifecycle policies.",
      author: "Tom Anderson",
      date: "15 November 2024",
      readTime: "8 min read",
      category: "Strategy",
      tags: ["Cost Optimization", "Cloud", "Storage"]
    },
    {
      title: "MySQL Replication and Backup Strategies",
      excerpt: "Combine MySQL replication with backup strategies for high availability and disaster recovery.",
      author: "Rachel Kim",
      date: "12 November 2024",
      readTime: "10 min read",
      category: "Tutorial",
      tags: ["MySQL", "Replication", "High Availability"]
    },
    {
      title: "Testing Your Backup Recovery Process",
      excerpt: "Regular testing is crucial - learn how to validate your backups and recovery procedures.",
      author: "David Kumar",
      date: "8 November 2024",
      readTime: "7 min read",
      category: "Best Practices",
      tags: ["Testing", "Recovery", "Validation"]
    },
    {
      title: "Backup Monitoring and Alerting Best Practices",
      excerpt: "Set up comprehensive monitoring and alerting for your backup systems to catch issues early.",
      author: "Emma Thompson",
      date: "5 November 2024",
      readTime: "6 min read",
      category: "Operations",
      tags: ["Monitoring", "Alerting", "Operations"]
    }
  ];

  const categories = [
    { name: "All Posts", count: allPosts.length, icon: BookOpen },
    { name: "Tutorial", count: allPosts.filter(p => p.category === "Tutorial").length, icon: Code },
    { name: "Best Practices", count: allPosts.filter(p => p.category === "Best Practices").length, icon: Shield },
    { name: "Strategy", count: allPosts.filter(p => p.category === "Strategy").length, icon: Database },
    { name: "Security", count: allPosts.filter(p => p.category === "Security").length, icon: Zap },
    { name: "Development", count: allPosts.filter(p => p.category === "Development").length, icon: Code },
    { name: "Operations", count: allPosts.filter(p => p.category === "Operations").length, icon: Database }
  ];

  const categoryColors = {
    "Tutorial": "bg-primary/20 text-primary border-primary/30",
    "Strategy": "bg-accent/20 text-accent border-accent/30", 
    "Best Practices": "bg-warning/20 text-warning border-warning/30",
    "Planning": "bg-muted/20 text-muted-foreground border-muted/30",
    "Development": "bg-destructive/20 text-destructive border-destructive/30",
    "Security": "bg-secondary/20 text-secondary-foreground border-secondary/30",
    "Operations": "bg-success/20 text-success border-success/30"
  };

  const filteredPosts = allPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "All Posts" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <PageLayout 
      title="All Blog Posts - Complete Archive"
      description="Browse our complete collection of backup guides, tutorials, and best practices. Find expert insights on database backups, disaster recovery, and automation."
    >
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="glass mb-6">
              <BookOpen className="h-4 w-4 mr-2" />
              Complete Archive
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
              All blog posts &amp;
              <span className="block">tutorials</span>
            </h1>
            <p className="text-xl lg:text-2xl text-primary-foreground/80 text-balance mb-8 max-w-3xl mx-auto">
              Explore our complete collection of backup expertise. {allPosts.length} articles covering 
              everything from basic strategies to advanced automation.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between mb-8">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search articles, topics, or tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Button
                  variant={viewMode === "grid" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                >
                  <Grid3X3 className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Categories Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <h3 className="text-xl font-bold mb-6">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedCategory(category.name)}
                      className={`w-full flex items-center justify-between p-3 rounded-lg text-left transition-colors ${
                        selectedCategory === category.name
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
            </div>

            {/* Posts */}
            <div className="lg:col-span-3">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold">
                  {selectedCategory === "All Posts" ? "All Articles" : selectedCategory}
                  <span className="text-muted-foreground ml-2">({filteredPosts.length})</span>
                </h2>
              </div>

              {viewMode === "grid" ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredPosts.map((post, index) => (
                    <Card key={index} className="group hover:shadow-lg transition-all duration-300 bg-background border-border/50 hover:border-primary/20">
                      <CardHeader>
                        <div className="flex items-start justify-between mb-3">
                          <Badge 
                            variant="outline" 
                            className={`text-xs ${categoryColors[post.category as keyof typeof categoryColors]}`}
                          >
                            {post.category}
                          </Badge>
                          {post.featured && (
                            <Badge variant="secondary" className="text-xs">
                              Featured
                            </Badge>
                          )}
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
              ) : (
                <div className="space-y-6">
                  {filteredPosts.map((post, index) => (
                    <Card key={index} className="group hover:shadow-lg transition-all duration-300 bg-background border-border/50 hover:border-primary/20">
                      <CardContent className="p-6">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                          <div className="md:col-span-3">
                            <div className="flex items-center gap-4 mb-3">
                              <Badge 
                                variant="outline" 
                                className={`text-xs ${categoryColors[post.category as keyof typeof categoryColors]}`}
                              >
                                {post.category}
                              </Badge>
                              {post.featured && (
                                <Badge variant="secondary" className="text-xs">
                                  Featured
                                </Badge>
                              )}
                            </div>
                            <h3 className="text-xl font-semibold group-hover:text-primary transition-colors text-balance mb-2">
                              {post.title}
                            </h3>
                            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                              {post.excerpt}
                            </p>
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
                            <div className="flex flex-wrap gap-2">
                              {post.tags.map((tag, tagIndex) => (
                                <Badge key={tagIndex} variant="secondary" className="text-xs">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <div className="md:col-span-1 flex items-center">
                            <Button variant="outline" className="group w-full" asChild>
                              <Link to={`/blog/post/${post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`}>
                                Read Article
                                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}

              {filteredPosts.length === 0 && (
                <div className="text-center py-12">
                  <div className="text-muted-foreground mb-4">
                    <Search className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p className="text-lg">No articles found</p>
                    <p className="text-sm">Try adjusting your search terms or category filter</p>
                  </div>
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedCategory("All Posts");
                    }}
                  >
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default AllPosts;