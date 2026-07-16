import { useEffect, useRef } from 'react'
import { ArrowUpRight, CirclePlay, Mail, Disc3, MapPin } from 'lucide-react'
import { gsap, initReveals, shouldSkipAnimation } from '../lib/reveal.js'
import { usePageTransition } from '../lib/transition.js'
import Waveform from '../components/Waveform.jsx'
import Marquee from '../components/Marquee.jsx'
import {
  bands,
  instruments,
  about,
  videos,
  uploadsPlaylist,
  marquee,
  release,
  links,
} from '../data/music.js'
import './music.css'

export default function MusicPage() {
  const rootRef = useRef(null)
  const transitionTo = usePageTransition()

  useEffect(() => {
    document.title = 'Jan Handlík — Musician'
    const cleanup = initReveals(rootRef.current)
    let ctx
    if (!shouldSkipAnimation()) {
      ctx = gsap.context(() => {
        gsap
          .timeline({ defaults: { ease: 'power3.out' } })
          .fromTo('.music-nav', { autoAlpha: 0, y: -16 }, { autoAlpha: 1, y: 0, duration: 0.8 }, 0.1)
          .fromTo('.music-hero-first', { autoAlpha: 0, y: 60, rotate: -2 }, { autoAlpha: 1, y: 0, rotate: 0, duration: 1.2 }, 0.25)
          .fromTo('.music-hero-last', { autoAlpha: 0, y: 60, rotate: 2 }, { autoAlpha: 1, y: 0, rotate: 0, duration: 1.2 }, 0.45)
          .fromTo('.music-hero-sub, .music-hero-ctas', { autoAlpha: 0, y: 20 }, { autoAlpha: 1, y: 0, duration: 0.9, stagger: 0.15 }, 1)
          .fromTo('.music-social a', { autoAlpha: 0, x: -16 }, { autoAlpha: 1, x: 0, duration: 0.6, stagger: 0.1 }, 1.15)
      }, rootRef)
    }
    return () => {
      cleanup()
      ctx?.revert()
    }
  }, [])

  const switchSide = (e) => {
    e.preventDefault()
    transitionTo('/dev', '#050505')
  }

  return (
    <div ref={rootRef} className="music">
      {/* ── navbar ── */}
      <header className="music-nav">
        <a
          className="music-logo"
          href="/"
          onClick={(e) => {
            e.preventDefault()
            transitionTo('/', '#171010')
          }}
        >
          JH<span className="music-logo-note">&nbsp;·&nbsp;musician</span>
        </a>
        <nav className="music-links" aria-label="Sections">
          <a href="#about">About</a>
          <a href="#bands">Bands</a>
          <a href="#music-releases">Music</a>
          <a href="#studio">Contact</a>
        </nav>
        <a className="music-switch" href="/dev" onClick={switchSide}>
          ⇄ dev side
        </a>
      </header>

      {/* ── hero ── */}
      <section className="music-hero grain">
        {/* PLACEHOLDER — swap this div's background for a real stage photo */}
        <div className="music-hero-photo" aria-hidden="true">
          <span className="music-photo-note">stage photo — coming soon</span>
        </div>
        <div className="music-social">
          <a href={links.youtube} target="_blank" rel="noreferrer" aria-label="YouTube channel">
            <CirclePlay size={19} strokeWidth={1.8} />
          </a>
          <a href={`mailto:${links.email}`} aria-label="Email Jan">
            <Mail size={19} strokeWidth={1.8} />
          </a>
          <span className="music-social-soon" title="Spotify — coming with the first record">
            <Disc3 size={19} strokeWidth={1.8} aria-hidden="true" />
          </span>
        </div>
        <h1 className="music-hero-name">
          <span className="music-hero-first">Jan</span>
          <span className="music-hero-last">Handlík</span>
        </h1>
        <p className="music-hero-sub">
          bluegrass multi-instrumentalist — banjo · guitar · bass
        </p>
        <div className="music-hero-ctas">
          <a className="music-cta music-cta-solid" href="#music-releases">
            hear my music <ArrowUpRight size={15} strokeWidth={2.2} aria-hidden="true" />
          </a>
          <a className="music-cta music-cta-ghost" href="#studio">
            book a session
          </a>
        </div>
      </section>

      <Marquee items={marquee} className="music-marquee" />

      {/* ── about ── */}
      <section id="about" className="music-section">
        <h2 className="music-h2" data-reveal>
          The <em>story</em>
        </h2>
        <div className="music-about">
          {/* PLACEHOLDER — swap for a real portrait:
              set background url(...) on .music-about-photo and drop the note */}
          <div className="music-about-photo" data-reveal aria-hidden="true">
            <span className="music-photo-note">portrait — coming soon</span>
          </div>
          <div className="music-about-text">
            {about.paragraphs.map((p, i) => (
              <p key={i} data-reveal data-reveal-delay={i * 100}>
                {p}
              </p>
            ))}
            <ul className="music-stats" data-reveal>
              {about.stats.map((s) => (
                <li key={s.label}>
                  <strong>{s.value}</strong>
                  <span>{s.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <ul className="music-instruments">
          {instruments.map((ins, i) => (
            <li key={ins.id} className="music-instrument" data-reveal data-reveal-delay={i * 90}>
              <h3>{ins.name}</h3>
              <p>{ins.detail}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* ── bands ── */}
      <section id="bands" className="music-section">
        <h2 className="music-h2" data-reveal>
          On <em>stage</em> with
        </h2>
        <ul className="music-bands">
          {bands.map((b) => (
            <li key={b.id} className={`music-band ${b.comingSoon ? 'is-coming' : ''}`} data-reveal>
              <div className="music-band-photo" aria-hidden="true">
                {b.photo ? (
                  <img src={b.photo} alt="" loading="lazy" />
                ) : (
                  <span className="music-photo-note">band photo — coming soon</span>
                )}
              </div>
              <div className="music-band-body">
                <div className="music-band-head">
                  <h3>{b.name}</h3>
                  <span className="music-band-genre">{b.genre}</span>
                </div>
                <p className="music-band-desc">{b.description}</p>
                <div className="music-band-meta">
                  <span>{b.role} · since {b.since}</span>
                  {b.comingSoon ? (
                    <span className="music-chip">announcement coming soon</span>
                  ) : b.url ? (
                    <a className="music-band-link" href={b.url} target="_blank" rel="noreferrer">
                      visit band site <ArrowUpRight size={14} strokeWidth={2.2} aria-hidden="true" />
                      {b.urlIsPlaceholder && <small>(temporary address)</small>}
                    </a>
                  ) : null}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* ── music: videos + release ── */}
      <section id="music-releases" className="music-section">
        <h2 className="music-h2" data-reveal>
          Hear <em>me</em>
        </h2>
        <div className="music-videos" data-reveal>
          {videos.length > 0 ? (
            videos.map((v) => (
              <div key={v.youtubeId} className="music-video">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${v.youtubeId}`}
                  title={v.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                <p className="music-video-title">{v.title}</p>
              </div>
            ))
          ) : (
            <div className="music-video music-video-wide">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/videoseries?list=${uploadsPlaylist}`}
                title="Latest uploads on YouTube"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <p className="music-video-title">latest from the channel</p>
            </div>
          )}
          <div className="music-release-col">
            <div className="music-release-card">
              <p className="music-release-status">{release.status}</p>
              <h3>{release.title}</h3>
              <p className="music-release-when">{release.expected}</p>
              <div className="music-platforms">
                {release.platforms.map((pl) =>
                  pl.url ? (
                    <a key={pl.id} className="music-platform" href={pl.url} target="_blank" rel="noreferrer">
                      {pl.name} <ArrowUpRight size={13} aria-hidden="true" />
                    </a>
                  ) : (
                    <span key={pl.id} className="music-platform is-soon">
                      {pl.name} — soon
                    </span>
                  ),
                )}
              </div>
            </div>
            <a className="music-yt-link" href={links.youtube} target="_blank" rel="noreferrer">
              <CirclePlay size={20} strokeWidth={1.8} aria-hidden="true" />
              watch the whole channel
              <ArrowUpRight size={14} strokeWidth={2.2} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <div className="music-wave-band" aria-hidden="true">
        <Waveform />
      </div>

      {/* ── studio / contact ── */}
      <section id="studio" className="music-section music-studio grain">
        <p className="music-studio-eyebrow" data-reveal>
          studio &amp; session work
        </p>
        <h2 className="music-studio-title" data-reveal>
          Your track needs <em>strings?</em>
        </h2>
        <p className="music-studio-copy" data-reveal>
          Banjo, guitar or bass — recorded in your studio or delivered remotely.
          Send a demo and I'll get back within a couple of days.
        </p>
        <a className="music-studio-cta" href={`mailto:${links.email}`} data-reveal>
          {links.email}
        </a>
        <ul className="music-contact-rows" data-reveal>
          <li>
            <Mail size={15} strokeWidth={1.8} aria-hidden="true" />
            <a href={`mailto:${links.email}`}>{links.email}</a>
          </li>
          <li>
            <MapPin size={15} strokeWidth={1.8} aria-hidden="true" />
            <span>{links.basedIn} — available anywhere remote</span>
          </li>
          <li>
            <CirclePlay size={15} strokeWidth={1.8} aria-hidden="true" />
            <a href={links.youtube} target="_blank" rel="noreferrer">
              YouTube channel
            </a>
          </li>
        </ul>
      </section>

      {/* ── footer ── */}
      <footer className="music-footer">
        <p>© 2026 Jan Handlík</p>
        <a href="/dev" onClick={switchSide} className="music-footer-switch">
          also a developer → <em>see the other signal</em>
        </a>
      </footer>
    </div>
  )
}
