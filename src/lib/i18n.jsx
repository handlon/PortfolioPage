import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { ScrollTrigger } from './reveal.js'
import { bundles } from '../data/index.js'

/**
 * Global language state. Default is Czech ('cz'); the user's manual
 * choice is persisted to localStorage. Every page reads its content +
 * UI strings for the active language via useContent().
 */
const LangContext = createContext(null)
const STORAGE_KEY = 'jh-lang'
const DEFAULT_LANG = 'cz'

function readInitial() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'cz' || stored === 'en') return stored
  } catch {
    /* localStorage unavailable — fall through to default */
  }
  return DEFAULT_LANG
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(readInitial)

  useEffect(() => {
    // <html lang> uses the ISO code (cs), our folder/toggle uses 'cz'
    document.documentElement.lang = lang === 'cz' ? 'cs' : 'en'
    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      /* ignore write failures (private mode etc.) */
    }
    // translated copy changes section heights → recalc scroll reveals
    const id = requestAnimationFrame(() => ScrollTrigger.refresh())
    return () => cancelAnimationFrame(id)
  }, [lang])

  const setLang = useCallback((next) => setLangState(next), [])

  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>
}

export function useLang() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang must be used within LanguageProvider')
  return ctx
}

/** The full content + UI-strings bundle for the active language. */
export function useContent() {
  const { lang } = useLang()
  return bundles[lang]
}
