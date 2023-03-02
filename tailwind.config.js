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
			primary: '#009CF8',
			secondary: '#007FC6',
			dark: '#002E47',
			light: '#EFFBFF',
			triary: '#28B281',
			
		},
	},

	plugins: [
		require('tailwind-scrollbar-hide'),
		// ...
	],
};
