/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#118ab2",
        mydark: "#0d1321",
        secondary: "#005f73",
        secondary2: "#1d2d44",
        blueWhite: "#94d2bd",
        blueWhite2: "#748cab",
      },
    },
    fontFamily:{
      'poppins' : ['Poppins']
    }
  },
  plugins: [require("flowbite/plugin")],
};
