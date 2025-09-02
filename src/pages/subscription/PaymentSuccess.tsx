import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Shield, CheckCircle, ArrowRight, Clock, Mail, CreditCard, Package, Calendar, DollarSign, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const [orderNumber] = useState(() => `NOV-${Date.now().toString().slice(-8)}`);

  useEffect(() => {
    // Check if user has completed the entire flow
    const signupData = localStorage.getItem('signupUserData');
    const planData = localStorage.getItem('selectedPlan');
    const billingData = localStorage.getItem('billingData');
    
    if (!signupData || !planData || !billingData) {
      navigate('/signup');
      return;
    }
  }, [navigate]);

  const userData = JSON.parse(localStorage.getItem('signupUserData') || '{}');
  const planData = JSON.parse(localStorage.getItem('selectedPlan') || '{}');
  const billingData = JSON.parse(localStorage.getItem('billingData') || '{}');
  const paymentMethod = localStorage.getItem('paymentMethod') || 'stripe';

  const orderDate = new Date().toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });

  const trialEndDate = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });

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

      <div className="container mx-auto px-4 py-12">
        {/* Success Header */}
        <div className="text-center mb-12">
          <div className="bg-green-100 p-6 rounded-full w-fit mx-auto mb-6">
            <CheckCircle className="h-12 w-12 text-green-600" />
          </div>
          <h1 className="text-3xl lg:text-5xl font-bold text-primary-foreground mb-4">
            Thank You for Your Order!
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Your subscription has been successfully submitted and is now being processed.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Order Information */}
          <Card className="glass border-white/20 shadow-xl">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Package className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold text-foreground">Order Information</h3>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Order Details */}
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground">Order Number:</p>
                  <p className="font-mono font-semibold text-foreground">{orderNumber}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Order Date:</p>
                  <p className="font-semibold text-foreground">{orderDate}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Plan:</p>
                  <p className="font-semibold text-primary">{planData.name}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Payment Method:</p>
                  <p className="font-semibold text-foreground capitalize">{paymentMethod}</p>
                </div>
              </div>

              {/* Customer Details */}
              <div className="bg-muted/30 rounded-lg p-4">
                <h4 className="font-medium text-foreground mb-3 flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Customer Details
                </h4>
                <div className="text-sm space-y-1">
                  <p><span className="text-muted-foreground">Name:</span> <span className="font-medium">{billingData.firstName} {billingData.lastName}</span></p>
                  <p><span className="text-muted-foreground">Email:</span> <span className="font-medium">{billingData.email}</span></p>
                  {billingData.company && (
                    <p><span className="text-muted-foreground">Company:</span> <span className="font-medium">{billingData.company}</span></p>
                  )}
                  <p><span className="text-muted-foreground">Address:</span> <span className="font-medium">{billingData.address}, {billingData.city}, {billingData.postalCode}</span></p>
                  <p><span className="text-muted-foreground">Phone:</span> <span className="font-medium">{billingData.phone}</span></p>
                </div>
              </div>

              {/* Billing Summary */}
              <div className="bg-primary/10 rounded-lg p-4">
                <h4 className="font-medium text-foreground mb-3 flex items-center gap-2">
                  <DollarSign className="h-4 w-4" />
                  Billing Summary
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{planData.name} Plan:</span>
                    <span className="font-medium">£{planData.price}/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Discount (25%):</span>
                    <span className="font-medium text-green-600">-£{planData.originalPrice - planData.price}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">VAT (20%):</span>
                    <span className="font-medium">£{Math.round(planData.price * 0.2)}</span>
                  </div>
                  <div className="border-t border-border/50 pt-2 mt-2 flex justify-between font-semibold">
                    <span className="text-foreground">Total Monthly:</span>
                    <span className="text-foreground">£{Math.round(planData.price * 1.2)}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Processing Status */}
          <Card className="glass border-primary/30 shadow-xl bg-gradient-card">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Clock className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold text-foreground">Order Status</h3>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Processing Alert */}
              <Alert className="border-amber-200 bg-amber-50/80">
                <Clock className="h-4 w-4 text-amber-600" />
                <AlertDescription className="text-amber-800">
                  <strong>Your order is in processing</strong><br />
                  Please wait 12-24 hours to check payment and prepare your account.
                </AlertDescription>
              </Alert>

              {/* Trial Information */}
              <div className="bg-green-50/80 rounded-lg p-4 border border-green-200">
                <h4 className="font-medium text-green-800 mb-2 flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Free Trial Active
                </h4>
                <div className="text-sm text-green-700 space-y-1">
                  <p><strong>Trial Period:</strong> 3 days (until {trialEndDate})</p>
                  <p><strong>Access:</strong> Full Professional features</p>
                  <p><strong>First Charge:</strong> {trialEndDate}</p>
                </div>
              </div>

              {/* Next Steps */}
              <div className="space-y-4">
                <h4 className="font-medium text-foreground">What happens next:</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 p-1 rounded-full">
                      <CheckCircle className="h-3 w-3 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Email Verification</p>
                      <p className="text-muted-foreground">Check your email and verify your account</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 p-1 rounded-full">
                      <CheckCircle className="h-3 w-3 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">2FA Setup</p>
                      <p className="text-muted-foreground">Configure two-factor authentication</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-amber-100 p-1 rounded-full">
                      <Clock className="h-3 w-3 text-amber-600" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Payment Processing</p>
                      <p className="text-muted-foreground">12-24 hours for account preparation</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 p-1 rounded-full">
                      <Mail className="h-3 w-3 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Setup Confirmation</p>
                      <p className="text-muted-foreground">You'll receive setup instructions via email</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Support */}
              <Alert className="border-blue-200 bg-blue-50/80">
                <Mail className="h-4 w-4 text-blue-600" />
                <AlertDescription className="text-blue-800">
                  <strong>Need Help?</strong> Our support team is here to assist you 24/7. 
                  <Link to="/contact" className="underline font-medium">Contact Support</Link>
                </AlertDescription>
              </Alert>

              {/* Action Buttons */}
              <div className="space-y-3">
                <Button variant="hero" size="lg" className="w-full" asChild>
                  <Link to="/signin">
                    Access Your Account
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
                
                <Button variant="outline" size="lg" className="w-full" asChild>
                  <Link to="/">
                    Return to Homepage
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Information */}
        <div className="text-center mt-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-primary-foreground mb-3">Important Information</h3>
            <div className="text-sm text-primary-foreground/80 space-y-2">
              <p>• Your 3-day free trial has started immediately</p>
              <p>• No charges will be made during the trial period</p>
              <p>• You can cancel anytime without any penalties</p>
              <p>• Full refund available within 30 days if not satisfied</p>
              <p>• Setup and configuration support is included</p>
            </div>
          </div>
        </div>

        {/* Security Assurance */}
        <div className="text-center mt-8">
          <div className="flex justify-center items-center gap-6 text-primary-foreground/60 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              <span>Secure Transaction</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              <span>Data Protected</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              <span>GDPR Compliant</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
