import { pageMetadata } from "@/lib/metadata";
import { PolicyLayout } from "@/components/marketing/PolicyLayout";
import { Cookie, CheckCircle2, Shield, Settings, Sliders, Info } from "lucide-react";

export const metadata = pageMetadata({
  title: "Cookie Policy",
  description:
    "Learn about how Ridhzo uses essential authentication cookies, local storage for mobile offline outbox sync, and performance telemetry.",
  path: "/cookie-policy",
});

const SECTIONS = [
  { id: "what-are-cookies", title: "1. What Are Cookies & Storage Tokens?" },
  { id: "why-we-use", title: "2. How Ridhzo Uses Cookies" },
  { id: "cookie-categories", title: "3. Categories of Cookies We Deploy" },
  { id: "local-storage-pwa", title: "4. Local Storage & Offline PWA Caches" },
  { id: "third-party", title: "5. Third-Party Integrations & Pixels" },
  { id: "managing-cookies", title: "6. How You Can Control Cookies" },
  { id: "updates-contact", title: "7. Policy Updates & Inquiries" },
];

export default function CookiePolicyPage() {
  return (
    <PolicyLayout
      title="Cookie Policy"
      description="This Cookie Policy explains how Ridhzo utilizes cookies, browser local storage, and related tracking technologies to provide secure authentication, offline mobile synchronization, and optimized performance."
      lastUpdated="September 20, 2026"
      effectiveDate="September 20, 2026"
      version="1.1"
      sections={SECTIONS}
      activePath="/cookie-policy"
    >
      {/* 01. What are Cookies */}
      <section id="what-are-cookies" className="scroll-mt-24 space-y-4">
        <h2 className="flex items-center gap-3 text-2xl font-semibold tracking-[-0.02em] text-white">
          <Cookie className="h-6 w-6 shrink-0 text-highlight" />
          <span>1. What Are Cookies &amp; Storage Tokens?</span>
        </h2>
        <p>
          Cookies are small text files placed on your device (computer, tablet, or mobile smartphone) by websites that
          you visit. They are widely used to make web applications function correctly, remember your preferences between
          sessions, and provide secure authenticated access to cloud workspaces.
        </p>
        <p className="text-sm sm:text-base">
          In modern web and Progressive Web Applications (PWA), cookies are accompanied by other web storage mechanisms
          such as <strong>HTML5 LocalStorage</strong>, <strong>SessionStorage</strong>, and <strong>IndexedDB</strong>.
          References to &quot;cookies&quot; throughout this policy encompass all such storage technologies.
        </p>
      </section>

      {/* 02. Why We Use Them */}
      <section id="why-we-use" className="scroll-mt-24 space-y-4">
        <h2 className="flex items-center gap-3 text-2xl font-semibold tracking-[-0.02em] text-white">
          <CheckCircle2 className="h-6 w-6 shrink-0 text-highlight" />
          <span>2. How Ridhzo Uses Cookies</span>
        </h2>
        <p>Ridhzo utilizes cookies and storage technologies for strictly operational and technical purposes:</p>
        <ul className="list-disc pl-5 space-y-1.5 text-sm sm:text-base">
          <li>
            <strong>Session Authenticity:</strong> Validating that you are logged into your specific tenant workspace.
          </li>
          <li>
            <strong>Security &amp; CSRF Defense:</strong> Protecting your data against Cross-Site Request Forgery (CSRF)
            and replay exploits.
          </li>
          <li>
            <strong>Offline Resilience:</strong> Caching leads locally so reps in weak network areas can view contact
            details and queue outgoing WhatsApp messages.
          </li>
          <li>
            <strong>User Interface Preferences:</strong> Remembering pipeline zoom levels, dark mode styling, and custom
            column widths.
          </li>
        </ul>
      </section>

      {/* 03. Categories of Cookies */}
      <section id="cookie-categories" className="scroll-mt-24 space-y-4">
        <h2 className="flex items-center gap-3 text-2xl font-semibold tracking-[-0.02em] text-white">
          <Shield className="h-6 w-6 shrink-0 text-highlight" />
          <span>3. Categories of Cookies We Deploy</span>
        </h2>
        <div className="space-y-4 pt-1">
          <div className="border border-white/12 rounded-2xl p-5 bg-white/[0.04] space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-white text-sm">Strictly Necessary / Essential Cookies</span>
              <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-white/[0.08] text-white">
                Mandatory
              </span>
            </div>
            <p className="text-sm text-white/65 leading-relaxed">
              These cookies are strictly indispensable for the core operation of Ridhzo. They maintain your encrypted
              session token, bind you to your isolated tenant database partition, and ensure payment forms process
              securely. Because the platform cannot function without them, they cannot be toggled off.
            </p>
            <div className="text-[11px] font-mono text-white/65 pt-1">
              Examples: <code>__Host-ridhzo_session</code>, <code>ridhzo_csrf</code>, <code>tenant_ctx</code>
            </div>
          </div>

          <div className="border border-white/12 rounded-2xl p-5 bg-white/[0.04] space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-white text-sm">Functional &amp; Preference Cookies</span>
              <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-white/[0.08] text-white">
                Configurable
              </span>
            </div>
            <p className="text-sm text-white/65 leading-relaxed">
              These tokens allow the web application to recall choices you have made, such as your selected pipeline view
              (Kanban board vs. List view), notification ringtone settings, and lead filter presets.
            </p>
          </div>

          <div className="border border-white/12 rounded-2xl p-5 bg-white/[0.04] space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-white text-sm">Performance &amp; Diagnostics Cookies</span>
              <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-white/[0.08] text-white">
                Anonymized
              </span>
            </div>
            <p className="text-sm text-white/65 leading-relaxed">
              We collect privacy-preserving, aggregated technical metrics regarding page load speed, webhook delivery
              latency, and JavaScript error logs. This telemetry never contains individual lead phone numbers or customer
              names.
            </p>
          </div>
        </div>
      </section>

      {/* 04. Local Storage & PWA */}
      <section id="local-storage-pwa" className="scroll-mt-24 space-y-4">
        <h2 className="flex items-center gap-3 text-2xl font-semibold tracking-[-0.02em] text-white">
          <Settings className="h-6 w-6 shrink-0 text-highlight" />
          <span>4. Local Storage &amp; Offline PWA Caches</span>
        </h2>
        <p>
          Ridhzo&apos;s mobile Progressive Web App (PWA) relies on client-side storage to provide instant response times
          on mobile devices:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base">
          <li>
            <strong>IndexedDB Outbox Queue:</strong> When your device is offline or has intermittent cellular signal,
            changes made to lead stages, notes, and tags are persisted in IndexedDB on your device. These events are
            automatically dispatched and flushed to our cloud servers once network connectivity is re-established.
          </li>
          <li>
            <strong>Web Push VAPID Keys:</strong> Browser push notification subscription endpoints are retained locally
            to route high-priority vibrating alerts directly to your phone hardware when an incoming Meta or Google ad
            lead arrives.
          </li>
        </ul>
      </section>

      {/* 05. Third-Party Integrations */}
      <section id="third-party" className="scroll-mt-24 space-y-4">
        <h2 className="flex items-center gap-3 text-2xl font-semibold tracking-[-0.02em] text-white">
          <Info className="h-6 w-6 shrink-0 text-highlight" />
          <span>5. Third-Party Integrations &amp; Pixels</span>
        </h2>
        <p className="text-sm sm:text-base">
          When you navigate our public marketing pages (such as <code>ridhzo.com</code>), we may utilize standard
          advertising conversion tags (e.g., Meta Pixel or Google Tag) to measure the effectiveness of our own marketing
          campaigns.
        </p>
        <div className="rounded-2xl border border-white/12 bg-white/[0.04] p-4">
          <p className="text-sm sm:text-base text-white font-medium">
            Strict Boundary: Third-party advertising pixels are never embedded inside authenticated workspace dashboards
            or pipeline views where confidential lead records are visible.
          </p>
        </div>
      </section>

      {/* 06. Managing Cookies */}
      <section id="managing-cookies" className="scroll-mt-24 space-y-4">
        <h2 className="flex items-center gap-3 text-2xl font-semibold tracking-[-0.02em] text-white">
          <Sliders className="h-6 w-6 shrink-0 text-highlight" />
          <span>6. How You Can Control &amp; Manage Cookies</span>
        </h2>
        <p>
          You have the right to decide whether to accept or reject non-essential cookies. You can exercise your
          preferences through your browser settings:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-sm sm:text-base">
          <li>
            <strong>Google Chrome:</strong> Settings &gt; Privacy and security &gt; Third-party cookies.
          </li>
          <li>
            <strong>Apple Safari:</strong> Preferences &gt; Privacy &gt; Manage Website Data.
          </li>
          <li>
            <strong>Mozilla Firefox:</strong> Options &gt; Privacy &amp; Security &gt; Cookies and Site Data.
          </li>
          <li>
            <strong>Microsoft Edge:</strong> Settings &gt; Cookies and site permissions &gt; Manage and delete cookies.
          </li>
        </ul>
        <p className="text-sm text-white/65 pt-1">
          Please note: If you choose to block all cookies (including strictly necessary authentication cookies), you
          will not be able to log in to your Ridhzo CRM workspace.
        </p>
      </section>

      {/* 07. Updates & Contact */}
      <section id="updates-contact" className="scroll-mt-24 space-y-4">
        <h2 className="flex items-center gap-3 text-2xl font-semibold tracking-[-0.02em] text-white">
          <Cookie className="h-6 w-6 shrink-0 text-highlight" />
          <span>7. Updates to This Policy &amp; Contact Inquiries</span>
        </h2>
        <p className="text-sm sm:text-base">
          We may update this Cookie Policy from time to time to reflect operational, regulatory, or technical changes.
          We encourage you to review this page periodically.
        </p>
        <p className="text-sm sm:text-base">
          For any questions regarding our use of cookies or local storage technologies, please contact us at:{" "}
          <a href="mailto:privacy@ridhzo.com" className="text-highlight underline underline-offset-4 font-medium">
            privacy@ridhzo.com
          </a>{" "}
          or{" "}
          <a href="mailto:hello@ridhzo.com" className="text-highlight underline underline-offset-4 font-medium">
            hello@ridhzo.com
          </a>
          .
        </p>
      </section>
    </PolicyLayout>
  );
}
