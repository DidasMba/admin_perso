/** @format */

import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    daisyui: {
        themes: ["light"],
    },
    theme: {
        extend: {
            colors: {
                primary: "#05264F",
                secondary: "#0b3466",
                active: "#6E6EF7",
                customHoverBlue: "rgb(83, 223, 252)",
            },
        },
    },
    plugins: [require("daisyui")],
};
export default config;
