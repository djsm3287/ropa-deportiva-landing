# Stride Sports: Nano Banana Pro image prompts

Generate all images in **one Nano Banana Pro chat**: paste the shared style block first, then each prompt one by one. That keeps the whole set consistent.

Save every image in this folder (`assets/images/`) with the exact file name below. WebP, JPG or PNG are fine (tell Claude if the extension is not `.webp`). Full-width images (hero) at least 1600px wide.

## Shot list

| # | File | Used in | Ratio |
|---|---|---|---|
| 1 | `hero.webp` | Hero (main banner) | 16:9 |
| 2 | `shoe-road.webp` | Catalog: daily running shoe | 4:5 |
| 3 | `shoe-race.webp` | Catalog: racing shoe | 4:5 |
| 4 | `shoe-trail.webp` | Catalog: trail shoe | 4:5 |
| 5 | `shoe-training.webp` | Catalog: gym/training shoe | 4:5 |
| 6 | `acc-bottle.webp` | Catalog: bottle | 4:5 |
| 7 | `acc-socks.webp` | Catalog: running socks | 4:5 |
| 8 | `acc-vest.webp` | Catalog: hydration vest | 4:5 |
| 9 | `acc-cap.webp` | Catalog: running cap | 4:5 |
| 10 | `store.webp` | "Visítanos" section (physical store) | 4:3 |
| 11 | `community.webp` | Community / run club section | 4:3 |
| 12 | `og-image.jpg` | Social share preview | 1.91:1 (1200×630) |

## Shared style block (paste first)

```
Style: photorealistic commercial sports photography, bright warm late-afternoon sunlight with soft long shadows, palette of brick-orange running-track red, warm cream and clean white, slightly warm color grade, sharp detail, full-frame camera look, optimistic and friendly mood. Products are generic and unbranded. No text, no logos, no brand marks, no watermarks. Highest resolution available (4K).
```

## 1. hero.webp

```
Subject: a Latin American runner mid-stride on a brick-orange tartan running track with crisp white lane lines, wearing plain unbranded running shoes and simple athletic clothing.
Composition: low side angle at track level, runner on the right third, motion feel with slight background blur, clean open space on the left half for headline text.
Aspect ratio: 16:9
Details: golden late-afternoon light, a green mountain range softly visible in the far background (like El Ávila in Caracas), clear sky.
Avoid: text, logos, watermarks, distorted hands, extra fingers, oversaturation
```

## 2–9. Products

Use this base for every product and replace `[SUBJECT]` with the line for each file.

```
Subject: [SUBJECT]
Composition: studio product shot, product centered and resting on a small strip of brick-orange rubber running-track surface with one white lane line, seamless warm cream backdrop, three-quarter view, generous empty space around the product.
Aspect ratio: 4:5
Details: soft warm key light from the left, gentle realistic shadow, identical backdrop and lighting for every product in the series.
Avoid: text, logos, brand marks, watermarks, oversaturation
```

| File | `[SUBJECT]` |
|---|---|
| `shoe-road.webp` | `a cushioned daily road running shoe, white and brick-orange engineered mesh upper, thick foam midsole` |
| `shoe-race.webp` | `a lightweight racing running shoe with a tall rocker foam midsole, cream upper with orange accents, thin translucent laces` |
| `shoe-trail.webp` | `a rugged trail running shoe, earthy olive and orange upper, aggressive deep-lug outsole visible` |
| `shoe-training.webp` | `a low-profile gym training shoe with a flat stable sole, black and cream upper with small orange details` |
| `acc-bottle.webp` | `a soft-flask running water bottle with a bite valve, translucent with an orange cap, half full of water` |
| `acc-socks.webp` | `a pair of cushioned crew running socks in cream and brick-orange stripes, neatly folded` |
| `acc-vest.webp` | `a lightweight running hydration vest in black with orange trim, two soft flasks in the front pockets` |
| `acc-cap.webp` | `a lightweight running cap in cream technical fabric with an orange brim underside, perforated panels` |

## 10. store.webp

```
Subject: interior of a small, modern neighborhood running store, a wall display of unbranded running shoes on light wooden shelves, brick-orange accent wall, a try-on bench and a small treadmill.
Composition: wide eye-level shot from the entrance, inviting and tidy, warm sunlight coming through a large front window.
Aspect ratio: 4:3
Details: plants, concrete floor with a painted white lane line running through the store, no people or one store worker softly in the background.
Avoid: text, logos, signage, watermarks, distorted hands, oversaturation
```

## 11. community.webp

```
Subject: a diverse group of Latin American amateur runners of different ages jogging together and smiling, a friendly neighborhood run club.
Composition: front three-quarter view, group slightly off-center, natural candid expressions, mid-stride.
Aspect ratio: 4:3
Details: a tree-lined city park path at golden hour, green mountain softly in the background, plain unbranded athletic clothing in cream, white and orange tones.
Avoid: text, logos, watermarks, distorted faces, extra fingers, oversaturation
```

## 12. og-image.jpg

```
Subject: close-up of a single unbranded running shoe in white and brick-orange resting on the white starting line of a brick-orange tartan running track.
Composition: low angle at track level, shoe on the right side, clean open track surface on the left for a logo overlay.
Aspect ratio: 1.91:1 (wide banner)
Details: golden late-afternoon light, long soft shadow, shallow depth of field.
Avoid: text, logos, watermarks, oversaturation
```
