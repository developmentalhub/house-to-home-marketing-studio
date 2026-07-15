import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#2f2a26",
        cream: "#f7f3ed",
        sand: "#e9dfd2",
        clay: "#b9785e",
        sage: "#7f8c7b"
      },
      boxShadow: {
        soft: "0 18px 50px rgba(47, 42, 38, 0.10)"
      }
    }
  },
  plugins: []
};

export default config;
