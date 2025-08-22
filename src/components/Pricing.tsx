import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$9",
      period: "/month",
      description: "Perfect for freelancers and small businesses",
      features: [
        "Up to 50 invoices/month",
        "5 clients",
        "Basic templates",
        "Email support",
        "Payment tracking"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$29",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "Unlimited invoices",
        "Unlimited clients",
        "Custom branding",
        "Advanced analytics",
        "Priority support",
        "Automated workflows",
        "Multiple payment methods"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "/month",
      description: "For large organizations",
      features: [
        "Everything in Professional",
        "Multi-user access",
        "API integration",
        "Custom workflows",
        "Dedicated support",
        "White-label solution",
        "Advanced reporting"
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Ready to Transform
            <span className="block text-primary">Your Business?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Join thousands of Australian tradies and small businesses who have transformed 
            their invoicing and quoting process with Orbit.
          </p>
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground bg-muted/50 px-4 py-2 rounded-full">
            <Check className="w-4 h-4 text-success" />
            Download today • Start creating professional quotes immediately
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto items-center">
          {/* App Features Showcase */}
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-2xl p-6">
              <div className="flex items-center mb-4">
                <Check className="w-6 h-6 text-success mr-3" />
                <h3 className="text-xl font-semibold text-card-foreground">Professional Quotes & Invoices</h3>
              </div>
              <p className="text-muted-foreground">Create itemized quotes, convert to invoices, generate PDFs, and send via email.</p>
            </div>
            
            <div className="bg-card border border-border rounded-2xl p-6">
              <div className="flex items-center mb-4">
                <Check className="w-6 h-6 text-success mr-3" />
                <h3 className="text-xl font-semibold text-card-foreground">Complete Client Management</h3>
              </div>
              <p className="text-muted-foreground">Store ABN details, contact info, addresses, and track full client history.</p>
            </div>
            
            <div className="bg-card border border-border rounded-2xl p-6">
              <div className="flex items-center mb-4">
                <Check className="w-6 h-6 text-success mr-3" />
                <h3 className="text-xl font-semibold text-card-foreground">Business Analytics Dashboard</h3>
              </div>
              <p className="text-muted-foreground">Track revenue, outstanding amounts, win rates, and business performance.</p>
            </div>
            
            <div className="bg-card border border-border rounded-2xl p-6">
              <div className="flex items-center mb-4">
                <Check className="w-6 h-6 text-success mr-3" />
                <h3 className="text-xl font-semibold text-card-foreground">Australian GST Compliance</h3>
              </div>
              <p className="text-muted-foreground">Built-in GST calculations, deposit invoicing, and Australian business standards.</p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-gradient-card border-2 border-primary rounded-2xl p-8">
              <img 
                src="/lovable-uploads/b3c1c316-c02c-4b98-bf83-3a3485ce3376.png" 
                alt="Orbit - Simple Quotes & Invoices" 
                className="w-64 mx-auto mb-6"
              />
              
              <h3 className="text-2xl font-bold text-card-foreground mb-4">
                Ready to Get Started?
              </h3>
              
              <p className="text-muted-foreground mb-6">
                Download Orbit now and transform how you handle quotes and invoices. 
                Perfect for tradies, contractors, and small businesses across Australia.
              </p>
              
              <div className="space-y-4">
                <Button variant="hero" size="lg" className="w-full">
                  Download Orbit App
                </Button>
              </div>
              
              <div className="mt-6 text-sm text-muted-foreground">
                ⭐⭐⭐⭐⭐ Rated by thousands of Australian tradies
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