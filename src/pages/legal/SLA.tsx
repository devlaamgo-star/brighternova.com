import PageLayout from "@/components/shared/PageLayout";

const SLA = () => {
  return (
    <PageLayout 
      title="Service Level Agreement"
      description="Service Level Agreement defining uptime commitments and service credits for Novabuckups."
    >
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Service Level Agreement</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground mb-6">Last updated: December 2024</p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Uptime Commitment</h2>
            <p>We aim for <strong>99.9% monthly uptime</strong> for the Novabuckups service.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Service Credits</h2>
            <ul>
              <li>5% credit if uptime falls below 99.9%</li>
              <li>10% credit if uptime falls below 99.5%</li>
              <li>25% credit if uptime falls below 99.0%</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">Exclusions</h2>
            <p>Excludes planned maintenance and third-party outages beyond our control.</p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default SLA;