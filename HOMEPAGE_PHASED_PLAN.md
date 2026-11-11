# HOMEPAGE_PHASED_PLAN.md — Agent Execution Plan

> **Project:** The Law Offices of Ilona Gorin / Astro homepage preview  
> **Input:** Read `PRODUCT_CONTEXT.md` before editing any source code.  
> **Execution strategy:** Implement **one phase at a time**. Verify each gate, report progress, and wait for the developer's approval to continue. Never start a full-site migration without an explicit new brief.

## Universal instructions for the coding agent

1. Inspect the repo first. Reuse existing code if present; do not overwrite working project setup blindly.
2. The homepage must be authored in Astro + TypeScript + Tailwind CSS v4. Minimal vanilla JavaScript is acceptable for navigation. Do **not** introduce React/shadcn as a default dependency.
3. Follow the `PRODUCT_CONTEXT.md` facts, assets policy, draft copy and preview routing. Any uncertain legal marketing claim must be omitted or flagged, never guessed.
4. Keep commits/changes small and phase-specific. Avoid refactoring unrelated files. Avoid placeholders in user-facing finished sections.
5. Use design tokens, reusable components, semantic HTML, keyboard accessibility, responsive UI, real `tel:` / `mailto:` / destination links, images with verified rights.
6. After each phase run available checks (`npm run build`, `npx astro check` when configured), inspect at least 390px and 1440px widths, and report actual findings.
7. Deliver after each phase: summary, files changed, completed checklist, any screenshots, test results, open questions/blockers, next recommended phase. **Stop** for review.
8. The preview is not the real law firm's site. Do not submit or collect leads, generate a fake testimonial, or deploy to the real business domain.

## Phase overview

| Phase | Deliverable | Gate |
|---|---|---|
| 0 | Audit/repo/asset inventory and content verification | Plan and assets clear |
| 1 | Astro scaffold, Tailwind v4, tokens, base layout | Builds, brand foundation works |
| 2 | Header, hero, mobile navigation and CTAs | Primary call path works everywhere |
| 3 | Practice areas and attorney introduction | Both audiences have clear pathways |
| 4 | Why choose us, resources and FAQ entry | Credibility/content is coherent |
| 5 | Final CTA, footer and responsive finishing | Complete visual homepage |
| 6 | Accessibility, metadata, performance and QA | Release checklist passes |
| 7 | Staging deployment and client comparison pack | Shareable demo + evidence |

---

## Phase 0 — Reconnaissance, content, screenshot and assets

**Purpose:** Build from accurate context and leave a traceable audit. No production changes.

**Agent tasks**
- Read `PRODUCT_CONTEXT.md`, existing repo, package scripts, source layout and any existing artifacts.
- Create `docs/SOURCE_INVENTORY.md`: firm name, phone, address, contact email and current live URLs (with source URLs and date), practice areas, biography and 2 genuine blog titles.
- Create `docs/ASSET_LICENSES.md`: every intended image, source, use status (approved / needs approval / not usable), attribution/license constraints. Use no unlicensed asset.
- Inspect supplied homepage screenshot and current website, if access is available. Capture baseline screenshots at 390x844 and 1440x900; record issues in `docs/BASELINE_AUDIT.md`.
- Identify any unverified facts and create `docs/CONTENT_APPROVALS.md` with a clear checklist.
- Select design direction and visual fallback **without** pretending an architectural stock image depicts the firm.

**Acceptance criteria**
- Source inventory includes verified phone number and existing page routes.
- No logo or portrait invented or copied without rights check.
- Baseline and fact-check notes exist; website untouched.

**Copy-paste agent instruction**
> Read PRODUCT_CONTEXT.md and inspect the repository and existing site references. Perform ONLY Phase 0 from HOMEPAGE_PHASED_PLAN.md. Create the source, assets, baseline and approvals documents; don't implement the homepage yet. Give me a concise audit and proposed design direction, then STOP for review.

---

## Phase 1 — Astro setup, design tokens and component foundations

**Purpose:** Establish an extensible static Astro architecture, not a generic boilerplate landing page.

**Agent tasks**
- If the project doesn't exist: initialize with `npm create astro@latest` (TypeScript strict where supported). If it does, adapt, do not replace.
- Add Tailwind CSS v4 using `npx astro add tailwind` (supported Astro versions) or `tailwindcss` + `@tailwindcss/vite` per current official docs. Do **not** use the deprecated Tailwind v3-era `@astrojs/tailwind` integration as the new setup.
- Implement `src/styles/global.css` with CSS-first `@theme` design tokens from product context. Define base typography, focus, container, buttons, sections, subtle transitions and reduced-motion handling.
- Create `src/data/site.ts` for canonical business info and a `links` object with absolute existing-site destinations in demo mode.
- Implement `BaseLayout.astro` with title, description, robots noindex for preview, viewport, imports, landmarks, favicon placeholder.
- Add starter UI atoms only if they will actually be reused: `ActionLink.astro`, `SectionHeading.astro`, container utilities.
- Create a minimal `index.astro` composition shell and ensure build/check scripts are working.

**Acceptance criteria**
- `npm run dev` starts and `npm run build` succeeds.
- `npx astro check` succeeds once check tooling is installed.
- Tailwind v4 utilities and tokens render correctly.
- Page title is firm-specific; preview uses noindex.
- No lorem ipsum or inflated dependency list.

**Copy-paste agent instruction**
> Execute ONLY Phase 1. Scaffold/refine the Astro + TypeScript + Tailwind CSS v4 project, implement design tokens and reusable base layout/config. Use the exact context and routing rules from PRODUCT_CONTEXT.md. No page sections beyond an accessible skeleton. Run build/check and STOP with file summary and results.

---

## Phase 2 — Site header, navigation and high-conversion hero

**Purpose:** Deliver the first screen that sells the redesign; fix the previously reported phone-number issue.

**Agent tasks**
- Implement `SiteHeader.astro`: attractive firm wordmark, desktop navigation, real contact CTA; compact mobile layout with accessible menu toggle (Escape and outside-click handling only if needed).
- Implement `Hero.astro` with eyebrow, H1, copy, proper CTAs, supporting location line. Use the approved photo if rights are confirmed; otherwise a high-quality editorial typographic/abstract fallback.
- Make header/hero carefully responsive at 320, 390, 768, 1024 and 1440px; no huge blank space or illegible overlaid type.
- All phone anchors **must** use `tel:+18184468005` (not the displayed formatted string or placeholder).
- Every `Request a Consultation` link on preview goes to `https://www.gorinlawgroup.com/contact`.
- Avoid parallax, video, giant overlays, unnecessary JS and artificial social proof.

**Acceptance criteria**
- Main hero H1 is clear and exactly one on page.
- Correct phone and consultation actions in both desktop and mobile menus.
- No navigation tab opens a non-existent demo route.
- Menu is keyboard and screen-reader usable; focus state visible.
- At 390px, H1, service description and actions remain readable and obvious.

**Copy-paste agent instruction**
> Execute ONLY Phase 2, focusing on premium editorial header and hero, accessibility and conversion. Use sourced draft copy; do not add speculative facts. Check desktop/mobile layouts and inspect the `tel:` and consultation URLs in rendered output. STOP and give me screenshots or a detailed rendered-UI review.

---

## Phase 3 — Practice areas and Ilona's introduction

**Purpose:** Communicate the two real services and humanize the law office.

**Agent tasks**
- Implement `PracticeAreas.astro` with two balanced, highly readable service cards with real destinations.
- Implement `AttorneyIntroduction.astro` with biography summary and real external profile destination; use a genuine cleared portrait only. If not cleared, use an editorial layout with no fictitious professional photo.
- Make visual pattern distinct and intentional: light practice section, contrast attorney section; no repeated stock image tiles.
- Keep accurate copy about insurance-side experience and founding date but flag any material statements for client review.

