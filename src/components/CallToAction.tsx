import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-8 bg-primary">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary-foreground mb-4">
            Start Creating Professional Invoices Today
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-6">
            Join thousands of Australian businesses using Orbit Workflow
          </p>
          <Button 
            variant="secondary" 
            size="lg" 
            className="group text-lg px-8 py-4 h-auto"
            onClick={() => window.open('https://app.orbitworkflow.com/signup', '_blank')}
          >
            Get Started Free
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;