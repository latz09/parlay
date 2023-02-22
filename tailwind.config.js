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
			primary: '#39B3FF',
			secondary: '#007FC6',
			dark: '#00243A',
			light: '#ECFAFF',
			triary: '#EC449b',
			
		},
	},

	plugins: [
		require('tailwind-scrollbar-hide'),
		// ...
	],
};
