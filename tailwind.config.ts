import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#121417",
        paper: "#f7f3ea",
        moss: "#53634a",
        clay: "#a65f45",
        brass: "#b99556",
        river: "#2f6672",
        plum: "#5f4765"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "ui-sans-serif", "system-ui"],
        display: ["var(--font-newsreader)", "Georgia", "serif"]
      },
      boxShadow: {
        soft: "0 22px 70px rgba(18, 20, 23, 0.16)",
        line: "0 0 0 1px rgba(18, 20, 23, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
