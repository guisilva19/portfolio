import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        "primary-black": "#161513",
        "warning": "#FF8A56",
        "primary-orange": "#FF8A56",
        "primary-pink": "#FF5E69",
        "primary-purple": "#B16CEA",
        "primary-yellow": "#FFA84B",
   
      },
    },
  },
  plugins: [nextui(), require("tailwindcss-animate")],
} satisfies Config;

export default config;
