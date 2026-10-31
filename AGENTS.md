# FACEFORM project

This is a static Hebrew/RTL personal face styling app, published from `main` to GitHub Pages. Runtime files are `index.html`, `styles.css`, and classic `app.js`, with no build, external dependencies, AI, APIs, or backend. It must also work when opening index.html directly. Focus on hair, hair color, makeup, eyebrows, glasses, and earrings; do not add clothing recommendations.

## Delivery workflow

The user requested that changes we make be pushed automatically. After finishing each requested change, run relevant checks, commit the task's files, push to `origin/main`, and verify the Pages deployment. If the user requests local-only work or a different branch, follow that instruction instead. Do not force-push or include unrelated user changes.

## Personal photos

Display personal photos locally using temporary object URLs. Do not analyze them, upload them, or include them in Git, favorites, recommendation-card exports, telemetry, or server storage. Recommendations use manually selected attributes. Personalized examples must be generated SVG illustrations from those same attributes, never ranked stock photos. The only stock photo is the clearly labeled editorial hero.

## Design and behavior

Use cream, black, powder pink and beige with an editorial beauty-magazine style. Maintain mobile layouts, Hebrew RTL, visible keyboard focus, reduced-motion support, and named color choices. Keep three rule-based recommendation variants (Natural, Elegant, Trendy), optional questionnaire fields, instant updates, local favorites, and PNG recommendation-card export. Makeup preferences must take priority over style/event suggestions. Keep saved photos out of localStorage. Existing VIBE favorites under their old storage key must not be overwritten.

The audience is women only. Respect every known face structure, hair length and texture as eligibility constraints before ranking style choices. Preserve the selected current hair color in all examples; other hair colors may be offered as optional suggestions. Do not replace incompatible choices merely to make three different haircuts. Render the chosen skin tone/undertone, eye color, hair color/length/texture, brow shape and makeup preference in every result, style-card, gallery, favorite and export illustration. Unknown fields must stay explicitly unknown. Show the complete nine-attribute + event + style breakdown for each look. Illustrations are schematic and must not be described as analysis or a simulation on the user's photo.
