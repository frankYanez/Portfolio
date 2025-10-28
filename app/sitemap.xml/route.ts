import { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/seo';

/**
 * Genera sitemap básico para páginas principales de la landing.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 1
    }
  ];
}
