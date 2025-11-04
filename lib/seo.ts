import { themeTokens } from './theme';

export const siteConfig = {
  name: 'Francisco Yañez',
  title: 'Francisco Yañez — Automatizaciones, Desarrollo Web y Aplicaciones',
  description:
    'Ingeniero de software especializado en automatizaciones con IA, productos web en Next.js y aplicaciones móviles que aceleran operaciones. Trabajo con startups y equipos corporativos para lanzar experiencias medibles y escalables.',
  url: 'https://franciscoyanez.dev',
  locale: 'es-CL',
  email: 'mailto:hola@franciscoyanez.dev',
  social: {
    github: 'https://github.com/franciscoyanez',
    linkedin: 'https://www.linkedin.com/in/franciscoyanez',
    twitter: 'https://x.com/franyanez',
  },
};

export const jsonLd = {
  person: {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    email: siteConfig.email,
    sameAs: Object.values(siteConfig.social)
  },
  website: {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.title,
    url: siteConfig.url,
    inLanguage: siteConfig.locale
  },
  breadcrumbs: {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Inicio',
        item: siteConfig.url,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Servicios',
        item: `${siteConfig.url}/#servicios`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Proyectos',
        item: `${siteConfig.url}/#proyectos`,
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Contacto',
        item: `${siteConfig.url}/#contacto`,
      },
    ],
  }
};

export const defaultMetadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.title,
  description: siteConfig.description,
  alternates: {
    canonical: siteConfig.url
  },
  openGraph: {
    type: 'website',
    locale: siteConfig.locale,
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: '/api/og',
        width: 1200,
        height: 630,
        alt: 'Portafolio futurista de Francisco Yañez'
      }
    ]
  },
  icons: {
    icon: '/icon'
  },
  twitter: {
    card: 'summary_large_image',
    site: '@franyanez',
    creator: '@franyanez',
    title: siteConfig.title,
    description: siteConfig.description,
    images: ['/api/og']
  },
  robots: {
    index: true,
    follow: true
  },
  other: {
    'theme-color': themeTokens.colors.background
  }
};
