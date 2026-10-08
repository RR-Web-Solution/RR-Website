import { Link } from 'react-router-dom'
import './SiteMovePage.css'

const LIVE = 'https://rrprint.rrdevs.my.id'

export default function SiteMovePage() {
  return (
    <main className="sm-page">
      <div className="sm-wrap">
        <header className="sm-top">
          <Link to="/" className="sm-logo">R<b>&amp;</b>R</Link>
          <span className="sm-status"><i className="sm-dot" />Status: migrasi selesai</span>
        </header>

        <p className="sm-kicker">Situs portfolio · Digital Printing</p>
        <h1>Situs Berhasil dipindahkan ke rumah yang lebih cepat.</h1>
        <p className="sm-sub">
          Situs sudah berhasil kami pindahkan ke rumah yang lebih cepat.
        </p>

        <ul className="sm-steps">
          <li className="done"><span>01</span> Backup seluruh data &amp; file situs</li>
          <li className="done"><span>02</span> Migrasi ke hosting provider baru</li>
          <li className="done"><span>03</span> Uji coba &amp; pengecekan kualitas</li>
          <li className="now"><span>04</span> Situs tayang di alamat baru</li>
        </ul>

        <div className="sm-cta">
          <a className="sm-btn primary" href={LIVE}>Lihat situs live →</a>
          <Link className="sm-btn ghost" to="/#portofolio">Lihat portfolio lain</Link>
          <Link className="sm-btn ghost" to="/">Kembali ke beranda</Link>
        </div>

        <footer className="sm-foot">
          <span>RR Devs · Rafael &amp; Rendy · Cakung, Jakarta Timur</span>
          <span>hello@rrdevs.my.id</span>
        </footer>
      </div>
    </main>
  )
}