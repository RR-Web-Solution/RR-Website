import { Link } from 'react-router-dom'
import { waLink } from '../../data/content'

export default function Footer() {
  return (
    <footer className="footer" id="kontak">
      <div className="wrap foot-grid">
        <div className="foot-brand">
          <Link to="/" className="logo">
            <span className="logo-mark">R<b>&</b>R</span>
            <span className="logo-txt">RR·<b>DEVS</b></span>
          </Link>
          <p>
            Studio website milik Rafael & Rendy. Fokus kami: sistem booking barbershop yang membuat pelanggan
            pilih jam sendiri — plus landing page, company profile, dan website custom untuk UMKM.
          </p>
          <div className="foot-social">
            <a href="https://instagram.com/rrdevs.my.id" target="_blank" rel="noreferrer" aria-label="Instagram RR Devs">Instagram ↗</a>
            {/* <a href="https://tiktok.com/@universe.dev.id" target="_blank" rel="noreferrer" aria-label="TikTok RR Devs">TikTok ↗</a> */}
            <a href="https://facebook.com/rrdevs.my.id" target="_blank" rel="noreferrer" aria-label="Facebook Page RR Devs">Facebook ↗</a>
          </div>
        </div>
        <div className="foot-col">
          <h4>Menu</h4>
          <a href="#tentang">Tentang</a>
          <a href="#layanan">Layanan</a>
          <a href="#harga">Paket Harga</a>
          <a href="#portofolio">Portofolio</a>
          <Link to="/barbershop">Barbershop ✦</Link>
          {/* <Link to="/partner">Agency Partner</Link> */}
          <Link to="/jabodetabek">Solusi Jabodetabek</Link>
        </div>
        <div className="foot-col">
          <h4>Layanan</h4>
          <a href="#layanan">Sistem Booking Barbershop</a>
          <a href="#layanan">Landing Page</a>
          <a href="#layanan">Company Profile</a>
          <a href="#layanan">Website Custom</a>
        </div>
        <div className="foot-col">
          <h4>Kontak</h4>
          <a href={waLink('Halo RR Devs!')} target="_blank" rel="noreferrer">WhatsApp: +62 831-7112-5657</a>
          <a href="mailto:hello@rrdevs.my.id">Email: hello@rrdevs.my.id</a>
          <span>Jakarta Timur, Indonesia<br />(melayani Jabodetabek, remote-first)</span>
        </div>
      </div>
      <div className="wrap foot-bottom">
        <span>© 2026 RR Devs. Semua hak dilindungi.</span>
        <span>Dibuat dengan ☕ oleh Rafael & Rendy</span>
      </div>
    </footer>
  )
}
