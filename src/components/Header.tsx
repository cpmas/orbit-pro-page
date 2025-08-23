import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full bg-white backdrop-blur-md border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img src="/lovable-uploads/fa386d72-363f-4056-bed0-16b44bfae597.png" alt="Orbit Logo" className="w-8 h-8" />
          <span className="text-xl font-bold text-foreground">Orbit</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
            Features
          </a>
          <a href="/invoice-generator" className="text-muted-foreground hover:text-foreground transition-colors">
            Free Invoice Generator
          </a>
          <a href="/pricing" className="text-muted-foreground hover:text-foreground transition-colors">
            Pricing
          </a>
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
            About
          </a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button variant="hero">
            Get Started Free
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;