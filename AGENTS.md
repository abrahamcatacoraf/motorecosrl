<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# MOTORECO S.R.L. — Project Guide

## Commands
- `npm run dev` — dev server (Turbopack default in Next.js 16)
- `npm run build` — production build (also Turbopack, NOT webpack)
- `npm run lint` — ESLint (flat config in eslint.config.mjs)

## Stack quirks
- Tailwind CSS v4: use `@import "tailwindcss"` en CSS (NO `@tailwind base/...`)
- Path alias `@/*` apunta a la raíz del proyecto (no a `src/`)
- Componentes: `app/components/` → layout/sections propios de la página; `components/ui/` → primitivas shadcn reutilizables
- Tema vía custom properties en `app/globals.css` con bloque `@theme` adicional para colores shadcn (fondo oscuro, verde primario #2d7a3a, acento dorado #f0a500)
- Fuentes: Barlow (body, variable `--font-barlow`), Barlow_Condensed (display, variable `--font-barlow-condensed`)
- shadcn/ui style: radix-luma; iconos: lucide-react (NO tiene Facebook/Instagram — usar SVGs inline)

## Estructura actual (post-mejora)
- `app/page.tsx` — importa Navbar, Hero, Nosotros, Servicios, Ubicacion, Footer
- Secciones completadas: Hero, Nosotros (3 párrafos reales + stats), Servicios (4 tarjetas), Ubicación (contacto + horarios + mapa placeholder + redes), Footer
- `app/components/sections/` — Hero, Nosotros, Servicios, Ubicacion (todos "use client")
- `app/components/layout/` — Navbar, Logo, Footer (Navbar y Footer "use client")
- `components/ui/button.tsx` — shadcn Button (se usa en Hero, no tiene "use client")
- Todos los componentes con hover events (`onMouseEnter/Leave`) o framer-motion necesitan `"use client"`
- Se omitió intencionalmente la sección Galería

## framer-motion: regla crítica SSR
Nunca usar `opacity: 0` en `initial` de framer-motion. El servidor renderiza `initial` como estilos inline y el contenido queda invisible hasta que JS hidrata. En su lugar:
- Usar solo transformaciones de desplazamiento: `initial={{ y: 25 }}` / `initial={{ x: -25 }}`
- Para Hero (entrada con `animate`, no `whileInView`): igual, evitar `opacity: 0` en `initial`
- `whileInView` funciona correctamente para scroll reveal sin opacidad

## Datos pendientes (lib/data.ts)
- `address`, `phone`, `whatsapp`, `email`, `mapEmbedUrl` tienen prefijo `[REEMPLAZAR]` — reemplazar antes del deploy
- `social.facebook`, `social.instagram` tienen URLs placeholder
- Los horarios (`hours`) son genéricos pero verosímiles
- `services[]` tiene contenido real y definitivo

## Secciones con contenido real (no tocar)
- Hero: nombre, descripción, botones
- Nosotros: 3 párrafos de historia/valores + 4 stats (20+ años, 10K+ clientes, 100% combustible garantizado, 4 servicios)
- Servicios: 4 tarjetas con datos de `lib/data.ts`
- Footer: usa `siteConfig.description` y `siteConfig.name`

## Next.js 16 gotchas
- `params`, `searchParams`, `cookies`, `headers` son async — hay que usar `await`
- `middleware.ts` está deprecado; usar `proxy.ts` con `export function proxy()`
- `next dev` escribe en `.next/dev/` (directorio separado del build)
- Next.js ya no sobreescribe `scroll-behavior` en navegación SPA — ya manejado vía CSS en `globals.css`
