import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#080808",
        carbon: "#111111",
        surface: "#1A1A1A",
        white: "#F8F8F8",
        silver: "#C0C0C0",
        "silver-light": "#E8E8E8",
        "silver-dim": "#888888",
        border: "rgba(192,192,192,0.12)",
        "border-hover": "rgba(192,192,192,0.35)",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
