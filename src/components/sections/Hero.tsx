import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowRight, Shield, Clock, Zap, Play } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  const features = [
    { icon: Shield, text: "Encrypted & Secure" },
    { icon: Clock, text: "Automated Schedules" },
    { icon: Zap, text: "Quick Setup" },
  ];

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 hero-bg"></div>
      
      {/* Content */}
      <div className="relative container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="mb-6">
            <Badge variant="secondary" className="glass px-4 py-2 text-sm font-medium">
              <CheckCircle className="h-4 w-4 mr-2 text-accent" />
              Trusted by developers worldwide
            </Badge>
          </div>

          {/* Headline */}
          <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
            <span className="text-primary-foreground">Automated Backups</span>
            <br />
            <span className="text-primary-foreground/90">That Actually Work</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl lg:text-2xl text-primary-foreground/80 text-balance mb-8 max-w-3xl mx-auto leading-relaxed">
            Professional backup automation for your servers, databases, and storage. 
            Set it up once, sleep peacefully forever.
          </p>

          {/* Feature highlights */}
          <div className="flex flex-wrap justify-center items-center gap-4 lg:gap-8 mb-10">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2 glass px-4 py-2 rounded-full">
                <feature.icon className="h-5 w-5 text-accent" />
                <span className="text-primary-foreground/90 text-sm font-medium">
                  {feature.text}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
            <Button variant="glass" size="xl" className="group text-[hsl(0_0%_83.94%)]" asChild>
              <Link to="/signup">
                Start Free Trial
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" className="glass border-white/30 text-black hover:bg-white/20" asChild>
              <Link to="/demo">
                <Play className="h-5 w-5 mr-2" />
                View Live Demo
              </Link>
            </Button>
          </div>

          {/* Secondary CTA */}
          <div className="mb-8">
            <Button variant="ghost" size="lg" className="text-primary-foreground/80 hover:text-primary-foreground" asChild>
              <Link to="/schedule-demo">
                Schedule Personal Demo →
              </Link>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-primary-foreground/60 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-accent" />
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-accent" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-accent" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-4 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-1/4 right-4 w-40 h-40 bg-primary/20 rounded-full blur-xl"></div>
    </section>
  );
};

export default Hero;
