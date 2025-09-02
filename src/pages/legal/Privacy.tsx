import PageLayout from "@/components/shared/PageLayout";
import { Badge } from "@/components/ui/badge";
import { Shield } from "lucide-react";

const Privacy = () => {
  return (
    <PageLayout 
      title="Privacy Policy"
      description="Privacy Policy for Pawthway Backups Guardian - How we collect, use, and protect your personal information in compliance with GDPR and other privacy laws."
    >
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              <Shield className="h-4 w-4 mr-2" />
              Privacy & Data Protection
            </Badge>
            <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-muted-foreground">Last updated: January 2025</p>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold mt-8 mb-4">1. Introduction</h2>
            <p><strong>BRIGHTER NOVA LTD</strong> ("we", "us", "our") operates the Pawthway Backups Guardian service ("Service"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Service.</p>
            
            <p>We are committed to protecting your privacy and complying with applicable data protection laws, including the EU General Data Protection Regulation (GDPR), UK GDPR, and California Consumer Privacy Act (CCPA).</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">2. Information We Collect</h2>
            <p><strong>2.1 Account Information:</strong></p>
            <ul>
              <li>Name, email address, and contact information</li>
              <li>Billing information and payment details (processed by Stripe)</li>
              <li>Account preferences and settings</li>
            </ul>

            <p><strong>2.2 Service Usage Data:</strong></p>
            <ul>
              <li>Backup configurations and schedules</li>
              <li>Service usage metrics and performance data</li>
              <li>Log files and error reports</li>
              <li>API usage and integration data</li>
            </ul>

            <p><strong>2.3 Technical Information:</strong></p>
            <ul>
              <li>IP addresses and device information</li>
              <li>Browser type and operating system</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>

            <p><strong>2.4 Your Backup Data:</strong></p>
            <p>We process and store your backup data as necessary to provide the Service. This data is encrypted and we do not access its contents except as required for service delivery or with your explicit consent.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">3. How We Use Information</h2>
            <p>We use collected information to:</p>
            <ul>
              <li><strong>Provide the Service:</strong> Execute backups, manage storage, and enable data restoration</li>
              <li><strong>Account Management:</strong> Create and maintain your account, process payments, and provide support</li>
              <li><strong>Service Improvement:</strong> Analyze usage patterns to improve functionality and performance</li>
              <li><strong>Communication:</strong> Send service notifications, security alerts, and important updates</li>
              <li><strong>Compliance:</strong> Meet legal obligations and enforce our Terms of Service</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">4. Legal Basis for Processing (GDPR)</h2>
            <p>We process personal data under the following legal bases:</p>
            <ul>
              <li><strong>Contract Performance:</strong> Processing necessary to provide the Service you've subscribed to</li>
              <li><strong>Legitimate Interests:</strong> Service improvement, security, and fraud prevention</li>
              <li><strong>Legal Compliance:</strong> Compliance with applicable laws and regulations</li>
              <li><strong>Consent:</strong> Where you've provided explicit consent for specific processing activities</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">5. Data Sharing & Disclosure</h2>
            <p><strong>5.1 Service Providers:</strong> We may share data with trusted service providers who assist in delivering the Service, including:</p>
            <ul>
              <li>Cloud storage providers (AWS, Google Cloud, Microsoft Azure)</li>
              <li>Payment processors (Stripe)</li>
              <li>Support and communication tools</li>
            </ul>

            <p><strong>5.2 Legal Requirements:</strong> We may disclose information when required by law, court order, or to protect our rights and safety.</p>
            
            <p><strong>5.3 Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred to the acquiring entity.</p>

            <p><strong>5.4 No Sale of Personal Data:</strong> We do not sell, rent, or lease your personal information to third parties for marketing purposes.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">6. Data Security</h2>
            <p>We implement comprehensive security measures including:</p>
            <ul>
              <li><strong>Encryption:</strong> AES-256 encryption for data at rest and TLS 1.3 for data in transit</li>
              <li><strong>Access Controls:</strong> Role-based access controls and multi-factor authentication</li>
              <li><strong>Monitoring:</strong> 24/7 security monitoring and incident response procedures</li>
              <li><strong>Regular Audits:</strong> Security assessments and penetration testing</li>
              <li><strong>Compliance:</strong> SOC 2 Type II and ISO 27001 compliance</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">7. Data Retention</h2>
            <p>We retain personal data only as long as necessary for the purposes outlined in this policy:</p>
            <ul>
              <li><strong>Account Data:</strong> Retained while your account is active and for 90 days after closure</li>
              <li><strong>Backup Data:</strong> Retained according to your configured retention policies</li>
              <li><strong>Billing Data:</strong> Retained for 7 years as required by UK tax law</li>
              <li><strong>Support Data:</strong> Retained for 3 years for quality assurance</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">8. Your Rights</h2>
            <p>Under GDPR and other privacy laws, you have the right to:</p>
            <ul>
              <li><strong>Access:</strong> Request a copy of your personal data</li>
              <li><strong>Rectification:</strong> Correct inaccurate or incomplete data</li>
              <li><strong>Erasure:</strong> Request deletion of your personal data</li>
              <li><strong>Portability:</strong> Export your data in a machine-readable format</li>
              <li><strong>Restriction:</strong> Limit how we process your data</li>
              <li><strong>Objection:</strong> Object to processing based on legitimate interests</li>
              <li><strong>Withdraw Consent:</strong> Withdraw consent for consent-based processing</li>
            </ul>

            <p>To exercise these rights, contact us at <a href="mailto:privacy@Novabuckups.com" className="text-primary hover:underline">privacy@Novabuckups.com</a>.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">9. International Transfers</h2>
            <p>Your data may be processed in countries outside your home country, including the UK, EU, and US. We ensure adequate protection through:</p>
            <ul>
              <li>EU Standard Contractual Clauses</li>
              <li>Data Processing Agreements with sub-processors</li>
              <li>Adherence to recognized certification schemes</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">10. Children's Privacy</h2>
            <p>Our Service is not intended for children under 16. We do not knowingly collect personal information from children under 16. If we become aware of such collection, we will delete the information promptly.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">11. Cookies & Tracking</h2>
            <p>We use cookies and similar technologies to enhance your experience. For detailed information about our cookie usage, please see our <a href="/cookies" className="text-primary hover:underline">Cookie Policy</a>.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">12. Data Protection Officer</h2>
            <p>For privacy-related inquiries or to exercise your rights, contact our Data Protection Officer:</p>
            <p><strong>Email:</strong> <a href="mailto:dpo@Novabuckups.com" className="text-primary hover:underline">dpo@Novabuckups.com</a><br/>
            <strong>Address:</strong> BRIGHTER NOVA LTD, 2 Frederick Street, Kings Cross, London, WC1X 0ND, UK</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">13. Complaints</h2>
            <p>If you believe we have not handled your personal data in accordance with this policy, you have the right to lodge a complaint with the Information Commissioner's Office (ICO) in the UK or your local data protection authority.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">14. Changes to This Policy</h2>
            <p>We may update this Privacy Policy periodically. Material changes will be communicated through email or service notifications at least 30 days before taking effect.</p>

            <div className="bg-muted p-6 rounded-lg mt-12">
              <h3 className="font-semibold mb-2">Privacy Questions?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                We're committed to transparency and protecting your privacy. Contact our privacy team with any questions.
              </p>
              <div className="space-y-2 text-sm">
                <p><strong>Privacy Team:</strong> <a href="mailto:privacy@Novabuckups.com" className="text-primary hover:underline">privacy@Novabuckups.com</a></p>
                <p><strong>DPO:</strong> <a href="mailto:dpo@Novabuckups.com" className="text-primary hover:underline">dpo@Novabuckups.com</a></p>
                <p><strong>General Inquiries:</strong> <a href="mailto:legal@Novabuckups.com" className="text-primary hover:underline">legal@Novabuckups.com</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Privacy;
