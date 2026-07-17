// ── DEV SIDE: DOVEDNOSTI + VZDĚLÁNÍ (čeština) ─────────────────────────
// `education[].status` je neutrální klíč ('done' | 'next'); popisek dodá
// UI vrstva. Technické názvy (tags, techMarquee) zůstávají v angličtině.

export const capabilities = [
  {
    id: 'frontend',
    title: 'Frontend & mobil',
    description:
      'Webové aplikace v Reactu a mobilní appky v React Native — komponentové, animované a fungující na každé obrazovce.',
    tags: ['React', 'React Native', 'JavaScript'],
  },
  {
    id: 'ai',
    title: 'Práce s AI',
    description:
      'Stavím s AI v procesu — Claude a spol. na prototypování, refaktoring a review. Rychlejší vývoj, rychlejší učení.',
    tags: ['Claude', 'AI tooling', 'Prompting'],
  },
  {
    id: 'backend',
    title: 'Backend & data',
    description:
      'Node API s MongoDB v pozadí, k tomu základy sítí ze školy. Nejnovější část mého toolkitu — rychle se učím a stavím na tom reálné věci.',
    tags: ['Node.js', 'MongoDB', 'Networking'],
  },
]

export const education = [
  {
    id: 'spsmb',
    status: 'done',
    school: 'Střední průmyslová škola Mladá Boleslav',
    field: 'Technická střední škola — IT a základy sítí',
  },
  {
    id: 'tul',
    status: 'next',
    school: 'Technická univerzita v Liberci (TUL)',
    field: 'Robotika',
  },
]

export const techMarquee = [
  'react',
  'react native',
  'javascript',
  'node.js',
  'mongodb',
  'networking',
  'claude ai',
  'vite',
  'gsap',
  'git',
]
