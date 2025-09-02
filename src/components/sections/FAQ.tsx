import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

const FAQ = () => {
  const faqs = [
    {
      question: "How quickly can I set up automated backups?",
      answer: "Most users have their first backup running within 10 minutes. Our CLI tool and guided setup make it incredibly simple - just connect your server or database, choose a schedule, and you're done. No complex scripts or configurations required."
    },
    {
      question: "Which cloud providers and databases do you support?",
      answer: "We support all major cloud providers including AWS S3, Google Cloud Storage, Azure Blob Storage, DigitalOcean Spaces, and Vultr Object Storage. For databases, we handle MySQL, PostgreSQL, MongoDB, Redis, and more. We also support SFTP and local storage options."
    },
    {
      question: "How secure are my backups?",
      answer: "Your data is encrypted both in transit and at rest using AES-256 encryption. We use a zero-knowledge architecture, meaning we cannot access your data even if we wanted to. All encryption keys are managed securely and uniquely per customer."
    },
    {
      question: "What happens if I need to restore my data?",
      answer: "Restoring is as simple as clicking a button. You can restore to any point in time within your retention period. We provide one-click restores directly to your infrastructure, or you can download backups manually. Our disaster recovery tools help you get back online quickly."
    },
    {
      question: "Can I try Novabuckups before committing to a paid plan?",
      answer: "Absolutely! We offer a 14-day free trial with full access to all features. No credit card required to start. You can test backups, try restores, and evaluate our service completely risk-free."
    },
    {
      question: "How does billing work and what's your refund policy?",
      answer: "We bill monthly or annually via Stripe. You can cancel anytime - cancellations take effect at the end of your current billing period. We offer a full refund within 14 days of your first purchase if you're not satisfied. For annual plans, we provide prorated refunds within 30 days."
    },
    {
      question: "Do you provide compliance documentation?",
      answer: "Yes, we're GDPR and UK GDPR compliant. We provide audit logs, data processing agreements (DPA), and compliance documentation needed for SOC 2, ISO 27001, and other security frameworks. Our security practices are designed for enterprise-grade compliance."
    },
    {
      question: "What kind of support do you offer?",
      answer: "We provide email support for all plans with response times within 1-2 business days. Professional and Enterprise plans get priority support. Enterprise customers also receive 24/7 phone support and a dedicated account manager."
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4">
            FAQ
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold text-balance mb-6">
            Frequently asked 
            <span className="text-primary"> questions</span>
          </h2>
          <p className="text-lg text-muted-foreground text-balance">
            Everything you need to know about Novabuckups. Can't find what you're looking for? 
            Contact our support team.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-lg bg-card px-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold text-card-foreground pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16 p-8 bg-muted/50 rounded-lg border border-border">
          <h3 className="text-xl font-semibold mb-4">Still have questions?</h3>
          <p className="text-muted-foreground mb-6">
            Our team is here to help you get the most out of Novabuckups.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="mailto:hello@brighternova.com"
              className="text-primary hover:underline font-medium"
            >
              Email us at hello@brighternova.com
            </a>
            <span className="text-muted-foreground hidden sm:inline">•</span>
            <a
              href="tel:+447418639569"
              className="text-primary hover:underline font-medium"
            >
              Call +44 7418 639569
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;