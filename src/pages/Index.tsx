import Header from "@/components/Header";
import Hero from "@/components/Hero";
import InvoiceGeneratorPromo from "@/components/InvoiceGeneratorPromo";
import Features from "@/components/Features";
import TrustedBySection from "@/components/TrustedBySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-page">
      <Header />
      <main>
        <Hero />
        <Features />
        <TrustedBySection />
        <InvoiceGeneratorPromo />
      </main>
      <Footer />
    </div>
  );
};

export default Index;