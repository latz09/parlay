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
		theme: {
			extend: {},
			colors: {
				primary: '#EC449B',
				secondary: '#5EBAB1',
				dark: '#6A0037',
				light: '#C2FFF9',
				medium: '#4b8178',
			},
		},
	},
	plugins: [
		require('tailwind-scrollbar-hide'),
		// ...
	],
};
