import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: 'Blog de Desarrollo Web y Tecnología | Luis Yampier Cueva Suárez',
    description: 'Bienvenido a mi blog, donde comparto mi pasión por el desarrollo web, la inteligencia artificial y las últimas tendencias tecnológicas.',
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>es</language>`,
  });
}
