import Reveal from '../components/ui/Reveal'
import { WHY } from '../data/content'

export default function Why() {
  return (
    <section className="sec why" id="keunggulan">
      <div className="wrap why-grid">
        <div className="why-left">
          <div className="why-sticky">
            <Reveal>
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
            </Reveal>
          </div>
        </div>
        <div className="why-right">
          {WHY.map((w, i) => (
            <Reveal key={w.n} delay={i * 90}>
              <div className="why-item">
                <span className="why-n">{w.n}</span>
                <div>
                  <h3>{w.title}</h3>
                  <p>{w.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}