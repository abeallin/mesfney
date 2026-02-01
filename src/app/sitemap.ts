import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/constants';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE.url;
  const locales = ['en', 'ti'];
  const routes = [
    '',
    '/about',
    '/achievements',
    '/donate',
    '/volunteer',
    '/team',
    '/events',
    '/contact',
  ];

  return locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `${baseUrl}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: route === '/events' ? ('weekly' as const) : ('monthly' as const),
      priority: route === '' ? 1 : route === '/donate' ? 0.9 : 0.7,
    }))
  );
}
