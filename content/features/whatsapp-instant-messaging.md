---
title: "1-Tap WhatsApp Follow-ups & Messaging"
slug: "whatsapp"
badge: "⚡ 10-Second Response Time"
summary: "Engage leads instantly without saving phone contacts. Complete options, templates, dual-mode engine, and compliance guards."
keyMetric: "3x Higher Conversion vs Delayed Calls"
---

# 1-Tap WhatsApp Follow-ups & Messaging

## 1. Feature Overview
The WhatsApp engine in Ridhzo is built for zero-friction closing. Sales reps never waste time saving prospects to their phone address book or typing repetitive greetings. In one tap, Ridhzo generates customized messages with live deal context and launches WhatsApp.

---

## 2. Dual-Engine Architecture & Options

### Mode A: Native Deep Link Mode (`wa.me`)
- **How It Works**: Generates encrypted browser and mobile universal links (`https://wa.me/<phone>?text=<encoded_body>`).
- **Zero API Requirements**: No Meta Business verification, no BSP contracts, and no per-message fees.
- **Client Fallback**: Intelligently switches between WhatsApp Desktop, WhatsApp Mobile App, and WhatsApp Web depending on the user's operating system.
- **Country Code Handling**: Automatically normalizes raw numbers (e.g., `9876543210` → `+919876543210`) based on the organization's default country code setting.

### Mode B: Automated Business API Mode (Watxio / Meta Cloud)
- **Automated Welcome Dispatch**: Triggered instantly via BullMQ background jobs on `lead.created`.
- **24-Hour Customer Care Window**: Real-time counter tracks the 24-hour Meta service window. Warnings display when 2 hours remain.
- **Delivery Receipts**: Tracks real-time status: `Sent`, `Delivered`, `Read`, `Failed`.
- **Inbound Reply Ingestion**: Webhook receiver (`/api/webhooks/whatsapp`) matches inbound messages to existing leads and logs them in the conversation feed.

---

## 3. Template Management & Personalization Options

### Template Configuration Fields:
- **Template Name**: Internal identifier (e.g., "Luxury Villa Welcome", "Post-Site Visit Quote").
- **Category**:
  - `Welcome & First Contact`
  - `Follow-up / Re-engagement`
  - `Meeting & Site Visit Confirmation`
  - `Pricing & Proposal Delivery`
  - `Payment Reminder`
- **Language**: English, Hindi, and multi-lingual UTF-8 support.
- **Dynamic Context Variables**:
  - `{{name}}`: Full name or first name of prospect.
  - `{{phone}}`: Normalized mobile number.
  - `{{company}}`: Prospect's company name.
  - `{{interest}}`: Project, product, or campaign tag.
  - `{{assigned_rep}}`: Name of the assigned closer.
  - `{{workspace_name}}`: Name of your company/agency.
  - `{{custom_field_name}}`: Any custom field defined on the lead.
- **Attachments**: PDF brochures, pricing sheets, and image preview links.

---

## 4. UI Controls & Rep Actions
- **Quick Action Bar**: Positioned directly on the lead card in both the Leads List and Kanban Board.
- **Template Selector Modal**: Click "1-Tap WhatsApp" to choose between pre-configured templates or edit on the fly.
- **Activity Log Audit**: Each outbound click creates an `activity` record: *"WhatsApp initiated by Sarah Miller using template: Site Visit Booking"*.
- **Direct Phone Link Fallback**: Accompanied by 1-tap `tel:` and `mailto:` controls.
