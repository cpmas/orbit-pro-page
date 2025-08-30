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
      description: "Create branded quotes with itemised line items, convert to invoices seamlessly, and generate professional PDFs instantly."
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
    <section id="features" className="py-12 md:py-16 bg-white">
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
            From client management to invoice generation and business analytics, <br/> 
            Orbit provides all the tools small businesses need to run professionally
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

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center pt-2">
          {/* Image Section - Mobile/Tablet First, Desktop Second */}
          <div className="relative order-1 lg:order-2 py-8 md:py-12 lg:py-0">
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
          
          {/* Text Section - Mobile/Tablet Second, Desktop First */}
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
              Trusted by Australian businesses
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Built specifically for Australian business requirements with GST compliance, 
              local standards, and professional templates. No bloat, no fluff — only the 
              tools you need, nothing you don't.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Australian Made & Owned</strong> — 
                  Developed by Australian business owners who understand the unique challenges of running a small business locally.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Look Professional</strong> — 
                  Branded, consistent documents that impress clients.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Fair Pricing</strong> — 
                  Only pay for the tools you actually use, without the bloated extras.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Save Time</strong> — 
                  Go from job to quote to invoice in just a few taps.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-muted/30 rounded-lg shadow-card border border-border/50">
                <div className="text-2xl font-bold text-primary mb-1">GST</div>
                <div className="text-sm text-muted-foreground">Compliant</div>
              </div>
              <div className="text-center p-4 bg-muted/30 rounded-lg shadow-card border border-border/50">
                <div className="text-2xl font-bold text-primary mb-1">Mobile</div>
                <div className="text-sm text-muted-foreground">Optimised</div>
              </div>
              <div className="text-center p-4 bg-muted/30 rounded-lg shadow-card border border-border/50">
                <div className="text-2xl font-bold text-primary mb-1">Professional</div>
                <div className="text-sm text-muted-foreground">Templates</div>
              </div>
              <div className="text-center p-4 bg-muted/30 rounded-lg shadow-card border border-border/50">
                <div className="text-2xl font-bold text-primary mb-1">Grow</div>
                <div className="text-sm text-muted-foreground">Together</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;