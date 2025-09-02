import PageLayout from "@/components/shared/PageLayout";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight, Star } from "lucide-react";

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
        "Standard integrations",
        "14-day backup history",
        "Basic encryption"
      ],
      popular: false,
      cta: "Start Free Trial",
      highlight: false
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
        "Custom schedules",
        "90-day backup history",
        "Advanced encryption",
        "Webhook notifications"
      ],
      popular: true,
      cta: "Start Free Trial",
      highlight: true
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
        "Unlimited backup history",
        "Enterprise encryption",
        "SLA guarantees",
        "Dedicated account manager",
        "Custom contracts",
        "White-label options",
        "On-premise deployment"
      ],
      popular: false,
      cta: "Contact Sales",
      highlight: false
    }
  ];

  const faqs = [
    {
      question: "What's included in the free trial?",
      answer: "Full access to all features of your chosen plan for 14 days. No credit card required. You can test backups, restores, and all integrations."
    },
    {
      question: "How does storage work?",
      answer: "Each plan includes storage allowance. Additional storage is £0.10/GB/month. We use intelligent compression to minimise storage usage."
    },
    {
      question: "Can I change plans?",
      answer: "Yes, upgrade or downgrade anytime. Changes take effect immediately for upgrades, or at the next billing cycle for downgrades."
    },
    {
      question: "What about VAT?",
      answer: "VAT is added at checkout for UK customers (20%) and applicable EU customers based on location. Business customers can provide VAT numbers."
    },
    {
      question: "How secure is billing?",
      answer: "All payments are processed securely with bank-level encryption. We never store your payment details on our servers."
    },
    {
      question: "Enterprise pricing?",
      answer: "Enterprise plans start at £99/month with volume discounts available. Contact sales for custom pricing and enterprise features."
    }
  ];

  return (
    <PageLayout 
      title="Pricing - Transparent Backup Plans"
      description="Simple, transparent pricing for professional backup automation. Start free, scale as you grow. No hidden fees or surprise charges. UK-based billing."
    >
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="glass mb-6">
              <Star className="h-4 w-4 mr-2" />
              Transparent Pricing
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
              Simple pricing for 
              <span className="block">every team size</span>
            </h1>
            <p className="text-xl lg:text-2xl text-primary-foreground/80 text-balance mb-8 max-w-3xl mx-auto">
              Start free, scale as you grow. No hidden fees, no surprise charges, 
              no complicated tiers. Just honest pricing that grows with you.
            </p>

            {/* Billing toggle */}
            <div className="flex items-center justify-center gap-4 bg-background/10 backdrop-blur-md rounded-lg p-1 max-w-xs mx-auto mb-8 border border-white/20">
              <button
                onClick={() => setIsAnnual(false)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  !isAnnual
                    ? "bg-white/20 text-primary-foreground shadow-sm"
                    : "text-primary-foreground/70 hover:text-primary-foreground"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors relative ${
                  isAnnual
                    ? "bg-white/20 text-primary-foreground shadow-sm"
                    : "text-primary-foreground/70 hover:text-primary-foreground"
                }`}
              >
                Annual
                {isAnnual && (
                  <Badge variant="secondary" className="absolute -top-2 -right-2 text-xs bg-accent text-accent-foreground">
                    Save 20%
                  </Badge>
                )}
              </button>
            </div>

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
      </section>

      {/* Pricing Cards */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative transition-all duration-300 ${
                  plan.highlight
                    ? "ring-2 ring-primary shadow-xl scale-105 bg-gradient-card"
                    : "hover:shadow-lg bg-background border-border/50 hover:border-primary/20"
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
                    {!isAnnual && plan.price.monthly > 9 && (
                      <div className="text-sm text-muted-foreground mt-1">
                        Save £{(plan.price.monthly - plan.price.annual) * 12}/year with annual billing
                      </div>
                    )}
                  </div>
                  <Button
                    variant={plan.highlight ? "hero" : "default"}
                    className="w-full group"
                    size="lg"
                    asChild
                  >
                    <Link to={plan.cta === "Contact Sales" ? "/contact-sales" : "/signup"}>
                      {plan.cta}
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
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

          {/* Additional Info */}
          <div className="text-center mt-16 space-y-6">
            <div className="bg-muted/50 rounded-lg p-6 border border-border max-w-4xl mx-auto">
              <h3 className="text-lg font-semibold mb-4">Before you pay</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                <div>
                  <strong>Refunds:</strong> First purchase within 14 days, annual plans within 30 days
                </div>
                <div>
                  <strong>Cancellation:</strong> Cancel anytime, effective end of billing period
                </div>
                <div>
                  <strong>Currency:</strong> All prices in GBP (£), VAT may apply
                </div>
                <div>
                  <strong>Billing:</strong> Secure payment processing
                </div>
              </div>
            </div>

            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
              By proceeding with payment, you agree to our{" "}
              <a href="/terms" className="text-primary hover:underline">Terms of Service</a>
              {" "}and{" "}
              <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>.
              Need help? Contact{" "}
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
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Pricing <span className="text-primary">questions</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Common questions about billing, pricing, and plans.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-background border-border/50">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3 text-card-foreground">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Pricing;
