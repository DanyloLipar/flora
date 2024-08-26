import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "header-bg": "rgba(229, 84, 115, 0.10)",
        "text-general": "#272727",
        "text-second": "rgba(39, 39, 39, 0.60)",
        rose: "rgba(229,84,115)",
        "button-bg": "#E55473",
        "button-txt": "#FFF",
        "footer-bg": "#272727",
        "title-secondary": "#FFFDD0",
      },
      fontFamily: {
        poppins: ["Poppins, sans-serif"],
        manrope: ["Manrope, sans-serif"],
        roboto: ["Roboto, sans-serif"],
        dm: ["DM Serif Text serif"],
      },
      screens: {
        mobile: "400px",
      },
    },
  },
  plugins: [],
};
export default config;