**Acceptance criteria**
- Personal injury and business both have prominent, equally discoverable links.
- Cards work with keyboard, are not completely clickable while hiding a separate confusing button, and don't depend on hover.
- Attorney name and biography text match the sourced public profile; no invented credentials.
- Good mobile stacking, image alt text, no overflow.

**Copy-paste agent instruction**
> Execute ONLY Phase 3. Create the two featured practice areas and attorney section using PRODUCT_CONTEXT.md and verified current pages. Prioritize service clarity and real human credibility. Do not add claims, photos or awards without the explicit approval notes. Test links/layout and STOP.

---

## Phase 4 — Differentiators and resources

**Purpose:** Replace generic trust imagery/statistics with useful reasons to take the next step.

**Agent tasks**
- Implement `WhyChooseUs.astro` with three concise, editorial text-led value props from context; keep copy modest, no fabricated results.
- Implement `Resources.astro` using two existing real blog titles and verified actual URLs, or link to `/blog` if exact post URLs haven't been validated. A light FAQ entry can link to the live FAQ, no need for complex accordions unless appropriate.
- Do not replicate unapproved `30 years`, `millions recovered`, `thousands of settlements` counters; no fake testimonials.
- Ensure visual pacing: appropriate section spacing, gentle alternating backgrounds, typography hierarchy.

**Acceptance criteria**
- Differentiators are firm-specific rather than interchangeable generic marketing buzzwords.
- Resources lead to live, relevant content; no broken slug guesses.
- No unverified outcome statistics or fabricated quotes.

**Copy-paste agent instruction**
> Execute ONLY Phase 4. Add careful credibility and legal-resource sections that feel editorial, not templated. All resource links must be verified. Avoid unapproved case results, generic testimonials and exaggerated advertising. Test and STOP.

---

## Phase 5 — Final conversion section, footer and visual finishing

**Purpose:** Complete the homepage journey and make it feel production-grade.

**Agent tasks**
- Implement `ContactCTA.astro` with a visually distinct consultation invitation, correct number, existing-site contact URL and published office address.
- Implement `SiteFooter.astro` with canonical firm name, verified phone/email/address and existing legal/practice/attorney/blog links. No invented social media or generic policies.
- Refine spacing, photography/crops, borders, hover/focus, heading lengths, card alignment and mobile section transitions.
- Avoid sticky UI that blocks browser content on small screens; no unnecessary popups.
- Ensure footer and CTA noindex/demo behavior does not misrepresent production status.

**Acceptance criteria**
- Every CTA on page works, no fake form.
- Footer info matches single source `site.ts`.
- Page reads coherently from hero to final CTA at both 390 and 1440px.
- Visual system feels consistent; no generic placeholder blocks.

**Copy-paste agent instruction**
> Execute ONLY Phase 5. Finish the contact CTA/footer and provide a full page visual polish pass at mobile and desktop widths. Use the centralized business details, avoid unsupported claims and ensure no dead links. Stop after an end-to-end screenshot review.

---

## Phase 6 — QA, accessibility, SEO preview and performance

**Purpose:** Turn a nice-looking design into a credible, measurable demonstration.

**Agent tasks**
- Run `npm run build` and `npx astro check` (install check dependencies if needed). Fix all errors and relevant warnings.
- Validate all anchors (`tel`, mailto, URLs); ensure there are no fake buttons, unknown routes, blank `href`, invalid nested anchors.
- Run viewport QA at 320, 375, 390, 768, 1024, 1440px; capture at least phone + desktop screenshots.
- Keyboard test focus order, menu toggle, Escape, contrast, headings, alt text; verify reduced-motion setting.
- Verify title, description, OG/social basics, robots noindex on preview. Don't emit fake production canonical URLs on staging.
- Optimize images, preload/priority only for LCP image when needed; lazy load below-fold, size fonts, no CLS-inducing media layout.
- Run PageSpeed/Lighthouse on preview and current website with consistent conditions if tools available. Record actual metrics with date and method. Avoid declaring performance victory from a single noisy run.
- Write `docs/QA.md` and `docs/PREVIEW_CHANGES.md` with fixed issues, design differences, limitations, pending legal approvals, and performance evidence.

