---
title: "Lead Intelligence: Meta CAPI, Enrichment & Email Replies"
slug: "lead-intelligence"
badge: "🧠 Smarter Ads, Richer Leads"
summary: "Send CRM outcomes back to Meta so your ads find more buyers, enrich new leads automatically, and log prospect email replies on the timeline, where AI reads the intent."
keyMetric: "Train Meta Ads on Won Deals"
category: "platform"
order: 3
---

# Lead Intelligence: Meta CAPI, Enrichment & Email Replies

Three background features that make every lead more useful, and every rupee of ad spend work harder.

---

## 1. Meta Conversions API & Conversion Leads
Meta can only optimise for what it can see. If it only sees form fills, it keeps finding people who fill forms, not people who buy.

- **Server-side Lead events** fire when a lead is created. Customer details are **SHA-256 hashed** before they leave Ridhzo.
- **Purchase events** fire when a deal is marked **Won**, with the deal value and currency.
- **Conversion Leads postbacks** send CRM stages like *contacted → qualified → converted* back to Meta for leads from Lead Ads, linked to the exact ad and campaign.
- **Custom stage mapping**: choose which of your stages count as which Meta milestone.
- **Deduplication** against your browser Pixel, so conversions aren't counted twice.
- **Send test event** to check the connection in Meta Events Manager before you spend.

**The result:** Meta learns from your qualified and won leads, not just raw form fills.

---

## 2. Automatic lead enrichment
Connect your data provider (Clearbit, Apollo, ZoomInfo or your own service). When a lead arrives, Ridhzo looks up company and contact details in the background.
- Lead capture is **never slowed down**: enrichment runs separately and retries automatically.
- Provider responses are stored as **evidence**, separate from what your reps typed.
- Credentials are **encrypted at rest**.

---

## 3. Email replies on the timeline
Get a secure inbound URL for your email provider (Postmark, Mailgun, Resend or SendGrid). When a prospect replies:
1. The reply is **added to the lead's timeline**.
2. Any active [drip sequence](/features/sequences) **stops automatically**, so you don't send an automated follow-up after they've replied.
3. **AI reads the reply** and tags its intent (*interested*, *scheduling*, *question*, *not interested*) and sentiment, so reps know who to call first.

Rotate the URL at any time; the old one stops working immediately.
