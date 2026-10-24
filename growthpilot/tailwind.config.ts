import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // GrowthPilot Group palette
        gp: {
          black:   "#050505",
          surface: "#111111",
          white:   "#ffffff",
          muted:   "#b8b8b8",
          border:  "rgba(255,255,255,0.10)",
          gold:    "#d4af37",
          "gold-dim": "rgba(212,175,55,0.15)",
        },
      },
      fontFamily: {
        display: ["var(--font-clash)", "var(--font-satoshi)", "system-ui", "sans-serif"],
        body:    ["var(--font-satoshi)", "system-ui", "sans-serif"],
        serif:   ["var(--font-playfair)", "Georgia", "serif"],
        mono:    ["ui-monospace", "JetBrains Mono", "Menlo", "monospace"],
      },
      fontSize: {
        "display-xl": ["clamp(3rem,8vw,5.625rem)", { lineHeight: "0.95", letterSpacing: "-0.04em" }],
        "display-lg": ["clamp(2rem,5vw,3.375rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-md": ["1.5rem",                   { lineHeight: "1.2",  letterSpacing: "-0.01em" }],
        "lead":       ["1.25rem",                  { lineHeight: "1.6"  }],
        "body":       ["1rem",                     { lineHeight: "1.6"  }],
        "meta":       ["0.75rem",                  { lineHeight: "1.4"  }],
        "eyebrow":    ["0.6875rem",                { lineHeight: "1",    letterSpacing: "0.2em"  }],
      },
      boxShadow: {
        gold:    "0 0 24px rgba(212,175,55,0.30)",
        "gold-sm": "0 0 12px rgba(212,175,55,0.20)",
      },
      borderColor: {
        DEFAULT: "rgba(255,255,255,0.10)",
      },
      backgroundImage: {
        "noise": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
      },
      keyframes: {
        "fade-up": {
          "0%":   { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)"    },
        },
        marquee: {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s cubic-bezier(0.2,0,0,1) both",
        "marquee": "marquee 25s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
