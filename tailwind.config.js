/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Add custom colors
        light: "#2978b5",
        lightsec: "#444",
        dark: "#cdcdff",
        darksec: "#90a0d9",
      },
    },
  },
  plugins: [],
};
