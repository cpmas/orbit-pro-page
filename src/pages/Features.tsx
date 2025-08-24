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
      src: "/lovable-uploads/2328f370-2b55-485a-8bb9-6799f0a85bd6.png",
      alt: "Quote detail screen showing itemized quote with GST calculations"
    },
    {
      src: "/lovable-uploads/b151b4db-ea90-4003-b6b7-41f468cb2e83.png",
      alt: "Dashboard showing quotes overview with business metrics"
    },
    {
      src: "/lovable-uploads/c57920eb-45ce-435b-a5f8-d6ec64c23514.png",
      alt: "Client profile page with contact details and quote history"
    },
    {
      src: "/lovable-uploads/0706d7e7-a5b2-4844-9fd8-805553c9a9d3.png",
      alt: "Business analytics dashboard with revenue and performance metrics"
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
        <section className="pt-16 pb-8 bg-gradient-hero relative overflow-hidden">
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

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-0">
                <Button variant="hero" size="lg" className="text-lg px-8 py-4 h-auto">
                  Get Started Free
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

            {/* Mobile Layout */}
            <div className="lg:hidden">
              {/* Mobile Screenshot */}
              <div className="flex justify-center mb-12">
                <div className="relative overflow-hidden rounded-xl w-[280px] h-[480px] sm:w-[320px] sm:h-[550px] bg-gradient-card border border-border shadow-lg">
                  <div 
                    className="flex transition-transform duration-500 ease-in-out h-full"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {screenshots.map((screenshot, index) => (
                      <img 
                        key={index}
                        src={screenshot.src} 
                        alt={screenshot.alt}
                        className="flex-shrink-0 object-contain w-full h-full"
                      />
                    ))}
                  </div>
                  
                  {/* Slideshow dots */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {screenshots.map((_, index) => (
                      <button 
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                          currentSlide === index 
                            ? 'bg-primary opacity-100' 
                            : 'bg-white/60 opacity-80 hover:opacity-100'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Mobile Features Grid */}
              <div className="grid grid-cols-1 gap-6 max-w-lg mx-auto">
                {features.map((feature, index) => (
                  <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50 bg-gradient-card">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                          <feature.icon className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden lg:block">
              <div className="grid lg:grid-cols-2 gap-8 xl:gap-12 items-center max-w-6xl mx-auto">
                {/* Features Column */}
                <div className="space-y-6 w-full">
                  {features.map((feature, index) => (
                    <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50 bg-gradient-card">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                            <feature.icon className="w-6 h-6" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Screenshot Column */}
                <div className="flex justify-center items-center w-full">
                  <div className="relative overflow-hidden rounded-xl w-[340px] h-[580px] bg-gradient-card border border-border shadow-xl">
                    <div 
                      className="flex transition-transform duration-500 ease-in-out h-full"
                      style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    >
                      {screenshots.map((screenshot, index) => (
                        <img 
                          key={index}
                          src={screenshot.src} 
                          alt={screenshot.alt}
                          className="flex-shrink-0 object-contain w-full h-full"
                        />
                      ))}
                    </div>
                    
                    {/* Slideshow dots */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                      {screenshots.map((_, index) => (
                        <button 
                          key={index}
                          onClick={() => setCurrentSlide(index)}
                          className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                            currentSlide === index 
                              ? 'bg-primary opacity-100' 
                              : 'bg-white/60 opacity-80 hover:opacity-100'
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
              <div className="grid grid-cols-2 gap-3 sm:gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-gradient-card border border-border rounded-xl">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                    <span className="text-sm sm:text-base text-muted-foreground">{benefit}</span>
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
                  Get Started Free
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