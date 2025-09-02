import PageLayout from "@/components/shared/PageLayout";
import { Badge } from "@/components/ui/badge";
import { CreditCard } from "lucide-react";

const Refunds = () => {
  return (
    <PageLayout 
      title="Refund & Cancellation Policy"
      description="Refund and Cancellation Policy for Pawthway Backups Guardian - Fair and transparent policies for subscription cancellations and refund requests."
    >
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              <CreditCard className="h-4 w-4 mr-2" />
              Billing & Refunds
            </Badge>
            <h1 className="text-4xl font-bold mb-4">Refund & Cancellation Policy</h1>
            <p className="text-muted-foreground">Last updated: January 2025</p>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold mt-8 mb-4">1. Overview</h2>
            <p>At <strong>BRIGHTER NOVA LTD</strong>, we strive to provide excellent service and customer satisfaction. This policy outlines our approach to subscription cancellations, refunds, and billing disputes for the Pawthway Backups Guardian service.</p>
            
            <p>We believe in fair and transparent billing practices and want you to feel confident when subscribing to our service.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">2. Subscription Cancellation</h2>
            <p><strong>2.1 How to Cancel:</strong></p>
            <ul>
              <li><strong>Self-Service:</strong> Cancel anytime from your account settings dashboard</li>
              <li><strong>Email Support:</strong> Contact <a href="mailto:billing@Novabuckups.com" className="text-primary hover:underline">billing@Novabuckups.com</a></li>
              <li><strong>Live Chat:</strong> Use our in-app support for immediate assistance</li>
            </ul>

            <p><strong>2.2 Cancellation Terms:</strong></p>
            <ul>
              <li>No cancellation fees or penalties</li>
              <li>Your service remains active until the end of your current billing period</li>
              <li>You retain access to your data during the remaining subscription period</li>
              <li>Automatic renewal will be disabled upon cancellation</li>
            </ul>

            <p><strong>2.3 Data Retention After Cancellation:</strong></p>
            <ul>
              <li>Your backup data remains accessible for 30 days after cancellation</li>
              <li>Account data is retained for 90 days to facilitate easy reactivation</li>
              <li>All data is permanently deleted after the retention period</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">3. Free Trial Policy</h2>
            <p><strong>3.1 Trial Terms:</strong></p>
            <ul>
              <li>14-day free trial for new customers</li>
              <li>Full access to all features during trial period</li>
              <li>No payment required during trial</li>
              <li>Automatic conversion to paid plan unless cancelled</li>
            </ul>

            <p><strong>3.2 Trial Cancellation:</strong></p>
            <ul>
              <li>Cancel anytime during the trial period without charge</li>
              <li>If cancelled during trial, no payment will be processed</li>
              <li>Trial data is retained for 7 days after trial cancellation</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">4. Refund Eligibility</h2>
            <p><strong>4.1 Eligible Refund Scenarios:</strong></p>
            <ul>
              <li><strong>Service Outages:</strong> Extended downtime exceeding our SLA commitments</li>
              <li><strong>Technical Issues:</strong> Unresolved critical bugs affecting core functionality</li>
              <li><strong>Billing Errors:</strong> Incorrect charges due to technical or administrative errors</li>
              <li><strong>Duplicate Charges:</strong> Accidental double billing</li>
              <li><strong>Early Cancellation:</strong> Within 48 hours of initial subscription (new customers only)</li>
            </ul>

            <p><strong>4.2 Non-Eligible Scenarios:</strong></p>
            <ul>
              <li>Change of mind after the 48-hour grace period</li>
              <li>Failure to use the service</li>
              <li>User-caused data loss or configuration errors</li>
              <li>Violation of Terms of Service leading to account suspension</li>
              <li>Requests made more than 60 days after the billing date</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">5. Refund Process</h2>
            <p><strong>5.1 How to Request a Refund:</strong></p>
            <ol>
              <li>Contact our billing team at <a href="mailto:billing@Novabuckups.com" className="text-primary hover:underline">billing@Novabuckups.com</a></li>
              <li>Provide your account email and reason for the refund request</li>
              <li>Include any relevant documentation or error reports</li>
              <li>Our team will review your request within 2 business days</li>
            </ol>

            <p><strong>5.2 Refund Timeline:</strong></p>
            <ul>
              <li><strong>Review Period:</strong> 2-5 business days for request evaluation</li>
              <li><strong>Processing Time:</strong> 5-10 business days for approved refunds</li>
              <li><strong>Bank Processing:</strong> Additional 3-5 business days depending on your bank</li>
            </ul>

            <p><strong>5.3 Refund Method:</strong></p>
            <ul>
              <li>Refunds are processed to the original payment method</li>
              <li>Credit card refunds appear as credits on your statement</li>
              <li>Bank transfer refunds may take longer depending on your financial institution</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">6. Partial Refunds</h2>
            <p><strong>6.1 Pro-rated Refunds:</strong></p>
            <p>In certain circumstances, we may offer pro-rated refunds calculated from the date of service interruption or issue occurrence.</p>

            <p><strong>6.2 Service Credit:</strong></p>
            <p>For minor service issues, we may offer service credits applied to your next billing cycle instead of cash refunds.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">7. Chargeback Policy</h2>
            <p><strong>7.1 Dispute Resolution:</strong></p>
            <p>Before initiating a chargeback with your bank, please contact our billing team to resolve the issue directly. Most billing disputes can be resolved quickly without involving financial institutions.</p>

            <p><strong>7.2 Chargeback Consequences:</strong></p>
            <ul>
              <li>Chargebacks may result in immediate account suspension</li>
              <li>We may pursue collection of legitimate charges</li>
              <li>Your account may be permanently closed for fraudulent chargebacks</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">8. Annual Subscription Refunds</h2>
            <p><strong>8.1 Annual Plan Cancellation:</strong></p>
            <ul>
              <li>Annual subscriptions can be cancelled at any time</li>
              <li>Refunds for unused months may be provided on a case-by-case basis</li>
              <li>Promotional pricing may affect refund calculations</li>
            </ul>

            <p><strong>8.2 Upgrade/Downgrade Refunds:</strong></p>
            <ul>
              <li>Plan changes are pro-rated automatically</li>
              <li>Credits for downgrades are applied to your next billing cycle</li>
              <li>Immediate refunds may be processed for significant plan downgrades</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">9. Enterprise & Custom Plans</h2>
            <p>Enterprise customers with custom contracts may have different refund terms as specified in their individual agreements. Contact your account manager or <a href="mailto:enterprise@Novabuckups.com" className="text-primary hover:underline">enterprise@Novabuckups.com</a> for assistance.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">10. Force Majeure</h2>
            <p>We are not liable for refunds due to service interruptions caused by events beyond our reasonable control, including natural disasters, government actions, internet outages, or other force majeure events.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">11. Currency & Exchange Rates</h2>
            <p>Refunds are processed in the same currency as the original payment. Exchange rate fluctuations between payment and refund dates may result in slight variations in the refunded amount.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">12. Changes to This Policy</h2>
            <p>We may update this Refund & Cancellation Policy periodically. Changes will be communicated through email and will not affect pending refund requests submitted before the change date.</p>

            <div className="bg-green-50 border border-green-200 p-6 rounded-lg mt-12">
              <h3 className="font-semibold mb-2 text-green-800">Our Commitment to You</h3>
              <p className="text-sm text-green-700 mb-4">
                We're committed to your satisfaction and will work with you to resolve any billing concerns fairly and promptly.
              </p>
              <div className="space-y-2 text-sm text-green-700">
                <p><strong>Billing Support:</strong> <a href="mailto:billing@Novabuckups.com" className="text-primary hover:underline">billing@Novabuckups.com</a></p>
                <p><strong>Account Management:</strong> <a href="mailto:accounts@Novabuckups.com" className="text-primary hover:underline">accounts@Novabuckups.com</a></p>
                <p><strong>Enterprise Support:</strong> <a href="mailto:enterprise@Novabuckups.com" className="text-primary hover:underline">enterprise@Novabuckups.com</a></p>
              </div>
            </div>

            <div className="bg-muted p-6 rounded-lg mt-8">
              <h3 className="font-semibold mb-2">Need Help with Billing?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Our billing team is here to help with subscription management, refund requests, and billing questions.
              </p>
              <div className="space-y-2 text-sm">
                <p><strong>Billing Team:</strong> <a href="mailto:billing@Novabuckups.com" className="text-primary hover:underline">billing@Novabuckups.com</a></p>
                <p><strong>Phone Support:</strong> Available for Enterprise customers</p>
                <p><strong>Response Time:</strong> Within 24 hours on business days</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Refunds;
