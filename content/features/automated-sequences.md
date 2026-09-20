---
title: "Automations & Scheduled Sequences"
slug: "automations"
badge: "⚙️ Automated Follow-up Engine"
summary: "Trigger-condition-action rules engine, Redis BullMQ delayed jobs, and automated follow-up cadences."
keyMetric: "Zero Leads Slip Through the Cracks"
---

# Automations & Scheduled Sequences

## 1. Feature Overview
The Ridhzo Automation Engine executes background actions whenever specific events occur in your sales cycle. From sending instant welcome WhatsApp templates to scheduling follow-up reminders and updating tags, repetitious tasks run hands-free.

---

## 2. Rule Builder: Triggers, Conditions & Actions

### 1. Available Event Triggers:
- lead.created: Fires the millisecond a lead is saved from any source.
- lead.assigned: Fires when a lead receives an owner or is reassigned.
- lead.status_changed: Fires when a deal changes stage (e.g., moved to Proposal).
- lead.tag_added: Fires when a specific tag (e.g., "High Budget") is attached.
- sla.breached: Fires when first-contact SLA threshold is exceeded.

### 2. Condition Filters:
- Filter by Lead Source (e.g., Facebook Lead Ads only).
- Filter by Deal Value / Budget threshold.
- Filter by Current Stage.
- Filter by Assigned Team or Agent.
- Filter by Custom JSONB Attributes.

### 3. Executable Actions:
- assign_lead: Route to a designated agent or team round-robin.
- change_status: Advance or change lead stage.
- add_tag / remove_tag: Apply or clear organization tags.
- create_task: Schedule a mandatory task for the lead owner.
- send_whatsapp_template: Dispatch automated WhatsApp greeting via Watxio / Meta Cloud API.
- trigger_webhook: Dispatch outbound HTTP POST to external CRM or analytics endpoint.

---

## 3. Scheduled Sequences & BullMQ Delayed Jobs
- **Multi-Day Drip Cadences**: Configure multi-step follow-ups (e.g., Day 1: Welcome WhatsApp → Day 3: Case Study → Day 7: Check-in).
- **Working Hours Guard**: Restrict automated messages to business hours (e.g., 9:00 AM – 7:00 PM in organization timezone).
- **Auto-Stop on Reply**: Sequence immediately terminates if the prospect replies on WhatsApp or status moves to Won or Lost.
- **Worker Infrastructure**: Powered by isolated Redis BullMQ queues with automatic retry backoff and Dead Letter Queue (DLQ) protection.
