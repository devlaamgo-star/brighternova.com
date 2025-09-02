import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Shield, CheckCircle, ArrowRight, CreditCard, Mail, Settings, User, Building, MapPin, Phone, Loader2, Globe } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

// Currency and country configuration
const currencies = [
  { code: 'GBP', symbol: '£', name: 'British Pound', rate: 1.0 },
  { code: 'USD', symbol: '$', name: 'US Dollar', rate: 1.27 },
  { code: 'EUR', symbol: '€', name: 'Euro', rate: 1.17 },
  { code: 'CAD', symbol: 'C$', name: 'Canadian Dollar', rate: 1.74 },
  { code: 'AUD', symbol: 'A$', name: 'Australian Dollar', rate: 1.96 },
  { code: 'JPY', symbol: '¥', name: 'Japanese Yen', rate: 189.5 },
  { code: 'CHF', symbol: 'CHF', name: 'Swiss Franc', rate: 1.12 },
  { code: 'SEK', symbol: 'kr', name: 'Swedish Krona', rate: 13.8 },
  { code: 'NOK', symbol: 'kr', name: 'Norwegian Krone', rate: 14.2 },
  { code: 'DKK', symbol: 'kr', name: 'Danish Krone', rate: 8.73 },
];

const countries = [
  { code: 'GB', name: 'United Kingdom', currency: 'GBP', taxRate: 0.20 },
  { code: 'US', name: 'United States', currency: 'USD', taxRate: 0.08 },
  { code: 'CA', name: 'Canada', currency: 'CAD', taxRate: 0.13 },
  { code: 'AU', name: 'Australia', currency: 'AUD', taxRate: 0.10 },
  { code: 'DE', name: 'Germany', currency: 'EUR', taxRate: 0.19 },
  { code: 'FR', name: 'France', currency: 'EUR', taxRate: 0.20 },
  { code: 'IT', name: 'Italy', currency: 'EUR', taxRate: 0.22 },
  { code: 'ES', name: 'Spain', currency: 'EUR', taxRate: 0.21 },
  { code: 'NL', name: 'Netherlands', currency: 'EUR', taxRate: 0.21 },
  { code: 'SE', name: 'Sweden', currency: 'SEK', taxRate: 0.25 },
  { code: 'NO', name: 'Norway', currency: 'NOK', taxRate: 0.25 },
  { code: 'DK', name: 'Denmark', currency: 'DKK', taxRate: 0.25 },
  { code: 'CH', name: 'Switzerland', currency: 'CHF', taxRate: 0.077 },
  { code: 'JP', name: 'Japan', currency: 'JPY', taxRate: 0.10 },
];

