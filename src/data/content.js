/* ============================================================
   RR DEVS — Pusat konten (versi mesin penjualan barbershop).
   Ubah teks, harga & kontak cukup di file ini.
   ============================================================ */
export const WA_NUMBER = '6283171125657'
export const waLink = (msg) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`
export const fmt = (n) => n.toLocaleString('id-ID')
export const track = (name, extra = {}) => { try { window.gtag?.('event', name, extra) } catch (e) {} }
export const WA_MSG_BARBER = 'Halo RR Devs, saya punya barbershop dan mau lihat sistem bookingnya 🙂'

/* ---------- Hero: demo website di browser mockup (BarberPro pertama) ---------- */
export const DEMOS = [
  {
    id: 'barber',
    short: 'Barbershop',
    brand: 'BARBERPRO',
    tag: 'Sistem Booking · Demo Live',
    accent: '#FF4D00',
    soft: '#FFF3EC',
    nav: ['Booking', 'Layanan', 'Harga'],
    headline: 'Pelanggan pilih jam sendiri.',
    sub: 'Slot terisi otomatis terkunci. Tanpa double-book.',
    cta: 'Book Sekarang',
    feats: ['Notifikasi WA otomatis', 'Dashboard owner', 'Slot terkunci real-time'],
    seed: 'barberpro-demo',
    urlImages: '/images/barberpro-portfolio.jpg',
  },
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
    urlImages: '/demo-images/kopi-demo.webp',
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
    urlImages: '/demo-images/batik-demo.webp',
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
    urlImages: '/demo-images/dapur-demo.webp',
  },
]

export const TICKER = [
  'Sistem Booking Barbershop', 'BarberPro — Demo Live', 'Tanpa Double-Booking',
  'Notifikasi WhatsApp Otomatis', 'Dashboard Owner', 'Setup ±14 Hari', 'Jabodetabek',
]

/* ---------- Layanan (BarberPro unggulan pertama) ---------- */
export const SERVICES = [
  {
    n: '01', title: 'BarberPro — Sistem Booking', price: 'Rp 3,9 jt', hot: true,
    desc: 'Produk utama kami. Pelanggan pilih layanan, kapster, dan jam dari HP. Slot yang sudah diambil terkunci otomatis (tanpa double-booking). Notifikasi langsung ke WhatsApp toko + dashboard admin.',
    tags: ['Booking Real-Time', 'Notifikasi WA', 'Dashboard', '14 hari'],
    slide: {
      sub: 'Bukan sekadar website cantik. Ini sistem operasional yang membuat kursi tidak bentrok dan pemilik tahu omzet hari itu.',
      bullets: ['Overlap-proof di level database', 'Branding toko diganti milik kamu', 'Training singkat saat serah-terima', 'Support 30 hari setelah live'],
    },
  },
  {
    n: '02', title: 'Landing Page', price: 'mulai Rp2,5 jt',
    desc: 'Satu halaman yang fokusnya satu: membuat pengunjung menghubungi / memesan. Cocok untuk produk tunggal, promo, atau jasa lokal yang butuh presence cepat.',
    tags: ['1 Halaman', 'Tombol WhatsApp', 'Form Order', 'Mobile-first'],
    slide: {
      sub: '3 detik pertama menentukan semuanya. Kami bikin halaman yang membuat pengunjung langsung chat — bukan scroll lalu pergi.',
      bullets: ['CTA WhatsApp di setiap lipatan layar', 'Copywriting menjual, bukan sekadar indah', 'Gratis domain + hosting 1 tahun', 'Live 3–7 hari'],
    },
  },
  {
    n: '03', title: 'Company Profile', price: 'mulai Rp4,5 jt',
    desc: 'Website 5 halaman yang membuat bisnismu terlihat mapan dan terpercaya di mata pelanggan, mitra, maupun calon investor.',
    tags: ['Sampai 5 Halaman', 'Galeri & Peta', 'SEO Dasar', 'Email Bisnis'],
    slide: {
      sub: 'Calon klien besar googling bisnismu sebelum deal. Pastikan yang mereka temukan terlihat mapan — bukan akun medsos saja.',
      bullets: ['Struktur jelas: Beranda, Tentang, Layanan, Galeri, Kontak', 'Optimasi dasar agar mudah ditemukan Google', 'Gratis domain + hosting 1 tahun'],
    },
  },
  {
    n: '04', title: 'Website Custom', price: 'mulai Rp6,5 jt',
    desc: 'Fitur sesuai kebutuhan: booking multi-cabang, member, kalkulator harga, dashboard laporan, dll. Dibangun dari nol dan 100% jadi milikmu selamanya.',
    tags: ['Fitur Custom', 'Integrasi WA API', 'Dashboard', 'Skalabel'],
    slide: {
      sub: 'Kalau kebutuhanmu di luar BarberPro standar, kita bahas dulu scopenya. Timeline jujur 2–4 minggu.',
      bullets: ['Konsultasi 1-on-1 sebelum mulai', 'Dokumentasi + pelatihan', 'Bisa dikembangkan bertahap'],
    },
  },
  {
    n: '05', title: 'Maintenance & SEO', price: 'Rp350rb/bln',
    desc: 'Website dijaga supaya tetap cepat, aman, dan update: backup rutin, perubahan konten, plus laporan performa tiap bulan.',
    tags: ['Backup Mingguan', 'Update Konten', 'Keamanan', 'Laporan Bulanan'],
    slide: {
      sub: 'Website itu aset, bukan barang sekali pakai. Kami yang jaga supaya tetap kencang, aman, dan selalu update.',
      bullets: ['Backup & pengawasan keamanan mingguan', 'Update konten 2×/bulan tanpa ribet', 'Laporan performa tiap bulan'],
    },
  },
]

/* ---------- Keunggulan ---------- */
export const WHY = [
  { n: '01', title: 'Harga Jujur & Terjangkau', desc: 'Harga disepakati di depan, tertulis di invoice — tidak ada biaya siluman. DP cukup 50%, sisanya setelah website jadi dan kamu puas.' },
  { n: '02', title: 'Pengerjaan Cepat & Terpantau', desc: 'Landing page 3–7 hari, sistem booking ±14 hari. Progress bisa kamu pantau setiap hari lewat link preview.' },
  { n: '03', title: 'Gratis Revisi + Domain & Hosting', desc: 'Revisi 2× untuk landing dan BarberPro, sampai sesuai karakter bisnismu. Semua paket sudah termasuk domain .com dan hosting tahun pertama.' },
  { n: '04', title: 'Dukungan Setelah Jadi', desc: 'Kami tidak hilang setelah launching. Support 30 hari untuk BarberPro, plus panduan cara mengelola website sendiri.' },
]

/* ---------- Proses ---------- */
export const PROCESS = [
  { n: '01', t: 'Konsultasi', d: 'Chat / call WhatsApp. Kami dengarkan kebutuhan & budget-mu — gratis, tanpa komitmen.', points: ['Gratis & tanpa komitmen', 'Boleh cuma tanya-tanya dulu', 'Kami balas cepat di jam kerja'] },
  { n: '02', t: 'Desain & Konten', d: 'Kami susun struktur, copywriting, dan desain awal. Kamu boleh revisi sebelum masuk koding.', points: ['Revisi desain SEBELUM masuk koding', 'Voice bisnis kamu tetap terdengar', 'Mockup bisa kamu lihat & komentari'] },
  { n: '03', t: 'Development', d: 'Website dibangun, responsif di HP & laptop, lalu dites menyeluruh. Progress bisa dilihat real-time.', points: ['Progress dipantau tiap hari via link preview', 'Standar performa Lighthouse 95+', 'Dites di HP & laptop sungguhan'] },
  { n: '04', t: 'Launch & Pelatihan', d: 'Go-live! Kami ajari cara kelola websitenya, lalu support penuh sesuai paket.', points: ['Kami ajari sampai bisa kelola sendiri', 'Support sesuai paket', 'DP 50% → pelunasan setelah kamu setujui'] },
]

/* ---------- Paket Harga (Compro disembunyikan dari pricing) ---------- */
export const PLANS = [
  {
    name: 'Basic', sub: 'Landing Page', price: 2500000, hot: false,
    feats: ['1 halaman desain profesional', 'Responsif di HP & laptop', 'Gratis domain .com + hosting (1 thn)', 'Tombol integrasi WhatsApp API', 'Revisi 2×', 'Pengerjaan 3–7 hari'],
  },
  {
    name: 'BarberPro', sub: 'Sistem Booking Barbershop', price: 3900000, hot: true, flag: '★ Paling Laris · Barbershop',
    feats: [
      'Sistem booking real-time (slot terkunci)',
      'Pelanggan pilih layanan, kapster & jam dari HP',
      'Notifikasi WhatsApp otomatis ke toko',
      'Dashboard admin (jadwal + estimasi omzet)',
      'Branding toko (warna, logo, nama, harga)',
      'Gratis domain + hosting + SSL (1 tahun)',
      'Training singkat + dokumentasi',
      'Revisi 2×',
      'Pengerjaan target 14 hari',
      'Support 30 hari setelah live',
    ],
  },
  {
    name: 'Custom', sub: 'Website Impian Bisnismu', price: 6900000, hot: false,
    feats: [
      'Sesi konsultasi & bedah kebutuhan bisnis 1-on-1',
      'Desain eksklusif dari nol — bukan template',
      '1 fitur custom (booking / member / kalkulator)',
      'Integrasi WhatsApp API',
      'Dashboard admin custom',
      'Gratis domain + hosting + SSL (1 tahun)',
      'Garansi bug-fix & support 6 bulan',
      'Pengerjaan 2–4 minggu',
    ],
  },
]
export const CARE_PRICE = 350000
export const CARE_FEATS = [
  'Backup & keamanan mingguan', 'Update konten 2×/bulan', 'Laporan performa bulanan',
  'Dukungan teknis prioritas (WhatsApp)', 'Konsultasi strategi digital 1×/bulan', 'Optimasi kecepatan & SEO berkala',
]

/* ---------- Portofolio (jujur: produk / live / demo) ---------- */
export const PORTFOLIO = [
  {
    title: 'BarberPro', kind: 'product', kindLabel: 'Sistem siap pakai',
    demoCred: 'Demo admin: demo@rrdevs.my.id / demo1234',
    type: 'Website Custom + Sistem Booking Real-Time + Notifikasi Otomatis + Dashboard Admin', year: '2026',
    desc: 'Barbershop yang masih mencatat booking lewat chat selalu menghadapi masalah yang sama: dua orang menempati jam yang sama, dan pemilik tidak tahu omzet hari ini sampai tutup toko. BarberPro menyelesaikan semuanya: pelanggan memilih layanan, barber favorit, dan jam kosong langsung dari HP — slot terisi otomatis terkunci sehingga double-booking mustahil terjadi. Setiap booking baru berbunyi di WhatsApp pemilik, sementara dashboard merangkum jadwal dan estimasi pendapatan.',
    tags: ['Sistem Booking Real-Time', 'Notifikasi WhatsApp', 'Dashboard Admin', 'Overlap-proof'],
    metric: '1 mnt', metricLabel: 'dari buka website sampai jadwal terkunci — tanpa chat',
    imageUrl: 'images/barberpro-portfolio.jpg', liveUrl: 'https://barberpro.rrdevs.my.id',
  },
  {
    title: 'Theo Teknik', kind: 'live', kindLabel: 'Proyek live',
    type: 'Landing Page + WhatsApp-first + Local SEO', year: '2026',
    desc: 'Website jasa panggilan AC di Cakung, Jakarta Timur — klien nyata pertama kami. WhatsApp dijadikan satu-satunya jalur booking di setiap section, daftar harga transparan dipasang di depan untuk mematahkan ketakutan "kena tipu", plus bukti before-after. Sampai hari ini masih live dan dipakai.',
    tags: ['Landing Page', 'WhatsApp-first', 'Local SEO'],
    metric: '1', metricLabel: 'jalur booking tunggal via WhatsApp',
    imageUrl: 'images/theo-teknik-portfolio.jpg', liveUrl: 'https://theo-teknik.rrdevs.my.id',
  },
  {
    title: 'Architect Studio', kind: 'demo', kindLabel: 'Demo desain',
    type: 'Company Profile Premium + Galeri Project + Cinematic Visual', year: '2026',
    desc: 'Konsep company profile firma arsitektur: pengalaman visual sinematik, foto bangunan berukuran penuh, animasi halus, dan tipografi elegan. Dibuat untuk membuktikan kami paham desain kelas atas — bukan klien nyata, dan kami labeli jujur sebagai demo.',
    tags: ['Company Profile Premium', 'Visual Sinematik', 'Lighthouse 100'],
    metric: '100', metricLabel: 'skor Lighthouse Performance',
    imageUrl: 'images/architect-studio-portfolio.jpg', liveUrl: 'https://architect-studio.rrdevs.my.id',
  },
  {
    title: 'Kopi Senja', kind: 'demo', kindLabel: 'Demo desain',
    type: 'Next.js 16 + Cinematic UI + Interactive Booking', year: '2026',
    desc: 'Konsep F&B pribadi: menu interaktif dengan filter kategori real-time dan reservasi meja yang auto-generate pesan WhatsApp. Kami labeli jujur sebagai konsep pribadi, bukan klien.',
    tags: ['Next.js 16', 'Cinematic UI', 'WhatsApp Booking'],
    metric: '95+', metricLabel: 'Lighthouse Performance Score',
    imageUrl: 'images/kopi-senja-portfolio.png', liveUrl: 'https://kopisenja.rrdevs.my.id',
  },
  {
    title: 'Batik Nusantara', kind: 'demo', kindLabel: 'Demo desain',
    type: 'Company Profile + Product Catalog + Admin CMS', year: '2026',
    desc: 'Konsep company profile brand batik dengan katalog produk per kategori dan pemesanan via WhatsApp plus panel admin. Demo kemampuan, bukan klien nyata.',
    tags: ['Company Profile', 'Katalog Produk', 'Admin CMS'],
    metric: '15', metricLabel: 'total produk terkelola via admin',
    imageUrl: 'images/batik-nusantara-portfolio.jpg', liveUrl: 'https://batik-comp.wasmer.app/id',
  },
  {
    title: 'Digital Printing', kind: 'demo', kindLabel: 'Demo · sedang dipindah', moving: true,
    type: 'Website Custom + Sistem Order + Admin CMS', year: '2026',
    desc: 'Mesin order 24 jam untuk percetakan: kalkulator harga otomatis berdasarkan ukuran & jumlah, order terformat rapi ke WhatsApp, dan admin panel penuh. Saat ini sedang kami pindahkan ke hosting baru.',
    tags: ['Kalkulator Harga', 'WhatsApp Ordering', 'Admin CMS'],
    metric: '24/7', metricLabel: 'order masuk otomatis tanpa jam tutup',
    imageUrl: 'images/digital-printing-portfolio.jpg', liveUrl: '#',
  },
]

/* ---------- Testimoni: hanya yang jujur ---------- */
export const TESTIMONIALS = [
  {
    name: 'Proyek live — bisnis asli', biz: 'Klien nyata · Jakarta Timur', badge: '✓ TERVERIFIKASI LIVE',
    text: 'Website jasa teknisi AC di Cakung, Jakarta Timur. Tombol booking ke WhatsApp, daftar harga transparan di depan, dan halaman yang siap dipakai calon pelanggan saat googling "service AC terdekat". Dikerjakan langsung oleh founder RR Devs — dan sampai hari ini masih live serta dipakai.',
    imageUrl: 'images/theo-teknik-portfolio.jpg',
    slideQuote: 'Masih live dan dipakai sampai hari ini.',
    link: 'https://theo-teknik.rrdevs.my.id',
  },
]

/* ---------- Agency Partner ---------- */
export const PARTNER_PREVIEW = [
  { p: 'BarberPro Setup', buy: '3,9 jt', sell: '8–10 jt' },
  { p: 'Landing Page', buy: '2,5 jt', sell: '5–7 jt' },
  { p: 'Website Custom', buy: '6,9 jt', sell: '15–20 jt' },
]
export const RATE_ROWS = [
  { p: 'BarberPro Setup', d: 'Sistem booking barbershop + branding toko', partner: 'Rp 3.900.000', sell: 'Rp 8–10 jt', margin: '~2x' },
  { p: 'Landing Page', d: '1 halaman fokus konversi', partner: 'Rp 2.500.000', sell: 'Rp 5–7 jt', margin: '~2x' },
  { p: 'Company Profile', d: 'Profil bisnis profesional multi-halaman', partner: 'Rp 4.500.000', sell: 'Rp 10–12 jt', margin: '~2x' },
  { p: 'Website Custom', d: 'Fitur sesuai kebutuhan klien', partner: 'Rp 6.900.000', sell: 'Rp 15–20 jt', margin: '~2x' },
  { p: 'Maintenance Bulanan', d: 'Perawatan & update berkala', partner: 'Rp 350.000/bln', sell: 'Rp 1–1,5 jt/bln', margin: '~2x' },
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

/* ---------- Studi kasus /jabodetabek (quote Theo dianonimkan) ---------- */
export const CASE_STUDIES = [
  {
    id: 'theo-teknik', emoji: '❄️', title: 'Theo Teknik',
    tagline: 'Landing page service AC · Cakung, Jakarta Timur',
    kind: 'client', kindLabel: 'Client Story · Klien Nyata',
    story: 'Theo Teknik, jasa panggilan AC di Cakung, sebelumnya cuma mengandalkan promosi mulut ke mulut. Kami bangun landing page yang menaruh WhatsApp sebagai satu-satunya jalur booking di setiap section, menampilkan daftar harga transparan di depan — karena ketakutan terbesar pelanggan jasa panggilan adalah kena tipu harga — plus bukti before-after. Hasilnya: usaha yang tadinya cuma modal nomor HP sekarang punya kehadiran digital yang meyakinkan siapa pun yang googling "service AC terdekat".',
    highlights: ['WhatsApp jadi satu-satunya jalur booking di setiap section', 'Daftar harga transparan di depan — mematahkan takut kena tipu', 'Bukti before-after + testimoni asli'],
    stack: ['Landing Page', 'WhatsApp-first', 'Local SEO'],
    quote: { text: 'Sejak ada web, orderan WA nambah dan pelanggan baru lebih gampang percaya.', name: 'Pemilik', biz: 'Jasa teknisi AC · Jakarta Timur' },
    accent: '#0369A1', shot: '/images/theo-teknik-portfolio.jpg',
    shotNote: 'Landing page + daftar harga transparan + integrasi WhatsApp',
    live: 'https://theo-teknik.rrdevs.my.id',
  },
  {
    id: 'barberpro', emoji: '🪒', title: 'BarberPro', tagline: 'Sistem booking barbershop anti-bentrok',
    kind: 'demo', kindLabel: 'Capability Demo',
    story: 'BarberPro kami bangun untuk membuktikan satu hal: RR Devs sanggup bikin sistem booking production-grade. Penyakit klasik booking amatir — dua pelanggan pesan jam yang sama karena validasi cuma di tampilan — kami kunci di level database: constraint PostgreSQL yang bikin bentrok jadwal mustahil terjadi secara teknis. Lengkap dengan notifikasi WhatsApp otomatis ke pelanggan & admin, plus dashboard pendapatan.',
    highlights: ['Constraint PostgreSQL — bentrok jadwal mustahil', 'Notifikasi WhatsApp booking terbaru ke admin', 'Dashboard pendapatan & barber tersibuk'],
    stack: ['Next.js', 'PostgreSQL', 'Fonnte WA API', 'Termux · Android'],
    footnote: 'Dibangun 100% oleh Rafael dari tablet Android pakai Termux — tanpa laptop.',
    quote: null, accent: '#c9a24b', shot: '/images/barberpro-portfolio.jpg',
    shotNote: 'Homepage premium + dashboard booking & pendapatan',
    live: 'https://barberpro.rrdevs.my.id',
  },
  {
    id: 'architect-studio', emoji: '🏛️', title: 'Architect Studio', tagline: 'Company profile rasa premium',
    kind: 'demo', kindLabel: 'Capability Demo',
    story: 'Konsep company profile firma arsitektur: tipografi editorial, animasi scroll halus, palet warna premium, dan performa kencang meski visual berat. Ini yang kami tunjukkan ke calon klien yang butuh presence digital terasa "mahal".',
    highlights: ['Tipografi editorial & animasi scroll halus', 'Palet warna premium', 'Performa kencang meski visual berat'],
    stack: ['Next.js', 'Framer Motion', 'Editorial Design'],
    quote: null, accent: '#a08757', shot: '/images/architect-studio-portfolio.jpg', shotNote: 'Beranda — tipografi editorial',
    live: 'https://architect-studio.rrdevs.my.id',
  },
  {
    id: 'toko-percetakan', emoji: '🖨️', title: 'Toko Percetakan Online', tagline: 'E-commerce percetakan + kalkulator harga',
    kind: 'demo', kindLabel: 'Capability Demo · sedang dipindah',
    story: 'Simulasi lengkap sistem e-commerce percetakan: kalkulator harga otomatis berdasarkan ukuran & jumlah, panel admin penuh, sampai order yang otomatis terformat rapi ke WhatsApp. Saat ini sedang kami pindahkan ke hosting baru.',
    highlights: ['Kalkulator harga otomatis (ukuran × jumlah)', 'Panel admin penuh tanpa sentuh kode', 'Order auto-format rapi masuk WhatsApp'],
    stack: ['Laravel', 'MySQL', 'WhatsApp Order'],
    quote: null, accent: '#4338CA', shot: '/images/digital-printing-portfolio.jpg', shotNote: 'Kalkulator harga + admin panel',
    live: '#',
  },
  {
    id: 'kopi-senja', emoji: '☕', title: 'Kopi Senja', tagline: 'Reservasi kedai kopi auto-WhatsApp',
    kind: 'demo', kindLabel: 'Capability Demo · Konsep',
    story: 'Konsep F&B pribadi: reservasi meja yang auto-generate pesan WhatsApp — pelanggan pilih tanggal, jam, dan jumlah orang, sistem yang menyusun pesannya. Ditambah menu interaktif dengan filter kategori real-time serta optimasi SEO & Core Web Vitals.',
    highlights: ['Reservasi auto-generate pesan WhatsApp', 'Menu interaktif filter kategori real-time', 'Lighthouse 95+'],
    stack: ['Next.js 16', 'Cinematic UI', 'SEO · CWV'],
    quote: null, accent: '#A05C2C', shot: '/images/kopi-senja-portfolio.png', shotNote: 'Menu interaktif + reservasi WA',
    live: 'https://kopisenja.rrdevs.my.id',
  },
]

/* ---------- Stats JUJUR ---------- */
export const STATS = [
  { value: 14, suffix: '', label: 'hari — target pasang BarberPro di toko kamu' },
  { value: 0, suffix: '', label: 'double-booking — slot terkunci di level database' },
  { value: 20, suffix: '+', label: 'audit digital barbershop Jabodetabek (Sep 2026)' },
  { value: 2, suffix: '', label: 'sistem live yang bisa kamu klik sekarang (demo + klien)' },
]
