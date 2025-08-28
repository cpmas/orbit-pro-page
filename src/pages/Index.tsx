import Header from "@/components/Header";
import Hero from "@/components/Hero";
import InvoiceGeneratorPromo from "@/components/InvoiceGeneratorPromo";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Features />
        <InvoiceGeneratorPromo />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;