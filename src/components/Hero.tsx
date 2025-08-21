import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-dashboard.jpg";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] bg-gradient-hero flex items-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-hero opacity-95"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-glow/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-20 items-center">
          <div className="text-center lg:text-left space-y-8">
           
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-bold text-primary-foreground mb-8 leading-[1.1] tracking-tight">
              <span className="block drop-shadow-lg">Professional Invoicing</span>
              <span className="block text-primary-glow drop-shadow-lg font-extrabold">& Quoting for Tradies</span>
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-primary-foreground/95 mb-10 max-w-3xl leading-relaxed font-medium">
              Send a quote in under a minute — no setup, no clutter, just job → quote → send. 
              <span className="block mt-2 text-primary-foreground/85 text-base sm:text-lg lg:text-xl font-normal">
                Built for tradies, not accountants. Simple, mobile-first, and professional every time.
              </span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mb-16">
              <Button variant="hero" size="lg" className="group px-8 py-4 text-lg font-semibold shadow-glow hover:shadow-elegant transition-all duration-300">
                Start Free Now
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8 text-primary-foreground/90 text-sm sm:text-base font-medium">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-success rounded-full shadow-sm animate-pulse"></div>
                <span className="tracking-wide">GST Compliant</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-success rounded-full shadow-sm animate-pulse"></div>
                <span className="tracking-wide">Mobile Optimized</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-success rounded-full shadow-sm animate-pulse"></div>
                <span className="tracking-wide">Australian Made</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10 transform hover:scale-105 transition-all duration-700 ease-spring">
              <img 
                src="/lovable-uploads/f0f3e6b3-a74b-4734-a624-0dee11cbc578.png" 
                alt="Orbit Dashboard showing professional invoice and quote management interface with revenue metrics and quick actions for tradies" 
                className="w-full max-w-lg mx-auto rounded-3xl shadow-elegant hover:shadow-glow transition-all duration-500"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-hero/30 rounded-3xl blur-2xl transform translate-y-6 scale-95"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;