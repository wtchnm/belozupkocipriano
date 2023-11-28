import defaultTheme from 'tailwindcss/defaultTheme'
import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'
import plugin from 'tailwindcss/plugin'

export default {
	content: ['src/**/*.astro'],
	theme: {
		colors: {
			primary: '#45031E',
			secondary: '#A48B55',
			white: '#FFFFFF',
			black: '#000000'
		},
		boxShadow: {
			title: '0px 4px 30px 8px rgba(0, 0, 0, 0.25)',
			card: '0px 4px 10px 3px rgba(69, 3, 30, 0.25)'
		},
		letterSpacing: {
			tight: '-0.03rem'
		},
		extend: {
			fontFamily: {
				sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
				serif: ['Crimson Pro', ...defaultTheme.fontFamily.serif]
			},
			fontSize: {
				'3.75xl': '2.1875rem',
				'4.5xl': '2.5rem'
			},
			spacing: {
				18: '4.5rem',
				22: '5.5rem',
				25: '6.25rem',
				26: '6.5rem',
				30: '7.5rem',
				32.5: '8.125rem',
				34: '8.5rem'
			},
			maxWidth: {
				layout: '82.5rem'
			}
		}
	},
	plugins: [
		typography,
		plugin(function ({ addBase }) {
			addBase({
				ul: { listStyle: 'revert' }
			})
		})
	]
} satisfies Config
