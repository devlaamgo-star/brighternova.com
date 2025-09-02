import PageLayout from "@/components/shared/PageLayout";
import { Badge } from "@/components/ui/badge";
import { Cookie } from "lucide-react";

const Cookies = () => {
  return (
    <PageLayout 
      title="Cookie Policy"
      description="Cookie Policy for Pawthway Backups Guardian - How we use cookies and similar technologies to enhance your experience and protect your data."
    >
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              <Cookie className="h-4 w-4 mr-2" />
              Cookie Policy
            </Badge>
            <h1 className="text-4xl font-bold mb-4">Cookie Policy</h1>
            <p className="text-muted-foreground">Last updated: January 2025</p>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold mt-8 mb-4">1. What Are Cookies?</h2>
            <p>Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and enabling certain functionality.</p>
            
            <p>Similar technologies include web beacons, pixels, and local storage, which serve similar purposes to cookies.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">2. How We Use Cookies</h2>
            <p>We use cookies for the following purposes:</p>
            
            <p><strong>2.1 Essential Cookies (Strictly Necessary):</strong></p>
            <ul>
              <li><strong>Authentication:</strong> To keep you logged in securely</li>
              <li><strong>Security:</strong> To protect against fraud and security threats</li>
              <li><strong>Session Management:</strong> To maintain your session state</li>
              <li><strong>Load Balancing:</strong> To distribute traffic across our servers</li>
            </ul>

            <p><strong>2.2 Functional Cookies:</strong></p>
            <ul>
              <li><strong>Preferences:</strong> To remember your settings and preferences</li>
              <li><strong>Language:</strong> To display content in your preferred language</li>
              <li><strong>Theme:</strong> To remember your dark/light mode preference</li>
              <li><strong>Dashboard Layout:</strong> To maintain your customized dashboard view</li>
            </ul>

            <p><strong>2.3 Performance & Analytics Cookies:</strong></p>
            <ul>
              <li><strong>Usage Analytics:</strong> To understand how you use our service</li>
              <li><strong>Performance Monitoring:</strong> To identify and fix performance issues</li>
              <li><strong>Error Tracking:</strong> To detect and resolve technical problems</li>
              <li><strong>Feature Usage:</strong> To improve our service based on feature adoption</li>
            </ul>

            <p><strong>2.4 Marketing & Communication Cookies:</strong></p>
            <ul>
              <li><strong>Email Tracking:</strong> To measure email campaign effectiveness</li>
              <li><strong>Conversion Tracking:</strong> To understand which marketing efforts drive signups</li>
              <li><strong>Personalization:</strong> To show relevant content and offers</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">3. Specific Cookies We Use</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-border">
                <thead>
                  <tr className="bg-muted">
                    <th className="border border-border p-3 text-left">Cookie Name</th>
                    <th className="border border-border p-3 text-left">Purpose</th>
                    <th className="border border-border p-3 text-left">Duration</th>
                    <th className="border border-border p-3 text-left">Type</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border p-3 font-mono text-sm">pawthway_session</td>
                    <td className="border border-border p-3">User authentication and session management</td>
                    <td className="border border-border p-3">Session</td>
                    <td className="border border-border p-3">Essential</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 font-mono text-sm">pawthway_preferences</td>
                    <td className="border border-border p-3">Remember user preferences and settings</td>
                    <td className="border border-border p-3">1 year</td>
                    <td className="border border-border p-3">Functional</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 font-mono text-sm">pawthway_analytics</td>
                    <td className="border border-border p-3">Anonymous usage analytics and performance monitoring</td>
                    <td className="border border-border p-3">2 years</td>
                    <td className="border border-border p-3">Analytics</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 font-mono text-sm">_stripe_sid</td>
                    <td className="border border-border p-3">Stripe payment processing (fraud prevention)</td>
                    <td className="border border-border p-3">30 minutes</td>
                    <td className="border border-border p-3">Essential</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 font-mono text-sm">pawthway_marketing</td>
                    <td className="border border-border p-3">Track marketing campaign effectiveness</td>
                    <td className="border border-border p-3">90 days</td>
                    <td className="border border-border p-3">Marketing</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">4. Third-Party Cookies</h2>
            <p>We may allow trusted third parties to place cookies on your device for the following services:</p>
            
            <p><strong>4.1 Stripe (Payment Processing):</strong></p>
            <ul>
              <li>Used for secure payment processing and fraud prevention</li>
              <li>Privacy Policy: <a href="https://stripe.com/privacy" className="text-primary hover:underline" target="_blank" rel="noopener">stripe.com/privacy</a></li>
            </ul>

            <p><strong>4.2 Customer Support Tools:</strong></p>
            <ul>
              <li>May use cookies to maintain support session context</li>
              <li>Help us provide better customer service</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">5. Managing Cookies</h2>
            <p><strong>5.1 Browser Settings:</strong> You can control cookies through your browser settings:</p>
            <ul>
              <li><strong>Chrome:</strong> Settings → Privacy and Security → Cookies and other site data</li>
              <li><strong>Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data</li>
              <li><strong>Safari:</strong> Preferences → Privacy → Manage Website Data</li>
              <li><strong>Edge:</strong> Settings → Cookies and site permissions</li>
            </ul>

            <p><strong>5.2 Cookie Preferences:</strong> You can manage your cookie preferences through our cookie consent banner that appears on your first visit. You can update these preferences at any time.</p>

            <p><strong>5.3 Impact of Disabling Cookies:</strong> Disabling certain cookies may affect Service functionality:</p>
            <ul>
              <li>Essential cookies are required for the Service to function</li>
              <li>Functional cookies enhance your experience but are not strictly necessary</li>
              <li>Analytics cookies help us improve the Service but can be disabled</li>
              <li>Marketing cookies can be disabled without affecting core functionality</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">6. Do Not Track</h2>
            <p>Our Service does not currently respond to "Do Not Track" signals. However, you can control tracking through your cookie preferences and browser settings as described above.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">7. Local Storage</h2>
            <p>In addition to cookies, we may use browser local storage to:</p>
            <ul>
              <li>Cache data for improved performance</li>
              <li>Store temporary data during backup operations</li>
              <li>Maintain application state</li>
            </ul>

            <p>Local storage data is stored on your device and can be cleared through your browser settings.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">8. Updates to This Policy</h2>
            <p>We may update this Cookie Policy to reflect changes in our practices or applicable laws. We will notify you of material changes and update the "Last updated" date at the top of this policy.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">9. Contact Us</h2>
            <p>If you have questions about our use of cookies or this Cookie Policy, please contact us:</p>
            
            <div className="bg-muted p-6 rounded-lg mt-8">
              <h3 className="font-semibold mb-2">Cookie Policy Questions</h3>
              <div className="space-y-2 text-sm">
                <p><strong>Privacy Team:</strong> <a href="mailto:privacy@Novabuckups.com" className="text-primary hover:underline">privacy@Novabuckups.com</a></p>
                <p><strong>Data Protection Officer:</strong> <a href="mailto:dpo@Novabuckups.com" className="text-primary hover:underline">dpo@Novabuckups.com</a></p>
                <p><strong>Address:</strong> BRIGHTER NOVA LTD, 2 Frederick Street, Kings Cross, London, WC1X 0ND, UK</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Cookies;
