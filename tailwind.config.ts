import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#4A7A8E",
          dark: "#3A5F6F",
        },
        accent: {
          DEFAULT: "#5BC0DE",
          hover: "#4AAFCD",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
