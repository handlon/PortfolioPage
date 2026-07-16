import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import gsap from 'gsap'
import { shouldSkipAnimation, ScrollTrigger } from './lib/reveal.js'
import { TransitionContext, markWipeNavigation } from './lib/transition.js'
import Landing from './pages/Landing.jsx'
import DevPage from './pages/DevPage.jsx'
import MusicPage from './pages/MusicPage.jsx'

const SLIDE_DURATION = 0.85

/**
 * Route transition: a horizontal "push" — the new page slides in and
 * shoves the old one off-screen (both stay mounted while it runs).
 * Direction follows the landing-page geography: dev lives on the left,
 * music on the right.
 */
function slideDirection(toPath, fromPath) {
  if (toPath === '/music') return 1 // enters from the right
  if (toPath === '/dev') return -1 // enters from the left
  // back to the landing: arrive from the side we're currently on
  return fromPath === '/music' ? -1 : 1
}

function PageRoutes({ location }) {
  return (
    <Routes location={location}>
      <Route path="/" element={<Landing />} />
      <Route path="/dev" element={<DevPage />} />
      <Route path="/music" element={<MusicPage />} />
      <Route path="*" element={<Landing />} />
    </Routes>
  )
}

export default function App() {
  const navigate = useNavigate()
  const location = useLocation()
  const [slide, setSlide] = useState(null) // { from: Location, dir: 1 | -1 }
  const layerRefs = useRef(new Map())
  const busyRef = useRef(false)

  // jump to top on plain route changes (back/forward, direct links);
  // `instant` so CSS smooth-scrolling can't glide up and burn reveals.
  // Same-page anchor clicks (hash-only changes) are left to the browser,
  // which smooth-scrolls them natively via `scroll-behavior: smooth`.
  const prevPathRef = useRef(location.pathname)
  useEffect(() => {
    const pathChanged = prevPathRef.current !== location.pathname
    prevPathRef.current = location.pathname
    if (!pathChanged) return
    if (location.hash) {
      document.querySelector(location.hash)?.scrollIntoView({ behavior: 'instant' })
    } else if (!busyRef.current) {
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
  }, [location.pathname, location.hash])

  const transitionTo = useCallback(
    (path) => {
      if (busyRef.current || path === location.pathname) return
      if (shouldSkipAnimation()) {
        navigate(path)
        return
      }
      busyRef.current = true
      markWipeNavigation() // incoming page holds its entrance until it's on screen
      setSlide({ from: location, dir: slideDirection(path, location.pathname) })
      navigate(path)
    },
    [navigate, location],
  )

  // run the push once both layers are in the DOM (before paint)
  useLayoutEffect(() => {
    if (!slide) return
    const fromEl = layerRefs.current.get(slide.from.pathname)
    const toEl = layerRefs.current.get(location.pathname)
    if (!fromEl || !toEl) {
      setSlide(null)
      busyRef.current = false
      return
    }

    // freeze the outgoing page exactly as the user last saw it:
    // fix it to the viewport and reproduce its scroll offset internally,
    // then reset the window scroll for the incoming page — all pre-paint.
    const scrollY = window.scrollY
    Object.assign(fromEl.style, {
      position: 'fixed',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      overflow: 'hidden',
      zIndex: '2',
    })
    fromEl.scrollTop = scrollY
    window.scrollTo({ top: 0, behavior: 'instant' })

    const tl = gsap.timeline({
      onComplete: () => {
        gsap.set(toEl, { clearProps: 'all' })
        setSlide(null)
        busyRef.current = false
        ScrollTrigger.refresh()
      },
    })
    tl.fromTo(
      toEl,
      { xPercent: slide.dir * 100 },
      { xPercent: 0, duration: SLIDE_DURATION, ease: 'power3.inOut' },
      0,
    ).fromTo(
      fromEl,
      { xPercent: 0 },
      { xPercent: slide.dir * -100, duration: SLIDE_DURATION, ease: 'power3.inOut' },
      0,
    )

    return () => tl.kill()
  }, [slide, location.pathname])

  const layers = slide ? [slide.from, location] : [location]

  return (
    <TransitionContext.Provider value={transitionTo}>
      <div className="page-stack">
        {layers.map((loc) => (
          <div
            key={loc.pathname}
            className="page-layer"
            ref={(el) => {
              if (el) layerRefs.current.set(loc.pathname, el)
              else layerRefs.current.delete(loc.pathname)
            }}
          >
            <PageRoutes location={loc} />
          </div>
        ))}
      </div>
    </TransitionContext.Provider>
  )
}
