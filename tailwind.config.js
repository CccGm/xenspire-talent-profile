/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      white: "#ffffff",
      app: {
        Border: "#66B2B2",
        Teal: "#008080",
        Teal800: "#125D56",
        LightTeal: "#B2D8D8",
        offWhite: "#E9D7FE",
        text: "#344054",
        border: "#EAECF0",
        gray900: "#101828",
        lightBlue: "#f1f5f9",
        tableBorder: "#CFCFCF",
        green: "#729434",
      },
    },
  },
  plugins: [],
};
