import { ImageResponse } from "next/og";

export const alt =
  "Ridhzo — Respond to inbound leads in seconds, not hours. The 1-tap mobile CRM for fast closers.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#000000",
          padding: 80,
          border: "1px solid rgba(255, 255, 255, 0.12)",
        }}
      >
        {/* Brand mark + wordmark */}
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 72,
              height: 72,
              borderRadius: 16,
              background: "#ffffff",
            }}
          >
            <svg width="40" height="40" viewBox="0 0 24 24">
              <polygon points="13,2 3,14 12,14 11,22 21,10 12,10" fill="#000000" />
            </svg>
          </div>
          <span style={{ fontSize: 40, fontWeight: 700, color: "#ffffff" }}>
            Ridhzo
          </span>
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              fontSize: 22,
              color: "#5ee878",
              textTransform: "uppercase",
              letterSpacing: 2,
            }}
          >
            The 1-Tap Mobile CRM for Fast Closers
          </div>
          <div
            style={{
              fontSize: 68,
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.1,
              maxWidth: 1000,
            }}
          >
            Respond to Inbound Leads in Seconds, Not Hours.
          </div>
        </div>

        {/* Footer row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 24,
            color: "rgba(255, 255, 255, 0.64)",
            borderTop: "1px solid rgba(255, 255, 255, 0.12)",
            paddingTop: 28,
          }}
        >
          <span>Instant capture · Push alerts · 1-tap WhatsApp · Offline pipeline</span>
          <span style={{ color: "#ffffff", fontWeight: 600 }}>ridhzo.com</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
