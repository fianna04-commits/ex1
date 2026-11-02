# FACEFORM — Your Personal Style Guide

A women-only Hebrew/RTL face styling website in HTML, CSS and vanilla JavaScript. Cream, black, powder pink and beige; responsive layouts, system fonts and keyboard-accessible controls.

## Open locally

Open index.html with styles.css and app.js beside it. No build, installation, API key or backend is required. Personalization and local favorites work offline. The explicitly requested publisher-hosted cosmetics images, source guides and Pinterest searches require internet access. External images have a visible failure state and do not block recommendations.

## Personalization and references

- Nine optional personal attributes, seven occasions and eight style directions; Natural, Elegant and Trendy variants preserve selected structure, length, texture, current hair color and makeup preference.
- The previous Pexels library has been removed. Current image references come from 49 reviewed official marketing/tutorial images: 40 from Charlotte Tilbury and nine from M·A·C Cosmetics, loaded from the publisher's own image URLs, with source credit and links. The images are not user-face simulations and do not imply endorsement of FACEFORM. No reuse license or photographer identity is asserted.
- Strict matching is mandatory. Every selected personal attribute must have a recorded match; missing source attributes or contradictions reject a picture. Face structure and undertone are not inferred from photographs. No partial-match mode or silent relaxation is available, including for old favorites.
- The catalogue includes 32 hair references and 12 accessory references (categories overlap), including waves, curls, shorter cuts, copper hair, deeper skin, earrings, glasses and hats. Copper is kept distinct from burgundy/vivid-red hair. One publisher-described bare-faced photo supports no-makeup selections. Attributes that are obscured or ambiguous remain unknown.
- None of the current 49 records has verified face-shape or undertone metadata. Selecting either intentionally yields no photos; written recommendations and targeted external searches still use those selected values. The gallery now names selected attributes that have no verified catalogue coverage.
- Gallery cards have individual look titles, publisher credit, an inventory/eligible counter, 12-item pagination and keyboard focus on the first newly revealed card. Changing criteria resets pagination; the lightbox can navigate all photos in the current filter. Broken gallery images receive an explicit failure message.
- Hero, style previews, result cards, gallery, favorites and exports follow the same eligibility rules. If no source picture can be verified against all selected requirements, show a message and targeted Pinterest search instead. Unselected traits stay unknown.
- Distinct hair finish, makeup/accessory direction, optional palette accents and sourced 2026 direction for each style. All known preferences remain above trend suggestions. Marketing pictures are not represented as 2026 runway photographs.
- Separate earrings, glasses and hats recommendations with alternatives, a color direction, face-shape explanation and category-specific Pinterest query. Hat guidance also considers style, hair texture and occasion. Curated accessory photos are shown only when they pass all selected profile/style/occasion checks; otherwise an explicit empty state and external-search fallback remain.
- Official Charlotte Tilbury and L’Oréal Paris how-to links are offered as guidance, with eye-color routing when relevant. They are not described as full-profile photo matches and are omitted for no-makeup preferences.
- Up to 18 local favorites with restore, remove and Undo; legacy favorite modes are normalized to strict matching. Old VIBE storage is untouched.
- Downloadable PNG cards include the eligible brand reference when anonymous CORS loading succeeds, personalized guidance, hats, palette, source and selection details. If the external image fails, export still works with text/palette and an explicit notification.

## Privacy and source access

Personal photos stay in temporary browser object URLs. They are never analyzed, sent to a server, stored in localStorage, committed, or included in exports. Image references use no-referrer requests and anonymous CORS for card exports; no external scripts, AI services or backend are used. JPG/PNG/WebP uploads accept 8MB / 40 megapixels. Restart clears the active photo/choices and retains favorites.

The source policy allows Pinterest or official cosmetics-brand publications. Agent browsing of a Pinterest Pin was rejected by the browser-origin approval gate during this task; no workaround was attempted. Uninspected Pins were not imported or labeled verified. Category-specific Pinterest links remain available for the visitor to open directly; external search results are not verified by FACEFORM.

## Sources

- [Charlotte Tilbury: Get the Look](https://www.charlottetilbury.com/ca/content/get-the-look), one of the reviewed source hubs. Each catalogue record links directly to its publication. Images remain hosted by the publisher; local review copies are not included in the website deliverable.
- [Charlotte Tilbury: Pillow Talk on Dark Skin](https://www.charlottetilbury.com/ca/secrets/pillow-talk-makeup-look-dark-skin), [Pillow Talk Look](https://www.charlottetilbury.com/ca/secrets/get-pillow-talk-look), and the individual official tutorials linked on each reference.
- [M·A·C: Doja Cat Makeup](https://www.maccosmetics.co.uk/blogs/mac-trend/doja-cat-makeup), [Diwali 2026](https://www.maccosmetics.co.uk/blogs/mac-trend/diwali-2026-makeup-look), [Ashtin Earle](https://www.maccosmetics.co.uk/blogs/mac-trend/ashtin-earle-beauty-tips), and [Blush by Esther](https://www.maccosmetics.co.uk/blogs/mac-trend/olandria-blush-painted-by-esther).
- [L’Oréal Paris: Makeup for Brown Eyes](https://www.lorealparisusa.com/beauty-magazine/makeup/eye-makeup/makeup-for-brown-eyes).
- [L’Oréal Paris: Daytime Eye Makeup by Eye Color](https://www.lorealparisusa.com/beauty-magazine/makeup/eye-makeup/daytime-eye-makeup-by-eye-color).
- [Pinterest Beauty Report 2026](https://newsroom.pinterest.com/en-gb/news/beauty-trend-report-2026/), [Wella Hair Color 2026](https://us.wella.professionalstore.com/en-US/blog/hair-color/2026-hair-color-trends), and [Vogue Couture FW26](https://www.vogue.com/article/fall-2026-haute-couture-beauty-trend-report) inform optional 2026 styling directions. Research date: 2026-10-31. Guidance is curated rather than a live trend feed.

## Validation

Checks cover 16,128 full-profile combinations, all 867 curated image/style/occasion combinations, per-attribute conflict/unknown rejection, strict brand-source selection, legacy-mode rejection, earrings/glasses/hats, style/structure/color/event changes, full-context category search URLs, and no-makeup-safe brand guides. DOM integration covers the controls, strict empty states, source links, accessory cards, favorites/Undo/restore, image failures, local-photo validation/cleanup, and PNG export success/fallback. Additional DOM checks cover pagination, cross-page lightbox navigation, filter/page resets, newly revealed card focus, coverage notices, accessory filters and the no-makeup photo. Native Canvas generated Charlotte Tilbury and M·A·C recommendation cards for inspection. All 30 credited source pages returned HTTP 200 and contained their credited image paths. The new reference-image responses were decoded and visually reviewed; both publisher CDNs supplied wildcard CORS for anonymous exports.

These are source/DOM/Canvas checks, not a full browser layout review. Browser-origin permission restrictions remain in effect.

## Deployment

Published from main / repository root: [Open FACEFORM](https://fianna04-commits.github.io/ex1/).
