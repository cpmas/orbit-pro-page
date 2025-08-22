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
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Mobile/Tablet Layout: Image first, then content */}
          <div className="lg:hidden space-y-8">
            {/* Image Section - Mobile/Tablet */}
            <div className="relative pt-8">
              <div className="relative z-10">
                <img 
                  src="/lovable-uploads/f0f3e6b3-a74b-4734-a624-0dee11cbc578.png" 
                  alt="Orbit Dashboard showing professional invoice and quote management interface with revenue metrics and quick actions for tradies" 
                  className="w-full max-w-sm mx-auto rounded-2xl shadow-elegant"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-hero/30 rounded-2xl blur-2xl transform translate-y-4 scale-95"></div>
            </div>
            
            {/* Content Section - Mobile/Tablet */}
            <div className="text-center space-y-6 px-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground leading-[1.1] tracking-tight">
                <span className="block drop-shadow-lg">Professional Invoicing</span>
                <span className="block text-primary-glow drop-shadow-lg font-extrabold">& Quoting for Tradies</span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-primary-foreground/95 max-w-2xl mx-auto leading-relaxed font-medium">
                Send a quote in under a minute — no setup, no clutter, just job → quote → send. 
                <span className="block mt-2 text-primary-foreground/85 text-sm sm:text-base md:text-lg font-normal">
                  Built for tradies, not accountants. Simple, mobile-first, and professional every time.
                </span>
              </p>
              
              <div className="pt-4">
                <Button variant="hero" size="lg" className="group px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold shadow-glow hover:shadow-elegant transition-all duration-300">
                  Start Free Now
                  <ArrowRight className="ml-2 sm:ml-3 h-4 sm:h-5 w-4 sm:w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>
              </div>
            </div>
          </div>

          {/* Desktop Layout: Side by side */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-left space-y-8">
              <h1 className="text-6xl xl:text-8xl font-bold text-primary-foreground leading-[1.1] tracking-tight">
                <span className="block drop-shadow-lg">Professional Invoicing</span>
                <span className="block text-primary-glow drop-shadow-lg font-extrabold">& Quoting for Tradies</span>
              </h1>
              
              <p className="text-xl xl:text-2xl text-primary-foreground/95 leading-relaxed font-medium">
                Send a quote in under a minute — no setup, no clutter, just job → quote → send. 
                <span className="block mt-2 text-primary-foreground/85 text-lg xl:text-xl font-normal">
                  Built for tradies, not accountants. Simple, mobile-first, and professional every time.
                </span>
              </p>
              
              <div className="pt-8">
                <Button variant="hero" size="lg" className="group px-8 py-4 text-lg font-semibold shadow-glow hover:shadow-elegant transition-all duration-300">
                  Start Free Now
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10 transform hover:scale-105 transition-all duration-700 ease-spring">
                <img 
                  src="/lovable-uploads/f0f3e6b3-a74b-4734-a624-0dee11cbc578.png" 
                  alt="Orbit Dashboard showing professional invoice and quote management interface with revenue metrics and quick actions for tradies" 
                  className="w-full max-w-[29.5rem] mx-auto rounded-3xl shadow-elegant hover:shadow-glow transition-all duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-hero/30 rounded-3xl blur-2xl transform translate-y-6 scale-95"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;