// ── DEV SIDE: DOVEDNOSTI + VZDĚLÁNÍ (čeština) ─────────────────────────
// `education[].status` je neutrální klíč ('done' | 'next'); popisek dodá
// UI vrstva. Technické názvy (tags, techMarquee) zůstávají v angličtině.

export const capabilities = [
  {
    id: 'frontend',
    title: 'Frontend & mobil',
    description:
      'Webové stránky v Reactu perfektně funkční i na mobilních zařízeních — komponentové, animované a fungující na každé obrazovce.',
    tags: ['React', 'React Native', 'JavaScript'],
  },
  {
    id: 'ai',
    title: 'Práce s AI',
    description:
      'Aktivně implementuji AI v mojí práci — Claude a spol na Rychlejší vývoj, rychlejší učení. lepší výsledky.',
    tags: ['Claude', 'AI tooling', 'Prompting'],
  },
  {
    id: 'backend',
    title: 'Backend & data',
    description:
      'Node API s MongoDB databází, k tomu základy sítí ze školy. Nejnovější část mého toolkitu — rychle se učím a implementuji.',
    tags: ['Node.js', 'MongoDB', 'Networking'],
  },
]

export const education = [
  {
    id: 'spsmb',
    status: 'done',
    school: 'Střední průmyslová škola Mladá Boleslav',
    field: 'Technická střední škola — IT a základy počítačových sítí',
  },
  {
    id: 'tul',
    status: 'next',
    school: 'Technická univerzita v Liberci (TUL)',
    field: 'Mechatronika a robotika — bakalářský program',
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
