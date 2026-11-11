# PRODUCT_CONTEXT.md — Law Offices of Ilona Gorin | Astro Homepage Preview

> **Project status:** Unpaid homepage concept / client-approved demonstration, **not** a production migration.  
> **Version:** 1.0 | **Date:** 2026-11-12 | **Owner:** Taha Ishfaq  
> **Read with:** `HOMEPAGE_PHASED_PLAN.md`. This file is the source of truth for the implementation agent.  
> **Actual framework:** **Astro** (not Astra); TypeScript and Tailwind CSS v4.

## 0. Mission and non-negotiables

Build a beautiful, credible, conversion-oriented, **real working responsive homepage preview** for **The Law Offices of Ilona Gorin**. The attorney replied to outreach and requested evidence of improvements. This preview should demonstrate an improved path to contact the firm, a refined brand presentation, clearly separated practice areas, good technical foundations, accessibility, and a potentially faster lightweight frontend.

**Primary success condition:** Ilona can open the preview on mobile and desktop and immediately understand what changed, why it is better for her clients, and how to request consultation or call the office. This is a chance to earn approval for the paid full-site migration, **not** a mandate to build the rest of the website.

**Hard rules**
1. Do not change, log into, deploy to, or alter the existing website, Webflow account, domain, DNS, analytics, emails, or production forms.
2. Do not invent case results, attorney awards, testimonials, client counts, settlements, guarantees, trial results, affiliations, years, licenses, business hours, service geographies, or attorney/staff photographs.
3. Never request sensitive medical details in a demo form. **No form submissions or lead capture in the preview.** Use real links to the firm's existing contact page.
4. Implement proper phone links **everywhere**: `tel:+18184468005` displayed as `(818) 446-8005`. Never use the erroneous template number `(406) 555-0120`.
5. The public preview must have `noindex` (prefer `noindex,nofollow`) and should use access protection if host supports it. Do **not** place production-only structured data/canonicals on a staging preview as if it were the real firm domain.
6. Do not guarantee Google rankings, inquiries, conversions, Lighthouse scores, SEO outcomes, cost savings, or that there are no recurring costs. Measure improvements instead.
7. Use only approved/cleared imagery and copy. A photo on a publicly accessible site is not automatic permission to reuse it; treat existing asset rights as **pending confirmation** for a final deployment.
8. The free preview covers **one homepage** plus reusable layout/components. Interior pages, CMS, new blog and production form backend are *out of scope*.
9. Every clickable element must behave correctly; no dead buttons, `href="#"`, fake testimonials, fake counters, broken menus or pretend forms.
10. Make design decisions with restraint: premium and professional, not a flashy SaaS landing page or a generic law-template clone.

## 1. Source of truth and confirmed public context

- Existing homepage: https://www.gorinlawgroup.com/
- Attorney: https://www.gorinlawgroup.com/attorney/ilona-gorin
- Practice list: https://www.gorinlawgroup.com/legal-services
- Personal injury: https://www.gorinlawgroup.com/services/personal-injury
- Business services: https://www.gorinlawgroup.com/services/business-formation-and-transactions
- Contact: https://www.gorinlawgroup.com/contact
- Team: https://www.gorinlawgroup.com/team
- FAQ: https://www.gorinlawgroup.com/faq
- Blog: https://www.gorinlawgroup.com/blog

**Public identity**
- Formal name: `The Law Offices of Ilona Gorin` (avoid calling it “Gorin Law Group” on the visible page unless owner authorizes that as a brand)
- Attorney: `Ilona Gorin`, described publicly as founder and attorney at law
- City: Encino, California
- Physical address published on website: `16255 Ventura Blvd, Suite 1255, Encino, CA 91436`
- Phone: `(818) 446-8005` / `tel:+18184468005`
- Site footer email: `ilona@gorinlawgroup.com` / `mailto:ilona@gorinlawgroup.com`
- Contact page also displays `reception@gorinlawgroup.com`; use `ilona@...` for preview consistency unless owner requests the reception mailbox.
- Main services presently listed: **personal injury** and **business formation, agreements and transactions**.
- Public attorney bio says she began working with firms defending businesses/insurers, established her own practice in **2004**, and later expanded to help small businesses. If citing experience/credentials, paraphrase conservatively and flag for owner review.

