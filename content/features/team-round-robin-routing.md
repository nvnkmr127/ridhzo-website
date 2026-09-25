---
title: "Team Routing, Roles & Permissions"
slug: "team-routing"
badge: "🤝 Fair & Balanced Distribution"
summary: "Race-safe round-robin that respects each rep's capacity, teams for squads and territories, custom roles built from 13 permissions, and email or direct invites."
keyMetric: "Zero Lead-Grabbing · 100% Fair Workload"
category: "automate"
order: 3
---

# Team Routing, Roles & Permissions

## 1. Feature Overview
Ridhzo eliminates manual lead assignment, cherry-picking, and rep overload with an automated distribution engine that allocates inbound leads instantly based on fair rotation and live capacity.

---

## 2. Lead Distribution Engine & Options

### 1. Atomic Row-Locked Round-Robin
- Implemented with PostgreSQL SELECT ... FOR UPDATE transaction locks.
- Guarantees race-condition-free sequential rotation across active reps even during traffic spikes (e.g., 100 leads arriving within 10 seconds).
- Persists the pointer in the database so rotation resumes seamlessly across app restarts.

### 2. Workload Capacity Balancing (CapacityAssignmentService)
- **Active Lead Ceiling**: Set maximum open leads per rep (e.g., max 25 active deals).
- **Auto-Skip Logic**: If an agent reaches their capacity ceiling, the engine skips them in the round-robin queue until they close or advance existing leads.
- **Fair Opportunity Allocation**: Ensures top closers are not burdened with backlogs while newer reps sit idle.

### 3. Escalation Reassignment
- If an assigned sales rep does not make contact within the SLA window (e.g., 30 minutes), Ridhzo can automatically pull the lead and re-route to the next available agent.

---

## 3. Teams, Roles & Permissions (RBAC)

### Custom roles from 13 permissions
Go beyond admin vs. member. Build roles such as *Team Lead*, *Telecaller* or *Auditor* by turning individual permissions on and off:

| Area | Permissions |
| :--- | :--- |
| People | Manage users · Manage roles |
| Configuration | Manage settings · Manage lead sources · Manage templates · Manage automations |
| Leads | Edit leads · Delete leads · Permanently purge · Merge duplicates |
| Oversight | View audit log · Manage API keys · Manage billing |

### Teams
Group reps into squads (e.g. *Inbound SDRs*, *North Zone*, *NRI Desk*). Round-robin automations then share leads only within that team.

### Onboarding your team
- **Email invitations**: new reps set their own password from a secure link.
- **Direct provisioning**: create accounts instantly for call-centre style onboarding.
- **Shareable join link**: if email is blocked, copy a one-time invite link to send on WhatsApp or Slack.

### Built-in safeguards
- Admins **can't lock themselves out**: self-deactivation, self-deletion and self-demotion are blocked.
- Departing employees are **deactivated, not erased**. Their notes, activity and closed deals stay in your history.
- Every role and user change is recorded in the **audit log**.

---

## 4. Advanced Bulk Lead Actions
- **Multi-Select Bulk Operations**:
  - Bulk Reassign to User or Team.
  - Bulk Status / Stage Advancement.
  - Bulk Tagging & Untagging.
  - Bulk Export to CSV.
  - Bulk Move to Recycle Bin (with 30-day restore protection).
