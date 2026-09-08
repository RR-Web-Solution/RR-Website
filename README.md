# 🚀 RR Devs — Agency Landing Page

> Landing page untuk **RR Devs** — studio pembuatan website profesional
> yang melayani UMKM Indonesia. Dirancang sebagai portofolio,
> lead-generator, dan "kartu nama digital" dalam satu aplikasi React SPA.

|  |  |
|---|---|
| **Nama** | RR Devs |
| **Founder** | Rafael & Rendy |
| **Target pasar** | UMKM retail & jasa di Indonesia (fokus Jabodetabek) |
| **Status** | Live di [rrdevs.my.id](https://rrdevs.my.id) |
| **Stack** | React 18 · Vite · React Router · Vanilla CSS |

![Lighthouse](https://img.shields.io/badge/Lighthouse-95%2B-brightgreen)
![SEO](https://img.shields.io/badge/SEO-Optimized-blue)
![Deployment](https://img.shields.io/badge/Deployed-Vercel-black)

---

## 📋 Daftar Isi

- [Fitur Utama](#-fitur-utama)
- [Arsitektur Project](#-arsitektur-project)
- [Design System](#-design-system)
- [Menjalankan Lokal](#-menjalankan-lokal)
- [Manajemen Konten](#-manajemen-konten)
- [Routing](#-routing)
- [Deployment](#-deployment)
- [SEO & Performance](#-seo--performance)
- [Strategi Konten](#-strategi-konten)
- [Lisensi](#-lisensi)

---

## ✨ Fitur Utama

### Landing Page (`/`)
- **Hero interaktif** dengan browser mockup 3 demo UMKM (kopi, batik, katering)
- **Ticker marquee** jenis layanan
- **About section** dengan founder cards (Rafael & Rendy)
- **Accordion layanan** — 5 layanan (Landing Page, Website Custom, Company Profile, Toko Online, Maintenance)
- **Sticky why section** — keunggulan dengan scroll-locked sidebar
- **Process section** — 4 langkah dari chat sampai launch
- **Pricing grid** — 4 paket (Basic/Standar/Premium/Custom) dengan toggle perawatan bulanan
- **Portofolio** — 2-lapis (blur + contain) untuk screenshot berbagai rasio
- **Testimoni** — cards miring dengan hover effect
- **Agency Partner section** — teaser white-label partnership
- **Final CTA** — ghost marquee + WhatsApp CTA

### Halaman `/partner`
- Rate card program agency partner
- Tabel harga partner vs harga jual ke klien
- 4 aturan main (white-label, NDA, pembayaran bertahap, garansi)
- Alur pembayaran 50/40/10
- Download PDF rate card

### Halaman `/jabodetabek` ⭐
Kartu nama digital untuk outreach Jabodetabek:
- Positioning statement WA-first
- Perbandingan cara lama vs sistem WA-first
- Fun fact: sistem kompleks dibangun dari tablet Android
- 5 studi kasus jujur (Capability Demo vs Client Story)
- Mockup chat WhatsApp interaktif
- CTA WA di dua titik strategis

---

## 🏗️ Arsitektur Project

Struktur modular yang memudahkan maintenance dan penambahan halaman baru:

```
rr-web-solution/
├─ public/
│  ├─ favicon.svg
│  ├─ favicon-96x96.png
│  ├─ apple-touch-icon.png
│  ├─ og-image.jpg
│  ├─ site.webmanifest
│  ├─ robots.txt
│  ├─ sitemap.xml
│  └─ RR-Devs-Rate-Card-Partner-2026.pdf
└─ src/
   ├─ main.jsx                    # Entry point
   ├─ App.jsx                     # BrowserRouter + Routes
   ├─ data/
   │  └─ content.js               # PUSAT KONTEN (ubah teks/harga di sini)
   ├─ utils/
   │  └─ motion.js                # prefers-reduced-motion helper
   ├─ hooks/
   │  └─ useInView.js             # IntersectionObserver hook
   ├─ components/
   │  ├─ ui/                      # Reusable UI components
   │  │  ├─ Reveal.jsx/.css
   │  │  ├─ SectionHead.jsx
   │  │  ├─ Scramble.jsx/.css
   │  │  └─ Counter.jsx
   │  ├─ layout/                  # Layout components
   │  │  ├─ Nav.jsx/.css
   │  │  ├─ Footer.jsx/.css
   │  │  └─ ScrollManager.jsx
   │  └─ home/
   │     └─ BrowserMock.jsx/.css  # Interactive browser mockup
   ├─ sections/                   # Landing page sections
   │  ├─ Hero.jsx/.css
   │  ├─ Ticker.jsx/.css
   │  ├─ About.jsx/.css
   │  ├─ Services.jsx/.css
   │  ├─ Why.jsx/.css
   │  ├─ Process.jsx/.css
   │  ├─ Pricing.jsx/.css
   │  ├─ Portfolio.jsx/.css
   │  ├─ Testimonials.jsx/.css
   │  ├─ AgencyPartner.jsx/.css
   │  └─ FinalCTA.jsx/.css
   ├─ pages/                      # Route pages
   │  ├─ LandingPage.jsx
   │  ├─ PartnerPage.jsx/.css
   │  └─ JabodetabekPage.jsx/.css
   └─ styles/
      └─ globals.css              # Design system & reset
```

---

## 🎨 Design System

### Color Tokens
```css
:root {
  --paper: #F5F1E8;      /* cream background */
  --paper2: #ECE5D6;     /* darker cream */
  --ink: #191613;        /* dark text */
  --ink2: #221E18;       /* darker ink */
  --cream: #F5F1E8;      /* text on dark */
  --acc: #FF4D00;        /* orange accent */
  --lime: #D8F34F;       /* lime accent */
  --mut: #6E675C;        /* muted text */
  --line: rgba(25, 22, 19, 0.14);
}
```

### Typography
- **Display**: Syne (500, 700, 800) — headings, titles
- **Body**: Instrument Sans (400, 500, 600) — paragraphs, UI
- **Mono**: Space Mono (400, 700) — code, labels, prices

### Design Principles
- **Neobrutalism meets editorial** — bold borders, offset shadows, rotated cards
- **Motion with purpose** — Reveal animations, Scramble text, Counter
- **Accessibility first** — focus-visible, reduced-motion support, semantic HTML

---

## 🚀 Menjalankan Lokal

```bash
# Clone repository
git clone https://github.com/rr-Web-Solution/RR-Website.git
cd RR-Website

# Install dependencies
npm install

# Development server
npm run dev
# → http://localhost:5173/

# Build production
npm run build
# → Output di folder dist/

# Preview production build
npm run preview
```

### Environment Requirements
- Node.js 18+
- npm 9+

---

## 📝 Manajemen Konten

**Semua konten terpusat di `src/data/content.js`** — ganti teks, harga, dan kontak cukup edit file ini:

```js
// Contoh: ubah harga paket
export const PLANS = [
  {
    name: 'Basic',
    sub: 'Landing Page',
    price: 1500000,  // ← ubah di sini
    hot: false,
    feats: [...],
  },
  // ...
]

// Contoh: ubah nomor WhatsApp
export const WA_NUMBER = '6281234567890'  // ← ubah di sini
```

**Keuntungan:**
- Non-developer bisa update konten (cukup edit satu file)
- Tidak perlu rebuild untuk perubahan copy (kecuali rebuild static site)
- Konsistensi data di seluruh aplikasi

---

## 🛣️ Routing

Menggunakan **React Router v6** dengan `BrowserRouter`:

```jsx
<Routes>
  <Route path="/" element={<LandingPage />} />
  <Route path="/partner" element={<PartnerPage />} />
  <Route path="/jabodetabek" element={<JabodetabekPage />} />
  <Route path="*" element={<LandingPage />} /> {/* catch-all */}
</Routes>
```

### Scroll Behavior
- **Anchor links** (`/#portofolio`) → smooth scroll ke section
- **Route change** → scroll ke top
- **ScrollManager** component handle semua logic scroll

### Cross-page Navigation
Nav component pakai `useNavigate` untuk handle klik anchor dari halaman lain:
- Di `/partner` klik "Tentang" → navigate ke `/` + scroll ke `#tentang`
- Tidak ada full page reload, smooth SPA experience

---

## 🌐 Deployment

### Option 1: Vercel (Recommended)
```bash
npm i -g vercel
vercel
```
- Auto-detect Vite project
- Automatic HTTPS
- SPA fallback otomatis (tidak perlu config tambahan)
- Custom domain: `rrdevs.my.id`

### Option 2: GitHub Pages
1. Set `base` di `vite.config.js`:
```js
export default defineConfig({
  base: '/RR-Website/',
  plugins: [react()],
})
```

2. Buat `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist
      - uses: actions/deploy-pages@v4
```

3. Settings → Pages → Source: GitHub Actions

### Option 3: Netlify
```bash
npm run build
# Upload folder dist/ ke Netlify
```
- Set `_redirects` file untuk SPA fallback:
```
/*    /index.html   200
```

---

## 🔍 SEO & Performance

### Meta Tags (di `index.html`)
```html
<title>RR Devs — Jasa Pembuatan Website Profesional untuk UMKM</title>
<meta name="description" content="RR Devs membantu UMKM Indonesia..." />
<link rel="canonical" href="https://rrdevs.my.id/" />

<!-- Open Graph -->
<meta property="og:image" content="https://rrdevs.my.id/og-image.jpg" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
```

### Structured Data (JSON-LD)
```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "RR Devs",
  "url": "https://rrdevs.my.id/",
  "logo": "https://rrdevs.my.id/favicon.svg",
  "priceRange": "Rp2.500.000+",
  "areaServed": "Indonesia"
}
```

### Performance Optimizations
- **Preconnect** Google Fonts
- **Lazy loading** images (`loading="lazy"`)
- **Image optimization**: WebP format, proper sizing
- **Code splitting** otomatis dari Vite
- **CSS containment** untuk scroll performance

### Core Web Vitals Target
- LCP < 2.5s
- FID < 100ms
- CLS < 0.1

### Sitemap & Robots
- `public/sitemap.xml` — semua halaman ter-index
- `public/robots.txt` — allow all, point to sitemap

---

## 📚 Strategi Konten

### Blog Posts (Planned)
1. "Harga Pembuatan Website UMKM 2026: Panduan Lengkap"
2. "Cara Membuat Landing Page yang Mengkonversi untuk Bisnis Kuliner"
3. "5 Alasan UMKM Butuh Website di Era Digital"
4. "Company Profile vs Landing Page: Mana yang Cocok untuk Bisnismu?"
5. "Studi Kasus: Bagaimana Kopi Ruang Tunggu Naikkan Omzet 40% dengan Website"

**Target**: 1 artikel/minggu, 1500+ kata, long-tail keywords

### Case Studies
- **Capability Demos** (jujur, bukan klien): BarberPro, Architect Studio, Toko Percetakan, Kopi Senja
- **Client Stories** (nyata, dengan izin): Theo Teknik

**Prinsip**: Label jujur — demo ya demo, klien ya klien. Trust > hype.

---

## 🛠️ Development Workflow

### Adding New Section
1. Buat file di `src/sections/NewSection.jsx`
2. Buat CSS di `src/sections/NewSection.css`
3. Import & tambahkan ke `LandingPage.jsx`

### Adding New Page
1. Buat file di `src/pages/NewPage.jsx`
2. Tambah route di `App.jsx`:
```jsx
<Route path="/new-page" element={<NewPage />} />
```
3. Tambah link di Nav/Footer jika perlu

### Changing Design System
Edit `src/styles/globals.css` — semua komponen otomatis update.

---

## 📊 Analytics

- **Google Analytics 4** — tracking ID: `G-VJMG09317R`
- **Google Search Console** — submit sitemap, monitor keywords
- **WhatsApp click tracking** — via UTM parameters

---

## 🤝 Contributing

Project ini adalah portofolio pribadi. Pull request tidak dibuka untuk publik, tapi feedback dan saran sangat diterima via:
- Email: hello@rrdevs.my.id
- WhatsApp: +62 831-7112-5657

---

## 📄 Lisensi

© 2026 RR Devs — Rafael & Rendy. All rights reserved.

Kode, desain, dan copywriting pada repository ini merupakan aset intelektual RR Devs. Tidak untuk digunakan ulang secara komersial tanpa izin tertulis.

---

## 🙏 Kredit

**Design & Development:**
- Rafael — Frontend, UI/UX Design
- Rendy — Backend, Strategy

**Inspirasi:**
- Neobrutalism design movement
- Editorial web design (Stripe, Linear, Vercel)
- Indonesian UMKM stories

**Technologies:**
- React — [react.dev](https://react.dev)
- Vite — [vitejs.dev](https://vitejs.dev)
- React Router — [reactrouter.com](https://reactrouter.com)

---

*Dibangun dengan ☕ dan semangat "UMKM Indonesia naik kelas".*

**[rrdevs.my.id](https://rrdevs.my.id)** · [Instagram](https://instagram.com/universe.dev.id) · [TikTok](https://tiktok.com/@universe.dev.id)