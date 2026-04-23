# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start development server
npm run build     # Build for production (static export)
npm run start     # Start production server
npm run lint      # Run ESLint
```

No test suite is configured.

## Architecture

**Next.js 14 App Router, statically exported** (`output: 'export'` in `next.config.mjs`). This means no server-side rendering, no API routes, and `next/image` optimization is disabled. All pages must be statically renderable.

### Route Groups

```
app/
  (marketing)/      # /, /contact, /industries
  (products)/       # /products
```

Each route group has its own `layout.tsx`. The root `app/layout.tsx` handles SEO metadata (OG, Twitter cards, schema.org JSON-LD) and wraps everything in Chakra UI + SaasUI providers via `app/provider.tsx`.

### Path Aliases (tsconfig.json)

```
#components/*  →  ./components/*
#hooks/*       →  ./hooks/*
#data/*        →  ./data/*
#theme         →  ./theme
```

Always use these aliases when importing across directories.

### Data Layer

All content lives in `data/` as TypeScript files — no CMS, no markdown, no Velite (installed but unused). Product data is organized by brand:

- `data/products/nergeco.ts` — Nergeco high-speed doors
- `data/products/skb.ts` — SKB products
- `data/products/loading-systems.ts` — Loading systems
- `data/products/index.ts` — Utility functions (`getProductsByBrand`, `searchProducts`, etc.)

Site config (nav links, footer, SEO defaults) is in `data/config.tsx`. Other content (FAQ, pricing, testimonials, industries) follows the same pattern: TypeScript objects exported from `data/*.tsx`.

### Theme

Chakra UI theme extended with SaasUI via `extendTheme()` in `theme/index.ts`. Custom component styles live in `theme/components/`. The primary color is blue (`#3182CE`), font is Inter Variable. Always extend the existing theme rather than using inline styles.

### SVG Handling

SVGs are imported as React components via `@svgr/webpack` (configured in `next.config.mjs`). Import like:

```tsx
import Logo from '@/public/logo.svg'
```

### Animation

Framer Motion is used for page transitions and scroll-triggered effects. Reusable animation wrappers live in `components/motion/`. Prefer using those wrappers over raw `motion.*` elements in page components.
