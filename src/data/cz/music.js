// ── MUSIC SIDE: DATA (čeština) ────────────────────────────────────────
// Strukturální pole (ids, urls, photos, since, kontakty, playlist) jsou
// sdílená s anglickou verzí — drž je v souladu; překládá se jen text.
import sparksOnStage from '../../content/sparksOnStage.jpg'

export const bands = [
  {
    id: 'young-sparks',
    name: 'Young Sparks',
    genre: 'Bluegrass',
    role: 'Banjo',
    since: '2025',
    description:
      'Bluegrassová pětice. Rychlé prsty, těsné harmonie, festivalová pódia a noční jamy.',
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
    description: 'Čerstvě jsem se přidal — odkaz přibude, až bude web hotový.',
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
    detail: 'Pětistrunné, Scruggsův styl. Mám rád ten drive...',
  },
  {
    id: 'guitar',
    name: 'Kytara',
    detail: 'Akustický flatpicking a doprovodná hra.',
  },
  {
    id: 'bass',
    name: 'Basa',
    detail: 'Pevný rytmus.',
  },
]

export const about =  {
  paragraphs: [
    'Na banjo jsem začal hrát v roce 2022 během covidového lockdownu. Vlastně za to může můj táta, právě on mě k bluegrassu přivedl, sám je totiž bluegrassový muzikant. Od té doby snad není den, cobych bluegrass neposlouchal. Ten drive, rytmus, prostě všechno ohledně bluegrassu mě zaujalo. Po čase jsem začal hrát na kytaru a nedávno i basu, ale banjo zůstává mým hlavním nástrojem.',
    'V roce 2025, po občasném hraní s tátou, jsem nastoupil do bluegrassové kapely Young Sparks. Od té doby jsem hodně aktivnim muzikantem a hraju po celé České republice. Nedávno jsem se napevno přidal i do tátovy kapely Sunnyside a konečně se stal jejím stálým členem. Aktuálně pracuju na svém debutovém albu, které by mělo vyjít začátkem roku 2027.',
  ],
  stats: [
    { value: '3', label: 'nástroje' },
    { value: '2', label: 'kapely' },
    { value: '2027', label: 'debutové album' },
  ],
}

// Konkrétní videa: { youtubeId: 'dQw4w9WgXcQ', title: 'Live at X' }
// Dokud je pole prázdné, vloží se playlist s nejnovějšími videi kanálu.
export const videos = []
export const uploadsPlaylist = 'UUHxC1FD_jouoqTbcS3bfKrQ'

export const marquee = [
  'bluegrass',
  'banjo',
  'kytara',
  'basa',
  'young sparks',
  'koncerty',
  'sunnyside',
  'debut 2027',
]

export const release = {
  title: 'Debutové album',
  status: 'Připravuje se',
  expected: 'Očekáváno začátkem 2027',
  platforms: [
    { id: 'spotify', name: 'Spotify', url: null },
    { id: 'apple', name: 'Apple Music', url: null },
  ],
}

export const links = {
  youtube: 'https://www.youtube.com/channel/UCHxC1FD_jouoqTbcS3bfKrQ',
  email: 'jan.handlik@gmail.com',
  phone: '+420 733 331 767',
  basedIn: 'Česká republika',
}
