import { useEffect, useRef } from 'react'

/**
 * Dev-side atmosphere: a soft "backlight" that follows the cursor —
 * like a flashlight moving over the page.
 * Desktop pointer devices only; no-op on touch and reduced motion.
 */
export default function CursorLight() {
  const lightRef = useRef(null)

  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!fine || reduced) return

    const el = lightRef.current
    const onMove = (e) => {
      el.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`
      el.style.opacity = '1'
    }
    const onLeave = () => {
      el.style.opacity = '0'
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    document.documentElement.addEventListener('pointerleave', onLeave)
    return () => {
      window.removeEventListener('pointermove', onMove)
      document.documentElement.removeEventListener('pointerleave', onLeave)
    }
  }, [])

  return (
    <div className="cursor-atmosphere" aria-hidden="true">
      <div ref={lightRef} className="cursor-light" />
    </div>
  )
}
