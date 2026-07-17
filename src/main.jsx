import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { LanguageProvider } from './lib/i18n.jsx'
import './index.css'

// note: no StrictMode — its dev-only double-mount replays every GSAP
// entrance timeline, which reads as the page "loading twice"
createRoot(document.getElementById('root')).render(
  <LanguageProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </LanguageProvider>,
)
