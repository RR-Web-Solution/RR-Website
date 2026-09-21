import { useEffect, useState } from 'react'
import Reveal from '../components/ui/Reveal'
import Scramble from '../components/ui/Scramble'
import Counter from '../components/ui/Counter'
import BrowserMock from '../components/home/BrowserMock'
import { STATS, waLink, WA_MSG_BARBER, track } from '../data/content'

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
          <span className="mask"><span className="hero-chip">★ Sistem booking untuk barbershop · Jabodetabek</span></span>
          <h1 className="hero-title">
            <span className="mask"><span>Pelanggan pilih jam sendiri.</span></span>
            <span className="mask"><span>Kapster tidak double-book.</span></span>
            <span className="mask"><span>Bukan aplikasi orang lain — <em><Scramble text="BarberPro." delay={650} /></em></span></span>
          </h1>
          <span className="mask">
            <span className="hero-sub">
              Kami pasang website + sistem booking milik toko kamu. Slot terkunci otomatis,
              notifikasi masuk WhatsApp toko, dan dashboard owner menunjukkan omzet hari ini.
            </span>
          </span>
          <span className="mask">
            <span className="hero-ctas">
              <a className="btn btn-acc" href="https://barberpro.rrdevs.my.id" target="_blank" rel="noreferrer" onClick={() => track('click_demo', { from: 'hero' })}>
                Coba demo booking live <span className="btn-arrow">→</span>
              </a>
              <a className="btn btn-ghost" href={waLink(WA_MSG_BARBER)} target="_blank" rel="noreferrer" onClick={() => track('click_wa', { from: 'hero' })}>
                Chat WhatsApp →
              </a>
            </span>
          </span>
          <span className="mask"><span className="hero-note">// demo live · setup ±14 hari · Jakarta, Bogor, Depok, Tangerang, Bekasi</span></span>
          <div className="hero-stats">
            {STATS.map((s) => (
              <div key={s.label}>
                <b><Counter to={s.value} suffix={s.suffix} /></b>
                <small>{s.label}</small>
              </div>
            ))}
          </div>
        </div>
        <Reveal delay={200} className="hero-vis">
          <BrowserMock />
        </Reveal>
      </div>
    </section>
  )
}
