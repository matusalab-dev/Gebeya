/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      background: "#ffffff",
      purple: "#9847EF",
      orange: "#FEA301",
      yellow: "#FFD700",
      red: "#FF0000",
      grey: {
        100: "#C1C1C1",
        200: "#C6C6C6",
        300: "#F2F2F2",
        400: "#D0D0D0",
        500: "#808080",
      },
      light_black: "#1E1E1E",
      black: {
        100: "#222222",
        300: "#1E1E1E",
      },
    },

    boxShadow: {
      sm: "0px 4px 4px 0px, #000000",
    },
    borderRadius: {
      "3xl": "32px",
      "2xl": "24px",
      xl: "16px",
      lg: "15px",
      md: "10px",
      sm: "8px",
      full: "100%",
    },
    extend: {
      screens: {
        xs: "430px",
        "7xl": "1512px",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        alfa: ["var(--font-alfa-slab-one)"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class", // only generate classes
    }),
  ],
};
