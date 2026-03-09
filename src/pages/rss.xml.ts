import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE } from '../config';

export async function GET(context: any) {
  const now = new Date();
  const posts = await getCollection('posts', ({ data }) => {
    return data.published && data.date <= now;
  });
  
  return rss({
    title: SITE.title,
    description: SITE.description,
    site: context.site || SITE.url,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: `
        ${post.data.copy ? `<p>${post.data.copy}</p>` : ''}
        <img src="${new URL(post.data.image, SITE.url)}" alt="${post.data.imageAlt || post.data.title}" />
      `,
      link: `/`,
      enclosure: {
        url: new URL(post.data.image, SITE.url).toString(),
        type: 'image/png',
        length: 0
      }
    })),
    customData: `<language>es-es</language>`,
  });
}
