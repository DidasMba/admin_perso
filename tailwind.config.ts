/** @format */

import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
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
    plugins: [],
};
export default config;
