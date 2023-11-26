import { z, defineCollection } from 'astro:content'

const posts = defineCollection({
	type: 'content',
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			poster: image(),
			date: z.date()
		})
})

export const collections = {
	posts
}
