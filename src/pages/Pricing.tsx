import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ArrowRight, Zap, Clock, Star, FileText, Users, Shield } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Pricing = () => {
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
                🔥 Founders Sale - Limited Time
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                Orbit Workflow
                <span className="block text-primary-glow">Founders Pricing</span>
              </h1>
              
              <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Get lifetime founders pricing on our complete workflow management platform. 
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
                  
                  <div className="flex items-center justify-center gap-4 mb-8">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-primary mb-0.5">$9</div>
                      <div className="text-sm text-muted-foreground mb-0.5">per month</div>
                      <div className="text-xs text-muted-foreground line-through">normally $12/mo</div>
                    </div>
                    <div className="text-muted-foreground text-xl">or</div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-primary mb-0.5">$80</div>
                      <div className="text-sm text-muted-foreground mb-0.5">per year</div>
                      <div className="text-xs text-muted-foreground line-through">normally $99/year</div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mt-2">
                      Save 26% with annual billing
                    </div>
                    <div className="text-xs text-muted-foreground mt-2">
                      All prices in AUD
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="px-8 pb-8">
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-4">Core Features:</h3>
                      <div className="space-y-3">
                        {features.slice(0, 6).map((feature, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <Check className="w-5 h-5 text-primary flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-4">Advanced Tools:</h3>
                      <div className="space-y-3">
                        {features.slice(6).map((feature, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <Check className="w-5 h-5 text-primary flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <Button variant="hero" size="lg" className="group text-lg px-8 py-4 h-auto mb-4">
                      Get Founders Pricing
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <p className="text-sm text-muted-foreground">
                      Founders pricing locked in for life
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
                Why Choose Founders Pricing?
              </h2>
              <p className="text-xl text-muted-foreground">
                Lock in special pricing and help shape the future of Orbit Workflow 
                as we build the ultimate business management platform.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center p-6 border-border/50 bg-gradient-card">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Star className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Lifetime Pricing</h3>
                <p className="text-muted-foreground">
                  Your founders pricing is locked in forever. As we add features and increase regular pricing, you keep your founders rate.
                </p>
              </Card>

              <Card className="text-center p-6 border-border/50 bg-gradient-card">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Shape Development</h3>
                <p className="text-muted-foreground">
                  Direct input on new features and improvements. Help us build exactly what Australian businesses need.
                </p>
              </Card>

              <Card className="text-center p-6 border-border/50 bg-gradient-card">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Priority Support</h3>
                <p className="text-muted-foreground">
                  Founders get priority support and direct access to our development team as we continue building.
                </p>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Why pay $30–$60/month for bloated tools you don't use?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Orbit Workflow gives you everything you need to run your business smoothly — for less than the price of 2 coffees a month.
              </p>
              <Button variant="default" size="lg" className="group text-lg px-8 py-4 h-auto">
                Get Founders Pricing
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