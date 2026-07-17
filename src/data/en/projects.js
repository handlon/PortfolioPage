// ── DEV SIDE: PROJECTS (English) ──────────────────────────────────────
// Card visual, in priority order:
//   image : '/screenshots/foo.png' → shows that image
//   url   : 'https://…'            → live iframe preview of the site
//   both null                      → "hosting in progress" panel
// `url` also powers the "visit site" link; `github` adds a repo link.
// Structural fields (id/index/year/url/github/image/stack) are shared
// with the Czech file — keep them in sync; only the prose is translated.

export const projects = [
  {
    id: 'Lenka Handlíková',
    index: '01',
    title: "Lenka Handlíková's website",
    subtitle: 'website for my mother (finance freelancer)',
    description:
      'fully responsive website for my mother, built with react and TailwindCSS. includes calendar booking using calendly.',
    stack: ['react', 'TailwindCSS', 'calendly'],
    year: '2026',
    url: null,
    github: 'https://github.com/handlon/mamka_page',
    image: null,
  },
  {
    id: 'Young Sparks',
    index: '02',
    title: 'Young Sparks',
    subtitle: 'Website for my band',
    description:
      'Full responsive website for my band, built with next.js and TailwindCSS. Includes a custom audio player and tour dates',
    stack: ['React', 'TailwindCSS', 'next.js'],
    year: '2026',
    url: 'https://sparks-page.vercel.app/',
    github: 'https://github.com/handlon/sparks-page',
    image: null,
  },
  {
    id: 'Pavel Handlík',
    index: '03',
    title: "Pavel Handlík's website",
    subtitle: 'Website for my father (musician)',
    description:
      'presentational website for my father, built with react and TailwindCSS.',
    stack: ['React', 'TailwindCSS'],
    year: '2026',
    url: 'https://pavelhandlik.cz/',
    github: 'https://github.com/handlon/tatapage',
    image: null,
  },
  {
    id: 'portfolio',
    index: '04',
    title: 'Portofolio',
    subtitle: '--This website--',
    description:
      'A two-sided portfolio: one identity, two visual worlds. GSAP-driven transitions, canvas particle field and a hand-rolled design system.',
    stack: ['React', 'Vite', 'GSAP', 'Canvas'],
    year: '2026',
    url: '/',
    github: 'https://github.com/handlon/PortfolioPage',
    image: null,
  },
]
