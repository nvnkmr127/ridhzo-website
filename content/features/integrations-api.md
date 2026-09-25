---
title: "Integrations, API & Webhooks"
slug: "integrations"
badge: "🔌 Connects to Your Tools"
summary: "Facebook, Instagram and Google Lead Ads, WhatsApp, Google Calendar, your email, Meta Conversions API, telephony, and a REST API with signed webhooks for everything else."
keyMetric: "Plug Ridhzo into Your Existing Stack"
order: 14
category: "platform"
---

# Integrations, API & Webhooks

## Built-in integrations
| Integration | What it does |
| :--- | :--- |
| **Facebook & Instagram Lead Ads** | Leads in seconds, form filtering, past-lead sync, automatic reconnect warnings |
| **Google Lead Form Ads** | Leads in seconds with campaign details |
| **WhatsApp** | One-tap personal WhatsApp, or the official WhatsApp Business API for automation |
| **Google Calendar** | Meetings and bookings sync to your calendar; Google Meet links |
| **Your email (SMTP)** | Send from your own address — Gmail, Google Workspace, Zoho, Outlook, Amazon SES or any SMTP |
| **Meta Conversions API** | Tell Meta which leads became qualified or won, so your ads find better leads |
| **Lead enrichment** | Fill in missing lead details from your data provider |
| **Inbound email** | Log email replies from leads on their timeline |
| **Telephony** | Missed call → instant WhatsApp, with Exotel, Knowlarity, Twilio and others |

## REST API
- Create API keys with **full** or **read-only** access.
- Create, read, update and delete leads; read follow-ups, meetings, statuses, templates, custom fields and users.
- Built-in rate limits and usage tracking per key.

## Outbound webhooks
Send real-time events to your other systems:
- **Lead created**
- **Lead status changed**
- **Lead became hot**
- **Lead stuck in a stage**

Every delivery is signed so your system can verify it came from Ridhzo. Failed deliveries retry automatically (up to 5 times) and can be replayed.

## Zapier, Make, Pabbly
Use the inbound webhook to send leads in, and outbound webhooks to push events out — to Google Sheets, Slack, your accounting software or ERP.

## Real examples
- When a lead is marked **Won**, a webhook creates the customer in the accounting system.
- An agency's landing-page builder sends every form fill to Ridhzo through the webhook.
- Meta Conversions API sends "qualified" signals back, and cost per quality lead drops.

*Coming soon: LinkedIn Lead Gen Forms and WhatsApp inbound as a lead source.*
