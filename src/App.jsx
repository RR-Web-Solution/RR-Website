import { useEffect, useRef, useState } from 'react'

/* ================= DATA ================= */

const WA_NUMBER = '6283171125657'
const waLink = (msg) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`

const reduced = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

const DEMOS = [
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

const SERVICES = [
  {
    n: '01',
    title: 'Landing Page',
    price: 'mulai Rp1,5 jt',
    desc: 'Satu halaman yang fokusnya satu: membuat pengunjung menghubungi / memesan. Cocok untuk produk tunggal, promo, atau jasa lokal yang butuh presence cepat.',
    tags: ['1 Halaman', 'Tombol WhatsApp', 'Form Order', 'Mobile-first'],
  },
  {
     n: '02',
     title: 'Website Custom',
     price: 'mulai Rp3,5 jt',
     desc: 'Bisnismu unik — websitenya juga harus. Kami rancang dan bangun website dengan fitur yang benar-benar pas dengan cara kerjamu: sistem booking & reservasi, member area, kalkulator harga otomatis, integrasi WhatsApp API, sampai dashboard laporan penjualan. Bukan template, dibangun dari nol, dan 100% jadi milikmu selamanya.',
     tags: ['Fitur 100% Sesuai Kebutuhan', 'Sistem Booking / Reservasi', 'Integrasi WhatsApp API & Payment', 'Bisa Dikembangkan Bertahap'],
     hot: true,
   },
  {
    n: '03',
    title: 'Company Profile',
    price: 'mulai Rp5,5 jt',
    desc: 'Website 5 halaman yang membuat bisnismu terlihat mapan dan terpercaya di mata pelanggan, mitra, maupun calon investor.',
    tags: ['Sampai 5 Halaman', 'Galeri & Peta', 'SEO Dasar', 'Email Bisnis'],
  },
  {
    n: '04',
    title: 'Toko Online',
    price: 'mulai Rp7,9 jt',
    desc: 'Katalog produk lengkap dengan keranjang, checkout, dan pembayaran. Kamu kelola produk sendiri lewat panel admin — tanpa biaya komisi marketplace.',
    tags: ['Katalog & Keranjang', 'Pembayaran QRIS', 'Panel Admin', 'Laporan Penjualan'],
  },
  {
    n: '05',
    title: 'Maintenance & SEO',
    price: 'mulai Rp250rb/bln',
    desc: 'Website dijaga supaya tetap cepat, aman, dan update: backup rutin, perubahan konten, plus laporan performa tiap bulan.',
    tags: ['Backup Mingguan', 'Update Konten', 'Keamanan', 'Laporan Bulanan'],
  },
]

const WHY = [
  {
    n: '01',
    title: 'Harga Jujur & Terjangku',
    desc: 'Harga disepakati di depan, tertulis di invoice — tidak ada biaya siluman. DP cukup 50%, sisanya setelah website jadi dan kamu puas.',
  },
  {
    n: '02',
    title: 'Pengerjaan Cepat',
    desc: 'Landing page jadi 5–7 hari, toko online 14–21 hari. Progress bisa kamu pantau setiap hari lewat link preview.',
  },
  {
    n: '03',
    title: 'Gratis Revisi + Domain & Hosting',
    desc: 'Revisi desain 2–5× (tergantung paket) sampai sesuai karakter bisnismu. Semua paket sudah termasuk domain .com dan hosting tahun pertama.',
  },
  {
    n: '04',
    title: 'Dukungan Setelah Jadi',
    desc: 'Kami tidak hilang setelah launching. Ada support & konsultasi gratis 3 bulan, plus panduan cara mengelola website sendiri.',
  },
]

const PROCESS = [
  { n: '01', t: 'Konsultasi', d: 'Offline: Tatap muka. Online: Chat / call WhatsApp. Kami dengarkan kebutuhan & budget-mu — gratis, tanpa komitmen.' },
  { n: '02', t: 'Desain & Konten', d: 'Kami susun struktur, copywriting, dan desain awal. Kamu boleh revisi sebelum masuk koding.' },
  { n: '03', t: 'Development', d: 'Website dibangun, responsif di HP & laptop, lalu dites menyeluruh. Progress bisa dilihat real-time.' },
  { n: '04', t: 'Launch & Pelatihan', d: 'Go-live! Kami ajari cara kelola websitenya, lalu support 3 bulan penuh.' },
]

const PLANS = [
  {
    name: 'Basic',
    sub: 'Landing Page',
    price: 1500000,
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
     name: 'Custom',
     sub: 'Website Impian Bisnismu',
     price: 3500000,
     hot: true,
     feats: [
       'Sesi konsultasi & bedah kebutuhan bisnis 1-on-1',
       'Desain eksklusif dari nol — bukan template',
       'Fitur custom: booking, member, kalkulator, dll.',
       'Integrasi WhatsApp API & payment gateway',
       'Dashboard admin + laporan lengkap',
       'Gratis domain + hosting + SSL (1 tahun)',
       'Revisi sampai sesuai (maks. 7×)',
       'Garansi bug-fix & support 6 bulan',
       'Pelatihan tim + dokumentasi cara pakai',
       'Pengerjaan 3–5 minggu',
     ],
   },
  {
    name: 'Standar',
    sub: 'Company Profile',
    price: 5500000,
    hot: false,
    feats: [
      'Sampai 5 halaman',
      'Desain custom sesuai brand',
      'Gratis domain + hosting (1 thn)',
      'Galeri, peta & Google Maps',
      'SEO dasar (meta + sitemap)',
      'Revisi 3×',
      'Pengerjaan 7–10 hari',
    ],
  },
  {
    name: 'Premium',
    sub: 'Toko Online',
    price: 7900000,
    hot: false,
    feats: [
      'Produk tanpa batas',
      'Katalog, keranjang & checkout',
      'Integrasi pembayaran (QRIS / transfer)',
      'Panel admin kelola produk sendiri',
      'SEO lanjutan',
      'Revisi 5×',
      'Pengerjaan 14–21 hari',
    ],
  },
]

const CARE_PRICE = 250000;
const CARE_FEATS = ['Backup & keamanan mingguan', 'Update konten 2×/bulan', 'Laporan performa bulanan'];

const PORTFOLIO = [
  {
     title: 'Digital Printing',
     type: 'Website Custom + Company Profile + Sistem Order + Admin CMS',
     year: '2026',
     desc: 'Website digital printing yang disebut mesin order 24 jam: pengunjung memilih produk, total harga terhitung otomatis, lalu pesanan terkirim rapi ke WhatsApp admin lengkap dengan detail ukuran, jumlah, dan opsi desain. Seluruh konten — produk, harga, galeri, testimoni, hingga jam buka — dikelola mandiri lewat admin panel tanpa menyentuh satu baris kode pun.',
     tags: ['Website Custom', 'Sesuai Kebutuhan', 'WhatsApp Ordering', 'Admin CMS'],
     metric: '24/7',
     metricLabel: 'order masuk otomatis tanpa jam tutup',
     imageUrl: 'images/digital-printing-website.jpg',
     liveUrl: 'https://digital-printing-website-production.up.railway.app',
   },
]

const TESTIMONIALS = [
  {
     name: 'Joko Prasetyo',
     biz: 'Pemilik · Digital Printing, Bekasi',
     text: 'Awalnya ragu, percetakan kecil kok punya website sendiri. Ternyata kurang dari sebulan sudah live dan langsung jalan — pelanggan hitung harga banner sendiri, pesanan masuk ke WhatsApp lengkap dengan ukuran dan jumlah, bahkan sering masuk malam hari saat toko sudah tutup. Sekarang ganti harga atau tambah produk saya kerjakan sendiri dari HP lewat admin panel, nggak perlu nyentuh kode. Investasi yang terasa balik modal dalam hitungan bulan.',
     image: 'images/joko-prasetyo.jpg',
   },
]

const TICKER = ['Landing Page', 'Company Profile', 'Website Custom', 'Toko Online', 'Redesain Website', 'Undangan Digital', 'Maintenance & SEO']

const fmt = (n) => n.toLocaleString('id-ID')

/* ================= HOOKS ================= */

function useInView(threshold = 0.18) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const ob = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true)
          ob.disconnect()
        }
      },
      { threshold }
    )
    ob.observe(el)
    return () => ob.disconnect()
  }, [threshold])
  return [ref, inView]
}

/* Reveal-on-scroll wrapper */
function Rv({ children, delay = 0, className = '' }) {
  const [ref, on] = useInView()
  return (
    <div ref={ref} className={`rv ${on ? 'on' : ''} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