**Identified site problems / opportunities**
- **Confirmed by Ilona:** top mobile phone link dialed the wrong number (a template placeholder).
- Homepage title currently exposes `Solicitor - Webflow HTML website template`.
- Existing `Request a consultation` hero link appears to return to the homepage rather than contact; confirm manually before showing as a verified claim.
- The supplied screenshot shows a dense cityscape hero, generic copy, low prominence CTA, staggered dark photographic cards, oversized stats with minimal explanation, and practice areas represented by large dark images.
- The current homepage includes claims of `30` years, `Millions of Dollars` recovered, `Thousands` of settlements. **Do not reproduce these statistics** without approval and substantiation; they are not required for the demo.
- Public FAQ has information about no upfront cost for certain accident cases; do not turn this into a blanket “free legal services” or “free consultation for every case” claim.

## 2. Audience, goals and positioning

### Visitor 1 — Person dealing with an injury
- Wants to identify relevant services and call an attorney quickly.
- Needs clear language and reassurance without promises of outcomes.
- Can call without scrolling and can reach contact information within one interaction.

### Visitor 2 — Small business owner
- Wants help with entity formation, contracts, agreements or transactions.
- Must clearly see a **business law** entry point; do not make the homepage look like personal injury is the firm's only practice.
- Can view business services and contact the firm immediately.

### Client — Ilona
- Wants a website that appears credible, works on a phone and accurately represents her practice.
- Does not want to lose existing SEO pages, service content or contact functionality in any later migration.
- Should not need to learn what Astro, hydration, LCP or Tailwind mean to appreciate the work.

### Preview business goal
Show improvements in (a) conversion paths, (b) design quality, (c) clarity of content, and (d) technical quality **with evidence**. The final paid migration has not been commissioned.

## 3. Scope

### Must deliver in preview
- Mobile-first homepage at `/` using Astro, TypeScript and Tailwind CSS v4.
- Shared design tokens, typography, layout, buttons, cards, section shells and navigation.
- Responsive utility/header, accessible mobile navigation, clear hero, practice areas, attorney intro, trust differentiators, modest FAQ/resources area, contact CTA and footer.
- All number links correct; any consultation CTA goes to the **real, existing** website contact URL during the demo.
- Meaningful, firm-specific browser title and description; single H1; social meta tags with a placeholder only if suitable.
- Page optimized for good Core Web Vitals; document actual Lighthouse results after testing (do not manufacture scores).
- Noindex on preview, useful error-free layout, production-quality polish.
- Before/after desktop/mobile captures and a concise improvement summary for Ilona.

### Deliberately out of scope until paid approval
- Rebuilding attorney, contact, team, practice area, FAQ, blog, case-study or legal-service pages.
- Form backend, intake workflow, appointment booking integration, ongoing SEO management or CMS editor.
- Client domain, DNS, MX records, hosting migration, production analytics, Webflow billing changes, redirects, content migrations or production monitoring.
- Pricing proposal commitments beyond what the developer previously offered.

## 4. Product design direction: “Quiet legal confidence”

**Aesthetic:** Boutique, high-trust California law office. Editorial rather than corporate; clear rather than decorative. Light ivory surfaces with deep navy accents, subtle muted gold rules, professional imagery, spacious layouts, careful serif headlines, crisp sans-serif supporting text.

**Must avoid:** bronze gradients everywhere; glassmorphism; neumorphism; excessive shadows; oversized icon grids; stock gavels/scales; unrelated lawyer portraits; meaningless animated numbers; hero carousel; full-screen distracting video; deep-black text over dark photos; buzzword copy; overused SaaS patterns.

### Foundation tokens

| Token | Value | Use |
|---|---|---|
| `--color-ink` | `#17243A` | Navy headings, footer, hero surface |
| `--color-ink-strong` | `#101A2A` | Rich dark surfaces |
| `--color-cream` | `#FCFAF6` | Main page canvas |
| `--color-sand` | `#F4F0E9` | Alternating section surface |
| `--color-gold` | `#B9965A` | Accent rules/background details, NOT small light-background text |
| `--color-gold-text` | `#745225` | Darker accessible gold-toned text (test contrast) |
| `--color-body` | `#455266` | Body secondary text |
| `--color-border` | `#E0DDD6` | Hairlines |
| `--color-white` | `#FFFFFF` | Text/surfaces |
| `--color-focus` | `#2563EB` | Strong visible focus ring |

