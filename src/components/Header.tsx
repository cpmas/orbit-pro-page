import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full bg-white backdrop-blur-md border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center space-x-2">
          <img src="/lovable-uploads/fa386d72-363f-4056-bed0-16b44bfae597.png" alt="Orbit Logo" className="w-8 h-8" />
          <span className="text-xl font-bold text-foreground">Orbit</span>
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          <nav className="flex items-center space-x-8">
            <a href="/invoice-generator" className="text-muted-foreground hover:text-foreground transition-colors">
              Free Invoice Generator
            </a>
            <a href="/features" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
            <a href="/pricing" className="text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </a>
            <a href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
            <a href="/help" className="text-muted-foreground hover:text-foreground transition-colors">
              Help
            </a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Button variant="outline">
              Login
            </Button>
            <Button variant="hero">
              Get Started Free
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <nav className="flex flex-col space-y-6 mt-8">
                <a href="/invoice-generator" className="text-lg text-muted-foreground hover:text-foreground transition-colors">
                  Free Invoice Generator
                </a>
                <a href="/features" className="text-lg text-muted-foreground hover:text-foreground transition-colors">
                  Features
                </a>
                <a href="/about" className="text-lg text-muted-foreground hover:text-foreground transition-colors">
                  About
                </a>
                <a href="/pricing" className="text-lg text-muted-foreground hover:text-foreground transition-colors">
                  Pricing
                </a>
                <a href="/contact" className="text-lg text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </a>
                <a href="/help" className="text-lg text-muted-foreground hover:text-foreground transition-colors">
                  Help
                </a>
                <div className="flex flex-col space-y-4 pt-6 border-t">
                  <Button variant="outline">
                    Login
                  </Button>
                  <Button variant="hero">
                    Get Started Free
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;