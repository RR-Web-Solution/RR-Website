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
    { chip: 'CLIENT STORY', title: (<>Dari modal nomor HP, jadi <em>mesin order.</em></>), body: 'Theo Teknik — jasa panggilan AC di Cakung, Jakarta Timur. Sebelumnya cuma mengandalkan promosi mulut ke mulut. Sampai akhirnya sistem sederhana ini mengubah segalanya (Geser ➔)', note: 'klien nyata · izin dipakai →' },
    { chip: 'MASALAHNYA', title: (<>Pelanggan takut <em>kena tipu harga.</em></>), body: 'Di jasa panggilan, kepercayaan adalah produk utamanya.', pains: ['Harga tidak pernah tampil di mana pun, membuat calon klien ragu.', 'Booking lewat telepon & chat — rawan salah catat', 'Tidak ada bukti kerja yang bisa dicek online'] },
    { chip: 'SOLUSINYA', title: (<>Satu jalur booking: <em>WhatsApp.</em></>), bullets: ['Tombol WA langsung di setiap halaman – tanpa formulir ribet.', 'Daftar harga transparan tampil di depan', 'Galeri before-after + testimoni asli'] },
    { chip: 'BUKTINYA', title: (<>Begini tampilannya <em>di HP pelanggan.</em></>), img: '/images/theo-teknik-portfolio.jpg', note: 'coba live: theo-teknik.rrdevs.my.id' },
    { chip: 'HASILNYA', title: (<>Kehadiran digital yang <em>meyakinkan.</em></>), body: (<>Sekarang, Theo Teknik tidak perlu perang harga lagi. Siapa pun yang mencari <em style={{'color': '#FF4D00'}}>service AC terdekat</em> di Google langsung diyakinkan oleh halaman web ini—bahkan sebelum mereka menelepon.</>), quote: { t: 'Sejak ada web, orderan WA nambah dan pelanggan baru lebih gampang percaya.', n: 'Charles Pardede · Theo Teknik' } },
    { chip: 'GILIRAN KAMU', title: (<>Usahamu cerita <em>berikutnya?</em></>), body: 'Konsultasi gratis 15 menit via WhatsApp. Kami sketsakan sistem yang paling cocok — tanpa komitmen.', cta: { left: 'Chat WA — gratis', right: '→' }, note: 'Klik link di bio kami untuk langsung terhubung ke WhatsApp.' },
  ],

  '03-edukasi': [
    { chip: 'EDUKASI', title: (<>5 tanda bisnismu <em>butuh website</em> sekarang.</>), body: 'Kalau ada 2 saja yang kena, jangan ditunda lagi. Geser →' },
    { chip: 'TANDA 01–02', title: (<>Kamu <em>tidak terlihat</em> saat dicari.</>), numbered: ['Calon pelanggan googling nama bisnismu — yang muncul akun orang lain, atau tidak ada apa-apa.', 'Kamu mengetik jawaban yang sama setiap hari: harga, lokasi, jam buka, daftar menu.'] },
    { chip: 'TANDA 03–04', title: (<>Kamu <em>kehilangan</em> tanpa sadar.</>), numbered: ['Pesaing sebelah sudah punya website dan muncul lebih dulu di Google.', 'Order masuk dari 3 channel (WA, DM, telepon) dan rekapnya sering keteteran.'] },
    { chip: 'TANDA 05', title: (<>Kamu mau <em>naik kelas.</em></>), numbered: ['Ikut tender, cari reseller, dipercaya corporate — semuanya minta "company profile". Medsos saja tidak cukup serius.'] },
    { chip: 'KENAPA BUKAN MEDSOS SAJA?', title: (<>Medsos = <em>kontrakan.</em> Website = <em>rumah sendiri.</em></>), bullets: ['Akun kena suspend → database pelangganmu hilang', 'Feed tenggelam dalam 48 jam; website bekerja 24/7', 'Website adalah aset yang kamu miliki penuh'] },
    { chip: 'CEK GRATIS', title: (<>Kami audit kehadiran online bisnismu. <em>1×24 jam.</em></>), body: 'Chat kata "AUDIT" ke WhatsApp kami. Kami kirim laporan singkat: apa yang sudah bagus, apa yang bikin kamu kehilangan pelanggan.', cta: { left: 'Chat "AUDIT" — gratis', right: '→' } },
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
            <div className="kit-slide" id={`kit-slide-${i}`}>
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
                {s.numbered && <ul className="kit-numlist">{s.numbered.map((b, idx) => <li key={b}><b>{idx + 1}</b>{b}</li>)}</ul>}
                {s.cards && <div className="kit-cards">{s.cards.map((c) => <div className="kit-card" key={c.b}><b>{c.b}</b><small>{c.s}</small></div>)}</div>}
                {s.stats && <div className="kit-stats">{s.stats.map((st) => <div key={st.s}><b>{st.b}</b><small>{st.s}</small></div>)}</div>}
                {s.terminal && <div className="kit-terminal">{s.terminal.map(([t, c], idx) => <div key={idx} className={c}>{t}</div>)}</div>}
                {s.img && <div className="kit-img"><img src={s.img} alt="" /></div>}
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