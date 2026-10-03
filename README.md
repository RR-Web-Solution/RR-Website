# 🚀 RR Devs — Sistem Booking Barbershop & Website UMKM

> Rumah digital **RR Devs** — studio dua developer di Cakung, Jakarta Timur.
> Fokus utama: sistem booking untuk barbershop & salon (BarberPro).
> Fokus kedua: landing page dan website custom untuk UMKM Jabodetabek.
> Prinsip kerja: **lihat sebelum percaya** — semua klaim di halaman ini
> punya tautan yang bisa kamu klik dan uji sendiri.

|  |  |
|---|---|
| **Nama** | RR Devs — BarberPro System |
| **Founder** | Rafael (produk, desain, kode, konsultasi) & Rendy (infrastruktur, server, database) |
| **Target pasar** | Pemilik barbershop/salon Jabodetabek; sekunder: UMKM jasa & retail |
| **Status** | Live di [rrdevs.my.id](https://rrdevs.my.id) |
| **Stack** | React 19 · Vite 8 · React Router 7 · Vanilla CSS |

![Lighthouse](https://img.shields.io/badge/Lighthouse-95%2B-brightgreen)
![SEO](https://img.shields.io/badge/SEO-Optimized-blue)
![Deployment](https://img.shields.io/badge/Deployed-Vercel-black)

---

## 📋 Daftar Isi

- [Produk & Janji Publik](#-produk--janji-publik)
- [Situs & Portofolio Live](#-situs--portofolio-live)
- [Halaman & Fitur](#-halaman--fitur)
- [Arsitektur Project](#-arsitektur-project)
- [Design System](#-design-system)
- [Menjalankan Lokal](#-menjalankan-lokal)
- [Manajemen Konten](#-manajemen-konten)
- [Deployment & Konvensi Branch](#-deployment--konvensi-branch)
- [SEO & Performance](#-seo--performance)
- [Strategi Konten](#-strategi-konten)
- [Development Workflow](#-development-workflow)
- [Analytics](#-analytics)
- [Kontribusi](#-kontribusi)
- [Lisensi & Kredit](#-lisensi--kredit)

---

## 💼 Produk & Janji Publik

| Paket | Harga | Jam pengerjaan | Support |
|---|---|---|---|
| Basic — Landing Page | Rp2.900.000 sekali bayar | 3–7 hari kerja sejak bahan lengkap | 30 hari |
| BarberPro — Sistem Booking Barbershop | Rp3.900.000 sekali bayar | ≤14 hari kerja sejak DP & bahan lengkap | 30 hari |
| Custom — Website sesuai kebutuhan | mulai Rp6.900.000 sekali bayar | 2–4 minggu sejak bahan lengkap; 1 fitur custom dibatasi ukuran build 2–4 minggu | 6 bulan |
| Maintenance (opsional) | Rp350.000/bulan | — | selama berlangganan |

Janji yang mengikat seluruh halaman dan materi kami:

- **Kepemilikan penuh:** kode & data 100% milik klien; tanpa langganan bulanan ke RR Devs.
- **Pembayaran:** DP 50% di depan, pelunasan setelah hasil disetujui.
- **Jendela refund:** tidak cocok pada 3 hari kerja pertama → DP kembali 100%; mulai hari ke-4 DP menutup pekerjaan berjalan.
- **Tanpa diskon, tanpa harga tersembunyi:** penyesuaian fitur di atas ukuran paket disampaikan transparan sebelum DP.
- **Trial BarberPro:** gratis 1 bulan, tanpa DP/biaya/kontrak, maksimal 3 slot berjalan bersamaan.
- **Audit kehadiran digital:** gratis, laporan PDF 1×24 jam dari halaman publik, milik penerima tanpa kewajiban.
- **SLA balasan chat:** maksimal 2 jam pada jam kerja 09:00–18:00 WIB.

---

## 🌐 Situs & Portofolio Live

| Alamat | Label jujur |
|---|---|
| [rrdevs.my.id](https://rrdevs.my.id) | Situs utama |
| [barberpro.rrdevs.my.id](https://barberpro.rrdevs.my.id) | Demo sistem siap pakai (login demo publik: `demo@gmail.com` / `barberpro`) |
| [theo-teknik.rrdevs.my.id](https://theo-teknik.rrdevs.my.id) | Proyek pro bono live — dibangun gratis sebagai bukti kerja, masih dipakai |
| [architect-studio.rrdevs.my.id](https://architect-studio.rrdevs.my.id) | Demo desain |
| [kopisenja.rrdevs.my.id](https://kopisenja.rrdevs.my.id) | Demo desain |
| [batik.rrdevs.my.id](https://batik.rrdevs.my.id) | Demo desain |
| [rrprint.rrdevs.my.id](https://rrprint.rrdevs.my.id) | Demo sistem custom (order percetakan) |

Aturan label: demo disebut demo, pro bono disebut pro bono, klien disebut klien
hanya bila ada izin tertulis. Testimoni tidak pernah ditulis tanpa artefak sumber.

---

## 🧩 Halaman & Fitur

- **`/`** — landing: hero posisi spesialis, ticker, keunggulan, proses 4 langkah, pricing, portofolio berlabel, blok bukti, partner, CTA.
- **`/barbershop`** — halaman khusus pemilik barbershop: masalah → sistem → demo dua sisi.
- **`/kit`** — content kit: pabrik slide carousel 1080×1920 (penawaran, barberpro, harga, portofolio, bukti, proses, tim, audit, perkenalan, theo, edukasi) dengan tombol unduh PNG per slide + teks stiker tautan IG.
- **`/audit/<slug>`** — generator halaman audit prospek dari data publik (10 slug aktif).
- **`/partner`** — program agency partner: rate card, aturan main, alur pembayaran.
- **`/jabodetabek`** — kartu nama digital untuk outreach wilayah.
- **`/story-slides`**, **`/solusi`**, **`/banner`** — utilitas materi pemasaran.
- **`/portofolio/digital-printing`** — halaman status rrprint.

---

## 🏗️ Arsitektur Project

```text
RR-Website/
├─ public/
│  ├─ audit/<slug>/*.png        # bukti bertanda per prospek
│  ├─ images/                   # screenshot produk, foto founder, aset kit
│  ├─ favicon.*, og-image.png, site.webmanifest, robots.txt, sitemap.xml
│  └─ RR-Devs—Rate-Card-Partner-2026.pdf
└─ src/
   ├─ main.jsx · App.jsx        # entry + BrowserRouter & Routes
   ├─ data/content.js           # PUSAT KONTEN: teks, harga, janji, portofolio
   ├─ components/ (ui · layout · home)
   ├─ sections/                 # seksi landing (satu file per seksi)
   ├─ pages/                    # satu file per rute + CSS pasangannya
   └─ styles.css                # design system & token
```

Catatan kebersihan: draf mati (`*_v1.*`, `content_v1.js`, `index_v1.html`) dan
berkas kerja pribadi (`contoh.html`, `kertas-tinggal.html`) **tidak hidup di main**;
salinannya ada di branch `arsip/*` dan disebut di `.gitignore`.

---

## 🎨 Design System

Token warna: `--ink #0c0f13/#191613`, `--cream #faf8f3/#f5f1e8`, `--gold #c9a24b`
(BarberPro), `--acc #FF4D00`, `--lime #D8F34F`. Tipografi: Syne (display),
Instrument Sans (body), Space Mono (label & angka). Prinsip: neobrutalism-editorial,
motion dengan tujuan, aksesibilitas (focus-visible, reduced-motion), dan
ramah cetak hitam-putih untuk materi lapangan.

---

## 🚀 Menjalankan Lokal

```bash
git clone https://github.com/RR-Web-Solution/RR-Website.git
cd RR-Website && npm install
npm run dev        # http://localhost:5173
npm run build      # output: dist/
```

Node.js 20+ disarankan.

---

## 📝 Manajemen Konten

Semua teks, harga, janji, dan daftar portofolio hidup di **`src/data/content.js`**.
Mengubah angka atau janji wajib mengikuti keputusan yang tercatat di ledger internal
RR Devs — file ini satu-satunya tempat harga boleh berubah, dan setiap perubahannya
beranak ke content kit, sorotan Instagram, dan materi cetak.

---

## 🌐 Deployment & Konvensi Branch

- **`main`** = produksi: push ke main memicu deploy Vercel otomatis ke rrdevs.my.id.
- **`backup/<topik>-<tanggal>`** = snapshot sebelum main bergerak; tidak pernah dihapus.
- **`arsip/<topik>-<tanggal>`** = rumah draf & berkas pribadi; boleh berantakan, sengaja.
- Urutan wajib setiap perubahan: commit → push branch backup → push main → verifikasi live.

```bash
git add -A
git commit -m "<pesan perubahan>"
git push origin main:backup/<topik>-<tanggal>
git push origin main
```

---

## 🔍 SEO & Performance

Meta & Open Graph mengikuti posisi spesialis barbershop; og-image resmi 1200×630.
Structured data:

```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "RR Devs — BarberPro System",
  "url": "https://rrdevs.my.id/",
  "logo": "https://rrdevs.my.id/favicon.svg",
  "image": "https://rrdevs.my.id/og-image.png",
  "description": "Sistem booking barbershop dan website UMKM: pelanggan pilih jam sendiri, slot terkunci otomatis, notifikasi WhatsApp, dashboard owner. Coba demo live BarberPro sekarang.",
  "areaServed": ["Jakarta", "Bogor", "Depok", "Tangerang", "Bekasi"],
  "priceRange": "Rp2.900.000 - Rp6.900.000",
  "email": "hello@rrdevs.my.id",
  "telephone": "+6283171125657",
  "sameAs": [
     "https://instagram.com/rrdevs.my.id",
     "https://facebook.com/rrdevs.my.id",
  ],
}
```

Target Core Web Vitals: LCP < 2.5s, INP < 200ms, CLS < 0.1. Font self-hosted
(@fontsource), gambar lazy-load di bawah lipatan, tanpa icon font.

---

## 📚 Strategi Konten

Kanal: Instagram (carousel dari `/kit` + sorotan delapan bab), WhatsApp Business
(gate kata `TRIAL` dan `AUDIT`), Facebook Page cermin, dan walk-in Jabodetabek.
Kalender konten dua mingguan disusun terpisah dan diperlakukan sebagai sumber
kebenaran periode berjalan. Blog tidak aktif; bukti lebih kami prioritaskan
daripada volume tulisan. Studi kasus hanya diterbitkan bila ada izin tertulis
dan artefak yang bisa ditunjuk.

---

## 🛠️ Development Workflow

Seksi baru: buat file di `src/sections/` lalu impor di `LandingPage.jsx`.
Rute baru: buat file di `src/pages/`, tambah baris `<Route>` di `App.jsx`,
serta tautan Nav/Footer bila perlu.
Draf pribadi: kerjakan di branch `arsip/*`, jangan di main.

---

## 📊 Analytics

Google Analytics 4 (`G-VJMG09317R`) + Google Search Console + PostHog pada app BarberPro.
Pelacakan klik WhatsApp via UTM.

---

## 🤝 Kontribusi

Portofolio pribadi; pull request publik tidak dibuka.
Feedback: hello@rrdevs.my.id · WA +62 831-7112-5657.

---

## 📄 Lisensi & Kredit

© 2026 RR Devs — Rafael & Rendy. Kode, desain, dan copywriting adalah aset
intelektual RR Devs; penggunaan ulang komersial memerlukan izin tertulis.

Dibangun dengan ☕ dan prinsip "UMKM Indonesia naik kelas".

**[rrdevs.my.id](https://rrdevs.my.id)**
<br>
**[Instagram: @rrdevs.my.id](https://instagram.com/rrdevs.my.id)**
<br>
**[Facebook: @rrdevs.my.id](https://facebook.com/rrdevs.my.id)**