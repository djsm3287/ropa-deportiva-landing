# Stride Sports — Design System

## Product context
- **What:** Stride Sports, a fictional neighborhood running & training store in Venezuela (portfolio demo).
- **Page:** one-page landing + short catalog. NOT e-commerce: no cart, no checkout.
- **Primary job:** get runners to visit the physical store or message on WhatsApp about a product.
- **Audience:** amateur and regular runners (beginners to 10K/21K racers and trail runners) who want the right shoe, honest advice and a store they can visit.
- **Language:** ALL visible copy in Spanish (Venezuela). Prices in USD (e.g. "$120"). Phone format +58.
- **Tagline:** "Cada zancada cuenta."

## Page architecture (in order)
1. **Header / nav** — "STRIDE SPORTS" text wordmark left; anchors Catálogo · Comunidad · Visítanos; WhatsApp button right. Sticky; hamburger on mobile.
2. **Hero** — big expanded uppercase headline, tagline, short subline, CTAs "Ver catálogo" (primary) and "Visítanos" (secondary), large hero image (placeholder).
3. **Catálogo** — filter chips Todos / Zapatillas / Accesorios; 8 product cards (4 shoes, 4 accessories). Card: image (4:5), product name, one spec line, USD price, "Lo quiero" WhatsApp button. Hover lift. No modal, no size picker, no cart.
4. **Por qué Stride** — 3–4 short benefits for visiting the store (fitting advice, try before you buy, run club, etc.).
5. **Comunidad** — Stride run club: weekly group runs, short text, image (placeholder), CTA "Únete por WhatsApp".
6. **Visítanos** — store image (placeholder), address, hours, phone/WhatsApp, map placeholder block, "Cómo llegar" button.
7. **Footer** — wordmark, short line, social links, "Demo de portafolio".

### Catalog products (fictional)
Shoes: Ritmo (daily road, $120), Sprint Pro (racing, $160), Sendero (trail, $135), Base (gym training, $95).
Accessories: Botella flexible 500 ml ($18), Medias técnicas ($12), Chaleco de hidratación ($60), Gorra ligera ($22).

## Visual direction — "Running track"
Sunny, friendly, energetic: a neighborhood running club, not a tech lab. Inspired by a brick-orange tartan athletics track with white lane lines.

### Color (ONLY these)
| Token | Hex | Use |
|---|---|---|
| `--track` | `#C2462B` | Brand accent: primary buttons, highlights, track-colored bands |
| `--track-dark` | `#9E3520` | Hover/pressed for track elements |
| `--cream` | `#F4ECDD` | Main page background |
| `--cream-deep` | `#EADFCB` | Alternate section background, card image wells |
| `--white` | `#FFFFFF` | Lane lines, cards, text on track color |
| `--ink` | `#1F1A17` | Text, dark sections, secondary buttons |
| `--ink-soft` | `#5B524C` | Secondary text |
No gradients. No other hues (no blue, green, purple, neon). One accent only: track orange.

### Typography (ONLY Archivo, Google Fonts, variable width axis)
- **Display / headlines:** Archivo, `font-stretch: 125%` (expanded), weight 800, UPPERCASE, tight leading (0.95), slight negative tracking.
- **Labels / chips / prices:** Archivo expanded 700, uppercase, wide tracking (0.08em), small size.
- **Body:** Archivo normal width (100%), weight 400/500, 16–18px, leading 1.6.
No serif, no script, no second font family.

### Signature motif — lane lines
- White lane lines (2–3px solid white) as section dividers and catalog grid lines, especially on track-orange bands.
- Numbered "lanes": section labels like `01 — CATÁLOGO`, `02 — COMUNIDAD` in small expanded caps, like lane numbers on a track.
- Done with plain CSS borders/blocks only. NO illustrations, icons-as-art, vectors, drawn shapes or decorative SVGs.

### Imagery
- All images are **plain neutral placeholder blocks** for now: flat `--cream-deep` rectangle with the intended file name (e.g. `hero.webp`) centered in small `--ink-soft` text. Correct aspect ratios: hero 16:9, products 4:5, store and community 4:3.
- Do NOT draw, illustrate or invent imagery. Do NOT use stock photos.

### Shape, spacing, depth
- Corners: buttons fully pill-shaped (999px); cards and image blocks 6px radius.
- Spacing: generous; 8px base scale (8, 16, 24, 32, 48, 64, 96, 128). Sections ~96–128px vertical padding on desktop.
- Shadows: minimal; cards flat with a 1px `--ink` at 10% border; hover = lift 4px + soft shadow.
- Layout: 12-col grid, max width ~1240px; catalog 4 columns desktop, 2 tablet, 1–2 mobile.

### Buttons
- Primary: `--track` bg, white text, expanded uppercase label, pill.
- Secondary: transparent, 2px `--ink` border, ink text, pill.
- WhatsApp "Lo quiero": full-width in card, `--ink` bg, white text; hover → `--track`.

### Motion
Subtle: sections fade/slide up 16px on scroll; cards lift on hover; filter chips animate the active state. One signature moment: in the hero, the white lane lines slide in horizontally on load. Respect `prefers-reduced-motion`.

## Requirements
- Mobile-first, responsive, accessible contrast, visible focus states.
- Placeholder text visibly marked: `[Dirección por confirmar]`, `[Horario por confirmar]`, `[Teléfono por confirmar]`.
