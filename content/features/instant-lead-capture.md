---
title: "Instant Omnichannel Lead Ingestion"
slug: "lead-capture"
badge: "📥 Sub-Second Ingestion"
summary: "Capture leads from Facebook Ads, Web forms, Webhooks, and CSV with E.164 regex deduplication and custom field mapping."
keyMetric: "<1s Webhook Processing Latency"
---

# Instant Omnichannel Lead Ingestion

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

### Channel 2: Hosted & Embeddable Web Forms
- **Hosted Landing Form (`/f/[sourceId]`)**:
  - Standalone, mobile-optimized public page with your company branding.
  - Options: Form title, subheadline, custom submit button label, success message or external redirect URL.
- **Iframe Embed Snippet**:
  - Responsive HTML embed code snippet ready for WordPress, Webflow, Framer, Wix, or Shopify.
  - Cross-domain postMessage height auto-resizing.
- **Anti-Spam & Security Options**:
  - Built-in rate limiting per IP address.
  - Honeypot bot trap fields that drop automated spam silently without blocking real users.

### Channel 3: Generic Webhook Endpoints
- **Unique Endpoint URL**: Generated per lead source (`/api/webhooks/[provider]?sourceId=...`).
- **Flexible JSON Payload Ingestion**: Compatible with Zapier, Make.com, Google Ads scripts, and custom server backends.
- **Custom Header Authentication**: Optional API Bearer token verification.

### Channel 4: Bulk CSV Import
- **Upload Formats**: `.csv`, comma or semicolon delimited.
- **Column Auto-Detection**: Matches headers like "First Name", "Client Mobile", "Email Address".
- **Deduplication Strategy Options**:
  - *Skip Duplicates*: Retain existing record, ignore duplicate CSV row.
  - *Merge & Update*: Update empty fields on existing lead without overriding existing data.
  - *Overwrite*: Replace existing record with newer CSV data.
- **Batch Processing**: Background BullMQ worker imports files up to 50,000 rows without browser timeouts.

---

## 3. Intelligent Deduplication Engine
- **Regex Digit Normalization**: Strips punctuation, spaces, and leading zeros to normalize phone numbers to international standard format.
- **Collision Rules**:
  - Match by exact E.164 phone number.
  - Match by case-insensitive trimmed email address.
- **Multi-Tenant Isolation**: Deduplication checks are strictly scoped to the tenant's `organizationId`, preventing cross-company collisions.
