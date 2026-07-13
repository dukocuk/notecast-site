# NoteCast — marketing site

A single-page marketing website for **NoteCast**, a privacy-first browser
extension that turns any browser tab into clean, structured notes — transcribed
and summarized entirely on the user's own machine.

The site itself practices what the product preaches: **no analytics, no tracking
scripts, no third-party network requests.** Fonts are self-hosted.

## Tech stack

- **React 18/19 + Vite + TypeScript**
- **Tailwind CSS** (v3) for styling — hand-built sections, no component library
- **Framer Motion** for subtle, reduced-motion-aware entrance animation
- **lucide-react** for icons (brand glyphs are small hand-authored SVGs)
- Self-hosted **Inter** + **Plus Jakarta Sans** via `@fontsource`

## Getting started

```bash
npm install
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # type-check + production build to dist/
npm run preview  # preview the production build
npm run lint     # oxlint
```

## Editing content

Copy and product facts live in small data files so they're easy to change:

- `src/config.ts` — **all external links** (`CHROME_STORE_URL`, `GITHUB_URL`,
  `PRIVACY_URL`, `LICENSE_URL`) and the contact email. Update these in one place
  when the extension is published or the repo moves.
- `src/data/nav.ts` — top-nav anchor links
- `src/data/features.ts` — feature cards
- `src/data/steps.ts` — "How it works" steps
- `src/data/trust.ts` — trust-strip chips
- `src/data/faq.ts` — FAQ questions and answers

## Structure

`src/App.tsx` composes the section components under `src/components/`:
`Nav`, `Hero` (+ `HeroMockup`), `TrustStrip`, `HowItWorks` (+ `PipelineDiagram`),
`Features`, `PrivacySpotlight`, `QuickStart` (+ `CodeBlock`), `FAQ`, `FinalCTA`,
and `Footer`. Shared primitives live in `src/components/ui/`.

## Accessibility & motion

- Semantic landmarks, labelled sections, logical heading order, a skip link,
  and visible focus rings.
- Light/dark aware; the theme is set before first paint (inline script in
  `index.html`) to avoid a flash, and can be toggled in the nav.
- Every entrance animation falls back to a visible static state when the user
  prefers reduced motion, so content is never hidden behind an animation.
