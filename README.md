# Ember & Oak Coffee Roasters

Portfolio e-commerce build for a small-batch coffee roastery, "Warm" direction. Two pages:

- `/` homepage (12 sections: announcement bar to footer)
- `/coffee/guji-natural` product page (gallery, variations, subscription, reviews, related)

Phase 1 is Next.js + Tailwind on Vercel. Phase 2 rebuilds the same design in WordPress + Elementor + WooCommerce, so product data is shaped like WooCommerce (see below).

## Stack

- Next.js 16 (App Router, Turbopack), React 19, TypeScript
- Tailwind CSS v4, design tokens in `src/app/globals.css` (`@theme`)
- Fonts via `next/font`: Fraunces (display) + Work Sans (body, variable)
- Playwright for e2e (Desktop 1440, Tablet 1024, Mobile 390)
- Package manager: bun

## Scripts

```bash
bun install
bun dev                      # http://localhost:3000
bun run build && bun start
bunx playwright install chromium webkit   # once
bunx playwright test
```

Set `NEXT_PUBLIC_SITE_URL` in production so Open Graph URLs are absolute (on Vercel it falls back to `VERCEL_PROJECT_PRODUCTION_URL`).

## Structure

```
src/
  app/
    page.tsx                      homepage + Store / FAQPage JSON-LD
    opengraph-image.tsx           homepage OG image (1200x630)
    coffee/guji-natural/
      page.tsx                    PDP + Product JSON-LD (AggregateRating, AggregateOffer)
      opengraph-image.tsx         PDP OG image
  components/
    sections/                     one file per page section
    ui/                           BagVisual, Photo, ProductCard, Button, ...
  lib/
    data.ts                       all page content and products
    images.ts                     photo slots: file, alt text, Flow prompt
    types.ts
  assets/fonts/                   TTF fonts for OG images (OFL)
public/images/                    generated photos
```

## Product data (WooCommerce-shaped)

Products in `src/lib/data.ts` use `variations` for size (340 g, 1 kg) and grind (5 options), a `subscription` block (15% off, every 1, 2 or 4 weeks) and `bundleBags` for the 3-bag box (10% off). Cart is client state only (count + toast); there is no checkout in this phase.

## Photos

Eight photo slots are defined in `src/lib/images.ts`. Each slot renders through `next/image` once its file exists in `public/images/`; until then it shows a cream placeholder with its label. Coffee bags are not photos: the bag stays the CSS `BagVisual` component.

Photos are generated in Google Flow. Every prompt ends with the shared style line:

> Warm natural light, soft shadows, cream and brown palette, editorial documentary photography, shallow depth of field, no text, no logos, no brand names, no watermarks.

| File | Used in | Alt text | Prompt (before the style line) |
| --- | --- | --- | --- |
| `roastery-drum.jpg` | Homepage, Story (main) | Roaster checking beans at the drum roaster | A roaster in a canvas apron checking a sample of freshly roasted coffee beans beside a vintage cast-iron drum coffee roaster, small industrial roastery with brick wall and wooden shelves, morning light from a side window. |
| `green-beans.jpg` | Homepage, Story (overlay) | Green coffee beans spilling from a jute sack | Close-up of unroasted green coffee beans spilling from an open jute sack onto a wooden floor, plain unmarked sack, roastery storage room. |
| `cafe-counter.jpg` | Homepage, Visit cafe card | Ember and Oak cafe counter with espresso machine and pastries | Cozy specialty coffee cafe counter with a chrome espresso machine, ceramic cups, a glass case of pastries, oak wood counter and plants, afternoon light through large windows, no people facing camera. |
| `farm-drying-beds.jpg` | PDP, Farm story | Coffee cherries drying on raised beds in Guji | Red and dark purple coffee cherries drying on raised mesh beds at a washing station in the highlands of Guji, Ethiopia, green hills in the background, golden hour. |
| `pdp-bag-back.jpg` | PDP gallery, thumbnail 2 | Back of the Guji Natural coffee bag on a cream backdrop | Back view of a plain cream kraft-paper coffee bag with a folded top and a blank paper label, standing on a cream linen backdrop, studio product shot, centered composition. |
| `pdp-beans-closeup.jpg` | PDP gallery, thumbnail 3 | Close-up of light roasted Guji Natural coffee beans | Macro close-up of light roasted Ethiopian coffee beans, cinnamon-brown color with visible center seams, scattered on a cream ceramic plate. |
| `pdp-brewed-cup.jpg` | PDP gallery, thumbnail 4 | Pour-over cup of Guji Natural coffee next to a glass server | A cup of pour-over coffee in a handmade cream ceramic cup next to a glass server and a pour-over dripper, light bright brew color, wooden table. |
| `pdp-farm.jpg` | PDP gallery, thumbnail 5 | Smallholder coffee farm on the hills around Shakiso, Guji | Smallholder coffee farm on rolling green hills around Shakiso, Guji, Ethiopia, coffee shrubs with ripe red cherries under shade trees, wide landscape, soft hazy light. |

Export suggestions: JPG, at least 1600 px on the long side; square crops for the four PDP shots, 4:5 for `roastery-drum.jpg`, 16:9 for `cafe-counter.jpg`. Pages are prerendered at build time, so run `bun run build` again after adding photos (`bun dev` picks them up on reload).

## SEO and accessibility

- One `h1` per page; metadata, Open Graph and Twitter card per page
- JSON-LD: `Store` + `FAQPage` on the homepage, `Product` with `AggregateRating` + `AggregateOffer` on the PDP
- Visible `:focus-visible` outline on links, buttons, chips, radios and accordions (terra; mustard inside `.dark` sections and the subscription cadence picker)
- Ticker animation stops under `prefers-reduced-motion`
- PDP sticky add-to-cart bar only below 720px, with bottom padding so it never covers the footer
