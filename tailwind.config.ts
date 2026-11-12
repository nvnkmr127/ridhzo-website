import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        // Ridhzo Design System palette (Black #000, White #fff, Highlight Green #5ee878).
        highlight: {
          DEFAULT: "#5ee878",
          soft: "#99f6aa",
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
        "word-in": "word-in 0.5s ease-out both",
        "progress-fill": "progress-fill 5s linear both",
        "flow-dash": "flow-dash 3.2s ease-in-out infinite",
      },
      keyframes: {
        "progress-fill": {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        "flow-dash": {
          "0%": { strokeDashoffset: "14", opacity: "0" },
          "15%": { opacity: "1" },
          "85%": { opacity: "1" },
          "100%": { strokeDashoffset: "-100", opacity: "0" },
        },
        "word-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
        inter: ["var(--font-inter)", "var(--font-geist-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      // Ridhzo Typography scale (Figma Design System node 264:32910).
      fontSize: {
        "display-cta": ["112px", { lineHeight: "normal", letterSpacing: "-5px", fontWeight: "900" }],
        display: ["96px", { lineHeight: "normal", letterSpacing: "-5px", fontWeight: "900" }],
        h1: ["80px", { lineHeight: "normal", letterSpacing: "-5px", fontWeight: "900" }],
        h2: ["72px", { lineHeight: "normal", letterSpacing: "-5px", fontWeight: "800" }],
        h3: ["32px", { lineHeight: "normal", letterSpacing: "-0.416px", fontWeight: "700" }],
        h4: ["24px", { lineHeight: "normal", letterSpacing: "-0.312px", fontWeight: "700" }],
        h5: ["20px", { lineHeight: "normal", letterSpacing: "-0.26px", fontWeight: "700" }],
        "body-emphasis-lg": ["20px", { lineHeight: "28px", letterSpacing: "-0.3px", fontWeight: "600" }],
        "body-emphasis": ["18px", { lineHeight: "26px", letterSpacing: "-0.27px", fontWeight: "600" }],
        "body-lg": ["18px", { lineHeight: "28px", letterSpacing: "0", fontWeight: "400" }],
        body: ["16px", { lineHeight: "24px", letterSpacing: "0", fontWeight: "400" }],
        "body-sm": ["14px", { lineHeight: "20px", letterSpacing: "0", fontWeight: "400" }],
        label: ["13px", { lineHeight: "18px", letterSpacing: "0.04em", fontWeight: "500" }],
        button: ["14px", { lineHeight: "20px", letterSpacing: "0", fontWeight: "500" }],
        microcopy: ["12px", { lineHeight: "18px", letterSpacing: "0", fontWeight: "400" }],
      },
      letterSpacing: {
        display: "-5px",
        "heading-sm": "-0.013em",
        emphasis: "-0.015em",
        label: "0.04em",
      },
    },
  },
  plugins: [typography],
};
export default config;
