/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "rotate-360": "rotate 360deg",
        fadeOut: "fadeOut 2s",
      },
    },
  },
  plugins: [],
};
