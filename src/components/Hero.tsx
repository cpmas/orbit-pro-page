import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-dashboard.jpg";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero flex items-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-hero opacity-95"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-glow/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
           
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Professional Invoicing
              <span className="block text-primary-glow">& Quoting for Tradies</span>
            </h1>
            
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl">
              Send a quote in under a minute — no setup, no clutter, just job → quote → send. 
              Built for tradies, not accountants. Simple, mobile-first, and professional every time.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button variant="hero" size="lg" className="group">
                Download Orbit Now
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                <Play className="mr-2 h-4 w-4" />
                View Features
              </Button>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                GST Compliant
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                Mobile Optimized
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                Australian Made
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
              <img 
                src="/lovable-uploads/f0f3e6b3-a74b-4734-a624-0dee11cbc578.png" 
                alt="Orbit Dashboard showing revenue metrics and quick actions" 
                className="w-full max-w-md mx-auto rounded-2xl shadow-elegant"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-hero/20 rounded-2xl blur-xl transform translate-y-4"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;