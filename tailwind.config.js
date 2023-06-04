const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./*.{html,js}"],
	theme: {
		extend: {
			colors: {
				'gray': '#666',
				'black': '#1e1e1e',
				'link': 'rgba(0, 101, 157, 1)',
				'world-news-bg': 'rgba(213, 230, 240, 0.2)',
				'box': 'rgba(0, 0, 0, 0.5)',
			},
			gap: {
				'13': '3.125rem',
			},
			spacing: {
				'30': '7.5rem',
			},
			fontSize: {
				'h1': '3.25rem',
			},
			maxWidth: {
				'210': '13.125rem',
				'270': '16.875rem'
			},
			width: {
				'847': '847px',
				"2/3": '49%',
			},
			height: {
				'34': '8.75rem'
			},
			maxWidth: {
				'102': '6.375rem',
				'210': '13.125rem',
				'270': '16.875rem',
			},
			screens: {
				xs: '481px',
				"xs-down": {max: '480px'},
				sm: "641px",
				"sm-down": { max: "640px" },
				"sm-up": { max: "680px" },
				md: "769px",
				"md-down": { max: "768px" },
				"md-middle": {max: "820px"},
				"md-up": { max: "992px" },
				lg: "1025px",
				"lg-down": { max: "1024px" },
				xl: "1281px",
				"xl-down": { max: "1280px" },
				"2xl": "1921px",
				"2xl-down": { max: "1920px" },
			},
			fontFamily: {
				playfair: 'Playfair Display',
				montserrat: 'Montserrat'
			},
		},

	},
	plugins: [],
}