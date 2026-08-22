import { useEffect, useState } from 'react'
import Reveal from '../components/ui/Reveal'
import Scramble from '../components/ui/Scramble'
import Counter from '../components/ui/Counter'
import BrowserMock from '../components/home/BrowserMock'
import { waLink } from '../data/content'

export default function Hero() {
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
        <Reveal delay={200} className="hero-vis">
          <BrowserMock />
        </Reveal>
      </div>
    </section>
  )
}