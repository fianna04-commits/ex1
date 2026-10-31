# FACEFORM project

This is a static Hebrew/RTL personal face styling app, published from `main` to GitHub Pages. Runtime files are `index.html`, `styles.css`, and classic `app.js`, with no build, external dependencies, AI, APIs, or backend. It must also work when opening index.html directly. Focus on hair, hair color, makeup, eyebrows, glasses, and earrings; do not add clothing recommendations.

## Delivery workflow

The user requested that changes we make be pushed automatically. After finishing each requested change, run relevant checks, commit the task's files, push to `origin/main`, and verify the Pages deployment. If the user requests local-only work or a different branch, follow that instruction instead. Do not force-push or include unrelated user changes.

## Personal photos

Display personal photos locally using temporary object URLs. Do not analyze them, upload them, or include them in Git, favorites, recommendation-card exports, telemetry, or server storage. Recommendations use manually selected attributes. The user subsequently requested real online styling references instead of repeated schematic portraits: use licensed photographic examples with explicit attribute audits. Do not claim that an inspiration photo is an edit/simulation of the user's face.

## Design and behavior

Use cream, black, powder pink and beige with an editorial beauty-magazine style. Maintain mobile layouts, Hebrew RTL, visible keyboard focus, reduced-motion support, and named color choices. Keep three rule-based recommendation variants (Natural, Elegant, Trendy), optional questionnaire fields, instant updates, local favorites, and PNG recommendation-card export. Makeup preferences must take priority over style/event suggestions. Keep saved photos out of localStorage. Existing VIBE favorites under their old storage key must not be overwritten.

The audience is women only. Respect known face structure, hair length and texture as recommendation eligibility constraints. Preserve the selected current hair color; alternative dye colors remain optional suggestions. Do not force three different haircuts or repeat a photo merely to fill result slots. Use strict photo matching by default: all known selected attributes must have a recorded match. The visitor can explicitly choose partial-information inspiration; even then, reject all documented contradictions and visibly list missing source attributes. Never infer skin undertone or facial structure from stock photos. Unknowns remain unknown. Keep the full nine-attribute + event + style breakdown accessible for each look. Filter gallery, styles, favorites and exports consistently.

Keep all eight style directions distinct in hair finish, makeup/accessory treatment and optional palette accents. 2026 trend claims must cite verified primary/editorial sources in the UI. Trends must not override no-makeup, length, texture, or current-color preferences. Stock images illustrate directions; never label them as photographs taken at 2026 shows unless their actual provenance supports that claim. Preserve no-photo PNG exports and explicit empty states when no eligible reference exists.
