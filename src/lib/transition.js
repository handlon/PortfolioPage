import { createContext, useContext } from 'react'

// Route transition: pages call usePageTransition() to get transitionTo(path, color)
export const TransitionContext = createContext(null)
export const usePageTransition = () => useContext(TransitionContext)
