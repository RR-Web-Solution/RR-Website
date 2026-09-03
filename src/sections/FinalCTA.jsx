import Reveal from '../components/ui/Reveal'
import { waLink } from '../data/content'

export default function FinalCTA() {
  return (
    <section className="final">
      <div className="ghost-marquee" aria-hidden="true">
        <div className="gm-track">
          {Array(6).fill('KONSULTASI GRATIS').map((t, i) => <span key={i}>{t} ✦</span>)}
        </div>
      </div>
      <div className="wrap final-in">
        <Reveal>
          <p className="final-kick">✦ Slot pengerjaan bulan ini tinggal sedikit</p>
          <h2 className="final-title">Siap punya<br />website?</h2>
          <p className="final-sub">Ceritakan bisnismu 5 menit saja — kami kasih gambaran desain, estimasi biaya, dan timeline. Gratis, tanpa komitmen.</p>
          <div className="final-ctas">
            <a className="btn btn-ink" href={waLink('Halo RR Devs! Saya siap punya website 🚀 Bisa dibantu?')} target="_blank" rel="noreferrer">
              Hubungi Kami Sekarang <span className="btn-arrow">→</span>
            </a>
            <a className="final-mail" href="mailto:rrdevs.team@gmail.com">atau email: rrdevs.team@gmail.com</a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}