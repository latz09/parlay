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
			primary: '#FF1D46',
			secondary: '#00A24F',
			dark: '#222222',
			light: '#e6e9ed',
			triary: '#28B281',
			
		},
	},

	plugins: [
		require('tailwind-scrollbar-hide'),
		// ...
	],
};
