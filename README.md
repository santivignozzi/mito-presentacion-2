# Mito Marketing · Landing

Landing institucional para **Mito Marketing**, agencia boutique de experiencias
corporativas, producción integral y marketing B2B.

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS 3 con variables de tema Mito
- Framer Motion para microinteracciones
- shadcn/ui-style `cn`, `Button` y `components/ui`
- Logos oficiales en `/public/logos`

## Sistema visual

- **Paleta**: mito-blue (`#052941`), mito-purple (`#883AFF`), mito-orange
  (`#F2461D`), mito-yellow (`#FFC401`), blanco, negro auxiliar
- **Tipografía**: Geist Sans (titles + body), Geist Mono (meta)
  con `display-tight` (`letter-spacing: -0.03em`, `line-height: 0.96`)
  y `caption-mito` (`tracking: 0.22em`, uppercase)
- **Numeración editorial**: cada sección rotulada como
  `01 · Qué es Mito`, `02 · Qué hacemos`, etc.
- **Glass surfaces**: `liquid-surface`, `liquid-surface-strong`, `shine-border`
- **Reduce motion**: soporte nativo con `prefers-reduced-motion`

## Componentes UI destacados

- `components/ui/button.tsx` — botón base shadcn
- `components/ui/liquid-glass-button.tsx` — **LiquidButton** + **MetalButton**
  con efecto glass (SVG filter `feDisplacementMap` + `feGaussianBlur`) y
  variantes de color Mito (`primary`, `orange`, `purple`, `yellow`, `gold`)
- `components/ui/mito-effects.tsx` — `MitoStageGrid`, `MitoStageLights`,
  `MitoIsotypeParallax`, `MitoOrbits`, `MitoMarquee`, `MitoScrollHint`
- `components/ui/animated-hero.tsx` — hero premium con isotipo parallax,
  marquee de capabilities, glass badges y CTAs LiquidButton

## Deploy en Netlify

### Opción 1 — Conectar repo de Git
1. Pusheá esta carpeta a un repo (GitHub, GitLab o Bitbucket).
2. Entrá a [app.netlify.com](https://app.netlify.com) → **Add new site → Import existing project**.
3. Elegí el repo. Netlify detecta Next.js automáticamente.
4. Build command: `npm run build` (default). Publish dir: `.next` (default).
5. **Environment variables**: agregá `NEXT_PUBLIC_SITE_URL` con tu dominio final
   (ej: `https://mitomarketing.com`).
6. Deploy.

### Opción 2 — Deploy manual (sin Git)
1. `npm install`
2. `npm run build`
3. Arrastrá la carpeta del proyecto a <https://app.netlify.com/drop>
4. Netlify detecta Next.js y compila automáticamente.

### Opción 3 — Netlify CLI
```bash
npm install -g netlify-cli
netlify login
netlify init        # detecta Next.js y crea netlify.toml
netlify deploy --prod
```

> El plugin `@netlify/plugin-nextjs` se instala automáticamente la primera vez
> que Netlify compila, gracias al bloque `[[plugins]]` en `netlify.toml`.

## Dominio personalizado
1. En Netlify → **Domain settings → Add custom domain**.
2. Apuntá el CNAME de tu dominio a `apex-loadbalancer.netlify.com` (o seguí
   las instrucciones específicas que te muestra Netlify).
3. Activá HTTPS automático (Let's Encrypt).

## Variables de entorno

| Variable                 | Ejemplo                       | Descripción                          |
| ------------------------ | ----------------------------- | ------------------------------------ |
| `NEXT_PUBLIC_SITE_URL`   | `https://mitomarketing.com`   | URL pública (sitemap, robots, OG).   |

Copiá `.env.example` a `.env.local` para desarrollo.

## Desarrollo local

```bash
npm install
npm run dev
```

Abrí <http://localhost:3000>.

## Producción local (verificación pre-deploy)

```bash
npm run build
npm start
```

## Estructura

- `app/` — entrypoint `app/page.tsx` y `app/globals.css`
- `components/ui/` — componentes reutilizables
- `components/site/` — nav, logos y símbolos del isotipo
- `components/sections/` — cada sección institucional
- `data/content.ts` — textos editables (servicios, proceso, casos, etc.)
- `public/logos/` — logos oficiales en sus 4 variantes
