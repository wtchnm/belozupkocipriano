import defaultTheme from 'tailwindcss/defaultTheme'
import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'
import plugin from 'tailwindcss/plugin'

export default {
	content: ['src/**/*.astro'],
	theme: {
		colors: {
			primary: '#45031E',
			secondary: '#8c7246',
			white: '#FFFFFF',
			black: '#000000',
			transparent: 'transparent'
		},
		fontWeight: {
			semibold: '600',
			medium: '500'
		},
		boxShadow: {
			title: '0px 4px 30px 8px rgba(0, 0, 0, 0.25)',
			card: '0px 4px 10px 3px rgba(69, 3, 30, 0.25)',
			'card-mobile': '0px 3px 10px 1px rgba(69, 3, 30, 0.25)',
			post: '0px 4px 15px 5px rgba(0, 0, 0, 0.25)',
			dialog: '3px 4px 6px 0px rgba(0, 0, 0, 0.25)'
		},
		extend: {
			fontFamily: {
				sans: [
					'Open Sans Variable',
					'Open Sans Variable Fallback',
					...defaultTheme.fontFamily.sans
				],
				serif: [
					'Crimson Pro Variable',
					'Crimson Pro Variable Fallback',
					...defaultTheme.fontFamily.serif
				]
			},
			spacing: {
				13: '3.25rem',
				18: '4.5rem',
				22: '5.5rem',
				25: '6.25rem',
				26: '6.5rem',
				30: '7.5rem',
				34: '8.5rem',
				68: '17rem'
			},
			maxWidth: {
				layout: '80rem'
			}
		}
	},
	plugins: [
		typography,
		plugin(function ({ addBase }) {
			addBase({
				'input[type="number"]::-webkit-inner-spin-button, input[type="number"]::-webkit-outer-spin-button':
					{
						'-webkit-appearance': 'none'
					},
				ul: { listStyle: 'revert' }
			})
		})
	]
} satisfies Config
