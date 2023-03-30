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
        pop: "pop 10s ease-in-out 1.5s infinite backwards",
        slide: "slide 1s ease-in-out 1 backwards",
        sl: "sl 1s ease-in-out 1",
      },
    },
    keyframes: {
      pop: {
        "0%": { transform: "translate(0px, 0px)" },
        "30%": { transform: "translate(20px, -20px)" },
        "50%": { transform: "translate(10px, -10px)" },
        "70%": { transform: "translate(20px, -20px)" },
        "100%": { transform: "translate(0px, 0px)" },
      },
      slide: {
        "0%": { transform: "translate(500px, 0px)" },
        "50%": { transform: "translate(-50px, 0px)" },
        "100%": {},
      },
      sl: {
        "0%": { transform: "translate(-500px, 0px)" },
        "50%": { transform: "translate(50px, 0px)" },
        "100%": { transform: "translate(0px, 0px)" },
      },
    },
  },
  plugins: [
    require("tailwindcss-textshadow"),
    require("tailwind-scrollbar")({ nocompatible: true }),
  ],
};
