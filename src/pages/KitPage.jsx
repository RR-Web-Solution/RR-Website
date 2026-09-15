import { useState } from 'react'
import { toPng } from 'html-to-image'
import './KitPage.css'

/* ============================================================
   PABRIK KONTEN RR DEVS v2.1
   - judul 76px (wrap rapi), note nempel body, pains pakai ✗
   - tanpa glyph @ (aman untuk font embedding)
   ============================================================ */
const CAROUSELS = {
  '01-perkenalan': [
    { chip: 'PERKENALAN', title: (<>Halo, kami <em>RR Devs</em> 👋</>), body: 'Duo pembuat website untuk UMKM Indonesia. Bukan agency besar — dua orang yang mengerjakan bisnismu dari desain sampai live, dan bisa kamu hubungi kapan saja.', note: 'geser untuk kenalan →' },
    { chip: 'SIAPA KAMI', title: (<>Rafael <em>&</em> Rendy.</>), body: 'Kamu selalu tahu siapa yang mengerjakan dan siapa yang harus dihubungi. Tidak ada account manager berantai — yang chat kamu, itu yang ngoding.', cards: [{ b: 'Rafael', s: 'Desain & Front-End' }, { b: 'Rendy', s: 'Back-End & Strategi' }] },
    { chip: 'MISI KAMI', title: (<>UMKM <em>naik kelas.</em></>), body: 'Warung, barbershop, katering, bengkel — bisnis kalian sudah hebat offline. Tugas kami: orang yang googling jam 11 malam juga bisa menemukan & percaya sama kalian.', stats: [{ b: '37+', s: 'website dirilis' }, { b: '12+', s: 'jenis usaha' }, { b: '98%', s: 'klien puas' }] },
    { chip: 'CARA KAMI', title: (<>Sistem, bukan sekadar <em>website.</em></>), bullets: ['Booking & order nyambung langsung ke WhatsApp', 'Harga transparan di depan — anti takut kena tipu', 'Dashboard biar kamu pegang kendali penuh'], body: 'Tanpa aplikasi ribet yang bikin pelanggan kabur.' },
    { chip: '// FUN FACT', title: (<>Kami mulai dari <em>seadanya.</em></>), body: 'Sistem booking paling kompleks kami dibangun 100% dari tablet Android pakai Termux. Kami nggak nunggu kondisi ideal buat mulai — kamu juga nggak perlu nunggu "nanti".', terminal: [['$ whoami', ''], ['rafael@tablet-android:~', 'm'], ['$ pkg install nodejs postgresql', ''], ['✓ installed — tanpa laptop', 'g'], ['$ npm run deploy', ''], ['✓ production live 🚀', 'g']] },
    { chip: 'MULAI DARI SINI', title: (<>Ceritakan bisnismu. <em>15 menit saja.</em></>), body: 'Konsultasi gratis via WhatsApp. Kami sketsakan sistem yang paling cocok untuk bisnismu — tanpa komitmen, tanpa bahasa teknis yang membingungkan.', cta: { left: 'Chat WhatsApp — gratis', right: '→' }, note: 'Klik link di bio kami untuk langsung terhubung ke WhatsApp.' },
  ],

  '02-theo': [
    { chip: 'CLIENT STORY', title: (<>Dari modal nomor HP, jadi <em>mesin order.</em></>), body: 'Theo Teknik — jasa panggilan AC di Cakung, Jakarta Timur. Sebelumnya cuma mengandalkan promosi mulut ke mulut. Sampai akhirnya sistem sederhana ini mengubah segalanya (ikut ceritanya ➔)', note: 'klien nyata · izin dipakai →' },
    { chip: 'MASALAHNYA', title: (<>Pelanggan takut <em>kena tipu harga.</em></>), body: 'Di jasa panggilan, kepercayaan adalah produk utamanya.', pains: ['Harga tidak pernah tampil di mana pun, membuat calon klien ragu.', 'Booking lewat telepon & chat — rawan salah catat', 'Tidak ada bukti kerja yang bisa dicek online'] },
    { chip: 'SOLUSINYA', title: (<>Satu jalur booking: <em>WhatsApp.</em></>), bullets: ['Tombol WA langsung di setiap halaman – tanpa formulir ribet.', 'Daftar harga transparan tampil di depan', 'Galeri before-after + testimoni asli'] },
    { chip: 'BUKTINYA', title: (<>Begini tampilannya <em>di HP pelanggan.</em></>), img: '/images/theo-teknik-portfolio.jpg', imgAlt: 'Tangkapan layar situs Theo Teknik — jasa service AC Cakung, Jakarta Timur', note: 'coba live: theo-teknik.rrdevs.my.id' },
    { chip: 'HASILNYA', title: (<>Kehadiran digital yang <em>meyakinkan.</em></>), body: (<>Sekarang, Theo Teknik tidak perlu perang harga lagi. Siapa pun yang mencari <em>service AC terdekat</em> di Google langsung diyakinkan oleh halaman web ini—bahkan sebelum mereka menelepon.</>), quote: { t: 'Sejak ada web, orderan WA nambah dan pelanggan baru lebih gampang percaya.', n: 'Charles Pardede · Theo Teknik' } },
    { chip: 'GILIRAN KAMU', title: (<>Usahamu cerita <em>berikutnya?</em></>), body: 'Konsultasi gratis 15 menit via WhatsApp. Kami sketsakan sistem yang paling cocok — tanpa komitmen.', cta: { left: 'Chat WA — gratis', right: '→' }, note: 'Klik link di bio kami untuk langsung terhubung ke WhatsApp.' },
  ],

  '03-edukasi': [
     {
       dark: true,
       chip: 'EDUKASI · CEK 30 DETIK',
       title: (<>5 tanda bisnismu butuh website <em>sekarang juga.</em></>),
       body: 'Bukan menakut-nakuti: kalau 2 saja dari tanda ini kena, bisnismu sedang kehilangan pelanggan tiap hari — tanpa kamu sadar.',
       checks: 2,
       note: 'geser → cek punyamu',
     },
     {
       chip: 'TANDA 01–02',
       title: (<>Kamu <em>tidak terlihat</em> saat dicari.</>),
       numStart: 1,
       numbered: [
         'Calon pelanggan googling nama bisnismu — yang muncul akun orang lain, atau tidak ada apa-apa.',
         'Kamu mengetik jawaban yang sama setiap hari: harga, lokasi, jam buka, daftar menu.',
       ],
     },
     {
       chip: 'TANDA 03–04',
       title: (<>Kamu <em>kehilangan</em> tanpa sadar.</>),
       numStart: 3,
       numbered: [
         'Pesaing sebelah sudah punya website dan muncul lebih dulu di Google.',
         'Order masuk dari 3 channel (WA, DM, telepon) dan rekapnya sering keteteran.',
       ],
     },
     {
       chip: 'TANDA 05',
       title: (<>Kamu mau <em>naik kelas.</em></>),
       numStart: 5,
       numbered: [
         'Perusahaan besar, tender, dan calon reseller bonafide menuntut satu hal yang sama: Company Profile resmi yang tepercaya dan bisa diverifikasi.',
       ],
       chips: ['Ikut tender', 'Cari reseller', 'Dipercaya corporate'],
       body: 'Mengandalkan media sosial saja tidak akan cukup untuk menembus pasar B2B dan korporasi.',
     },
     {
       chip: 'KENAPA BUKAN MEDSOS SAJA?',
       title: (<>Medsos = <em>kontrakan.</em> Website = <em>rumah sendiri.</em></>),
       bullets: [
         'Akun kena suspend → database pelangganmu hilang',
         'Feed tenggelam dalam 48 jam; website bekerja 24/7',
         'Website adalah aset yang kamu miliki penuh',
       ],
     },
     {
       chip: 'CEK GRATIS',
       title: (<>Kami audit kehadiran online bisnismu. <em>1×24 jam.</em></>),
       body: 'Chat kata "AUDIT" ke WhatsApp kami. Kami kirim laporan singkat: apa yang sudah bagus, apa yang bikin kamu kehilangan pelanggan.',
       cta: { left: 'Chat "AUDIT" — gratis', right: '→' },
     },
   ],

  '04-harga': [
     {
       theme: 'orange',
       chip: 'HARGA',
       title: (<>Transparan. Tanpa <em>biaya siluman.</em></>),
       body: 'Semua paket sudah termasuk domain .com, hosting, SSL tahun pertama. Tidak ada “oh ini belum termasuk” di tengah jalan.',
       note: 'geser → lihat 3 paket',
     },
     {
       chip: 'BASIC',
       title: (<>Landing Page <em>Rp2,5jt.</em></>),
       body: 'Satu halaman fokus jualan. Cocok untuk jasa panggilan, produk tunggal, atau bisnis yang baru mau go online.',
       bullets: [
         'Desain responsif HP & laptop',
         'Tombol WhatsApp + form order',
         'Revisi 2 ronde',
         'Jadi dalam 5–7 hari',
       ],
     },
     {
       chip: 'STANDAR · PALING LARIS',
       title: (<>Company Profile <em>Rp4,9jt.</em></>),
       body: 'Website sampai 5 halaman. Bikin bisnismu terlihat mapan & dipercaya — cocok untuk jasa profesional, konsultan, klinik, atau F&B.',
       bullets: [
         'Galeri, peta & Google Maps',
         'SEO dasar (meta + sitemap)',
         'Revisi 3 ronde',
         'Jadi dalam 7–10 hari',
       ],
     },
     {
       chip: 'CUSTOM',
       title: (<>Toko Online & Custom <em>Rp6,9jt+.</em></>),
       body: 'Katalog, keranjang, checkout, sampai fitur sesuai cara bisnismu bekerja: booking, kalkulator harga, member area, dll.',
       bullets: [
         'Panel admin tanpa sentuh kode',
         'Pembayaran QRIS / transfer',
         'Revisi 5 ronde',
         'Jadi dalam 14–21 hari',
       ],
     },
     {
       chip: 'SKEMA BAYAR',
       title: (<>DP 50% → pelunasan <em>setelah jadi.</em></>),
       bullets: [
         'DP di awal untuk kunci slot pengerjaan',
         'Progress bisa dipantau via link preview tiap hari',
         'Pelunasan SETELAH website jadi & kamu setujui',
         'Support gratis 3 bulan setelah live',
       ],
       cta: { left: 'Tanya paket yang cocok', right: '→' },
       note: 'chat “HARGA” ke WhatsApp — link di bio',
     },
   ],

  'cover-06-barberpro': [
     {
       dark: true,
       chip: 'REEL · DEMO LIVE',
       title: (<>Booking anti-bentrok, <em>kami kunci di database.</em></>),
       body: 'Dua pelanggan coba pesan jam yang sama — sistem yang menolak. Notifikasi WhatsApp otomatis + dashboard pendapatan.',
       note: 'barberpro.rrdevs.my.id · dibangun 100% dari tablet Android',
     },
   ],

  'endcard-04-barberpro': [
     {
       dark: true,
       chip: 'GRATIS 15 MENIT',
       title: (<>Sistem serupa, <em>untuk bisnismu.</em></>),
       body: 'Barbershop, salon, servis AC, atau jasa panggilan lain — konsultasi gratis 15 menit via WhatsApp. Kami sketsakan fitur yang paling dulu butuh dibangun, tanpa komitmen.',
       note: 'coba live demo ini: barberpro.rrdevs.my.id',
       cta: { left: 'Chat WhatsApp — gratis', right: '→' },
     },
   ],
   
  '07-kopisenja': [
     {
       chip: 'CASE STUDY · KONSEP',
       title: (<>Kopi Senja: reservasi <em>auto-WhatsApp.</em></>),
       body: 'Konsep F&B pribadi yang kami rancang dari nol. Pelanggan pilih tanggal, jam, jumlah orang → sistem yang menyusun pesan WhatsApp-nya.',
       note: 'kami labeli jujur: konsep pribadi, bukan klien →',
     },
     {
       chip: 'MASALAHNYA',
       title: (<>Pelanggan <em>bingung mau pesan apa.</em></>),
       bullets: [
         'Menu hanya di kertas / DM — susah dibagikan',
         'Reservasi lewat chat sering salah catat: jam, pax, nama',
         'Admin keteteran balas “masih ada slot gak?”',,
       ],
     },
     {
       chip: 'SOLUSINYA',
       title: (<>Menu interaktif + <em>reservasi 1 klik.</em></>),
       bullets: [
         'Menu dengan filter kategori real-time (kopi/non-kopi/snack)',
         'Form reservasi auto-generate pesan WA rapi',
         'Slot terkunci di database — anti bentrok',
       ],
     },
     {
        chip: 'STANDAR KAMI',
        title: (<>Lighthouse <em>95+.</em></>),
        body: 'Semua website yang kami bangun keluar dengan standar yang sama sejak hari pertama: cepat, aksesibel, dan ditemukan di Google. Konsep ini salah satu contohnya.',
        stats: [
          { b: '95+', s: 'Performance' },
          { b: '95+', s: 'Accessibility' },
          { b: '95+', s: 'SEO' },
        ],
      },
     {
       chip: 'GILIRAN KAMU',
       title: (<>Bisnis F&B butuh sistem <em>mirip?</em></>),
       body: 'Konsultasi gratis 15 menit. Kami sketsakan fitur yang paling pas — tanpa komitmen, tanpa bahasa teknis.',
       cta: { left: 'Chat WhatsApp — gratis', right: '→' },
       note: 'coba live: kopisenja.rrdevs.my.id',
     },
   ],

  '08-testimoni': [
     {
       dark: true,
       chip: 'CLIENT STORY · KLIEN NYATA',
       title: (<>Orderan WA nambah. <em>Pelanggan baru gampang percaya.</em></>),
       quote: {
         t: 'Sejak ada web, orderan WA nambah dan pelanggan baru lebih gampang percaya. Ternyata website ngebantu bisnis saya banget.',
         n: 'Charles Pardede · Theo Teknik, Service AC Cakung',
       },
       note: 'coba live: theo-teknik.rrdevs.my.id',
     },
   ],
   
  '09-offer': [
     {
       theme: 'orange',
       chip: 'OFFER · SLOT TERBATAS',
       title: (<>Kamu cerita. <em>Kami sketsa.</em></>),
       body: 'Cukup 15 menit via WhatsApp. Kami balas dengan sketsa sederhana: fitur apa yang paling dulu butuh dibangun, estimasi biaya, dan timeline jujur.',
       note: 'tanpa komitmen · tanpa bahasa teknis',
     },
     {
       chip: 'YANG KAMU DAPAT',
       title: (<>Bukan sales pitch. <em>Peta jalan.</em></>),
       bullets: [
         'Sketsa fitur prioritas untuk bisnismu',
         'Estimasi biaya transparan (paket mana pun)',
         'Timeline realistis + skema DP 50%',
       ],
     },
     {
       chip: 'MULAI SEKARANG',
       title: (<>Slot pengerjaan bulan ini <em>terbatas.</em></>),
       body: 'Kami sengaja batasi jumlah project biar kualitas terjaga. Kalau bisnismu mau naik kelas tahun ini, mulai dari obrolan 15 menit.',
       cta: { left: 'Chat WhatsApp — gratis', right: '→' },
       note: 'balas Sen–Sab 09.00–18.00 WIB',
     },
   ],
}

