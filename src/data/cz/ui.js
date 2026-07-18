// ── UI STRINGS (čeština) ──────────────────────────────────────────────
// Všechny popisky na stránce, které nejsou v datových souborech.
// Funkce se používají tam, kde se hodnota skládá s obsahem.

export const ui = {
  title: {
    landing: 'Jan Handlík — vývojář & hudebník',
    dev: 'Jan Handlík — webový vývojář',
    music: 'Jan Handlík — hudebník',
  },
  a11y: { sections: 'Sekce', language: 'Jazyk' },

  landing: {
    devEyebrow: '01 / kód',
    devWord: ['VÝVO', 'JÁŘ'],
    devTags: 'react · web · AI',
    devAria: 'Přejít na vývojářskou stranu',
    musicEyebrow: '02 / zvuk',
    musicWord: ['Muzi', 'kant'],
    musicTags: 'banjo · kytara · basa',
    musicAria: 'Přejít na hudební stranu',
    enter: 'vstoupit',
    hint: 'jeden člověk · dvě strany — vyber si',
    foot: '© 2026 Jan Handlík',
  },

  dev: {
    nav: { work: 'PROJRKTY', skills: 'DOVEDNOSTI', contact: 'KONTAKT' },
    toMusic: '⇄ HUDEBNÍ STRANA',
    role: 'WEBOVÝ VÝVOJÁŘ',
    tag: '// Čistý kód. Šikovný design. škálovatelná webová řešení.',
    cta: 'PROHLÉDNOUT PRÁCI',
    projects: {
      eyebrow: '01 / VYBRANÉ PRÁCE',
      heading: 'PROJEKTY',
      visit: 'NAVŠTÍVIT',
      live: 'ŽIVĚ',
      code: 'KÓD',
      placeholder: 'hosting se připravuje',
      visitAria: (t) => `Navštívit ${t}`,
      screenshotAlt: (t) => `${t} — náhled`,
      livePreview: (t) => `${t} — živý náhled`,
    },
    caps: { eyebrow: '02 / DOVEDNOSTI', heading: 'CO DĚLÁM' },
    edu: { label: 'VZDĚLÁNÍ', status: { done: 'dokončeno', next: 'další v plánu' } },
    contact: { eyebrow: '03 / KONTAKT', heading: 'POJĎME TVOŘIT' },
    footer: {
      note: '© 2026 JAN HANDLÍK',
      cross: 'TAKÉ MUZIKANT',
      crossEm: 'prohlédni hudební stranu',
    },
  },

  music: {
    nav: { about: 'O mně', bands: 'Kapely', music: 'Hudba', contact: 'Kontakt' },
    toDev: '⇄ vývojářská strana',
    heroSub: 'bluegrassový multiinstrumentalista — banjo · kytara · basa',
    ctaPrimary: 'poslechnout hudbu',
    ctaSecondary: 'domluvit spolupráci',
    stagePhoto: 'fotka z pódia — již brzy',
    a11y: {
      youtube: 'YouTube kanál',
      email: 'Napsat e-mail',
      spotifySoon: 'Spotify — přijde s prvním albem',
    },
    about: { heading: 'Příběh', portrait: 'portrét — již brzy' },
    bands: {
      heading: 'Na pódiu s',
      since: 'od',
      comingSoon: 'oznámení již brzy',
      visitSite: 'web kapely',
      temporary: '(dočasná adresa)',
      photoSoon: 'fotka kapely — již brzy',
    },
    hear: {
      heading: 'Poslechni si mě',
      latest: 'nejnovější z kanálu',
      iframeTitle: 'Nejnovější videa na YouTube',
      watchChannel: 'celý kanál na YouTube',
      soon: 'brzy',
    },
    studio: {
      eyebrow: 'spolupráce',
      heading: 'chceš semou spolupracovat?',
      copy: 'Banjo, kytara nebo basa — nahraji na dálku nebo u tebe ve studiu. Pošli demo a ozvu se ti do pár dní.',
      note: (place) => `Sídlo: ${place} — dostupný i na dálku.`,
      remote: (place) => `${place} — dostupný i na dálku`,
      youtube: 'YouTube kanál',
    },
    footer: {
      note: '© 2026 Jan Handlík',
      cross: 'také vývojář',
      crossEm: 'mrkni na vývojářskou stranu',
    },
  },
}
