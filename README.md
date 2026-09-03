# RuoQi Zhao — Product Design Portfolio

A bilingual, responsive portfolio built from RuoQi Zhao's presentation portfolio. The default language is English; the global EN / 中文 control stores the visitor's preference locally.

## Included

- Interactive Three.js cosmic landing page with the P–01 penguin model
- Four complete product-design case studies: Fantasia, StyleBook, TCD Interactive Map and LetItGreen
- Selected 3D, narrative-game and emotional-technology experiments
- Responsive desktop and mobile layouts
- Reduced-motion support, keyboard navigation and a non-WebGL visual fallback
- Original StyleBook GIF and project media extracted from the supplied presentation

## Run locally

Requirements: Node.js 22.13 or later and pnpm.

```bash
pnpm install
pnpm dev
```

Open the local address shown in the terminal.

## Build

```bash
pnpm exec vite build
```

The production output is written to `dist/`.

## Content editing

- Project copy, bilingual text and media paths: `app/portfolio/content.ts`
- Portfolio homepage: `app/portfolio/page.tsx`
- Landing scene: `app/components/cosmic-scene.tsx`
- Visual system and responsive rules: `app/globals.css`
- Project assets: `public/projects/`

The contact email and external project links are based on the supplied portfolio presentation. Replace or extend them before publishing if needed.
