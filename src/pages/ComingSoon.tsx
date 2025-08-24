import { Button } from "@/components/ui/button";
import { ArrowLeft, Bell, Calendar } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const ComingSoon = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-0">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-hero/95"></div>
          <div className="absolute top-10 left-10 w-64 h-64 bg-primary-glow/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-primary/15 rounded-full blur-3xl"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 bg-primary-foreground/10 text-primary-foreground rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
                🚀 Coming Soon
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                We're Building
                <span className="block text-primary-glow">Something Amazing</span>
              </h1>
              
              <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                This page is currently under development. We're working hard to bring you 
                new features and content that will make your business workflow even better.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link to="/">
                  <Button variant="hero" size="lg" className="text-lg px-8 py-4 h-auto">
                    <ArrowLeft className="mr-2 h-5 w-5" />
                    Back to Home
                  </Button>
                </Link>
                <Link to="/features">
                  <Button variant="outline" size="lg" className="text-lg px-8 py-4 h-auto bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20 hover:bg-primary-foreground/20">
                    Explore Features
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  What's Coming Next?
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Bell className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      New templates and designs to make your quotes and invoices even more professional
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      Industry insights and business tips to help you grow your Australian business
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-card border border-border rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Bell className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Stay Updated
                </h3>
                <p className="text-muted-foreground mb-6">
                  Follow our development progress and be the first to know when new features are ready.
                </p>
                <Link to="/pricing">
                  <Button variant="default" className="w-full">
                    Get Started Today
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ComingSoon;