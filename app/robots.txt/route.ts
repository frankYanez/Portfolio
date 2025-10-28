import { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/seo';

/**
 * Genera robots.txt utilizando metadatos centralizados.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: `${siteConfig.url}/sitemap.xml`
  };
}
