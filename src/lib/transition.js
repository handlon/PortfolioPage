import { createContext, useContext } from 'react'

// Route transition: pages call usePageTransition() to get transitionTo(path, color)
export const TransitionContext = createContext(null)
export const usePageTransition = () => useContext(TransitionContext)

// ── slide/entrance coordination ───────────────────────────────────────
// When a page mounts mid-slide, its entrance animation holds briefly so
// it plays while the page glides into view instead of off-screen.
// The transition marks the navigation; the mounting page consumes the
// extra delay (in seconds) exactly once.
const WIPE_REVEAL_DELAY = 0.45

let pendingWipe = false

export function markWipeNavigation() {
  pendingWipe = true
}

export function consumeWipeDelay() {
  const delay = pendingWipe ? WIPE_REVEAL_DELAY : 0
  pendingWipe = false
  return delay
}
