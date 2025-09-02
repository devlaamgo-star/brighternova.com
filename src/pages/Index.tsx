import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Testimonials from "@/components/sections/Testimonials";
import TrustIndicators from "@/components/sections/TrustIndicators";
import FAQ from "@/components/sections/FAQ";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Features />
        <WhyChooseUs />
        <Testimonials />
        <TrustIndicators />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
