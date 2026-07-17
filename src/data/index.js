// Language registry — one bundle per language, keyed by the code used
// in the LanguageProvider / LangSwitch ('cz' | 'en'). Default is Czech.
import cz from './cz/index.js'
import en from './en/index.js'

export const bundles = { cz, en }
