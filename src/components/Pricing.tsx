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
    <section id="pricing" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            💰 Simple Pricing
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Choose the Perfect
            <span className="block text-primary">Plan for Your Business</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Start with our free trial and upgrade as you grow. No hidden fees, 
            no surprises - just straightforward pricing that scales with your success.
          </p>
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground bg-muted/50 px-4 py-2 rounded-full">
            <Check className="w-4 h-4 text-success" />
            14-day free trial • No credit card required
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 ${
                plan.popular 
                  ? 'ring-2 ring-primary shadow-glow bg-gradient-card scale-105' 
                  : 'border-border/50 bg-card hover:bg-gradient-card'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold text-foreground mb-2">
                  {plan.name}
                </CardTitle>
                <div className="flex items-baseline justify-center gap-1 mb-2">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <p className="text-muted-foreground">{plan.description}</p>
              </CardHeader>
              
              <CardContent className="pt-0">
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-success flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant={plan.popular ? "default" : "outline"} 
                  className="w-full"
                  size="lg"
                >
                  {plan.popular ? "Start Free Trial" : "Get Started"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Need a custom solution for your enterprise?
          </p>
          <Button variant="ghost" className="text-primary hover:text-primary">
            Contact Sales →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;