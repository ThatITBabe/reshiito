/** @type {import('tailwindcss').Config} */
export const content = [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
    extend: {
        fontWeight: {
            'robRegular': '400',
            'robMedium': '500',
            'robSemiBold': '700',
        },
        colors: {
            blue12: '#0b72fd',
            grays500: '#666666',
            blue100: '#CCDFFF',
            // blue100: '#BBD8F2',
        },
    },
};
export const plugins = [];