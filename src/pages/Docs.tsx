import PageLayout from "@/components/shared/PageLayout";
import { Badge } from "@/components/ui/badge";
import { Book } from "lucide-react";

const Docs = () => {
  return (
    <PageLayout
      title="Documentation - Coming Soon"
      description="Documentation is being prepared. Check back soon for full guides and API references."
    >
      <section className="py-32 lg:py-40 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <Badge variant="secondary" className="glass mb-6">
              <Book className="h-4 w-4 mr-2" />
              Documentation
            </Badge>

            <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
              Documentation
              <span className="block">Coming Soon</span>
            </h1>

            <p className="text-lg lg:text-xl text-primary-foreground/80 mb-8">
              We're preparing comprehensive guides, API reference, SDKs and examples.
              The documentation will be published shortly — thank you for your patience.
            </p>

            <p className="text-sm text-muted-foreground mt-6">
              Need something urgently? Contact enterprise@Novabuckups.com for priority access.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4">What to expect</h2>
            <p className="text-muted-foreground">
              Full API reference, quickstart guides, SDK examples (Node, Python, Go),
              retention policy guides, webhook integration examples, and enterprise
              configuration docs will be added in the next release window.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Docs;
