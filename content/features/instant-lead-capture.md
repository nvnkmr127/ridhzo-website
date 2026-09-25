---
title: "Instant Lead Capture from Every Channel"
slug: "lead-capture"
badge: "📥 Sub-Second Ingestion"
summary: "Facebook & Instagram Lead Ads, Google Lead Form Ads, hosted forms, website webhooks, CSV and API all feed one pipeline. Leads land in seconds, duplicates are caught and nothing is lost."
keyMetric: "<1s Webhook Processing Latency"
category: "capture"
order: 1
---

# Instant Lead Capture from Every Channel

## 1. Feature Overview
Ridhzo serves as a unified collection hub for all inbound marketing channels. Prospects captured via Facebook Lead Ads, Google Ads, hosted forms, iframe embeds, and API webhooks are parsed, validated, deduplicated, and placed into the CRM pipeline in less than 1 second.

---

## 2. Ingestion Channels & Configuration Options

### Channel 1: Meta / Facebook & Instagram Lead Ads
- **OAuth Page Authorization**: Connect your Facebook Page with one click; Ridhzo securely subscribes to real-time Leadgen webhooks.
- **Form-to-Field Mapping**:
  - Automatically matches default fields (`full_name`, `phone_number`, `email`).
  - Custom Question Mapper: Maps custom ad form questions (e.g., "Expected Purchase Timeline", "Preferred Unit Size") into Ridhzo custom fields.
- **HMAC Signature Verification**: Validates `x-hub-signature-256` on every incoming request to reject spoofed payloads.
- **Auto-Sync Ad Campaign Tags**: Automatically tags incoming leads with the ad name, campaign ID, and ad set for granular ROI attribution.

### Channel 2: Google Lead Form Ads
- **Search, YouTube, Performance Max & Display**: capture leads from Google's native lead form extension.
- **Key-verified webhooks**: every payload is checked against your secret key, and Google's test pings are handled correctly.
- **Automatic column mapping**: Google's field names map to the right Ridhzo fields.
- **GCLID attribution**: the Google Click ID is stored on each lead for offline conversion tracking and closed-loop ROAS.

### Channel 3: Hosted & Embeddable Web Forms
- **Hosted link** (`/f/<form-id>`) for bios, QR codes and WhatsApp.
- **One-line iframe embed** for WordPress, Webflow, Framer, Shopify or plain HTML.
- **Multi-step forms** with up to 10 steps and required-field validation.
- See the full [Web Forms](/features/web-forms) page.

### Channel 4: Website Custom Webhook
- **Unique Endpoint URL**: Generated per lead source (`/api/webhooks/[provider]?sourceId=...`).
- **Flexible JSON Payload Ingestion**: Compatible with Zapier, Make.com, Google Ads scripts, and custom server backends.
- **HMAC SHA-256 signatures** to reject spoofed submissions.
- **Rate limiting** (100 requests per minute per IP) and optional idempotency keys to block duplicate posts.
- Works with WordPress (Elementor, Contact Form 7, Gravity Forms), Webflow, Framer, Shopify and custom apps.

### Channel 5: CSV Import Wizard
- **Upload**: drag and drop a CSV. A sample template is included.
- **Map**: match columns to standard fields or your custom fields.
- **Dry run**: preview new records, errors and duplicates before anything is saved.
- **Commit**: import with a lead source and default owner applied.

### Channel 6: REST API
Create leads from any system with a scoped API key. See [API & Webhooks](/features/api-webhooks).

### Coming soon
- **LinkedIn Lead Gen Forms**: B2B lead sync from LinkedIn sponsored content.
- **WhatsApp inbound**: turn new WhatsApp conversations into leads automatically.

---

## Zero lead loss
- **Every payload is saved first**, then processed in a queue, so traffic spikes and restarts never drop a lead.
- **Expired token recovery**: if a Meta connection is revoked, missed leads are replayed once you reconnect.

---

## 3. Intelligent Deduplication Engine
- **Regex Digit Normalization**: Strips punctuation, spaces, and leading zeros to normalize phone numbers to international standard format.
- **Collision Rules**:
  - Match by exact E.164 phone number.
  - Match by case-insensitive trimmed email address.
- **Multi-Tenant Isolation**: Deduplication checks are strictly scoped to the tenant's `organizationId`, preventing cross-company collisions.
