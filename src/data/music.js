// ── MUSIC SIDE: DATA ─────────────────────────────────────────────────
// Bands are fully data-driven: to add a band, add one object to `bands`.
//   url: null + comingSoon: true → renders a "site coming soon" card
//   url: '...'                   → renders a linked card
// (the second entry below is the band being joined now — fill it in
//  once the lineup is public and their site is ready)

export const bands = [
  {
    id: 'young-sparks',
    name: 'Young Sparks',
    genre: 'Bluegrass',
    role: 'Banjo', // adjust if needed
    since: '2023',
    description:
      'Bluegrass five-piece. Fast picking, tight harmonies, festival stages and late-night jams.',
    url: 'https://young-sparks-band.example.com', // PLACEHOLDER — swap for the real domain once it is set up
    urlIsPlaceholder: true,
    comingSoon: false,
    photo: null, // PLACEHOLDER — e.g. '/bands/young-sparks.jpg' (put file in public/)
  },
  {
    id: 'new-project',
    name: 'New Project',
    genre: 'TBA',
    role: 'TBA',
    since: '2026',
    description:
      'Just joined — announcement and website on the way. Watch this space.',
    url: null,
    urlIsPlaceholder: false,
    comingSoon: true,
    photo: null,
  },
]

export const instruments = [
  {
    id: 'banjo',
    name: 'Banjo',
    detail: 'Five-string, three-finger style. The loud one in the bluegrass lineup.',
  },
  {
    id: 'guitar',
    name: 'Guitar',
    detail: 'Acoustic flatpicking and rhythm work. Electric when the song asks for it.',
  },
  {
    id: 'bass',
    name: 'Bass',
    detail: 'Holding the low end down — session-ready on electric and upright feel.',
  },
]

// ── about section ────────────────────────────────────────────────────
// PLACEHOLDER bio — rewrite in your own voice.
export const about = {
  paragraphs: [
    'Bluegrass is where I live musically — banjo rolls, flatpicked runs and a bass line that keeps everyone honest. I picked up my first instrument young and never really put any of them down since.',
    'These days you can hear me on stage with Young Sparks, with a second band joining the roster soon. Between shows I record — my own material and session work for anyone who needs strings on a track.',
  ],
  stats: [
    { value: '3', label: 'instruments' },
    { value: '2', label: 'bands' },
    { value: '2027', label: 'debut record' },
  ],
}

// ── videos ───────────────────────────────────────────────────────────
// Feature specific videos by adding entries like:
//   { youtubeId: 'dQw4w9WgXcQ', title: 'Live at Festival X' }
// While this list is empty, the page embeds the channel's latest
// uploads playlist automatically (uploadsPlaylist below).
export const videos = []

// YouTube channel UCHxC1FD_jouoqTbcS3bfKrQ → uploads playlist (UC → UU)
export const uploadsPlaylist = 'UUHxC1FD_jouoqTbcS3bfKrQ'

// marquee ticker under the hero
export const marquee = [
  'bluegrass',
  'banjo',
  'guitar',
  'bass',
  'young sparks',
  'live shows',
  'studio sessions',
  'debut record 2027',
]

// First record is in the works — flip a platform's `url` from null to a
// link when it goes live and the button activates automatically.
export const release = {
  title: 'Debut record',
  status: 'In the works',
  expected: 'Expected early 2027',
  platforms: [
    { id: 'spotify', name: 'Spotify', url: null },
    { id: 'apple', name: 'Apple Music', url: null },
    { id: 'bandcamp', name: 'Bandcamp', url: null },
  ],
}

export const links = {
  youtube: 'https://www.youtube.com/channel/UCHxC1FD_jouoqTbcS3bfKrQ',
  email: 'jan.handlik@gmail.com',
  basedIn: 'Czech Republic', // PLACEHOLDER — adjust ("Brno, CZ", "anywhere remote", …)
}
