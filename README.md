# Portafolio Futurista — Francisco Yañez

Landing inmersiva construida con Next.js 14, Tailwind CSS y Framer Motion para mostrar servicios de automatización, desarrollo web y aplicaciones. Todo el contenido está optimizado para SEO en español.

## Requisitos

- Node.js 20+
- npm (o pnpm) instalado

## Primeros pasos

```bash
npm install
npm run dev
```

Visita `http://localhost:3000` para ver el sitio.

## Contenido editable

| Área | Archivo |
| --- | --- |
| Datos personales, CTAs | `content/hero.ts` |
| Habilidades técnicas y badges | `content/skills.ts` |
| Servicios destacados (cards futuristas) | `content/services.ts` |
| Soft skills | `content/soft-skills.ts` |
| Proyectos destacados (tarjetas + modal) | `content/projects.ts` |
| Experiencia / timeline | `content/timeline.ts` |
| Testimonios | `content/testimonials.ts` |
| Contacto final | `content/contact.ts` |
| Footer (navegación y redes) | `content/footer.ts` |
| SEO global (títulos, descripciones, JSON-LD) | `lib/seo.ts` |
| Contenido del Hero Parallax | `content/hero-parallax.ts` |

### Visuales, OG e icono

- Ajusta gradientes y selección de iconos para los proyectos en `content/projects.ts`.
- Personaliza la generación dinámica de Open Graph en `app/api/og/route.tsx`.
- Modifica el favicon programático en `app/icon.tsx` para reflejar tu marca.

### Animaciones y accesibilidad

- Variantes de animación centralizadas en `lib/animations.ts`.
- Las secciones utilizan `framer-motion` con `prefers-reduced-motion` respetado vía `MotionConfig`.
- Componentes de UI con jerarquía semántica y estados de foco visibles.

## Scripts npm

- `npm run dev`: entorno de desarrollo
- `npm run build`: build de producción + generación de sitemap
- `npm run lint`: ESLint
- `npm run typecheck`: TypeScript sin emisión
- `npm run test`: Jest + Testing Library
- `npm run e2e`: Playwright (requiere `npm run dev` en otra terminal)
- `npm run format`: Prettier

## Pruebas

- Unitarias con Jest (`tests/unit`) validan headings clave, CTA y SEO.
- End-to-end con Playwright (`e2e/`) verifican navegación por anclas.

## CI/CD

Workflow en `.github/workflows/ci.yml` ejecuta lint, typecheck, unit tests, e2e y build.

## Husky + lint-staged

Hooks de pre-commit ejecutan lint y typecheck. Ajusta comandos en `.husky/pre-commit` según necesidades.

## Despliegue recomendado

- **Vercel**: importar repo, definir `NEXT_TELEMETRY_DISABLED=1` opcionalmente.
- **GitHub Pages**: ejecutar `npm run build` y servir carpeta `.next` mediante adaptador estático (ver documentación Next.js). Para SSR se recomienda plataforma con Node.

## Licencia

[MIT](LICENSE)
