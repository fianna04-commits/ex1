# VIBE — הלוק שלך, הווייב שלך

A playful, Hebrew/RTL personal-style app. Choose a style and an occasion, set your preferences, and explore three illustrated looks.

## Features

- Six style directions and six occasions.
- A 0–100% change-preference slider with fine drag/keyboard control and ±10 buttons. It gradually affects color contrast and makeup intensity; bigger hair changes still respect budget, maintenance and keeping the current length.
- Manual choices for face shape, skin tone/undertone, eyes, hair color/texture/length, glasses and beard.
- Recommendations respect makeup preference, available time, maintenance, budget and keeping the current hair length.
- Editable SVG illustration: hairstyle, texture, hair/lip/blush/clothing colors and makeup intensity.
- Base/look comparison, SVG download and up to 12 local favorites, with Undo for removals.
- A local personal-photo studio: manually place lipstick, two blush areas and two eyeshadow areas directly on a photo. Adjust position, size, angle, color, softness and opacity, using dragging, keyboard arrows, position buttons or sliders.
- Compare with the original, undo edits, reset overlays, transfer colors from an illustrated look and download a PNG without editing guides. No face detection, image upload or photo persistence.
- Curated autumn 2026 trends with links to Pinterest and Wella primary sources, checked 2026-10-30. Trend content does not update automatically.

## How it works

There is **no AI**, face recognition, backend, account or external image processing. Recommendations use transparent, hand-written style rules and user preferences. The illustration demonstrates a color/style combination, not a prediction of a real haircut or makeup result. There are no beauty ratings or inferred identity attributes.

Favorites are stored in `localStorage` on the current browser/device only. Personal photos use temporary local object URLs and are never stored in `localStorage`. The only external asset request is the optional Rubik font from Google Fonts; system fonts work if it is unavailable.

The interface uses a consistent cobalt/neutral palette, Hebrew-first typography, local SVG icons, larger color targets, visible keyboard focus and responsive form controls. Photo validation errors appear beside the upload control. Removed favorites can be restored for 10 seconds; the Undo action stays accessible inside the favorites dialog. Photo edits have a separate in-memory undo history, and never enter favorites.

Photo color layers start at approximate positions and must be aligned manually. They are a color experiment, not a realistic makeover prediction. Photos up to 8MB/40 megapixels are accepted; previews fit within 1000px and exported PNGs within 1600px on the long edge. Photo data remains local and is cleared when removed or the page is closed.

Favorites created before the 0–100 slider retain their saved appearance. Their old 0/1/2 preference is migrated to 0/50/100 when opened.

## Run locally

Serve this folder over HTTP using any static web server. No build or dependencies are needed. Opening `index.html` directly as a file may block JavaScript modules; use the published GitHub Pages URL or a local server.

## Deploy

The root of the `main` branch contains the site. Enable **Settings → Pages → Deploy from a branch → main → / (root)**. The expected project URL is https://fianna04-commits.github.io/ex1/.

## Source

- `index.html`: page and accessible form structure.
- `styles.css`: responsive visual design.
- `engine.mjs`: input normalization, style rules, trend catalog and SVG rendering.
- `app.mjs`: UI, local photo preview, editor and favorites.
- `icons.mjs`: local SVG icon set; no icon library or network dependency.
- `photo-engine.mjs`: bounded overlay state, proportional sizing and Canvas rendering.
- `photo-studio.mjs`: local photo lifecycle, manual editing controls, comparison, Undo and PNG export.
- `favicon.svg`: app icon.

No keys or email addresses are embedded in the site.
