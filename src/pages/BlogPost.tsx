import { useState } from "react";
import PageLayout from "@/components/shared/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Calendar, 
  User, 
  ArrowLeft,
  Clock,
  Share2,
  BookOpen,
  ChevronRight,
  Tag,
  ThumbsUp,
  ThumbsDown,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import { useParams, Link } from "react-router-dom";

const BlogPost = () => {
  const { slug } = useParams();
  const [helpfulVote, setHelpfulVote] = useState<'yes' | 'no' | null>(null);
  const [shareSuccess, setShareSuccess] = useState(false);

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: post?.title || 'Blog Post',
          text: post?.excerpt || '',
          url: window.location.href,
        });
      } else {
        // Fallback: Copy to clipboard
        await navigator.clipboard.writeText(window.location.href);
        setShareSuccess(true);
        setTimeout(() => setShareSuccess(false), 2000);
      }
    } catch (error) {
      // Fallback: Copy to clipboard
      try {
        await navigator.clipboard.writeText(window.location.href);
        setShareSuccess(true);
        setTimeout(() => setShareSuccess(false), 2000);
      } catch (clipboardError) {
        console.error('Share failed:', error);
      }
    }
  };

  const handleHelpfulVote = (vote: 'yes' | 'no') => {
    setHelpfulVote(vote);
    // In production, this would send the vote to your analytics API
    console.log('Article helpfulness vote:', vote, 'for article:', slug);
  };

  // Simplified blog post data to avoid syntax errors
  type BlogPostType = {
    title: string;
    excerpt: string;
    author: string;
    date: string;
    readTime: string;
    category: string;
    tags: string[];
    content: string;
    relatedPosts: string[];
    image?: string;
  };

  const blogPosts: Record<string, BlogPostType> = {
    "automating-postgresql-backups-with-Novabuckups": {
      title: "Automating PostgreSQL Backups with Novabuckups",
      excerpt: "Step-by-step guide to setting up automated PostgreSQL backups with point-in-time recovery.",
      author: "David Kumar",
      date: "10 December 2024",
      readTime: "8 min read",
      category: "Tutorial",
      tags: ["PostgreSQL", "Automation", "Recovery"],
      content: "PostgreSQL is one of the most popular open-source databases, and ensuring its data is properly backed up is crucial for any production environment. In this tutorial, we'll walk through setting up automated PostgreSQL backups using Novabuckups.\n\nPrerequisites\n\nBefore we begin, ensure you have:\n- A PostgreSQL database running\n- Administrative access to your database server\n- A Novabuckups account\n- Basic familiarity with command-line tools\n\nSetting Up Novabuckups for PostgreSQL\n\nStep 1: Install the Novabuckups CLI\nStep 2: Configure Database Connection\nStep 3: Create a Backup Schedule\n\nAdvanced Configuration\n\nPoint-in-Time Recovery Setup and Backup Verification are key components of a robust backup strategy.\n\nBest Practices\n\n1. Use a dedicated backup user with minimal required permissions\n2. Test restores regularly to ensure backup integrity\n3. Monitor backup sizes for unexpected changes\n4. Keep multiple retention policies for different recovery scenarios\n5. Document your backup procedures for team members\n\nConclusion\n\nWith Novabuckups, automating PostgreSQL backups becomes straightforward and reliable. The platform handles the complexity of backup scheduling, storage management, and monitoring.",
      relatedPosts: [
        "testing-your-backup-recovery-process"
      ]
    },
    "multi-cloud-backup-strategies-avoiding-vendor-lock-in": {
      title: "Multi-Cloud Backup Strategies: Avoiding Vendor Lock-in",
      excerpt: "How to design a backup strategy that works across multiple cloud providers for maximum resilience.",
      author: "Emma Thompson",
      date: "5 December 2024",
      readTime: "10 min read",
      category: "Strategy",
      tags: ["Multi-cloud", "Strategy", "Resilience"],
      content: "In today's cloud-first world, putting all your eggs in one basket can be risky. Multi-cloud backup strategies provide resilience, flexibility, and protection against vendor lock-in.\n\nWhy Multi-Cloud Matters\n\nRisk Mitigation:\n- Service outages: No single cloud provider has 100% uptime\n- Regional failures: Natural disasters or infrastructure issues\n- Account suspension: Policy violations or billing issues\n- Data sovereignty: Compliance requirements across regions\n\nStrategic Benefits:\n- Negotiating power: Leverage competition between providers\n- Cost optimization: Use best pricing from each provider\n- Feature diversity: Access unique services from each platform\n- Exit strategy: Maintain ability to migrate if needed\n\nImplementation Strategies\n\n1. Active-Passive Model - Primary backups in one cloud, secondary copies in another\n2. Active-Active Model - Equal backup distribution across multiple clouds\n3. Hybrid Model - Mix of cloud providers with on-premises components\n\nConclusion\n\nMulti-cloud backup strategies provide resilience and flexibility but require careful planning and execution. Focus on your specific requirements, start simple, and evolve your architecture as needs grow.",
      relatedPosts: [
        "understanding-backup-retention-policies",
        "cost-optimization-cloud-backups"
      ]
    },
    "understanding-backup-retention-policies": {
      title: "Understanding Backup Retention Policies",
      excerpt: "Design effective retention policies that balance storage costs with recovery requirements.",
      author: "Michael Rodriguez",
      date: "1 December 2024",
      readTime: "6 min read",
      category: "Best Practices",
      tags: ["Retention", "Storage", "Compliance"],
      content: "Backup retention policies determine how long backup data is stored before deletion. Getting this balance right is crucial for meeting recovery requirements while controlling storage costs and maintaining compliance.\n\nWhat Are Retention Policies?\n\nRetention policies define:\n- How long different types of backups are kept\n- When backups are automatically deleted\n- Which backups are preserved for compliance\n- Storage tier transitions over time\n\nTypes of Retention Strategies\n\n1. Grandfather-Father-Son (GFS) - Traditional approach with multiple retention periods\n2. Tower of Hanoi - Mathematical approach optimizing storage efficiency\n3. Linear Retention - Simple approach with fixed intervals\n\nFactors Influencing Retention\n\n- Business Requirements: Recovery time and point objectives\n- Regulatory Compliance: Industry-specific requirements\n- Storage Economics: Balancing costs with access needs\n\nBest Practices\n\n1. Regular Policy Review - Annual assessment and updates\n2. Exception Management - Handle legal holds properly\n3. Testing and Validation - Verify automated processes\n4. Cost Monitoring - Track and optimize expenses\n\nConclusion\n\nEffective backup retention policies balance business needs, compliance requirements, and cost constraints. Regular review and adjustment are essential as needs evolve.",
      relatedPosts: [
        "cost-optimization-cloud-backups",
        "multi-cloud-backup-strategies-avoiding-vendor-lock-in"
      ]
    },
    "disaster-recovery-planning-small-teams": {
      title: "Disaster Recovery Planning for Small Teams",
      excerpt: "Essential disaster recovery planning for startups and small development teams.",
      author: "Sarah Chen",
      date: "28 November 2024",
      readTime: "9 min read",
      category: "Planning",
      tags: ["Disaster Recovery", "Planning", "Small Teams"],
      content: "Small teams and startups often overlook disaster recovery planning, thinking it's only for large enterprises. However, small organizations are often more vulnerable to disasters and less able to absorb the impact.\n\nWhy Small Teams Need DR Planning\n\nUnique Vulnerabilities:\n- Limited resources: Fewer people to handle emergencies\n- Single points of failure: Key person dependencies\n- Budget constraints: Can't afford enterprise solutions\n- Rapid growth: Infrastructure changes frequently\n\nHigher Impact:\n- Revenue concentration: Fewer customers mean higher individual impact\n- Reputation risk: Harder to recover from service disruptions\n- Cash flow: Less financial buffer for extended downtime\n- Market position: Competitors can capitalize on outages\n\nPractical DR Strategies\n\n1. Cloud-First Approach - Leverage cloud services for built-in resilience\n2. Automated Backups - Remove human error from the equation\n3. Communication Plan - Know who to call and when\n\nEssential DR Components\n\n- Documentation: Keep critical information accessible\n- Monitoring and Alerting: Know when things go wrong\n- Recovery Procedures: Step-by-step guides for common scenarios\n\nConclusion\n\nDisaster recovery planning for small teams doesn't require enterprise-grade complexity or budgets. Focus on the most likely scenarios, leverage cloud services and automation, and ensure your team is prepared to respond effectively.",
      relatedPosts: [
        "understanding-backup-retention-policies",
        "backup-monitoring-alerting-best-practices"
      ]
    },
    "testing-your-backup-recovery-process": {
      title: "Testing Your Backup Recovery Process",
      excerpt: "Why testing your backup and recovery process is as important as taking backups themselves.",
      author: "Laura Nunez",
      date: "22 December 2024",
      readTime: "9 min read",
      category: "Best Practices",
      tags: ["Recovery", "Testing", "Resilience"],
      content: "A backup without a tested recovery process is just a false sense of security. This article explores practical approaches to testing your backup and recovery procedures.\n\nWhy Recovery Testing is Critical\n- Validate that backups are actually usable\n- Identify corruption early\n- Ensure team readiness during emergencies\n\nTesting Approaches\n1. Regular Restore Drills - Practice restoring to staging\n2. Automated Recovery Tests - CI jobs that attempt partial restores\n3. Document Failures - Maintain runbooks for surprising issues\n\nBest Practices\n- Schedule tests quarterly\n- Randomize which backups are restored\n- Measure recovery times against SLAs\n- Include disaster simulation exercises\n\nConclusion\nTesting backups is not optional—it’s essential. Only tested backups can guarantee resilience and compliance.",
      relatedPosts: [
        "automating-postgresql-backups-with-Novabuckups",
        "backup-monitoring-alerting-best-practices"
      ]
    },
    "cost-optimization-for-cloud-backups": {
      title: "Cost Optimization for Cloud Backups",
      excerpt: "How to reduce expenses and optimize storage while keeping your data safe.",
      author: "David Kumar",
      date: "20 December 2024",
      readTime: "10 min read",
      category: "Strategy",
      tags: ["Cloud", "Cost Optimization", "Storage"],
      content: "As organizations store ever-increasing volumes of data, cloud backup costs can spiral if left unchecked. Cost optimization ensures financial sustainability without compromising resilience.\n\nStrategies for Cost Savings\n- Tiered Storage: Move older backups to cheaper storage\n- Deduplication & Compression: Reduce data footprint\n- Intelligent Retention: Balance business requirements with compliance\n- Monitor Usage: Alert on sudden storage increases\n\nTools and Techniques\n- Cloud-native lifecycle policies (AWS S3 Glacier, GCP Nearline)\n- Percona / Veeam integration\n\nConclusion\nCost optimization is continuous. Regular reviews and performance monitoring make cloud backups both secure and financially efficient.",
      relatedPosts: [
        "understanding-backup-retention-policies",
        "multi-cloud-backup-strategies-avoiding-vendor-lock-in"
      ]
    },
    "backup-monitoring-and-alerting-best-practices": {
      title: "Backup Monitoring and Alerting Best Practices",
      excerpt: "Learn how to monitor and alert on backup failures to prevent surprises during recovery.",
      author: "Emma Thompson",
      date: "24 December 2024",
      readTime: "8 min read",
      category: "Operations",
      tags: ["Monitoring", "Alerting", "Operations"],
      content: "Effective monitoring of backup jobs ensures that failures are detected and remediated before they impact recovery.\n\nMonitoring Metrics\n- Backup Success/Failure rates\n- Duration and performance\n- Storage usage & anomalies\n\nAlerting Channels\n- Email notifications\n- Slack/Teams integration\n- PagerDuty for critical jobs\n\nBest Practices\n- Alert on both failures and success anomalies (too fast/too small)\n- Maintain dashboards for trends\n- Integrate monitoring into central observability platform\n\nConclusion\nProactive monitoring and alerting minimizes downtime and guarantees recovery confidence.",
      relatedPosts: [
        "testing-your-backup-recovery-process",
        "cost-optimization-for-cloud-backups"
      ]
    },
    "api-first-backup-integrating-Novabuckups-into-your-ci-cd": {
      title: "API-First Backup: Integrating Novabuckups into Your CI/CD",
      excerpt: "Backups integrated into your CI/CD pipelines ensure safety is part of every deployment.",
      author: "Alex Foster",
      date: "26 December 2024",
      readTime: "11 min read",
      category: "Development",
      tags: ["API", "CI/CD", "Automation"],
      content: "An API-first approach makes backups a native part of your software delivery process.\n\nWhy API-First Matters\n- Infrastructure as Code consistency\n- Automated restore validation\n- CI/CD parity across environments\n\nIntegration Patterns\n1. Pre-deployment backup triggers\n2. Verification stages for database dumps\n3. Scheduled pipeline jobs\n\nConclusion\nWith Novabuckups and its APIs, backup automation fits seamlessly into your devops workflows.",
      relatedPosts: [
        "automating-postgresql-backups-with-Novabuckups",
        "testing-your-backup-recovery-process"
      ]
    },
    "backup-security-encryption-and-access-control": {
      title: "Backup Security: Encryption and Access Control",
      excerpt: "Protecting backups with end-to-end encryption and strong access controls.",
      author: "Emma Thompson",
      date: "28 December 2024",
      readTime: "10 min read",
      category: "Security",
      tags: ["Security", "Encryption", "Access Control"],
      content: "Backups often contain the most sensitive data in an organization. Protecting them requires multi-layered security practices.\n\nComponents of Secure Backups\n- Encryption: Encrypt at-rest and in-transit\n- Key Management: Rotate and secure encryption keys\n- Access Control: Apply least privilege principle\n\nBest Practices\n- Use encryption by default\n- Enforce MFA for backup consoles\n- Audit access regularly\n\nConclusion\nBackup security is non-negotiable. Encryption and access control measures safeguard not just data, but business continuity and trust.",
      relatedPosts: [
        "cost-optimization-for-cloud-backups"
      ]
    },
    "mysql-replication-and-backup-strategies": {
      title: "MySQL Replication and Backup Strategies",
      excerpt: "A definitive guide to combining replication with backup strategies for high availability and disaster recovery.",
      author: "Priya Patel",
      date: "18 December 2024",
      readTime: "13 min read",
      category: "Tutorial",
      tags: ["MySQL", "Replication", "Backup", "High Availability"],
      content: "MySQL remains one of the most widely used relational databases globally. To ensure continuous availability and protect data, combining replication with backup strategies is essential.\n\nUnderstanding MySQL Replication\n\nReplication creates a copy of your database on one or more replica servers, maintaining near real-time synchronization.\n\nBenefits:\n- High Availability: Failover to replicas during outages\n- Load Balancing: Distribute read queries across replicas\n- Backup Offloading: Run backups from replicas to reduce load\n\nCommon Replication Types:\n1. Asynchronous Replication - Primary doesn't wait for replica acknowledgement\n2. Semi-Synchronous Replication - Primary waits for at least one replica\n3. Group Replication - Provides fault tolerance with consensus\n\nIntegrating Backups with Replication\n\n- Backup from Replicas: Avoid impacting primary performance\n- Consistent Snapshots: Use Percona XtraBackup or MySQL Enterprise Backup\n- Point-in-Time Recovery: Combine replication logs with backups\n\nBest Practices:\n- Monitor Replication Lag and configure alerts\n- Regularly test failover and recovery procedures\n- Use GTIDs (Global Transaction Identifiers) for robust replication\n- Document and automate the backup + failover process\n\nConclusion\n\nBy integrating replication and backup strategies, MySQL can deliver high availability while ensuring robust disaster recovery capabilities. Regular monitoring and testing are critical to success.",
      relatedPosts: [
        "automating-postgresql-backups-with-Novabuckups",
        "mongodb-backup-best-practices"
      ]
    },
    "mongodb-backup-best-practices": {
      title: "MongoDB Backup Best Practices",
      excerpt: "Comprehensive guide to backing up MongoDB, including sharded clusters and replica sets.",
      author: "James Wilson",
      date: "20 November 2024",
      readTime: "7 min read",
      category: "Tutorial",
      tags: ["MongoDB", "NoSQL", "Sharding"],
      content: "MongoDB's flexible document model and horizontal scaling capabilities make it a popular choice for modern applications. However, its distributed nature requires special considerations for backup strategies.\n\nMongoDB Deployment Types\n\n- Standalone Instances: Single MongoDB server - simplest to backup but least resilient\n- Replica Sets: Group of MongoDB instances maintaining identical data sets\n- Sharded Clusters: Horizontally partitioned data across multiple servers\n\nBackup Methods Overview\n\n1. mongodump/mongorestore - Logical backup creating BSON documents\n2. Filesystem Snapshots - Block-level backup of MongoDB data files\n3. MongoDB Cloud Manager/Ops Manager - Enterprise backup solution\n\nReplica Set Backup Strategies\n\n- Secondary Node Backup: Use secondary for backup to avoid primary performance impact\n- Hidden Member Backup: Dedicated hidden member for backups\n\nSharded Cluster Backup\n\nCoordinated Backup Process to ensure consistency across shards:\n1. Stop balancer\n2. Wait for balancing to complete\n3. Backup config servers\n4. Backup each shard\n5. Restart balancer\n\nConclusion\n\nMongoDB backup strategies must account for your specific deployment architecture. Start with simple mongodump scripts for development environments, then implement more sophisticated approaches for production systems.",
      relatedPosts: [
        "testing-backup-recovery-process"
      ]
    }
  };

  const post = blogPosts[slug as keyof typeof blogPosts];

  if (!post) {
    return (
      <PageLayout title="Post Not Found" description="The requested blog post could not be found.">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
            <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
            <Button asChild>
              <Link to="/blog">Back to Blog</Link>
            </Button>
          </div>
        </div>
      </PageLayout>
    );
  }

  const categoryColors = {
    "Tutorial": "bg-primary/20 text-primary border-primary/30",
    "Strategy": "bg-accent/20 text-accent border-accent/30", 
    "Best Practices": "bg-warning/20 text-warning border-warning/30",
    "Planning": "bg-muted/20 text-muted-foreground border-muted/30",
    "Development": "bg-destructive/20 text-destructive border-destructive/30",
    "Security": "bg-secondary/20 text-secondary-foreground border-secondary/30",
    "Operations": "bg-success/20 text-success border-success/30"
  };

 

  return (
    <PageLayout 
      title={post.title}
      description={post.excerpt}
    >
      {/* Breadcrumb */}
      <nav className="py-6 border-b border-border/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground font-medium">{post.title}</span>
          </div>
        </div>
      </nav>

      {/* Article Header */}
      <header className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <Button variant="outline" size="sm" asChild>
                <Link to="/blog/all">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  All Posts
                </Link>
              </Button>
              <Badge 
                variant="outline" 
                className={categoryColors[post.category as keyof typeof categoryColors]}
              >
                {post.category}
              </Badge>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-balance mb-6">
              {post.title}
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              {post.excerpt}
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span className="font-medium">{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
              <Button 
                variant="outline" 
                size="sm" 
                className="ml-auto"
                onClick={handleShare}
              >
                <Share2 className="h-4 w-4 mr-2" />
                {shareSuccess ? 'Link Copied!' : 'Share'}
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <Badge key={index} variant="secondary" className="text-sm">
                  <Tag className="h-3 w-3 mr-1" />
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <article className="py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <div className="article-content whitespace-pre-line leading-relaxed">
                {post.content}
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Article Footer */}
      <footer className="py-16 border-t border-border/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold mb-4">Was this article helpful?</h3>
              {helpfulVote ? (
                <div className="flex items-center justify-center gap-2 text-green-600">
                  <CheckCircle className="h-5 w-5" />
                  <span className="font-medium">
                    Thank you for your feedback! Your vote helps us improve our content.
                  </span>
                </div>
              ) : (
                <div className="flex justify-center gap-4">
                  <Button 
                    variant="outline"
                    onClick={() => handleHelpfulVote('yes')}
                    className="hover:bg-green-50 hover:border-green-200"
                  >
                    <ThumbsUp className="h-4 w-4 mr-2" />
                    Yes, helpful
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => handleHelpfulVote('no')}
                    className="hover:bg-red-50 hover:border-red-200"
                  >
                    <ThumbsDown className="h-4 w-4 mr-2" />
                    No, not helpful
                  </Button>
                </div>
              )}
            </div>
            
            <Separator className="mb-12" />
            
            <div className="bg-muted/50 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to get started?</h3>
              <p className="text-muted-foreground mb-6">
                Try Novabuckups free for 14 days and see how easy database backups can be.
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
      </footer>

      {/* Related Posts */}
      {post.relatedPosts && (
        <aside className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center gap-2 mb-8">
                <BookOpen className="h-5 w-5" />
                <h2 className="text-2xl font-bold">Related Articles</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {post.relatedPosts.map((relatedSlug, index) => {
                  const relatedPost = blogPosts[relatedSlug as keyof typeof blogPosts];
                  if (!relatedPost) return null;
                  
                  return (
                    <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-6">
                        <Badge 
                          variant="outline" 
                          className={`text-xs mb-3 ${categoryColors[relatedPost.category as keyof typeof categoryColors]}`}
                        >
                          {relatedPost.category}
                        </Badge>
                        <h3 className="text-lg font-semibold group-hover:text-primary transition-colors mb-3 text-balance">
                          {relatedPost.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                          {relatedPost.excerpt}
                        </p>
                        <Button variant="outline" size="sm" asChild className="w-full">
                          <Link to={`/blog/post/${relatedSlug}`}>
                            Read More
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </aside>
      )}
    </PageLayout>
  );
};

export default BlogPost;
