import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        // legacy keys, recolored to the new brand palette
        ink: "#181A1E",
        cream: "#F4EEE3",
        sand: "#E4DBC8",
        clay: "#9C4A2E",
        sage: "#7f8c7b",
        // new explicit brand tokens
        paper: "#F4EEE3",
        brass: "#B8873B",
        brassBright: "#D6A34F",
        rust: "#9C4A2E",
        slate: "#5B6068"
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"]
      },
      boxShadow: {
        soft: "0 18px 50px rgba(24, 26, 30, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;