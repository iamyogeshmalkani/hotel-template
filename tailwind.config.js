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
                pagebg: "#F9FDF8",
                secondary: "#423C36",
                primary: "#D6D6D6",
                tertiary: "#1F2516"
            },
            // animation: {
            //     "zoom-in-zoom-out": {
            //         "0%": {
            //             transform: scale(1, 1)
            //         },
            //         "50%": {
            //             transform: scale(1.5, 1.5)
            //         },
            //         "100%": {
            //             transform: scale(1, 1)
            //         }
            //     }
            // }
        },
    },
    plugins: [],
}

