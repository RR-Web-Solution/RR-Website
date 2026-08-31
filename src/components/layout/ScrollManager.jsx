import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const SECTION_IDS = ['top', 'tentang', 'layanan', 'keunggulan', 'harga', 'portofolio', 'testimoni', 'kontak']

export default function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    // Target bisa datang dari hash ("#/#portofolio")
    // atau dari pathname ("#portofolio" → pathname "/portofolio")
    const clean = (s) => s.replace(/^\/?#?/, '')
    const id = hash
      ? clean(hash)
      : SECTION_IDS.includes(clean(pathname))
        ? clean(pathname)
        : null

    const t = setTimeout(() => {
      if (id) {
        const el = document.getElementById(id)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
          return
        }
      }
      window.scrollTo(0, 0)
    }, 100)
    return () => clearTimeout(t)
  }, [pathname, hash])

  return null
}