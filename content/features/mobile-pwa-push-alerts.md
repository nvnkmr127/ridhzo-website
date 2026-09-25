---
title: "PWA Mobile App & Instant Push Notifications"
slug: "mobile-pwa"
badge: "📱 Install on iOS & Android"
summary: "Install Ridhzo straight from Safari or Chrome without visiting the App Store. Vibrating lead alerts with instant 1-tap deep link routing."
keyMetric: "100% Native Feel · Zero App Store Delays"
category: "capture"
order: 4
---

# PWA Mobile App & Instant Push Notifications

## 1. Feature Overview
Built as an installable Progressive Web App (PWA), Ridhzo delivers a lightning-fast native mobile experience on iPhone and Android. Closers receive vibrating push notifications with direct 1-tap navigation to the prospect's profile—even when the browser is closed.

---

## 2. PWA Installation Options & Mechanics

### Cross-Platform Installation:
- **iOS Safari Support**:
  - Prompts clean guided instructions: *"Tap Share ⎋ → Add to Home Screen"*.
  - Configured with Apple Touch Icons, standalone display mode, and dark status bar (`#0a0a0a`).
- **Android Chromium Support**:
  - Listens for `beforeinstallprompt` event.
  - Displays a clean, 1-tap "Install App" banner in the bottom drawer.
  - Dismissal preference: Remembers user dismissal for 7 days in `localStorage`.
- **Desktop Chrome / Edge / macOS**:
  - Address bar install badge installs Ridhzo as a standalone windowed desktop application.

---

## 3. Web Push Notification Engine & Options

### Technical Specifications:
- **Standard**: RFC-8291 Web Push protocol with VAPID key pairs (`NEXT_PUBLIC_VAPID_PUBLIC_KEY` & `VAPID_PRIVATE_KEY`).
- **Closed-Tab Delivery**: Notifications are handled by the background service worker (`sw.js`), delivering alerts even when the device is locked.
- **Vibration & Sound**:
  - Custom vibration rhythm `[200, 100, 200]` triggers on mobile devices to differentiate lead alerts from routine messages.
  - High-resolution `/icon-192.png` badge and avatar.
- **Renotify Option**: `renotify: true` with tag `ridhzo-lead-alert` ensures back-to-back leads don't collapse into a silent stack.

### Notification Controls & Testing:
- **1-Click Enablement**: Toggle push alerts directly from the user header or settings.
- **Test Alert Button**: In Integrations settings, click "Send Test Alert" to dispatch a simulated lead notification (*"⚡ Test Lead Alert: Jane Doe • +91 98765 43210"*).
- **Direct Deep Link Routing**: Clicking an alert automatically opens that specific lead detail view (`/leads/[id]`), focusing the browser or standalone app window.

---

## 4. Service Worker Caching Policies
- **Core Navigation**: Network-first strategy with static offline fallback shell (`/offline.html`).
- **Static Assets**: Stale-while-revalidate caching for stylesheets, JS chunks, fonts, and icons.
- **Mutation Bypass**: Next.js Server Actions and `/api/` routes strictly bypass the cache to guarantee real-time data integrity.
