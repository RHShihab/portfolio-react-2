/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-bg": "#F1F5F9", // Your custom light background color
        "dark-bg": "#18181B", // Your custom dark background color
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