export default function KitPage() {
  const [key, setKey] = useState('01-perkenalan')
  const SLIDES = CAROUSELS[key]

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
        <h1>🏭 Konten Kit — pilih carousel</h1>
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
            <div className={`kit-slide ${s.dark ? 'dark' : ''} ${s.theme ? `theme-${s.theme}` : ''}`} id={`kit-slide-${i}`}>
              <div className="kit-top">
                <span className="kit-logo">R<b>&amp;</b>R</span>
                <span className="kit-handle">RR DEVS · JAKARTA</span>
              </div>
              <div className="kit-mid">
                <span className="kit-chip">{s.chip}</span>
                <h2 className="kit-title">{s.title}</h2>
                {s.body && <p className="kit-body">{s.body}</p>}
                {s.note && <p className="kit-note">{s.note}</p>}
                {s.bullets && <ul className="kit-bullets">{s.bullets.map((b) => <li key={b}><span>✓</span>{b}</li>)}</ul>}
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
                {s.img && <div className="kit-img"><img src={s.img} alt={s.imgAlt || 'Tangkapan layar situs klien RR Devs'} /></div>}
                {s.quote && <div className="kit-quote"><p>“{s.quote.t}”</p><small>— {s.quote.n}</small></div>}
                {s.cta && <div className="kit-cta"><span>{s.cta.left}</span><span>{s.cta.right}</span></div>}
              </div>
              <div className="kit-foot">
                <span>rrdevs.my.id</span>
                <span>{String(i + 1).padStart(2, '0')} / {String(SLIDES.length).padStart(2, '0')}</span>
              </div>
            </div>
          </div>
          <div className="kit-actions">
            <button onClick={() => download(i)}>⬇ Unduh PNG slide {i + 1}</button>
          </div>
        </section>
      ))}
    </main>
  )
}