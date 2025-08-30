import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-dashboard.jpg";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] bg-background flex items-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-background"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Mobile/Tablet Layout: Compact to fit screen */}
          <div className="lg:hidden pt-8 sm:pt-12 pb-8 space-y-6 sm:space-y-8 min-h-[calc(100vh-8rem)] flex flex-col justify-center">
            {/* Image Section - Mobile/Tablet */}
            <div className="relative flex-shrink-0">
              <div className="relative z-10">
                <img 
                  src="/lovable-uploads/f0f3e6b3-a74b-4734-a624-0dee11cbc578.png" 
                  alt="Orbit Dashboard showing professional invoice and quote management interface with revenue metrics and quick actions"
                  className="w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto rounded-xl sm:rounded-2xl shadow-sm md:shadow-elegant"
                />
              </div>
              <div className="absolute inset-0 bg-primary/20 rounded-xl sm:rounded-2xl blur-2xl transform translate-y-4 scale-95 md:scale-[0.7]"></div>
            </div>
            
            {/* Content Section - Mobile/Tablet */}
            <div className="text-center space-y-4 sm:space-y-6 px-2">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground leading-[1.1] tracking-tight">
                <span className="block">Professional Invoicing</span>
                <span className="block text-primary font-extrabold">& Workflow Management</span>
              </h1>
              
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed font-medium">
                 Create quotes and invoices in seconds
                <span className="block mt-1 sm:mt-2 text-primary text-xs sm:text-sm md:text-base font-semibold">
                 Simple, mobile-first, and professional every time.
                </span>
              </p>
              
              <div className="pt-4">
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="group px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold shadow-glow hover:shadow-elegant transition-all duration-300"
                  onClick={() => window.open('https://app.orbitworkflow.com/signup', '_blank')}
                >
                  Start Free Now
                  <ArrowRight className="ml-2 sm:ml-3 h-4 sm:h-5 w-4 sm:w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>
              </div>
            </div>
          </div>

          {/* Desktop Layout: Side by side */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-left space-y-8">
              <h1 className="text-6xl xl:text-8xl font-bold text-foreground leading-[1.1] tracking-tight">
                <span className="block">Professional Invoicing</span>
                <span className="block text-primary font-extrabold">& Workflow Management</span>
              </h1>
              
              <p className="text-xl xl:text-2xl text-muted-foreground leading-relaxed font-medium">
                Create quotes and invoices in seconds 
                <span className="block mt-2 text-primary text-lg xl:text-xl font-semibold">
                  Simple, mobile-first, and professional every time
                </span>
              </p>
              
              <div className="pt-8">
                <a href="https://app.orbitworkflow.com/signup" >
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="group px-8 py-4 text-lg font-semibold shadow-glow hover:shadow-elegant transition-all duration-300"
                >
                  Start Free Now
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>
                </a>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10 transform hover:scale-105 transition-all duration-700 ease-spring">
                <img 
                  src="/lovable-uploads/f0f3e6b3-a74b-4734-a624-0dee11cbc578.png" 
                  alt="Orbit Dashboard showing professional invoice and quote management interface with revenue metrics and quick actions" 
                  className="w-full max-w-[29.5rem] mx-auto rounded-3xl shadow-sm lg:shadow-elegant hover:shadow-glow transition-all duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-2xl transform translate-y-6 scale-95"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;