const Billing = () => {
  const navigate = useNavigate();
  const [selectedCurrency, setSelectedCurrency] = useState('GBP');
  const [selectedCountry, setSelectedCountry] = useState('GB');
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [billingData, setBillingData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    address: '',
    city: '',
    postalCode: '',
    country: 'United Kingdom',
    phone: ''
  });

  useEffect(() => {
    // Check if user has completed signup and selected plan
    const signupData = localStorage.getItem('signupUserData');
    const planData = localStorage.getItem('selectedPlan');
    
    if (!signupData || !planData) {
      navigate('/signup');
      return;
    }

    // Pre-fill form with signup data
    const userData = JSON.parse(signupData);
    setBillingData(prev => ({
      ...prev,
      firstName: userData.firstName,
      lastName: userData.lastName,
      email: userData.email,
      company: userData.company || ''
    }));
  }, [navigate]);

  // Update currency when country changes
  useEffect(() => {
    const country = countries.find(c => c.code === selectedCountry);
    if (country && country.currency !== selectedCurrency) {
      setSelectedCurrency(country.currency);
    }
    setBillingData(prev => ({
      ...prev,
      country: countries.find(c => c.code === selectedCountry)?.name || 'United Kingdom'
    }));
  }, [selectedCountry, selectedCurrency]);

  const userData = JSON.parse(localStorage.getItem('signupUserData') || '{}');
  const planData = JSON.parse(localStorage.getItem('selectedPlan') || '{}');

  const currentCurrency = currencies.find(c => c.code === selectedCurrency);
  const currentCountry = countries.find(c => c.code === selectedCountry);
  const currentTaxRate = currentCountry?.taxRate || 0.20;

  // Calculate prices in selected currency
  const basePrice = Math.round((planData.price || 0) * (currentCurrency?.rate || 1));
  const originalPrice = Math.round((planData.originalPrice || 0) * (currentCurrency?.rate || 1));
  const taxAmount = Math.round(basePrice * currentTaxRate);
  const totalPrice = basePrice + taxAmount;

  const handleInputChange = (field: string, value: string) => {
    setBillingData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleCountryChange = (countryCode: string) => {
    setSelectedCountry(countryCode);
  };

  const handleCurrencyChange = (currencyCode: string) => {
    setSelectedCurrency(currencyCode);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all required fields
    const requiredFields = ['firstName', 'lastName', 'email', 'address', 'city', 'postalCode', 'phone'];
    const missingFields = requiredFields.filter(field => !billingData[field as keyof typeof billingData]?.trim());
    
    if (missingFields.length > 0) {
      alert(`Please fill in all required fields: ${missingFields.join(', ')}`);
      return;
    }
    
    // Process payment
    setIsProcessingPayment(true);
    
    // Store billing data with currency and country
    const finalBillingData = {
      ...billingData,
      currency: selectedCurrency,
      countryCode: selectedCountry,
      totalAmount: totalPrice,
      taxAmount: taxAmount,
      exchangeRate: currentCurrency?.rate || 1
    };
    
    localStorage.setItem('billingData', JSON.stringify(finalBillingData));
    localStorage.setItem('paymentMethod', 'secure-payment');
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessingPayment(false);
      navigate('/payment-success');
    }, 2000);
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
        {/* Header */}
        <div className="text-center mb-8">
          <Badge variant="secondary" className="glass mb-6">
            <CreditCard className="h-4 w-4 mr-2" />
            Complete Your Purchase
          </Badge>
          <h1 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
            Billing Information
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-xl mx-auto">
            Complete your billing details to start your 3-day free trial
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Billing Form */}
          <Card className="glass border-white/20 shadow-xl">
            <CardHeader>
              <h3 className="text-xl font-semibold text-foreground">Billing Details</h3>
              <p className="text-sm text-muted-foreground">
                Enter your billing information for subscription management
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Currency and Country Selection */}
                <div className="grid grid-cols-2 gap-3 pb-4 border-b border-border/50">
                  <div className="space-y-2">
                    <Label className="text-sm font-medium flex items-center gap-2">
                      <Globe className="h-4 w-4" />
                      Country *
                    </Label>
                    <Select value={selectedCountry} onValueChange={handleCountryChange}>
                      <SelectTrigger className="bg-background/50 border-border/50">
                        <SelectValue placeholder="Select country" />
                      </SelectTrigger>
                      <SelectContent>
                        {countries.map((country) => (
                          <SelectItem key={country.code} value={country.code}>
                            {country.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-medium flex items-center gap-2">
                      <CreditCard className="h-4 w-4" />
                      Currency *
                    </Label>
                    <Select value={selectedCurrency} onValueChange={handleCurrencyChange}>
                      <SelectTrigger className="bg-background/50 border-border/50">
                        <SelectValue placeholder="Select currency" />
                      </SelectTrigger>
                      <SelectContent>
                        {currencies.map((currency) => (
                          <SelectItem key={currency.code} value={currency.code}>
                            {currency.symbol} {currency.code} - {currency.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Name Fields */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-sm font-medium">
                      First Name *
                    </Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input 
                        id="firstName" 
                        type="text" 
                        value={billingData.firstName} 
                        onChange={e => handleInputChange("firstName", e.target.value)} 
                        className="pl-10 bg-background/50 border-border/50 focus:bg-background focus:border-primary" 
                        required 
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-sm font-medium">
                      Last Name *
                    </Label>
                    <Input 
                      id="lastName" 
                      type="text" 
                      value={billingData.lastName} 
                      onChange={e => handleInputChange("lastName", e.target.value)} 
                      className="bg-background/50 border-border/50 focus:bg-background focus:border-primary" 
                      required 
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium">
                    Email Address *
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input 
                      id="email" 
                      type="email" 
                      value={billingData.email} 
                      onChange={e => handleInputChange("email", e.target.value)} 
                      className="pl-10 bg-background/50 border-border/50 focus:bg-background focus:border-primary" 
                      required 
                    />
                  </div>
                </div>

                {/* Company Field */}
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-sm font-medium">
                    Company
                  </Label>
                  <div className="relative">
                    <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input 
                      id="company" 
                      type="text" 
                      value={billingData.company} 
                      onChange={e => handleInputChange("company", e.target.value)} 
                      className="pl-10 bg-background/50 border-border/50 focus:bg-background focus:border-primary" 
                    />
                  </div>
                </div>

                {/* Address Field */}
                <div className="space-y-2">
                  <Label htmlFor="address" className="text-sm font-medium">
                    Address *
                  </Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input 
                      id="address" 
                      type="text" 
                      placeholder="123 Main Street"
                      value={billingData.address} 
                      onChange={e => handleInputChange("address", e.target.value)} 
                      className="pl-10 bg-background/50 border-border/50 focus:bg-background focus:border-primary" 
                      required 
                    />
                  </div>
                </div>

                {/* City and Postal Code */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-2">
                    <Label htmlFor="city" className="text-sm font-medium">
                      City *
                    </Label>
                    <Input 
                      id="city" 
                      type="text" 
                      placeholder="London"
                      value={billingData.city} 
                      onChange={e => handleInputChange("city", e.target.value)} 
                      className="bg-background/50 border-border/50 focus:bg-background focus:border-primary" 
                      required 
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="postalCode" className="text-sm font-medium">
                      Postal Code *
                    </Label>
                    <Input 
                      id="postalCode" 
                      type="text" 
                      placeholder="SW1A 1AA"
                      value={billingData.postalCode} 
                      onChange={e => handleInputChange("postalCode", e.target.value)} 
                      className="bg-background/50 border-border/50 focus:bg-background focus:border-primary" 
                      required 
                    />
                  </div>
                </div>

                {/* Phone Field */}
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm font-medium">
                    Phone Number *
                  </Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input 
                      id="phone" 
                      type="tel" 
                      placeholder="+44 20 1234 5678"
                      value={billingData.phone} 
                      onChange={e => handleInputChange("phone", e.target.value)} 
                      className="pl-10 bg-background/50 border-border/50 focus:bg-background focus:border-primary" 
                      required 
                    />
                  </div>
                </div>

                {/* Payment Processing Section */}
                <div className="space-y-4 pt-4 border-t border-border/50">
                  <div className="bg-gradient-primary/10 rounded-lg p-4 border border-primary/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium text-primary">Secure Payment Processing</span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Your payment will be processed securely using bank-level encryption. 
                      We never store your payment details on our servers.
                    </p>
                  </div>

                  <Button 
                    type="submit" 
                    variant="hero" 
                    size="lg" 
                    className="w-full group" 
                    disabled={isProcessingPayment}
                  >
                    {isProcessingPayment ? (
                      <>
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                        Processing Payment...
                      </>
                    ) : (
                      <>
                        Complete Purchase - {currentCurrency?.symbol}{totalPrice}
                        <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                  
                  <p className="text-xs text-center text-muted-foreground">
                    🔒 Secure payment processing • Your payment details are never stored
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Order Summary */}
          <Card className="glass border-primary/30 shadow-xl bg-gradient-card">
            <CardHeader>
              <h3 className="text-xl font-semibold text-foreground">Order Summary</h3>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Globe className="h-4 w-4" />
                <span>{currentCountry?.name} • {currentCurrency?.name}</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Plan Details */}
              <div className="bg-background/50 rounded-lg p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-foreground">{planData.name} Plan</h4>
                  <Badge className="bg-gradient-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{planData.description}</p>
                
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-foreground">
                    {currentCurrency?.symbol}{basePrice}
                  </span>
                  <span className="text-muted-foreground">/month</span>
                  <span className="text-sm text-muted-foreground line-through">
                    {currentCurrency?.symbol}{originalPrice}
                  </span>
                </div>
                
                {selectedCurrency !== 'GBP' && (
                  <p className="text-xs text-muted-foreground">
                    Exchange rate: 1 GBP = {currentCurrency?.rate} {selectedCurrency}
                  </p>
                )}
              </div>

              {/* Trial Information */}
              <Alert className="border-green-200 bg-green-50/80">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <AlertDescription className="text-green-800">
                  <strong>3-Day Free Trial</strong><br />
                  Full access to all features. No charges during trial period.
                </AlertDescription>
              </Alert>

              {/* Key Features */}
              <div className="space-y-3">
                <h4 className="font-medium text-foreground">What's included:</h4>
                <div className="space-y-2">
                  {planData.features?.slice(0, 6).map((feature: string, index: number) => (
                    <div key={index} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                  <div className="text-xs text-muted-foreground mt-2">
                    + {(planData.features?.length || 0) - 6} more features...
                  </div>
                </div>
              </div>

              {/* Billing Summary */}
              <div className="bg-muted/20 rounded-lg p-4 space-y-2 border-t border-border/50">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal:</span>
                  <span className="font-medium">{currentCurrency?.symbol}{basePrice}/month</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Discount (25%):</span>
                  <span className="font-medium text-green-600">
                    -{currentCurrency?.symbol}{originalPrice - basePrice}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">
                    Tax ({Math.round(currentTaxRate * 100)}%):
                  </span>
                  <span className="font-medium">{currentCurrency?.symbol}{taxAmount}</span>
                </div>
                <div className="border-t border-border/50 pt-2 mt-2">
                  <div className="flex justify-between font-semibold">
                    <span className="text-foreground">Total:</span>
                    <span className="text-foreground">
                      {currentCurrency?.symbol}{totalPrice}/month
                    </span>
                  </div>
                  <p className="text-xs text-accent mt-1">After 3-day free trial</p>
                </div>
              </div>

              {/* Currency Exchange Notice */}
              {selectedCurrency !== 'GBP' && (
                <Alert className="border-blue-200 bg-blue-50/80">
                  <Globe className="h-4 w-4 text-blue-600" />
                  <AlertDescription className="text-blue-800 text-xs">
                    <strong>Multi-Currency Notice:</strong><br />
                    Prices converted from GBP using current exchange rates. 
                    Final charge may vary slightly based on your bank's exchange rate.
                  </AlertDescription>
                </Alert>
              )}

              {/* Security Info */}
              <div className="text-center text-xs text-muted-foreground space-y-1">
                <p>🔒 Secure payment processing</p>
                <p>30-day money-back guarantee</p>
                <p>Cancel anytime, no questions asked</p>
              </div>
            </CardContent>
          </Card>
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
              <span>PCI DSS Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              <span>Secure Payment Processing</span>
            </div>
          </div>
          
          {/* Supported Currencies */}
          <div className="mt-6 p-4 bg-white/5 rounded-lg backdrop-blur-sm">
            <h4 className="text-sm font-medium text-primary-foreground mb-2">Supported Currencies</h4>
            <div className="flex flex-wrap justify-center gap-2 text-xs text-primary-foreground/70">
              {currencies.map((currency, index) => (
                <span key={currency.code}>
                  {currency.symbol} {currency.code}
                  {index < currencies.length - 1 && ' • '}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billing;
