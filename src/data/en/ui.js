// ── UI STRINGS (English) ──────────────────────────────────────────────
// Every on-screen label that isn't part of the content data files.
// Functions are used where a value is interpolated with content.

export const ui = {
  title: {
    landing: 'Jan Handlík — Developer & Musician',
    dev: 'Jan Handlík — Web Developer',
    music: 'Jan Handlík — Musician',
  },
  a11y: { sections: 'Sections', language: 'Language' },

  landing: {
    devEyebrow: '01 / code',
    devWord: ['DEVE', 'LOPER'],
    devTags: 'react · web · AI',
    devAria: 'Enter the developer side',
    musicEyebrow: '02 / music',
    musicWord: ['Musi', 'cian'],
    musicTags: 'banjo · guitar · bass',
    musicAria: 'Enter the musician side',
    enter: 'enter',
    hint: 'one person · two sides — pick one',
    foot: '© 2026 Jan Handlík',
  },

  dev: {
    nav: { work: 'WORK', skills: 'SKILLS', contact: 'CONTACT' },
    toMusic: '⇄ MUSIC SIDE',
    role: 'WEB DEVELOPER',
    tag: '// clean code. sharp interfaces. scalable web solutions.',
    cta: 'EXPLORE MY WORK',
    projects: {
      eyebrow: '01 / SELECTED WORK',
      heading: 'PROJECTS',
      visit: 'VISIT SITE',
      live: 'LIVE',
      code: 'CODE',
      placeholder: 'hosting in progress',
      visitAria: (t) => `Visit ${t}`,
      screenshotAlt: (t) => `${t} — screenshot`,
      livePreview: (t) => `${t} — live preview`,
    },
    caps: { eyebrow: '02 / CAPABILITIES', heading: 'WHAT I DO' },
    edu: { label: 'EDUCATION', status: { done: 'completed', next: 'up next' } },
    contact: { eyebrow: '03 / CONTACT', heading: "LET'S BUILD" },
    footer: {
      note: '© 2026 JAN HANDLÍK',
      cross: 'ALSO A MUSICIAN',
      crossEm: 'hear the other side',
    },
  },

  music: {
    nav: { about: 'About', bands: 'Bands', music: 'Music', contact: 'Contact' },
    toDev: '⇄ dev side',
    heroSub: 'bluegrass multi-instrumentalist — banjo · guitar · bass',
    ctaPrimary: 'hear my music',
    ctaSecondary: 'book a session',
    stagePhoto: 'stage photo — coming soon',
    a11y: {
      youtube: 'YouTube channel',
      email: 'Email Jan',
      spotifySoon: 'Spotify — coming with the first record',
    },
    about: { heading: 'The story', portrait: 'portrait — coming soon' },
    bands: {
      heading: 'On stage with',
      since: 'since',
      comingSoon: 'announcement coming soon',
      visitSite: 'visit band site',
      temporary: '(temporary address)',
      photoSoon: 'band photo — coming soon',
    },
    hear: {
      heading: 'Hear me',
      latest: 'latest from the channel',
      iframeTitle: 'Latest uploads on YouTube',
      watchChannel: 'watch the whole channel',
      soon: 'soon',
    },
    studio: {
      eyebrow: 'studio & session work',
      heading: 'Your track needs strings?',
      copy: "Banjo, guitar or bass — recorded in your studio or delivered remotely. Send a demo and I'll get back within a couple of days.",
      note: (place) => `Based in ${place} — available anywhere remote.`,
      remote: (place) => `${place} — available anywhere remote`,
      youtube: 'YouTube channel',
    },
    footer: {
      note: '© 2026 Jan Handlík',
      cross: 'also a developer',
      crossEm: 'see the other side',
    },
  },
}
