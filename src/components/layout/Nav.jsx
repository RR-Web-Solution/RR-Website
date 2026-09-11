import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { waLink } from '../../data/content'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24)
    fn()
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  // ID section yang valid di LandingPage
  const SECTION_IDS = ['tentang', 'layanan', 'keunggulan', 'harga', 'portofolio', 'testimoni', 'kontak']

  const sectionLinks = [
    { id: 'tentang', label: 'Tentang' },
    { id: 'layanan', label: 'Layanan' },
    { id: 'keunggulan', label: 'Keunggulan' },
    { id: 'harga', label: 'Paket' },
    { id: 'portofolio', label: 'Portofolio' },
    { id: 'kontak', label: 'Kontak' },
  ]

  // Handler pintar: di homepage → scroll saja; di halaman lain → navigate dulu
  const handleSectionClick = (e, id) => {
    e.preventDefault()
    setOpen(false)

    if (pathname === '/' || pathname === '') {
      // Sudah di homepage, scroll langsung
      const el = document.getElementById(id)
      if (el) {
        window.scrollTo({ top: 0, behavior: 'auto' }) // reset scroll dulu
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 50)
      }
    } else {
      // Di halaman lain: pindah ke homepage dengan hash, biar ScrollManager yang handle
      navigate(`/#${id}`)
    }
  }

  const handleLogoClick = (e) => {
    e.preventDefault()
    if (pathname === '/' || pathname === '') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      navigate('/')
    }
  }

  return (
    <header className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="wrap nav-in">
        <a href="/" onClick={handleLogoClick} className="logo" aria-label="RR Devs">
          <span className="logo-mark">R<b>&amp;</b>R</span>
          <span className="logo-txt">RR·<b>DEVS</b></span>
        </a>
        <nav className="nav-links">
          {sectionLinks.map((l) => (
            <a key={l.id} href={`/#${l.id}`} onClick={(e) => handleSectionClick(e, l.id)}>
              <i />{l.label}
            </a>
          ))}
          <Link to="/partner" className={pathname === '/partner' ? 'active' : ''}>
            <i />Partner ✦
          </Link>
          <Link to="/jabodetabek" className={pathname === '/jabodetabek' ? 'active' : ''}>
            <i />Jabodetabek ✦
          </Link>
        </nav>
        <div className="nav-right">
          <a className="btn btn-acc btn-sm" href={waLink('Halo RR Devs, saya mau konsultasi gratis soal website untuk bisnis saya 🙂')} target="_blank" rel="noreferrer">
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
            <a key={l.id} href={`/#${l.id}`} onClick={(e) => handleSectionClick(e, l.id)}>{l.label}</a>
          ))}
          <Link to="/partner" onClick={() => setOpen(false)}>Partner ✦</Link>
          <Link to="/jabodetabek" onClick={() => setOpen(false)}>Jabodetabek</Link>
        </div>
      )}
    </header>
  )
}