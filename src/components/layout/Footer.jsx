import { Link } from 'react-router-dom'
import { waLink } from '../../data/content'

export default function Footer() {
  return (
    <footer className="footer" id="kontak">
      <div className="wrap foot-grid">
        <div className="foot-brand">
          <Link to="/" className="logo">
            <span className="logo-mark">R<b>&amp;</b>R</span>
            <span className="logo-txt">RR·<b>DEVS</b></span>
          </Link>
          <p>Studio website milik Rafael &amp; Rendy. Kami bantu UMKM Indonesia tumbuh lewat website yang cepat, rapi, dan terjangkau.</p>
          <div className="foot-social">
            <a href="https://instagram.com/universe.dev.id" target="_blank" rel="noreferrer">Instagram ↗</a>
            <a href="https://tiktok.com/@universe.dev.id" target="_blank" rel="noreferrer">TikTok ↗</a>
            <a href="https://linkedin.com/in/developer-id" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          </div>
        </div>
        <div className="foot-col">
          <h4>Menu</h4>
          <a href="#tentang">Tentang</a>
         <a href="#layanan">Layanan</a>
         <a href="#harga">Paket Harga</a>
         <a href="#portofolio">Portofolio</a>
         <Link to="/partner">Agency Partner</Link>
        </div>
        <div className="foot-col">
          <h4>Layanan</h4>
          <a href="#layanan">Landing Page</a>
          <a href="#layanan">Company Profile</a>
          <a href="#layanan">Website Custom</a>
           {/* <a href="/#layanan">Toko Online</a> */}
        </div>
        <div className="foot-col">
          <h4>Kontak</h4>
          <a href={waLink('Halo RR Devs!')} target="_blank" rel="noreferrer">WhatsApp: +62 831-7112-5657</a>
          <a href="mailto:rrdevs.team@gmail.com">Email: rrdevs.team@gmail.com</a>
          <span>Jakarta Timur, Indonesia<br />(melayani seluruh Indonesia, remote-first)</span>
        </div>
      </div>
      <div className="wrap foot-bottom">
        <span>© 2026 RR Devs. Semua hak dilindungi.</span>
        <span>Dibuat dengan ☕ oleh Rafael &amp; Rendy</span>
      </div>
    </footer>
  )
}