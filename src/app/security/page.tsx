import { pageMetadata } from "@/lib/metadata";
import { PolicyLayout } from "@/components/marketing/PolicyLayout";
import { ShieldCheck, Lock, Database, Key, Server, Cpu, AlertTriangle } from "lucide-react";

export const metadata = pageMetadata({
  title: "Security & Data Isolation",
  description:
    "How Ridhzo protects your leads: workspace isolation on every query, AES-256-GCM encrypted secrets, HTTPS everywhere, signed webhooks, role-based access and a 30-day recycle bin.",
  path: "/security",
});

const SECTIONS = [
  { id: "principles", title: "1. Security Design Principles" },
  { id: "tenant-isolation", title: "2. Workspace Isolation" },
  { id: "encryption", title: "3. Encryption" },
  { id: "webhook-security", title: "4. Webhook Integrity & HMAC Signatures" },
  { id: "pwa-offline", title: "5. Mobile Apps & Offline Data" },
  { id: "rbac", title: "6. Role-Based Access Control (RBAC)" },
  { id: "backups-dr", title: "7. Deletion, Retention & Recovery" },
  { id: "vulnerability-disclosure", title: "8. Vulnerability Reporting" },
];

export default function SecurityPolicyPage() {
  return (
    <PolicyLayout
      title="Security &amp; Data Isolation"
      description="Sales leads represent your company's most sensitive revenue pipeline. We build security into every layer of Ridhzo — from workspace-scoped queries to signed webhook validation."
      lastUpdated="September 30, 2026"
      effectiveDate="September 30, 2026"
      version="2.1"
      sections={SECTIONS}
      activePath="/security"
    >
      {/* 01. Principles */}
      <section id="principles" className="scroll-mt-24 space-y-4">
        <h2 className="flex items-center gap-3 text-2xl font-semibold tracking-[-0.02em] text-white">
          <ShieldCheck className="h-6 w-6 shrink-0 text-highlight" />
          <span>1. Security Design Principles</span>
        </h2>
        <p>
          Ridhzo is designed on the principle of <strong>least privilege and strict separation between workspaces</strong>.
          Because the platform handles inbound enquiries and deal pipelines, every layer is built to prevent
          unauthorized access and data leakage:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <div className="p-4 rounded-2xl border border-white/12 bg-white/[0.04] space-y-1.5">
            <h3 className="text-xs font-semibold text-white uppercase tracking-wider">Tenant Partitioning</h3>
            <p className="text-sm text-white/65 leading-relaxed">
              Every query is scoped to your workspace, so one business can never see another&apos;s leads.
            </p>
          </div>
          <div className="p-4 rounded-2xl border border-white/12 bg-white/[0.04] space-y-1.5">
            <h3 className="text-xs font-semibold text-white uppercase tracking-wider">Encrypted Secrets</h3>
            <p className="text-sm text-white/65 leading-relaxed">
              Email passwords, integration tokens and webhook secrets are encrypted with AES-256-GCM before they are
              stored. All traffic uses HTTPS.
            </p>
          </div>
          <div className="p-4 rounded-2xl border border-white/12 bg-white/[0.04] space-y-1.5">
            <h3 className="text-xs font-semibold text-white uppercase tracking-wider">Auditability</h3>
            <p className="text-sm text-white/65 leading-relaxed">
              An audit log records who changed settings, roles and users, who deleted or merged leads, and who created
              API keys.
            </p>
          </div>
        </div>
      </section>

      {/* 02. Workspace isolation */}
      <section id="tenant-isolation" className="scroll-mt-24 space-y-4">
        <h2 className="flex items-center gap-3 text-2xl font-semibold tracking-[-0.02em] text-white">
          <Database className="h-6 w-6 shrink-0 text-highlight" />
          <span>2. Workspace Isolation</span>
        </h2>
        <p>Ridhzo runs on PostgreSQL, with workspace boundaries enforced in the application on every request:</p>
        <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base">
          <li>
            <strong>Workspace scoping:</strong> Every lead, note, custom field, pipeline stage and sequence belongs to
            exactly one workspace, and every query is limited to the signed-in person&apos;s workspace.
          </li>
          <li>
            <strong>Parameterized queries:</strong> Database queries use typed, parameterized statements. Raw user
            strings are never concatenated into SQL, which removes the SQL-injection attack surface.
          </li>
          <li>
            <strong>Permissions checked on the server:</strong> What a person can see or do is enforced by the server on
            every request — not just hidden in the interface. Sales reps can open only the leads assigned to them.
          </li>
        </ul>
      </section>

      {/* 03. Encryption */}
      <section id="encryption" className="scroll-mt-24 space-y-4">
        <h2 className="flex items-center gap-3 text-2xl font-semibold tracking-[-0.02em] text-white">
          <Lock className="h-6 w-6 shrink-0 text-highlight" />
          <span>3. Encryption</span>
        </h2>
        <div className="space-y-4">
          <div className="border border-white/12 rounded-2xl p-5 bg-white/[0.04] space-y-2">
            <div className="flex items-center gap-2 text-sm font-semibold text-white">
              <Key className="h-4 w-4 text-highlight" />
              <span>Sensitive secrets: AES-256-GCM</span>
            </div>
            <p className="text-sm sm:text-base text-white/65 leading-relaxed">
              Credentials such as email (SMTP) passwords and integration access tokens are encrypted at the application
              level with <strong>AES-256-GCM</strong> before they are saved, using a fresh random value for every
              encryption. A tampered value fails to decrypt. API keys are stored hashed, so they can&apos;t be read
              back.
            </p>
          </div>

          <div className="border border-white/12 rounded-2xl p-5 bg-white/[0.04] space-y-2">
            <div className="flex items-center gap-2 text-sm font-semibold text-white">
              <Server className="h-4 w-4 text-highlight" />
              <span>In transit: HTTPS</span>
            </div>
            <p className="text-sm sm:text-base text-white/65 leading-relaxed">
              Traffic between your browser or phone and Ridhzo is encrypted with HTTPS (TLS). Account passwords are
              stored as hashes, never in plain text.
            </p>
          </div>
        </div>
      </section>

      {/* 04. Webhook Integrity */}
      <section id="webhook-security" className="scroll-mt-24 space-y-4">
        <h2 className="flex items-center gap-3 text-2xl font-semibold tracking-[-0.02em] text-white">
          <Cpu className="h-6 w-6 shrink-0 text-highlight" />
          <span>4. Webhook Integrity &amp; HMAC Verification</span>
        </h2>
        <p>
          Because leads stream in from external advertising networks, we verify the authenticity of incoming requests
          before parsing them:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base">
          <li>
            <strong>Meta Facebook Lead Ads:</strong> We inspect the <code>X-Hub-Signature-256</code> header on every
            inbound webhook, verifying the SHA-256 HMAC payload against your App Secret. Payloads with invalid or missing
            signatures are rejected before anything is saved.
          </li>
          <li>
            <strong>Google Lead Form and website webhooks:</strong> Inbound requests are matched against the secret key
            configured for that source. Optional HMAC signatures are supported for custom webhooks.
          </li>
          <li>
            <strong>Outbound webhooks are signed</strong> (HMAC-SHA256), so your systems can verify a delivery came from
            Ridhzo. Public forms and webhooks are rate-limited against spam.
          </li>
          <li>
            <strong>Duplicate protection:</strong> Retried deliveries don&apos;t create duplicate leads.
          </li>
        </ul>
      </section>

      {/* 05. Mobile apps & offline */}
      <section id="pwa-offline" className="scroll-mt-24 space-y-4">
        <h2 className="flex items-center gap-3 text-2xl font-semibold tracking-[-0.02em] text-white">
          <Lock className="h-6 w-6 shrink-0 text-highlight" />
          <span>5. Mobile Apps &amp; Offline Data</span>
        </h2>
        <p>
          Ridhzo lets reps in the field add new leads even without a network connection. How that data is handled
          depends on how the app is installed:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-sm sm:text-base">
          <li>
            <strong>Web app (PWA):</strong> Offline mode holds only leads a rep has just added. Existing leads are not
            downloaded for offline use. Pending leads are kept in the browser&apos;s storage for the Ridhzo app,
            separated per workspace and not readable by other websites.
          </li>
          <li>
            <strong>Android app:</strong> To work offline and to identify callers, the app keeps a copy of the leads that
            person is allowed to open on the phone. We recommend a screen lock on work phones, and a lost phone&apos;s
            access can be cut off by deactivating the user.
          </li>
          <li>
            <strong>Call logging stays private:</strong> The Android app matches its call log against your leads&apos;
            numbers and sends only those calls. Personal calls never leave the phone, and nothing is read until the rep
            grants the call-log permission.
          </li>
          <li>
            <strong>Normal checks on sync:</strong> When the connection returns, each offline lead goes through the same
            signed-in, permission-checked path as any other new lead — including duplicate detection.
          </li>
        </ul>
      </section>

      {/* 06. RBAC */}
      <section id="rbac" className="scroll-mt-24 space-y-4">
        <h2 className="flex items-center gap-3 text-2xl font-semibold tracking-[-0.02em] text-white">
          <ShieldCheck className="h-6 w-6 shrink-0 text-highlight" />
          <span>6. Role-Based Access Control (RBAC)</span>
        </h2>
        <p>
          Every person has a role. Ridhzo ships an Admin and a Member role, and you can create custom roles from 14
          separate permissions:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[500px] text-left text-xs border border-white/12 mt-2">
            <thead className="bg-white/[0.08]/50 text-white border-b border-white/12">
              <tr>
                <th className="p-3">Role</th>
                <th className="p-3">Scope of Access</th>
                <th className="p-3">Billing &amp; Settings</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-white/65">
              <tr>
                <td className="p-3 font-semibold text-white">Admin</td>
                <td className="p-3">Everything: all leads, team members, roles, integrations, webhooks, API keys, audit log</td>
                <td className="p-3">Full (billing, settings, permanent lead deletion)</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-white">Member (sales rep)</td>
                <td className="p-3">Their own assigned leads only: create, edit, call, message, change status</td>
                <td className="p-3">None by default (cannot delete or purge leads, or change settings)</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-white">Custom roles</td>
                <td className="p-3">Any combination of the 14 permissions — for example a read-only Viewer for a partner</td>
                <td className="p-3">Only what the role is explicitly granted</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm sm:text-base">
          Someone who can invite people but cannot manage roles is not able to hand out a role with more access than they
          hold themselves.
        </p>
      </section>

      {/* 07. Deletion, retention & recovery */}
      <section id="backups-dr" className="scroll-mt-24 space-y-4">
        <h2 className="flex items-center gap-3 text-2xl font-semibold tracking-[-0.02em] text-white">
          <Server className="h-6 w-6 shrink-0 text-highlight" />
          <span>7. Deletion, Retention &amp; Recovery</span>
        </h2>
        <p>You stay in control of your data, including when it leaves Ridhzo:</p>
        <ul className="list-disc pl-5 space-y-1.5 text-sm sm:text-base">
          <li>
            <strong>30-day recycle bin:</strong> Deleted leads can be restored for 30 days, guarding against accidental
            deletion.
          </li>
          <li>
            <strong>Permanent deletion:</strong> People with the purge permission can erase leads for good, and a
            lead&apos;s data can be exported or erased on request.
          </li>
          <li>
            <strong>Export:</strong> Leads can be exported to CSV by people with permission.
          </li>
          <li>
            <strong>Audit trail:</strong> Deletions, merges and permission changes are recorded with who did them and
            when.
          </li>
        </ul>
      </section>

      {/* 08. Vulnerability Reporting */}
      <section id="vulnerability-disclosure" className="scroll-mt-24 space-y-4">
        <h2 className="flex items-center gap-3 text-2xl font-semibold tracking-[-0.02em] text-white">
          <AlertTriangle className="h-6 w-6 shrink-0 text-highlight" />
          <span>8. Responsible Vulnerability Disclosure</span>
        </h2>
        <p>
          We welcome collaboration with independent security researchers to uncover potential flaws. If you discover a
          security vulnerability in Ridhzo:
        </p>
        <div className="rounded-2xl border border-white/12 bg-white/[0.04] p-5 space-y-2 text-sm sm:text-base">
          <p className="font-semibold text-white">Vulnerability Disclosure Protocol</p>
          <p className="text-white/65">
            Please report all potential security issues directly to{" "}
            <a href="mailto:security@ridhzo.com" className="text-highlight font-semibold underline underline-offset-4">
              security@ridhzo.com
            </a>{" "}
            with reproduction steps and proof-of-concept logs.
          </p>
          <ul className="list-disc pl-5 space-y-1 text-white/65 pt-1">
            <li>We acknowledge verified reports within 24 hours.</li>
            <li>We commit to not pursuing legal action against researchers acting in good faith.</li>
            <li>Please allow reasonable time for remediation before public disclosure.</li>
          </ul>
        </div>
      </section>
    </PolicyLayout>
  );
}
