/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        colors: {
            text: "#2D7322"
        },
        extend: {
            fontFamily: {
                Lora: ["Lora", "serif"],
            },
        },
    },
    plugins: [],
}

