import { useState, useEffect } from 'react'
import { toPng } from 'html-to-image'
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
'01-perkenalan': [
{ chip: 'PERKENALAN', title: (<>Halo, kami <em>RR Devs</em> 👋</>), body: 'Duo pembuat website untuk UMKM Indonesia. Dua orang yang mengerjakan bisnismu dari desain sampai tayang, dan bisa kamu hubungi kapan saja.', note: 'geser untuk kenalan →' },
{ chip: 'SIAPA KAMI', title: (<>Rafael <em>&</em> Rendy.</>), body: 'Kamu selalu tahu siapa yang mengerjakan dan siapa yang harus dihubungi. Tidak ada perantara — yang membalas chatmu, itu yang menulis kode.', cards: [{ b: 'Rafael', s: 'Full-Stack Developer · Pembangun BarberPro System' }, { b: 'Rendy', s: 'Full-Stack Developer · Sistem & Infrastruktur' }] },
{ chip: 'MISI KAMI', title: (<>Bisnis lokal, <em>tampilan kelas atas.</em></>), body: 'Warung, barbershop, katering, bengkel — bisnis kalian sudah hebat offline. Tugas kami: orang yang mencari di Google jam 11 malam juga menemukan dan percaya pada kalian.', stats: [{ b: '14 hari', s: 'target pasang BarberPro' }, { b: '0', s: 'double-booking' }, { b: '20+', s: 'audit barbershop Sep 2026' }] },
{ chip: 'CARA KAMI', title: (<>Sistem, bukan sekadar <em>website.</em></>), bullets: ['Booking dan order masuk langsung ke WhatsApp', 'Harga transparan di depan — tanpa takut tertipu', 'Dasbor agar kamu pegang kendali penuh'], body: 'Tanpa aplikasi rumit yang membuat pelanggan pergi.' },
{ chip: 'FAKTA', title: (<>Kami mulai dari <em>seadanya.</em></>), body: 'Sistem booking paling kompleks kami dibangun 100% dari tablet Android tanpa laptop. Kami tidak menunggu kondisi ideal untuk memulai — kamu juga tidak perlu menunggu.', terminal: [['$ whoami', ''], ['rafael@tablet-android:~', 'm'], ['$ pkg install nodejs postgresql', ''], ['✓ terpasang — tanpa laptop', 'g'], ['$ npm run deploy', ''], ['✓ tayang di alamat asli 🚀', 'g']] },
{ chip: 'MULAI DARI SINI', title: (<>Ceritakan bisnismu. <em>15 menit saja.</em></>), body: 'Konsultasi gratis via WhatsApp. Kami sketsakan sistem yang paling cocok untuk bisnismu — tanpa komitmen.', sticker: { url: 'https://wa.me/6283171125657?text=Halo%20RR%20Devs%2C%20saya%20mau%20konsultasi%20gratis%2015%20menit', text: 'CHAT WA — KONSULTASI GRATIS' } },
],
'02-theo': [
{ chip: 'CLIENT STORY', title: (<>Dari modal nomor HP, jadi <em>mesin order.</em></>), body: 'Theo Teknik — jasa panggilan AC di Cakung, Jakarta Timur. Sebelumnya hanya mengandalkan promosi mulut ke mulut. Sampai sistem sederhana ini mengubah segalanya.', note: 'klien nyata · geser →' },
{ chip: 'MASALAHNYA', title: (<>Pelanggan takut <em>tertipu harga.</em></>), pains: ['Harga tidak tampil di mana pun, calon klien ragu.', 'Booking lewat telepon dan chat — rawan salah catat.', 'Tidak ada bukti kerja yang bisa dicek online.'] },
{ chip: 'SOLUSINYA', title: (<>Satu jalur booking: <em>WhatsApp.</em></>), bullets: ['Tombol WhatsApp di setiap halaman — tanpa formulir rumit.', 'Daftar harga transparan di depan.', 'Galeri sebelum-sesudah dan testimoni asli.'] },
{ chip: 'BUKTINYA', title: (<>Begini tampilannya <em>di HP pelanggan.</em></>), img: '/images/theo-teknik-portfolio.jpg', imgAlt: 'Tangkapan layar situs Theo Teknik — jasa service AC Cakung, Jakarta Timur', note: 'coba live: theo-teknik.rrdevs.my.id' },
{ chip: 'HASILNYA', title: (<>Kehadiran digital yang <em>meyakinkan.</em></>), body: 'Sekarang Theo Teknik tidak perlu perang harga. Siapa pun yang mencari "service AC terdekat" di Google langsung yakin sebelum menelepon.', quote: { t: 'Sejak ada web, orderan WA nambah dan pelanggan baru lebih gampang percaya.', n: 'Pemilik · Jasa teknisi AC, Jakarta Timur' } },
{ chip: 'GILIRAN KAMU', title: (<>Usahamu cerita <em>berikutnya?</em></>), body: 'Konsultasi gratis 15 menit via WhatsApp. Kami sketsakan sistem yang paling cocok — tanpa komitmen.', sticker: { url: 'https://wa.me/6283171125657?text=Halo%20RR%20Devs%2C%20saya%20mau%20sistem%20seperti%20Theo%20Teknik', text: 'SAYA MAU SISTEM SEPERTI INI' } },
],
'03-edukasi': [
{ dark: true, chip: 'EDUKASI · CEK 30 DETIK', title: (<>5 tanda bisnismu butuh website <em>sekarang juga.</em></>), body: 'Bukan menakut-nakuti: kalau 2 saja dari tanda ini kena, bisnismu sedang kehilangan pelanggan tiap hari — tanpa kamu sadar.', checks: 2, note: 'geser → cek punyamu' },
{ chip: 'TANDA 01–02', title: (<>Kamu <em>tidak terlihat</em> saat dicari.</>), numStart: 1, numbered: ['Calon pelanggan mencari nama bisnismu di Google — yang muncul akun orang lain, atau tidak ada apa-apa.', 'Kamu mengetik jawaban yang sama setiap hari: harga, lokasi, jam buka, daftar menu.'] },
{ chip: 'TANDA 03–04', title: (<>Kamu <em>kehilangan</em> tanpa sadar.</>), numStart: 3, numbered: ['Pesaing sebelah sudah punya website dan muncul lebih dulu di Google.', 'Order masuk dari 3 saluran (WA, DM, telepon) dan rekapnya sering keteteran.'] },
{ chip: 'TANDA 05', title: (<>Kamu mau <em>naik kelas.</em></>), numStart: 5, numbered: ['Perusahaan besar, tender, dan calon reseller menuntut satu hal yang sama: company profile resmi yang bisa diverifikasi.'], chips: ['Ikut tender', 'Cari reseller', 'Dipercaya corporate'], body: 'Mengandalkan media sosial saja tidak cukup untuk menembus pasar B2B dan korporasi.' },
{ chip: 'KENAPA BUKAN MEDSOS SAJA?', title: (<>Medsos = <em>kontrakan.</em> Website = <em>rumah sendiri.</em></>), bullets: ['Akun kena suspend → database pelangganmu hilang.', 'Feed tenggelam dalam 48 jam; website bekerja 24/7.', 'Website adalah aset yang kamu miliki penuh.'] },
{ chip: 'CEK GRATIS', title: (<>Kami audit kehadiran online bisnismu. <em>1×24 jam.</em></>), body: 'Kirim kata "AUDIT" ke WhatsApp kami. Kami kirim laporan singkat: apa yang sudah bagus, apa yang membuatmu kehilangan pelanggan.', sticker: { url: 'https://wa.me/6283171125657?text=AUDIT', text: 'CHAT "AUDIT" — GRATIS' } },
],
'04-harga': [
{ theme: 'orange', chip: 'HARGA', title: (<>Investasi jelas, <em>hasil berkelas.</em></>), body: 'Semua biaya tertulis di awal. Sudah termasuk domain, hosting, dan SSL tahun pertama — tanpa biaya tersembunyi.', note: 'geser → lihat 4 paket' },
{ chip: 'BARBERPRO · PALING LARIS', title: (<>Sistem booking barbershop <em>Rp3,9 jt.</em></>), bullets: ['Slot terisi langsung terkunci otomatis', 'Notifikasi WhatsApp ke nomor toko', 'Dasbor jadwal dan estimasi omzet', 'Identitas toko diganti milikmu', 'Gratis domain + hosting + SSL 1 tahun', 'Target tayang 14 hari'] },
{ chip: 'BASIC', title: (<>Landing page <em>Rp2,5 jt.</em></>), bullets: ['1 halaman fokus jualan', 'Tombol WhatsApp', 'Gratis domain + hosting 1 tahun', 'Revisi 2×', 'Jadi 3–7 hari'] },
{ chip: 'CUSTOM', title: (<>Website sesuai kebutuhan <em>mulai Rp6,9 jt.</em></>), bullets: ['Dibangun dari nol, 100% milikmu', '1 fitur custom: booking, member, atau kalkulator', 'Dasbor admin', 'Garansi perbaikan 6 bulan'] },
{ chip: 'MAINTENANCE', title: (<>Perawatan <em>Rp350 rb/bulan.</em></>), bullets: ['Backup dan pengawasan keamanan mingguan', 'Update konten 2× per bulan', 'Laporan performa bulanan', 'Konsultasi strategi 1× per bulan'] },
{ chip: 'SKEMA BAYAR', title: (<>DP 50%, pelunasan <em>setelah jadi.</em></>), bullets: ['DP untuk mengunci slot pengerjaan', 'Progress dipantau tiap hari via tautan pratinjau', 'Pelunasan setelah website jadi dan kamu setujui', 'Tidak cocok sebelum hari ke-7? DP kembali.'], sticker: { url: 'https://wa.me/6283171125657?text=Halo%20RR%20Devs%2C%20saya%20mau%20minta%20rincian%20harga', text: 'TANYA PAKET YANG COCOK' } },
],
/* ================= SOROTAN / STORY (1080×1920) ================= */
'hl-penawaran': [
{ theme: 'orange', chip: 'PENAWARAN TERBATAS', title: (<>Kuota 3 slot. Sistem booking gratis <em>1 bulan penuh.</em></>), body: 'BarberPro kami pasang tanpa biaya untuk 3 barbershop tercepat di Jabodetabek. Sistem lengkap — booking, notifikasi WhatsApp, dan dasbor — bukan versi terbatas. Termasuk setup dengan data tokomu: identitas, kapster, layanan, dan harga.', note: 'geser → isi penawaran dan caranya', img: '/images/barberpro-portfolio.jpg', imgAlt: 'Hero BarberPro', imgBar: 'barberpro.rrdevs.my.id', },
{ chip: 'APA YANG KAMU DAPAT', title: (<>Semuanya gratis. <em>Tanpa biaya tersembunyi.</em></>), bullets: ['Sistem booking tayang 30 hari di alamat web khusus tokomu', 'Notifikasi WhatsApp asli ke nomor toko', 'Dasbor jadwal dan estimasi omzet', 'Setup penuh oleh kami — kamu tinggal pakai', 'Tanpa DP, tanpa biaya bulanan, tanpa kontrak'], img: '/images/barberpro-dashboard.png', imgAlt: 'Dasbor BarberPro: jadwal hari ini dan estimasi omzet', imgBar: 'barberpro.rrdevs.my.id/admin', },
{ chip: 'SETELAH 30 HARI', title: (<>Tiga pilihan. <em>Semua aman.</em></>), numStart: 1, numbered: ['Lanjut pakai: bayar paket BarberPro, sistem dan data pindah ke alamat web milikmu.', 'Berhenti: kami turunkan bersih, tanpa tagihan apa pun.', 'Ekspor: seluruh data booking dan pelanggan kami serahkan.'], body: 'Tidak ada perpanjangan otomatis. Tidak ada biaya tersembunyi.' },
{ chip: 'CARA IKUT', title: (<>4 langkah, <em>mulai dari chat.</em></>), numStart: 1, numbered: ['Chat WhatsApp dengan kata "TRIAL".', 'Kirim data: logo, nama kapster, layanan, harga, dan jam buka.', 'Maksimal 5 hari: sistem tayang di alamat web khusus tokomu.', 'Pakai 30 hari penuh untuk booking nyata.'], img: '/images/barberpro-booking.png', imgAlt: 'Booking BarberPro: Pilih layanan, kapster, dan jam dari HP', imgBar: 'barberpro.rrdevs.my.id/booking', },
{ chip: 'SLOT TERBATAS', title: (<>Siapa cepat, <em>dia dapat.</em></>), body: 'Hanya untuk 3 barbershop pertama bulan ini. Ketuk link di bawah untuk amankan slot kamu sekarang.', sticker: { url: 'https://wa.me/6283171125657?text=TRIAL', text: 'CHAT "TRIAL" — AMANKAN SLOT' }, img: '/images/barberpro-portfolio.jpg', imgAlt: 'Hero BarberPro', imgBar: 'barberpro.rrdevs.my.id', },
],
'hl-barberpro': [
{ dark: true, chip: 'SISTEM ANDALAN', title: (<>Pelanggan pilih jam sendiri. <em>Kapster tidak double-booking.</em></>), body: 'BarberPro: sistem booking milik tokomu sendiri. Bukan aplikasi orang lain.', note: 'geser → lihat dua sisi', img: '/images/barberpro-portfolio.jpg', imgAlt: 'Hero BarberPro', imgBar: 'barberpro.rrdevs.my.id', },
{ chip: 'SISI PELANGGAN', title: (<>Pilih layanan, kapster, dan jam <em>dari HP.</em></>), bullets: ['Slot terisi langsung terkunci', 'Tidak perlu chat untuk tahu jam kosong', 'Konfirmasi langsung setelah booking'], img: '/images/barberpro-booking.png', imgAlt: 'Booking BarberPro: Pilih layanan, kapster, dan jam dari HP', imgBar: 'barberpro.rrdevs.my.id/booking', sticker: { url: 'https://barberpro.rrdevs.my.id', text: 'COBA SEBAGAI PELANGGAN' } },
{ chip: 'SISI OWNER', title: (<>Booking masuk, WA berbunyi, <em>dasbor mencatat.</em></>), tight: true,
  bullets: ['Notifikasi WhatsApp otomatis ke nomor toko', 'Dasbor: jadwal hari ini, estimasi omzet, kapster tersibuk'],
  img: '/images/barberpro-dashboard.png', imgAlt: 'Dasbor BarberPro: jadwal hari ini dan estimasi omzet', imgBar: 'barberpro.rrdevs.my.id/admin', imgSize: 'sm',
  creds: { email: 'demo@gmail.com', pass: 'barberpro', sm: true },
  sticker: { url: 'https://barberpro.rrdevs.my.id/admin/login', text: 'COBA SEBAGAI OWNER' } },
{ chip: 'BUKTIKAN SENDIRI', title: (<>Coba sekarang sebagai pelanggan <em>atau pemilik.</em></>), body: 'Semua tombol di demo ini berfungsi nyata: booking, kunci slot, notifikasi, dan dasbor.', img: '/images/barberpro-portfolio.jpg', imgAlt: 'Hero BarberPro', imgBar: 'barberpro.rrdevs.my.id', sticker: { url: 'https://barberpro.rrdevs.my.id', text: 'COBA DEMO BOOKING LIVE' }, },
],
'hl-harga': [
{ theme: 'orange', chip: 'HARGA', title: (<>Harga tertulis di awal. <em>Tanpa kejutan.</em></>), body: 'Semua paket sudah termasuk domain, hosting, dan SSL tahun pertama.', note: 'geser → 4 paket', img: '/images/paket-harga.png', imgAlt: 'Paket Harga RR Devs', },
{ chip: 'BARBERPRO · PALING LARIS', title: (<><span className="nb">Rp3,9 jt</span> — <em>sistem booking barbershop.</em></>), bullets: ['Slot yang sudah terisi, langsung terkunci', 'Notifikasi WhatsApp ke nomor toko', 'Dasbor jadwal dan estimasi omzet', 'Identitas toko diganti milikmu', 'Target launch dalam 14 hari'], img: '/images/barberpro-portfolio.jpg', imgAlt: 'Hero BarberPro', imgBar: 'barberpro.rrdevs.my.id', },
{ chip: 'BASIC · LANDING PAGE', title: (<>Landing Page <em><span className="nb">Rp2,5 jt.</span></em></>), bullets: ['1 halaman fokus jualan', 'Tombol WhatsApp', 'Gratis domain + hosting 1 tahun', 'Revisi 2×', 'Jadi 3–7 hari'] },
{ chip: 'CUSTOM', title: (<>Website custom <em>mulai <span className="nb">Rp6,9 jt.</span></em></>), bullets: ['Dibangun dari nol, 100% milikmu', '1 fitur custom: booking, member, atau kalkulator', 'Dasbor admin', 'Garansi perbaikan 6 bulan'] },
{ chip: 'MAINTENANCE', title: (<><span className="nb">Rp350rb/bulan</span> — <em>website tetap sehat.</em></>), bullets: ['Backup dan keamanan mingguan', 'Update konten 2× per bulan', 'Laporan performa bulanan'] },
{ chip: 'SKEMA BAYAR', title: (<>DP 50%. Pelunasan <em>setelah jadi.</em></>), bullets: ['Progress dipantau tiap hari', 'Pelunasan setelah kamu setujui', 'Tidak cocok sebelum hari ke-7? DP kembali.'], sticker: { url: 'https://wa.me/6283171125657?text=Halo%20RR%20Devs%2C%20saya%20mau%20minta%20rincian%20harga', text: 'MINTA RINCIAN HARGA' } },
],
'hl-porto': [
{ dark: true, chip: 'PORTOFOLIO', title: (<>Karya yang bisa kamu coba <em>sekarang.</em></>), body: 'Semua proyek di bawah tayang dan bisa diklik. Yang demo, kami labeli demo.', note: 'geser →' },
{ chip: 'SISTEM SIAP PAKAI', title: (<>BarberPro — <em>mesin booking barbershop.</em></>), img: '/images/barberpro-portfolio.jpg', imgAlt: 'Tangkapan layar BarberPro', note: 'barberpro.rrdevs.my.id' },
{ chip: 'PROYEK LIVE', title: (<>Theo Teknik — <em>klien nyata pertama.</em></>), img: '/images/theo-teknik-portfolio.jpg', imgAlt: 'Tangkapan layar situs Theo Teknik', note: 'theo-teknik.rrdevs.my.id' },
{ chip: 'DEMO DESAIN', title: (<>Architect, Kopi Senja, Batik — <em>demo kemampuan desain.</em></>), body: 'Kami labeli jujur sebagai demo, bukan klien. Karena memang kami rancang sendiri dari nol.', sticker: { url: 'https://rrdevs.my.id/#portofolio', text: 'LIHAT SEMUA KARYA' } },
],
'hl-testi': [
{ dark: true, chip: 'TESTIMONI', title: (<>Bukti, <em>bukan janji.</em></>), body: 'Kami tidak mengarang testimoni. Yang tampil di sini hanya proyek nyata yang masih tayang hari ini.' },
{ chip: 'KLIEN NYATA', title: (<>Website service AC yang masih dipakai <em>sampai sekarang.</em></>), quote: { t: 'Sejak ada web, orderan WA nambah dan pelanggan baru lebih gampang percaya.', n: 'Pemilik · Jasa teknisi AC, Jakarta Timur' }, note: 'coba live: theo-teknik.rrdevs.my.id' },
{ chip: 'BUKTI SISTEM', title: (<>Testimoni terbaik adalah <em>sistem yang berjalan.</em></>), body: 'Coba sendiri: booking sebagai pelanggan, lalu masuk sebagai pemilik dan lihat dasbornya.', sticker: { url: 'https://barberpro.rrdevs.my.id', text: 'BUKTIKAN SENDIRI' } },
],
'hl-proses': [
{ dark: true, chip: 'PROSES', title: (<>Empat langkah <em>dari chat sampai tayang.</em></>), body: 'Tanpa birokrasi, tanpa bahasa teknis. Kamu tahu progres setiap hari.' },
{ chip: 'LANGKAH 1–4', title: (<>Jalur yang sama <em>untuk semua paket.</em></>), numStart: 1, numbered: ['Konsultasi gratis via WhatsApp — kami dengarkan kebutuhan dan budget.', 'Desain dan konten: kamu revisi sebelum masuk koding.', 'Development: progress dipantau tiap hari via tautan pratinjau.', 'Launch dan pelatihan: kami ajari sampai kamu bisa kelola sendiri.'] },
{ chip: 'PEMBAYARAN AMAN', title: (<>DP 50%. Pelunasan <em>setelah kamu setujui.</em></>), body: 'Kami berani karena volume kami kecil dan kualitas kami jaga.', sticker: { url: 'https://wa.me/6283171125657?text=Halo%20RR%20Devs%2C%20saya%20mau%20konsultasi%20gratis%2015%20menit', text: 'MULAI KONSULTASI GRATIS' } },
],
'hl-tim': [
{ dark: true, chip: 'TIM', title: (<>Dua orang. <em>Satu tanggung jawab.</em></>), body: 'Bisnismu dikerjakan langsung oleh founder — bukan dilempar ke tim lain.' },
{ chip: 'FOUNDER 01', title: (<>Rafael.</>), photo: { src: '/images/rafael.jpg', name: 'Rafael', role: 'Full-Stack Developer · Pembangun BarberPro System' }, body: 'Membangun BarberPro 100% dari tablet Android.' },
{ chip: 'FOUNDER 02', title: (<>Rendy.</>), photo: { src: '/images/rendy.jpg', name: 'Rendy', role: 'Full-Stack Developer · Sistem & Infrastruktur' }, body: 'Menjaga server, database, dan integrasi tetap hidup 24 jam.' },
{ chip: 'MISI', title: (<>Dua kepala, satu commit: <em>sistem yang benar-benar dipakai.</em></>), body: 'Kalau sistemnya tidak dipakai, kami belum selesai.', sticker: { url: 'https://wa.me/6283171125657?text=Halo%20RR%20Devs%2C%20saya%20mau%20konsultasi%20gratis%2015%20menit', text: 'CHAT LANGSUNG DENGAN KAMI' } },
],
'hl-audit': [
{ dark: true, chip: 'AUDIT GRATIS', title: (<>Kami cek kehadiran online tokomu. <em>Gratis.</em></>), body: 'Satu halaman PDF, berisi temuan dari Maps, Instagram, dan situsmu — bukan template.' },
{ chip: 'YANG KAMU DAPAT', title: (<>Manfaat audit <em>untuk tokomu.</em></>), bullets: ['Tahu persis di mana calon pelanggan bocor', 'Bukti bertanda: link mati, harga terkubur, nomor ganda', 'Daftar perbaikan yang bisa kamu mulai sendiri', 'Milikmu selamanya — tanpa kewajiban apa pun'] },
{ chip: 'CARA MINTA', title: (<>Chat satu kata. <em>Selesai.</em></>), body: 'Kirim kata "AUDIT" ke WhatsApp kami. Laporan kami kirim dalam 1×24 jam.', sticker: { url: 'https://wa.me/6283171125657?text=AUDIT', text: 'CHAT "AUDIT" — GRATIS' } },
],
}
export default function KitPage() {
const [key, setKey] = useState('hl-penawaran')
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
    <span className="kit-creds-title">Akun demo dasbor</span>
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
<div className="kit-photo">
<img src={s.photo.src} alt={s.photo.name} />
<div className="kit-photo-cap"><b>{s.photo.name}</b><small>{s.photo.role}</small></div>
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