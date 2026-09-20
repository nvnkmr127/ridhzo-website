import type { Metadata } from "next";
import { PolicyLayout } from "@/components/marketing/PolicyLayout";
import { ShieldCheck, Lock, Database, UserCheck, Bell, Server, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy — Ridhzo CRM",
  description:
    "Learn how Ridhzo protects your data, handles lead ingestion from Meta and Google Ads, enforces strict tenant isolation, and complies with DPDP and GDPR standards.",
  alternates: {
    canonical: "https://ridhzo.com/privacy",
  },
};

const SECTIONS = [
  { id: "overview", title: "Overview & Scope" },
  { id: "roles", title: "Data Controller vs. Data Processor" },
  { id: "information-collected", title: "Information We Collect" },
  { id: "integrations", title: "Meta, Google & WhatsApp Integrations" },
  { id: "how-we-use", title: "How We Use Your Information" },
  { id: "tenant-isolation", title: "Data Isolation & Security" },
  { id: "sharing", title: "Data Sharing & Third-Party Processors" },
  { id: "retention-deletion", title: "Data Retention & Deletion" },
  { id: "your-rights", title: "Your Rights & Choices (DPDP / GDPR)" },
  { id: "grievance", title: "Grievance Officer & Inquiries" },
];

export default function PrivacyPolicyPage() {
  return (
    <PolicyLayout
      title="Privacy Policy"
      description="At Ridhzo, we believe privacy is foundational to building a high-velocity sales CRM. This policy transparently outlines how we collect, process, isolate, and safeguard your data."
      lastUpdated="September 20, 2026"
      effectiveDate="September 20, 2026"
      version="2.1"
      sections={SECTIONS}
      activePath="/privacy"
    >
      {/* 01. Overview & Scope */}
      <section id="overview" className="scroll-mt-24 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground flex items-center gap-2.5">
          <ShieldCheck className="h-6 w-6 text-foreground" />
          <span>1. Overview &amp; Scope</span>
        </h2>
        <p>
          This Privacy Policy governs the access to and usage of the <strong>Ridhzo CRM platform</strong>,
          including our marketing website (
          <a href="https://ridhzo.com" className="text-foreground underline">
            ridhzo.com
          </a>
          ), the Ridhzo Mobile Progressive Web Application (PWA), cloud workspace instances, webhooks, and REST
          APIs (collectively referred to as the &quot;Service&quot; or &quot;Platform&quot;).
        </p>
        <p>
          Ridhzo (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) provides high-velocity mobile lead management,
          automated lead ingestion, pipeline tracking, and instant WhatsApp follow-up tooling for sales professionals,
          real estate brokers, marketing agencies, financial advisors, and independent business owners.
        </p>
        <div className="rounded-xl border border-border bg-card p-4 sm:p-5">
          <p className="text-xs sm:text-sm font-medium text-foreground">
            Core Commitment: We never sell, rent, monetize, or cross-train machine learning models on your lead data.
            Your leads belong exclusively to your tenant workspace.
          </p>
        </div>
      </section>

      {/* 02. Data Controller vs. Data Processor */}
      <section id="roles" className="scroll-mt-24 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground flex items-center gap-2.5">
          <UserCheck className="h-6 w-6 text-foreground" />
          <span>2. Data Controller vs. Data Processor</span>
        </h2>
        <p>Under international data protection frameworks, our role depends on the category of data being processed:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div className="p-4 rounded-lg border border-border bg-secondary/30 space-y-2">
            <h3 className="text-xs sm:text-sm font-bold text-foreground uppercase tracking-wider">
              Ridhzo as Data Controller
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              We act as the Data Controller for your workspace administrative data: subscriber account registration,
              team member email addresses, billing invoices, and website usage telemetry.
            </p>
          </div>
          <div className="p-4 rounded-lg border border-border bg-secondary/30 space-y-2">
            <h3 className="text-xs sm:text-sm font-bold text-foreground uppercase tracking-wider">
              Ridhzo as Data Processor
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              For the end-customer leads you capture (prospect names, phone numbers, notes, ad attributes),{" "}
              <strong>you (the subscriber) are the Data Controller</strong>, and Ridhzo acts strictly as a Data
              Processor under your operational instructions.
            </p>
          </div>
        </div>
      </section>

      {/* 03. Information We Collect */}
      <section id="information-collected" className="scroll-mt-24 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground flex items-center gap-2.5">
          <Database className="h-6 w-6 text-foreground" />
          <span>3. Information We Collect</span>
        </h2>
        <p>We collect information in three distinct categories:</p>

        <h3 className="text-base font-semibold text-foreground pt-2">A. Workspace Account &amp; Billing Data</h3>
        <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
          <li>Name, professional email address, and mobile phone number for authentication.</li>
          <li>Workspace business name, industry vertical, and team seat allocations.</li>
          <li>
            Payment transaction tokens, billing address, and tax identification (GSTIN / VAT numbers). We do not store
            full credit card numbers; transactions are handled by PCI-DSS Level 1 certified gateways.
          </li>
        </ul>

        <h3 className="text-base font-semibold text-foreground pt-2">B. Ingested Lead Data</h3>
        <p className="text-xs sm:text-sm">
          Data captured automatically from your connected lead acquisition sources or uploaded manually:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
          <li>Full name, phone number (standardized into E.164 format), and email address.</li>
          <li>Ad campaign metadata: Form ID, Page ID, Ad Set ID, Platform Source (Meta, Google, Webhook, Form).</li>
          <li>Custom fields defined by you (e.g., budget range, property type, location, consultation notes).</li>
          <li>Pipeline progression timestamps, status transitions, and response latency SLA timers.</li>
        </ul>

        <h3 className="text-base font-semibold text-foreground pt-2">C. Technical &amp; Device Data</h3>
        <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
          <li>Browser user agent, IP address, operating system, and screen resolution.</li>
          <li>Web Push notification subscription endpoint tokens for vibrating instant alerts.</li>
          <li>Local device IndexedDB / Cache storage tokens used for offline outbox synchronization.</li>
        </ul>
      </section>

      {/* 04. Meta, Google & WhatsApp Integrations */}
      <section id="integrations" className="scroll-mt-24 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground flex items-center gap-2.5">
          <Server className="h-6 w-6 text-foreground" />
          <span>4. Meta, Google &amp; WhatsApp Integrations</span>
        </h2>
        <p>
          Ridhzo integrates deeply with advertising networks and messaging channels. Each integration complies with the
          respective platform provider policies:
        </p>
        <div className="space-y-4 pt-1">
          <div className="border border-border rounded-lg p-4 bg-card">
            <h4 className="font-semibold text-foreground text-sm">Meta (Facebook &amp; Instagram) Lead Ads</h4>
            <p className="text-xs text-muted-foreground mt-1">
              When you connect Meta Lead Ads via OAuth or incoming webhooks, we verify incoming SHA-256 HMAC payload
              signatures. We extract the ad form responses and route them directly to your isolated workspace. We do
              not utilize Facebook lead data for ad retargeting or third-party profiling.
            </p>
          </div>

          <div className="border border-border rounded-lg p-4 bg-card">
            <h4 className="font-semibold text-foreground text-sm">Google Ads Lead Form Extensions</h4>
            <p className="text-xs text-muted-foreground mt-1">
              We process webhook payloads authenticated via Google Ads Webhook Keys. Lead records are stored solely in
              your tenant account to facilitate your sales team&apos;s follow-up.
            </p>
          </div>

          <div className="border border-border rounded-lg p-4 bg-card">
            <h4 className="font-semibold text-foreground text-sm">WhatsApp Messaging (`wa.me` &amp; Watxio API)</h4>
            <p className="text-xs text-muted-foreground mt-1">
              When reps tap &quot;Contact on WhatsApp&quot;, Ridhzo initiates a secure client-side deep link (
              <code>wa.me/&lt;number&gt;?text=&lt;encoded_template&gt;</code>) or transmits through official WhatsApp Cloud
              APIs. You are responsible for ensuring consent from prospects prior to outbound messaging in compliance
              with WhatsApp Business Messaging guidelines and applicable anti-spam laws.
            </p>
          </div>
        </div>
      </section>

      {/* 05. How We Use Your Information */}
      <section id="how-we-use" className="scroll-mt-24 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground flex items-center gap-2.5">
          <CheckCircle2 className="h-6 w-6 text-foreground" />
          <span>5. How We Use Your Information</span>
        </h2>
        <p>We process data exclusively for legitimate operational purposes:</p>
        <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
          <li>Ingesting and routing leads within sub-minute SLAs to your designated sales reps.</li>
          <li>Dispatching push notifications to your mobile phone when a new inquiry arrives.</li>
          <li>Synchronizing pipeline deal progression and flagging inactive prospects with &quot;Going Cold&quot; alerts.</li>
          <li>Processing recurring subscription invoices and verifying authorized seat counts.</li>
          <li>Providing responsive technical customer support and troubleshooting webhook failures.</li>
          <li>Maintaining system integrity, preventing brute-force authentication attacks, and enforcing rate limits.</li>
        </ul>
      </section>

      {/* 06. Data Isolation & Security */}
      <section id="tenant-isolation" className="scroll-mt-24 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground flex items-center gap-2.5">
          <Lock className="h-6 w-6 text-foreground" />
          <span>6. Data Isolation &amp; Cryptographic Security</span>
        </h2>
        <p>
          We employ defense-in-depth architectural safeguards to protect your business information from unauthorized
          access, data leaks, or cross-tenant exposure:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
          <li>
            <strong>Tenant-Isolated Postgres:</strong> All SQL read and write operations are strictly partitioned by
            tenant identifier. No workspace can ever inspect, query, or mutate records belonging to another tenant.
          </li>
          <li>
            <strong>AES-256 Encryption at Rest:</strong> Database volumes, webhook payload logs, and integration tokens
            are encrypted using industry-standard AES-256 GCM encryption.
          </li>
          <li>
            <strong>TLS 1.3 in Transit:</strong> All HTTP traffic, mobile PWA API calls, and webhooks are transmitted
            exclusively over modern TLS 1.3 cryptographic protocols with HSTS enforcement.
          </li>
          <li>
            <strong>Offline Outbox Tamper-Resistance:</strong> Leads modified on mobile while offline are stored in
            encrypted browser IndexedDB partitions and dispatched sequentially with conflict-resolution locks upon
            network reconnection.
          </li>
        </ul>
      </section>

      {/* 07. Data Sharing & Third-Party Processors */}
      <section id="sharing" className="scroll-mt-24 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground flex items-center gap-2.5">
          <Server className="h-6 w-6 text-foreground" />
          <span>7. Data Sharing &amp; Third-Party Sub-Processors</span>
        </h2>
        <p>
          We do not sell personal data to data brokers. We engage a limited set of vetted cloud infrastructure
          sub-processors who adhere to stringent security obligations:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[500px] text-left text-xs border border-border mt-2">
            <thead className="bg-secondary/50 text-foreground border-b border-border">
              <tr>
                <th className="p-3">Sub-Processor</th>
                <th className="p-3">Purpose</th>
                <th className="p-3">Security Safeguards</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-muted-foreground">
              <tr>
                <td className="p-3 font-medium text-foreground">AWS / Neon Cloud</td>
                <td className="p-3">Encrypted Cloud Hosting &amp; Serverless Postgres</td>
                <td className="p-3">SOC 2 Type II, ISO 27001, AES-256</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-foreground">Razorpay / Stripe</td>
                <td className="p-3">Subscription Billing &amp; Payment Gateway</td>
                <td className="p-3">PCI-DSS Level 1 Compliant</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-foreground">Cloudflare</td>
                <td className="p-3">DDoS Protection, CDN &amp; WAF Defense</td>
                <td className="p-3">Edge encryption, TLS 1.3, SOC 2</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-foreground">Web Push Services (Google FCM / Apple APNs)</td>
                <td className="p-3">Cryptographic Mobile Push Notifications</td>
                <td className="p-3">VAPID payload encryption</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 08. Data Retention & Deletion */}
      <section id="retention-deletion" className="scroll-mt-24 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground flex items-center gap-2.5">
          <Database className="h-6 w-6 text-foreground" />
          <span>8. Data Retention &amp; Permanent Deletion</span>
        </h2>
        <p>
          We retain workspace data for as long as your subscription is active. Upon cancellation or non-renewal of your
          account:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
          <li>
            <strong>Grace Period:</strong> Your data remains accessible in read-only mode for 30 days to permit CSV
            export of your pipeline and contacts.
          </li>
          <li>
            <strong>Purge SLA:</strong> After 30 days of cancellation or upon verified written request to{" "}
            <code>legal@ridhzo.com</code>, all leads, notes, custom fields, and webhook audit trails are permanently
            wiped from production databases.
          </li>
          <li>
            <strong>Encrypted Backups:</strong> Point-in-time database snapshots are rotated out and overwritten within
            an automated 30-day lifecycle window.
          </li>
        </ul>
      </section>

      {/* 09. Your Rights & Choices (DPDP / GDPR / CCPA) */}
      <section id="your-rights" className="scroll-mt-24 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground flex items-center gap-2.5">
          <UserCheck className="h-6 w-6 text-foreground" />
          <span>9. Your Rights &amp; Choices</span>
        </h2>
        <p>
          Regardless of your jurisdiction, we respect global data privacy principles including India&apos;s Digital Personal
          Data Protection Act (DPDP Act 2023), the EU General Data Protection Regulation (GDPR), and the California
          Consumer Privacy Act (CCPA/CPRA):
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
          <li>
            <strong>Right to Access &amp; Portability:</strong> You can export all leads, pipeline statuses, and notes in
            standard CSV/JSON format at any time directly from workspace settings.
          </li>
          <li>
            <strong>Right to Rectification:</strong> You can modify or update any prospect or user record instantly.
          </li>
          <li>
            <strong>Right to Erasure (&quot;Right to be Forgotten&quot;):</strong> You can delete individual leads or
            request full tenant workspace eradication.
          </li>
          <li>
            <strong>Right to Restrict or Object to Processing:</strong> You may disconnect ad accounts or disable push
            alert subscriptions with a single click.
          </li>
        </ul>
      </section>

      {/* 10. Grievance Officer & Inquiries */}
      <section id="grievance" className="scroll-mt-24 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground flex items-center gap-2.5">
          <Bell className="h-6 w-6 text-foreground" />
          <span>10. Grievance Officer &amp; Regulatory Inquiries</span>
        </h2>
        <p>
          In accordance with the Information Technology Act, 2000, and the Digital Personal Data Protection Act, 2023,
          the designated Grievance Officer for Ridhzo is:
        </p>
        <div className="rounded-xl border border-border bg-card p-5 space-y-2 text-xs sm:text-sm">
          <p className="font-bold text-foreground">Grievance &amp; Data Protection Officer</p>
          <p className="text-muted-foreground">Ridhzo Technologies Pvt. Ltd.</p>
          <p className="text-muted-foreground">
            Email:{" "}
            <a href="mailto:legal@ridhzo.com" className="text-foreground underline">
              legal@ridhzo.com
            </a>{" "}
            (Attn: Data Grievance)
          </p>
          <p className="text-muted-foreground">Phone: +91 98201 44520</p>
          <p className="text-muted-foreground">Hours: Monday – Saturday, 9:00 AM – 8:00 PM IST</p>
          <p className="text-xs text-muted-foreground pt-2">
            Grievances are formally acknowledged within 24 hours and addressed within 15 business days.
          </p>
        </div>
      </section>
    </PolicyLayout>
  );
}
