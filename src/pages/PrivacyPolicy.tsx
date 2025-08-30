import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
  <Header />

  <main className="container mx-auto px-4 py-16 max-w-4xl">
    <h1 className="text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>

    <div className="prose prose-gray max-w-none">
      <p className="text-muted-foreground text-lg mb-8">
        Last updated: August 30, 2025
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          Information We Collect
        </h2>
        <p className="text-muted-foreground mb-4">
          We may collect the following types of information when you use Orbit:
        </p>
        <ul className="list-disc pl-6 text-muted-foreground space-y-2">
          <li>Account information such as name, email, and business details</li>
          <li>Invoice and workflow data you enter into the App</li>
          <li>
            Usage information such as device type, browser, operating system,
            and interactions
          </li>
          <li>
            Payment information (processed securely by third-party platforms via
            RevenueCat – Orbit does not handle or store card details)
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          How We Use Your Information
        </h2>
        <p className="text-muted-foreground mb-4">
          We use the information we collect to:
        </p>
        <ul className="list-disc pl-6 text-muted-foreground space-y-2">
          <li>Provide, maintain, and improve the App and Site</li>
          <li>Generate invoices, quotes, and workflow documents</li>
          <li>Respond to support requests and communicate updates</li>
          <li>Monitor performance and improve user experience</li>
          <li>Comply with legal obligations</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          Data Storage and Security
        </h2>
        <p className="text-muted-foreground mb-4">
          All data entered into Orbit is stored securely on{" "}
          <strong>Supabase</strong> servers. We implement appropriate security
          measures to protect your personal information against unauthorized
          access, alteration, disclosure, or destruction. However, no method of
          transmission or storage is 100% secure, and by using Orbit you
          acknowledge and accept this risk.
        </p>
        <p className="text-muted-foreground">
    By using Orbit, you also acknowledge that your data is subject to the{" "}
    <a
      href="https://supabase.com/terms"
      target="_blank"
      rel="noopener noreferrer"
      className="text-primary hover:underline"
    >
      Terms of Service
    </a>{" "}
    and{" "}
    <a
      href="https://supabase.com/privacy"
      target="_blank"
      rel="noopener noreferrer"
      className="text-primary hover:underline"
    >
      Privacy Policy
    </a>{" "}
    of Supabase. Orbit is not responsible for, the
    availability, security, or handling of data on Supabase’s infrastructure.
  </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          Information Sharing
        </h2>
        <p className="text-muted-foreground mb-4">
          We do not sell your personal information. We may share information
          only in the following circumstances:
        </p>
        <ul className="list-disc pl-6 text-muted-foreground space-y-2">
          <li>
            With trusted third-party providers such as Supabase (data hosting)
            and RevenueCat (subscription management)
          </li>
          <li>When required by law or legal processes</li>
          <li>To protect the rights, property, or safety of Orbit or its users</li>
          <li>In connection with a business transfer, merger, or acquisition</li>
        </ul>
        <p className="text-muted-foreground mt-4">
          By purchasing a subscription or processing payments through
          third-party platforms such as RevenueCat, Apple App Store, or Google
          Play Store, you acknowledge and agree that you are subject to, and
          bound by, the{" "}
          <a
            href="https://www.revenuecat.com/terms"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Terms of Service
          </a>{" "}
          and{" "}
          <a
            href="https://www.revenuecat.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Privacy Policy
          </a>{" "}
          of those providers. Orbit does not assume liability for the handling,
          security, or processing of payment information by those services.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          Cookies & Analytics
        </h2>
        <p className="text-muted-foreground">
          The Site may use cookies or similar technologies to enhance user
          experience and analyze traffic. You may disable cookies in your
          browser, but some features may not function properly.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          Data Retention
        </h2>
        <p className="text-muted-foreground">
          We retain personal data only as long as necessary to provide our
          service or as required by law. You may request deletion of your data
          at any time by contacting us.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          Your Rights
        </h2>
        <p className="text-muted-foreground mb-4">
          Depending on your location, you may have the right to:
        </p>
        <ul className="list-disc pl-6 text-muted-foreground space-y-2">
          <li>Access, correct, or update your personal information</li>
          <li>Request deletion of your data</li>
          <li>Request a copy of your data in a portable format</li>
          <li>Withdraw consent to certain data processing activities</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          Children’s Privacy
        </h2>
        <p className="text-muted-foreground">
          Orbit is not directed at individuals under 18 years of age. We do not
          knowingly collect personal information from children.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          Changes to This Policy
        </h2>
        <p className="text-muted-foreground">
          We may update this Privacy Policy from time to time. Any changes will
          be effective when posted on this page. Continued use of Orbit
          constitutes acceptance of the updated Policy.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          Contact Us
        </h2>
        <p className="text-muted-foreground">
          If you have any questions about this Privacy Policy or how your data
          is handled, please contact us {" "}
          <a href="/contact" className="text-primary hover:underline">
            here.
          </a>
        </p>
      </section>
    </div>
  </main>
  <Footer />
</div>

 

  );
};

export default PrivacyPolicy;