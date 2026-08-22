import Reveal from '../components/ui/Reveal'
import SectionHead from '../components/ui/SectionHead'
import { PORTFOLIO, waLink } from '../data/content'

export default function Portfolio() {
  return (
    <section className="sec portfolio" id="portofolio">
      <div className="wrap">
        <SectionHead no="06" kicker="Portofolio" title="Karya yang sudah kami rilis" desc="Beberapa proyek pilihan — dari website custom sampai landing page. Scroll pelan-pelan." />
        <div className="pf-list">
          {PORTFOLIO.map((p, i) => (
            <Reveal key={p.title}>
              <div className={`pf-row ${i % 2 ? 'rev' : ''}`}>
                <div className="pf-img">
                  <img src={p.imageUrl} alt={`Website ${p.title}`} loading="lazy" />
                  <span className="pf-tag">{p.type}</span>
                </div>
                <div className="pf-info">
                  <p className="pf-meta">{String(i + 1).padStart(2, '0')} · {p.year}</p>
                  <a href={p.liveUrl}>
                     <h3>{p.title}</h3>
                  </a>
                  <p>{p.desc}</p>
                  <div className="pf-tags">{p.tags.map((t) => <span key={t}>{t}</span>)}</div>
                  <div className="pf-metric">
                    <b>{p.metric}</b>
                    <small>{p.metricLabel}</small>
                  </div>
                  <a href={waLink(`Halo, saya mau website seperti ${p.title}. Bisa dibantu?`)} target="_blank" rel="noreferrer">
                    Mau seperti ini? Ceritakan bisnismu →
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}