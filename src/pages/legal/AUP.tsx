import PageLayout from "@/components/shared/PageLayout";
import { Badge } from "@/components/ui/badge";
import { ShieldCheck } from "lucide-react";

const AUP = () => {
  return (
    <PageLayout 
      title="Acceptable Use Policy"
      description="Acceptable Use Policy for Pawthway Backups Guardian - Guidelines for responsible and lawful use of our backup automation service."
    >
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              <ShieldCheck className="h-4 w-4 mr-2" />
              Usage Guidelines
            </Badge>
            <h1 className="text-4xl font-bold mb-4">Acceptable Use Policy</h1>
            <p className="text-muted-foreground">Last updated: January 2025</p>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold mt-8 mb-4">1. Introduction</h2>
            <p>This Acceptable Use Policy ("AUP") governs your use of the Pawthway Backups Guardian service ("Service") provided by <strong>BRIGHTER NOVA LTD</strong>. This policy supplements our <a href="/terms" className="text-primary hover:underline">Terms of Service</a> and is designed to ensure the Service is used responsibly and lawfully.</p>
            
            <p>By using the Service, you agree to comply with this AUP and all applicable laws and regulations.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">2. General Principles</h2>
            <p>When using our Service, you must:</p>
            <ul>
              <li>Use the Service in a lawful and responsible manner</li>
              <li>Respect the rights and privacy of others</li>
              <li>Comply with all applicable local, national, and international laws</li>
              <li>Maintain the security and integrity of the Service</li>
              <li>Use the Service only for its intended backup and data protection purposes</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">3. Prohibited Uses</h2>
            <p><strong>3.1 Illegal Content:</strong> You may not use the Service to store, backup, or transmit:</p>
            <ul>
              <li>Content that violates any applicable laws or regulations</li>
              <li>Copyrighted material without proper authorization</li>
              <li>Child exploitation material or any content involving minors</li>
              <li>Content that promotes terrorism, violence, or illegal activities</li>
              <li>Stolen data, credit card information, or other illegally obtained content</li>
            </ul>

            <p><strong>3.2 Harmful Content:</strong> You may not store or backup:</p>
            <ul>
              <li>Malware, viruses, worms, or other malicious software</li>
              <li>Content designed to harm, disrupt, or gain unauthorized access to systems</li>
              <li>Phishing materials or fraudulent content</li>
              <li>Spam or unsolicited commercial communications</li>
            </ul>

            <p><strong>3.3 Abusive Content:</strong> You may not use the Service for:</p>
            <ul>
              <li>Harassment, bullying, or threatening behavior</li>
              <li>Content that promotes hatred or discrimination</li>
              <li>Doxxing or sharing private information without consent</li>
              <li>Impersonation of individuals or organizations</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">4. Service Abuse</h2>
            <p><strong>4.1 Technical Abuse:</strong> You may not:</p>
            <ul>
              <li>Attempt to gain unauthorized access to our systems or other users' accounts</li>
              <li>Reverse engineer, decompile, or attempt to extract source code</li>
              <li>Circumvent security measures or access controls</li>
              <li>Use automated tools to scrape or harvest data from the Service</li>
              <li>Interfere with the normal operation of the Service</li>
            </ul>

            <p><strong>4.2 Resource Abuse:</strong> You may not:</p>
            <ul>
              <li>Exceed reasonable usage limits as defined in your subscription plan</li>
              <li>Use the Service to mine cryptocurrency or perform intensive computational tasks</li>
              <li>Create multiple accounts to circumvent usage limits</li>
              <li>Share account credentials with unauthorized parties</li>
            </ul>

            <p><strong>4.3 Commercial Misuse:</strong> You may not:</p>
            <ul>
              <li>Resell or redistribute the Service without written authorization</li>
              <li>Use the Service to compete directly with our business</li>
              <li>Store data for third parties without appropriate licensing</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">5. Data Storage Guidelines</h2>
            <p><strong>5.1 Appropriate Data:</strong> The Service is designed for backing up:</p>
            <ul>
              <li>Business databases and application data</li>
              <li>Website files and configurations</li>
              <li>Development and production environments</li>
              <li>Personal documents and media files</li>
              <li>System configurations and logs</li>
            </ul>

            <p><strong>5.2 Data Quality Requirements:</strong></p>
            <ul>
              <li>Ensure you have the right to backup and store all data</li>
              <li>Do not upload corrupted or intentionally damaged files</li>
              <li>Maintain reasonable file and folder naming conventions</li>
              <li>Do not use the Service for temporary file hosting</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">6. API and Integration Usage</h2>
            <p><strong>6.1 API Guidelines:</strong></p>
            <ul>
              <li>Respect rate limits and usage quotas</li>
              <li>Implement proper error handling and retry logic</li>
              <li>Use API keys securely and do not share them publicly</li>
              <li>Follow RESTful best practices in your integrations</li>
            </ul>

            <p><strong>6.2 Integration Responsibilities:</strong></p>
            <ul>
              <li>Test integrations thoroughly in development environments</li>
              <li>Monitor integration health and performance</li>
              <li>Ensure integrations comply with third-party service terms</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">7. Security Responsibilities</h2>
            <p><strong>7.1 Account Security:</strong></p>
            <ul>
              <li>Use strong, unique passwords for your account</li>
              <li>Enable two-factor authentication when available</li>
              <li>Report security incidents or suspicious activity immediately</li>
              <li>Keep your contact information current for security notifications</li>
            </ul>

            <p><strong>7.2 Data Protection:</strong></p>
            <ul>
              <li>Implement appropriate security measures for your source systems</li>
              <li>Regularly review and update backup configurations</li>
              <li>Monitor backup health and address failures promptly</li>
              <li>Ensure compliance with applicable data protection regulations</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">8. Monitoring & Enforcement</h2>
            <p><strong>8.1 Content Monitoring:</strong></p>
            <p>We reserve the right to monitor usage patterns and investigate potential policy violations. However, we do not routinely inspect the contents of your encrypted backup data.</p>

            <p><strong>8.2 Violation Response:</strong></p>
            <p>Violations of this AUP may result in:</p>
            <ul>
              <li><strong>Warning:</strong> Notice of violation with opportunity to remedy</li>
              <li><strong>Suspension:</strong> Temporary restriction of Service access</li>
              <li><strong>Termination:</strong> Permanent account closure and data deletion</li>
              <li><strong>Legal Action:</strong> Referral to law enforcement for serious violations</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">9. Reporting Violations</h2>
            <p><strong>9.1 How to Report:</strong></p>
            <p>If you become aware of potential AUP violations, please report them to:</p>
            <ul>
              <li><strong>Email:</strong> <a href="mailto:abuse@Novabuckups.com" className="text-primary hover:underline">abuse@Novabuckups.com</a></li>
              <li><strong>Include:</strong> Account information, description of violation, and supporting evidence</li>
            </ul>

            <p><strong>9.2 Investigation Process:</strong></p>
            <ul>
              <li>We will acknowledge reports within 24 hours</li>
              <li>Investigations are conducted promptly and fairly</li>
              <li>Appropriate action will be taken based on findings</li>
              <li>Reporters will be notified of the outcome when appropriate</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">10. Compliance & Legal Requirements</h2>
            <p><strong>10.1 Data Protection:</strong></p>
            <ul>
              <li>Ensure compliance with GDPR, CCPA, and other applicable privacy laws</li>
              <li>Obtain necessary consents for data processing</li>
              <li>Implement appropriate data protection measures</li>
            </ul>

            <p><strong>10.2 Industry Regulations:</strong></p>
            <ul>
              <li>Comply with industry-specific regulations (HIPAA, PCI DSS, SOX, etc.)</li>
              <li>Maintain appropriate records and audit trails</li>
              <li>Implement required data handling procedures</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">11. Third-Party Services</h2>
            <p>When integrating with third-party services through our platform:</p>
            <ul>
              <li>Ensure you have proper authorization to access and backup third-party data</li>
              <li>Comply with third-party service terms and conditions</li>
              <li>Respect API rate limits and usage policies</li>
              <li>Maintain appropriate security credentials</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">12. Educational and Research Use</h2>
            <p>Academic and research institutions using the Service must:</p>
            <ul>
              <li>Ensure compliance with institutional policies and ethics guidelines</li>
              <li>Obtain necessary approvals for data storage and processing</li>
              <li>Respect participant privacy and consent requirements</li>
              <li>Maintain appropriate data governance standards</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">13. Changes to This Policy</h2>
            <p>We may update this Acceptable Use Policy periodically to reflect changes in our Service, legal requirements, or industry best practices. Material changes will be communicated with at least 30 days' notice.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">14. Contact & Questions</h2>
            <p>If you have questions about this Acceptable Use Policy or need clarification on acceptable use cases, please contact us:</p>

            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mt-12">
              <h3 className="font-semibold mb-2 text-blue-800">Questions About Usage?</h3>
              <p className="text-sm text-blue-700 mb-4">
                We're here to help you use our Service responsibly and effectively. Contact us with any questions about acceptable use.
              </p>
              <div className="space-y-2 text-sm text-blue-700">
                <p><strong>General Questions:</strong> <a href="mailto:support@Novabuckups.com" className="text-primary hover:underline">support@Novabuckups.com</a></p>
                <p><strong>Compliance Questions:</strong> <a href="mailto:compliance@Novabuckups.com" className="text-primary hover:underline">compliance@Novabuckups.com</a></p>
                <p><strong>Abuse Reports:</strong> <a href="mailto:abuse@Novabuckups.com" className="text-primary hover:underline">abuse@Novabuckups.com</a></p>
              </div>
            </div>

            <div className="bg-muted p-6 rounded-lg mt-8">
              <h3 className="font-semibold mb-2">Legal Contact Information</h3>
              <div className="space-y-2 text-sm">
                <p><strong>Legal Team:</strong> <a href="mailto:legal@Novabuckups.com" className="text-primary hover:underline">legal@Novabuckups.com</a></p>
                <p><strong>Compliance Officer:</strong> <a href="mailto:compliance@Novabuckups.com" className="text-primary hover:underline">compliance@Novabuckups.com</a></p>
                <p><strong>Address:</strong> BRIGHTER NOVA LTD, 2 Frederick Street, Kings Cross, London, WC1X 0ND, UK</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default AUP;
