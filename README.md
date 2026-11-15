# Maharaj & Co. — Luxury Wedding House (React + Vite)

## Run
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build -> dist/
npm run preview
```

## Structure
- `src/data/content.js` — ALL copy and image URLs (single place to edit)
- `src/components/` — Navbar, Footer, Img (lazy/responsive/fallback), Reveal (animations), Sections (homepage blocks)
- `src/pages/` — Home, Destinations, Experiences, Weddings, About, Contact
- `src/styles/global.css` — design tokens & styles (ivory / champagne / charcoal / muted gold)

## Images
Images are Unsplash placeholders referenced in `content.js`. Replace with your own licensed photography
(drop files in `public/images/` and use `/images/name.jpg`). If an image fails to load, an elegant tonal fallback is shown.

## Notes
- Rename the brand ("Maharaj & Co.") in `Navbar.jsx`, `Footer.jsx`, `index.html`.
- Contact form opens a pre-filled email; connect `Contact.jsx` to your CRM / form API for production.
- Deploy `dist/` to Netlify/Vercel (add SPA rewrite: all routes -> /index.html).
