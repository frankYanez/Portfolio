export const siteConfig = {
  name: 'TODO: Nombre Futurista',
  title: 'TODO: Nombre Futurista — Desarrollador Frontend',
  description:
    'TODO: Breve descripción profesional en español destacando experiencia y aspiraciones.',
  url: 'https://todo-portfolio.dev',
  locale: 'es-ES',
  email: 'mailto:contacto@todo.dev',
  social: {
    github: 'https://github.com/todo',
    linkedin: 'https://linkedin.com/in/todo',
    twitter: 'https://x.com/todo'
  }
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
        item: siteConfig.url
      }
    ]
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
        alt: 'TODO: Descripción OG en español'
      }
    ]
  },
  icons: {
    icon: '/icon'
  },
  twitter: {
    card: 'summary_large_image',
    site: '@todo',
    creator: '@todo',
    title: siteConfig.title,
    description: siteConfig.description,
    images: ['/api/og']
  },
  robots: {
    index: true,
    follow: true
  },
  other: {
    'theme-color': '#05060d'
  }
};
