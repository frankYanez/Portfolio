import { defaultMetadata, jsonLd, siteConfig } from '@/lib/seo';

describe('seo config', () => {
  it('incluye metadata básica', () => {
    expect(defaultMetadata.title).toBe(siteConfig.title);
    expect(defaultMetadata.openGraph?.images?.[0]?.url).toBe('/api/og');
    expect(defaultMetadata.icons?.icon).toBe('/icon');
  });

  it('genera JSON-LD con esquema Person', () => {
    expect(jsonLd.person['@type']).toBe('Person');
    expect(jsonLd.person.url).toBe(siteConfig.url);
  });
});
