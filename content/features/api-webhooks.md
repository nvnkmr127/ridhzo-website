---
title: "REST API & Outbound Webhooks"
slug: "api-webhooks"
badge: "🔌 Developer-Friendly"
summary: "Connect Ridhzo to your ERP, data warehouse or custom app. Use scoped REST API keys to read and create leads, and signed webhooks to receive lead events, with retries and a dead-letter queue."
keyMetric: "600 req/min per Key · Signed Webhooks"
category: "platform"
order: 2
---

# REST API & Outbound Webhooks

Ridhzo fits into the tools you already use. Send leads in from anywhere and get events out to your own systems as they happen.

---

## REST API (v1)
| Endpoint | Purpose |
| :--- | :--- |
| `GET /api/v1/leads` | List and query leads |
| `POST /api/v1/leads` | Create a lead from any system |

### Secure keys
- **Shown once**: the secret is displayed only when the key is created and stored as a one-way hash.
- **Scoped access**: choose **Read-only** for dashboards and auditors, or **Full** for syncing tools.
- **Rate limiting**: 600 requests per 60 seconds per key protects you from runaway scripts.
- **Last-used tracking** shows which integrations are active.
- **Instant revoke**: cut off a misbehaving integration in one click. The audit history is kept.

---

## Outbound webhooks
Subscribe your own HTTPS endpoints to lead events:

| Event | Fires when |
| :--- | :--- |
| `lead.created` | A new lead is captured from any source |
| `lead.status_changed` | A lead moves stage, including the old and new status |

### Reliable delivery
- **Every delivery is recorded** before it's sent, so an outage shows up as a failed job rather than a lost event.
- **Automatic retries**: temporary failures retry up to 5 times with exponential backoff.
- **Dead-letter queue**: permanent failures are parked for review, with **one-click re-send** or purge.

### Secure by default
- **HMAC-SHA256 signatures** in the `X-Ridhzo-Signature` header on every payload
- **SSRF protection**: private networks, loopback and cloud metadata addresses are blocked

---

## Inbound webhooks
Send leads from any website, landing page builder or backend with a signed [website webhook](/features/lead-capture). It includes rate limiting and optional duplicate protection.

## Popular uses
- Sync won deals into your ERP or billing system
- Stream lead events into a data warehouse or BI tool
- Push leads from a custom app or partner portal
- Notify an internal Slack bot when a big deal changes stage
