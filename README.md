# FACEFORM — Your Personal Style Guide

A complete Hebrew/RTL face styling website in HTML, CSS and vanilla JavaScript. An editorial beauty design in cream, black, powder pink and beige, with mobile layouts and keyboard-accessible controls.

## Open locally

Open index.html directly in a modern browser. Keep index.html, styles.css and app.js together. No installation, build, API key, server or internet connection is needed. A local static HTTP server is optional.

## Features

- Optional local face-photo preview, with replacement, removal and JPG/PNG/WebP validation (8MB / 40 megapixels).
- Nine optional personal attributes: face shape, skin depth, undertone, eye color, current hair color, length, texture, brows and makeup preference. Illustrated face shapes, brows and texture choices accompany named color swatches.
- Seven occasions and eight photographic style cards: Natural, Clean Look, French Chic, Old Money, Soft Glam, Classic, Bold and Editorial.
- Instant, deterministic JavaScript recommendations: Natural, Elegant and Trendy. Each includes hair alternatives, hair colors, makeup, brows, a named palette, glasses, earrings and explanations. A no-makeup preference is respected across all events and styles. Suggestions are options, not absolute appearance rules.
- Eight embedded inspiration photographs, gallery filters, a keyboard-navigable lightbox, photo credits, and style selection from the gallery.
- Up to 18 favorites in localStorage, reopening saved preferences, removal with Undo, and graceful handling of unavailable storage. Favorites use faceform.saved.v1; old VIBE favorites are left untouched.
- Downloadable PNG recommendation cards combining inspiration photography with written recommendations, colors and a clear inspiration disclaimer. Personal photos are never included in these cards.
- Restart clears the current questionnaire/photo after confirmation and keeps favorites.

## Privacy and scope

There is no AI, face analysis, backend, account, analytics or runtime API. Recommendations use only explicitly selected questionnaire answers. Personal photos use temporary browser object URLs, never leave the browser and never enter localStorage, Git or exports. Reloading the page clears the current personal photo. Only selected profiles and favorite variants are stored locally. Inspiration photos are not simulations of the user's face.

All images, SVG icons and system fonts are self-contained in the three runtime files. The only outbound links are optional photo-credit links that the visitor chooses to open. Source-image data is embedded in app.js to support offline use without additional runtime files.

## Photo credits

Prepared Pexels photographs are used under the [Pexels license](https://www.pexels.com/license/). They illustrate general styling directions and do not imply endorsement.

- [behrouz sasani](https://www.pexels.com/photo/portrait-of-a-woman-with-makeup-5856399/) — דיוקן עם שיער אסוף ואיפור בגוונים רכים
- [Polina](https://www.pexels.com/photo/portrait-of-a-woman-with-short-hair-7089210/) — דיוקן עם תספורת קצרה ומרקם טבעי
- [Eric Moura](https://www.pexels.com/photo/portrait-of-a-young-woman-with-curly-hair-22763560/) — דיוקן עם תלתלים טבעיים ושיער כהה
- [Antonio Conte](https://www.pexels.com/photo/a-close-up-of-a-woman-with-a-fringe-hairstyle-4640558/) — דיוקן עם בוב כהה ופוני ישר
- [Olena Bohovyk](https://www.pexels.com/photo/photo-of-woman-holding-her-face-3541389/) — דיוקן עם איפור מבריק ומראה ערב
- [Marlon Alves](https://www.pexels.com/photo/portrait-of-a-woman-with-makeup-on-her-face-13111258/) — דיוקן עם איפור עיניים מודגש
- [Eliza Maria de Souza](https://www.pexels.com/photo/close-up-shot-of-a-woman-s-face-4356958/) — דיוקן תקריב בגוונים טבעיים
- [Amir Saeid Dehghan](https://www.pexels.com/photo/portrait-of-a-man-s-face-13108275/) — דיוקן עם שיער קצר וזקן

## Validation

The implementation was checked with 16,128 combinations of face shape, texture, length, style, occasion and makeup preference. DOM integration checks cover questionnaire controls, instant results, RTL tab navigation, favorite save/restore/Undo/storage errors, gallery navigation, photo validation and cleanup, restart, and PNG download success/failure. Native Canvas produced a recommendation card for visual inspection; CSS syntax and core text/background contrast were checked.

These checks do not substitute for a browser layout review. Automated localhost browser access was blocked by the saved browser permission during development.

## Deployment

Published from main / repository root through GitHub Pages: [Open FACEFORM](https://fianna04-commits.github.io/ex1/).
