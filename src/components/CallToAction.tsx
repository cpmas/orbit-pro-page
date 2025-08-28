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
            🆓 Free Beta Access
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Join Orbit Workflow
            <span className="block">Completely Free</span>
          </h2>
          
            <p className="text-xl text-primary-foreground/90 mb-12 max-w-2xl mx-auto">
              Get full access to Orbit Workflow while we're in beta. Save your details, manage clients, 
              and create branded templates with smart tracking — all free while we improve together.
            </p>
          
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button 
                variant="hero" 
                size="lg" 
                className="group text-lg px-8 py-4 h-auto"
                onClick={() => window.open('https://app.orbitworkflow.com/signup', '_blank')}
              >
                Start Free Beta
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          
          <div className="grid sm:grid-cols-3 gap-8 text-primary-foreground/80">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-primary-foreground/10 rounded-xl flex items-center justify-center mb-4 backdrop-blur-sm">
                <Users className="w-6 h-6" />
              </div>
              <div className="font-semibold mb-1">Professional Look</div>
              <div className="text-sm text-primary-foreground/70">Branded quotes that impress</div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-primary-foreground/10 rounded-xl flex items-center justify-center mb-4 backdrop-blur-sm">
                <Zap className="w-6 h-6" />
              </div>
              <div className="font-semibold mb-1">Works Offline</div>
              <div className="text-sm text-primary-foreground/70">No reception, no problem</div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-primary-foreground/10 rounded-xl flex items-center justify-center mb-4 backdrop-blur-sm">
                <Shield className="w-6 h-6" />
              </div>
              <div className="font-semibold mb-1">Australian Made</div>
              <div className="text-sm text-primary-foreground/70">Built for Australian businesses</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;