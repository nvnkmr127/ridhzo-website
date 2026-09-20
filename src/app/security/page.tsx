import type { Metadata } from "next";
import { PolicyLayout } from "@/components/marketing/PolicyLayout";
import { ShieldCheck, Lock, Database, Key, Server, Cpu, AlertTriangle, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Security & Data Isolation Architecture — Ridhzo CRM",
  description:
    "Explore Ridhzo's security architecture: tenant-isolated Postgres, AES-256 encryption at rest, TLS 1.3 in transit, SHA-256 HMAC webhook verification, and RBAC.",
  alternates: {
    canonical: "https://ridhzo.com/security",
  },
};

const SECTIONS = [
  { id: "principles", title: "1. Security Design Principles" },
  { id: "tenant-isolation", title: "2. Multi-Tenant Database Isolation" },
  { id: "encryption", title: "3. Cryptographic Standards (Rest & Transit)" },
  { id: "webhook-security", title: "4. Webhook Integrity & HMAC Signatures" },
  { id: "pwa-offline", title: "5. Mobile PWA Offline Security" },
  { id: "rbac", title: "6. Role-Based Access Control (RBAC)" },
  { id: "backups-dr", title: "7. Backups, Availability & Disaster Recovery" },
  { id: "vulnerability-disclosure", title: "8. Vulnerability Reporting" },
];

