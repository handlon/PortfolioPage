// ── DEV SIDE: PROJEKTY (čeština) ──────────────────────────────────────
// Strukturální pole (id/index/year/url/github/image/stack) jsou sdílená
// s anglickou verzí — drž je v souladu; překládá se jen text.

export const projects = [
  {
    id: 'Lenka Handlíková',
    index: '01',
    title: 'Web Lenky Handlíkové',
    subtitle: 'web pro moji mámu (finanční poradkyně)',
    description:
      'plně responzivní web pro moji mámu, postavený v Reactu a TailwindCSS. Obsahuje rezervaci schůzek přes Calendly.',
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
    subtitle: 'Web pro moji kapelu',
    description:
      'Plně responzivní web pro moji kapelu, postavený v Next.js a TailwindCSS. Obsahuje vlastní audio přehrávač a termíny koncertů.',
    stack: ['React', 'TailwindCSS', 'next.js'],
    year: '2026',
    url: 'https://sparks-page.vercel.app/',
    github: 'https://github.com/handlon/sparks-page',
    image: null,
  },
  {
    id: 'Pavel Handlík',
    index: '03',
    title: 'Web Pavla Handlíka',
    subtitle: 'Web pro mého tátu (muzikant)',
    description:
      'prezentační web pro mého tátu, postavený v Reactu a TailwindCSS.',
    stack: ['React', 'TailwindCSS'],
    year: '2026',
    url: 'https://pavelhandlik.cz/',
    github: 'https://github.com/handlon/tatapage',
    image: null,
  },
  {
    id: 'portfolio',
    index: '04',
    title: 'Portfolio',
    subtitle: '--Tento web--',
    description:
      'Dvoustranné portfolio: jedna identita, dva vizuální světy. Přechody řízené GSAP, částicové plátno a ručně stavěný design systém.',
    stack: ['React', 'Vite', 'GSAP', 'Canvas'],
    year: '2026',
    url: '/',
    github: 'https://github.com/handlon/PortfolioPage',
    image: null,
  },
]
