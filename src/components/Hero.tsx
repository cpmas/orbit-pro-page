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
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary-foreground rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
              ✨ Professional Invoicing Made Simple
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              Invoice Like a
              <span className="block bg-gradient-to-r from-primary-glow to-primary-foreground bg-clip-text text-transparent">
                Professional
              </span>
            </h1>
            
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto lg:mx-0">
              Streamline your billing process with Orbit's powerful invoicing platform. 
              Create, send, and track professional invoices in minutes, not hours.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button variant="hero" size="lg" className="group">
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                <Play className="mr-2 h-4 w-4" />
                Watch Demo
              </Button>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                No setup fees
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                Cancel anytime
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                Free support
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
              <img 
                src={heroImage} 
                alt="Orbit Professional Invoicing Dashboard" 
                className="w-full max-w-2xl mx-auto rounded-2xl shadow-elegant"
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