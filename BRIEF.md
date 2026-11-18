# Brief: Stride Sports

> **Portfolio demo.** Stride Sports is a fictional store. Product names, prices and store details are invented for the demo and marked as such.

**Goal:** Bring runners to the physical store. Each product in a short catalog has a "Lo quiero" button that opens WhatsApp with the product name pre-filled. There is no e-commerce and no cart.

**Audience:** Amateur and regular runners in Venezuela (beginners through 10K/21K racers and trail runners) who want the right shoe, good advice and a store they can visit.

**Stack and folder:** Static HTML/CSS/JS in `D:\Diego\proyectos\ropa-deportiva-landing`, with no build step. Files: `index.html`, `css/styles.css`, `js/main.js`, `assets/images/`.

**Pages and sections (one page):**
1. **Header / nav:** Stride Sports wordmark, anchor links (Catálogo, Comunidad, Visítanos) and a WhatsApp button. Sticky, and collapses to a menu on mobile.
2. **Hero:** headline + tagline "Cada zancada cuenta.", a short subline, two CTAs ("Ver catálogo" / "Visítanos") and the hero image.
3. **Catálogo:** 8 products (4 shoes, 4 accessories) with filters Todos / Zapatillas / Accesorios. Each card shows the image, name, a short spec line, the price in USD, a hover effect and a "Lo quiero" WhatsApp button. No modal, no cart, no size picker.
4. **Por qué Stride:** 3 to 4 short benefits for visiting the store, such as fitting advice and trying shoes on before buying. These are written as demo claims.
5. **Comunidad:** the Stride run club, with weekly group runs, a short text, the community image and a WhatsApp CTA to join.
6. **Visítanos:** store image, address, opening hours, phone/WhatsApp, a map placeholder block and a "Cómo llegar" button.
7. **Footer:** wordmark, short line, social links (placeholders) and "Demo de portafolio" note.

**Design direction: "Running track" (B)**
- **Mood:** sunny, friendly, energetic, like a neighborhood running club rather than a lab.
- **Palette:** brick-orange track red (`#C2462B`), warm cream (`#F4ECDD`), clean white and deep ink (`#1F1A17`) for text. One accent only, no gradients. Support tones: `#9E3520` (small orange text on cream), `#E07A5F` (small orange text on the dark Visítanos section, for contrast), `#EADFCB` (image wells).
- **Typography:** Archivo (Google Fonts, variable width). Headlines use the wide/expanded setting, uppercase and bold. Body text uses the normal width.
- **Layout:** white lane lines are used as section dividers and as the catalog grid lines, done with plain CSS borders and no drawn illustrations. Generous spacing, image-led.
- **Motion:** subtle. One signature moment: the white lane lines of the hero band sweep in on load. Cards lift on hover. There are no per-section scroll reveals, to keep the motion focused. Everything respects `prefers-reduced-motion`.
- **Logo:** text wordmark "STRIDE SPORTS" set in Archivo Expanded.

**Content: real vs placeholder**
- Real (decided): name, tagline, section copy (written in Spanish by Claude), product names and specs (fictional).
- Fictional but shown as real for the demo: prices in USD (e.g. $45 to $160 for shoes, $10 to $60 for accessories).
- Marked placeholders: `[Dirección por confirmar]`, `[Horario por confirmar]`, `[Teléfono por confirmar]` (+58 format), the WhatsApp number (a single constant in `js/main.js`), social links (`#`), and the map (a placeholder block, no embed).

**Images:** for now, every slot is a plain neutral placeholder block showing only the intended file name. There are no illustrations, vectors or drawn graphics. The placeholders are wired to the final paths, so dropping in the real files requires no code changes. Prompts are in `assets/images/IMAGE-PROMPTS.md`.

| Slot | File | Status |
|---|---|---|
| Hero | `hero.webp` | placeholder |
| Products ×8 | `shoe-road`, `shoe-race`, `shoe-trail`, `shoe-training`, `acc-bottle`, `acc-socks`, `acc-vest`, `acc-cap` (`.webp`) | placeholder |
| Store | `store.webp` | placeholder |
| Community | `community.webp` | placeholder |
| Social share | `og-image.jpg` | placeholder |

**Language:** the website is in Spanish (Venezuela: "zapatos deportivos", +58 phone format, prices in USD). This brief is in English.

**Open questions:** none. Images will arrive later and the user will say when they're uploaded.

## Status

- **Brief approved.** Visual design approved on the Claude design canvas: https://claude.ai/artifact/W4pU72ifAoNCFB1jTDBZbt (desktop, style guide, mobile).
- **Built:** `index.html`, `css/styles.css`, `js/main.js`. Open `index.html` in a browser; no build step.
- **Images:** each `<img>` already points to `assets/images/<file>`. Until a file exists, its slot shows a neutral block with the file name. Drop the files in and they appear, with no code changes.
- **To replace before going live:** `WHATSAPP_NUMBER` in `js/main.js`, the "Cómo llegar" Google Maps link and the social links in `index.html` (marked `TODO`), and the address, hours, phone, club day/time and map placeholders (shown in orange, in `[brackets]`).
