import { useEffect, useRef } from 'react'
import { ArrowUpRight, ArrowDown, Code2 } from 'lucide-react'
import { gsap, initReveals, shouldSkipAnimation } from '../lib/reveal.js'
import { usePageTransition, consumeWipeDelay } from '../lib/transition.js'
import ShapeGrid from '../components/ShapeGrid.jsx'
import CursorLight from '../components/CursorLight.jsx'
import Marquee from '../components/Marquee.jsx'
import { projects } from '../data/projects.js'
import { capabilities, education, techMarquee } from '../data/capabilities.js'
import { links } from '../data/music.js'
import './dev.css'

function ProjectMedia({ project }) {
  if (project.image) {
    return <img src={project.image} alt={`${project.title} — screenshot`} loading="lazy" />
  }
  if (project.url) {
    return (
      <iframe
        src={project.url}
        title={`${project.title} — live preview`}
        loading="lazy"
        tabIndex={-1}
        sandbox="allow-scripts allow-same-origin"
      />
    )
  }
  return (
    <div className="dev-project-placeholder">
      <span>screenshot coming soon</span>
    </div>
  )
}

export default function DevPage() {
  const rootRef = useRef(null)
  const transitionTo = usePageTransition()

  useEffect(() => {
    document.title = 'Jan Handlík — Web Developer'
    const wipeDelay = consumeWipeDelay() // wait out the wipe overlay if arriving through one
    const cleanup = initReveals(rootRef.current, wipeDelay)
    let ctx
    if (!shouldSkipAnimation()) {
      ctx = gsap.context(() => {
        gsap
          .timeline({ delay: wipeDelay, defaults: { ease: 'power4.out' } })
          .fromTo('.dev-nav', { autoAlpha: 0, y: -20 }, { autoAlpha: 1, y: 0, duration: 0.8 }, 0.1)
          .fromTo(
            '.dev-hero-line',
            { yPercent: 110 },
            { yPercent: 0, duration: 1.1, stagger: 0.12 },
            0.25,
          )
          .fromTo('.dev-hero-meta > *', { autoAlpha: 0, y: 24 }, { autoAlpha: 1, y: 0, duration: 0.8, stagger: 0.08 }, 0.9)
      }, rootRef)
    }
    return () => {
      cleanup()
      ctx?.revert()
    }
  }, [])

  const switchSide = (e) => {
    e.preventDefault()
    transitionTo('/music', '#171010')
  }

  return (
    <div ref={rootRef} className="dev">
      <CursorLight />

      {/* ── nav ── */}
      <header className="dev-nav">
        <a
          className="dev-logo"
          href="/"
          onClick={(e) => {
            e.preventDefault()
            transitionTo('/', '#050505')
          }}
        >
          JH<span className="dev-logo-dim">.DEV</span>
        </a>
        <nav className="dev-links" aria-label="Sections">
          <a href="#work">01/<span>WORK</span></a>
          <a href="#skills">02/<span>SKILLS</span></a>
          <a href="#contact">03/<span>CONTACT</span></a>
        </nav>
        <a className="dev-switch" href="/music" onClick={switchSide}>
          ⇄ MUSIC SIDE
        </a>
      </header>

      {/* ── hero ── */}
      <section className="dev-hero">
        <ShapeGrid speed={0.1} />
        <div className="dev-hero-content">
          <h1 className="dev-hero-title">
            <span className="dev-hero-mask"><span className="dev-hero-line">JAN</span></span>
            <span className="dev-hero-mask"><span className="dev-hero-line dev-hero-line-ghost">HANDLÍK</span></span>
          </h1>
          <div className="dev-hero-meta">
            <p className="dev-hero-name">WEB DEVELOPER</p>
            <hr className="dev-rule" />
            <p className="dev-hero-tag">// clean code. sharp interfaces. scalable web solutions.</p>
            <a className="dev-hero-cta" href="#work">
              EXPLORE MY WORK <ArrowDown size={14} strokeWidth={2.5} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      {/* ── everything below the hero gets the film grain ── */}
      <div className="dev-body">

      {/* ── projects ── */}
      <section id="work" className="dev-section">
        <div className="dev-section-head" data-reveal>
          <p className="dev-eyebrow">01 / SELECTED WORK</p>
          <h2 className="dev-h2">PROJECTS</h2>
        </div>
        <hr className="dev-rule-full" data-reveal="line" />
        <div className="dev-projects">
          {projects.map((p) => (
            <article key={p.id} className="dev-project" data-reveal>
              {p.url ? (
                <a
                  className="dev-project-media"
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Visit ${p.title}`}
                >
                  <ProjectMedia project={p} />
                  <span className="dev-project-visit">
                    VISIT SITE <ArrowUpRight size={14} strokeWidth={2.5} aria-hidden="true" />
                  </span>
                </a>
              ) : (
                <div className="dev-project-media">
                  <ProjectMedia project={p} />
                </div>
              )}
              <div className="dev-project-info">
                <div className="dev-project-top">
                  <span className="dev-project-index">{p.index}</span>
                  <span className="dev-project-year">{p.year}</span>
                </div>
                <h3 className="dev-project-title">{p.title}</h3>
                <p className="dev-project-sub">{p.subtitle}</p>
                <p className="dev-project-desc">{p.description}</p>
                <div className="dev-project-foot">
                  <span className="dev-project-stack">{p.stack.join(' · ')}</span>
                  <span className="dev-project-links">
                    {p.url && (
                      <a href={p.url} target="_blank" rel="noreferrer">
                        LIVE <ArrowUpRight size={13} strokeWidth={2.5} aria-hidden="true" />
                      </a>
                    )}
                    {p.github && (
                      <a href={p.github} target="_blank" rel="noreferrer">
                        <Code2 size={13} strokeWidth={2.2} aria-hidden="true" /> CODE
                      </a>
                    )}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── capabilities ── */}
      <section id="skills" className="dev-section">
        <div className="dev-section-head" data-reveal>
          <p className="dev-eyebrow">02 / CAPABILITIES</p>
          <h2 className="dev-h2">WHAT I DO</h2>
        </div>
        <hr className="dev-rule-full" data-reveal="line" />
        <div className="dev-caps">
          {capabilities.map((c, i) => (
            <div key={c.id} className="dev-cap" data-reveal data-reveal-delay={i * 90}>
              <h3>{c.title}</h3>
              <p>{c.description}</p>
              <div className="dev-cap-tags">
                {c.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="dev-edu" data-reveal>
          <p className="dev-edu-label">EDUCATION</p>
          <ul>
            {education.map((e) => (
              <li key={e.id}>
                <span className={`dev-edu-status ${e.status === 'up next' ? 'is-next' : ''}`}>
                  {e.status}
                </span>
                <span className="dev-edu-school">{e.school}</span>
                <span className="dev-edu-field">{e.field}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Marquee items={techMarquee} className="dev-marquee" />

      {/* ── contact ── */}
      <section id="contact" className="dev-section dev-contact">
        <div className="dev-section-head" data-reveal>
          <p className="dev-eyebrow">03 / CONTACT</p>
          <h2 className="dev-h2">LET'S BUILD</h2>
        </div>
        <hr className="dev-rule-full" data-reveal="line" />
        <a className="dev-email" href={`mailto:${links.email}`} data-reveal>
          {links.email}
          <ArrowUpRight className="dev-email-arrow" strokeWidth={2} aria-hidden="true" />
        </a>
        <div className="dev-contact-links" data-reveal>
          {/* PLACEHOLDER links — point these at real profiles */}
          <a href="https://github.com" target="_blank" rel="noreferrer">
            <Code2 size={14} strokeWidth={2.2} aria-hidden="true" /> GITHUB ↗
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">LINKEDIN ↗</a>
        </div>
      </section>

      {/* ── footer / crossover ── */}
      <footer className="dev-footer">
        <p>© 2026 JAN HANDLÍK</p>
        <a href="/music" onClick={switchSide} className="dev-footer-switch">
          ALSO A MUSICIAN → <em>hear the other signal</em>
        </a>
      </footer>

      </div>{/* /.dev-body */}
    </div>
  )
}
