/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'Very-Dark-Blue-(main-BG)': '#0D192C',
				'Very-Dark-Blue-(card-BG)': '#15263F',
				'Very-Dark-Blue-(line)': '#2E405A',
				'Cyan-(img-BG)': 'rgba(0, 255, 248, 0.503)',
				'White': '#FFFFFF',
				'Soft-Blue': '#8BACD9',
				'Cyan': '#00FFF8',
			},
			boxShadow: {
				'card-shadow': '0 25px 50px 0 rgba(0, 0, 0, 0.0953)',
			},
			fontFamily: {
				'outfit': ['"Outfit"', 'system-ui'],
			},
			lineHeight: {
				auto: 'auto',
			},
		},
	},
	plugins: [],
}
