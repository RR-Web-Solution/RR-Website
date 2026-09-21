import { Link } from 'react-router-dom'
import './SiteMovePage.css'

const WA = 'https://wa.me/6283171125657'

export default function SiteMovePage() {
  return (
    <main className="sm-page">
      <div className="sm-wrap">
        <header className="sm-top">
          <Link to="/" className="sm-logo">R<b>&amp;</b>R</Link>
          <span className="sm-status"><i className="sm-dot" />Status: migrasi berlangsung</span>
        </header>

        <p className="sm-kicker">Situs portfolio · Digital Printing</p>
        <h1>Sedang kami pindahkan ke rumah yang lebih cepat.</h1>
        <p className="sm-sub">
          Situs ini sedang dalam proses migrasi ke hosting provider baru agar lebih cepat dan lebih andal.
          Selama proses berlangsung, halaman mungkin belum dapat diakses. Tidak ada data atau konten yang
          hilang — semuanya sudah kami amankan lebih dulu.
        </p>

        <ul className="sm-steps">
          <li className="done"><span>01</span> Backup seluruh data &amp; file situs</li>
          <li className="now"><span>02</span> Migrasi ke hosting provider baru</li>
          <li><span>03</span> Uji coba &amp; pengecekan kualitas</li>
          <li><span>04</span> Situs tayang di alamat baru</li>
        </ul>

        <p className="sm-eta">
          Perkiraan selesai: <b>1×24 jam</b>. Kalau setelah itu halaman ini masih muncul, berarti kami
          sedang mengecek ulang — dan itu kabar baik.
        </p>

        <div className="sm-cta">
          <a className="sm-btn primary" href={WA}>Tanya via WhatsApp →</a>
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