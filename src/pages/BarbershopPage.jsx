import './BarbershopPage.css'
import Footer from '../components/layout/Footer'
import BarberPro from '../sections/BarberPro'

const WA = 'https://wa.me/6283171125657?text=Halo+RR+Devs,+saya+punya+barbershop+dan+mau+lihat+sistem+bookingnya+💈'
const WA_AUDIT = 'https://wa.me/6283171125657?text=Halo+RR+Devs,+saya+mau+klaim+audit+gratis+💈'

export default function BarbershopPage() {
  return (
   <>
    <main className="bs-page">
      <header className="bs-hero">
        <div className="bs-wrap">
          <p className="bs-kicker">Spesialis Website &amp; Otomatisasi Barbershop · Jabodetabek</p>
          <h1>Pelangganmu Sudah Online. <em>Kenapa Atur Jadwal Masih Manual?</em></h1>
          <p className="bs-sub">
            Kami Rafael &amp; Rendy (RR Devs), duo developer dari Cakung, Jakarta Timur.
            Kami membangun website dan sistem booking otomatis khusus barbershop &amp; salon —
            berbasis WhatsApp, langsung pakai, tanpa ribet belajar aplikasi baru.
          </p>
          <div className="bs-cta">
            <a className="bs-btn primary" href={WA}>Obrolkan Kebutuhan Bisnismu (Gratis) →</a>
            <a className="bs-btn ghost" href="https://barberpro.rrdevs.my.id" target="_blank" rel="noopener noreferrer">Coba Demo Booking Langsung</a>
          </div>
          <p className="bs-proof">Dipercaya oleh Theo Teknik (Cakung) · 20+ Audit Bisnis Disusun September 2026</p>
        </div>
      </header>

      <section className="bs-section">
        <div className="bs-wrap">
          <h2>4 Kesalahan Fatal di Sosmed yang Bikin Barbershop Kehilangan Pelanggan</h2>
          <p className="bs-lead">Kami mengaudit puluhan akun barbershop di Jabodetabek bulan ini, dan hampir semuanya membocorkan omzet karena hal ini:</p>
          <div className="bs-grid">
            <div className="bs-card">
              <span className="bs-tag">Masalah 01</span>
              <h3>Tombol "Website" Google Maps Mati</h3>
              <p>Di Google Maps bintang 5 Kamu, tombol websitenya mengarah ke halaman kosong atau error. Calon pelanggan baru langsung ragu, batal datang, dan kabur ke kompetitor terdekat.</p>
            </div>
            <div className="bs-card">
              <span className="bs-tag">Masalah 02</span>
              <h3>Daftar Harga Terkubur di Feed IG</h3>
              <p>Pelanggan baru malas scroll puluhan postingan cuma buat cari harga potong. Jika mereka tidak menemukan harga transparan dalam 3 detik, mereka akan menutup profil Kamu.</p>
            </div>
            <div className="bs-card">
              <span className="bs-tag">Masalah 03</span>
              <h3>Info Booking Hanya Mengandalkan Story</h3>
              <p>Menaruh cara booking di IG Story itu berisiko karena hilang dalam 24 jam. Calon pelanggan yang berkunjung di siang hari akan kebingungan karena tidak tahu cara memesan slot.</p>
            </div>
            <div className="bs-card">
              <span className="bs-tag">Masalah 04</span>
              <h3>Buka Cabang Baru, Tapi Alamat Tidak Jelas</h3>
              <p>Cabang kedua dan ketiga sudah buka, tapi tidak ada satu halaman resmi pun yang memetakan lokasinya dengan rapi. Akibatnya, kredibilitas brand besar Kamu jadi tidak terlihat bersatu.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bs-section dark">
        <div className="bs-wrap">
          <h2>Solusi yang Kami Siapkan untuk Barbershop Kamu</h2>
          <ul className="bs-build">
            <li><b>Website Portofolio yang Selalu Aktif.</b> Tempat permanen untuk menampilkan daftar harga, tim kapster, galeri potongan terbaik, dan tombol booking tanpa takut hilang dalam 24 jam.</li>
            <li><b>Sistem Kerja Booking WhatsApp-First.</b> Pelanggan bebas pilih layanan, kapster andalan, dan jam luang di web → Sistem otomatis mengirim detail pesanan rapi ke WhatsApp Kamu sekaligus mengunci slot agar tidak terjadi double booking.</li>
            <li><b>Database Pelanggan Aman Milik Kamu.</b> Semua riwayat kunjungan dan nomor kontak pembeli tersimpan rapi di sistem Kamu sendiri. Bebas digunakan untuk broadcast promo kapan saja tanpa biaya tambahan.</li>
            <li><b>Siap Ekspansi Multi-Cabang.</b> Kelola performa antrean dan omzet semua cabang dari satu dashboard terpusat. Tambah cabang baru jadi lebih mudah dipantau tanpa bikin pusing manajemen.</li>
          </ul>
          <p className="bs-note">
            Sudah pakai aplikasi pihak ketiga? Bagus—berarti Kamu paham pentingnya sistem. 
            Bedanya, kami membangun sistem mandiri milik Kamu sendiri; tanpa biaya komisi per transaksi dan data 100% milik Kamu.
          </p>
        </div>
      </section>

      <BarberPro />

      {/* <section className="bs-section cream">
        <div className="bs-wrap">
          <h2>Bukti Sistem Kami Bekerja Nyata</h2>
          <blockquote className="bs-quote">
            "Sejak ada website dari RR Devs, pesanan masuk dari WA nambah terus dan pelanggan baru bilang jauh lebih gampang buat booking jadwal."
            <cite>— Owner · Theo Teknik, Jasa AC Panggilan Cakung (Klien Pertama Kami)</cite>
          </blockquote>
          <p className="bs-lead">
            Theo memang bukan usaha barbershop—dia adalah bukti nyata bahwa alur konversi sistem kami bekerja efektif. Khusus untuk bisnis pangkas rambut, Kamu bisa langsung menguji coba Demo Aplikasi BarberPro di atas.
          </p>
        </div>
      </section> */}

      <section className="bs-section dark">
        <div className="bs-wrap">
          <h2>Dapatkan Analisis (Audit) Digital Gratis untuk Bisnis Kamu</h2>
          <ul className="bs-build">
            <li><b>Laporan Khusus 1 Halaman PDF:</b> Kami bedah langsung performa Google Maps, Instagram, dan kehadiran digital barbershop Kamu saat ini (Bukan hasil template otomatis).</li>
            <li><b>Poin Kebocoran Omzet:</b> Kami tunjukkan di mana titik kesalahan yang membuat Kamu kehilangan calon pelanggan potensial selama ini.</li>
            <li><b>100% Gratis &amp; Tanpa Ikatan:</b> Jadikan laporan ini sebagai panduan evaluasi tim internal Kamu secara bebas jika belum siap bekerja sama dengan kami.</li>
          </ul>
          <div className="bs-cta">
            <a className="bs-btn lime" href={WA_AUDIT}>Klaim Dokumen Audit via WhatsApp →</a>
          </div>
        </div>
      </section>

      <section className="bs-section">
        <div className="bs-wrap">
          <h2>Harga Transparan. Tanpa Biaya Tersembunyi.</h2>
          <p className="bs-lead">
            Kami menyediakan tiga paket kerja sama yang fleksibel: Landing Page Informasi, Website + Integrasi Booking WhatsApp, hingga Dashboard Multi-Cabang. Angka dan detail lengkapnya bisa Kamu cek langsung di halaman utama. Kami tidak menyembunyikan harga di balik kata "Hubungi Kami".
          </p>
          <div className="bs-cta">
            <a className="bs-btn dark" href="/#harga">Cek Detail Paket Harga</a>
            <a className="bs-btn primary" href={WA}>Tanya-Tanya Dulu via WA →</a>
          </div>
        </div>
      </section>

      {/* ===== CTA PENUTUP — gaya /jabodetabek ===== */}
      <section className="bs-final">
        <div className="bs-wrap">
          <h2>Siap Bikin Sistem Booking Toko Kamu Berjalan Otomatis 24 Jam?</h2>
          <p>
            Luangkan waktu 15 menit untuk mengobrol santai bersama kami. Kami akan buatkan sketsa sistem yang paling pas untuk barbershop Kamu: mulai dari manajemen per cabang, daftar harga permanen, atau mulai lewat audit gratis. Tanpa komitmen apa pun.
          </p>
          <a className="bs-btn wa" href={WA}>Konsultasi Sistem Barbershop Sekarang →</a>
          <p className="bs-final-note">// Respons Cepat · Senin–Sabtu 09.00–18.00 WIB</p>
          <p className="bs-final-alt">Masih ragu? <a href={WA_AUDIT}>Minta file audit gratis dulu</a> — laporan 1 halaman PDF langsung untuk bisnis Kamu.</p>
        </div>
      </section>
    </main>
    <Footer />
    </>    
  )
}
