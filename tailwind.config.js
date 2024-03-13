/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {

        extend: {
            fontFamily: {
                Lora: ["Lora", "serif"],
            },
            colors: {
                text: "#2D7322",
                pagebg: "#F9FDF8"
            },
        },
    },
    plugins: [],
}

