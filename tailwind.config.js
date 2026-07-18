/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  darkMode: "class",

  theme: {
    extend: {
      colors: {
        background: "#F8FAFC",     // Light Background
        surface: "#FFFFFF",        // Card Background

        primary: "#1D4ED8",        // Royal Blue
        secondary: "#0F172A",      // Navy
        accent: "#D4AF37",         // Gold

        text: {
          primary: "#0F172A",
          muted: "#475569",
          light: "#FFFFFF",
        },

        border: "#E2E8F0",
      },

      fontFamily: {
        sans: [
          "Plus Jakarta Sans",
          "sans-serif",
        ],

        display: [
          "Syne",
          "sans-serif",
        ],

        mono: [
          "JetBrains Mono",
          "monospace",
        ],
      },

      boxShadow: {
        card: "0 10px 30px rgba(15,23,42,0.08)",
        blue: "0 8px 25px rgba(29,78,216,0.18)",
      },

      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },

      animation: {
        "pulse-slow":
          "pulse 4s cubic-bezier(0.4,0,0.6,1) infinite",
      },
    },
  },

  plugins: [],
};