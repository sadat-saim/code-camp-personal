/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        secularone: ["Secular One", "sans-serif"],
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#5789ed",

          secondary: "#ed9d6f",

          accent: "#239600",

          neutral: "#2C3235",

          "base-100": "#323A4E",
          "base-200": "#f3f4f6",
          "base-300": "#1F2937",
          "base-800": "#1f2937",

          info: "#5CB7DB",

          success: "#19806B",

          warning: "#F7AB40",

          error: "#F07582",
        },
        lightTheme: {
          primary: "#97efb0",

          secondary: "#644bf2",

          accent: "#f9b145",

          neutral: "#241E2E",

          "base-100": "#FFFFFF",
          "base-200": "#334155",
          "base-300": "#e5e7eb",
          "base-800": "#FFFFFF",

          info: "#849CF6",

          success: "#66E1CA",

          warning: "#FBA209",

          error: "#FA427C",
        },
      },
      "light",
    ],
  },
  plugins: [require("daisyui"), require("@tailwindcss/forms")],
};
