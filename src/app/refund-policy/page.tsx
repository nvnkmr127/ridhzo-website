import type { Metadata } from "next";
import { PolicyLayout } from "@/components/marketing/PolicyLayout";
import { RotateCcw, CheckCircle2, Clock, CreditCard, AlertCircle, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Cancellation & Refund Policy — Ridhzo CRM",
  description:
    "Review Ridhzo's clear 14-day money-back guarantee, self-serve subscription cancellation, and 5-7 business day refund turnaround SLA.",
  alternates: {
    canonical: "https://ridhzo.com/refund-policy",
  },
};

const SECTIONS = [
  { id: "guarantee", title: "1. 14-Day Money-Back Guarantee" },
  { id: "cancellation", title: "2. How to Cancel Your Subscription" },
  { id: "eligibility", title: "3. Refund Eligibility & Rules" },
  { id: "non-refundable", title: "4. Non-Refundable Items" },
  { id: "timeline", title: "5. Processing Timeline & Payout Mode" },
  { id: "how-to-request", title: "6. How to Request a Refund" },
];

export default function RefundPolicyPage() {
  return (
    <PolicyLayout
      title="Cancellation &amp; Refund Policy"
      description="We believe software should earn your business every month. If Ridhzo isn't driving faster lead response and closing more deals for your team, our cancellation and refund process is straightforward, fair, and transparent."
      lastUpdated="September 20, 2026"
      effectiveDate="September 20, 2026"
      version="1.2"
      sections={SECTIONS}
      activePath="/refund-policy"
    >
      {/* 01. 14-Day Money-Back Guarantee */}
      <section id="guarantee" className="scroll-mt-24 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground flex items-center gap-2.5">
          <RotateCcw className="h-6 w-6 text-foreground" />
          <span>1. 14-Day Money-Back Guarantee</span>
        </h2>
        <p>
          We offer an unconditional <strong>14-Day Money-Back Guarantee</strong> on all first-time paid subscriptions
          (both Monthly and Annual plans).
        </p>
        <div className="rounded-xl border border-border bg-card p-5 space-y-2">
          <div className="flex items-center gap-2 text-foreground font-semibold text-sm">
            <CheckCircle2 className="h-4 w-4 text-foreground" />
            <span>Risk-Free Onboarding</span>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            If you subscribe to Ridhzo and decide within 14 calendar days of your initial payment that our mobile CRM does
            not fit your sales team&apos;s workflow, simply message support or request a refund from your dashboard. We will
            issue a full 100% refund of your subscription fee with no hassle and no mandatory retention interrogation.
          </p>
        </div>
      </section>

      {/* 02. How to Cancel */}
      <section id="cancellation" className="scroll-mt-24 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground flex items-center gap-2.5">
          <Clock className="h-6 w-6 text-foreground" />
          <span>2. How to Cancel Your Subscription</span>
        </h2>
        <p>You may cancel your Ridhzo subscription at any time with zero friction:</p>
        <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
          <li>
            <strong>1-Tap Self-Serve Cancellation:</strong> Navigate to <code>Workspace Settings &gt; Billing &gt; Manage Plan</code>,
            and click &quot;Cancel Subscription&quot;. Cancellation takes effect immediately without requiring email
            confirmation or phone calls.
          </li>
          <li>
            <strong>Retain Prepaid Access:</strong> When you cancel, your account remains fully operational until the
            final day of your active prepaid billing period (whether monthly or annual).
          </li>
          <li>
            <strong>Zero Future Charges:</strong> Once cancelled, our automated billing engine will never charge your
            card or payment method again unless you explicitly reactivate your plan.
          </li>
        </ul>
      </section>

      {/* 03. Refund Eligibility & Rules */}
      <section id="eligibility" className="scroll-mt-24 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground flex items-center gap-2.5">
          <CreditCard className="h-6 w-6 text-foreground" />
          <span>3. Refund Eligibility &amp; Criteria</span>
        </h2>
        <p>Refunds are evaluated under the following transparent rules:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
          <div className="p-4 rounded-xl border border-border bg-card space-y-2">
            <h3 className="text-sm font-bold text-foreground">Monthly Subscriptions</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Eligible for a 100% refund if requested within 14 days of the initial subscription purchase. Subsequent
              monthly renewals are non-refundable once the billing month has commenced, but can be cancelled to prevent
              all future billings.
            </p>
          </div>
          <div className="p-4 rounded-xl border border-border bg-card space-y-2">
            <h3 className="text-sm font-bold text-foreground">Annual Subscriptions</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Eligible for a 100% refund within 14 days of purchase. If you cancel an annual plan after 14 days, you may
              request a pro-rated refund for the remaining unused full months, adjusted to the standard non-discounted
              monthly rate for the consumed months.
            </p>
          </div>
        </div>
      </section>

      {/* 04. Non-Refundable Items */}
      <section id="non-refundable" className="scroll-mt-24 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground flex items-center gap-2.5">
          <AlertCircle className="h-6 w-6 text-foreground" />
          <span>4. Non-Refundable Items</span>
        </h2>
        <p>The following categories are strictly non-refundable:</p>
        <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
          <li>
            <strong>Usage-Based Telecom / API Credits:</strong> Any third-party WhatsApp Business API conversation
            charges, cloud telephony fees, or SMS fees billed at cost by telecommunication carriers.
          </li>
          <li>
            <strong>Accounts Terminated for Abuse:</strong> Any account suspended or terminated due to violations of
            our Acceptable Use &amp; Anti-Spam Policy (e.g., uploading scraped lists, mass harassment, cold scamming)
            forfeits all refund eligibility.
          </li>
          <li>
            <strong>Requests Exceeding Stated Windows:</strong> Refund requests submitted beyond the 14-day window for
            renewals that have seen continuous active usage by team members.
          </li>
        </ul>
      </section>

      {/* 05. Timeline & Payout Mode */}
      <section id="timeline" className="scroll-mt-24 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground flex items-center gap-2.5">
          <Clock className="h-6 w-6 text-foreground" />
          <span>5. Processing Timeline &amp; Payment Mode</span>
        </h2>
        <div className="rounded-xl border border-border bg-secondary/30 p-5 space-y-3">
          <p className="text-sm font-bold text-foreground">5 to 7 Business Days Turnaround SLA</p>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            Once your refund request is approved by our billing desk, the refund is initiated immediately through our
            payment gateway partner (Razorpay or Stripe).
          </p>
          <ul className="list-disc pl-5 space-y-1 text-xs text-muted-foreground">
            <li>
              <strong>Original Payment Source:</strong> All refunds are routed exclusively back to the original source
              used for the transaction (original credit card, debit card, UPI VPA, or Net Banking account).
            </li>
            <li>
              <strong>Bank Credit Window:</strong> Depending on your card issuer or banking institution, funds
              typically appear on your statement within <strong>5 to 7 business days</strong>.
            </li>
            <li>
              <strong>Refund Receipt:</strong> An automated digital credit note and gateway transaction reference number
              will be dispatched to your registered billing email address.
            </li>
          </ul>
        </div>
      </section>

      {/* 06. How to Request a Refund */}
      <section id="how-to-request" className="scroll-mt-24 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground flex items-center gap-2.5">
          <HelpCircle className="h-6 w-6 text-foreground" />
          <span>6. How to Request a Refund</span>
        </h2>
        <p>To request a refund under our guarantee policy:</p>
        <div className="rounded-xl border border-border bg-card p-5 space-y-3 text-xs sm:text-sm">
          <p className="text-foreground">
            Send an email to{" "}
            <a href="mailto:support@ridhzo.com" className="text-foreground font-semibold underline">
              support@ridhzo.com
            </a>{" "}
            or message our team on WhatsApp at{" "}
            <a
              href="https://wa.me/919820144520"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground font-semibold underline"
            >
              +91 98201 44520
            </a>{" "}
            with the following details:
          </p>
          <ol className="list-decimal pl-5 space-y-1 text-muted-foreground">
            <li>Your Workspace Name or Registered Admin Email</li>
            <li>The Invoice ID or Transaction Date</li>
            <li>A brief reason for cancellation (helps us improve our product, but not mandatory)</li>
          </ol>
          <p className="text-xs text-muted-foreground pt-1">
            Our billing team will review and confirm your refund within 24 hours during working days.
          </p>
        </div>
      </section>
    </PolicyLayout>
  );
}
