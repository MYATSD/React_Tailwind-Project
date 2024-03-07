/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    //..
    // require("tailwind-scrollbar")({ nocompatible: true }),
    // {
    //   preferredStrategy: "pseudoelements",
    // },
    // function ({ addUtilities }) {
    //   const newUtilities = {
    //     ".scrollbar-thin": {
    //       scrollbarWidth: "thin",
    //       scrollbarColor: "black",
    //       WebkitOverflowScrolling: "touch",
    //       WebkitScrollbar: {
    //         display: "none",
    //       },
    //     },
    //     ".scrollbar-webkit": {
    //       "&::-webkit-scrollbar": {
    //         width: "8px",
    //       },
    //       "&::-webkit-scrollbar-track": {
    //         background: "white",
    //       },
    //       "&::-webkit-scrollbar-thumb": {
    //         backgroundColor: "rgb(31 41 55)",
    //         borderRadius: "20px",
    //         border: "1px solid white",
    //       },
    //     },
    //   };
    //   addUtilities(newUtilities, ["responsive", "hover"]);
    // },
  ],
};
