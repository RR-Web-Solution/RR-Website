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

  const handleAnchorClick = (event, href) => {
    if (!href.startsWith('#')) return
    const targetId = href.slice(1)
    const target = document.getElementById(targetId)
    if (!target) return
    event.preventDefault()
    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    if (window.history.pushState) {
      window.history.pushState(null, '', `#${targetId}`)
    }
  }

  const sectionLinks = [
    { href: '#tentang', label: 'Tentang' },
    { href: '#layanan', label: 'Layanan' },
    { href: '#keunggulan', label: 'Keunggulan' },
    { href: '#harga', label: 'Paket' },
    { href: '#portofolio', label: 'Portofolio' },
    { href: '#kontak', label: 'Kontak' },
  ]

  return (
    <header className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="wrap nav-in">
        <Link to="/" className="logo" aria-label="RR Devs beranda">
          <span className="logo-mark">R<b>&amp;</b>R</span>
          <span className="logo-txt">RR·<b>DEVS</b></span>
        </Link>
        <nav className="nav-links" aria-label="Navigasi utama">
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
          <a className="btn btn-acc btn-sm" href={waLink('Halo RR Devs, saya mau konsultasi gratis soal website untuk bisnis saya 🙂')} target="_blank" rel="noreferrer" aria-label="Konsultasi gratis via WhatsApp">
            Konsultasi Gratis
          </a>
          <button
            type="button"
            className={`burger ${open ? 'on' : ''}`}
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
      {open && (
        <div className="nav-mobile" id="mobile-menu">
          {sectionLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
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