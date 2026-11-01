# FACEFORM — Your Personal Style Guide

A women-only Hebrew/RTL face styling website in HTML, CSS and vanilla JavaScript. Cream, black, powder pink and beige; responsive layouts, system fonts and keyboard-accessible controls.

## Open locally

Open index.html with styles.css and app.js beside it. No build, installation, API key or backend is required. Personalization and local favorites work offline. The explicitly requested publisher-hosted cosmetics images, source guides and Pinterest searches require internet access. External images have a visible failure state and do not block recommendations.

## Personalization and references

- Nine optional personal attributes, seven occasions and eight style directions; Natural, Elegant and Trendy variants preserve selected structure, length, texture, current hair color and makeup preference.
- The previous Pexels library has been removed. Current image references come from ten reviewed official Charlotte Tilbury marketing/tutorial images, loaded from the publisher's own image URLs, with source credit and links. The images are not user-face simulations and do not imply endorsement of FACEFORM. No reuse license or photographer identity is asserted.
- Strict matching is mandatory. Every selected personal attribute must have a recorded match; missing source attributes or contradictions reject a picture. Face structure and undertone are not inferred from photographs. No partial-match mode or silent relaxation is available, including for old favorites.
- Hero, style previews, result cards, gallery, favorites and exports follow the same eligibility rules. If no source picture can be verified against all selected requirements, show a message and targeted Pinterest search instead. Unselected traits stay unknown.
- Distinct hair finish, makeup/accessory direction, optional palette accents and sourced 2026 direction for each style. All known preferences remain above trend suggestions. Marketing pictures are not represented as 2026 runway photographs.
- Separate earrings, glasses and hats recommendations with alternatives, a color direction, face-shape explanation and category-specific Pinterest query. Hat guidance also considers style, hair texture and occasion. Current accessory photographs are not claimed as verified; the UI displays an explicit empty state and external-search fallback.
- Official Charlotte Tilbury and L’Oréal Paris how-to links are offered as guidance, with eye-color routing when relevant. They are not described as full-profile photo matches and are omitted for no-makeup preferences.
- Up to 18 local favorites with restore, remove and Undo; legacy favorite modes are normalized to strict matching. Old VIBE storage is untouched.
- Downloadable PNG cards include the eligible brand reference when anonymous CORS loading succeeds, personalized guidance, hats, palette, source and selection details. If the external image fails, export still works with text/palette and an explicit notification.

## Privacy and source access

Personal photos stay in temporary browser object URLs. They are never analyzed, sent to a server, stored in localStorage, committed, or included in exports. Image references use no-referrer requests and anonymous CORS for card exports; no external scripts, AI services or backend are used. JPG/PNG/WebP uploads accept 8MB / 40 megapixels. Restart clears the active photo/choices and retains favorites.

The source policy allows Pinterest or official cosmetics-brand publications. Agent browsing of a Pinterest Pin was rejected by the browser-origin approval gate during this task; no workaround was attempted. Uninspected Pins were not imported or labeled verified. Category-specific Pinterest links remain available for the visitor to open directly; external search results are not verified by FACEFORM.

## Sources

- [Charlotte Tilbury: Get the Look](https://www.charlottetilbury.com/ca/content/get-the-look), the reviewed source of all ten reference-image URLs. Images remain hosted by the publisher; local review copies are not included in the website deliverable.
- [L’Oréal Paris: Makeup for Brown Eyes](https://www.lorealparisusa.com/beauty-magazine/makeup/eye-makeup/makeup-for-brown-eyes).
- [L’Oréal Paris: Daytime Eye Makeup by Eye Color](https://www.lorealparisusa.com/beauty-magazine/makeup/eye-makeup/daytime-eye-makeup-by-eye-color).
- [Pinterest Beauty Report 2026](https://newsroom.pinterest.com/en-gb/news/beauty-trend-report-2026/), [Wella Hair Color 2026](https://us.wella.professionalstore.com/en-US/blog/hair-color/2026-hair-color-trends), and [Vogue Couture FW26](https://www.vogue.com/article/fall-2026-haute-couture-beauty-trend-report) inform optional 2026 styling directions. Research date: 2026-10-31. Guidance is curated rather than a live trend feed.

## Validation

Checks cover 16,128 full-profile combinations, strict brand-source selection, legacy-mode rejection, earrings/glasses/hats, style/structure/color/event changes, full-context category search URLs, and no-makeup-safe brand guides. DOM integration covers the controls, strict empty states, source links, accessory cards, favorites/Undo/restore, image failures, local-photo validation/cleanup, and PNG export success/fallback. Native Canvas generated a brand-reference recommendation card for inspection. Publisher image URLs returned JPEG content, and the publisher CDN supplies wildcard CORS for anonymous exports.

These are source/DOM/Canvas checks, not a full browser layout review. Browser-origin permission restrictions remain in effect.

## Deployment

Published from main / repository root: [Open FACEFORM](https://fianna04-commits.github.io/ex1/).
