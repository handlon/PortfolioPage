import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

/**
 * Shared top navbar with a real burger menu on mobile.
 *
 * props:
 *   variant   'dev' | 'music'  — drives the class prefix / styling
 *   logo      node             — clickable brand
 *   links     [{ href, label }]— section anchors
 *   switch    node             — the "other side" button
 *
 * On mobile the links + switch collapse behind a burger that opens a
 * full-width dropdown panel; any link tap closes it.
 */
export default function NavBar({ variant, logo, links, switchButton }) {
  const [open, setOpen] = useState(false)
  const p = variant // class prefix, e.g. "dev" or "music"

  // lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  // close on Escape
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className={`${p}-nav ${open ? 'is-open' : ''}`}>
      {logo}

      {/* desktop links */}
      <nav className={`${p}-links`} aria-label="Sections">
        {links.map((l) => (
          <a key={l.href} href={l.href}>
            {l.label}
          </a>
        ))}
      </nav>

      <div className={`${p}-nav-actions`}>{switchButton}</div>

      {/* burger (mobile only) */}
      <button
        type="button"
        className={`${p}-burger`}
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? <X size={22} strokeWidth={2} /> : <Menu size={22} strokeWidth={2} />}
      </button>

      {/* mobile dropdown panel */}
      <div className={`${p}-menu`} hidden={!open}>
        <nav aria-label="Sections">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>
        <div className={`${p}-menu-switch`} onClick={() => setOpen(false)}>
          {switchButton}
        </div>
      </div>
    </header>
  )
}
