import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand Colors
        brand: {
          lime: "#a0df50",
          "lime-light": "#b8e878",
          "lime-dark": "#8bc73d",
          green: "#013024",
          "green-light": "#024a39",
          "green-dark": "#021a15",
        },
        // Accent Colors for Branches
        accent: {
          blue: "#00d4ff",      // Trading
          gold: "#ffd700",       // Book
          red: "#ff6b6b",        // Personal
          purple: "#a855f7",     // Insights
          orange: "#f97316",     // Productivity
          pink: "#ec4899",       // Leads
        },
        // Semantic Colors
        success: "#10b981",
        warning: "#f59e0b",
        error: "#ef4444",
        info: "#3b82f6",
      },
      fontFamily: {
        heebo: ["Heebo", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-gradient": "linear-gradient(135deg, #013024 0%, #021a15 50%, #000 100%)",
        "glass": "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
      },
      boxShadow: {
        "glow": "0 0 30px rgba(160, 223, 80, 0.3)",
        "glow-lg": "0 0 60px rgba(160, 223, 80, 0.4)",
        "card": "0 20px 60px rgba(0,0,0,0.3)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
        "fade-in-up": "fadeInUp 0.6s ease-out",
        "slide-in-right": "slideInRight 0.5s ease-out",
        "slide-in-left": "slideInLeft 0.5s ease-out",
        "pulse-slow": "pulse 3s infinite",
        "float": "float 6s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(160, 223, 80, 0.2)" },
          "100%": { boxShadow: "0 0 40px rgba(160, 223, 80, 0.4)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
