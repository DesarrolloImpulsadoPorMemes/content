import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE } from '../config';

export async function GET(context: any) {
  const posts = await getCollection('posts', ({ data }) => data.published);
  
  return rss({
    title: SITE.title,
    description: SITE.description,
    site: context.site || SITE.url,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.copy,
      link: `/`, // All posts are in the home grid
    })),
    customData: `<language>es-es</language>`,
  });
}
