# FACEFORM — Your Personal Style Guide

A women-only Hebrew/RTL face styling website in HTML, CSS and vanilla JavaScript. Cream, black, powder pink and beige; responsive layouts, system fonts and keyboard-accessible controls.

## Open locally

Open index.html directly in a modern browser, keeping styles.css and app.js beside it. No build, installation, API key or backend is required. Images are embedded; the questionnaire, photo filtering, favorites and PNG export work offline. Source links and external inspiration search need an internet connection only when clicked.

## Personalization and photographs

- Nine optional personal attributes: face shape, skin depth, undertone, eye color, current hair color, length, texture, brows and makeup preference; seven occasions and eight styles.
- Natural, Elegant and Trendy recommendations keep known face/length/texture constraints and the selected current hair color. Each style has distinct hair finish, makeup direction, accessory direction and a compatible sourced 2026 trend. Makeup preferences take priority over trends, especially no makeup.
- The previous repeated schematic portraits have been removed. Eighteen licensed photographic references illustrate different styling directions. They are inspiration photos of other women, never a simulation of the visitor's face.
- Strict filtering is the only supported mode: a photograph must have documented matches for every known personal input, plus suitable style, occasion, variant and makeup intensity. Unknown source attributes exclude it. Strict filtering can legitimately return no photograph.
- The user explicitly chose verified matches only. There is no partial-match selector or relaxation action. Legacy favorite records are normalized to strict mode; passing a legacy partial-mode option cannot bypass missing-attribute checks.
- When a suitable additional photo is unavailable, the recommendation remains usable as text and palette, with a clearly labeled empty state and a Pinterest search containing the selected aesthetic descriptors. No mismatched/repeated photo is substituted to fill a slot.
- Images include author/source links; the gallery follows the chosen style and personal filter. Style previews avoid repeating a photo where another eligible photo is available. Lightbox navigation follows the filtered collection.
- Favorites store only normalized choices, variant, reference mode and an optional public reference ID. Older FACEFORM favorites remain readable; old VIBE storage is untouched. Removal supports Undo.
- PNG exports combine the selected reference (when available), personalized advice, palette, full selected profile, trend/source name and match limitations. Export also works without a matching photograph.

## Privacy

Personal uploads stay in temporary local browser object URLs. They are not analyzed, sent to a server, stored in localStorage, added to Git, or included in recommendation-card exports. There is no AI, tracking, backend or runtime API. Restart clears the active photo and choices while retaining favorites. Upload validation accepts JPG/PNG/WebP up to 8MB and 40 megapixels.

All image data is bundled in app.js. External source/search links open only after a visitor clicks; searches contain chosen aesthetic descriptors, never their personal photograph.

## 2026 sources

