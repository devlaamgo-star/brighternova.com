import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowRight } from "lucide-react";

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Starter",
      description: "Perfect for personal projects and small teams",
      price: { monthly: 9, annual: 7 },
      features: [
        "50 backups per month",
        "10GB storage included",
        "Basic retention policies",
        "Email support",
        "2 team members",
        "Standard integrations"
      ],
      popular: false,
      cta: "Start Free Trial"
    },
    {
      name: "Professional", 
      description: "Ideal for growing businesses and dev teams",
      price: { monthly: 29, annual: 24 },
      features: [
        "500 backups per month",
        "100GB storage included",
        "Advanced retention policies",
        "Priority support",
        "10 team members",
        "All integrations",
        "API access",
        "Audit logs",
        "Custom schedules"
      ],
      popular: true,
      cta: "Start Free Trial"
    },
    {
      name: "Enterprise",
      description: "For large organisations with advanced needs",
      price: { monthly: 99, annual: 79 },
      features: [
        "Unlimited backups",
        "1TB storage included",
        "Custom retention policies",
        "24/7 phone support",
        "Unlimited team members",
        "All integrations",
        "Full API access",
        "Advanced audit logs",
        "Custom schedules",
        "SLA guarantees",
        "Dedicated account manager",
        "Custom contracts"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  return (
    <section id="pricing" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4">
            Pricing
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold text-balance mb-6">
            Transparent pricing for 
            <span className="text-primary"> every team size</span>
          </h2>
          <p className="text-lg text-muted-foreground text-balance mb-8">
            Start free, scale as you grow. All plans include our core backup features 
            with no hidden fees or surprise charges.
          </p>

          {/* Billing toggle */}
          <div className="flex items-center justify-center gap-4 bg-background rounded-lg p-1 max-w-xs mx-auto border border-border">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                !isAnnual
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors relative ${
                isAnnual
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Annual
              {isAnnual && (
                <Badge variant="secondary" className="absolute -top-2 -right-2 text-xs bg-accent text-accent-foreground">
                  20% off
                </Badge>
              )}
            </button>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative transition-all duration-300 ${
                plan.popular
                  ? "ring-2 ring-primary shadow-xl scale-105 bg-gradient-card"
                  : "hover:shadow-lg bg-background"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-6">
                  {plan.description}
                </p>
                <div className="mb-4">
                  <span className="text-4xl font-bold">
                    £{isAnnual ? plan.price.annual : plan.price.monthly}
                  </span>
                  <span className="text-muted-foreground">/month</span>
                  {isAnnual && (
                    <div className="text-sm text-accent font-medium mt-1">
                      Billed annually (£{plan.price.annual * 12}/year)
                    </div>
                  )}
                </div>
                <Button
                  variant={plan.popular ? "hero" : "default"}
                  className="w-full group"
                  size="lg"
                >
                  {plan.cta}
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional info */}
        <div className="text-center mt-16 space-y-4">
          <p className="text-sm text-muted-foreground">
            All plans include 14-day free trial • No credit card required • Cancel anytime
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-muted-foreground">
            <span>Currency: GBP (£)</span>
            <span>•</span>
            <span>VAT may apply</span>
            <span>•</span>
            <span>Billing via Stripe</span>
            <span>•</span>
            <a href="/refunds" className="text-primary hover:underline">
              Refund Policy
            </a>
          </div>
          <div className="pt-4">
            <p className="text-xs text-muted-foreground max-w-2xl mx-auto">
              By proceeding with payment, you agree to our{" "}
              <a href="/terms" className="text-primary hover:underline">Terms of Service</a>
              {" "}and{" "}
              <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>.
              Need help? Contact us at{" "}
              <a href="mailto:hello@brighternova.com" className="text-primary hover:underline">
                hello@brighternova.com
              </a>
              {" "}or{" "}
              <a href="tel:+447418639569" className="text-primary hover:underline">
                +44 7418 639569
              </a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;