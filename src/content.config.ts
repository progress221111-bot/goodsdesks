import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['kitchen', 'storage', 'cleaning', 'kids', 'desk', 'outdoor']),
    // guide: 商品を売らないお役立ち記事 / roundup: 比較記事 / review: 単品深掘り
    type: z.enum(['guide', 'roundup', 'review']),
    published: z.coerce.date(),
    updated: z.coerce.date().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { articles };
