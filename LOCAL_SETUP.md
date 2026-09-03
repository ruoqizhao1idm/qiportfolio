# QI Cosmic Portfolio — Local Setup

## Requirements

- Node.js 22.13 or newer
- npm 10 or newer

## Run locally

```bash
npm install
npm run dev
```

Open the local address printed in the terminal (normally `http://localhost:5173`).

## Production build

```bash
npm run build
npm run start
```

## Main files

- `app/page.tsx` — interactive 3D landing page
- `app/portfolio/page.tsx` — portfolio homepage template
- `app/globals.css` — responsive visual system and layouts
- `public/models/penguin-optimized.glb` — optimized penguin model
- `public/draco/` — local model decoder assets

The landing page loads Three.js only in the browser, keeping the server-rendered shell compatible with edge runtimes.
