import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Zap, Shield } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-12 md:py-16 relative overflow-hidden bg-gradient-to-b from-transparent to-background/20">
      {/* Background Elements */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-primary-glow/8 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-primary/6 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            🆓 Free Beta Access
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Join Orbit Workflow
            <span className="block text-primary">Completely Free</span>
          </h2>
          
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Get full access to Orbit Workflow while we're in beta. Save your details, manage clients, 
              and create branded templates with smart tracking — all free while we improve together.
            </p>
          
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button 
                variant="default" 
                size="lg" 
                className="group text-lg px-8 py-4 h-auto"
                onClick={() => window.open('https://app.orbitworkflow.com/signup', '_blank')}
              >
                Start Free Beta
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          
          <div className="grid sm:grid-cols-3 gap-8 text-muted-foreground">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div className="font-semibold mb-1 text-foreground">Professional Look</div>
              <div className="text-sm">Branded quotes that impress</div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <div className="font-semibold mb-1 text-foreground">Always Available</div>
              <div className="text-sm">Access anywhere, anytime</div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div className="font-semibold mb-1 text-foreground">Australian Made</div>
              <div className="text-sm">Built for Australian businesses</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;