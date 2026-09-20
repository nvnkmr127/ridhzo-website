import type { Metadata } from "next";
import { PolicyLayout } from "@/components/marketing/PolicyLayout";
import { FileText, CheckCircle2, AlertOctagon, Scale, ShieldAlert, CreditCard, Ban } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service — Ridhzo CRM",
  description:
    "Read the Terms of Service governing your use of Ridhzo CRM, including workspace rules, acceptable messaging practices, seat licenses, and billing policies.",
  alternates: {
    canonical: "https://ridhzo.com/terms",
  },
};

const SECTIONS = [
  { id: "acceptance", title: "1. Acceptance of Terms" },
  { id: "accounts-seats", title: "2. Account Registration & Seats" },
  { id: "acceptable-use", title: "3. Acceptable Use & Anti-Spam" },
  { id: "whatsapp-compliance", title: "4. WhatsApp & Telecom Compliance" },
  { id: "data-ownership", title: "5. Intellectual Property & Lead Ownership" },
  { id: "billing-plans", title: "6. Subscription Fees & Renewals" },
  { id: "service-slas", title: "7. Availability & Service SLAs" },
  { id: "liability-caps", title: "8. Limitation of Liability & Warranty" },
  { id: "indemnification", title: "9. Mutual Indemnification" },
  { id: "termination", title: "10. Suspension & Termination" },
  { id: "governing-law", title: "11. Governing Law & Dispute Resolution" },
];

