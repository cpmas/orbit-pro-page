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
    <section id="features" className="py-12 md:py-16 bg-muted/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Built for Mobile
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Everything Your Business Needs
            <span className="block text-primary">In One App</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            From client management to quote creation, invoice generation to business analytics - 
            Orbit provides all the tools small businesses need to run professionally.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-8 md:mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1 border-border/50 bg-gradient-card">
              <CardContent className="p-3 sm:p-4 lg:p-5">
                <div className="flex items-center mb-3">
                  <div className="p-2 sm:p-3 bg-primary/10 text-primary rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-foreground mb-1 sm:mb-2 leading-tight">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;