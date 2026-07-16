import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * True when animating is pointless or unwanted: the user prefers reduced
 * motion, or the page loaded in a hidden tab (rAF doesn't tick there —
 * entrance animations would freeze at their start state).
 */
export function shouldSkipAnimation() {
  return (
    window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
    document.visibilityState === 'hidden'
  )
}

/**
 * Wire scroll reveals for every [data-reveal] inside `scope`.
 * data-reveal          → fade + rise
 * data-reveal="line"   → horizontal rule grows in
 * Returns a cleanup function for useEffect.
 */
export function initReveals(scope) {
  const skip = shouldSkipAnimation()
  const ctx = gsap.context(() => {
    const els = scope.querySelectorAll('[data-reveal]')
    els.forEach((el) => {
      if (skip) {
        gsap.set(el, { autoAlpha: 1 })
        return
      }
      if (el.dataset.reveal === 'line') {
        gsap.fromTo(
          el,
          { scaleX: 0, transformOrigin: 'left center' },
          {
            scaleX: 1,
            duration: 1.1,
            ease: 'expo.out',
            scrollTrigger: { trigger: el, start: 'top 90%' },
          },
        )
        return
      }
      gsap.fromTo(
        el,
        { autoAlpha: 0, y: 44 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          delay: (Number(el.dataset.revealDelay) || 0) / 1000,
          scrollTrigger: { trigger: el, start: 'top 88%' },
        },
      )
    })
  }, scope)
  return () => ctx.revert()
}

export { gsap, ScrollTrigger }
