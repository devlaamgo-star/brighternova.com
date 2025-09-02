import PageLayout from "@/components/shared/PageLayout";
import { Badge } from "@/components/ui/badge";
import { ScrollText } from "lucide-react";

const Terms = () => {
  return (
    <PageLayout 
      title="Terms of Service"
      description="Terms of Service for Pawthway Backups Guardian - Professional backup automation service provided by BRIGHTER NOVA LTD."
    >
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              <ScrollText className="h-4 w-4 mr-2" />
              Legal Document
            </Badge>
            <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
            <p className="text-muted-foreground">Last updated: January 2025</p>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold mt-8 mb-4">1. Introduction & Agreement</h2>
            <p>These Terms of Service ("Terms") constitute a legally binding agreement between you ("Customer", "you", "your") and <strong>BRIGHTER NOVA LTD</strong> ("Company", "we", "us", "our"), a UK limited company (Company No: 16626529) registered at 2 Frederick Street, Kings Cross, London, WC1X 0ND, regarding your use of the Pawthway Backups Guardian service ("Service").</p>
            
            <p>By creating an account, accessing, or using the Service, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you are entering into these Terms on behalf of an organization, you represent and warrant that you have the authority to bind that organization to these Terms.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">2. Service Description</h2>
            <p>Pawthway Backups Guardian is a cloud-based backup automation service that enables customers to:</p>
            <ul>
              <li>Schedule and automate data backups from various sources</li>
              <li>Store encrypted backups in multiple cloud storage providers</li>
              <li>Monitor backup health and receive notifications</li>
              <li>Restore data when needed</li>
              <li>Manage backup retention policies</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">3. Account Registration & Eligibility</h2>
            <p>To use the Service, you must:</p>
            <ul>
              <li>Be at least 18 years old or the age of majority in your jurisdiction</li>
              <li>Provide accurate, current, and complete registration information</li>
              <li>Maintain and promptly update your account information</li>
              <li>Maintain the security and confidentiality of your account credentials</li>
              <li>Accept responsibility for all activities under your account</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">4. Subscriptions & Billing</h2>
            <p><strong>4.1 Subscription Plans:</strong> The Service is offered on a subscription basis with various plans as described on our Pricing page. Features, storage limits, and pricing may vary by plan.</p>
            
            <p><strong>4.2 Payment Processing:</strong> We use Stripe Inc. for payment processing. By providing payment information, you authorize us to charge the applicable fees to your designated payment method.</p>
            
            <p><strong>4.3 Billing Cycles:</strong> Subscription fees are billed in advance on a recurring basis (monthly or annually). Your billing cycle starts on the date you first subscribe to a paid plan.</p>
            
            <p><strong>4.4 Taxes:</strong> Fees are exclusive of taxes, levies, or duties imposed by taxing authorities. You are responsible for payment of all such taxes except for taxes based on our net income.</p>
            
            <p><strong>4.5 Price Changes:</strong> We may change our prices by providing at least 30 days' notice. Price changes will take effect at the start of your next billing cycle.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">5. Data & Content</h2>
            <p><strong>5.1 Your Data:</strong> You retain all rights to your data. We do not claim ownership of your content, backups, or any data you store through the Service.</p>
            
            <p><strong>5.2 Data Processing:</strong> By using the Service, you grant us permission to access, process, and store your data as necessary to provide the Service, including creating backups and restoring data upon your request.</p>
            
            <p><strong>5.3 Data Security:</strong> We implement industry-standard security measures to protect your data, including encryption at rest and in transit. However, no security system is impenetrable, and you acknowledge the inherent risks in transmitting data over the internet.</p>
            
            <p><strong>5.4 Data Retention:</strong> We will retain your data according to your chosen retention policies. Upon termination, we will delete your data within 30 days unless legally required to retain it longer.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">6. Acceptable Use</h2>
            <p>You agree to use the Service in compliance with our <a href="/aup" className="text-primary hover:underline">Acceptable Use Policy</a> and all applicable laws. You may not:</p>
            <ul>
              <li>Use the Service for illegal activities or to store illegal content</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with or disrupt the Service</li>
              <li>Use the Service to spam, phish, or distribute malware</li>
              <li>Share your account credentials with unauthorized parties</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">7. Service Availability & Support</h2>
            <p><strong>7.1 Uptime:</strong> We strive to maintain 99.9% uptime as outlined in our <a href="/sla" className="text-primary hover:underline">Service Level Agreement</a>. Scheduled maintenance will be announced in advance when possible.</p>
            
            <p><strong>7.2 Support:</strong> Support is provided according to your subscription plan. Business and Enterprise customers receive priority support with faster response times.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">8. Intellectual Property</h2>
            <p>The Service, including its software, website, documentation, and trademarks, is owned by BRIGHTER NOVA LTD and protected by intellectual property laws. You are granted a limited, non-exclusive license to use the Service subject to these Terms.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">9. Privacy & Data Protection</h2>
            <p>Our collection and use of personal information is governed by our <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>, which is incorporated into these Terms by reference. We are committed to protecting your privacy and comply with applicable data protection laws including GDPR.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">10. Termination</h2>
            <p><strong>10.1 Termination by You:</strong> You may terminate your account at any time from your account settings or by contacting support.</p>
            
            <p><strong>10.2 Termination by Us:</strong> We may suspend or terminate your account if you violate these Terms, fail to pay fees, or for other legitimate business reasons with appropriate notice.</p>
            
            <p><strong>10.3 Effect of Termination:</strong> Upon termination, your access to the Service will cease, and your data will be deleted according to our data retention policies.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">11. Disclaimers & Limitations</h2>
            <p><strong>11.1 Service Warranty:</strong> The Service is provided "as is" without warranties of any kind. We disclaim all warranties, express or implied, including merchantability and fitness for a particular purpose.</p>
            
            <p><strong>11.2 Limitation of Liability:</strong> To the maximum extent permitted by law, our total liability shall not exceed the fees paid by you in the 12 months preceding the claim. We shall not be liable for indirect, incidental, special, or consequential damages.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">12. Indemnification</h2>
            <p>You agree to indemnify and hold harmless BRIGHTER NOVA LTD from claims arising from your use of the Service, violation of these Terms, or infringement of third-party rights.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">13. Dispute Resolution</h2>
            <p><strong>13.1 Governing Law:</strong> These Terms are governed by the laws of England and Wales.</p>
            
            <p><strong>13.2 Jurisdiction:</strong> Any disputes shall be resolved in the courts of England and Wales. For US customers, disputes may be resolved through binding arbitration under AAA Commercial Arbitration Rules.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">14. Changes to Terms</h2>
            <p>We may modify these Terms at any time. Material changes will be communicated with at least 30 days' notice. Continued use of the Service after changes take effect constitutes acceptance of the modified Terms.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">15. Severability & Entire Agreement</h2>
            <p>If any provision is found unenforceable, the remainder of these Terms will remain in effect. These Terms, together with our Privacy Policy and other referenced policies, constitute the entire agreement between you and BRIGHTER NOVA LTD.</p>

            <div className="bg-muted p-6 rounded-lg mt-12">
              <h3 className="font-semibold mb-2">Questions about these Terms?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                If you have questions about these Terms of Service, please contact our legal team.
              </p>
              <div className="space-y-2 text-sm">
                <p><strong>Email:</strong> <a href="mailto:legal@Novabuckups.com" className="text-primary hover:underline">legal@Novabuckups.com</a></p>
                <p><strong>Address:</strong> BRIGHTER NOVA LTD, 2 Frederick Street, Kings Cross, London, WC1X 0ND, UK</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Terms;
