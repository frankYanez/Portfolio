import { ImageResponse } from 'next/og';
import { siteConfig } from '@/lib/seo';

export const runtime = 'edge';

/**
 * Genera la imagen Open Graph dinámica utilizando tipografía básica.
 */
export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          height: '100%',
          width: '100%',
          background: 'linear-gradient(135deg, #05060d 0%, #121632 100%)',
          color: '#f4f6ff',
          padding: '80px',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}
      >
        <div style={{ fontSize: 42, textTransform: 'uppercase', letterSpacing: 6, color: '#24e1ff' }}>
          {siteConfig.name}
        </div>
        <div style={{ fontSize: 64, fontWeight: 700, maxWidth: '80%' }}>{siteConfig.title}</div>
        <div style={{ fontSize: 28, color: '#b8c2ff' }}>{siteConfig.description}</div>
      </div>
    ),
    {
      width: 1200,
      height: 630
    }
  );
}
