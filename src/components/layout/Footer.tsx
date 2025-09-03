import { Shield, CreditCard, Lock, Globe, Cookie, CheckCircle2 } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Product",
      links: [
        { name: "Features", href: "/features" },
        { name: "Integrations", href: "/integrations" },
        { name: "Pricing", href: "/pricing" },
        { name: "API Documentation", href: "/api-docs" },
        { name: "Status Page", href: "/status" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Blog & Tutorials", href: "/blog" },
        { name: "Security & Compliance", href: "/security" },
        { name: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Terms of Service", href: "/terms" },
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Cookie Policy", href: "/cookies" },
        { name: "Refund & Cancellation", href: "/refunds" },
        { name: "Acceptable Use Policy", href: "/aup" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Help Centre", href: "/help" },
        { name: "Contact Support", href: "/contact" },
        { name: "Service Level Agreement", href: "/sla" },
        { name: "Data Processing Addendum", href: "/dpa" },
      ],
    },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-primary p-2 rounded-lg shadow-glow">
                <Shield className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="font-heading font-bold text-xl text-foreground">
                Pikantema
              </span>
            </div>
            <p className="text-muted-foreground text-sm mb-4 text-balance">
              Professional backup automation for developers. Secure, reliable, and simple.
            </p>
            <div className="text-sm text-muted-foreground space-y-1">
              <p>Morocco</p>
            </div>
          </div>

          {/* Footer links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-foreground mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-smooth text-sm"
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Company details & contact */}
        <div className="border-t border-border pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-foreground mb-3">Registered Address</h4>
              <p className="text-muted-foreground text-sm">
                RUE SEBTA APP 8 ET. 1<br />
                FES, Morocco<br />
                30000 SECTEUR 0016 30000
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-3">Contact Information</h4>
              <div className="text-muted-foreground text-sm space-y-1">
                <p>
                  Email: <a href="mailto:modeetransfer@gmail.com" className="text-primary hover:underline">modeetransfer@gmail.com</a>
                </p>
                <p>
                  Phone: <a href="tel:+212677965618" className="text-primary hover:underline">+212 677-965618</a>
                </p>
                <p className="text-xs mt-2">
                  Support response time: Within 1-2 business days
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-muted-foreground">
            © {currentYear} Pikantema. All rights reserved.
          </div>
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <span>Currency: MAD (DH)</span>
            <span>•</span>
            <span>Country: Morocco</span>
            <span>•</span>
            <a href="/cookies" className="hover:text-foreground transition-smooth">
              Cookie Settings
            </a>
          </div>
        </div>

        {/* Payment Methods & Security */}
        <div className="border-t border-border pt-6 mt-6">
          {/* Payment Icons */}
          <div className="flex flex-col items-center space-y-4">
            <div className="flex items-center justify-center space-x-4">
              <h4 className="text-sm font-medium text-muted-foreground">Secure Payments:</h4>
              <div className="flex items-center space-x-3">
                {/* Secure Payment Badge */}
                <div className="bg-gradient-primary text-white px-3 py-1 rounded text-xs font-bold">SECURE</div>
                {/* Card Icons */}
                <CreditCard className="h-5 w-5 text-muted-foreground" />
                <div className="text-xs text-muted-foreground">VISA • MC • AMEX</div>
              </div>
            </div>

            {/* Security Badges */}
            <div className="flex items-center justify-center space-x-6 text-xs">
              <div className="flex items-center gap-1 text-green-600">
                <Lock className="h-3 w-3" />
                <span>256-bit SSL</span>
              </div>
              <div className="flex items-center gap-1 text-green-600">
                <CheckCircle2 className="h-3 w-3" />
                <span>PCI DSS</span>
              </div>
              <div className="flex items-center gap-1 text-green-600">
                <Shield className="h-3 w-3" />
                <span>SOC 2</span>
              </div>
              <div className="flex items-center gap-1 text-blue-600">
                <Globe className="h-3 w-3" />
                <span>GDPR</span>
              </div>
              <div className="flex items-center gap-1 text-amber-600">
                <Cookie className="h-3 w-3" />
                <span>Cookie Policy</span>
              </div>
            </div>

            {/* Multi-Currency Support */}
            <div className="flex items-center justify-center space-x-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <Globe className="h-3 w-3" />
                <span>Multi-Currency:</span>
              </div>
              <span>GBP (£) • USD ($) • EUR (€) • CAD ($) • AUD ($)</span>
            </div>
          </div>

          {/* Security & compliance note */}
          <div className="mt-6 pt-4 border-t border-border/30">
            <p className="text-xs text-muted-foreground text-center max-w-4xl mx-auto">
              🔒 Bank-level security: We never store payment details. All transactions processed with industry-leading encryption. 
              PCI DSS Level 1 compliant. SOC 2 Type II certified. GDPR & UK GDPR compliant. 
              Your data is protected with military-grade encryption and stored across multiple secure data centers.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
