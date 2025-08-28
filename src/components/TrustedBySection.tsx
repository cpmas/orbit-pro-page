const TrustedBySection = () => {
  return (
    <section className="py-12 md:py-16 bg-background/95">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
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
                  <strong className="text-foreground">Works Offline</strong> — 
                  Create quotes on-site without worrying about poor reception or data limits.
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
                  <strong className="text-foreground">Ready in Under a Minute</strong> — 
                  No setup, no clutter. Job → Quote → Send. That simple.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-muted/30 rounded-lg">
                <div className="text-2xl font-bold text-primary mb-1">GST</div>
                <div className="text-sm text-muted-foreground">Compliant</div>
              </div>
              <div className="text-center p-4 bg-muted/30 rounded-lg">
                <div className="text-2xl font-bold text-primary mb-1">Mobile</div>
                <div className="text-sm text-muted-foreground">Optimized</div>
              </div>
              <div className="text-center p-4 bg-muted/30 rounded-lg">
                <div className="text-2xl font-bold text-primary mb-1">Professional</div>
                <div className="text-sm text-muted-foreground">Templates</div>
              </div>
              <div className="text-center p-4 bg-muted/30 rounded-lg">
                <div className="text-2xl font-bold text-primary mb-1">Offline</div>
                <div className="text-sm text-muted-foreground">Ready</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;