# FACEFORM — Your Personal Style Guide

A complete women-only Hebrew/RTL face styling website in HTML, CSS and vanilla JavaScript. An editorial beauty design in cream, black, powder pink and beige, with mobile layouts and keyboard-accessible controls.

## Open locally

Open index.html directly in a modern browser. Keep index.html, styles.css and app.js together. No installation, build, API key, server or internet connection is needed. A local static HTTP server is optional.

## Features

- Optional local face-photo preview, with replacement, removal and JPG/PNG/WebP validation (8MB / 40 megapixels).
- Nine optional personal attributes: face shape, skin depth, undertone, eye color, current hair color, length, texture, brows and makeup preference. Illustrated face shapes, brows and texture choices accompany named color swatches.
- Seven occasions and eight personalized illustrated style cards: Natural, Clean Look, French Chic, Old Money, Soft Glam, Classic, Bold and Editorial.
- Instant, deterministic JavaScript recommendations: Natural, Elegant and Trendy. Each includes hair alternatives, hair colors, makeup, brows, a named palette, glasses, earrings and explanations. A no-makeup preference is respected across all events and styles. Suggestions are options, not absolute appearance rules.
- Eight personalized SVG style examples, gallery filters, a keyboard-navigable lightbox, and style selection from the gallery. Every illustration uses the same selected face structure, skin/undertone, eyes, current hair color/length/texture, brows and makeup preference. Known face structure, texture and length constrain haircut eligibility before style ranking. All three looks preserve the chosen hair color; alternative colors are clearly optional. Unknown attributes are labeled, not inferred. Each result and lightbox includes all nine personal fields plus event and style.
- Up to 18 favorites in localStorage, reopening saved preferences, removal with Undo, and graceful handling of unavailable storage. Favorites use faceform.saved.v1; old VIBE favorites are left untouched.
- Downloadable PNG recommendation cards combining a personalized SVG illustration with written recommendations, colors, the complete selected profile and a clear schematic-illustration disclaimer. Personal photos are never included in these cards.
- Restart clears the current questionnaire/photo after confirmation and keeps favorites.

## Privacy and scope

There is no AI, face analysis, backend, account, analytics or runtime API. Recommendations use only explicitly selected questionnaire answers. Personal photos use temporary browser object URLs, never leave the browser and never enter localStorage, Git or exports. Reloading the page clears the current personal photo. Only selected profiles and favorite variants are stored locally. Illustrations are schematic examples built from manual selections, not analysis of or simulations on the user's photograph. The editorial hero is explicitly labeled as a general photo; it is not a personalized recommendation.

The editorial hero photo, generated SVG illustrations, icons and system fonts are self-contained in the three runtime files. No external runtime assets are requested. The hero photo is embedded in app.js for offline use.

## Photo credits

The general editorial hero photo is by [behrouz sasani](https://www.pexels.com/photo/portrait-of-a-woman-with-makeup-5856399/), used under the [Pexels license](https://www.pexels.com/license/). It is not a personalized result and does not imply endorsement. All personalized examples are drawn locally with SVG.

## Validation

The personalized implementation was checked with 16,128 combinations of face shape, texture, length, style, occasion and makeup preference, verifying eligibility constraints and preservation of the selected hair color in all three variants. SVG checks cover every personal input, actual skin/eye/hair fill colors and explicit unknown states. DOM integration checks cover questionnaire controls, instant results, RTL tab navigation, favorite save/restore/Undo/storage errors, gallery navigation, photo validation and cleanup, restart, and PNG download success/failure. Native Canvas produced six example portraits and a personalized recommendation card for visual inspection; CSS syntax and core text/background contrast were checked.

These checks do not substitute for a browser layout review. Automated localhost browser access was blocked by the saved browser permission during development.

## Deployment

Published from main / repository root through GitHub Pages: [Open FACEFORM](https://fianna04-commits.github.io/ex1/).
