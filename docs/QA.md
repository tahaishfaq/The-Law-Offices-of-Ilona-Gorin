# Preview QA

Checked 2026-11-12 on a local Astro development server with Playwright. This is a lab review, not a production accessibility audit or field performance measurement.

## Passed

- `npm run check`: 0 errors, 0 warnings, 0 hints. `npm run build`: one static page built successfully.
- At 320, 375, 390, 768, 1024 and 1440px, document scroll width matched viewport width. Full-page screenshots: [390px](screenshots/phase-5-mobile.png), [1440px](screenshots/phase-5-desktop.png). These captures predate the metadata-only Phase 6 change.
- One H1; meaningful title and description; preview has `noindex,nofollow` and no canonical. Added text-only Open Graph and Twitter metadata. No production schema or unapproved social image.
- Browser inspection found no empty or `#` anchors; all six phone anchors use `tel:+18184468005`. Consultation links point to the live contact page. Other destinations were checked against the source inventory; no calls or form submissions were made.
- Mobile menu opens with Enter, reports expanded state, closes with Escape and returns focus to its toggle. Reduced-motion emulation applies the reduced transition duration. A skip link and visible focus style are present.
- No browser console errors on the local preview during the check. Calculated contrast ratios: body on cream 7.60:1; cream on navy 14.92:1; focus blue on navy 3.01:1 and on cream 4.96:1. These are selected token pairs, not a complete contrast audit.

## Outstanding

- Lighthouse/PageSpeed and Core Web Vitals comparisons were not measured. Lighthouse was not available locally; an availability check did not complete. No performance improvement is claimed. Compare built preview and live site under matched conditions in Phase 7 or before client presentation.
- Complete a full keyboard traversal, screen-reader review, contrast audit of every state, real-device checks, and external destination checks. The browser checks above do not establish WCAG conformance.
- Existing site baseline screenshots are available in the baseline audit. The mobile phone target is incorrect on the observed live page. Confirm the hero consultation anchor behavior separately.
- Attorney must approve copy, contact details and any future imagery. Hosting protection and live noindex verification remain for staging.
