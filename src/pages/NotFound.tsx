import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import PageLayout from "@/components/shared/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft,
  Home,
  Search,
  AlertTriangle
} from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <PageLayout 
      title="Page Not Found - 404 Error"
      description="The page you're looking for doesn't exist. Return to Novabuckups homepage or browse our documentation."
    >
      <section className="py-20 lg:py-32 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="glass mb-6">
              <AlertTriangle className="h-4 w-4 mr-2" />
              404 Error
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
              Page not found
            </h1>
            <p className="text-xl lg:text-2xl text-primary-foreground/80 text-balance mb-8 max-w-3xl mx-auto">
              Sorry, we couldn't find the page you're looking for. The URL might be incorrect or the page may have been moved.
            </p>
            
            <Card className="glass border-white/20 shadow-xl max-w-2xl mx-auto">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="text-6xl font-bold text-primary mb-4">404</div>
                  <p className="text-muted-foreground">
                    The requested page <code className="bg-muted/50 px-2 py-1 rounded text-sm">{location.pathname}</code> could not be found.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <Button variant="hero" size="lg" className="group" asChild>
                    <Link to="/">
                      <Home className="h-4 w-4 mr-2" />
                      Go Home
                    </Link>
                  </Button>
                  
                  <Button variant="outline" size="lg" className="group" asChild>
                    <Link to="/docs">
                      <Search className="h-4 w-4 mr-2" />
                      Browse Docs
                    </Link>
                  </Button>
                  
                  <Button variant="outline" size="lg" className="group" asChild>
                    <Link to="/contact">
                      <AlertTriangle className="h-4 w-4 mr-2" />
                      Get Help
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="mt-8">
              <Link 
                to="/" 
                className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Return to homepage
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default NotFound;
