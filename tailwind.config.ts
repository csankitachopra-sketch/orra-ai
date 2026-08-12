import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        orra: {
          bg: "var(--orra-bg)",
          elevated: "var(--orra-bg-elevated)",
          surface: "var(--orra-surface)",
          border: "var(--orra-border)",
          text: "var(--orra-text)",
          soft: "var(--orra-text-soft)",
          muted: "var(--orra-text-muted)",
          accent: "var(--orra-accent)",
          "accent-soft": "var(--orra-accent-soft)",
          warm: "var(--orra-warm)",
          "warm-soft": "var(--orra-warm-soft)",
          success: "var(--orra-success)",
        },
      },
      borderRadius: {
        orra: "var(--orra-radius)",
        "orra-sm": "var(--orra-radius-sm)",
      },
      boxShadow: {
        orra: "var(--orra-shadow)",
        "orra-soft": "var(--orra-shadow-soft)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
