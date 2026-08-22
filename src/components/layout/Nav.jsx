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

  const links = [
    { to: '/#tentang', label: 'Tentang' },
    { to: '/#layanan', label: 'Layanan' },
    { to: '/#keunggulan', label: 'Keunggulan' },
    { to: '/#harga', label: 'Paket' },
    { to: '/#portofolio', label: 'Portofolio' },
    { to: '/#kontak', label: 'Kontak' },
  ]

  return (
    <header className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="wrap nav-in">
        <Link to="/" className="logo" aria-label="RR Web Solution">
          <span className="logo-mark">R<b>&amp;</b>R</span>
          <span className="logo-txt">RR·WEB·<b>SOLUTION</b></span>
        </Link>
        <nav className="nav-links">
          {links.map((l) => (
            <Link key={l.to} to={l.to}><i />{l.label}</Link>
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
          {links.map((l) => (
            <Link key={l.to} to={l.to} onClick={() => setOpen(false)}>{l.label}</Link>
          ))}
          <Link to="/partner" onClick={() => setOpen(false)}>Partner ✦</Link>
        </div>
      )}
    </header>
  )
}