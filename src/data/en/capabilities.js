// ── DEV SIDE: CAPABILITIES + EDUCATION (English) ──────────────────────
// `education[].status` is a neutral key ('done' | 'next') so the UI can
// label it per language; `school` stays as-is, `field` is translated.
// `techMarquee` is tech vocabulary → identical across languages.

export const capabilities = [
  {
    id: 'frontend',
    title: 'Frontend & mobile',
    description:
      'Web apps in React and mobile apps in React Native — component-driven, animated, and built to work on every screen.',
    tags: ['React', 'React Native', 'JavaScript'],
  },
  {
    id: 'ai',
    title: 'AI-assisted workflow',
    description:
      'I build with AI in the loop — Claude and friends for prototyping, refactoring and review. Ship faster, learn faster.',
    tags: ['Claude', 'AI tooling', 'Prompting'],
  },
  {
    id: 'backend',
    title: 'Backend & data',
    description:
      'Node APIs with MongoDB behind them, plus networking fundamentals from school. The newest part of my toolkit — learning fast, building real things with it.',
    tags: ['Node.js', 'MongoDB', 'Networking'],
  },
]

export const education = [
  {
    id: 'spsmb',
    status: 'done',
    school: 'Střední průmyslová škola Mladá Boleslav',
    field: 'Technical secondary school — IT & networking fundamentals',
  },
  {
    id: 'tul',
    status: 'next',
    school: 'Technical University of Liberec (TUL)',
    field: 'Robotics',
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
