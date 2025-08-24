import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const InvoiceGeneratorPromo = () => {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-6">
            <Zap className="w-4 h-4 mr-2" />
            100% Free Tool
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Create Professional Invoices
            <span className="block text-white/90">In Minutes, Not Hours</span>
          </h2>
          
          <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto">
            Get started instantly with our free invoice generator. No signup required, 
            no personal details stored. Just professional invoices when you need them.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center p-6 rounded-lg bg-white/10 border border-white/20">
              <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2 text-white">No Signup Required</h3>
              <p className="text-sm text-white/70 text-center">
                Start creating invoices immediately without any registration
              </p>
            </div>
            
            <div className="flex flex-col items-center p-6 rounded-lg bg-white/10 border border-white/20">
              <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2 text-white">Privacy First</h3>
              <p className="text-sm text-white/70 text-center">
                Your data stays with you - we don't store any personal information
              </p>
            </div>
            
            <div className="flex flex-col items-center p-6 rounded-lg bg-white/10 border border-white/20">
              <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2 text-white">Instant Results</h3>
              <p className="text-sm text-white/70 text-center">
                Professional invoices ready to download in PDF format
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/invoice-generator">
              <Button size="lg" className="group bg-white text-primary hover:bg-white/90">
                Try Free Invoice Generator
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <p className="text-sm text-white/70">
              No email required • Always free • Instant access
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvoiceGeneratorPromo;