import './BarbershopPage.css'
import Footer from '../components/layout/Footer'
import BarberPro from '../sections/BarberPro'

const WA = 'https://wa.me/6283171125657?text=Halo+RR+Devs,%0ASaya+mau+konsultasi+gratis'
const WA_AUDIT = 'https://wa.me/6283171125657?text=Halo+RR+Devs,%0ABoleh+saya+minta+audit+Gratis?'

export default function BarbershopPage() {
  return (
   <>
    <main className="bs-page">
      <header className="bs-hero">
        <div className="bs-wrap">
          <p className="bs-kicker">Spesialis barbershop & salon · Jabodetabek</p>
          <h1>Pelangganmu sudah online. <em>Bookingmu juga harus.</em></h1>
          <p className="bs-sub">
            Kami Rafael &amp; Rendy (RR Devs), duo developer di Cakung, Jakarta Timur.
            Kami membangun situs dan sistem booking untuk barbershop &amp; salon —
            WhatsApp-first, tanpa membuatmu belajar aplikasi baru.
          </p>
          <div className="bs-cta">
            <a className="bs-btn primary" href={WA}>Chat WhatsApp — konsultasi gratis →</a>
            <a className="bs-btn ghost" href="https://barberpro.rrdevs.my.id" target="_blank" rel="noopener noreferrer">Coba demo booking dulu</a>
          </div>
          <p className="bs-proof">Theo Teknik (Cakung) · demo booking live · 10+ audit barbershop disusun September 2026</p>
        </div>
      </header>

      <section className="bs-section">
        <div className="bs-wrap">
          <h2>Kami melihat pola yang sama di puluhan barbershop</h2>
          <p className="bs-lead">Bukan tebakan — ini temuan berulang dari halaman publik barbershop Jabodetabek yang kami audit bulan ini.</p>
          <div className="bs-grid">
            <div className="bs-card"><span className="bs-tag">Pola 01</span><h3>Tombol "website" yang mati</h3><p>Di listing Maps berbintang lima, tombol website menuju halaman kosong. Calon pelanggan mental — dan itu kesan terakhir mereka.</p></div>
            <div className="bs-card"><span className="bs-tag">Pola 02</span><h3>Harga terkubur di feed</h3><p>Daftar harga ada, tapi di antara puluhan post. Pelanggan baru harus scroll untuk tahu harga potong — banyak yang tidak sabar.</p></div>
            <div className="bs-card"><span className="bs-tag">Pola 03</span><h3>Booking lewat konten 24 jam</h3><p>Instruksi booking di Story hilang besok pagi. Yang membuka profil siang nanti tidak menemukan cara memesan.</p></div>
            <div className="bs-card"><span className="bs-tag">Pola 04</span><h3>Cabang bertambah, alamat tidak</h3><p>Cabang kedua dan ketiga buka, tapi tidak ada satu halaman pun yang memetakan semuanya. Reputasi jaringan tidak bekerja sebagai satu kesatuan.</p></div>
          </div>
        </div>
      </section>

      <section className="bs-section dark">
        <div className="bs-wrap">
          <h2>Yang kami bangun untukmu</h2>
          <ul className="bs-build">
            <li><b>Situs satu halaman yang selalu hidup.</b> Harga, layanan, galeri, dan tombol booking yang tidak pernah hilang dalam 24 jam.</li>
            <li><b>Booking WhatsApp-first.</b> Pelanggan pilih layanan, barber, dan jam → WhatsApp-mu menerima pesan terformat rapi; slot terkunci otomatis agar tidak dobel.</li>
            <li><b>Database pelanggan milikmu sendiri.</b> Riwayat dan kontak tersimpan di rumahmu, bisa digunakan untuk broadcast promo kapan saja.</li>
            <li><b>Siap multi-cabang.</b> Satu dashboard untuk semua cabang dengan rekap terpusat — bertambah cabang tidak berarti bertambah kacau.</li>
          </ul>
          <p className="bs-note">
            Sudah pakai aplikasi booking? Bagus — berarti kamu sudah tahu nilainya.
            Kami bangun milikmu sendiri; data dan riwayat milikmu sendiri.
          </p>
        </div>
      </section>

      <BarberPro />

      <section className="bs-section cream">
        <div className="bs-wrap">
          <h2>Tetangga yang sudah lebih dulu</h2>
          <blockquote className="bs-quote">
            "Sejak ada web, orderan WA nambah dan pelanggan baru lebih gampang percaya."
            <cite>— Pemilik · Theo Teknik, service AC Cakung (klien pertama kami)</cite>
          </blockquote>
          <p className="bs-lead">
            Theo bukan barbershop — dia bukti sistemnya bekerja. Untuk rasa barbershop, ada demo BarberPro di atas.
            Bulan ini saja kami menyusun 10+ audit kehadiran digital untuk barbershop Jabodetabek; beberapa mungkin tetanggamu.
          </p>
        </div>
      </section>

      <section className="bs-section dark">
        <div className="bs-wrap">
          <h2>Audit gratis untuk barbershopmu</h2>
          <ul className="bs-build">
            <li>Satu halaman PDF: temuan dari halaman publikmu (Maps, IG, situs) — bukan template.</li>
            <li>Ada bukti bertanda: apa yang bocor, di mana, dan akibatnya bagi usaha.</li>
            <li>Tanpa kewajiban apa pun — simpan sebagai checklist internal bila waktunya belum tepat.</li>
          </ul>
          <div className="bs-cta">
            <a className="bs-btn lime" href={WA_AUDIT}>Minta audit via WhatsApp →</a>
          </div>
        </div>
      </section>

      <section className="bs-section">
        <div className="bs-wrap">
          <h2>Harga? Transparan, seperti biasa.</h2>
          <p className="bs-lead">
            Tiga bentuk kerja sama: landing satu halaman, landing + booking WhatsApp-first,
            dan sistem multi-cabang dengan dashboard. Angka lengkapnya ada di halaman utama —
            kami tidak menyembunyikan harga di balik "hubungi kami".
          </p>
          <div className="bs-cta">
            <a className="bs-btn ghost dark" href="/#paket">Lihat paket di halaman utama</a>
            <a className="bs-btn primary" href={WA}>Chat WhatsApp →</a>
          </div>
        </div>
      </section>

      {/* ===== CTA PENUTUP — gaya /jabodetabek ===== */}
      <section className="bs-final">
        <div className="bs-wrap">
          <h2>Siap bikin pelanggan booking sendiri — bahkan saat kamu tidak sedang di toko?</h2>
          <p>
            Ceritakan barbershopmu 15 menit — kami sketsakan sistem yang paling cocok:
            booking per cabang, daftar harga permanen, atau mulai dari audit gratis.
            Tanpa komitmen.
          </p>
          <a className="bs-btn wa" href={WA}>Konsultasi Sistem Barbershop Anda →</a>
          <p className="bs-final-note">// balas cepat · Senin–Sabtu 09.00–18.00 WIB</p>
          <p className="bs-final-alt">Masih ragu? <a href={WA_AUDIT}>Minta audit gratis dulu</a> — satu halaman PDF, tanpa kewajiban.</p>
        </div>
      </section>
    </main>
    <Footer />
    </>    
  )
} 