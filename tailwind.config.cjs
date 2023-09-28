/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class'],
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			transitionTimingFunction: {
				'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
				'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
				'custom-bezier': 'cubic-bezier(0.1, 0.6, 0.2, 0.5)',
				'in-out-cubic': 'cubic-bezier(0.65, 0.05, 0.36, 1)'

			},

			listStyleImage: {
				checkmark: 'url("/images/checkmark.svg")',
			},
			colors: {
				'primary': '#DAD6D3',
				'primary-light': '#FAF4F2',
				'primary-dark': '#a78bfa',
				'secondary': '#1e293b',
				'secondary-light': '#334155',
				'secondary-dark': '#020617',
				'myTextBlue': '#0087ca',
				'myTextBlue-light': '#372145',
				'primary-text': '#83227E',
				'secondary-text': '#52C5FF'
			},
			fontFamily: {
				sourceCode: ['"Source Code Pro"'],
				doses: ['Dosis']
			},
		},
	},
	plugins: [],
}
