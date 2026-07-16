// ── DEV SIDE: PROJECTS ────────────────────────────────────────────────
// PLACEHOLDER content — replace each entry with a real project.
// To add a project, copy an object. Order here = order on the page.
//
// Card visual, in priority order:
//   image  : '/screenshots/foo.png'  → shows that image
//   url    : 'https://…'             → live iframe preview of the site
//   both null                        → styled "screenshot coming soon" panel
//
// `url` also powers the "visit site" link; `github` adds a repo link.

export const projects = [
  {
    id: 'portfolio',
    index: '01',
    title: 'Portofolio',
    subtitle: '--This website--',
    description:
      'A two-sided portfolio: one identity, two visual worlds. GSAP-driven transitions, canvas particle field and a hand-rolled design system.',
    stack: ['React', 'Vite', 'GSAP', 'Canvas'],
    year: '2026',
    url: '/', // points at itself — swap for the live domain once deployed
    github: null, // PLACEHOLDER — add repo link
    image: null,
  },
  {
    id: 'aurora',
    index: '02',
    title: 'Aurora Dash',
    subtitle: 'Realtime analytics dashboard',
    description:
      'Live metrics pipeline with sub-second updates over WebSockets. Built the frontend architecture and the charting layer from scratch.',
    stack: ['React', 'JavaScript', 'WebSockets'],
    year: '2026',
    url: null, // PLACEHOLDER — add live link
    github: null, // PLACEHOLDER — add repo link
    image: null,
  },
  {
    id: 'formhive',
    index: '03',
    title: 'Formhive',
    subtitle: 'Headless form platform',
    description:
      'API-first form backend: schema validation, spam filtering and webhook delivery. Built the API and the dashboard around it.',
    stack: ['Node.js', 'MongoDB', 'Express'],
    year: '2025',
    url: null, // PLACEHOLDER — add live link
    github: null, // PLACEHOLDER — add repo link
    image: null,
  },
  {
    id: 'tempo',
    index: '04',
    title: 'Tempo',
    subtitle: 'Practice tracker for musicians',
    description:
      'Where both worlds meet — a mobile app for logging practice sessions, with streaks, tempo goals and setlist notes.',
    stack: ['React Native', 'Firebase', 'Expo'],
    year: '2025',
    url: null, // PLACEHOLDER — add live link
    github: null, // PLACEHOLDER — add repo link
    image: null,
  },
]
