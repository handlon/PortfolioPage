import { useLang, useContent } from '../lib/i18n.jsx'

/**
 * CZ / EN language toggle. `variant` ('dev' | 'music' | 'landing') tints
 * the active state to match the surrounding page.
 */
export default function LangSwitch({ variant = 'dev' }) {
  const { lang, setLang } = useLang()
  const { ui } = useContent()

  return (
    <div className={`lang-switch lang-${variant}`} role="group" aria-label={ui.a11y.language}>
      <button
        type="button"
        className={lang === 'cz' ? 'is-active' : ''}
        aria-pressed={lang === 'cz'}
        onClick={() => setLang('cz')}
      >
        CZ
      </button>
      <span className="lang-sep" aria-hidden="true">
        /
      </span>
      <button
        type="button"
        className={lang === 'en' ? 'is-active' : ''}
        aria-pressed={lang === 'en'}
        onClick={() => setLang('en')}
      >
        EN
      </button>
    </div>
  )
}
