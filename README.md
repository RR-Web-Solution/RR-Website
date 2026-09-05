# RR Devs

Website resmi **RR Devs**, studio pengembangan website yang membantu UMKM Indonesia tampil profesional, cepat, dan terpercaya di internet.

Production URL: **[rrdevs.my.id](https://rrdevs.my.id)**

## Tentang Proyek

RR Devs adalah landing page modern untuk mempresentasikan layanan pembuatan website, paket harga, portfolio, testimoni klien, dan program agency partner. Website ini dirancang dengan pendekatan mobile-first, visual editorial, serta fokus pada konversi melalui WhatsApp.

## Fitur Utama

- Landing page responsif untuk desktop, tablet, dan mobile.
- Section layanan, keunggulan, proses kerja, paket harga, portfolio, testimoni, dan CTA.
- Halaman khusus **Agency Partner** dengan rate card dan alur kemitraan.
- Integrasi CTA WhatsApp dengan pesan otomatis.
- Navigasi anchor dengan scroll management dan routing berbasis React Router.
- Animasi reveal, counter, scramble text, dan browser mockup interaktif.
- Metadata SEO lengkap: title, description, canonical URL, Open Graph, dan Twitter Card.
- Structured data Schema.org tipe `ProfessionalService`.
- `robots.txt` dan `sitemap.xml` untuk crawler mesin pencari.
- Optimasi gambar, lazy loading, dimensi gambar eksplisit, dan prioritas resource hero.
- Font loading menggunakan `preconnect` dan stylesheet link.

## Tech Stack

- [React 19](https://react.dev/)
- [React Router](https://reactrouter.com/)
- [Vite](https://vite.dev/)
- [Oxlint](https://oxc.rs/docs/guide/usage/linter)
- CSS custom dengan responsive breakpoints dan design tokens

## Struktur Proyek

```text
.
├── public/
│   ├── images/              # Gambar portfolio, founder, dan testimoni
│   ├── favicon.svg
│   ├── og-image.jpg
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/          # Komponen layout, UI, dan browser mockup
│   ├── data/content.js      # Konten, layanan, paket, portfolio, dan kontak
│   ├── hooks/               # Custom React hooks
│   ├── pages/               # Landing page dan Agency Partner
│   ├── sections/            # Section utama halaman
│   ├── App.jsx              # Routing aplikasi
│   ├── main.jsx             # React entry point
│   └── styles.css           # Global styles dan responsive layout
├── index.html               # Metadata SEO dan structured data
├── package.json
└── vite.config.js
```

## Menjalankan Secara Lokal

### Prasyarat

- Node.js 20 atau lebih baru
- npm

### Instalasi

```bash
npm install
```

### Development server

```bash
npm run dev
```

Website akan tersedia pada URL yang ditampilkan Vite, biasanya `http://localhost:5173`.

## Perintah NPM

| Perintah | Keterangan |
| --- | --- |
| `npm run dev` | Menjalankan development server dengan hot reload |
| `npm run build` | Membuat production build ke folder `dist/` |
| `npm run preview` | Menjalankan preview dari production build |
| `npm run lint` | Menjalankan pemeriksaan Oxlint |

Sebelum melakukan deployment, jalankan:

```bash
npm run build
npm run lint
```

## Mengubah Konten

Sebagian besar konten bisnis tersentralisasi di:

```text
src/data/content.js
```

File tersebut berisi nomor WhatsApp, layanan, paket harga, portfolio, testimoni, data demo, dan konten partner. Perubahan teks dan data bisnis sebaiknya dilakukan di sana agar konsisten di seluruh halaman.

Untuk mengubah metadata SEO, domain, structured data, atau social preview, edit:

```text
index.html
```

## SEO dan Domain

Konfigurasi production saat ini menggunakan:

- Canonical: `https://rrdevs.my.id/`
- Sitemap: `https://rrdevs.my.id/sitemap.xml`
- Robots: `https://rrdevs.my.id/robots.txt`
- Social preview: `https://rrdevs.my.id/og-image.jpg`
- Kontak email: `hello@rrdevs.my.id`

Pastikan domain telah diarahkan ke hosting production, HTTPS aktif, dan URL sitemap didaftarkan ke Google Search Console setelah deployment.

## Deployment

Proyek ini menghasilkan static assets sehingga dapat dideploy ke Vercel, Netlify, Cloudflare Pages, GitHub Pages, atau hosting static lainnya.

Build command:

```bash
npm run build
```

Output directory:

```text
dist
```

Untuk deployment dengan custom domain, hubungkan `rrdevs.my.id` pada dashboard provider hosting dan pastikan konfigurasi DNS serta SSL sudah aktif.

## Lisensi

Konten, identitas visual, dan aset pada proyek ini merupakan milik RR Devs. Jangan menyalin atau menggunakan ulang tanpa izin.
