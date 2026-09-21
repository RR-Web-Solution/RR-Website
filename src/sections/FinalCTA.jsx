import Reveal from '../components/ui/Reveal'
import { waLink, WA_MSG_BARBER, track } from '../data/content'

export default function FinalCTA() {
  return (
    <section className="final">
      <div className="ghost-marquee" aria-hidden="true">
        <div className="gm-track">
          {Array(6).fill('DEMO BOOKING LIVE').map((t, i) => (<span key={i}>{t} ✦ </span>))}
        </div>
      </div>
      <div className="wrap final-in">
        <Reveal>
          <p className="final-kick">✦ Demo BarberPro live · setup ±14 hari</p>
          <h2 className="final-title">Siap bikin pelanggan<br />booking sendiri?</h2>
          <p className="final-sub">
            Ceritakan toko barbershopmu 5–10 menit. Kami tunjukkan demo, estimasi biaya, dan apakah cocok
            mulai dari audit gratis atau langsung setup. Tanpa komitmen.
          </p>
          <div className="final-ctas">
            <a className="btn btn-ink" href={waLink(WA_MSG_BARBER)} target="_blank" rel="noreferrer" onClick={() => track('click_wa', { from: 'final_cta' })}>
              Chat WhatsApp sekarang <span className="btn-arrow">→</span>
            </a>
            <a className="final-mail" href="https://barberpro.rrdevs.my.id" target="_blank" rel="noreferrer" onClick={() => track('click_demo', { from: 'final_cta' })}>
              atau coba demo dulu →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
