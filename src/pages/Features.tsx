import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, FileText, Users, BarChart3, Smartphone, Zap, Shield, Download } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Features = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const screenshots = [
    {
      src: "/lovable-uploads/5bce660d-c4fb-4527-a3e8-57dbad5ea428.png",
      alt: "Orbit dashboard showing quotes, invoices and business features"
    },
    {
      src: "/lovable-uploads/b3c1c316-c02c-4b98-bf83-3a3485ce3376.png",
      alt: "Client management interface"
    },
    {
      src: "/lovable-uploads/f0f3e6b3-a74b-4734-a624-0dee11cbc578.png",
      alt: "Mobile app interface"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % screenshots.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [screenshots.length]);

  const features = [
    {
      icon: FileText,
      title: "Professional Quotes & Invoices",
      description: "Create beautiful, itemized quotes and invoices with professional templates. Convert quotes to invoices with one click."
    },
    {
      icon: Users,
      title: "Complete Client Management", 
      description: "Store client details, ABN information, addresses, and track full client history in one organized place."
    },
    {
      icon: BarChart3,
      title: "Business Analytics Dashboard",
      description: "Track revenue, outstanding amounts, win rates, and business performance with comprehensive reporting."
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Work from anywhere with our fully responsive mobile app. Create quotes and invoices on the go."
    }
  ];

  const benefits = [
    "Save your business details and client information",
    "Use your own branding on all documents", 
    "Smart quote and invoice tracking system",
    "Professional PDF generation and email sending",
    "GST compliant calculations built-in",
    "Real-time sync across all devices",
    "Range of professional templates",
    "Unlimited quotes, invoices, and clients",
    "Australian business standards compliance",
    "Secure cloud backup and storage"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-0">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-hero/95"></div>
          <div className="absolute top-10 left-10 w-64 h-64 bg-primary-glow/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-primary/15 rounded-full blur-3xl"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-primary-foreground/10 text-primary-foreground rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
                ⚡ Powerful Features for Australian Businesses
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                Everything You Need to
                <span className="block text-primary-glow">Scale Your Business</span>
              </h1>
              
              <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                From professional quotes to comprehensive client management, 
                Orbit Workflow has all the tools you need to run your business efficiently.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" className="text-lg px-8 py-4 h-auto">
                  <Download className="mr-2 h-5 w-5" />
                  Download Orbit App
                </Button>
                <Link to="/pricing">
                  <Button variant="outline" size="lg" className="text-lg px-8 py-4 h-auto bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20 hover:bg-primary-foreground/20">
                    View Pricing
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Core Features */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Core Features
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
                Discover the powerful features that make Orbit the perfect choice for Australian small businesses.
              </p>
            </div>

            {/* Features and Screenshots Layout */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Features Grid - Left on desktop, top on mobile */}
              <div className="grid grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <Card key={index} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1 border-border/50 bg-gradient-card">
                    <CardContent className="p-4">
                      <div className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-3 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                        <feature.icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-base font-semibold text-foreground mb-2 leading-tight">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Screenshot Slideshow - Right on desktop, bottom on mobile */}
              <div className="relative">
                <div className="bg-gradient-card border border-border rounded-xl p-3 shadow-card max-w-sm mx-auto">
                  <div className="relative overflow-hidden rounded-lg">
                    <div 
                      className="flex transition-transform duration-500 ease-in-out"
                      style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    >
                      {screenshots.map((screenshot, index) => (
                        <img 
                          key={index}
                          src={screenshot.src} 
                          alt={screenshot.alt}
                          className="w-full h-auto flex-shrink-0"
                        />
                      ))}
                    </div>
                    
                    {/* Slideshow dots */}
                    <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
                      {screenshots.map((_, index) => (
                        <button 
                          key={index}
                          onClick={() => setCurrentSlide(index)}
                          className={`w-2 h-2 rounded-full transition-all duration-200 ${
                            currentSlide === index 
                              ? 'bg-primary opacity-100' 
                              : 'bg-white/50 opacity-70 hover:opacity-90'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* All Features List */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Complete Feature Set
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Everything you need to manage your business professionally, all included in one simple package.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-gradient-card border border-border rounded-xl">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Join thousands of Australian businesses who have streamlined their workflow with Orbit.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" className="text-lg px-8 py-4 h-auto">
                  <Download className="mr-2 h-5 w-5" />
                  Download Orbit App
                </Button>
                <Link to="/pricing">
                  <Button variant="outline" size="lg" className="text-lg px-8 py-4 h-auto">
                    View Pricing Plans
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

export default Features;