/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#c5c5c5",
        background: "#f4f4f4",
        darkbg: "#21262d",
        secondary: "#B4B4B8",
        dsecondary: "#212A3E",
        htext: "#272829",
        dhtext: "#f5f5f5",
        text: "#333333",
        dtext: "#d6d6d6",
      },
      fontFamily: {
        staat: ["Author", "sans-serif"],
      },
    },
  },
  plugins: [],
};
