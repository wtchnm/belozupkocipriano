import defaultTheme from 'tailwindcss/defaultTheme'
import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

export default {
	content: ['src/**/*.astro'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter var', ...defaultTheme.fontFamily.sans]
			}
		}
	},
	plugins: [typography]
} satisfies Config
