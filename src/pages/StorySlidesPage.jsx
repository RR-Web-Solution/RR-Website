import { useRef, useState, useEffect } from 'react'
import html2canvas from 'html2canvas'
import JSZip from 'jszip'
import {
  SERVICES, PLANS, CARE_PRICE, PORTFOLIO, TESTIMONIALS, PROCESS, CASE_STUDIES, fmt,
} from '../data/content'
import './StorySlides.css'

const LOGO = '/web-app-manifest-512x512.png'
const clean = (u = '') => { const s = u.replace(/\s+/g, ''); return s.startsWith('/') ? s : `/${s}` }
const slug = (s = '') => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

const loadScript = (src) => new Promise((resolve, reject) => {
  if (document.querySelector(`script[src="${src}"]`)) return resolve()
  const s = document.createElement('script')
  s.src = src
  s.onload = resolve
  s.onerror = reject
  document.head.appendChild(s)
})

export default function StorySlidesPage() {
  const wrapRef = useRef(null)
  const [busy, setBusy] = useState(false)
  const [status, setStatus] = useState('')
  // Buang gambar yang 404 dari DOM + munculkan placeholder .ph
   // (error event tidak bubble → pakai capture di document)
   useEffect(() => {
     const onErr = (e) => {
       const im = e.target
       if (!(im instanceof HTMLImageElement) || !im.closest('.slide')) return
       const ph = im.parentElement && im.parentElement.querySelector('.ph')
       if (ph) ph.style.display = 'grid'
       im.remove()
     }
     document.addEventListener('error', onErr, true)
     return () => document.removeEventListener('error', onErr, true)
   }, [])

  let _n = 0
  const nm = (g, s) => `${String(++_n).padStart(2, '0')}-${g}-${s}`

  const services = [...SERVICES].sort((a, b) => a.n.localeCompare(b.n))
  const priceFor = (s) => {
    if (/maintenance/i.test(s.title)) return `Rp${fmt(CARE_PRICE)}/BULAN`
    const plan = /landing/i.test(s.title) ? PLANS[0]
      : /custom/i.test(s.title) ? PLANS.find((p) => /custom/i.test(p.name))
        : PLANS.find((p) => /standar/i.test(p.name))
    return `MULAI Rp${fmt(plan.price)}`
  }
  const dur = (p) => (p.feats.find((f) => /pengerjaan/i.test(f)) || '').replace('Pengerjaan ', '')
  const funFact = CASE_STUDIES.find((c) => c.id === 'barberpro')?.footnote || ''

   const SLIDE_W = 1080
   const SLIDE_H = 1920
   const RATIO = 2   // hasil 2160×3840, tajam untuk IG

   async function exportAll() {
     setBusy(true)
     setStatus('memuat library…')
     try {
       await loadScript('https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js')
       await loadScript('https://cdnjs.cloudflare.com/ajax/libs/html-to-image/1.11.11/html-to-image.min.js')
       await document.fonts.ready

       // Mode export: matikan margin auto biar layout clone presisi 1:1
       document.body.classList.add('exporting')

       const zip = new window.JSZip()
       const slides = [...wrapRef.current.querySelectorAll('.slide')]
       const gagal = []

       for (let i = 0; i < slides.length; i++) {
         const name = slides[i].dataset.name
         setStatus(`merender ${i + 1}/${slides.length}…`)
         try {
           const dataUrl = await window.htmlToImage.toPng(slides[i], {
             // KUNCI EKSLISIT — canvas & layout dipaksa sama-sama 1080×1920,
             // tidak ada lagi salah ukur content-box vs border-box
             width: SLIDE_W,
             height: SLIDE_H,
             canvasWidth: SLIDE_W * RATIO,
             canvasHeight: SLIDE_H * RATIO,
             pixelRatio: RATIO,
             cacheBust: true,
             style: {
               margin: '0',
               transform: 'none',
               width: `${SLIDE_W}px`,
               height: `${SLIDE_H}px`,
             },
           })
           const blob = await (await fetch(dataUrl)).blob()
           zip.file(`${name}.png`, blob)
         } catch (e) {
           console.error('Slide gagal:', name, e)
           gagal.push(name)   // slide lain tetap jalan
         }
       }

       document.body.classList.remove('exporting')

       const url = URL.createObjectURL(await zip.generateAsync({ type: 'blob' }))
       const a = document.createElement('a')
       a.href = url
       a.download = 'rrdevs-story-slides.zip'
       a.click()
       setStatus(gagal.length ? `selesai · ${gagal.length} slide gagal ❌` : 'selesai ✅')
     } catch (err) {
       console.error(err)
       document.body.classList.remove('exporting')
       setStatus('gagal — cek konsol')
     } finally {
       document.body.classList.remove('exporting')
       setBusy(false)   // tombol tidak akan pernah terkunci lagi
     }
   }

  return (
    <div className="ss-page">
      <div className="bar">
        <span>RR DEVS — STORY EXPORT (DINAMIS)</span>
        <button onClick={exportAll} disabled={busy}>{busy ? status : '⬇ UNDUH SEMUA SLIDE (ZIP)'}</button>
      </div>
      <div className="bar-guide">
        <b>Panduan sticker tautan saat upload ke IG:</b>
        {PORTFOLIO.map((p, i) => (
          <span key={p.title}>{String(i + 2).padStart(2, '0')}-porto-{slug(p.title)} → {p.liveUrl}</span>
        ))}
      </div>

      <div ref={wrapRef}>
        {/* ===== LAYANAN ===== */}
        {services.map((s, i) => (
          <div className="slide" data-name={nm('layanan', i + 1)} key={s.n}>
            <img className="logo" src={LOGO} alt="" />
            <span className="chip">LAYANAN {s.n}{s.hot ? ' · UNGGULAN' : ''}</span>
            <h2>{s.title}</h2>
            <p className="sub">{s.slide.sub}</p>
            <ul className="bullets">{s.slide.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
            <span className="price">{priceFor(s)}</span>
            <footer><span>@rrdevs.my.id</span><span>{i + 1}/{services.length}</span></footer>
          </div>
        ))}

        {/* ===== PORTOFOLIO ===== */}
        <div className="slide ink" data-name={nm('porto', 'intro')}>
          <img className="logo" src={LOGO} alt="" />
          <span className="chip">PORTOFOLIO</span>
          <h2>Bukti, bukan janji.</h2>
          <p className="sub">Semua project di bawah LIVE dan bisa kamu coba sendiri sekarang juga. Bukan screenshot janji — bukti yang bisa diklik. Geser →</p>
          <div className="statrow">
            <span>{PORTFOLIO.length}+ PROJECT LIVE</span>
            <span>SEMUA BISA DICOBA</span>
            <span>HASIL TERUKUR</span>
          </div>
          <footer><span>@rrdevs.my.id</span><span>1/{PORTFOLIO.length + 1}</span></footer>
        </div>
        {PORTFOLIO.map((p, i) => (
          <div className="slide ink" data-name={nm('porto', slug(p.title))} key={p.title}>
            <img className="logo" src={LOGO} alt="" />
            <span className="chip">{p.title.toUpperCase()}</span>
            <div className="frame"><img src={clean(p.imageUrl)} alt="" /></div>
            <p className="cap">{p.metric} · {p.metricLabel}</p>
            <p className="tapline">🔗 tap tautan untuk coba live</p>
            <footer><span>@rrdevs.my.id</span><span>{i + 2}/{PORTFOLIO.length + 1}</span></footer>
          </div>
        ))}

        {/* ===== HARGA ===== */}
        <div className="slide" data-name={nm('harga', 1)}>
          <img className="logo" src={LOGO} alt="" />
          <span className="chip">HARGA</span>
          <h2>Transparan. Tanpa biaya siluman.</h2>
          <p className="sub">Harga kami tulis terbuka karena waktu kamu berharga. Semua paket sudah termasuk domain + hosting tahun pertama.</p>
          <ul className="bullets">
            <li>Tidak ada biaya tersembunyi — semua tertulis di invoice</li>
            <li>Penawaran tertulis sebelum DP</li>
            <li>Harga terkunci sejak DP — tidak naik di tengah jalan</li>
          </ul>
          <footer><span>@rrdevs.my.id</span><span>1/4</span></footer>
        </div>
        <div className="slide" data-name={nm('harga', 2)}>
          <img className="logo" src={LOGO} alt="" />
          <span className="chip">DAFTAR PAKET</span>
          <h2 className="sm">Pilih sesuai tahap bisnismu</h2>
          {PLANS.map((p, i) => (
            <div className={`prow r${i + 1} ${p.hot ? 'hot' : ''}`} key={p.name}>
              {p.hot && <span className="flag">PALING LARIS</span>}
              <div><div className="pn">{p.name.toUpperCase()}</div><div className="pd">{p.sub} · {dur(p)}</div></div>
              <div className="pp">Rp{fmt(p.price)}</div>
            </div>
          ))}
          <div className="prow r4">
            <div><div className="pn">MAINTENANCE</div><div className="pd">Perawatan & update bulanan</div></div>
            <div className="pp">Rp{fmt(CARE_PRICE)}<small>/bln</small></div>
          </div>
          <footer><span>@rrdevs.my.id</span><span>2/4</span></footer>
        </div>
        <div className="slide" data-name={nm('harga', 3)}>
          <img className="logo" src={LOGO} alt="" />
          <span className="chip">SKEMA BAYAR</span>
          <h2>Adil untuk kedua pihak</h2>
          <ul className="bullets">
            <li>50% DP untuk kunci slot & mulai desain</li>
            <li>50% pelunasan HANYA setelah website jadi & kamu setujui</li>
            <li>Paket Custom bisa dicicil 2× termin</li>
            <li>Belum puas sebelum live? revisi sampai sesuai paketmu</li>
          </ul>
          <footer><span>@rrdevs.my.id</span><span>3/4</span></footer>
        </div>
        <div className="slide" data-name={nm('harga', 4)}>
          <img className="logo" src={LOGO} alt="" />
          <span className="chip">SUDAH TERMASUK</span>
          <h2 className="sm">Di semua paket, tanpa kecuali</h2>
          <ul className="bullets tight">
            <li>Domain .com + hosting + SSL (1 tahun)</li>
            <li>Desain responsif HP & laptop</li>
            <li>Revisi 2–10× sesuai paket</li>
            <li>Copywriting menjual di setiap halaman</li>
            <li>Pelatihan cara kelola website</li>
            <li>Support gratis 3 bulan setelah live</li>
          </ul>
          <span className="price">CHAT WA → KONSULTASI GRATIS</span>
          <footer><span>@rrdevs.my.id</span><span>4/4</span></footer>
        </div>

        {/* ===== TESTIMONI ===== */}
        {TESTIMONIALS.map((t, i) => (
          <div className="slide" data-name={nm('testimoni', i + 1)} key={t.name}>
            <img className="logo" src={LOGO} alt="" />
            <span className="qmark">“</span>
            <p className="quote">{t.slideQuote}</p>
            <img className="qava" src={clean(t.imageUrl)} alt="" />
            <p className="qname">— {t.name}</p>
            <p className="qsmall">{t.biz} · klien nyata</p>
            <footer><span>@rrdevs.my.id</span><span>{i + 1}/{TESTIMONIALS.length + 1}</span></footer>
          </div>
        ))}
        <div className="slide" data-name={nm('testimoni', 'cta')}>
          <img className="logo" src={LOGO} alt="" />
          <span className="chip">TESTIMONI</span>
          <h2>Kamu cerita berikutnya?</h2>
          <p className="sub">Bulan ini kami buka 2 slot case study untuk bisnis Jabodetabek. Hasil serius, cerita jujur — dan kamu approve sebelum kami publish.</p>
          <ul className="bullets">
            <li>Proses terdokumentasi dari hari pertama</li>
            <li>Testimoni hanya dipakai dengan izinmu</li>
          </ul>
          <span className="price">CHAT WA → LINK DI BIO</span>
          <footer><span>@rrdevs.my.id</span><span>{TESTIMONIALS.length + 1}/{TESTIMONIALS.length + 1}</span></footer>
        </div>

        {/* ===== PROSES ===== */}
        <div className="slide" data-name={nm('proses', 1)}>
          <img className="logo" src={LOGO} alt="" />
          <span className="chip">PROSES</span>
          <h2>Dari chat sampai live, 4 langkah.</h2>
          <p className="sub">Rata-rata 3–21 hari tergantung paket. Tanpa drama, tanpa hilang kabar — progress bisa kamu pantau tiap hari.</p>
          <div className="statrow">
            <span>4 LANGKAH</span><span>3–21 HARI</span><span>UPDATE TIAP HARI</span>
          </div>
          <footer><span>@rrdevs.my.id</span><span>1/{PROCESS.length + 1}</span></footer>
        </div>
        {PROCESS.map((p, i) => (
           <div className="slide step" data-name={nm('proses', i + 2)} key={p.n}>
             <img className="logo" src={LOGO} alt="" />
             <div className="step-progress">
               <span className="lbl">LANGKAH {i + 1}/{PROCESS.length}</span>
               <span className="dots">
                 {PROCESS.map((_, d) => <i key={d} className={d <= i ? 'on' : ''} />)}
               </span>
             </div>
             <span className="stepnum">{p.n}</span>
             <h2>{p.t}</h2>
             <p className="sub">{p.d}</p>
             <ul className="bullets">
               {p.points.map((b) => <li key={b}>{b}</li>)}
             </ul>
             <span className="step-next">
               {i < PROCESS.length - 1
                 ? `Selanjutnya → ${PROCESS[i + 1].n} ${PROCESS[i + 1].t}`
                 : 'Selanjutnya → website-mu LIVE 🎉'}
             </span>
             <footer><span>@rrdevs.my.id</span><span>{i + 2}/{PROCESS.length + 1}</span></footer>
           </div>
         ))}

        {/* ===== TIM ===== */}
        <div className="slide" data-name={nm('tim', 1)}>
          <img className="logo" src={LOGO} alt="" />
          <span className="chip">TIM</span>
          <h2>Dua orang. Satu misi.</h2>
          <p className="sub">RR Devs = Rafael & Rendy. Bukan agency besar — dan itu justru kelebihan kami: kamu bicara langsung dengan orang yang mengerjakan websitemu, dari hari pertama sampai setelah live.</p>
          <div className="statrow">
            <span>2 FOUNDER</span><span>{PORTFOLIO.length}+ PROJECT</span><span>3 BULAN SUPPORT</span>
          </div>
          <footer><span>@rrdevs.my.id</span><span>1/4</span></footer>
        </div>
        <div className="slide ink" data-name={nm('tim', 'rafael')}>
          <img className="logo" src={LOGO} alt="" />
          <span className="chip">👋 RAFAEL</span>
          <div className="frame sq"><img data-opt src="images/rafael.jpg" alt="" /><div className="ph">FOTO RAFAEL 1:1</div></div>
          <p className="cap">Desain & Front-End · yang bikin website-mu enak dilihat dan kencang</p>
          <footer><span>@rrdevs.my.id</span><span>2/4</span></footer>
        </div>
        <div className="slide ink" data-name={nm('tim', 'rendy')}>
          <img className="logo" src={LOGO} alt="" />
          <span className="chip">👋 RENDY</span>
          <div className="frame sq"><img data-opt src="images/rendy.jpg" alt="" /><div className="ph">FOTO RENDY 1:1</div></div>
          <p className="cap">Back-End & Strategi · yang bikin sistem-mu aman dan nggak gampang rusak</p>
          <footer><span>@rrdevs.my.id</span><span>3/4</span></footer>
        </div>
        <div className="slide ink ff" data-name={nm('tim', 'funfact')}>
          <img className="logo" src={LOGO} alt="" />
          <span className="chip">// FUN FACT</span>
          <h2>Kami nggak nunggu kondisi ideal buat mulai.</h2>
          <p className="sub">{funFact} Bisnis kamu juga nggak perlu nunggu "nanti" buat punya sistem yang bener.</p>
          <footer><span>@rrdevs.my.id</span><span>4/4</span></footer>
        </div>
      </div>
    </div>
  )
}