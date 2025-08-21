import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ArrowRight, Zap, Shield, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Pricing = () => {
  const features = [
    "Professional quotes & invoices",
    "GST compliant calculations", 
    "Mobile-first design",
    "Works offline",
    "Client management system",
    "Real-time sync across devices",
    "Business analytics dashboard",
    "Professional PDF generation",
    "Australian templates",
    "Unlimited quotes & invoices"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        <section className="py-24 bg-gradient-hero relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-hero/95"></div>
          <div className="absolute top-10 left-10 w-64 h-64 bg-primary-glow/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-primary/15 rounded-full blur-3xl"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-success/20 text-success rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
                🎉 Currently Free
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                Start Building Your Business
                <span className="block text-primary-glow">Completely Free</span>
              </h1>
              
              <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                We're in early access and want Australian tradies to experience the future of quoting and invoicing. 
                No credit card required, no hidden fees.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="bg-gradient-card border-primary/20 shadow-card">
                <CardHeader className="text-center pb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-success/20 text-success rounded-2xl mx-auto mb-4">
                    <Zap className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
                    Early Access
                  </CardTitle>
                  <div className="text-5xl font-bold text-success mb-2">
                    FREE
                  </div>
                  <p className="text-muted-foreground text-lg">
                    Full access to all features while we're in development
                  </p>
                </CardHeader>
                
                <CardContent className="px-8 pb-8">
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-4">Everything Included:</h3>
                      <div className="space-y-3">
                        {features.slice(0, 5).map((feature, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <Check className="w-5 h-5 text-success flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-4">Plus Much More:</h3>
                      <div className="space-y-3">
                        {features.slice(5).map((feature, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <Check className="w-5 h-5 text-success flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <Button variant="hero" size="lg" className="group text-lg px-8 py-4 h-auto mb-4">
                      Get Started Free
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <p className="text-sm text-muted-foreground">
                      No credit card required • Start quoting in under a minute
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Why We're Free Right Now
              </h2>
              <p className="text-xl text-muted-foreground">
                We're building Orbit with Australian tradies, for Australian tradies. 
                Your feedback helps us create the perfect tool for your business.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center p-6 border-border/50 bg-gradient-card">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Early Access Benefits</h3>
                <p className="text-muted-foreground">
                  Get full access to all features while we refine and improve the platform based on real tradie feedback.
                </p>
              </Card>

              <Card className="text-center p-6 border-border/50 bg-gradient-card">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Shape the Future</h3>
                <p className="text-muted-foreground">
                  Your input directly influences new features and improvements. Help us build the tool you actually want to use.
                </p>
              </Card>

              <Card className="text-center p-6 border-border/50 bg-gradient-card">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Priority Support</h3>
                <p className="text-muted-foreground">
                  Early users get direct access to our development team and priority support as we build and improve.
                </p>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Join Australian tradies who are already quoting like pros with Orbit.
              </p>
              <Button variant="default" size="lg" className="group text-lg px-8 py-4 h-auto">
                Start Free Today
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Pricing;