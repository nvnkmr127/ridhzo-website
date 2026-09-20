import type { Metadata } from "next";
import { PolicyLayout } from "@/components/marketing/PolicyLayout";
import { Cloud, Zap, CheckCircle2, MonitorSmartphone, Mail, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Shipping & Delivery Policy — Ridhzo CRM",
  description:
    "Ridhzo provides 100% digital cloud Software-as-a-Service (SaaS). Learn about our instant electronic workspace provisioning, delivery timelines, and access methods.",
  alternates: {
    canonical: "https://ridhzo.com/shipping-policy",
  },
};

const SECTIONS = [
  { id: "digital-nature", title: "1. Digital SaaS Delivery Overview" },
  { id: "delivery-timeline", title: "2. Provisioning Timeline & Activation" },
  { id: "access-channels", title: "3. Access Modes (Mobile PWA & Web)" },
  { id: "delivery-confirmation", title: "4. Proof of Delivery & Receipts" },
  { id: "shipping-charges", title: "5. Shipping & Handling Charges" },
  { id: "troubleshooting", title: "6. Non-Delivery or Access Issues" },
];

export default function ShippingPolicyPage() {
  return (
    <PolicyLayout
      title="Shipping &amp; Delivery Policy"
      description="Ridhzo CRM is a 100% cloud-hosted Software-as-a-Service (SaaS) platform. All services, licenses, and access credentials are delivered electronically via immediate automated provisioning."
      lastUpdated="September 20, 2026"
      effectiveDate="September 20, 2026"
      version="1.1"
      sections={SECTIONS}
      activePath="/shipping-policy"
    >
      {/* 01. Digital Nature */}
      <section id="digital-nature" className="scroll-mt-24 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground flex items-center gap-2.5">
          <Cloud className="h-6 w-6 text-foreground" />
          <span>1. Digital SaaS Delivery Overview</span>
        </h2>
        <p>
          Ridhzo Technologies Pvt. Ltd. operates exclusively as a provider of cloud-hosted <strong>Software-as-a-Service
          (SaaS)</strong> and Progressive Web Application (PWA) solutions.
        </p>
        <div className="rounded-xl border border-border bg-card p-5 space-y-2">
          <div className="flex items-center gap-2 text-foreground font-semibold text-sm">
            <CheckCircle2 className="h-4 w-4 text-foreground" />
            <span>No Physical Goods Shipped</span>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            We do not manufacture, package, or distribute physical goods, boxed media, hardware tokens, or paper
            materials. Consequently, no physical freight, courier shipping, customs processing, or parcel tracking is
            involved with any transaction on Ridhzo.
          </p>
        </div>
      </section>

      {/* 02. Provisioning Timeline */}
      <section id="delivery-timeline" className="scroll-mt-24 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground flex items-center gap-2.5">
          <Zap className="h-6 w-6 text-foreground" />
          <span>2. Provisioning Timeline &amp; Instant Activation</span>
        </h2>
        <p>
          All service activations and plan upgrades are delivered electronically and instantaneously upon successful
          transaction authorization:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
          <li>
            <strong>Instant Automated Provisioning:</strong> Upon successful checkout or signup, your isolated tenant
            database partition, administrative seat licenses, and webhook capture endpoints are automatically created
            within <strong>10 to 60 seconds</strong>.
          </li>
          <li>
            <strong>Immediate Access:</strong> You are automatically redirected to your live workspace dashboard where
            you can immediately begin connecting Meta Lead Ads, configuring pipelines, and inviting team members.
          </li>
          <li>
            <strong>Seat Upgrades &amp; Add-ons:</strong> Additional sales rep seat licenses or workspace capability
            upgrades take effect instantaneously without requiring system restarts or downtime.
          </li>
        </ul>
      </section>

      {/* 03. Access Modes */}
      <section id="access-channels" className="scroll-mt-24 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground flex items-center gap-2.5">
          <MonitorSmartphone className="h-6 w-6 text-foreground" />
          <span>3. Access Modes &amp; Delivery Methods</span>
        </h2>
        <p>Your subscription grants electronic access across all supported device platforms:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
          <div className="p-4 rounded-xl border border-border bg-card space-y-2">
            <h3 className="text-sm font-bold text-foreground">Mobile Progressive Web App (PWA)</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Installable directly to iOS home screens (via Safari) and Android devices (via Chrome). Delivers vibrating
              hardware push alerts, 1-tap WhatsApp deep links, and field-grade offline outbox synchronization.
            </p>
          </div>
          <div className="p-4 rounded-xl border border-border bg-card space-y-2">
            <h3 className="text-sm font-bold text-foreground">Cloud Desktop Portal</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Accessible through any modern web browser (Google Chrome, Apple Safari, Mozilla Firefox, Microsoft Edge)
              at <code>app.ridhzo.com</code> without requiring local desktop software installations.
            </p>
          </div>
        </div>
      </section>

      {/* 04. Delivery Confirmation */}
      <section id="delivery-confirmation" className="scroll-mt-24 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground flex items-center gap-2.5">
          <Mail className="h-6 w-6 text-foreground" />
          <span>4. Proof of Delivery &amp; Digital Receipts</span>
        </h2>
        <p>Delivery of your SaaS subscription is verified and documented through:</p>
        <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
          <li>
            <strong>Digital Onboarding Email:</strong> An automated confirmation containing your workspace access URL,
            tenant ID, and quick-start guide dispatched to your registered email address.
          </li>
          <li>
            <strong>Electronic Tax Invoice:</strong> A digital GST/tax receipt detailing subscription dates, seat counts,
            transaction identifiers, and payment gateway confirmation.
          </li>
          <li>
            <strong>System Activation Timestamp:</strong> Server audit logs recording the exact timestamp of account
            creation and initial administrative sign-in.
          </li>
        </ul>
      </section>

      {/* 05. Shipping Charges */}
      <section id="shipping-charges" className="scroll-mt-24 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground flex items-center gap-2.5">
          <CheckCircle2 className="h-6 w-6 text-foreground" />
          <span>5. Shipping &amp; Handling Charges</span>
        </h2>
        <p className="text-xs sm:text-sm">
          Because Ridhzo delivers all services purely via cloud infrastructure, there are <strong>zero shipping fees,
          zero delivery surcharges, and zero physical handling costs</strong> associated with any of our subscription
          plans. The price listed on the checkout screen reflects the total software subscription fee (plus applicable
          statutory taxes).
        </p>
      </section>

      {/* 06. Troubleshooting */}
      <section id="troubleshooting" className="scroll-mt-24 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground flex items-center gap-2.5">
          <HelpCircle className="h-6 w-6 text-foreground" />
          <span>6. Non-Delivery or Access Issues</span>
        </h2>
        <p>
          If you have completed payment but have not received your workspace activation confirmation or cannot access
          your dashboard within 5 minutes:
        </p>
        <div className="rounded-xl border border-border bg-card p-5 space-y-3 text-xs sm:text-sm">
          <p className="text-foreground">Please reach out through our rapid resolution channels:</p>
          <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
            <li>
              Check your spam or promotions email folder for the activation link from <code>no-reply@ridhzo.com</code>.
            </li>
            <li>
              Email our technical operations desk at{" "}
              <a href="mailto:support@ridhzo.com" className="text-foreground font-semibold underline">
                support@ridhzo.com
              </a>{" "}
              with your transaction reference ID.
            </li>
            <li>
              Ping our WhatsApp support line directly at{" "}
              <a
                href="https://wa.me/919820144520"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground font-semibold underline"
              >
                +91 98201 44520
              </a>{" "}
              for immediate priority activation (resolved in &lt; 15 minutes during business hours).
            </li>
          </ul>
        </div>
      </section>
    </PolicyLayout>
  );
}
