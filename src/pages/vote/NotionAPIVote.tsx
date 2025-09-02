import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { 
  Star,
  TrendingUp,
  Users,
  MessageSquare,
  CheckCircle,
  ArrowRight,
  FileText,
  Database,
  Globe,
  Zap,
  ThumbsUp,
  Heart,
  Share2
} from "lucide-react";
import { Link } from "react-router-dom";

const NotionAPIVote = () => {
  const [hasVoted, setHasVoted] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);
  const [voteData, setVoteData] = useState({
    email: "",
    company: "",
    useCase: "",
    priority: "medium"
  });

  const handleVote = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate vote submission
    await new Promise(resolve => setTimeout(resolve, 500));
    
    setHasVoted(true);
    setShowThankYou(true);
  };

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: `Vote for ${integrationDetails.name} Integration`,
          text: `Help prioritize ${integrationDetails.name} integration for Novabuckups backup platform`,
          url: window.location.href,
        });
      } else {
        // Fallback: Copy to clipboard
        await navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
      }
    } catch (error) {
      // Fallback: Copy to clipboard
      try {
        await navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
      } catch (clipboardError) {
        console.error('Share failed:', error);
      }
    }
  };

  const handleFavorite = () => {
    setIsFavorited(!isFavorited);
    // Save to localStorage for persistence
    const favorites = JSON.parse(localStorage.getItem('integration_favorites') || '[]');
    if (!isFavorited) {
      favorites.push({
        id: 'notion-api',
        name: integrationDetails.name,
        category: integrationDetails.category,
        votes: integrationDetails.currentVotes,
        timestamp: new Date().toISOString()
      });
      localStorage.setItem('integration_favorites', JSON.stringify(favorites));
    } else {
      const updated = favorites.filter((fav: any) => fav.id !== 'notion-api');
      localStorage.setItem('integration_favorites', JSON.stringify(updated));
    }
  };

  // Check if already favorited on component mount
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('integration_favorites') || '[]');
    setIsFavorited(favorites.some((fav: any) => fav.id === 'notion-api'));
  }, []);

  const integrationDetails = {
    name: "Notion API",
    category: "SaaS Platform",
    currentVotes: 147,
    description: "Backup Notion workspaces and databases",
    longDescription: "Enable automatic backups of your Notion workspaces, including pages, databases, blocks, and user permissions. Perfect for teams that rely on Notion for documentation, project management, and knowledge bases.",
    features: [
      "Workspace and page backup",
      "Database schema and content backup", 
      "Block-level content preservation",
      "User permissions and sharing settings",
      "Incremental backup support",
      "Rich text and media file handling"
    ],
    benefits: [
      "Protect critical documentation",
      "Ensure business continuity",
      "Compliance and audit support",
      "Version history preservation",
      "Cross-workspace backup",
      "Automated daily snapshots"
    ],
    technicalInfo: {
      apiEndpoint: "https://api.notion.com/v1/",
      authentication: "OAuth 2.0 + Integration Tokens",
      rateLimit: "3 requests per second",
      documentation: "https://developers.notion.com/"
    },
    estimatedTimeline: "2-3 months",
    complexity: "Medium"
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-16 lg:py-24 bg-gradient-to-br from-background to-secondary/5">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                <Link to="/request-integration" className="hover:text-primary">Request Integration</Link>
                <span>→</span>
                <span>Vote for Integration</span>
                <span>→</span>
                <span>Notion API</span>
              </div>

              <div className="text-center mb-12">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="p-3 bg-gray-900 text-white rounded-lg">
                    <FileText className="h-8 w-8" />
                  </div>
                  <div className="text-left">
                    <h1 className="text-3xl lg:text-4xl font-bold">
                      Vote for {integrationDetails.name} Integration
                    </h1>
                    <div className="flex items-center gap-3 mt-2">
                      <Badge variant="outline">{integrationDetails.category}</Badge>
                      <div className="flex items-center gap-1 bg-primary/10 text-primary px-3 py-1 rounded-full">
                        <Star className="h-4 w-4" />
                        <span className="font-medium">{integrationDetails.currentVotes} votes</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  {integrationDetails.longDescription}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Integration Details */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                
                {/* Left Column - Details */}
                <div className="space-y-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>Integration Features</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {integrationDetails.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Business Benefits</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {integrationDetails.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <Zap className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Technical Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="font-medium">API Endpoint:</span>
                          <p className="text-muted-foreground">{integrationDetails.technicalInfo.apiEndpoint}</p>
                        </div>
                        <div>
                          <span className="font-medium">Authentication:</span>
                          <p className="text-muted-foreground">{integrationDetails.technicalInfo.authentication}</p>
                        </div>
                        <div>
                          <span className="font-medium">Rate Limit:</span>
                          <p className="text-muted-foreground">{integrationDetails.technicalInfo.rateLimit}</p>
                        </div>
                        <div>
                          <span className="font-medium">Complexity:</span>
                          <p className="text-muted-foreground">{integrationDetails.complexity}</p>
                        </div>
                      </div>
                      
                      <Separator />
                      
                      <div>
                        <span className="font-medium text-sm">Official Documentation:</span>
                        <a 
                          href={integrationDetails.technicalInfo.documentation}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-primary hover:underline text-sm"
                        >
                          {integrationDetails.technicalInfo.documentation}
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Right Column - Voting Form */}
                <div className="space-y-8">
                  <Card className="border-primary/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <ThumbsUp className="h-5 w-5" />
                        Vote for This Integration
                      </CardTitle>
                      <CardDescription>
                        Show your support and help us prioritize development
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      {!hasVoted ? (
                        <form onSubmit={handleVote} className="space-y-4">
                          <div>
                            <Label htmlFor="email">Email Address</Label>
                            <Input
                              id="email"
                              type="email"
                              value={voteData.email}
                              onChange={(e) => setVoteData(prev => ({ ...prev, email: e.target.value }))}
                              placeholder="your@email.com"
                              required
                            />
                            <p className="text-xs text-muted-foreground mt-1">
                              We'll notify you when this integration is available
                            </p>
                          </div>
                          
                          <div>
                            <Label htmlFor="company">Company (Optional)</Label>
                            <Input
                              id="company"
                              value={voteData.company}
                              onChange={(e) => setVoteData(prev => ({ ...prev, company: e.target.value }))}
                              placeholder="Your company name"
                            />
                          </div>
                          
                          <div>
                            <Label htmlFor="useCase">How would you use this integration?</Label>
                            <Textarea
                              id="useCase"
                              value={voteData.useCase}
                              onChange={(e) => setVoteData(prev => ({ ...prev, useCase: e.target.value }))}
                              placeholder="Describe your specific use case for Notion backup..."
                              rows={3}
                            />
                          </div>

                          <Button type="submit" className="w-full">
                            <Star className="h-4 w-4 mr-2" />
                            Cast Your Vote
                          </Button>
                        </form>
                      ) : (
                        <div className="text-center space-y-4">
                          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                            <CheckCircle className="h-8 w-8 text-green-600" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold">Thank you for voting!</h3>
                            <p className="text-muted-foreground">
                              Your vote has been counted. We'll notify you when this integration becomes available.
                            </p>
                          </div>
                          <div className="flex items-center justify-center gap-2 text-primary">
                            <Star className="h-4 w-4 fill-current" />
                            <span className="font-medium">{integrationDetails.currentVotes + 1} total votes</span>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Development Timeline</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">Estimated Timeline:</span>
                          <Badge variant="outline">{integrationDetails.estimatedTimeline}</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">Current Priority:</span>
                          <Badge className="bg-orange-500 text-white">High Demand</Badge>
                        </div>
                        <Separator />
                        <div className="text-xs text-muted-foreground">
                          Timeline depends on community votes, technical complexity, and development resources.
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Share & Promote</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Help this integration get built faster by sharing it with your network
                      </p>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="flex-1" onClick={handleShare}>
                          <Share2 className="h-4 w-4 mr-2" />
                          Share
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className={`flex-1 ${isFavorited ? 'bg-red-50 border-red-200 text-red-600' : ''}`}
                          onClick={handleFavorite}
                        >
                          <Heart className={`h-4 w-4 mr-2 ${isFavorited ? 'fill-current' : ''}`} />
                          {isFavorited ? 'Favorited' : 'Favorite'}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Integrations */}
        <section className="py-16 lg:py-24 bg-secondary/5">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Other Popular Requests
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Check out other integrations the community is requesting
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/vote/supabase">
                    <Database className="h-4 w-4 mr-2" />
                    Vote for Supabase
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/vote/vercel">
                    <Globe className="h-4 w-4 mr-2" />
                    Vote for Vercel
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Thank You Dialog */}
      <Dialog open={showThankYou} onOpenChange={setShowThankYou}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <DialogTitle className="text-xl">Thank You for Voting!</DialogTitle>
            </div>
            <DialogDescription className="text-left">
              Your vote for the Notion API integration has been recorded.
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-900 mb-2">What's next?</h4>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>✓ Your vote increases this integration's priority</li>
                <li>✓ We'll notify you about development progress</li>
                <li>✓ You'll get early access when it's ready</li>
                <li>✓ Share with colleagues to boost priority further</li>
              </ul>
            </div>
            
            <div className="text-center space-y-3">
              <div className="flex items-center justify-center gap-2">
                <Star className="h-5 w-5 text-primary fill-current" />
                <span className="font-medium">{integrationDetails.currentVotes + 1} total votes</span>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  onClick={() => setShowThankYou(false)}
                  className="flex-1"
                >
                  Continue
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setShowThankYou(false);
                    window.location.href = '/request-integration';
                  }}
                  className="flex-1"
                >
                  Vote for More
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default NotionAPIVote;
