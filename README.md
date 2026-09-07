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

## Deploy en Vercel

El repo está conectado al proyecto **`mito-presentacion-2`** en Vercel: cada push
a `main` dispara un deploy de producción automático. No hace falta hacer nada más.

- Producción: <https://mito-presentacion-2.vercel.app>
- Build command y output son los de Next.js por defecto; no hay archivo de
  configuración porque no se necesita.

### Deploy manual (sin pasar por Git)

```bash
npm install -g vercel
vercel login
vercel --prod
```

## Analytics

El sitio usa **Vercel Web Analytics**: el paquete `@vercel/analytics` y el
componente `<Analytics />` montado en `app/layout.tsx`.

- En desarrollo corre en modo debug y **no envía** eventos; los logs
  `[Vercel Web Analytics] Debug mode is enabled` en consola son normales.
- Para comprobar que está vivo en producción, `/_vercel/insights/script.js`
  tiene que devolver `200` (si da `404`, está desactivado en el proyecto o
  falta un redeploy).

## Dominio

El dominio final es **`mitomkt.com`**, pero hoy ahí vive otro sitio, así que la
URL canónica de esta landing apunta a la de Vercel. Para migrarla:

1. Vercel → proyecto → **Settings → Domains** → agregar `mitomkt.com` y seguir
   las instrucciones de DNS que muestra.
2. Crear la variable `NEXT_PUBLIC_SITE_URL` con valor `https://mitomkt.com`.
3. Redeployar.

No hay que tocar código: `app/layout.tsx` (`metadataBase`), `app/sitemap.ts` y
`app/robots.ts` leen todos esa variable.

## Variables de entorno

| Variable               | Valor actual                            | Descripción                        |
| ---------------------- | --------------------------------------- | ---------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | `https://mito-presentacion-2.vercel.app` | URL pública (sitemap, robots, OG). |

Si no está definida, el código cae al mismo valor por defecto. Copiá
`.env.example` a `.env.local` para desarrollo.

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

> Cortá el `npm run dev` antes de buildear. Si corrés los dos a la vez, el build
> pisa `.next` y el dev server empieza a tirar `MODULE_NOT_FOUND` con 500; se
> arregla borrando `.next` y reiniciando.

## Estructura

- `app/` — entrypoint `app/page.tsx` y `app/globals.css`
- `components/ui/` — componentes reutilizables
- `components/site/` — nav, logos y símbolos del isotipo
- `components/sections/` — cada sección institucional
- `data/content.ts` — textos editables (servicios, proceso, casos, etc.)
- `public/logos/` — logos oficiales en sus 4 variantes
