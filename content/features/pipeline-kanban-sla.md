---
title: "Visual Pipeline Kanban & Response Time SLA"
slug: "pipeline-kanban"
badge: "🎯 Complete Deal Visibility"
summary: "Custom stage Kanban, column pagination, Response Time SLA engine, first-contact velocity tracking, and Going Cold detector."
keyMetric: "21x More Deals Entered into Sales Cycle"
---

# Visual Pipeline Kanban & Response Time SLA

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

## 4. "Going Cold" Inactivity Detector
- **Automated Inactivity Scan**: Detects active leads with no recorded call, message, or note for over 48 hours.
- **Cold Queue View (/leads/cold)**: Dedicated filter view that isolates neglected prospects for targeted re-engagement campaigns.
