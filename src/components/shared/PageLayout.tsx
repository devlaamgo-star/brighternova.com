import { ReactNode } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

interface PageLayoutProps {
  children: ReactNode;
  title: string;
  description: string;
}

const PageLayout = ({ children, title, description }: PageLayoutProps) => {
  // Update document title and meta description
  if (typeof document !== 'undefined') {
    document.title = `${title} | Pikantema`;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default PageLayout;
