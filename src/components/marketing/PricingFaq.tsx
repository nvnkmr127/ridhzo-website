import Link from "next/link";

/**
 * Objection-handling FAQ for the pricing page, plus FAQPage structured data so
 * the questions are eligible for rich results in search.
 */
const FAQS: { q: string; a: React.ReactNode; plain: string }[] = [
  {
    q: "Is there really a free plan?",
    a: (
      <>
        Yes. The Free plan is free forever — up to 100 active leads, a full mobile
        pipeline, 1-tap WhatsApp, and offline mode. No credit card required to start.
      </>
    ),
    plain:
      "Yes. The Free plan is free forever — up to 100 active leads, a full mobile pipeline, 1-tap WhatsApp, and offline mode. No credit card required to start.",
  },
  {
    q: "How does the 14-day trial work?",
    a: (
      <>
        Paid plans start with a 14-day free trial of all their features. You&apos;re
        only charged when the trial ends, and you can cancel any time before then.
      </>
    ),
    plain:
      "Paid plans start with a 14-day free trial of all their features. You're only charged when the trial ends, and you can cancel any time before then.",
  },
  {
    q: "Is pricing per user or per company?",
    a: (
      <>
        Pricing is per user, per month, so it scales with your team. Starter includes
        up to 3 seats; Unlimited has unlimited seats for larger brokerages and agencies.
      </>
    ),
    plain:
      "Pricing is per user, per month, so it scales with your team. Starter includes up to 3 seats; Unlimited has unlimited seats for larger brokerages and agencies.",
  },
  {
    q: "What counts as an active lead?",
    a: (
      <>
        An active lead is a contact currently in your pipeline. Archived or closed
        leads don&apos;t count against your limit, so you only pay for what you&apos;re
        actively working.
      </>
    ),
    plain:
      "An active lead is a contact currently in your pipeline. Archived or closed leads don't count against your limit, so you only pay for what you're actively working.",
  },
  {
    q: "Can I switch plans or cancel later?",
    a: (
      <>
        Any time. Upgrade, downgrade, or cancel from your workspace billing settings.
        See our{" "}
        <Link href="/refund-policy" className="font-medium text-foreground underline underline-offset-2 hover:text-foreground/80">
          Cancellation &amp; Refund Policy
        </Link>{" "}
        for details.
      </>
    ),
    plain:
      "Any time. Upgrade, downgrade, or cancel from your workspace billing settings. See our Cancellation & Refund Policy for details.",
  },
  {
    q: "What payment methods do you accept?",
    a: (
      <>
        Major credit and debit cards plus popular regional payment methods, handled
        securely by our payment processor. Your card details are never stored on our
        servers.
      </>
    ),
    plain:
      "Major credit and debit cards plus popular regional payment methods, handled securely by our payment processor. Your card details are never stored on our servers.",
  },
  {
    q: "Is my data secure?",
    a: (
      <>
        Yes — AES-256 encryption and strict tenant isolation mean your leads are never
        exposed to other workspaces. Read more on our{" "}
        <Link href="/security" className="font-medium text-foreground underline underline-offset-2 hover:text-foreground/80">
          Security page
        </Link>
        .
      </>
    ),
    plain:
      "Yes — AES-256 encryption and strict tenant isolation mean your leads are never exposed to other workspaces. Read more on our Security page.",
  },
];

export function PricingFaq() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.plain },
    })),
  };

  return (
    <section className="border-t border-border bg-background py-16 sm:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
            Pricing questions, answered
          </h2>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">
            Still unsure?{" "}
            <Link href="/contact" className="font-medium text-foreground underline underline-offset-2 hover:text-foreground/80">
              Talk to us
            </Link>{" "}
            — we reply within 24 hours.
          </p>
        </div>

        <dl className="mt-10 divide-y divide-border rounded-xl border border-border bg-card">
          {FAQS.map((item) => (
            <div key={item.q} className="p-5 sm:p-6">
              <dt className="text-sm font-semibold text-foreground">{item.q}</dt>
              <dd className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                {item.a}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
