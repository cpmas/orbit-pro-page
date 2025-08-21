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
      title: "Professional Templates",
      description: "Beautiful, customizable invoice templates that reflect your brand and impress clients."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Automated Workflows",
      description: "Set up recurring invoices, payment reminders, and follow-ups to save time."
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Multiple Payment Options",
      description: "Accept payments via credit card, PayPal, bank transfer, and more."
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Advanced Analytics",
      description: "Track payment status, cash flow, and business metrics with detailed reports."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Bank-Level Security",
      description: "Your data is protected with enterprise-grade encryption and security measures."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Real-Time Tracking",
      description: "Monitor invoice status, payment history, and client activity in real-time."
    }
  ];

  return (
    <section id="features" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            ⚡ Powerful Features
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Everything You Need to
            <span className="block text-primary">Invoice Successfully</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From professional templates to advanced automation, Orbit provides all the tools 
            you need to streamline your invoicing process and get paid faster.
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
              Trusted by thousands of businesses worldwide
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Join over 50,000+ freelancers, small businesses, and enterprises who have 
              streamlined their invoicing process with Orbit. Our platform handles millions 
              of invoices annually, ensuring reliable service you can count on.
            </p>
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-primary mb-1">50,000+</div>
                <div className="text-sm text-muted-foreground">Active Users</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-1">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-1">$2.5B+</div>
                <div className="text-sm text-muted-foreground">Processed</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src={featuresImage} 
              alt="Professional team managing invoices"
              className="w-full rounded-2xl shadow-card"
            />
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-glow">
              <img 
                src={automationIcon} 
                alt="Automation"
                className="w-12 h-12 rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;