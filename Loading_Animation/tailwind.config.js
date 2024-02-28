/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        load: {
          "0%": { width: "30px", height: "30px" },
          "100%": { width: "20px", height: "20px" },
        },
      },
    },
  },
  plugins: [],
};
