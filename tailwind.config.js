/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',

		// Or if using `src` directory:
		'./src/**/*.{js,ts,jsx,tsx}',
	],

	theme: {
		extend: {},
		colors: {
			// primary: '#FF1D46',
			primary: '#F95DAC',
			secondary: '#00A24F',
			dark: '#070928',
			light: '#e6e9ed',
			// triary: '#28B281',
			triary: '#2ADAF1',
			black: '#000000',
		},
		fontFamily: {
			tinos: ['Tinos', 'serif'],
			mulish: ['Mulish', 'sans-serif'],
			questrial: ['Questrial', 'sans-serif'],
			oswald: ['Oswald', 'sans-serif'],
		},
	},

	plugins: [
		require('tailwind-scrollbar-hide'),
		// ...
	],
};