Implement design tokens in `src/styles/global.css` with Tailwind v4 `@theme` and CSS custom properties; avoid ad hoc one-off colors in all components. Validate color contrast in context; adjust before delivery.

### Type, spacing, layout
- Headlines: `Libre Baskerville` / licensed WOFF2 self-hosted if available; fallback `Georgia, serif`.
- UI/body: `Inter` / system fallback. Do not load a third decorative font.
- Body text: approximately 16–18px; line-height 1.6–1.75. Headlines use responsive `clamp()` or Tailwind responsive type.
- One content container at `max-width: 1200px`, mobile padding 20px, desktop 32–48px.
- Main section spacing: approximately 72–112px desktop, 48–72px mobile; consistent 8px rhythm.
- Buttons: touch target >=44px, accessible states, no tiny text. Gold CTA on navy only if contrast passes; solid navy on light background works well.
- Corners: square to softly rounded (`4–10px`), minimal shadows and borders.
- Imagery: editorial crops, not collage cards. Use Astro image optimization and explicit dimensions.
- Motion: gentle transition for links/menu, honor `prefers-reduced-motion`, no scroll-trigger libraries for demo.

### Desktop/mobile composition
- **Desktop header:** compact utility strip showing location/phone (optional email), large legible brand name, balanced menu, CTA. **Mobile:** firm name or readable abbreviation + call affordance and accessible menu button.
- **Desktop hero:** asymmetrical editorial split (~55% copy / 45% image or secondary visual), navy/paper contrast, H1 and CTAs visible without seeking. **Mobile:** text first, then image; phone CTA visible without hunting.
- Practice cards side by side desktop, stacked mobile; attorney editorial split alternating visual/text; trust points in simple 3-column desktop, stacked mobile; FAQ and articles in compact section rather than endless page.
- Avoid a long wall of copy or hero images that swallow the mobile viewport.

## 5. Page information architecture and proposed content

All text below is **draft copy** adapted to published practice descriptions; attorney must approve for final production.

### Section 1 — Utility/header
- Wordmark: `THE LAW OFFICES OF ILONA GORIN` (no pretend logo).
- Main nav: `Home` (demo `/`), `Practice Areas` (homepage `#practice-areas` or live `/legal-services`), `About Ilona` (homepage `#about` or live attorney page), `Insights` (live `/blog`), `Contact` (live `/contact`).
- Primary CTA: `Call (818) 446-8005` -> `tel:+18184468005`.
- Secondary contact action: `Request a Consultation` -> `https://www.gorinlawgroup.com/contact` **during preview only**.
- Never show the old placeholder number.

### Section 2 — Hero
- Eyebrow: `ENCINO, CALIFORNIA`.
- H1: `Personal Injury & Business Law. Personal Attention When It Matters.`
- Text: `The Law Offices of Ilona Gorin assists people with personal injury matters and helps business owners navigate formation, agreements, and transactions. Speak with our office about your situation.`
- Primary CTA: `Request a Consultation` -> existing live contact page.
- Secondary CTA: `Call (818) 446-8005` -> tel URI.
- Supporting line: `Serving clients from our office in Encino, California.`
- Visual priority: real attorney portrait with permission; alternative professional neutral architecture with clear licensing and **no suggestion it depicts her office**. If suitable image is not cleared, use an elegant typographic/abstract composition instead.

### Section 3 — Practice-area overview (critical)
- Eyebrow: `HOW WE HELP`.
- H2: `Focused Legal Guidance for Life and Business.`
- Intro: `Explore two principal areas of practice, with clear next steps for getting in touch.`
- Card: `Personal Injury` — `Guidance after car accidents, rideshare incidents, falls, dog bites, and other injury matters.` CTA `Explore Personal Injury` -> `https://www.gorinlawgroup.com/services/personal-injury` in preview.
- Card: `Business Formation & Transactions` — `Support for new entities, agreements, contract negotiations, and business transactions.` CTA `Explore Business Services` -> `https://www.gorinlawgroup.com/services/business-formation-and-transactions` in preview.
- Both cards should be visually equally important; no giant imagery obscuring copy.

### Section 4 — Attorney introduction
- Eyebrow: `MEET ILONA GORIN`.
- H2: `Experience Informs Every Conversation.`
- Draft: `Ilona Gorin founded her practice in 2004 after working with law firms representing businesses and insurance companies. Her practice now includes personal injury matters and legal guidance for small businesses.`
- Link: `Read Ilona’s Biography` -> `https://www.gorinlawgroup.com/attorney/ilona-gorin` during preview.
- Mark details for client confirmation; no embellished credentials.
- Photograph: only the genuine, permission-cleared Ilona photo. Use designed fallback if unavailable.

