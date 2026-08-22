import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    // Tunggu DOM render
    const timer = setTimeout(() => {
      if (hash && hash.startsWith('#')) {
        const el = document.querySelector(hash)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
          return
        }
      }
      window.scrollTo(0, 0)
    }, 100)
    return () => clearTimeout(timer)
  }, [pathname, hash])

  return null
}