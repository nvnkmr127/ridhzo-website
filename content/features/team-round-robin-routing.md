---
title: "Smart Team Round-Robin & Capacity Routing"
slug: "team-routing"
badge: "🤝 Fair & Balanced Distribution"
summary: "Atomic row-locked round-robin distribution, rep capacity balancing, role-based access control, and bulk lead actions."
keyMetric: "Zero Lead-Grabbing · 100% Fair Workload"
---

# Smart Team Round-Robin & Capacity Routing

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

## 3. Team Management & Role Access Control (RBAC)

### User Role Permissions:
- **SuperAdmin**: Platform-level control, tenant impersonation, global system metrics.
- **Admin**: Full organization management, team member invites, billing & subscription management, audit trails, and source webhooks.
- **Sales Rep**: Access to assigned leads, manual lead creation, WhatsApp templates, Kanban drag-and-drop, and personal activity log.
- **Viewer**: Read-only access to pipeline reports and analytics.

### Team Organization:
- Create custom teams (e.g., "North Zone Sales", "NRI Investment Desk", "Inbound Call Team").
- Assign team leaders with oversight over their squad performance.

---

## 4. Advanced Bulk Lead Actions
- **Multi-Select Bulk Operations**:
  - Bulk Reassign to User or Team.
  - Bulk Status / Stage Advancement.
  - Bulk Tagging & Untagging.
  - Bulk Export to CSV.
  - Bulk Move to Recycle Bin (with 30-day restore protection).
