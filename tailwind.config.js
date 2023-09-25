/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "rotate-180": "rotate 180deg",
        fadeOut: "fadeOut 2s",
      },
    },
  },
  plugins: [],
};
