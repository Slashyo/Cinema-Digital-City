/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
    theme: {
        fontFamily: {
            'title': ["Domine", 'serif'],
            'body': ["Cabine", 'serif'],
        },
		colors: {
			'black-haze': '#F6F7F6',
			'woodsmoke': '#02070E'
		},
        extend: {},
    },
    plugins: [],
};
