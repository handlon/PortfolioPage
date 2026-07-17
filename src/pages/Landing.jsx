import { useEffect, useRef } from 'react'
import { gsap, shouldSkipAnimation } from '../lib/reveal.js'
import { usePageTransition, consumeWipeDelay } from '../lib/transition.js'
import './landing.css'

export default function Landing() {
  const rootRef = useRef(null)
  const transitionTo = usePageTransition()

  useEffect(() => {
    document.title = 'Jan Handlík — Developer & Musician'
    const wipeDelay = consumeWipeDelay() // wait out the wipe overlay if arriving through one
    if (shouldSkipAnimation()) return
    const ctx = gsap.context(() => {
      gsap
        .timeline({ delay: wipeDelay, defaults: { ease: 'power3.out' } })
        .fromTo('.panel-dev .panel-inner', { autoAlpha: 0, x: -60 }, { autoAlpha: 1, x: 0, duration: 1 }, 0.1)
        .fromTo('.panel-music .panel-inner', { autoAlpha: 0, x: 60 }, { autoAlpha: 1, x: 0, duration: 1 }, 0.1)
        .fromTo('.landing-name', { autoAlpha: 0, y: 30 }, { autoAlpha: 1, y: 0, duration: 0.9 }, 0.5)
        .fromTo('.landing-hint, .landing-foot', { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.8 }, 0.9)
    }, rootRef)
    return () => ctx.revert()
  }, [])

  const go = (e, path, color) => {
    e.preventDefault()
    transitionTo(path, color)
  }

  return (
    <main ref={rootRef} className="landing">
      <a
        href="/dev"
        className="panel panel-dev"
        onClick={(e) => go(e, '/dev', '#050505')}
        aria-label="Enter the developer side"
      >
        <div className="panel-inner">
          <p className="panel-eyebrow">01 / code</p>
          <h2 className="panel-word panel-word-dev">
            DEVE<br />LOPER
          </h2>
          <p className="panel-tags">react · web · AI</p>
          <span className="panel-enter">
            enter <span className="panel-arrow">→</span>
          </span>
        </div>
        <div className="panel-bg panel-bg-dev" aria-hidden="true" />
      </a>

      <a
        href="/music"
        className="panel panel-music grain"
        onClick={(e) => go(e, '/music', '#171010')}
        aria-label="Enter the musician side"
      >
        <div className="panel-inner">
          <p className="panel-eyebrow">02 / sound</p>
          <h2 className="panel-word panel-word-music">
            Musi<br />cian
          </h2>
          <p className="panel-tags">banjo · guitar · bass</p>
          <span className="panel-enter">
            enter <span className="panel-arrow">→</span>
          </span>
        </div>
        <div className="panel-bg panel-bg-music" aria-hidden="true" />
      </a>

      <h1 className="landing-name" aria-label="Jan Handlík">
        <span className="ln-dev">JAN</span>
        <span className="ln-dev">HANDLÍK</span>
      </h1>

      <p className="landing-hint">one person · two sides — pick one</p>
      <p className="landing-foot">© 2026 Jan Handlík</p>
    </main>
  )
}