### Section 5 — Why this firm
- Eyebrow: `THE APPROACH`.
- H2: `Legal Support With Clarity and Care.`
- Three concise advantages (no unverifiable claims):
  1. `Individual Attention` — `An approach centered on understanding the specifics of your matter.`
  2. `Insurance-Side Perspective` — `Experience with insurance-related matters informs the firm's approach to injury claims.`
  3. `Two Areas of Focus` — `Help for people facing injury claims and for owners making business decisions.`
- No autoplay counters or unapproved outcome statistics.

### Section 6 — Resources / helpful answers
- H2: `Helpful Legal Resources`.
- Include **two** cards pointing to the actual existing blog articles, using exact approved titles:
  - `When Should You Hire a Personal Injury Attorney in Los Angeles?`
  - `Five Things to Do After a Slip and Fall Accident in LA`
- Retrieve the true URLs from the current `/blog` listing. If unverified, use `/blog` rather than invent a slug.
- Include optionally **one or two** FAQ previews only if copy is reviewed; otherwise a simple `Explore Frequently Asked Questions` link -> `https://www.gorinlawgroup.com/faq`.
- Avoid AI-generated legal advice or unsupported fee statements.

### Section 7 — Final CTA / office contact
- H2: `Have a Legal Question? Start With a Conversation.`
- Description: `Contact our Encino office to discuss how we may be able to help.`
- Buttons: `Request a Consultation` -> live `/contact`; `Call (818) 446-8005` -> tel.
- Office location: `16255 Ventura Blvd, Suite 1255, Encino, CA 91436`.
- Note: Do not imply contacting the office establishes an attorney-client relationship.

### Section 8 — Footer
- Brand, short service description, office address, phone, email, links to existing contact/practice/attorney/blog/FAQ pages.
- Copyright year generated at build time; no invented social profiles, bar credentials or privacy-policy URL.
- Do not fabricate legal disclaimers; approved, minimal disclaimer can be added for production after attorney review.

## 6. Preview routing behavior

**IMPORTANT:** Only `/` exists in the Astro demo. Interior link URLs in the demo must be *absolute links to the existing production site* rather than non-existent demo pages. This is intentional, and should be disclosed when presenting the preview.

```ts
export const site = {
  firmName: 'The Law Offices of Ilona Gorin',
  phoneDisplay: '(818) 446-8005',
  phoneHref: 'tel:+18184468005',
  email: 'ilona@gorinlawgroup.com',
  emailHref: 'mailto:ilona@gorinlawgroup.com',
  address: '16255 Ventura Blvd, Suite 1255, Encino, CA 91436',
  productionOrigin: 'https://www.gorinlawgroup.com',
  preview: true,
} as const;

export const links = {
  contact: `${site.productionOrigin}/contact`,
  personalInjury: `${site.productionOrigin}/services/personal-injury`,
  business: `${site.productionOrigin}/services/business-formation-and-transactions`,
  attorney: `${site.productionOrigin}/attorney/ilona-gorin`,
  blog: `${site.productionOrigin}/blog`,
  faq: `${site.productionOrigin}/faq`,
};
```

- Prefer central `site.ts`/`links.ts` configuration; never duplicate literals throughout components.
- On paid full migration, switch centrally to internal routes after those pages actually exist.
- Anchored homepage links can be local: `#practice-areas`, `#about`, etc.; external links must not be simulated with JavaScript.

## 7. Technical architecture

**Dependencies:** Astro stable, TypeScript, Tailwind v4 with `@tailwindcss/vite` (or `npx astro add tailwind` on supported Astro), optional `lucide`-compatible SVGs used lightly. Skip React/shadcn for a static brochure unless a later interaction truly needs it.

Recommended file structure:

