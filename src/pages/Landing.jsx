import { useEffect, useRef } from 'react'
import { gsap, shouldSkipAnimation } from '../lib/reveal.js'
import { usePageTransition, consumeWipeDelay } from '../lib/transition.js'
import { useContent } from '../lib/i18n.jsx'
import LangSwitch from '../components/LangSwitch.jsx'
import './landing.css'

export default function Landing() {
  const rootRef = useRef(null)
  const transitionTo = usePageTransition()
  const { ui } = useContent()
  const t = ui.landing

  useEffect(() => {
    document.title = ui.title.landing
  }, [ui])

  useEffect(() => {
    const wipeDelay = consumeWipeDelay() // wait out the wipe overlay if arriving through one
    if (shouldSkipAnimation()) return
    const ctx = gsap.context(() => {
      gsap
        .timeline({ delay: wipeDelay, defaults: { ease: 'power3.out' } })
        .fromTo('.panel-dev .panel-inner', { autoAlpha: 0, x: -60 }, { autoAlpha: 1, x: 0, duration: 1 }, 0.1)
        .fromTo('.panel-music .panel-inner', { autoAlpha: 0, x: 60 }, { autoAlpha: 1, x: 0, duration: 1 }, 0.1)
        .fromTo('.landing-name', { autoAlpha: 0, y: 30 }, { autoAlpha: 1, y: 0, duration: 0.9 }, 0.5)
        .fromTo('.landing-hint, .landing-foot, .landing-lang', { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.8 }, 0.9)
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
        aria-label={t.devAria}
      >
        <div className="panel-inner">
          <p className="panel-eyebrow">{t.devEyebrow}</p>
          <h2 className="panel-word panel-word-dev">
            {t.devWord[0]}<br />{t.devWord[1]}
          </h2>
          <p className="panel-tags">{t.devTags}</p>
          <span className="panel-enter">
            {t.enter} <span className="panel-arrow">→</span>
          </span>
        </div>
        <div className="panel-bg panel-bg-dev" aria-hidden="true" />
      </a>

      <a
        href="/music"
        className="panel panel-music grain"
        onClick={(e) => go(e, '/music', '#171010')}
        aria-label={t.musicAria}
      >
        <div className="panel-inner">
          <p className="panel-eyebrow">{t.musicEyebrow}</p>
          <h2 className="panel-word panel-word-music">
            {t.musicWord[0]}<br />{t.musicWord[1]}
          </h2>
          <p className="panel-tags">{t.musicTags}</p>
          <span className="panel-enter">
            {t.enter} <span className="panel-arrow">→</span>
          </span>
        </div>
        <div className="panel-bg panel-bg-music" aria-hidden="true" />
      </a>

      <h1 className="landing-name" aria-label="Jan Handlík">
        <span className="ln-dev">JAN</span>
        <span className="ln-dev">HANDLÍK</span>
      </h1>

      <div className="landing-lang">
        <LangSwitch variant="landing" />
      </div>

      <p className="landing-hint">{t.hint}</p>
      <p className="landing-foot">{t.foot}</p>
    </main>
  )
}
