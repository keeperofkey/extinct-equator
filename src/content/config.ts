// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';
// 2. Define your collection(s)

const blog = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z
			.string()
			.or(z.date())
			.transform((val) => new Date(val)),
		updatedDate: z
			.string()
			.optional()
			.transform((str) => (str ? new Date(str) : undefined)),
		heroImage: z.string().optional(),
	}),
});

const proj = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		path: z.string(),
		light: z.string(),
		poster: z.string(),
		armodes: z.string(),
		camctrl: z.string(),
		shadow: z.string(),
		camorb: z.string(),
		fov: z.string(),
		mincamorb: z.string(),
		maxcamorb: z.string(),
	}),
});

const img = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		img01: z.string(),	
		img02: z.string(),	
		img03: z.string(),	
		img04: z.string(),	
		img05: z.string(),	
	}),
});
export const collections = {
  'blog': blog,
  'proj': proj,
  'img': img,
};