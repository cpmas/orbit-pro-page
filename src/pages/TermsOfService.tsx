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
        Last updated: August 30, 2025
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-foreground mb-4">Acceptance of Terms</h2>
        <p className="text-muted-foreground">
          By accessing and using Orbit (“the App” and “the Site”), you accept
          and agree to be bound by these Terms of Service. If you do not agree
          to abide by these Terms, you must not use Orbit.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-foreground mb-4">User Accounts</h2>
        <p className="text-muted-foreground mb-4">
          When you create an account with Orbit, you must provide information
          that is accurate, complete, and current at all times. You are
          responsible for:
        </p>
        <ul className="list-disc pl-6 text-muted-foreground space-y-2">
          <li>Safeguarding your password and account credentials</li>
          <li>All activities that occur under your account</li>
          <li>Notifying us immediately of any unauthorized use</li>
          <li>Ensuring your information remains accurate and up-to-date</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-foreground mb-4">Data Storage</h2>
        <p className="text-muted-foreground mb-4">
          All data entered into Orbit is stored securely on{" "}
          <strong>Supabase</strong> servers. While we take reasonable measures
          to protect your information, no method of transmission or storage is
          100% secure. By using Orbit, you acknowledge and accept this risk.
        </p>
        <p className="text-muted-foreground">
          You further acknowledge that your data is subject to the{" "}
          <a
            href="https://supabase.com/terms"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Supabase Terms of Service
          </a>{" "}
          and{" "}
          <a
            href="https://supabase.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Supabase Privacy Policy
          </a>
          . Orbit does not assume liability for the availability, security, or
          performance of Supabase’s infrastructure.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-foreground mb-4">Payments and Subscriptions</h2>
        <p className="text-muted-foreground mb-4">
          Orbit is currently free to use. In the future, we may introduce paid
          subscription plans. All subscriptions and payments will be processed
          through third-party providers, including{" "}
          <strong>RevenueCat</strong>, Apple App Store, and Google Play Store.
          Orbit does not directly process or store payment details.
        </p>
        <p className="text-muted-foreground">
          By purchasing a subscription, you acknowledge and agree that you are
          subject to, and bound by, the{" "}
          <a
            href="https://www.revenuecat.com/terms"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            RevenueCat Terms of Service
          </a>
          , the{" "}
          <a
            href="https://www.revenuecat.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            RevenueCat Privacy Policy
          </a>
          , and any applicable terms of Apple or Google. Orbit disclaims
          liability for the handling, security, or processing of payments by
          these third parties.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-foreground mb-4">Service Availability</h2>
        <p className="text-muted-foreground">
          We strive to provide reliable service, but we do not guarantee that
          Orbit will be uninterrupted, error-free, or always available. We
          reserve the right to modify, suspend, or discontinue the service at
          any time without notice.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-foreground mb-4">Intellectual Property</h2>
        <p className="text-muted-foreground">
          All content, branding, and materials provided by Orbit are owned by
          Orbit or licensed to us. You may not copy, modify, distribute, or
          reverse-engineer any part of Orbit without prior written permission.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-foreground mb-4">Limitation of Liability</h2>
        <p className="text-muted-foreground">
          To the maximum extent permitted by law, Orbit shall not be liable for
          any indirect, incidental, or consequential damages resulting from the
          use or inability to use the App or Site. Our total liability for any
          claim shall not exceed the amount paid by you (if any) in the twelve
          (12) months prior to the claim.
        </p>
      </section>

      <section className="mb-8">
  <h2 className="text-2xl font-semibold text-foreground mb-4">Prohibited Uses</h2>
  <p className="text-muted-foreground mb-4">
    You agree not to use Orbit, the website, or the free invoice generator for any
    unlawful or prohibited purpose. This includes, but is not limited to:
  </p>
  <ul className="list-disc pl-6 text-muted-foreground space-y-2">
    <li>Engaging in fraudulent, deceptive, or misleading practices</li>
    <li>Creating invoices for illegal goods, services, or transactions</li>
    <li>Violating applicable laws or regulations in your jurisdiction</li>
    <li>Attempting to gain unauthorized access to Orbit systems or accounts</li>
    <li>Interfering with or disrupting the security, integrity, or performance of Orbit</li>
    <li>Using Orbit to transmit malicious code, spam, or harmful content</li>
  </ul>
  <p className="text-muted-foreground mt-4">
    We reserve the right to suspend or terminate your access to Orbit immediately
    if we reasonably suspect you are engaging in prohibited activities.
  </p>
</section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-foreground mb-4">Termination</h2>
        <p className="text-muted-foreground">
          We reserve the right to suspend or terminate your access to Orbit at
          any time, without notice, if we reasonably believe you have violated
          these Terms.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-foreground mb-4">Governing Law</h2>
        <p className="text-muted-foreground">
          These Terms are governed by the laws of Victoria, Australia. You
          irrevocably submit to the exclusive jurisdiction of the courts located
          in Victoria.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Information</h2>
        <p className="text-muted-foreground">
          If you have any questions about these Terms of Service, please contact
          us at{" "}
          <a href="mailto:[insert-email]" className="text-primary hover:underline">
            [insert-email]
          </a>{" "}
          or by mail at [insert-business-address].
        </p>
      </section>
    </div>
  </main>
  <Footer />
</div>

  );
};

export default TermsOfService;