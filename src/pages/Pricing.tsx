import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ArrowRight, Zap, Clock, Star, FileText, Users, Shield } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Pricing = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const features = [
    "Save your details & clients",
    "Use your own branding",
    "Smart quote/invoice tracking", 
    "Simple client management",
    "Professional PDF generation",
    "GST compliant calculations",
    "Mobile-first design",
    "Real-time sync across devices",
    "Business analytics dashboard",
    "Range of professional templates",
    "Unlimited quotes & invoices",
    "Unlimited clients"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-0">
        {/* Main Pricing Section */}
        <section className="py-16 bg-gradient-hero relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-hero/95"></div>
          <div className="absolute top-10 left-10 w-64 h-64 bg-primary-glow/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-primary/15 rounded-full blur-3xl"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-primary-foreground/10 text-primary-foreground rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
                🆓 Free While in Beta
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                Orbit Workflow
                <span className="block text-primary-glow">Free Access</span>
              </h1>
              
              <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Get full access to our complete workflow management platform for free while we're in beta. 
                Save your details, manage clients, and scale your business professionally.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="bg-gradient-card border-primary/20 shadow-card">
                <CardHeader className="text-center pb-6">
                  <img 
                    src="/lovable-uploads/fa386d72-363f-4056-bed0-16b44bfae597.png" 
                    alt="Orbit - Simple Quotes & Invoices" 
                    className="w-16 h-16 mx-auto"
                  />
                  
                  <div className="text-center mb-8">
                    <div className="text-7xl font-bold text-primary mb-2">FREE</div>
                    <div className="text-lg text-muted-foreground mb-4">Full access while in beta</div>
                    <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                      <Clock className="w-4 h-4 mr-2" />
                      Limited time offer
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="px-8 pb-8">
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div className="text-center">
                      <h3 className="text-xl font-semibold text-foreground mb-4">Core Features:</h3>
                      <div className="space-y-3">
                        {features.slice(0, 6).map((feature, index) => (
                          <div key={index} className="flex items-center justify-center gap-3">
                            <Check className="w-5 h-5 text-primary flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <h3 className="text-xl font-semibold text-foreground mb-4">Advanced Tools:</h3>
                      <div className="space-y-3">
                        {features.slice(6).map((feature, index) => (
                          <div key={index} className="flex items-center justify-center gap-3">
                            <Check className="w-5 h-5 text-primary flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <Button 
                      variant="hero" 
                      size="lg" 
                      className="group text-lg px-8 py-4 h-auto mb-4"
                      onClick={() => window.open('https://app.orbitworkflow.com/signup', '_blank')}
                    >
                      Get Free Access
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <p className="text-sm text-muted-foreground">
                      No credit card required • Full access while in beta
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Why Free for Now?
              </h2>
              <p className="text-xl text-muted-foreground">
                We're focused on building the simplest, fastest invoicing and quoting tool for trades and small businesses. 
                Right now, our priority is learning from real users like you! What works, what doesn't, and what features make the biggest difference in your day.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center p-6 border-border/50 bg-gradient-card">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Free While We're in Beta</h3>
                <p className="text-muted-foreground">
                  We're keeping things simple: the app is completely free while we iron out the details and add new features. 
                  This means you get full access with no catches, and in return, we get valuable feedback that helps us improve.
                </p>
              </Card>

              <Card className="text-center p-6 border-border/50 bg-gradient-card">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Help Us Improve</h3>
                <p className="text-muted-foreground">
                  By keeping the app free during this early stage, we can grow together and make sure we're building something that truly saves you time.
                </p>
              </Card>

              <Card className="text-center p-6 border-border/50 bg-gradient-card">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Full Access, No Limits</h3>
                <p className="text-muted-foreground">
                  Get complete access to all features with no restrictions. Later on, we'll introduce affordable plans, but for now enjoy it on us.
                </p>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Join Australian trades and small businesses who are simplifying their invoicing and quoting process with Orbit - completely free while we're in beta.
              </p>
              <Button 
                variant="default" 
                size="lg" 
                className="group text-lg px-8 py-4 h-auto"
                onClick={() => window.open('https://app.orbitworkflow.com/signup', '_blank')}
              >
                Get Free Access Now
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