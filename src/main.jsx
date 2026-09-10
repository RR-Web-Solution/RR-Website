import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import posthog from 'posthog-js'
import './styles.css'

/* Font self-hosted (same-origin) — WAJIB agar html-to-image bisa embed font ke PNG */
import '@fontsource/syne/700.css'
import '@fontsource/syne/800.css'
import '@fontsource/instrument-sans/400.css'
import '@fontsource/instrument-sans/500.css'
import '@fontsource/instrument-sans/600.css'
import '@fontsource/instrument-sans/500-italic.css'
import '@fontsource/space-mono/400.css'
import '@fontsource/space-mono/700.css'

if (typeof window !== 'undefined') {
  posthog.init(import.meta.env.VITE_POSTHOG_KEY, {
    api_host: import.meta.env.VITE_POSTHOG_HOST,
    person_profiles: 'identified_only'
  })
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)