export default function SecurityPolicyPage() {
  return (
    <PolicyLayout
      title="Security &amp; Data Isolation"
      description="Sales leads represent your company's most sensitive revenue pipeline. We engineer security into every layer of Ridhzo—from row-level database partitioning to cryptographic webhook validation."
      lastUpdated="September 20, 2026"
      effectiveDate="September 20, 2026"
      version="2.0"
      sections={SECTIONS}
      activePath="/security"
    >
      {/* 01. Principles */}
      <section id="principles" className="scroll-mt-24 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground flex items-center gap-2.5">
          <ShieldCheck className="h-6 w-6 text-foreground" />
          <span>1. Security Design Principles</span>
        </h2>
        <p>
          Ridhzo is designed on the principle of <strong>least privilege and zero cross-tenant trust</strong>. Because
          our platform handles immediate inbound phone inquiries and deal pipelines, our architecture is hardened
          against unauthorized access, eavesdropping, and data leakage:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <div className="p-4 rounded-xl border border-border bg-card space-y-1.5">
            <h3 className="text-xs font-bold text-foreground uppercase tracking-wider">Tenant Partitioning</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Strict isolation ensures no tenant query can ever touch another organization&apos;s lead records.
            </p>
          </div>
          <div className="p-4 rounded-xl border border-border bg-card space-y-1.5">
            <h3 className="text-xs font-bold text-foreground uppercase tracking-wider">End-to-End Encryption</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              AES-256 for all stored data volumes and TLS 1.3 with HSTS for all network transmissions.
            </p>
          </div>
          <div className="p-4 rounded-xl border border-border bg-card space-y-1.5">
            <h3 className="text-xs font-bold text-foreground uppercase tracking-wider">Auditability</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Comprehensive immutable audit logging for status shifts, user logins, and data exports.
            </p>
          </div>
        </div>
      </section>

      {/* 02. Multi-Tenant Database Isolation */}
      <section id="tenant-isolation" className="scroll-mt-24 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground flex items-center gap-2.5">
          <Database className="h-6 w-6 text-foreground" />
          <span>2. Multi-Tenant Database Isolation</span>
        </h2>
        <p>
          Ridhzo runs on enterprise-grade PostgreSQL with rigorous application-level and database-level boundary
          enforcement:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
          <li>
            <strong>Mandatory Tenant Scoping:</strong> Every relational entity (leads, notes, custom fields, pipeline
            stages, sequence automations) incorporates a cryptographically unique <code>tenant_id</code> foreign key.
          </li>
          <li>
            <strong>Parameterized ORM &amp; SQL Queries:</strong> All database queries are executed using strictly
            typed, parameterized statements. Raw user strings are never concatenated into SQL commands, eliminating
            SQL injection attack surfaces.
          </li>
          <li>
            <strong>Connection Pool Separation:</strong> Database connection pools validate workspace tenant context
            prior to executing mutations, preventing multi-tenant crosstalk even during peak traffic spikes.
          </li>
        </ul>
      </section>

      {/* 03. Cryptographic Standards */}
      <section id="encryption" className="scroll-mt-24 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground flex items-center gap-2.5">
          <Lock className="h-6 w-6 text-foreground" />
          <span>3. Cryptographic Standards (Rest &amp; Transit)</span>
        </h2>
        <div className="space-y-4">
          <div className="border border-border rounded-xl p-5 bg-card space-y-2">
            <div className="flex items-center gap-2 text-sm font-bold text-foreground">
              <Key className="h-4 w-4 text-foreground" />
              <span>Encryption at Rest (AES-256)</span>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              All physical storage volumes, database tablespaces, object caches, and snapshot backups are encrypted
              using <strong>AES-256 GCM</strong>. Third-party integration credentials (such as Meta Page Access Tokens
              and Google Ads Webhook Secrets) are encrypted at the application tier before persistence using unique
              per-tenant salt vectors.
            </p>
          </div>

          <div className="border border-border rounded-xl p-5 bg-card space-y-2">
            <div className="flex items-center gap-2 text-sm font-bold text-foreground">
              <Server className="h-4 w-4 text-foreground" />
              <span>Encryption in Transit (TLS 1.3)</span>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              All client-to-server and server-to-server traffic is encrypted using <strong>TLS 1.3</strong> (with
              fallback to TLS 1.2 for legacy clients). We enforce HTTP Strict Transport Security (HSTS) with preloading,
              preventing protocol downgrade attacks and cookie interception.
            </p>
          </div>
        </div>
      </section>

      {/* 04. Webhook Integrity */}
      <section id="webhook-security" className="scroll-mt-24 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground flex items-center gap-2.5">
          <Cpu className="h-6 w-6 text-foreground" />
          <span>4. Webhook Integrity &amp; HMAC Verification</span>
        </h2>
        <p>
          Because leads stream in from external advertising networks, we verify the authenticity of every incoming HTTP
          POST request before parsing:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
          <li>
            <strong>Meta Facebook Lead Ads:</strong> We inspect the <code>X-Hub-Signature-256</code> header on every
            inbound webhook, verifying the SHA-256 HMAC payload against your App Secret. Payloads with invalid or missing
            signatures are rejected with an HTTP 403 response before database ingestion.
          </li>
          <li>
            <strong>Google Lead Form Webhooks:</strong> Inbound requests are matched against your configured secret key
            in constant time (preventing timing attacks).
          </li>
          <li>
            <strong>Idempotency &amp; Replay Protection:</strong> Webhook events are tagged with unique event IDs and
            cached for 48 hours to prevent duplicate lead creation caused by network retry loops.
          </li>
        </ul>
      </section>

      {/* 05. Mobile PWA Offline Security */}
      <section id="pwa-offline" className="scroll-mt-24 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground flex items-center gap-2.5">
          <Lock className="h-6 w-6 text-foreground" />
          <span>5. Mobile PWA Offline Security</span>
        </h2>
        <p>
          Ridhzo is designed for reps in the field with patchy network connectivity. Our offline sync outbox implements
          rigorous device-level safeguards:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
          <li>
            <strong>Origin-Bound IndexedDB:</strong> Offline lead updates are stored exclusively within the browser&apos;s
            origin-isolated IndexedDB storage sandbox, inaccessible to other web applications or browser tabs.
          </li>
          <li>
            <strong>Session Expiry Invalidation:</strong> If an agent&apos;s JWT authentication session is revoked or
            expired on the server, the offline cache is wiped immediately upon the next network heartbeat.
          </li>
          <li>
            <strong>Conflict Resolution Locks:</strong> Offline edits sync using optimistic concurrency control to
            prevent data overwrite collisions when multiple reps update lead records simultaneously.
          </li>
        </ul>
      </section>

      {/* 06. RBAC */}
      <section id="rbac" className="scroll-mt-24 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground flex items-center gap-2.5">
          <ShieldCheck className="h-6 w-6 text-foreground" />
          <span>6. Role-Based Access Control (RBAC)</span>
        </h2>
        <p>Workspaces enforce granular permissions across three distinct administrative tiers:</p>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border border-border mt-2">
            <thead className="bg-secondary/50 text-foreground border-b border-border">
              <tr>
                <th className="p-3">Role</th>
                <th className="p-3">Scope of Access</th>
                <th className="p-3">Export &amp; Billing Authority</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-muted-foreground">
              <tr>
                <td className="p-3 font-bold text-foreground">Workspace Admin</td>
                <td className="p-3">Full control: All leads, team members, integrations, webhooks, audit logs</td>
                <td className="p-3">Full (Plan upgrade, CSV bulk export, workspace deletion)</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-foreground">Sales Manager</td>
                <td className="p-3">Team pipeline visibility, round-robin assignments, performance metrics</td>
                <td className="p-3">Restricted (Team CSV export only; no billing access)</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-foreground">Sales Agent</td>
                <td className="p-3">Assigned leads only, 1-tap WhatsApp messaging, personal follow-up radar</td>
                <td className="p-3">None (Cannot export full database or view other reps&apos; leads)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 07. Backups & Disaster Recovery */}
      <section id="backups-dr" className="scroll-mt-24 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground flex items-center gap-2.5">
          <Server className="h-6 w-6 text-foreground" />
          <span>7. Backups &amp; Disaster Recovery</span>
        </h2>
        <p>We maintain comprehensive business continuity protocols to safeguard against data loss:</p>
        <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
          <li>
            <strong>Continuous Point-in-Time Recovery (PITR):</strong> Write-ahead logs (WAL) are streamed continuously,
            enabling database recovery to any individual second within the preceding 30 days.
          </li>
          <li>
            <strong>Automated Daily Snapshots:</strong> Encrypted secondary backups are replicated across multiple
            geographic availability zones (Multi-AZ).
          </li>
          <li>
            <strong>SLA Objectives:</strong> Recovery Point Objective (RPO) &lt; 5 minutes; Recovery Time Objective
            (RTO) &lt; 1 hour.
          </li>
        </ul>
      </section>

      {/* 08. Vulnerability Reporting */}
      <section id="vulnerability-disclosure" className="scroll-mt-24 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground flex items-center gap-2.5">
          <AlertTriangle className="h-6 w-6 text-foreground" />
          <span>8. Responsible Vulnerability Disclosure</span>
        </h2>
        <p>
          We welcome collaboration with independent security researchers to uncover potential flaws. If you discover a
          security vulnerability in Ridhzo:
        </p>
        <div className="rounded-xl border border-border bg-card p-5 space-y-2 text-xs sm:text-sm">
          <p className="font-semibold text-foreground">Vulnerability Disclosure Protocol</p>
          <p className="text-muted-foreground">
            Please report all potential security issues directly to{" "}
            <a href="mailto:security@ridhzo.com" className="text-foreground font-semibold underline">
              security@ridhzo.com
            </a>{" "}
            with reproduction steps and proof-of-concept logs.
          </p>
          <ul className="list-disc pl-5 space-y-1 text-muted-foreground pt-1">
            <li>We acknowledge verified reports within 24 hours.</li>
            <li>We commit to not pursuing legal action against researchers acting in good faith.</li>
            <li>Please allow reasonable time for remediation before public disclosure.</li>
          </ul>
        </div>
      </section>
    </PolicyLayout>
  );
}
