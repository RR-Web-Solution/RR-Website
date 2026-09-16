import { Link } from 'react-router-dom'
import { CASE_STUDIES, waLink } from '../data/content'
import Footer from '../components/layout/Footer'
import Reveal from '../components/ui/Reveal'
import './SolusiPage.css'

const SHOW = ['theo-teknik', 'barberpro', 'architect-studio', 'toko-percetakan', 'kopi-senja']

export default function SolusiPage() {
  const projects = SHOW.map(id => CASE_STUDIES.find(c => c.id === id)).filter(Boolean)

  return (
    <>
      <main className="solusi">
        <section className="solusi-hero">
          <Reveal>
            <p className="solusi-kicker">rrdevs.my.id</p>
            <h1 className="solusi-title">Solusi Digital untuk Bisnis Jabodetabek</h1>
            <p className="solusi-sub">
              Kami bantu bisnis lokal go digital — dari landing page simpel sampai sistem booking custom.
              Semua bisa dicoba langsung, tanpa janji manis.
            </p>
          </Reveal>
        </section>

        <section className="solusi-projects">
          <Reveal>
            <p className="solusi-section-label">Yang sudah kami bangun</p>
          </Reveal>
          <div className="solusi-grid">
            {projects.map((p, i) => (
              <Reveal key={p.id} delay={i * 0.08}>
                <article className="solusi-card">
                  <div className="solusi-card-img">
                    <img src={p.shot} alt={p.title} loading="lazy" />
                    <span className={`solusi-badge ${p.kind === 'client' ? 'solusi-badge--client' : ''}`}>
                      {p.kindLabel}
                    </span>
                  </div>
                  <div className="solusi-card-body">
                    <h3 className="solusi-card-title">{p.emoji} {p.title}</h3>
                    <p className="solusi-card-tagline">{p.tagline}</p>
                    <ul className="solusi-card-highlights">
                      {p.highlights.slice(0, 3).map((h, j) => (
                        <li key={j}>{h}</li>
                      ))}
                    </ul>
                    <div className="solusi-card-stack">
                      {p.stack.map((s, j) => (
                        <span key={j} className="solusi-tech">{s}</span>
                      ))}
                    </div>
                    {p.quote && (
                      <blockquote className="solusi-card-quote">
                        <p>"{p.quote.text}"</p>
                        <cite>— {p.quote.name}, {p.quote.biz}</cite>
                      </blockquote>
                    )}
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="solusi-card-link"
                    >
                      Coba langsung →
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="solusi-cta">
          <Reveal>
            <p className="solusi-cta-label">Siap mulai?</p>
            <h2 className="solusi-cta-title">Bicara kebutuhanmu — gratis, tanpa komitmen.</h2>
            <p className="solusi-cta-sub">
              Kami dengarkan dulu. Kalau cocok, kami bikin penawaran. Kalau belum, setidaknya kamu dapat insight gratis.
            </p>
            <a
              href={waLink('Halo RR-Devs, saya tertarik dengan solusi digital untuk bisnis saya.')}
              target="_blank"
              rel="noopener noreferrer"
              className="solusi-wa-btn"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat WhatsApp
            </a>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  )
}
