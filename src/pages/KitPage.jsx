import { useState, useEffect } from 'react'
import { toPng } from 'html-to-image'
import { PORTFOLIO } from "../data/content";
import './KitPage.css'
/* ============================================================
PABRIK KONTEN RR DEVS v3.1 — perbaikan desain carousel penawaran.
Perubahan v3.1 (sesuai kritik_desain_carousel.md):
- Urutan hl-penawaran: offer → manfaat → transparansi → langkah → CTA.
- Cover hl-penawaran pakai theme-orange (urgensi, transisi lembut ke krem).
- Placeholder stiker DIHAPUS dari slide; diganti zona kosong .kit-cta-space.
  Info teks+URL stiker ditampilkan DI LUAR slide (baris info di bawah preview).
- Konten slide story diseimbangkan vertikal (auto-margin di CSS).
- Slide tertentu diberi gambar penyeimbang bawah (dasbor / notifikasi WA).
============================================================ */
const CAROUSELS = {
/* ================= POST FEED (1080×1350) ================= */
'fc-tim': [
  // ---- SLIDE 1: sampul — kami memperkenalkan diri, bukan diperkenalkan ----
  { dark: true, chip: 'DI BALIK BARBERPRO',
    title: (<>Kami berdua di balik <em>BarberPro.</em></>),
    body: 'Bukan tim besar yang berganti-ganti. Kami berdua yang mengerjakan BarberPro — kami juga yang membalas chat-mu.',
    stats: [
      { b: '2', s: 'kepala yang mengerjakan langsung' },
      { b: '1', s: 'jalur chat, langsung ke kami' },
      { b: '0', s: 'perantara antara kamu dan kami' },
    ],
    note: 'geser → siapa mengerjakan apa' },

  // ---- SLIDE 2: Rafael ----
  { chip: 'KEPALA 1 · PRODUK',
    title: (<>Rafael.</>),
    photo: { src: '/images/rafael.jpg', name: 'Rafael', role: 'Konsultasi · Desain · Kode Produk' } },

  // ---- SLIDE 3: Rendy ----
  { chip: 'KEPALA 2 · INFRASTRUKTUR',
    title: (<>Rendy.</>),
    photo: { src: '/images/rendy.jpg', name: 'Rendy', role: 'Server · Database · Keamanan' } },

  // ---- SLIDE 4: cara kami bekerja & kenapa kapasitas dibatasi ----
  { chip: 'CARA KAMI BEKERJA',
    title: (<>Keputusan cepat, <em>karena dua kepala.</em></>),
    bullets: [
      'Kamu chat langsung dengan kami yang menulis kode — tanpa perantara, tanpa rapat berjenjang.',
      'Pengerjaan berbayar: kami pegang satu sistem BarberPro dalam satu waktu. Fokus penuh, bukan antrean panjang.',
      'Karena kami baru, fokus kami 100% untuk proyek yang kami pegang.',
    ],
    note: 'geser → cara kenalan' },

  // ---- SLIDE 5: CTA tunggal — kenalan, bukan beli ----
  { theme: 'night', chip: 'KENALAN DULU',
    title: (<>Mau kenalan langsung? <em>15 menit, gratis.</em></>),
    body: 'Ceritakan tokomu lewat WhatsApp. Kami petakan sistem yang cocok dan tuliskan rencananya — kalau tidak berlanjut, rencana itu tetap milikmu.',
    sticker: { url: 'https://wa.me/6283171125657?text=Halo%20Rafael%2C%20halo%20Rendy%20—%20boleh%20kenalan%2015%20menit%3F', text: 'KONSULTASI GRATIS VIA WHATSAPP (15 MENIT)' },
    note: 'balasan maksimal 2 jam pada jam kerja 09:00–18:00 WIB' },
],
/* ================= SOROTAN / STORY (1080×1920) ================= */
'hl-penawaran': [
{ theme: 'orange', chip: 'PENAWARAN TERBATAS', title: (<>Kuota 3 slot. Sistem booking gratis <em>1 bulan penuh.</em></>), body: 'BarberPro kami pasang tanpa biaya untuk 3 barbershop tercepat di Jabodetabek. Sistem lengkap — booking, notifikasi WhatsApp, dan dasbor — bukan versi terbatas. Termasuk setup dengan data tokomu: identitas, kapster, layanan, dan harga.', note: 'geser → isi penawaran dan caranya', img: '/images/barberpro-portfolio.png', imgAlt: 'Hero BarberPro', imgBar: 'barberpro.rrdevs.my.id', },
{ chip: 'APA YANG KAMU DAPAT', title: (<>Semuanya gratis. <em>Tanpa biaya tersembunyi.</em></>), bullets: ['Sistem booking tayang 30 hari di alamat web khusus tokomu', 'Notifikasi WhatsApp asli ke nomor toko', 'Dasbor jadwal dan estimasi omzet', 'Setup penuh oleh kami — kamu tinggal pakai', 'Tanpa DP, tanpa biaya bulanan, tanpa kontrak'], img: '/images/barberpro-dashboard.png', imgAlt: 'Dasbor BarberPro: jadwal hari ini dan estimasi omzet', imgBar: 'barberpro.rrdevs.my.id/admin', },
{ chip: 'SETELAH 30 HARI', title: (<>Tiga pilihan. <em>Semua aman.</em></>), numStart: 1, numbered: ['Lanjut pakai: bayar paket BarberPro, sistem dan data pindah ke alamat web milikmu.', 'Berhenti: kami turunkan bersih, tanpa tagihan apa pun.', 'Ekspor: seluruh data booking dan pelanggan kami serahkan.'], body: 'Tidak ada perpanjangan otomatis. Tidak ada biaya tersembunyi.' },
{ chip: 'CARA IKUT', title: (<>4 langkah, <em>mulai dari chat.</em></>), numStart: 1, numbered: ['Chat WhatsApp dengan kata "TRIAL".', 'Kirim data: logo, nama kapster, layanan, harga, dan jam buka.', 'Maksimal 5 hari: sistem tayang di alamat web khusus tokomu.', 'Pakai 30 hari penuh untuk booking nyata.'], img: '/images/barberpro-booking.png', imgAlt: 'Booking BarberPro: Pilih layanan, kapster, dan jam dari HP', imgBar: 'barberpro.rrdevs.my.id/booking', },
{ chip: 'SLOT TERBATAS', title: (<>Siapa cepat, <em>dia dapat.</em></>), body: 'Hanya untuk 3 barbershop pertama bulan ini. Ketuk link di bawah untuk amankan slot kamu sekarang.', sticker: { url: 'https://wa.me/6283171125657?text=TRIAL', text: 'CHAT "TRIAL" — AMANKAN SLOT' }, img: '/images/barberpro-portfolio.png', imgAlt: 'Hero BarberPro', imgBar: 'barberpro.rrdevs.my.id', },
],
'hl-barberpro': [
{ dark: true, chip: 'SISTEM ANDALAN', title: (<>Pelanggan pilih jam sendiri. <em>Kapster tidak double-booking.</em></>), body: 'BarberPro: sistem booking milik tokomu sendiri. Bukan aplikasi orang lain.', note: 'geser → lihat dua sisi', img: '/images/barberpro-portfolio.png', imgAlt: 'Hero BarberPro', imgBar: 'barberpro.rrdevs.my.id', },
{ chip: 'SISI PELANGGAN', title: (<>Pilih layanan, kapster, dan jam <em>dari HP.</em></>), bullets: ['Slot terisi langsung terkunci', 'Tidak perlu chat admin untuk cek jam kosong', 'Konfirmasi langsung setelah booking'], img: '/images/barberpro-booking.png', imgAlt: 'Booking BarberPro: Pilih layanan, kapster, dan jam dari HP', imgBar: 'barberpro.rrdevs.my.id/booking', sticker: { url: 'https://barberpro.rrdevs.my.id', text: 'COBA SEBAGAI PELANGGAN' } },
{ chip: 'SISI OWNER', title: (<>Booking masuk, WA berbunyi, <em>dasbor mencatat.</em></>), tight: true,
  bullets: ['Notifikasi WhatsApp otomatis ke nomor toko', 'Dasbor: kelola booking, jadwal hari ini, estimasi omzet, kapster tersibuk'],
  img: '/images/barberpro-dashboard.png', imgAlt: 'Dasbor BarberPro: jadwal hari ini dan estimasi omzet', imgBar: 'barberpro.rrdevs.my.id/admin', imgSize: 'sm',
  creds: { email: 'demo@gmail.com', pass: 'barberpro', sm: true },
  sticker: { url: 'https://barberpro.rrdevs.my.id/admin/login', text: 'COBA SEBAGAI OWNER' } },
{ chip: 'BUKTIKAN SENDIRI', title: (<>Coba sekarang sebagai pelanggan <em>atau pemilik.</em></>), body: 'Semua tombol di demo ini berfungsi nyata: booking, kunci slot, notifikasi, dan dasbor.', img: '/images/barberpro-portfolio.png', imgAlt: 'Hero BarberPro', imgBar: 'barberpro.rrdevs.my.id', sticker: { url: 'https://barberpro.rrdevs.my.id', text: 'COBA DEMO BOOKING LIVE' }, },
],
'hl-harga': [
{ theme: 'orange', chip: 'HARGA', title: (<>Harga tertulis di awal. <em>Tanpa kejutan.</em></>), body: 'Semua paket sudah termasuk gratis domain, hosting, dan SSL tahun pertama. Kode & data 100% milikmu — tanpa langganan bulanan ke kami.', note: 'geser → 4 paket', img: '/images/paket-harga.png', imgAlt: 'Paket Harga RR Devs', },
{ chip: 'BARBERPRO · SISTEM BOOKING', title: (<><span className="nb">Rp3,9 jt</span> — <em>Sistem Booking Barbershop.</em></>), 
  bullets: [
      'Sistem booking real-time (slot terkunci)',
      'Pelanggan pilih layanan, kapster & jam dari HP',
      'Notifikasi WhatsApp otomatis ke toko',
      'Dashboard admin (kelola booking & Jadwal)',
      'Pengerjaan 14 hari kerja sejak bahan lengkap',
      'Support 30 hari setelah live',
  ], img: '/images/barberpro-portfolio.png', imgAlt: 'Hero BarberPro', imgBar: 'barberpro.rrdevs.my.id', },
{ chip: 'BASIC · LANDING PAGE', title: (<>Landing Page <em><span className="nb">Rp2,9 jt.</span></em></>),
  bullets: [
   '1 halaman desain profesional',
    'Responsif di HP & laptop', 
    'Integrasi tombol WhatsApp', 
    'Gratis revisi sampai 2×', 
    'Pengerjaan 3–7 hari kerja sejak bahan lengkap',
    'Support 30 hari setelah live',
  ], 
  img: '/images/architect-studio-portfolio.jpg', imgAlt: 'Website Landing Page Architect Studio', imgBar: 'architect-studio.rrdevs.my.id' },
{ chip: 'CUSTOM — SESUAI KEBUTUHAN', title: (<>Website Custom <em><span className="nb">Rp6,9 jt.</span></em></>), 
  bullets: [
     'Sesi konsultasi & bedah kebutuhan bisnis 1-on-1',
      'Desain eksklusif dari nol — bukan template',
      '1 fitur custom bisnis apa saja (ukuran dibatasi build 2–4 minggu)',
      'Dashboard admin custom',
      'Gratis revisi sampai 5x',
      'Pengerjaan 2–4 minggu sejak bahan lengkap',
      'Garansi bug-fix & support penuh 6 bulan',
  ], img: '/images/rrprint-dashboard.png', imgAlt: 'Dashboard Admin Project RRPrint', imgBar: 'rrprint.rrdevs.my.id' },
{ chip: 'MAINTENANCE — PERAWATAN WEBSITE', title: (<><span className="nb">Rp350rb/bln</span> <em>website tetap sehat.</em></>), 
  bullets: [
     'Backup & keamanan mingguan', 
     'Update konten 2×/bulan', 
     'Laporan performa bulanan',
     'Dukungan teknis prioritas (WhatsApp)', 
     'Konsultasi strategi digital 1×/bulan', 
     'Optimasi kecepatan & SEO berkala',
  ],
  img: '/images/maintenance.png', imgAlt: 'Website dengan Skor Lighthouse performa 100',
},
{ chip: 'SKEMA BAYAR', title: (<>DP 50%. Pelunasan <em>setelah jadi.</em></>), 
  bullets: [
     'Progress dipantau tiap hari', 
     'Pelunasan setelah kamu setujui', 
     'Tidak cocok di 3 hari pertama? DP kembali 100%.',
     'Mulai hari 4, DP menutup pekerjaan yang berjalan.'
  ], 
  img: '/images/under-development.png',
  imgAlt: 'Website yang sedang dalam proses development',
  imgBar: 'preview-project-xyz-678',
  sticker: { url: 'https://wa.me/6283171125657?text=Halo%20RR%20Devs%2C%20saya%20mau%20minta%20rincian%20harga', text: 'MINTA RINCIAN HARGA' } 
},
],
'hl-porto': [
  // ---- SLIDE 1: buka dengan pembuktian transparan ----
  {
    dark: true, chip: 'PORTOFOLIO',
    title: (<>Ada {PORTFOLIO.length} aplikasi web di sini. <em>Silakan kamu tes sendiri.</em></>),
    body: 'Kami tidak minta kamu langsung percaya. Cukup ketuk dan coba. Semua aplikasi di bawah ini aktif dan bisa digunakan sekarang.',
    chips: ['BISA DICOBA', '100% AKTIF', 'BUKAN SCREENSHOT PALSU'],
    stats: [
      { b: PORTFOLIO.length, s: 'karya asli yang bisa kamu klik hari ini juga' },
      { b: '1', s: 'sudah dipakai bisnis nyata' },
      { b: '0', s: 'ulasan palsu buatan kami sendiri' },
    ],
    note: 'geser → lihat bukti pertama',
  },
  // ---- SLIDE 2–6: lahir dari katalog (Variabel dinamis) ----
  ...PORTFOLIO.filter((p) => p.kit !== false).map((p) => ({
    chip: p.kindLabel.toUpperCase(),
    title: (<>{p.title} <em>{p.kind === 'demo' ? 'demo live.' : p.kind === 'live' ? 'dipakai bisnis asli.' : 'siap pakai.'}</em></>),
    body: p.title === 'BarberPro' ? 'BarberPro: pelanggan pilih layanan, barber, dan jam langsung dari HP — slot yang terisi otomatis terkunci.' : p.desc.split('. ')[0] + '.',
    img: `/${p.imageUrl}`,
    imgAlt: `Tangkapan layar ${p.title}`,
    imgBar: p.liveUrl.slice(8),
    chips: p.tags,
    note: `${p.metric} ${p.metricLabel}`,
    sticker: {
      url: p.liveUrl,
      text: p.kind === 'demo' ? 'BUKA LINK UJI COBA' : p.kind === 'product' ? 'COBA DEMO LANGSUNG' : 'BUKA SITUS ASLINYA',
    },
  })),
  // ---- SLIDE 8: Pendaratan & Ajakan Bertindak (CTA) ----
  {
    theme: 'orange', chip: 'GILIRAN BISNISMU',
    title: (<>Daftar ini masih kurang satu: <em>nama bisnismu.</em></>),
    body: 'Ngobrol dulu 15 menit lewat WA. Gratis dan tanpa ikatan apa pun. Kamu cerita kebutuhan bisnismu, kami buatkan coretan rencana sistem yang pas. Jika cocok, kita jalan. Jika tidak, rencana itu tetap milikmu secara cuma-cuma.',
    bullets: [
      'Harga pas di awal — tidak ada biaya tambahan mendadak',
      'Tidak cocok di 3 hari pertama? DP balik 100%',
      'Sistem jadi hak milikmu penuh — tanpa biaya bulanan ke kami',
    ],
    sticker: {
      url: 'https://wa.me/6283171125657?text=Halo%20RR%20Devs%2C%20saya%20mau%20konsultasi%20gratis%2015%20menit',
      text: 'KONSULTASI GRATIS VIA WA (15 MENIT)',
    },
    note: 'kami balas kurang dari 2 jam',
  },
],
'hl-testi': [
  { dark: true, chip: 'STRATEGI & BUKTI',
    title: (<>Kami mengganti testimoni dengan <em>bukti nyata</em> yang bisa kamu uji.</>),
    body: 'Kami tidak meminta kamu percaya pada kata-kata. Cukup ketuk, buka, dan uji sendiri seluruh sistem yang sudah kami bangun pada slide berikutnya.',
    note: 'geser untuk menguji →' },
  { chip: 'PROYEK LIVE',
    title: (<>Website Theo Teknik: <em>masih aktif hingga hari ini.</em></>),
    body: 'Website jasa teknisi AC di Jakarta Timur ini kami bangun dari nol tanpa biaya sebagai bukti kemampuan. Silakan periksa langsung: tombol WhatsApp berfungsi dan daftar harga tertera terbuka.',
    img: '/images/theo-teknik-portfolio.jpg', imgAlt: 'Tampilan depan Theo Teknik', imgBar: 'theo-teknik.rrdevs.my.id',
    sticker: { url: 'https://theo-teknik.rrdevs.my.id', text: 'LIHAT SITUS' } },
  { chip: 'AKSES DEMO',
    title: (<>Sistem yang berjalan adalah <em>bukti terbaik.</em></>),
    body: 'Uji sistem dari dua sisi. Sebagai pelanggan: buat satu booking uji. Sebagai pemilik: masuk ke dasbor dan periksa jadwal serta pendapatan.',
    creds: { email: 'demo@gmail.com', pass: 'barberpro' },
    img: '/images/barberpro-portfolio.png', imgAlt: 'Tampilan depan BarberPro', imgBar: 'barberpro.rrdevs.my.id',
    sticker: { url: 'https://barberpro.rrdevs.my.id', text: 'COBA SISTEM DEMO' } },
  { chip: 'AUDIT NYATA',
    title: (<>20+ barbershop telah kami audit <em>tanpa biaya.</em></>),
    body: 'Kami memeriksa halaman publik setiap toko, menemukan celah yang membuat calon pelanggan pergi, dan mengirimkan solusi perbaikannya langsung kepada pemilik.',
    stats: [
      { b: '20+', s: 'audit barbershop Jabodetabek' },
      { b: 'Rp 0', s: 'biaya yang kami kenakan' },
    ],
    sticker: { url: 'https://wa.me/6283171125657?text=AUDIT', text: 'CHAT "AUDIT" — GRATIS' } },
  { theme: 'night', chip: 'SLOT TERBATAS',
    title: (<>Kapasitas pengerjaan terbatas <em>demi menjaga kualitas.</em></>),
    body: 'Mulai dengan konsultasi gratis 15 menit via WhatsApp. Kami memetakan kebutuhan bisnismu dan menuliskan rencana sistemnya. Jika sesuai, pengerjaan dimulai; jika tidak, rencana tersebut tetap menjadi milikmu.',
    bullets: [
      'Harga transparan di awal, tanpa biaya tersembunyi.',
      'Tidak cocok pada 3 hari pertama? DP kembali 100%.',
      'Sistem menjadi hak milik penuh, tanpa biaya bulanan.',
    ],
    sticker: { url: 'https://wa.me/6283171125657?text=Halo%20RR%20Devs%2C%20saya%20mau%20konsultasi%20gratis%2015%20menit', text: 'KONSULTASI GRATIS 15 MENIT' },
    note: 'balasan maksimal 2 jam pada jam kerja' },
],
'hl-proses': [
  { dark: true, chip: 'PROSES',
    title: (<>Empat langkah dari chat sampai tayang. <em>Semuanya bisa kamu pantau sendiri.</em></>),
    body: 'Seluruh pengerjaan berjalan lewat WhatsApp dan tautan yang bisa kamu buka: tanpa rapat wajib, tanpa dokumen tebal, tanpa istilah teknis yang tidak kami terjemahkan lebih dulu.',
    stats: [
      { b: '4', s: 'langkah dari chat pertama sampai website tayang' },
      { b: '1', s: 'tautan progres untuk memantau setiap hari' },
      { b: '0', s: 'rapat fisik yang wajib kamu hadiri' },
    ],
    note: 'geser → langkah 1' },
  { chip: 'LANGKAH 1 / 4',
    title: (<>Konsultasi: <em>kami mendengar dulu.</em></>),
    body: 'Chat atau call WhatsApp 15 menit, tanpa biaya. Kami memetakan cara bisnismu bekerja dan menuliskan rencana sistem yang sesuai.',
    bullets: [
      'Gratis dan tanpa kewajiban apa pun',
      'Rencana tertulis tetap menjadi milikmu walaupun tidak berlanjut',
    ],
    note: 'geser → langkah 2' },
  { chip: 'LANGKAH 2 / 4',
    title: (<>Desain & konten: <em>kamu setujui dulu, baru kami buat.</em></>),
    body: 'Struktur halaman, tulisan, dan desain awal kami sodorkan terbuka untuk kamu koreksi.',
    bullets: [
      'Revisi desain terjadi sebelum satu baris kode ditulis',
      'Suara bisnismu tetap terdengar di setiap kalimat halaman',
    ],
    note: 'geser → langkah 3' },
  { chip: 'LANGKAH 3 / 4',
    title: (<>Development: <em>progres harian, bukan kabar bulanan.</em></>),
    body: 'Sistem dibangun dan diuji lintas perangkat sebelum kamu melihatnya.',
    bullets: [
      'Tautan pratinjau pengerjaan masuk ke WA-mu setiap hari kerja',
      'Kamu melihatnya tumbuh, bukan menebak-nebak diam',
    ],
    note: 'geser → langkah 4' },
  { chip: 'LANGKAH 4 / 4',
    title: (<>Launch & pelatihan: <em>kendali penuh pindah ke tanganmu.</em></>),
    body: 'Website tayang di alamat milikmu sendiri, bersama seluruh isinya.',
    bullets: [
      'Akun, kode, dan data diserahkan atas nama tokomu',
      'Kami latih sampai kamu bisa mengelola sendiri, lalu support sesuai paket',
    ],
    note: 'geser → cara pembayaran' },
  { theme: 'night', chip: 'PEMBAYARAN AMAN',
    title: (<>DP 50% setelah rencana kamu setujui. <em>Pelunasan setelah hasil kamu setujui.</em></>),
    body: 'Tidak ada uang keluar sebelum kamu membaca rencana tertulis. Tidak ada pelunasan sebelum kamu menyetujui hasilnya.',
    bullets: [
      'Tidak cocok pada 3 hari pertama? DP kembali 100%',
      'Bug-fix gratis 30 hari setelah live.',
      'Kode dan data 100% milikmu — tanpa langganan bulanan',
    ],
    sticker: { url: 'https://wa.me/6283171125657?text=Halo%20RR%20Devs%2C%20saya%20mau%20mulai%20dari%20langkah%201', text: 'MULAI DARI LANGKAH 1 — CHAT WA' },
    note: 'balasan maksimal 2 jam pada jam kerja' },
],
'hl-tim': [
  // ---- SLIDE 1: Pengenalan Tim ----
  { dark: true, chip: 'TIM — RR DEVS',
    title: (<>Dua pengembang. <em>Satu tanggung jawab penuh.</em></>),
    body: 'Website bisnis Kamu tidak dikerjakan oleh tim lepas yang berganti-ganti. Kami berdua yang membangun sistem Kamu dari awal, dan kami berdua juga yang akan langsung membantu jika terjadi kendala di kemudian hari.',
    stats: [
      { b: '2', s: 'pengembang utama yang menangani seluruh proyek Kamu' },
      { b: '1', s: 'layanan terintegrasi mulai dari perancangan hingga sistem siap pakai' },
      { b: '24', s: 'jam batas waktu maksimal bagi kami untuk membalas pesan Kamu' },
    ],
    note: 'geser → kenali tim kami' },

  // ---- SLIDE 2: Profil Founder 01 ----
  { chip: 'FOUNDER 01',
    title: (<>Rafael.</>),
    body: 'Bertanggung jawab dalam merancang alur sistem, memastikan jadwal pemesanan tidak bentrok, dan membuat dasbor pemilik toko. Menangani langsung tahap konsultasi hingga pembuatan aplikasi.',
    bullets: [
      'Fokus: Pembuatan aplikasi web, desain tampilan, dan integrasi pesan otomatis.',
    ],
    photo: { src: '/images/rafael.jpg', name: 'Rafael', role: 'Pengembang Aplikasi Web · Perancang Sistem Utama' } },

  // ---- SLIDE 3: Profil Founder 02 ----
  { chip: 'FOUNDER 02',
    title: (<>Rendy.</>),
    body: 'Bertanggung jawab penuh atas pengelolaan server, keamanan penyimpanan data, dan memastikan aplikasi web Kamu dapat diakses tanpa gangguan. Menjamin stabilitas fondasi teknologi proyek.',
    bullets: [
      'Fokus: Pengelolaan server, keamanan penyimpanan data, dan penghubung sistem.',
    ],
    photo: { src: '/images/rendy.jpg', name: 'Rendy', role: 'Pengembang Aplikasi Web · Pengelola Server & Data' } },

  // ---- SLIDE 4: Misi & Komitmen Terbuka ----
  { theme: 'night', chip: 'MISI — RR DEVS',
    title: (<>Komitmen kami: <em>sistem yang benar-benar membantu bisnis Kamu.</em></>),
    body: 'Tugas kami belum selesai jika sistem yang kami buat tidak memberikan manfaat nyata bagi bisnis Kamu. Oleh karena itu, kami membatasi jumlah proyek yang diterima agar kami dapat memberikan perhatian penuh pada setiap klien.',
    bullets: [
      'Kapasitas proyek dibatasi demi menjaga kualitas hasil kerja.',
      'Tanpa perantara: Kamu akan berkomunikasi langsung dengan kami yang mengerjakan proyek Kamu.',
    ],
    sticker: { url: 'https://wa.me/6283171125657?text=Halo%20Rafael%2C%20halo%20Rendy%20—%20boleh%20kenalan%2015%20menit%3F', text: 'KONSULTASI GRATIS VIA WHATSAPP (15 MENIT)' },
    note: 'Pesan Kamu akan kami balas maksimal dalam 2 jam pada jam kerja' },
],
'hl-audit': [
  { dark: true, chip: 'AUDIT GRATIS',
    title: (<>Kami cek kehadiran online tokomu. <em>Gratis.</em></>),
    body: 'Laporan PDF, bukan template: temuan dari Google Maps, Instagram, dan situsmu, lengkap dengan urutan perbaikan. Semua diambil dari halaman publik — kami tidak membuka apa pun yang privat.',
    stats: [
      { b: '20+', s: 'audit selesai pada September 2026' },
      { b: '3', s: 'sumber diperiksa: Maps, Instagram, situs' },
      { b: '1×24', s: 'jam laporan sampai ke WhatsApp-mu' },
    ],
    note: 'geser → isi laporan' },
  { chip: 'YANG KAMU DAPAT',
    title: (<>Manfaat audit <em>untuk tokomu.</em></>),
    bullets: [
      'Tahu persis di mana calon pelanggan bocor',
      'Bukti bertanda: link mati, harga terkubur, nomor ganda',
      'Daftar perbaikan yang bisa kamu mulai sendiri',
      'Milikmu selamanya — tanpa kewajiban apa pun',
    ],
    note: 'geser → cara meminta' },
  { theme: 'night', chip: 'CARA MINTA',
    title: (<>Chat satu kata. <em>Selesai.</em></>),
    body: 'Kirim kata "AUDIT" ke WhatsApp kami. Dalam 1×24 jam laporan masuk ke chat-mu dan menjadi milikmu, walaupun kita tidak pernah bekerja sama.',
    bullets: [
      'Tanpa biaya dan tanpa kewajiban apa pun',
      'Berguna juga apabila kamu memperbaiki semuanya sendiri',
    ],
    sticker: { url: 'https://wa.me/6283171125657?text=AUDIT', text: 'CHAT "AUDIT" — GRATIS' },
    note: 'laporan maksimal 1×24 jam' },
],
}
export default function KitPage() {
const [key, setKey] = useState('fc-tim')
const SLIDES = CAROUSELS[key]
const isStory = key.startsWith('hl-')
useEffect(() => {
const t = setTimeout(() => {
document.querySelectorAll('.kit-slide').forEach((el) => {
const over = el.scrollHeight > el.clientHeight + 4
el.classList.toggle('overflow', over)
if (over) console.warn('⚠ Slide luber:', el.id)
})
}, 300)
return () => clearTimeout(t)
}, [key])
const download = async (i) => {
const node = document.getElementById(`kit-slide-${i}`)
const url = await toPng(node, { pixelRatio: 2, cacheBust: true })
const a = document.createElement('a')
a.href = url
a.download = `${key}-${String(i + 1).padStart(2, '0')}.png`
a.click()
}
const downloadAll = async () => {
for (let i = 0; i < SLIDES.length; i++) {
await download(i)
await new Promise((r) => setTimeout(r, 700))
}
}
return (
<main className="kit-page">
<div className="kit-bar">
<h1>🏭 Konten Kit — pilih carousel {isStory ? '(story 1080×1920)' : '(post 1080×1350)'}</h1>
<button onClick={downloadAll}>⬇ Unduh semua slide carousel aktif</button>
</div>
<div className="kit-tabs">
{Object.keys(CAROUSELS).map((k) => (
<button key={k} className={k === key ? 'on' : ''} onClick={() => setKey(k)}>{k}</button>
))}
</div>
{SLIDES.map((s, i) => (
<section className="kit-block" key={`${key}-${i}`}>
   <div className="kit-preview">
   <div className={`kit-slide ${isStory ? 'story' : ''} ${s.dark ? 'dark' : ''} ${s.theme ? `theme-${s.theme}` : ''}`} id={`kit-slide-${i}`}>
   <div className="kit-top">
   <span className="kit-logo">R<b>&amp;</b>R</span>
   <span className="kit-handle">RR DEVS · JAKARTA</span>
   </div>
   <div className="kit-mid">
   <span className="kit-chip">{s.chip}</span>
   <h2 className={`kit-title ${s.tight ? 'tight' : ''}`}>{s.title}</h2>
   {s.body && <p className="kit-body">{s.body}</p>}
   {s.note && <p className="kit-note">{s.note}</p>}
   {s.bullets && <ul className="kit-bullets">{s.bullets.map((b) => <li key={b}><span>✓</span>{b}</li>)}</ul>}
   {s.creds && (
     <div className={`kit-creds ${s.creds.sm ? 'sm' : ''}`}>
       <span className="kit-creds-title">Akun demo admin</span>
       <div className="kit-creds-row">
         <div className="kit-creds-box"><small>Email</small><b>{s.creds.email}</b></div>
         <div className="kit-creds-box"><small>Password</small><b>{s.creds.pass}</b></div>
       </div>
       <span className="kit-creds-note">masuk di halaman login demo — lalu coba dasbornya</span>
     </div>
   )}
   {s.pains && <ul className="kit-bullets">{s.pains.map((b) => <li key={b}><span>✗</span>{b}</li>)}</ul>}
   {s.numbered && <ul className="kit-numlist">{s.numbered.map((b, idx) => <li key={b}><b>{(s.numStart || 1) + idx}</b>{b}</li>)}</ul>}
   {s.checks && (
   <div className="kit-checks">
   {[1, 2, 3, 4, 5].map((n) => (
   <span key={n} className={n <= s.checks ? 'on' : ''}>{n <= s.checks ? '✓' : ''}</span>
   ))}
   </div>
   )}
   {s.chips && <div className="kit-chips">{s.chips.map((c) => <span key={c}>{c}</span>)}</div>}
   {s.cards && <div className="kit-cards">{s.cards.map((c) => <div className="kit-card" key={c.b}><b>{c.b}</b><small>{c.s}</small></div>)}</div>}
   {s.stats && <div className="kit-stats">{s.stats.map((st) => <div key={st.s}><b>{st.b}</b><small>{st.s}</small></div>)}</div>}
   {s.terminal && <div className="kit-terminal">{s.terminal.map(([t, c], idx) => <div key={idx} className={c}>{t}</div>)}</div>}
   {s.img && (
     <div className={`kit-img ${s.imgSize === 'sm' ? 'sm' : ''}`}>
       <div className="kit-img-bar">
         <span className="kit-img-dots"><i /><i /><i /></span>
         <span className="kit-img-url">{s.imgBar || 'rrdevs.my.id'}</span>
       </div>
       <img src={s.img} alt={s.imgAlt || 'Tangkapan layar proyek RR Devs'} />
     </div>
   )}
   {s.photo && (
   <div className="container-photo">
      <div className="kit-photo">
      <img src={s.photo.src} alt={s.photo.name} />
      <div className="kit-photo-cap"><b>{s.photo.name}</b><small>{s.photo.role}</small></div>
      </div>
   </div>
   )}
   {s.quote && <div className="kit-quote"><p>“{s.quote.t}”</p><small>— {s.quote.n}</small></div>}
   </div>
   {s.sticker && <div className="kit-cta-space" aria-hidden="true" />}
   <div className="kit-foot">
   <span>rrdevs.my.id</span>
   <span>{String(i + 1).padStart(2, '0')} / {String(SLIDES.length).padStart(2, '0')}</span>
   </div>
   </div>
   </div>
   <div className="kit-actions">
   {s.sticker && (
   <p className="kit-sticker-info">
   🔗 Stiker tautan IG untuk slide ini (tempel manual di editor IG) — teks: <b>{s.sticker.text}</b> · URL: <code>{s.sticker.url}</code>
   </p>
   )}
   <button onClick={() => download(i)}>⬇ Unduh PNG slide {i + 1}</button>
   </div>
</section>
))}
</main>
)
}