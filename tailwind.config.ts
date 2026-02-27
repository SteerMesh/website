import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          900: "#0B0D12",
          800: "#11141C",
          700: "#171B26",
          600: "#1F2433",
          500: "#2A3042"
        },
        haze: {
          300: "#97A3C1",
          200: "#B5C0DC",
          100: "#D5DCF0"
        },
        accent: {
          500: "#69F7C4",
          600: "#4CE1B0",
          700: "#2BC79A"
        },
        ember: {
          500: "#FF8A65",
          600: "#F56A3C"
        }
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"]
      },
      boxShadow: {
        glow: "0 0 40px rgba(105, 247, 196, 0.25)",
        soft: "0 12px 40px rgba(6, 11, 22, 0.45)"
      },
      backgroundImage: {
        "radial-fade": "radial-gradient(circle at top, rgba(105, 247, 196, 0.18), transparent 55%)",
        "grid-lines": "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
