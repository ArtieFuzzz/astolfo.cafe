import type { Config } from 'tailwindcss'

export default {
	content: ['./src/**/*.{svelte,html,js,ts}'],
	theme: {
		colors: {
			text: 'rgb(245, 233, 231)',
			background: 'rgb(8, 4, 3)',
			primary: 'rgb(218, 154, 141)',
			secondary: 'rgb(123, 49, 34)',
			accent: 'rgb(249, 169, 213)'
		},
    fontSize: {
      sm: '0.750rem',
      base: '1rem',
      xl: '1.333rem',
      '2xl': '1.777rem',
      '3xl': '2.369rem',
      '4xl': '3.158rem',
      '5xl': '4.210rem',
    },
		fontFamily: {
			heading: 'Kanit',
			body: 'Quicksand'
		},
		fontWeight: {
			normal: '400',
			bold: '700'
		},
		extend: {}
	},
	plugins: [require('@tailwindcss/typography')]
} satisfies Config;
