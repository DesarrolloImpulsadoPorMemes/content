import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE } from '../config';

export async function GET(context: any) {
  const now = new Date();
  const posts = await getCollection('posts', ({ data }) => {
    return data.published && data.date.getTime() <= now.getTime();
  });
  
  return rss({
    title: SITE.title,
    description: SITE.description,
    site: context.site || SITE.url,
    xmlns: {
      media: 'http://search.yahoo.com/mrss/',
      content: 'http://purl.org/rss/1.0/modules/content/',
    },
    items: posts.map((post) => {
      // Formatear el cuerpo para usar <br/> en lugar de saltos de línea planos
      const bodyContent = post.body ? post.body
        .trim()
        .replace(/\r\n/g, '\n')
        .replace(/\n\n/g, '<br/><br/>')
        .replace(/\n/g, '<br/>') : post.data.copy || '';

      return {
        title: post.data.title,
        pubDate: post.data.date,
        description: post.data.copy || '',
        link: `${SITE.url}`,
        content: bodyContent,
        customData: `
          <media:content url="${new URL(post.data.image, SITE.url)}" medium="image" type="image/png">
            <media:description type="plain">${post.data.imageAlt || post.data.title}</media:description>
          </media:content>
        `,
      };
    }),
    customData: `<language>es-es</language>`,
  });
}