```text
gorin-law-homepage/
├─ astro.config.mjs
├─ package.json
├─ public/
│  ├─ favicon.svg                     # simple typographic mark, not a fake client logo
│  └─ robots.txt                      # staging: no indexing; real protection preferred
├─ src/
│  ├─ assets/images/                 # owned/licensed/approved images only
│  ├─ components/
│  │  ├─ layout/SiteHeader.astro
│  │  ├─ layout/SiteFooter.astro
│  │  ├─ sections/Hero.astro
│  │  ├─ sections/PracticeAreas.astro
│  │  ├─ sections/AttorneyIntroduction.astro
│  │  ├─ sections/WhyChooseUs.astro
│  │  ├─ sections/Resources.astro
│  │  ├─ sections/ContactCTA.astro
│  │  ├─ ui/ActionLink.astro
│  │  └─ ui/SectionHeading.astro
│  ├─ data/site.ts
│  ├─ layouts/BaseLayout.astro
│  ├─ pages/index.astro
│  └─ styles/global.css
├─ docs/
│  ├─ ASSET_LICENSES.md
│  ├─ QA.md
│  └─ PREVIEW_CHANGES.md
└─ README.md
```

- Use Astro `.astro` components rather than unnecessary React islands.
- `global.css` imports `tailwindcss` and defines `@theme` tokens. Use CSS variables consistently.
- Prefer semantic `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, correctly nested headings, lists, real `<a>` elements.
- Mobile menu: `<button aria-expanded>` with keyboard Escape, properly named menu and visibility state; a small amount of vanilla JS is fine. Consider native `<details>` if it meets usability and style requirements.
- Asset pipeline: `astro:assets` `<Image />`/`<Picture />` for imported local images, width/height/aspect ratio, `loading="lazy"` below fold; optimize hero carefully for LCP.
- Don't add custom JS animation libraries, carousels, sliders, analytics SDKs or a state management library.
- Preview metadata: descriptive title and description, `robots: noindex,nofollow`, no production canonical on staging, normal social preview content if you have a suitable verified image. Staging-level disallow is not a substitute for noindex if crawler cannot read the page; prefer auth protection.

### Working SEO copy
- HTML title (preview, descriptive): `Personal Injury & Business Law in Encino | Ilona Gorin`
- Description: `The Law Offices of Ilona Gorin assists clients with personal injury matters and business formation, agreements, and transactions from Encino, California.`
- One H1 from the hero. Use heading hierarchy for lower sections.
- Production schema and canonical will be configured later, after approved full migration and facts check.

## 8. Quality and performance bars

- All links functional; `tel:+18184468005` exact everywhere, including mobile sticky/utility CTAs.
- `npm run build` succeeds, `npx astro check` passes after installing project checks.
- Responsive: no horizontal overflow at 320, 375/390, 768, 1024, 1440px; avoid text over photos that becomes unreadable.
- Keyboard access, visible focus, accessible labels, 44px+ touch targets; test against WCAG 2.2 AA principles where applicable.
- Test on Chrome mobile emulation and desktop. Respect reduced-motion settings.
- Prefer performance over decorative complexity: minimal JS, small CSS, modern responsive imagery, no render-blocking fonts.
- Core Web Vitals **targets** (not promises): LCP <=2.5s, INP <=200ms, CLS <=0.1 in applicable field data; Lighthouse 90+ *aspirational* mobile. Save actual data instead of inventing scores.
- Compare Lighthouse results using the same viewport and throttling/test approach on old and preview sites. If old site is blocked or data insufficient, report that limitation.
- No serious console errors, empty links, unapproved client claims, broken images or fake social handles.
- Preview should be private/controlled and not indexed. Never tell Ilona a production form is active when it is not.

## 9. Definition of done

The homepage is done only when: (a) its design is polished and coherent, (b) every CTA leads to an appropriate real destination, (c) source claims are accurate and owner-sensitive claims flagged, (d) preview is responsive/accessible, (e) build/checks pass, (f) staging noindex is implemented, (g) screenshots and honest performance notes exist, and (h) `docs/PREVIEW_CHANGES.md` plainly explains what Ilona should inspect.

**After preview approval, do not start a full migration without a separately agreed scope, permissions, URL inventory, approved assets, form setup, hosting and client-owned access.**

## 10. Sources and implementation references

- Live site and public pages listed in Section 1; checked 2026-11-12.
- Astro/Tailwind integration: https://docs.astro.build/en/guides/styling/
- Tailwind v4 + Astro: https://tailwindcss.com/docs/installation/framework-guides/astro
- Astro images: https://docs.astro.build/en/guides/images/
- Google page experience: https://web.dev/articles/vitals
- State Bar of California professional conduct/advertising guidance: https://www.calbar.ca.gov/Attorneys/Conduct-Discipline/Rules/Rules-of-Professional-Conduct
