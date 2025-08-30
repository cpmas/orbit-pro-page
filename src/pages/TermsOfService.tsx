import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold text-foreground mb-8">Terms of Service</h1>
        
        <div className="prose prose-gray max-w-none">
          <p className="text-muted-foreground text-lg mb-8">
            Last updated: January 30, 2025
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Acceptance of Terms</h2>
            <p className="text-muted-foreground">
              By accessing and using Orbit Workflow, you accept and agree to be bound by the terms 
              and provision of this agreement. If you do not agree to abide by the above, please 
              do not use this service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Use License</h2>
            <p className="text-muted-foreground mb-4">
              Permission is granted to temporarily access Orbit Workflow for personal, 
              non-commercial transitory viewing only. This is the grant of a license, not a 
              transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to decompile or reverse engineer any software contained on the website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">User Accounts</h2>
            <p className="text-muted-foreground mb-4">
              When you create an account with us, you must provide information that is accurate, 
              complete, and current at all times. You are responsible for:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Safeguarding the password and all activities under your account</li>
              <li>Notifying us immediately of any unauthorized use of your account</li>
              <li>Ensuring your account information remains accurate and up-to-date</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Service Availability</h2>
            <p className="text-muted-foreground">
              We strive to provide reliable service, but we do not guarantee that our service will be 
              uninterrupted or error-free. We reserve the right to modify, suspend, or discontinue 
              the service at any time without notice.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Payment Terms</h2>
            <p className="text-muted-foreground mb-4">
              For paid services:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Payment is due in advance for the selected subscription period</li>
              <li>All fees are non-refundable unless otherwise stated</li>
              <li>We reserve the right to change our pricing at any time</li>
              <li>Failure to pay may result in service suspension or termination</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Limitation of Liability</h2>
            <p className="text-muted-foreground">
              In no event shall Orbit Workflow or its suppliers be liable for any damages arising 
              out of the use or inability to use the materials on our website, even if we have been 
              notified orally or in writing of the possibility of such damage.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Governing Law</h2>
            <p className="text-muted-foreground">
              These terms and conditions are governed by and construed in accordance with the laws 
              of Australia and you irrevocably submit to the exclusive jurisdiction of the courts 
              in that state or location.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Information</h2>
            <p className="text-muted-foreground">
              If you have any questions about these Terms of Service, please contact us at{" "}
              <a href="/contact" className="text-primary hover:underline">
                our contact page
              </a>
              .
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;