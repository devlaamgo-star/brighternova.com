import PageLayout from "@/components/shared/PageLayout";

const DPA = () => {
  return (
    <PageLayout 
      title="Data Processing Addendum"
      description="Data Processing Addendum for GDPR compliance and customer data protection."
    >
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Data Processing Addendum</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground mb-6">Last updated: December 2024</p>
            
            <p>This Data Processing Addendum ("DPA") forms part of the Terms of Service between you and PAWPATHWAYS LTD.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Data Controller and Processor</h2>
            <p>You are the data controller, and we act as data processor for personal data processed through the Service.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Security Measures</h2>
            <p>We implement appropriate technical and organisational measures including encryption, access controls, and regular security assessments.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Sub-processors</h2>
            <p>We maintain a list of approved sub-processors used to provide the Service.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Data Transfers</h2>
            <p>International transfers are protected by appropriate safeguards including Standard Contractual Clauses.</p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default DPA;