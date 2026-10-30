# VIBE — הלוק שלך, הווייב שלך

A playful, Hebrew/RTL personal-style app. Choose a style and an occasion, set your preferences, and explore three illustrated looks.

## Features

- Six style directions and six occasions.
- Manual choices for face shape, skin tone/undertone, eyes, hair color/texture/length, glasses and beard.
- Recommendations respect makeup preference, available time, maintenance, budget and keeping the current hair length.
- Editable SVG illustration: hairstyle, texture, hair/lip/blush/clothing colors and makeup intensity.
- Base/look comparison, SVG download and up to 12 local favorites.
- Optional local reference photo. The photo is not analyzed, uploaded or included in saved looks.
- Curated autumn 2026 trends with links to Pinterest and Wella primary sources, checked 2026-10-30. Trend content does not update automatically.

## How it works

There is **no AI**, face recognition, backend, account or external image processing. Recommendations use transparent, hand-written style rules and user preferences. The illustration demonstrates a color/style combination, not a prediction of a real haircut or makeup result. There are no beauty ratings or inferred identity attributes.

Favorites are stored in `localStorage` on the current browser/device only. Personal photos use temporary local object URLs and are never stored in `localStorage`. The only external asset request is the optional Heebo font from Google Fonts; system fonts work if it is unavailable.

## Run locally

Serve this folder over HTTP using any static web server. No build or dependencies are needed. Opening `index.html` directly as a file may block JavaScript modules; use the published GitHub Pages URL or a local server.

## Deploy

The root of the `main` branch contains the site. Enable **Settings → Pages → Deploy from a branch → main → / (root)**. The expected project URL is https://fianna04-commits.github.io/ex1/.

## Source

- `index.html`: page and accessible form structure.
- `styles.css`: responsive visual design.
- `engine.mjs`: input normalization, style rules, trend catalog and SVG rendering.
- `app.mjs`: UI, local photo preview, editor and favorites.
- `favicon.svg`: app icon.

No keys or email addresses are embedded in the site.
