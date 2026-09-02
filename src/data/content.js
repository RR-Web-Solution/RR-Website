/* ============================================================
   RR WEB SOLUTION — Pusat konten.
   Ubah teks, harga & kontak cukup di file ini.
   ============================================================ */

export const WA_NUMBER = '6283171125657'
export const waLink = (msg) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`
export const fmt = (n) => n.toLocaleString('id-ID')

/* ---------- Hero: demo website di browser mockup ---------- */
export const DEMOS = [
  {
    id: 'kopi',
    short: 'Kedai Kopi',
    brand: 'RUANG TUNGGU',
    tag: 'Kedai Kopi · Bandung',
    accent: '#A05C2C',
    soft: '#F7EFE2',
    nav: ['Menu', 'Cerita', 'Lokasi'],
    headline: 'Kopi enak buat nunggu senja.',
    sub: 'Single origin Nusantara, disangrai tiap minggu.',
    cta: 'Lihat Menu',
    feats: ['Buka 07.00–22.00', 'WiFi kencang', 'Live music Jumat'],
    seed: 'coffe',
    urlImages: 'https://fnb.coffee/wp-content/uploads/elementor/thumbs/Delicious-Latte-Coffee-r684p63vb7d5r3czx2sxrz95pbdp9a2rztjsqe9vy8.webp',
  },
  {
    id: 'batik',
    short: 'Butik Batik',
    brand: 'LARASATI',
    tag: 'UMKM Fashion · Pekalongan',
    accent: '#7A2E2E',
    soft: '#F6ECEA',
    nav: ['Koleksi', 'Kisah', 'Reseller'],
    headline: 'Warisan motif, gaya masa kini.',
    sub: 'Batik tulis & cap dengan pewarna alami.',
    cta: 'Belanja Koleksi',
    feats: ['Pewarna alami', 'Kirim se-Indonesia', 'Terima custom motif'],
    seed: 'rrweb-demo-batik',
     urlImages: 'https://i.ytimg.com/vi/Vnc_mueZli8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLATpVwYqT8vDICxihEcdslPQrf7xg',
  },
  {
    id: 'dapur',
    short: 'Katering',
    brand: 'DAPUR BU SRI',
    tag: 'Kuliner Rumahan · Jakarta',
    accent: '#C2452D',
    soft: '#FBF0E4',
    nav: ['Menu Hari Ini', 'Paket', 'Ongkir'],
    headline: 'Masakan rumahan, rasa juara.',
    sub: 'Fresh tiap pagi, tanpa pengawet.',
    cta: 'Pesan Sekarang',
    feats: ['Antar 30 menit', 'Halal & higienis', 'Paket nasi kotak'],
    seed: 'rrweb-demo-dapur',
    urlImages: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdumtmwDosPQGsBd45ztW4AgMYW5c-vEZ322ddoZ4Nm9iQuXYkycjepEY&s=10'
  },
]

export const TICKER = ['Landing Page', 'Company Profile', 'Website Custom (Unggulan)', 'Redesain Website', 'Undangan Digital', 'Maintenance & SEO']
// 'Toko Online' (menyusul)

/* ---------- Layanan ---------- */
export const SERVICES = [
  {
    n: '01', title: 'Landing Page', price: 'mulai Rp2,5 jt',
    desc: 'Satu halaman yang fokusnya satu: membuat pengunjung menghubungi / memesan. Cocok untuk produk tunggal, promo, atau jasa lokal yang butuh presence cepat.',
    tags: ['1 Halaman', 'Tombol WhatsApp', 'Form Order', 'Mobile-first'],
  },
  {
    n: '03', title: 'Company Profile', price: 'mulai Rp4,5 jt',
    desc: 'Website 5 halaman yang membuat bisnismu terlihat mapan dan terpercaya di mata pelanggan, mitra, maupun calon investor.',
    tags: ['Sampai 5 Halaman', 'Galeri & Peta', 'SEO Dasar', 'Email Bisnis'],
  },
  {
    n: '02', title: 'Website Custom', price: 'mulai Rp6,5 jt', hot: true,
    desc: 'Bisnismu unik — websitenya juga harus. Kami rancang dan bangun website dengan fitur yang benar-benar pas dengan cara kerjamu: sistem booking & reservasi, member area, kalkulator harga otomatis, integrasi WhatsApp API, sampai dashboard laporan penjualan. Bukan template, dibangun dari nol, dan 100% jadi milikmu selamanya.',
    tags: ['Fitur 100% Sesuai Kebutuhan', 'Sistem Booking / Reservasi', 'Integrasi WhatsApp API', 'Bisa Dikembangkan Bertahap'],
  },
  {
    n: '05', title: 'Maintenance & SEO', price: 'mulai Rp500rb/bln',
    desc: 'Website dijaga supaya tetap cepat, aman, dan update: backup rutin, perubahan konten, plus laporan performa tiap bulan.',
    tags: ['Backup Mingguan', 'Update Konten', 'Keamanan', 'Laporan Bulanan'],
  },
  // {
  //   n: '04', title: 'Toko Online', price: 'mulai Rp6,9 jt',
  //   desc: 'Katalog produk lengkap dengan keranjang, checkout, dan pembayaran. Kamu kelola produk sendiri lewat panel admin — tanpa biaya komisi marketplace.',
  //   tags: ['Katalog & Keranjang', 'Pembayaran QRIS', 'Panel Admin', 'Laporan Penjualan'],
  // },
]

/* ---------- Keunggulan ---------- */
export const WHY = [
  { n: '01', title: 'Harga Jujur & Terjangkau', desc: 'Harga disepakati di depan, tertulis di invoice — tidak ada biaya siluman. DP cukup 50%, sisanya setelah website jadi dan kamu puas.' },
  { n: '02', title: 'Pengerjaan Cepat', desc: 'Landing page jadi 3–7 hari, website custom 14–21 hari (berdasarkan kerumitan fitur). Progress bisa kamu pantau setiap hari lewat link preview.' },
  { n: '03', title: 'Gratis Revisi + Domain & Hosting', desc: 'Revisi desain 2–5× (tergantung paket) sampai sesuai karakter bisnismu. Semua paket sudah termasuk domain .com dan hosting tahun pertama.' },
  { n: '04', title: 'Dukungan Setelah Jadi', desc: 'Kami tidak hilang setelah launching. Ada support & konsultasi gratis 3 bulan, plus panduan cara mengelola website sendiri.' },
]

/* ---------- Proses ---------- */
export const PROCESS = [
  { n: '01', t: 'Konsultasi', d: 'Chat / call WhatsApp. Kami dengarkan kebutuhan & budget-mu — gratis, tanpa komitmen.' },
  { n: '02', t: 'Desain & Konten', d: 'Kami susun struktur, copywriting, dan desain awal. Kamu boleh revisi sebelum masuk koding.' },
  { n: '03', t: 'Development', d: 'Website dibangun, responsif di HP & laptop, lalu dites menyeluruh. Progress bisa dilihat real-time.' },
  { n: '04', t: 'Launch & Pelatihan', d: 'Go-live! Kami ajari cara kelola websitenya, lalu support 3 bulan penuh.' },
]

/* ---------- Paket Harga ---------- */
export const PLANS = [
  {
    name: 'Basic',
    sub: 'Landing Page',
    price: 2500000,
    hot: false,
    feats: [
      '1 halaman desain profesional',
      'Responsif di HP & laptop',
      'Gratis domain .com + hosting (1 thn)',
      'Tombol integrasi WhatsApp API',
      'Revisi 2×',
      'Pengerjaan 3–7 hari',
    ],
  },
  {
    name: 'Standar',
    sub: 'Company Profile / Website Bisnis',
    price: 4900000,
    hot: false,
    feats: [
      'Sampai 5 halaman',
      'Desain custom sesuai brand',
      'Gratis domain + hosting (1 thn)',
      'Galeri, peta & Google Maps',
      'SEO dasar (meta + sitemap)',
      'Revisi 4×',
      'Pengerjaan 7–10 hari',
    ],
  },
  {
    name: 'Custom',
    sub: 'Website Impian Bisnismu',
    price: 6900000,
    hot: true,
    feats: [
      'Sesi konsultasi & bedah kebutuhan bisnis 1-on-1',
      'Desain eksklusif dari nol — bukan template',
      '1 fitur custom (pilih: booking ATAU member ATAU kalkulator)',
      'Integrasi WhatsApp API',
      'Dashboard admin custom',
      'Gratis domain + hosting + SSL (1 tahun)',
      'Revisi sampai sesuai (maks. 7×)',
      'Garansi bug-fix & support 6 bulan',
      'Pelatihan tim + dokumentasi cara pakai',
      'Pengerjaan 2–4 minggu (berdasarkan kerumitan fitur)',
    ],
  },
]
export const CARE_PRICE = 500000
export const CARE_FEATS = ['Backup & keamanan mingguan', 'Update konten 2×/bulan', 'Laporan performa bulanan']

/* ---------- Portofolio ---------- */
export const PORTFOLIO = [
  {
     title: 'Digital Printing',
     type: 'Website Custom + Company Profile + Sistem Order + Admin CMS',
     year: '2026',
     desc: 'Website digital printing yang disebut mesin order 24 jam: pengunjung memilih produk, total harga terhitung otomatis, lalu pesanan terkirim rapi ke WhatsApp admin lengkap dengan detail ukuran, jumlah, dan opsi desain. Seluruh konten — produk, harga, galeri, testimoni, hingga jam buka — dikelola mandiri lewat admin panel tanpa menyentuh satu baris kode pun.',
     tags: ['Website Custom', 'Sesuai Kebutuhan', 'WhatsApp Ordering', 'Admin CMS'],
     metric: '24/7',
     metricLabel: 'order masuk otomatis tanpa jam tutup',
     imageUrl: 'images/digital-printing-portfolio.jpg',
     liveUrl: 'https://digital-printing-website-production.up.railway.app',
   },
   {
    title: 'Kopi Senja',
    type: 'Next.js 16 + Cinematic UI + Interactive Booking System',
    year: '2026',
    desc: 'Transformasi digital untuk UMKM coffee shop dengan pengalaman web kelas premium. Menggabungkan estetika "cinematic editorial" menggunakan Framer Motion dengan performa tinggi. Dilengkapi menu interaktif dengan filter kategori real-time, sistem reservasi meja langsung ke WhatsApp, dan optimasi SEO & Core Web Vitals (Lighthouse 95+) untuk memastikan pengunjung betah dan konversi pemesanan meningkat.',
    tags: ['Next.js 16 App Router', 'Cinematic UI/UX', 'WhatsApp API Booking', 'Lighthouse 95+', 'SEO Optimized'],
    metric: '95+',
    metricLabel: 'Lighthouse Performance Score',
    imageUrl: 'images/kopi-senja-portfolio.png',
    liveUrl: 'https://kopisenja-eight.vercel.app',
  },
  {
    title: 'Batik Nusantara',
    type: 'Company Profile + Product Catalog + Admin CMS + WhatsApp Ordering',
    year: '2026',
    desc: 'Website company profile untuk brand batik artisanal dengan katalog produk lengkap per kategori (Tulis, Cap, Printing, Kain & Pakaian). Pengunjung bisa lihat harga, pesan langsung via WhatsApp, dan admin bisa kelola seluruh produk lewat panel admin. Mendukung dual language (ID/EN) dan dirancang mobile-first untuk kemudahan akses dari mana saja.',
    tags: ['Company Profile', 'Katalog Produk', 'Admin CMS', 'WhatsApp Ordering', 'Multi-Language'],
    metric: '15',
    metricLabel: 'total produk terkelola via admin',
    imageUrl: 'images/batik-nusantara-portfolio.jpg',
    liveUrl: 'https://batik-comp.wasmer.app/id',
  },
]

/* ---------- Testimoni ---------- */
export const TESTIMONIALS = [
  {
     name: 'Joko Prasetyo',
     biz: 'Pemilik · Digital Printing, Bekasi',
     text: 'Awalnya ragu, percetakan kecil kok punya website sendiri. Ternyata kurang dari sebulan sudah live dan langsung jalan — pelanggan hitung harga banner sendiri, pesanan masuk ke WhatsApp lengkap dengan ukuran dan jumlah, bahkan sering masuk malam hari saat toko sudah tutup. Sekarang ganti harga atau tambah produk saya kerjakan sendiri dari HP lewat admin panel, nggak perlu nyentuh kode. Investasi yang terasa balik modal dalam hitungan bulan.',
     imageUrl: 'images/joko-prasetyo.jpg',
   },
   {
    name: 'Raka Aditya',
    biz: 'Founder · Kopi Senja, Jakarta',
    text: 'Awalnya kami hanya butuh website sederhana, tapi hasilnya jauh di atas ekspektasi. Desainnya terasa sangat premium dan animasinya halus, membuat brand kami terlihat jauh lebih mapan. Yang paling berdampak: fitur menu interaktif dan booking via WhatsApp sangat memudahkan operasional kami. Pelanggan sering memuji betapa mudahnya melihat menu dan reservasi dari HP. Website ini benar-benar meningkatkan citra dan konversi bisnis kami.',
    imageUrl: 'images/raka-aditya.jpg',
  },
]

/* ---------- Agency Partner ---------- */
export const PARTNER_PREVIEW = [
  { p: 'Landing Page', buy: '3,5 jt', sell: '7–9 jt' },
  { p: 'Company Profile', buy: '6 jt', sell: '12–15 jt' },
  { p: 'Website Custom', buy: '9 jt', sell: '18–25 jt' },
]

export const RATE_ROWS = [
  { p: 'Landing Page', d: '1 halaman fokus konversi', partner: 'Rp 2.500.000', sell: 'Rp 5–7 jt', margin: '~2x' },
  { p: 'Company Profile', d: 'Profil bisnis profesional multi-halaman', partner: 'Rp 4.900.000', sell: 'Rp 10–12 jt', margin: '~2x' },
  { p: 'Website Custom', d: 'Fitur sesuai kebutuhan klien', partner: 'Rp 6.900.000', sell: 'Rp 15–20 jt', margin: '~2x' },
  { p: 'Maintenance Bulanan', d: 'Perawatan & update berkala', partner: 'Rp 500.000/bln', sell: 'Rp 1–1,5 jt/bln', margin: '~2x' },
]

export const RULES = [
  { n: '01', t: 'White-Label Penuh', d: 'Nama agency Anda yang tampil di semua deliverable dan komunikasi dengan klien. Kami bekerja senyap di belakang layar.' },
  { n: '02', t: 'Terlindungi NDA', d: 'Kami tidak akan menghubungi klien Anda secara langsung tanpa izin. Kerahasiaan bisnis Anda dijamin perjanjian tertulis.' },
  { n: '03', t: 'Pembayaran Bertahap', d: '50% DP di awal → 40% saat staging disetujui → 10% saat handover. Arus kas agency tetap sehat.' },
  { n: '04', t: 'Garansi Purna Jual', d: 'Bug-fix gratis selama 30 hari + 2 ronde revisi di setiap project. Reputasi Anda di depan klien tetap aman.' },
]

export const FLOW = [
  { pct: '50%', t: 'DP', d: 'Project dimulai, slot dikunci' },
  { pct: '40%', t: 'Staging Approval', d: 'Klien Anda review & setujui hasil' },
  { pct: '10%', t: 'Handover', d: 'Website live, aset diserahkan' },
]