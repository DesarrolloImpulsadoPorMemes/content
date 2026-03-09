import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
  schema: z.object({
    image: z.string(),
    imageAlt: z.string().optional(),
    title: z.string().optional(),
    copy: z.string().optional(),
    date: z.coerce.date(),
    published: z.boolean().default(true),
    category: z.string().default('General'),
    socials: z.object({
      twitter: z.string().optional(),
      instagram: z.string().optional(),
      linkedin: z.string().optional(),
    }).optional(),
  }),
});

export const collections = { posts };
