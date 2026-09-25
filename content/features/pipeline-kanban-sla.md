---
title: "Pipeline Board, SLA & Going Cold Radar"
slug: "pipeline-kanban"
badge: "🎯 Complete Deal Visibility"
summary: "Drag-and-drop pipeline board for your own stages, a response-time SLA engine, and a Going Cold radar that flags leads left silent for 14 days before you lose them."
keyMetric: "21x More Deals Entered into Sales Cycle"
category: "manage"
order: 2
---

# Pipeline Board, SLA & Going Cold Radar

## 1. Feature Overview
The Ridhzo Pipeline combines visual drag-and-drop Kanban deal management with an automated response-time SLA engine. Sales managers get live visibility over conversion bottlenecks, while reps know exactly which deals require immediate attention.

---

## 2. Pipeline Kanban Configuration & Options

### Custom Stage Options:
- **Default Lifecycle Stages**: New, Contacted, Qualified, Proposal, Won, Lost, Unqualified.
- **Custom Stage Creator**:
  - Add custom stages (e.g., "Site Visit Booked", "Loan Application", "Contract Sent").
  - Color picker: Custom hex/HSL accent pill per stage.
  - Stage Outcome Flag: Mark stages as Open, Won (100% conversion), or Lost (disqualified).
  - SLA Target Hours: Define expected residence time before a deal is flagged as overdue.

### Scalable Column Fetching:
- **Per-Stage Pagination**: Initial load retrieves 20 leads per column.
- **Column Load More**: Dedicated button per column to fetch the next batch without refreshing the entire board.
- **Header Badges**: Displays lead count and total aggregate pipeline deal value per stage in INR (₹) or organization currency.

### Card Controls & Quick Actions:
- **1-Tap WhatsApp**: Launches pre-filled template directly from the Kanban card.
- **Direct Phone Call**: Triggers phone call for immediate dialing.
- **Quick Stage Mover**: Drag-and-drop or select new stage from card dropdown.
- **Owner & Tag Badges**: Shows assignee avatar, priority flags (Low, Medium, High, Urgent), and lead source.

---

## 3. Response Time SLA Engine (SlaAnalyticsService)

### SLA Configuration Options:
- **Organization SLA Threshold**: Set target speed to first response (e.g., 15 minutes, 30 minutes, 2 hours).
- **First Contact Tracking**: Automatically records firstContactAt timestamp the moment a rep initiates a WhatsApp message, logs a call, or marks the lead as Contacted.
- **Metrics Computed**:
  - *Avg. Speed to First Response*: Calculated in minutes across all inbound leads.
  - *SLA Compliance Rate (%):* Percentage of leads contacted within the target threshold.
  - *Breached Leads Counter*: Total leads that waited longer than the target without outreach.
  - *Breached Lead Escalation*: Triggers notifications to team managers when deals violate the SLA.

---

## 4. "Going Cold" Radar (/leads/cold)
A safety net that stops leads from going quiet without anyone noticing.
- **14-day inactivity detection**: open leads with no call, message or note for 14+ days show up on the Going Cold radar.
- **Clear reasons**: see whether a deal stalled mid-funnel or a new lead was never contacted at all.
- **Pre-filled WhatsApp recovery links**: re-open the conversation in one tap with a drafted follow-up.
- **One-click bulk escalation**: raise every cold lead to *High* priority at once. An audit note is logged and the leads move to the top of reps' call lists.
- **Auto-reset**: completing a [follow-up](/features/follow-ups) or logging contact takes the lead off the radar.

Related: [Dashboards & Insights](/features/analytics) · [Leads Hub](/features/leads-hub)
