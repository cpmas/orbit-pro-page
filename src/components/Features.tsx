import { Card, CardContent } from "@/components/ui/card";
import featuresImage from "@/assets/features-team.jpg";
import automationIcon from "@/assets/automation-icon.jpg";
import { 
  FileText, 
  Clock, 
  CreditCard, 
  BarChart3, 
  Shield, 
  Zap 
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Professional Quotes & Invoices",
      description: "Create itemized quotes with line items, convert to invoices seamlessly, and generate professional PDFs instantly."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Mobile-First Design",
      description: "Touch-friendly interface optimized for mobile devices with swipe gestures and clean navigation."
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "GST Compliance",
      description: "Built-in Australian GST calculations, deposit invoicing, and compliance with local business standards."
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Business Analytics",
      description: "Track win rates, revenue metrics, outstanding amounts, and quote performance with real-time dashboards."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Client Management",
      description: "Complete client database with ABN storage, contact details, and full quote/invoice history tracking."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Real-Time Sync",
      description: "Access your business data from anywhere with instant synchronization across all devices."
    }
  ];

  return (
    <section id="features" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            📱 Built for Mobile
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Everything Tradies Need
            <span className="block text-primary">In One App</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From client management to quote creation, invoice generation to business analytics - 
            Orbit provides all the tools Australian tradies need to run their business professionally.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1 border-border/50 bg-gradient-card">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-primary/10 text-primary rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
              Built for Australian Business Standards
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Orbit is designed specifically for Australian tradies and small businesses with 
              GST compliance, local formatting, and professional standards. No bloat, no fluff — 
              only the tools you need, nothing you don't.
            </p>
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-primary mb-1">GST</div>
                <div className="text-sm text-muted-foreground">Compliant</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-1">Mobile</div>
                <div className="text-sm text-muted-foreground">First Design</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-1">Offline</div>
                <div className="text-sm text-muted-foreground">Ready</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="/lovable-uploads/5bce660d-c4fb-4527-a3e8-57dbad5ea428.png" 
              alt="Orbit dashboard showing quotes, invoices and business metrics"
              className="w-full max-w-md mx-auto rounded-2xl shadow-card"
            />
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-glow">
              <img 
                src="/lovable-uploads/fa386d72-363f-4056-bed0-16b44bfae597.png" 
                alt="Orbit Logo"
                className="w-12 h-12"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;