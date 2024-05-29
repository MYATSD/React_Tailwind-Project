/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    colors: {
      background: "#FAFAFA",
      header: "#e3d5ca",
      title: "#D5BDAF",
      sideColor: "#F5EBE0",
    },
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
      cursive: ["Pacifico", "cursive"],
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