/* Scramble-decode text */
const GLYPHS = '█▓▒░#%&@*+=?/'
function Scramble({ text, delay = 0 }) {
  const [val, setVal] = useState(() => (reduced() ? text : '\u00A0'))
  useEffect(() => {
    if (reduced()) { setVal(text); return }
    let raf, start = null
    const dur = 950
    const tick = (t) => {
      if (start === null) start = t
      const p = Math.min(1, (t - start - delay) / dur)
      if (p < 0) { raf = requestAnimationFrame(tick); return }
      const reveal = Math.floor(p * text.length)
      let s = text.slice(0, reveal)
      for (let i = reveal; i < text.length; i++) {
        s += text[i] === ' ' ? ' ' : GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
      }
      setVal(s)
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [text, delay])
  return <span className="scramble">{val}</span>
}

/* Animated counter */
function Counter({ to, suffix = '', duration = 1400 }) {
  const [ref, inView] = useInView(0.5)
  const [n, setN] = useState(reduced() ? to : 0)
  useEffect(() => {
    if (!inView) return
    if (reduced()) { setN(to); return }
    let raf, start = null
    const tick = (t) => {
      if (start === null) start = t
      const p = Math.min(1, (t - start) / duration)
      const eased = 1 - Math.pow(1 - p, 3)
      setN(Math.round(eased * to))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, to, duration])
  return <span ref={ref}>{n}{suffix}</span>
}

/* Section heading */
function SecHead({ no, kicker, title, desc }) {
  return (
    <div className="sechead">
      <Rv>
        <p className="kick"><span>({no})</span> — {kicker}</p>
      </Rv>
      <div className="sechead-row">
        <Rv delay={80}><h2 className="h2">{title}</h2></Rv>
        {desc && <Rv delay={160}><p className="sechead-desc">{desc}</p></Rv>}
      </div>
    </div>
  )
}

/* ================= NAV ================= */

function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24)
    fn()
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const links = [
    ['#tentang', 'Tentang'],
    ['#layanan', 'Layanan'],
    ['#keunggulan', 'Keunggulan'],
    ['#harga', 'Paket'],
    ['#portofolio', 'Portofolio'],
    ['#kontak', 'Kontak'],
  ]

  return (
    <header className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="wrap nav-in">
        <a href="#top" className="logo" aria-label="RR Web Solution">
          <span className="logo-mark">R<b>&amp;</b>R</span>
          <span className="logo-txt">RR·WEB·<b>SOLUTION</b></span>
        </a>
        <nav className="nav-links">
          {links.map(([href, label]) => (
            <a key={href} href={href}><i />{label}</a>
          ))}
        </nav>
        <div className="nav-right">
          <a className="btn btn-acc btn-sm" href={waLink('Halo RR Web Solution, saya mau konsultasi gratis soal website untuk bisnis saya 🙂')} target="_blank" rel="noreferrer">
            Konsultasi Gratis
          </a>
          <button className={`burger ${open ? 'on' : ''}`} onClick={() => setOpen(!open)} aria-label="Menu">
            <span /><span /><span />
          </button>
        </div>
      </div>
      {open && (
        <div className="nav-mobile">
          {links.map(([href, label]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
        </div>
      )}
    </header>
  )
}

/* ================= HERO ================= */

function BrowserMock() {
  const [i, setI] = useState(0)
  const d = DEMOS[i]
  return (
    <div className="browser">
      <div className="b-bar">
        <span className="b-dots"><i /><i /><i /></span>
        <div className="b-tabs">
          {DEMOS.map((x, idx) => (
            <button key={x.id} className={idx === i ? 'on' : ''} onClick={() => setI(idx)}>
              {x.short}
            </button>
          ))}
        </div>
      </div>
      <div className="b-url"><svg width="10" height="12" viewBox="0 0 10 12" fill="none"><rect x="1" y="5" width="8" height="6" rx="1" stroke="currentColor" /><path d="M3 5V3.5a2 2 0 0 1 4 0V5" stroke="currentColor" /></svg> rrwebsolution.id/{d.id}</div>
      <div className="b-site" key={d.id} style={{ '--acc': d.accent, '--soft': d.soft }}>
        <div className="mn-nav">
          <b>{d.brand}</b>
          <div className="mn-links">
            {d.nav.map((x) => <span key={x}>{x}</span>)}
            <span className="mn-cta">{d.cta}</span>
          </div>
        </div>
        <div className="mn-hero">
          <div className="mn-copy">
            <h5>{d.headline}</h5>
            <p>{d.sub}</p>
            <span className="mn-btn">{d.cta} →</span>
          </div>
          {/* <img src={`https://picsum.photos/seed/${d.seed}/420/300`} alt={d.brand} loading="lazy" /> */}
          <img src={d.urlImages} alt={d.brand} loading="lazy" />
        </div>
        <div className="mn-feats">
          {d.feats.map((f) => <span key={f}>✦ {f}</span>)}
        </div>
      </div>
      <div className="chip-f chip-a">⚡ Jadi dalam 7 hari</div>
      <div className="chip-f chip-b">✓ Gratis domain + hosting</div>
      <svg className="spin-badge" viewBox="0 0 120 120" aria-hidden="true">
        <defs>
          <path id="circ" d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0" />
        </defs>
        <text>
          <textPath href="#circ">UMKM GO DIGITAL ✦ RR WEB SOLUTION ✦ </textPath>
        </text>
        <text x="60" y="68" className="spin-core">↗</text>
      </svg>
    </div>
  )
}

function Hero() {
  const [ready, setReady] = useState(false)
  useEffect(() => {
    const t = requestAnimationFrame(() => setReady(true))
    return () => cancelAnimationFrame(t)
  }, [])

  return (
    <section className={`hero ${ready ? 'ready' : ''}`} id="top">
      <div className="hero-plus" aria-hidden="true">+</div>
      <div className="hero-plus p2" aria-hidden="true">+</div>
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <span className="mask"><span className="hero-chip">★ Jasa pembuatan website untuk UMKM</span></span>
          <h1 className="hero-title">
            <span className="mask"><span>Website profesional,</span></span>
            <span className="mask"><span>cepat &amp; terjangkau —</span></span>
            <span className="mask"><span>bisnismu siap <em><Scramble text="naik kelas." delay={650} /></em></span></span>
          </h1>
          <span className="mask"><span className="hero-sub">RR Web Solution membantu UMKM Indonesia tampil meyakinkan di internet — dari desain sampai online, tanpa ribet.</span></span>
          <span className="mask"><span className="hero-ctas">
            <a className="btn btn-acc" href={waLink('Halo RR Web Solution, saya mau konsultasi gratis soal website untuk bisnis saya 🙂')} target="_blank" rel="noreferrer">
              Konsultasi Gratis via WhatsApp <span className="btn-arrow">→</span>
            </a>
            <a className="btn btn-ghost" href="#portofolio">Lihat Portofolio ↓</a>
          </span></span>
          <span className="mask"><span className="hero-note">// balas cepat · Senin–Sabtu 09.00–18.00 WIB</span></span>
          <div className="hero-stats">
            <div><b><Counter to={37} suffix="+" /></b><small>Website dirilis</small></div>
            <div><b><Counter to={12} suffix="+" /></b><small>Jenis usaha dilayani</small></div>
            <div><b><Counter to={98} suffix="%" /></b><small>Klien puas & repeat</small></div>
          </div>
        </div>
        <Rv delay={200} className="hero-vis">
          <BrowserMock />
        </Rv>
      </div>
    </section>
  )
}

/* ================= TICKER ================= */

function Ticker() {
  const items = [...TICKER, ...TICKER]
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {items.map((t, i) => (
          <span key={i}>{t} <i>✦</i></span>
        ))}
      </div>
    </div>
  )
}

/* ================= TENTANG ================= */

function About() {
  return (
    <section className="sec about" id="tentang">
      <div className="wrap about-grid">
        <Rv className="about-copy">
          <p className="kick"><span>(01)</span> — Tentang Kami</p>
          <h2 className="h2">Dua sahabat, satu misi: <br />UMKM Indonesia naik kelas.</h2>
          <p className="about-text">
            RR Web Solution lahir dari dua sahabat — <b>Rafael</b> &amp; <b>Rendy</b> — yang percaya usaha kecil Indonesia{' '}
            <mark>layak tampil sekelas brand besar</mark> di internet. Kami merancang dan membangun website untuk UMKM:
            mulai dari landing page jualan, company profile, sampai toko online penuh.
          </p>
          <p className="about-text">
            Sejak 2023, <b>37+ website</b> telah kami rilis untuk kedai kopi, kuliner, fashion batik, laundry,
            bengkel, hingga jasa fotografi.
          </p>
          <p className="about-code">// dua kepala, satu commit: kepuasan klien.</p>
        </Rv>
        <div className="about-duo">
          <Rv delay={120} className="founder f-a">
            <img src="/images/rafael.jpg" alt="Rafael" loading="lazy" />
            <div className="founder-cap"><b>Rafael</b><small>Desain &amp; Front-End</small></div>
          </Rv>
          <Rv delay={260} className="founder f-b">
            <img src="https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4" alt="Rendy" loading="lazy" />
            <div className="founder-cap"><b>Rendy</b><small>Back-End &amp; Strategi</small></div>
          </Rv>
        </div>
      </div>
    </section>
  )
}

/* ================= LAYANAN ================= */

function Services() {
  const [open, setOpen] = useState(1)
  return (
    <section className="sec services" id="layanan">
      <div className="wrap">
        <SecHead no="02" kicker="Layanan" title="Apa yang bisa kami buatkan untukmu?" desc="Klik tiap layanan untuk lihat detailnya. Semua bisa disesuaikan dengan budget UMKM." />
        <div className="svc-list">
          {SERVICES.map((s, i) => (
            <Rv key={s.n} delay={i * 70}>
              <div className={`svc ${open === i ? 'open' : ''}`}>
                <button className="svc-head" onClick={() => setOpen(open === i ? -1 : i)}>
                  <span className="svc-n">{s.n}</span>
                   <span className="svc-t">
                    {s.title} {s.hot && 
                       <em className="svc-hot">
                         ★ UNGGULAN
                      </em>}
                   </span>
                  <span className="svc-price">{s.price}</span>
                  <span className="svc-x">+</span>
                </button>
                <div className="svc-body">
                  <div className="svc-body-in">
                    <p>{s.desc}</p>
                    <div className="svc-tags">{s.tags.map((t) => <span key={t}>{t}</span>)}</div>
                    <a href={waLink(`Halo, saya tertarik layanan ${s.title} (${s.price}). Bisa dibantu?`)} target="_blank" rel="noreferrer">
                      Konsultasi layanan ini →
                    </a>
                  </div>
                </div>
              </div>
            </Rv>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ================= KEUNGGULAN ================= */

function Why() {
  return (
    <section className="sec why" id="keunggulan">
      <div className="wrap why-grid">
        <div className="why-left">
          <div className="why-sticky">
            <Rv>
              <p className="kick"><span>(03)</span> — Keunggulan</p>
              <h2 className="h2">Kenapa UMKM memilih RR?</h2>
              <p className="why-desc">
                Kami bukan agensi besar dengan harga korporat. Kami dua orang yang turun tangan langsung —
                dari briefing sampai website-mu ramai pengunjung.
              </p>
              <div className="why-badges">
                <span>✦ Respons &lt; 1 jam</span>
                <span>✦ Kontrak &amp; invoice jelas</span>
                <span>✦ Garansi support 3 bulan</span>
              </div>
            </Rv>
          </div>
        </div>
        <div className="why-right">
          {WHY.map((w, i) => (
            <Rv key={w.n} delay={i * 90}>
              <div className="why-item">
                <span className="why-n">{w.n}</span>
                <div>
                  <h3>{w.title}</h3>
                  <p>{w.desc}</p>
                </div>
              </div>
            </Rv>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ================= PROSES ================= */

function Process() {
  return (
    <section className="sec process">
      <div className="wrap">
        <SecHead no="04" kicker="Cara Kerja" title="Dari chat sampai launch dalam 4 langkah" />
        <div className="proc-grid">
          {PROCESS.map((p, i) => (
            <Rv key={p.n} delay={i * 100}>
              <div className="proc">
                <span className="proc-n">{p.n}</span>
                <h4>{p.t}</h4>
                <p>{p.d}</p>
              </div>
            </Rv>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ================= PAKET HARGA ================= */

function Pricing() {
  const [care, setCare] = useState(false)
  return (
    <section className="sec pricing" id="harga">
      <div className="wrap">
        <SecHead no="05" kicker="Paket Harga" title="Harga jelas, tanpa kejutan." desc="Semua paket sudah termasuk domain & hosting tahun pertama. Pilih yang paling pas dengan tahap bisnismu." />
        <Rv>
          <div className="price-toggle" role="tablist" aria-label="Opsi pembayaran">
            <button className={!care ? 'on' : ''} onClick={() => setCare(false)}>Sekali Bayar</button>
            <button className={care ? 'on' : ''} onClick={() => setCare(true)}>+ Perawatan Bulanan</button>
          </div>
        </Rv>
        <div className="plans">
          {PLANS.map((p, i) => (
            <Rv key={p.name} delay={i * 110}>
              <div className={`plan ${p.hot ? 'hot' : ''}`}>
                {p.hot && <span className="plan-flag">★ Paling Laris</span>}
                <div className="plan-top">
                  <h3>{p.name}</h3>
                  <span>{p.sub}</span>
                </div>
                <div className="plan-price" key={care ? 'c' : 's'}>
                  <div className="pp-row"><small>Rp</small><b>{fmt(p.price)}</b></div>
                  <em>{care ? `+ Rp${fmt(CARE_PRICE)}/bln perawatan` : 'sekali bayar · sudah semua'}</em>
                </div>
                <ul className="plan-feats">
                  {p.feats.map((f) => <li key={f}><span>✓</span>{f}</li>)}
                  {care && CARE_FEATS.map((f) => <li key={f} className="extra"><span>＋</span>{f}</li>)}
                </ul>
                <a
                  className={`btn ${p.hot ? 'btn-acc' : 'btn-line'}`}
                  href={waLink(`Halo RR, saya tertarik paket ${p.name} — ${p.sub}${care ? ' + perawatan bulanan' : ''}. Boleh minta detailnya?`)}
                  target="_blank" rel="noreferrer"
                >
                  Pilih {p.name}
                </a>
                 { p.name === 'Custom' &&
                    <div className="notes">
                       * Harga dapat bervariasi berdasarkan Jumlah dan Kerumitan fitur yang diinginkan
                    </div>
                 }
              </div>
            </Rv>
          ))}
        </div>
        <Rv delay={150}>
          <div className="pay-note">
            <b>Skema pembayaran:</b> DP 50% di awal, pelunasan setelah website jadi &amp; kamu setujui.
            Bisa dicicil 2× termin untuk paket Premium. <a href={waLink('Halo, saya mau tanya skema pembayaran / cicilan.')} target="_blank" rel="noreferrer">Tanya dulu? Gratis kok →</a>
          </div>
        </Rv>
      </div>
    </section>
  )
}

/* ================= PORTOFOLIO ================= */

function Portfolio() {
  return (
    <section className="sec portfolio" id="portofolio">
      <div className="wrap">
        <SecHead no="06" kicker="Portofolio" title="Karya yang sudah kami rilis" desc="Beberapa proyek pilihan — dari Website Custom sampai Landing Page. Scroll pelan-pelan." />
        <div className="pf-list">
          {PORTFOLIO.map((p, i) => (
            <Rv key={p.title}>
              <div className={`pf-row ${i % 2 ? 'rev' : ''}`}>
                <div className="pf-img">
                  <img src={p.imageUrl} alt={`Website ${p.title}`} loading="lazy" />
                  <span className="pf-tag">{p.type}</span>
                </div>
                <div className="pf-info">
                  <p className="pf-meta">{String(i + 1).padStart(2, '0')} · {p.year}</p>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <div className="pf-tags">{p.tags.map((t) => <span key={t}>{t}</span>)}</div>
                  <div className="pf-metric">
                    <b>{p.metric}</b>
                    <small>{p.metricLabel}</small>
                  </div>
                  <a href={waLink(`Halo, saya mau website seperti ${p.title}. Bisa dibantu?`)} target="_blank" rel="noreferrer">
                    Mau seperti ini? Ceritakan bisnismu →
                  </a>
                </div>
              </div>
            </Rv>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ================= TESTIMONI ================= */

function Testimonials() {
  return (
    <section className="sec testi">
      <div className="wrap">
        <SecHead no="07" kicker="Testimoni" title="Kata mereka yang sudah go digital" />
        <div className="testi-grid">
          {TESTIMONIALS.map((t, i) => (
            <Rv key={t.name} delay={i * 120}>
              <figure className={`testi-card t${i}`}>
                <span className="stars">★★★★★</span>
                <blockquote>“{t.text}”</blockquote>
                <figcaption>
                  <span className="ava">
                     <img src={t.image} alt={t.name} />
                  </span>
                  <div><b>{t.name}</b><small>{t.biz}</small></div>
                </figcaption>
              </figure>
            </Rv>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ================= CTA PENUTUP ================= */

function FinalCTA() {
  return (
    <section className="final">
      <div className="ghost-marquee" aria-hidden="true">
        <div className="gm-track">
          {Array(6).fill('KONSULTASI GRATIS').map((t, i) => <span key={i}>{t} ✦</span>)}
        </div>
      </div>
      <div className="wrap final-in">
        <Rv>
          <p className="final-kick">✦ Slot pengerjaan bulan ini tinggal sedikit</p>
          <h2 className="final-title">Siap punya<br />website?</h2>
          <p className="final-sub">Ceritakan bisnismu 5 menit saja — kami kasih gambaran desain, estimasi biaya, dan timeline. Gratis, tanpa komitmen.</p>
          <div className="final-ctas">
            <a className="btn btn-ink" href={waLink('Halo RR Web Solution! Saya siap punya website 🚀 Bisa dibantu?')} target="_blank" rel="noreferrer">
              Hubungi Kami Sekarang <span className="btn-arrow">→</span>
            </a>
            <a className="final-mail" href="mailto:rafaeltorang5@gmail.com">atau email: rafaeltorang5@gmail.com</a>
          </div>
        </Rv>
      </div>
    </section>
  )
}

/* ================= FOOTER ================= */

function Footer() {
  return (
    <footer className="footer" id="kontak">
      <div className="wrap foot-grid">
        <div className="foot-brand">
          <a href="#top" className="logo">
            <span className="logo-mark">R<b>&amp;</b>R</span>
            <span className="logo-txt">RR·WEB·<b>SOLUTION</b></span>
          </a>
          <p>Studio website milik Rafael &amp; Rendy. Kami bantu UMKM Indonesia tumbuh lewat website yang cepat, rapi, dan terjangkau.</p>
          <div className="foot-social">
            <a href="https://instagram.com/rafael_jasa_website_umkm" target="_blank" rel="noreferrer">Instagram ↗</a>
            <a href="https://tiktok.com/@rafael_jasa_website_umkm" target="_blank" rel="noreferrer">TikTok ↗</a>
            <a href="https://linkedin.com/in/rafael-jasa-website-umkm" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          </div>
        </div>
        <div className="foot-col">
          <h4>Menu</h4>
          <a href="#tentang">Tentang</a>
          <a href="#layanan">Layanan</a>
          <a href="#harga">Paket Harga</a>
          <a href="#portofolio">Portofolio</a>
        </div>
        <div className="foot-col">
          <h4>Layanan</h4>
          <a href="#layanan">Landing Page</a>
          <a href="#layanan">Company Profile</a>
          <a href="#layanan">Toko Online</a>
          <a href="#layanan">Maintenance &amp; SEO</a>
        </div>
        <div className="foot-col">
          <h4>Kontak</h4>
          <a href={waLink('Halo RR Web Solution!')} target="_blank" rel="noreferrer">WhatsApp: +62 812-3456-7890</a>
          <a href="mailto:rafaeltorang5@gmail.com">Email: rafaeltorang5@gmail.com</a>
          <span>Jakarta Timur, Indonesia<br />(melayani seluruh Indonesia, remote-first)</span>
        </div>
      </div>
      <div className="wrap foot-bottom">
        <span>© 2025 RR Web Solution. Semua hak dilindungi.</span>
        <span>Dibuat dengan ☕ oleh Rafael &amp; Rendy</span>
      </div>
    </footer>
  )
}

/* ================= APP ================= */

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <About />
        <Services />
        <Why />
        <Process />
        <Pricing />
        <Portfolio />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}