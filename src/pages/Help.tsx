import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { supabase } from "@/integrations/supabase/client";
import { HelpCircle, MessageSquare, FileText, Settings } from "lucide-react";

const Help = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const helpData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
      type: "help" as const,
    };

    try {
      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: helpData,
      });

      if (error) throw error;

      toast({
        title: "Help request sent successfully!",
        description: "Our support team will get back to you soon.",
      });

      // Reset form
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error("Error sending help request:", error);
      toast({
        title: "Error sending request",
        description: "Please try again later or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Help & Support
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Need help with Orbit? Browse our common questions below or submit a support request.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Help Request Form */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Submit a Help Request</CardTitle>
                <CardDescription>
                  Can't find what you're looking for? Send us your question and we'll help you out.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        required
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Issue Type</Label>
                    <Input
                      id="subject"
                      name="subject"
                      required
                      placeholder="e.g., Invoice generation, Account access, Billing"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Describe your issue</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      placeholder="Please provide as much detail as possible about the issue you're experiencing..."
                      className="min-h-[120px]"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full" 
                    disabled={isSubmitting}
                    variant="hero"
                  >
                    {isSubmitting ? "Sending..." : "Submit Help Request"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* FAQ and Quick Help */}
            <div className="space-y-6">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Common Questions</CardTitle>
                  <CardDescription>
                    Quick answers to frequently asked questions.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="border-l-4 border-primary bg-accent/20 p-4 rounded-r-lg">
                    <h4 className="font-semibold mb-2 flex items-center">
                      <HelpCircle className="h-4 w-4 mr-2 text-primary" />
                      How do I generate an invoice?
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Use our free <a href="/invoice-generator" className="text-primary hover:underline">Invoice Generator</a> tool. Simply fill in your business details and invoice items to create a professional invoice.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-primary bg-accent/20 p-4 rounded-r-lg">
                    <h4 className="font-semibold mb-2 flex items-center">
                      <Settings className="h-4 w-4 mr-2 text-primary" />
                      Can I customize invoice templates?
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Yes! Our premium plans offer custom invoice templates, branding options, and advanced formatting features.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-primary bg-accent/20 p-4 rounded-r-lg">
                    <h4 className="font-semibold mb-2 flex items-center">
                      <FileText className="h-4 w-4 mr-2 text-primary" />
                      What file formats are supported?
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      You can download invoices as PDF files, which are compatible with all devices and easy to share with clients.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Support Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <MessageSquare className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Response Time</p>
                      <p className="text-muted-foreground text-sm">Usually within 4-6 hours during business hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <HelpCircle className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Support Hours</p>
                      <p className="text-muted-foreground text-sm">Monday - Friday, 9:00 AM - 5:00 PM PST</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Other Resources</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm">
                    <span className="font-medium">General questions:</span> Visit our <a href="/contact" className="text-primary hover:underline">Contact page</a>
                  </p>
                  <p className="text-sm">
                    <span className="font-medium">Feature requests:</span> Use the help form above to suggest new features
                  </p>
                  <p className="text-sm">
                    <span className="font-medium">Billing issues:</span> Contact us directly at info@orbitworkflow.com
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Help;