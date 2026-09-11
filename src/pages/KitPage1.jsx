import { useEffect } from 'react'
import { toPng } from 'html-to-image'
import './KitPage.css'

/* ============================================================
   PABRIK KONTEN RR DEVS
   Mau bikin carousel baru? Cukup edit array SLIDES di bawah.
   Desain, warna, font — jangan disentuh, sudah dikunci sistem.

   Catatan field:
   - titleTight: true  → pakai kalau title panjang dan berisiko
     wrap ke 3 baris (lihat CSS .kit-title.tight untuk aturan mainnya)
   - cards[].photo     → path foto asli (opsional). Kalau kosong,
     atau file-nya gagal dimuat, otomatis fallback ke avatar inisial
     jadi tidak akan pernah tampil rusak/kosong.
   ============================================================ */
const SLIDES = [
  {
    chip: 'PERKENALAN',
    title: (<>Bikin Website Bisnis <em>Tanpa Ribet Agency.</em></>),
    body: 'Duo tech-builder untuk UMKM. Bukan agency besar — bisnismu dihandle langsung dari nol sampai live, tanpa birokrasi.',
    note: 'geser untuk kenalan →',
  },
  {
    chip: 'SIAPA KAMI',
    title: (<>Rafael <em>&</em> Rendy.</>),
    body: 'Kamu selalu tahu siapa yang mengerjakan dan siapa yang harus dihubungi. Tidak ada account manager berantai — yang chat kamu, itu yang kerjakan langsung.',
    cards: [
      { b: 'Rafael', s: 'Desain & Front-End', photo: '/images/rafael.jpg' },
      { b: 'Rendy', s: 'Back-End & Strategi', photo: '/images/rendy.jpg' },
    ],
  },
  {
    chip: 'MISI KAMI',
    title: (<>UMKM <em>naik kelas.</em></>),
    body: 'Tugas kami sederhana: memastikan bisnis hebatmu di dunia offline, bisa ditemukan dan dipercaya oleh jutaan orang secara online — kapan saja.',
    stats: [
      { b: '05+', s: 'project custom, live' },
      { b: '02', s: 'orang, kerja langsung' },
      { b: '100%', s: 'japri ke yang ngerjain' },
    ],
  },
  {
    chip: 'CARA KAMI',
    title: (<>Sistem, bukan sekadar <em>website.</em></>),
    bullets: [
      'Booking & order nyambung langsung ke WhatsApp',
      'Harga transparan di depan — pasti, jujur, tanpa biaya tersembunyi.',
      'Dashboard biar kamu pegang kendali penuh',
    ],
    body: 'Tanpa aplikasi ribet yang bikin pelanggan kabur.',
  },
  {
    chip: '// FUN FACT',
    title: (<>Kami Fokus pada <em>Solusi.</em></>),
    titleTight: true,
    body: 'Bagi kami, keterbatasan bukan alasan. Kami pernah membangun sistem booking kompleks hanya lewat tablet. Jadi, serumit apa pun kebutuhan bisnismu, kami punya cara kreatif untuk mewujudkannya.',
    terminal: [
      ['$ whoami', ''],
      ['rafael@tablet-android:~', 'm'],
      ['$ pkg install nodejs postgresql', ''],
      ['✓ installed — tanpa laptop', 'g'],
      ['$ npm run deploy', ''],
      ['✓ production live 🚀', 'g'],
    ],
  },
  {
    chip: 'MULAI DARI SINI',
    title: (<>Ceritakan bisnismu. <em>15 menit saja.</em></>),
    body: 'Konsultasi gratis via WhatsApp. Kami sketsakan sistem yang paling cocok untuk bisnismu — tanpa komitmen, tanpa bahasa teknis yang membingungkan.',
    cta: { left: 'Chat WhatsApp — gratis', right: '→' },
    note: 'Klik link di bio kami untuk langsung terhubung ke WhatsApp.',
  },
]

function Avatar({ name, photo }) {
  return (
    <div className="kit-card-avatar">
      <span className="kit-card-initial">{name.charAt(0)}</span>
      {photo && (
        <img
          src={photo}
          alt={name}
          onError={(e) => { e.currentTarget.style.display = 'none' }}
        />
      )}
    </div>
  )
}

export default function KitPage() {
  useEffect(() => {
     const onErr = (e) => {
       const im = e.target
       if (!(im instanceof HTMLImageElement) || !im.closest('.kit-slide')) return
       const ph = im.parentElement && im.parentElement.querySelector('.ph')
       if (ph) ph.style.display = 'grid'
       im.remove()
     }
     document.addEventListener('error', onErr, true)
     return () => document.removeEventListener('error', onErr, true)
   }, [])
   
  const download = async (i) => {
    const node = document.getElementById(`kit-slide-${i}`)
    const url = await toPng(node, { pixelRatio: 2, cacheBust: true })
    const a = document.createElement('a')
    a.href = url
    a.download = `rrdevs-intro-${String(i + 1).padStart(2, '0')}.png`
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
        <h1>🏭 Konten Kit — Carousel 01 "Perkenalan"</h1>
        <button onClick={downloadAll}>⬇ Unduh semua slide (berurutan)</button>
      </div>

      {SLIDES.map((s, i) => (
        <section className="kit-block" key={i}>
          <div className="kit-preview">
            <div className="kit-slide" id={`kit-slide-${i}`}>
              <div className="kit-top">
                <span className="kit-logo">R<b>&amp;</b>R</span>
                <span className="kit-handle">@rrdevs.my.id</span>
              </div>
              <div className="kit-mid">
                <span className="kit-chip">{s.chip}</span>
                <h2 className={`kit-title${s.titleTight ? ' tight' : ''}`}>{s.title}</h2>
                {s.body && <p className="kit-body">{s.body}</p>}
                {s.bullets && (
                  <ul className="kit-bullets">
                    {s.bullets.map((b) => <li key={b}><span>✓</span>{b}</li>)}
                  </ul>
                )}
                {s.cards && (
                  <div className="kit-cards">
                    {s.cards.map((c) => (
                      <div className="kit-card" key={c.b}>
                        <Avatar name={c.b} photo={c.photo} />
                        <b>{c.b}</b><small>{c.s}</small>
                      </div>
                    ))}
                  </div>
                )}
                {s.stats && (
                  <div className="kit-stats">
                    {s.stats.map((st) => <div key={st.s}><b>{st.b}</b><small>{st.s}</small></div>)}
                  </div>
                )}
                {s.terminal && (
                  <div className="kit-terminal">
                    {s.terminal.map(([t, c], idx) => (
                      <div key={idx} className={c}>{t}</div>
                    ))}
                  </div>
                )}
                {s.cta && (
                  <div className="kit-cta"><span>{s.cta.left}</span><span>{s.cta.right}</span></div>
                )}
                {s.note && <p className="kit-note">{s.note}</p>}
              </div>
              <div className="kit-foot">
                <span>rrdevs.my.id</span>
                <span>{String(i + 1).padStart(2, '0')} / 06</span>
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