**Acceptance criteria**
- Working clean build/check, no horizontal scroll or catastrophic layout shift.
- No console errors, broken navigation, inaccurate contact phone or nonfunctional CTA.
- Preview noindex working, page labels/landmarks/contrast acceptable, no real lead collection.
- Results and limitations honestly documented; no fabricated performance metrics.

**Copy-paste agent instruction**
> Execute ONLY Phase 6: audit and fix homepage code, navigation, responsive layout, a11y, metadata, noindex and performance. Create a factual QA report and before/after list with **measured** results only. Do not change scope or implement the full site. STOP with any remaining blockers.

---

## Phase 7 — Controlled preview deployment and client comparison assets

**Purpose:** Produce a shareable demo without risking the real firm.

**Agent tasks**
- Choose a suitable staging host; use a preview project/subdomain separate from `gorinlawgroup.com` and avoid authorizing the firm's assets/accounts on the developer's behalf.
- Set `noindex,nofollow`; add host access protection if available and practical. Check the live preview URL serves the built page over HTTPS.
- Verify phone and contact links in a real phone browser where possible; link to existing site interior pages intentionally.
- Capture matched screenshots of old/new at 390px and 1440px. Create `docs/PREVIEW_CHANGES.md`: 5 before/after points that a non-technical business owner can understand.
- Capture performance comparison only if actually measured and reproducible; state lab vs field limitations.
- Provide final link and short client explanation, emphasizing website **has not** been altered.

**Acceptance criteria**
- Staging page accessible to Ilona as intended, and excluded from indexing; HTTPS works.
- Demo contains no unauthorized lead collection or privileged content.
- Short change list, screenshots, and measured QA summary available.
- Ready for Taha to send the preview email; the agent does **not** email Ilona unless specifically directed/authorized.

**Copy-paste agent instruction**
> Execute ONLY Phase 7. Deploy the approved Astro homepage to private/noindex staging, verify the real URL and contact paths, and prepare desktop/mobile comparison images plus a short plain-English improvement summary. Don't touch Webflow, DNS or production email. STOP and return the preview URL and evidence.

---

## Visual and functional QA checklist (copy into issue tracker)

- [ ] Formal firm name visible and correct; no unapproved abbreviation
- [ ] Phone displays `(818) 446-8005` and every call anchor has `tel:+18184468005`
- [ ] All consultation CTAs link to existing `/contact` for preview; no broken local `/contact`
- [ ] Both practice cards link to the right live service pages
- [ ] Attorney link points to the real biography
- [ ] Verified blog/FAQ links point to live resources
- [ ] Only one H1; headings descend logically; meta title not template
- [ ] Mobile header navigates with keyboard and screen reader; visible focus states
- [ ] No overflow at 320px, 390px, 768px, 1024px, 1440px
- [ ] Body copy readable; CTA targets >=44px; image alts accurate
- [ ] Hero image, if used, cleared for use and correctly optimized
- [ ] No testimonials/stats/results/portrait/awards made up
- [ ] No preview lead capture; noindex; reasonable access protection
- [ ] Build/check passes; no serious console or image errors
- [ ] Desktop/mobile before-after screenshots saved
- [ ] Actual rather than invented speed numbers; fair comparison
- [ ] Preview email describes only improvements implemented and tested

## How to review each phase

After each phase, report exactly:

```text
PHASE: N — [name]
STATUS: complete / blocked / partial
FILES CREATED/CHANGED: ...
WHAT WORKS: ...
CHECKS RUN: commands and actual output
VISUAL QA: viewports checked; screenshots/notes
FACTS OR ASSETS NEEDING APPROVAL: ...
RISKS / OPEN ISSUES: ...
NEXT PHASE RECOMMENDATION: ...
STOPPED: yes
```

## Suggested first action

Start **Phase 0**, then **Phase 1**, then seek visual approval of the **Phase 2 hero** before filling the rest of the page. The hero and header will make the first impression on Ilona, so iterate there before building less critical below-the-fold sections.
