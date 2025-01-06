/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bgPrimary: "white",
        bgSecondary: "#aee0f5",
        textPrimary: "#0e2f76",
        textSecondary: "#424bef",
        btnColor: "#3F7261",
        borderColor: "#fafbfc",
        borderColorSecondary: "#27084e",
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      fontFamily: {
        customFont: ['"Open Sans"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
