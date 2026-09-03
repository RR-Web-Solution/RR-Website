import { useState } from 'react'
import Reveal from '../components/ui/Reveal'
import SectionHead from '../components/ui/SectionHead'
import { SERVICES, waLink } from '../data/content'

export default function Services() {
  const [open, setOpen] = useState(2)

  return (
    <section className="sec services" id="layanan">
      <div className="wrap">
        <SectionHead no="02" kicker="Layanan" title="Apa yang bisa kami buatkan untukmu?" desc="Klik tiap layanan untuk lihat detailnya. Semua bisa disesuaikan dengan budget Anda." />
        <div className="svc-list">
          {SERVICES.map((s, i) => (
            <Reveal key={s.n} delay={i * 70}>
              <div className={`svc ${open === i ? 'open' : ''}`}>
                <button
                  type="button"
                  className="svc-head"
                  onClick={() => setOpen(open === i ? -1 : i)}
                  aria-expanded={open === i}
                  aria-controls={`service-panel-${i}`}
                >
                  <span className="svc-n">{s.n}</span>
                  <span className="svc-t">
                    {s.title}
                    {s.hot && <em className="svc-hot">★ UNGGULAN</em>}
                  </span>
                  <span className="svc-price">{s.price}</span>
                  <span className="svc-x" aria-hidden="true">+</span>
                </button>
                <div className="svc-body" id={`service-panel-${i}`}>
                  <div className="svc-body-in">
                    <p>{s.desc}</p>
                    <div className="svc-tags">{s.tags.map((t) => <span key={t}>{t}</span>)}</div>
                    <a href={waLink(`Halo, saya tertarik layanan ${s.title} (${s.price}). Bisa dibantu?`)} target="_blank" rel="noreferrer">
                      Konsultasi layanan ini →
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}