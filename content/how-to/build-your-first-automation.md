---
title: "How to Build Your First Automation (Instant WhatsApp Welcome + Round-Robin)"
slug: "build-your-first-automation"
summary: "Set up a no-code rule that assigns every new Meta lead to the rep with the most free capacity, sends a WhatsApp welcome and books tomorrow's follow-up. It takes about five minutes."
badge: "⚙️ Automation Guide"
date: "2026-09-24"
author: "Ridhzo Team"
order: 3
---

# How to Build Your First Automation

This guide builds the most useful workflow in Ridhzo: **zero-touch speed-to-lead**. When a lead arrives from your ads, it's assigned, greeted on WhatsApp and scheduled for a follow-up, all within seconds.

## Before you start
- You're an admin, or your role includes the **Manage automations** permission.
- At least one lead source is connected ([Meta guide](/how-to/connect-meta-lead-ads)).
- For automated WhatsApp sends, a WhatsApp Business (Cloud API) number and an approved `welcome` template are set up.

## Step 1: Start from a template
Go to **Automations** and pick **Welcome WhatsApp on new lead**. The trigger and first action are filled in for you. You can also click **Create automation** to start from scratch.

## Step 2: WHEN (the trigger)
Keep the trigger as **Lead created**. It fires for every new lead from any source.

## Step 3: IF (narrow it down)
Add a condition so the rule only runs for paid-ad leads:
- **Source** → *Facebook Ads* (or your Meta source name)

Optional: add `customData.budget greater than 50000` in a separate rule to route big-ticket leads to a senior closer.

## Step 4: THEN (the actions, in order)
1. **Round-robin balance**: set a max capacity (e.g. 25 open leads per rep). Reps at capacity are skipped.
2. **Send WhatsApp**: template `welcome`, with `{{name}}` as the variable.
3. **Schedule follow-up**: *"Discovery call"*, due in **1 day**.
4. *(Optional)* **Enroll in sequence**: choose your nurture track ([how to build one](/how-to/create-a-whatsapp-drip-sequence)).

## Step 5: Save and switch it on
Save, then check that the toggle on the automation card is **on**. You can pause it with one tap at any time.

## Step 6: Test it
Submit a test lead from your ad form or a [web form](/features/lead-capture). Within seconds you should see:
- the lead assigned to a rep, who gets a push alert
- the WhatsApp welcome on the lead's timeline
- tomorrow's follow-up in **Follow-ups**

## Troubleshooting
- **Nothing happened**: check that the automation is switched on and the source condition matches the lead's source.
- **No WhatsApp sent**: check that your WhatsApp Business number is connected and the template name matches exactly. Without the API, reps can still use 1-tap personal WhatsApp.
- **Everything went to one rep**: other reps may be at capacity or inactive. Raise the max capacity or check the team list in **Settings → Users & Roles**.

Next: [Create a WhatsApp drip sequence](/how-to/create-a-whatsapp-drip-sequence) · [All about automations](/features/automations)
