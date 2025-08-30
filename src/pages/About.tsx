import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Target, Users, Award, Download, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Built with Care",
      description: "Every feature is thoughtfully designed with Australian small businesses in mind, ensuring simplicity without sacrificing power."
    },
    {
      icon: Target,
      title: "Focused on Results",
      description: "We focus on what matters most - helping you get paid faster and manage your business more efficiently."
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Our development is guided by real feedback from Australian contractors, consultants, and small business owners."
    },
    {
      icon: Award,
      title: "Quality First",
      description: "We believe in building software that just works, with attention to detail and reliability you can count on."
    }
  ];

  const stats = [
    { number: "2024", label: "Founded" },
    { number: "Simple", label: "Approach" },
    { number: "Fast", label: "Setup" },
    { number: "Reliable", label: "Service" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-0">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-hero/95"></div>
          <div className="absolute top-10 left-10 w-64 h-64 bg-primary-glow/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-primary/15 rounded-full blur-3xl"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-primary-foreground/10 text-primary-foreground rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
                🇦🇺 Made in Australia, for Australia
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                About Orbit
                <span className="block text-primary-glow">Simple Workflow Management</span>
              </h1>
              
              <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                We're on a mission to simplify business operations for Australian small businesses, 
                contractors, and consultants with tools that are powerful yet easy to use.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                    Our Story
                  </h2>
                  <div className="space-y-4 text-lg text-muted-foreground">
                    <p>
                      Orbit was born from a simple frustration: why are business management tools so complicated? 
                      As Australian entrepreneurs ourselves, we experienced firsthand the pain of juggling multiple 
                      expensive software subscriptions just to send a professional invoice.
                    </p>
                    <p>
                      We saw fellow business owners struggling with bloated software that cost $50-100+ per month 
                      for features they never used. Meanwhile, simple tasks like creating quotes, tracking clients, 
                      and managing invoices remained unnecessarily complex.
                    </p>
                    <p>
                      That's why we built Orbit - a clean, powerful, and affordable solution that focuses on what 
                      Australian businesses actually need. No bloat, no confusion, just the essential tools to 
                      run your business professionally.
                    </p>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="w-64 h-64  rounded-2xl flex items-center justify-center">
                    <img 
                      src="/lovable-uploads/fa386d72-363f-4056-bed0-16b44bfae597.png" 
                      alt="Orbit Logo"
                      className="w-64 h-64 object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                    <div className="text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                What Drives Us
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Our core values guide everything we do, from product development to customer support.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center p-6 border-border/50 bg-gradient-card h-full">
                  <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>


        {/* CTA Section */}
        <section className="py-16 bg-gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-hero/95"></div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-6">
                Ready to Join the Orbit Family?
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-8">
                Join thousands of Australian businesses who have chosen Orbit for their workflow management needs.
              </p>
              <a>
                <Button variant="hero" size="lg" className="text-lg px-8 py-4 h-auto bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                  Get Started For Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;