import { useEffect, useRef } from 'react'

/* ============================================================
   GENERATOR BANNER / COVER PROFIL WA BUSINESS — 2400×1600
   Zona aman: semua konten berada di blok tengah (y ±438–1156,
   x ±540–1860) agar tahan:
   - crop editor WA (rasio sempit ±1.35:1 → potong kiri-kanan)
   - tampilan profil lebar (±1.85:1 → potong atas-bawah)
   Ganti warna/copy cukup edit C dan teks di draw().
   ============================================================ */
const W = 2400
const H = 1600
const CX = W / 2
const OY = (H - 900) / 2 // offset vertikal: layout 90px->dipusatkan

const C = {
  ink: '#191613',
  cream: '#F5F1E8',
  acc: '#FF4D00',
  lime: '#D8F34F',
  mut: 'rgba(245,241,232,.55)',
}

function rr(ctx, x, y, w, h, r) {
  ctx.beginPath()
  ctx.moveTo(x + r, y)
  ctx.arcTo(x + w, y, x + w, y + h, r)
  ctx.arcTo(x + w, y + h, x, y + h, r)
  ctx.arcTo(x, y + h, x, y, r)
  ctx.arcTo(x, y, x + w, y, r)
  ctx.closePath()
}

function draw(ctx) {
  ctx.clearRect(0, 0, W, H)
  ctx.fillStyle = C.ink
  ctx.fillRect(0, 0, W, H)

  /* plus dekoratif (di dalam zona aman) */
  ctx.fillStyle = 'rgba(245,241,232,.07)'
  ctx.fillRect(560, 110 + OY, 96, 26); ctx.fillRect(595, 75 + OY, 26, 96)
  ctx.fillRect(1760, 700 + OY, 96, 26); ctx.fillRect(1795, 665 + OY, 26, 96)

  /* logo mark R&R */
  rr(ctx, CX - 84, 88 + OY, 168, 92, 18)
  ctx.fillStyle = C.cream
  ctx.fill()
  ctx.font = '800 46px Syne, sans-serif'
  ctx.textBaseline = 'middle'
  ctx.textAlign = 'left'
  const segs = [['R', C.ink], ['&', C.acc], ['R', C.ink]]
  const widths = segs.map((s) => ctx.measureText(s[0]).width)
  const total = widths.reduce((a, b) => a + b, 0)
  let lx = CX - total / 2
  segs.forEach((s, i) => { ctx.fillStyle = s[1]; ctx.fillText(s[0], lx, 134 + OY); lx += widths[i] })

  /* chip lime */
  ctx.font = '700 26px "Space Mono", monospace'
  ctx.textAlign = 'left'
  const chip = 'SISTEM BOOKING UNTUK BARBERSHOP'
  const cw = ctx.measureText(chip).width
  rr(ctx, CX - (cw + 56) / 2, 236 + OY, cw + 56, 64, 32)
  ctx.fillStyle = C.lime
  ctx.fill()
  ctx.fillStyle = C.ink
  ctx.textBaseline = 'middle'
  ctx.fillText(chip, CX - (cw + 56) / 2 + 28, 268 + OY)

  /* headline */
  ctx.textAlign = 'center'
  ctx.textBaseline = 'alphabetic'
  ctx.font = '800 84px Syne, sans-serif'
  ctx.fillStyle = C.cream
  ctx.fillText('Pelanggan pilih jam sendiri.', CX, 470 + OY)
  ctx.fillText('Kapster tidak double-book.', CX, 572 + OY)
  ctx.font = 'italic 800 84px Syne, sans-serif'
  ctx.fillStyle = C.acc
  ctx.fillText('Sistemnya milik tokomu.', CX, 674 + OY)

  /* footer mono */
  ctx.font = '700 26px "Space Mono", monospace'
  ctx.fillStyle = C.mut
  ctx.textAlign = 'center'
  ctx.fillText('rrdevs.my.id  ·  demo: barberpro.rrdevs.my.id  ·  WA 0831-7112-5657', CX, 806 + OY)
}

export default function BannerPage() {
  const ref = useRef(null)

  useEffect(() => {
    const cv = ref.current
    if (!cv) return
    const ctx = cv.getContext('2d')
    let alive = true
    const render = () => { if (alive) draw(ctx) }
    render()
    /* gambar ulang setelah font brand selesai dimuat */
    if (document.fonts && document.fonts.load) {
      Promise.all([
        document.fonts.load('800 84px "Syne"'),
        document.fonts.load('italic 800 84px "Syne"'),
        document.fonts.load('800 46px "Syne"'),
        document.fonts.load('700 26px "Space Mono"'),
      ]).then(render).catch(() => {})
    }
    return () => { alive = false }
  }, [])

  const download = () => {
    const cv = ref.current
    cv.toBlob((blob) => {
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = 'rrdevs-wa-cover-2400x1600.png'
      a.click()
      setTimeout(() => URL.revokeObjectURL(url), 1000)
    }, 'image/png')
  }

  return (
    <main style={{ minHeight: '100vh', background: '#111', color: '#F5F1E8', padding: '96px 24px 80px', fontFamily: 'var(--body)' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        <p style={{ fontFamily: 'var(--mono)', fontSize: 12, letterSpacing: '.2em', textTransform: 'uppercase', color: '#D8F34F' }}>
          Cover / banner profil
        </p>
        <h1 style={{ fontFamily: 'var(--disp)', fontWeight: 800, fontSize: 'clamp(1.6rem, 4vw, 2.6rem)', margin: '10px 0 6px' }}>
          Banner WA Business — 2400×1600
        </h1>
        <p style={{ color: 'rgba(245,241,232,.65)', maxWidth: 640, lineHeight: 1.6 }}>
          Semua konten duduk di zona aman tengah: tahan crop editor WA yang sempit
          (potong kiri-kanan) maupun tampilan profil yang lebar (potong atas-bawah).
          Area kosong di atas-bawah adalah margin sengaja — jangan diisi.
        </p>

        <canvas
          ref={ref}
          width={W}
          height={H}
          style={{ width: '100%', height: 'auto', border: '1px solid rgba(245,241,232,.2)', borderRadius: 12, marginTop: 24, display: 'block' }}
        />

        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 20 }}>
          <button
            onClick={download}
            style={{ background: '#D8F34F', color: '#191613', fontWeight: 800, padding: '14px 22px', borderRadius: 999, border: 'none', cursor: 'pointer', fontSize: 15 }}
          >
            ↓ Unduh PNG 2400×1600
          </button>
        </div>

        <p style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'rgba(245,241,232,.5)', marginTop: 14, lineHeight: 1.7 }}>
          Pasang: WA Business → setelan → profil bisnis → ketuk foto sampul → ganti dari galeri.<br />
          Di editor crop WA, biarkan jendela di tengah — konten sudah dirancang masuk semuanya.
        </p>
      </div>
    </main>
  )
}