import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { waLink } from '../../data/content'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24)
    fn()
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  // Anchor section di landing page
  const sectionLinks = [
    { href: '/#tentang', label: 'Tentang' },
    { href: '/#layanan', label: 'Layanan' },
    { href: '/#keunggulan', label: 'Keunggulan' },
    { href: '/#harga', label: 'Paket' },
    { href: '/#portofolio', label: 'Portofolio' },
    { href: '/#kontak', label: 'Kontak' },
  ]

  // Handler klik anchor
  const handleAnchorClick = (e, href) => {
    e.preventDefault()
    const [path, hash] = href.split('#')
    if (pathname !== path) {
      window.location.hash = path + '#' + hash
    } else {
      const el = document.getElementById(hash)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setOpen(false)
  }

  return (
    <header className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="wrap nav-in">
        <Link to="/" className="logo" aria-label="RR Web Solution">
          <span className="logo-mark">R<b>&amp;</b>R</span>
          <span className="logo-txt">RR·WEB·<b>SOLUTION</b></span>
        </Link>
        <nav className="nav-links">
          {sectionLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => handleAnchorClick(e, l.href)}
            >
              <i />{l.label}
            </a>
          ))}
          <Link to="/partner" className={pathname === '/partner' ? 'active' : ''}><i />Partner ✦</Link>
        </nav>
        <div className="nav-right">
          <a className="btn btn-acc btn-sm" href={waLink('Halo RR Web Solution, saya mau konsultasi gratis soal website untuk bisnis saya 🙂')} target="_blank" rel="noreferrer">
            Konsultasi Gratis
          </a>
          <button className={`burger ${open ? 'on' : ''}`} onClick={() => setOpen(!open)} aria-label="Menu">
            <span /><span /><span />
          </button>
        </div>
      </div>
      {open && (
        <div className="nav-mobile">
          {sectionLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => handleAnchorClick(e, l.href)}
            >
              {l.label}
            </a>
          ))}
          <Link to="/partner" onClick={() => setOpen(false)}>Partner ✦</Link>
        </div>
      )}
    </header>
  )
}