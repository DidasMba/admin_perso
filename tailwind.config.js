/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: ["light"],
  },
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "serif"],
      },
      colors: {
        primary: "#05264F",
        secondary: "#0b3466",
        active: "#6E6EF7",
        customHoverBlue: "rgb(83, 223, 252)",
        lightBlue: "#0C3465",
        grayish: "#E8EAEC",
      },
    },
  },
  plugins: [require("daisyui")],
};
