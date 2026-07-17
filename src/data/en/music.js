// ── MUSIC SIDE: DATA (English) ────────────────────────────────────────
// Structural fields (ids, urls, photos, since, contact links, playlist)
// are shared with the Czech file — keep in sync; only display copy is
// translated. To add a band, copy an object in both language files.
import sparksOnStage from '../../content/sparksOnStage.jpg'

export const bands = [
  {
    id: 'young-sparks',
    name: 'Young Sparks',
    genre: 'Bluegrass',
    role: 'Banjo',
    since: '2025',
    description:
      'Bluegrass five-piece. Fast picking, tight harmonies, festival stages and late-night jams.',
    url: 'https://sparks-page.vercel.app/',
    urlIsPlaceholder: false,
    comingSoon: false,
    photo: sparksOnStage,
  },
  {
    id: 'Sunnyside',
    name: 'Sunnyside',
    genre: 'Bluegrass',
    role: 'Banjo',
    since: '2026',
    description: 'Just joined — link will be here when the web is ready.',
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
    detail: 'Five-string, three-finger style. I like the drive...',
  },
  {
    id: 'guitar',
    name: 'Guitar',
    detail: 'Acoustic flatpicking and rhythm work.',
  },
  {
    id: 'bass',
    name: 'Bass',
    detail: 'Keeping the groove and rhythm steady',
  },
]

export const about = {
  paragraphs: [
    'I started playnig the banjo in 2022 during the covid lockdown. I actually blame my dad for this because he was the one who got me into bluegrass in the first place because he himself is a bluegrass musician. Since then there hasn\'t been a day without me not listening to bluegrass. The drive, rythm, just everything about it got me hooked. After a while i started playing the guitar and recently bass as well, but the banjo is my main instrument.',
    'in 2025, after performing on and off with my dad, i joined a bluegrass band called Young Sparks. Since then i have been a very active musician, performing all over the Czech Republic. Recently i joined my dad\'s band Sunnyside, finaly becoming a full time member of his band. I am currently working on my debut record, which is expected to be released in early 2027.',
  ],
  stats: [
    { value: '3', label: 'instruments' },
    { value: '2', label: 'bands' },
    { value: '2027', label: 'debut record' },
  ],
}

// Feature specific videos: { youtubeId: 'dQw4w9WgXcQ', title: 'Live at X' }
// While empty, the page embeds the channel's latest uploads playlist.
export const videos = []
export const uploadsPlaylist = 'UUHxC1FD_jouoqTbcS3bfKrQ'

export const marquee = [
  'bluegrass',
  'banjo',
  'guitar',
  'bass',
  'young sparks',
  'live shows',
  'sunnyside',
  'debut record 2027',
]

export const release = {
  title: 'Debut record',
  status: 'In the works',
  expected: 'Expected early 2027',
  platforms: [
    { id: 'spotify', name: 'Spotify', url: null },
    { id: 'apple', name: 'Apple Music', url: null },
  ],
}

export const links = {
  youtube: 'https://www.youtube.com/channel/UCHxC1FD_jouoqTbcS3bfKrQ',
  email: 'jan.handlik@gmail.com',
  phone: '+420 733 331 767',
  basedIn: 'Czech Republic',
}
