import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Shield, CheckCircle, ArrowRight, Crown, Zap, Mail, Settings, AlertTriangle } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const SelectPlan = () => {
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState('professional');

  useEffect(() => {
    // Check if user has completed signup
    const signupData = localStorage.getItem('signupUserData');
    if (!signupData) {
      navigate('/signup');
      return;
    }
  }, [navigate]);

  const userData = JSON.parse(localStorage.getItem('signupUserData') || '{}');

  const plans = [
    {
      id: 'professional',
      name: 'Professional',
      price: 29,
      originalPrice: 39,
      period: '/month',
      description: 'Perfect for growing businesses and development teams',
      popular: true,
      features: [
        '500 backups per month',
        '100GB storage included',
        'Advanced retention policies',
        'Priority email support',
        '10 team members',
        'All integrations included',
        'Full API access',
        'Advanced audit logs',
        'Custom backup schedules',
        'Multi-region storage',
        'Real-time monitoring',
        'Webhook notifications'
      ],
      highlights: [
        'Most popular choice',
        '25% off first year',
        '99.99% uptime SLA',
        '24/7 monitoring'
      ]
    }
  ];

  const handleSelectPlan = (planId: string) => {
    const selectedPlanData = plans.find(plan => plan.id === planId);
    
    // Store selected plan in localStorage
    localStorage.setItem('selectedPlan', JSON.stringify(selectedPlanData));
    
    // Navigate to billing page
    navigate('/billing');
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Header */}
      <div className="border-b border-white/10 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="inline-flex items-center gap-2 text-primary-foreground hover:text-primary-glow transition-colors">
              <div className="bg-white/10 p-2 rounded-lg backdrop-blur-sm">
                <Shield className="h-5 w-5" />
              </div>
              <span className="font-heading font-semibold">Novabuckups</span>
            </Link>
            
            <div className="text-sm text-primary-foreground/80">
              Welcome, {userData.firstName}
            </div>
          </div>
        </div>
      </div>

      {/* Alert Bar */}
      <div className="bg-blue-600 border-b border-blue-700">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-center gap-4 text-white text-sm">
            <Mail className="h-4 w-4" />
            <span><strong>Verify Your Email</strong> and <strong>Enable 2FA</strong> for complete account security</span>
            <Settings className="h-4 w-4" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="glass mb-6">
            <Crown className="h-4 w-4 mr-2" />
            Choose Your Plan
          </Badge>
          <h1 className="text-3xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Select Your Professional Plan
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Start your 3-day free trial with our Professional plan. 
            Experience enterprise-grade backup protection designed for growing teams.
          </p>
        </div>

        {/* Plan Card */}
        <div className="max-w-2xl mx-auto">
          {plans.map((plan) => (
            <Card key={plan.id} className="glass border-primary/50 shadow-2xl bg-gradient-card">
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-primary text-primary-foreground px-6 py-2">
                    Most Popular Choice
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-6 pt-8">
                <div className="bg-primary/20 p-4 rounded-xl w-fit mx-auto mb-6">
                  <Crown className="h-8 w-8 text-primary" />
                </div>
                
                <h3 className="text-3xl font-bold mb-3 text-foreground">{plan.name}</h3>
                <p className="text-muted-foreground mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-5xl font-bold text-foreground">£{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 mt-2">
                    <span className="text-sm text-muted-foreground line-through">£{plan.originalPrice}/month</span>
                    <Badge variant="secondary" className="text-xs">Save 25%</Badge>
                  </div>
                  <p className="text-xs text-accent font-medium mt-2">
                    Billed annually (£{plan.price * 12}/year)
                  </p>
                </div>

                {/* Highlights */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {plan.highlights.map((highlight, index) => (
                    <div key={index} className="bg-primary/10 rounded-lg p-3">
                      <p className="text-xs font-medium text-primary">{highlight}</p>
                    </div>
                  ))}
                </div>

                <Button
                  onClick={() => handleSelectPlan(plan.id)}
                  variant="hero"
                  size="lg"
                  className="w-full group text-lg py-6"
                >
                  Start 3-Day Free Trial
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardHeader>
              
              <CardContent className="pt-0">
                {/* Features List */}
                <div className="space-y-4 mb-6">
                  <h4 className="font-semibold text-foreground text-center">Everything you need to protect your data:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {plan.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Trial Information */}
                <Alert className="border-green-200 bg-green-50/80">
                  <Zap className="h-4 w-4 text-green-600" />
                  <AlertDescription className="text-green-800">
                    <strong>3-Day Free Trial:</strong> Full access to all Professional features. 
                    No credit card required during trial period.
                  </AlertDescription>
                </Alert>

                {/* Additional Info */}
                <div className="text-center mt-6 pt-6 border-t border-border/50">
                  <p className="text-xs text-muted-foreground mb-2">
                    Free trial includes all Professional features • Cancel anytime • No setup fees
                  </p>
                  <div className="flex flex-wrap justify-center items-center gap-2 text-xs text-muted-foreground">
                    <span>Secure billing via Stripe</span>
                    <span>•</span>
                    <span>VAT included</span>
                    <span>•</span>
                    <Link to="/refunds" className="text-primary hover:underline">
                      30-day money-back guarantee
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Security Assurance */}
        <div className="text-center mt-12">
          <div className="flex justify-center items-center gap-6 text-primary-foreground/60 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              <span>256-bit SSL Encryption</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              <span>GDPR Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              <span>SOC 2 Certified</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectPlan;
