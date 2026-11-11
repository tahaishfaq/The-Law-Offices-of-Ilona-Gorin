# Ilona Gorin homepage preview

An Astro homepage preview. Interior links point to the existing website. The preview does not collect leads and must not be deployed to the firm's domain.

Requires Node.js 22.23.4 or newer. Run `npm install` and `npm run dev` for local development. Use `npm run check` or `npm run build` for validation.

## Design and assets

The landing page uses warm neutral surfaces and a deep green accent, Manrope typography, generous spacing, and simple rectangular surfaces. Manrope is self-hosted through Fontsource under the SIL Open Font License 1.1. Semantic color roles, typefaces, container width, and section spacing live in `src/styles/global.css`. Use the color roles instead of hard-coded component colors. Shared button and link styles live there as well.

`src/components/ui/ImagePlaceholder.astro` marks the spaces reserved for approved photography. Replace its instances in `Resources.astro` with final images and descriptive alt text. The supplied About image is `public/assets/about-us.png`. The full-width hero background is `public/assets/hero.png`; check text contrast if it is replaced. The placeholders are intentional; do not treat them as final imagery.

The homepage retains existing firm information and links. Obtain approval before adding testimonials, client logos, or other claims.

Client testimonials are managed in `src/data/testimonials.ts`. The preview uses short public review excerpts with source links. Replace them with the firm’s preferred reviews when supplied.
