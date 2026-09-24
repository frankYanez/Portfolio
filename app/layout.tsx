import type { Metadata } from 'next';
import './globals.css';
import { defaultMetadata, jsonLd } from '@/lib/seo';
import { MotionProvider } from '@/components/providers/motion-provider';
import { ThemeProvider } from '@/components/providers/theme-provider';

export const metadata: Metadata = defaultMetadata;

export const viewport = {
  themeColor: '#ffffff'
};

/**
 * RootLayout envuelve toda la aplicación con providers globales y estilos base.
 * @param props.children ReactNode para renderizar en la página.
 */
export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground">
        <ThemeProvider>
          <MotionProvider>{children}</MotionProvider>
        </ThemeProvider>
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([jsonLd.person, jsonLd.website, jsonLd.breadcrumbs])
          }}
        />
      </body>
    </html>
  );
}
