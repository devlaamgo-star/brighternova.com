import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote, Users, Building, Shield } from "lucide-react";
import teamWorkingImage from "@/assets/team-working.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      content: "Novabuckups saved our startup when a server crash hit us at 2 AM. The automated restore had us back online in minutes, not hours. Worth every penny.",
      author: "Sarah Chen",
      role: "CTO",
      company: "TechFlow Solutions",
      companySize: "50+ employees",
      rating: 5,
      category: "Startup"
    },
    {
      id: 2,
      content: "We process thousands of transactions daily. Novabuckups gives us peace of mind with reliable, encrypted backups that just work. The scheduling flexibility is perfect for our 24/7 operations.",
      author: "Marcus Rodriguez",
      role: "DevOps Lead",
      company: "FinanceCore",
      companySize: "500+ employees",
      rating: 5,
      category: "Enterprise"
    },
    {
      id: 3,
      content: "The API integration was seamless. Set it up in 10 minutes and it's been running flawlessly for 8 months. Best backup solution we've used.",
      author: "Emma Thompson",
      role: "Senior Developer",
      company: "CloudStack Labs",
      companySize: "25+ employees",
      rating: 5,
      category: "Developer"
    }
  ];

  const allTestimonials = [
    ...testimonials,
    {
      id: 4,
      content: "Compliance requirements are tough in healthcare. Novabuckups handles HIPAA requirements beautifully with detailed audit logs and encryption standards.",
      author: "Dr. James Wilson",
      role: "IT Director",
      company: "MedSecure Systems",
      companySize: "200+ employees",
      rating: 5,
      category: "Healthcare"
    },
    {
      id: 5,
      content: "When our hosting provider had a catastrophic failure, Novabuckups was our lifeline. Cross-cloud backups meant we could restore everything to a different provider within hours.",
      author: "Alex Kumar",
      role: "Technical Founder",
      company: "DataPipe Inc",
      companySize: "15+ employees",
      rating: 5,
      category: "SaaS"
    },
    {
      id: 6,
      content: "The real-time monitoring and instant alerts are game-changers. We know immediately if something goes wrong, not days later when it's too late.",
      author: "Lisa Zhang",
      role: "Infrastructure Manager",
      company: "ScaleUp Digital",
      companySize: "100+ employees",
      rating: 5,
      category: "Digital Agency"
    }
  ];

  const stats = [
    { value: "99.99%", label: "Uptime SLA", description: "Guaranteed availability" },
    { value: "5TB+", label: "Data Protected Daily", description: "Across all customers" },
    { value: "<2min", label: "Average Recovery Time", description: "From backup initiation" },
    { value: "256-bit", label: "AES Encryption", description: "Military-grade security" }
  ];

  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-6">
            <Users className="h-4 w-4 mr-2" />
            Customer Stories
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Trusted by <span className="text-primary">professionals worldwide</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From startups to enterprise companies, developers trust Novabuckups to protect their most critical data. 
            Here's what they have to say about their experience.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <div className="relative">
            <img 
              src={teamWorkingImage}
              alt="Professional team working on data backup solutions in modern office environment"
              className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </div>

          {/* Scrolling Testimonials */}
          <div className="space-y-4">
            <div className="overflow-hidden h-[400px]">
              <div className="space-y-4 animate-scroll-vertical">
                {testimonials.map((testimonial, index) => (
                  <Card key={`${testimonial.id}-${index}`} className="bg-background border-border/50 shadow-md">
                    <CardContent className="p-4">
                      {/* Rating */}
                      <div className="flex items-center gap-1 mb-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>

                      {/* Quote */}
                      <div className="relative mb-3">
                        <Quote className="absolute -top-1 -left-1 h-4 w-4 text-primary/20" />
                        <p className="text-sm text-muted-foreground leading-relaxed pl-5">
                          "{testimonial.content}"
                        </p>
                      </div>

                      {/* Author */}
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="text-sm font-semibold text-foreground">{testimonial.author}</div>
                          <div className="text-xs text-primary">{testimonial.role}</div>
                          <div className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                            <Building className="h-3 w-3" />
                            {testimonial.company}
                          </div>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {testimonial.category}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="font-semibold text-foreground mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Trust Section */}
        <div className="mt-16">
          <Card className="bg-gradient-card border-primary/20 p-8">
            <CardContent className="p-0">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4">Join thousands of satisfied customers</h3>
                <p className="text-muted-foreground">
                  Companies of all sizes trust Novabuckups with their most critical data protection needs.
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">1,500+</div>
                  <div className="text-sm text-muted-foreground">Active Users</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">50+</div>
                  <div className="text-sm text-muted-foreground">Countries Served</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">99.9%</div>
                  <div className="text-sm text-muted-foreground">Customer Satisfaction</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">24/7</div>
                  <div className="text-sm text-muted-foreground">Expert Support</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;