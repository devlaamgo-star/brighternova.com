import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Check, 
  X,
  ArrowRight,
  Star,
  Zap,
  Building,
  Users,
  Crown
} from "lucide-react";

const PricingTable = () => {
  const plans = [
    {
      name: "Starter",
      icon: Zap,
      price: "Free",
      period: "forever",
      description: "Perfect for personal projects and testing",
      popular: false,
      features: [
        { name: "1 Database backup", included: true },
        { name: "Daily backups", included: true },
        { name: "7-day retention", included: true },
        { name: "Email support", included: true },
        { name: "Basic encryption", included: true },
        { name: "Multi-region storage", included: false },
        { name: "Custom schedules", included: false },
        { name: "API access", included: false },
        { name: "Priority support", included: false },
        { name: "Advanced monitoring", included: false }
      ],
      cta: "Start Free",
      ctaVariant: "outline" as const
    },
    {
      name: "Professional",
      icon: Users,
      price: "$29",
      period: "per month",
      description: "For growing teams and production workloads",
      popular: true,
      features: [
        { name: "10 Database backups", included: true },
        { name: "Hourly backups", included: true },
        { name: "30-day retention", included: true },
        { name: "Priority email support", included: true },
        { name: "Advanced encryption", included: true },
        { name: "Multi-region storage", included: true },
        { name: "Custom schedules", included: true },
        { name: "Full API access", included: true },
        { name: "Priority support", included: false },
        { name: "Advanced monitoring", included: false }
      ],
      cta: "Start Trial",
      ctaVariant: "hero" as const
    },
    {
      name: "Enterprise",
      icon: Crown,
      price: "$99",
      period: "per month",
      description: "For large organizations with complex needs",
      popular: false,
      features: [
        { name: "Unlimited backups", included: true },
        { name: "Real-time backups", included: true },
        { name: "Custom retention", included: true },
        { name: "24/7 phone support", included: true },
        { name: "Military-grade encryption", included: true },
        { name: "Multi-region storage", included: true },
        { name: "Custom schedules", included: true },
        { name: "Full API access", included: true },
        { name: "Priority support", included: true },
        { name: "Advanced monitoring", included: true }
      ],
      cta: "Contact Sales",
      ctaVariant: "outline" as const
    }
  ];

  const comparisonFeatures = [
    {
      category: "Backup & Storage",
      features: [
        { name: "Number of databases", starter: "1", professional: "10", enterprise: "Unlimited" },
        { name: "Backup frequency", starter: "Daily", professional: "Hourly", enterprise: "Real-time" },
        { name: "Retention period", starter: "7 days", professional: "30 days", enterprise: "Custom" },
        { name: "Storage locations", starter: "Single region", professional: "Multi-region", enterprise: "Global" },
        { name: "Compression", starter: "Standard", professional: "Advanced", enterprise: "Optimized" }
      ]
    },
    {
      category: "Security & Compliance",
      features: [
        { name: "Encryption", starter: "256-bit AES", professional: "Advanced", enterprise: "Military-grade" },
        { name: "Access controls", starter: "Basic", professional: "Role-based", enterprise: "Enterprise SSO" },
        { name: "Audit logs", starter: "Basic", professional: "Detailed", enterprise: "Comprehensive" },
        { name: "Compliance", starter: "GDPR", professional: "SOC 2", enterprise: "All standards" }
      ]
    },
    {
      category: "Support & SLA",
      features: [
        { name: "Support channels", starter: "Email", professional: "Email + Chat", enterprise: "24/7 Phone" },
        { name: "Response time", starter: "48 hours", professional: "12 hours", enterprise: "1 hour" },
        { name: "Uptime SLA", starter: "99.9%", professional: "99.95%", enterprise: "99.99%" },
        { name: "Dedicated support", starter: "No", professional: "No", enterprise: "Yes" }
      ]
    }
  ];

  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-6">
            <Star className="h-4 w-4 mr-2" />
            Transparent Pricing
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Simple pricing that
            <span className="block text-primary">scales with your needs</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            No hidden fees, no surprises. Choose the plan that fits your requirements 
            and upgrade as you grow. All plans include our core backup features.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative group hover:shadow-xl transition-all duration-300 ${
                plan.popular 
                  ? 'border-primary/50 shadow-lg scale-105 bg-gradient-card' 
                  : 'border-border/50 hover:border-primary/20 bg-background'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-primary text-primary-foreground px-4 py-1">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className={`w-12 h-12 mx-auto mb-4 rounded-xl flex items-center justify-center ${
                  plan.popular ? 'bg-primary/20' : 'bg-muted'
                }`}>
                  <plan.icon className={`h-6 w-6 ${plan.popular ? 'text-primary' : 'text-muted-foreground'}`} />
                </div>
                
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                
                <div className="mb-6">
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.price !== "Free" && (
                      <span className="text-muted-foreground">/{plan.period.split(' ')[1]}</span>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">{plan.period}</p>
                </div>
                
                <Button 
                  variant={plan.ctaVariant} 
                  className="w-full group"
                  size="lg"
                >
                  {plan.cta}
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="space-y-3">
                  {plan.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-center gap-3">
                      {feature.included ? (
                        <Check className="h-4 w-4 text-accent flex-shrink-0" />
                      ) : (
                        <X className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                      )}
                      <span className={`text-sm ${
                        feature.included ? 'text-foreground' : 'text-muted-foreground'
                      }`}>
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Detailed Comparison Table */}
        <div className="bg-muted/30 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center mb-8">
            Complete feature comparison
          </h3>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 font-semibold">Features</th>
                  <th className="text-center py-4 font-semibold">Starter</th>
                  <th className="text-center py-4 font-semibold">
                    <div className="flex items-center justify-center gap-2">
                      Professional
                      <Badge variant="secondary" className="text-xs">Popular</Badge>
                    </div>
                  </th>
                  <th className="text-center py-4 font-semibold">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((category, categoryIndex) => (
                  <React.Fragment key={categoryIndex}>
                    <tr>
                      <td 
                        colSpan={4} 
                        className="py-6 text-sm font-semibold text-primary border-t border-border"
                      >
                        {category.category}
                      </td>
                    </tr>
                    {category.features.map((feature, featureIndex) => (
                      <tr key={featureIndex} className="border-b border-border/50">
                        <td className="py-3 text-sm">{feature.name}</td>
                        <td className="py-3 text-center text-sm text-muted-foreground">
                          {feature.starter}
                        </td>
                        <td className="py-3 text-center text-sm font-medium">
                          {feature.professional}
                        </td>
                        <td className="py-3 text-center text-sm font-medium">
                          {feature.enterprise}
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Still have questions? Our team is here to help you choose the right plan.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="outline" size="lg" asChild>
              <a href="/schedule-demo">Schedule a Demo</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="/contact">Contact Sales</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingTable;