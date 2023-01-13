/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				'primary':'#E3B748',
				'secondary':'#818181',
				'neutral':'#a6a6a6',
				'dark':'#1E1E1E',
				'background':'#090909',
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
			  },
		},

	},

	plugins: [],
}
