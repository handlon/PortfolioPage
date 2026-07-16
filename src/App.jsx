import { useCallback, useEffect, useRef } from 'react'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import gsap from 'gsap'
import { shouldSkipAnimation } from './lib/reveal.js'
import { TransitionContext } from './lib/transition.js'
import Landing from './pages/Landing.jsx'
import DevPage from './pages/DevPage.jsx'
import MusicPage from './pages/MusicPage.jsx'

export default function App() {
  const overlayRef = useRef(null)
  const busyRef = useRef(false)
  const navigate = useNavigate()
  const location = useLocation()

  // jump to top on every route change (the wipe hides the jump),
  // unless the URL targets a #section directly
  useEffect(() => {
    if (location.hash) {
      document.querySelector(location.hash)?.scrollIntoView()
    } else {
      window.scrollTo(0, 0)
    }
  }, [location.pathname, location.hash])

  const transitionTo = useCallback(
    (path, color = '#050505') => {
      if (busyRef.current) return
      if (shouldSkipAnimation()) {
        navigate(path)
        return
      }
      busyRef.current = true
      const el = overlayRef.current
      gsap
        .timeline({
          onComplete: () => {
            busyRef.current = false
            gsap.set(el, { yPercent: 100 })
          },
        })
        .set(el, { backgroundColor: color, yPercent: 100 })
        .to(el, { yPercent: 0, duration: 0.5, ease: 'expo.inOut' })
        .call(() => navigate(path))
        .to(el, { yPercent: -100, duration: 0.55, ease: 'expo.inOut', delay: 0.12 })
    },
    [navigate],
  )

  return (
    <TransitionContext.Provider value={transitionTo}>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dev" element={<DevPage />} />
        <Route path="/music" element={<MusicPage />} />
        <Route path="*" element={<Landing />} />
      </Routes>
      <div ref={overlayRef} className="route-wipe" aria-hidden="true" />
    </TransitionContext.Provider>
  )
}
