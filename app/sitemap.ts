import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.bnbgroupe.com';
  const locales = ['fr', 'en'];
  const routes = [
    '',
    '/about-us/',
    '/business-portfolio/',
    '/food-beverages/',
    '/health-and-hygiene/',
    '/personal-care-products/',
    '/home-care/',
    '/baby-care/',
    '/electronics-home-appliances/',
    '/automobile/',
    '/stationary/',
    '/furniture-fittings/',
    '/focus-brand/',
    '/distribution/',
    '/events-news/',
    '/csr/',
    '/career/',
    '/contact/',
  ];

  const sitemap: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const route of routes) {
      sitemap.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: route === '' ? 1 : 0.8,
      });
    }
  }

  return sitemap;
}