Editorial directions were researched on 2026-10-31, using the [Pinterest Beauty Trend Report 2026](https://newsroom.pinterest.com/en-gb/news/beauty-trend-report-2026/), [Wella Hair Color Trends 2026](https://us.wella.professionalstore.com/en-US/blog/hair-color/2026-hair-color-trends), and [Vogue Fall 2026 Couture Beauty Report](https://www.vogue.com/article/fall-2026-haute-couture-beauty-trend-report).

The app interprets these sources into optional personal styling directions. It does not claim that the licensed stock photos were taken at 2026 shows or automatically fetch a live trend feed. Existing user preferences are never overridden merely to apply a trend.

## Photo credits

The following photographs are used under the [Pexels license](https://www.pexels.com/license/), without implying endorsement. They are integrated with original recommendations, not offered as standalone stock downloads.

- [behrouz sasani](https://www.pexels.com/photo/portrait-of-a-woman-with-makeup-5856399/) — שיער כהה בגימור מבריק, מסורק לאחור ואיפור עיניים חום
- [Polina](https://www.pexels.com/photo/portrait-of-a-woman-with-short-hair-7089210/) — תספורת קצוצה מאוד ואיפור בגוונים זהובים
- [Eric Moura](https://www.pexels.com/photo/portrait-of-a-young-woman-with-curly-hair-22763560/) — תלתלים כהים ותאורת סטודיו צבעונית; גוני עור ועיניים לא אומתו
- [Antonio Conte](https://www.pexels.com/photo/a-close-up-of-a-woman-with-a-fringe-hairstyle-4640558/) — בוב שחור עם פוני ישר ואיפור עיניים מודגש
- [Olena Bohovyk](https://www.pexels.com/photo/photo-of-woman-holding-her-face-3541389/) — הדגשות מבריקות סביב העיניים ושיער כהה אסוף
- [Marlon Alves](https://www.pexels.com/photo/portrait-of-a-woman-with-makeup-on-her-face-13111258/) — שיער חום כהה ארוך והדגשת עיניים בגוון זהוב־כתום
- [Eliza Maria de Souza](https://www.pexels.com/photo/close-up-shot-of-a-woman-s-face-4356958/) — תקריב בגוונים טבעיים ונמשים, עם מרקם העור גלוי
- [Nayla Bernardes](https://www.pexels.com/photo/portrait-of-a-woman-with-red-hair-by-a-window-31850158/) — שיער נחושתי ארוך בתנועה רכה, באור חלון
- [cottonbro studio](https://www.pexels.com/photo/portrait-of-a-woman-with-red-curly-hair-8285885/) — תלתלים רכים באורך הכתפיים, בתאורה חמה
- [Jennings Ford](https://www.pexels.com/photo/striking-portrait-of-a-woman-with-red-hair-34220846/) — תלתלים אדומים, שפתיים מבריקות וצבע עז בצילום ביוטי
- [Andrea Paci Cresti](https://www.pexels.com/photo/a-woman-in-black-shirt-looking-up-with-sunglasses-in-her-head-5043345/) — בוב בהיר עם פוני דק, עגילים ומשקפי שמש על הראש
- [Pexels](https://www.pexels.com/photo/portrait-of-girl-with-short-haircut-5301008/) — בוב חום בהיר עם קווצות חופשיות במסגרת הפנים
- [behrouz sasani](https://www.pexels.com/photo/portrait-of-a-woman-with-short-gray-hair-looking-at-the-camera-7316541/) — שיער כסוף קצר עם נפח עליון ומסגרת אסימטרית
- [Alexander Krivitskiy](https://www.pexels.com/photo/close-up-studio-portrait-of-a-young-woman-with-gray-hair-20208896/) — שיער כסוף במסגרת דרמטית ואיפור מודגש בסטודיו
- [Alexander Krivitskiy](https://www.pexels.com/photo/elegant-portrait-of-woman-with-silver-hair-30063351/) — נפח מוברש בגוון כסוף, איפור ערב ותכשיט אלגנטי
- [Marcos Felipe](https://www.pexels.com/photo/woman-with-curly-black-hair-15306981/) — תלתלים שחורים ארוכים ומסגרת פנים פתוחה
- [Vika Kirillova](https://www.pexels.com/photo/portrait-of-beautiful-woman-with-long-wavy-blonde-hair-11621973/) — שיער בלונד ארוך בגלים רכים וגימור טבעי
- [Bruno Henrike](https://www.pexels.com/photo/blonde-woman-with-flowing-hair-in-studio-portrait-35547037/) — שיער ארוך ובהיר בגימור חלק ומוברש

## Validation and limits

Tests cover 16,128 recommendation combinations, 293 documented image mismatches including legacy mode options, all 18 photo records, explicit missing attributes, style-specific directions, preference-safe 2026 trends, unique image selection and targeted search descriptors. DOM tests exercise the actual controls, strict-only filters, empty states, lightbox/credits, saved choices/Undo/storage failure, personal-photo validation/cleanup, and PNG download success/error with and without a reference image. Native Canvas exports were inspected visually.

These are source/DOM/Canvas checks, not a browser layout review. Automated localhost browser access remains blocked by the saved browser permission.

## Deployment

Published from main / repository root through GitHub Pages: [Open FACEFORM](https://fianna04-commits.github.io/ex1/).
