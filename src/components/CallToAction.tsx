import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Zap, Shield } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-hero/95"></div>
      <div className="absolute top-10 left-10 w-64 h-64 bg-primary-glow/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-primary/15 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 bg-primary-foreground/10 text-primary-foreground rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
            🚀 Ready to Get Started?
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Join thousands of tradies
            <span className="block">already using Orbit</span>
          </h2>
          
          <p className="text-xl text-primary-foreground/90 mb-12 max-w-2xl mx-auto">
            Stop spending hours on manual quotes and invoices. Get Orbit today 
            and transform your business with professional invoicing and quoting.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button variant="hero" size="lg" className="group text-lg px-8 py-4 h-auto">
              Download Orbit Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8 py-4 h-auto"
            >
              View Features
            </Button>
          </div>
          
          <div className="grid sm:grid-cols-3 gap-8 text-primary-foreground/80">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-primary-foreground/10 rounded-xl flex items-center justify-center mb-4 backdrop-blur-sm">
                <Users className="w-6 h-6" />
              </div>
              <div className="font-semibold mb-1">10,000+ Tradies</div>
              <div className="text-sm text-primary-foreground/70">Trust Orbit Daily</div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-primary-foreground/10 rounded-xl flex items-center justify-center mb-4 backdrop-blur-sm">
                <Zap className="w-6 h-6" />
              </div>
              <div className="font-semibold mb-1">99.9% Uptime</div>
              <div className="text-sm text-primary-foreground/70">Reliable Service</div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-primary-foreground/10 rounded-xl flex items-center justify-center mb-4 backdrop-blur-sm">
                <Shield className="w-6 h-6" />
              </div>
              <div className="font-semibold mb-1">Bank-Grade Security</div>
              <div className="text-sm text-primary-foreground/70">Your Data Protected</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;