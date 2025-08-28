import { Button } from "@/components/ui/button";

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-success/10 text-success rounded-full text-sm font-medium mb-6">
            🎉 Free Beta Access
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Completely Free
            <span className="block text-primary">While We Build Together</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Get full access to Orbit's professional invoicing and workflow tools — 
            no cost, no catches, just great software while we perfect it together.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-16">
          {/* Why Free for Now Section */}
          <div className="text-center">
            <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-card-foreground mb-6">
                Why Free for Now?
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                We're focused on building the simplest, fastest invoicing and quoting tool for trades and small businesses. 
                Right now, our priority is learning from real users like you — what works, what doesn't, and what features 
                make the biggest difference in your day. By keeping the app free during this early stage, we can grow 
                together and make sure we're building something that truly saves you time.
              </p>
            </div>
          </div>

          {/* Free While We're in Beta Section */}
          <div className="text-center">
            <div className="bg-gradient-card border-2 border-primary rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-card-foreground mb-6">
                Free While We're in Beta
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
                We're keeping things simple: the app is completely free while we iron out the details and add new features. 
                This means you get full access with no catches, and in return, we get valuable feedback that helps us improve. 
                Later on, we'll introduce affordable plans, but for now — enjoy it on us.
              </p>
              
              <div className="space-y-4">
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="px-8 py-4 text-lg font-semibold"
                  asChild
                >
                  <a href="https://app.orbitworkflow.com/signup" target="_blank" rel="noopener noreferrer">
                    Get Free Access Now
                  </a>
                </Button>
                <p className="text-sm text-muted-foreground">
                  No credit card required • Full features included • Available now
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Questions about Orbit? Need support getting started?
          </p>
          <Button variant="ghost" className="text-primary hover:text-primary">
            Contact Support →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;