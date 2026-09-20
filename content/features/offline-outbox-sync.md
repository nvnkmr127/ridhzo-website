---
title: "Offline First Outbox & Auto-Sync"
slug: "offline-mode"
badge: "⚡ Zero Data Loss"
summary: "Capture leads anywhere with zero network signal. Outbox queue, automatic reconnection flush, and deadlock recovery."
keyMetric: "100% Reliable Field Capture"
---

# Offline First Outbox & Auto-Sync

## 1. Feature Overview
Ridhzo's offline-first architecture allows sales agents to create leads, update deal notes, and advance stages even in zero-connectivity environments—such as basement parking, high-rise elevators, and remote property sites.

---

## 2. Offline Outbox Capabilities & Options

### Native Device Outbox Queue:
- **Zero Heavy Dependencies**: Implemented natively in `src/lib/offline/outbox.ts` using encrypted browser storage.
- **Optimistic Lead Creation**: Submitting the Quick-Add Lead Drawer while offline saves the record immediately with a client UUID and timestamp.
- **User Feedback**: Instant amber toast notification: *"Saved offline ⚡ Will auto-sync once reconnected."*

### Auto-Sync & Reconnection Engine:
- **Connection Event Listener**: Monitors `window.addEventListener("online")` and `offline` triggers in real-time.
- **Automatic Flush**: Calls `flushOfflineOutbox()` the moment internet connectivity returns.
- **Sequential Mutation Processing**: Dispatches queued leads to `createLeadAction` in order of creation.

### Deadlock-Proof Conflict Handling:
- **Validation Recovery**: If a queued lead has a duplicate email or phone that was created concurrently, Ridhzo safely logs the occurrence and clears the queue item.
- **Transient Error Retry**: Server 500s or temporary timeouts remain buffered in the outbox for subsequent retry cycles.

---

## 3. UI Status Indicators
- **Header Offline Pill**: Pulsing amber pill in the top header displaying `Offline (X queued)`.
- **Manual Sync Trigger**: Clicking the offline indicator triggers an immediate sync attempt without requiring a page reload.
- **Offline Shell**: If a user navigates to an uncached route while offline, the service worker displays a clean offline shell (`/offline.html`) explaining connectivity status.