export default function TermsOfServicePage() {
  return (
    <PolicyLayout
      title="Terms of Service"
      description="These Terms govern your access to the Ridhzo Mobile CRM platform. By creating a workspace or connecting an advertising source, you enter into a legally binding agreement with Ridhzo."
      lastUpdated="September 20, 2026"
      effectiveDate="September 20, 2026"
      version="2.0"
      sections={SECTIONS}
      activePath="/terms"
    >
      {/* 01. Acceptance of Terms */}
      <section id="acceptance" className="scroll-mt-24 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground flex items-center gap-2.5">
          <FileText className="h-6 w-6 text-foreground" />
          <span>1. Acceptance of Terms</span>
        </h2>
        <p>
          These Terms of Service (&quot;Terms&quot;) constitute a legally binding agreement between you (whether on
          behalf of yourself as an individual or an entity you represent, hereinafter referred to as &quot;Customer&quot;,
          &quot;Subscriber&quot;, or &quot;You&quot;) and <strong>Ridhzo Technologies Pvt. Ltd.</strong> (&quot;Ridhzo&quot;,
          &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;).
        </p>
        <p>
          By creating an account, launching a workspace, utilizing our progressive web app (PWA), installing webhook
          endpoints, or clicking &quot;I Agree&quot;, you represent that you have the legal capacity to enter into these
          Terms and agree to be bound by all conditions set forth herein.
        </p>
        <div className="rounded-xl border border-border bg-card p-4 sm:p-5">
          <p className="text-xs sm:text-sm font-medium text-foreground">
            If you are registering on behalf of a company, agency, or brokerage, you represent and warrant that you
            possess full administrative authority to bind that entity to these Terms.
          </p>
        </div>
      </section>

      {/* 02. Accounts & Seat Licenses */}
      <section id="accounts-seats" className="scroll-mt-24 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground flex items-center gap-2.5">
          <CheckCircle2 className="h-6 w-6 text-foreground" />
          <span>2. Account Registration &amp; Seat Licenses</span>
        </h2>
        <p>
          To access the Platform, you must register for a multi-tenant workspace. Access is granted under license tiers
          based on active user seats (e.g., Admin, Manager, Sales Agent):
        </p>
        <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
          <li>
            <strong>Named User Licenses:</strong> Each user seat is provisioned for an individual sales representative.
            Concurrent sharing of a single seat login across multiple representatives to bypass licensing limits is
            strictly prohibited.
          </li>
          <li>
            <strong>Credential Security:</strong> You are solely responsible for maintaining the confidentiality of
            your login credentials, API secrets, and mobile session tokens. You must notify us immediately at{" "}
            <code>security@ridhzo.com</code> of any unauthorized access.
          </li>
          <li>
            <strong>Administrative Authority:</strong> Workspace Admins have the sole prerogative to invite reps, assign
            round-robin queues, modify pipeline stages, and initiate workspace exports or deletions.
          </li>
        </ul>
      </section>

      {/* 03. Acceptable Use & Anti-Spam Policy */}
      <section id="acceptable-use" className="scroll-mt-24 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground flex items-center gap-2.5">
          <Ban className="h-6 w-6 text-foreground" />
          <span>3. Acceptable Use &amp; Strict Anti-Spam Policy</span>
        </h2>
        <p>
          Ridhzo is engineered to accelerate response to inbound leads who have voluntarily expressed interest in your
          products or services. We maintain a zero-tolerance policy regarding spam, cold harvesting, and unsolicited
          communications:
        </p>
        <div className="border border-destructive/40 bg-destructive/10 rounded-xl p-5 space-y-3">
          <div className="flex items-center gap-2 text-sm font-bold text-foreground">
            <AlertOctagon className="h-4 w-4 text-foreground" />
            <span>Strictly Prohibited Conduct</span>
          </div>
          <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-muted-foreground">
            <li>Uploading scraped, bought, or third-party phone lists without explicit opt-in consent.</li>
            <li>
              Automating unsolicited mass cold messaging or robocalling that disrupts mobile users or circumvents
              opt-out requests.
            </li>
            <li>Transmitting deceptive, fraudulent, defamatory, sexually explicit, or predatory promotional offers.</li>
            <li>Attempting to reverse-engineer, decompile, or probe vulnerabilities in the Ridhzo API or PWA runtime.</li>
            <li>Abusing webhook ingestion endpoints to launch Denial of Service (DoS) attacks on our database clusters.</li>
          </ul>
        </div>
      </section>

      {/* 04. WhatsApp & Telecom Compliance */}
      <section id="whatsapp-compliance" className="scroll-mt-24 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground flex items-center gap-2.5">
          <ShieldAlert className="h-6 w-6 text-foreground" />
          <span>4. WhatsApp &amp; Telecom Regulations</span>
        </h2>
        <p>
          When utilizing Ridhzo&apos;s 1-tap WhatsApp triggers, quick-response templates, or automated follow-up cadences:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
          <li>
            <strong>Meta / WhatsApp Business Policy:</strong> You agree to abide fully by Meta&apos;s WhatsApp Business
            Terms of Service and Commerce Policies. WhatsApp accounts that are banned or suspended by Meta for spamming
            do not entitle you to any refund from Ridhzo.
          </li>
          <li>
            <strong>Telecom Regulations (TRAI / TCPA / NDNC):</strong> You are solely responsible for ensuring your
            outbound sales communications comply with telemarketing laws in your prospects&apos; jurisdiction, including the
            Telecom Commercial Communications Customer Preference Regulations (TRAI NDNC Registry in India) and the
            Telephone Consumer Protection Act (TCPA in the United States).
          </li>
          <li>
            <strong>Instant Opt-Out:</strong> If a prospect requests to stop receiving messages or calls (&quot;STOP&quot;,
            &quot;Unsubscribe&quot;, &quot;Do Not Call&quot;), you must immediately cease contact and mark the lead as
            unsubscribed in your Ridhzo pipeline.
          </li>
        </ul>
      </section>

      {/* 05. Intellectual Property & Lead Ownership */}
      <section id="data-ownership" className="scroll-mt-24 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground flex items-center gap-2.5">
          <Scale className="h-6 w-6 text-foreground" />
          <span>5. Intellectual Property &amp; Customer Lead Ownership</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-xl border border-border bg-card space-y-2">
            <h3 className="text-sm font-bold text-foreground">Your Customer Data (100% Yours)</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              You retain exclusive ownership, title, and intellectual property rights to all leads, contact profiles,
              notes, sales amounts, and campaign assets loaded into your workspace. Ridhzo claims zero ownership over
              your business leads.
            </p>
          </div>
          <div className="p-5 rounded-xl border border-border bg-card space-y-2">
            <h3 className="text-sm font-bold text-foreground">Ridhzo Platform IP</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Ridhzo retains all rights, title, and interest in and to the Platform, including proprietary algorithms,
              mobile PWA offline engines, source code, database architectures, trademarks, and documentation.
            </p>
          </div>
        </div>
      </section>

      {/* 06. Subscription Fees & Renewals */}
      <section id="billing-plans" className="scroll-mt-24 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground flex items-center gap-2.5">
          <CreditCard className="h-6 w-6 text-foreground" />
          <span>6. Subscription Fees, Billing &amp; Renewals</span>
        </h2>
        <p>Access to Ridhzo is billed on a recurring subscription basis (monthly or annually):</p>
        <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
          <li>
            <strong>Payment Terms:</strong> Subscription fees are charged at the beginning of each billing cycle
            via our payment gateway partners (Razorpay / Stripe).
          </li>
          <li>
            <strong>Automatic Renewal:</strong> Unless cancelled prior to your billing renewal date via the workspace
            settings, your subscription will automatically renew at the then-current plan rate.
          </li>
          <li>
            <strong>Taxes:</strong> All listed prices are exclusive of statutory taxes (such as Goods and Services Tax /
            GST in India or applicable sales tax/VAT), which will be added at checkout.
          </li>
          <li>
            <strong>Failed Payments:</strong> In the event of an automated renewal failure, a 7-day grace period is
            provided. After this period, workspace write capabilities are paused until payment is successfully settled.
          </li>
        </ul>
      </section>

      {/* 07. Availability & Service SLAs */}
      <section id="service-slas" className="scroll-mt-24 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground flex items-center gap-2.5">
          <CheckCircle2 className="h-6 w-6 text-foreground" />
          <span>7. Service Availability &amp; Uptime SLA</span>
        </h2>
        <p>
          We target a <strong>99.9% uptime SLA</strong> for our core cloud infrastructure, including incoming webhook
          ingestion endpoints, database read/write replicas, and push notification relays.
        </p>
        <p className="text-xs sm:text-sm">
          Uptime calculations exclude scheduled maintenance windows (conducted during low-traffic off-peak hours with 48
          hours advance notice) and upstream network outages attributable to third-party providers (e.g., Meta Graph API
          downtime, Google Ads webhook outages, mobile carrier SMS/network drops).
        </p>
      </section>

      {/* 08. Limitation of Liability & Warranty */}
      <section id="liability-caps" className="scroll-mt-24 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground flex items-center gap-2.5">
          <AlertOctagon className="h-6 w-6 text-foreground" />
          <span>8. Limitation of Liability &amp; Disclaimers</span>
        </h2>
        <p>
          TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS
          AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE.
        </p>
        <div className="rounded-xl border border-border bg-card p-4 space-y-2 text-xs sm:text-sm text-muted-foreground">
          <p>
            IN NO EVENT SHALL RIDHZO, ITS DIRECTORS, EMPLOYEES, OR AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
            SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER
            INTANGIBLE LOSSES RESULTING FROM:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>YOUR ACCESS TO OR INABILITY TO ACCESS OR USE THE PLATFORM;</li>
            <li>THIRD-PARTY ACTIONS, INCLUDING AD ACCOUNT SUSPENSION OR WHATSAPP NUMBER BLOCKS BY META;</li>
            <li>UNAUTHORIZED ACCESS, USE, OR ALTERATION OF YOUR LEADS OR TRANSMISSIONS.</li>
          </ul>
          <p className="pt-2 font-medium text-foreground">
            OUR TOTAL AGGREGATE LIABILITY FOR ANY CLAIM ARISING OUT OF OR RELATING TO THESE TERMS SHALL NOT EXCEED THE
            TOTAL AMOUNT ACTUALLY PAID BY YOU TO RIDHZO IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM.
          </p>
        </div>
      </section>

      {/* 09. Mutual Indemnification */}
      <section id="indemnification" className="scroll-mt-24 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground flex items-center gap-2.5">
          <Scale className="h-6 w-6 text-foreground" />
          <span>9. Mutual Indemnification</span>
        </h2>
        <p>
          You agree to defend, indemnify, and hold harmless Ridhzo Technologies, its officers, contractors, and agents
          from and against any third-party claims, liabilities, losses, damages, or costs (including reasonable legal
          fees) arising from or relating to: (a) your violation of these Terms; (b) your violation of applicable
          anti-spam, telemarketing, or consumer privacy regulations; or (c) any dispute between you and your end-customer
          leads.
        </p>
      </section>

      {/* 10. Suspension & Termination */}
      <section id="termination" className="scroll-mt-24 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground flex items-center gap-2.5">
          <Ban className="h-6 w-6 text-foreground" />
          <span>10. Suspension &amp; Termination</span>
        </h2>
        <p>
          You may terminate your subscription at any time via your workspace billing portal. Upon termination, your
          account will remain accessible until the end of your prepaid billing period.
        </p>
        <p className="text-xs sm:text-sm">
          We reserve the right to suspend or permanently revoke access immediately without prior notice if you breach
          Section 3 (Acceptable Use &amp; Anti-Spam), engage in fraudulent payment activity, or present an active
          security threat to our multi-tenant platform infrastructure.
        </p>
      </section>

      {/* 11. Governing Law & Dispute Resolution */}
      <section id="governing-law" className="scroll-mt-24 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground flex items-center gap-2.5">
          <Scale className="h-6 w-6 text-foreground" />
          <span>11. Governing Law &amp; Dispute Resolution</span>
        </h2>
        <p>
          These Terms and any dispute or claim arising out of or in connection with them shall be governed by and
          construed in accordance with the laws of <strong>India</strong>, without regard to conflict of law principles.
        </p>
        <p className="text-xs sm:text-sm">
          Any legal action, suit, or proceeding arising under these Terms shall be instituted exclusively in the
          competent courts of <strong>Telangana / Karnataka, India</strong>, and each party irrevocably submits to the
          personal jurisdiction of such courts.
        </p>
      </section>
    </PolicyLayout>
  );
}
