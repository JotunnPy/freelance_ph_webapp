/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: "-50px 50px 90px gray",
      },
      animation: {
        pop: "pop 4s ease-in-out 2s 1 backwards",
        slide: "slide 1s ease-in 1 backwards",
        sl: "sl 1s ease-in 1",
      },
    },
    keyframes: {
      pop: {
        "0%": { transform: "translate(0px, 0px)" },
        "100%": {},
      },
      slide: {
        "0%": { transform: "translate(500px, 0px)" },
        "100%": {},
      },
      sl: {
        "0%": { transform: "translate(-500px, 0px)" },
        "100%": {},
      },
    },
  },
  plugins: [
    require("tailwindcss-textshadow"),
    require("tailwind-scrollbar")({ nocompatible: true }),
  ],
};
