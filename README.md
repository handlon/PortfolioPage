# Jan Handlík — Two Signals portfolio

A two-sided portfolio: one identity, two worlds.

- `/` — split landing page (pick a side)
- `/dev` — web developer side (OLED black, mono, particle field)
- `/music` — musician side (warm black, stage light, film grain)

## Run it

```bash
npm install
npm run dev      # local dev server
npm run build    # production build → dist/
```

Built with React + Vite + GSAP + react-router. Deploy `dist/` anywhere
(Vercel/Netlify need no config; for other static hosts add an SPA
fallback so `/dev` and `/music` rewrite to `index.html`).

## Where to edit content (no code knowledge needed)

All portfolio content lives in three small data files:

| File | What's in it |
|---|---|
| `src/data/projects.js` | Dev projects (currently placeholders) |
| `src/data/capabilities.js` | Dev "what I do" cards + tech ticker |
| `src/data/music.js` | Bands, instruments, bio/stats, videos, release status, links |

**Project cards:** each project's visual is, in priority order —
`image` (screenshot path), else `url` (live iframe preview), else a
"screenshot coming soon" panel. `url` powers the "visit site" link,
`github` adds a CODE button.

**Featuring YouTube videos:** add entries to `videos` in
`src/data/music.js` like `{ youtubeId: 'abc123', title: 'Live at X' }`.
While the list is empty the page embeds your channel's latest-uploads
playlist automatically.

**Adding a band:** copy an object in the `bands` array in
`src/data/music.js`. Set `comingSoon: true` while its site isn't ready;
swap `url` for the real domain later (and remove `urlIsPlaceholder`).
Give it a `photo` (e.g. `/bands/young-sparks.jpg` in `public/`).

**When the record drops (~2027):** in `src/data/music.js`, change each
platform's `url` from `null` to the real link — the "coming soon" chips
turn into live buttons automatically.

**Stage photo:** in `src/pages/music.css`, find `.music-hero-photo` and
replace the gradient background with `url('/stage.jpg') center/cover`
(drop the photo into `public/`), then delete the
`stage photo — coming soon` note in `src/pages/MusicPage.jsx`.

**Dev contact links:** GitHub/LinkedIn placeholders are in
`src/pages/DevPage.jsx` (marked with a `PLACEHOLDER` comment).

## Notes

- Animations respect `prefers-reduced-motion` and skip entirely when the
  page loads in a hidden/background tab.
- The email used site-wide comes from `links.email` in `src/data/music.js`.
