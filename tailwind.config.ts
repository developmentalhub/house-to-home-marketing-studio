import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#181A1E",
        cream: "#F4EEE3",
        sand: "#E4DBC8",
        clay: "#9C4A2E",
        sage: "#7F8C7B",

        paper: "#F7F5F1",
        brass: "#B8873B",
        brassBright: "#D6A34F",
        rust: "#9C4A2E",
        slate: "#5B6068",
      },
      fontFamily: {
        display: [
          "var(--font-fraunces)",
          "Georgia",
          "serif",
        ],
        body: [
          "var(--font-inter)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        mono: [
          "var(--font-mono)",
          "ui-monospace",
          "monospace",
        ],
      },
      boxShadow: {
        soft: "0 18px 45px rgba(24, 26, 30, 0.08), 0 4px 12px rgba(24, 26, 30, 0.04)",
      },
    },
  },
  plugins: [],
};

export default config;